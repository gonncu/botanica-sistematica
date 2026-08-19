"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface AuthPanelProps {
  onSignedIn?: () => void;
}

type AuthMode = "sign-in" | "sign-up";

const ALLOWED_DOMAIN = "@agro.uba.ar";

export default function AuthPanel({ onSignedIn }: AuthPanelProps) {
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const normalizedEmail = email.trim().toLowerCase();
  const isAgroEmail = normalizedEmail.endsWith(ALLOWED_DOMAIN);
  const isSignUp = mode === "sign-up";

  const validateForm = () => {
    if (!isAgroEmail) {
      setStatus("Ingresá con tu correo institucional @agro.uba.ar.");
      return false;
    }

    if (password.length < 6) {
      setStatus("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }

    return true;
  };

  const handlePasswordSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    setIsSubmitting(true);
    const { error } = isSignUp
      ? await supabase.auth.signUp({
          email: normalizedEmail,
          password,
          options: {
            emailRedirectTo: window.location.origin,
          },
        })
      : await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });
    setIsSubmitting(false);

    if (error) {
      setStatus(error.message);
      return;
    }

    setStatus(
      isSignUp
        ? "Cuenta creada. Si Supabase pide confirmación, revisá tu correo."
        : "Sesión iniciada."
    );
    onSignedIn?.();
  };

  const handleMagicLink = async () => {
    setStatus("");

    if (!isAgroEmail) {
      setStatus("Ingresá con tu correo institucional @agro.uba.ar.");
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: normalizedEmail,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    setIsSubmitting(false);

    if (error) {
      setStatus(`No se pudo enviar el enlace: ${error.message}`);
      return;
    }

    setStatus("Te enviamos un enlace de acceso. Revisá tu correo.");
  };

  return (
    <section className="mx-auto max-w-md bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Ingresar</h2>
      <p className="text-gray-600 mb-5">
        Usá tu correo institucional para guardar tus plantas y recuperar tus registros.
      </p>

      <div className="grid grid-cols-2 rounded border border-gray-200 overflow-hidden mb-5">
        <button
          type="button"
          onClick={() => {
            setMode("sign-in");
            setStatus("");
          }}
          className={`px-4 py-2 text-sm font-medium ${
            mode === "sign-in"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Entrar
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("sign-up");
            setStatus("");
          }}
          className={`px-4 py-2 text-sm font-medium ${
            mode === "sign-up"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Crear cuenta
        </button>
      </div>

      <form onSubmit={handlePasswordSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mail FAUBA
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="usuario@agro.uba.ar"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Mínimo 6 caracteres"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 font-medium"
        >
          {isSubmitting
            ? "Procesando..."
            : isSignUp
              ? "Crear cuenta"
              : "Entrar"}
        </button>
      </form>

      <button
        type="button"
        onClick={handleMagicLink}
        disabled={isSubmitting}
        className="w-full mt-3 border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 disabled:bg-gray-100 font-medium"
      >
        Enviarme un enlace por mail
      </button>

      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </section>
  );
}
