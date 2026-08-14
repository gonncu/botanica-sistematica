"use client";

import { useState, useRef } from "react";
import { Especie } from "@/types";

interface FormData {
  nombreUsuario: string;
  fecha: string;
  lugar: string;
  coordenadas?: string;
  observaciones?: string;
  foto?: File | null;
}

interface FormProps {
  especie: Especie;
  onSubmit: (formData: FormData) => void;
}

export default function SpeciesForm({ especie, onSubmit }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    nombreUsuario: "",
    fecha: new Date().toISOString().split("T")[0],
    lugar: "",
    observaciones: "",
    foto: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        foto: file,
      }));

      // Preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombreUsuario || !formData.lugar) {
      alert("Por favor completa Nombre y Lugar");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Registrar Especie
      </h2>

      {/* Información de la especie identificada */}
      <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
        <p className="text-sm text-gray-600">Especie identificada:</p>
        <p className="text-lg font-bold text-green-700">
          {especie.nombreCientifico}
        </p>
        <p className="text-sm text-gray-600">{especie.nombreVulgar}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre del usuario */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre y Apellido*
          </label>
          <input
            type="text"
            name="nombreUsuario"
            value={formData.nombreUsuario}
            onChange={handleInputChange}
            placeholder="Tu nombre completo"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Fecha */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha*
          </label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Lugar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lugar*
          </label>
          <input
            type="text"
            name="lugar"
            value={formData.lugar}
            onChange={handleInputChange}
            placeholder="Dónde encontraste la planta"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Coordenadas */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Coordenadas (opcional)
          </label>
          <input
            type="text"
            name="coordenadas"
            value={formData.coordenadas || ""}
            onChange={handleInputChange}
            placeholder="ej: -34.6037, -58.3816"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Foto */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Foto de la planta
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 max-w-xs rounded max-h-48"
            />
          )}
        </div>

        {/* Observaciones */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Observaciones (opcional)
          </label>
          <textarea
            name="observaciones"
            value={formData.observaciones || ""}
            onChange={handleInputChange}
            placeholder="Notas adicionales sobre la planta"
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botones */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium"
        >
          Generar PDF
        </button>
      </form>
    </div>
  );
}
