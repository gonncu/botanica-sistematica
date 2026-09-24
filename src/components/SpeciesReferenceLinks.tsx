import { Especie } from "@/types";

export default function SpeciesReferenceLinks({ especie }: { especie: Especie }) {
  const query = encodeURIComponent(especie.nombreCientifico);
  const wikipediaUrl = `https://es.wikipedia.org/wiki/Especial:Buscar?search=${query}`;
  const commonsUrl = `https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=${query}`;

  return (
    <div className="border-t border-gray-200 pt-4">
      <p className="text-sm font-semibold text-gray-800">Comparar la identificacion</p>
      <p className="mt-1 text-sm text-gray-600">
        Revise fotos y descripcion antes de registrar el ejemplar.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={wikipediaUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50"
        >
          Buscar en Wikipedia
        </a>
        <a
          href={commonsUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50"
        >
          Ver fotos en Wikimedia
        </a>
      </div>
    </div>
  );
}
