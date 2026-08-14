"use client";

import { useState } from "react";
import Quiz from "@/components/Quiz";
import SpeciesForm from "@/components/SpeciesForm";
import { generatePDF } from "@/lib/pdfGenerator";
import { savePhotoRecord } from "@/lib/supabaseOperations";
import { Especie } from "@/types";

type PageState = "quiz" | "form" | "complete";

interface FormData {
  nombreUsuario: string;
  fecha: string;
  lugar: string;
  coordenadas?: string;
  observaciones?: string;
  foto?: File | null;
}

export default function Home() {
  const [pageState, setPageState] = useState<PageState>("quiz");
  const [selectedEspecie, setSelectedEspecie] = useState<Especie | null>(null);

  const handleQuizComplete = (especie: Especie) => {
    setSelectedEspecie(especie);
    setPageState("form");
  };

  const handleFormSubmit = async (formData: FormData) => {
    if (!selectedEspecie) return;

    try {
      // 1. Guardar en Supabase
      const recordId = await savePhotoRecord(selectedEspecie.id, formData);
      console.log("Registro guardado en Supabase:", recordId);

      // 2. Generar PDF
      await generatePDF(selectedEspecie, formData, 1); // TODO: Obtener número real de planta

      // 3. Mostrar éxito
      setPageState("complete");
    } catch (error) {
      console.error("Error en el proceso:", error);
      alert(
        `Error: ${error instanceof Error ? error.message : "Error desconocido"}`
      );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            🌿 Identificador de Plantas
          </h1>
          <p className="text-gray-600">
            Facultad de Agronomía - UBA | Botánica Sistemática
          </p>
        </header>

        {/* Contenido según el estado */}
        {pageState === "quiz" && (
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <Quiz onComplete={handleQuizComplete} />
            </div>
          </div>
        )}

        {pageState === "form" && selectedEspecie && (
          <div className="flex justify-center">
            <SpeciesForm especie={selectedEspecie} onSubmit={handleFormSubmit} />
          </div>
        )}

        {pageState === "complete" && selectedEspecie && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              ✅ ¡Registro Completado!
            </h2>
            <p className="text-gray-600 mb-6">
              Tu ficha se ha generado correctamente. Puedes imprimir y recortar la ficha
              en formato de cartelito.
            </p>
            <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
              <p className="text-lg font-bold text-green-700">
                {selectedEspecie.nombreCientifico}
              </p>
              <p className="text-gray-600">{selectedEspecie.nombreVulgar}</p>
            </div>
            <button
              onClick={() => {
                setPageState("quiz");
                setSelectedEspecie(null);
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium"
            >
              Identificar Otra Planta
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
