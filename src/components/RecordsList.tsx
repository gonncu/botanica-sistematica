"use client";

import { useMemo, useState } from "react";
import { especiesData } from "@/data/clados";
import { generateLabelsPDF, recordToLabel } from "@/lib/pdfGenerator";
import { PhotoRecord } from "@/types";

interface RecordsListProps {
  records: PhotoRecord[];
  isLoading: boolean;
}

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function RecordsList({ records, isLoading }: RecordsListProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredRecords = useMemo(() => {
    const normalizedSearch = normalizeSearchText(searchTerm.trim());
    if (!normalizedSearch) return records;

    return records.filter((record) => {
      const especie = especiesData[record.especie_id];
      const searchableText = [
        record.plant_number.toString(),
        record.especie_id,
        especie?.nombreCientifico,
        especie?.nombreVulgar,
        especie?.familia,
        record.nombre_usuario,
        record.fecha,
        record.lugar,
        record.observaciones,
      ]
        .filter(Boolean)
        .join(" ");

      return normalizeSearchText(searchableText).includes(normalizedSearch);
    });
  }, [records, searchTerm]);
  const selectedRecords = useMemo(
    () => records.filter((record) => selectedIds.includes(record.id)),
    [records, selectedIds]
  );
  const allRecordsSelected =
    filteredRecords.length > 0 &&
    filteredRecords.every((record) => selectedIds.includes(record.id));

  const toggleRecord = (recordId: string) => {
    setSelectedIds((current) =>
      current.includes(recordId)
        ? current.filter((id) => id !== recordId)
        : [...current, recordId]
    );
  };

  const toggleAll = () => {
    const filteredIds = filteredRecords.map((record) => record.id);

    setSelectedIds((current) =>
      allRecordsSelected
        ? current.filter((id) => !filteredIds.includes(id))
        : [...new Set([...current, ...filteredIds])]
    );
  };

  const selectRange = () => {
    const start = Number(rangeStart);
    const end = Number(rangeEnd);

    if (!Number.isInteger(start) || !Number.isInteger(end)) return;

    const min = Math.min(start, end);
    const max = Math.max(start, end);
    setSelectedIds(
      records
        .filter(
          (record) => record.plant_number >= min && record.plant_number <= max
        )
        .map((record) => record.id)
    );
  };

  const handleGenerateLabels = async () => {
    await generateLabelsPDF(
      selectedRecords.map((record) =>
        recordToLabel(record, especiesData[record.especie_id])
      )
    );
  };

  return (
    <section className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">Mis plantas</h2>
        <span className="text-sm text-gray-700">{records.length} registros</span>
      </div>

      {isLoading && <p className="text-gray-700">Cargando registros...</p>}

      {!isLoading && records.length === 0 && (
        <p className="text-gray-700">Todavía no registraste plantas.</p>
      )}

      {!isLoading && records.length > 0 && (
        <div className="space-y-3">
          <div className="flex flex-col gap-2 border-b border-gray-200 pb-3">
            <label className="text-sm font-medium text-gray-800">
              Buscar
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Nombre, familia, lugar o N°"
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm"
              />
            </label>
            <div className="flex items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <input
                  type="checkbox"
                  checked={allRecordsSelected}
                  onChange={toggleAll}
                  className="h-4 w-4 accent-green-700"
                />
                Seleccionar todas
              </label>
              <button
                type="button"
                onClick={() => setSelectedIds([])}
                disabled={selectedIds.length === 0}
                className="text-sm text-gray-700 underline disabled:text-gray-400 disabled:no-underline"
              >
                Limpiar
              </button>
            </div>
            <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-2">
              <label className="text-xs font-medium text-gray-800">
                Desde N°
                <input
                  type="number"
                  min="1"
                  value={rangeStart}
                  onChange={(event) => setRangeStart(event.target.value)}
                  className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                />
              </label>
              <label className="text-xs font-medium text-gray-800">
                Hasta N°
                <input
                  type="number"
                  min="1"
                  value={rangeEnd}
                  onChange={(event) => setRangeEnd(event.target.value)}
                  className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                />
              </label>
              <button
                type="button"
                onClick={selectRange}
                disabled={!rangeStart || !rangeEnd}
                className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50 disabled:text-gray-400"
              >
                Elegir
              </button>
            </div>
            <button
              type="button"
              onClick={handleGenerateLabels}
              disabled={selectedRecords.length === 0}
              className="w-full rounded bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 disabled:bg-gray-300"
            >
              Generar etiquetas seleccionadas
            </button>
            <p className="text-xs text-gray-700">
              {selectedRecords.length} seleccionadas · {filteredRecords.length} visibles · Hoja A4 con 12 etiquetas
            </p>
          </div>

          {filteredRecords.map((record) => (
            <article
              key={record.id}
              className="border border-gray-200 rounded p-4 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-3">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(record.id)}
                    onChange={() => toggleRecord(record.id)}
                    className="mt-1 h-4 w-4 accent-green-700"
                  />
                  <span>
                    <span className="block font-bold text-green-700">
                      Planta N° {record.plant_number}
                    </span>
                    <span className="block text-gray-800">{record.especie_id}</span>
                  </span>
                </label>
                <time className="text-sm text-gray-700">{record.fecha}</time>
              </div>
              <p className="text-sm text-gray-700">{record.lugar}</p>
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

          {filteredRecords.length === 0 && (
            <p className="text-sm text-gray-700">
              No hay registros que coincidan con la búsqueda.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
