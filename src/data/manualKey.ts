import { CladoNode, Especie } from "@/types";

function family(
  id: string,
  familia: string,
  descripcion: string,
  caracteristicas: string
): Especie {
  return {
    id,
    nombreCientifico: familia,
    nombreVulgar: familia,
    familia,
    descripcion,
    caracteristicas,
    distribucion: "Alrededores de Buenos Aires, según el manual de Cabrera.",
  };
}

export const manualFamilyData: Record<string, Especie> = {
  ephedraceae: family(
    "ephedraceae",
    "10. Ephedraceae",
    "Gimnospermas con óvulos desnudos.",
    "Única familia de gimnospermas espontánea citada para la región en la clave del manual."
  ),
  salviniaceae: family(
    "salviniaceae",
    "9. Salviniaceae",
    "Pteridófitas acuáticas flotantes.",
    "Esporangios en esporocarpos; plantas flotantes libres."
  ),
  marsiliaceae: family(
    "marsiliaceae",
    "8. Marsiliaceae",
    "Pteridófitas acuáticas arraigadas.",
    "Esporangios en esporocarpos; hojas flotantes tetrafolioladas o arrosetadas lineales."
  ),
  isoetaceae: family(
    "isoetaceae",
    "3. Isoetaceae",
    "Pteridófitas acuáticas o palustres.",
    "Esporangios alojados en foveas en la base de hojas subuladas dispuestas en rosetas."
  ),
  equisetaceae: family(
    "equisetaceae",
    "1. Equisetaceae",
    "Pteridófitas terrestres áfilas.",
    "Hojas reducidas a escamas membranosas, ramificación verticilada y estróbilo terminal."
  ),
  selaginellaceae: family(
    "selaginellaceae",
    "2. Selaginellaceae",
    "Pteridófitas con ramificación dicotómica.",
    "Hojas muy pequeñas; esporangios solitarios en axilas de hojas superiores."
  ),
  polypodiaceae: family(
    "polypodiaceae",
    "7. Polypodiaceae",
    "Helechos con esporangios en la cara inferior de las hojas.",
    "Esporangios con anillo de dehiscencia vertical."
  ),
  schizaeaceae: family(
    "schizaeaceae",
    "6. Schizaeaceae",
    "Helechos con esporangios sobre hojas reducidas o pínulas.",
    "Esporangios con anillo de dehiscencia apical."
  ),
  ophioglossaceae: family(
    "ophioglossaceae",
    "4. Ophioglossaceae",
    "Pteridófitas pigmeas.",
    "Esporangios en espigas densas, dehiscentes por ranura transversal."
  ),
  osmundaceae: family(
    "osmundaceae",
    "5. Osmundaceae",
    "Pteridófitas robustas.",
    "Esporangios en pínulas superiores reducidas al raquis."
  ),
  ceratophyllaceae: family(
    "ceratophyllaceae",
    "53. Ceratophyllaceae",
    "Dicotiledóneas del Grupo A.",
    "Plantas sumergidas con hojas verticiladas divididas dicotómicamente."
  ),
  euphorbiaceae: family(
    "euphorbiaceae",
    "73. Euphorbiaceae",
    "Dicotiledóneas con caracteres variables.",
    "En la clave aparece por ovario 3-carpelar y látex, o por otros caracteres vegetativos/florales."
  ),
  salicaceae: family(
    "salicaceae",
    "35. Salicaceae",
    "Dicotiledóneas del Grupo A.",
    "Árboles con hojas alternas y ovario unilocular."
  ),
  callitrichaceae: family(
    "callitrichaceae",
    "74. Callitrichaceae",
    "Dicotiledóneas del Grupo A.",
    "Hierbas humildes con hojas opuestas, flores axilares y ovario 2-4-locular."
  ),
  piperaceae: family(
    "piperaceae",
    "34. Piperaceae",
    "Dicotiledóneas del Grupo A.",
    "Hierbas humildes con hojas opuestas, flores en espigas terminales y ovario unilocular."
  ),
};

