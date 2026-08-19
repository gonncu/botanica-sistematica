"use client";

import { PhotoRecord } from "@/types";

interface RecordsListProps {
  records: PhotoRecord[];
  isLoading: boolean;
}

export default function RecordsList({ records, isLoading }: RecordsListProps) {
  return (
    <section className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">Mis plantas</h2>
        <span className="text-sm text-gray-500">{records.length} registros</span>
      </div>

      {isLoading && <p className="text-gray-600">Cargando registros...</p>}

      {!isLoading && records.length === 0 && (
        <p className="text-gray-600">Todavía no registraste plantas.</p>
      )}

      {!isLoading && records.length > 0 && (
        <div className="space-y-3">
          {records.map((record) => (
            <article
              key={record.id}
              className="border border-gray-200 rounded p-4 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-green-700">
                    Planta N° {record.plant_number}
                  </p>
                  <p className="text-gray-800">{record.especie_id}</p>
                </div>
                <time className="text-sm text-gray-500">{record.fecha}</time>
              </div>
              <p className="text-sm text-gray-600">{record.lugar}</p>
              {record.photo_url && (
                <a
                  href={record.photo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-700 hover:underline"
                >
                  Ver foto
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
