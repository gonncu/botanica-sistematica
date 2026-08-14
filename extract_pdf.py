import pdfplumber

pdf_path = r"c:\Users\distr\botanica siste\pdfcoffee.com_manual-de-la-flora-de-los-alrededores-de-buenos-aires-9-pdf-free.pdf"

with pdfplumber.open(pdf_path) as pdf:
    print(f"Total de páginas: {len(pdf.pages)}\n")
    
    # Extraer las primeras 30 páginas (donde están los clados)
    for i, page in enumerate(pdf.pages[:30]):
        text = page.extract_text()
        if text:
            print(f"\n{'='*80}\nPÁGINA {i+1}\n{'='*80}\n")
            print(text)
