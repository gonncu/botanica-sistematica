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

function species(
  id: string,
  nombreCientifico: string,
  familia: string,
  descripcion: string,
  caracteristicas: string,
  distribucion = "Alrededores de Buenos Aires, según el manual de Cabrera."
): Especie {
  return {
    id,
    nombreCientifico,
    nombreVulgar: nombreCientifico,
    familia,
    descripcion,
    caracteristicas,
    distribucion,
  };
}

export const manualFamilyData: Record<string, Especie> = {
  ephedraceae: family(
    "ephedraceae",
    "10. Ephedraceae",
    "Gimnospermas con óvulos desnudos.",
    "Única familia de gimnospermas espontánea citada para la región en la clave del manual."
  ),
  ephedra_tweediana: species(
    "ephedra_tweediana",
    "Ephedra tweediana",
    "10. Ephedraceae",
    "Arbusto trepador dioico, de hasta 6 m de alto.",
    "Estróbilos femeninos pedunculados, con 3-5 verticilos de brácteas, carnosos rojos a la madurez y generalmente 2 semillas; ramas péndulas o inclinadas.",
    "Sur del Brasil, Uruguay y Argentina; citada para Campana, Martín García y alrededores."
  ),
  ephedra_triandra: species(
    "ephedra_triandra",
    "Ephedra triandra",
    "10. Ephedraceae",
    "Arbusto o sufrútice dioico, apoyante.",
    "Estróbilos femeninos sésiles, con 6-10 verticilos de brácteas, carnosos rojos a la madurez; semillas 2 y anteras 3.",
    "Argentina y Bolivia; citada para barrancas del Paraná, Las Palmas, Campana y San Isidro."
  ),
  salviniaceae: family(
    "salviniaceae",
    "9. Salviniaceae",
    "Pteridófitas acuáticas flotantes.",
    "Esporangios en esporocarpos; plantas flotantes libres."
  ),
  salvinia_auriculata: species(
    "salvinia_auriculata",
    "Salvinia auriculata",
    "9. Salviniaceae",
    "Planta flotante libre.",
    "Hojas flotantes profundamente hendidas en la base, algo plegadas, más o menos circulares, con papilas cuyos pelos se sueldan en el ápice; esporocarpos muy amontonados.",
    "América cálida; en arroyos y lagunas."
  ),
  salvinia_rotundifolia: species(
    "salvinia_rotundifolia",
    "Salvinia rotundifolia",
    "9. Salviniaceae",
    "Planta flotante libre.",
    "Hojas flotantes con escotadura basal poco marcada o nula, redondeadas y plegadas por la nervadura central; papilas con pelitos libres; esporocarpos esparcidos.",
    "América del Sur cálida, hasta el Delta y la ribera del Plata."
  ),
  azolla_filiculoides: species(
    "azolla_filiculoides",
    "Azolla filiculoides",
    "9. Salviniaceae",
    "Hierba flotante libre, pequeña y ramificada.",
    "Hojas diminutas, de alrededor de 1 mm, densamente imbricadas sobre tallos muy ramificados; en invierno puede tomar color pardo-rojizo.",
    "América; muy común en lagunas, zanjas y arroyos."
  ),
  marsiliaceae: family(
    "marsiliaceae",
    "8. Marsiliaceae",
    "Pteridófitas acuáticas arraigadas.",
    "Esporangios en esporocarpos; hojas flotantes tetrafolioladas o arrosetadas lineales."
  ),
  pilularia_mandonii: species(
    "pilularia_mandonii",
    "Pilularia mandonii",
    "8. Marsiliaceae",
    "Planta diminuta de pantanos o campos inundados.",
    "Hojas lineales cilíndrico-subuladas, de prefoliación circinada; esporocarpos rojizos y peludos.",
    "América del Sur; rara en campos inundados al comenzar la primavera."
  ),
  marsilia_concinna: species(
    "marsilia_concinna",
    "Marsilia concinna",
    "8. Marsiliaceae",
    "Planta acuática arraigada, con hojas largamente pecioladas.",
    "Hojas terminadas en 4 folíolos flotantes glabros, dispuestos en cruz; esporocarpos ovoideos, peludos y rojizos.",
    "América austral; común en charcas de agua estancada."
  ),
  isoetaceae: family(
    "isoetaceae",
    "3. Isoetaceae",
    "Pteridófitas acuáticas o palustres.",
    "Esporangios alojados en foveas en la base de hojas subuladas dispuestas en rosetas."
  ),
  isoetes_ekmanii: species(
    "isoetes_ekmanii",
    "Isoetes ekmanii",
    "3. Isoetaceae",
    "Planta palustre perenne, de aspecto junciforme.",
    "Rizoma de 10-12 cm y hojas arrosetadas, subuladas, de 5-15 cm, con cámaras aéreas; esporangios ovalados.",
    "Nordeste de la Argentina, hasta el Delta y la isla Martín García."
  ),
  equisetaceae: family(
    "equisetaceae",
    "1. Equisetaceae",
    "Pteridófitas terrestres áfilas.",
    "Hojas reducidas a escamas membranosas, ramificación verticilada y estróbilo terminal."
  ),
  equisetum_giganteum: species(
    "equisetum_giganteum",
    "Equisetum giganteum",
    "1. Equisetaceae",
    "Planta perenne con tallos erectos, fistulosos y muy ramificados.",
    "Tallos de 1-2 m, surcados; vainas dentadas; espigas ovoideas de alrededor de 1 cm.",
    "América cálida; común en los bosques del Delta y de la ribera del Plata."
  ),
  selaginellaceae: family(
    "selaginellaceae",
    "2. Selaginellaceae",
    "Pteridófitas con ramificación dicotómica.",
    "Hojas muy pequeñas; esporangios solitarios en axilas de hojas superiores."
  ),
  selaginella_muscosa: species(
    "selaginella_muscosa",
    "Selaginella muscosa",
    "2. Selaginellaceae",
    "Hierba perenne pigmea, aplicada contra el suelo.",
    "Hojas no auriculadas, dimorfas, en 4 series; las marginales más grandes y las dorsales lanceoladas; tallos filiformes no articulados.",
    "Sur del Brasil, Paraguay, Uruguay y NE de Argentina; citada para islas del Delta y Punta Lara."
  ),
  selaginella_marginata: species(
    "selaginella_marginata",
    "Selaginella marginata",
    "2. Selaginellaceae",
    "Hierba perenne pigmea.",
    "Hojas auriculadas, dimorfas, en 4 series, ovadas, agudas y con margen blanquecino; tallos articulados y delgados.",
    "América cálida; frecuente en el Delta, Isla Martín García y ribera del Plata."
  ),
  polypodiaceae: family(
    "polypodiaceae",
    "7. Polypodiaceae",
    "Helechos con esporangios en la cara inferior de las hojas.",
    "Esporangios con anillo de dehiscencia vertical."
  ),
  polypodium_vaccinifolium: species(
    "polypodium_vaccinifolium",
    "Polypodium vaccinifolium",
    "7. Polypodiaceae",
    "Hierba perenne epífita, con tallos rastreros cubiertos de escamas membranosas.",
    "Hojas enteras, dimorfas y glabras; hojas fértiles lanceoladas, con una serie de soros a cada lado.",
    "América tropical, desde las Antillas hasta el Río de la Plata; común en el Delta y ribera del Plata."
  ),
  polypodium_polypodioides_minus: species(
    "polypodium_polypodioides_minus",
    "Polypodium polypodioides var. minus",
    "7. Polypodiaceae",
    "Epífita con largos tallos tendidos, cubiertos de escamas rojizas lanceoladas.",
    "Hojas pinatisectas, con segmentos opuestos en 9-11 pares y un segmento terminal; soros circulares.",
    "Sur del Brasil, Uruguay y NE de Argentina; hallada en bosques indígenas del Delta."
  ),
  anogramma_chaerophylla: species(
    "anogramma_chaerophylla",
    "Anogramma chaerophylla",
    "7. Polypodiaceae",
    "Hierba perenne delicada, glabra, de rizoma corto.",
    "Hojas en manojo, ovadas, largamente pecioladas y profundamente divididas cuatro o más veces.",
    "América tropical y Antillas; común en el Delta y selva marginal de la ribera del Plata."
  ),
  trismeria_trifoliata: species(
    "trismeria_trifoliata",
    "Trismeria trifoliata",
    "7. Polypodiaceae",
    "Hierba de cerca de 1 m de alto, con rizoma erecto corto.",
    "Hojas erectas, rígidas y bipinadas; cada pina dividida en 3 segmentos; pínulas fértiles lineales.",
    "América cálida, hasta el Delta del Paraná."
  ),
  dryopteris_submarginalis: species(
    "dryopteris_submarginalis",
    "Dryopteris submarginalis",
    "7. Polypodiaceae",
    "Helecho de cerca de 1 m de alto.",
    "Pinas profundamente partidas; hojas de 60-80 cm, con mechón de escamas rojizas en la base del pecíolo.",
    "América cálida, hasta el Delta del Paraná y la ribera del Plata."
  ),
  dryopteris_argentina: species(
    "dryopteris_argentina",
    "Dryopteris argentina",
    "7. Polypodiaceae",
    "Helecho con rizoma horizontal rojizo y escamoso.",
    "Hojas lanceoladas de 30-50 cm; segmentos oblongos enteros, pubescentes; indusio inconspicuo.",
    "Norte y centro de la Argentina, hasta el Delta del Paraná."
  ),
  dryopteris_riograndensis: species(
    "dryopteris_riograndensis",
    "Dryopteris riograndensis",
    "7. Polypodiaceae",
    "Helecho con hojas glabras de 20-50 cm.",
    "Pinas crenadas, con nervaduras ramificadas y anastomosadas.",
    "Sur del Brasil, Paraguay, Uruguay y NE de Argentina, hasta la ribera del Plata."
  ),
  dryopteris_gongylodes: species(
    "dryopteris_gongylodes",
    "Dryopteris gongylodes",
    "7. Polypodiaceae",
    "Helecho con rizoma horizontal fuerte y rojizo.",
    "Hojas de cerca de 1 m; pinas 20-30-yugas, lanceolado-lineales, con lóbulos redondeados.",
    "Regiones cálidas; hallada en el Delta del Paraná."
  ),
  pteridium_aquilinum_arachnoideum: species(
    "pteridium_aquilinum_arachnoideum",
    "Pteridium aquilinum var. arachnoideum",
    "7. Polypodiaceae",
    "Hierba perenne con rizoma rastrero ramificado.",
    "Frondas de un metro o más, ovado-triangulares, 3-4 pinadas, con segmentos oblongo-lineales.",
    "América cálida; hallada en islas arenosas del Delta del Paraná."
  ),
  pteris_longifolia: species(
    "pteris_longifolia",
    "Pteris longifolia",
    "7. Polypodiaceae",
    "Helecho con hojas simplemente pinadas de 30-50 cm.",
    "Pinas numerosas, enteras y lineales; soros ocupando todo el borde; raquis con pelos escamosos lineales.",
    "Regiones cálidas; se halla en muros viejos."
  ),
  pteris_multifida: species(
    "pteris_multifida",
    "Pteris multifida",
    "7. Polypodiaceae",
    "Helecho con hojas de 20-40 cm.",
    "Raquis foliar alado entre las pinas; pinas lineales, enteras o las inferiores trilobadas.",
    "Europa; adventicia en la Argentina, en muros de ladrillo y pozos."
  ),
  pteris_cretica: species(
    "pteris_cretica",
    "Pteris cretica",
    "7. Polypodiaceae",
    "Helecho de frondas de 15-30 cm.",
    "Raquis foliar no alado; hojas ternadas o pinadas con 2-5 pares de pinas sésiles.",
    "Europa; cultivada como ornamental y subespontánea."
  ),
  pteris_tremula: species(
    "pteris_tremula",
    "Pteris tremula",
    "7. Polypodiaceae",
    "Helecho con rizoma erecto corto.",
    "Hojas 2-3 pinadas, de 60-100 cm; pinas superiores pinadas e inferiores divididas dos o tres veces.",
    "Australia y Nueva Zelandia; cultivada como ornamental y a veces subespontánea."
  ),
  adiantum_cuneatum: species(
    "adiantum_cuneatum",
    "Adiantum cuneatum",
    "7. Polypodiaceae",
    "Hierba perenne de rizoma corto, conocida como culantrillo.",
    "Hojas glabras, delicadas, tripinadas, con pinas irregularmente flabeladas y palmatilobadas.",
    "América del Sur; común en el norte de la Argentina hasta el Río de la Plata."
  ),
  adiantopsis_chlorophylla: species(
    "adiantopsis_chlorophylla",
    "Adiantopsis chlorophylla",
    "7. Polypodiaceae",
    "Helecho con frondas de unos 70 cm.",
    "Lámina tripinada, raquis castaño y pínulas pequeñas triangular-oblongas; soros redondeados.",
    "América tropical y subtropical, hasta el Delta del Paraná y San Fernando."
  ),
  blechnum_auriculatum: species(
    "blechnum_auriculatum",
    "Blechnum auriculatum",
    "7. Polypodiaceae",
    "Helecho perenne de rizoma corto.",
    "Hojas pinadas de 20-40 cm; pinas lanceoladas, enteras o denticuladas, ensanchadas y auriculadas en la base.",
    "América del Sur templada; en bosques del Delta y ribera platense."
  ),
  asplenium_argentinum: species(
    "asplenium_argentinum",
    "Asplenium argentinum",
    "7. Polypodiaceae",
    "Helecho de rizoma corto, erecto o ascendente.",
    "Hojas lanceoladas de 25-60 cm, pinadas; pinas oblongo-falcadas y aserrado-dentadas.",
    "Norte y centro de la Argentina; común en bosques del Delta y ribera platense."
  ),
  asplenium_ulbrichtii: species(
    "asplenium_ulbrichtii",
    "Asplenium ulbrichtii",
    "7. Polypodiaceae",
    "Helecho de rizoma corto y erecto.",
    "Hojas de 15-20 cm, pinadas; pinas rómbico-trapezoidales, profundamente aserradas; soros pocos.",
    "Brasil, Uruguay y NE de Argentina; en bosques húmedos del Delta y ribera del Plata."
  ),
  nephrolepis_cordifolia: species(
    "nephrolepis_cordifolia",
    "Nephrolepis cordifolia",
    "7. Polypodiaceae",
    "Helecho rizomatoso, con tubérculos elipsoideos.",
    "Hojas oblongas, pinadas, de 50-80 cm; pinas auriculadas en la base y aserradas.",
    "Regiones tropicales; cultivada como ornamental y subespontánea en lugares húmedos y sombríos."
  ),
  athyrium_decurtatum_platense: species(
    "athyrium_decurtatum_platense",
    "Athyrium decurtatum var. platense",
    "7. Polypodiaceae",
    "Hierba robusta, rizomatosa, formando grandes matas.",
    "Hojas ovadas, de 50-90 cm, pinadas; pinas numerosas, profundamente partidas.",
    "América del Sur cálida; frecuente en selvas marginales del Delta y ribera del Plata."
  ),
  polystichum_adiantiforme: species(
    "polystichum_adiantiforme",
    "Polystichum adiantiforme",
    "7. Polypodiaceae",
    "Hierba perenne con rizomas horizontales gruesos.",
    "Hojas ovado-deltoideas, bi- o tripinadas; pínulas lanceoladas y aserrado-dentadas.",
    "Cosmopolita; cultivada como ornamental, dudosa como espontánea en el Delta."
  ),
  phanerophlebia_falcata: species(
    "phanerophlebia_falcata",
    "Phanerophlebia falcata",
    "7. Polypodiaceae",
    "Helecho terrestre con rizoma erecto y escamoso.",
    "Hojas coriáceas, pinadas, con pinas ovado-falcadas, acuminadas y aserrado-dentadas.",
    "Sudeste de Asia; cultivada como ornamental y a veces subespontánea."
  ),
  cystopteris_fragilis: species(
    "cystopteris_fragilis",
    "Cystopteris fragilis",
    "7. Polypodiaceae",
    "Hierba débil, de 15-25 cm de alto.",
    "Hojas ovado-lanceoladas, 2-3 pinadas, tenues y glabras; soros 4-12 por pínula.",
    "Cosmopolita; parece haber existido cerca de Buenos Aires."
  ),
  schizaeaceae: family(
    "schizaeaceae",
    "6. Schizaeaceae",
    "Helechos con esporangios sobre hojas reducidas o pínulas.",
    "Esporangios con anillo de dehiscencia apical."
  ),
  aneimia_tweediana: species(
    "aneimia_tweediana",
    "Aneimia tweediana",
    "6. Schizaeaceae",
    "Helecho con rizoma ascendente y frondas glabras.",
    "Frondas pinaticompuestas, con 3-4 pares de segmentos y un segmento terminal; esporangios en panojas cortas.",
    "América austral cálida; rara en la región, citada para Isla Martín García."
  ),
  ophioglossaceae: family(
    "ophioglossaceae",
    "4. Ophioglossaceae",
    "Pteridófitas pigmeas.",
    "Esporangios en espigas densas, dehiscentes por ranura transversal."
  ),
  ophioglossum_crotalophoroides: species(
    "ophioglossum_crotalophoroides",
    "Ophioglossum crotalophoroides",
    "4. Ophioglossaceae",
    "Hierba pequeña, de 3-15 cm de alto, con rizoma esférico.",
    "Frondas dos o más; lámina ovado-acorazonada, aguda y entera; segmento fértil con espiga de esporangios.",
    "América; escasa en campos húmedos a fines del invierno."
  ),
  osmundaceae: family(
    "osmundaceae",
    "5. Osmundaceae",
    "Pteridófitas robustas.",
    "Esporangios en pínulas superiores reducidas al raquis."
  ),
  osmunda_palustris: species(
    "osmunda_palustris",
    "Osmunda palustris",
    "5. Osmundaceae",
    "Hierba rizomatosa con frondas de 10-40 cm.",
    "Raquis primario redondeado, glabro y canaliculado; folíolos en 10-18 pares; pínulas superiores reducidas y cargadas de esporangios.",
    "América tropical, hasta el Delta del Paraná."
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
  salix_humboldtiana: species(
    "salix_humboldtiana",
    "Salix humboldtiana",
    "35. Salicaceae",
    "Árbol de 10-15 m de alto.",
    "Hojas lineal-lanceoladas, cortamente pecioladas, aserradas y verde claras; amentos masculinos con brácteas y filamentos lanuginosos; frutos piriformes de 2,5 mm.",
    "Frecuente en islas y riberas arenosas de los ríos de la América cálida; común en el Delta del Paraná y en la ribera platense. N. v.: sauce colorado, sauce criollo."
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
  peperomia_catharinae: species(
    "peperomia_catharinae",
    "Peperomia catharinae",
    "34. Piperaceae",
    "Hierba epífita, decumbente, de unos 15 cm de largo.",
    "Hojas opuestas o ternadas, obovado-circulares, enteras, obtusas y cortamente pecioladas; espigas terminales solitarias de 10-25 mm; flores incrustadas en el raquis; fruto viscoso de menos de 1 mm.",
    "Sur del Brasil; hallada en el Delta, sobre seibos del río Paraná Miní."
  ),
  peperomia_comarapana: species(
    "peperomia_comarapana",
    "Peperomia comarapana",
    "34. Piperaceae",
    "Hierba terrícola, erecta o ascendente, rizomatosa, de 10-30 cm de alto.",
    "Hojas verticiladas, cortamente pecioladas, carnosas, obovadas u oblanceoladas; espigas axilares y terminales largas, delgadas y laxas; flores no incrustadas en el raquis; drupa con papilas viscosas.",
    "Sur de Bolivia, Chaco y norte de Buenos Aires; abundante en talares de las barrancas del Paraná al norte de Zárate."
  ),
  moraceae: family(
    "moraceae",
    "37. Moraceae",
    "Dicotiledóneas del Grupo B.",
    "Árboles con látex; flores encerradas en sicono o incrustadas en receptáculo."
  ),
  ficus_monckii_sanmartinianus: species(
    "ficus_monckii_sanmartinianus",
    "Ficus monckii var. sanmartinianus",
    "37. Moraceae",
    "Árbol epífito o terrestre de unos 10-15 m de altura.",
    "Hojas pecioladas, elípticas, subcoriáceas, enteras, de 6-10 cm; receptáculos globosos de unos 8 mm, cortamente pedunculados; flores masculinas, agallas y femeninas entremezcladas.",
    "Paraguay y nordeste de la Argentina; común en el Delta y en Martín García, generalmente epífito sobre seibos. N. v.: higuerón, agarrapalo."
  ),
  dorstenia_brasiliensis: species(
    "dorstenia_brasiliensis",
    "Dorstenia brasiliensis",
    "37. Moraceae",
    "Hierba perenne, acaule y rizomatosa.",
    "Hojas en roseta, ovado-cordadas, pecioladas y crenadas; receptáculo circular algo cóncavo; flores amontonadas sobre un receptáculo plano andrógino.",
    "Brasil, Paraguay, Uruguay y NE de la Argentina; hallada cerca de Buenos Aires en la Isla Maciel."
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
  celtis_spinosa: species(
    "celtis_spinosa",
    "Celtis spinosa",
    "36. Ulmaceae",
    "Árbol erecto de 4-8 m de altura, con espinas rectas.",
    "Hojas cortamente pecioladas, ovadas, aserradas, glabras o apenas pilosas, de 8-35 mm; drupas rojas o negruzcas de 6-9 mm.",
    "Común en sabanas y bosques xerófilos de América del Sur; frecuente en el este de Buenos Aires formando talares. N. v.: tala."
  ),
  celtis_iguanea: species(
    "celtis_iguanea",
    "Celtis iguanea",
    "36. Ulmaceae",
    "Arbusto apoyante de 4-10 m de altura.",
    "Ramas flexuosas con espinas cortas y curvas; hojas ovadas, aserrado-crenadas, glabras o apenas pubescentes, de 4-10 cm; frutos amarillos de 4-6 mm.",
    "América cálida; común en los bosques primitivos del Delta y de la ribera platense. N. v.: tala gateador."
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
  urtica_dioica: species(
    "urtica_dioica",
    "Urtica dioica",
    "39. Urticaceae",
    "Hierba perenne, dioica, de 0,5-1 m de altura.",
    "Planta verde oscura, densamente híspida; hojas ovadas, acuminadas, con grandes dientes; flores en racimos de glomérulos más largos que los pecíolos; perianto pubescente.",
    "Originaria de Europa y adventicia en América; rara en la región."
  ),
  urtica_chamaedryoides_circularis: species(
    "urtica_chamaedryoides_circularis",
    "Urtica chamaedryoides var. circularis",
    "39. Urticaceae",
    "Hierba anual, monoica, con tallos ascendentes o erectos de 20-40 cm.",
    "Cistolitos epidérmicos alargados, bacilares; hojas flabelado-circulares, profundamente dentadas, de 7-15 mm por 10-23 mm; flores amontonadas en las axilas; perianto pubescente sin pelos urticantes.",
    "La especie es de América del Norte; la variedad del norte de la Argentina. Frecuente en suelos húmedos del Delta y de la ribera del Plata."
  ),
  urtica_urens: species(
    "urtica_urens",
    "Urtica urens",
    "39. Urticaceae",
    "Hierba anual, monoica, con tallos erectos de 20-60 cm.",
    "Planta verde clara, erizada; hojas ovadas o elípticas, profundamente dentadas o lobuladas, de 5-10 cm por 3-4 cm; flores en racimos cortos; perianto femenino con algún pelo urticante.",
    "Originaria de Europa y adventicia en todo el globo; común en suelos modificados al comienzo de la primavera. N. v.: ortiga."
  ),
  urtica_spathulata: species(
    "urtica_spathulata",
    "Urtica spathulata",
    "39. Urticaceae",
    "Hierba anual, monoica, con hojas flabeladas y dentadas.",
    "Cistolitos epidérmicos puntiformes; flores en glomérulos axilares; perianto de las flores femeninas sin pelos urticantes.",
    "América austral; rara en la región."
  ),
  parietaria_debilis: species(
    "parietaria_debilis",
    "Parietaria debilis",
    "39. Urticaceae",
    "Hierba anual, pubescente, de 10-20 cm de altura, con tallos tendidos o ascendentes muy débiles.",
    "Hojas de 15-30 mm por 8-15 mm; perianto de las flores femeninas con pelos ganchudos.",
    "Cosmopolita; frecuente en suelos modificados al comienzo de la primavera."
  ),
  parietaria_officinalis: species(
    "parietaria_officinalis",
    "Parietaria officinalis",
    "39. Urticaceae",
    "Hierba perenne, con tallos ascendentes de 30-40 cm.",
    "Hojas de 40-60 mm por 20-35 mm; perianto de las flores femeninas acrescente y pubescente.",
    "Cosmopolita; común en jardines y muros viejos, primaveral."
  ),
  boehmeria_cylindrica: species(
    "boehmeria_cylindrica",
    "Boehmeria cylindrica",
    "39. Urticaceae",
    "Hierba perenne, erecta, de 0,5-1 m de altura.",
    "Hojas opuestas, pecioladas, ovado-lanceoladas, uniformemente aserradas, de 3-10 cm por 1,5-4 cm; flores dioicas o andróginas en glomérulos a lo largo de las ramas, formando falsas espigas; aquenios comprimidos con pelos ganchudos.",
    "América; frecuente en los bosques del Delta y de la ribera platense."
  ),
  cannabinaceae: family(
    "cannabinaceae",
    "38. Cannabinaceae",
    "Dicotiledóneas del Grupo B.",
    "Enredaderas dioicas con hojas opuestas."
  ),
  humulus_lupulus: species(
    "humulus_lupulus",
    "Humulus lupulus",
    "38. Cannabinaceae",
    "Planta voluble perenne, dioica, con hojas anchas y pecioladas.",
    "Hojas opuestas, palminervadas, aserradas o lobadas, con estípulas; flores femeninas por pares en las axilas de las brácteas del amento; aquenios comprimidos acompañados por brácteas.",
    "Originaria del Viejo Mundo y cultivada en América; a veces espontánea en baldíos y escombros. N. v.: lúpulo."
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
  sapindaceae: family(
    "sapindaceae",
    "77. Sapindaceae",
    "Dicotiledóneas del Grupo C.",
    "Árboles, arbustos o plantas volubles; en la clave aparece por hojas/folíolos y ovario 3-5-locular o frutos trialados."
  ),
  zygophyllaceae: family(
    "zygophyllaceae",
    "69. Zygophyllaceae",
    "Dicotiledóneas del Grupo C.",
    "Folíolos pequeños, oblongos y enteros; ovario 3-5-locular, estambres 8-10."
  ),
  sterculiaceae: family(
    "sterculiaceae",
    "82. Sterculiaceae",
    "Dicotiledóneas del Grupo C.",
    "Hojas simples, ovario 5-locular y estambres monadelfos."
  ),
  celastraceae: family(
    "celastraceae",
    "76. Celastraceae",
    "Dicotiledóneas del Grupo C.",
    "Flores unisexuales o estambres 4; en la clave aparece por ovario bilocular o unilocular."
  ),
  tiliaceae: family(
    "tiliaceae",
    "80. Tiliaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores hermafroditas con estambres muy numerosos."
  ),
  rhamnaceae: family(
    "rhamnaceae",
    "78. Rhamnaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas espinosas, receptáculo floral muy cóncavo a urceolado y frutos no alados."
  ),
  berberidaceae: family(
    "berberidaceae",
    "55. Berberidaceae",
    "Dicotiledóneas del Grupo C.",
    "Ovario unilocular y estambres 6."
  ),
  lauraceae: family(
    "lauraceae",
    "56. Lauraceae",
    "Dicotiledóneas del Grupo C.",
    "Flores con perigonio coralino, estambres 9 y anteras de dehiscencia valvar."
  ),
  anacardiaceae: family(
    "anacardiaceae",
    "75. Anacardiaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores con cáliz y corola, estambres 10 y anteras de dehiscencia longitudinal."
  ),
  amaranthaceae: family(
    "amaranthaceae",
    "45. Amaranthaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores pequeñas en inflorescencias densas, con tépalos escariosos o membranosos."
  ),
  malpighiaceae: family(
    "malpighiaceae",
    "71. Malpighiaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas volubles con hojas enteras opuestas."
  ),
  basellaceae: family(
    "basellaceae",
    "50. Basellaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas volubles con hojas enteras alternas."
  ),
  passifloraceae: family(
    "passifloraceae",
    "89. Passifloraceae",
    "Dicotiledóneas del Grupo C.",
    "Flores grandes llamativas con corona de apéndices filamentosos; hojas palmatisectas o bilobadas."
  ),
  vitaceae: family(
    "vitaceae",
    "79. Vitaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas volubles con estambres 4-5, gineceo bicarpelar y hojas palmaticompuestas."
  ),
  cruciferae: family(
    "cruciferae",
    "59. Cruciferae",
    "Dicotiledóneas del Grupo C.",
    "Estambres tetradínamos, pétalos 4 y fruto silicua o silícula."
  ),
  elatinaceae: family(
    "elatinaceae",
    "84. Elatinaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas pigmeas sin látex o con hojas opuestas lineales en ramas de la clave."
  ),
  portulacaceae: family(
    "portulacaceae",
    "49. Portulacaceae",
    "Dicotiledóneas del Grupo C.",
    "Fruto cápsula de dehiscencia transversal; plantas sin látex."
  ),
  guttiferae: family(
    "guttiferae",
    "88. Guttiferae",
    "Dicotiledóneas del Grupo C.",
    "Hojas opuestas y estambres generalmente reunidos en tres o más manojos."
  ),
  caryophyllaceae: family(
    "caryophyllaceae",
    "51. Caryophyllaceae",
    "Dicotiledóneas del Grupo C.",
    "Óvulos de placentación central o basilar; hojas opuestas e inflorescencias ramificadas dicotómicamente."
  ),
  frankeniaceae: family(
    "frankeniaceae",
    "85. Frankeniaceae",
    "Dicotiledóneas del Grupo C.",
    "Óvulos de placentación parietal y hojas opuestas."
  ),
  turneraceae: family(
    "turneraceae",
    "88. Turneraceae",
    "Dicotiledóneas del Grupo C.",
    "Óvulos de placentación parietal y hojas alternas."
  ),
  lythraceae: family(
    "lythraceae",
    "94. Lythraceae",
    "Dicotiledóneas del Grupo C.",
    "Receptáculo tubuloso, verde o coloreado, con pétalos insertos en su borde."
  ),
  oxalidaceae: family(
    "oxalidaceae",
    "65. Oxalidaceae",
    "Dicotiledóneas del Grupo C.",
    "Hojas trifolioladas con folíolos acorazonados; estambres 10, ovario 5-locular y 5 estilos."
  ),
  linaceae: family(
    "linaceae",
    "68. Linaceae",
    "Dicotiledóneas del Grupo C.",
    "Hojas lineales enteras, alternas; plantas robustas."
  ),
  geraniaceae: family(
    "geraniaceae",
    "66. Geraniaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores azules o violáceas, pétalos planos; plantas no fétidas."
  ),
  loasaceae: family(
    "loasaceae",
    "90. Loasaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas con pelos urticantes."
  ),
  cactaceae: family(
    "cactaceae",
    "92. Cactaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas crasas, sin hojas, generalmente con espinas; flores espiraladas."
  ),
  begoniaceae: family(
    "begoniaceae",
    "91. Begoniaceae",
    "Dicotiledóneas del Grupo D.",
    "Hierbas con flores unisexuales diclinas."
  ),
  myrtaceae: family(
    "myrtaceae",
    "96. Myrtaceae",
    "Dicotiledóneas del Grupo D.",
    "Árboles con flores hermafroditas."
  ),
  loranthaceae: family(
    "loranthaceae",
    "41. Loranthaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas parásitas, con flores grandes y vivamente coloreadas."
  ),
  combretaceae: family(
    "combretaceae",
    "95. Combretaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas no parásitas, con flores pequeñas verdosas."
  ),
  umbelliferae: family(
    "umbelliferae",
    "100. Umbelliferae",
    "Dicotiledóneas del Grupo D.",
    "Flores pequeñas en umbelas o capítulos densos; fruto seco dividido en dos mericarpos."
  ),
  haloragaceae: family(
    "haloragaceae",
    "99. Haloragaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas acuáticas semisumergidas con hojas verticiladas, pinatisectas, de segmentos lineales."
  ),
  saxifragaceae: family(
    "saxifragaceae",
    "62. Saxifragaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas terrestres con anteras de dehiscencia longitudinal y estambres 5."
  ),
  onagraceae: family(
    "onagraceae",
    "98. Onagraceae",
    "Dicotiledóneas del Grupo D.",
    "Estambres 4 y tubo del cáliz muy largo, frecuentemente prolongado en hipanto."
  ),
  melastomaceae: family(
    "melastomaceae",
    "97. Melastomaceae",
    "Dicotiledóneas del Grupo D.",
    "Anteras dehiscentes por poros apicales."
  ),
  lentibulariaceae: family(
    "lentibulariaceae",
    "120. Lentibulariaceae",
    "Dicotiledóneas del Grupo E.",
    "Plantas acuáticas con hojas sumergidas provistas de ascidias o trampas."
  ),
  bignoniaceae: family(
    "bignoniaceae",
    "118. Bignoniaceae",
    "Dicotiledóneas del Grupo E.",
    "Lianas con hojas compuestas."
  ),
  borraginaceae: family(
    "borraginaceae",
    "113. Borraginaceae",
    "Dicotiledóneas del Grupo E.",
    "Hierbas o arbustos; aparece por fruto drupáceo o por inflorescencias escorpioides."
  ),
  scrophulariaceae: family(
    "scrophulariaceae",
    "117. Scrophulariaceae",
    "Dicotiledóneas del Grupo E.",
    "Fruto cápsula multiseminada o lóculos con muchos óvulos."
  ),
  martyniaceae: family(
    "martyniaceae",
    "119. Martyniaceae",
    "Dicotiledóneas del Grupo E.",
    "Ovario unilocular, fruto cápsula drupácea y placentación parietal."
  ),
  acanthaceae: family(
    "acanthaceae",
    "121. Acanthaceae",
    "Dicotiledóneas del Grupo E.",
    "Ovario bilocular con placentación axilar; lóculos con dos óvulos, raramente más."
  ),
  labiatae: family(
    "labiatae",
    "115. Labiatae",
    "Dicotiledóneas del Grupo E.",
    "Ovario 4-lobulado y estilo ginobásico; corola notablemente bilabiada."
  ),
  verbenaceae: family(
    "verbenaceae",
    "114. Verbenaceae",
    "Dicotiledóneas del Grupo E.",
    "Ovario no 4-lobulado, estilo terminal y flores apenas bilabiadas."
  ),
  asclepiadaceae: family(
    "asclepiadaceae",
    "110. Asclepiadaceae",
    "Dicotiledóneas del Grupo E.",
    "Plantas con látex abundante; androceo y gineceo unidos en ginostemio; polen en polinias."
  ),
  nyctaginaceae: family(
    "nyctaginaceae",
    "46. Nyctaginaceae",
    "Dicotiledóneas del Grupo E.",
    "Hojas opuestas simples; estambres 1-5."
  ),
  symplocaceae: family(
    "symplocaceae",
    "105. Symplocaceae",
    "Dicotiledóneas del Grupo E.",
    "Estambres muy numerosos; también aparece con ovario ínfero y estambres más de 10."
  ),
  thymelaeaceae: family(
    "thymelaeaceae",
    "93. Thymelaeaceae",
    "Dicotiledóneas del Grupo E.",
    "Estambres en número doble a las divisiones del perigonio."
  ),
  myrsinaceae: family(
    "myrsinaceae",
    "101. Myrsinaceae",
    "Dicotiledóneas del Grupo E.",
    "Árboles con ovario unilocular y estambres opuestos a los pétalos."
  ),
  sapotaceae: family(
    "sapotaceae",
    "104. Sapotaceae",
    "Dicotiledóneas del Grupo E.",
    "Árboles con ovario 4-locular y estambres opuestos a los pétalos."
  ),
  primulaceae: family(
    "primulaceae",
    "102. Primulaceae",
    "Dicotiledóneas del Grupo E.",
    "Hierbas con óvulos numerosos."
  ),
  plumbaginaceae: family(
    "plumbaginaceae",
    "103. Plumbaginaceae",
    "Dicotiledóneas del Grupo E.",
    "Hierbas con óvulo solitario."
  ),
  oleaceae: family(
    "oleaceae",
    "106. Oleaceae",
    "Dicotiledóneas del Grupo E.",
    "Estambres 2."
  ),
  apocynaceae: family(
    "apocynaceae",
    "109. Apocynaceae",
    "Dicotiledóneas del Grupo E.",
    "Gineceo formado por dos ovarios separados unidos por el estilo."
  ),
  gentianaceae: family(
    "gentianaceae",
    "108. Gentianaceae",
    "Dicotiledóneas del Grupo E.",
    "Hojas opuestas y ovario unilocular."
  ),
  loganiaceae: family(
    "loganiaceae",
    "107. Loganiaceae",
    "Dicotiledóneas del Grupo E.",
    "Hojas opuestas y ovario 2-4-locular."
  ),
  plantaginaceae: family(
    "plantaginaceae",
    "122. Plantaginaceae",
    "Dicotiledóneas del Grupo E.",
    "Flores tetrámeras, corola membranosa poco llamativa, hojas en roseta y flores en espigas."
  ),
  hydrophyllaceae: family(
    "hydrophyllaceae",
    "112. Hydrophyllaceae",
    "Dicotiledóneas del Grupo E.",
    "Inflorescencias escorpioides y estilo profundamente bífido."
  ),
  convolvulaceae: family(
    "convolvulaceae",
    "111. Convolvulaceae",
    "Dicotiledóneas del Grupo E.",
    "Óvulos generalmente 2 por carpelo, erectos desde la base del lóculo."
  ),
  solanaceae: family(
    "solanaceae",
    "116. Solanaceae",
    "Dicotiledóneas del Grupo E.",
    "Óvulos generalmente más de dos por carpelo sobre placentas axilares."
  ),
  aristolochiaceae: family(
    "aristolochiaceae",
    "42. Aristolochiaceae",
    "Dicotiledóneas del Grupo E.",
    "Ovario ínfero; perigonio corolino tubuloso cigomorfo; estambres y gineceo unidos."
  ),
  compositae: family(
    "compositae",
    "130. Compositae",
    "Dicotiledóneas del Grupo E.",
    "Flores en capítulos; ovario unilocular uniovulado; anteras unidas en tubo y estilo bífido."
  ),
  calyceraceae: family(
    "calyceraceae",
    "129. Calyceraceae",
    "Dicotiledóneas del Grupo E.",
    "Flores en capítulos; ovario unilocular y flores pentámeras actinomorfas."
  ),
  dipsacaceae: family(
    "dipsacaceae",
    "126. Dipsacaceae",
    "Dicotiledóneas del Grupo E.",
    "Flores en capítulos; ovario unilocular y flores cigomorfas."
  ),
  cucurbitaceae: family(
    "cucurbitaceae",
    "127. Cucurbitaceae",
    "Dicotiledóneas del Grupo E.",
    "Ovario ínfero; flores no en capítulos; plantas dioicas."
  ),
  valerianaceae: family(
    "valerianaceae",
    "125. Valerianaceae",
    "Dicotiledóneas del Grupo E.",
    "Cáliz en forma de papus plumoso; estambres 3."
  ),
  campanulaceae: family(
    "campanulaceae",
    "128. Campanulaceae",
    "Dicotiledóneas del Grupo E.",
    "Anteras más o menos unidas formando un tubo."
  ),
  caprifoliaceae: family(
    "caprifoliaceae",
    "124. Caprifoliaceae",
    "Dicotiledóneas del Grupo E.",
    "Corola cigomorfa grande o, con corola actinomorfa, hojas pinaticompuestas."
  ),
};

export const manualKeyData: Record<string, CladoNode> = {
  root: {
    id: "root",
    descripcion: "¿La planta tiene flores o semillas?",
    opcionA: {
      label: "No tiene flores ni semillas; se reproduce por esporas (Pteridophyta)",
      keyStep: "I",
      nextNodeId: "pteridophyta_a",
    },
    opcionA_prima: {
      label: "Tiene flores o semillas (Spermatophyta)",
      keyStep: "II",
      nextNodeId: "spermatophyta_a",
    },
  },
  pteridophyta_a: {
    id: "pteridophyta_a",
    milestone: "Pteridophyta",
    manualPage: 10,
    descripcion: "Pteridophyta: ¿es una planta acuática o terrestre?",
    opcionA: {
      label: "Acuática, flotante o arraigada; a veces de terrenos pantanosos",
      keyStep: "A",
      nextNodeId: "pteridophyta_b",
    },
    opcionA_prima: {
      label: "Terrestre; a veces de suelos pantanosos, pero no acuática",
      keyStep: "A'",
      nextNodeId: "pteridophyta_d",
    },
  },
  pteridophyta_b: {
    id: "pteridophyta_b",
    descripcion: "¿Dónde están los esporangios?",
    opcionA: {
      label: "En esporocarpos",
      keyStep: "B",
      nextNodeId: "pteridophyta_c",
    },
    opcionA_prima: {
      label: "En cavidades o foveas en la base de hojas subuladas",
      keyStep: "B'",
      nextNodeId: "isoetaceae_terminal",
    },
  },
  pteridophyta_c: {
    id: "pteridophyta_c",
    descripcion: "¿Cómo es el hábito de la planta acuática?",
    opcionA: {
      label: "Flotante, libre (Salviniaceae)",
      keyStep: "C",
      nextNodeId: "salviniaceae_a",
    },
    opcionA_prima: {
      label: "Arraigada en el fondo o en suelo pantanoso (Marsiliaceae)",
      keyStep: "C'",
      nextNodeId: "marsiliaceae_a",
    },
  },
  pteridophyta_d: {
    id: "pteridophyta_d",
    descripcion: "Pteridophyta terrestre: ¿tiene hojas desarrolladas?",
    opcionA: {
      label: "Planta áfila, con hojas reducidas a escamas; ramificación verticilada",
      keyStep: "D",
      nextNodeId: "equisetaceae_terminal",
    },
    opcionA_prima: {
      label: "Planta con hojas; ramificación no verticilada",
      keyStep: "D'",
      nextNodeId: "pteridophyta_e",
    },
  },
  pteridophyta_e: {
    id: "pteridophyta_e",
    descripcion: "¿Cómo es la ramificación y el tamaño de las hojas?",
    opcionA: {
      label: "Ramificación dicotómica; hojas muy pequeñas",
      keyStep: "E",
      nextNodeId: "selaginellaceae_a",
    },
    opcionA_prima: {
      label: "Ramificación no dicotómica; hojas generalmente grandes",
      keyStep: "E'",
      nextNodeId: "pteridophyta_f",
    },
  },
  pteridophyta_f: {
    id: "pteridophyta_f",
    descripcion: "¿Dónde se disponen los esporangios?",
    opcionA: {
      label: "Sobre la cara inferior de las hojas, con anillo vertical",
      keyStep: "F",
      nextNodeId: "polypodiaceae_a",
    },
    opcionA_prima: {
      label: "Sobre hojas reducidas a la nervadura, formando espigas o panojas",
      keyStep: "F'",
      nextNodeId: "pteridophyta_g",
    },
  },
  pteridophyta_g: {
    id: "pteridophyta_g",
    descripcion: "¿Los esporangios tienen anillo de dehiscencia apical?",
    opcionA: {
      label: "Sí, con anillo apical",
      keyStep: "G",
      nextNodeId: "schizaeaceae_terminal",
    },
    opcionA_prima: {
      label: "No, sin anillo o con anillo transversal incompleto",
      keyStep: "G'",
      nextNodeId: "pteridophyta_h",
    },
  },
  pteridophyta_h: {
    id: "pteridophyta_h",
    descripcion: "¿La planta es pigmea o robusta?",
    opcionA: {
      label: "Pigmea; esporangios en espigas densas",
      keyStep: "H",
      nextNodeId: "ophioglossaceae_terminal",
    },
    opcionA_prima: {
      label: "Robusta; esporangios en pínulas superiores reducidas al raquis",
      keyStep: "H'",
      nextNodeId: "osmundaceae_terminal",
    },
  },
  isoetaceae_terminal: {
    id: "isoetaceae_terminal",
    milestone: "Isoetaceae",
    manualPage: 19,
    descripcion: "Isoetaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Isoetes ekmanii",
      keyStep: "1",
      especieId: "isoetes_ekmanii",
    },
    opcionA_prima: {
      label: "Identificar como Isoetes ekmanii",
      keyStep: "1",
      especieId: "isoetes_ekmanii",
    },
    especie: manualFamilyData.isoetes_ekmanii,
  },
  equisetaceae_terminal: {
    id: "equisetaceae_terminal",
    milestone: "Equisetaceae",
    manualPage: 20,
    descripcion: "Equisetaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Equisetum giganteum",
      keyStep: "1",
      especieId: "equisetum_giganteum",
    },
    opcionA_prima: {
      label: "Identificar como Equisetum giganteum",
      keyStep: "1",
      especieId: "equisetum_giganteum",
    },
    especie: manualFamilyData.equisetum_giganteum,
  },
  selaginellaceae_a: {
    id: "selaginellaceae_a",
    milestone: "Selaginellaceae",
    manualPage: 21,
    descripcion: "Selaginellaceae - A: ¿las hojas son auriculadas y cómo son los tallos?",
    opcionA: {
      label: "Hojas no auriculadas; tallos filiformes no articulados; rizóforos ventrales",
      keyStep: "A",
      especieId: "selaginella_muscosa",
    },
    opcionA_prima: {
      label: "Hojas auriculadas, con margen blanquecino; tallos articulados; rizóforos dorsales extraaxilares",
      keyStep: "A'",
      especieId: "selaginella_marginata",
    },
  },
  schizaeaceae_terminal: {
    id: "schizaeaceae_terminal",
    milestone: "Schizaeaceae",
    manualPage: 23,
    descripcion: "Schizaeaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Aneimia tweediana",
      keyStep: "1",
      especieId: "aneimia_tweediana",
    },
    opcionA_prima: {
      label: "Identificar como Aneimia tweediana",
      keyStep: "1",
      especieId: "aneimia_tweediana",
    },
    especie: manualFamilyData.aneimia_tweediana,
  },
  ophioglossaceae_terminal: {
    id: "ophioglossaceae_terminal",
    milestone: "Ophioglossaceae",
    manualPage: 24,
    descripcion: "Ophioglossaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Ophioglossum crotalophoroides",
      keyStep: "1",
      especieId: "ophioglossum_crotalophoroides",
    },
    opcionA_prima: {
      label: "Identificar como Ophioglossum crotalophoroides",
      keyStep: "1",
      especieId: "ophioglossum_crotalophoroides",
    },
    especie: manualFamilyData.ophioglossum_crotalophoroides,
  },
  osmundaceae_terminal: {
    id: "osmundaceae_terminal",
    milestone: "Osmundaceae",
    manualPage: 25,
    descripcion: "Osmundaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Osmunda palustris",
      keyStep: "1",
      especieId: "osmunda_palustris",
    },
    opcionA_prima: {
      label: "Identificar como Osmunda palustris",
      keyStep: "1",
      especieId: "osmunda_palustris",
    },
    especie: manualFamilyData.osmunda_palustris,
  },
  polypodiaceae_a: {
    id: "polypodiaceae_a",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - A: ¿los soros están descubiertos o cubiertos por indusio?",
    opcionA: {
      label: "Soros descubiertos, sin indusio o con indusio rudimentario no apreciable",
      keyStep: "A",
      nextNodeId: "polypodiaceae_b",
    },
    opcionA_prima: {
      label: "Soros cubiertos por un indusio",
      keyStep: "A'",
      nextNodeId: "polypodiaceae_e",
    },
  },
  polypodiaceae_b: {
    id: "polypodiaceae_b",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - B: con soros descubiertos, ¿cómo se disponen las hojas?",
    opcionA: {
      label: "Hojas distantes entre sí, articuladas sobre tallo rastrero o rizoma",
      keyStep: "B",
      nextNodeId: "polypodium_a",
    },
    opcionA_prima: {
      label: "Hojas amontonadas hacia el extremo de un rizoma, generalmente pinatisectas o pinaticompuestas",
      keyStep: "B'",
      nextNodeId: "polypodiaceae_c",
    },
  },
  polypodiaceae_c: {
    id: "polypodiaceae_c",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - C: ¿cómo son los soros?",
    opcionA: {
      label: "Soros alargados, extendiéndose a lo largo de las nervaduras; hojas gráciles muy divididas",
      keyStep: "C",
      especieId: "anogramma_chaerophylla",
    },
    opcionA_prima: {
      label: "Soros circulares; hojas por lo común bipinatisectas",
      keyStep: "C'",
      nextNodeId: "polypodiaceae_d",
    },
  },
  polypodiaceae_d: {
    id: "polypodiaceae_d",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - D: con soros circulares, ¿cómo son las pinas?",
    opcionA: {
      label: "Pinas divididas en tres segmentos oblongo-lanceolados, enteros",
      keyStep: "D",
      especieId: "trismeria_trifoliata",
    },
    opcionA_prima: {
      label: "Pinas lanceoladas, crenadas, lobadas o pinatisectas, con numerosos segmentos",
      keyStep: "D'",
      nextNodeId: "dryopteris_a",
    },
  },
  polypodiaceae_e: {
    id: "polypodiaceae_e",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - E: ¿el indusio está formado por el borde revoluto de la hoja?",
    opcionA: {
      label: "Indusio formado por el borde revoluto de la hoja",
      keyStep: "E",
      nextNodeId: "polypodiaceae_f",
    },
    opcionA_prima: {
      label: "Indusio membranoso, no formado por el borde revoluto de la hoja",
      keyStep: "E'",
      nextNodeId: "polypodiaceae_j",
    },
  },
  polypodiaceae_f: {
    id: "polypodiaceae_f",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - F: con borde revoluto, ¿cómo son los soros?",
    opcionA: {
      label: "Soros muy alargados, continuos a lo largo del borde de las divisiones de la hoja",
      keyStep: "F",
      nextNodeId: "polypodiaceae_g",
    },
    opcionA_prima: {
      label: "Soros reniformes o circulares en el extremo o borde de los lóbulos de las pinas",
      keyStep: "F'",
      nextNodeId: "polypodiaceae_h",
    },
  },
  polypodiaceae_g: {
    id: "polypodiaceae_g",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - G: con soros muy alargados, ¿hay indusio inferior?",
    opcionA: {
      label: "Soros entre el borde revoluto y un indusio inferior; frondas tri- o tetrapinatisectas",
      keyStep: "G",
      especieId: "pteridium_aquilinum_arachnoideum",
    },
    opcionA_prima: {
      label: "Soros bajo el borde revoluto, sin indusio inferior; hojas generalmente pinadas o bipinadas",
      keyStep: "G'",
      nextNodeId: "pteris_a",
    },
  },
  polypodiaceae_h: {
    id: "polypodiaceae_h",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - H: ¿cómo son las pínulas?",
    opcionA: {
      label: "Pínulas cuneiformes o flabeladas, palmatilobadas",
      keyStep: "H",
      especieId: "adiantum_cuneatum",
    },
    opcionA_prima: {
      label: "Pínulas oblongas",
      keyStep: "H'",
      especieId: "adiantopsis_chlorophylla",
    },
  },
  polypodiaceae_j: {
    id: "polypodiaceae_j",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - J: con indusio membranoso, ¿cómo se disponen los soros?",
    opcionA: {
      label: "Soros alargados, paralelos a la nervadura central",
      keyStep: "J",
      especieId: "blechnum_auriculatum",
    },
    opcionA_prima: {
      label: "Soros alargados o no, paralelos a nervaduras secundarias o insertos sobre ellas",
      keyStep: "J'",
      nextNodeId: "polypodiaceae_k",
    },
  },
  polypodiaceae_k: {
    id: "polypodiaceae_k",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - K: ¿los soros son muy alargados o redondeados?",
    opcionA: {
      label: "Soros muy alargados",
      keyStep: "K",
      nextNodeId: "asplenium_a",
    },
    opcionA_prima: {
      label: "Soros redondeados, semicirculares o arriñonados",
      keyStep: "K'",
      nextNodeId: "polypodiaceae_l",
    },
  },
  polypodiaceae_l: {
    id: "polypodiaceae_l",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - L: ¿las nervaduras llegan hasta el borde de la hoja?",
    opcionA: {
      label: "Las nervaduras no llegan hasta el borde de la hoja y algunas terminan en un soro",
      keyStep: "L",
      especieId: "nephrolepis_cordifolia",
    },
    opcionA_prima: {
      label: "Las nervaduras llegan hasta el borde de la hoja; soros insertos lateralmente o sobre la nervadura",
      keyStep: "L'",
      nextNodeId: "polypodiaceae_m",
    },
  },
  polypodiaceae_m: {
    id: "polypodiaceae_m",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - M: ¿dónde se ubican los soros respecto del margen?",
    opcionA: {
      label: "Soros muy próximos al margen, insertos lateralmente respecto de la nervadura",
      keyStep: "M",
      especieId: "athyrium_decurtatum_platense",
    },
    opcionA_prima: {
      label: "Soros no próximos al margen, insertos sobre la nervadura",
      keyStep: "M'",
      nextNodeId: "polypodiaceae_n",
    },
  },
  polypodiaceae_n: {
    id: "polypodiaceae_n",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - N: ¿cómo se inserta el indusio?",
    opcionA: {
      label: "Indusio peltado, inserto por su centro",
      keyStep: "N",
      nextNodeId: "polypodiaceae_o",
    },
    opcionA_prima: {
      label: "Indusio reniforme o cordiforme, inserto por su borde o por una escotadura",
      keyStep: "N'",
      nextNodeId: "polypodiaceae_p",
    },
  },
  polypodiaceae_o: {
    id: "polypodiaceae_o",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - O: con indusio peltado, ¿las nervaduras son anastomosadas?",
    opcionA: {
      label: "Nervaduras no anastomosadas; frondas bi- o tripinatisectas",
      keyStep: "O",
      especieId: "polystichum_adiantiforme",
    },
    opcionA_prima: {
      label: "Nervaduras anastomosadas; frondas simplemente pinadas",
      keyStep: "O'",
      especieId: "phanerophlebia_falcata",
    },
  },
  polypodiaceae_p: {
    id: "polypodiaceae_p",
    milestone: "Polypodiaceae",
    manualPage: 26,
    descripcion: "Polypodiaceae - P: con indusio reniforme o cordiforme, ¿cómo se inserta?",
    opcionA: {
      label: "Indusio reniforme, inserto por la escotadura",
      keyStep: "P",
      nextNodeId: "dryopteris_a",
    },
    opcionA_prima: {
      label: "Indusio ovado, inserto por uno de sus bordes",
      keyStep: "P'",
      especieId: "cystopteris_fragilis",
    },
  },
  polypodium_a: {
    id: "polypodium_a",
    milestone: "Polypodium",
    manualPage: 27,
    descripcion: "Polypodium - A: ¿cómo son las hojas?",
    opcionA: {
      label: "Hojas enteras, dimorfas y glabras; hojas fértiles lanceoladas",
      keyStep: "A",
      especieId: "polypodium_vaccinifolium",
    },
    opcionA_prima: {
      label: "Hojas pinatisectas, con segmentos opuestos en 9-11 pares y segmento terminal",
      keyStep: "A'",
      especieId: "polypodium_polypodioides_minus",
    },
  },
  dryopteris_a: {
    id: "dryopteris_a",
    milestone: "Dryopteris",
    manualPage: 29,
    descripcion: "Dryopteris - A: ¿cómo son las pinas?",
    opcionA: {
      label: "Pinas profundamente partidas, con segmentos oblongos angostos",
      keyStep: "A",
      nextNodeId: "dryopteris_b",
    },
    opcionA_prima: {
      label: "Pinas crenadas o lobadas, con lóbulos redondeados anchos",
      keyStep: "A'",
      nextNodeId: "dryopteris_c",
    },
  },
  dryopteris_b: {
    id: "dryopteris_b",
    milestone: "Dryopteris",
    manualPage: 29,
    descripcion: "Dryopteris - B: con pinas profundamente partidas, ¿cómo son hojas, pecíolo y raquis?",
    opcionA: {
      label: "Hojas de 60-80 cm; base del pecíolo con mechón de escamas rojizas; raquis con pelos escamosos",
      keyStep: "B",
      especieId: "dryopteris_submarginalis",
    },
    opcionA_prima: {
      label: "Hojas de 30-50 cm; pecíolo con escamas rojizas esparcidas; raquis sin pelos escamosos",
      keyStep: "B'",
      especieId: "dryopteris_argentina",
    },
  },
  dryopteris_c: {
    id: "dryopteris_c",
    milestone: "Dryopteris",
    manualPage: 29,
    descripcion: "Dryopteris - C: con pinas crenadas o lobadas, ¿cómo son las hojas y nervaduras?",
    opcionA: {
      label: "Hojas de 20-50 cm, glabras; pinas crenadas; nervaduras ramificadas y anastomosadas",
      keyStep: "C",
      especieId: "dryopteris_riograndensis",
    },
    opcionA_prima: {
      label: "Hojas de cerca de 1 m; pinas 20-30-yugas, lanceolado-lineales, con lóbulos redondeados",
      keyStep: "C'",
      especieId: "dryopteris_gongylodes",
    },
  },
  pteris_a: {
    id: "pteris_a",
    milestone: "Pteris",
    manualPage: 31,
    descripcion: "Pteris - A: ¿cómo están divididas las hojas?",
    opcionA: {
      label: "Hojas simplemente pinadas; rizoma horizontal rastrero",
      keyStep: "A",
      nextNodeId: "pteris_b",
    },
    opcionA_prima: {
      label: "Hojas 2-3-pinadas; rizoma erecto corto",
      keyStep: "A'",
      especieId: "pteris_tremula",
    },
  },
  pteris_b: {
    id: "pteris_b",
    milestone: "Pteris",
    manualPage: 31,
    descripcion: "Pteris - B: con hojas simplemente pinadas, ¿cómo son las pinas y el raquis?",
    opcionA: {
      label: "Pinas numerosas, enteras, lineales; raquis con pelos escamosos lineales",
      keyStep: "B",
      especieId: "pteris_longifolia",
    },
    opcionA_prima: {
      label: "Pinas inferiores bífidas o trífidas; raquis glabro",
      keyStep: "B'",
      nextNodeId: "pteris_c",
    },
  },
  pteris_c: {
    id: "pteris_c",
    milestone: "Pteris",
    manualPage: 31,
    descripcion: "Pteris - C: con raquis glabro, ¿el raquis foliar es alado entre las pinas?",
    opcionA: {
      label: "Raquis foliar alado entre las pinas; pinas lineales, agudas y decurrentes",
      keyStep: "C",
      especieId: "pteris_multifida",
    },
    opcionA_prima: {
      label: "Raquis foliar no alado entre las pinas; hojas ternadas o pinadas con 2-5 pares de pinas",
      keyStep: "C'",
      especieId: "pteris_cretica",
    },
  },
  asplenium_a: {
    id: "asplenium_a",
    milestone: "Asplenium",
    manualPage: 32,
    descripcion: "Asplenium - A: ¿cómo son las hojas y pinas?",
    opcionA: {
      label: "Hojas lanceoladas de 25-60 cm; pinas oblongo-falcadas, asimétricas y aserrado-dentadas",
      keyStep: "A",
      especieId: "asplenium_argentinum",
    },
    opcionA_prima: {
      label: "Hojas de 15-20 cm; pinas rómbico-trapezoidales profundamente aserradas; soros pocos",
      keyStep: "A'",
      especieId: "asplenium_ulbrichtii",
    },
  },
  marsiliaceae_a: {
    id: "marsiliaceae_a",
    milestone: "Marsiliaceae",
    manualPage: 33,
    descripcion: "Marsiliaceae - A: ¿cómo son las hojas? Esta decisión identifica la especie.",
    opcionA: {
      label: "Hojas lineales",
      keyStep: "A",
      especieId: "pilularia_mandonii",
    },
    opcionA_prima: {
      label: "Hojas con lámina 4-foliolada",
      keyStep: "A'",
      especieId: "marsilia_concinna",
    },
  },
  salviniaceae_a: {
    id: "salviniaceae_a",
    milestone: "Salviniaceae",
    manualPage: 35,
    descripcion: "Salviniaceae - A: ¿cómo son las hojas flotantes?",
    opcionA: {
      label: "Hojas de más de 5 mm de largo, dispuestas en rosetas o en series",
      keyStep: "A",
      nextNodeId: "salvinia_a",
    },
    opcionA_prima: {
      label: "Hojas diminutas, de 1 mm o menos, densamente imbricadas sobre un hilo muy ramificado",
      keyStep: "A'",
      especieId: "azolla_filiculoides",
    },
  },
  salvinia_a: {
    id: "salvinia_a",
    milestone: "Salvinia",
    manualPage: 35,
    descripcion: "Salvinia - A: ¿cómo es la base de las hojas flotantes y la disposición de los esporocarpos?",
    opcionA: {
      label: "Hojas profundamente hendidas en la base, algo plegadas; papilas con pelos soldados en el ápice; esporocarpos muy amontonados",
      keyStep: "A",
      especieId: "salvinia_auriculata",
    },
    opcionA_prima: {
      label: "Hojas con escotadura basal poco marcada o nula; papilas con pelitos libres; esporocarpos esparcidos",
      keyStep: "A'",
      especieId: "salvinia_rotundifolia",
    },
  },
  spermatophyta_a: {
    id: "spermatophyta_a",
    milestone: "Spermatophyta",
    manualPage: 37,
    descripcion: "Spermatophyta: ¿los óvulos están desnudos o encerrados en un ovario?",
    opcionA: {
      label: "Óvulos desnudos (Gymnospermae)",
      keyStep: "1",
      nextNodeId: "ephedraceae_a",
    },
    opcionA_prima: {
      label: "Óvulos encerrados en un ovario (Angiospermae)",
      keyStep: "2",
      nextNodeId: "angiosperm_1",
    },
  },
  ephedraceae_a: {
    id: "ephedraceae_a",
    milestone: "Ephedraceae",
    manualPage: 37,
    descripcion: "Ephedraceae - A: ¿cómo son los estróbilos femeninos y las ramas?",
    opcionA: {
      label: "Estróbilos femeninos pedunculados, con 3-5 verticilos de brácteas; ramas péndulas o inclinadas; anteras 6-8",
      keyStep: "A",
      especieId: "ephedra_tweediana",
    },
    opcionA_prima: {
      label: "Estróbilos femeninos sésiles, con 6-10 verticilos de brácteas; ramas semierectas o péndulas; anteras 3",
      keyStep: "A'",
      especieId: "ephedra_triandra",
    },
  },
  dicot_root: {
    id: "dicot_root",
    milestone: "Dicotyledoneae",
    manualPage: 12,
    descripcion: "Dicotyledoneae: ¿cómo son las flores?",
    opcionA: {
      label: "Flores desnudas, sin cáliz ni corola",
      keyStep: "A",
      nextNodeId: "dicot_group_a_1",
    },
    opcionA_prima: {
      label: "Flores con cáliz, corola o perigonio",
      keyStep: "A'",
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
      keyStep: "B'",
      nextNodeId: "dicot_corolla_1",
    },
  },
  dicot_corolla_1: {
    id: "dicot_corolla_1",
    descripcion: "¿Las piezas de la corola o perigonio son libres o soldadas?",
    opcionA: {
      label: "Libres entre sí",
      keyStep: "C",
      nextNodeId: "dicot_free_corolla_1",
    },
    opcionA_prima: {
      label: "Más o menos soldadas entre sí (Grupo E)",
      keyStep: "C'",
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
      keyStep: "D'",
      nextNodeId: "dicot_group_pending_d",
    },
  },
  dicot_group_a_1: {
    id: "dicot_group_a_1",
    milestone: "Grupo A",
    manualPage: 12,
    descripcion: "Grupo A: ¿la planta es sumergida con hojas verticiladas divididas dicotómicamente?",
    opcionA: {
      label: "Sí",
      keyStep: "A",
      especieId: "ceratophyllaceae",
    },
    opcionA_prima: {
      label: "No; terrestre o acuática, pero con hojas no divididas dicotómicamente",
      keyStep: "A'",
      nextNodeId: "dicot_group_a_2",
    },
  },
  dicot_group_a_2: {
    id: "dicot_group_a_2",
    descripcion: "Grupo A: ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario 3-carpelar, 3-locular; por lo común con látex",
      keyStep: "B",
      especieId: "euphorbiaceae",
    },
    opcionA_prima: {
      label: "Ovario 1-2-carpelar, 1-2-locular o 4-locular",
      keyStep: "B'",
      nextNodeId: "dicot_group_a_3",
    },
  },
  dicot_group_a_3: {
    id: "dicot_group_a_3",
    descripcion: "Grupo A: ¿árbol con hojas alternas o hierba humilde con hojas opuestas?",
    opcionA: {
      label: "Árbol con hojas alternas; ovario unilocular",
      keyStep: "C",
      nextNodeId: "salicaceae_terminal",
    },
    opcionA_prima: {
      label: "Hierba humilde con hojas opuestas",
      keyStep: "C'",
      nextNodeId: "dicot_group_a_4",
    },
  },
  dicot_group_a_4: {
    id: "dicot_group_a_4",
    descripcion: "Grupo A: en hierbas con hojas opuestas, ¿cómo es el ovario y la inflorescencia?",
    opcionA: {
      label: "Ovario 2-4-locular; flores axilares",
      keyStep: "D",
      especieId: "callitrichaceae",
    },
    opcionA_prima: {
      label: "Ovario unilocular; flores en espigas terminales",
      keyStep: "D'",
      nextNodeId: "piperaceae_a",
    },
  },
  salicaceae_terminal: {
    id: "salicaceae_terminal",
    milestone: "Salicaceae",
    manualPage: 165,
    descripcion: "Salicaceae: única especie espontánea citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Salix humboldtiana",
      keyStep: "1",
      especieId: "salix_humboldtiana",
    },
    opcionA_prima: {
      label: "Identificar como Salix humboldtiana",
      keyStep: "1",
      especieId: "salix_humboldtiana",
    },
    especie: manualFamilyData.salix_humboldtiana,
  },
  piperaceae_a: {
    id: "piperaceae_a",
    milestone: "Piperaceae",
    manualPage: 164,
    descripcion: "Peperomia - A: hábito de la planta, hojas e inflorescencias",
    opcionA: {
      label: "Plantas epífitas, decumbentes, de unos 15 cm; hojas opuestas o ternadas, obovado-circulares; espigas terminales solitarias; flores incrustadas en el raquis",
      keyStep: "A",
      especieId: "peperomia_catharinae",
    },
    opcionA_prima: {
      label: "Plantas terrícolas, erectas o ascendentes, rizomatosas, de 10-30 cm; hojas verticiladas; espigas axilares y terminales largas, delgadas y laxas; flores no incrustadas en el raquis",
      keyStep: "A'",
      especieId: "peperomia_comarapana",
    },
  },
  dicot_group_b_a: {
    id: "dicot_group_b_a",
    milestone: "Grupo B",
    manualPage: 13,
    descripcion: "Grupo B - A: ¿las flores están encerradas en un receptáculo globoso o piriforme (sicono)?",
    opcionA: {
      label: "Sí; árboles con látex",
      keyStep: "A",
      nextNodeId: "moraceae_a",
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
      nextNodeId: "moraceae_a",
    },
    opcionA_prima: {
      label: "No; flores en inflorescencias de otros tipos",
      keyStep: "B'",
      nextNodeId: "dicot_group_b_c",
    },
  },
  moraceae_a: {
    id: "moraceae_a",
    milestone: "Moraceae",
    manualPage: 167,
    descripcion: "Moraceae - A: porte e inflorescencia",
    opcionA: {
      label: "Árboles; inflorescencia en sicono",
      keyStep: "A",
      especieId: "ficus_monckii_sanmartinianus",
    },
    opcionA_prima: {
      label: "Hierbas; inflorescencia en capítulo",
      keyStep: "A'",
      especieId: "dorstenia_brasiliensis",
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
      nextNodeId: "ulmaceae_a",
    },
    opcionA_prima: {
      label: "Árboles o arbustos no espinosos; flores dioicas; gineceo 5-∞-carpelar",
      keyStep: "I'",
      especieId: "phytolaccaceae",
    },
  },
  ulmaceae_a: {
    id: "ulmaceae_a",
    milestone: "Ulmaceae",
    manualPage: 166,
    descripcion: "Celtis - A: porte, espinas, hojas y frutos",
    opcionA: {
      label: "Árbol erecto de 4-8 m, con espinas rectas; hojas cortamente pecioladas, ovadas, aserradas, de 8-35 mm; drupas rojas o negruzcas de 6-9 mm",
      keyStep: "A",
      especieId: "celtis_spinosa",
    },
    opcionA_prima: {
      label: "Arbusto apoyante de 4-10 m, con ramas flexuosas y espinas cortas y curvas; hojas ovadas de 4-10 cm; frutos amarillos de 4-6 mm",
      keyStep: "A'",
      especieId: "celtis_iguanea",
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
      nextNodeId: "urticaceae_a",
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
      nextNodeId: "cannabinaceae_terminal",
    },
    opcionA_prima: {
      label: "Plantas monoicas; herbáceas",
      keyStep: "N'",
      nextNodeId: "dicot_group_b_o",
    },
  },
  cannabinaceae_terminal: {
    id: "cannabinaceae_terminal",
    milestone: "Cannabinaceae",
    manualPage: 169,
    descripcion: "Cannabinaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Humulus lupulus",
      keyStep: "1",
      especieId: "humulus_lupulus",
    },
    opcionA_prima: {
      label: "Identificar como Humulus lupulus",
      keyStep: "1",
      especieId: "humulus_lupulus",
    },
    especie: manualFamilyData.humulus_lupulus,
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
      nextNodeId: "urticaceae_a",
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
      nextNodeId: "urticaceae_a",
    },
    opcionA_prima: {
      label: "Estambres rectos; flores unisexuales",
      keyStep: "R'",
      especieId: "chenopodiaceae",
    },
  },
  urticaceae_a: {
    id: "urticaceae_a",
    milestone: "Urticaceae",
    manualPage: 170,
    descripcion: "Urticaceae - A: presencia de pelos urticantes",
    opcionA: {
      label: "Plantas con pelos urticantes",
      keyStep: "A",
      nextNodeId: "urtica_a",
    },
    opcionA_prima: {
      label: "Plantas sin pelos urticantes",
      keyStep: "A'",
      nextNodeId: "urticaceae_b",
    },
  },
  urticaceae_b: {
    id: "urticaceae_b",
    milestone: "Urticaceae",
    manualPage: 170,
    descripcion: "Urticaceae - B: hojas e inflorescencia",
    opcionA: {
      label: "Hojas alternas, o alternas y opuestas, enteras",
      keyStep: "B",
      nextNodeId: "parietaria_a",
    },
    opcionA_prima: {
      label: "Hojas opuestas, dentadas",
      keyStep: "B'",
      especieId: "boehmeria_cylindrica",
    },
  },
  urtica_a: {
    id: "urtica_a",
    milestone: "Urtica",
    manualPage: 171,
    descripcion: "Urtica - A: duración, sexualidad y racimos",
    opcionA: {
      label: "Plantas perennes, dioicas, con hojas ovadas, acuminadas y con grandes dientes; flores en racimos de glomérulos más largos que los pecíolos; perianto pubescente",
      keyStep: "A",
      especieId: "urtica_dioica",
    },
    opcionA_prima: {
      label: "Plantas anuales, monoicas",
      keyStep: "A'",
      nextNodeId: "urtica_b",
    },
  },
  urtica_b: {
    id: "urtica_b",
    milestone: "Urtica",
    manualPage: 171,
    descripcion: "Urtica - B: tipo de cistolitos epidérmicos",
    opcionA: {
      label: "Cistolitos epidérmicos alargados, bacilares; hojas flabelado-circulares, profundamente dentadas; flores amontonadas en las axilas; perianto pubescente sin pelos urticantes",
      keyStep: "B",
      especieId: "urtica_chamaedryoides_circularis",
    },
    opcionA_prima: {
      label: "Cistolitos epidérmicos puntiformes",
      keyStep: "B'",
      nextNodeId: "urtica_c",
    },
  },
  urtica_c: {
    id: "urtica_c",
    milestone: "Urtica",
    manualPage: 171,
    descripcion: "Urtica - C: forma de hojas e inflorescencia",
    opcionA: {
      label: "Hojas ovadas o elípticas, profundamente dentadas o lobuladas; flores dispuestas en racimos cortos; perianto femenino con algún pelo urticante",
      keyStep: "C",
      especieId: "urtica_urens",
    },
    opcionA_prima: {
      label: "Hojas flabeladas, dentadas; flores en glomérulos axilares; perianto de las flores femeninas sin pelos urticantes",
      keyStep: "C'",
      especieId: "urtica_spathulata",
    },
  },
  parietaria_a: {
    id: "parietaria_a",
    milestone: "Parietaria",
    manualPage: 171,
    descripcion: "Parietaria - A: duración, tamaño y perianto femenino",
    opcionA: {
      label: "Plantas anuales, pubescentes, de 10-20 cm; hojas de 15-30 mm por 8-15 mm; perianto de las flores femeninas con pelos ganchudos",
      keyStep: "A",
      especieId: "parietaria_debilis",
    },
    opcionA_prima: {
      label: "Plantas perennes, con tallos ascendentes de 30-40 cm; hojas de 40-60 mm por 20-35 mm; perianto femenino acrescente y pubescente",
      keyStep: "A'",
      especieId: "parietaria_officinalis",
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
      nextNodeId: "dicot_group_c_n",
    },
  },
  dicot_group_c_n: {
    id: "dicot_group_c_n",
    milestone: "Grupo C",
    descripcion: "Grupo C - N: ¿son árboles/arbustos elevados o hierbas/sufrútices/plantas volubles?",
    opcionA: {
      label: "Árboles o arbustos más o menos elevados",
      keyStep: "N",
      nextNodeId: "dicot_group_c_o",
    },
    opcionA_prima: {
      label: "Hierbas, sufrútices o plantas volubles",
      keyStep: "N'",
      nextNodeId: "dicot_group_c_a_lower",
    },
  },
  dicot_group_c_o: {
    id: "dicot_group_c_o",
    milestone: "Grupo C",
    descripcion: "Grupo C - O: en árboles o arbustos, ¿las hojas son compuestas o simples?",
    opcionA: {
      label: "Hojas compuestas",
      keyStep: "O",
      nextNodeId: "dicot_group_c_p",
    },
    opcionA_prima: {
      label: "Hojas simples",
      keyStep: "O'",
      nextNodeId: "dicot_group_c_s",
    },
  },
  dicot_group_c_p: {
    id: "dicot_group_c_p",
    milestone: "Grupo C",
    descripcion: "Grupo C - P: con hojas compuestas, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres 4-5",
      keyStep: "P",
      especieId: "rutaceae",
    },
    opcionA_prima: {
      label: "Estambres 8 a muchos",
      keyStep: "P'",
      nextNodeId: "dicot_group_c_q",
    },
  },
  dicot_group_c_q: {
    id: "dicot_group_c_q",
    milestone: "Grupo C",
    descripcion: "Grupo C - Q: con estambres 8 a muchos, ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario unilocular; estambres 10-∞; fruto legumbre",
      keyStep: "Q",
      especieId: "leguminosae",
    },
    opcionA_prima: {
      label: "Ovario 3-5-locular; estambres 8-10",
      keyStep: "Q'",
      nextNodeId: "dicot_group_c_r",
    },
  },
  dicot_group_c_r: {
    id: "dicot_group_c_r",
    milestone: "Grupo C",
    descripcion: "Grupo C - R: ¿cómo son los folíolos?",
    opcionA: {
      label: "Folíolos grandes, ovados, aserrados",
      keyStep: "R",
      especieId: "sapindaceae",
    },
    opcionA_prima: {
      label: "Folíolos pequeños, oblongos, enteros",
      keyStep: "R'",
      especieId: "zygophyllaceae",
    },
  },
  dicot_group_c_s: {
    id: "dicot_group_c_s",
    milestone: "Grupo C",
    descripcion: "Grupo C - S: con hojas simples, ¿el ovario es 2-5-locular o unilocular?",
    opcionA: {
      label: "Ovario 2-5-locular",
      keyStep: "S",
      nextNodeId: "dicot_group_c_t",
    },
    opcionA_prima: {
      label: "Ovario unilocular",
      keyStep: "S'",
      nextNodeId: "dicot_group_c_x_upper",
    },
  },
  dicot_group_c_t: {
    id: "dicot_group_c_t",
    milestone: "Grupo C",
    descripcion: "Grupo C - T: con ovario 2-5-locular, ¿es 5-locular con estambres monadelfos?",
    opcionA: {
      label: "Ovario 5-locular; estambres monadelfos",
      keyStep: "T",
      especieId: "sterculiaceae",
    },
    opcionA_prima: {
      label: "Ovario 2-4-locular",
      keyStep: "T'",
      nextNodeId: "dicot_group_c_u",
    },
  },
  dicot_group_c_u: {
    id: "dicot_group_c_u",
    milestone: "Grupo C",
    descripcion: "Grupo C - U: con ovario 2-4-locular, ¿las flores son unisexuales o hermafroditas?",
    opcionA: {
      label: "Flores unisexuales",
      keyStep: "U",
      nextNodeId: "dicot_group_c_v",
    },
    opcionA_prima: {
      label: "Flores hermafroditas",
      keyStep: "U'",
      nextNodeId: "dicot_group_c_w",
    },
  },
  dicot_group_c_v: {
    id: "dicot_group_c_v",
    milestone: "Grupo C",
    descripcion: "Grupo C - V: con flores unisexuales, ¿plantas monoicas o dioicas?",
    opcionA: {
      label: "Plantas monoicas; flores diclinas; ovario trilocular",
      keyStep: "V",
      especieId: "euphorbiaceae",
    },
    opcionA_prima: {
      label: "Plantas dioicas; flores tetrámeras; ovario bilocular",
      keyStep: "V'",
      especieId: "celastraceae",
    },
  },
  dicot_group_c_w: {
    id: "dicot_group_c_w",
    milestone: "Grupo C",
    descripcion: "Grupo C - W: con flores hermafroditas, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres muy numerosos",
      keyStep: "W",
      especieId: "tiliaceae",
    },
    opcionA_prima: {
      label: "Estambres 4-10",
      keyStep: "W'",
      nextNodeId: "dicot_group_c_x_middle",
    },
  },
  dicot_group_c_x_middle: {
    id: "dicot_group_c_x_middle",
    milestone: "Grupo C",
    descripcion: "Grupo C - X: con estambres 4-10, ¿plantas espinosas con receptáculo muy cóncavo?",
    opcionA: {
      label: "Plantas espinosas; receptáculo floral muy cóncavo a urceolado; frutos no alados",
      keyStep: "X",
      especieId: "rhamnaceae",
    },
    opcionA_prima: {
      label: "Plantas no espinosas; receptáculo casi plano; frutos trialados",
      keyStep: "X'",
      especieId: "sapindaceae",
    },
  },
  dicot_group_c_x_upper: {
    id: "dicot_group_c_x_upper",
    milestone: "Grupo C",
    descripcion: "Grupo C - X: con ovario unilocular, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres 4-6",
      keyStep: "X",
      nextNodeId: "dicot_group_c_y",
    },
    opcionA_prima: {
      label: "Estambres 9-10",
      keyStep: "X'",
      nextNodeId: "dicot_group_c_z",
    },
  },
  dicot_group_c_y: {
    id: "dicot_group_c_y",
    milestone: "Grupo C",
    descripcion: "Grupo C - Y: con estambres 4-6, ¿son 4 o 6?",
    opcionA: {
      label: "Estambres 4",
      keyStep: "Y",
      especieId: "celastraceae",
    },
    opcionA_prima: {
      label: "Estambres 6",
      keyStep: "Y'",
      especieId: "berberidaceae",
    },
  },
  dicot_group_c_z: {
    id: "dicot_group_c_z",
    milestone: "Grupo C",
    descripcion: "Grupo C - Z: con estambres 9-10, ¿perigonio coralino o cáliz y corola?",
    opcionA: {
      label: "Flores con perigonio coralino; estambres 9; anteras de dehiscencia valvar",
      keyStep: "Z",
      especieId: "lauraceae",
    },
    opcionA_prima: {
      label: "Flores con cáliz y corola; estambres 10; anteras de dehiscencia longitudinal",
      keyStep: "Z'",
      especieId: "anacardiaceae",
    },
  },
  dicot_group_c_a_lower: {
    id: "dicot_group_c_a_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - a: en hierbas/sufrútices/volubles, ¿perigonio coralino o cáliz y corola?",
    opcionA: {
      label: "Flores con perigonio coralino",
      keyStep: "a",
      nextNodeId: "dicot_group_c_b_lower",
    },
    opcionA_prima: {
      label: "Flores con cáliz y corola",
      keyStep: "a'",
      nextNodeId: "dicot_group_c_e_lower",
    },
  },
  dicot_group_c_b_lower: {
    id: "dicot_group_c_b_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - b: con perigonio coralino, ¿hojas con ócrea?",
    opcionA: {
      label: "Hojas con ócrea",
      keyStep: "b",
      especieId: "polygonaceae",
    },
    opcionA_prima: {
      label: "Hojas sin ócrea",
      keyStep: "b'",
      nextNodeId: "dicot_group_c_c_lower",
    },
  },
  dicot_group_c_c_lower: {
    id: "dicot_group_c_c_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - c: sin ócrea, ¿fruto baya o cápsula/utrículo?",
    opcionA: {
      label: "Fruto baya; hojas alternas; flores en racimo",
      keyStep: "c",
      especieId: "phytolaccaceae",
    },
    opcionA_prima: {
      label: "Fruto cápsula o utrículo; hojas generalmente opuestas",
      keyStep: "c'",
      nextNodeId: "dicot_group_c_d_lower",
    },
  },
  dicot_group_c_d_lower: {
    id: "dicot_group_c_d_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - d: con fruto cápsula/utrículo, ¿flores solitarias grandes o inflorescencias densas pequeñas?",
    opcionA: {
      label: "Flores solitarias o subsolitarias, grandes; plantas carnosas",
      keyStep: "d",
      especieId: "aizoaceae",
    },
    opcionA_prima: {
      label: "Flores pequeñas en inflorescencias densas; plantas no carnosas",
      keyStep: "d'",
      especieId: "amaranthaceae",
    },
  },
  dicot_group_c_e_lower: {
    id: "dicot_group_c_e_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - e: con cáliz y corola, ¿plantas volubles o no volubles?",
    opcionA: {
      label: "Plantas volubles, leñosas o herbáceas",
      keyStep: "e",
      nextNodeId: "dicot_group_c_f_lower",
    },
    opcionA_prima: {
      label: "Plantas no volubles",
      keyStep: "e'",
      nextNodeId: "dicot_group_c_j_lower",
    },
  },
  dicot_group_c_f_lower: {
    id: "dicot_group_c_f_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - f: en plantas volubles, ¿hojas enteras o profundamente partidas/compuestas?",
    opcionA: {
      label: "Hojas enteras",
      keyStep: "f",
      nextNodeId: "dicot_group_c_g_lower",
    },
    opcionA_prima: {
      label: "Hojas profundamente partidas o compuestas",
      keyStep: "f'",
      nextNodeId: "dicot_group_c_h_lower",
    },
  },
  dicot_group_c_g_lower: {
    id: "dicot_group_c_g_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - g: con hojas enteras, ¿opuestas o alternas?",
    opcionA: {
      label: "Hojas opuestas",
      keyStep: "g",
      especieId: "malpighiaceae",
    },
    opcionA_prima: {
      label: "Hojas alternas",
      keyStep: "g'",
      especieId: "basellaceae",
    },
  },
  dicot_group_c_h_lower: {
    id: "dicot_group_c_h_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - h: con hojas partidas/compuestas, ¿flores grandes con corona filamentosa?",
    opcionA: {
      label: "Flores grandes, llamativas, con corona filamentosa",
      keyStep: "h",
      especieId: "passifloraceae",
    },
    opcionA_prima: {
      label: "Flores pequeñas, sin apéndices filamentosos en la base de pétalos",
      keyStep: "h'",
      nextNodeId: "dicot_group_c_i_lower",
    },
  },
  dicot_group_c_i_lower: {
    id: "dicot_group_c_i_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - i: en flores pequeñas, ¿estambres 8 o 4-5?",
    opcionA: {
      label: "Estambres 8; gineceo tricarpelar trilocular; hojas trifolioladas o bipinaticompuestas",
      keyStep: "i",
      especieId: "sapindaceae",
    },
    opcionA_prima: {
      label: "Estambres 4-5; gineceo bicarpelar; hojas palmaticompuestas",
      keyStep: "i'",
      especieId: "vitaceae",
    },
  },
  dicot_group_c_j_lower: {
    id: "dicot_group_c_j_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - j: en plantas no volubles, ¿estambres tetradínamos y fruto silicua/silícula?",
    opcionA: {
      label: "Sí; pétalos 4; fruto silicua o silícula",
      keyStep: "j",
      especieId: "cruciferae",
    },
    opcionA_prima: {
      label: "No; estambres no tetradínamos y fruto no silicua",
      keyStep: "j'",
      nextNodeId: "dicot_group_c_k_lower",
    },
  },
  dicot_group_c_k_lower: {
    id: "dicot_group_c_k_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - k: con fruto no silicua, ¿cáliz de 2-3 sépalos o 4-5 sépalos?",
    opcionA: {
      label: "Cáliz formado por 2-3 sépalos",
      keyStep: "k",
      nextNodeId: "dicot_group_c_l_lower",
    },
    opcionA_prima: {
      label: "Cáliz con 4-5 sépalos",
      keyStep: "k'",
      nextNodeId: "dicot_group_c_n_lower",
    },
  },
  dicot_group_c_l_lower: {
    id: "dicot_group_c_l_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - l: con cáliz de 2-3 sépalos, ¿tipo de dehiscencia del fruto?",
    opcionA: {
      label: "Fruto cápsula de dehiscencia poricida o longitudinal",
      keyStep: "l",
      nextNodeId: "dicot_group_c_m_lower",
    },
    opcionA_prima: {
      label: "Fruto cápsula de dehiscencia transversal; plantas sin látex",
      keyStep: "l'",
      especieId: "portulacaceae",
    },
  },
  dicot_group_c_m_lower: {
    id: "dicot_group_c_m_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - m: con dehiscencia poricida/longitudinal, ¿plantas con látex robustas?",
    opcionA: {
      label: "Plantas con látex, robustas",
      keyStep: "m",
      especieId: "papaveraceae",
    },
    opcionA_prima: {
      label: "Plantas sin látex, pigmeas",
      keyStep: "m'",
      especieId: "elatinaceae",
    },
  },
  dicot_group_c_n_lower: {
    id: "dicot_group_c_n_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - n: con cáliz de 4-5 sépalos, ¿estambres más de 12?",
    opcionA: {
      label: "Estambres más de 12",
      keyStep: "n",
      nextNodeId: "dicot_group_c_ene_lower",
    },
    opcionA_prima: {
      label: "Estambres menos de 11",
      keyStep: "n'",
      nextNodeId: "dicot_group_c_o_lower",
    },
  },
  dicot_group_c_ene_lower: {
    id: "dicot_group_c_ene_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - ñ: con estambres más de 12, ¿hojas alternas u opuestas?",
    opcionA: {
      label: "Hojas alternas; filamentos libres o unidos en la base",
      keyStep: "ñ",
      especieId: "resedaceae",
    },
    opcionA_prima: {
      label: "Hojas opuestas; estambres en tres o más manojos",
      keyStep: "ñ'",
      especieId: "guttiferae",
    },
  },
  dicot_group_c_o_lower: {
    id: "dicot_group_c_o_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - o: con estambres menos de 11, ¿ovario unilocular o 2-∞-locular?",
    opcionA: {
      label: "Ovario unilocular",
      keyStep: "o",
      nextNodeId: "dicot_group_c_p_lower",
    },
    opcionA_prima: {
      label: "Ovario 2-∞-locular",
      keyStep: "o'",
      nextNodeId: "dicot_group_c_s_lower",
    },
  },
  dicot_group_c_p_lower: {
    id: "dicot_group_c_p_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - p: con ovario unilocular, ¿placentación central/basilar o parietal?",
    opcionA: {
      label: "Óvulos de placentación central o basilar; hojas opuestas",
      keyStep: "p",
      especieId: "caryophyllaceae",
    },
    opcionA_prima: {
      label: "Óvulos de placentación parietal",
      keyStep: "p'",
      nextNodeId: "dicot_group_c_q_lower",
    },
  },
  dicot_group_c_q_lower: {
    id: "dicot_group_c_q_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - q: con placentación parietal, ¿hojas 3-5-folioladas con estípulas espiniformes?",
    opcionA: {
      label: "Sí",
      keyStep: "q",
      especieId: "capparidaceae",
    },
    opcionA_prima: {
      label: "No; hojas simples",
      keyStep: "q'",
      nextNodeId: "dicot_group_c_r_lower",
    },
  },
  dicot_group_c_r_lower: {
    id: "dicot_group_c_r_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - r: con hojas simples, ¿opuestas o alternas?",
    opcionA: {
      label: "Hojas opuestas",
      keyStep: "r",
      especieId: "frankeniaceae",
    },
    opcionA_prima: {
      label: "Hojas alternas",
      keyStep: "r'",
      especieId: "turneraceae",
    },
  },
  dicot_group_c_s_lower: {
    id: "dicot_group_c_s_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - s: con ovario 2-∞-locular, ¿receptáculo tubuloso?",
    opcionA: {
      label: "Receptáculo tubuloso, verde o coloreado, con pétalos insertos en el borde",
      keyStep: "s",
      especieId: "lythraceae",
    },
    opcionA_prima: {
      label: "Receptáculo a veces algo cóncavo, pero no tubuloso",
      keyStep: "s'",
      nextNodeId: "dicot_group_c_t_lower",
    },
  },
  dicot_group_c_t_lower: {
    id: "dicot_group_c_t_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - t: sin receptáculo tubuloso, ¿hojas trifolioladas con folíolos acorazonados?",
    opcionA: {
      label: "Sí; estambres 10, ovario 5-locular, 5 estilos",
      keyStep: "t",
      especieId: "oxalidaceae",
    },
    opcionA_prima: {
      label: "No; hojas simples o compuestas, pero no trifolioladas",
      keyStep: "t'",
      nextNodeId: "dicot_group_c_u_lower",
    },
  },
  dicot_group_c_u_lower: {
    id: "dicot_group_c_u_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - u: ¿flores unisexuales diclinas o hermafroditas?",
    opcionA: {
      label: "Flores unisexuales, diclinas",
      keyStep: "u",
      especieId: "euphorbiaceae",
    },
    opcionA_prima: {
      label: "Flores hermafroditas",
      keyStep: "u'",
      nextNodeId: "dicot_group_c_v_lower",
    },
  },
  dicot_group_c_v_lower: {
    id: "dicot_group_c_v_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - v: con flores hermafroditas, ¿hojas lineales enteras?",
    opcionA: {
      label: "Hojas lineales, enteras",
      keyStep: "v",
      nextNodeId: "dicot_group_c_w_lower",
    },
    opcionA_prima: {
      label: "Hojas no lineales, aserradas o partidas",
      keyStep: "v'",
      nextNodeId: "dicot_group_c_x_lower",
    },
  },
  dicot_group_c_w_lower: {
    id: "dicot_group_c_w_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - w: con hojas lineales enteras, ¿alternas u opuestas?",
    opcionA: {
      label: "Hojas alternas; plantas robustas",
      keyStep: "w",
      especieId: "linaceae",
    },
    opcionA_prima: {
      label: "Hojas opuestas; plantas pigmeas",
      keyStep: "w'",
      especieId: "elatinaceae",
    },
  },
  dicot_group_c_x_lower: {
    id: "dicot_group_c_x_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - x: con hojas no lineales, ¿flores amarillas y plantas fétidas?",
    opcionA: {
      label: "Flores amarillas; pétalos en forma de cuchara; plantas fétidas",
      keyStep: "x",
      especieId: "rutaceae",
    },
    opcionA_prima: {
      label: "Flores azules o violáceas; pétalos planos; plantas no fétidas",
      keyStep: "x'",
      especieId: "geraniaceae",
    },
  },
  dicot_group_pending_d: {
    id: "dicot_group_pending_d",
    milestone: "Grupo D",
    manualPage: 16,
    descripcion: "Grupo D - A: ¿la planta tiene pelos urticantes?",
    opcionA: {
      label: "Sí",
      keyStep: "A",
      especieId: "loasaceae",
    },
    opcionA_prima: {
      label: "No",
      keyStep: "A'",
      nextNodeId: "dicot_group_d_b",
    },
  },
  dicot_group_d_b: {
    id: "dicot_group_d_b",
    milestone: "Grupo D",
    descripcion: "Grupo D - B: sin pelos urticantes, ¿los estambres son indefinidos o menos de 12?",
    opcionA: {
      label: "Estambres indefinidos",
      keyStep: "B",
      nextNodeId: "dicot_group_d_c",
    },
    opcionA_prima: {
      label: "Estambres menos de 12",
      keyStep: "B'",
      nextNodeId: "dicot_group_d_e",
    },
  },
  dicot_group_d_c: {
    id: "dicot_group_d_c",
    milestone: "Grupo D",
    descripcion: "Grupo D - C: con estambres indefinidos, ¿plantas crasas sin hojas y generalmente espinosas?",
    opcionA: {
      label: "Sí; flores espiraladas",
      keyStep: "C",
      especieId: "cactaceae",
    },
    opcionA_prima: {
      label: "No; plantas con hojas, sin espinas",
      keyStep: "C'",
      nextNodeId: "dicot_group_d_d",
    },
  },
  dicot_group_d_d: {
    id: "dicot_group_d_d",
    milestone: "Grupo D",
    descripcion: "Grupo D - D: con hojas y sin espinas, ¿hierbas o árboles?",
    opcionA: {
      label: "Hierbas; flores unisexuales diclinas",
      keyStep: "D",
      especieId: "begoniaceae",
    },
    opcionA_prima: {
      label: "Árboles; flores hermafroditas",
      keyStep: "D'",
      especieId: "myrtaceae",
    },
  },
  dicot_group_d_e: {
    id: "dicot_group_d_e",
    milestone: "Grupo D",
    descripcion: "Grupo D - E: con estambres menos de 12, ¿el ovario es unilocular o 2-∞-locular?",
    opcionA: {
      label: "Ovario unilocular",
      keyStep: "E",
      nextNodeId: "dicot_group_d_f",
    },
    opcionA_prima: {
      label: "Ovario 2-∞-locular",
      keyStep: "E'",
      nextNodeId: "dicot_group_d_g",
    },
  },
  dicot_group_d_f: {
    id: "dicot_group_d_f",
    milestone: "Grupo D",
    descripcion: "Grupo D - F: con ovario unilocular, ¿plantas parásitas con flores grandes coloreadas?",
    opcionA: {
      label: "Sí",
      keyStep: "F",
      especieId: "loranthaceae",
    },
    opcionA_prima: {
      label: "No; flores pequeñas verdosas",
      keyStep: "F'",
      especieId: "combretaceae",
    },
  },
  dicot_group_d_g: {
    id: "dicot_group_d_g",
    milestone: "Grupo D",
    descripcion: "Grupo D - G: con ovario 2-∞-locular, ¿flores pequeñas en umbelas o capítulos densos?",
    opcionA: {
      label: "Sí; fruto seco dividido en dos mericarpos",
      keyStep: "G",
      especieId: "umbelliferae",
    },
    opcionA_prima: {
      label: "No; flores pequeñas o grandes dispuestas en otra forma",
      keyStep: "G'",
      nextNodeId: "dicot_group_d_h",
    },
  },
  dicot_group_d_h: {
    id: "dicot_group_d_h",
    milestone: "Grupo D",
    descripcion: "Grupo D - H: ¿plantas acuáticas semisumergidas con hojas verticiladas pinatisectas?",
    opcionA: {
      label: "Sí; segmentos lineales",
      keyStep: "H",
      especieId: "haloragaceae",
    },
    opcionA_prima: {
      label: "No; plantas terrestres, rara vez acuáticas con hojas enteras flotantes",
      keyStep: "H'",
      nextNodeId: "dicot_group_d_j",
    },
  },
  dicot_group_d_j: {
    id: "dicot_group_d_j",
    milestone: "Grupo D",
    descripcion: "Grupo D - J: ¿cómo es la dehiscencia de las anteras?",
    opcionA: {
      label: "Dehiscencia longitudinal",
      keyStep: "J",
      nextNodeId: "dicot_group_d_k",
    },
    opcionA_prima: {
      label: "Dehiscencia por poros apicales",
      keyStep: "J'",
      especieId: "melastomaceae",
    },
  },
  dicot_group_d_k: {
    id: "dicot_group_d_k",
    milestone: "Grupo D",
    descripcion: "Grupo D - K: con anteras de dehiscencia longitudinal, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres 5",
      keyStep: "K",
      especieId: "saxifragaceae",
    },
    opcionA_prima: {
      label: "Estambres 4; tubo del cáliz muy largo, a veces prolongado en hipanto",
      keyStep: "K'",
      especieId: "onagraceae",
    },
  },
  dicot_group_pending_e: {
    id: "dicot_group_pending_e",
    milestone: "Grupo E",
    manualPage: 17,
    descripcion: "Grupo E - A: con corola o perigonio más o menos soldado, ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario súpero",
      keyStep: "A",
      nextNodeId: "dicot_group_e_b",
    },
    opcionA_prima: {
      label: "Ovario ínfero",
      keyStep: "A'",
      nextNodeId: "dicot_group_e_b_lower",
    },
  },
  dicot_group_e_b: {
    id: "dicot_group_e_b",
    milestone: "Grupo E",
    descripcion: "Grupo E - B: con ovario súpero, ¿cómo son las flores?",
    opcionA: {
      label: "Flores cigomorfas",
      keyStep: "B",
      nextNodeId: "dicot_group_e_c",
    },
    opcionA_prima: {
      label: "Flores actinomorfas",
      keyStep: "B'",
      nextNodeId: "dicot_group_e_k",
    },
  },
  dicot_group_e_c: {
    id: "dicot_group_e_c",
    milestone: "Grupo E",
    descripcion: "Grupo E - C: con flores cigomorfas, ¿la planta es acuática?",
    opcionA: {
      label: "Plantas acuáticas; hojas sumergidas provistas de ascidias o trampas",
      keyStep: "C",
      especieId: "lentibulariaceae",
    },
    opcionA_prima: {
      label: "Plantas terrestres; hojas sin ascidias ni trampas",
      keyStep: "C'",
      nextNodeId: "dicot_group_e_d",
    },
  },
  dicot_group_e_d: {
    id: "dicot_group_e_d",
    milestone: "Grupo E",
    descripcion: "Grupo E - D: en plantas terrestres con flores cigomorfas, ¿qué hábito y hojas presenta?",
    opcionA: {
      label: "Lianas con hojas compuestas",
      keyStep: "D",
      especieId: "bignoniaceae",
    },
    opcionA_prima: {
      label: "Hierbas, arbustos o árboles, generalmente con hojas simples",
      keyStep: "D'",
      nextNodeId: "dicot_group_e_e",
    },
  },
  dicot_group_e_e: {
    id: "dicot_group_e_e",
    milestone: "Grupo E",
    descripcion: "Grupo E - E: ¿cómo se disponen las hojas?",
    opcionA: {
      label: "Hojas alternas",
      keyStep: "E",
      nextNodeId: "dicot_group_e_f",
    },
    opcionA_prima: {
      label: "Hojas opuestas",
      keyStep: "E'",
      nextNodeId: "dicot_group_e_g",
    },
  },
  dicot_group_e_f: {
    id: "dicot_group_e_f",
    milestone: "Grupo E",
    descripcion: "Grupo E - F: con hojas alternas, ¿cómo es el fruto?",
    opcionA: {
      label: "Fruto drupáceo, con 4 semillas, o deshaciéndose en 4 coquitos",
      keyStep: "F",
      especieId: "borraginaceae",
    },
    opcionA_prima: {
      label: "Fruto cápsula multiseminada",
      keyStep: "F'",
      especieId: "scrophulariaceae",
    },
  },
  dicot_group_e_g: {
    id: "dicot_group_e_g",
    milestone: "Grupo E",
    descripcion: "Grupo E - G: con hojas opuestas, ¿cómo es el fruto?",
    opcionA: {
      label: "Fruto cápsula",
      keyStep: "G",
      nextNodeId: "dicot_group_e_h",
    },
    opcionA_prima: {
      label: "Fruto drupáceo o deshaciéndose en 4 coquitos",
      keyStep: "G'",
      nextNodeId: "dicot_group_e_j",
    },
  },
  dicot_group_e_h: {
    id: "dicot_group_e_h",
    milestone: "Grupo E",
    descripcion: "Grupo E - H: con fruto cápsula, ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario unilocular; fruto cápsula drupácea; placentación parietal",
      keyStep: "H",
      especieId: "martyniaceae",
    },
    opcionA_prima: {
      label: "Ovario bilocular; placentación axilar",
      keyStep: "H'",
      nextNodeId: "dicot_group_e_i",
    },
  },
  dicot_group_e_i: {
    id: "dicot_group_e_i",
    milestone: "Grupo E",
    descripcion: "Grupo E - I: con ovario bilocular, ¿cuántos óvulos tiene cada lóculo?",
    opcionA: {
      label: "Lóculos del ovario con muchos óvulos",
      keyStep: "I",
      especieId: "scrophulariaceae",
    },
    opcionA_prima: {
      label: "Lóculos del ovario con dos óvulos, raramente más",
      keyStep: "I'",
      especieId: "acanthaceae",
    },
  },
  dicot_group_e_j: {
    id: "dicot_group_e_j",
    milestone: "Grupo E",
    descripcion: "Grupo E - J: con fruto drupáceo o en coquitos, ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario 4-lobulado; estilo naciendo entre los cuatro lóbulos; corola notablemente bilabiada",
      keyStep: "J",
      especieId: "labiatae",
    },
    opcionA_prima: {
      label: "Ovario no 4-lobulado, con estilo terminal; flores apenas bilabiadas",
      keyStep: "J'",
      especieId: "verbenaceae",
    },
  },
  dicot_group_e_k: {
    id: "dicot_group_e_k",
    milestone: "Grupo E",
    descripcion: "Grupo E - K: con flores actinomorfas y ovario súpero, ¿hay látex abundante y ginostemio?",
    opcionA: {
      label: "Plantas con látex abundante; androceo y gineceo unidos formando ginostemio; polen en polinias",
      keyStep: "K",
      especieId: "asclepiadaceae",
    },
    opcionA_prima: {
      label: "Plantas sin látex o con látex inconspicuo; androceo y gineceo no unidos en ginostemio; polen no en polinias",
      keyStep: "K'",
      nextNodeId: "dicot_group_e_l",
    },
  },
  dicot_group_e_l: {
    id: "dicot_group_e_l",
    milestone: "Grupo E",
    descripcion: "Grupo E - L: ¿los filamentos de los estambres están soldados con la corola o perigonio?",
    opcionA: {
      label: "Filamentos no soldados con la corola o perigonio",
      keyStep: "L",
      nextNodeId: "dicot_group_e_m",
    },
    opcionA_prima: {
      label: "Filamentos más o menos unidos a la corola",
      keyStep: "L'",
      nextNodeId: "dicot_group_e_n",
    },
  },
  dicot_group_e_m: {
    id: "dicot_group_e_m",
    milestone: "Grupo E",
    descripcion: "Grupo E - M: con filamentos no soldados, ¿cómo son las hojas y cuántos estambres hay?",
    opcionA: {
      label: "Hojas opuestas, simples; estambres 1-5",
      keyStep: "M",
      especieId: "nyctaginaceae",
    },
    opcionA_prima: {
      label: "Hojas alternas, compuestas; estambres 5 a numerosos",
      keyStep: "M'",
      especieId: "leguminosae",
    },
  },
  dicot_group_e_n: {
    id: "dicot_group_e_n",
    milestone: "Grupo E",
    descripcion: "Grupo E - N: con filamentos unidos a la corola, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres muy numerosos",
      keyStep: "N",
      especieId: "symplocaceae",
    },
    opcionA_prima: {
      label: "Estambres 2-12",
      keyStep: "N'",
      nextNodeId: "dicot_group_e_o",
    },
  },
  dicot_group_e_o: {
    id: "dicot_group_e_o",
    milestone: "Grupo E",
    descripcion: "Grupo E - O: ¿cómo se relaciona el número de estambres con las divisiones del perigonio o corola?",
    opcionA: {
      label: "Estambres en número doble a las divisiones del perigonio",
      keyStep: "O",
      especieId: "thymelaeaceae",
    },
    opcionA_prima: {
      label: "Estambres en el mismo número que las divisiones de la corola",
      keyStep: "O'",
      nextNodeId: "dicot_group_e_p",
    },
  },
  dicot_group_e_p: {
    id: "dicot_group_e_p",
    milestone: "Grupo E",
    descripcion: "Grupo E - P: ¿los estambres están opuestos o alternos con los pétalos?",
    opcionA: {
      label: "Estambres opuestos a los pétalos",
      keyStep: "P",
      nextNodeId: "dicot_group_e_q",
    },
    opcionA_prima: {
      label: "Estambres alternos con los pétalos",
      keyStep: "P'",
      nextNodeId: "dicot_group_e_t",
    },
  },
  dicot_group_e_q: {
    id: "dicot_group_e_q",
    milestone: "Grupo E",
    descripcion: "Grupo E - Q: con estambres opuestos a los pétalos, ¿árboles o hierbas?",
    opcionA: {
      label: "Árboles",
      keyStep: "Q",
      nextNodeId: "dicot_group_e_r",
    },
    opcionA_prima: {
      label: "Hierbas",
      keyStep: "Q'",
      nextNodeId: "dicot_group_e_s",
    },
  },
  dicot_group_e_r: {
    id: "dicot_group_e_r",
    milestone: "Grupo E",
    descripcion: "Grupo E - R: en árboles, ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario unilocular",
      keyStep: "R",
      especieId: "myrsinaceae",
    },
    opcionA_prima: {
      label: "Ovario 4-locular",
      keyStep: "R'",
      especieId: "sapotaceae",
    },
  },
  dicot_group_e_s: {
    id: "dicot_group_e_s",
    milestone: "Grupo E",
    descripcion: "Grupo E - S: en hierbas, ¿cuántos óvulos hay?",
    opcionA: {
      label: "Óvulos numerosos",
      keyStep: "S",
      especieId: "primulaceae",
    },
    opcionA_prima: {
      label: "Óvulo solitario",
      keyStep: "S'",
      especieId: "plumbaginaceae",
    },
  },
  dicot_group_e_t: {
    id: "dicot_group_e_t",
    milestone: "Grupo E",
    descripcion: "Grupo E - T: con estambres alternos con los pétalos, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres 2",
      keyStep: "T",
      especieId: "oleaceae",
    },
    opcionA_prima: {
      label: "Estambres 4-5",
      keyStep: "T'",
      nextNodeId: "dicot_group_e_u",
    },
  },
  dicot_group_e_u: {
    id: "dicot_group_e_u",
    milestone: "Grupo E",
    descripcion: "Grupo E - U: con estambres 4-5, ¿cómo se disponen las hojas?",
    opcionA: {
      label: "Hojas opuestas",
      keyStep: "U",
      nextNodeId: "dicot_group_e_v",
    },
    opcionA_prima: {
      label: "Hojas alternas o en roseta basal",
      keyStep: "U'",
      nextNodeId: "dicot_group_e_x",
    },
  },
  dicot_group_e_v: {
    id: "dicot_group_e_v",
    milestone: "Grupo E",
    descripcion: "Grupo E - V: con hojas opuestas, ¿cómo está formado el gineceo?",
    opcionA: {
      label: "Gineceo formado por dos ovarios separados, unidos por el estilo",
      keyStep: "V",
      especieId: "apocynaceae",
    },
    opcionA_prima: {
      label: "Gineceo constituido por un solo ovario",
      keyStep: "V'",
      nextNodeId: "dicot_group_e_w",
    },
  },
  dicot_group_e_w: {
    id: "dicot_group_e_w",
    milestone: "Grupo E",
    descripcion: "Grupo E - W: con un solo ovario, ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario unilocular",
      keyStep: "W",
      especieId: "gentianaceae",
    },
    opcionA_prima: {
      label: "Ovario 2-4-locular",
      keyStep: "W'",
      especieId: "loganiaceae",
    },
  },
  dicot_group_e_x: {
    id: "dicot_group_e_x",
    milestone: "Grupo E",
    descripcion: "Grupo E - X: con hojas alternas o en roseta basal, ¿cómo son las flores?",
    opcionA: {
      label: "Flores tetrámeras; corola membranosa, poco llamativa; hojas en roseta; flores en espigas",
      keyStep: "X",
      especieId: "plantaginaceae",
    },
    opcionA_prima: {
      label: "Flores pentámeras; corola llamativa; hojas generalmente alternas",
      keyStep: "X'",
      nextNodeId: "dicot_group_e_y",
    },
  },
  dicot_group_e_y: {
    id: "dicot_group_e_y",
    milestone: "Grupo E",
    descripcion: "Grupo E - Y: con flores pentámeras, ¿cómo se disponen las flores?",
    opcionA: {
      label: "Flores dispuestas en espigas o racimos unilaterales escorpioides",
      keyStep: "Y",
      nextNodeId: "dicot_group_e_z",
    },
    opcionA_prima: {
      label: "Flores solitarias o en cimas, nunca en inflorescencias escorpioides",
      keyStep: "Y'",
      nextNodeId: "dicot_group_e_a_lowercase",
    },
  },
  dicot_group_e_z: {
    id: "dicot_group_e_z",
    milestone: "Grupo E",
    descripcion: "Grupo E - Z: con inflorescencias escorpioides, ¿cómo es el estilo?",
    opcionA: {
      label: "Estilo profundamente bífido",
      keyStep: "Z",
      especieId: "hydrophyllaceae",
    },
    opcionA_prima: {
      label: "Estilo indiviso o cortamente bilobado",
      keyStep: "Z'",
      especieId: "borraginaceae",
    },
  },
  dicot_group_e_a_lowercase: {
    id: "dicot_group_e_a_lowercase",
    milestone: "Grupo E",
    descripcion: "Grupo E - a: con flores solitarias o en cimas, ¿cómo son los óvulos?",
    opcionA: {
      label: "Óvulos generalmente 2, a veces 1-3, en cada carpelo, erectos desde la base del lóculo",
      keyStep: "a",
      especieId: "convolvulaceae",
    },
    opcionA_prima: {
      label: "Óvulos generalmente más de dos en cada carpelo, sobre placentas axilares",
      keyStep: "a'",
      especieId: "solanaceae",
    },
  },
  dicot_group_e_b_lower: {
    id: "dicot_group_e_b_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - b: con ovario ínfero, ¿cómo son las flores?",
    opcionA: {
      label: "Flores con perigonio corolino tubuloso cigomorfo; estambres y gineceo unidos formando un ginostemio",
      keyStep: "b",
      especieId: "aristolochiaceae",
    },
    opcionA_prima: {
      label: "Flores con cáliz y corola o solo con corola; androceo y gineceo no unidos",
      keyStep: "b'",
      nextNodeId: "dicot_group_e_c_lower",
    },
  },
  dicot_group_e_c_lower: {
    id: "dicot_group_e_c_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - c: ¿las flores están dispuestas en capítulos?",
    opcionA: {
      label: "Flores dispuestas en capítulos",
      keyStep: "c",
      nextNodeId: "dicot_group_e_d_lower",
    },
    opcionA_prima: {
      label: "Flores no dispuestas en capítulos",
      keyStep: "c'",
      nextNodeId: "dicot_group_e_g_lower",
    },
  },
  dicot_group_e_d_lower: {
    id: "dicot_group_e_d_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - d: con flores en capítulos, ¿cómo son ovario, estambres y estilo?",
    opcionA: {
      label: "Ovario unilocular, uniovulado; anteras unidas en tubo y filamentos libres; estilo bífido",
      keyStep: "d",
      especieId: "compositae",
    },
    opcionA_prima: {
      label: "Ovario 1 a muchos locular; anteras generalmente libres",
      keyStep: "d'",
      nextNodeId: "dicot_group_e_e_lower",
    },
  },
  dicot_group_e_e_lower: {
    id: "dicot_group_e_e_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - e: con anteras generalmente libres, ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario unilocular; flores pentámeras",
      keyStep: "e",
      nextNodeId: "dicot_group_e_f_lower",
    },
    opcionA_prima: {
      label: "Ovario 2 a muchos locular",
      keyStep: "e'",
      especieId: "rubiaceae",
    },
  },
  dicot_group_e_f_lower: {
    id: "dicot_group_e_f_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - f: con ovario unilocular, ¿cómo son las flores?",
    opcionA: {
      label: "Flores actinomorfas",
      keyStep: "f",
      especieId: "calyceraceae",
    },
    opcionA_prima: {
      label: "Flores cigomorfas",
      keyStep: "f'",
      especieId: "dipsacaceae",
    },
  },
  dicot_group_e_g_lower: {
    id: "dicot_group_e_g_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - g: con flores no dispuestas en capítulos, ¿la planta es dioica o monoica?",
    opcionA: {
      label: "Plantas dioicas",
      keyStep: "g",
      especieId: "cucurbitaceae",
    },
    opcionA_prima: {
      label: "Plantas monoicas; flores por lo común hermafroditas",
      keyStep: "g'",
      nextNodeId: "dicot_group_e_h_lower",
    },
  },
  dicot_group_e_h_lower: {
    id: "dicot_group_e_h_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - h: en plantas monoicas, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres más de 10",
      keyStep: "h",
      especieId: "symplocaceae",
    },
    opcionA_prima: {
      label: "Estambres 3-5",
      keyStep: "h'",
      nextNodeId: "dicot_group_e_i_lower",
    },
  },
  dicot_group_e_i_lower: {
    id: "dicot_group_e_i_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - i: con estambres 3-5, ¿cómo es el cáliz?",
    opcionA: {
      label: "Cáliz en forma de papus plumoso; estambres 3",
      keyStep: "i",
      especieId: "valerianaceae",
    },
    opcionA_prima: {
      label: "Cáliz herbáceo, a veces muy reducido; estambres 4-5",
      keyStep: "i'",
      nextNodeId: "dicot_group_e_j_lower",
    },
  },
  dicot_group_e_j_lower: {
    id: "dicot_group_e_j_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - j: con cáliz herbáceo o reducido, ¿las anteras están unidas?",
    opcionA: {
      label: "Anteras más o menos unidas formando un tubo",
      keyStep: "j",
      especieId: "campanulaceae",
    },
    opcionA_prima: {
      label: "Anteras separadas",
      keyStep: "j'",
      nextNodeId: "dicot_group_e_k_lower",
    },
  },
  dicot_group_e_k_lower: {
    id: "dicot_group_e_k_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - k: con anteras separadas, ¿cómo es la corola?",
    opcionA: {
      label: "Corola cigomorfa, grande",
      keyStep: "k",
      especieId: "caprifoliaceae",
    },
    opcionA_prima: {
      label: "Corola actinomorfa",
      keyStep: "k'",
      nextNodeId: "dicot_group_e_l_lower",
    },
  },
  dicot_group_e_l_lower: {
    id: "dicot_group_e_l_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - l: con corola actinomorfa, ¿cómo son las hojas?",
    opcionA: {
      label: "Hojas pinaticompuestas",
      keyStep: "l",
      especieId: "caprifoliaceae",
    },
    opcionA_prima: {
      label: "Hojas simples",
      keyStep: "l'",
      especieId: "rubiaceae",
    },
  },
};
