from pathlib import Path
import argparse

import pdfplumber


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT / "public" / "pdfcoffee.com_manual-de-la-flora-de-los-alrededores-de-buenos-aires-9-pdf-free.pdf"
OUTPUT_DIR = ROOT / "manual-text" / "pages"
COMBINED_PATH = ROOT / "manual-text" / "manual-completo.txt"

# In this scan, printed manual page 1 starts on PDF page 8.
PRINTED_PAGE_OFFSET = 7


def printed_page(pdf_page: int) -> int | None:
    page = pdf_page - PRINTED_PAGE_OFFSET
    return page if page >= 1 else None


def page_header(pdf_page: int) -> str:
    manual_page = printed_page(pdf_page)
    if manual_page is None:
        return f"PDF_PAGE={pdf_page} MANUAL_PAGE=front-matter"
    return f"PDF_PAGE={pdf_page} MANUAL_PAGE={manual_page}"


def extract_pages(start: int | None, end: int | None, write_combined: bool) -> None:
    if not PDF_PATH.exists():
        raise FileNotFoundError(f"No se encontro el PDF: {PDF_PATH}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    combined_chunks: list[str] = []
    with pdfplumber.open(PDF_PATH) as pdf:
        total_pages = len(pdf.pages)
        first_page = start or 1
        last_page = end or total_pages

        if first_page < 1 or last_page > total_pages or first_page > last_page:
            raise ValueError(f"Rango invalido: {first_page}-{last_page}. El PDF tiene {total_pages} paginas.")

        for pdf_page in range(first_page, last_page + 1):
            page = pdf.pages[pdf_page - 1]
            text = page.extract_text() or ""
            header = page_header(pdf_page)
            content = f"{header}\n\n{text.strip()}\n"
            page_path = OUTPUT_DIR / f"pdf-{pdf_page:03d}_manual-{printed_page(pdf_page) or 'front'}.txt"
            page_path.write_text(content, encoding="utf-8")
            if write_combined:
                combined_chunks.append(content)

    if write_combined:
        COMBINED_PATH.parent.mkdir(parents=True, exist_ok=True)
        COMBINED_PATH.write_text("\n\n".join(combined_chunks), encoding="utf-8")

    print(f"Extraidas paginas PDF {first_page}-{last_page} en {OUTPUT_DIR}")
    if write_combined:
        print(f"Archivo combinado: {COMBINED_PATH}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Extrae el manual PDF a texto por pagina.")
    parser.add_argument("--start", type=int, help="Primera pagina PDF a extraer.")
    parser.add_argument("--end", type=int, help="Ultima pagina PDF a extraer.")
    parser.add_argument(
        "--combined",
        action="store_true",
        help="Tambien genera manual-text/manual-completo.txt con el rango extraido.",
    )
    args = parser.parse_args()

    extract_pages(args.start, args.end, args.combined)


if __name__ == "__main__":
    main()
