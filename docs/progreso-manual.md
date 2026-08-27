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

- `59. Cruciferae`, completa hasta pagina 234 del manual.
- Tandas cargadas: clave completa de generos y especies, incluyendo `Capsella`, `Rapistrum`, `Neslia`, `Camelina`, `Coronopus`, `Lobularia`, `Lepidium`, `Draba`, `Malcomia`, `Erysimum`, `Descurainia`, `Halimolobos`, `Cakile`, `Raphanus`, `Eruca`, `Diplotaxis`, `Roripa`, `Cardamine`, `Hirschfeldia`, `Brassica`, `Sisymbrium` y `Sinapis`.
- Ultimo commit subido antes de esta tanda: `521af70 Add fast manual drafting flow and Cruciferae keys`.

## Proxima familia consecutiva

- `60. Resedaceae`, pagina 234 del manual (`PDF_PAGE=241`).

## Regla de trabajo

- Cargar familias completas cuando sean chicas.
- Si una familia supera unas 10 especies o tiene claves internas largas, cargar por genero/subclave.
- Mantener `manualPage` como pagina impresa del manual, no pagina del PDF.
- Conectar familias a nodos con `milestone` cuando sea posible para que el recorrido muestre el hito.
- Validar referencias antes de `lint`, `tsc` y `build`.
- Reiniciar `localhost:3000` despues de cada tanda validada.
- Hacer commit y push por tanda.
