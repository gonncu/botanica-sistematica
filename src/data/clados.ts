import { CladoNode, Especie } from "@/types";
import { manualFamilyData, manualKeyData } from "./manualKey";
import { monocotiledoneaeData, monocotEspecies } from "./monocotyledoneae";

// Datos de especies/familias basados en el manual
export const especiesData: Record<string, Especie> = {
  ...manualFamilyData,
  ...monocotEspecies,
};

// Árbol de clados - Estructura del manual de Flora de Buenos Aires
export const cladosTree: Record<string, CladoNode> = {
  ...manualKeyData,

  // Rama Angiosperma - Nivel 1
  angiosperm_1: {
    id: "angiosperm_1",
    milestone: "Angiospermae",
    descripcion: "¿Cuántos cotiledones tiene el embrión?",
    opcionA: {
      label: "1 cotiledón - Hojas paralelinervadas (Monocotiledoneae)",
      nextNodeId: "monocot_root",
    },
    opcionA_prima: {
      label: "2 cotiledones - Hojas retinervadas (Dicotyledoneae)",
      nextNodeId: "dicot_root",
    },
  },

  // Rama MONOCOTILEDONEAE - Toda la estructura del manual
  ...monocotiledoneaeData,
};
