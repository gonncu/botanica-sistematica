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

- `62. Saxifragaceae`, completa hasta pagina 237 del manual.
- Tandas cargadas: `59. Cruciferae` completa; `60. Resedaceae` completa; `61. Crassulaceae` completa; `62. Saxifragaceae` completa.
- Ultimo commit subido antes de esta tanda: `c086bc4 Complete Cruciferae species keys`.

## Proxima familia consecutiva

- `63. Rosaceae`, pagina 237 del manual (`PDF_PAGE=244`).

## Regla de trabajo

- Cargar familias completas cuando sean chicas.
- Si una familia supera unas 10 especies o tiene claves internas largas, cargar por genero/subclave.
- Mantener `manualPage` como pagina impresa del manual, no pagina del PDF.
- Conectar familias a nodos con `milestone` cuando sea posible para que el recorrido muestre el hito.
- Validar referencias antes de `lint`, `tsc` y `build`.
- Reiniciar `localhost:3000` despues de cada tanda validada.
- Hacer commit y push por tanda.