export const manualKeyData: Record<string, CladoNode> = {
  root: {
    id: "root",
    descripcion: "¿La planta tiene flores o semillas?",
    opcionA: {
      label: "No tiene flores ni semillas; se reproduce por esporas (Pteridophyta)",
      nextNodeId: "pteridophyta_a",
    },
    opcionA_prima: {
      label: "Tiene flores o semillas (Spermatophyta)",
      nextNodeId: "spermatophyta_a",
    },
  },
  pteridophyta_a: {
    id: "pteridophyta_a",
    descripcion: "Pteridophyta: ¿es una planta acuática o terrestre?",
    opcionA: {
      label: "Acuática, flotante o arraigada; a veces de terrenos pantanosos",
      nextNodeId: "pteridophyta_b",
    },
    opcionA_prima: {
      label: "Terrestre; a veces de suelos pantanosos, pero no acuática",
      nextNodeId: "pteridophyta_d",
    },
  },
  pteridophyta_b: {
    id: "pteridophyta_b",
    descripcion: "¿Dónde están los esporangios?",
    opcionA: {
      label: "En esporocarpos",
      nextNodeId: "pteridophyta_c",
    },
    opcionA_prima: {
      label: "En cavidades o foveas en la base de hojas subuladas",
      especieId: "isoetaceae",
    },
  },
  pteridophyta_c: {
    id: "pteridophyta_c",
    descripcion: "¿Cómo es el hábito de la planta acuática?",
    opcionA: {
      label: "Flotante, libre",
      especieId: "salviniaceae",
    },
    opcionA_prima: {
      label: "Arraigada en el fondo o en suelo pantanoso",
      especieId: "marsiliaceae",
    },
  },
  pteridophyta_d: {
    id: "pteridophyta_d",
    descripcion: "Pteridophyta terrestre: ¿tiene hojas desarrolladas?",
    opcionA: {
      label: "Planta áfila, con hojas reducidas a escamas; ramificación verticilada",
      especieId: "equisetaceae",
    },
    opcionA_prima: {
      label: "Planta con hojas; ramificación no verticilada",
      nextNodeId: "pteridophyta_e",
    },
  },
  pteridophyta_e: {
    id: "pteridophyta_e",
    descripcion: "¿Cómo es la ramificación y el tamaño de las hojas?",
    opcionA: {
      label: "Ramificación dicotómica; hojas muy pequeñas",
      especieId: "selaginellaceae",
    },
    opcionA_prima: {
      label: "Ramificación no dicotómica; hojas generalmente grandes",
      nextNodeId: "pteridophyta_f",
    },
  },
  pteridophyta_f: {
    id: "pteridophyta_f",
    descripcion: "¿Dónde se disponen los esporangios?",
    opcionA: {
      label: "Sobre la cara inferior de las hojas, con anillo vertical",
      especieId: "polypodiaceae",
    },
    opcionA_prima: {
      label: "Sobre hojas reducidas a la nervadura, formando espigas o panojas",
      nextNodeId: "pteridophyta_g",
    },
  },
  pteridophyta_g: {
    id: "pteridophyta_g",
    descripcion: "¿Los esporangios tienen anillo de dehiscencia apical?",
    opcionA: {
      label: "Sí, con anillo apical",
      especieId: "schizaeaceae",
    },
    opcionA_prima: {
      label: "No, sin anillo o con anillo transversal incompleto",
      nextNodeId: "pteridophyta_h",
    },
  },
  pteridophyta_h: {
    id: "pteridophyta_h",
    descripcion: "¿La planta es pigmea o robusta?",
    opcionA: {
      label: "Pigmea; esporangios en espigas densas",
      especieId: "ophioglossaceae",
    },
    opcionA_prima: {
      label: "Robusta; esporangios en pínulas superiores reducidas al raquis",
      especieId: "osmundaceae",
    },
  },
  spermatophyta_a: {
    id: "spermatophyta_a",
    descripcion: "Spermatophyta: ¿los óvulos están desnudos o encerrados en un ovario?",
    opcionA: {
      label: "Óvulos desnudos (Gymnospermae)",
      especieId: "ephedraceae",
    },
    opcionA_prima: {
      label: "Óvulos encerrados en un ovario (Angiospermae)",
      nextNodeId: "angiosperm_1",
    },
  },
  dicot_root: {
    id: "dicot_root",
    descripcion: "Dicotyledoneae: ¿cómo son las flores?",
    opcionA: {
      label: "Flores desnudas, sin cáliz ni corola",
      nextNodeId: "dicot_group_a_1",
    },
    opcionA_prima: {
      label: "Flores con cáliz, corola o perigonio",
      nextNodeId: "dicot_perianth_1",
    },
  },
  dicot_perianth_1: {
    id: "dicot_perianth_1",
    descripcion: "¿La flor tiene sólo cáliz/perigonio verdoso o también corola/perigonio coralino?",
    opcionA: {
      label: "Únicamente cáliz o perigonio verdoso calicoide (Grupo B)",
      nextNodeId: "dicot_group_pending_b",
    },
    opcionA_prima: {
      label: "Cáliz y corola, o perigonio coralino",
      nextNodeId: "dicot_corolla_1",
    },
  },
  dicot_corolla_1: {
    id: "dicot_corolla_1",
    descripcion: "¿Las piezas de la corola o perigonio son libres o soldadas?",
    opcionA: {
      label: "Libres entre sí",
      nextNodeId: "dicot_free_corolla_1",
    },
    opcionA_prima: {
      label: "Más o menos soldadas entre sí (Grupo E)",
      nextNodeId: "dicot_group_pending_e",
    },
  },
  dicot_free_corolla_1: {
    id: "dicot_free_corolla_1",
    descripcion: "Con piezas libres: ¿dónde está el ovario?",
    opcionA: {
      label: "Ovario súpero (Grupo C)",
      nextNodeId: "dicot_group_pending_c",
    },
    opcionA_prima: {
      label: "Ovario ínfero (Grupo D)",
      nextNodeId: "dicot_group_pending_d",
    },
  },
  dicot_group_a_1: {
    id: "dicot_group_a_1",
    descripcion: "Grupo A: ¿la planta es sumergida con hojas verticiladas divididas dicotómicamente?",
    opcionA: {
      label: "Sí",
      especieId: "ceratophyllaceae",
    },
    opcionA_prima: {
      label: "No; terrestre o acuática, pero con hojas no divididas dicotómicamente",
      nextNodeId: "dicot_group_a_2",
    },
  },
  dicot_group_a_2: {
    id: "dicot_group_a_2",
    descripcion: "Grupo A: ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario 3-carpelar, 3-locular; por lo común con látex",
      especieId: "euphorbiaceae",
    },
    opcionA_prima: {
      label: "Ovario 1-2-carpelar, 1-2-locular o 4-locular",
      nextNodeId: "dicot_group_a_3",
    },
  },
  dicot_group_a_3: {
    id: "dicot_group_a_3",
    descripcion: "Grupo A: ¿árbol con hojas alternas o hierba humilde con hojas opuestas?",
    opcionA: {
      label: "Árbol con hojas alternas; ovario unilocular",
      especieId: "salicaceae",
    },
    opcionA_prima: {
      label: "Hierba humilde con hojas opuestas",
      nextNodeId: "dicot_group_a_4",
    },
  },
  dicot_group_a_4: {
    id: "dicot_group_a_4",
    descripcion: "Grupo A: en hierbas con hojas opuestas, ¿cómo es el ovario y la inflorescencia?",
    opcionA: {
      label: "Ovario 2-4-locular; flores axilares",
      especieId: "callitrichaceae",
    },
    opcionA_prima: {
      label: "Ovario unilocular; flores en espigas terminales",
      especieId: "piperaceae",
    },
  },
  dicot_group_pending_b: {
    id: "dicot_group_pending_b",
    descripcion: "Grupo B: clave de familias con cáliz o perigonio verdoso.",
    opcionA: {
      label: "Continuar expansión del Grupo B en una próxima etapa",
    },
    opcionA_prima: {
      label: "Volver y revisar si corresponde otro grupo",
    },
    especie: family(
      "dicot_group_b_pending",
      "Grupo B de Dicotyledoneae",
      "Rama identificada hasta grupo de la clave.",
      "Flores únicamente con cáliz o perigonio verdoso calicoide. Falta cargar la subclave completa de familias."
    ),
  },
  dicot_group_pending_c: {
    id: "dicot_group_pending_c",
    descripcion: "Grupo C: clave de familias con corola libre y ovario súpero.",
    opcionA: {
      label: "Continuar expansión del Grupo C en una próxima etapa",
    },
    opcionA_prima: {
      label: "Volver y revisar si corresponde otro grupo",
    },
    especie: family(
      "dicot_group_c_pending",
      "Grupo C de Dicotyledoneae",
      "Rama identificada hasta grupo de la clave.",
      "Piezas de la corola libres y ovario súpero. Falta cargar la subclave completa de familias."
    ),
  },
  dicot_group_pending_d: {
    id: "dicot_group_pending_d",
    descripcion: "Grupo D: clave de familias con corola libre y ovario ínfero.",
    opcionA: {
      label: "Continuar expansión del Grupo D en una próxima etapa",
    },
    opcionA_prima: {
      label: "Volver y revisar si corresponde otro grupo",
    },
    especie: family(
      "dicot_group_d_pending",
      "Grupo D de Dicotyledoneae",
      "Rama identificada hasta grupo de la clave.",
      "Piezas de la corola libres y ovario ínfero. Falta cargar la subclave completa de familias."
    ),
  },
  dicot_group_pending_e: {
    id: "dicot_group_pending_e",
    descripcion: "Grupo E: clave de familias con corola o perigonio más o menos soldado.",
    opcionA: {
      label: "Continuar expansión del Grupo E en una próxima etapa",
    },
    opcionA_prima: {
      label: "Volver y revisar si corresponde otro grupo",
    },
    especie: family(
      "dicot_group_e_pending",
      "Grupo E de Dicotyledoneae",
      "Rama identificada hasta grupo de la clave.",
      "Piezas de la corola o perigonio más o menos soldadas. Falta cargar la subclave completa de familias."
    ),
  },
};
