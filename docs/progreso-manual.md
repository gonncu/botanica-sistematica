# Progreso de carga del manual

Este archivo sirve para retomar la carga del manual sin redescubrir el estado desde cero.

## PDF

- Archivo fuente: `public/pdfcoffee.com_manual-de-la-flora-de-los-alrededores-de-buenos-aires-9-pdf-free.pdf`
- La pagina 1 impresa del manual corresponde a la pagina 8 del PDF.
- Formula: `manualPage = pdfPage - 7`.
- Texto extraido por pagina: `manual-text/pages/`.
- Texto combinado opcional: `manual-text/manual-completo.txt`.

## Comandos utiles

```powershell
npm run extract:manual
npm run extract:manual:pages -- --start 182 --end 184
npm run validate:data
npm run lint
npx tsc --noEmit --incremental false
npm run build
```

## Estado actual

- Pteridophyta: cargado previamente en `src/data/manualKey.ts`.
- Gymnospermae: cargado previamente en `src/data/manualKey.ts`.
- Monocotyledoneae: completa en `src/data/monocotyledoneae.ts`.
- Dicotyledoneae: en progreso en `src/data/manualKey.ts`.

Ultima familia cargada, validada y subida:

- `42. Aristolochiaceae`, pagina 175-177 del manual.
- Commit: `f95a466 Add Aristolochiaceae species keys`.

## Proxima familia consecutiva

- `43. Polygonaceae`, empieza en pagina 177 del manual.
- En el PDF empieza alrededor de `PDF_PAGE=184`.
- Conviene partirla en tandas si el bloque de `Rumex` o `Polygonum` es largo.

## Regla de trabajo

- Cargar familias completas cuando sean chicas.
- Si una familia supera unas 10 especies o tiene claves internas largas, cargar por genero/subclave.
- Mantener `manualPage` como pagina impresa del manual, no pagina del PDF.
- Conectar familias a nodos con `milestone` cuando sea posible para que el recorrido muestre el hito.
- Validar referencias antes de `lint`, `tsc` y `build`.
- Reiniciar `localhost:3000` despues de cada tanda validada.
- Hacer commit y push por tanda.
