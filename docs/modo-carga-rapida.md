# Modo de carga rapida del manual

Este flujo busca bajar el uso de Codex al cargar familias del manual.

## Rutina recomendada

1. Usar siempre el texto extraido en `manual-text/pages`, no volver al PDF salvo duda puntual.
2. Generar un borrador por rango chico de paginas:

```powershell
npm run draft:manual -- --start 229 --end 233 --family Cruciferae
```

3. Cargar una familia completa si es chica, o una subclave/genero si la familia es larga.
4. Validar referencias despues de cada tanda:

```powershell
npm run validate:data
```

5. Reservar `npm run lint`, `npx tsc --noEmit --incremental false` y `npm run build` para cierres de familia o cambios de codigo.
6. Hacer commit y push por familia o por bloque estable, no por cada genero chico.

## Reglas de calidad

- Mantener `manualPage` como pagina impresa del manual.
- Copiar la estructura de opciones `A`, `A'`, `B`, `B'`, etc. segun el manual.
- Agregar `milestone` al entrar en familias, generos o grupos importantes.
- No repetir hitos ya acumulados en el recorrido.
- Si una rama todavia no esta cargada, dejarla apuntando a la familia solo como placeholder y reemplazarla en la proxima tanda.
