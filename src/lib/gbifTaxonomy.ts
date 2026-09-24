interface GbifMatchResponse {
  usageKey?: number;
  acceptedUsageKey?: number;
  canonicalName?: string;
  scientificName?: string;
  acceptedScientificName?: string;
  kingdom?: string;
  matchType?: string;
}

interface GbifNameUsage {
  canonicalName?: string;
  scientificName?: string;
}

interface GbifSynonymsResponse {
  results?: GbifNameUsage[];
}

export interface GbifTaxonomicResult {
  acceptedName: string;
  names: string[];
  sourceUrl: string;
}

const GBIF_API = "https://api.gbif.org/v1";

export async function lookupGbifSynonyms(name: string): Promise<GbifTaxonomicResult | null> {
  const matchResponse = await fetch(
    `${GBIF_API}/species/match?kingdom=Plantae&name=${encodeURIComponent(name)}`
  );
  if (!matchResponse.ok) throw new Error("GBIF no respondió correctamente.");

  const match = (await matchResponse.json()) as GbifMatchResponse;
  if (!match.usageKey || match.matchType === "NONE") return null;

  const acceptedKey = match.acceptedUsageKey ?? match.usageKey;
  const [acceptedResponse, synonymsResponse] = await Promise.all([
    fetch(`${GBIF_API}/species/${acceptedKey}`),
    fetch(`${GBIF_API}/species/${acceptedKey}/synonyms?limit=1000`),
  ]);
  if (!acceptedResponse.ok || !synonymsResponse.ok) {
    throw new Error("GBIF no pudo recuperar la sinonimia.");
  }

  const accepted = (await acceptedResponse.json()) as GbifNameUsage;
  const synonyms = (await synonymsResponse.json()) as GbifSynonymsResponse;
  const acceptedName =
    accepted.canonicalName || match.acceptedScientificName || match.canonicalName;
  if (!acceptedName) return null;

  const names = new Set<string>([
    name,
    acceptedName,
    ...(match.canonicalName ? [match.canonicalName] : []),
    ...(synonyms.results ?? []).flatMap((synonym) =>
      synonym.canonicalName
        ? [synonym.canonicalName]
        : synonym.scientificName
          ? [synonym.scientificName]
          : []
    ),
  ]);

  return {
    acceptedName,
    names: [...names],
    sourceUrl: `https://www.gbif.org/species/${acceptedKey}`,
  };
}
