// Estructura completa de clados para Monocotiledoneae
// Basado en el manual de Flora de Buenos Aires

export const monocotiledoneaeData = {
  // Nivel 0: Raíz de Monocotiledoneae
  monocot_root: {
    id: "monocot_root",
    milestone: "Monocotiledoneae",
    manualPage: 39,
    descripcion: "Clase Monocotiledoneae: Embrión con 1 solo cotiledón. Hojas generalmente paralelinervadas. Flores generalmente trimeras.",
    opcionA: {
      label: "Plantas arborescentes, con tronco terminado en una sola yema",
      keyStep: "A",
      nextNodeId: "palmae",
      familia: "19. Palmae"
    },
    opcionA_prima: {
      label: "Plantas herbáceas, con otros caracteres",
      keyStep: "A'",
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
      nextNodeId: "gramineae_tribe_a"
    },
    opcionA_prima: {
      label: "Tallos macizos, triangulares. Vainas cerradas. Fruto aquenio",
      familia: "18. Cyperaceae",
      especieId: "cyperaceae"
    }
  },

  gramineae_tribe_a: {
    id: "gramineae_tribe_a",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - A: ¿las cañas son leñosas y la floración ocurre cada varios años?",
    opcionA: {
      label: "Plantas perennes, con cañas leñosas elevadas, de floración espaciada por varios años",
      keyStep: "A",
      especieId: "guadua"
    },
    opcionA_prima: {
      label: "Plantas anuales o perennes, con cañas herbáceas o sólo subleñosas, de floración anual",
      keyStep: "A'",
      nextNodeId: "gramineae_tribe_b"
    }
  },

  gramineae_tribe_b: {
    id: "gramineae_tribe_b",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - B: ¿cómo son las espiguillas, glumas, pálea y androceo?",
    opcionA: {
      label: "Espiguillas unifloras, con glumas rudimentarias o nulas; pálea 3-nervada; androceo 6-1",
      keyStep: "B",
      especieId: "oryzeae"
    },
    opcionA_prima: {
      label: "Espiguillas 1-multifloras, con dos glumas o faltando la inferior; pálea bicarenada; androceo 3-1",
      keyStep: "B'",
      nextNodeId: "gramineae_tribe_c"
    }
  },

  gramineae_tribe_c: {
    id: "gramineae_tribe_c",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - C: ¿cómo se comprimen las espiguillas y dónde articula la raquilla?",
    opcionA: {
      label: "Espiguillas más o menos comprimidas lateralmente; raquilla articulada por encima de las glumas",
      keyStep: "C",
      nextNodeId: "gramineae_tribe_d"
    },
    opcionA_prima: {
      label: "Espiguillas con una sola flor hermafrodita, generalmente deprimidas dorsiventralmente; raquilla articulada debajo de las glumas",
      keyStep: "C'",
      nextNodeId: "gramineae_tribe_j"
    }
  },

  gramineae_tribe_d: {
    id: "gramineae_tribe_d",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - D: ¿la inflorescencia es espiga o panoja?",
    opcionA: {
      label: "Inflorescencia en espiga dística o unilateral",
      keyStep: "D",
      nextNodeId: "gramineae_tribe_e"
    },
    opcionA_prima: {
      label: "Inflorescencia en panoja laxa o densa, a veces espiciforme",
      keyStep: "D'",
      nextNodeId: "gramineae_tribe_f"
    }
  },

  gramineae_tribe_e: {
    id: "gramineae_tribe_e",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - E: ¿cómo se disponen las espiguillas sobre el raquis?",
    opcionA: {
      label: "Espiguillas dispuestas a ambos lados del raquis",
      keyStep: "E",
      especieId: "hordeae"
    },
    opcionA_prima: {
      label: "Espiguillas dispuestas a un solo lado del raquis",
      keyStep: "E'",
      especieId: "chlorideae"
    }
  },

  gramineae_tribe_f: {
    id: "gramineae_tribe_f",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - F: ¿cuántas flores tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas 2-multifloras",
      keyStep: "F",
      nextNodeId: "gramineae_tribe_g"
    },
    opcionA_prima: {
      label: "Espiguillas unifloras",
      keyStep: "F'",
      nextNodeId: "gramineae_tribe_h"
    }
  },

  gramineae_tribe_g: {
    id: "gramineae_tribe_g",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - G: ¿cómo son las glumelas respecto de las glumas?",
    opcionA: {
      label: "Glumelas generalmente mayores que las glumas, múticas o aristadas desde el ápice",
      keyStep: "G",
      nextNodeId: "festuceae_a"
    },
    opcionA_prima: {
      label: "Glumelas menores que las glumas, con arista dorsal retorcida",
      keyStep: "G'",
      especieId: "aveneae"
    }
  },

  gramineae_tribe_h: {
    id: "gramineae_tribe_h",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - H: ¿dónde está el antecio fértil?",
    opcionA: {
      label: "Antecio fértil basal",
      keyStep: "H",
      especieId: "agrostideae"
    },
    opcionA_prima: {
      label: "Antecio fértil terminal, con una o dos flores rudimentarias en la base",
      keyStep: "H'",
      especieId: "phalarideae"
    }
  },

  gramineae_tribe_j: {
    id: "gramineae_tribe_j",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - J: ¿cómo es la lemma fértil?",
    opcionA: {
      label: "Lemma fértil papirácea o cartilaginosa, más consistente que las glumas",
      keyStep: "J",
      especieId: "paniceae"
    },
    opcionA_prima: {
      label: "Lemma fértil tenue, hialina; glumas cartilaginosas o coriáceas",
      keyStep: "J'",
      especieId: "andropogoneae"
    }
  },

  festuceae_a: {
    id: "festuceae_a",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - A: ¿la lemma termina en varias aristas que simulan un papus?",
    opcionA: {
      label: "Lemma terminada superiormente en 5 o más aristas que simulan un papus",
      keyStep: "A",
      especieId: "pappophorum"
    },
    opcionA_prima: {
      label: "Lemma mútica o con una sola arista",
      keyStep: "A'",
      nextNodeId: "festuceae_b"
    }
  },

  festuceae_b: {
    id: "festuceae_b",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - B: ¿el porte es muy robusto?",
    opcionA: {
      label: "Plantas muy robustas, de más de 1,5 m, con inflorescencia en penacho y pelos plateados",
      keyStep: "B",
      nextNodeId: "festuceae_c"
    },
    opcionA_prima: {
      label: "Plantas gráciles, generalmente de menos de 1,5 m, sin largos pelos plateados",
      keyStep: "B'",
      nextNodeId: "festuceae_e"
    }
  },

  festuceae_c: {
    id: "festuceae_c",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - C: ¿cómo se distribuyen las hojas y cómo son las flores?",
    opcionA: {
      label: "Hojas muy largas, amontonadas en la base de las cañas; flores dioicas",
      keyStep: "C",
      especieId: "cortaderia_selloana"
    },
    opcionA_prima: {
      label: "Hojas repartidas uniformemente por el tallo; flores hermafroditas",
      keyStep: "C'",
      nextNodeId: "festuceae_d"
    }
  },

  festuceae_d: {
    id: "festuceae_d",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - D: ¿dónde están los pelos largos?",
    opcionA: {
      label: "Lemma velluda y raquilla glabra",
      keyStep: "D",
      especieId: "arundo"
    },
    opcionA_prima: {
      label: "Lemma glabra y raquilla velluda",
      keyStep: "D'",
      especieId: "phragmites"
    }
  },

  festuceae_e: {
    id: "festuceae_e",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - E: ¿cómo son glumas, color y porte de las espiguillas?",
    opcionA: {
      label: "Glumas membranosas anchas, iguales o mayores que la espiguilla; espiguillas péndulas no verdes; lemma mútica",
      keyStep: "E",
      especieId: "melica"
    },
    opcionA_prima: {
      label: "Glumas lanceoladas, menores que la espiguilla, generalmente verde",
      keyStep: "E'",
      nextNodeId: "festuceae_f"
    }
  },

  festuceae_f: {
    id: "festuceae_f",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - F: ¿las espiguillas son dioicas o hermafroditas?",
    opcionA: {
      label: "Espiguillas dioicas",
      keyStep: "F",
      nextNodeId: "festuceae_g"
    },
    opcionA_prima: {
      label: "Espiguillas hermafroditas",
      keyStep: "F'",
      nextNodeId: "festuceae_h"
    }
  },

  festuceae_g: {
    id: "festuceae_g",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - G: ¿las espiguillas femeninas tienen pelos lanosos?",
    opcionA: {
      label: "Espiguillas masculinas y femeninas glabras; plantas rizomatosas de suelos salados",
      keyStep: "G",
      especieId: "distichlis"
    },
    opcionA_prima: {
      label: "Espiguillas femeninas con largos pelos lanosos",
      keyStep: "G'",
      especieId: "poa"
    }
  },

  festuceae_h: {
    id: "festuceae_h",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - H: ¿la espiguilla es globosa o alargada?",
    opcionA: {
      label: "Espiguillas más o menos globosas, casi tan anchas como largas; lemma con margen membranoso",
      keyStep: "H",
      especieId: "briza"
    },
    opcionA_prima: {
      label: "Espiguillas lineales o lanceoladas, más largas que anchas",
      keyStep: "H'",
      nextNodeId: "festuceae_j"
    }
  },

  festuceae_j: {
    id: "festuceae_j",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - J: ¿las espiguillas son lineales cilíndricas o lanceoladas?",
    opcionA: {
      label: "Espiguillas lineales, más o menos cilíndricas; lemmas obtusas y múticas",
      keyStep: "J",
      nextNodeId: "festuceae_k"
    },
    opcionA_prima: {
      label: "Espiguillas lanceoladas o lanceolado-lineales; lemmas con nervaduras convergentes hacia el ápice",
      keyStep: "J'",
      nextNodeId: "festuceae_l"
    }
  },

  festuceae_k: {
    id: "festuceae_k",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - K: ¿los estilos son persistentes y el cariopse hendido?",
    opcionA: {
      label: "Estilos alargados, persistentes; lemmas con nervaduras prominentes; cariopse con hendidura longitudinal",
      keyStep: "K",
      especieId: "glyceria_multiflora"
    },
    opcionA_prima: {
      label: "Estilos cortos, caducos; lemmas con nervaduras tenues; cariopse no hendido",
      keyStep: "K'",
      especieId: "puccinellia"
    }
  },

  festuceae_l: {
    id: "festuceae_l",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - L: ¿cuántas nervaduras tiene la lemma?",
    opcionA: {
      label: "Lemma trinervada",
      keyStep: "L",
      especieId: "eragrostis"
    },
    opcionA_prima: {
      label: "Lemma con 5 o más nervaduras",
      keyStep: "L'",
      nextNodeId: "festuceae_m"
    }
  },

  festuceae_m: {
    id: "festuceae_m",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - M: ¿qué tamaño tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas grandes, de 15-35 mm; lemma mucronada o aristada",
      keyStep: "M",
      nextNodeId: "bromus_a"
    },
    opcionA_prima: {
      label: "Espiguillas, sin contar las aristas, de menos de 12 mm",
      keyStep: "M'",
      nextNodeId: "festuceae_n"
    }
  },

  festuceae_n: {
    id: "festuceae_n",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - N: ¿la lemma es carenada en el dorso?",
    opcionA: {
      label: "Lemma carenada en el dorso",
      keyStep: "N",
      nextNodeId: "festuceae_o"
    },
    opcionA_prima: {
      label: "Lemma redondeada en el dorso",
      keyStep: "N'",
      nextNodeId: "festuceae_p"
    }
  },

  festuceae_o: {
    id: "festuceae_o",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - O: ¿la lemma es mútica o mucronada/aristada?",
    opcionA: {
      label: "Lemmas múticas",
      keyStep: "O",
      especieId: "poa"
    },
    opcionA_prima: {
      label: "Lemmas mucronadas o aristadas",
      keyStep: "O'",
      especieId: "dactylis_glomerata"
    }
  },

  festuceae_p: {
    id: "festuceae_p",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - P: ¿cómo son los pedicelos y las lemmas?",
    opcionA: {
      label: "Espiguillas con pedicelos muy gruesos; lemmas múticas o mucronadas",
      keyStep: "P",
      especieId: "scleropoa"
    },
    opcionA_prima: {
      label: "Espiguillas con pedicelos filiformes; lemmas acuminadas o aristadas",
      keyStep: "P'",
      especieId: "festuca"
    }
  },

  bromus_a: {
    id: "bromus_a",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - A: ¿qué longitud tienen las aristas de las lemmas?",
    opcionA: {
      label: "Lemmas con aristas de 0,5 mm; espiguillas de 15-18 mm, lanceoladas y comprimidas",
      keyStep: "A",
      especieId: "bromus_brevis"
    },
    opcionA_prima: {
      label: "Lemmas con aristas de más de 1 mm",
      keyStep: "A'",
      nextNodeId: "bromus_b"
    }
  },

  bromus_b: {
    id: "bromus_b",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - B: ¿las lemmas son glabras o pubescentes?",
    opcionA: {
      label: "Lemmas glabras, escabrosas",
      keyStep: "B",
      nextNodeId: "bromus_c"
    },
    opcionA_prima: {
      label: "Lemmas pubescentes",
      keyStep: "B'",
      nextNodeId: "bromus_f"
    }
  },

  bromus_c: {
    id: "bromus_c",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - C: ¿cómo son las espiguillas y la carena de las lemmas?",
    opcionA: {
      label: "Espiguillas muy comprimidas, lanceoladas, 7-10-floras, de 25-30 mm; lemmas carenadas y arista de unos 2 mm",
      keyStep: "C",
      especieId: "bromus_catharticus"
    },
    opcionA_prima: {
      label: "Espiguillas más o menos redondeadas; lemmas no carenadas",
      keyStep: "C'",
      nextNodeId: "bromus_d"
    }
  },

  bromus_d: {
    id: "bromus_d",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - D: ¿cómo son glumas, lemmas y espiguillas?",
    opcionA: {
      label: "Glumas acuminadas o subuladas; lemmas acuminadas con arista de 20-25 mm; espiguillas flojas muy alargadas",
      keyStep: "D",
      especieId: "bromus_madritensis"
    },
    opcionA_prima: {
      label: "Glumas agudas; espiguillas cortas y compactas",
      keyStep: "D'",
      nextNodeId: "bromus_e"
    }
  },

  bromus_e: {
    id: "bromus_e",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - E: ¿la panoja es densa o laxa?",
    opcionA: {
      label: "Panojas densas, casi espiciformes y erectas; lemmas anchamente ovadas, bidentadas y largamente aristadas",
      keyStep: "E",
      especieId: "bromus_racemosus"
    },
    opcionA_prima: {
      label: "Panojas laxas, péndulas; espiguillas fusiformes con antecios apretados",
      keyStep: "E'",
      especieId: "bromus_japonicus"
    }
  },

  bromus_f: {
    id: "bromus_f",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - F: ¿la panoja es contraída o laxa?",
    opcionA: {
      label: "Panojas contraídas y densas; espiguillas lanceoladas gruesas; hierba anual pubescente",
      keyStep: "F",
      especieId: "bromus_mollis"
    },
    opcionA_prima: {
      label: "Panojas laxas; plantas perennes",
      keyStep: "F'",
      nextNodeId: "bromus_g"
    }
  },

  bromus_g: {
    id: "bromus_g",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - G: ¿qué longitud tiene la arista respecto de la lemma?",
    opcionA: {
      label: "Arista de la misma longitud que la lemma; panojas laxas inclinadas; espiguillas de 15-20 mm",
      keyStep: "G",
      especieId: "bromus_uruguayensis"
    },
    opcionA_prima: {
      label: "Arista de la mitad de la longitud de la lemma; espiguillas de 25-30 mm, 7-10-floras",
      keyStep: "G'",
      especieId: "bromus_auleticus"
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
      nextNodeId: "scheuchzeriaceae_a"
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
      nextNodeId: "typhaceae_a"
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
      nextNodeId: "potamogetonaceae_a"
    }
  },

  typhaceae_a: {
    id: "typhaceae_a",
    milestone: "Typhaceae",
    manualPage: 39,
    descripcion: "Typhaceae - A: ¿las flores femeninas tienen brácteas y cómo es el polen?",
    opcionA: {
      label: "Flores femeninas sin brácteas; polen en tétradas",
      keyStep: "A",
      especieId: "typha_latifolia"
    },
    opcionA_prima: {
      label: "Flores femeninas con brácteas; polen pulverulento",
      keyStep: "A'",
      especieId: "typha_angustifolia"
    }
  },

  potamogetonaceae_a: {
    id: "potamogetonaceae_a",
    milestone: "Potamogetonaceae",
    manualPage: 39,
    descripcion: "Potamogetonaceae - A: ¿cómo son las flores?",
    opcionA: {
      label: "Flores hermafroditas, agrupadas en espigas",
      keyStep: "A",
      nextNodeId: "potamogeton_a"
    },
    opcionA_prima: {
      label: "Flores diclinas, monoicas, solitarias o en cimas",
      keyStep: "A'",
      especieId: "zannichellia_palustris"
    }
  },

  potamogeton_a: {
    id: "potamogeton_a",
    milestone: "Potamogeton",
    manualPage: 41,
    descripcion: "Potamogeton - A: ¿cómo son las hojas?",
    opcionA: {
      label: "Hojas, al menos las superiores, elípticas y anchas",
      keyStep: "A",
      nextNodeId: "potamogeton_b"
    },
    opcionA_prima: {
      label: "Todas las hojas estrechamente lineales",
      keyStep: "A'",
      nextNodeId: "potamogeton_c"
    }
  },

  potamogeton_b: {
    id: "potamogeton_b",
    milestone: "Potamogeton",
    manualPage: 41,
    descripcion: "Potamogeton - B: con hojas elípticas, ¿cómo son las hojas y espigas?",
    opcionA: {
      label: "Hojas nadantes obovadas, redondeadas en el ápice; hojas sumergidas lineales; espigas cortas de 4-6 flores",
      keyStep: "B",
      especieId: "potamogeton_spirilliformis"
    },
    opcionA_prima: {
      label: "Todas las hojas elípticas, plurinervadas, atenuadas en largo pecíolo; espigas densas plurifloras",
      keyStep: "B'",
      especieId: "potamogeton_ferrugineus"
    }
  },

  potamogeton_c: {
    id: "potamogeton_c",
    milestone: "Potamogeton",
    manualPage: 41,
    descripcion: "Potamogeton - C: con hojas lineales, ¿son envainadoras?",
    opcionA: {
      label: "Hojas no envainadoras, sin lígula",
      keyStep: "C",
      nextNodeId: "potamogeton_d"
    },
    opcionA_prima: {
      label: "Hojas envainadoras, con lígula tenue en la unión de la vaina con la hoja",
      keyStep: "C'",
      especieId: "potamogeton_striatus"
    }
  },

  potamogeton_d: {
    id: "potamogeton_d",
    milestone: "Potamogeton",
    manualPage: 41,
    descripcion: "Potamogeton - D: con hojas no envainadoras, ¿cuál es el ancho de la hoja?",
    opcionA: {
      label: "Hojas de más de 2,5 mm de ancho",
      keyStep: "D",
      nextNodeId: "potamogeton_e"
    },
    opcionA_prima: {
      label: "Hojas lineales muy estrechas, de menos de 2 mm de ancho",
      keyStep: "D'",
      especieId: "potamogeton_pusillus"
    }
  },

  potamogeton_e: {
    id: "potamogeton_e",
    milestone: "Potamogeton",
    manualPage: 41,
    descripcion: "Potamogeton - E: con hojas de más de 2,5 mm, ¿cómo son hojas, estípulas y espigas?",
    opcionA: {
      label: "Hojas de 5-11 cm por 3-10 mm, agudas; estípulas de 1,8-2,4 cm; espigas paucifloras de 12-15 mm",
      keyStep: "E",
      especieId: "potamogeton_gayii"
    },
    opcionA_prima: {
      label: "Hojas de 4-6 cm por 3-4 mm; estípulas de 1 cm; espigas 4-floras de 7 mm",
      keyStep: "E'",
      especieId: "potamogeton_uruguayensis"
    }
  },

  scheuchzeriaceae_a: {
    id: "scheuchzeriaceae_a",
    milestone: "Scheuchzeriaceae",
    manualPage: 43,
    descripcion: "Scheuchzeriaceae - A: ¿las flores tienen perigonio y cómo se agrupan?",
    opcionA: {
      label: "Flores con perigonio, hermafroditas, en espigas o racimos laxos",
      keyStep: "A",
      nextNodeId: "triglochin_a"
    },
    opcionA_prima: {
      label: "Flores desnudas, polígamas, en espigas densas",
      keyStep: "A'",
      especieId: "lilaea_scilloides"
    }
  },

  triglochin_a: {
    id: "triglochin_a",
    milestone: "Triglochin",
    manualPage: 43,
    descripcion: "Triglochin - A: ¿cómo son los frutos y el hábito?",
    opcionA: {
      label: "Frutos lineales de 7-8 mm; hierba perenne con rizoma corto y estolones terminados en bulbillos",
      keyStep: "A",
      especieId: "triglochin_palustris"
    },
    opcionA_prima: {
      label: "Frutos con carpelos semicirculares comprimidos; hierba perenne rizomatosa",
      keyStep: "A'",
      especieId: "triglochin_striata"
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
      especieId: "hydrocleis_nymphoides"
    },
    opcionA_prima: {
      label: "Ovario ínfero",
      familia: "16. Hydrocharitaceae",
      nextNodeId: "hydrocharitaceae_a"
    }
  },

  hydrocharitaceae_a: {
    id: "hydrocharitaceae_a",
    milestone: "Hydrocharitaceae",
    manualPage: 47,
    descripcion: "Hydrocharitaceae - A: ¿la planta es flotante o sumergida?",
    opcionA: {
      label: "Plantas flotantes; hojas pecioladas con lámina elíptico-acorazonada",
      keyStep: "A",
      especieId: "hydromystria_stolonifera"
    },
    opcionA_prima: {
      label: "Plantas sumergidas; hojas sésiles, lineales",
      keyStep: "A'",
      nextNodeId: "elodea_a"
    }
  },

  elodea_a: {
    id: "elodea_a",
    milestone: "Elodea",
    manualPage: 48,
    descripcion: "Elodea - A: ¿cómo son las hojas y flores?",
    opcionA: {
      label: "Hojas opuestas o en verticilos de 3, lineal-lanceoladas, de 1,5-2,5 mm de ancho; flores pequeñas blanquecinas",
      keyStep: "A",
      especieId: "elodea_callitrichoides"
    },
    opcionA_prima: {
      label: "Hojas en verticilos de 4, raramente 6, de más de 2,5 mm de ancho; flores grandes blancas emergidas",
      keyStep: "A'",
      especieId: "elodea_densa"
    }
  },

  // P': Terrestres
  herbaceae_c_prima_l_prima_p_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima",
    descripcion: "¿Cómo es el gineceo?",
    opcionA: {
      label: "Gineceo dialicarpelar. Hojas largamente pecioladas, ovadas o sagitadas",
      familia: "14. Alismataceae",
      nextNodeId: "alismataceae_a"
    },
    opcionA_prima: {
      label: "Gineceo gamocarpelar",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima"
    }
  },

  alismataceae_a: {
    id: "alismataceae_a",
    milestone: "Alismataceae",
    manualPage: 45,
    descripcion: "Alismataceae - A: ¿las flores son hermafroditas o diclinas?",
    opcionA: {
      label: "Flores hermafroditas; hojas elípticas o lanceoladas",
      keyStep: "A",
      nextNodeId: "echinodorus_a"
    },
    opcionA_prima: {
      label: "Flores diclinas; hojas sagitadas",
      keyStep: "A'",
      especieId: "sagittaria_montevidensis"
    }
  },

  echinodorus_a: {
    id: "echinodorus_a",
    milestone: "Echinodorus",
    manualPage: 45,
    descripcion: "Echinodorus - A: ¿cómo es el porte y las hojas?",
    opcionA: {
      label: "Plantas robustas, de 0,5-1,5 m; hojas grandes, largamente pecioladas, anchamente elípticas u ovadas",
      keyStep: "A",
      nextNodeId: "echinodorus_b"
    },
    opcionA_prima: {
      label: "Plantas pequeñas; hojas arrosetadas, elíptico-lanceoladas, de 4-7 cm",
      keyStep: "A'",
      especieId: "echinodorus_aschersonianus"
    }
  },

  echinodorus_b: {
    id: "echinodorus_b",
    milestone: "Echinodorus",
    manualPage: 45,
    descripcion: "Echinodorus - B: en plantas robustas, ¿cómo son las hojas e inflorescencias?",
    opcionA: {
      label: "Hojas con pequeños puntos y rayitas cortas translúcidas; inflorescencias ramificadas",
      keyStep: "B",
      especieId: "echinodorus_grandiflorus"
    },
    opcionA_prima: {
      label: "Hojas con rayitas translúcidas; inflorescencia frecuentemente simple",
      keyStep: "B'",
      especieId: "echinodorus_palaefolius"
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

  guadua: {
    id: "guadua",
    nombreCientifico: "Guadua sp.",
    nombreVulgar: "Tacuara",
    familia: "17. Gramineae - Bambuseae",
    descripcion: "Gramínea perenne con cañas leñosas elevadas.",
    caracteristicas: "Cañas robustas y floración espaciada por varios años, carácter típico de Bambuseae en la clave.",
    distribucion: "Ambientes ribereños y boscosos de la región.",
    imagen: ""
  },

  oryzeae: {
    id: "oryzeae",
    nombreCientifico: "Tribu Oryzeae",
    nombreVulgar: "Gramínea de Oryzeae",
    familia: "17. Gramineae",
    descripcion: "Rama de la clave de gramíneas con espiguillas unifloras y glumas rudimentarias o nulas.",
    caracteristicas: "Pálea 3-nervada, con una sola quilla, y androceo de 6 a 1 estambres.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  hordeae: {
    id: "hordeae",
    nombreCientifico: "Tribu Hordeae",
    nombreVulgar: "Gramínea de Hordeae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con inflorescencia en espiga dística y espiguillas a ambos lados del raquis.",
    caracteristicas: "Rama que en el manual conduce a géneros como Lolium, Hordeum, Secale y Triticum.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  chlorideae: {
    id: "chlorideae",
    nombreCientifico: "Tribu Chlorideae",
    nombreVulgar: "Gramínea de Chlorideae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con espigas unilaterales o dispuestas a lo largo de un eje principal.",
    caracteristicas: "Rama que en el manual conduce a géneros como Cynodon, Chloris, Eleusine y Spartina.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  aveneae: {
    id: "aveneae",
    nombreCientifico: "Tribu Aveneae",
    nombreVulgar: "Gramínea de Aveneae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con glumelas menores que las glumas y arista dorsal retorcida.",
    caracteristicas: "Rama que en el manual conduce a géneros como Avena, Danthonia, Koeleria y Holcus.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  agrostideae: {
    id: "agrostideae",
    nombreCientifico: "Tribu Agrostideae",
    nombreVulgar: "Gramínea de Agrostideae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas de espiguillas unifloras con antecio fértil basal.",
    caracteristicas: "Rama que en el manual conduce a géneros como Agrostis, Polypogon, Stipa, Aristida y Sporobolus.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  phalarideae: {
    id: "phalarideae",
    nombreCientifico: "Tribu Phalarideae",
    nombreVulgar: "Gramínea de Phalarideae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con antecio fértil terminal y flores rudimentarias en la base.",
    caracteristicas: "Rama que en el manual conduce a Phalaris y Anthoxanthum.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  paniceae: {
    id: "paniceae",
    nombreCientifico: "Tribu Paniceae",
    nombreVulgar: "Gramínea de Paniceae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con lemma fértil papirácea o cartilaginosa, más consistente que las glumas.",
    caracteristicas: "Rama que en el manual conduce a géneros como Paspalum, Digitaria, Setaria, Panicum y Echinochloa.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  andropogoneae: {
    id: "andropogoneae",
    nombreCientifico: "Tribu Andropogoneae",
    nombreVulgar: "Gramínea de Andropogoneae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con lemma fértil tenue e hialina y glumas cartilaginosas o coriáceas.",
    caracteristicas: "Rama que en el manual conduce a géneros como Imperata, Sorghum, Andropogon y Bothriochloa.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  pappophorum: {
    id: "pappophorum",
    nombreCientifico: "Pappophorum sp.",
    nombreVulgar: "Pappophorum",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea de Festuceae con lemmas divididas en numerosas aristas.",
    caracteristicas: "Las aristas abiertas forman una estructura semejante a un papus.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  cortaderia_selloana: {
    id: "cortaderia_selloana",
    nombreCientifico: "Cortaderia selloana",
    nombreVulgar: "Cortadera",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne muy robusta, con tallos floríferos cercanos a 2 m.",
    caracteristicas: "Hojas muy largas y ásperas en los bordes, panojas grandes en penacho y espiguillas unisexuales.",
    distribucion: "América austral; frecuente en terrenos húmedos del Delta y de la ribera del Plata.",
    imagen: ""
  },

  arundo: {
    id: "arundo",
    nombreCientifico: "Arundo sp.",
    nombreVulgar: "Caña",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea robusta con hojas repartidas por el tallo y flores hermafroditas.",
    caracteristicas: "En la clave se separa por lemma velluda y raquilla glabra.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  phragmites: {
    id: "phragmites",
    nombreCientifico: "Phragmites sp.",
    nombreVulgar: "Carrizo",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea robusta de ambientes húmedos.",
    caracteristicas: "En la clave se separa por lemma glabra y raquilla velluda.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  melica: {
    id: "melica",
    nombreCientifico: "Melica sp.",
    nombreVulgar: "Melica",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea con glumas membranosas anchas y espiguillas péndulas.",
    caracteristicas: "Espiguillas amarillentas, violáceas o plateadas, no verdes, y lemma mútica.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  distichlis: {
    id: "distichlis",
    nombreCientifico: "Distichlis sp.",
    nombreVulgar: "Pasto salado",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea dioica y rizomatosa de suelos salados.",
    caracteristicas: "Espiguillas masculinas y femeninas glabras.",
    distribucion: "Campos húmedos y salobres.",
    imagen: ""
  },

  poa: {
    id: "poa",
    nombreCientifico: "Poa sp.",
    nombreVulgar: "Poa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea de Festuceae separada en esta clave por caracteres de espiguilla y lemma.",
    caracteristicas: "Puede aparecer en ramas dioicas con pelos lanosos o en ramas de lemmas carenadas múticas.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  briza: {
    id: "briza",
    nombreCientifico: "Briza sp.",
    nombreVulgar: "Tembladerilla",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea con espiguillas más o menos globosas.",
    caracteristicas: "Espiguillas casi tan anchas como largas y lemma con margen membranoso.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  glyceria_multiflora: {
    id: "glyceria_multiflora",
    nombreCientifico: "Glyceria multiflora",
    nombreVulgar: "Glyceria",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne, generalmente palustre y con frecuencia rizomatosa.",
    caracteristicas: "Espiguillas lineales de 15-20 mm, 12-15-floras; lemmas pergamináceas con nervaduras paralelas.",
    distribucion: "América del Sur cálida y templada; común en suelos inundables y zanjas.",
    imagen: ""
  },

  puccinellia: {
    id: "puccinellia",
    nombreCientifico: "Puccinellia sp.",
    nombreVulgar: "Puccinellia",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea de espiguillas lineales con lemmas obtusas y múticas.",
    caracteristicas: "Estilos cortos y caducos, lemmas con nervaduras tenues y cariopse no hendido.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  eragrostis: {
    id: "eragrostis",
    nombreCientifico: "Eragrostis sp.",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea de espiguillas lanceoladas o lineales con lemmas trinervadas.",
    caracteristicas: "El manual separa varias especies por porte, tipo de panoja, pilosidad y tamaño de espiguilla.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  dactylis_glomerata: {
    id: "dactylis_glomerata",
    nombreCientifico: "Dactylis glomerata",
    nombreVulgar: "Pasto ovillo",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne, erecta, de 60-120 cm.",
    caracteristicas: "Espiguillas paucifloras, comprimidas, casi sésiles, en fascículos unilaterales densos.",
    distribucion: "Viejo Mundo; adventicia en América, en suelos fértiles.",
    imagen: ""
  },

  scleropoa: {
    id: "scleropoa",
    nombreCientifico: "Scleropoa sp.",
    nombreVulgar: "Scleropoa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea de Festuceae con espiguillas de pedicelos muy gruesos.",
    caracteristicas: "Lemmas múticas o mucronadas.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  festuca: {
    id: "festuca",
    nombreCientifico: "Festuca sp.",
    nombreVulgar: "Festuca",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea de espiguillas lanceoladas y lemmas acuminadas o aristadas.",
    caracteristicas: "El manual separa especies por ciliosidad de lemmas, tamaño de glumas y longitud de aristas.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  bromus_brevis: {
    id: "bromus_brevis",
    nombreCientifico: "Bromus brevis",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne, de más de medio metro de alto, con panojas laxas.",
    caracteristicas: "Lemmas con aristas de 0,5 mm y espiguillas lanceoladas comprimidas de 15-18 mm.",
    distribucion: "Centro de la Argentina; rara en campos altos.",
    imagen: ""
  },

  bromus_catharticus: {
    id: "bromus_catharticus",
    nombreCientifico: "Bromus catharticus Vahl",
    nombreVulgar: "Cebadilla criolla",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne, de 1 m o más de alto.",
    caracteristicas: "Hojas anchas y planas, panojas laxas, espiguillas muy comprimidas y lemmas carenadas con arista corta.",
    distribucion: "América; forrajera y común en la región.",
    imagen: ""
  },

  bromus_madritensis: {
    id: "bromus_madritensis",
    nombreCientifico: "Bromus madritensis",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, de alrededor de 0,5 m.",
    caracteristicas: "Glumas acuminadas o subuladas, lemmas acuminadas escabrosas y aristas de 20-25 mm.",
    distribucion: "Europa; rara cerca de La Plata.",
    imagen: ""
  },

  bromus_racemosus: {
    id: "bromus_racemosus",
    nombreCientifico: "Bromus racemosus",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, de 30-70 cm.",
    caracteristicas: "Panojas densas casi espiciformes, glumas anchas y lemmas anchamente ovadas, bidentadas y largamente aristadas.",
    distribucion: "Europa; adventicia en América y rara cerca de Buenos Aires.",
    imagen: ""
  },

  bromus_japonicus: {
    id: "bromus_japonicus",
    nombreCientifico: "Bromus japonicus",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, de 30-70 cm, pubescente lanosa.",
    caracteristicas: "Panojas laxas y péndulas, espiguillas fusiformes y antecios apretados.",
    distribucion: "Japón; adventicia en Europa y América, rara en La Plata.",
    imagen: ""
  },

  bromus_mollis: {
    id: "bromus_mollis",
    nombreCientifico: "Bromus mollis",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual pubescente.",
    caracteristicas: "Panojas contraídas y densas, espiguillas lanceoladas gruesas de 12-17 mm y lemmas pubescentes con larga arista.",
    distribucion: "Europa; común en la región como adventicia.",
    imagen: ""
  },

  bromus_uruguayensis: {
    id: "bromus_uruguayensis",
    nombreCientifico: "Bromus uruguayensis",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa, de 30-60 cm.",
    caracteristicas: "Panojas laxas inclinadas, espiguillas gruesas de 15-20 mm y arista de la misma longitud que la lemma.",
    distribucion: "Uruguay y nordeste de Argentina; vive en la ribera del Plata y la Isla Martín García.",
    imagen: ""
  },

  bromus_auleticus: {
    id: "bromus_auleticus",
    nombreCientifico: "Bromus auleticus",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne robusta, de alrededor de 1,5 m.",
    caracteristicas: "Panojas laxas, espiguillas lanceoladas de 25-30 mm y arista de la mitad de la longitud de la lemma.",
    distribucion: "América austral; rara cerca de Buenos Aires y muy común hacia el oeste de la provincia.",
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

  triglochin_palustris: {
    id: "triglochin_palustris",
    nombreCientifico: "Triglochin palustris",
    nombreVulgar: "Triglochin",
    familia: "13. Scheuchzeriaceae",
    descripcion: "Hierba palustre perenne con rizoma corto y estolones terminados en bulbillos.",
    caracteristicas: "Tallos de 10-30 cm, hojas subuladas mas cortas que el tallo, flores numerosas en racimo terminal y frutos lineales de 7-8 mm.",
    distribucion: "Cosmopolita; aparece en cespedes inundables de la ribera platense.",
    imagen: ""
  },

  triglochin_striata: {
    id: "triglochin_striata",
    nombreCientifico: "Triglochin striata",
    nombreVulgar: "Triglochin",
    familia: "13. Scheuchzeriaceae",
    descripcion: "Hierba palustre perenne y rizomatosa.",
    caracteristicas: "Tallos de 5-35 cm, hojas subulado-filiformes, flores en racimos estrechos y frutos con carpelos semicirculares comprimidos.",
    distribucion: "Cosmopolita; comun en ambientes inundables, orillas de arroyos y ribera del Plata.",
    imagen: ""
  },

  lilaea_scilloides: {
    id: "lilaea_scilloides",
    nombreCientifico: "Lilaea scilloides",
    nombreVulgar: "Lilaea",
    familia: "13. Scheuchzeriaceae",
    descripcion: "Hierba palustre junciforme.",
    caracteristicas: "Hojas subuladas y flores desnudas poligamas en espigas densas.",
    distribucion: "America; frecuente en lagunas y charcas durante la primavera.",
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

  typha_latifolia: {
    id: "typha_latifolia",
    nombreCientifico: "Typha latifolia",
    nombreVulgar: "Totora",
    familia: "11. Typhaceae",
    descripcion: "Hierba palustre robusta, de 1,5-2,5 m de alto.",
    caracteristicas: "Flores femeninas sin brácteas y polen en tétradas; hojas de alrededor de 1 m, torcidas en la parte superior.",
    distribucion: "Cosmopolita; común en pajonales.",
    imagen: ""
  },

  typha_angustifolia: {
    id: "typha_angustifolia",
    nombreCientifico: "Typha angustifolia",
    nombreVulgar: "Totora",
    familia: "11. Typhaceae",
    descripcion: "Hierba palustre parecida a Typha latifolia.",
    caracteristicas: "Flores femeninas con brácteas, polen pulverulento y pelos del ginecóforo agudos.",
    distribucion: "Cosmopolita; común en zanjas y pajonales.",
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

  potamogeton_spirilliformis: {
    id: "potamogeton_spirilliformis",
    nombreCientifico: "Potamogeton spirilliformis",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática con tallos redondeados y ramosos.",
    caracteristicas: "Hojas nadantes obovadas, hojas sumergidas lineales, espigas cortas de 4-6 flores y frutos pequeños con 3 quillas.",
    distribucion: "Aguas dulces del sur del Brasil, Uruguay y NE de Argentina; rara en la región.",
    imagen: ""
  },

  potamogeton_ferrugineus: {
    id: "potamogeton_ferrugineus",
    nombreCientifico: "Potamogeton ferrugineus",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática de tallos redondeados.",
    caracteristicas: "Todas las hojas elípticas, plurinervadas, atenuadas en largo pecíolo; espigas densas y frutos con una quilla media y dos laterales.",
    distribucion: "Centro de la Argentina y Uruguay; común en arroyos.",
    imagen: ""
  },

  potamogeton_gayii: {
    id: "potamogeton_gayii",
    nombreCientifico: "Potamogeton gayii",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática de tallos algo comprimidos.",
    caracteristicas: "Hojas lineales no envainadoras, de 5-11 cm por 3-10 mm, agudas, con 3-5 nervaduras; espigas paucifloras.",
    distribucion: "América austral; frecuente en charcas y arroyos.",
    imagen: ""
  },

  potamogeton_uruguayensis: {
    id: "potamogeton_uruguayensis",
    nombreCientifico: "Potamogeton uruguayensis",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática de hojas lineales no envainadoras.",
    caracteristicas: "Hojas de 4-6 cm por 3-4 mm, con 3-5 nervaduras; estípulas de 1 cm y espigas 4-floras de 7 mm.",
    distribucion: "Uruguay y provincia de Buenos Aires; común en arroyos.",
    imagen: ""
  },

  potamogeton_pusillus: {
    id: "potamogeton_pusillus",
    nombreCientifico: "Potamogeton pusillus",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática de tallos delgados y difusos.",
    caracteristicas: "Hojas lineales muy estrechas, de 1,5-5 cm y menos de 2 mm de ancho; espigas paucifloras muy cortas.",
    distribucion: "Cosmopolita; en zanjas y arroyos.",
    imagen: ""
  },

  potamogeton_striatus: {
    id: "potamogeton_striatus",
    nombreCientifico: "Potamogeton striatus",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática sumergida, con tallos ligeramente comprimidos y entrenudos largos.",
    caracteristicas: "Hojas envainadoras, con lígula tenue; lámina trinervada de 6-14 cm; espigas de 8-10 flores y frutos oblicuamente elípticos.",
    distribucion: "Sudamérica; común en tanques australianos, arroyos y ambientes similares.",
    imagen: ""
  },

  zannichellia_palustris: {
    id: "zannichellia_palustris",
    nombreCientifico: "Zannichellia palustris",
    nombreVulgar: "Zannichellia",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática sumergida y rizomatosa.",
    caracteristicas: "Flores diclinas monoicas; hojas filiformes, estípulas grandes y flores axilares; carpelos casi sésiles, semilunares.",
    distribucion: "Cosmopolita; en charcas.",
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

  hydrocleis_nymphoides: {
    id: "hydrocleis_nymphoides",
    nombreCientifico: "Hydrocleis nymphoides",
    nombreVulgar: "Camalotillo",
    familia: "15. Butomaceae",
    descripcion: "Hierba acuatica perenne, flotante.",
    caracteristicas: "Hojas inferiores sumergidas y lineales, hojas superiores flotantes ovadas a circulares, largamente pecioladas, y flores amarillas grandes.",
    distribucion: "America tropical y subtropical; comun en arroyos limpios de corriente lenta durante la primavera.",
    imagen: ""
  },

  hydromystria_stolonifera: {
    id: "hydromystria_stolonifera",
    nombreCientifico: "Hydromystria stolonifera",
    nombreVulgar: "Hydromystria",
    familia: "16. Hydrocharitaceae",
    descripcion: "Planta acuatica flotante libre.",
    caracteristicas: "Hojas pecioladas con lamina eliptico-acorazonada y habito flotante.",
    distribucion: "Regiones calidas de America hasta el Rio de la Plata; frecuente en camalotales del Delta y la ribera.",
    imagen: ""
  },

  elodea_callitrichoides: {
    id: "elodea_callitrichoides",
    nombreCientifico: "Elodea callitrichoides",
    nombreVulgar: "Elodea",
    familia: "16. Hydrocharitaceae",
    descripcion: "Hierba acuatica sumergida.",
    caracteristicas: "Hojas opuestas o en verticilos de 3, lineal-lanceoladas, agudas y ligeramente denticuladas; flores pequenas blanquecinas.",
    distribucion: "America del Sur; comun en aguas tranquilas del Delta y la ribera platense.",
    imagen: ""
  },

  elodea_densa: {
    id: "elodea_densa",
    nombreCientifico: "Elodea densa",
    nombreVulgar: "Elodea",
    familia: "16. Hydrocharitaceae",
    descripcion: "Hierba acuatica sumergida de flores emergentes.",
    caracteristicas: "Hojas en verticilos de 4, raramente 6, lanceoladas y finamente denticuladas; flores blancas grandes, emergidas.",
    distribucion: "Endemica de la region platense; comun en charcas y arroyuelos del Delta y la ribera.",
    imagen: ""
  },

  echinodorus_grandiflorus: {
    id: "echinodorus_grandiflorus",
    nombreCientifico: "Echinodorus grandiflorus",
    nombreVulgar: "Cucharero",
    familia: "14. Alismataceae",
    descripcion: "Planta palustre robusta, de hojas grandes y largamente pecioladas.",
    caracteristicas: "Hojas elipticas a ovadas, con puntos y rayitas translucidas; flores blancas numerosas en inflorescencias ramificadas.",
    distribucion: "America austral; muy comun en pajonales, zanjas y lagunas de la ribera y el Delta.",
    imagen: ""
  },

  echinodorus_palaefolius: {
    id: "echinodorus_palaefolius",
    nombreCientifico: "Echinodorus palaefolius",
    nombreVulgar: "Cucharero",
    familia: "14. Alismataceae",
    descripcion: "Planta palustre robusta, semejante a Echinodorus grandiflorus.",
    caracteristicas: "Hojas grandes con rayitas translucidas e inflorescencia frecuentemente simple.",
    distribucion: "America del Sur; mas escasa en la region.",
    imagen: ""
  },

  echinodorus_aschersonianus: {
    id: "echinodorus_aschersonianus",
    nombreCientifico: "Echinodorus aschersonianus",
    nombreVulgar: "Echinodorus",
    familia: "14. Alismataceae",
    descripcion: "Planta palustre pequena, con hojas arrosetadas.",
    caracteristicas: "Hojas eliptico-lanceoladas de 4-7 cm por 1,5-2 cm, escapos de 20-25 cm y pocas flores blancas.",
    distribucion: "Uruguay e Isla Martin Garcia.",
    imagen: ""
  },

  sagittaria_montevidensis: {
    id: "sagittaria_montevidensis",
    nombreCientifico: "Sagittaria montevidensis",
    nombreVulgar: "Saeta",
    familia: "14. Alismataceae",
    descripcion: "Planta palustre perenne, robusta y rizomatosa.",
    caracteristicas: "Hojas grandes, largamente pecioladas y sagitadas; flores blancas grandes, diclinas, con las masculinas arriba y las femeninas abajo.",
    distribucion: "America austral; comun en pajonales, arroyos y ambientes inundables.",
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
