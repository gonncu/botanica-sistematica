"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface AuthPanelProps {
  onSignedIn?: () => void;
}

const ALLOWED_DOMAIN = "@agro.uba.ar";

export default function AuthPanel({ onSignedIn }: AuthPanelProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const normalizedEmail = email.trim().toLowerCase();
  const isAgroEmail = normalizedEmail.endsWith(ALLOWED_DOMAIN);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
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
    onSignedIn?.();
  };

  return (
    <section className="mx-auto max-w-md bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Ingresar</h2>
      <p className="text-gray-600 mb-5">
        Usá tu correo institucional para guardar tus plantas y recuperar tus registros.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 font-medium"
        >
          {isSubmitting ? "Enviando..." : "Enviar enlace de acceso"}
        </button>
      </form>

      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </section>
  );
}
