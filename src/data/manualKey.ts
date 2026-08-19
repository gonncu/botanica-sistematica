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
  moraceae: family(
    "moraceae",
    "37. Moraceae",
    "Dicotiledóneas del Grupo B.",
    "Árboles con látex; flores encerradas en sicono o incrustadas en receptáculo."
  ),
  rubiaceae: family(
    "rubiaceae",
    "123. Rubiaceae",
    "Dicotiledóneas del Grupo B.",
    "Flores con cáliz/perigonio calicoide; en esta rama aparece por hojas verticiladas y ovario ínfero o semiínfero."
  ),
  rosaceae: family(
    "rosaceae",
    "63. Rosaceae",
    "Dicotiledóneas del Grupo B.",
    "Hierbas o arbustos con hojas estipuladas y ovario ínfero o semiínfero."
  ),
  santalaceae: family(
    "santalaceae",
    "40. Santalaceae",
    "Dicotiledóneas del Grupo B.",
    "Árboles con hojas sin estípulas y ovario ínfero o semiínfero."
  ),
  polygonaceae: family(
    "polygonaceae",
    "43. Polygonaceae",
    "Dicotiledóneas del Grupo B.",
    "Hojas con ócrea formada por estípulas intrapeciolares soldadas."
  ),
  ulmaceae: family(
    "ulmaceae",
    "36. Ulmaceae",
    "Dicotiledóneas del Grupo B.",
    "Árboles espinosos, flores monoicas y gineceo bicarpelar unilocular."
  ),
  phytolaccaceae: family(
    "phytolaccaceae",
    "47. Phytolaccaceae",
    "Dicotiledóneas del Grupo B.",
    "Árboles, arbustos o hierbas; en esta clave aparece por gineceo pluricarpelar o fruto baya carnosa."
  ),
  aizoaceae: family(
    "aizoaceae",
    "48. Aizoaceae",
    "Dicotiledóneas del Grupo B.",
    "Hierbas o sufrútices con ovario tricarpelar; hojas verticiladas en esta rama."
  ),
  urticaceae: family(
    "urticaceae",
    "39. Urticaceae",
    "Dicotiledóneas del Grupo B.",
    "Plantas con pelos urticantes o flores unisexuales en algunas ramas de la clave."
  ),
  cannabinaceae: family(
    "cannabinaceae",
    "38. Cannabinaceae",
    "Dicotiledóneas del Grupo B.",
    "Enredaderas dioicas con hojas opuestas."
  ),
  caryophyllaceae_b: family(
    "caryophyllaceae_b",
    "59. Caryophyllaceae",
    "Dicotiledóneas del Grupo B.",
    "Plantas monoicas herbáceas con flores hermafroditas en esta rama."
  ),
  chenopodiaceae: family(
    "chenopodiaceae",
    "44. Chenopodiaceae",
    "Dicotiledóneas del Grupo B.",
    "Hierbas o sufrútices con hojas alternas o ausentes; fruto nuez indehiscente o flores unisexuales con estambres rectos."
  ),
  ranunculaceae: family(
    "ranunculaceae",
    "54. Ranunculaceae",
    "Dicotiledóneas del Grupo C.",
    "Gineceo dialicarpelar, hojas sin estípulas y estambres indefinidos."
  ),
  rutaceae: family(
    "rutaceae",
    "70. Rutaceae",
    "Dicotiledóneas del Grupo C.",
    "En esta rama aparece por flores actinomorfas y caracteres de estambres/hojas u ovario."
  ),
  nymphaeaceae: family(
    "nymphaeaceae",
    "52. Nymphaeaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas acuáticas con hojas flotantes peltadas y hojas sumergidas finamente laciniadas."
  ),
  crassulaceae: family(
    "crassulaceae",
    "61. Crassulaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas pigmeas de suelos húmedos, con hojas lineales enteras."
  ),
  papaveraceae: family(
    "papaveraceae",
    "57. Papaveraceae",
    "Dicotiledóneas del Grupo C.",
    "Flores cigomorfas o irregulares; cáliz con 2 sépalos y pétalos 4, o plantas robustas con látex."
  ),
  resedaceae: family(
    "resedaceae",
    "60. Resedaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores cigomorfas con estambres alrededor de 20 o flores actinomorfas con numerosos estambres."
  ),
  leguminosae: family(
    "leguminosae",
    "64. Leguminosae",
    "Dicotiledóneas del Grupo C.",
    "Ovario unicarpelar unilocular; fruto legumbre."
  ),
  violaceae: family(
    "violaceae",
    "67. Violaceae",
    "Dicotiledóneas del Grupo C.",
    "Estambres 5 y estípulas herbáceas."
  ),
  capparidaceae: family(
    "capparidaceae",
    "58. Capparidaceae",
    "Dicotiledóneas del Grupo C.",
    "Estípulas espiniformes o hojas 3-5-folioladas con estípulas espiniformes."
  ),
  polygalaceae: family(
    "polygalaceae",
    "72. Polygalaceae",
    "Dicotiledóneas del Grupo C.",
    "Estambres monadelfos, fruto bilocular, cáliz no espolonado; hierbas."
  ),
  tropaeolaceae: family(
    "tropaeolaceae",
    "67. Tropaeolaceae",
    "Dicotiledóneas del Grupo C.",
    "Estambres libres, fruto trilocular, cáliz espolonado; enredaderas."
  ),
  malvaceae: family(
    "malvaceae",
    "81. Malvaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores actinomorfas con estambres numerosos y monadelfos formando un tubo."
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
    milestone: "Pteridophyta",
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
    milestone: "Spermatophyta",
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
    milestone: "Dicotyledoneae",
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
      keyStep: "B",
      nextNodeId: "dicot_group_b_a",
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
      keyStep: "D",
      nextNodeId: "dicot_group_pending_c",
    },
    opcionA_prima: {
      label: "Ovario ínfero (Grupo D)",
      nextNodeId: "dicot_group_pending_d",
    },
  },
  dicot_group_a_1: {
    id: "dicot_group_a_1",
    milestone: "Grupo A",
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
  dicot_group_b_a: {
    id: "dicot_group_b_a",
    milestone: "Grupo B",
    descripcion: "Grupo B - A: ¿las flores están encerradas en un receptáculo globoso o piriforme (sicono)?",
    opcionA: {
      label: "Sí; árboles con látex",
      keyStep: "A",
      especieId: "moraceae",
    },
    opcionA_prima: {
      label: "No; flores con inflorescencias de otros tipos",
      keyStep: "A'",
      nextNodeId: "dicot_group_b_b",
    },
  },
  dicot_group_b_b: {
    id: "dicot_group_b_b",
    descripcion: "Grupo B - B: ¿las flores están incrustadas en alvéolos de un receptáculo plano o ligeramente cóncavo?",
    opcionA: {
      label: "Sí; perigonio soldado al receptáculo",
      keyStep: "B",
      especieId: "moraceae",
    },
    opcionA_prima: {
      label: "No; flores en inflorescencias de otros tipos",
      keyStep: "B'",
      nextNodeId: "dicot_group_b_c",
    },
  },
  dicot_group_b_c: {
    id: "dicot_group_b_c",
    descripcion: "Grupo B - C: ¿el ovario es ínfero o semiínfero?",
    opcionA: {
      label: "Sí",
      keyStep: "C",
      nextNodeId: "dicot_group_b_d",
    },
    opcionA_prima: {
      label: "No; ovario súpero",
      keyStep: "C'",
      nextNodeId: "dicot_group_b_f",
    },
  },
  dicot_group_b_d: {
    id: "dicot_group_b_d",
    descripcion: "Grupo B - D: con ovario ínfero o semiínfero, ¿cómo son las hojas?",
    opcionA: {
      label: "Hojas verticiladas",
      keyStep: "D",
      especieId: "rubiaceae",
    },
    opcionA_prima: {
      label: "Hojas opuestas o alternas",
      keyStep: "D'",
      nextNodeId: "dicot_group_b_e",
    },
  },
  dicot_group_b_e: {
    id: "dicot_group_b_e",
    descripcion: "Grupo B - E: ¿hierba/arbusto con estípulas o árbol sin estípulas?",
    opcionA: {
      label: "Hierbas o arbustos; hojas estipuladas",
      keyStep: "E",
      especieId: "rosaceae",
    },
    opcionA_prima: {
      label: "Árboles; hojas sin estípulas",
      keyStep: "E'",
      especieId: "santalaceae",
    },
  },
  dicot_group_b_f: {
    id: "dicot_group_b_f",
    descripcion: "Grupo B - F: con ovario súpero, ¿las hojas tienen ócrea?",
    opcionA: {
      label: "Sí; ócrea formada por estípulas intrapeciolares soldadas",
      keyStep: "F",
      especieId: "polygonaceae",
    },
    opcionA_prima: {
      label: "No; hojas sin ócrea",
      keyStep: "F'",
      nextNodeId: "dicot_group_b_g",
    },
  },
  dicot_group_b_g: {
    id: "dicot_group_b_g",
    descripcion: "Grupo B - G: ¿árbol/arbusto o hierba/sufrútice?",
    opcionA: {
      label: "Árboles o arbustos",
      keyStep: "G",
      nextNodeId: "dicot_group_b_h",
    },
    opcionA_prima: {
      label: "Hierbas o sufrútices",
      keyStep: "G'",
      nextNodeId: "dicot_group_b_j",
    },
  },
  dicot_group_b_h: {
    id: "dicot_group_b_h",
    descripcion: "Grupo B - H: en árboles o arbustos, ¿hay látex y ovario 3-carpelar, 3-locular?",
    opcionA: {
      label: "Sí",
      keyStep: "H",
      especieId: "euphorbiaceae",
    },
    opcionA_prima: {
      label: "No; sin látex y ovario no 3-locular",
      keyStep: "H'",
      nextNodeId: "dicot_group_b_i",
    },
  },
  dicot_group_b_i: {
    id: "dicot_group_b_i",
    descripcion: "Grupo B - I: ¿árbol espinoso monoico o árbol/arbusto no espinoso dioico?",
    opcionA: {
      label: "Árboles espinosos; flores monoicas; gineceo bicarpelar unilocular",
      keyStep: "I",
      especieId: "ulmaceae",
    },
    opcionA_prima: {
      label: "Árboles o arbustos no espinosos; flores dioicas; gineceo 5-∞-carpelar",
      keyStep: "I'",
      especieId: "phytolaccaceae",
    },
  },
  dicot_group_b_j: {
    id: "dicot_group_b_j",
    descripcion: "Grupo B - J: en hierbas o sufrútices, ¿el ovario es tricarpelar y trilocular?",
    opcionA: {
      label: "Sí",
      keyStep: "J",
      nextNodeId: "dicot_group_b_k",
    },
    opcionA_prima: {
      label: "No; ovario unilocular",
      keyStep: "J'",
      nextNodeId: "dicot_group_b_l",
    },
  },
  dicot_group_b_k: {
    id: "dicot_group_b_k",
    descripcion: "Grupo B - K: con ovario tricarpelar, ¿las hojas son verticiladas?",
    opcionA: {
      label: "Hojas verticiladas",
      keyStep: "K",
      especieId: "aizoaceae",
    },
    opcionA_prima: {
      label: "Hojas no verticiladas",
      keyStep: "K'",
      especieId: "euphorbiaceae",
    },
  },
  dicot_group_b_l: {
    id: "dicot_group_b_l",
    descripcion: "Grupo B - L: con ovario unilocular, ¿la planta tiene pelos urticantes?",
    opcionA: {
      label: "Sí",
      keyStep: "L",
      especieId: "urticaceae",
    },
    opcionA_prima: {
      label: "No",
      keyStep: "L'",
      nextNodeId: "dicot_group_b_m",
    },
  },
  dicot_group_b_m: {
    id: "dicot_group_b_m",
    descripcion: "Grupo B - M: sin pelos urticantes, ¿las hojas son opuestas?",
    opcionA: {
      label: "Hojas opuestas",
      keyStep: "M",
      nextNodeId: "dicot_group_b_n",
    },
    opcionA_prima: {
      label: "Hojas alternas o ausentes",
      keyStep: "M'",
      nextNodeId: "dicot_group_b_p",
    },
  },
  dicot_group_b_n: {
    id: "dicot_group_b_n",
    descripcion: "Grupo B - N: con hojas opuestas, ¿planta dioica enredadera o monoica herbácea?",
    opcionA: {
      label: "Plantas dioicas; enredaderas",
      keyStep: "N",
      especieId: "cannabinaceae",
    },
    opcionA_prima: {
      label: "Plantas monoicas; herbáceas",
      keyStep: "N'",
      nextNodeId: "dicot_group_b_o",
    },
  },
  dicot_group_b_o: {
    id: "dicot_group_b_o",
    descripcion: "Grupo B - O: en plantas monoicas herbáceas, ¿las flores son hermafroditas?",
    opcionA: {
      label: "Flores hermafroditas",
      keyStep: "O",
      especieId: "caryophyllaceae_b",
    },
    opcionA_prima: {
      label: "Flores unisexuales",
      keyStep: "O'",
      especieId: "urticaceae",
    },
  },
  dicot_group_b_p: {
    id: "dicot_group_b_p",
    descripcion: "Grupo B - P: con hojas alternas o ausentes, ¿las flores son hermafroditas?",
    opcionA: {
      label: "Flores hermafroditas",
      keyStep: "P",
      nextNodeId: "dicot_group_b_q",
    },
    opcionA_prima: {
      label: "Flores unisexuales, o unisexuales y hermafroditas en la misma planta",
      keyStep: "P'",
      nextNodeId: "dicot_group_b_r",
    },
  },
  dicot_group_b_q: {
    id: "dicot_group_b_q",
    descripcion: "Grupo B - Q: con flores hermafroditas, ¿el fruto es baya carnosa o nuez indehiscente?",
    opcionA: {
      label: "Fruto baya carnosa",
      keyStep: "Q",
      especieId: "phytolaccaceae",
    },
    opcionA_prima: {
      label: "Fruto nuez indehiscente",
      keyStep: "Q'",
      especieId: "chenopodiaceae",
    },
  },
  dicot_group_b_r: {
    id: "dicot_group_b_r",
    descripcion: "Grupo B - R: con flores unisexuales, ¿los estambres son curvos o rectos?",
    opcionA: {
      label: "Estambres curvos; flores polígamas",
      keyStep: "R",
      especieId: "urticaceae",
    },
    opcionA_prima: {
      label: "Estambres rectos; flores unisexuales",
      keyStep: "R'",
      especieId: "chenopodiaceae",
    },
  },
  dicot_group_pending_c: {
    id: "dicot_group_pending_c",
    milestone: "Grupo C",
    descripcion: "Grupo C - A: ¿el gineceo es dialicarpelar, formado por dos o más ovarios separados?",
    opcionA: {
      label: "Sí, gineceo dialicarpelar",
      keyStep: "A",
      nextNodeId: "dicot_group_c_b",
    },
    opcionA_prima: {
      label: "No, gineceo formado por un solo ovario con carpelos soldados",
      keyStep: "A'",
      nextNodeId: "dicot_group_c_f",
    },
  },
  dicot_group_c_b: {
    id: "dicot_group_c_b",
    milestone: "Grupo C",
    descripcion: "Grupo C - B: con gineceo dialicarpelar, ¿las hojas tienen estípulas?",
    opcionA: {
      label: "Hojas con estípulas",
      keyStep: "B",
      especieId: "rosaceae",
    },
    opcionA_prima: {
      label: "Hojas sin estípulas",
      keyStep: "B'",
      nextNodeId: "dicot_group_c_c",
    },
  },
  dicot_group_c_c: {
    id: "dicot_group_c_c",
    milestone: "Grupo C",
    descripcion: "Grupo C - C: con hojas sin estípulas, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres indefinidos",
      keyStep: "C",
      especieId: "ranunculaceae",
    },
    opcionA_prima: {
      label: "Estambres 5-6",
      keyStep: "C'",
      nextNodeId: "dicot_group_c_d",
    },
  },
  dicot_group_c_d: {
    id: "dicot_group_c_d",
    milestone: "Grupo C",
    descripcion: "Grupo C - D: con estambres 5-6, ¿árboles o hierbas?",
    opcionA: {
      label: "Árboles",
      keyStep: "D",
      especieId: "rutaceae",
    },
    opcionA_prima: {
      label: "Hierbas",
      keyStep: "D'",
      nextNodeId: "dicot_group_c_e",
    },
  },
  dicot_group_c_e: {
    id: "dicot_group_c_e",
    milestone: "Grupo C",
    descripcion: "Grupo C - E: en hierbas, ¿acuáticas con hojas peltadas o pigmeas de suelos húmedos?",
    opcionA: {
      label: "Plantas acuáticas, con hojas flotantes peltadas y hojas sumergidas laciniadas",
      keyStep: "E",
      especieId: "nymphaeaceae",
    },
    opcionA_prima: {
      label: "Plantas pigmeas de suelos húmedos, con hojas lineales enteras",
      keyStep: "E'",
      especieId: "crassulaceae",
    },
  },
  dicot_group_c_f: {
    id: "dicot_group_c_f",
    milestone: "Grupo C",
    descripcion: "Grupo C - F: con un solo ovario, ¿las flores son cigomorfas/irregulares o actinomorfas?",
    opcionA: {
      label: "Flores cigomorfas o irregulares",
      keyStep: "F",
      nextNodeId: "dicot_group_c_g",
    },
    opcionA_prima: {
      label: "Flores actinomorfas",
      keyStep: "F'",
      nextNodeId: "dicot_group_c_m",
    },
  },
  dicot_group_c_g: {
    id: "dicot_group_c_g",
    milestone: "Grupo C",
    descripcion: "Grupo C - G: en flores cigomorfas, ¿cómo es el cáliz?",
    opcionA: {
      label: "Cáliz formado por 2 sépalos; pétalos 4; estambres 4",
      keyStep: "G",
      especieId: "papaveraceae",
    },
    opcionA_prima: {
      label: "Cáliz con 4-5 sépalos; pétalos 2-5; estambres 5-20",
      keyStep: "G'",
      nextNodeId: "dicot_group_c_h",
    },
  },
  dicot_group_c_h: {
    id: "dicot_group_c_h",
    milestone: "Grupo C",
    descripcion: "Grupo C - H: ¿los estambres son alrededor de 20 o 5-10?",
    opcionA: {
      label: "Estambres alrededor de 20",
      keyStep: "H",
      especieId: "resedaceae",
    },
    opcionA_prima: {
      label: "Estambres 5-10",
      keyStep: "H'",
      nextNodeId: "dicot_group_c_i",
    },
  },
  dicot_group_c_i: {
    id: "dicot_group_c_i",
    milestone: "Grupo C",
    descripcion: "Grupo C - I: con estambres 5-10, ¿fruto legumbre u otro fruto?",
    opcionA: {
      label: "Estambres 10; ovario unicarpelar unilocular; fruto legumbre",
      keyStep: "I",
      especieId: "leguminosae",
    },
    opcionA_prima: {
      label: "Estambres 5-8; ovario 2-3-carpelar; fruto no legumbre",
      keyStep: "I'",
      nextNodeId: "dicot_group_c_j",
    },
  },
  dicot_group_c_j: {
    id: "dicot_group_c_j",
    milestone: "Grupo C",
    descripcion: "Grupo C - J: ¿estambres 5-6 con estípulas o estambres 8 sin estípulas?",
    opcionA: {
      label: "Estambres 5-6; hojas con estípulas",
      keyStep: "J",
      nextNodeId: "dicot_group_c_k",
    },
    opcionA_prima: {
      label: "Estambres 8; hojas sin estípulas",
      keyStep: "J'",
      nextNodeId: "dicot_group_c_l",
    },
  },
  dicot_group_c_k: {
    id: "dicot_group_c_k",
    milestone: "Grupo C",
    descripcion: "Grupo C - K: con estípulas, ¿estambres 5 o 6?",
    opcionA: {
      label: "Estambres 5; estípulas herbáceas",
      keyStep: "K",
      especieId: "violaceae",
    },
    opcionA_prima: {
      label: "Estambres 6; estípulas espiniformes",
      keyStep: "K'",
      especieId: "capparidaceae",
    },
  },
  dicot_group_c_l: {
    id: "dicot_group_c_l",
    milestone: "Grupo C",
    descripcion: "Grupo C - L: con estambres 8 sin estípulas, ¿estambres monadelfos o libres?",
    opcionA: {
      label: "Estambres monadelfos; fruto bilocular; cáliz no espolonado; hierbas",
      keyStep: "L",
      especieId: "polygalaceae",
    },
    opcionA_prima: {
      label: "Estambres libres; fruto trilocular; cáliz espolonado; enredaderas",
      keyStep: "L'",
      especieId: "tropaeolaceae",
    },
  },
  dicot_group_c_m: {
    id: "dicot_group_c_m",
    milestone: "Grupo C",
    descripcion: "Grupo C - M: en flores actinomorfas, ¿los estambres son numerosos y monadelfos formando un tubo?",
    opcionA: {
      label: "Sí; tubo estaminal atravesado por el estilo",
      keyStep: "M",
      especieId: "malvaceae",
    },
    opcionA_prima: {
      label: "No; estambres libres o unidos sólo en la base o en grupos",
      keyStep: "M'",
      nextNodeId: "dicot_group_c_pending_second_half",
    },
  },
  dicot_group_c_pending_second_half: {
    id: "dicot_group_c_pending_second_half",
    milestone: "Grupo C",
    descripcion: "Grupo C - N en adelante: falta cargar la segunda mitad del Grupo C.",
    opcionA: {
      label: "Esta rama sigue en el manual desde N: árboles/arbustos y hierbas con flores actinomorfas",
    },
    opcionA_prima: {
      label: "Volver y revisar la elección anterior",
    },
    especie: family(
      "dicot_group_c_second_half_pending",
      "Grupo C desde N en adelante",
      "Rama identificada hasta el punto N del Grupo C.",
      "Falta cargar la continuación del Grupo C desde árboles/arbustos o hierbas con flores actinomorfas."
    ),
  },
  dicot_group_pending_d: {
    id: "dicot_group_pending_d",
    milestone: "Grupo D",
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
    milestone: "Grupo E",
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
