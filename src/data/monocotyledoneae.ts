// Estructura completa de clados para Monocotiledoneae
// Basado en el manual de Flora de Buenos Aires

export const monocotiledoneaeData = {
  // Nivel 0: Raíz de Monocotiledoneae
  monocot_root: {
    id: "monocot_root",
    milestone: "Monocotiledoneae",
    descripcion: "Clase Monocotiledoneae: Embrión con 1 solo cotiledón. Hojas generalmente paralelinervadas. Flores generalmente trimeras.",
    opcionA: {
      label: "Plantas arborescentes, con tronco terminado en una sola yema",
      nextNodeId: "palmae",
      familia: "19. Palmae"
    },
    opcionA_prima: {
      label: "Plantas herbáceas, con otros caracteres",
      nextNodeId: "herbaceae"
    }
  },

  // RAMA A: Palmae
  palmae: {
    id: "palmae",
    descripcion: "Palmae: Plantas con tronco único coronado de hojas grandes pinnadas o flabeladas. Flores en panojas protegidas por espata.",
    opcionA: {
      label: "Hojas pinnadas",
      especieId: "cocos_nucifera"
    },
    opcionA_prima: {
      label: "Hojas flabeladas",
      especieId: "palm_flabelada"
    }
  },

  // RAMA A': Plantas herbáceas
  herbaceae: {
    id: "herbaceae",
    descripcion: "¿Qué tipo de plantas son?",
    opcionA: {
      label: "Plantas acuáticas, reducidas a un pequeño cuerpo taliforme",
      especieId: "lemna"
    },
    opcionA_prima: {
      label: "Plantas acuáticas o terrestres con tallos y hojas bien diferenciados",
      nextNodeId: "herbaceae_b"
    }
  },

  // Nivel B: Herbáceas (continuación)
  herbaceae_b: {
    id: "herbaceae_b",
    descripcion: "¿Cómo son las flores?",
    opcionA: {
      label: "Flores desnudas (protegidas o no por brácteas) o con perigonio verdoso poco llamativo",
      nextNodeId: "herbaceae_b_c"
    },
    opcionA_prima: {
      label: "Flores con cáliz y corola bien diferenciados o con perigonio coralino vistoso",
      nextNodeId: "herbaceae_c_prima"
    }
  },

  // Nivel C (dentro de B): Flores desnudas
  herbaceae_b_c: {
    id: "herbaceae_b_c",
    descripcion: "¿Cómo están agrupadas las flores?",
    opcionA: {
      label: "Flores agrupadas en espiguillas (pastos y ciperos)",
      nextNodeId: "herbaceae_b_c_d"
    },
    opcionA_prima: {
      label: "Flores desnudas o con perigonio verdoso, sin espiguillas",
      nextNodeId: "herbaceae_b_c_d_prima"
    }
  },

  // D: Espiguillas - Gramineae vs Cyperaceae
  herbaceae_b_c_d: {
    id: "herbaceae_b_c_d",
    descripcion: "¿Cuál es la estructura del tallo y las vainas?",
    opcionA: {
      label: "Tallos huecos con nudos bien marcados. Vainas abiertas. Fruto cariopse",
      familia: "17. Gramineae",
      especieId: "gramineae"
    },
    opcionA_prima: {
      label: "Tallos macizos, triangulares. Vainas cerradas. Fruto aquenio",
      familia: "18. Cyperaceae",
      especieId: "cyperaceae"
    }
  },

  // D': Flores sin espiguillas
  herbaceae_b_c_d_prima: {
    id: "herbaceae_b_c_d_prima",
    descripcion: "¿Cómo es el perigonio?",
    opcionA: {
      label: "Flores con perigonio verdoso formado por 6 piezas",
      nextNodeId: "herbaceae_b_c_f"
    },
    opcionA_prima: {
      label: "Flores desnudas o con perigonio de menos de 6 piezas",
      nextNodeId: "herbaceae_b_c_f_prima"
    }
  },

  // F: Perigonio 6 piezas
  herbaceae_b_c_f: {
    id: "herbaceae_b_c_f",
    descripcion: "¿Son plantas trepadoras?",
    opcionA: {
      label: "Arbustos o hierbas trepadoras",
      nextNodeId: "herbaceae_b_c_f_g"
    },
    opcionA_prima: {
      label: "Plantas no trepadoras",
      nextNodeId: "herbaceae_b_c_f_g_prima"
    }
  },

  // G: Trepadoras
  herbaceae_b_c_f_g: {
    id: "herbaceae_b_c_f_g",
    descripcion: "¿Dónde está el ovario?",
    opcionA: {
      label: "Ovario ínfero. Hojas retinervadas",
      familia: "28. Dioscoreaceae",
      especieId: "dioscoreaceae"
    },
    opcionA_prima: {
      label: "Ovario súpero. Hojas paralelinervadas",
      familia: "26. Liliaceae",
      especieId: "liliaceae"
    }
  },

  // G': No trepadoras
  herbaceae_b_c_f_g_prima: {
    id: "herbaceae_b_c_f_g_prima",
    descripcion: "¿Cómo es el gineceo?",
    opcionA: {
      label: "Gineceo dialicarpelar con 3-6 carpelos",
      familia: "13. Scheuchzeriaceae",
      especieId: "scheuchzeriaceae"
    },
    opcionA_prima: {
      label: "Gineceo gamocarpelar",
      familia: "25. Juncaceae",
      especieId: "juncaceae"
    }
  },

  // F': Menos de 6 piezas de perigonio
  herbaceae_b_c_f_prima: {
    id: "herbaceae_b_c_f_prima",
    descripcion: "¿Cómo son las plantas?",
    opcionA: {
      label: "Plantas robustas, erectas, con hojas en forma de sable. Flores en espigas muy densas",
      familia: "11. Typhaceae",
      especieId: "typhaceae"
    },
    opcionA_prima: {
      label: "Plantas acuáticas, flotantes o sumergidas",
      nextNodeId: "herbaceae_b_c_f_prima_k"
    }
  },

  herbaceae_b_c_f_prima_k: {
    id: "herbaceae_b_c_f_prima_k",
    descripcion: "¿Cómo son las hojas?",
    opcionA: {
      label: "Hojas anchas, crasas, en rosetas. Plantas flotantes sin tallo",
      familia: "20. Araceae",
      especieId: "araceae"
    },
    opcionA_prima: {
      label: "Hojas herbáceas a lo largo de tallos alargados",
      familia: "12. Potamogetonaceae",
      especieId: "potamogetonaceae"
    }
  },

  // C': Flores con cáliz y corola
  herbaceae_c_prima: {
    id: "herbaceae_c_prima",
    descripcion: "¿Cuántos estambres fértiles hay?",
    opcionA: {
      label: "Flores con un solo estambre fértil",
      nextNodeId: "herbaceae_c_prima_l"
    },
    opcionA_prima: {
      label: "Flores con más de dos estambres",
      nextNodeId: "herbaceae_c_prima_l_prima"
    }
  },

  // L: Un estambre
  herbaceae_c_prima_l: {
    id: "herbaceae_c_prima_l",
    descripcion: "¿Cómo es el estambre?",
    opcionA: {
      label: "Estambre soldado con el pistilo (ginostemio). Polen en polinias",
      familia: "33. Orchidaceae",
      especieId: "orchidaceae"
    },
    opcionA_prima: {
      label: "Estambre no soldado con el pistilo. Polen no en polinias",
      nextNodeId: "herbaceae_c_prima_l_m_prima"
    }
  },

  herbaceae_c_prima_l_m_prima: {
    id: "herbaceae_c_prima_l_m_prima",
    descripcion: "¿Cómo es la antera?",
    opcionA: {
      label: "Estambre con antera bilocular",
      familia: "30. Zingiberaceae",
      especieId: "zingiberaceae"
    },
    opcionA_prima: {
      label: "Estambre con antera unilocular",
      nextNodeId: "herbaceae_c_prima_l_m_prima_n_prima"
    }
  },

  herbaceae_c_prima_l_m_prima_n_prima: {
    id: "herbaceae_c_prima_l_m_prima_n_prima",
    descripcion: "¿Cuántos óvulos hay en las cavidades del ovario?",
    opcionA: {
      label: "Cavidades del ovario con muchos óvulos",
      familia: "31. Cannaceae",
      especieId: "cannaceae"
    },
    opcionA_prima: {
      label: "Cavidades del ovario con un solo óvulo",
      familia: "32. Marantaceae",
      especieId: "marantaceae"
    }
  },

  // L': Más estambres
  herbaceae_c_prima_l_prima: {
    id: "herbaceae_c_prima_l_prima",
    descripcion: "¿Dónde viven las plantas?",
    opcionA: {
      label: "Plantas acuáticas, flotantes o sumergidas",
      nextNodeId: "herbaceae_c_prima_l_prima_p"
    },
    opcionA_prima: {
      label: "Plantas terrestres o de lugares pantanosos",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima"
    }
  },

  // P: Acuáticas
  herbaceae_c_prima_l_prima_p: {
    id: "herbaceae_c_prima_l_prima_p",
    descripcion: "¿Cómo son las flores?",
    opcionA: {
      label: "Flores zigomorfas, azules o rosadas. Ovario súpero, trilocular",
      familia: "21. Pontederiaceae",
      especieId: "pontederiaceae"
    },
    opcionA_prima: {
      label: "Flores actinomorfas, blancas o amarillas",
      nextNodeId: "herbaceae_c_prima_l_prima_p_q_prima"
    }
  },

  herbaceae_c_prima_l_prima_p_q_prima: {
    id: "herbaceae_c_prima_l_prima_p_q_prima",
    descripcion: "¿Dónde está el ovario?",
    opcionA: {
      label: "Ovario súpero",
      familia: "15. Butomaceae",
      especieId: "butomaceae"
    },
    opcionA_prima: {
      label: "Ovario ínfero",
      familia: "16. Hydrocharitaceae",
      especieId: "hydrocharitaceae"
    }
  },

  // P': Terrestres
  herbaceae_c_prima_l_prima_p_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima",
    descripcion: "¿Cómo es el gineceo?",
    opcionA: {
      label: "Gineceo dialicarpelar. Hojas largamente pecioladas, ovadas o sagitadas",
      familia: "14. Alismataceae",
      especieId: "alismataceae"
    },
    opcionA_prima: {
      label: "Gineceo gamocarpelar",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima"
    }
  },

  herbaceae_c_prima_l_prima_p_prima_s_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima_s_prima",
    descripcion: "¿Dónde viven exactamente?",
    opcionA: {
      label: "Plantas de lugares pantanosos o inundados, con flores cigomorfas, azules o violáceas",
      familia: "24. Pontederiaceae",
      especieId: "pontederiaceae_2"
    },
    opcionA_prima: {
      label: "Plantas terrestres o epífitas",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima"
    }
  },

  herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima",
    descripcion: "¿Son plantas epífitas?",
    opcionA: {
      label: "Plantas epífitas con hojas subuladas en roseta",
      familia: "22. Bromeliaceae",
      especieId: "bromeliaceae"
    },
    opcionA_prima: {
      label: "Plantas terrícolas",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima"
    }
  },

  herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima",
    descripcion: "¿Dónde está el ovario?",
    opcionA: {
      label: "Ovario ínfero",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v"
    },
    opcionA_prima: {
      label: "Ovario súpero",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v_prima"
    }
  },

  // V: Ovario ínfero
  herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v: {
    id: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v",
    descripcion: "¿Cuántos estambres hay?",
    opcionA: {
      label: "Estambres 3",
      familia: "29. Iridaceae",
      especieId: "iridaceae"
    },
    opcionA_prima: {
      label: "Estambres 6",
      familia: "27. Amaryllidaceae",
      especieId: "amaryllidaceae"
    }
  },

  // V': Ovario súpero
  herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v_prima",
    descripcion: "¿Cómo es el perianthio?",
    opcionA: {
      label: "Cáliz y corola diferenciados",
      familia: "23. Commelinaceae",
      especieId: "commelinaceae"
    },
    opcionA_prima: {
      label: "Cáliz y corola iguales, formando perigonio coralino",
      familia: "26. Liliaceae",
      especieId: "liliaceae_2"
    }
  }
};

