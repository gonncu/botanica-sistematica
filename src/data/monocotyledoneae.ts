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
      nextNodeId: "cyperaceae_a"
    }
  },

  cyperaceae_a: {
    id: "cyperaceae_a",
    milestone: "Cyperaceae",
    manualPage: 112,
    descripcion: "Cyperaceae - A: flores fructiferas unisexuales o hermafroditas",
    opcionA: {
      label: "Flores fructiferas unisexuales; caracteres de Carex",
      keyStep: "A",
      nextNodeId: "carex_a"
    },
    opcionA_prima: {
      label: "Flores fructiferas hermafroditas; continuar en proximas tandas de Cyperaceae",
      keyStep: "A'",
      especieId: "cyperaceae"
    }
  },

  carex_a: {
    id: "carex_a",
    milestone: "Carex",
    manualPage: 112,
    descripcion: "Carex - A: espiguilla solitaria o numerosas",
    opcionA: {
      label: "Espiguilla androgina, solitaria en el apice del tallo, lanceolada, de 1,5-2 cm; utriculos elipsoideos de 6-7 mm",
      keyStep: "A",
      especieId: "carex_sellowiana"
    },
    opcionA_prima: {
      label: "Espiguillas mas o menos numerosas",
      keyStep: "A'",
      nextNodeId: "carex_b"
    }
  },

  carex_b: {
    id: "carex_b",
    milestone: "Carex",
    manualPage: 112,
    descripcion: "Carex - B: espiguillas androginas o unisexuales",
    opcionA: {
      label: "Todas las espiguillas androginas, con flores femeninas en la base y masculinas en el apice",
      keyStep: "B",
      nextNodeId: "carex_c"
    },
    opcionA_prima: {
      label: "Espiguillas unisexuales, masculinas en la parte superior del tallo y femeninas mas abajo; continuar en proxima tanda de Carex",
      keyStep: "B'",
      especieId: "carex"
    }
  },

  carex_c: {
    id: "carex_c",
    milestone: "Carex",
    manualPage: 112,
    descripcion: "Carex - C: espiguillas pedunculadas o sesiles",
    opcionA: {
      label: "Espiguillas 4-6, de 7-10 mm, largamente pedunculadas, cada una en axila de una bractea foliacea",
      keyStep: "C",
      especieId: "carex_phalaroides"
    },
    opcionA_prima: {
      label: "Espiguillas siempre sesiles, formando una espiga terminal",
      keyStep: "C'",
      nextNodeId: "carex_d"
    }
  },

  carex_d: {
    id: "carex_d",
    milestone: "Carex",
    manualPage: 112,
    descripcion: "Carex - D: espiga sin bractea o con bracteas largas",
    opcionA: {
      label: "Espiga sin bractea o con una bractea mas corta que ella",
      keyStep: "D",
      nextNodeId: "carex_e"
    },
    opcionA_prima: {
      label: "Espiga con 2-3 bracteas foliaceas varias veces mas largas que ella; continuar en proxima tanda de Carex",
      keyStep: "D'",
      especieId: "carex"
    }
  },

  carex_e: {
    id: "carex_e",
    milestone: "Carex",
    manualPage: 112,
    descripcion: "Carex - E: rizomas largos o cortos",
    opcionA: {
      label: "Rizomas muy largos, tendidos; espiguillas 6-10 en espiga terminal oblonga ebracteada de 2 cm",
      keyStep: "E",
      especieId: "carex_marcida"
    },
    opcionA_prima: {
      label: "Rizomas muy cortos, formando matas cespitosas",
      keyStep: "E'",
      nextNodeId: "carex_f"
    }
  },

  carex_f: {
    id: "carex_f",
    milestone: "Carex",
    manualPage: 113,
    descripcion: "Carex - F: espiga interrumpida o densa",
    opcionA: {
      label: "Espiga interrumpida, de 5-8 cm, con bractea muy corta; espiguillas 6-8; utriculos lanceolado-ovados de 3-4 mm",
      keyStep: "F",
      especieId: "carex_divulsa"
    },
    opcionA_prima: {
      label: "Espiga densa, cilindrica, de 4-6 cm, con bractea setacea basal; espiguillas en glomerulos compactos",
      keyStep: "F'",
      especieId: "carex_brongniartii"
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
      nextNodeId: "oryzeae_a"
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
      nextNodeId: "hordeae_a"
    },
    opcionA_prima: {
      label: "Espiguillas dispuestas a un solo lado del raquis",
      keyStep: "E'",
      nextNodeId: "chlorideae_a"
    }
  },

  hordeae_a: {
    id: "hordeae_a",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - A: ¿cuántas espiguillas hay en cada articulación del raquis?",
    opcionA: {
      label: "Una sola espiguilla en cada articulación del raquis",
      keyStep: "A",
      nextNodeId: "hordeae_b"
    },
    opcionA_prima: {
      label: "Tres espiguillas unifloras en cada soporte del raquis; las marginales a veces reducidas",
      keyStep: "A'",
      nextNodeId: "hordeum_a"
    }
  },

  hordeae_b: {
    id: "hordeae_b",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - B: ¿las espiguillas están incrustadas en un raquis engrosado?",
    opcionA: {
      label: "Espiguillas unifloras, incrustadas en excavaciones de un raquis engrosado que se desarticula a la madurez",
      keyStep: "B",
      nextNodeId: "hordeae_c"
    },
    opcionA_prima: {
      label: "Espiguillas 2-multifloras, no incrustadas en el raquis",
      keyStep: "B'",
      nextNodeId: "hordeae_d"
    }
  },

  hordeae_c: {
    id: "hordeae_c",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - C: ¿cuántas glumas tienen las espiguillas laterales?",
    opcionA: {
      label: "Espiguillas laterales con una sola gluma",
      keyStep: "C",
      especieId: "lepturus_cylindricus"
    },
    opcionA_prima: {
      label: "Espiguillas laterales con dos glumas",
      keyStep: "C'",
      especieId: "pholiurus_incurvus"
    }
  },

  hordeae_d: {
    id: "hordeae_d",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - D: ¿cómo están colocadas las espiguillas respecto del raquis?",
    opcionA: {
      label: "Espiguillas colocadas en el mismo plano que el raquis; las laterales con una sola gluma y la terminal con dos",
      keyStep: "D",
      nextNodeId: "lolium_a"
    },
    opcionA_prima: {
      label: "Espiguillas transversales al raquis, todas con dos glumas",
      keyStep: "D'",
      nextNodeId: "hordeae_e"
    }
  },

  hordeae_e: {
    id: "hordeae_e",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - E: ¿cómo son las glumas y cuántas flores tiene la espiguilla?",
    opcionA: {
      label: "Glumas lineales, uninervadas; espiguillas 2-3-floras",
      keyStep: "E",
      especieId: "secale_cereale"
    },
    opcionA_prima: {
      label: "Glumas cóncavas o carenadas, con 3 o más nervaduras; espiguillas con 3 o más flores",
      keyStep: "E'",
      nextNodeId: "hordeae_f"
    }
  },

  hordeae_f: {
    id: "hordeae_f",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - F: ¿las plantas son perennes o anuales?",
    opcionA: {
      label: "Plantas perennes; glumas plano-cóncavas",
      keyStep: "F",
      nextNodeId: "agropyron_a"
    },
    opcionA_prima: {
      label: "Plantas anuales; glumas ventradas o carenadas",
      keyStep: "F'",
      nextNodeId: "triticum_a"
    }
  },

  agropyron_a: {
    id: "agropyron_a",
    milestone: "Agropyron",
    manualPage: 66,
    descripcion: "Agropyron - A: ¿las plantas tienen rizomas horizontales cundidores?",
    opcionA: {
      label: "Plantas con rizomas horizontales cundidores",
      keyStep: "A",
      nextNodeId: "agropyron_b"
    },
    opcionA_prima: {
      label: "Plantas cespitosas, sin rizomas, de cerca de 50 cm",
      keyStep: "A'",
      especieId: "agropyron_attenuatum"
    }
  },

  agropyron_b: {
    id: "agropyron_b",
    milestone: "Agropyron",
    manualPage: 66,
    descripcion: "Agropyron - B: ¿cómo son las láminas foliares?",
    opcionA: {
      label: "Láminas foliares convolutas, rígidas y punzantes, con nervaduras muy marcadas",
      keyStep: "B",
      especieId: "agropyron_pungens"
    },
    opcionA_prima: {
      label: "Láminas foliares más o menos planas, flojas, con nervaduras poco marcadas",
      keyStep: "B'",
      nextNodeId: "agropyron_c"
    }
  },

  agropyron_c: {
    id: "agropyron_c",
    milestone: "Agropyron",
    manualPage: 66,
    descripcion: "Agropyron - C: ¿qué tamaño tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas de 12-15 mm, 6-8-floras; tallos hasta de 1 m y espigas de 10-18 cm",
      keyStep: "C",
      especieId: "agropyron_repens"
    },
    opcionA_prima: {
      label: "Espiguillas de 20-35 mm, 8-10-floras; tallos hasta de 2 m y espigas dísticas de 15-25 cm",
      keyStep: "C'",
      especieId: "agropyron_scabrifolium"
    }
  },

  hordeum_a: {
    id: "hordeum_a",
    milestone: "Hordeum",
    manualPage: 67,
    descripcion: "Hordeum - A: ¿cómo son las flores laterales de la tríada?",
    opcionA: {
      label: "Flores laterales más grandes que la central, con gluma interior semejante a la central y aristas muy largas",
      keyStep: "A",
      especieId: "hordeum_leporinum"
    },
    opcionA_prima: {
      label: "Flores laterales abortivas o mucho menos desarrolladas que la central",
      keyStep: "A'",
      nextNodeId: "hordeum_b"
    }
  },

  hordeum_b: {
    id: "hordeum_b",
    milestone: "Hordeum",
    manualPage: 67,
    descripcion: "Hordeum - B: ¿qué longitud alcanzan las aristas de las glumas?",
    opcionA: {
      label: "Glumas capilares con arista larga de 4-6 cm",
      keyStep: "B",
      especieId: "hordeum_jubatum"
    },
    opcionA_prima: {
      label: "Glumas con arista de menos de 2 cm",
      keyStep: "B'",
      nextNodeId: "hordeum_c"
    }
  },

  hordeum_c: {
    id: "hordeum_c",
    milestone: "Hordeum",
    manualPage: 67,
    descripcion: "Hordeum - C: ¿cómo son las glumas interiores?",
    opcionA: {
      label: "Gluma interior de las flores laterales lanceolada; glumas centrales lineales o subuladas",
      keyStep: "C",
      nextNodeId: "hordeum_d"
    },
    opcionA_prima: {
      label: "Glumas interiores laterales y glumas centrales netamente lanceoladas; espigas oblongas angostas",
      keyStep: "C'",
      especieId: "hordeum_pusillum"
    }
  },

  hordeum_d: {
    id: "hordeum_d",
    milestone: "Hordeum",
    manualPage: 67,
    descripcion: "Hordeum - D: ¿las espigas son muy comprimidas o algo comprimidas?",
    opcionA: {
      label: "Espigas comprimidas, de unos 8 cm por 2-4 mm; glumas alcanzan el ápice de las flores laterales",
      keyStep: "D",
      especieId: "hordeum_compressum"
    },
    opcionA_prima: {
      label: "Espigas algo comprimidas, de 4-8 cm por cerca de 5 mm; glumas sobrepasan el ápice de las flores laterales",
      keyStep: "D'",
      especieId: "hordeum_stenostachys"
    }
  },

  lolium_a: {
    id: "lolium_a",
    milestone: "Lolium",
    manualPage: 69,
    descripcion: "Lolium - A: ¿la planta es perenne o anual?",
    opcionA: {
      label: "Hierba perenne; gluma más corta que la espiguilla; 10-20 flores por espiguilla; lemmas aristadas o múticas",
      keyStep: "A",
      especieId: "lolium_multiflorum"
    },
    opcionA_prima: {
      label: "Hierba anual; gluma igual o mayor que la espiguilla, con 5-7 flores; lemmas aristadas",
      keyStep: "A'",
      especieId: "lolium_temulentum"
    }
  },

  triticum_a: {
    id: "triticum_a",
    milestone: "Triticum",
    manualPage: 70,
    descripcion: "Triticum - A: ¿qué trigo corresponde?",
    opcionA: {
      label: "Tallos de cerca de 1 m; espiguillas 3-5-floras; especie cultivada para pan",
      keyStep: "1",
      especieId: "triticum_aestivum"
    },
    opcionA_prima: {
      label: "Especie poco cultivada en Argentina, a veces espontánea",
      keyStep: "2",
      especieId: "triticum_durum"
    }
  },

  aveneae_a: {
    id: "aveneae_a",
    milestone: "Aveneae",
    manualPage: 70,
    descripcion: "Aveneae - A: ¿las glumas caen junto con las lemmas?",
    opcionA: {
      label: "Glumas caducas con las lemmas; flor inferior hermafrodita con lemma mútica y flor superior masculina con lemma aristada",
      keyStep: "A",
      especieId: "holcus_lanatus"
    },
    opcionA_prima: {
      label: "Glumas persistentes",
      keyStep: "A'",
      nextNodeId: "aveneae_b"
    }
  },

  aveneae_b: {
    id: "aveneae_b",
    milestone: "Aveneae",
    manualPage: 70,
    descripcion: "Aveneae - B: ¿cómo es la lígula y la lemma?",
    opcionA: {
      label: "Lígula formada por una línea transversal de pelos; lemma profundamente bífida con dos puntas agudas y arista entre ellas",
      keyStep: "B",
      especieId: "danthonia_montevidensis"
    },
    opcionA_prima: {
      label: "Lígula membranosa; lemma entera o bidentada con arista dorsal o subapical",
      keyStep: "B'",
      nextNodeId: "aveneae_c"
    }
  },

  aveneae_c: {
    id: "aveneae_c",
    milestone: "Aveneae",
    manualPage: 70,
    descripcion: "Aveneae - C: ¿las panojas son espiciformes o laxas?",
    opcionA: {
      label: "Panojas contraídas, espiciformes; arista subapical recta",
      keyStep: "C",
      especieId: "koeleria_phleoides"
    },
    opcionA_prima: {
      label: "Panojas laxas; arista dorsal retorcida",
      keyStep: "C'",
      nextNodeId: "aveneae_d"
    }
  },

  aveneae_d: {
    id: "aveneae_d",
    milestone: "Aveneae",
    manualPage: 70,
    descripcion: "Aveneae - D: ¿las glumas son menores o mayores que las lemmas?",
    opcionA: {
      label: "Glumas menores que las lemmas; plantas perennes",
      keyStep: "D",
      especieId: "amphibromus_scabrivalvis"
    },
    opcionA_prima: {
      label: "Glumas mayores que las lemmas; plantas anuales",
      keyStep: "D'",
      nextNodeId: "avena_a"
    }
  },

  avena_a: {
    id: "avena_a",
    milestone: "Avena",
    manualPage: 71,
    descripcion: "Avena - A: ¿el segundo flósculo se desprende fácilmente de la raquilla?",
    opcionA: {
      label: "El segundo flósculo está soldado a la raquilla y difícilmente se desprende",
      keyStep: "A",
      nextNodeId: "avena_b"
    },
    opcionA_prima: {
      label: "El segundo flósculo está articulado sobre la raquilla y se desprende fácilmente",
      keyStep: "A'",
      nextNodeId: "avena_c"
    }
  },

  avena_b: {
    id: "avena_b",
    milestone: "Avena",
    manualPage: 71,
    descripcion: "Avena - B: ¿la lemma es glabra o cubierta de pelos en el dorso?",
    opcionA: {
      label: "Lemma glabra en su parte dorsal, rodeada de pelos hirsutos en la base; arista retorcida larga",
      keyStep: "B",
      especieId: "avena_byzantina"
    },
    opcionA_prima: {
      label: "Lemma cubierta de pelos hirsutos en el dorso; arista retorcida y geniculada",
      keyStep: "B'",
      especieId: "avena_sterilis"
    }
  },

  avena_c: {
    id: "avena_c",
    milestone: "Avena",
    manualPage: 71,
    descripcion: "Avena - C: ¿cómo termina el ápice de la lemma?",
    opcionA: {
      label: "Lemma con ápice entero o apenas bidentado",
      keyStep: "C",
      nextNodeId: "avena_d"
    },
    opcionA_prima: {
      label: "Lemma terminada en dos dientes o lacinias de 4-8 mm; espiguillas bifloras",
      keyStep: "C'",
      especieId: "avena_barbata"
    }
  },

  avena_d: {
    id: "avena_d",
    milestone: "Avena",
    manualPage: 71,
    descripcion: "Avena - D: ¿la lemma es hirsuta o glabra?",
    opcionA: {
      label: "Lemma hirsuta; arista dorsal retorcida de 35 mm; panojas flojas y abiertas; espiguillas generalmente 3-floras",
      keyStep: "D",
      especieId: "avena_fatua"
    },
    opcionA_prima: {
      label: "Lemma glabra; arista sólo en el flósculo inferior, débil y apenas retorcida; espiguillas castañas, generalmente bifloras",
      keyStep: "D'",
      especieId: "avena_sativa"
    }
  },

  agrostideae_a: {
    id: "agrostideae_a",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - A: ¿la lemma tiene arista desde el ápice?",
    opcionA: {
      label: "Lemma aristada desde el ápice",
      keyStep: "A",
      nextNodeId: "agrostideae_b"
    },
    opcionA_prima: {
      label: "Lemma con arista dorsal o subapical, o mútica",
      keyStep: "A'",
      nextNodeId: "agrostideae_f"
    }
  },

  agrostideae_b: {
    id: "agrostideae_b",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - B: ¿las glumas son más cortas o más largas que la lemma?",
    opcionA: {
      label: "Glumas más cortas que la lemma",
      keyStep: "B",
      nextNodeId: "muhlenbergia_a"
    },
    opcionA_prima: {
      label: "Glumas más largas que la lemma",
      keyStep: "B'",
      nextNodeId: "agrostideae_c"
    }
  },

  agrostideae_c: {
    id: "agrostideae_c",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - C: ¿la arista es trífida o simple?",
    opcionA: {
      label: "Arista trífida",
      keyStep: "C",
      nextNodeId: "aristida_a"
    },
    opcionA_prima: {
      label: "Arista simple",
      keyStep: "C'",
      especieId: "agrostideae_pendiente"
    }
  },

  agrostideae_f: {
    id: "agrostideae_f",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - F: ¿la raquilla se prolonga más allá de la flor con pelos lanosos largos?",
    opcionA: {
      label: "Raquilla prolongada más allá de la flor y provista de pelos lanosos largos; lemma con arista dorsal",
      keyStep: "F",
      especieId: "calamagrostis_montevidensis"
    },
    opcionA_prima: {
      label: "Raquilla raramente prolongada, glabra",
      keyStep: "F'",
      nextNodeId: "agrostideae_g"
    }
  },

  agrostideae_g: {
    id: "agrostideae_g",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - G: ¿las glumas son menores o mayores que las lemmas?",
    opcionA: {
      label: "Glumas menores que las lemmas, que son múticas",
      keyStep: "G",
      nextNodeId: "sporobolus_a"
    },
    opcionA_prima: {
      label: "Glumas mayores que las lemmas, que generalmente son aristadas",
      keyStep: "G'",
      nextNodeId: "agrostideae_h"
    }
  },

  agrostideae_h: {
    id: "agrostideae_h",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - H: ¿las glumas son caducas o persistentes sobre la panoja?",
    opcionA: {
      label: "Glumas caducas a la madurez de la espiguilla",
      keyStep: "H",
      nextNodeId: "agrostideae_j"
    },
    opcionA_prima: {
      label: "Glumas persistentes sobre la panoja",
      keyStep: "H'",
      nextNodeId: "agrostideae_k"
    }
  },

  agrostideae_j: {
    id: "agrostideae_j",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - J: ¿las glumas son aristadas/acuminadas o múticas?",
    opcionA: {
      label: "Glumas aristadas o acuminadas, caducas junto con una parte del pedicelo",
      keyStep: "J",
      nextNodeId: "polypogon_a"
    },
    opcionA_prima: {
      label: "Glumas múticas, articuladas sobre el pedicelo",
      keyStep: "J'",
      nextNodeId: "alopecurus_a"
    }
  },

  agrostideae_k: {
    id: "agrostideae_k",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - K: ¿las glumas son redondeadas con mucrón o atenuadas agudas?",
    opcionA: {
      label: "Glumas redondeadas en el ápice, donde llevan un largo mucrón",
      keyStep: "K",
      especieId: "phleum_pratense"
    },
    opcionA_prima: {
      label: "Glumas atenuadas y agudas en el ápice",
      keyStep: "K'",
      nextNodeId: "agrostis_a"
    }
  },

  agrostis_a: {
    id: "agrostis_a",
    milestone: "Agrostis",
    manualPage: 72,
    descripcion: "Agrostis - A: ¿la panoja es muy laxa y tenue?",
    opcionA: {
      label: "Panoja muy laxa y tenue; espiguillas muy largamente pediceladas de 2-2,5 mm; lemma con arista dorsal de 2 mm",
      keyStep: "A",
      especieId: "agrostis_montevidensis"
    },
    opcionA_prima: {
      label: "Panoja más o menos contraída",
      keyStep: "A'",
      nextNodeId: "agrostis_b"
    }
  },

  agrostis_b: {
    id: "agrostis_b",
    milestone: "Agrostis",
    manualPage: 72,
    descripcion: "Agrostis - B: ¿la glumela tiene arista dorsal?",
    opcionA: {
      label: "Glumela sin arista dorsal",
      keyStep: "B",
      nextNodeId: "agrostis_c"
    },
    opcionA_prima: {
      label: "Glumela con arista dorsal; espiguillas lanceoladas; glumas carenadas con carena ciliada",
      keyStep: "B'",
      nextNodeId: "agrostis_d"
    }
  },

  agrostis_c: {
    id: "agrostis_c",
    milestone: "Agrostis",
    manualPage: 72,
    descripcion: "Agrostis - C: ¿dónde son escabrosas las glumas?",
    opcionA: {
      label: "Glumas escabrosas únicamente en la quilla; panojas densas interrumpidas con ramas no verticiladas",
      keyStep: "C",
      especieId: "agrostis_palustris"
    },
    opcionA_prima: {
      label: "Glumas escabrosas en la quilla y en el dorso; panojas contraídas con ramificaciones verticiladas",
      keyStep: "C'",
      especieId: "agrostis_verticillata"
    }
  },

  agrostis_d: {
    id: "agrostis_d",
    milestone: "Agrostis",
    manualPage: 72,
    descripcion: "Agrostis - D: ¿la panoja es espiciforme continua o alargada interrumpida?",
    opcionA: {
      label: "Panoja muy densa, espiciforme, continua, de 3-5 cm; espiguillas de 3-3,5 mm",
      keyStep: "D",
      especieId: "agrostis_tandilensis"
    },
    opcionA_prima: {
      label: "Panojas alargadas, densas, no espiciformes, interrumpidas, de 5-25 cm",
      keyStep: "D'",
      nextNodeId: "agrostis_e"
    }
  },

  agrostis_e: {
    id: "agrostis_e",
    milestone: "Agrostis",
    manualPage: 72,
    descripcion: "Agrostis - E: ¿qué tamaño tiene la panoja?",
    opcionA: {
      label: "Panojas de 5-12 cm; espiguillas de 3 mm; glumas desiguales puntiagudas; lemma con arista dorsal de unos 4 mm",
      keyStep: "E",
      especieId: "agrostis_jurgensii"
    },
    opcionA_prima: {
      label: "Panoja de 10-25 cm; espiguillas de 2,5 mm; glumas casi iguales aristadas; arista dorsal de 1-2 mm",
      keyStep: "E'",
      especieId: "agrostis_platensis"
    }
  },

  alopecurus_a: {
    id: "alopecurus_a",
    milestone: "Alopecurus",
    manualPage: 74,
    descripcion: "Alopecurus - A: ¿cómo están unidas las glumas?",
    opcionA: {
      label: "Glumas soldadas entre sí hasta su mitad; quillas ásperas o cortamente ciliadas; panojas delgadas de 4-10 cm",
      keyStep: "A",
      especieId: "alopecurus_agrestis"
    },
    opcionA_prima: {
      label: "Glumas unidas sólo en la base; quillas largamente ciliadas abajo; panoja muy densa de 2-3 cm",
      keyStep: "A'",
      especieId: "alopecurus_bonariensis"
    }
  },

  aristida_a: {
    id: "aristida_a",
    milestone: "Aristida",
    manualPage: 74,
    descripcion: "Aristida - A: ¿la gluma inferior es mayor que la superior?",
    opcionA: {
      label: "Gluma inferior de 17-18 mm, mayor que la superior; aristas de unos 8 cm",
      keyStep: "A",
      especieId: "aristida_spegazzinii"
    },
    opcionA_prima: {
      label: "Gluma inferior más corta que la superior",
      keyStep: "A'",
      nextNodeId: "aristida_b"
    }
  },

  aristida_b: {
    id: "aristida_b",
    milestone: "Aristida",
    manualPage: 75,
    descripcion: "Aristida - B: ¿cómo es la inflorescencia?",
    opcionA: {
      label: "Inflorescencia alargada, débil",
      keyStep: "B",
      nextNodeId: "aristida_c"
    },
    opcionA_prima: {
      label: "Panojas contraídas, densas, semiespiciformes, con eje principal muy corto",
      keyStep: "B'",
      especieId: "aristida_murina"
    }
  },

  aristida_c: {
    id: "aristida_c",
    milestone: "Aristida",
    manualPage: 75,
    descripcion: "Aristida - C: ¿la hierba es perenne cespitosa o anual ramificada?",
    opcionA: {
      label: "Hierba perenne cespitosa, de 40-50 cm; panojas alargadas laxas; aristas de unos 10 cm",
      keyStep: "C",
      especieId: "aristida_pallens"
    },
    opcionA_prima: {
      label: "Hierba anual ramificada en la base, de 10-30 cm; panojas angostas densas; aristas de cerca de 10 mm",
      keyStep: "C'",
      especieId: "aristida_adscensionis"
    }
  },

  muhlenbergia_a: {
    id: "muhlenbergia_a",
    milestone: "Muhlenbergia",
    manualPage: 76,
    descripcion: "Muhlenbergia - A: ¿la lemma es cortamente mucronada o largamente aristada?",
    opcionA: {
      label: "Lemma cortamente mucronada; perenne rizomatosa de 8-25 cm; espiguillas de 2 mm en panojas laxas",
      keyStep: "A",
      especieId: "muhlenbergia_asperifolia"
    },
    opcionA_prima: {
      label: "Lemma largamente aristada; perenne ascendente de 50 cm; panojas angostas flojas",
      keyStep: "A'",
      especieId: "muhlenbergia_schreberi"
    }
  },

  polypogon_a: {
    id: "polypogon_a",
    milestone: "Polypogon",
    manualPage: 78,
    descripcion: "Polypogon - A: ¿las glumas son casi múticas o largamente aristadas?",
    opcionA: {
      label: "Glumas agudas, casi múticas, ciliado-espinulosas en el dorso; panojas interrumpidas densas",
      keyStep: "A",
      especieId: "polypogon_chilensis"
    },
    opcionA_prima: {
      label: "Glumas largamente aristadas",
      keyStep: "A'",
      nextNodeId: "polypogon_b"
    }
  },

  polypogon_b: {
    id: "polypogon_b",
    milestone: "Polypogon",
    manualPage: 78,
    descripcion: "Polypogon - B: ¿la arista es apical o subapical?",
    opcionA: {
      label: "Arista apical; panoja interrumpida; hierba perenne de 50-100 cm",
      keyStep: "B",
      especieId: "polypogon_elongatus"
    },
    opcionA_prima: {
      label: "Arista subapical; panoja compacta espiciforme elíptica; hierba anual de 15-50 cm",
      keyStep: "B'",
      especieId: "polypogon_monspeliensis"
    }
  },

  sporobolus_a: {
    id: "sporobolus_a",
    milestone: "Sporobolus",
    manualPage: 79,
    descripcion: "Sporobolus - A: ¿la inflorescencia es densa o laxa?",
    opcionA: {
      label: "Inflorescencia densa, más o menos espiciforme; ramas laterales alternas",
      keyStep: "A",
      nextNodeId: "sporobolus_b"
    },
    opcionA_prima: {
      label: "Inflorescencia laxa, piramidal; espiguillas lanceoladas glabras de 1,5-1,7 mm",
      keyStep: "A'",
      especieId: "sporobolus_pyramidatus"
    }
  },

  sporobolus_b: {
    id: "sporobolus_b",
    milestone: "Sporobolus",
    manualPage: 79,
    descripcion: "Sporobolus - B: ¿qué tamaño tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas de 2 mm, glabras, verdosas; panojas muy largas y angostas",
      keyStep: "B",
      especieId: "sporobolus_poiretii"
    },
    opcionA_prima: {
      label: "Espiguillas de 6-7 mm, lanceoladas, muy comprimidas, claras; panoja contraída de 10-25 cm",
      keyStep: "B'",
      especieId: "sporobolus_platensis"
    }
  },

  chlorideae_a: {
    id: "chlorideae_a",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - A: ¿cómo se disponen las espigas?",
    opcionA: {
      label: "Espigas fasciculadas en el extremo de las cañas floríferas",
      keyStep: "A",
      nextNodeId: "chlorideae_b"
    },
    opcionA_prima: {
      label: "Espigas dispuestas a lo largo de un eje principal, raramente solitarias",
      keyStep: "A'",
      nextNodeId: "chlorideae_f"
    }
  },

  chlorideae_b: {
    id: "chlorideae_b",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - B: ¿la lemma termina en tres aristas largas?",
    opcionA: {
      label: "Lemma terminada en 3 aristas largas",
      keyStep: "B",
      especieId: "trichloris_crinita"
    },
    opcionA_prima: {
      label: "Lemma mútica o con una sola arista",
      keyStep: "B'",
      nextNodeId: "chlorideae_c"
    }
  },

  chlorideae_c: {
    id: "chlorideae_c",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - C: ¿cuántas flores hermafroditas tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas con una sola flor hermafrodita, rara vez dos en Chloris",
      keyStep: "C",
      nextNodeId: "chlorideae_d"
    },
    opcionA_prima: {
      label: "Espiguillas con 3 o más flores",
      keyStep: "C'",
      nextNodeId: "chlorideae_e"
    }
  },

  chlorideae_d: {
    id: "chlorideae_d",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - D: ¿las lemmas son múticas o aristadas?",
    opcionA: {
      label: "Lemmas múticas",
      keyStep: "D",
      nextNodeId: "cynodon_a"
    },
    opcionA_prima: {
      label: "Lemmas aristadas",
      keyStep: "D'",
      nextNodeId: "chloris_a"
    }
  },

  chlorideae_e: {
    id: "chlorideae_e",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - E: ¿la lemma es aguda o bilobada/bidentada?",
    opcionA: {
      label: "Lemma aguda, mútica",
      keyStep: "E",
      nextNodeId: "eleusine_a"
    },
    opcionA_prima: {
      label: "Lemma bilobada o bidentada, con mucrón o arista entre los dos dientes",
      keyStep: "E'",
      nextNodeId: "leptochloa_a"
    }
  },

  chlorideae_f: {
    id: "chlorideae_f",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - F: ¿la lemma es tri-aristada?",
    opcionA: {
      label: "Lemma tri-aristada",
      keyStep: "F",
      especieId: "bouteloua_megapotamica"
    },
    opcionA_prima: {
      label: "Lemma mútica o con una sola arista",
      keyStep: "F'",
      nextNodeId: "chlorideae_g"
    }
  },

  chlorideae_g: {
    id: "chlorideae_g",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - G: ¿las glumas caen con la espiguilla?",
    opcionA: {
      label: "Glumas caducas con la espiguilla",
      keyStep: "G",
      nextNodeId: "spartina_a"
    },
    opcionA_prima: {
      label: "Glumas persistentes sobre el raquis",
      keyStep: "G'",
      nextNodeId: "chlorideae_h"
    }
  },

  chlorideae_h: {
    id: "chlorideae_h",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - H: ¿cuántas flores hermafroditas tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas con dos o más flores hermafroditas; lemma bilobada o bidentada con mucrón",
      keyStep: "H",
      nextNodeId: "chlorideae_j"
    },
    opcionA_prima: {
      label: "Espiguillas con una sola flor hermafrodita; lemma aguda",
      keyStep: "H'",
      nextNodeId: "chlorideae_k"
    }
  },

  chlorideae_j: {
    id: "chlorideae_j",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - J: ¿las espiguillas son violáceas/rojizas o verdes?",
    opcionA: {
      label: "Espiguillas violáceas o rojizas, comprimidas lateralmente",
      keyStep: "J",
      nextNodeId: "leptochloa_a"
    },
    opcionA_prima: {
      label: "Espiguillas verdes, cilíndricas",
      keyStep: "J'",
      nextNodeId: "diplachne_a"
    }
  },

  chlorideae_k: {
    id: "chlorideae_k",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - K: ¿el raquis de las espigas es articulado o continuo?",
    opcionA: {
      label: "Espigas divergentes, con raquis articulado",
      keyStep: "K",
      especieId: "schedonnardus_paniculatus"
    },
    opcionA_prima: {
      label: "Espigas aproximadas al eje principal, con raquis continuo",
      keyStep: "K'",
      especieId: "willkommia_texana_stolonifera"
    }
  },

  cynodon_a: {
    id: "cynodon_a",
    milestone: "Cynodon",
    manualPage: 85,
    descripcion: "Cynodon - A: ¿la raquilla se prolonga al lado de la pálea?",
    opcionA: {
      label: "Raquilla prolongada al lado de la pálea; lemma con quilla pestañosa no alada; planta con rizomas y estolones",
      keyStep: "A",
      especieId: "cynodon_dactylon"
    },
    opcionA_prima: {
      label: "Raquilla no prolongada; lemma con quilla brevemente pestañosa y angostamente alada; sólo estolones superficiales",
      keyStep: "A'",
      especieId: "cynodon_hirsutus"
    }
  },

  diplachne_a: {
    id: "diplachne_a",
    milestone: "Diplachne",
    manualPage: 86,
    descripcion: "Diplachne - A: ¿la lemma es bilobulada o bidentada?",
    opcionA: {
      label: "Lemma bilobulada en el ápice, 3-nervada, con nervadura central terminada en corto diente",
      keyStep: "A",
      especieId: "diplachne_dubia"
    },
    opcionA_prima: {
      label: "Lemma bidentada en el ápice",
      keyStep: "A'",
      nextNodeId: "diplachne_b"
    }
  },

  diplachne_b: {
    id: "diplachne_b",
    milestone: "Diplachne",
    manualPage: 86,
    descripcion: "Diplachne - B: ¿qué tamaño tienen las anteras?",
    opcionA: {
      label: "Anteras de 1-1,5 mm; lemma no aristada; inflorescencia con 15-20 racimos flexuosos",
      keyStep: "B",
      especieId: "diplachne_fusca"
    },
    opcionA_prima: {
      label: "Anteras de 0,5 mm; lemma generalmente aristada",
      keyStep: "B'",
      nextNodeId: "diplachne_c"
    }
  },

  diplachne_c: {
    id: "diplachne_c",
    milestone: "Diplachne",
    manualPage: 86,
    descripcion: "Diplachne - C: ¿la lemma es acuminada o obtusa/truncada?",
    opcionA: {
      label: "Lemma acuminada en el ápice, con dos dientes agudos y arista de 1 mm",
      keyStep: "C",
      especieId: "diplachne_fascicularis"
    },
    opcionA_prima: {
      label: "Lemma obtusa o truncada en el ápice, con 3 dientes cortos",
      keyStep: "C'",
      especieId: "diplachne_uninervia"
    }
  },

  eleusine_a: {
    id: "eleusine_a",
    milestone: "Eleusine",
    manualPage: 87,
    descripcion: "Eleusine - A: ¿cuántas espigas tiene la inflorescencia?",
    opcionA: {
      label: "Espigas 5-12, de 5-7 cm; espiguillas ovadas agudas, de unos 5 mm, 6-10-floras",
      keyStep: "A",
      especieId: "eleusine_indica"
    },
    opcionA_prima: {
      label: "Espigas 2-4, gruesas, de 1-4 cm; espiguillas ovado-lanceoladas de 6-9 mm",
      keyStep: "A'",
      especieId: "eleusine_tristachya"
    }
  },

  spartina_a: {
    id: "spartina_a",
    milestone: "Spartina",
    manualPage: 87,
    descripcion: "Spartina - A: ¿qué tamaño y disposición tienen las espigas?",
    opcionA: {
      label: "Espigas de 3-7 cm, pocas, completamente adosadas al eje principal; espiguillas de 9-12 mm",
      keyStep: "A",
      especieId: "spartina_montevidensis"
    },
    opcionA_prima: {
      label: "Espigas de 10-16 cm; espiguillas de 12-18 mm",
      keyStep: "A'",
      nextNodeId: "spartina_b"
    }
  },

  spartina_b: {
    id: "spartina_b",
    milestone: "Spartina",
    manualPage: 87,
    descripcion: "Spartina - B: ¿las espigas divergen o se aproximan al raquis principal?",
    opcionA: {
      label: "Espigas 12-20, de unos 10 cm, algo divergentes; glumas glabras o ligeramente cilioladas",
      keyStep: "B",
      especieId: "spartina_brasiliensis"
    },
    opcionA_prima: {
      label: "Espigas 7-11, de 11-16 cm, aproximadas al raquis principal; glumas escabrosas en la quilla",
      keyStep: "B'",
      especieId: "spartina_longispica"
    }
  },

  leptochloa_a: {
    id: "leptochloa_a",
    milestone: "Leptochloa",
    manualPage: 88,
    descripcion: "Leptochloa - A: ¿las espigas están fasciculadas en el ápice o a lo largo del raquis?",
    opcionA: {
      label: "Espigas 5-10, fasciculadas en el ápice de las cañas, de 10-15 cm; espiguillas 3-4-floras",
      keyStep: "A",
      especieId: "leptochloa_chloridiformis"
    },
    opcionA_prima: {
      label: "Espigas numerosas, delgadas, dispuestas a lo largo del raquis principal; espiguillas 5-6-floras rojizo-violáceas",
      keyStep: "A'",
      especieId: "leptochloa_virgata"
    }
  },

  chloris_a: {
    id: "chloris_a",
    milestone: "Chloris",
    manualPage: 83,
    descripcion: "Chloris - A: ¿las espigas están adheridas entre sí simulando una sola espiga terminal?",
    opcionA: {
      label: "Inflorescencia con 2-7 espigas semihelicoidales estrechamente adheridas, simulando una espiga terminal única",
      keyStep: "A",
      especieId: "chloris_berroi"
    },
    opcionA_prima: {
      label: "Inflorescencia formada por varias espigas libres",
      keyStep: "A'",
      nextNodeId: "chloris_b"
    }
  },

  chloris_b: {
    id: "chloris_b",
    milestone: "Chloris",
    manualPage: 83,
    descripcion: "Chloris - B: ¿cómo es la gluma superior y la lemma fértil?",
    opcionA: {
      label: "Gluma superior bilobada, con corta arista apical; lemma fértil mútica o apenas aristulada",
      keyStep: "B",
      nextNodeId: "chloris_c"
    },
    opcionA_prima: {
      label: "Glumas múticas, la superior mucronada; lemma fértil largamente aristada",
      keyStep: "B'",
      nextNodeId: "chloris_e"
    }
  },

  chloris_c: {
    id: "chloris_c",
    milestone: "Chloris",
    manualPage: 83,
    descripcion: "Chloris - C: ¿la lemma está ciliada también en el dorso?",
    opcionA: {
      label: "Lemma ciliada en el dorso y en el margen, carenada y mútica; espigas 4-14 digitadas",
      keyStep: "C",
      especieId: "chloris_capensis_bahiensis"
    },
    opcionA_prima: {
      label: "Lemma ciliada en el margen y glabra en el dorso",
      keyStep: "C'",
      nextNodeId: "chloris_d"
    }
  },

  chloris_d: {
    id: "chloris_d",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - D: ¿cómo termina la lemma de la flor estéril?",
    opcionA: {
      label: "Lemma de la flor estéril aguda; espigas 12-30, flexuosas, de 8-14 cm",
      keyStep: "D",
      especieId: "chloris_distichophylla"
    },
    opcionA_prima: {
      label: "Lemma del antecio estéril truncada en el ápice; espigas 8-15, de 4-10 cm",
      keyStep: "D'",
      especieId: "chloris_retusa"
    }
  },

  chloris_e: {
    id: "chloris_e",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - E: ¿cuántos antecios estériles acompañan al fértil?",
    opcionA: {
      label: "Espiguillas con un antecio fértil y dos antecios estériles casi iguales, largamente aristados",
      keyStep: "E",
      especieId: "chloris_inflata"
    },
    opcionA_prima: {
      label: "Espiguillas con un antecio hermafrodita y un antecio estéril largamente aristado",
      keyStep: "E'",
      nextNodeId: "chloris_f"
    }
  },

  chloris_f: {
    id: "chloris_f",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - F: ¿la lemma es glabra o ciliada?",
    opcionA: {
      label: "Lemma glabra o casi glabra en el dorso y margen; inflorescencia con 2-3 verticilos de espigas perpendiculares",
      keyStep: "F",
      especieId: "chloris_halophila"
    },
    opcionA_prima: {
      label: "Lemma ciliada en el margen y a veces también en la quilla",
      keyStep: "F'",
      nextNodeId: "chloris_g"
    }
  },

  chloris_g: {
    id: "chloris_g",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - G: ¿la quilla de la lemma es glabra o ciliada?",
    opcionA: {
      label: "Lemma ciliada únicamente en el margen, con quilla glabra; espigas 12-24 de 7-9 cm",
      keyStep: "G",
      especieId: "chloris_gayana"
    },
    opcionA_prima: {
      label: "Lemma ciliada en el margen y en la quilla",
      keyStep: "G'",
      nextNodeId: "chloris_h"
    }
  },

  chloris_h: {
    id: "chloris_h",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - H: ¿qué tamaño tienen las espigas?",
    opcionA: {
      label: "Espigas 3-8, de 3-5 cm, fasciculadas en el ápice; espiguillas de 2-3 mm",
      keyStep: "H",
      especieId: "chloris_ciliata"
    },
    opcionA_prima: {
      label: "Espigas de 7-15 cm",
      keyStep: "H'",
      nextNodeId: "chloris_j"
    }
  },

  chloris_j: {
    id: "chloris_j",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - J: ¿cuántas espigas y de qué tamaño?",
    opcionA: {
      label: "Espigas 3-6, flexuosas e inclinadas hacia abajo, de 7-10 cm",
      keyStep: "J",
      especieId: "chloris_canterai"
    },
    opcionA_prima: {
      label: "Espigas 12-25, flexuosas, de 10-15 cm",
      keyStep: "J'",
      especieId: "chloris_polydactyla"
    }
  },

  phalarideae_a: {
    id: "phalarideae_a",
    milestone: "Phalarideae",
    manualPage: 89,
    descripcion: "Phalarideae - A: ¿las flores estériles tienen lemma mútica o aristada?",
    opcionA: {
      label: "Flores estériles con lemma mútica; espiguillas muy comprimidas lateralmente",
      keyStep: "A",
      nextNodeId: "phalaris_a"
    },
    opcionA_prima: {
      label: "Flores estériles con lemma aristada; espiguillas casi cilíndricas",
      keyStep: "A'",
      especieId: "anthoxanthum_odoratum"
    }
  },

  phalaris_a: {
    id: "phalaris_a",
    milestone: "Phalaris",
    manualPage: 89,
    descripcion: "Phalaris - A: ¿la quilla de las glumas es anchamente alada?",
    opcionA: {
      label: "Glumas con quilla anchamente alada, ala puntiaguda arriba; panoja cilíndrica de 4-6 cm",
      keyStep: "A",
      especieId: "phalaris_paradoxa"
    },
    opcionA_prima: {
      label: "Glumas con quilla estrechamente alada, ala no puntiaguda",
      keyStep: "A'",
      nextNodeId: "phalaris_b"
    }
  },

  phalaris_b: {
    id: "phalaris_b",
    milestone: "Phalaris",
    manualPage: 89,
    descripcion: "Phalaris - B: ¿qué tamaño tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas de 7-9 mm; panojas ovoides de 3-4 cm; lemma fértil pubescente",
      keyStep: "B",
      especieId: "phalaris_canariensis"
    },
    opcionA_prima: {
      label: "Espiguillas de 3-6 mm",
      keyStep: "B'",
      nextNodeId: "phalaris_c"
    }
  },

  phalaris_c: {
    id: "phalaris_c",
    milestone: "Phalaris",
    manualPage: 89,
    descripcion: "Phalaris - C: ¿las panojas son cilíndricas largas u ovoides/cortas?",
    opcionA: {
      label: "Panojas cilíndricas de 5-15 cm; espiguillas de 3,5-4,5 mm",
      keyStep: "C",
      nextNodeId: "phalaris_d"
    },
    opcionA_prima: {
      label: "Panojas ovoides o cortamente cilíndricas, de 2-5(-7) cm; espiguillas de 5-6 mm",
      keyStep: "C'",
      especieId: "phalaris_minor"
    }
  },

  phalaris_d: {
    id: "phalaris_d",
    milestone: "Phalaris",
    manualPage: 89,
    descripcion: "Phalaris - D: ¿cómo es la pubescencia de la lemma?",
    opcionA: {
      label: "Espiguillas de unos 4,5 mm; lemma pubescente salvo el tercio superior glabro; panojas de 5-10 cm",
      keyStep: "D",
      especieId: "phalaris_platensis"
    },
    opcionA_prima: {
      label: "Espiguillas de 3,5-4 mm; lemma uniformemente pubescente; panojas de 8-15 cm",
      keyStep: "D'",
      especieId: "phalaris_angusta"
    }
  },

  oryzeae_a: {
    id: "oryzeae_a",
    milestone: "Oryzeae",
    manualPage: 91,
    descripcion: "Oryzeae - A: ¿las flores son hermafroditas o unisexuales?",
    opcionA: {
      label: "Flores hermafroditas; espiguillas comprimidas lateralmente; lemma mútica",
      keyStep: "A",
      especieId: "leersia_hexandra"
    },
    opcionA_prima: {
      label: "Flores unisexuales, diclino-monoicas; espiguillas cilíndricas",
      keyStep: "A'",
      nextNodeId: "oryzeae_b"
    }
  },

  oryzeae_b: {
    id: "oryzeae_b",
    milestone: "Oryzeae",
    manualPage: 91,
    descripcion: "Oryzeae - B: ¿la lemma es mútica o aristada?",
    opcionA: {
      label: "Lemma mútica; flores masculinas y femeninas en inflorescencias separadas",
      keyStep: "B",
      especieId: "luziola_peruviana"
    },
    opcionA_prima: {
      label: "Lemma aristada; flores masculinas y femeninas en la misma inflorescencia",
      keyStep: "B'",
      especieId: "zizaniopsis_bonariensis"
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
      nextNodeId: "aveneae_a"
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
      nextNodeId: "agrostideae_a"
    },
    opcionA_prima: {
      label: "Antecio fértil terminal, con una o dos flores rudimentarias en la base",
      keyStep: "H'",
      nextNodeId: "phalarideae_a"
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
      nextNodeId: "paniceae_a"
    },
    opcionA_prima: {
      label: "Lemma fértil tenue, hialina; glumas cartilaginosas o coriáceas",
      keyStep: "J'",
      nextNodeId: "andropogoneae_a"
    }
  },

  paniceae_a: {
    id: "paniceae_a",
    milestone: "Paniceae",
    manualPage: 92,
    descripcion: "Paniceae - entrada parcial: espiguillas en dos filas sobre un lado de un raquis triangular",
    opcionA: {
      label: "Espiguillas unifloras, deprimidas, biconvexas, dispuestas en dos filas sobre un lado de un raquis triangular; espigas delgadas",
      keyStep: "A",
      especieId: "axonopus_compressus"
    },
    opcionA_prima: {
      label: "Espiguillas con otros caracteres dentro de Paniceae",
      keyStep: "A'",
      nextNodeId: "paniceae_b"
    }
  },

  paniceae_b: {
    id: "paniceae_b",
    milestone: "Paniceae",
    manualPage: 92,
    descripcion: "Paniceae - entrada parcial: espiguillas rodeadas por un involucro espinoso",
    opcionA: {
      label: "Espiguillas rodeadas por un involucro espinoso formado por numerosas cerdas soldadas entre si",
      keyStep: "B",
      nextNodeId: "cenchrus_a"
    },
    opcionA_prima: {
      label: "Espiguillas sin ese involucro espinoso; continuar en la proxima tanda de Paniceae",
      keyStep: "B'",
      nextNodeId: "paniceae_c"
    }
  },

  paniceae_c: {
    id: "paniceae_c",
    milestone: "Paniceae",
    manualPage: 93,
    descripcion: "Paniceae - entrada parcial: espiguillas en grupos de 2-3 sobre un raquis triangular",
    opcionA: {
      label: "Espiguillas en grupos de 2-3, sesiles o cortamente pediceladas, dispuestas en dos hileras sobre uno de los lados de un raquis triangular",
      keyStep: "C",
      nextNodeId: "digitaria_a"
    },
    opcionA_prima: {
      label: "Espiguillas con otros caracteres dentro de Paniceae; continuar en una proxima tanda",
      keyStep: "C'",
      nextNodeId: "paniceae_d"
    }
  },

  cenchrus_a: {
    id: "cenchrus_a",
    milestone: "Cenchrus",
    manualPage: 92,
    descripcion: "Cenchrus - A: cerdas involucrales delgadas o muy ensanchadas",
    opcionA: {
      label: "Cerdas involucrales delgadas, unidas unicamente en su base, cubiertas de pelitos retrorsos; racimos densos de 10-25 cm",
      keyStep: "A",
      especieId: "cenchrus_myosuroides"
    },
    opcionA_prima: {
      label: "Cerdas involucrales muy ensanchadas y unidas por encima de la base",
      keyStep: "A'",
      nextNodeId: "cenchrus_b"
    }
  },

  cenchrus_b: {
    id: "cenchrus_b",
    milestone: "Cenchrus",
    manualPage: 92,
    descripcion: "Cenchrus - B: forma del involucro",
    opcionA: {
      label: "Involucro con numerosas cerdas; las internas ensanchadas en la base y soldadas casi hasta la mitad, con pelos retrorsos; espiguillas de a 4",
      keyStep: "B",
      especieId: "cenchrus_echinatus"
    },
    opcionA_prima: {
      label: "Involucro formado unicamente por espinas muy anchas en la base, abiertas, sin pelos retrorsos; espiguillas 2 por involucro",
      keyStep: "B'",
      especieId: "cenchrus_pauciflorus"
    }
  },

  digitaria_a: {
    id: "digitaria_a",
    milestone: "Digitaria",
    manualPage: 93,
    descripcion: "Digitaria - A: disposicion de los racimos",
    opcionA: {
      label: "Racimos distribuidos a lo largo de un eje principal, no amontonados en el apice de la cana",
      keyStep: "A",
      nextNodeId: "digitaria_b"
    },
    opcionA_prima: {
      label: "Racimos amontonados y mas o menos fasciculados en el apice de la cana florifera",
      keyStep: "A'",
      nextNodeId: "digitaria_c"
    }
  },

  digitaria_b: {
    id: "digitaria_b",
    milestone: "Digitaria",
    manualPage: 93,
    descripcion: "Digitaria - B: relacion entre segunda gluma y lemma esteril",
    opcionA: {
      label: "Segunda gluma mucho mas corta que la tercera o lemma esteril; panoja de 3-6 racimos; espiguillas lanceoladas, velludas, de 4-5 mm",
      keyStep: "B",
      especieId: "digitaria_sellowii"
    },
    opcionA_prima: {
      label: "Segunda gluma casi igual a la tercera o lemma esteril; panoja de 10 a muchos racimos; espiguillas lanceoladas, velludas, de 5-6 mm",
      keyStep: "B'",
      especieId: "digitaria_insularis"
    }
  },

  digitaria_c: {
    id: "digitaria_c",
    milestone: "Digitaria",
    manualPage: 93,
    descripcion: "Digitaria - C: relacion entre segunda gluma y lemma esteril",
    opcionA: {
      label: "Segunda gluma mucho mas corta que la lemma esteril; espiguillas lanceoladas de unos 3 mm; racimos digitados de 5-15 cm",
      keyStep: "C",
      especieId: "digitaria_sanguinalis"
    },
    opcionA_prima: {
      label: "Segunda gluma casi igual a la lemma esteril",
      keyStep: "C'",
      nextNodeId: "digitaria_d"
    }
  },

  digitaria_d: {
    id: "digitaria_d",
    milestone: "Digitaria",
    manualPage: 93,
    descripcion: "Digitaria - D: tamano de las espiguillas",
    opcionA: {
      label: "Espiguillas de 3,5 mm o mas; gluma superior y lemma esteril iguales, acuminadas y velludas; racimos 3-5 de 3-7 cm",
      keyStep: "D",
      especieId: "digitaria_aequiglumis"
    },
    opcionA_prima: {
      label: "Espiguillas de menos de 3 mm; espigas 8 a muchas, debiles, de 7-11 cm, alternas y amontonadas en el apice",
      keyStep: "D'",
      especieId: "digitaria_lanuginosa"
    }
  },

  paniceae_d: {
    id: "paniceae_d",
    milestone: "Paniceae",
    manualPage: 94,
    descripcion: "Paniceae - entrada parcial: espiguillas deprimidas en panojas compactas",
    opcionA: {
      label: "Espiguillas deprimidas, plano-convexas, solitarias o en glomerulos irregulares sobre un lado de las ramificaciones de la panoja",
      keyStep: "D",
      nextNodeId: "echinochloa_a"
    },
    opcionA_prima: {
      label: "Espiguillas con otros caracteres dentro de Paniceae; continuar en una proxima tanda",
      keyStep: "D'",
      nextNodeId: "paniceae_e"
    }
  },

  echinochloa_a: {
    id: "echinochloa_a",
    milestone: "Echinochloa",
    manualPage: 94,
    descripcion: "Echinochloa - A: plantas perennes o anuales",
    opcionA: {
      label: "Plantas perennes; hojas con ligula formada por una hilera de pelos",
      keyStep: "A",
      nextNodeId: "echinochloa_b"
    },
    opcionA_prima: {
      label: "Plantas anuales; hojas sin ligula o a lo mas algo pubescentes en la region ligular",
      keyStep: "A'",
      nextNodeId: "echinochloa_c"
    }
  },

  echinochloa_b: {
    id: "echinochloa_b",
    milestone: "Echinochloa",
    manualPage: 94,
    descripcion: "Echinochloa - B: ancho de hojas y densidad de panojas",
    opcionA: {
      label: "Hojas de 10-25 mm de ancho; panojas densas; espiguillas ovoideas de 4,5-7 mm por 2-3 mm",
      keyStep: "B",
      especieId: "echinochloa_polystachya"
    },
    opcionA_prima: {
      label: "Hojas de 6-10 mm de ancho; panojas laxas, nutantes y paucifloras; espiguillas lanceoladas de 6-7 mm",
      keyStep: "B'",
      especieId: "echinochloa_helodes"
    }
  },

  echinochloa_c: {
    id: "echinochloa_c",
    milestone: "Echinochloa",
    manualPage: 94,
    descripcion: "Echinochloa - C: tamano y forma de las espiguillas",
    opcionA: {
      label: "Espiguillas de 2-2,6 mm, ovoides, obtusas, rojizas o verdosas, muticas; panoja erecta lineal",
      keyStep: "C",
      especieId: "echinochloa_colonum"
    },
    opcionA_prima: {
      label: "Espiguillas de 3 mm o mas, acuminadas, generalmente aristadas",
      keyStep: "C'",
      nextNodeId: "echinochloa_d"
    }
  },

  echinochloa_d: {
    id: "echinochloa_d",
    milestone: "Echinochloa",
    manualPage: 94,
    descripcion: "Echinochloa - D: forma de espiguillas y panojas",
    opcionA: {
      label: "Espiguillas ovoides, ensanchadas, espinulosas; lemma esteril con arista de 3-30 mm; panojas piramidales densas",
      keyStep: "D",
      especieId: "echinochloa_crusgalli"
    },
    opcionA_prima: {
      label: "Espiguillas lanceoladas; lemma esteril con espinulas poco desarrolladas y arista de 2-15 mm; panojas oblongo-lanceoladas nutantes",
      keyStep: "D'",
      especieId: "echinochloa_cruspavonis"
    }
  },

  paniceae_e: {
    id: "paniceae_e",
    milestone: "Paniceae",
    manualPage: 96,
    descripcion: "Paniceae - entrada parcial: espiguillas con dilatacion basal o panojas de Panicum",
    opcionA: {
      label: "Espiguillas deprimidas, solitarias o geminadas, con una dilatacion claviforme en su base; racimos simples sobre un eje principal",
      keyStep: "E",
      especieId: "eriochloa_montevidensis"
    },
    opcionA_prima: {
      label: "Espiguillas con otros caracteres dentro de Paniceae",
      keyStep: "E'",
      nextNodeId: "paniceae_f"
    }
  },

  paniceae_f: {
    id: "paniceae_f",
    milestone: "Paniceae",
    manualPage: 96,
    descripcion: "Paniceae - entrada parcial: Panicum o Paspalum",
    opcionA: {
      label: "Espiguillas mas o menos deprimidas, dispuestas en panojas laxas o densas; caracteres de Panicum",
      keyStep: "F",
      nextNodeId: "panicum_a"
    },
    opcionA_prima: {
      label: "Espiguillas solitarias o en pares, dispuestas en dos o mas filas sobre un lado de un raquis angosto o dilatado; caracteres de Paspalum",
      keyStep: "F'",
      nextNodeId: "paniceae_g"
    }
  },

  paniceae_g: {
    id: "paniceae_g",
    milestone: "Paniceae",
    manualPage: 100,
    descripcion: "Paniceae - entrada parcial: Paspalum o Pennisetum",
    opcionA: {
      label: "Espiguillas solitarias o en pares, dispuestas en dos o mas filas sobre uno de los lados de un raquis; caracteres de Paspalum",
      keyStep: "G",
      nextNodeId: "paspalum_a"
    },
    opcionA_prima: {
      label: "Espiguillas solitarias o en grupos de 2-3, rodeadas por un involucro de cerdas libres que se desprende con la espiguilla; caracteres de Pennisetum",
      keyStep: "G'",
      nextNodeId: "paniceae_h"
    }
  },

  paniceae_h: {
    id: "paniceae_h",
    milestone: "Paniceae",
    manualPage: 102,
    descripcion: "Paniceae - entrada parcial: Pennisetum o Setaria",
    opcionA: {
      label: "Espiguillas rodeadas por un involucro de cerdas libres que se desprende con la espiguilla; caracteres de Pennisetum",
      keyStep: "H",
      nextNodeId: "pennisetum_a"
    },
    opcionA_prima: {
      label: "Espiguillas con otros caracteres dentro de Paniceae",
      keyStep: "H'",
      nextNodeId: "paniceae_i"
    }
  },

  paniceae_i: {
    id: "paniceae_i",
    milestone: "Paniceae",
    manualPage: 103,
    descripcion: "Paniceae - entrada parcial: Setaria u otros generos finales",
    opcionA: {
      label: "Espiguillas rodeadas por una o mas cerdas involucrales que persisten sobre el raquis despues de caer las espiguillas; caracteres de Setaria",
      keyStep: "I",
      nextNodeId: "setaria_a"
    },
    opcionA_prima: {
      label: "Espiguillas sin cerdas involucrales persistentes de Setaria; continuar con otros generos de Paniceae",
      keyStep: "I'",
      nextNodeId: "paniceae_j"
    }
  },

  panicum_a: {
    id: "panicum_a",
    milestone: "Panicum",
    manualPage: 96,
    descripcion: "Panicum - A: tamano y aspecto de las espiguillas",
    opcionA: {
      label: "Espiguillas de 6-8 mm, ovoideo-globosas, cubiertas de largos pelos blancos; panojas largas y densas, subnutantes",
      keyStep: "A",
      especieId: "panicum_racemosum"
    },
    opcionA_prima: {
      label: "Espiguillas de 1-5 mm",
      keyStep: "A'",
      nextNodeId: "panicum_b"
    }
  },

  panicum_b: {
    id: "panicum_b",
    milestone: "Panicum",
    manualPage: 96,
    descripcion: "Panicum - B: espiguillas de 4-5 mm o menores",
    opcionA: {
      label: "Espiguillas de 4-5 mm",
      keyStep: "B",
      nextNodeId: "panicum_c"
    },
    opcionA_prima: {
      label: "Espiguillas de 1-3,5 mm; continuar en una proxima tanda de Panicum",
      keyStep: "B'",
      nextNodeId: "panicum_d"
    }
  },

  panicum_c: {
    id: "panicum_c",
    milestone: "Panicum",
    manualPage: 96,
    descripcion: "Panicum - C: plantas flotantes robustas o terrestres anuales",
    opcionA: {
      label: "Plantas robustas, flotantes, con tallos gruesos ricos en aerenquima, radicantes en los nudos; panojas grandes y abiertas",
      keyStep: "C",
      especieId: "panicum_elephantipes"
    },
    opcionA_prima: {
      label: "Plantas terrestres, anuales, erectas o ascendentes; panojas por lo comun parcialmente incluidas en la vaina de la hoja superior",
      keyStep: "C'",
      especieId: "panicum_miliaceum"
    }
  },

  panicum_d: {
    id: "panicum_d",
    milestone: "Panicum",
    manualPage: 96,
    descripcion: "Panicum - D: tipo de inflorescencia",
    opcionA: {
      label: "Inflorescencia mas o menos contraida, con espiguillas cortamente pediceladas amontonadas en racimos a lo largo de un eje principal",
      keyStep: "D",
      nextNodeId: "panicum_e"
    },
    opcionA_prima: {
      label: "Inflorescencia muy laxa, difusa, con espiguillas largamente pediceladas; continuar en una proxima tanda de Panicum",
      keyStep: "D'",
      nextNodeId: "panicum_j"
    }
  },

  panicum_e: {
    id: "panicum_e",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - E: ancho de hojas y robustez",
    opcionA: {
      label: "Hojas de 15-25 mm de ancho, glabras; plantas perennes, rizomatosas, robustas, de 1-2 m; panojas erectas y amplias",
      keyStep: "E",
      especieId: "panicum_grumosum"
    },
    opcionA_prima: {
      label: "Hojas de menos de 11 mm de ancho",
      keyStep: "E'",
      nextNodeId: "panicum_f"
    }
  },

  panicum_f: {
    id: "panicum_f",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - F: largo de espiguillas",
    opcionA: {
      label: "Espiguillas de 1-1,5 mm, ovoideas, semiagudas, glabras; gluma inferior de un tercio de la espiguilla",
      keyStep: "F",
      especieId: "panicum_laxum"
    },
    opcionA_prima: {
      label: "Espiguillas de 1,5-3 mm",
      keyStep: "F'",
      nextNodeId: "panicum_g"
    }
  },

  panicum_g: {
    id: "panicum_g",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - G: longitud relativa de la gluma inferior",
    opcionA: {
      label: "Gluma inferior alcanzando hasta la mitad de la espiguilla; hojas rigidas de 4-8 cm por 5-7 mm; panojas terminales laxas",
      keyStep: "G",
      especieId: "panicum_fultum"
    },
    opcionA_prima: {
      label: "Gluma inferior alcanzando a lo mas hasta un tercio de la espiguilla",
      keyStep: "G'",
      nextNodeId: "panicum_i"
    }
  },

  panicum_i: {
    id: "panicum_i",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - I: forma de espiguillas y densidad de panojas",
    opcionA: {
      label: "Espiguillas de 1,8-2 mm, ovadas, agudas, glabras; panojas contraidas con 10-25 racimos densos",
      keyStep: "I",
      especieId: "panicum_milioides"
    },
    opcionA_prima: {
      label: "Espiguillas de 2,5-3 mm, lanceoladas, agudas, glabras, rojizas; panojas muy densas, espiciformes, de 4-10 racimos",
      keyStep: "I'",
      especieId: "panicum_decipiens"
    }
  },

  panicum_j: {
    id: "panicum_j",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - J: cerdas involucrales en la base de la espiguilla",
    opcionA: {
      label: "En la base de la espiguilla existen generalmente algunas cerdas involucrales caducas; plantas bambusoides, rizomatosas, de 1-3 m",
      keyStep: "J",
      especieId: "panicum_tricholaenoides"
    },
    opcionA_prima: {
      label: "Espiguillas sin cerdas en su base; plantas no bambusoides",
      keyStep: "J'",
      nextNodeId: "panicum_k"
    }
  },

  panicum_k: {
    id: "panicum_k",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - K: plantas anuales o perennes",
    opcionA: {
      label: "Plantas anuales",
      keyStep: "K",
      nextNodeId: "panicum_l"
    },
    opcionA_prima: {
      label: "Plantas perennes",
      keyStep: "K'",
      nextNodeId: "panicum_m"
    }
  },

  panicum_l: {
    id: "panicum_l",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - L: pubescencia de plantas anuales",
    opcionA: {
      label: "Plantas densamente hirsutas, erectas, de 20-80 cm; panojas amplias y laxas; espiguillas de unos 2 mm",
      keyStep: "L",
      especieId: "panicum_capillare"
    },
    opcionA_prima: {
      label: "Plantas laxamente pubescentes o glabras, ascendentes o erectas, de 50-100 cm; espiguillas de 2-3,2 mm",
      keyStep: "L'",
      especieId: "panicum_dichotomiflorum"
    }
  },

  panicum_m: {
    id: "panicum_m",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - M: hojas anchas planas o angostas convolutas",
    opcionA: {
      label: "Hojas planas, anchas, de 5-15 mm, con base redondeada o auriculada",
      keyStep: "M",
      nextNodeId: "panicum_n"
    },
    opcionA_prima: {
      label: "Hojas por lo comun mas o menos convolutas, de 1-5 mm, no redondeadas en la base",
      keyStep: "M'",
      nextNodeId: "panicum_r"
    }
  },

  panicum_n: {
    id: "panicum_n",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - N: longitud de la gluma inferior",
    opcionA: {
      label: "Gluma inferior obtusa, alcanzando solo de un quinto a un cuarto de la longitud de la espiguilla",
      keyStep: "N",
      especieId: "panicum_dichotomiflorum"
    },
    opcionA_prima: {
      label: "Gluma inferior alcanzando de la mitad a tres cuartos de la longitud de la espiguilla",
      keyStep: "N'",
      nextNodeId: "panicum_o"
    }
  },

  panicum_o: {
    id: "panicum_o",
    milestone: "Panicum",
    manualPage: 98,
    descripcion: "Panicum - O: ligula pilosa o glabra",
    opcionA: {
      label: "Ligula pilosa; hojas de mas de 6 cm, lanceoladas; espiguillas obovadas, obtusas y laxamente pubescentes",
      keyStep: "O",
      especieId: "panicum_sabulorum"
    },
    opcionA_prima: {
      label: "Ligula glabra o casi glabra; hojas de 4-5 cm",
      keyStep: "O'",
      nextNodeId: "panicum_p"
    }
  },

  panicum_p: {
    id: "panicum_p",
    milestone: "Panicum",
    manualPage: 98,
    descripcion: "Panicum - P: espiguillas obtusas o agudas",
    opcionA: {
      label: "Espiguillas obtusas, de unos 2 mm, largamente pediceladas y glaberrimas; panojas difusas muy laxas",
      keyStep: "P",
      especieId: "panicum_helobium"
    },
    opcionA_prima: {
      label: "Espiguillas agudas, ovadas, glabras, de unos 2 mm; panojas cortas paucispicadas terminales y axilares",
      keyStep: "P'",
      especieId: "panicum_unilineatum"
    }
  },

  panicum_r: {
    id: "panicum_r",
    milestone: "Panicum",
    manualPage: 98,
    descripcion: "Panicum - R: rizomas cundidores o plantas cespitosas",
    opcionA: {
      label: "Plantas con rizomas horizontales u oblicuos cundidores; panojas pequenas, densas, algo purpureas",
      keyStep: "R",
      especieId: "panicum_gouini"
    },
    opcionA_prima: {
      label: "Plantas cespitosas; gluma inferior de un cuarto a la mitad del largo de la espiguilla",
      keyStep: "R'",
      nextNodeId: "panicum_s"
    }
  },

  panicum_s: {
    id: "panicum_s",
    milestone: "Panicum",
    manualPage: 98,
    descripcion: "Panicum - S: ancho de hojas en plantas cespitosas",
    opcionA: {
      label: "Hojas de 1-3 mm, lineales, rigidas, pubescentes; plantas de cerca de 50 cm; panojas deltoideas, amplias, muy laxas",
      keyStep: "S",
      especieId: "panicum_bergii"
    },
    opcionA_prima: {
      label: "Hojas de cerca de 5 mm; plantas de 50-100 cm, ligeramente hirsutas o glabrescentes; panojas amplias y difusas",
      keyStep: "S'",
      especieId: "panicum_pilcomayense"
    }
  },

  paspalum_a: {
    id: "paspalum_a",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - A: plantas flotantes o terrestres",
    opcionA: {
      label: "Plantas perennes, flotantes, con vainas dilatadas y esponjosas; tallos tendidos sobre el agua, radicantes en los nudos",
      keyStep: "A",
      especieId: "paspalum_repens"
    },
    opcionA_prima: {
      label: "Plantas terrestres, con vainas no dilatadas; raquis generalmente triquetro, igual o mas angosto que las espiguillas",
      keyStep: "A'",
      nextNodeId: "paspalum_b"
    }
  },

  paspalum_b: {
    id: "paspalum_b",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - B: tipo de inflorescencia",
    opcionA: {
      label: "Inflorescencia formada por dos espigas geminadas en V en la extremidad de las canas floriferas, raramente con una tercera cercana",
      keyStep: "B",
      nextNodeId: "paspalum_c"
    },
    opcionA_prima: {
      label: "Inflorescencia formada por 1 a muchas espigas nunca geminadas; continuar en proxima tanda de Paspalum",
      keyStep: "B'",
      nextNodeId: "paspalum_f"
    }
  },

  paspalum_c: {
    id: "paspalum_c",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - C: rizomas cortos o largos",
    opcionA: {
      label: "Plantas con rizomas cortos y fuertes, que dan lugar a matas compactas",
      keyStep: "C",
      nextNodeId: "paspalum_d"
    },
    opcionA_prima: {
      label: "Plantas con rizomas largos y profundos; espiguillas lanceoladas de 2,5-3,5 mm",
      keyStep: "C'",
      nextNodeId: "paspalum_e"
    }
  },

  paspalum_d: {
    id: "paspalum_d",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - D: tamano y disposicion de espiguillas",
    opcionA: {
      label: "Espiguillas de 1,8-2,3 mm por 1,1-1,3 mm, elipticas u obovadas, en una sola serie; espigas de 4-7 cm",
      keyStep: "D",
      especieId: "paspalum_pumilum"
    },
    opcionA_prima: {
      label: "Espiguillas de 2,8-4 mm, elipticas u obovadas, verde-violaceas, en dos hileras; espigas generalmente 2, a veces 3-4",
      keyStep: "D'",
      especieId: "paspalum_notatum"
    }
  },

  paspalum_e: {
    id: "paspalum_e",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - E: pubescencia de gluma y lemma esteril",
    opcionA: {
      label: "Gluma finamente pubescente; lemma esteril glabra; espigas desigualmente pedunculadas de 2-6 cm",
      keyStep: "E",
      especieId: "paspalum_distichum"
    },
    opcionA_prima: {
      label: "Gluma y lemma esteril glabras; espigas con pedicelos casi iguales",
      keyStep: "E'",
      especieId: "paspalum_vaginatum"
    }
  },

  paspalum_f: {
    id: "paspalum_f",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - F: color y forma de la lemma",
    opcionA: {
      label: "Lemma castana, lustrosa, pronunciadamente convexa",
      keyStep: "F",
      nextNodeId: "paspalum_g"
    },
    opcionA_prima: {
      label: "Lemma blanca o pajiza, suavemente convexa o navicular",
      keyStep: "F'",
      nextNodeId: "paspalum_h"
    }
  },

  paspalum_g: {
    id: "paspalum_g",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - G: plantas cespitosas o con rizomas largos",
    opcionA: {
      label: "Plantas cespitosas de 30-90 cm; espigas 3-6 alternadas; espiguillas ovado-elipticas de 2,8-3 mm",
      keyStep: "G",
      especieId: "paspalum_plicatulum"
    },
    opcionA_prima: {
      label: "Plantas con largos rizomas horizontales de 30-40 cm; espigas 3-6; espiguillas castano claro, elipticas, de unos 3 mm",
      keyStep: "G'",
      especieId: "paspalum_nicorae"
    }
  },

  paspalum_h: {
    id: "paspalum_h",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - H: cantidad de espigas",
    opcionA: {
      label: "Inflorescencia formada por 3-10 espigas",
      keyStep: "H",
      nextNodeId: "paspalum_j"
    },
    opcionA_prima: {
      label: "Inflorescencia formada por 12-80 espigas; continuar en proxima tanda de Paspalum",
      keyStep: "H'",
      nextNodeId: "paspalum_m"
    }
  },

  paspalum_j: {
    id: "paspalum_j",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - J: largo de las espigas",
    opcionA: {
      label: "Espigas de 1,5-3 cm; plantas cespitosas con estolones; canas floriferas de cerca de 50 cm con 6-8 espigas",
      keyStep: "J",
      especieId: "paspalum_proliferum"
    },
    opcionA_prima: {
      label: "Espigas de 3-9 cm; plantas sin estolones",
      keyStep: "J'",
      nextNodeId: "paspalum_k"
    }
  },

  paspalum_k: {
    id: "paspalum_k",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - K: largo de espiguillas",
    opcionA: {
      label: "Espiguillas de 1,5 mm, verdosas, ovadas; hierba erecta perenne de 50-100 cm; espigas 4-6 delgadas",
      keyStep: "K",
      especieId: "paspalum_malacophyllum"
    },
    opcionA_prima: {
      label: "Espiguillas de 3-3,5 mm",
      keyStep: "K'",
      nextNodeId: "paspalum_l"
    }
  },

  paspalum_l: {
    id: "paspalum_l",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - L: color y pubescencia de espiguillas",
    opcionA: {
      label: "Espiguillas castano claro, obovadas, corta y flojamente pubescentes; espigas 3-7 de 3-5 cm",
      keyStep: "L",
      especieId: "paspalum_alcalinum"
    },
    opcionA_prima: {
      label: "Espiguillas verdosas, en pares, ovadas, agudas, de 3-3,5 mm por 2-2,5 mm; espigas 3-6 inclinadas",
      keyStep: "L'",
      especieId: "paspalum_dilatatum"
    }
  },

  paspalum_m: {
    id: "paspalum_m",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - M: color de espiguillas en inflorescencias con 12-80 espigas",
    opcionA: {
      label: "Espiguillas verdosas, obovadas, agudas, de 2,3-2,6 mm; hierba perenne de 1,5-2 m; espigas 10-25",
      keyStep: "M",
      especieId: "paspalum_urvillei"
    },
    opcionA_prima: {
      label: "Espiguillas ferrugineas o rojizas",
      keyStep: "M'",
      nextNodeId: "paspalum_n"
    }
  },

  paspalum_n: {
    id: "paspalum_n",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - N: vainas foliares carenadas o cilindricas",
    opcionA: {
      label: "Vainas foliares notablemente carenadas; espiguillas glabras, ovadas, de 2,5-2,8 mm por 1,5 mm",
      keyStep: "N",
      especieId: "paspalum_intermedium"
    },
    opcionA_prima: {
      label: "Vainas foliares cilindricas o apenas carenadas; espiguillas pubescentes al menos en el borde de las glumas",
      keyStep: "N'",
      nextNodeId: "paspalum_o"
    }
  },

  paspalum_o: {
    id: "paspalum_o",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - O: tamano y disposicion de espiguillas",
    opcionA: {
      label: "Espiguillas de 2-2,5 mm, ovado-lanceoladas, en 4 hileras; gluma pubescente; lemma esteril plana, casi glabra",
      keyStep: "O",
      especieId: "paspalum_quadrifarium"
    },
    opcionA_prima: {
      label: "Espiguillas de 3-4 mm",
      keyStep: "O'",
      nextNodeId: "paspalum_p"
    }
  },

  paspalum_p: {
    id: "paspalum_p",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - P: cantidad de espigas",
    opcionA: {
      label: "Inflorescencia formada por 12-30 espigas; espiguillas ovadas, agudas, de 3,3-3,7 mm",
      keyStep: "P",
      especieId: "paspalum_exaltatum"
    },
    opcionA_prima: {
      label: "Inflorescencia con 40-80 espigas, piramidal, de cerca de 50 cm; espiguillas lanceoladas, ferrugineas, de 3,5-4 mm",
      keyStep: "P'",
      especieId: "paspalum_haumanii"
    }
  },

  pennisetum_a: {
    id: "pennisetum_a",
    milestone: "Pennisetum",
    manualPage: 102,
    descripcion: "Pennisetum - A: cerdas involucrales plumosas o simples",
    opcionA: {
      label: "Cerdas involucrales numerosas, plumosas, de hasta 25 mm; panojas cilíndricas, densas, de 5-10 cm",
      keyStep: "A",
      especieId: "pennisetum_villosum"
    },
    opcionA_prima: {
      label: "Cerdas involucrales simples, 8-12, de menos de 20 mm; panojas gruesas de 3-5 cm, inclinadas",
      keyStep: "A'",
      especieId: "pennisetum_latifolium"
    }
  },

  setaria_a: {
    id: "setaria_a",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - A: cantidad de cerdas involucrales",
    opcionA: {
      label: "Cerdas involucrales mas de cinco; perenne, cespitosa, con tallos ascendentes de 30-40 cm",
      keyStep: "A",
      especieId: "setaria_geniculata"
    },
    opcionA_prima: {
      label: "Cerdas involucrales 1, raramente 2-3",
      keyStep: "A'",
      nextNodeId: "setaria_b"
    }
  },

  setaria_b: {
    id: "setaria_b",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - B: direccion de los pelos de las cerdas",
    opcionA: {
      label: "Cerdas con pelos retrorsos que las hacen adherentes a la ropa; anual de 40-100 cm",
      keyStep: "B",
      especieId: "setaria_verticillata"
    },
    opcionA_prima: {
      label: "Cerdas involucrales con pelos antrorsos, no adherentes",
      keyStep: "B'",
      nextNodeId: "setaria_c"
    }
  },

  setaria_c: {
    id: "setaria_c",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - C: plantas anuales o perennes",
    opcionA: {
      label: "Plantas anuales de 20-40 cm; panojas espiciformes cortas y gruesas; eje de la panoja velludo",
      keyStep: "C",
      especieId: "setaria_viridis"
    },
    opcionA_prima: {
      label: "Plantas perennes; panojas lineales u oblongas",
      keyStep: "C'",
      nextNodeId: "setaria_d"
    }
  },

  setaria_d: {
    id: "setaria_d",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - D: plantas robustas o menores",
    opcionA: {
      label: "Plantas robustas de 60-100 cm; hojas de hasta 16 cm por 12-15 mm; panojas densas de 10-18 cm",
      keyStep: "D",
      especieId: "setaria_argentina"
    },
    opcionA_prima: {
      label: "Plantas generalmente menores; hojas de menos de 10 mm de ancho; espigas de 5-10 cm",
      keyStep: "D'",
      nextNodeId: "setaria_e"
    }
  },

  setaria_e: {
    id: "setaria_e",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - E: forma de espiguillas",
    opcionA: {
      label: "Espiguillas globosas, de 1,8 mm, glabras; gluma inferior hasta la mitad de la espiguilla; eje escabroso",
      keyStep: "E",
      especieId: "setaria_fiebrigii"
    },
    opcionA_prima: {
      label: "Espiguillas ovoideas, de 2-2,5 mm; gluma superior casi hasta el apice de la espiguilla",
      keyStep: "E'",
      nextNodeId: "setaria_f"
    }
  },

  setaria_f: {
    id: "setaria_f",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - F: eje de la inflorescencia",
    opcionA: {
      label: "Eje de la inflorescencia glabro o aspero; perenne cespitosa de 30-50 cm; panoja densa, espiciforme",
      keyStep: "F",
      especieId: "setaria_caespitosa"
    },
    opcionA_prima: {
      label: "Eje de la inflorescencia pubescente; perenne cespitosa de 50-70 cm; panojas no muy densas, algo interrumpidas abajo",
      keyStep: "F'",
      especieId: "setaria_vaginata"
    }
  },

  paniceae_j: {
    id: "paniceae_j",
    milestone: "Paniceae",
    manualPage: 104,
    descripcion: "Paniceae - generos finales: Stenotaphrum o continuar",
    opcionA: {
      label: "Espiguillas incrustadas sobre un lado de un raquis grueso y plano que se desarticula tardiamente",
      keyStep: "J",
      especieId: "stenotaphrum_secundatum"
    },
    opcionA_prima: {
      label: "Espiguillas no incrustadas en un raquis grueso y plano",
      keyStep: "J'",
      nextNodeId: "paniceae_k"
    }
  },

  paniceae_k: {
    id: "paniceae_k",
    milestone: "Paniceae",
    manualPage: 104,
    descripcion: "Paniceae - generos finales: Leptocoryphium o continuar",
    opcionA: {
      label: "Gluma inferior ausente; segunda gluma y lemma esteril velludas; lemma fertil y palea pardas con apice blanquecino",
      keyStep: "K",
      especieId: "leptocoryphium_lanatum"
    },
    opcionA_prima: {
      label: "Gluma inferior presente o con otros caracteres",
      keyStep: "K'",
      nextNodeId: "paniceae_l"
    }
  },

  paniceae_l: {
    id: "paniceae_l",
    milestone: "Paniceae",
    manualPage: 105,
    descripcion: "Paniceae - generos finales: Ichnanthus o continuar",
    opcionA: {
      label: "Gluma inferior casi tan larga como la superior; lemma de la flor hermafrodita con dos excavaciones laterales en la base",
      keyStep: "L",
      especieId: "ichnanthus_pallens"
    },
    opcionA_prima: {
      label: "Lemma fertil sin dos excavaciones laterales en la base",
      keyStep: "L'",
      nextNodeId: "paniceae_m"
    }
  },

  paniceae_m: {
    id: "paniceae_m",
    milestone: "Paniceae",
    manualPage: 105,
    descripcion: "Paniceae - generos finales: Hymenachne o continuar",
    opcionA: {
      label: "Espiguillas con dos glumas y lemma esteril glumiforme; lemma fertil y palea poco endurecidas; panoja espiciforme",
      keyStep: "M",
      especieId: "hymenachne_amplexicaulis"
    },
    opcionA_prima: {
      label: "Lemma fertil mas endurecida o con otros caracteres",
      keyStep: "M'",
      nextNodeId: "paniceae_n"
    }
  },

  paniceae_n: {
    id: "paniceae_n",
    milestone: "Paniceae",
    manualPage: 105,
    descripcion: "Paniceae - generos finales: Pseudechinolaena o continuar",
    opcionA: {
      label: "Primera y segunda glumas casi de la misma longitud; segunda gluma ventricosa y con pelos ganchudos a la madurez",
      keyStep: "N",
      especieId: "pseudechinolaena_polystachya"
    },
    opcionA_prima: {
      label: "Segunda gluma sin pelos ganchudos ventricosos a la madurez",
      keyStep: "N'",
      nextNodeId: "paniceae_o"
    }
  },

  paniceae_o: {
    id: "paniceae_o",
    milestone: "Paniceae",
    manualPage: 105,
    descripcion: "Paniceae - generos finales: Brachiaria o continuar",
    opcionA: {
      label: "Gluma inferior orientada hacia el raquis; espiguillas en dos hileras sobre un raquis triquetro formando espigas unilaterales",
      keyStep: "O",
      especieId: "brachiaria_extensa"
    },
    opcionA_prima: {
      label: "Gluma inferior orientada hacia afuera o glumas aristadas; continuar",
      keyStep: "O'",
      nextNodeId: "paniceae_p"
    }
  },

  paniceae_p: {
    id: "paniceae_p",
    milestone: "Paniceae",
    manualPage: 105,
    descripcion: "Paniceae - generos finales: Paspalidium u Oplismenopsis/Oplismenus",
    opcionA: {
      label: "Espiguillas con dos glumas, la inferior hacia afuera y la superior hacia el raquis; lemma esteril mutica",
      keyStep: "P",
      especieId: "paspalidium_paludivagum"
    },
    opcionA_prima: {
      label: "Glumas aristadas o espiguillas bifloras con gluma inferior aristada",
      keyStep: "P'",
      nextNodeId: "paniceae_q"
    }
  },

  paniceae_q: {
    id: "paniceae_q",
    milestone: "Paniceae",
    manualPage: 106,
    descripcion: "Paniceae - generos finales: Oplismenopsis u Oplismenus",
    opcionA: {
      label: "Espiguillas bifloras; gluma inferior corta, aristada, con el dorso dirigido hacia el raquis; hojas lanceoladas planas",
      keyStep: "Q",
      especieId: "oplismenopsis_najada"
    },
    opcionA_prima: {
      label: "Espiguillas gruesas o algo comprimidas lateralmente, subsesiles, ordenadas en dos hileras; glumas casi iguales, aristadas",
      keyStep: "Q'",
      especieId: "oplismenus_setarius"
    }
  },

  andropogoneae_a: {
    id: "andropogoneae_a",
    milestone: "Andropogoneae",
    manualPage: 106,
    descripcion: "Andropogoneae - entrada parcial: Bothriochloa o continuar",
    opcionA: {
      label: "Racimos amontonados en la parte superior de las canas floriferas formando panojas plateadas densas; caracteres de Bothriochloa",
      keyStep: "A",
      nextNodeId: "bothriochloa_a"
    },
    opcionA_prima: {
      label: "Racimos solitarios, geminados, fasciculados o con otros caracteres dentro de Andropogoneae; continuar en proxima tanda",
      keyStep: "A'",
      nextNodeId: "andropogoneae_b"
    }
  },

  bothriochloa_a: {
    id: "bothriochloa_a",
    milestone: "Bothriochloa",
    manualPage: 107,
    descripcion: "Bothriochloa - A: espiguillas muticas o aristadas",
    opcionA: {
      label: "Espiguillas muticas; hierba perenne, cespitosa, de 1-2 m; tallos glabros; racimos muy numerosos",
      keyStep: "A",
      especieId: "bothriochloa_hassleri"
    },
    opcionA_prima: {
      label: "Espiguillas aristadas",
      keyStep: "A'",
      nextNodeId: "bothriochloa_b"
    }
  },

  bothriochloa_b: {
    id: "bothriochloa_b",
    milestone: "Bothriochloa",
    manualPage: 107,
    descripcion: "Bothriochloa - B: pelos en los nudos de las canas",
    opcionA: {
      label: "Canas glabras en los nudos; plantas cespitosas, cortamente rizomatosas, de cerca de 50 cm; panoja fusiforme plateada",
      keyStep: "B",
      especieId: "bothriochloa_lagurioides"
    },
    opcionA_prima: {
      label: "Canas con una coronita de pelos en los nudos",
      keyStep: "B'",
      nextNodeId: "bothriochloa_c"
    }
  },

  bothriochloa_c: {
    id: "bothriochloa_c",
    milestone: "Bothriochloa",
    manualPage: 107,
    descripcion: "Bothriochloa - C: largo y color de panojas",
    opcionA: {
      label: "Panojas de menos de 10 cm, plateadas; tallos de menos de 1 m",
      keyStep: "C",
      nextNodeId: "bothriochloa_d"
    },
    opcionA_prima: {
      label: "Panojas de 10-20 cm, verdosas; tallos de 1,5-2 m; gluma inferior con excavacion puntiforme dorsal",
      keyStep: "C'",
      especieId: "bothriochloa_alta"
    }
  },

  bothriochloa_d: {
    id: "bothriochloa_d",
    milestone: "Bothriochloa",
    manualPage: 107,
    descripcion: "Bothriochloa - D: excavacion puntiforme en gluma inferior",
    opcionA: {
      label: "Gluma inferior sin excavaciones puntiformes en el dorso; panoja oblonga plateada; espiguillas fertiles de unos 4 mm",
      keyStep: "D",
      especieId: "bothriochloa_saccharoides"
    },
    opcionA_prima: {
      label: "Gluma inferior con una excavacion puntiforme en el dorso",
      keyStep: "D'",
      especieId: "bothriochloa_perforata"
    }
  },

  andropogoneae_b: {
    id: "andropogoneae_b",
    milestone: "Andropogoneae",
    manualPage: 109,
    descripcion: "Andropogoneae - entrada parcial: Andropogon o generos con raquis articulado",
    opcionA: {
      label: "Racimos solitarios en axilas de hojas reducidas formando seudopanoja; caracteres de Andropogon",
      keyStep: "B",
      nextNodeId: "andropogon_a"
    },
    opcionA_prima: {
      label: "Racimos espiciformes cilindricos o panojas terminales con otros caracteres",
      keyStep: "B'",
      nextNodeId: "andropogoneae_c"
    }
  },

  andropogon_a: {
    id: "andropogon_a",
    milestone: "Andropogon",
    manualPage: 109,
    descripcion: "Andropogon - A: largo de espiguillas",
    opcionA: {
      label: "Espiguillas de 4-5 mm; hierbas perennes, cespitosas, con tallos rojizos de 50-100 cm",
      keyStep: "A",
      especieId: "andropogon_paniculatus"
    },
    opcionA_prima: {
      label: "Espiguillas de 6-9 mm; hierbas perennes, cespitosas, rojizas, de 30-40 cm",
      keyStep: "A'",
      especieId: "andropogon_consanguineus"
    }
  },

  andropogoneae_c: {
    id: "andropogoneae_c",
    milestone: "Andropogoneae",
    manualPage: 109,
    descripcion: "Andropogoneae - generos simples: Hemarthria o continuar",
    opcionA: {
      label: "Raquis tenaz; espiguilla esteril con pedicelo adherido al raquis; glumas muticas, coriaceas, carenadas, con quilla alada",
      keyStep: "C",
      especieId: "hemarthria_altissima"
    },
    opcionA_prima: {
      label: "Raquis que se desarticula facilmente o panojas terminales con otros caracteres",
      keyStep: "C'",
      nextNodeId: "andropogoneae_d"
    }
  },

  andropogoneae_d: {
    id: "andropogoneae_d",
    milestone: "Andropogoneae",
    manualPage: 109,
    descripcion: "Andropogoneae - generos simples: Rottboellia o continuar",
    opcionA: {
      label: "Raquis engrosado que se desarticula facilmente; espiguilla fertil apretada contra la parte concava del raquis",
      keyStep: "D",
      especieId: "rottboellia_selloana"
    },
    opcionA_prima: {
      label: "Panojas terminales laxas o estrechas, no con ese raquis engrosado",
      keyStep: "D'",
      nextNodeId: "andropogoneae_e"
    }
  },

  andropogoneae_e: {
    id: "andropogoneae_e",
    milestone: "Andropogoneae",
    manualPage: 109,
    descripcion: "Andropogoneae - generos simples: Sorghum o Imperata",
    opcionA: {
      label: "Espiguillas en pares, una sesil y otra pedicelada esteril pero bien desarrollada; panojas terminales mas o menos laxas",
      keyStep: "E",
      especieId: "sorghum_halepense"
    },
    opcionA_prima: {
      label: "Espiguillas iguales entre si, muticas, en pares sobre un raquis continuo alargado y envueltas por largos pelos plateados",
      keyStep: "E'",
      nextNodeId: "andropogoneae_f"
    }
  },

  andropogoneae_f: {
    id: "andropogoneae_f",
    milestone: "Andropogoneae",
    manualPage: 110,
    descripcion: "Andropogoneae - generos finales: Imperata o continuar",
    opcionA: {
      label: "Espiguillas iguales entre si, muticas, en pares sobre un raquis continuo alargado, envueltas por largos pelos plateados; panojas estrechas, plateadas",
      keyStep: "F",
      especieId: "imperata_brasiliensis"
    },
    opcionA_prima: {
      label: "Espiguillas no envueltas por largos pelos plateados de Imperata; continuar con generos finales",
      keyStep: "F'",
      nextNodeId: "andropogoneae_g"
    }
  },

  andropogoneae_g: {
    id: "andropogoneae_g",
    milestone: "Andropogoneae",
    manualPage: 110,
    descripcion: "Andropogoneae - generos finales: Ischaemum o continuar",
    opcionA: {
      label: "Espiguillas en pares en racimos espiciformes solitarios, geminados o fasciculados; una casi sesil con pedicelo oculto por la gluma decurrente",
      keyStep: "G",
      especieId: "ischaemum_urvilleanum"
    },
    opcionA_prima: {
      label: "Espiguillas gruesas sesiles con pedicelo velludo ausente, o pares con una sesil masculina y otra pedicelada hermafrodita",
      keyStep: "G'",
      nextNodeId: "andropogoneae_h"
    }
  },

  andropogoneae_h: {
    id: "andropogoneae_h",
    milestone: "Andropogoneae",
    manualPage: 111,
    descripcion: "Andropogoneae - generos finales: Sorghastrum o Trachypogon",
    opcionA: {
      label: "Espiguillas gruesas, sesiles, hermafroditas, acompanadas por el pedicelo velludo de una segunda espiguilla que falta; caracteres de Sorghastrum",
      keyStep: "H",
      nextNodeId: "sorghastrum_a"
    },
    opcionA_prima: {
      label: "Espiguillas en pares sobre raquis delgado y continuo; una sesil masculina sin arista y otra pedicelada hermafrodita largamente aristada",
      keyStep: "H'",
      especieId: "trachypogon_canescens"
    }
  },

  sorghastrum_a: {
    id: "sorghastrum_a",
    milestone: "Sorghastrum",
    manualPage: 111,
    descripcion: "Sorghastrum - A: largo de la arista",
    opcionA: {
      label: "Arista de 10-15 mm; plantas cespitosas de 1-1,5 m; hojas planas, enroscables; panojas densas plateado-ocraceas",
      keyStep: "A",
      especieId: "sorghastrum_pellitum"
    },
    opcionA_prima: {
      label: "Arista de 5 mm; plantas de 1,5-2 m; panojas laxas; espiguillas velludas",
      keyStep: "A'",
      especieId: "sorghastrum_agrostoides"
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
      especieId: "pappophorum_mucronulatum"
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
      especieId: "phragmites_communis"
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
      nextNodeId: "distichlis_a"
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
      nextNodeId: "briza_a"
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
      especieId: "puccinellia_glaucescens"
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
      especieId: "scleropoa_rigida"
    },
    opcionA_prima: {
      label: "Espiguillas con pedicelos filiformes; lemmas acuminadas o aristadas",
      keyStep: "P'",
      nextNodeId: "festuca_a"
    }
  },

  briza_a: {
    id: "briza_a",
    milestone: "Briza",
    manualPage: 56,
    descripcion: "Briza - A: ¿cómo son las espiguillas y la lemma vista de perfil?",
    opcionA: {
      label: "Espiguillas comprimidas lateralmente, violáceas; lemma triangular de perfil, con dilataciones marginales anchas y arista de 4-5 mm",
      keyStep: "A",
      especieId: "briza_brizoides"
    },
    opcionA_prima: {
      label: "Espiguillas más o menos globosas; lemma cortamente aristada o mútica",
      keyStep: "A'",
      nextNodeId: "briza_b"
    }
  },

  briza_b: {
    id: "briza_b",
    milestone: "Briza",
    manualPage: 56,
    descripcion: "Briza - B: ¿la lemma es aguda y aristada?",
    opcionA: {
      label: "Lemmas agudas, bidentadas, con arista de 0,5 mm; espiguillas globosas de 5 mm, 5-8-floras",
      keyStep: "B",
      especieId: "briza_subaristata"
    },
    opcionA_prima: {
      label: "Lemma obtusa y mútica",
      keyStep: "B'",
      nextNodeId: "briza_c"
    }
  },

  briza_c: {
    id: "briza_c",
    milestone: "Briza",
    manualPage: 56,
    descripcion: "Briza - C: ¿la planta es perenne rizomatosa o anual?",
    opcionA: {
      label: "Hierbas perennes, rizomatosas, de cerca de 1 m; panojas densas espiciformes ramificadas",
      keyStep: "C",
      especieId: "briza_glomerata"
    },
    opcionA_prima: {
      label: "Hierbas anuales; panojas laxas",
      keyStep: "C'",
      nextNodeId: "briza_d"
    }
  },

  briza_d: {
    id: "briza_d",
    milestone: "Briza",
    manualPage: 56,
    descripcion: "Briza - D: ¿qué tamaño tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas de 2-4 mm, globosas, 4-6-floras; glumas y glumelas redondeadas en el ápice",
      keyStep: "D",
      especieId: "briza_minor"
    },
    opcionA_prima: {
      label: "Espiguillas de 15-20 mm, ovoideas, amarillentas, 13-17-floras; glumas y glumelas ovadas obtusas",
      keyStep: "D'",
      especieId: "briza_maxima"
    }
  },

  distichlis_a: {
    id: "distichlis_a",
    milestone: "Distichlis",
    manualPage: 59,
    descripcion: "Distichlis - A: ¿la panoja es laxa o muy densa?",
    opcionA: {
      label: "Panoja laxa; hojas densas y uniformemente repartidas por el tallo, con lámina convoluta rígida",
      keyStep: "A",
      especieId: "distichlis_scoparia"
    },
    opcionA_prima: {
      label: "Panoja muy densa; hojas dísticas, con vainas superpuestas; lámina plana o convoluta",
      keyStep: "A'",
      especieId: "distichlis_spicata"
    }
  },

  festuca_a: {
    id: "festuca_a",
    milestone: "Festuca",
    manualPage: 61,
    descripcion: "Festuca - A: ¿las lemmas son ciliadas en la mitad superior?",
    opcionA: {
      label: "Lemmas ciliadas en su mitad superior, lineal-lanceoladas y escabrosas; aristas de 8-10 mm",
      keyStep: "A",
      especieId: "festuca_megalura"
    },
    opcionA_prima: {
      label: "Lemmas no ciliadas",
      keyStep: "A'",
      nextNodeId: "festuca_b"
    }
  },

  festuca_b: {
    id: "festuca_b",
    milestone: "Festuca",
    manualPage: 61,
    descripcion: "Festuca - B: ¿qué tamaño tienen las glumas?",
    opcionA: {
      label: "Gluma inferior de unos 4 mm y superior de 6-7 mm; lemma lanceolada escabrosa; arista de 10-13 mm",
      keyStep: "B",
      especieId: "festuca_dertonensis"
    },
    opcionA_prima: {
      label: "Gluma inferior de 1-1,5 mm y superior de 4-4,5 mm",
      keyStep: "B'",
      especieId: "festuca_myurus"
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

  axonopus_compressus: {
    id: "axonopus_compressus",
    nombreCientifico: "Axonopus compressus",
    nombreVulgar: "Axonopus compressus",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne con tallos rastreros, estoloniferos, radicantes en los nudos.",
    caracteristicas: "Canas floriferas erectas de 23-63 cm; espigas generalmente 3, lineales, dos terminales y una algo mas baja; espiguillas eliptico-lanceoladas de 2 mm.",
    distribucion: "America calida; comun en el Delta y en la ribera platense. Forrajera.",
    imagen: ""
  },

  cenchrus_myosuroides: {
    id: "cenchrus_myosuroides",
    nombreCientifico: "Cenchrus myosuroides",
    nombreVulgar: "Cadillo",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, robusta, de 80-150 cm de alto.",
    caracteristicas: "Cerdas involucrales delgadas, unidas solo en la base y cubiertas de pelitos retrorsos; racimos densos, espiciformes, de 10-25 cm.",
    distribucion: "America calida; citada para Campana y San Fernando.",
    imagen: ""
  },

  cenchrus_echinatus: {
    id: "cenchrus_echinatus",
    nombreCientifico: "Cenchrus echinatus",
    nombreVulgar: "Cenchrus echinatus",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 25-60 cm de alto.",
    caracteristicas: "Involucro con numerosas cerdas; las externas delgadas y las internas ensanchadas en la base, soldadas casi hasta la mitad, con pelos retrorsos; espiguillas agrupadas de a 4.",
    distribucion: "America calida; accidental en Palermo.",
    imagen: ""
  },

  cenchrus_pauciflorus: {
    id: "cenchrus_pauciflorus",
    nombreCientifico: "Cenchrus pauciflorus",
    nombreVulgar: "Roseta",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual, ascendente, de 20-90 cm de alto.",
    caracteristicas: "Involucro formado por espinas muy anchas en la base, abiertas, sin pelos retrorsos; racimos de 3-8 cm; espiguillas 2 en cada involucro.",
    distribucion: "America calida; muy comun en suelos arenosos.",
    imagen: ""
  },

  digitaria_sellowii: {
    id: "digitaria_sellowii",
    nombreCientifico: "Digitaria sellowii",
    nombreVulgar: "Digitaria sellowii",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cespitosa, de unos 50 cm de alto.",
    caracteristicas: "Hojas lineales, planas y pubescentes; panoja de 3-6 racimos espiciformes; espiguillas lanceoladas, velludas, de 4-5 mm.",
    distribucion: "Norte y centro de la Argentina y Uruguay; hallada en Campana y San Isidro.",
    imagen: ""
  },

  digitaria_insularis: {
    id: "digitaria_insularis",
    nombreCientifico: "Digitaria insularis",
    nombreVulgar: "Digitaria insularis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cortamente rizomatosa, de alrededor de 1 m de alto.",
    caracteristicas: "Hojas planas; panoja formada por 10 a muchos racimos espiciformes; espiguillas lanceoladas, velludas, de 5-6 mm.",
    distribucion: "America tropical; rara en la region.",
    imagen: ""
  },

  digitaria_sanguinalis: {
    id: "digitaria_sanguinalis",
    nombreCientifico: "Digitaria sanguinalis",
    nombreVulgar: "Pasto de cuaresma; pata de gallina",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual, ascendente, con hojas planas.",
    caracteristicas: "Racimos espiciformes en numero variable, digitados en el apice de la cana, de 5-15 cm; espiguillas lanceoladas de unos 3 mm.",
    distribucion: "Europa; adventicia en America. Comun en jardines y rastrojos.",
    imagen: ""
  },

  digitaria_aequiglumis: {
    id: "digitaria_aequiglumis",
    nombreCientifico: "Digitaria aequiglumis",
    nombreVulgar: "Digitaria aequiglumis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual con canas debiles de 30-60 cm de alto.",
    caracteristicas: "Hojas planas, estrechas; espiguillas de 3,5 mm o mas; gluma superior y lemma esteril iguales, acuminadas y velludas.",
    distribucion: "Uruguay y nordeste de la Argentina; en suelos humedos del Delta y de la ribera platense.",
    imagen: ""
  },

  digitaria_lanuginosa: {
    id: "digitaria_lanuginosa",
    nombreCientifico: "Digitaria lanuginosa var. cuyabensis",
    nombreVulgar: "Digitaria lanuginosa",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne de 40-80 cm de alto.",
    caracteristicas: "Hojas planas y velludas; espiguillas de menos de 3 mm; espigas 8 a muchas, debiles, de 7-11 cm, alternas y amontonadas en el apice.",
    distribucion: "America tropical; hallada unicamente en Puerto Nuevo.",
    imagen: ""
  },

  echinochloa_polystachya: {
    id: "echinochloa_polystachya",
    nombreCientifico: "Echinochloa polystachya",
    nombreVulgar: "Echinochloa polystachya",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne con tallos gruesos, ascendentes, estriados y glabros.",
    caracteristicas: "Hojas planas de 10-25 mm de ancho; panojas densas, verdosas o purpureas; espiguillas ovoideas de 4,5-7 mm. El manual menciona tambien la var. spectabilis, con nudos engrosados y setoso-hirsutos.",
    distribucion: "America tropical y subtropical; especie acuatica flotante, frecuente en los camalotales del Delta y de la ribera platense.",
    imagen: ""
  },

  echinochloa_helodes: {
    id: "echinochloa_helodes",
    nombreCientifico: "Echinochloa helodes",
    nombreVulgar: "Echinochloa helodes",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne con rizomas tuberculiformes y tallos ascendentes.",
    caracteristicas: "Nudos hirsutos; hojas planas de 6-10 mm de ancho; panojas laxas, nutantes y paucifloras; espiguillas lanceoladas de 6-7 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; frecuente en suelos inundables.",
    imagen: ""
  },

  echinochloa_colonum: {
    id: "echinochloa_colonum",
    nombreCientifico: "Echinochloa colonum",
    nombreVulgar: "Echinochloa colonum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 10-50 cm de alto, con hojas lineales y planas.",
    caracteristicas: "Espiguillas de 2-2,6 mm, ovoides, obtusas, rojizas o verdosas y muticas; panoja erecta, lineal, con ramas apretadas contra el raquis.",
    distribucion: "Viejo Mundo; adventicia en todo el globo. Comun en suelos modificados.",
    imagen: ""
  },

  echinochloa_crusgalli: {
    id: "echinochloa_crusgalli",
    nombreCientifico: "Echinochloa crusgalli",
    nombreVulgar: "Echinochloa crusgalli",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 30-100 cm de alto, con hojas planas y glabras.",
    caracteristicas: "Espiguillas ovoides, ensanchadas, espinulosas, de 2,8-3,7 mm por 1,7-2 mm; lemma esteril con arista de 3-30 mm; panojas piramidales densas.",
    distribucion: "Europa; adventicia en America. Comun en suelos modificados.",
    imagen: ""
  },

  echinochloa_cruspavonis: {
    id: "echinochloa_cruspavonis",
    nombreCientifico: "Echinochloa cruspavonis",
    nombreVulgar: "Echinochloa cruspavonis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 1-2 m de alto, con hojas planas y anchas.",
    caracteristicas: "Espiguillas lanceoladas de 2,8-3,7 mm por 1-1,4 mm; lemma esteril con espinulas poco desarrolladas y arista de 2-15 mm; panojas oblongo-lanceoladas, nutantes.",
    distribucion: "America calida; muy comun en la ribera platense.",
    imagen: ""
  },

  eriochloa_montevidensis: {
    id: "eriochloa_montevidensis",
    nombreCientifico: "Eriochloa montevidensis",
    nombreVulgar: "Eriochloa montevidensis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, erecta, de 30-50 cm de alto.",
    caracteristicas: "Hojas amontonadas principalmente en la base, planas; racimos pocos; espiguillas lanceoladas de 3-5 mm; gluma y lemma esteril finamente pubescentes; lemma fertil aristulada.",
    distribucion: "Uruguay y nordeste de la Argentina; se halla en campos bajos y humedos.",
    imagen: ""
  },

  panicum_racemosum: {
    id: "panicum_racemosum",
    nombreCientifico: "Panicum racemosum",
    nombreVulgar: "Panicum racemosum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rizomatosa, de 70-120 cm de alto.",
    caracteristicas: "Vainas retrorso-velludas y lamina convoluta; espiguillas de 6-8 mm, ovoideo-globosas, con largos pelos blancos; panojas largas, densas y subnutantes.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; frecuente en dunas de Samborombon, litoral atlantico e isla Martin Garcia.",
    imagen: ""
  },

  panicum_elephantipes: {
    id: "panicum_elephantipes",
    nombreCientifico: "Panicum elephantipes",
    nombreVulgar: "Pasto camalote",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Planta robusta y flotante, con tallos gruesos ricos en aerenquima, radicantes en los nudos.",
    caracteristicas: "Hojas planas de 15-50 cm por 7-20 mm; panojas grandes y abiertas; espiguillas lanceoladas, acuminadas, de 4-5 mm.",
    distribucion: "America calida; muy comun en los camalotales del Delta y de la ribera platense.",
    imagen: ""
  },

  panicum_miliaceum: {
    id: "panicum_miliaceum",
    nombreCientifico: "Panicum miliaceum",
    nombreVulgar: "Mijo",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba terrestre anual, erecta o ascendente, de 20-100 cm de alto.",
    caracteristicas: "Hojas velludas o glabrescentes, planas; panojas laxas, generalmente parcialmente incluidas en la vaina superior; espiguillas ovado-lanceoladas de 4,5-5 mm.",
    distribucion: "Asia; cultivado por sus granos y a veces subespontaneo en suelos modificados y calles.",
    imagen: ""
  },

  panicum_grumosum: {
    id: "panicum_grumosum",
    nombreCientifico: "Panicum grumosum",
    nombreVulgar: "Paja mansa",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rizomatosa, robusta, de 1-2 m de alto.",
    caracteristicas: "Hojas glabras de 15-25 mm de ancho; panojas erectas, amplias, con numerosos racimos compuestos densos; espiguillas elipticas de 2,5 mm.",
    distribucion: "Sur del Brasil, Uruguay, Paraguay y nordeste de la Argentina; muy frecuente en suelos inundados del Delta y ribera del Plata.",
    imagen: ""
  },

  panicum_laxum: {
    id: "panicum_laxum",
    nombreCientifico: "Panicum laxum",
    nombreVulgar: "Panicum laxum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne con tallos decumbentes en la base, radicantes y luego erectos, de 20-50 cm de alto.",
    caracteristicas: "Hojas lineales y glabras; panojas formadas por varios racimos contraidos; espiguillas de 1-1,5 mm, ovoideas, semiagudas y glabras.",
    distribucion: "Indias occidentales y America calida; hallada en Martin Garcia.",
    imagen: ""
  },

  panicum_fultum: {
    id: "panicum_fultum",
    nombreCientifico: "Panicum fultum",
    nombreVulgar: "Panicum fultum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba erecta de 20-30 cm de alto.",
    caracteristicas: "Hojas lineal-lanceoladas, rigidas, redondeadas en la base; ligula formada por cilias; espiguillas ovoideas, obtusas, pubescentes, de 2,5-3 mm.",
    distribucion: "Paraguay, Uruguay y nordeste de la Argentina; citada para la isla Martin Garcia.",
    imagen: ""
  },

  panicum_milioides: {
    id: "panicum_milioides",
    nombreCientifico: "Panicum milioides",
    nombreVulgar: "Panicum milioides",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne de 30-60 cm de alto.",
    caracteristicas: "Hojas lineales y planas; panojas contraidas formadas por 10-25 racimos densos; espiguillas ovadas, agudas y glabras, de 1,8-2 mm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; comun en campos humedos.",
    imagen: ""
  },

  panicum_decipiens: {
    id: "panicum_decipiens",
    nombreCientifico: "Panicum decipiens",
    nombreVulgar: "Panicum decipiens",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba rizomatosa, ascendente, de 20-40 cm de alto.",
    caracteristicas: "Hojas lineales; panojas muy densas, espiciformes, con 4-10 racimos; espiguillas lanceoladas, agudas, glabras y rojizas, de 2,5-3 mm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; en suelos arenosos humedos del Delta y de la ribera platense.",
    imagen: ""
  },

  panicum_tricholaenoides: {
    id: "panicum_tricholaenoides",
    nombreCientifico: "Panicum tricholaenoides",
    nombreVulgar: "Panicum tricholaenoides",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Planta bambusoide, rizomatosa, de 1-3 m de alto.",
    caracteristicas: "Hojas con vainas coriaceas, glabras o pestanosas, y laminas lineales; panojas amplias de 25-30 cm con ramificaciones verticiladas; espiguillas anchamente ovoideas de 2,5 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; hallada en los arenales de la Isla Santiago.",
    imagen: ""
  },

  panicum_capillare: {
    id: "panicum_capillare",
    nombreCientifico: "Panicum capillare",
    nombreVulgar: "Panicum capillare",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual, densamente hirsuta, erecta, de 20-80 cm de alto.",
    caracteristicas: "Hojas planas; panojas amplias y laxas; espiguillas ovoideo-lanceoladas, acuminadas, de unos 2 mm; gluma inferior aguda.",
    distribucion: "America del Norte; adventicia en la Argentina, en suelos modificados.",
    imagen: ""
  },

  panicum_dichotomiflorum: {
    id: "panicum_dichotomiflorum",
    nombreCientifico: "Panicum dichotomiflorum",
    nombreVulgar: "Panicum dichotomiflorum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual o perenne segun la rama de la clave, laxamente pubescente o glabra, ascendente o erecta.",
    caracteristicas: "Hojas planas; panojas terminales y axilares, a menudo parcialmente incluidas en la vaina superior o tardiamente exertas; espiguillas estrechamente ovadas de 2-3,2 mm.",
    distribucion: "America calida; en lugares humedos.",
    imagen: ""
  },

  panicum_sabulorum: {
    id: "panicum_sabulorum",
    nombreCientifico: "Panicum sabulorum",
    nombreVulgar: "Panicum sabulorum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, ascendente, de unos 50 cm de alto.",
    caracteristicas: "Hojas lanceoladas, ensanchadas en la base, de mas de 6 cm; ligula pilosa; espiguillas obovadas, obtusas, laxamente pubescentes, de 2,5 mm.",
    distribucion: "Paraguay y nordeste de la Argentina; comun en el Delta y en la ribera del Plata.",
    imagen: ""
  },

  panicum_helobium: {
    id: "panicum_helobium",
    nombreCientifico: "Panicum helobium",
    nombreVulgar: "Panicum helobium",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, ascendente, de unos 40 cm de alto.",
    caracteristicas: "Hojas lanceoladas, redondeadas o auriculadas en la base; espiguillas obtusas, de unos 2 mm, largamente pediceladas y glaberrimas; panojas difusas muy laxas.",
    distribucion: "America tropical, hasta el Delta del Parana.",
    imagen: ""
  },

  panicum_unilineatum: {
    id: "panicum_unilineatum",
    nombreCientifico: "Panicum unilineatum",
    nombreVulgar: "Panicum unilineatum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, tendida o ascendente.",
    caracteristicas: "Hojas lanceoladas, redondeadas y semiabrazadoras en la base, de 4-5 cm; espiguillas agudas, ovadas y glabras, de unos 2 mm; panojas cortas, paucispicadas, terminales y axilares.",
    distribucion: "Nordeste de la Argentina, hasta el Delta.",
    imagen: ""
  },

  panicum_gouini: {
    id: "panicum_gouini",
    nombreCientifico: "Panicum gouini",
    nombreVulgar: "Panicum gouini",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba con rizomas horizontales u oblicuos cundidores y tallos de unos 30 cm de alto.",
    caracteristicas: "Hojas angostas, a menudo convolutas; panojas pequenas, densas, algo purpureas; espiguillas de 2,2 mm por 1 mm; primera gluma triangular.",
    distribucion: "Sur de los Estados Unidos, Mexico, Uruguay y Argentina; frecuente en el cesped de la ribera platense.",
    imagen: ""
  },

  panicum_bergii: {
    id: "panicum_bergii",
    nombreCientifico: "Panicum bergii",
    nombreVulgar: "Paja voladora",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de cerca de 50 cm de alto.",
    caracteristicas: "Hojas de 1-3 mm, lineales, rigidas y pubescentes; panojas deltoideas, amplias y muy laxas; espiguillas ovoideas, acuminadas, glabras, de 2-2,5 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; frecuente en la estepa climax.",
    imagen: ""
  },

  panicum_pilcomayense: {
    id: "panicum_pilcomayense",
    nombreCientifico: "Panicum pilcomayense",
    nombreVulgar: "Panicum pilcomayense",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de 50-100 cm de alto, ligeramente hirsuta o glabrescente.",
    caracteristicas: "Hojas de cerca de 5 mm de ancho; panojas amplias y difusas; espiguillas ovoideas, acuminadas, glabras, de 2,5 mm.",
    distribucion: "Paraguay y nordeste de la Argentina; hallada en Palermo.",
    imagen: ""
  },

  paspalum_repens: {
    id: "paspalum_repens",
    nombreCientifico: "Paspalum repens",
    nombreVulgar: "Paspalum repens",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, flotante, con vainas dilatadas y esponjosas.",
    caracteristicas: "Tallos tendidos sobre el agua, radicantes en los nudos; inflorescencias con mas de 20 espigas; raquis membranaceo ancho terminado en punta delgada; espiguillas ovado-lanceoladas de unos 2 mm.",
    distribucion: "America calida; muy comun en los camalotales del Delta y de la ribera platense.",
    imagen: ""
  },

  paspalum_pumilum: {
    id: "paspalum_pumilum",
    nombreCientifico: "Paspalum pumilum",
    nombreVulgar: "Paspalum pumilum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba terrestre de 15-40 cm de alto, con rizomas cortos y fuertes que forman matas compactas.",
    caracteristicas: "Inflorescencia con dos espigas geminadas en V; espiguillas elipticas u obovadas, de 1,8-2,3 mm por 1,1-1,3 mm, dispuestas en una sola serie; espigas de 4-7 cm.",
    distribucion: "America tropical y subtropical; comun en el cesped de la ribera.",
    imagen: ""
  },

  paspalum_notatum: {
    id: "paspalum_notatum",
    nombreCientifico: "Paspalum notatum var. latiflorum",
    nombreVulgar: "Paspalum notatum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba terrestre de 30-100 cm de alto, con rizomas cortos y fuertes que forman matas compactas.",
    caracteristicas: "Espiguillas elipticas u obovadas, verde-violaceas, de 2,8-4 mm, dispuestas en dos hileras; espigas generalmente 2, a veces 3-4, de hasta 16 cm. El manual menciona tambien la var. saurae, con espiguillas menores.",
    distribucion: "America tropical y subtropical; comun en campos altos.",
    imagen: ""
  },

  paspalum_distichum: {
    id: "paspalum_distichum",
    nombreCientifico: "Paspalum distichum",
    nombreVulgar: "Gramilla dulce",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne terrestre, de menos de 25 cm de alto, con rizomas largos y profundos.",
    caracteristicas: "Espiguillas lanceoladas de 3-3,5 mm; gluma finamente pubescente y lemma esteril glabra; espigas desigualmente pedunculadas de 2-6 cm.",
    distribucion: "America tropical y subtropical; adventicia en otras regiones del globo. Comun en praderas humedas.",
    imagen: ""
  },

  paspalum_vaginatum: {
    id: "paspalum_vaginatum",
    nombreCientifico: "Paspalum vaginatum",
    nombreVulgar: "Paspalum vaginatum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne terrestre, de menos de 25 cm de alto, con rizomas largos y profundos.",
    caracteristicas: "Espiguillas lanceoladas de 2,5-3,5 mm; gluma y lemma esteril glabras; espigas con pedicelos casi iguales.",
    distribucion: "America calida y templada; muy comun en suelos humedos.",
    imagen: ""
  },

  paspalum_plicatulum: {
    id: "paspalum_plicatulum",
    nombreCientifico: "Paspalum plicatulum",
    nombreVulgar: "Paspalum plicatulum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de 30-90 cm de alto.",
    caracteristicas: "Espigas 3-6, alternadas, de 3-7 cm; espiguillas en dos series, ovado-elipticas, de 2,8-3 mm; gluma y lemma esteril glabras, membranaceas, castanas u olivaceas.",
    distribucion: "America calida; en la estepa climax.",
    imagen: ""
  },

  paspalum_nicorae: {
    id: "paspalum_nicorae",
    nombreCientifico: "Paspalum nicorae",
    nombreVulgar: "Paspalum nicorae",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba con largos rizomas horizontales, de 30-40 cm de alto.",
    caracteristicas: "Espigas 3-6, de 2,5-6 cm; espiguillas de color castano claro, elipticas, de unos 3 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; en suelos arenosos del Dock Sur.",
    imagen: ""
  },

  paspalum_proliferum: {
    id: "paspalum_proliferum",
    nombreCientifico: "Paspalum proliferum",
    nombreVulgar: "Paspalum proliferum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa con estolones y canas floriferas de cerca de 50 cm de alto.",
    caracteristicas: "Inflorescencia con 6-8 espigas de 1,5-3 cm; espiguillas glabras, ovado-elipticas, de 2-2,5 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; se halla en el Delta y en la ribera del Plata.",
    imagen: ""
  },

  paspalum_malacophyllum: {
    id: "paspalum_malacophyllum",
    nombreCientifico: "Paspalum malacophyllum var. linearifolium",
    nombreVulgar: "Paspalum malacophyllum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba erecta, perenne, de 50-100 cm de alto.",
    caracteristicas: "Inflorescencia con 4-6 espigas delgadas de 4-5 cm; espiguillas verdosas, ovadas, de 1,5 mm.",
    distribucion: "Paraguay y nordeste de la Argentina; hallado en Palermo.",
    imagen: ""
  },

  paspalum_alcalinum: {
    id: "paspalum_alcalinum",
    nombreCientifico: "Paspalum alcalinum",
    nombreVulgar: "Paspalum alcalinum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de 50 cm o mas de alto.",
    caracteristicas: "Espigas 3-7 de 3-5 cm; espiguillas de color castano claro, obovadas, corta y flojamente pubescentes, de 3-3,5 mm.",
    distribucion: "America calida; accidental en Palermo.",
    imagen: ""
  },

  paspalum_dilatatum: {
    id: "paspalum_dilatatum",
    nombreCientifico: "Paspalum dilatatum",
    nombreVulgar: "Pasto miel",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne de alrededor de 50 cm de alto.",
    caracteristicas: "Espigas 3-6, de 5-9 cm, inclinadas; espiguillas verdosas, en pares, ovadas, agudas, de 3-3,5 mm por 2-2,5 mm; gluma y lemma esteril pubescentes y pestanosas en el borde.",
    distribucion: "Region platense; comun en campos fertiles.",
    imagen: ""
  },

  paspalum_urvillei: {
    id: "paspalum_urvillei",
    nombreCientifico: "Paspalum urvillei",
    nombreVulgar: "Paspalum urvillei",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne de 1,5-2 m de alto.",
    caracteristicas: "Inflorescencia con 10-25 espigas; espiguillas verdosas, obovadas, agudas, de 2,3-2,6 mm.",
    distribucion: "America calida; muy frecuente en la ribera platense.",
    imagen: ""
  },

  paspalum_intermedium: {
    id: "paspalum_intermedium",
    nombreCientifico: "Paspalum intermedium",
    nombreVulgar: "Paspalum intermedium",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de 1 m o mas de alto.",
    caracteristicas: "Vainas foliares notablemente carenadas; espigas numerosas; espiguillas glabras, ovadas, de 2,5-2,8 mm por 1,5 mm.",
    distribucion: "Nordeste de la Argentina; accidental en Palermo.",
    imagen: ""
  },

  paspalum_quadrifarium: {
    id: "paspalum_quadrifarium",
    nombreCientifico: "Paspalum quadrifarium",
    nombreVulgar: "Paja colorada",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de 1-1,8 m de alto, con hojas largas y glabras.",
    caracteristicas: "Espigas ferruginosas, 15-25, de cerca de 7 cm; espiguillas ovado-lanceoladas, de 2-2,5 mm, en 4 hileras; gluma pubescente y lemma esteril casi glabra.",
    distribucion: "Uruguay y nordeste de la Argentina; en campos bajos.",
    imagen: ""
  },

  paspalum_exaltatum: {
    id: "paspalum_exaltatum",
    nombreCientifico: "Paspalum exaltatum",
    nombreVulgar: "Paspalum exaltatum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, densamente cespitosa, de 1,5-2 m de alto.",
    caracteristicas: "Inflorescencia con 12-30 espigas; espiguillas ovadas, agudas, de 3,3-3,7 mm; gluma lanceolada, apiculada, con pubescencia rala en el margen; hojas muy largas, de 1 cm de ancho.",
    distribucion: "Region platense; en suelos bajos inundables, Delta y ribera platense.",
    imagen: ""
  },

  paspalum_haumanii: {
    id: "paspalum_haumanii",
    nombreCientifico: "Paspalum haumanii",
    nombreVulgar: "Paspalum haumanii",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Planta densamente cespitosa, de 2-3 m de alto.",
    caracteristicas: "Inflorescencia piramidal con 40-80 espigas, de cerca de 50 cm; espiguillas lanceoladas, ferrugineas, de 3,5-4 mm por 1,5 mm; hojas de 1-1,5 m por 12-14 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; frecuente en el Delta y en la ribera del Plata.",
    imagen: ""
  },

  paspalum: {
    id: "paspalum",
    nombreCientifico: "Paspalum sp.",
    nombreVulgar: "Paspalum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Genero de Paniceae con espiguillas deprimidas, generalmente obtusas, solitarias o en pares, dispuestas en filas sobre un lado del raquis.",
    caracteristicas: "Rama parcialmente cargada; quedan pendientes las especies de inflorescencias no geminadas y otros grupos internos del genero.",
    distribucion: "Genero representado en la flora de los alrededores de Buenos Aires.",
    imagen: ""
  },

  pennisetum_villosum: {
    id: "pennisetum_villosum",
    nombreCientifico: "Pennisetum villosum",
    nombreVulgar: "Pennisetum villosum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rizomatosa, baja.",
    caracteristicas: "Hojas lineales, plegadas y escabrosas; cerdas involucrales numerosas y plumosas, de hasta 25 mm; panojas cilindricas, densas, de 5-10 cm.",
    distribucion: "Africa; adventicia en America. En suelos modificados.",
    imagen: ""
  },

  pennisetum_latifolium: {
    id: "pennisetum_latifolium",
    nombreCientifico: "Pennisetum latifolium",
    nombreVulgar: "Pennisetum latifolium",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, erecta, de 1,5-3 m de alto, con canas ramificadas.",
    caracteristicas: "Hojas lanceoladas y planas; cerdas involucrales simples, 8-12, de menos de 20 mm; panojas gruesas de 3-5 cm, inclinadas; espiguillas lanceoladas de 4-5 mm.",
    distribucion: "America austral; en matorrales de la ribera platense.",
    imagen: ""
  },

  setaria_geniculata: {
    id: "setaria_geniculata",
    nombreCientifico: "Setaria geniculata",
    nombreVulgar: "Setaria geniculata",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cespitosa, con tallos ascendentes de 30-40 cm de alto.",
    caracteristicas: "Cerdas involucrales mas de cinco; hojas escabrosas en el margen; panojas espiciformes; espiguillas de unos 2,5 mm.",
    distribucion: "America templado-calida; ubicua, principalmente en rastrojos y jardines.",
    imagen: ""
  },

  setaria_verticillata: {
    id: "setaria_verticillata",
    nombreCientifico: "Setaria verticillata",
    nombreVulgar: "Setaria verticillata",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 40-100 cm de alto.",
    caracteristicas: "Cerdas con pelos retrorsos, adherentes a la ropa; panoja densa, espiciforme, interrumpida en la base; espiguillas de 2 mm.",
    distribucion: "Europa; adventicia en America. Ubicua.",
    imagen: ""
  },

  setaria_viridis: {
    id: "setaria_viridis",
    nombreCientifico: "Setaria viridis",
    nombreVulgar: "Setaria viridis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 20-40 cm de alto.",
    caracteristicas: "Panojas espiciformes cortas y gruesas, de 4-6 cm por 1-1,5 cm; eje de la panoja velludo; cerdas involucrales 1-3, largas; espiguillas de 2-2,5 mm.",
    distribucion: "Europa; adventicia en America. En ambientes diversos.",
    imagen: ""
  },

  setaria_argentina: {
    id: "setaria_argentina",
    nombreCientifico: "Setaria argentina",
    nombreVulgar: "Setaria argentina",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne robusta, de 60-100 cm de alto.",
    caracteristicas: "Hojas de hasta 16 cm por 12-15 mm; panojas espiciformes densas de 10-18 cm por 15-20 mm; espiguillas ovoides, verdosas y glabras, de 1,5-2 mm.",
    distribucion: "Bolivia, Paraguay y norte de la Argentina; frecuente a lo largo de las vias ferreas al norte de la Capital Federal.",
    imagen: ""
  },

  setaria_fiebrigii: {
    id: "setaria_fiebrigii",
    nombreCientifico: "Setaria fiebrigii",
    nombreVulgar: "Setaria fiebrigii",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cespitosa, de 50-150 cm de alto.",
    caracteristicas: "Hojas de unos 30 cm por 7 mm; panojas densas, espiciformes, de 8-10(-18) cm; eje escabroso; espiguillas globosas, glabras, de 1,8 mm.",
    distribucion: "Paraguay y nordeste de la Argentina; se halla al norte de la Capital Federal, hasta Palermo.",
    imagen: ""
  },

  setaria_caespitosa: {
    id: "setaria_caespitosa",
    nombreCientifico: "Setaria caespitosa",
    nombreVulgar: "Setaria caespitosa",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cespitosa, de 30-50 cm de alto.",
    caracteristicas: "Eje de la inflorescencia glabro o aspero; panoja densa, espiciforme; espiguillas ovoideas de 2 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; se halla en la estepa climax y en las praderas de la ribera.",
    imagen: ""
  },

  setaria_vaginata: {
    id: "setaria_vaginata",
    nombreCientifico: "Setaria vaginata",
    nombreVulgar: "Cola de zorro",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cespitosa, de 50-70 cm de alto.",
    caracteristicas: "Eje de la inflorescencia pubescente; panojas espiciformes no muy densas, algo interrumpidas en la parte inferior, de 7-11 cm; espiguillas de unos 2 mm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; comun en la region.",
    imagen: ""
  },

  stenotaphrum_secundatum: {
    id: "stenotaphrum_secundatum",
    nombreCientifico: "Stenotaphrum secundatum",
    nombreVulgar: "Gramillon",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rastrera, con tallos comprimidos, ramosos y radicantes.",
    caracteristicas: "Espiguillas incrustadas sobre un lado de un raquis grueso y plano; espiguillas de 4-5 mm; hojas cortas y obtusas; espigas terminales y axilares.",
    distribucion: "America calida; comun en suelos bajos y humedos. Se utiliza para formar cesped.",
    imagen: ""
  },

  leptocoryphium_lanatum: {
    id: "leptocoryphium_lanatum",
    nombreCientifico: "Leptocoryphium lanatum",
    nombreVulgar: "Leptocoryphium lanatum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, erecta, de 50-100 cm de alto.",
    caracteristicas: "Hojas estrechas, a menudo involutas; panojas flojas y angostas; espiguillas lanceoladas, velludas, de unos 4 mm; gluma inferior ausente.",
    distribucion: "America calida; norte de la provincia de Buenos Aires.",
    imagen: ""
  },

  ichnanthus_pallens: {
    id: "ichnanthus_pallens",
    nombreCientifico: "Ichnanthus pallens",
    nombreVulgar: "Ichnanthus pallens",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rastrera o ascendente.",
    caracteristicas: "Hojas anchamente lanceoladas y glabras; espiguillas lanceoladas de 3,5-4 mm; gluma inferior casi tan larga como la superior; lemma fertil con dos excavaciones laterales basales.",
    distribucion: "America tropical; rara en la region, citada para la Isla Martin Garcia.",
    imagen: ""
  },

  hymenachne_amplexicaulis: {
    id: "hymenachne_amplexicaulis",
    nombreCientifico: "Hymenachne amplexicaulis",
    nombreVulgar: "Hymenachne amplexicaulis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, glabra, acuatica, con tallos ramosos y crasos.",
    caracteristicas: "Hojas anchamente lineales, acorazonadas y semiabrazadoras en la base; panojas espiciformes de 20-50 cm.",
    distribucion: "America tropical; hallada en Retiro.",
    imagen: ""
  },

  pseudechinolaena_polystachya: {
    id: "pseudechinolaena_polystachya",
    nombreCientifico: "Pseudechinolaena polystachya",
    nombreVulgar: "Pseudechinolaena polystachya",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rastrera, con tallos radicantes.",
    caracteristicas: "Hojas cortas, anchamente lanceoladas, de 3-6 cm por 1-1,5 cm; panojas laxas; espiguillas de 3-4 mm; segunda gluma ventricosa y con pelos ganchudos a la madurez.",
    distribucion: "America tropical; hallada en los bosques de la Isla Martin Garcia.",
    imagen: ""
  },

  brachiaria_extensa: {
    id: "brachiaria_extensa",
    nombreCientifico: "Brachiaria extensa",
    nombreVulgar: "Brachiaria extensa",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual con tallos decumbentes, radicantes en los nudos.",
    caracteristicas: "Hojas anchas; panojas con 3-6 espigas distantes de 3-8 cm; raquis alado; espiguillas ovadas de 4-4,5 mm.",
    distribucion: "Sur de los Estados Unidos; hallada en Palermo.",
    imagen: ""
  },

  paspalidium_paludivagum: {
    id: "paspalidium_paludivagum",
    nombreCientifico: "Paspalidium paludivagum",
    nombreVulgar: "Paspalidium paludivagum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, palustre, de hasta 2 m de alto.",
    caracteristicas: "Espiguillas en racimos espiciformes mas o menos adosados al eje principal; gluma inferior muy corta y obtusa; lemma esteril de 2,8-3 mm, aguda.",
    distribucion: "Sur de los Estados Unidos, Mexico y Guatemala; hallada en Campana y San Isidro.",
    imagen: ""
  },

  oplismenopsis_najada: {
    id: "oplismenopsis_najada",
    nombreCientifico: "Oplismenopsis najada",
    nombreVulgar: "Oplismenopsis najada",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Planta perenne, acuatica, rizomatosa, con tallos nadantes ramificados y canas floriferas erectas.",
    caracteristicas: "Panojas con varios racimos espiciformes; espiguillas lanceoladas, violaceas, de 7-8 mm; gluma inferior corta y aristada.",
    distribucion: "Uruguay y nordeste de la Argentina; en banados del Delta y de la ribera del Plata.",
    imagen: ""
  },

  oplismenus_setarius: {
    id: "oplismenus_setarius",
    nombreCientifico: "Oplismenus setarius",
    nombreVulgar: "Oplismenus setarius",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, debil, tendida o ascendente, radicante en los nudos, de 10-20 cm de alto.",
    caracteristicas: "Hojas anchamente lanceoladas y cortas; panojas de 3-6 racimos cortos y densos, casi globosos; espiguillas gruesas de 3 mm; gluma inferior largamente aristada.",
    distribucion: "America calida; bosques higrofilos del Delta y de la Isla Martin Garcia.",
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

  bothriochloa_hassleri: {
    id: "bothriochloa_hassleri",
    nombreCientifico: "Bothriochloa hassleri",
    nombreVulgar: "Bothriochloa hassleri",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, cespitosa, de 1-2 m de alto.",
    caracteristicas: "Tallos glabros; racimos muy numerosos; espiguillas muticas.",
    distribucion: "Paraguay; hallada en Palermo.",
    imagen: ""
  },

  bothriochloa_lagurioides: {
    id: "bothriochloa_lagurioides",
    nombreCientifico: "Bothriochloa lagurioides",
    nombreVulgar: "Bothriochloa lagurioides",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba cespitosa, cortamente rizomatosa, de cerca de 50 cm de alto.",
    caracteristicas: "Canas glabras en los nudos; hojas planas y lineales; racimos numerosos formando una panoja fusiforme plateada; espiguillas fertiles de 3 mm con lemma largamente aristada.",
    distribucion: "America calida; muy comun en la estepa climax.",
    imagen: ""
  },

  bothriochloa_saccharoides: {
    id: "bothriochloa_saccharoides",
    nombreCientifico: "Bothriochloa saccharoides",
    nombreVulgar: "Bothriochloa saccharoides",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne de cerca de 1 m de alto.",
    caracteristicas: "Canas con coronita de pelos en los nudos; racimos muy numerosos formando una panoja oblonga plateada; espiguillas fertiles de unos 4 mm; gluma inferior sin excavaciones puntiformes dorsales.",
    distribucion: "America templado-calida; en la estepa climax.",
    imagen: ""
  },

  bothriochloa_perforata: {
    id: "bothriochloa_perforata",
    nombreCientifico: "Bothriochloa perforata",
    nombreVulgar: "Bothriochloa perforata",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba de Bothriochloa con canas provistas de una coronita de pelos en los nudos.",
    caracteristicas: "Panojas plateadas de menos de 10 cm; gluma inferior con una excavacion puntiforme en el dorso; caracteres restantes semejantes a B. saccharoides.",
    distribucion: "America calida; se halla en las barrancas de San Isidro y Campana.",
    imagen: ""
  },

  bothriochloa_alta: {
    id: "bothriochloa_alta",
    nombreCientifico: "Bothriochloa alta",
    nombreVulgar: "Bothriochloa alta",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba de tallos altos, de 1,5-2 m.",
    caracteristicas: "Panojas verdosas de 10-20 cm; gluma inferior con una excavacion puntiforme en el dorso; otros caracteres semejantes a B. saccharoides.",
    distribucion: "America calida; citada para Palermo.",
    imagen: ""
  },

  andropogon_paniculatus: {
    id: "andropogon_paniculatus",
    nombreCientifico: "Andropogon paniculatus",
    nombreVulgar: "Andropogon paniculatus",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, cespitosa, con tallos rojizos de 50-100 cm de alto.",
    caracteristicas: "Hojas con nervaduras muy marcadas; inflorescencia con numerosos racimos solitarios de hasta 2,5 cm, nacidos en axilas de hojas reducidas, formando una seudopanoja densa; espiguillas de 4-5 mm.",
    distribucion: "America calida; en la estepa climax, principalmente al norte de la Capital Federal.",
    imagen: ""
  },

  andropogon_consanguineus: {
    id: "andropogon_consanguineus",
    nombreCientifico: "Andropogon consanguineus",
    nombreVulgar: "Te pampa",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, cespitosa, rojiza, de 30-40 cm de alto.",
    caracteristicas: "Hojas planas; racimos numerosos de 4-7 cm, solitarios en las axilas de las hojas formando una seudopanoja angosta; espiguillas de 6-9 mm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; comun en la estepa climax.",
    imagen: ""
  },

  hemarthria_altissima: {
    id: "hemarthria_altissima",
    nombreCientifico: "Hemarthria altissima",
    nombreVulgar: "Hemarthria altissima",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne con canas ramosas, ascendentes, glabras, de 40-60 cm de alto.",
    caracteristicas: "Hojas lineales; espigas terminales en el extremo de las ramas, subcilindricas, comprimidas, a veces semifasciculadas; raquis articulado con excavaciones donde se ajustan dos espiguillas.",
    distribucion: "Regiones calidas del globo; comun en los bosques del Delta y de la ribera del Plata.",
    imagen: ""
  },

  rottboellia_selloana: {
    id: "rottboellia_selloana",
    nombreCientifico: "Rottboellia selloana",
    nombreVulgar: "Rottboellia selloana",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, rizomatosa, glabra, con tallos erectos de 30-50 cm de alto.",
    caracteristicas: "Hojas lineales; espigas cilindricas, rectas o algo arqueadas, articuladas, de 6-15 cm, pocas; raquis engrosado que se desarticula facilmente.",
    distribucion: "Uruguay y nordeste de la Argentina; en campos humedos proximos a Abasto.",
    imagen: ""
  },

  sorghum_halepense: {
    id: "sorghum_halepense",
    nombreCientifico: "Sorghum halepense",
    nombreVulgar: "Sorgo de Halepo",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, rizomatosa, de 1-1,5 m de alto.",
    caracteristicas: "Panojas abiertas; lemma con larga arista retorcida; espiguillas en pares, una sesil y otra pedicelada esteril pero bien desarrollada.",
    distribucion: "Africa; adventicia en America. Maleza invasora.",
    imagen: ""
  },

  imperata_brasiliensis: {
    id: "imperata_brasiliensis",
    nombreCientifico: "Imperata brasiliensis",
    nombreVulgar: "Imperata brasiliensis",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, rizomatosa, con tallos erectos de 50-100 cm de alto.",
    caracteristicas: "Hojas inferiores amontonadas, planas o convolutas, glabras, con dos auriculas en la base de la lamina; panojas lanceoladas, densas y plateadas de 10-12 cm; espiguillas de 4-5 mm.",
    distribucion: "America tropical; comun en dunas humedas de Pipinas y San Clemente del Tuyu.",
    imagen: ""
  },

  ischaemum_urvilleanum: {
    id: "ischaemum_urvilleanum",
    nombreCientifico: "Ischaemum urvilleanum",
    nombreVulgar: "Ischaemum urvilleanum",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, rizomatosa, con tallos bajos y ascendentes.",
    caracteristicas: "Hojas amontonadas en la parte inferior del tallo, planas y lineal-lanceoladas; racimos espiciformes geminados, uno sesil y otro cortamente pedunculado; espiguillas de 6-7 mm, cortamente aristadas.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; hallada en la Isla Martin Garcia y en la ribera platense.",
    imagen: ""
  },

  sorghastrum_pellitum: {
    id: "sorghastrum_pellitum",
    nombreCientifico: "Sorghastrum pellitum",
    nombreVulgar: "Sorghastrum pellitum",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, cespitosa, de 1-1,5 m de alto.",
    caracteristicas: "Hojas planas, enroscables; panojas densas, plateado-ocraceas; espiguillas velludas; arista de 10-15 mm.",
    distribucion: "America austral; frecuente en la estepa climax del norte y este de la provincia de Buenos Aires.",
    imagen: ""
  },

  sorghastrum_agrostoides: {
    id: "sorghastrum_agrostoides",
    nombreCientifico: "Sorghastrum agrostoides",
    nombreVulgar: "Sorghastrum agrostoides",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne robusta de 1,5-2 m de alto.",
    caracteristicas: "Panojas laxas; espiguillas velludas; arista de unos 5 mm.",
    distribucion: "America calida; accidental en Palermo.",
    imagen: ""
  },

  trachypogon_canescens: {
    id: "trachypogon_canescens",
    nombreCientifico: "Trachypogon canescens",
    nombreVulgar: "Trachypogon canescens",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, cespitosa, de cerca de 1 m de alto.",
    caracteristicas: "Hojas largas y velludas; racimos solitarios de 8-10 cm; espiguillas fusiformes, velludas, de 6-7 mm; arista de 4-6 cm, largamente velluda.",
    distribucion: "Sur del Brasil y nordeste de la Argentina; se halla en el norte de la provincia de Buenos Aires, en la estepa climax.",
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

  pappophorum_mucronulatum: {
    id: "pappophorum_mucronulatum",
    nombreCientifico: "Pappophorum mucronulatum",
    nombreVulgar: "Pappophorum",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa, de 30-80 cm de alto.",
    caracteristicas: "Panojas de 8-15 cm, espiguillas 2-3-floras y aristas de unos 5 mm.",
    distribucion: "America templado-calida; se halla en la estepa climax.",
    imagen: ""
  },

  phragmites_communis: {
    id: "phragmites_communis",
    nombreCientifico: "Phragmites communis",
    nombreVulgar: "Carrizo",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa, robusta, de 2-4 m de alto.",
    caracteristicas: "Cañas uniformemente hojosas, hojas planas largas de 1-6 cm de ancho, panojas de 15-40 cm y espiguillas de 12-15 mm.",
    distribucion: "Regiones calidas; rara en terrenos inundables del Delta y de la ribera del Plata.",
    imagen: ""
  },

  briza_brizoides: {
    id: "briza_brizoides",
    nombreCientifico: "Briza brizoides",
    nombreVulgar: "Briza",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa, de 20-50 cm de alto.",
    caracteristicas: "Espiguillas comprimidas lateralmente y violaceas; lemma triangular de perfil con dilataciones marginales muy anchas.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de Argentina; frecuente en la estepa climax.",
    imagen: ""
  },

  briza_subaristata: {
    id: "briza_subaristata",
    nombreCientifico: "Briza subaristata",
    nombreVulgar: "Briza",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa, de alrededor de 50 cm de alto.",
    caracteristicas: "Panojas contraidas; espiguillas globosas de 5 mm, 5-8-floras; lemmas agudas, bidentadas y cortamente aristadas.",
    distribucion: "America austral; frecuente en la estepa climax.",
    imagen: ""
  },

  briza_glomerata: {
    id: "briza_glomerata",
    nombreCientifico: "Briza glomerata",
    nombreVulgar: "Briza",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa, de cerca de 1 m de alto.",
    caracteristicas: "Panojas densas espiciformes ramificadas, espiguillas verdes aglomeradas y lemmas conchiformes gibosas.",
    distribucion: "Uruguay y ribera del Plata en la Argentina.",
    imagen: ""
  },

  briza_minor: {
    id: "briza_minor",
    nombreCientifico: "Briza minor",
    nombreVulgar: "Briza",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, de 25-40 cm de alto, con panojas laxas.",
    caracteristicas: "Espiguillas globosas de 2-4 mm, 4-6-floras, con glumas y glumelas redondeadas en el apice.",
    distribucion: "Ubicua; florece en primavera.",
    imagen: ""
  },

  briza_maxima: {
    id: "briza_maxima",
    nombreCientifico: "Briza maxima",
    nombreVulgar: "Briza",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual erecta, de 30-60 cm de alto, con panojas laxas.",
    caracteristicas: "Espiguillas ovoideas amarillentas de 15-20 mm, 13-17-floras, con glumas y glumelas ovadas obtusas.",
    distribucion: "Europa; cultivada y adventicia en America.",
    imagen: ""
  },

  distichlis_scoparia: {
    id: "distichlis_scoparia",
    nombreCientifico: "Distichlis scoparia",
    nombreVulgar: "Pasto salado",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa, baja, con tallos delgados y ramosos en la base.",
    caracteristicas: "Panoja laxa, hojas densas uniformemente repartidas por el tallo y espiguillas oblongas 5-6-floras.",
    distribucion: "America austral; en campos humedos y salobres.",
    imagen: ""
  },

  distichlis_spicata: {
    id: "distichlis_spicata",
    nombreCientifico: "Distichlis spicata",
    nombreVulgar: "Pasto salado",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa, baja, de tallos erectos de 10-40 cm.",
    caracteristicas: "Panoja muy densa, hojas disticas con vainas superpuestas y espiguillas oblongas de 6-10 mm, 5-9-floras.",
    distribucion: "America; comun en suelos bajos salobres.",
    imagen: ""
  },

  puccinellia_glaucescens: {
    id: "puccinellia_glaucescens",
    nombreCientifico: "Puccinellia glaucescens var. osteniana",
    nombreVulgar: "Puccinellia",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa, de 20-30 cm de alto, de suelos salados.",
    caracteristicas: "Hojas angostas convolutas, panojas largas y angostas, espiguillas oblongas 7-10-floras y lemmas de 2 mm.",
    distribucion: "Uruguay y nordeste de Argentina; en suelos salados humedos.",
    imagen: ""
  },

  scleropoa_rigida: {
    id: "scleropoa_rigida",
    nombreCientifico: "Scleropoa rigida",
    nombreVulgar: "Scleropoa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, erecta o ascendente, de 10-20 cm de alto.",
    caracteristicas: "Panojas estrechas y densas de 5-10 cm; espiguillas lanceoladas, 4-10-floras, de 5-8 mm.",
    distribucion: "Europa; adventicia en America y comun en suelos modificados.",
    imagen: ""
  },

  festuca_megalura: {
    id: "festuca_megalura",
    nombreCientifico: "Festuca megalura",
    nombreVulgar: "Festuca",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, de 20-60 cm de alto.",
    caracteristicas: "Lemmas ciliadas en su mitad superior, lineal-lanceoladas y escabrosas; aristas de 8-10 mm; panojas estrechas.",
    distribucion: "America templado-calida; frecuente en la region.",
    imagen: ""
  },

  festuca_dertonensis: {
    id: "festuca_dertonensis",
    nombreCientifico: "Festuca dertonensis",
    nombreVulgar: "Festuca",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual glabra.",
    caracteristicas: "Gluma inferior de unos 4 mm, superior de 6-7 mm, lemma lanceolada escabrosa y arista de 10-13 mm.",
    distribucion: "Europa; adventicia en America y comun en la estepa climax.",
    imagen: ""
  },

  festuca_myurus: {
    id: "festuca_myurus",
    nombreCientifico: "Festuca myurus",
    nombreVulgar: "Festuca",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual.",
    caracteristicas: "Lemmas no ciliadas, gluma inferior de 1-1,5 mm y gluma superior de 4-4,5 mm.",
    distribucion: "Europa; adventicia en America y rara en la region platense.",
    imagen: ""
  },

  agropyron_pungens: {
    id: "agropyron_pungens",
    nombreCientifico: "Agropyron pungens",
    nombreVulgar: "Agropiro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne con rizomas horizontales cundidores.",
    caracteristicas: "Láminas foliares convolutas, rígidas y punzantes, con nervaduras muy marcadas; tallos de 50-80 cm y espiguillas 5-6-floras.",
    distribucion: "Europa; adventicia en Argentina, en suelos salados de la Ensenada de Samborombón.",
    imagen: ""
  },

  agropyron_repens: {
    id: "agropyron_repens",
    nombreCientifico: "Agropyron repens",
    nombreVulgar: "Agropiro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne rizomatosa, con hojas planas y flojas.",
    caracteristicas: "Espiguillas de 12-15 mm, 6-8-floras; glumas lanceoladas acuminadas de 5-7 nervaduras; espigas de 10-18 cm.",
    distribucion: "Europa; adventicia en América, hallada en Buenos Aires y Punta Lara.",
    imagen: ""
  },

  agropyron_scabrifolium: {
    id: "agropyron_scabrifolium",
    nombreCientifico: "Agropyron scabrifolium",
    nombreVulgar: "Agropiro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne rizomatosa, robusta, con tallos de hasta 2 m.",
    caracteristicas: "Espiguillas de 20-35 mm, 8-10-floras; hojas planas o subconvolutas retrorso-escabrosas y espigas dísticas de 15-25 cm.",
    distribucion: "Uruguay y norte y centro de Argentina; hallada en el Delta y región de Samborombón.",
    imagen: ""
  },

  agropyron_attenuatum: {
    id: "agropyron_attenuatum",
    nombreCientifico: "Agropyron attenuatum var. platense",
    nombreVulgar: "Agropiro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne cespitosa, sin rizomas, de cerca de 50 cm de alto.",
    caracteristicas: "Hojas planas o subconvolutas, espigas de 6-8 cm y espiguillas lanceoladas estrechas 4-5-floras.",
    distribucion: "Bosques de talas de la región de Samborombón.",
    imagen: ""
  },

  hordeum_leporinum: {
    id: "hordeum_leporinum",
    nombreCientifico: "Hordeum leporinum",
    nombreVulgar: "Cola de zorro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual ascendente, de 30-50 cm de alto.",
    caracteristicas: "Hojas planas pubescentes; flores laterales de la tríada más grandes que la central y espiga comprimida ancha de 6-7 cm.",
    distribucion: "Europa; adventicia en Argentina, común en suelos modificados.",
    imagen: ""
  },

  hordeum_jubatum: {
    id: "hordeum_jubatum",
    nombreCientifico: "Hordeum jubatum var. pampeanum",
    nombreVulgar: "Hordeum",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual erecta, de alrededor de 50 cm de alto.",
    caracteristicas: "Hojas planas, glumas capilares con aristas de 4-6 cm y espigas anchas de 8-10 cm.",
    distribucion: "Uruguay y este de Argentina; en suelos húmedos algo salados.",
    imagen: ""
  },

  hordeum_compressum: {
    id: "hordeum_compressum",
    nombreCientifico: "Hordeum compressum",
    nombreVulgar: "Hordeum",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual, de 20-40 cm de alto.",
    caracteristicas: "Espigas comprimidas de unos 8 cm por 2-4 mm, con espiguillas laterales adosadas contra la flor central.",
    distribucion: "Centro de Argentina; raro en la región platense.",
    imagen: ""
  },

  hordeum_stenostachys: {
    id: "hordeum_stenostachys",
    nombreCientifico: "Hordeum stenostachys",
    nombreVulgar: "Hordeum",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne, de 30-80 cm de alto.",
    caracteristicas: "Hojas rígidas algo enroscadas y espigas algo comprimidas de 4-8 cm por cerca de 5 mm.",
    distribucion: "América austral; en la estepa climax.",
    imagen: ""
  },

  hordeum_pusillum: {
    id: "hordeum_pusillum",
    nombreCientifico: "Hordeum pusillum",
    nombreVulgar: "Hordeum",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual, de 10-40 cm de alto.",
    caracteristicas: "Glumas laterales y centrales netamente lanceoladas, espigas oblongas angostas subcuadrangulares y aristas largas.",
    distribucion: "América; común en campos bajos.",
    imagen: ""
  },

  lepturus_cylindricus: {
    id: "lepturus_cylindricus",
    nombreCientifico: "Lepturus cylindricus",
    nombreVulgar: "Lepturus",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual ascendente o erecta, de 20-30 cm de alto.",
    caracteristicas: "Espiga lineal algo curvada y espiguillas de 5 mm incrustadas en excavaciones del raquis.",
    distribucion: "Europa; adventicia en América, común en suelos salados.",
    imagen: ""
  },

  lolium_multiflorum: {
    id: "lolium_multiflorum",
    nombreCientifico: "Lolium multiflorum",
    nombreVulgar: "Rye grass, ballico",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne con tallos de 50-100 cm de alto.",
    caracteristicas: "Gluma más corta que la espiguilla, 10-20 flores por espiguilla y lemmas aristadas o múticas.",
    distribucion: "Europa; adventicia en América, muy común en campos húmedos.",
    imagen: ""
  },

  lolium_temulentum: {
    id: "lolium_temulentum",
    nombreCientifico: "Lolium temulentum",
    nombreVulgar: "Trigollo",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual con tallos de 60-90 cm de alto.",
    caracteristicas: "Gluma igual o mayor que la espiguilla, 5-7 flores por espiguilla y lemmas aristadas.",
    distribucion: "Europa; maleza en Argentina. Tóxica.",
    imagen: ""
  },

  pholiurus_incurvus: {
    id: "pholiurus_incurvus",
    nombreCientifico: "Pholiurus incurvus",
    nombreVulgar: "Pholiurus",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual baja, con tallos tendidos o ascendentes de 10-20 cm.",
    caracteristicas: "Espigas lineales curvas de 7-10 cm y espiguillas de 5-7 mm incrustadas en el raquis.",
    distribucion: "Europa; adventicia en América, en campos húmedos y salados.",
    imagen: ""
  },

  secale_cereale: {
    id: "secale_cereale",
    nombreCientifico: "Secale cereale",
    nombreVulgar: "Centeno",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual con tallos de 1-1,5 m de alto.",
    caracteristicas: "Espiguillas solitarias en las articulaciones del raquis, generalmente con dos flores hermafroditas y una rudimentaria.",
    distribucion: "Europa; cultivado en Argentina y a veces espontáneo.",
    imagen: ""
  },

  triticum_aestivum: {
    id: "triticum_aestivum",
    nombreCientifico: "Triticum aestivum",
    nombreVulgar: "Trigo",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual cultivada para la elaboración de pan.",
    caracteristicas: "Tallos de cerca de 1 m y espiguillas 3-5-floras, con raquilla articulada por encima de las glumas.",
    distribucion: "Cultivada; a veces escapada de cultivos.",
    imagen: ""
  },

  triticum_durum: {
    id: "triticum_durum",
    nombreCientifico: "Triticum durum",
    nombreVulgar: "Trigo duro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual cultivada.",
    caracteristicas: "Especie de trigo poco cultivada en Argentina, ocasionalmente espontánea.",
    distribucion: "Cultivos y escapes ocasionales.",
    imagen: ""
  },

  koeleria_phleoides: {
    id: "koeleria_phleoides",
    nombreCientifico: "Koeleria phleoides",
    nombreVulgar: "Koeleria",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual erecta, de 15-30 cm de alto.",
    caracteristicas: "Hojas pilosas, panojas muy densas espiciformes de 2-7 cm, espiguillas de 4 mm y lemmas bidentadas con corta arista subapical.",
    distribucion: "Europa; adventicia en América, muy común en la estepa climax y ambientes antropógenos.",
    imagen: ""
  },

  amphibromus_scabrivalvis: {
    id: "amphibromus_scabrivalvis",
    nombreCientifico: "Amphibromus scabrivalvis",
    nombreVulgar: "Amphibromus",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba perenne, de 40-100 cm de alto, con base bulbiforme.",
    caracteristicas: "Hojas planas y espiguillas de dos tipos: cleistógamas en las vainas y chasmógamas 3-5-floras en panojas laxas.",
    distribucion: "Uruguay, Argentina y Chile; en suelos inundables y zanjas.",
    imagen: ""
  },

  avena_byzantina: {
    id: "avena_byzantina",
    nombreCientifico: "Avena byzantina",
    nombreVulgar: "Avena",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual de hojas anchas y panojas laxas.",
    caracteristicas: "Segundo flósculo soldado a la raquilla; lemma glabra dorsalmente, rodeada de pelos hirsutos en la base, con arista retorcida larga.",
    distribucion: "Especie cultivada y a veces subespontánea.",
    imagen: ""
  },

  avena_sterilis: {
    id: "avena_sterilis",
    nombreCientifico: "Avena sterilis",
    nombreVulgar: "Avena",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual, de alrededor de 1 m de alto, con hojas anchas y panojas laxas.",
    caracteristicas: "Segundo flósculo soldado a la raquilla; lemma cubierta de pelos hirsutos en el dorso, con arista retorcida y geniculada.",
    distribucion: "España; adventicia en América, en cultivos y rastrojos.",
    imagen: ""
  },

  avena_fatua: {
    id: "avena_fatua",
    nombreCientifico: "Avena fatua",
    nombreVulgar: "Avena guacha",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual, de 50-100 cm de alto, con hojas anchas.",
    caracteristicas: "Segundo flósculo fácilmente desprendible; lemma hirsuta, arista dorsal retorcida de 35 mm y panojas flojas abiertas.",
    distribucion: "Europa; adventicia en América, en rastrojos, vías férreas y ambientes similares.",
    imagen: ""
  },

  avena_sativa: {
    id: "avena_sativa",
    nombreCientifico: "Avena sativa",
    nombreVulgar: "Avena",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual cultivada como forrajera.",
    caracteristicas: "Lemma glabra, arista débil apenas retorcida sólo en el flósculo inferior y espiguillas castañas generalmente bifloras.",
    distribucion: "Cultivada y con frecuencia espontánea.",
    imagen: ""
  },

  avena_barbata: {
    id: "avena_barbata",
    nombreCientifico: "Avena barbata",
    nombreVulgar: "Avena",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual de espiguillas bifloras.",
    caracteristicas: "Lemma terminada en dos dientes o lacinias de 4-8 mm.",
    distribucion: "Europa; adventicia en América, ubicua.",
    imagen: ""
  },

  danthonia_montevidensis: {
    id: "danthonia_montevidensis",
    nombreCientifico: "Danthonia montevidensis",
    nombreVulgar: "Danthonia",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba perenne cespitosa, de 40-60 cm de alto.",
    caracteristicas: "Hojas estrechas planas o convolutas, panojas cortas con pocas espiguillas, y lemma lanceolada largamente velluda y bífida.",
    distribucion: "Uruguay y nordeste de Argentina; frecuente en la estepa climax.",
    imagen: ""
  },

  holcus_lanatus: {
    id: "holcus_lanatus",
    nombreCientifico: "Holcus lanatus",
    nombreVulgar: "Holcus",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba perenne, de 30-60 cm de alto.",
    caracteristicas: "Vainas pubescentes, láminas lineales, panojas densas de 8-15 cm y glumas velludas.",
    distribucion: "Europa; adventicia en América, muy rara en la región.",
    imagen: ""
  },

  agrostideae_pendiente: {
    id: "agrostideae_pendiente",
    nombreCientifico: "Agrostideae",
    nombreVulgar: "Rama pendiente de Agrostideae",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Esta rama de la tribu Agrostideae todavía está pendiente de carga a nivel de género y especie.",
    caracteristicas: "El recorrido llegó a una parte del manual que se cargará en una tanda siguiente.",
    distribucion: "Pendiente de completar.",
    imagen: ""
  },

  agrostis_montevidensis: {
    id: "agrostis_montevidensis",
    nombreCientifico: "Agrostis montevidensis",
    nombreVulgar: "Pasto ilusión",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 20-30 cm de alto.",
    caracteristicas: "Láminas planas estrechas, panoja muy laxa y tenue, espiguillas largamente pediceladas y lemma con arista dorsal.",
    distribucion: "Uruguay y nordeste de Argentina; en la estepa climax.",
    imagen: ""
  },

  agrostis_palustris: {
    id: "agrostis_palustris",
    nombreCientifico: "Agrostis palustris",
    nombreVulgar: "Agrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne estolonífera, de 30-60 cm de alto.",
    caracteristicas: "Hojas planas ásperas, glumas escabrosas únicamente en la quilla y panojas densas interrumpidas.",
    distribucion: "Eurasia; adventicia en América, en bosques de la ribera.",
    imagen: ""
  },

  agrostis_verticillata: {
    id: "agrostis_verticillata",
    nombreCientifico: "Agrostis verticillata",
    nombreVulgar: "Agrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne ascendente y estolonífera.",
    caracteristicas: "Hojas planas cortas, panojas contraídas con ramificaciones cortas verticiladas y espiguillas de 2 mm.",
    distribucion: "Europa; adventicia en América, en suelos húmedos y jardines.",
    imagen: ""
  },

  agrostis_tandilensis: {
    id: "agrostis_tandilensis",
    nombreCientifico: "Agrostis tandilensis",
    nombreVulgar: "Agrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba anual erecta, de 15-20 cm de alto.",
    caracteristicas: "Hojas estrechas planas, panoja muy densa espiciforme continua y lemma con arista de 3-4 mm.",
    distribucion: "Uruguay y nordeste de Argentina; en la estepa climax.",
    imagen: ""
  },

  agrostis_jurgensii: {
    id: "agrostis_jurgensii",
    nombreCientifico: "Agrostis jurgensii",
    nombreVulgar: "Agrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne, de 20-40 cm de alto.",
    caracteristicas: "Panojas de 5-12 cm, espiguillas de 3 mm, glumas desiguales puntiagudas y lemma con arista dorsal de unos 4 mm.",
    distribucion: "Campos húmedos.",
    imagen: ""
  },

  agrostis_platensis: {
    id: "agrostis_platensis",
    nombreCientifico: "Agrostis platensis",
    nombreVulgar: "Agrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne estolonífera, con tallos ascendentes plurinodes de 70-150 cm.",
    caracteristicas: "Panojas de 10-25 cm, espiguillas de 2,5 mm, glumas casi iguales aristadas y lemma con arista dorsal de 1-2 mm.",
    distribucion: "Argentina: Delta del Paraná.",
    imagen: ""
  },

  alopecurus_agrestis: {
    id: "alopecurus_agrestis",
    nombreCientifico: "Alopecurus agrestis",
    nombreVulgar: "Alopecurus",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 50-100 cm de alto.",
    caracteristicas: "Glumas soldadas hasta la mitad, quillas ásperas o cortamente ciliadas, panojas delgadas de 4-10 cm y espiguillas casi glabras.",
    distribucion: "Europa; adventicia en América, en suelos modificados.",
    imagen: ""
  },

  alopecurus_bonariensis: {
    id: "alopecurus_bonariensis",
    nombreCientifico: "Alopecurus bonariensis",
    nombreVulgar: "Alopecurus",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba anual, de 10-30 cm de alto.",
    caracteristicas: "Vainas algo infladas, láminas lineales, panoja muy densa espiciforme cilíndrica y espiguillas imbricadas.",
    distribucion: "Suelos salados de Santa Fe y norte de Buenos Aires.",
    imagen: ""
  },

  aristida_spegazzinii: {
    id: "aristida_spegazzinii",
    nombreCientifico: "Aristida spegazzinii",
    nombreVulgar: "Aristida",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 20-30 cm de alto.",
    caracteristicas: "Hojas cilíndricas, gluma inferior mayor que la superior, lemma de 10-12 mm y aristas de unos 8 cm.",
    distribucion: "Uruguay y nordeste de Argentina; en la estepa climax.",
    imagen: ""
  },

  aristida_pallens: {
    id: "aristida_pallens",
    nombreCientifico: "Aristida pallens",
    nombreVulgar: "Aristida",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 40-50 cm de alto.",
    caracteristicas: "Panojas alargadas laxas, glumas largas y aristas de unos 10 cm.",
    distribucion: "América austral; rara en la estepa climax.",
    imagen: ""
  },

  aristida_adscensionis: {
    id: "aristida_adscensionis",
    nombreCientifico: "Aristida adscensionis",
    nombreVulgar: "Aristida",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba anual ramificada en la base, de 10-30 cm de alto.",
    caracteristicas: "Hojas cortas angostas generalmente convolutas, panojas angostas densas y aristas de cerca de 10 mm.",
    distribucion: "Frecuente en América; rara cerca de Buenos Aires.",
    imagen: ""
  },

  aristida_murina: {
    id: "aristida_murina",
    nombreCientifico: "Aristida murina",
    nombreVulgar: "Aristida",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne con tallos de 30-40 cm.",
    caracteristicas: "Hojas cortas convolutas y estriadas, panojas densas semiespiciformes y aristas de unos 9 cm.",
    distribucion: "América del Sur; muy común en la estepa climax.",
    imagen: ""
  },

  calamagrostis_montevidensis: {
    id: "calamagrostis_montevidensis",
    nombreCientifico: "Calamagrostis montevidensis",
    nombreVulgar: "Calamagrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cortamente rizomatosa, de 80-130 cm de alto.",
    caracteristicas: "Hojas planas, panojas densas multiespigadas de 25-35 cm, espiguillas plateadas de 5-6 mm y raquilla con pelos largos.",
    distribucion: "América austral; en campos húmedos.",
    imagen: ""
  },

  muhlenbergia_asperifolia: {
    id: "muhlenbergia_asperifolia",
    nombreCientifico: "Muhlenbergia asperifolia",
    nombreVulgar: "Muhlenbergia",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne rizomatosa, de 8-25 cm de alto.",
    caracteristicas: "Hojas densas con láminas cortas plegadas, espiguillas unifloras de 2 mm y lemma cortamente mucronada.",
    distribucion: "Norte de Chile y regiones secas de Argentina; accidental en Capital Federal.",
    imagen: ""
  },

  muhlenbergia_schreberi: {
    id: "muhlenbergia_schreberi",
    nombreCientifico: "Muhlenbergia schreberi",
    nombreVulgar: "Muhlenbergia",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne ascendente, de alrededor de 50 cm de alto.",
    caracteristicas: "Hojas lineales, panojas angostas flojas, glumas muy cortas hialinas y lemma largamente aristada.",
    distribucion: "América templado-cálida; frecuente en el Delta y la ribera platense.",
    imagen: ""
  },

  polypogon_chilensis: {
    id: "polypogon_chilensis",
    nombreCientifico: "Polypogon chilensis",
    nombreVulgar: "Polypogon",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne, de alrededor de 50 cm de alto.",
    caracteristicas: "Glumas agudas casi múticas, ciliado-espinulosas en el dorso; panojas interrumpidas densas de 10-30 cm.",
    distribucion: "América austral; rara en la región platense.",
    imagen: ""
  },

  polypogon_elongatus: {
    id: "polypogon_elongatus",
    nombreCientifico: "Polypogon elongatus",
    nombreVulgar: "Polypogon",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne, de 50-100 cm de alto.",
    caracteristicas: "Glumas largamente aristadas con arista apical, panojas interrumpidas de 20-30 cm y espiguillas de 2,5 mm.",
    distribucion: "América del Sur; muy común en suelos húmedos, especialmente en el Delta y la ribera.",
    imagen: ""
  },

  polypogon_monspeliensis: {
    id: "polypogon_monspeliensis",
    nombreCientifico: "Polypogon monspeliensis",
    nombreVulgar: "Polypogon",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba anual, de 15-50 cm de alto.",
    caracteristicas: "Glumas largamente aristadas con arista subapical, panoja compacta espiciforme elíptica de 4-10 cm y espiguillas de 2 mm.",
    distribucion: "Europa; adventicia en América, común en campos bajos y salados.",
    imagen: ""
  },

  sporobolus_poiretii: {
    id: "sporobolus_poiretii",
    nombreCientifico: "Sporobolus poiretii",
    nombreVulgar: "Sporobolus",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 30-100 cm de alto.",
    caracteristicas: "Inflorescencia densa más o menos espiciforme, panojas muy largas y angostas, espiguillas glabras verdosas de 2 mm.",
    distribucion: "Cosmopolita; muy común en la región platense.",
    imagen: ""
  },

  sporobolus_platensis: {
    id: "sporobolus_platensis",
    nombreCientifico: "Sporobolus platensis",
    nombreVulgar: "Sporobolus",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne, de 50-100 cm de alto.",
    caracteristicas: "Espiguillas lanceoladas muy comprimidas de 6-7 mm, claras, con glumas acuminadas rígidas y panoja contraída.",
    distribucion: "Provincia de Buenos Aires y Uruguay; hallada en San Vicente y Pipinas.",
    imagen: ""
  },

  sporobolus_pyramidatus: {
    id: "sporobolus_pyramidatus",
    nombreCientifico: "Sporobolus pyramidatus",
    nombreVulgar: "Sporobolus",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 20-50 cm de alto.",
    caracteristicas: "Inflorescencia laxa piramidal y espiguillas lanceoladas glabras de 1,5-1,7 mm.",
    distribucion: "América templado-cálida; común en campos salobres.",
    imagen: ""
  },

  phleum_pratense: {
    id: "phleum_pratense",
    nombreCientifico: "Phleum pratense",
    nombreVulgar: "Phleum",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne, de 50-150 cm de alto.",
    caracteristicas: "Panojas cilíndricas de 5-10 cm, glumas de 3-5 mm truncadas con arista gruesa y quilla largamente ciliada.",
    distribucion: "Europa; cultivada como forrajera y a veces espontánea en suelos modificados.",
    imagen: ""
  },

  chloris_pendiente: {
    id: "chloris_pendiente",
    nombreCientifico: "Chloris",
    nombreVulgar: "Rama pendiente de Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Esta rama de Chlorideae corresponde al género Chloris y queda pendiente para una tanda dedicada.",
    caracteristicas: "El género tiene una clave larga de varias especies; se cargará completo por separado para evitar errores.",
    distribucion: "Pendiente de completar.",
    imagen: ""
  },

  chloris_berroi: {
    id: "chloris_berroi",
    nombreCientifico: "Chloris berroi",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne rizomatosa, de 40-100 cm de alto.",
    caracteristicas: "Hojas planas angostas e inflorescencia con 2-7 espigas semihelicoidales adheridas que simulan una espiga terminal única.",
    distribucion: "Uruguay y nordeste de Argentina; frecuente en campos bajos algo salinos.",
    imagen: ""
  },

  chloris_capensis_bahiensis: {
    id: "chloris_capensis_bahiensis",
    nombreCientifico: "Chloris capensis var. bahiensis",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cortamente rizomatosa, de 20-50 cm de alto.",
    caracteristicas: "Hojas inferiores amontonadas, con lámina corta obtusa; espigas digitadas en el ápice y lemma ciliada en dorso y margen.",
    distribucion: "América del Sur cálida; en suelos arenosos de Isla Martín García y Dock Sur.",
    imagen: ""
  },

  chloris_distichophylla: {
    id: "chloris_distichophylla",
    nombreCientifico: "Chloris distichophylla",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cortamente rizomatosa, de 50-100 cm de alto.",
    caracteristicas: "Espigas 12-30 flexuosas, de 8-14 cm, espiguillas apretadas y lemma estéril aguda.",
    distribucion: "América del Sur cálida; hallada en Palermo.",
    imagen: ""
  },

  chloris_retusa: {
    id: "chloris_retusa",
    nombreCientifico: "Chloris retusa",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne rizomatosa, de 40-80 cm de alto.",
    caracteristicas: "Hojas con lámina obtusa plegada; espigas 8-15 de 4-10 cm y antecio estéril truncado.",
    distribucion: "América del Sur; en la estepa climax.",
    imagen: ""
  },

  chloris_inflata: {
    id: "chloris_inflata",
    nombreCientifico: "Chloris inflata",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa, de alrededor de 1 m de alto.",
    caracteristicas: "Espigas 15-25 de 4-6 cm y espiguillas con un antecio fértil y dos estériles largamente aristados.",
    distribucion: "América cálida; rara en la Isla Maciel.",
    imagen: ""
  },

  chloris_halophila: {
    id: "chloris_halophila",
    nombreCientifico: "Chloris halophila",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne con tallos rastreros radicantes y cañas floríferas erectas de 40-70 cm.",
    caracteristicas: "Lemma glabra o casi glabra, lanceolada y largamente aristada; espigas en 2-3 verticilos perpendiculares al tallo.",
    distribucion: "América austral; en campos salobres de Pergamino y Campana.",
    imagen: ""
  },

  chloris_gayana: {
    id: "chloris_gayana",
    nombreCientifico: "Chloris gayana",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cortamente rizomatosa, de alrededor de 1 m de alto.",
    caracteristicas: "Hojas lineales planas, espigas 12-24 de 7-9 cm y lemma ciliada sólo en el margen, con quilla glabra.",
    distribucion: "Senegal; cultivada como forrajera y a veces subespontánea.",
    imagen: ""
  },

  chloris_ciliata: {
    id: "chloris_ciliata",
    nombreCientifico: "Chloris ciliata",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa, de 15-50 cm de alto.",
    caracteristicas: "Espigas 3-8 de 3-5 cm, espiguillas de 2-3 mm, glumas lanceoladas agudas y lemma ciliada en margen y quilla.",
    distribucion: "América cálida y templada; en suelos secos.",
    imagen: ""
  },

  chloris_canterai: {
    id: "chloris_canterai",
    nombreCientifico: "Chloris canterai",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa con rizomas cortos y tallos de 50-100 cm.",
    caracteristicas: "Espigas 3-6, flexuosas e inclinadas hacia abajo, de 7-10 cm; espiguillas castañas de unos 3 mm.",
    distribucion: "Uruguay y norte de Argentina; citada para Campo de Mayo y Palermo.",
    imagen: ""
  },

  chloris_polydactyla: {
    id: "chloris_polydactyla",
    nombreCientifico: "Chloris polydactyla",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cortamente rizomatosa, de alrededor de 1 m de alto.",
    caracteristicas: "Espigas 12-25 flexuosas de 10-15 cm, espiguillas de 2-2,5 mm y glumas lineales.",
    distribucion: "América cálida; accidental en Palermo.",
    imagen: ""
  },

  bouteloua_megapotamica: {
    id: "bouteloua_megapotamica",
    nombreCientifico: "Bouteloua megapotamica",
    nombreVulgar: "Bouteloua",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne estolonífera, de 15-20 cm de alto.",
    caracteristicas: "Hojas cortas agudas con pelos sedosos; inflorescencia con 3-6 espigas rojizas cortas y lemmas 3-aristadas.",
    distribucion: "Sur del Brasil, Uruguay y norte y centro de Argentina; en la estepa climax.",
    imagen: ""
  },

  cynodon_dactylon: {
    id: "cynodon_dactylon",
    nombreCientifico: "Cynodon dactylon",
    nombreVulgar: "Gramilla blanca, pata de perdiz, Bermuda grass",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne con rizomas horizontales poderosos y estolones superficiales.",
    caracteristicas: "Hojas casi glabras, espigas 4-8 de 2-5 cm, espiguillas de 2-3 mm y lemma con quilla pestañosa no alada.",
    distribucion: "Cosmopolita; común en suelos arenosos o sueltos. Invasora y tóxica para el ganado por glucósidos cianogenéticos.",
    imagen: ""
  },

  cynodon_hirsutus: {
    id: "cynodon_hirsutus",
    nombreCientifico: "Cynodon hirsutus",
    nombreVulgar: "Cynodon",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne con estolones superficiales.",
    caracteristicas: "Hojas densamente hirsutas, espigas 3-6 de 4-5 cm, espiguillas de 2 mm y lemma con quilla brevemente pestañosa y angostamente alada.",
    distribucion: "África del Sur; adventicia en Argentina, en suelos sueltos. Tóxica.",
    imagen: ""
  },

  diplachne_dubia: {
    id: "diplachne_dubia",
    nombreCientifico: "Diplachne dubia",
    nombreVulgar: "Diplachne",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa, de hasta 80 cm de alto.",
    caracteristicas: "Hojas planas glabras, lemma bilobulada y espiguillas con 8-17 flores en racimos abiertos.",
    distribucion: "América cálida; accidental en Palermo.",
    imagen: ""
  },

  diplachne_fusca: {
    id: "diplachne_fusca",
    nombreCientifico: "Diplachne fusca",
    nombreVulgar: "Diplachne",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne, de hasta 80 cm de alto.",
    caracteristicas: "Hojas planas, anteras de 1-1,5 mm, lemma no aristada e inflorescencia de racimos flexuosos.",
    distribucion: "Norte de África; accidental en Dock Sur.",
    imagen: ""
  },

  diplachne_fascicularis: {
    id: "diplachne_fascicularis",
    nombreCientifico: "Diplachne fascicularis",
    nombreVulgar: "Diplachne",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba anual, de 70-80 cm de alto.",
    caracteristicas: "Hojas subconvolutas, lemma acuminada con dos dientes agudos y arista de 1 mm; racimos numerosos.",
    distribucion: "América cálida; rara en la región, citada para Dock Sud.",
    imagen: ""
  },

  diplachne_uninervia: {
    id: "diplachne_uninervia",
    nombreCientifico: "Diplachne uninervia",
    nombreVulgar: "Diplachne",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba anual erecta, de 30-90 cm de alto.",
    caracteristicas: "Espiguillas 6-10-floras y lemma con tres dientes cortos en el ápice, a veces con el central aristulado.",
    distribucion: "América cálida; común en suelos salobres.",
    imagen: ""
  },

  eleusine_indica: {
    id: "eleusine_indica",
    nombreCientifico: "Eleusine indica",
    nombreVulgar: "Eleusine",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba anual con tallos ascendentes radicantes en los nudos, de 30-50 cm de alto.",
    caracteristicas: "Hojas planas o plegadas, espigas 5-12 de 5-7 cm y espiguillas ovadas agudas 6-10-floras.",
    distribucion: "Asia; adventicia en regiones cálidas, en suelos modificados.",
    imagen: ""
  },

  eleusine_tristachya: {
    id: "eleusine_tristachya",
    nombreCientifico: "Eleusine tristachya",
    nombreVulgar: "Eleusine",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne, de 10-30 cm de alto.",
    caracteristicas: "Hojas lineales, espigas 2-4 gruesas de 1-4 cm y espiguillas ovado-lanceoladas de 6-9 mm.",
    distribucion: "África y América tropicales; muy frecuente en suelos modificados.",
    imagen: ""
  },

  spartina_montevidensis: {
    id: "spartina_montevidensis",
    nombreCientifico: "Spartina montevidensis",
    nombreVulgar: "Espartillo",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne rizomatosa, formando matas robustas de 1-1,5 m.",
    caracteristicas: "Hojas convolutas, pocas espigas de 3-7 cm adosadas al eje principal y espiguillas rígidas de 9-12 mm.",
    distribucion: "Uruguay y centro y este de Argentina; en campos salados inundables.",
    imagen: ""
  },

  spartina_brasiliensis: {
    id: "spartina_brasiliensis",
    nombreCientifico: "Spartina brasiliensis",
    nombreVulgar: "Espartillo",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne rizomatosa, de cerca de 1 m de alto.",
    caracteristicas: "Hojas convolutas muy largas, espigas 12-20 de unos 10 cm algo divergentes y espiguillas de 14-16 mm.",
    distribucion: "América del Sur; arenales y cangrejales de Punta del Indio y Pipinas.",
    imagen: ""
  },

  spartina_longispica: {
    id: "spartina_longispica",
    nombreCientifico: "Spartina longispica",
    nombreVulgar: "Espartillo",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba robusta rizomatosa, de alrededor de 1,5 m de alto.",
    caracteristicas: "Hojas convolutas, espigas 7-11 de 11-16 cm aproximadas al raquis principal y glumas escabrosas en la quilla.",
    distribucion: "Cangrejales de la región de Pipinas.",
    imagen: ""
  },

  trichloris_crinita: {
    id: "trichloris_crinita",
    nombreCientifico: "Trichloris crinita",
    nombreVulgar: "Trichloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa con rizomas cortos y tallos de 50-100 cm.",
    caracteristicas: "Hojas planas escabrosas, espigas 7-15 aproximadas, espiguillas con una flor hermafrodita y una estéril, lemma con tres aristas.",
    distribucion: "Sur de Estados Unidos, norte de México y norte y centro de Argentina; rara en la región.",
    imagen: ""
  },

  leptochloa_chloridiformis: {
    id: "leptochloa_chloridiformis",
    nombreCientifico: "Leptochloa chloridiformis",
    nombreVulgar: "Leptochloa",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa, de 60-80 cm de alto.",
    caracteristicas: "Espigas 5-10 fasciculadas en el ápice, espiguillas 3-4-floras y lemma bilobulada cortamente aristada.",
    distribucion: "Norte de Argentina y Paraguay; hallada en Campana y Palermo.",
    imagen: ""
  },

  leptochloa_virgata: {
    id: "leptochloa_virgata",
    nombreCientifico: "Leptochloa virgata",
    nombreVulgar: "Leptochloa",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa.",
    caracteristicas: "Espigas numerosas y delgadas a lo largo del raquis principal, espiguillas rojizo-violáceas 5-6-floras y lemmas largamente aristadas.",
    distribucion: "América cálida; citada para Palermo.",
    imagen: ""
  },

  schedonnardus_paniculatus: {
    id: "schedonnardus_paniculatus",
    nombreCientifico: "Schedonnardus paniculatus",
    nombreVulgar: "Schedonnardus",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne glauca y tenue, de 20-40 cm de alto.",
    caracteristicas: "Hojas basales planas y estrechas, espigas de 2-10 cm y espiguillas adosadas al raquis de 4 mm.",
    distribucion: "Sur de Estados Unidos y centro de Argentina; muy rara en Palermo.",
    imagen: ""
  },

  willkommia_texana_stolonifera: {
    id: "willkommia_texana_stolonifera",
    nombreCientifico: "Willkommia texana var. stolonifera",
    nombreVulgar: "Willkommia",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne estolonífera, glabra, de 20-30 cm de alto.",
    caracteristicas: "Hojas cortas convolutas, espigas 6-12 de 2-2,5 cm y espiguillas de 4-5 mm.",
    distribucion: "Variedad hallada únicamente en la región de Pipinas, cerca de la bahía de Samborombón.",
    imagen: ""
  },

  phalaris_paradoxa: {
    id: "phalaris_paradoxa",
    nombreCientifico: "Phalaris paradoxa",
    nombreVulgar: "Phalaris",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba anual, de unos 20 cm de alto.",
    caracteristicas: "Glumas con quilla anchamente alada y ala puntiaguda, panoja cilíndrica de 4-6 cm y glumas aristuladas.",
    distribucion: "Europa; adventicia en América, hallada en el puerto de Eva Perón.",
    imagen: ""
  },

  phalaris_canariensis: {
    id: "phalaris_canariensis",
    nombreCientifico: "Phalaris canariensis",
    nombreVulgar: "Alpiste",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba anual, de 30-80 cm de alto.",
    caracteristicas: "Espiguillas de 7-9 mm, panojas ovoides de 3-4 cm, glumas ovadas 3-nervadas y lemma fértil pubescente.",
    distribucion: "Islas Canarias y sur de Europa; cultivada para alimentar aves y a veces espontánea.",
    imagen: ""
  },

  phalaris_platensis: {
    id: "phalaris_platensis",
    nombreCientifico: "Phalaris platensis",
    nombreVulgar: "Phalaris",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba anual, de 20-80 cm de alto.",
    caracteristicas: "Panojas cilíndricas de 5-10 cm, espiguillas de unos 4,5 mm y lemma pubescente excepto en el tercio superior.",
    distribucion: "Uruguay y nordeste de Argentina; en campos húmedos.",
    imagen: ""
  },

  phalaris_angusta: {
    id: "phalaris_angusta",
    nombreCientifico: "Phalaris angusta",
    nombreVulgar: "Phalaris",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba anual glabra, de 1-1,5 m de alto.",
    caracteristicas: "Panojas cilíndricas de 8-15 cm, espiguillas de 3,5-4 mm y lemma uniformemente pubescente.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de Argentina; común en campos húmedos y bosques de ribera.",
    imagen: ""
  },

  phalaris_minor: {
    id: "phalaris_minor",
    nombreCientifico: "Phalaris minor",
    nombreVulgar: "Phalaris",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba anual, de 60-90 cm de alto.",
    caracteristicas: "Panojas ovoides o cortamente cilíndricas de 2-5(-7) cm, espiguillas de 5-6 mm y lemma pubescente salvo el tercio inferior.",
    distribucion: "Europa; cultivada como forrajera y adventicia en cultivos y rastrojos.",
    imagen: ""
  },

  anthoxanthum_odoratum: {
    id: "anthoxanthum_odoratum",
    nombreCientifico: "Anthoxanthum odoratum",
    nombreVulgar: "Anthoxanthum",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba perenne fragante, de 30-60 cm de alto.",
    caracteristicas: "Hojas planas, panojas amarillentas de 2-6 cm, espiguillas de 8-10 mm y lemmas estériles cubiertas de pelos dorados.",
    distribucion: "Europa; cultivada para césped y a veces espontánea en suelos húmedos de la ribera.",
    imagen: ""
  },

  leersia_hexandra: {
    id: "leersia_hexandra",
    nombreCientifico: "Leersia hexandra",
    nombreVulgar: "Leersia",
    familia: "17. Gramineae - Oryzeae",
    descripcion: "Hierba perenne rizomatosa, de 20-50 cm de alto.",
    caracteristicas: "Hojas lanceoladas, espiguillas comprimidas de 4-5 mm, glumas ausentes y estambres 6.",
    distribucion: "Regiones cálidas; frecuente en el Delta, ribera platense y lugares pantanosos del interior.",
    imagen: ""
  },

  luziola_peruviana: {
    id: "luziola_peruviana",
    nombreCientifico: "Luziola peruviana",
    nombreVulgar: "Luziola",
    familia: "17. Gramineae - Oryzeae",
    descripcion: "Hierba perenne delicada, con tallos ascendentes de 10-40 cm.",
    caracteristicas: "Flores unisexuales en panojas masculinas terminales y femeninas axilares/terminales; lemma mútica.",
    distribucion: "América cálida; común en lugares pantanosos.",
    imagen: ""
  },

  zizaniopsis_bonariensis: {
    id: "zizaniopsis_bonariensis",
    nombreCientifico: "Zizaniopsis bonariensis",
    nombreVulgar: "Espadaña",
    familia: "17. Gramineae - Oryzeae",
    descripcion: "Hierba perenne robusta, palustre, con rizomas horizontales poderosos y tallos de hasta 2 m.",
    caracteristicas: "Hojas lineales de 1 m o más, panojas erectas de 0,5-1 m, espiguillas lanceoladas de 10 mm y lemma largamente aristada.",
    distribucion: "Pajonales del norte de Buenos Aires y Uruguay.",
    imagen: ""
  },

  // Cyperaceae
  carex_sellowiana: {
    id: "carex_sellowiana",
    nombreCientifico: "Carex sellowiana",
    nombreVulgar: "Carex sellowiana",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne de unos 30 cm de alto.",
    caracteristicas: "Hojas lineales, mas largas que el tallo; espiguilla androgina solitaria, lanceolada, de 1,5-2 cm; utriculos elipsoideos, trigonales, de 6-7 mm.",
    distribucion: "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina; hallada en Isla Martin Garcia y selva marginal de Punta Lara.",
    imagen: ""
  },

  carex_phalaroides: {
    id: "carex_phalaroides",
    nombreCientifico: "Carex phalaroides",
    nombreVulgar: "Carex phalaroides",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, baja, rizomatosa, de 4-15 cm de alto.",
    caracteristicas: "Hojas mas largas que los tallos, lineales y carenadas; espiguillas 4-6, de 7-10 mm, largamente pedunculadas; utriculos obovoideos de 3-4 mm.",
    distribucion: "America austral hasta el norte de la Argentina; en campos humedos. El manual menciona tambien la var. capitellata.",
    imagen: ""
  },

  carex_marcida: {
    id: "carex_marcida",
    nombreCientifico: "Carex marcida",
    nombreVulgar: "Carex marcida",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizoma horizontal largo y tallos erectos de 25-60 cm de alto.",
    caracteristicas: "Hojas lineales; espiguillas 6-10 agrupadas en espiga terminal oblonga ebracteada; utriculos plano-convexos, ovados, largamente rostrados, de 3-3,5 mm.",
    distribucion: "America del Norte; rara en Uruguay y Argentina, en suelos humedos.",
    imagen: ""
  },

  carex_divulsa: {
    id: "carex_divulsa",
    nombreCientifico: "Carex divulsa",
    nombreVulgar: "Carex divulsa",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizoma corto y tallos numerosos de 30-100 cm de alto.",
    caracteristicas: "Hojas mas cortas que los tallos, lineales; espiga interrumpida de 5-8 cm con bractea muy corta; espiguillas 6-8; utriculos lanceolado-ovados de 3-4 mm.",
    distribucion: "Viejo Mundo; adventicia en la Argentina.",
    imagen: ""
  },

  carex_brongniartii: {
    id: "carex_brongniartii",
    nombreCientifico: "Carex brongniartii",
    nombreVulgar: "Carex brongniartii",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizomas cortos y tallos de 40-90 cm de alto.",
    caracteristicas: "Hojas cortas y rigidas; espiga densa, cilindrica, de 4-6 cm, con bractea setacea basal; utriculos ovoideos, coriaceos, plano-convexos, pardos, con rostro hendido.",
    distribucion: "America austral; hallada en lugares humedos de San Isidro y Belgrano.",
    imagen: ""
  },

  carex: {
    id: "carex",
    nombreCientifico: "Carex sp.",
    nombreVulgar: "Carex",
    familia: "18. Cyperaceae",
    descripcion: "Genero de Cyperaceae con flores unisexuales y flores femeninas encerradas en utriculo.",
    caracteristicas: "Rama parcialmente cargada; faltan continuar las opciones desde Carex D' y B'.",
    distribucion: "Genero representado en la flora de los alrededores de Buenos Aires.",
    imagen: ""
  },

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
