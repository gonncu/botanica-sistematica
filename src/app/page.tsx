"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Session } from "@supabase/supabase-js";
import AuthPanel from "@/components/AuthPanel";
import Quiz from "@/components/Quiz";
import RecordsList from "@/components/RecordsList";
import SpeciesForm from "@/components/SpeciesForm";
import {
  getPhotoRecords,
  savePhotoRecord,
  saveQuizSession,
} from "@/lib/supabaseOperations";
import { supabase } from "@/lib/supabase";
import { Especie, PhotoRecord, PlantFormData } from "@/types";

type PageState = "quiz" | "form" | "complete";

const ALLOWED_DOMAIN = "@agro.uba.ar";

export default function Home() {
  const [pageState, setPageState] = useState<PageState>("quiz");
  const [selectedEspecie, setSelectedEspecie] = useState<Especie | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [records, setRecords] = useState<PhotoRecord[]>([]);
  const [isRecordsLoading, setIsRecordsLoading] = useState(false);
  const [lastPlantNumber, setLastPlantNumber] = useState<number | null>(null);

  const user = session?.user || null;
  const userEmail = user?.email || "";
  const isAllowedEmail = userEmail.toLowerCase().endsWith(ALLOWED_DOMAIN);
  const defaultUserName = useMemo(() => userEmail.split("@")[0] || "", [userEmail]);

  const loadRecords = useCallback(async () => {
    if (!user || !isAllowedEmail) return;

    setIsRecordsLoading(true);
    try {
      const userRecords = await getPhotoRecords();
      setRecords(userRecords);
    } catch (error) {
      console.error("Error cargando registros:", error);
    } finally {
      setIsRecordsLoading(false);
    }
  }, [isAllowedEmail, user]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setIsAuthLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
      setPageState("quiz");
      setSelectedEspecie(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadRecords();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadRecords]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setRecords([]);
    setLastPlantNumber(null);
  };

  const handleQuizComplete = async (especie: Especie) => {
    setSelectedEspecie(especie);
    setPageState("form");

    if (user) {
      await saveQuizSession(especie.id, {}, user.id);
    }
  };

  const handleFormSubmit = async (formData: PlantFormData) => {
    if (!selectedEspecie || !user) return;

    try {
      const savedRecord = await savePhotoRecord(selectedEspecie.id, formData, user.id);
      setLastPlantNumber(savedRecord.plantNumber);

      await loadRecords();
      setPageState("complete");
    } catch (error) {
      console.error("Error en el proceso:", error);
      alert(
        `Error: ${error instanceof Error ? error.message : "Error desconocido"}`
      );
    }
  };

  if (isAuthLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
        <p className="text-center text-gray-700">Cargando...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            🌿 Identificador de Plantas
          </h1>
          <p className="text-gray-700">
            Facultad de Agronomía - UBA | Botánica Sistemática
          </p>
        </header>

        {!user && <AuthPanel />}

        {user && !isAllowedEmail && (
          <section className="mx-auto max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Mail no habilitado
            </h2>
            <p className="text-gray-700 mb-5">
              Esta app usa cuentas institucionales terminadas en {ALLOWED_DOMAIN}.
            </p>
            <button
              onClick={handleSignOut}
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            >
              Salir
            </button>
          </section>
        )}

        {user && isAllowedEmail && (
          <>
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-sm text-gray-700">Sesión iniciada</p>
                <p className="font-medium text-gray-800">{userEmail}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="self-start sm:self-auto bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Cerrar sesión
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                {pageState === "quiz" && (
                  <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                      <Quiz onComplete={handleQuizComplete} />
                    </div>
                  </div>
                )}

                {pageState === "form" && selectedEspecie && (
                  <div className="flex justify-center">
                    <SpeciesForm
                      especie={selectedEspecie}
                      defaultUserName={defaultUserName}
                      onSubmit={handleFormSubmit}
                    />
                  </div>
                )}

                {pageState === "complete" && selectedEspecie && (
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-green-700 mb-4">
                      ✅ Registro completado
                    </h2>
                    <p className="text-gray-700 mb-6">
                      Tu registro quedó guardado. Podés imprimir la etiqueta desde Mis plantas.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
                      {lastPlantNumber && (
                        <p className="text-sm font-medium text-green-800 mb-1">
                          Planta N° {lastPlantNumber}
                        </p>
                      )}
                      <p className="text-lg font-bold text-green-700">
                        {selectedEspecie.nombreCientifico}
                      </p>
                      <p className="text-gray-700">{selectedEspecie.nombreVulgar}</p>
                    </div>
                    <button
                      onClick={() => {
                        setPageState("quiz");
                        setSelectedEspecie(null);
                      }}
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium"
                    >
                      Identificar otra planta
                    </button>
                  </div>
                )}
              </div>

              <RecordsList records={records} isLoading={isRecordsLoading} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