// Especies de Monocotiledoneae
export const monocotEspecies = {
  // Palmae
  cocos_nucifera: {
    id: "cocos_nucifera",
    nombreCientifico: "Cocos nucifera L.",
    nombreVulgar: "Coco",
    familia: "Palmae (Arecaceae)",
    descripcion: "Palma tropical con tronco único terminado en una yema.",
    caracteristicas: "Hojas pinnadas muy grandes, flores amarillas pequeñas en panojas, fruto drupa grande.",
    distribucion: "Regiones tropicales de Argentina, cultivos ocasionales.",
    imagen: ""
  },

  palm_flabelada: {
    id: "palm_flabelada",
    nombreCientifico: "Chamaerops sp.",
    nombreVulgar: "Palma abanico",
    familia: "Palmae",
    descripcion: "Palma con hojas en forma de abanico.",
    caracteristicas: "Hojas flabeladas, tallos múltiples.",
    distribucion: "Áreas cultivadas",
    imagen: ""
  },

  // Plantas acuáticas simples
  lemna: {
    id: "lemna",
    nombreCientifico: "Lemna sp.",
    nombreVulgar: "Lenteja de agua",
    familia: "21. Lemnaceae",
    descripcion: "Planta acuática muy pequeña, reducida a un cuerpo taliforme flotante.",
    caracteristicas: "Sin tallo ni raíces verdaderas, solo filoides redondos flotantes.",
    distribucion: "Aguas dulces estancadas, muy común en lagunas.",
    imagen: ""
  },

  // Gramineae
  gramineae: {
    id: "gramineae",
    nombreCientifico: "Paspalum notatum Flüggé",
    nombreVulgar: "Pasto bahía",
    familia: "17. Gramineae",
    descripcion: "Gramínea perenne con tallos huecos y espiguillas.",
    caracteristicas: "Tallos huecos con nudos, vainas abiertas, inflorescencias en espigas.",
    distribucion: "Praderas de Buenos Aires y alrededores",
    imagen: ""
  },

  // Cyperaceae
  cyperaceae: {
    id: "cyperaceae",
    nombreCientifico: "Cyperus sp.",
    nombreVulgar: "Junquillo",
    familia: "18. Cyperaceae",
    descripcion: "Cipácea con tallo triangular.",
    caracteristicas: "Tallos macizos triangulares, vainas cerradas, espiguillas.",
    distribucion: "Lugares pantanosos y húmedos",
    imagen: ""
  },

  // Otras familias
  dioscoreaceae: {
    id: "dioscoreaceae",
    nombreCientifico: "Dioscorea sp.",
    nombreVulgar: "Ñame",
    familia: "28. Dioscoreaceae",
    descripcion: "Hierba trepadora con ovario ínfero.",
    caracteristicas: "Hojas retinervadas, tallos volubles, flores pequeñas verdosas.",
    distribucion: "Bosques y zonas cultivadas",
    imagen: ""
  },

  liliaceae: {
    id: "liliaceae",
    nombreCientifico: "Lilium sp.",
    nombreVulgar: "Lirio",
    familia: "26. Liliaceae",
    descripcion: "Planta con flores vistosas de perigonio.",
    caracteristicas: "Hojas paralelinervadas, flores grandes con 6 tépalos de colores.",
    distribucion: "Cultivadas en jardines",
    imagen: ""
  },

  liliaceae_2: {
    id: "liliaceae_2",
    nombreCientifico: "Lilium sp.",
    nombreVulgar: "Lirio (terrícola)",
    familia: "26. Liliaceae",
    descripcion: "Planta terrícola con perigonio coralino.",
    caracteristicas: "Cáliz y corola iguales formando perigonio, ovario súpero.",
    distribucion: "Cultivos y jardines",
    imagen: ""
  },

  scheuchzeriaceae: {
    id: "scheuchzeriaceae",
    nombreCientifico: "Scheuchzeria palustris L.",
    nombreVulgar: "Plantas palustres",
    familia: "13. Scheuchzeriaceae",
    descripcion: "Plantas de lugares pantanosos.",
    caracteristicas: "Gineceo dialicarpelar con 3-6 carpelos.",
    distribucion: "Pantanos y áreas húmedas",
    imagen: ""
  },

  juncaceae: {
    id: "juncaceae",
    nombreCientifico: "Juncus sp.",
    nombreVulgar: "Junco",
    familia: "25. Juncaceae",
    descripcion: "Plantas tipo junco con gineceo gamocarpelar.",
    caracteristicas: "Tallos cilíndricos, flores en fascículos o panojas.",
    distribucion: "Áreas húmedas y pantanosas",
    imagen: ""
  },

  typhaceae: {
    id: "typhaceae",
    nombreCientifico: "Typha latifolia L.",
    nombreVulgar: "Totora",
    familia: "11. Typhaceae",
    descripcion: "Planta robusta de terrenos pantanosos.",
    caracteristicas: "Hojas en forma de sable, flores agrupadas en espigas muy densas marrones.",
    distribucion: "Pantanos, ciénegas, márgenes de lagunas",
    imagen: ""
  },

  araceae: {
    id: "araceae",
    nombreCientifico: "Caladium bicolor Vent.",
    nombreVulgar: "Taro, malanga",
    familia: "20. Araceae",
    descripcion: "Planta acuática flotante con hojas grandes.",
    caracteristicas: "Hojas anchas crasas en roseta, flores en espádice protegido por espata.",
    distribucion: "Ambientes acuáticos tropicales",
    imagen: ""
  },

  potamogetonaceae: {
    id: "potamogetonaceae",
    nombreCientifico: "Potamogeton sp.",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Planta acuática sumergida.",
    caracteristicas: "Hojas alternas herbáceas, flores pequeñas en espigas.",
    distribucion: "Aguas dulces, lagunas y esteros",
    imagen: ""
  },

  orchidaceae: {
    id: "orchidaceae",
    nombreCientifico: "Oncidium sp.",
    nombreVulgar: "Orquídea",
    familia: "33. Orchidaceae",
    descripcion: "Orquídea con ginostemio característico.",
    caracteristicas: "Un estambre fértil soldado con pistilo, polen en polinias.",
    distribucion: "Ambientes selváticos y cultivadas",
    imagen: ""
  },

  zingiberaceae: {
    id: "zingiberaceae",
    nombreCientifico: "Zingiber officinale Rosc.",
    nombreVulgar: "Jengibre",
    familia: "30. Zingiberaceae",
    descripcion: "Planta con antera bilocular.",
    caracteristicas: "Rizoma aromático, flores con antera bilocular.",
    distribucion: "Cultivos tropicales",
    imagen: ""
  },

  cannaceae: {
    id: "cannaceae",
    nombreCientifico: "Canna edulis Ker.",
    nombreVulgar: "Caña de Indias",
    familia: "31. Cannaceae",
    descripcion: "Planta con muchos óvulos.",
    caracteristicas: "Hojas anchas lanceoladas, flores vistosas rojas o amarillas.",
    distribucion: "Cultivos y ornamentales",
    imagen: ""
  },

  marantaceae: {
    id: "marantaceae",
    nombreCientifico: "Maranta arundinacea L.",
    nombreVulgar: "Maranta",
    familia: "32. Marantaceae",
    descripcion: "Planta con un óvulo por cavidad.",
    caracteristicas: "Hojas variegadas, flores blancas pequeñas.",
    distribucion: "Bosques tropicales",
    imagen: ""
  },

  pontederiaceae: {
    id: "pontederiaceae",
    nombreCientifico: "Eichhornia crassipes Solms",
    nombreVulgar: "Jacinto de agua",
    familia: "21. Pontederiaceae",
    descripcion: "Planta acuática con flores zigomorfas.",
    caracteristicas: "Hojas pecioladas hinchadas, flores lila en espiga.",
    distribucion: "Lagunas y esteros, muy invasora",
    imagen: ""
  },

  pontederiaceae_2: {
    id: "pontederiaceae_2",
    nombreCientifico: "Pontederia cordata L.",
    nombreVulgar: "Pontederia",
    familia: "24. Pontederiaceae",
    descripcion: "Pontederia terrestre de ambientes pantanosos.",
    caracteristicas: "Flores cigomorfas azules o violáceas.",
    distribucion: "Lugares pantanosos inundados",
    imagen: ""
  },

  butomaceae: {
    id: "butomaceae",
    nombreCientifico: "Butomus umbellatus L.",
    nombreVulgar: "Butomus",
    familia: "15. Butomaceae",
    descripcion: "Planta acuática con ovario súpero.",
    caracteristicas: "Flores actinomorfas blancas o rosadas en umbela.",
    distribucion: "Aguas dulces",
    imagen: ""
  },

  hydrocharitaceae: {
    id: "hydrocharitaceae",
    nombreCientifico: "Hydrocharis morsus-ranae L.",
    nombreVulgar: "Rana flotante",
    familia: "16. Hydrocharitaceae",
    descripcion: "Planta acuática con ovario ínfero.",
    caracteristicas: "Hojas flotantes redondas, flores blancas pequeñas.",
    distribucion: "Aguas estancadas dulces",
    imagen: ""
  },

  alismataceae: {
    id: "alismataceae",
    nombreCientifico: "Alisma plantago-aquatica L.",
    nombreVulgar: "Alisma",
    familia: "14. Alismataceae",
    descripcion: "Planta palustre con gineceo dialicarpelar.",
    caracteristicas: "Hojas ovadas sagitadas largamente pecioladas.",
    distribucion: "Pantanos y ciénegas",
    imagen: ""
  },

  bromeliaceae: {
    id: "bromeliaceae",
    nombreCientifico: "Tillandsia usneoides L.",
    nombreVulgar: "Clavel del aire",
    familia: "22. Bromeliaceae",
    descripcion: "Bromeliácea epífita.",
    caracteristicas: "Hojas subuladas en roseta, sin raíces terrestres.",
    distribucion: "Bosques como epífita, muy común",
    imagen: ""
  },

  iridaceae: {
    id: "iridaceae",
    nombreCientifico: "Iris sibirica L.",
    nombreVulgar: "Lirio asiático",
    familia: "29. Iridaceae",
    descripcion: "Planta terrestre con ovario ínfero y 3 estambres.",
    caracteristicas: "Hojas lineales, flores con 3 estambres.",
    distribucion: "Cultivadas en jardines",
    imagen: ""
  },

  amaryllidaceae: {
    id: "amaryllidaceae",
    nombreCientifico: "Hippeastrum hybridum Herb.",
    nombreVulgar: "Amarilis",
    familia: "27. Amaryllidaceae",
    descripcion: "Planta con 6 estambres.",
    caracteristicas: "Flores grandes vistosas, 6 estambres.",
    distribucion: "Cultivos ornamentales",
    imagen: ""
  },

  commelinaceae: {
    id: "commelinaceae",
    nombreCientifico: "Commelina erecta L.",
    nombreVulgar: "Trapo viejo",
    familia: "23. Commelinaceae",
    descripcion: "Planta con cáliz y corola diferenciados.",
    caracteristicas: "Flores azules con 3 pétalos, ovario súpero.",
    distribucion: "Pastizales y lugares perturbados",
    imagen: ""
  }
};
