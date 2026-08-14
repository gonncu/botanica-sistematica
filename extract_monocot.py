import pdfplumber

pdf_path = r"c:\Users\distr\botanica siste\pdfcoffee.com_manual-de-la-flora-de-los-alrededores-de-buenos-aires-9-pdf-free.pdf"

with pdfplumber.open(pdf_path) as pdf:
    full_text = ""
    for page in pdf.pages[:40]:  # Primeras 40 páginas
        text = page.extract_text()
        if text:
            full_text += text + "\n"

# Buscar la sección de Monocotiledoneae
monocot_start = full_text.find("Clase 1. Monocotiledoneae")
if monocot_start != -1:
    # Extraer 5000 caracteres desde este punto
    monocot_section = full_text[monocot_start:monocot_start + 8000]
    
    # Limpiar y imprimir
    lines = monocot_section.split('\n')
    for i, line in enumerate(lines[:150]):
        print(f"{i:3d}: {line}")
else:
    print("No se encontró Monocotiledoneae")
    # Imprimir todo para ver qué hay
    print(full_text[:5000])
