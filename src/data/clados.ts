import { CladoNode, Especie } from "@/types";
import { monocotiledoneaeData, monocotEspecies } from "./monocotyledoneae";

// Datos de especies basados en el manual
export const especiesData: Record<string, Especie> = monocotEspecies;

// Árbol de clados - Estructura del manual de Flora de Buenos Aires
export const cladosTree: Record<string, CladoNode> = {
  root: {
    id: "root",
    descripcion: "¿Es una planta gimnosperma o angiosperma?",
    opcionA: {
      label: "Gimnosperma - Sin flores verdaderas",
      nextNodeId: "gymnosperm_1",
    },
    opcionA_prima: {
      label: "Angiosperma - Con flores verdaderas",
      nextNodeId: "angiosperm_1",
    },
  },

  // Rama Gimnosperma (simple, solo 1 especie en Argentina)
  gymnosperm_1: {
    id: "gymnosperm_1",
    descripcion: "Única gimnosperma nativa de Argentina",
    opcionA: {
      label: "Araucaria angustifolia",
    },
    opcionA_prima: {
      label: "Otra",
    },
    especie: {
      id: "araucaria",
      nombreCientifico: "Araucaria angustifolia",
      nombreVulgar: "Araucaria",
      familia: "Araucariaceae",
      descripcion: "Conífera de gran porte",
      caracteristicas: "Hojas aciculares, frutos en conos",
      distribucion: "Misiones, Argentina",
    },
  },

  // Rama Angiosperma - Nivel 1
  angiosperm_1: {
    id: "angiosperm_1",
    descripcion:
      "¿Cuántos cotiledones tiene el embrión?",
    opcionA: {
      label: "1 cotiledón - Hojas paralelinervadas (Monocotiledoneae)",
      nextNodeId: "monocot_root",
    },
    opcionA_prima: {
      label: "2 cotiledones - Hojas retinervadas (Dicotiledoneae)",
      nextNodeId: "dicot_A",
    },
  },

  // Rama MONOCOTILEDONEAE - Toda la estructura del manual
  ...monocotiledoneaeData,

  // Rama Dicotiledoneae (placeholder)
  dicot_A: {
    id: "dicot_A",
    descripcion:
      "Dicotiledoneae: Embrión con 2 cotiledones, hojas generalmente retinervadas.",
    opcionA: {
      label: "Plantas con flores actinomorfas",
      nextNodeId: "dicot_A_1",
    },
    opcionA_prima: {
      label: "Plantas con flores zigomorfas",
      nextNodeId: "dicot_B_1",
    },
  },

  dicot_A_1: {
    id: "dicot_A_1",
    descripcion: "Flores actinomorfas - Nivel A",
    opcionA: {
      label: "Opción A",
    },
    opcionA_prima: {
      label: "Opción A'",
    },
  },

  dicot_B_1: {
    id: "dicot_B_1",
    descripcion: "Flores zigomorfas - Nivel B",
    opcionA: {
      label: "Opción B",
    },
    opcionA_prima: {
      label: "Opción B'",
    },
  },
};
