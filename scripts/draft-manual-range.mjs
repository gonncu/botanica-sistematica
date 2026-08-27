import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const PAGES_DIR = path.join(ROOT, "manual-text", "pages");

const args = process.argv.slice(2);

function readArg(name, fallback = undefined) {
  const prefix = `--${name}=`;
  const inline = args.find((arg) => arg.startsWith(prefix));
  if (inline) return inline.slice(prefix.length);

  const index = args.indexOf(`--${name}`);
  if (index !== -1) return args[index + 1];

  return fallback;
}

function usage() {
  console.log(
    [
      "Uso: node scripts/draft-manual-range.mjs --start 229 --end 233 [--family Cruciferae]",
      "",
      "Genera un borrador liviano desde manual-text/pages, con encabezados, claves y especies detectadas.",
      "La pagina indicada es la pagina impresa del manual, no la pagina del PDF.",
    ].join("\n")
  );
}

const start = Number(readArg("start"));
const end = Number(readArg("end", start));
const familyFilter = readArg("family", "").toLowerCase();

if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start) {
  usage();
  process.exit(1);
}

function manualPageFile(page) {
  const suffix = `_manual-${String(page).padStart(3, "0")}.txt`;
  const exactSuffix = `_manual-${page}.txt`;
  const file = fs
    .readdirSync(PAGES_DIR)
    .find((name) => name.endsWith(exactSuffix) || name.endsWith(suffix));

  if (!file) throw new Error(`No encontre texto extraido para la pagina manual ${page}.`);
  return path.join(PAGES_DIR, file);
}

function normalizeLine(line) {
  return line.replace(/\s+/g, " ").trim();
}

function looksLikeFamily(line) {
  return /^[A-ZÁÉÍÓÚÜÑ' ]{4,}\s+\d{1,3}$/.test(line) || /^\d{1,3}\.\s+[A-ZÁÉÍÓÚÜÑ][A-ZÁÉÍÓÚÜÑ' -]+$/.test(line);
}

function looksLikeGenus(line) {
  return /^\d{1,3}\.\s+[A-ZÁÉÍÓÚÜÑ][A-ZÁÉÍÓÚÜÑ'. -]+$/.test(line);
}

function looksLikeSpecies(line) {
  return /^\d{1,2}[a-z]?\.\s+[A-ZÁÉÍÓÚÜÑ]\.\s+/.test(line) ||
    /^\d{1,2}[a-z]?\.\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+\.\s+/.test(line) ||
    /^\d{1,2}[a-z]?\.\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+ [a-záéíóúüñ-]+/.test(line);
}

function looksLikeCouplet(line) {
  return /^[A-ZÑ]'?\.\s+/.test(line) || /^[A-ZÑ]'?\s/.test(line) || /^[a-zñ]'?\.\s+/.test(line);
}

function collectPages() {
  const pages = [];

  for (let page = start; page <= end; page += 1) {
    const file = manualPageFile(page);
    const text = fs.readFileSync(file, "utf8");
    const lines = text
      .split(/\r?\n/)
      .map(normalizeLine)
      .filter(Boolean)
      .filter((line) => !line.startsWith("PDF_PAGE="));

    const hits = new Set();
    lines.forEach((line, index) => {
      const lower = line.toLowerCase();
      const selected = familyFilter
        ? lower.includes(familyFilter) || looksLikeGenus(line) || looksLikeSpecies(line) || looksLikeCouplet(line)
        : looksLikeFamily(line) || looksLikeGenus(line) || looksLikeSpecies(line) || looksLikeCouplet(line);

      if (selected) {
        hits.add(index);
        if (looksLikeSpecies(line) || looksLikeGenus(line)) {
          if (index + 1 < lines.length) hits.add(index + 1);
          if (index + 2 < lines.length) hits.add(index + 2);
        }
      }
    });
    const useful = [...hits].sort((a, b) => a - b).map((index) => lines[index]);

    pages.push({ page, file: path.relative(ROOT, file), lines: useful });
  }

  return pages;
}

function printDraft(pages) {
  console.log(`# Borrador manual ${start}-${end}`);
  console.log("");
  console.log("- Fuente: `manual-text/pages`");
  console.log("- Paginas: pagina impresa del manual");
  if (familyFilter) console.log(`- Filtro orientativo: ${familyFilter}`);
  console.log("");

  for (const page of pages) {
    console.log(`## Pagina ${page.page}`);
    console.log(`Archivo: \`${page.file}\``);

    if (!page.lines.length) {
      console.log("- Sin encabezados/claves/especies detectadas.");
      console.log("");
      continue;
    }

    for (const line of page.lines) {
      const marker = looksLikeSpecies(line)
        ? "especie"
        : looksLikeGenus(line)
          ? "genero"
          : looksLikeCouplet(line)
            ? "clave"
            : "encabezado";
      console.log(`- ${marker}: ${line}`);
    }
    console.log("");
  }
}

printDraft(collectPages());
