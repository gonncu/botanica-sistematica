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

Ultima familia cargada y validada:

- `130. Compositae`, parcial: tribus `1. Vernonieae`, `2. Eupatorieae`, `3. Astereae` y `4. Inuleae` completas; tribu `5. Heliantheae` parcial hasta `29. Xanthium`.
- Tandas cargadas: `59. Cruciferae` completa; `60. Resedaceae` completa; `61. Crassulaceae` completa; `62. Saxifragaceae` completa; `63. Rosaceae` completa; `64. Leguminosae` completa; `65. Oxalidaceae` completa; `66. Geraniaceae` completa; `67. Tropaeolaceae` completa; `68. Linaceae` completa; `69. Zygophyllaceae` completa; `70. Rutaceae` completa; `71. Malpighiaceae` completa; `72. Polygalaceae` completa; `73. Euphorbiaceae` completa; `74. Callitrichaceae` completa; `75. Anacardiaceae` completa; `76. Celastraceae` completa; `77. Sapindaceae` completa; `78. Rhamnaceae` completa; `79. Vitaceae` completa; `80. Tiliaceae` completa; `81. Malvaceae` completa; `82. Sterculiaceae` completa; `83. Guttiferae` completa; `84. Elatinaceae` completa; `85. Frankeniaceae` completa; `86. Cistaceae` ficha cargada, revisar conexion; `87. Violaceae` completa; `88. Turneraceae` completa; `89. Passifloraceae` completa; `90. Loasaceae` completa; `91. Begoniaceae` completa; `92. Cactaceae` completa; `93. Thymelaeaceae` completa; `94. Lythraceae` completa; `95. Combretaceae` completa; `96. Myrtaceae` completa; `97. Melastomaceae` completa; `98. Onagraceae` completa; `99. Haloragaceae` completa; `100. Umbelliferae` completa; `101. Myrsinaceae` completa; `102. Primulaceae` completa; `103. Plumbaginaceae` completa; `104. Sapotaceae` completa; `105. Symplocaceae` completa; `106. Oleaceae` completa; `107. Loganiaceae` completa; `108. Gentianaceae` completa; `109. Apocynaceae` completa; `110. Asclepiadaceae` completa; `111. Convolvulaceae` completa; `112. Hydrophyllaceae` completa; `113. Boraginaceae` completa; `114. Verbenaceae` completa; `115. Labiatae` completa; `116. Solanaceae` completa; `117. Scrophulariaceae` completa; `118. Bignoniaceae` completa; `119. Martyniaceae` completa; `120. Lentibulariaceae` completa; `121. Acanthaceae` completa; `122. Plantaginaceae` completa; `123. Rubiaceae` completa; `124. Caprifoliaceae` completa; `125. Valerianaceae` completa; `126. Dipsacaceae` completa; `127. Cucurbitaceae` completa; `128. Campanulaceae` completa; `129. Calyceraceae` completa; `130. Compositae - Vernonieae` completa; `130. Compositae - Eupatorieae hasta Stevia` completa; `130. Compositae - Eupatorieae hasta Eupatorium` completa; `130. Compositae - Eupatorieae completa`; `130. Compositae - Astereae hasta Solidago` completa; `130. Compositae - Astereae hasta Aster` completa; `130. Compositae - Astereae hasta Conyza` completa; `130. Compositae - Astereae hasta Vittadinia` completa; `130. Compositae - Astereae hasta Podocoma` completa; `130. Compositae - Astereae hasta Baccharidastrum` completa; `130. Compositae - Astereae Baccharis 1-10` completa; `130. Compositae - Astereae completa`; `130. Compositae - Inuleae hasta Pterocaulon` completa; `130. Compositae - Inuleae hasta Stuckertiella` completa; `130. Compositae - Inuleae completa`; `130. Compositae - Heliantheae hasta Xanthium` completa.
- Ultimo commit subido antes de esta tanda: `55e1102 Complete Compositae Inuleae species keys`.

## Proxima familia consecutiva

- `130. Compositae`, continuar tribu `5. Heliantheae` desde `30. Jaegeria`, pagina 500 del manual (`PDF_PAGE=507`).

## Regla de trabajo

- Cargar familias completas cuando sean chicas.
- Si una familia supera unas 10 especies o tiene claves internas largas, cargar por genero/subclave.
- Mantener `manualPage` como pagina impresa del manual, no pagina del PDF.
- Conectar familias a nodos con `milestone` cuando sea posible para que el recorrido muestre el hito.
- Validar referencias antes de `lint`, `tsc` y `build`.
- Reiniciar `localhost:3000` despues de cada tanda validada.
- Hacer commit y push por tanda.
