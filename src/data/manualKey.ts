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
  ceratophyllum_demersum_oxyacanthum: species(
    "ceratophyllum_demersum_oxyacanthum",
    "Ceratophyllum demersum var. oxyacanthum",
    "53. Ceratophyllaceae",
    "Hierba perenne sumergida, libre, sin raíces.",
    "Hojas verticiladas con segmentos lineales, aserrados en sus bordes; flores diclinas, naciendo en diferentes nudos y supliendo el lugar de una hoja; aquenios con una larga espina terminal y dos espinas laterales dirigidas hacia abajo.",
    "Sur de Brasil y norte de la Argentina. Frecuente en arroyos y lagunas. Nombre vulgar: cola de zorro."
  ),
  euphorbiaceae: family(
    "euphorbiaceae",
    "73. Euphorbiaceae",
    "Dicotiledóneas con caracteres variables.",
    "En la clave aparece por ovario 3-carpelar y látex, o por otros caracteres vegetativos/florales."
  ),
  euphorbia_lathyrus: species(
    "euphorbia_lathyrus",
    "Euphorbia lathyrus",
    "73. Euphorbiaceae",
    "Hierba anual o bienal, erecta y glabra.",
    "Ciatios con glándulas involucrales semilunares terminadas en dos cuernitos; hojas caulinares decusadas, subsésiles, lanceoladas, enteras, de 4-14 cm por 0,7-2 cm; hojas superiores alternas o verticiladas; ciatios axilares; cápsulas de 5-9 mm.",
    "Europa; adventicia en América. Aparece en suelos modificados."
  ),
  euphorbia_peplus: species(
    "euphorbia_peplus",
    "Euphorbia peplus",
    "73. Euphorbiaceae",
    "Hierba anual, glabra, erecta, de 20-50 cm.",
    "Ciatios con glándulas involucrales semilunares terminadas en dos cuernitos; hojas caulinares alternas, obovado-espatuladas, atenuadas en pecíolo, obtusas y enteras, de 2-3 cm; hojas superiores opuestas; ciatios en cimas dicotómicas; cápsulas de 2 mm.",
    "Europa; adventicia en América. Muy común en suelos modificados; florece en primavera."
  ),
  euphorbia_serpens_montevidensis: species(
    "euphorbia_serpens_montevidensis",
    "Euphorbia serpens var. montevidensis",
    "73. Euphorbiaceae",
    "Hierba anual, tendida y glabra.",
    "Ciatios con glándulas semicirculares sin cuernitos; todas las hojas opuestas y oblicuas en la base; raíces delgadas; hojas cortamente pecioladas, elípticas, obtusas y enteras, de 4-5 mm; ciatios axilares solitarios; semillas lisas.",
    "Variedad de Uruguay y nordeste de la Argentina. Ubicua; considerada medicinal, diurética. Nombres vulgares: yerba meona, yerba de la golondrina."
  ),
  euphorbia_lorentzii: species(
    "euphorbia_lorentzii",
    "Euphorbia lorentzii",
    "73. Euphorbiaceae",
    "Hierba anual, ascendente o erecta, laxamente hirsuta, de 30-50 cm de alto.",
    "Ciatios con glándulas semicirculares sin cuernitos; hojas opuestas, ovadas, obtusas y finamente aserradas, de 12-25 mm; ciatios amontonados en el extremo de las ramitas; cápsulas glabras de 1,5 mm.",
    "Centro y oeste de la Argentina. Común en el Delta y en los bosques del Paraná y de la ribera del Plata; florece en verano."
  ),
  euphorbia_maculata: species(
    "euphorbia_maculata",
    "Euphorbia maculata",
    "73. Euphorbiaceae",
    "Hierba anual pubescente, con tallos ascendentes.",
    "Ciatios con glándulas semicirculares sin cuernitos; hojas opuestas, oblongo-ovadas, cortamente pecioladas, obtusas, semicordadas y oblicuas en la base, aserradas, de 4-6 mm; ciatios solitarios; cápsulas pubescentes de 2 mm.",
    "Estados Unidos; adventicia en Pergamino."
  ),
  euphorbia_caespitosa: species(
    "euphorbia_caespitosa",
    "Euphorbia caespitosa",
    "73. Euphorbiaceae",
    "Hierba perenne, con raíces napiformes y tallos ascendentes, glabros, de 20-40 cm.",
    "Hojas caulinares alternas, algo carnosas, elíptico-espatuladas o lanceoladas, obtusas o semiagudas, enteras y glabras, de 12-35 mm; ciatios en cimas dicotómicas terminales; involucro de 2 mm con glándulas gruesas purpúreas; cápsulas de 4 mm.",
    "Uruguay y nordeste de la Argentina. Hallada en dunas de Martín García y de la Isla Santiago. Nombre vulgar: leche tres."
  ),
  euphorbia_pampeana: species(
    "euphorbia_pampeana",
    "Euphorbia pampeana",
    "73. Euphorbiaceae",
    "Hierba perenne, pigmea, con raíz tuberosa y tallos débiles, decumbentes o ascendentes, glabros.",
    "Hojas alternas, algo carnosas, obovadas e irregularmente denticuladas; ciatios en las dicotomías superiores, cortamente pedunculados; involucro con 4 glándulas semidiscoideas verdes y lóbulos triangulares semienteros ciliados.",
    "Región platense. Rara en campos húmedos."
  ),
  ricinus_communis: species(
    "ricinus_communis",
    "Ricinus communis",
    "73. Euphorbiaceae",
    "Hierba anual de 1-2 m de alto, alta y glabra.",
    "Hojas alternas, grandes, palmatilobadas, de 10-30 cm de ancho, con 6-11 lóbulos dentados; flores diclinas monoicas en racimos terminales; estambres numerosos reunidos en grupos; cápsulas ovoideas, generalmente erizadas.",
    "Asia y África; adventicia en América cálida. Se encuentra en suelos removidos, escombros, etc. El aceite de las semillas se usa en medicina e industria. Nombres vulgares: ricino, castor, tártago."
  ),
  manihot_flabellifolia: species(
    "manihot_flabellifolia",
    "Manihot flabellifolia",
    "73. Euphorbiaceae",
    "Arbusto o arbolito de 1-4 m de alto, glabro.",
    "Hojas palmatisectas, con 7-12 segmentos oblanceolados, enteros o sinuados; flores amarillentas o verdosas en panojas terminales; cáliz masculino acampanado, pentáfido, de 13-17 mm; cáliz femenino con 5 sépalos libres; estilos laciniados; cápsulas subglobosas de 15-17 mm.",
    "Sur de Brasil, Paraguay, Uruguay y norte de la Argentina hasta Buenos Aires. A veces cultivada como ornamental. Nombres vulgares: falso café, mandioca salvaje."
  ),
  phyllanthus_sellowianus: species(
    "phyllanthus_sellowianus",
    "Phyllanthus sellowianus",
    "73. Euphorbiaceae",
    "Arbusto glabro de 2-3 m de alto.",
    "Hojas elíptico-lanceoladas, cortamente pecioladas, enteras, de 15-50 mm; flores masculinas en fascículos cortos, con estambres casi libres; flores femeninas cortamente pediceladas, con 3 estilos casi libres; cada lóculo del ovario con 2 óvulos; cápsulas de 2,5 mm.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Común a orillas de los ríos. Nombre vulgar: sarandí blanco."
  ),
  phyllanthus_lathyroides: species(
    "phyllanthus_lathyroides",
    "Phyllanthus lathyroides",
    "73. Euphorbiaceae",
    "Hierba anual, glabra, de 30-60 cm de alto.",
    "Hojas elíptico-oblongas, obtusas; flores solitarias, axilares, cortamente pedunculadas; flores masculinas con sépalos de 0,5 mm; flores femeninas algo mayores, con 3 estilos bisectos; cada lóculo del ovario con 2 óvulos; cápsulas de 3 mm con 6 semillas.",
    "América cálida. Común en los bosques del Delta y de la ribera platense."
  ),
  sebastiania_brasiliensis: species(
    "sebastiania_brasiliensis",
    "Sebastiania brasiliensis",
    "73. Euphorbiaceae",
    "Árbol de 8-10 m de alto, con corteza blanquecina.",
    "Brácteas de la inflorescencia con dos glándulas chatas y rugosas en su base; hojas cortamente pecioladas, elípticas, finamente aserradas, glabras, de 2-10 cm; flores diclinas monoicas; estambres 3; cápsulas de más de 1 cm.",
    "América austral subtropical hasta el Delta y la ribera del Plata, donde constituye un elemento dominante en la selva marginal prístina. Nombres vulgares: lecherón, blanquillo."
  ),
  sebastiania_klotzschiana: species(
    "sebastiania_klotzschiana",
    "Sebastiania klotzschiana",
    "73. Euphorbiaceae",
    "Árbol de 5-10 m de alto, con corteza blanquecina.",
    "Brácteas de la inflorescencia con dos glándulas pequeñas, lisas y pediceladas en su base; hojas pecioladas, elíptico-lanceoladas; flores diclinas monoicas; estambres 3; cápsulas de unos 8 mm.",
    "América austral subtropical, hasta la ribera del Plata. Nombre vulgar: blanquillo."
  ),
  sapium_haematospermum: species(
    "sapium_haematospermum",
    "Sapium haematospermum",
    "73. Euphorbiaceae",
    "Árbol de 8-10 m de alto, con corteza blanquecina y látex.",
    "Hojas cortamente pecioladas, lanceoladas, aserradas, glabras, de 7-20 cm; flores en espigas o racimos; estambres 2; cápsulas piriformes de 1 cm de diámetro.",
    "América austral subtropical, hasta el río de la Plata. Común en pajonales y bosques ribereños; su látex contiene caucho. Nombres vulgares: blanquillo, curupí."
  ),
  acalypha_communis_guaranitica: species(
    "acalypha_communis_guaranitica",
    "Acalypha communis var. guaranitica",
    "73. Euphorbiaceae",
    "Hierba hirsuta, de 0,5 m de alto, con rizoma grueso.",
    "Hojas alternas, elípticas, aserradas, trinervadas, de 2-7 cm; espigas femeninas terminales con brácteas laciniadas; espigas masculinas axilares; anteras con lóculos divergentes.",
    "América subtropical, hasta el río de la Plata."
  ),
  acalypha_gracilis: species(
    "acalypha_gracilis",
    "Acalypha gracilis",
    "73. Euphorbiaceae",
    "Sufrútice de 0,5-1 m de alto, con ramas cortamente pubescentes.",
    "Hojas alternas, ovadas, acuminadas, glabras, trinervadas, de 10-15 cm; espigas masculinas terminales y femeninas axilares o subterminales con brácteas laciniadas; anteras con lóculos divergentes.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de la Argentina, hasta las selvas marginales del Delta y de la ribera del Plata."
  ),
  mercurialis_annua: species(
    "mercurialis_annua",
    "Mercurialis annua",
    "73. Euphorbiaceae",
    "Hierba anual, ramosa, glabra, de 20-50 cm de alto.",
    "Hojas opuestas, ovadas, aserradas, de 20-70 mm; flores dioicas pequeñas; flores masculinas con 8-12 estambres y tecas divergentes; flores femeninas con ovario erizado y estilos fimbriados; cápsulas bicocas.",
    "Europa; adventicia en América. Rara en Dock Sur, Avellaneda."
  ),
  tragia_volubilis: species(
    "tragia_volubilis",
    "Tragia volubilis",
    "73. Euphorbiaceae",
    "Hierba perenne, voluble, cortamente pubescente.",
    "Hojas ovado-acorazonadas, aserradas; flores diclinas monoicas en racimos axilares; estambres 3; flores femeninas con pedúnculos de 15-40 mm; cápsulas peludas.",
    "América cálida y Antillas. Vive en los bosques del Delta, de la Isla Martín García y de la ribera del Plata."
  ),
  tragia_geraniifolia: species(
    "tragia_geraniifolia",
    "Tragia geraniifolia",
    "73. Euphorbiaceae",
    "Hierba perenne, ascendente, cubierta de pelos urticantes.",
    "Hojas pecioladas, acorazonadas en la base y dentadas; racimos opositifolios; estambres 3; flores femeninas con pedúnculos de hasta 5 mm; cápsulas peludas.",
    "Sur de Brasil, Uruguay y norte de la Argentina. Se halla en la estepa clímax; florece en verano."
  ),
  chiropetalum_griseum: species(
    "chiropetalum_griseum",
    "Chiropetalum griseum",
    "73. Euphorbiaceae",
    "Sufrútice de 50 cm de alto.",
    "Hojas alternas, ovadas, aserradas, de 2-4 cm, cubiertas de pelos estrellados; estípulas lineales; flores en racimos axilares, las masculinas arriba y las femeninas abajo; estambres 5 en un solo verticilo; sépalos largamente velludos; cápsulas de 4-5 mm.",
    "Centro de la Argentina. Se halla en las barrancas del Paraná: Baradero, Zárate, San Isidro, etc."
  ),
  croton_parvifolius: species(
    "croton_parvifolius",
    "Croton parvifolius",
    "73. Euphorbiaceae",
    "Arbustito rastrero de 20-40 cm de alto, con pelos estrellados ralos.",
    "Hojas alternas, oblongas, enteras, de 1,5-2 cm por 2 mm; espigas andróginas terminales, a veces unisexuales; estambres numerosos con filamentos largos curvados en el botón floral; cápsulas de 5 mm.",
    "Uruguay y nordeste y centro de la Argentina. Rara en la estepa clímax cerca de Eva Perón."
  ),
  caperonia_cordata: species(
    "caperonia_cordata",
    "Caperonia cordata",
    "73. Euphorbiaceae",
    "Hierba dioica, erecta, de cerca de 1 m de alto.",
    "Hojas alternas, subsésiles, ovadas u ovado-lanceoladas, agudas en el ápice y acorazonadas en la base, aserradas, de 5-10 cm; flores en racimos axilares; estambres 10-20 con filamentos cortísimos; sépalos de 4-6 mm; cápsulas de 7-8 mm.",
    "Brasil, Uruguay y nordeste de la Argentina. Rara cerca de Buenos Aires: Avellaneda."
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
  callitriche_turfosa: species(
    "callitriche_turfosa",
    "Callitriche turfosa",
    "74. Callitrichaceae",
    "Hierba anual, pigmea, terrestre de suelos húmedos.",
    "Fruto más ancho que alto, de 0,7-0,9 mm por 0,6-0,8 mm; cara de los mericarpos convexa; ala muy estrecha; estambres de 0,2-1,2 mm; flores sin brácteas; hojas más o menos uniformes, de 2-4 mm por 0,7-1,5 mm.",
    "América del Sur. En suelos pantanosos."
  ),
  callitriche_deflexa: species(
    "callitriche_deflexa",
    "Callitriche deflexa",
    "74. Callitrichaceae",
    "Hierba pigmea, terrestre de suelos húmedos.",
    "Fruto más ancho que alto, de 0,5-0,9 mm por 0,3-0,7 mm; cara de los mericarpos casi plana; ala muy angosta; flores sin brácteas; hojas más o menos uniformes, de 2-4 mm por 0,8-2,3 mm; pedicelos de los frutos de 0,5-4 mm, o de 0,1-0,3 mm en la var. subsessilis.",
    "América del Sur subtropical; en suelos húmedos. La var. subsessilis es de América cálida."
  ),
  callitriche_rimosa: species(
    "callitriche_rimosa",
    "Callitriche rimosa",
    "74. Callitrichaceae",
    "Hierba anfibia, sumergida con roseta de hojas flotantes o tendida sobre el fango.",
    "Fruto tan alto como ancho o algo más alto, redondeado, de 0,9-1,2 mm por 0,9-1,3 mm, circundado por alas estrechas; estambres acrescentes; flores con dos brácteas; hojas obovadas o espatuladas, hasta 15 mm por 6 mm en formas acuáticas.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina, hasta el río de la Plata. Vive en charcas y bordes de arroyos."
  ),
  callitriche_heterophylla: species(
    "callitriche_heterophylla",
    "Callitriche heterophylla",
    "74. Callitrichaceae",
    "Hierba anfibia o acuática, con hojas de formas distintas en una misma planta.",
    "Fruto tan alto como ancho, sin alas, de 0,6-1,2 mm por otro tanto de alto; flores con dos brácteas; hojas lineales o espatuladas.",
    "América del Norte. Rara en Uruguay y en la provincia de Buenos Aires: Sierra de la Ventana."
  ),
  callitriche_oblongicarpa: species(
    "callitriche_oblongicarpa",
    "Callitriche oblongicarpa",
    "74. Callitrichaceae",
    "Hierba anfibia o acuática, con hojas espatuladas.",
    "Fruto tan alto como ancho o algo más alto, con alas estrechísimas que no llegan ni a la base ni al ápice de los mericarpos, de 0,7-0,9 mm por 0,8-0,9 mm; flores con dos brácteas.",
    "Uruguay y alrededores de Buenos Aires en la Argentina."
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
    "Dicotiledóneas gamopétalas, alcanzables desde más de una rama de la clave.",
    "Flores generalmente actinomorfas, corola epígina, ovario ínfero y hojas simples opuestas o verticiladas, por lo común con estípulas."
  ),
  cephalanthus_glabratus: species(
    "cephalanthus_glabratus",
    "Cephalanthus glabratus",
    "123. Rubiaceae",
    "Arbusto o arbolito glabro, de 3-5 m de alto.",
    "Hojas en verticilos de 3, lanceoladas, enteras, de 5-8 x 1,5-2 cm; cabezuelas globosas dispuestas en cimas terminales y axilares; cáliz de 1 mm; corola blanca de 4 mm.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en matorrales del Delta y de la ribera del Plata. Nombres vulgares: sarandí, sarandí colorado."
  ),
  guettarda_uruguensis: species(
    "guettarda_uruguensis",
    "Guettarda uruguensis",
    "123. Rubiaceae",
    "Arbusto o arbolito ramoso, de 2-5 m de alto.",
    "Hojas opuestas, cortamente pecioladas, ovadas, agudas, enteras, glabras en el haz y tomentosas en el envés, de 5-8 x 2-5 cm; cimas 7-15-floras; cáliz amarillento tomentuloso; corola blanco-rosada; frutos elipsoideos de casi 1 cm.",
    "Brasil, Uruguay y nordeste de la Argentina, hasta el Delta y la Isla Martín García."
  ),
  oldenlandia_thesiifolia: species(
    "oldenlandia_thesiifolia",
    "Oldenlandia thesiifolia",
    "123. Rubiaceae",
    "Hierba anual pigmea, glabra o algo pubescente, con tallos tendidos y filiformes.",
    "Hojas ovado-oblongas de 3-5 mm; flores terminales, solitarias o geminadas, largamente pedunculadas; cáliz de 1,5 mm, hirsuto en la base; corola acampanada, 4-lobada, de 2 mm; cápsulas de 1-1,5 mm.",
    "América austral. Común en la orilla de los arroyos."
  ),
  richardia_stellaris: species(
    "richardia_stellaris",
    "Richardia stellaris",
    "123. Rubiaceae",
    "Hierba perenne con tallos cortos, tendidos e híspidos.",
    "Hojas lanceoladas o lanceolado-lineales, rígidas, enteras y peludas; estípulas largamente ciliadas; flores en capítulos rodeados por algunas hojas.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. En la estepa clímax."
  ),
  richardia_rosea: species(
    "richardia_rosea",
    "Richardia rosea",
    "123. Rubiaceae",
    "Hierba perenne con tallos tendidos e híspidos.",
    "Hojas anchamente ovado-elípticas, tiernas, agudas en el ápice y atenuadas en la base en cortísimo pecíolo, enteras, pubescentes, de 3-5 x 1,5-2 cm; estípulas membranosas y ciliadas; flores rosadas o blancas en capítulos involucrados por hojas.",
    "Brasil, Uruguay y nordeste de la Argentina. Se halla en suelos arenosos de la ribera platense."
  ),
  diodia_brasiliensis: species(
    "diodia_brasiliensis",
    "Diodia brasiliensis",
    "123. Rubiaceae",
    "Sufrútice de 0,5-1 m de alto, con tallos tetragonales glabros.",
    "Hojas oblanceoladas, agudas, glabras, enteras, de 10-20 x 2-10 mm; flores diminutas, blancas, sésiles en las axilas de las hojas superiores, formando seudoverticilos; fruto disgregándose en dos cocos indehiscentes.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en los bosques del Delta y de la ribera del Plata."
  ),
  diodia_dasycephala: species(
    "diodia_dasycephala",
    "Diodia dasycephala",
    "123. Rubiaceae",
    "Hierba perenne, decumbente o ascendente, glabra.",
    "Hojas opuestas o seudoverticiladas, oblanceoladas, enteras, atenuadas en la base, de 2-3 cm x 5-10 mm; flores blancas en cabezuelas terminales rodeadas por algunas hojas.",
    "Brasil, Uruguay y nordeste de la Argentina. Común en la estepa clímax y en suelos modificados."
  ),
  mitracarpus_megapotamicus: species(
    "mitracarpus_megapotamicus",
    "Mitracarpus megapotamicus",
    "123. Rubiaceae",
    "Hierba perenne, ascendente y velluda.",
    "Hojas lanceoladas, enteras, agudas, de 2-4 cm x 2,5-6 mm; flores blancas en capítulos terminales densos; fruto cápsula de dehiscencia transversal.",
    "América austral templado-cálida. Se halla en la estepa clímax."
  ),
  spermacoce_glabra: species(
    "spermacoce_glabra",
    "Spermacoce glabra",
    "123. Rubiaceae",
    "Hierba perenne, rastrera o ascendente, glabra.",
    "Hojas lanceoladas, atenuadas en la base en seudopecíolo, enteras, de 3-7 cm; corola pubescente en la garganta, de 2-3 mm; flores en verticilastros axilares; cápsulas de 3 mm, con una valva indehiscente.",
    "América cálida. Se halla en la ribera del Plata."
  ),
  borreria_laxa: species(
    "borreria_laxa",
    "Borreria laxa",
    "123. Rubiaceae",
    "Hierba perenne de 0,5-1 m de alto, con tallos erectos tetrágonos y glabros.",
    "Flores pequeñas en cimas laxas plurifloras; cápsulas de 3 mm coronadas por cuatro sépalos; hojas opuestas o verticiladas, ovado-lanceoladas, agudas, glabras, con nervaduras muy marcadas, de 5-6 cm.",
    "Uruguay y nordeste de la Argentina. Hallada en el Delta y en la Isla Martín García."
  ),
  borreria_eryngioides: species(
    "borreria_eryngioides",
    "Borreria eryngioides",
    "123. Rubiaceae",
    "Hierba perenne glabra, con tallos cuadrangulares de 20-40 cm de alto.",
    "Hojas lineal-lanceoladas, agudas, enteras, de 2-3 cm; flores en capítulos y verticilos a lo largo del tallo; estambres con filamentos cortos y anteras inclusas; cápsula de 2,5 mm.",
    "América subtropical, hasta los alrededores de Buenos Aires."
  ),
  borreria_verticillata: species(
    "borreria_verticillata",
    "Borreria verticillata",
    "123. Rubiaceae",
    "Sufrútice erecto, glabro o algo velludo, de 20-60 cm de alto.",
    "Hojas opuestas con ramitas axilares cortas y hojosas que simulan hojas verticiladas, lanceoladas, agudas, enteras, glabras, de 1,5-3 cm; flores en verticilos densos y cabezuelas terminales; corola blanca de 2,5 mm; estambres largamente exertos.",
    "América cálida. Común en los bosques del Delta y de la Isla Martín García; más rara en el interior."
  ),
  relbunium_chaetophorum: species(
    "relbunium_chaetophorum",
    "Relbunium chaetophorum",
    "123. Rubiaceae",
    "Hierba perenne rastrera, con tallos muy delgados.",
    "Hojas lineal-lanceoladas, agudas, glabras o con algún pelo en el margen, de 3-5 x 0,5-1 mm; flores diminutas, amarillentas, axilares e involucradas.",
    "Centro de la Argentina. Frecuente en la estepa clímax; florece en primavera."
  ),
  relbunium_vile: species(
    "relbunium_vile",
    "Relbunium vile",
    "123. Rubiaceae",
    "Hierba perenne generalmente apoyante, con tallos retrorso-ásperos en los ángulos.",
    "Hojas muy cortamente pecioladas, oblongas o elípticas, obtusas, enteras, glabras, de 10-15 x 3-5 mm; flores axilares, solitarias o ternadas; brácteas del involucro del mismo tamaño; corola de 1 mm de diámetro; frutos glabros.",
    "Sur del Brasil, Bolivia, Uruguay y norte de la Argentina. Muy frecuente en los matorrales del Delta y de la ribera del Plata; florece en primavera."
  ),
  relbunium_hypocarpium_indecorum: species(
    "relbunium_hypocarpium_indecorum",
    "Relbunium hypocarpium var. indecorum",
    "123. Rubiaceae",
    "Hierba perenne generalmente apoyante, con tallos pubescentes.",
    "Hojas oblongas, anchamente elípticas o semiespatuladas, obtusas, contraídas en la base, pubescentes y pestañosas, de 8-12 x 4-6 mm; flores axilares amarillentas, con corola de 1,5 mm de diámetro; frutos generalmente pubescentes, rojos.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en los bosques del Delta y de la ribera; florece en primavera."
  ),
  galium_tetragonum: species(
    "galium_tetragonum",
    "Galium tetragonum",
    "123. Rubiaceae",
    "Hierba perenne apoyante, con frutos lisos.",
    "Tallos con ángulos muy salientes, ásperos o lisos; hojas lineal-lanceoladas, agudas, enteras, de 2-9 x 0,5-1 mm; flores amarillentas, dioicas, en cimas paucifloras con pedicelos divaricados; frutos amarillos.",
    "Centro de la Argentina y Uruguay. Rara en la región: Ensenada."
  ),
  galium_palustre: species(
    "galium_palustre",
    "Galium palustre",
    "123. Rubiaceae",
    "Hierba perenne apoyante, con frutos lisos.",
    "Tallos con ángulos no salientes, flexuosos; hojas lineal-lanceoladas, de 10-15 x 1-3 mm; flores blancas diminutas en cimas multifloras terminales y axilares.",
    "Europa y América del Norte. Hallada en los pajonales de Punta Lara; florece en primavera."
  ),
  galium_aparine: species(
    "galium_aparine",
    "Galium aparine",
    "123. Rubiaceae",
    "Hierba anual débil y apoyante.",
    "Tallos retrorso-híspidos en los ángulos; hojas en seudoverticilos de 6-8, oblanceolado-lineales, enteras y ásperas; flores pequeñas, 1-3, en cimas; frutos cubiertos de cerdas ganchudas.",
    "Europa, adventicia en casi todo el globo. Frecuente en cercos y terraplenes."
  ),
  sherardia_arvensis: species(
    "sherardia_arvensis",
    "Sherardia arvensis",
    "123. Rubiaceae",
    "Hierba anual débil, con tallos tendidos o ascendentes.",
    "Hojas verticiladas, lineal-lanceoladas, agudas y punzantes en el ápice, enteras, de 6-12 x 2-4 mm; flores en cabezuelas involucradas; cáliz persistente.",
    "Europa, adventicia en América. Rara en suelos modificados y cultivos."
  ),
  psychotria_carthaginensis: species(
    "psychotria_carthaginensis",
    "Psychotria carthaginensis",
    "123. Rubiaceae",
    "Arbusto casi glabro, de 1-3 m de alto.",
    "Hojas cortamente pecioladas, elípticas u obovadas, agudas, puberulentas por debajo; inflorescencia paniculada, pluriflora; corola blanca de 4 mm; frutos rojos.",
    "América cálida, hasta el Delta del Paraná."
  ),
  rosaceae: family(
    "rosaceae",
    "63. Rosaceae",
    "Dicotiledóneas del Grupo B.",
    "Hierbas o arbustos con hojas estipuladas y ovario ínfero o semiínfero."
  ),
  alchemilla_parodii: species(
    "alchemilla_parodii",
    "Alchemilla parodii",
    "63. Rosaceae",
    "Hierba anual, pigmea, tendida o ascendente y velluda.",
    "Hojas alternas, pecioladas, flabeladas, de 3-6 mm, tripartidas con segmentos 3-4-fidos; estípulas inciso-dentadas, amplexicaules y adnatas al pecíolo; flores opositifolias, aglomeradas entre las estípulas.",
    "Argentina y Uruguay. Se halla en la estepa prístina."
  ),
  margyricarpus_pinnatus: species(
    "margyricarpus_pinnatus",
    "Margyricarpus pinnatus",
    "63. Rosaceae",
    "Arbustito glabro de 15-30 cm de alto.",
    "Hojas de 1-2 cm, con 7-9 pares de segmentos lineales caducos; estípulas soldadas con el pecíolo; flores diminutas; frutos gruesos y angulosos.",
    "América austral. Cerca de Buenos Aires se halla en la estepa clímax. Nombre vulgar: yerba de la perdiz."
  ),
  rubus_ulmifolius: species(
    "rubus_ulmifolius",
    "Rubus ulmifolius",
    "63. Rosaceae",
    "Arbusto sarmentoso, con tallos redondeados y numerosos aguijones.",
    "Hojas 3-5-folioladas, con folíolos ovados, acuminados y albo-tomentosos en la cara inferior; flores blancas o rosadas en panojas terminales; estípulas estrechamente lineales; frutos casi negros.",
    "Europa; adventicia en América del Sur."
  ),
  rubus_caesius: species(
    "rubus_caesius",
    "Rubus caesius",
    "63. Rosaceae",
    "Arbusto sarmentoso, con tallos angulosos, pubescentes y con aguijones curvos.",
    "Hojas generalmente 3-folioladas, con folíolos ovados u obovados, glabros en el haz y velludos en el envés; flores blancas en corimbos; estípulas lanceoladas; frutos casi negros.",
    "Europa; adventicia en América. Nombre vulgar: zarzamora."
  ),
  duchesnea_indica: species(
    "duchesnea_indica",
    "Duchesnea indica",
    "63. Rosaceae",
    "Hierba perenne con tallos tendidos, radicantes en los nudos y plateado-pubescentes.",
    "Hojas trifolioladas, largamente pecioladas; flores amarillas, solitarias; cáliz con calículo de 5 brácteas; fruto rojo, formado por aquenios sobre un receptáculo carnoso.",
    "India; adventicia en América. En jardines."
  ),
  santalaceae: family(
    "santalaceae",
    "40. Santalaceae",
    "Dicotiledóneas del Grupo B.",
    "Árboles con hojas sin estípulas y ovario ínfero o semiínfero."
  ),
  arjona_tuberosa_tandilensis: species(
    "arjona_tuberosa_tandilensis",
    "Arjona tuberosa var. tandilensis",
    "40. Santalaceae",
    "Hierba hemiparásita de 7-20 cm de alto, densamente pubescente.",
    "Perianto tubuloso; hojas densas y apiculadas; flores blancas o violáceas, con perigonio de 15-20 mm.",
    "Centro de la Argentina y Uruguay; rara cerca de la Capital Federal, citada para Santos Lugares. N. v.: mata trigo, macachín del trigo."
  ),
  acanthosyris_spinescens: species(
    "acanthosyris_spinescens",
    "Acanthosyris spinescens",
    "40. Santalaceae",
    "Arbusto o arbolito de 2-3 m de alto, con espinas axilares rectas.",
    "Hojas oblanceoladas, obtusas; flores amarillentas; drupas globosas, amarillentas, de 13-20 mm de diámetro.",
    "Sur del Brasil, Uruguay y NE de la Argentina; rara en bosques xerófilos próximos a la ribera del Plata."
  ),
  jodina_rhombifolia: species(
    "jodina_rhombifolia",
    "Jodina rhombifolia",
    "40. Santalaceae",
    "Arbolito hemiparásito con hojas alternas, coriáceas y espinosas en los ángulos.",
    "Hojas rómbicas; flores reunidas en glomérulos axilares; fruto globoso, rojo y rugoso.",
    "Sur del Brasil, Bolivia, Paraguay, Uruguay y norte y centro de la Argentina; frecuente en los bosques de tala de los alrededores de Buenos Aires. N. v.: sombra de toro, quebracho flojo."
  ),
  polygonaceae: family(
    "polygonaceae",
    "43. Polygonaceae",
    "Dicotiledóneas del Grupo B.",
    "Hojas con ócrea formada por estípulas intrapeciolares soldadas."
  ),
  emex_spinosa: species(
    "emex_spinosa",
    "Emex spinosa",
    "43. Polygonaceae",
    "Hierba anual de cerca de medio metro de altura, glabra.",
    "Hojas pecioladas, ovadas, enteras u onduladas; frutos grandes con tres espinas divergentes en el ápice; flores diclinas monoicas.",
    "Europa y África; adventicia en América. Aparece a veces cerca de Buenos Aires: Isla Maciel, La Plata e Isla Martín García."
  ),
  rumex_acetosella: species(
    "rumex_acetosella",
    "Rumex acetosella",
    "43. Polygonaceae",
    "Hierba perenne de 10-50 cm de alto.",
    "Rizomas estoloniformes delgados; tallos erectos; hojas pecioladas y hastadas, con dos lóbulos divergentes en la base; flores dioicas numerosas en panojas áfilas.",
    "Europa; adventicia en todo el globo. Rara cerca de Buenos Aires, citada para Quilmes."
  ),
  rumex_conglomeratus: species(
    "rumex_conglomeratus",
    "Rumex conglomeratus",
    "43. Polygonaceae",
    "Hierba perenne con raíces napiformes y tallos de cerca de medio metro.",
    "Hojas ovado-oblongas, crenuladas y algo crespas; flores en glomérulos distantes, cada uno con una hoja en la base; valvas del fruto aovadas, enteras, con callo grueso.",
    "Europa; adventicia en América. Común en campos húmedos y salinos."
  ),
  rumex_crispus: species(
    "rumex_crispus",
    "Rumex crispus",
    "43. Polygonaceae",
    "Hierba perenne, glabra, de cerca de un metro.",
    "Hojas con lámina oblonga y margen crespo; flores en panojas áfilas densas; valvas del fruto anchamente membranosas, enteras, con callo semigloboso.",
    "Europa; adventicia en todo el mundo. N. v.: lengua de vaca."
  ),
  rumex_argentinus: species(
    "rumex_argentinus",
    "Rumex argentinus",
    "43. Polygonaceae",
    "Hierba perenne de 0,5-1 m de alto, sin rizomas.",
    "Hojas con lámina ovada u oblonga, aguda y ligeramente crenulada; valvas del fruto triangulares, crasas, con callo alargado grueso de 3-4 mm.",
    "Uruguay y NE de la Argentina. Común en pajonales del Delta y de la ribera del Plata."
  ),
  rumex_cuneifolius: species(
    "rumex_cuneifolius",
    "Rumex cuneifolius",
    "43. Polygonaceae",
    "Hierba rizomatosa con tallos aéreos de 10-20 cm.",
    "Hojas coriáceas, espatuladas, obtusas y crenuladas; valvas del fruto coriáceas, ovadas, con callo muy grueso de 4-5 mm.",
    "América austral. Común en dunas de la Bahía de Samborombón y del litoral atlántico; rara cerca de Buenos Aires."
  ),
  rumex_pulcher: species(
    "rumex_pulcher",
    "Rumex pulcher",
    "43. Polygonaceae",
    "Planta perenne, divaricado-ramosa, de 30-50 cm.",
    "Hojas inferiores largamente pecioladas, oblongo-panduriformes y obtusas; flores en glomérulos axilares; valvas del fruto ovado-triangulares, dentadas o laciniadas, de 4-5 mm.",
    "Europa; adventicia en todo el mundo. Cerca de Buenos Aires frecuente en campos húmedos."
  ),
  rumex_obtusifolius: species(
    "rumex_obtusifolius",
    "Rumex obtusifolius",
    "43. Polygonaceae",
    "Hierba perenne con tallos erectos de cerca de 1 m.",
    "Hojas oblongas, agudas o semiobtusas, crenadas y onduladas; flores en glomérulos áfilos que forman una panoja densa; valvas membranosas dentadas en la parte inferior.",
    "Europa; adventicia en casi todo el globo. N. v.: lengua de vaca."
  ),
  rumex_obovatus: species(
    "rumex_obovatus",
    "Rumex obovatus",
    "43. Polygonaceae",
    "Hierba anual o bienal con tallos erectos de 20-70 cm.",
    "Hojas obovadas y obtusas; valvas del fruto grandes, de 4-5 mm por 3 mm, con callo rugoso y profundamente laciniadas.",
    "Argentina y Paraguay; adventicia en Europa. Rara en la región, citada para Pergamino y Capital Federal."
  ),
  rumex_paraguayensis: species(
    "rumex_paraguayensis",
    "Rumex paraguayensis",
    "43. Polygonaceae",
    "Hierba anual o bienal con tallos erectos de hasta 70 cm.",
    "Hojas obovadas o panduriformes, algo crespas; flores en panojas de glomérulos; valvas del fruto menores, de unos 3 mm por 2 mm, con callo liso y dientes cortos.",
    "Paraguay y norte de la Argentina; adventicia en Europa. Rara en las cercanías de Buenos Aires."
  ),
  polygonum_convolvulus: species(
    "polygonum_convolvulus",
    "Polygonum convolvulus",
    "43. Polygonaceae",
    "Hierba anual voluble.",
    "Hojas acorazonadas, glabras, de 3-7 cm por 2-4 cm; flores pequeñas verdosas en fascículos axilares, las superiores formando un seudo-racimo laxo; frutos triquetros.",
    "Europa; maleza de los cultivos en casi todo el mundo. N. v.: enredadera."
  ),
  polygonum_aviculare: species(
    "polygonum_aviculare",
    "Polygonum aviculare",
    "43. Polygonaceae",
    "Hierba anual, glauca, con tallos rastreros o ascendentes, glabros.",
    "Hojas lanceoladas u ovado-lanceoladas de 1,5-4 cm; ocreas plateadas, rasgadas; flores en glomérulos axilares; perianto verdoso.",
    "Europa; adventicia en todo el mundo. Común en rastrojos, calles, etc."
  ),
  polygonum_camporum_australe: species(
    "polygonum_camporum_australe",
    "Polygonum camporum var. australe",
    "43. Polygonaceae",
    "Hierba perenne, sufruticosa, con raíz gruesa y profunda.",
    "Tallos tendidos o ascendentes, finamente estriados; hojas lineal-lanceoladas, enteras, de 1-3 cm; ocreas cortas, laciniadas; flores 1-3 en las axilas, con perianto verdoso de unos 3 mm.",
    "América del Sur, en suelos salados. Común cerca de Buenos Aires. N. v.: sanguinaria."
  ),
  polygonum_stelligerum: species(
    "polygonum_stelligerum",
    "Polygonum stelligerum",
    "43. Polygonaceae",
    "Hierba perenne palustre, de cerca de 1 m, cubierta de aguijones retrorsos.",
    "Hojas hastadas, enteras, con pelos estrellados, de 12-20 cm por 3-10 cm; ocreas muy largas con pubescencia estrellada rojiza; flores en espigas cortas y densas; perianto blanco.",
    "Sur del Brasil, Uruguay y NE de la Argentina. Común en pajonales del Delta y de la ribera platense."
  ),
  polygonum_acuminatum_microstemon: species(
    "polygonum_acuminatum_microstemon",
    "Polygonum acuminatum var. microstemon",
    "43. Polygonaceae",
    "Hierba perenne con tallos ascendentes de cerca de medio metro.",
    "Hojas lanceoladas, de 7-20 cm, cubiertas de pubescencia tendida más o menos densa; ocreas superiores largamente ciliadas; flores blancas en espigas terminales densas; frutos biconvexos.",
    "América tropical oriental. Común en pajonales y arroyos."
  ),
  polygonum_punctatum: species(
    "polygonum_punctatum",
    "Polygonum punctatum",
    "43. Polygonaceae",
    "Hierba perenne, glabra, de cerca de medio metro de alto.",
    "Hojas lanceoladas, acuminadas, enteras, de 5-15 cm; ocreas cilíndricas, truncadas, largamente ciliadas; flores blanquecinas o rosadas en espigas laxas; sépalos con puntos glandulares negros o rojizos.",
    "América. Frecuente en lugares húmedos o inundados."
  ),
  polygonum_spectabile: species(
    "polygonum_spectabile",
    "Polygonum spectabile",
    "43. Polygonaceae",
    "Planta muy robusta, con tallos crasos, flotantes, tendidos o ascendentes, de medio metro o más.",
    "Hojas lanceoladas, acuminadas, glabras, de 12-30 cm; ocreas cilíndricas, truncadas, generalmente sin pestañas; flores blanquecinas en espigas ramificadas densas; frutos biconvexos.",
    "América templado-cálida. Común en pajonales y camalotes del Delta y de la ribera del Plata."
  ),
  polygonum_hydropiperoides: species(
    "polygonum_hydropiperoides",
    "Polygonum hydropiperoides",
    "43. Polygonaceae",
    "Hierba perenne, generalmente glabra, con tallos erectos o ascendentes de cerca de medio metro.",
    "Hojas lanceoladas de 5-10 cm; ocreas con cilias largas en el borde; espigas laxas; flores blanquecinas.",
    "América templado-cálida. Común en zanjas y arroyos."
  ),
  polygonum_lapathifolium: species(
    "polygonum_lapathifolium",
    "Polygonum lapathifolium",
    "43. Polygonaceae",
    "Hierba anual de 30-90 cm de alto.",
    "Hojas lanceoladas, ligeramente pubescentes en el margen y nervaduras, de 10-20 cm por 2-4 cm; ocreas sin cilias; flores en racimos espiciformes muy densos, más o menos péndulos; perianto rosado o blanco.",
    "Europa; adventicia en América. En suelos inundables."
  ),
  polygonum_orientale: species(
    "polygonum_orientale",
    "Polygonum orientale",
    "43. Polygonaceae",
    "Hierba anual, erecta, híspida, de 0,5-1 m de alto.",
    "Hojas anchamente ovadas, de 7-25 cm por 4-15 cm, más o menos pubescentes; ocreas cortas, pubescentes, ciliadas; flores en panojas de racimos espiciformes densos, péndulos; perianto rosa fuerte.",
    "India. Cultivada como ornamental y con frecuencia espontánea en suelos húmedos."
  ),
  muehlenbeckia_sagittifolia: species(
    "muehlenbeckia_sagittifolia",
    "Muehlenbeckia sagittifolia",
    "43. Polygonaceae",
    "Liana glabra, con tallos rojizos.",
    "Hojas sagitadas, agudas, enteras, de 5-8 cm; flores pequeñas verdosas en racimos axilares de fascículos; nuez incluida en el perianto carnoso; semilla trisurcada.",
    "Sur del Brasil, Paraguay, Uruguay y norte de la Argentina, hasta Buenos Aires. Común en bosques del Delta y de la ribera. N. v.: zarzaparrilla colorada."
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
  phytolacca_americana: species(
    "phytolacca_americana",
    "Phytolacca americana",
    "47. Phytolaccaceae",
    "Sufrútice de alrededor de 1,5 m de alto.",
    "Hojas pecioladas, ovado-elípticas y acuminadas, de unos 14 cm por 6 cm; flores hermafroditas en racimos erectos; tépalos ovados de 2,5 mm; estambres 10; ovario 10-carpelar; bayas negras de 8 mm.",
    "América del Norte. Adventicia en la Argentina."
  ),
  phytolacca_dioica: species(
    "phytolacca_dioica",
    "Phytolacca dioica",
    "47. Phytolaccaceae",
    "Árbol dioico, de tronco muy grueso y flojo, de 8-10 m de alto.",
    "Hojas pecioladas, anchamente elípticas, glabras, de 10-12 cm por 6-7 cm; flores en racimos péndulos; perigonio pentámero; estambres 20-30; carpelos 8-14; bayas deprimidas y lobadas.",
    "América cálida. Cultivada como ornamental y común en bosques de Celtis spinosa. Nombre vulgar: ombú."
  ),
  phytolacca_tetramera: species(
    "phytolacca_tetramera",
    "Phytolacca tetramera",
    "47. Phytolaccaceae",
    "Hierba perenne dioica.",
    "Hojas crasas, glabras, oblanceoladas y obtusas, de unos 20 cm por 3-4 cm; racimos erectos; perigonio tetrámero; estambres 20; carpelos 6-10; bayas oscuras deprimidas.",
    "Endémica del nordeste de Buenos Aires: Ignacio Correas, Magdalena y Punta del Indio. Nombre vulgar: ombusillo."
  ),
  rivina_humilis_glabra: species(
    "rivina_humilis_glabra",
    "Rivina humilis var. glabra",
    "47. Phytolaccaceae",
    "Sufrútice erecto, glabro, de cerca de 1 m de alto.",
    "Hojas alternas, pecioladas, ovadas y enteras, de 7-8 cm por 4 cm; flores hermafroditas con perigonio corolino 4-partido en racimos largos, erectos, axilares y seudoterminales; tépalos blancos o rosados de 2 mm; bayas rojas de 4 mm.",
    "América cálida hasta Buenos Aires: Delta y ribera del Plata."
  ),
  aizoaceae: family(
    "aizoaceae",
    "48. Aizoaceae",
    "Dicotiledóneas del Grupo B.",
    "Hierbas o sufrútices con ovario tricarpelar; hojas verticiladas en esta rama."
  ),
  aptenia_cordifolia: species(
    "aptenia_cordifolia",
    "Aptenia cordifolia",
    "48. Aizoaceae",
    "Hierba suculenta perenne, con ramas tendidas.",
    "Hojas pecioladas, ovado-cordadas, enteras, crasas y menudamente papilosas; flores solitarias en las bifurcaciones de las ramas; ovario ínfero; estaminodios petaliformes numerosos, purpúreos.",
    "África. Cultivada como ornamental; crece escapada de cultivo en las barrancas de San Nicolás."
  ),
  glinus_radiatus: species(
    "glinus_radiatus",
    "Glinus radiatus",
    "48. Aizoaceae",
    "Hierba anual, rastrera, tomentosa o glabrescente.",
    "Hojas seudoverticiladas, ovado-espatuladas, agudas y enteras; flores en glomérulos; sépalos tomentosos, con lóbulos del cáliz cuculado-mucronados; estaminodios ausentes; estambres 3-5; semillas glabras.",
    "América. Rara en la región; citada para el Puerto de Buenos Aires."
  ),
  mollugo_verticillata: species(
    "mollugo_verticillata",
    "Mollugo verticillata",
    "48. Aizoaceae",
    "Hierba anual, baja, glabra y ramificada dicotómicamente.",
    "Hojas verticiladas, planas, lineales o lineal-espatuladas, enteras, obtusas, de 15-25 mm; flores pequeñas en dicasios compuestos; sépalos glabros; semillas reniformes lisas.",
    "América cálida. Rara en los alrededores de Buenos Aires."
  ),
  sesuvium_portulacastrum: species(
    "sesuvium_portulacastrum",
    "Sesuvium portulacastrum",
    "48. Aizoaceae",
    "Hierba o sufrútice tendido, carnoso y glabro.",
    "Hojas opuestas, lineales, enteras, unidas en la base por una membrana estipuliforme; flores axilares, sésiles o cortamente pedunculadas; cáliz de 5-10 mm, verdoso por fuera y rosado por dentro; estambres 10-15; cápsulas oblongas.",
    "Cosmopolita, en litorales marítimos y suelos salados."
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
  salicornia_ambigua: species(
    "salicornia_ambigua",
    "Salicornia ambigua",
    "44. Chenopodiaceae",
    "Sufrútice rastrero, glabro, con ramas ascendentes.",
    "Hojas muy reducidas, soldadas entre sí y al tallo, dando aspecto articulado, carnoso y áfilo; flores en espigas terminales, agrupadas de a 3 en la axila de cada bráctea, ginodioicas.",
    "Frecuente en suelos salados de toda América. Común cerca de Buenos Aires y Eva Perón."
  ),
  atriplex_montevidensis: species(
    "atriplex_montevidensis",
    "Atriplex montevidensis",
    "44. Chenopodiaceae",
    "Hierba perenne con tallos rastreros.",
    "Hojas lanceoladas, enteras, pruinosas, de 5-15 mm; flores en glomérulos axilares; frutos con brácteas pentalobadas de unos 3 mm.",
    "Uruguay y Argentina. Común en campos algo salados."
  ),
  atriplex_hastata: species(
    "atriplex_hastata",
    "Atriplex hastata",
    "44. Chenopodiaceae",
    "Hierba anual con tallos ascendentes.",
    "Hojas triangulares, pecioladas, enteras u onduladas, pruinosas, de 3-8 cm por 1,5-4 cm; flores diclinas monoicas en glomérulos agrupados en espigas; brácteas del fruto triangulares y lisas.",
    "Europa; adventicia en América. Común en campos bajos y salados."
  ),
  atriplex_patula: species(
    "atriplex_patula",
    "Atriplex patula",
    "44. Chenopodiaceae",
    "Hierba anual glabra, con tallos ascendentes o erectos de 10-40 cm.",
    "Hojas superiores lanceoladas e inferiores ovadas; flores en glomérulos agrupados en espigas laxas; brácteas del fruto rómbicas, generalmente tuberculadas, de unos 4 mm.",
    "Europa; adventicia en América. Común en campos bajos y salados."
  ),
  suaeda_patagonica_crassiuscula: species(
    "suaeda_patagonica_crassiuscula",
    "Suaeda patagonica var. crassiuscula",
    "44. Chenopodiaceae",
    "Hierba anual, decumbente, baja.",
    "Hojas lineales, carnosas, de 7-15 mm; estambres 1-2; perigonio acrescente, con alas transversales.",
    "Buenos Aires; común en campos bajos."
  ),
  kochia_scoparia: species(
    "kochia_scoparia",
    "Kochia scoparia",
    "44. Chenopodiaceae",
    "Hierba anual de 30-100 cm de alto.",
    "Hojas pubescentes, ciliadas, de 1-5 cm; flores pequeñas sin brácteas; perigonio coriáceo en la fructificación, con segmentos alados.",
    "Asia y Europa; adventicia en América. Común en el oeste de Buenos Aires y rara cerca de la Capital Federal. N. v.: morenita, alfalfa criolla."
  ),
  beta_vulgaris_perennis: species(
    "beta_vulgaris_perennis",
    "Beta vulgaris var. perennis",
    "44. Chenopodiaceae",
    "Hierba perenne de 10-60 cm de alto.",
    "Hojas largamente pecioladas, ovado-oblongas, obtusas, sinuadas y rojizas; flores con bráctea y dos bractéolas; perigonio lignificado a la madurez.",
    "Europa y Asia; adventicia en América. Común en campos bajos salinos. N. v.: acelga."
  ),
  chenopodium_multifidum: species(
    "chenopodium_multifidum",
    "Chenopodium multifidum",
    "44. Chenopodiaceae",
    "Hierba perenne aromática, glanduloso-pubescente, con tallos rastreros.",
    "Hojas pinatisectas, de 3-15 mm, con segmentos lineales; flores verdosas de 1-1,5 mm en glomérulos axilares; semillas verticales; perigonio gamotépalo.",
    "Originaria de la región platense y adventicia en casi todo el mundo. Común en la estepa clímax. N. v.: paico."
  ),
  chenopodium_ambrosioides: species(
    "chenopodium_ambrosioides",
    "Chenopodium ambrosioides",
    "44. Chenopodiaceae",
    "Hierba anual o bienal aromática, glanduloso-pubescente, con tallos erectos de 1-1,5 m.",
    "Hojas ovado-lanceoladas, dentadas, de 6-9 cm; flores verdosas de 0,5-1 mm en panojas de espigas; perigonio dividido casi hasta la base; semillas generalmente horizontales.",
    "América; adventicia en regiones cálidas y templadas del globo. Frecuente cerca de Buenos Aires. N. v.: paico macho."
  ),
  chenopodium_retusum: species(
    "chenopodium_retusum",
    "Chenopodium retusum",
    "44. Chenopodiaceae",
    "Hierba bienal aromática, con tallos tendidos o ascendentes.",
    "Hojas espatuladas, obtusas, irregularmente dentadas, de 1-2 cm; flores de apenas 1 mm; tépalos 5, obtusos.",
    "Uruguay y Argentina, en suelos arenosos. Hallada en la Isla Martín García."
  ),
  chenopodium_macrospermum_halophilum: species(
    "chenopodium_macrospermum_halophilum",
    "Chenopodium macrospermum subsp. halophilum",
    "44. Chenopodiaceae",
    "Hierba anual, pruinosa, de 30-50 cm.",
    "Hojas triangulares, carnosas y dentadas; flores 3-4-meras en panojas densas de glomérulos; semillas verticales y horizontales en el mismo individuo.",
    "América del Sur, en suelos salinos."
  ),
  chenopodium_murale: species(
    "chenopodium_murale",
    "Chenopodium murale",
    "44. Chenopodiaceae",
    "Hierba anual de 20-50 cm.",
    "Hojas uniformemente aserradas, ovadas, adultas verdes, glabras o apenas pruinosas; flores 5-meras en panojas contraídas de glomérulos más cortos que las hojas; semillas horizontales.",
    "Europa; adventicia en América. Común en suelos modificados."
  ),
  chenopodium_pratericola: species(
    "chenopodium_pratericola",
    "Chenopodium pratericola",
    "44. Chenopodiaceae",
    "Hierba anual, erecta, de 30-80 cm.",
    "Hojas lineal-lanceoladas, las superiores enteras y las inferiores a veces con un lóbulo a cada lado cerca de la base, de 15-35 mm por 2-8 mm; flores muy pruinosas en panojas de glomérulos.",
    "América. Rara en la región."
  ),
  chenopodium_zobelii: species(
    "chenopodium_zobelii",
    "Chenopodium zobelii",
    "44. Chenopodiaceae",
    "Hierba anual, glauca, de cerca de 1 m de alto.",
    "Hojas rómbico-elípticas, irregularmente dentadas; sépalos planos; flores en panojas de glomérulos.",
    "Argentina, en suelos modificados."
  ),
  chenopodium_album: species(
    "chenopodium_album",
    "Chenopodium album",
    "44. Chenopodiaceae",
    "Hierba anual erecta.",
    "Hojas ovado-lanceoladas u ovadas, agudas, irregularmente dentadas o enteras, laxamente pruinosas, de hasta 6 cm por 3 cm; sépalos carenados; flores en espigas de glomérulos.",
    "Europa; adventicia en casi todo el mundo. N. v.: quinoa."
  ),
  chenopodium_hircinum: species(
    "chenopodium_hircinum",
    "Chenopodium hircinum",
    "44. Chenopodiaceae",
    "Hierba anual erecta, de cerca de 1 m de alto.",
    "Hojas hastado-trilobadas, obtusas, densamente pruinosas, de 2-4 cm; sépalos carenados; flores en espigas de glomérulos.",
    "América del Sur; introducida en África y Europa. Común en suelos modificados. N. v.: quinoa."
  ),
  holmbergia_tweedii: species(
    "holmbergia_tweedii",
    "Holmbergia tweedii",
    "44. Chenopodiaceae",
    "Arbusto apoyante o decumbente.",
    "Hojas alternas u opuestas, enteras, ovado-sagitadas; flores masculinas en espigas y femeninas axilares; fruto baya elipsoidal roja.",
    "Argentina, desde Salta hasta Buenos Aires."
  ),
  ranunculaceae: family(
    "ranunculaceae",
    "54. Ranunculaceae",
    "Dicotiledóneas del Grupo C.",
    "Gineceo dialicarpelar, hojas sin estípulas y estambres indefinidos."
  ),
  clematis_bonariensis: species(
    "clematis_bonariensis",
    "Clematis bonariensis",
    "54. Ranunculaceae",
    "Arbusto voluble con hojas opuestas.",
    "Hojas 3-folioladas; folíolos rígidos, lustrosos, generalmente enteros, ovados, acuminados en el ápice y semiacorazonados en la base, de 6-10 cm por 3-5 cm; flores dioicas en panojas.",
    "Norte de la Argentina y Uruguay. Frecuente en los bosques del Delta y de la ribera del Plata. Nombre vulgar: cabello de ángel."
  ),
  clematis_hilarii: species(
    "clematis_hilarii",
    "Clematis hilarii",
    "54. Ranunculaceae",
    "Arbusto voluble con hojas opuestas.",
    "Hojas 3-5-folioladas; folíolos tiernos, opacos, ovados, agudos, frecuentemente con un gran lóbulo a cada lado, menores que en la especie anterior, de 1-3,5 cm de ancho; flores dioicas en panojas.",
    "Sur de Brasil, Paraguay, Uruguay y norte de la Argentina. Común en el Delta y en la ribera. Nombre vulgar: cabello de ángel."
  ),
  anemone_triternata: species(
    "anemone_triternata",
    "Anemone triternata",
    "54. Ranunculaceae",
    "Hierba perenne, con raíz carnosa.",
    "Hojas radicales en roseta, finamente 3-4-ternadas; escapos pubescentes de 6-40 cm; involucro formado por 3 hojas verticiladas, finamente divididas; flores solitarias, blancas; sépalos lanceolados de 10 mm; aquenios velludos con estilo muy corto.",
    "América austral. Frecuente en la estepa clímax."
  ),
  ranunculus_flagelliformis: species(
    "ranunculus_flagelliformis",
    "Ranunculus flagelliformis",
    "54. Ranunculaceae",
    "Hierba anual diminuta y tendida, con tallos cuyos nudos producen hojas y flores.",
    "Hojas enteras, largamente pecioladas, elípticas o circulares, obtusas, algo atenuadas en la base, con lámina de 10-15 mm; flores amarillentas, diminutas, largamente pedunculadas; receptáculo pequeño, hemisférico; carpelos lisos.",
    "América del Sur. Charcas y arroyos del Delta y de la ribera platense."
  ),
  ranunculus_bonariensis: species(
    "ranunculus_bonariensis",
    "Ranunculus bonariensis",
    "54. Ranunculaceae",
    "Hierba anual diminuta, con hojas enteras y tallos tendidos cuyos nudos producen hojas y flores.",
    "Hojas largamente pecioladas, ovadas, algo acorazonadas en la base y sinuadas; flores diminutas; receptáculo cónico o cilíndrico. El manual cita formas con todas las hojas cordadas, con hojas basales cordadas y caulinares atenuadas, y con todas las hojas atenuadas en la base.",
    "América austral. Charcas, arroyos y lugares muy húmedos o inundables."
  ),
  ranunculus_platensis: species(
    "ranunculus_platensis",
    "Ranunculus platensis",
    "54. Ranunculaceae",
    "Hierba anual, velluda, con tallos ascendentes o tendidos.",
    "Hojas tripartidas, con segmentos profundamente lobados; flores diminutas, amarillas, solitarias, opuestas a las hojas; frutos inferiores con geotropismo positivo; carpelos lisos.",
    "Región del Plata, en suelos húmedos y fértiles."
  ),
  ranunculus_muricatus: species(
    "ranunculus_muricatus",
    "Ranunculus muricatus",
    "54. Ranunculaceae",
    "Hierba anual, glabérrima, con tallos ascendentes de 30-40 cm.",
    "Hojas pecioladas, con lámina semicircular profundamente trilobada y lóbulos divididos; flores amarillas, medianas, opuestas a las hojas; carpelos erizados de púas rígidas.",
    "Europa; adventicia en América. En suelos húmedos. Nombre vulgar: pata de gallo."
  ),
  ranunculus_repens: species(
    "ranunculus_repens",
    "Ranunculus repens",
    "54. Ranunculaceae",
    "Hierba perenne, glabérrima, con tallos ascendentes de 20-40 cm.",
    "Hojas pinaticompuestas, con 1-2 pares de segmentos y un segmento terminal, todos trilobados, con lóbulos aserrados o dentados; flores grandes, amarillas, solitarias o agrupadas en corto número; carpelos lisos.",
    "Europa; adventicia en América. Suelos húmedos. Nombre vulgar: botón de oro."
  ),
  ranunculus_apiifolius: species(
    "ranunculus_apiifolius",
    "Ranunculus apiifolius",
    "54. Ranunculaceae",
    "Hierba anual, erecta, glabérrima, de 30-60 cm.",
    "Hojas largamente pecioladas, con lámina orbicular 3-5-partida y lóbulos a su vez divididos; flores pequeñas, blancas o verdosas, dispuestas en cimas terminales; carpelos lisos.",
    "América austral, en lugares inundados. Nombre vulgar: apio del diablo."
  ),
  rutaceae: family(
    "rutaceae",
    "70. Rutaceae",
    "Dicotiledóneas del Grupo C.",
    "En esta rama aparece por flores actinomorfas y caracteres de estambres/hojas u ovario."
  ),
  ruta_chalepensis: species(
    "ruta_chalepensis",
    "Ruta chalepensis",
    "70. Rutaceae",
    "Sufrútice fétido de medio metro de alto.",
    "Hojas bipinatisectas, con segmentos oblanceolado-espatulados, obtusos y punteado-glandulosos; flores en cimas corimbiformes; pétalos amarillo-limón, cóncavos y laciniados en el margen; cápsulas globosas dehiscentes por 4-5 dientes apicales.",
    "Viejo Mundo; adventicia en América. Frecuente en suelos modificados. Nombre vulgar: ruda."
  ),
  fagara_hiemalis: species(
    "fagara_hiemalis",
    "Fagara hiemalis",
    "70. Rutaceae",
    "Arbolito con aguijones curvos en las ramas.",
    "Hojas imparipinadas, con raquis inerme y 6-8 pares de folíolos elíptico-lanceolados, crenados, glabros, de 15-25 mm; flores amarillentas en panojas cortas; flores masculinas con 4 estambres; gineceo con 1-2 carpelos; cocos globosos dehiscentes por dos valvas, con semillas negras.",
    "Sur de Brasil, Paraguay, Uruguay y norte de la Argentina. Se halla en bosques de la Isla Martín García y en el Delta del Paraná. Nombre vulgar: tembetarí."
  ),
  fagara_rhoifolia: species(
    "fagara_rhoifolia",
    "Fagara rhoifolia",
    "70. Rutaceae",
    "Árbol con aguijones rectos en las ramas.",
    "Hojas imparipinadas, con raquis provisto de largos aguijones rectos y generalmente 4-5 pares de folíolos ovado-lanceolados, crenado-aserrados, glabros, de 25-40 mm; flores pequeñas en panojas cortas; flores masculinas con 5 estambres.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina, hasta las barrancas del Paraná al norte de Buenos Aires. Nombre vulgar: tembetarí."
  ),
  nymphaeaceae: family(
    "nymphaeaceae",
    "52. Nymphaeaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas acuáticas con hojas flotantes peltadas y hojas sumergidas finamente laciniadas."
  ),
  cabomba_australis: species(
    "cabomba_australis",
    "Cabomba australis",
    "52. Nymphaeaceae",
    "Planta acuática sumergida y arraigada.",
    "Hojas sumergidas opuestas, pecioladas, de contorno circular, varias veces palmatisectas, con segmentos muy angostos; hojas florales alternas, flotantes, peltadas, con lámina lanceolada aguda en ambas puntas; flores flotantes, blancas; carpelos 3, biovulados.",
    "Nordeste de la Argentina y Uruguay, en aguas tranquilas y poco profundas. Frecuente en el Delta y en Río Santiago."
  ),
  crassulaceae: family(
    "crassulaceae",
    "61. Crassulaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas pigmeas de suelos húmedos, con hojas lineales enteras."
  ),
  crassula_bonariensis: species(
    "crassula_bonariensis",
    "Crassula bonariensis",
    "61. Crassulaceae",
    "Hierba anual, pigmea y glabra, con tallos de 2-6 cm de alto.",
    "Hojas opuestas, lineales, agudas, connatas en la base y enteras, de unos 5 mm; flores axilares, pedunculadas, 4-meras, con pedúnculos generalmente muy alargados a la fructificación; carpelos mucronados y polispermos.",
    "Suelos húmedos del sur de Brasil, Uruguay y nordeste de la Argentina. Común en el césped de la ribera platense y en campos del interior."
  ),
  crassula_solieri: species(
    "crassula_solieri",
    "Crassula solieri",
    "61. Crassulaceae",
    "Hierba anual pigmea y glabra, semejante a Crassula bonariensis.",
    "Hojas opuestas, lineales y enteras; flores axilares, sésiles o cortísimamente pedunculadas, 4-meras; carpelos aristados en el ápice y pluriseminados.",
    "Chile y Argentina. Hallada en Pergamino."
  ),
  papaveraceae: family(
    "papaveraceae",
    "57. Papaveraceae",
    "Dicotiledóneas del Grupo C.",
    "Flores cigomorfas o irregulares; cáliz con 2 sépalos y pétalos 4, o plantas robustas con látex."
  ),
  argemone_mexicana: species(
    "argemone_mexicana",
    "Argemone mexicana",
    "57. Papaveraceae",
    "Hierba anual, glabra, erecta, glauca, de cerca de 1 m de alto, con jugo lechoso amarillento.",
    "Hojas alternas, oblanceoladas, lobadas, con lóbulos espinoso-dentados, manchas blancas, de 10-25 cm por 5-10 cm; flores actinomorfas, amarillo claro, solitarias, de 3-7 cm; hojas espinosas; cápsulas espinosas.",
    "América cálida y templada. Rara en la región platense. Nombre vulgar: cardo santo."
  ),
  papaver_dubium: species(
    "papaver_dubium",
    "Papaver dubium",
    "57. Papaveraceae",
    "Hierba anual, ascendente, ramosa en la base, hirsuta y con látex.",
    "Hojas alternas, pinatisectas o bipinatisectas, no espinosas; flores actinomorfas, grandes, solitarias, largamente pedunculadas, de color escarlata; cápsulas oblongas, glabras, dehiscentes por poros apicales.",
    "Europa; adventicia en América. Nombre vulgar: amapola silvestre."
  ),
  fumaria_capreolata: species(
    "fumaria_capreolata",
    "Fumaria capreolata",
    "57. Papaveraceae",
    "Hierba anual, voluble, glabra, con tallos cuadrangulares.",
    "Hojas alternas con pecíolo enroscante; segmentos ovados, lobados o divididos, casi tan anchos como largos; flores cigomorfas, espolonadas, rosadas, grandes, de 7-15 mm; pedicelos fructíferos recurvados; aquenios globosos, lisos, con punta obtusa.",
    "Europa; adventicia en América. Común en suelos modificados. Nombre vulgar: flor de pajarito."
  ),
  fumaria_agraria: species(
    "fumaria_agraria",
    "Fumaria agraria",
    "57. Papaveraceae",
    "Hierba anual, voluble.",
    "Hojas con segmentos ovados, casi tan anchos como largos; flores cigomorfas, espolonadas, rosadas, grandes, de 7-15 mm; pedicelos fructíferos erectos; aquenios rugoso-papilosos.",
    "Europa; adventicia en América del Sur. Común en cultivos de lino de Pergamino."
  ),
  fumaria_officinalis: species(
    "fumaria_officinalis",
    "Fumaria officinalis",
    "57. Papaveraceae",
    "Hierba anual, glabra, con tallos difusos y ascendentes.",
    "Hojas finamente divididas, con segmentos lineal-lanceolados; flores cigomorfas, espolonadas, purpúreas, de 4-6 mm; fruto deprimido-globoso, de 2 mm de diámetro.",
    "Europa; adventicia en América. Rara en la región: Capitán Sarmiento y Pergamino."
  ),
  resedaceae: family(
    "resedaceae",
    "60. Resedaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores cigomorfas con estambres alrededor de 20 o flores actinomorfas con numerosos estambres."
  ),
  reseda_luteola: species(
    "reseda_luteola",
    "Reseda luteola",
    "60. Resedaceae",
    "Hierba anual o bienal, erecta y glabra.",
    "Hojas lineal-lanceoladas y enteras; flores amarillo-verdosas en racimos alargados; pétalos 4-5 desiguales, el inferior lineal y entero, los superiores lobados; cápsula globosa con costillas y 3-4 dientes apicales.",
    "Europa. Cultivada como planta de adorno y a veces escapada; subespontánea entre escombros. Nombre vulgar: resedá."
  ),
  leguminosae: family(
    "leguminosae",
    "64. Leguminosae",
    "Dicotiledóneas del Grupo C.",
    "Ovario unicarpelar unilocular; fruto legumbre."
  ),
  desmanthus_virgatus: species(
    "desmanthus_virgatus",
    "Desmanthus virgatus",
    "64. Leguminosae - Mimosoideae",
    "Hierba perenne con raíces gruesas; tallos erectos, costados y glabrescentes, de 0,5-1 m de alto.",
    "Hojas bipinadas con foliólulos muy pequeños; flores blancas en cabezuelas; estambres 5-10; legumbres lineales, agudas, comprimidas y dehiscentes.",
    "América tropical y subtropical. En campos altos del norte de la provincia de Buenos Aires."
  ),
  mimosa_bonplandii: species(
    "mimosa_bonplandii",
    "Mimosa bonplandii",
    "64. Leguminosae - Mimosoideae",
    "Arbusto inerme de 2-3 m de altura, glabrescente.",
    "Hojas bipinadas, con 2-6 pares de divisiones primarias, cada una con 11-20 pares de foliólulos; flores amarillas en capítulos globosos; estambres unidos en la base; frutos con pelos estrellados.",
    "Endémica de la región platense. Común en terrenos inundables del Delta y de la ribera."
  ),
  mimosa_pilulifera: species(
    "mimosa_pilulifera",
    "Mimosa pilulifera",
    "64. Leguminosae - Mimosoideae",
    "Arbusto o arbolito inerme, con ramas jóvenes tomentosas.",
    "Hojas bipinadas, con un solo par de divisiones primarias, cada una con 15-31 pares de foliólulos; flores amarillas en cabezuelas esféricas axilares, largamente pedunculadas; estambres libres hasta la base; frutos lineales muy comprimidos con tomento de pelitos estrellados.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Hallada en la ribera platense y en la Isla Martín García."
  ),
  mimosa_pigra: species(
    "mimosa_pigra",
    "Mimosa pigra",
    "64. Leguminosae - Mimosoideae",
    "Arbusto hirsuto con aguijones curvos y pelos tiesos bronceados.",
    "Hojas grandes, sensitivas, con raquis provisto de aguijones y 5-15 pares de divisiones primarias, cada una con numerosos foliólulos oblongo-lineales; flores rosadas o blancas en capítulos arracimados o axilares; lamentos con 7-21 artejos caducos.",
    "América y África tropicales. Común en el Delta y en Martín García. Nombre vulgar: carpinchera."
  ),
  mimosa_vellosiella: species(
    "mimosa_vellosiella",
    "Mimosa vellosiella",
    "64. Leguminosae - Mimosoideae",
    "Arbusto rastrero con aguijones y pelos tendidos cenicientos.",
    "Hojas sensitivas, con 4-10 pares de divisiones primarias, cada una con numerosos foliólulos oblongos; flores en cabezuelas globosas arracimadas; lamentos muy comprimidos, con 3-15 artículos.",
    "Sur de Brasil, Paraguay y nordeste de la Argentina hasta el Delta y Martín García."
  ),
  prosopis_alba: species(
    "prosopis_alba",
    "Prosopis alba",
    "64. Leguminosae - Mimosoideae",
    "Árbol robusto, de copa amplia, con espinas escasas.",
    "Hojas 1-3-yugas, con pínulas de 25-36 pares de foliólulos oblongo-lineales; flores amarillentas en racimos densos; frutos largos, rectos o curvos, amarillo claro.",
    "Norte y centro de la Argentina. Cerca de Buenos Aires sólo se cita un ejemplar viejísimo en la barranca de San Isidro. Nombre vulgar: algarrobo blanco."
  ),
  acacia_caven: species(
    "acacia_caven",
    "Acacia caven",
    "64. Leguminosae - Mimosoideae",
    "Árbol de 5-6 m de altura, con ramas pardas onduladas y espinas estipulares rectas en los nudos.",
    "Flores anaranjadas, fragantes, dispuestas en cabezuelas; hojas bipinadas con foliólulos muy pequeños; legumbres gruesas, indehiscentes y negras.",
    "América templado-cálida. Frecuente en bosques de tala de las barrancas del Paraná y de la ribera platense. Nombre vulgar: espinillo, aromo."
  ),
  acacia_bonariensis: species(
    "acacia_bonariensis",
    "Acacia bonariensis",
    "64. Leguminosae - Mimosoideae",
    "Arbusto erecto o apoyante, de 2-3 m de alto, con ramas provistas de fuertes aguijones curvos.",
    "Flores blancas en espigas; hojas bipinadas, con aguijones sobre el raquis y 3-6 pares de ramificaciones primarias con numerosos foliólulos; legumbre dehiscente, oblonga y comprimida.",
    "Sur de Brasil, Uruguay y norte y centro de la Argentina. Frecuente en talares, terraplenes ferroviarios y alambrados. Nombre vulgar: ñapinday."
  ),
  inga_uruguensis: species(
    "inga_uruguensis",
    "Inga uruguensis",
    "64. Leguminosae - Mimosoideae",
    "Árbol achaparrado, con ramas jóvenes amarillento-tomentosas.",
    "Hojas paripinadas, con 4-6 pares de folíolos lanceolados grandes y raquis alado; flores grandes en espigas cortas; cáliz y corola amarillento-tomentosos; estambres blancos; legumbres comprimidas, tomentosas, con sutura y nervadura muy engrosadas.",
    "Uruguay, Paraguay, sur de Brasil y nordeste de la Argentina. Bosques higrófilos del Delta e Isla Martín García. Nombre vulgar: ingá."
  ),
  calliandra_parvifolia: species(
    "calliandra_parvifolia",
    "Calliandra parvifolia",
    "64. Leguminosae - Mimosoideae",
    "Arbusto inerme de 2-3 m de alto.",
    "Hojas bipinadas, con foliólulos oblongos muy pequeños; flores en cabezuelas axilares hemisféricas grandes; filamentos estaminales muy largos, blancos en la parte inferior y rosados en la superior; fruto legumbre dehiscente.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de la Argentina hasta el Río de la Plata. Frecuente en matorrales del Delta y de la ribera. Nombre vulgar: flor de seda."
  ),
  enterolobium_contortisiliquum: species(
    "enterolobium_contortisiliquum",
    "Enterolobium contortisiliquum",
    "64. Leguminosae - Mimosoideae",
    "Árbol elevado, de corteza gris y copa amplia.",
    "Hojas bipinadas, con 3-7 pares de divisiones primarias, cada una con 8-23 pares de foliólulos lanceolados; flores blancas en racimos de cabezuelas; fruto ancho, arriñonado o auriculiforme, comprimido, indehiscente y negro.",
    "América tropical y subtropical. Rara en el Delta y en la Isla Martín García. Nombre vulgar: timbó, pacará, oreja de negro."
  ),
  bauhinia_candicans: species(
    "bauhinia_candicans",
    "Bauhinia candicans",
    "64. Leguminosae - Caesalpinioideae",
    "Árbol de 3-8 m de altura, con aguijones estipulares curvos.",
    "Hojas simples, bilobadas, de unos 10 cm por 10 cm; flores grandes y blancas; cáliz gamosépalo, hendido lateralmente durante la antesis; pétalos libres y estambres 10.",
    "Uruguay y norte de la Argentina. Cultivada como ornamental y a veces subespontánea cerca de Buenos Aires. Nombre vulgar: falsa caoba, pezuña de vaca, pata de buey."
  ),
  parkinsonia_aculeata: species(
    "parkinsonia_aculeata",
    "Parkinsonia aculeata",
    "64. Leguminosae - Caesalpinioideae",
    "Arbolito de 6-8 m de alto.",
    "Flores anaranjadas; hojas pinadas con raquis primario corto y espinoso, y raquis secundarios largos, planos, con numerosos foliólulos caducos; legumbre lineal bivalva.",
    "América tropical y subtropical. Cultivada para cercos vivos y espontánea en bosques próximos a la ribera del Plata y terraplenes. Nombre vulgar: cina-cina."
  ),
  gleditsia_triacanthos: species(
    "gleditsia_triacanthos",
    "Gleditsia triacanthos",
    "64. Leguminosae - Caesalpinioideae",
    "Árbol elevado, con tronco provisto de grandes espinas ramificadas.",
    "Hojas bipinadas con foliólulos elípticos y glabros; flores pequeñas en racimos; legumbres rectas o arqueadas, de 30-50 cm por 3-5 cm.",
    "América del Norte. Cultivada como forestal y subespontánea en el Delta. Nombre vulgar: acacia negra, corona de cristo."
  ),
  cassia_corymbosa: species(
    "cassia_corymbosa",
    "Cassia corymbosa",
    "64. Leguminosae - Caesalpinioideae",
    "Arbusto glabro de 1-3 m de alto.",
    "Hojas pinadas con estípulas basales caducas; raquis de unos 4 cm con 3 pares de folíolos oblongos y agudos; flores amarillas en racimos axilares y terminales; estambres desiguales; legumbres cilíndricas de unos 10 cm.",
    "Sur de Brasil, Uruguay y norte de la Argentina hasta Buenos Aires. En talares y bosques del Delta y de la ribera. Nombre vulgar: sen del campo, rama negra."
  ),
  cassia_occidentalis: species(
    "cassia_occidentalis",
    "Cassia occidentalis",
    "64. Leguminosae - Caesalpinioideae",
    "Hierba perenne, glabra, de hasta 1 m de alto.",
    "Hojas paripinadas, 4-6-yugas, con folíolos ovado-lanceolados, acuminados; flores amarillas grandes en racimos terminales; legumbres comprimidas, largas y estrechas, con 20-40 semillas.",
    "Cosmopolita, muy común en el norte de la Argentina. Rara en la región platense."
  ),
  caesalpinia_gilliesii: species(
    "caesalpinia_gilliesii",
    "Caesalpinia gilliesii",
    "64. Leguminosae - Caesalpinioideae",
    "Arbusto de 1-3 m de alto.",
    "Hojas bipinadas y glabras; racimos terminales multifloros, con pedúnculos y pedicelos muy glandulosos; cáliz glanduloso; pétalos amarillos de 2-3 cm; estambres y estilo rojos de 8-9 cm; legumbre comprimida de 7-10 cm, bivalva.",
    "Norte y centro de la Argentina y Uruguay. Común en barrancas del Paraná y a veces junto a alambrados y cercos. Nombre vulgar: lagaña de perro, barba de chivo."
  ),
  ulex_europaeus: species(
    "ulex_europaeus",
    "Ulex europaeus",
    "64. Leguminosae - Papilionoideae",
    "Arbusto de 1-2 m de alto.",
    "Ramas espiniformes y hojas reducidas a un pecíolo espinoso; flores grandes, amarillas; cáliz coloreado y bipartido; legumbres comprimidas, cortas, con 1-3 semillas.",
    "Europa; cultivada para cercos vivos y a veces subespontánea. Nombre vulgar: tojo."
  ),
  galactia_marginalis: species(
    "galactia_marginalis",
    "Galactia marginalis",
    "64. Leguminosae - Papilionoideae",
    "Hierba rastrera, con raíz napiforme.",
    "Hojas unifolioladas, con folíolo lanceolado de 2-5 cm por 5-10 mm; flores 1-3 en las axilas de las hojas, con corola azul o violácea; legumbre lineal.",
    "América cálida. Rara en campos altos de Abasto."
  ),
  lupinus_bracteolaris: species(
    "lupinus_bracteolaris",
    "Lupinus bracteolaris",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual cubierta de pelos leonados largos.",
    "Hojas digitadas con 5 folíolos oblanceolados; estípulas grandes; flores azuladas en racimos terminales; legumbre más o menos comprimida, con frecuencia seríceo-velluda.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. En suelos arenosos. Muy rara cerca de Buenos Aires."
  ),
  lupinus_multiflorus: species(
    "lupinus_multiflorus",
    "Lupinus multiflorus",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, de 50 cm de alto, densamente argénteo-serícea.",
    "Hojas digitadas con 7-9 folíolos oblanceolados; flores azules en racimos terminales; legumbre más o menos comprimida.",
    "Uruguay y nordeste de la Argentina. En dunas y arenales; citada para Isla Martín García."
  ),
  vicia_nana: species(
    "vicia_nana",
    "Vicia nana",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual, tendida o voluble y pubescente.",
    "Flores pequeñas azules en racimos axilares de 6-12 flores; hojas con 4-6 pares de folíolos alternos, lineal-oblongos o elípticos, mucronados, de menos de 1 cm; zarcillo poco ramificado; legumbres cortas.",
    "Uruguay y nordeste de la Argentina. En campos húmedos."
  ),
  vicia_montevidensis: species(
    "vicia_montevidensis",
    "Vicia montevidensis",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual, con tallos volubles y pubescentes.",
    "Flores azules en racimos axilares; hojas con 3-6 pares de folíolos alternos, elípticos, enteros o aserrados, de 12-17 mm; estípulas aserradas; legumbres comprimidas, oblongas.",
    "Uruguay y nordeste de la Argentina. En los bosques del Delta."
  ),
  vicia_selloi: species(
    "vicia_selloi",
    "Vicia selloi",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual y voluble, glabra o casi glabra.",
    "Hojas 1-2-yugas, con folíolos lineal-filiformes de menos de 0,5 mm de anchura; flores azules en racimos axilares paucifloros; legumbres cortas y anchas.",
    "Uruguay y nordeste de la Argentina. Rara en la región."
  ),
  vicia_graminea: species(
    "vicia_graminea",
    "Vicia graminea",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual y voluble, glabra o casi glabra.",
    "Hojas con 2-3 pares de folíolos lineal-oblongos de 0,7-3 mm de anchura; flores azules en racimos axilares paucifloros; legumbres oblongas y comprimidas.",
    "América del Sur. Muy común en los alrededores de Buenos Aires, especialmente en matorrales de la ribera."
  ),
  vicia_magellanica: species(
    "vicia_magellanica",
    "Vicia magellanica",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual, rastrera, glabra o algo pubescente.",
    "Flores solitarias, largamente pedunculadas; hojas con 1-2 pares de folíolos oblongo-lineales; legumbre lineal-oblonga.",
    "América austral. Accidental en los alrededores de Eva Perón."
  ),
  vicia_linearifolia: species(
    "vicia_linearifolia",
    "Vicia linearifolia",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual débil, rastrera o voluble, laxamente pubescente.",
    "Flores de 4-7 mm, 1-3, sésiles o casi sésiles en las axilas de las hojas; hojas con 3-5 pares de folíolos lineales de 0,5-1 mm de anchura.",
    "América austral. Rara en la región: Los Talas."
  ),
  vicia_sativa: species(
    "vicia_sativa",
    "Vicia sativa",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual robusta, rastrera o voluble, glabra o casi glabra, con tallos tetragonales.",
    "Flores generalmente 2-3 en cada axila, de 2-3 cm, con corolas azules o violáceas; hojas con 4-8 pares de folíolos obovados u obovado-oblongos; legumbres castañas.",
    "Europa. Cultivada como forrajera y adventicia en suelos modificados."
  ),
  vicia_angustifolia: species(
    "vicia_angustifolia",
    "Vicia angustifolia",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual de flores solitarias.",
    "Folíolos oblongo-elípticos u oblongo-lineales; flores solitarias de 1,5-1,8 cm; legumbres negras.",
    "Europa; adventicia en América. En suelos modificados."
  ),
  lathyrus_crassipes: species(
    "lathyrus_crassipes",
    "Lathyrus crassipes",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual, glabra o casi glabra, voluble, con tallos estrechamente alados.",
    "Flores generalmente 2 por racimo, raramente 1 o 3; hojas uniyugas con folíolos lineal-lanceolados de 25-50 mm por 3-7 mm; corolas azuladas; ovario y legumbre glabérrimos; legumbre lineal, recta.",
    "América austral. Común en el norte de la provincia de Buenos Aires. Nombre vulgar: arvejilla."
  ),
  lathyrus_paranensis: species(
    "lathyrus_paranensis",
    "Lathyrus paranensis",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual, glabra o casi glabra, de tallos bialados y volubles de 20-100 cm.",
    "Flores 3-9 por racimo; hojas uniyugas con folíolos lanceolados, agudos, de 5-12 cm por 4-14 mm; corolas azules; ovario y legumbres glabérrimos; legumbres rectas, comprimidas y oscuras.",
    "Uruguay y nordeste de la Argentina. Frecuente en bosques húmedos del Delta y de la ribera platense."
  ),
  lathyrus_hirsutus: species(
    "lathyrus_hirsutus",
    "Lathyrus hirsutus",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual trepadora, casi glabra, con tallos anchamente alados.",
    "Ovarios y legumbres hirsutos; hojas uniyugas con folíolos lanceolados y mucronados; pedúnculos con 2-3 flores nutantes, rosadas o azules; legumbre de 3 cm.",
    "Sur de Europa. Adventicia en la Argentina; citada para el Delta."
  ),
  lathyrus_pubescens: species(
    "lathyrus_pubescens",
    "Lathyrus pubescens",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, voluble, pubescente y glandulosa, con rizomas leñosos y tallos estrechamente bialados.",
    "Folíolos uniyugos, lanceolado-ovados, de 25-60 mm por 5-20 mm; flores azules en racimos axilares 6-16-floros; plantas seríceo-pubescentes o tomentosas; legumbres lineales.",
    "América austral. Frecuente en matorrales del Delta y de la ribera. Nombre vulgar: arvejilla peluda."
  ),
  lathyrus_tomentosus: species(
    "lathyrus_tomentosus",
    "Lathyrus tomentosus",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne velluda, con raíces leñosas y tallos decumbentes o volubles de 20-60 cm.",
    "Folíolos lineal-lanceolados de 15-50 mm por 2-6 mm; hojas plateadas, uniyugas; zarcillos nulos o muy cortos; flores azules de 2-3 cm en racimos 3-4-floros; estilo de 7-10 mm; legumbres velludas.",
    "Campos secos de Uruguay y este de la Argentina; estepa clímax."
  ),
  lathyrus_subulatus: species(
    "lathyrus_subulatus",
    "Lathyrus subulatus",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, seríceo-pubescente, con tallos decumbentes o algo volubles.",
    "Folíolos uniyugos, lineal-subulados, de 1,5-4,5 cm; flores azules o violáceas de 1,5-2 cm en racimos erguidos de 2-3 flores; estilo de 3-4 mm; frutos lineales de 4 cm.",
    "Sur de Brasil, Uruguay y nordeste y centro de la Argentina. Rara en el norte de Buenos Aires; más común en las Sierras."
  ),
  lathyrus_parodii: species(
    "lathyrus_parodii",
    "Lathyrus parodii",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, glabra o casi glabra, con tallos bialados.",
    "Folíolos uniyugos, lineal-lanceolados, de 6-11 cm; racimos con 5-11 flores azulado-violáceas; ovario glabro; legumbre de 3-4,5 cm.",
    "Sur de Brasil y región platense: Delta y San Isidro."
  ),
  erythrina_crista_galli: species(
    "erythrina_crista_galli",
    "Erythrina crista-galli",
    "64. Leguminosae - Papilionoideae",
    "Árbol de 4-8 m de alto, con tronco de hasta 1 m de diámetro en la base y corteza gris, rugosa.",
    "Ramas con aguijones; hojas caducas, pinadas, trifolioladas, con raquis aculeado y folíolos elípticos u ovados, enteros y glabros; flores rojas en racimos hojosos; legumbres multiseminadas.",
    "Sur de Brasil, Paraguay, Uruguay y norte de la Argentina hasta Buenos Aires. Muy común en pajonales del Delta y de la ribera platense. Nombre vulgar: seibo."
  ),
  desmodium_uncinatum: species(
    "desmodium_uncinatum",
    "Desmodium uncinatum",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne cubierta por pelos ganchosos, con rizoma leñoso y tallos débiles, tendidos o apoyantes.",
    "Estípulas lineales; folíolos ovados de 3-5 cm; flores rosadas; fruto con 4-7 artejos peludos.",
    "América tropical y subtropical. Frecuente en bosques del Delta y en Punta Lara."
  ),
  desmodium_affine: species(
    "desmodium_affine",
    "Desmodium affine",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne sin pelos ganchosos, rizomatosa, con tallos rastreros o ascendentes, pubérulos o glabros.",
    "Folíolos membranosos, romboidales, laxamente pubescentes, el terminal de 2,5-8 cm por 1,5-5 cm; flores blancas o rosadas; fruto con 3-6 artejos pegajosos.",
    "América cálida. Rara en el Delta y en Martín García."
  ),
  stylosanthes_montevidensis: species(
    "stylosanthes_montevidensis",
    "Stylosanthes montevidensis",
    "64. Leguminosae - Papilionoideae",
    "Hierba rizomatosa de 20-50 cm de alto.",
    "Frutos hirsutos; hojas envainadoras, con folíolos lineal-lanceolados; cabezuelas apicales; flores amarillas pequeñas.",
    "Sur de Brasil, Uruguay, Paraguay y norte y centro de la Argentina. Campos secos del norte de Buenos Aires."
  ),
  stylosanthes_gracilis_subviscosa: species(
    "stylosanthes_gracilis_subviscosa",
    "Stylosanthes gracilis var. subviscosa",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne con raíz leñosa y tallos ascendentes, ramosos e híspidos.",
    "Frutos glabros o casi glabros; hojas envainadoras, con folíolos lanceolados de nervaduras muy marcadas; cabezuelas cerdosas; flores amarillas pequeñas.",
    "Paraguay, Uruguay y norte de la Argentina. Accidental en el Dock Sur."
  ),
  medicago_lupulina: species(
    "medicago_lupulina",
    "Medicago lupulina",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual o perenne, con tallos decumbentes.",
    "Fruto uniseminado, reniforme, de 1,5-3 mm, inerme, espiralado sólo en la parte superior; folíolos pubescentes casi circulares, dentados en la parte superior; estípulas grandes, poco dentadas; flores amarillas pequeñas en racimos capituliformes.",
    "Hemisferio oriental; adventicia en América. En suelos modificados. Nombre vulgar: lupulina."
  ),
  medicago_sativa: species(
    "medicago_sativa",
    "Medicago sativa",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, con raíz gruesa y profunda; tallos erectos de un metro o más.",
    "Folíolos elípticos dentados en el ápice; estípulas lanceoladas casi enteras; flores azules o violáceas, a veces blancas, en racimos alargados; frutos espiralados, sin gloquidios.",
    "Europa; cultivada como forrajera y a veces subespontánea. Nombre vulgar: alfalfa."
  ),
  medicago_minima: species(
    "medicago_minima",
    "Medicago minima",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual velluda, con tallos decumbentes.",
    "Estípulas enteras o casi enteras; folíolos dentados en la parte superior; flores amarillas muy pequeñas; frutos espiralados, con largos gloquidios ganchudos.",
    "Europa; adventicia en la Argentina. Muy común en campos dedicados a la ganadería. Nombre vulgar: trébol de carretilla."
  ),
  medicago_arabica: species(
    "medicago_arabica",
    "Medicago arabica",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual semidecumbente, casi glabra.",
    "Frutos globosos, espiralados, formados por 4-5 espiras anchas y planas en el borde, con gloquidios entrecruzados no ganchudos; folíolos grandes, con una mancha oscura central; estípulas grandes, dentadas.",
    "Viejo Mundo; introducida en América. En suelos modificados."
  ),
  medicago_hispida: species(
    "medicago_hispida",
    "Medicago hispida",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual, glabra, con tallos decumbentes o ascendentes.",
    "Frutos espiralados, con 2-4 espiras de borde carenado, con gloquidios ganchudos o sin ellos; folíolos dentados, sin mancha; estípulas laciniadas. El manual cita var. apiculata, con espinas muy cortas, y var. confinis, sin espinas y con pequeños tubérculos.",
    "Europa; adventicia en Sudamérica. En campos con hacienda, jardines, etc. Nombre vulgar: trébol de carretilla."
  ),
  trifolium_fragiferum: species(
    "trifolium_fragiferum",
    "Trifolium fragiferum",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, rastrera y radicante.",
    "Cáliz glabro abajo y largamente pubescente arriba, plurinervado, acrescente, vesiculoso-inflado y reticulado a la madurez; folíolos obovado-elípticos; cabezuelas fructíferas ovoideas, largamente pedunculadas; frutos con dos semillas.",
    "Europa; adventicia en la Argentina. Vegeta en campos bajos arcillosos."
  ),
  trifolium_pratense: species(
    "trifolium_pratense",
    "Trifolium pratense",
    "64. Leguminosae - Papilionoideae",
    "Hierba bienal o perenne, erecta y glabra.",
    "Cabezuelas terminales sésiles; estípulas anchas; folíolos elípticos, con una mancha blanquecina central en forma de V; flores violáceas; cáliz con 10 nervaduras; legumbres monospermas.",
    "Europa. Cultivada como forrajera y espontánea en suelos modificados. Nombre vulgar: trébol rojo."
  ),
  trifolium_repens: species(
    "trifolium_repens",
    "Trifolium repens",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, glabra, rastrera y estolonífera.",
    "Tallos rastreros, radicantes, sin flores cleistógamas subterráneas; folíolos elípticos u obacorazonados, con mancha blanquecina en V; flores blancas o ligeramente rosadas en cabezuelas esféricas; cáliz con 10 nervaduras; legumbres con 3-4 semillas.",
    "Europa; adventicia en América. Forrajera, muy común en suelos algo húmedos. Nombre vulgar: trébol."
  ),
  trifolium_polymorphum: species(
    "trifolium_polymorphum",
    "Trifolium polymorphum",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne velluda, rastrera y estolonífera.",
    "Tallos con manojos de flores cleistógamas subterráneas en los nudos; folíolos sin mancha blanca, obcordados; flores chasmógamas rojas o rosadas; frutos con 2-5 semillas.",
    "América austral. Común en la estepa clímax."
  ),
  trifolium_argentinense: species(
    "trifolium_argentinense",
    "Trifolium argentinense",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, rastrera y glabra.",
    "Tallos con flores cleistógamas subterráneas; folíolos sin mancha blanca; flores chasmógamas amarillentas en cabezuelas esféricas; cáliz con 10 nervaduras; frutos con 1-2 semillas.",
    "Uruguay y nordeste de la Argentina. Común en campos bajos."
  ),
  trifolium_filiforme: species(
    "trifolium_filiforme",
    "Trifolium filiforme",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual, con tallos rastreros.",
    "Cáliz con 5 nervaduras; flores amarillas en capítulos 10-17-floros; hojas cortamente pecioladas, con folíolos obovados y emarginados.",
    "Europa. Adventicia en el Delta."
  ),
  melilotus_alba: species(
    "melilotus_alba",
    "Melilotus alba",
    "64. Leguminosae - Papilionoideae",
    "Hierba bienal, glabra, con tallos de 1-2 m de alto.",
    "Flores blancas; folíolos oblongo-elípticos; frutos de 3-3,5 mm, con 1-2 semillas; hierba con olor a cumarina.",
    "Europa. Cultivada como forrajera y melífera; con frecuencia espontánea en rastrojos y escombros. Nombre vulgar: trébol de olor blanco."
  ),
  melilotus_messanensis: species(
    "melilotus_messanensis",
    "Melilotus messanensis",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual rastrera.",
    "Flores amarillas; plantas decumbentes; folíolos cuneiformes; racimos axilares cortos; frutos ovoideos, rugosos, de 7-8 mm, con 1-3 semillas.",
    "Europa; adventicia en Buenos Aires. En campos bajos y salados."
  ),
  melilotus_indica: species(
    "melilotus_indica",
    "Melilotus indica",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual, de 0,5-1 m de alto, con tallos erectos.",
    "Flores amarillas de 2-3 mm; estípulas triangulares, dentadas en la base; folíolos oblanceolados, redondeados y denticulados arriba; frutos globosos de 2 mm.",
    "Asia y África; adventicia en todo el globo. Muy común en suelos modificados. Nombre vulgar: trébol de olor."
  ),
  melilotus_officinalis: species(
    "melilotus_officinalis",
    "Melilotus officinalis",
    "64. Leguminosae - Papilionoideae",
    "Hierba bienal, de cerca de 1 m de alto.",
    "Flores amarillas de 4-6 mm; estípulas lineales, subuladas y enteras; folíolos elíptico-lanceolados, dentados; frutos de 3-4 mm con pocas semillas.",
    "Europa. Accidental cerca de Buenos Aires."
  ),
  phaseolus_adenanthus: species(
    "phaseolus_adenanthus",
    "Phaseolus adenanthus",
    "64. Leguminosae - Papilionoideae",
    "Enredadera perenne.",
    "Flores amarillas de 2-2,5 cm en racimos axilares cortos; folíolos anchamente ovados y pubescentes; quilla terminada en un rostro largo enroscado; legumbres comprimidas y pubescentes.",
    "América cálida. Se halla en los bosques del Delta y de la ribera platense."
  ),
  phaseolus_prostratus: species(
    "phaseolus_prostratus",
    "Phaseolus prostratus",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, rastrera.",
    "Flores amarillas de 1,5 cm en racimos largamente pedunculados; folíolos ovados o lanceolados, glabros o pubescentes; legumbres lineales y velludas.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Rara en los campos del norte de Buenos Aires."
  ),
  lotus_corniculatus: species(
    "lotus_corniculatus",
    "Lotus corniculatus",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, con tallos tendidos o ascendentes.",
    "Hojas con 3 folíolos terminales y 2 folíolos basales que simulan grandes estípulas; flores amarillas en umbelas axilares densas; legumbres de 2,5 cm.",
    "Europa; adventicia en América. Frecuente en campos bajos y junto a vías férreas."
  ),
  canavalia_bonariensis: species(
    "canavalia_bonariensis",
    "Canavalia bonariensis",
    "64. Leguminosae - Papilionoideae",
    "Liana con hojas coriáceas y lustrosas.",
    "Folíolos enteros; flores grandes, carnosas, rojo-violáceas, en racimos péndulos; cáliz bilabiado; legumbres gruesas, anchas, de 8-12 cm por 3-4 cm, con 2-6 semillas orbiculares de hilo muy largo.",
    "Selvas húmedas del nordeste de la Argentina y regiones limítrofes. Frecuente en bosques prístinos del Delta y de la ribera platense. Nombre vulgar: isipó."
  ),
  camptosema_rubicundum: species(
    "camptosema_rubicundum",
    "Camptosema rubicundum",
    "64. Leguminosae - Papilionoideae",
    "Liana robusta y glabra.",
    "Folíolos elípticos, obtusos, a veces escotados en el ápice, coriáceos, enteros y glabros; flores rojo vivo en racimos densos; cáliz con 4 dientes triangulares; legumbres comprimidas de 4-7 cm por casi 1 cm.",
    "Selvas marginales del nordeste de la Argentina y regiones limítrofes. Rara en la Isla Martín García y en la ribera del Plata. Nombre vulgar: isipó colorado."
  ),
  vigna_luteola: species(
    "vigna_luteola",
    "Vigna luteola",
    "64. Leguminosae - Papilionoideae",
    "Hierba voluble, laxamente pubescente.",
    "Folíolos ovado-lanceolados, enteros; flores amarillas en racimos axilares largamente pedunculados; estilo barbelado en la parte interior; legumbres casi cilíndricas y velludas, con 4-8 semillas.",
    "América cálida. Común en bañados y matorrales del Delta y de la ribera platense. Semillas comestibles. Nombre vulgar: porotillo."
  ),
  rhynchosia_senna: species(
    "rhynchosia_senna",
    "Rhynchosia senna",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, con tallos tendidos o ascendentes.",
    "Folíolos ovados u orbiculares, enteros, glabros en el haz y algo pubescentes en el envés; flores amarillas pequeñas en racimos axilares; legumbres algo curvadas.",
    "Regiones templado-cálidas de América. Rara en barrancas del Paraná y campos secos. Nombre vulgar: sen de campo."
  ),
  rhynchosia_texana: species(
    "rhynchosia_texana",
    "Rhynchosia texana",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, con tallos volubles o tendidos.",
    "Folíolos lanceolados o lineales, raramente ovados, obtusos y pubescentes; flores amarillas, solitarias o 2-3; legumbres estrechas.",
    "América templado-cálida. Rara en la región."
  ),
  geoffroea_decorticans: species(
    "geoffroea_decorticans",
    "Geoffroea decorticans",
    "64. Leguminosae - Papilionoideae",
    "Arbolito de 3-5 m de alto, con tronco verdoso irregular, ramas intrincadas y espinosas, y raíces gemíferas cundidoras.",
    "Hojas pinadas, con 3-13 pares de folíolos oblongos y un folíolo terminal; flores amarillas con estrías rojas, pequeñas, en racimos cortos; fruto drupáceo, ovoideo y monospermo.",
    "América austral. En barrancas del Paraná desde San Nicolás y San Pedro hasta San Isidro. Nombre vulgar: chañar."
  ),
  poecilanthe_parviflora: species(
    "poecilanthe_parviflora",
    "Poecilanthe parviflora",
    "64. Leguminosae - Papilionoideae",
    "Árbol de 8-15 m de altura, con corteza parda y amplia copa.",
    "Hojas alternas, imparipinadas, con 5-7 folíolos ovados y agudos; flores blanquecinas en racimos axilares; fruto chato, discoidal, biconvexo, indehiscente, con una sola semilla y un diente apical torcido.",
    "Bosques higrófilos del río Uruguay, hasta el Delta y la Isla Martín García."
  ),
  adesmia_bicolor: species(
    "adesmia_bicolor",
    "Adesmia bicolor",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, tendida, glabra, con tallos radicantes en los nudos.",
    "Hojas glabras o laxamente pubescentes; folíolos de menos de 10 mm, 8-10-yugos, elípticos, obtusos y enteros; flores amarillas en racimos terminales; lomento con 5-7 artículos ligeramente pubescentes.",
    "Uruguay y norte y centro de la Argentina. Común en la estepa clímax."
  ),
  adesmia_latifolia: species(
    "adesmia_latifolia",
    "Adesmia latifolia",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, rastrera, radicante en los nudos.",
    "Hojas glabras o laxamente pubescentes; folíolos de 15-26 mm, 6-12-yugos, oblongos, anchos y glabros; flores grandes, amarillas, en racimos terminales.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Muy rara cerca de Buenos Aires: Ensenada."
  ),
  adesmia_incana: species(
    "adesmia_incana",
    "Adesmia incana",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, rastrera, radicante y seríceo-pubescente.",
    "Hojas densamente seríceo-incanas, con 5-9 pares de folíolos oblongos y obtusos; flores amarillas en racimos terminales.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. En suelos arenosos; citada para barrancas del Paraná y dunas del litoral atlántico."
  ),
  aeschynomene_montevidensis: species(
    "aeschynomene_montevidensis",
    "Aeschynomene montevidensis",
    "64. Leguminosae - Papilionoideae",
    "Arbusto glabro de 1,5-3 m de alto.",
    "Hojas con 15-27 pares de folíolos; estípulas caducas; flores anaranjadas de 15 mm; lomentos glabros con artejos elípticos.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en pajonales y lugares inundables del Delta y de la ribera del Plata."
  ),
  aeschynomene_rudis: species(
    "aeschynomene_rudis",
    "Aeschynomene rudis",
    "64. Leguminosae - Papilionoideae",
    "Hierba erecta de 40-70 cm, hirsuta.",
    "Hojas con 7-22 pares de folíolos glabros; racimos paucifloros; corolas amarillas de 6-12 mm; artejos castaños, casi rectangulares, de 3,5-4 mm de anchura.",
    "América del Sur cálida. Rara en la región: Isla Santiago."
  ),
  aeschynomene_sensitiva: species(
    "aeschynomene_sensitiva",
    "Aeschynomene sensitiva",
    "64. Leguminosae - Papilionoideae",
    "Hierba anual, erecta, glabra o casi glabra.",
    "Hojas con 8-21 pares de folíolos elíptico-oblongos; flores amarillas con estrías rojas, de 7-8 mm, en panojas; frutos lineales de 6 mm de ancho, con artejos negros casi cuadrados.",
    "América tropical. Hallada en el Delta y en la Boca del Riachuelo."
  ),
  poiretia_tetraphylla: species(
    "poiretia_tetraphylla",
    "Poiretia tetraphylla",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, erecta, con rizoma corto leñoso y tallos de 30-60 cm, glabros y punteado-glandulosos.",
    "Hojas glabras con 2 pares de folíolos elípticos u ovados grandes; flores amarillas en racimos axilares; frutos formados por 2-4 artejos glabros y glandulosos.",
    "Campos del sur de Brasil, Uruguay y norte y centro de la Argentina. Rara en los alrededores de La Plata."
  ),
  indigofera_suffruticosa: species(
    "indigofera_suffruticosa",
    "Indigofera suffruticosa",
    "64. Leguminosae - Papilionoideae",
    "Sufrútice o arbustito de 0,30-3 m de alto, seríceo-pubescente, con pelos malpigiáceos en T.",
    "Hojas imparipinadas, con 7-21 folíolos elíptico-lanceolados; flores anaranjado-violáceas en racimos axilares; anteras apiculadas; frutos lineales, curvos y dehiscentes.",
    "América cálida. Se cultiva para la producción de añil; rara en Palermo, Isla Maciel, Isla Santiago, etc. Nombre vulgar: añil."
  ),
  sesbania_punicea: species(
    "sesbania_punicea",
    "Sesbania punicea",
    "64. Leguminosae - Papilionoideae",
    "Arbusto o arbolito glabro de 2-4 m de alto.",
    "Flores rojas; hojas con 7-14 pares de folíolos elípticos enteros; racimos péndulos; legumbres tetrágonas con 4 alas longitudinales.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Común en lugares inundables del Delta y de la ribera del Plata; florece en verano."
  ),
  sesbania_virgata: species(
    "sesbania_virgata",
    "Sesbania virgata",
    "64. Leguminosae - Papilionoideae",
    "Arbusto de 1-2 m de alto, algo seríceo cuando joven y luego glabro.",
    "Flores amarillas; hojas con 12-20 pares de folíolos oblongos, enteros, obtusos y mucronulados; racimos multifloros; legumbre de 4-7 cm con suturas gruesas y sin alas.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Se halla en el Delta y en la ribera platense."
  ),
  lonchocarpus_nitidus: species(
    "lonchocarpus_nitidus",
    "Lonchocarpus nitidus",
    "64. Leguminosae - Papilionoideae",
    "Árbol de 10-15 m de altura, con tronco de cerca de medio metro de diámetro y corteza gris casi lisa.",
    "Hojas glabras con 7-9 folíolos elíptico-lanceolados; flores azuladas; frutos casi glabros, chatos, con 1-5 semillas.",
    "Sur de Brasil, Paraguay y nordeste de la Argentina. En selvas marginales del Delta y de Punta Lara."
  ),
  galega_officinalis: species(
    "galega_officinalis",
    "Galega officinalis",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, glabra, de cerca de un metro de alto.",
    "Hojas imparipinadas, con 6-12 pares de folíolos elípticos enteros y un folíolo terminal; flores azules en racimos densos; estambres monadelfos; legumbres lineales, casi cilíndricas y estriadas.",
    "Europa; adventicia en América. Planta medicinal y tóxica para el ganado; común en suelos húmedos, vías férreas, etc."
  ),
  tephrosia_cinerea: species(
    "tephrosia_cinerea",
    "Tephrosia cinerea",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, con raíz fusiforme o napiforme y tallos tendidos puberulento-cenicientos.",
    "Hojas imparipinadas, con 7-13 folíolos lineal-lanceolados, obtusos y mucronados; flores violáceas en racimos opositifolios.",
    "América cálida. Aparece a veces en suelos arenosos: Capital Federal e Isla Santiago."
  ),
  astragalus_distinens: species(
    "astragalus_distinens",
    "Astragalus distinens",
    "64. Leguminosae - Papilionoideae",
    "Hierba perenne, rastrera, ceniciento-serícea o glabrescente.",
    "Hojas con folíolos lineales; flores azules en racimos axilares; estambre vexilar libre; legumbres algo infladas.",
    "Norte y centro de la Argentina y Uruguay. Se encuentra en las barrancas de Escobar y Campana."
  ),
  violaceae: family(
    "violaceae",
    "87. Violaceae",
    "Dicotiledóneas del Grupo C.",
    "Estambres 5 y estípulas herbáceas."
  ),
  anchietea_parvifolia: species(
    "anchietea_parvifolia",
    "Anchietea parvifolia",
    "87. Violaceae",
    "Arbusto voluble, con tronco grueso y hojas alternas.",
    "Semillas aladas; cápsulas grandes, membranosas, de 3,5-5 cm; hojas pecioladas, elípticas o lanceolado-elípticas, sinuado-aserradas, glabras, de 3-8 cm por 1,5-2 cm; flores rosadas en fascículos axilares, con corola de unos 8 mm y espolón de 5 mm; semillas de 1 cm de diámetro.",
    "América del Sur subtropical, hasta las selvas marginales del Delta y del río de la Plata."
  ),
  viola_tricolor: species(
    "viola_tricolor",
    "Viola tricolor",
    "87. Violaceae",
    "Hierba anual o bienal, con tallos ramosos, tendidos o ascendentes, glabros o pubescentes.",
    "Semillas no aladas; sépalos prolongados en la base; flores solitarias sobre largos pedúnculos axilares; estípulas foliáceas, lirado-pinatífidas; hojas ovadas, crenadas, largamente pecioladas; corola blanca y amarilla.",
    "Europa; adventicia en América. Frecuente en campos cultivados. Nombre vulgar: pensamiento salvaje."
  ),
  viola_odorata: species(
    "viola_odorata",
    "Viola odorata",
    "87. Violaceae",
    "Hierba perenne, rizomatosa, con estolones y hojas en roseta.",
    "Semillas no aladas; estípulas lineal-lanceoladas reducidas; hojas acorazonado-reniformes, más anchas que largas, menudamente crenadas; sépalos ovados, obtusos; pétalos violáceos o blancos.",
    "Europa y Asia. Cultivada como ornamental y a veces espontánea en bosques de talas de los alrededores de Buenos Aires, Magdalena, Punta del Indio, etc. Nombre vulgar: violeta."
  ),
  viola_japonica: species(
    "viola_japonica",
    "Viola japonica",
    "87. Violaceae",
    "Hierba perenne, con hojas en roseta.",
    "Semillas no aladas; estípulas lineal-lanceoladas reducidas; hojas acorazonado-ovadas, más largas que anchas; sépalos lanceolados, agudos; pétalos violáceos.",
    "Japón. Cultivada como ornamental y a veces espontánea. Nombre vulgar: violeta francesa."
  ),
  hybanthus_parviflorus: species(
    "hybanthus_parviflorus",
    "Hybanthus parviflorus",
    "87. Violaceae",
    "Hierba perenne, ascendente, cortamente glanduloso-pubescente, de 20-50 cm de alto.",
    "Semillas no aladas; sépalos no prolongados en su base; flores pequeñas blancas en las axilas de las hojas superiores, formando seudoracimos terminales; hojas opuestas, lanceoladas o elípticas, agudas, cortamente pecioladas, aserradas, glabras, de 1-3 cm; cápsulas globosas de 4-5 mm.",
    "América del Sur subtropical, hasta el centro de la Argentina. Frecuente en bosques del Delta y de la ribera platense; florece en primavera."
  ),
  capparidaceae: family(
    "capparidaceae",
    "58. Capparidaceae",
    "Dicotiledóneas del Grupo C.",
    "Estípulas espiniformes o hojas 3-5-folioladas con estípulas espiniformes."
  ),
  cleome_trachycarpa: species(
    "cleome_trachycarpa",
    "Cleome trachycarpa",
    "58. Capparidaceae",
    "Hierba perenne, erecta, híspido-glandulosa, con aguijones rectos, de 40-80 cm de alto.",
    "Hojas palmaticompuestas, largamente pecioladas, con 5 folíolos ovado-lanceolados enteros; flores rosadas en racimos, largamente pedunculadas; sépalos lineales; pétalos unguiculados de 2-3 cm; cápsula lineal de 6-7 cm, híspido-velluda; carpóforo de 4-6 cm.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de la Argentina, en suelos húmedos."
  ),
  cleome_titubans: species(
    "cleome_titubans",
    "Cleome titubans",
    "58. Capparidaceae",
    "Hierba perenne, híspido-glandulosa, de 30-50 cm de alto.",
    "Tallos y pecíolos con aguijones; hojas palmaticompuestas, con 3-5 folíolos ovados, sinuados, a veces con algunas hojas simples ovadas; flores rosadas en racimos terminales; sépalos lineales; pétalos de 1 cm; cápsula lineal, glabra, de 3-4 cm; carpóforo de 5-15 mm.",
    "Región platense, en pajonales."
  ),
  cleome_spinosa: species(
    "cleome_spinosa",
    "Cleome spinosa",
    "58. Capparidaceae",
    "Hierba anual, erecta, híspido-glandulosa, de 40-100 cm de alto.",
    "Hojas palmaticompuestas, con 5-7 folíolos oblanceolados; hojas superiores simples, ovadas; pecíolos espinosos en la base; flores purpúreas o blancas en racimos; cápsula lineal, glabra, de 6-8 cm; carpóforo de 50-70 mm.",
    "América tropical. Rara en el Delta."
  ),
  polygalaceae: family(
    "polygalaceae",
    "72. Polygalaceae",
    "Dicotiledóneas del Grupo C.",
    "Estambres monadelfos, fruto bilocular, cáliz no espolonado; hierbas."
  ),
  polygala_australis: species(
    "polygala_australis",
    "Polygala australis",
    "72. Polygalaceae",
    "Planta anual o bienal, baja, de 5-15 cm de alto, con tallos ascendentes.",
    "Semillas terminadas en una coronita de pelos; hojas alternas, lineal-oblongas o elípticas, de 6-8 mm; racimos espiciformes compactos; flores blanquecinas, de 1,8-2,2 mm.",
    "Nordeste de la Argentina y Uruguay. Común en la estepa clímax; florece en primavera."
  ),
  polygala_linoides: species(
    "polygala_linoides",
    "Polygala linoides",
    "72. Polygalaceae",
    "Hemicriptófita con tallos ascendentes de 7-40 cm de alto.",
    "Semillas sin coronita de pelos; cápsula sin bordes alados, orbicular-elíptica; hojas lineales, agudas, de 6-17 mm; racimos espiciformes de 1,5-12 cm; flores blancas con tintes violáceos, de 2,3-3,7 mm; semillas cilíndricas, pubescentes y negras.",
    "Sur de Brasil, Uruguay y nordeste y centro de la Argentina. Vive en suelos arenosos."
  ),
  polygala_bonariensis: species(
    "polygala_bonariensis",
    "Polygala bonariensis",
    "72. Polygalaceae",
    "Hemicriptófita de 10-35 cm de alto.",
    "Semillas sin coronita de pelos; cápsula con uno o dos bordes alados; hojas numerosas, densas, estrechamente lineales, de 6-15 mm; racimos espiciformes laxos; flores blanquecinas con tintes violáceos, de 3-4 mm; semillas pubescentes.",
    "Nordeste de Argentina, hasta el norte de Buenos Aires."
  ),
  polygala_duarteana: species(
    "polygala_duarteana",
    "Polygala duarteana",
    "72. Polygalaceae",
    "Hemicriptófita de 30-80 cm de alto, con tallos ascendentes y laxamente pubescentes.",
    "Semillas sin coronita de pelos; cápsula con uno o dos bordes alados; hojas pocas y laxas, lineal-lanceoladas, de 10-40 mm; racimos espiciformes laxos; flores de 2-3,2 mm; semillas velludas.",
    "Uruguay y norte de la Argentina, hasta la Isla Martín García y las proximidades de Buenos Aires."
  ),
  tropaeolaceae: family(
    "tropaeolaceae",
    "67. Tropaeolaceae",
    "Dicotiledóneas del Grupo C.",
    "Estambres libres, fruto trilocular, cáliz espolonado; enredaderas."
  ),
  tropaeolum_pentaphyllum: species(
    "tropaeolum_pentaphyllum",
    "Tropaeolum pentaphyllum",
    "67. Tropaeolaceae",
    "Enredadera perenne, con tubérculos subterráneos globosos o fusiformes pardos y tallos volubles glabros.",
    "Hojas alternas, largamente pecioladas, palmaticompuestas, con 5 folíolos lanceolados o elípticos, enteros y glabros; flores con cáliz verdoso prolongado en un largo espolón rojo vivo; pétalos 2, pequeños, azules; fruto carnoso negruzco-azulado.",
    "América cálida. Común en el Delta y en los bosques de la ribera platense; florece en primavera. Nombre vulgar: flor de pitito."
  ),
  malvaceae: family(
    "malvaceae",
    "81. Malvaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores actinomorfas con estambres numerosos y monadelfos formando un tubo."
  ),
  hibiscus_cisplatinus: species(
    "hibiscus_cisplatinus",
    "Hibiscus cisplatinus",
    "81. Malvaceae",
    "Arbusto de 1-2 m de alto, con frecuencia aculeado en tallos y pecíolos.",
    "Hojas largamente pecioladas, ovadas, generalmente 3-lobadas, a veces enteras o 5-lobadas, aserradas, de 7-10 cm por 4-7 cm; flores solitarias axilares, largamente pedunculadas; pétalos rosa fuerte con nervaduras más oscuras, de 6-8 cm; fruto cápsula loculicida híspida, con muchas semillas pilosas.",
    "Pajonales y lugares húmedos del sur de Brasil, Uruguay y nordeste de la Argentina, hasta el Delta y la ribera del Plata. Florece a fines del verano. Nombre vulgar: rosa del río."
  ),
  pavonia_sepium: species(
    "pavonia_sepium",
    "Pavonia sepium",
    "81. Malvaceae",
    "Arbustito de 1-2 m de alto, levemente pubescente.",
    "Carpelos con 3 fuertes aristas cubiertas de pelos retrorsos; hojas ovado-lanceoladas, acuminadas y aserradas; flores solitarias en axilas de hojas superiores, cleistógamas primaverales y chasmógamas estivales; pétalos amarillos.",
    "América cálida. Común en los bosques del Delta y de la ribera del Plata; florece en primavera y verano."
  ),
  pavonia_xanthogloea: species(
    "pavonia_xanthogloea",
    "Pavonia xanthogloea",
    "81. Malvaceae",
    "Arbusto de 1-2 m de alto, densamente cubierto de pelos estrellados.",
    "Carpelos no aristados, tuberculado-rugosos en el dorso, suborbiculares y levemente pubescentes; hojas triangular-hastadas, discolores, aserradas, con pelos estrellados densos en el envés; flores cleistógamas y chasmógamas axilares, solitarias; pétalos rosados con venas purpúreas.",
    "Nordeste de la Argentina hasta la ribera del Plata; florece en otoño."
  ),
  pavonia_hastata: species(
    "pavonia_hastata",
    "Pavonia hastata",
    "81. Malvaceae",
    "Arbusto de 1-2 m de alto, cubierto de pelos estrellados.",
    "Carpelos reticulados; bractéolas del calículo espatuladas; hojas largamente pecioladas, triangulares, sagitadas o truncadas en la base, discolores y aserradas; flores cleistógamas o chasmógamas, largamente pedunculadas y solitarias; pétalos rosados con venas violáceas.",
    "Sur de Brasil, Paraguay, Uruguay y norte de la Argentina, hasta los bosques del Delta y de la ribera platense."
  ),
  pavonia_pulchra: species(
    "pavonia_pulchra",
    "Pavonia pulchra",
    "81. Malvaceae",
    "Arbusto de 1-1,5 m de alto, cubierto de pelos glandulosos.",
    "Carpelos reticulados, con retículo notable; bractéolas del calículo lanceoladas; hojas ovado-deltoideas, acorazonadas, crenado-aserradas; flores cleistógamas con 5 estambres y chasmógamas con muchos estambres; pétalos rosados de 2 cm.",
    "Hallada únicamente en las abras de la selva marginal de Punta Lara, cerca de Eva Perón."
  ),
  pavonia_consobrina: species(
    "pavonia_consobrina",
    "Pavonia consobrina",
    "81. Malvaceae",
    "Arbusto de 1-1,5 m de alto, cubierto de pelos estrellados.",
    "Carpelos apenas reticulados; bractéolas del calículo lanceoladas; hojas lanceoladas, cortamente pecioladas, de base redondeada y borde crenado; flores axilares casi sésiles, cleistógamas y chasmógamas; pétalos rosados con nervaduras rojizas, de 1,5 cm.",
    "Paraguay, Uruguay y nordeste de la Argentina, hasta el Delta y la ribera del Plata."
  ),
  modiola_caroliniana: species(
    "modiola_caroliniana",
    "Modiola caroliniana",
    "81. Malvaceae",
    "Hierba perenne, rastrera, radicante en los nudos.",
    "Hojas largamente pecioladas, circulares, palmatisectas; flores axilares, solitarias, de color minio; pedúnculos por lo general más cortos que el pecíolo; carpelos con dos óvulos, divididos en dos cavidades superpuestas y maduros biaristados.",
    "América cálida y templado-cálida. Común en suelos modificados. Nombres vulgares: sánalo todo, mercurio."
  ),
  sphaeralcea_bonariensis: species(
    "sphaeralcea_bonariensis",
    "Sphaeralcea bonariensis",
    "81. Malvaceae",
    "Sufrútice de 1-1,5 m de alto, con tallos erectos cubiertos de pelos estrellados amarillentos.",
    "Cáliz con calículo; carpelos con 2-3 óvulos, maduros múticos o biaristados; hojas pecioladas, ovaladas, a menudo con un lóbulo a cada lado de la base, crenadas, glabrescentes en el haz y velludas en el envés; flores minio en cincinios axilares que forman un seudotirso alargado.",
    "Sur de Brasil, Uruguay, Paraguay y nordeste de la Argentina. Común en bosques de talas y a lo largo de terraplenes ferroviarios. Nombre vulgar: malvavisco."
  ),
  abutilon_pauciflorum: species(
    "abutilon_pauciflorum",
    "Abutilon pauciflorum",
    "81. Malvaceae",
    "Arbusto de 1-1,5 m de alto, densamente cubierto por pelos estrellados.",
    "Cáliz sin calículo; flores siempre solitarias sobre pedúnculos largos y gruesos; pétalos anaranjado-rojizos; hojas anchamente acorazonadas y discolores; carpelos con 5 o más óvulos.",
    "Brasil, Paraguay, Uruguay y norte de la Argentina. Vegeta en la Isla Martín García y en bosquecillos de las barrancas del Paraná."
  ),
  abutilon_molle: species(
    "abutilon_molle",
    "Abutilon molle",
    "81. Malvaceae",
    "Arbusto de 1-2,5 m de alto, densamente cubierto de pelos estrellados.",
    "Cáliz sin calículo; flores generalmente geminadas; pétalos amarillos; hojas anchamente acorazonadas y concolores; mericarpos con 5 o más semillas.",
    "América cálida. Frecuente en suelos modificados, vías férreas, etc.; florece a fines del invierno."
  ),
  anoda_cristata: species(
    "anoda_cristata",
    "Anoda cristata",
    "81. Malvaceae",
    "Hierba anual, erecta o decumbente.",
    "Flores sin calículo; carpelos con paredes laterales incompletas que dejan ver la única semilla péndula u horizontal; hojas ovado-triangulares, 3-5-lobuladas y más o menos pubescentes; flores azules, pequeñas, solitarias, largamente pedunculadas.",
    "América. Ruderal; florece en verano y otoño. Nombre vulgar: malva cimarrona."
  ),
  modiolastrum_gilliesii: species(
    "modiolastrum_gilliesii",
    "Modiolastrum gilliesii",
    "81. Malvaceae",
    "Hierba pubescente, con raíces tuberosas.",
    "Calículo con bractéolas soldadas en la base del cáliz; mericarpos castaños, con una doble fila de prominencias notables en el dorso; hojas laciniadas, cubiertas de pelos estrellados; flores rojo-violáceas, vistosas.",
    "Uruguay y centro de la Argentina, hasta el norte de Buenos Aires."
  ),
  modiolastrum_malvifolium: species(
    "modiolastrum_malvifolium",
    "Modiolastrum malvifolium",
    "81. Malvaceae",
    "Hierba perenne, rastrera, radicante en los nudos, con tallos floríferos erguidos de 15-20 cm de alto.",
    "Mericarpos con dorso casi liso, ligeramente pubescentes en la parte superior, con la cámara vacía igual o mayor que la seminífera; raíces no tuberosas; flores amarillas o algo rojizas, largamente pedunculadas; hojas largamente pecioladas, orbiculares, pentalobadas y dentadas.",
    "Paraguay y norte de la Argentina. Frecuente en la ribera del Plata."
  ),
  modiolastrum_lateritium: species(
    "modiolastrum_lateritium",
    "Modiolastrum lateritium",
    "81. Malvaceae",
    "Hierba perenne, pubescente, con tallos tendidos radicantes y tallos floríferos erguidos.",
    "Mericarpos con dorso casi liso, largamente hirsutos en la parte superior, con la cámara estéril mucho menor que la seminífera; flores rojas o rosadas sobre pedúnculos más largos que las hojas; hojas pecioladas, ovadas, 3-5-partidas, con segmentos inciso-dentados; calículo de 3 brácteas anchas.",
    "Nordeste de la Argentina y Uruguay. Común en los matorrales de la ribera; florece en primavera."
  ),
  sida_leprosa: species(
    "sida_leprosa",
    "Sida leprosa",
    "81. Malvaceae",
    "Hierba perenne con tallos tendidos.",
    "Plantas decumbentes, con carpelos múticos; hojas flabeladas o reniformes, crenadas, verdes y laxamente escamosas en el haz, densamente cubiertas de pelos escamosos plateados en el envés, de 1-2 cm; flores solitarias, largamente pedunculadas; pétalos amarillo azufre de 13-16 mm; carpelos con pelitos escamosos.",
    "América, desde México hasta Patagonia, en suelos salobres."
  ),
  sida_hastata: species(
    "sida_hastata",
    "Sida hastata",
    "81. Malvaceae",
    "Hierba perenne tendida, cubierta de pelos estrellados.",
    "Plantas decumbentes, con carpelos múticos; hojas ovadas u orbiculares, dentadas, verdes en ambas caras, con pelos estrellados, de 2-3,5 cm; flores solitarias, con pedúnculo de 1-2 cm; pétalos amarillo claro con nervaduras rojizas, de 1-2 cm; carpelos glabros.",
    "América cálida, en suelos secos."
  ),
  sida_spinosa_angustifolia: species(
    "sida_spinosa_angustifolia",
    "Sida spinosa var. angustifolia",
    "81. Malvaceae",
    "Caméfita erecta, ramosa, pubescente, de 30-70 cm de alto.",
    "Plantas erectas, con carpelos de dos aristas apicales; ovario con 5 carpelos; hojas con una espinita en la base del pecíolo, oblongas, crenado-dentadas, de 1-3 cm por 3-8 mm; flores axilares solitarias, amarillo crema.",
    "América cálida. Común en jardines y suelos modificados."
  ),
  sida_rhombifolia: species(
    "sida_rhombifolia",
    "Sida rhombifolia",
    "81. Malvaceae",
    "Caméfita erecta, de 50-80 cm de alto.",
    "Plantas erectas, con carpelos de dos aristas apicales; ovario con 10-14 carpelos; hojas sin espinita basal, cortamente pecioladas, rómbicas, agudas, dentadas, de 3-6 cm; flores axilares solitarias, amarillas, largamente pedunculadas. Incluye variedades canariensis y rhomboidea citadas en el manual.",
    "Regiones tropicales y subtropicales del globo. Común en suelos modificados y comunidades arbóreas. Nombres vulgares: afata, escoba dura."
  ),
  monteiroa_glomerata: species(
    "monteiroa_glomerata",
    "Monteiroa glomerata",
    "81. Malvaceae",
    "Sufrútice de cerca de 1 m de alto, laxamente estrellado-pubescente.",
    "Calículo de 3 bractéolas ovado-lanceoladas; carpelos 10-18, con un solo óvulo erecto, dehiscentes ventral y apicalmente; hojas largamente pecioladas, ovado-triangulares y crenadas; flores violáceas, en cimas paucifloras densas en el extremo de ramitas desnudas; frutos con más de 12 carpelos.",
    "Paraguay, Uruguay y nordeste de la Argentina. Común en pajonales del Delta y de la ribera del Plata; florece en primavera."
  ),
  malvastrum_coromandelianum: species(
    "malvastrum_coromandelianum",
    "Malvastrum coromandelianum",
    "81. Malvaceae",
    "Sufrútice pubescente, de 0,5 m de alto.",
    "Calículo formado por 1-3 bractéolas o nulo; mericarpos indehiscentes; hojas pecioladas, ovadas, agudas, irregularmente dentadas; flores muy cortamente pedunculadas, agrupadas en las axilas de las hojas superiores; pétalos amarillos; frutos con 10-12 carpelos, cada uno con una corta arista dorsal y dos espinitas.",
    "América cálida. Común en suelos modificados."
  ),
  malva_parviflora: species(
    "malva_parviflora",
    "Malva parviflora",
    "81. Malvaceae",
    "Hierba anual rastrera.",
    "Calículo de 3 bractéolas lineales; hojas suborbiculares, lobadas; pétalos violáceos, poco más largos que los sépalos; estigmas distribuidos a lo largo de las ramas subuladas del estilo.",
    "Europa; adventicia en América. En suelos modificados. Nombre vulgar: malva."
  ),
  malva_sylvestris: species(
    "malva_sylvestris",
    "Malva sylvestris",
    "81. Malvaceae",
    "Planta erguida, bienal.",
    "Bractéolas del calículo ovadas; hojas suborbiculares, lobuladas, largamente pecioladas; pétalos violáceos, 2-3 veces más largos que el cáliz.",
    "Europa; adventicia en América. En suelos modificados. Nombre vulgar: malva."
  ),
  malva_nicaensis: species(
    "malva_nicaensis",
    "Malva nicaensis",
    "81. Malvaceae",
    "Planta decumbente.",
    "Bractéolas del calículo ovadas; hojas suborbiculares, lobadas; pétalos blanquecinos, una o dos veces tan largos como el cáliz.",
    "Europa; adventicia en América. En suelos modificados."
  ),
  sapindaceae: family(
    "sapindaceae",
    "77. Sapindaceae",
    "Dicotiledóneas del Grupo C.",
    "Árboles, arbustos o plantas volubles; en la clave aparece por hojas/folíolos y ovario 3-5-locular o frutos trialados."
  ),
  dodonaea_viscosa: species(
    "dodonaea_viscosa",
    "Dodonaea viscosa",
    "77. Sapindaceae",
    "Arbusto glabro, pegajoso, de 1-2 m de alto.",
    "Hojas simples, lanceoladas, cortamente pecioladas y enteras; flores pequeñas en panojas contraídas; fruto cápsula trialada o bialada con alas grandes, membranosas y cobrizas.",
    "Especie polimorfa pantropical. Frecuente en las dunas de la Isla Martín García."
  ),
  allophylus_edulis: species(
    "allophylus_edulis",
    "Allophylus edulis",
    "77. Sapindaceae",
    "Árbol de 4-10 m, con corteza rojiza.",
    "Hojas pecioladas, trifolioladas, glabras; folíolos lanceolados, aserrados, el terminal algo mayor; flores pequeñas blanquecinas en racimos; frutos constituidos por drupas ovoides rojizas, casi sin carne, del tamaño de una arveja.",
    "América tropical. Frecuente en bosques marginales del Delta y de la ribera platense. Nombre vulgar: chalchal."
  ),
  cardiospermum_halicacabum: species(
    "cardiospermum_halicacabum",
    "Cardiospermum halicacabum",
    "77. Sapindaceae",
    "Enredadera anual, glabra salvo las partes jóvenes lanuginosas.",
    "Hojas largamente pecioladas, membranosas, bicompuestas, con 3 divisiones de primer orden divididas a su vez en 3 segmentos o folíolos ovados, irregularmente aserrados o lobados; inflorescencias de 6-9 cm con zarcillos en la base; flores blancas pequeñas; cápsulas membranosas infladas de 25 mm.",
    "Pantropical. Común en pajonales y matorrales de la ribera platense. Nombre vulgar: globitos."
  ),
  cardiospermum_grandiflorum: species(
    "cardiospermum_grandiflorum",
    "Cardiospermum grandiflorum",
    "77. Sapindaceae",
    "Enredadera perenne, leñosa en la base, corta y densamente pubescente.",
    "Hojas largamente pecioladas, compuestas o bicompuestas, con 3 folíolos o con tres divisiones primarias trifolioladas; folíolos ovados, irregularmente dentados; flores blancas de unos 10 mm; cápsulas membranosas infladas de 25-30 mm.",
    "América y África cálidas. Común en los bosques del Delta y de la ribera. Nombre vulgar: cipó."
  ),
  urvillea_uniloba: species(
    "urvillea_uniloba",
    "Urvillea uniloba",
    "77. Sapindaceae",
    "Liana con zarcillos y hojas alternas trifolioladas.",
    "Folíolos ovados, dentado-lobados; tirsos axilares más largos que las hojas, con dos zarcillos en el pedúnculo; flores pequeñas amarillentas; fruto trisámara de 25-30 mm, con semillas en el centro del fruto y ala alrededor.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de Argentina, hasta los bosques del Delta y de la ribera del Plata. Nombre vulgar: cipó."
  ),
  serjania_meridionalis: species(
    "serjania_meridionalis",
    "Serjania meridionalis",
    "77. Sapindaceae",
    "Liana glabra o casi glabra.",
    "Hojas biternadas, con folíolos ovado-lanceolados, agudos y paucidentados; tirsos axilares con zarcillos; flores pequeñas; fruto trisámara de 2 cm, con la parte seminífera apical y ala inferior.",
    "Bosques del sur de Brasil, Paraguay, Uruguay y nordeste de Argentina, hasta el Delta y la Isla Martín García."
  ),
  zygophyllaceae: family(
    "zygophyllaceae",
    "69. Zygophyllaceae",
    "Dicotiledóneas del Grupo C.",
    "Folíolos pequeños, oblongos y enteros; ovario 3-5-locular, estambres 8-10."
  ),
  porlieria_microphylla: species(
    "porlieria_microphylla",
    "Porlieria microphylla",
    "69. Zygophyllaceae",
    "Arbusto intrincadamente ramoso, de 1-3 m de alto.",
    "Hojas pubescentes, paripinadas, con 5-20 pares de folíolos oblongos, enteros, muy apretados y pequeños; flores amarillas 4-meras; cocos negros o pardos.",
    "Norte y centro de la Argentina y Bolivia. Rara en la región: barrancas del Paraná en Zárate, San Nicolás, etc."
  ),
  sterculiaceae: family(
    "sterculiaceae",
    "82. Sterculiaceae",
    "Dicotiledóneas del Grupo C.",
    "Hojas simples, ovario 5-locular y estambres monadelfos."
  ),
  buettneria_urticifolia: species(
    "buettneria_urticifolia",
    "Buettneria urticifolia",
    "82. Sterculiaceae",
    "Arbusto de 1,5 m de alto, con tallos costados, híspidos y con aguijones curvos.",
    "Hojas largamente pecioladas, ovadas, acuminadas, aserradas, pubescentes en ambas caras, de 5-8 cm; flores pequeñas en umbelas largamente pedunculadas; sépalos lanceolados de unos 6 mm; fruto cápsula globosa erizada, de 12 mm.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Se halla en las selvas marginales del Delta y de la Isla Martín García."
  ),
  celastraceae: family(
    "celastraceae",
    "76. Celastraceae",
    "Dicotiledóneas del Grupo C.",
    "Flores unisexuales o estambres 4; en la clave aparece por ovario bilocular o unilocular."
  ),
  schaefferia_uruguayensis: species(
    "schaefferia_uruguayensis",
    "Schaefferia uruguayensis",
    "76. Celastraceae",
    "Arbusto o arbolito glabro, de 1,5-4 m de alto, con ramas delgadas y estriadas.",
    "Hojas alternas, anchamente lanceoladas, enteras, sin estípulas, de 2,5-5 cm; flores unisexuales dioicas, tetrámeras, axilares y solitarias; fruto drupáceo, globoso-ovoide, anaranjado, de 4 mm, con 2 semillas.",
    "Uruguay y nordeste de la Argentina, hasta las barrancas del Paraná al norte de Buenos Aires: Atucha, Las Palmas, etc."
  ),
  maytenus_vitis_idaea: species(
    "maytenus_vitis_idaea",
    "Maytenus vitis-idaea",
    "76. Celastraceae",
    "Arbusto o arbolito glabro, con hojas alternas, persistentes, coriáceas o carnosas.",
    "Hojas ovadas u ovado-oblongas, obtusas, enteras u onduladas, glabras, pecioladas, de 2-3 cm; flores axilares pequeñas en glomérulos, con cáliz 5-fido y pétalos de doble longitud que el cáliz; fruto capsular globoso, 3-valvo, de unos 10 mm; semillas con arilo amarillento.",
    "Centro de la Argentina. Rara en las barrancas del Paraná, al norte de la Capital Federal."
  ),
  tiliaceae: family(
    "tiliaceae",
    "80. Tiliaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores hermafroditas con estambres muy numerosos."
  ),
  luehea_divaricata: species(
    "luehea_divaricata",
    "Luehea divaricata",
    "80. Tiliaceae",
    "Árbol elevado, con ramas castañas.",
    "Hojas alternas, pecioladas, ovadas, aserradas, trinervadas, glabras en el haz y densamente tomentosas en el envés, de 7-10 cm; flores grandes en cimas terminales y axilares; pétalos lilas; estambres indefinidos; cápsulas ovoides pubescentes de 2-2,5 cm, dehiscentes por 3-5 valvas apicales.",
    "Brasil, Paraguay, Uruguay y nordeste de la Argentina. Cerca de la Capital Federal sólo hallada en Isla Martín García. Nombre vulgar: azota caballo."
  ),
  rhamnaceae: family(
    "rhamnaceae",
    "78. Rhamnaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas espinosas, receptáculo floral muy cóncavo a urceolado y frutos no alados."
  ),
  scutia_buxifolia: species(
    "scutia_buxifolia",
    "Scutia buxifolia",
    "78. Rhamnaceae",
    "Arbolito de 2-6 m de alto, con ramas subopuestas y espinas axilares.",
    "Hojas persistentes, semiopuestas, elípticas y apenas aserradas; flores pequeñas verdosas, 5-meras; disco grueso; fruto piriforme, 3-carpelar.",
    "Sur de Brasil, Uruguay y norte de la Argentina. Común en bosques xerófilos del norte y este bonaerense; florece en primavera. Nombre vulgar: coronillo."
  ),
  rhamnus_cathartica: species(
    "rhamnus_cathartica",
    "Rhamnus cathartica",
    "78. Rhamnaceae",
    "Arbusto o arbolito de 2-6 m de alto, con ramas espiniformes.",
    "Hojas persistentes, glabras, anchamente ovadas o elípticas, crenadas, de 3-6 cm; flores dioicas pequeñas, 4-meras, amontonadas en las axilas; disco delgado; drupas globosas negras de 1 cm.",
    "Europa. Cultivado y adventicio en el Delta del Paraná. Frutos medicinales. Nombre vulgar: espino cerval."
  ),
  discaria_longispina: species(
    "discaria_longispina",
    "Discaria longispina",
    "78. Rhamnaceae",
    "Arbusto achaparrado de 50-80 cm de alto, con ramas espinosas.",
    "Ramas laterales opuestas, cortas, generalmente con un solo nudo próximo al ápice; hojas rudimentarias y efímeras; ramas con nudos marcados por una línea transversal; flores blancas con pétalos diminutos dentados; borde del disco no enrollado hacia adentro.",
    "Sur de Brasil, Uruguay y norte de la Argentina. Rara cerca de la Capital Federal, pero frecuente hacia Magdalena y General Lavalle. Nombre vulgar: brusquilla."
  ),
  colletia_spinosissima: species(
    "colletia_spinosissima",
    "Colletia spinosissima",
    "78. Rhamnaceae",
    "Arbusto áfilo de 1,5-4 m de alto, con ramas y espinas gruesas y rígidas.",
    "Ramas espiniformes opuestas, cruzadas, cilíndricas o comprimidas; hojas rudimentarias y efímeras; flores aglomeradas en la base de las espinas, con receptáculo blanco; borde del disco enrollado hacia adentro.",
    "Uruguay y Argentina. Común en bosques de talas del norte bonaerense. La corteza se usa en medicina popular como febrífuga y astringente. Nombres vulgares: quina, barba de tigre."
  ),
  colletia_tenuicola: species(
    "colletia_tenuicola",
    "Colletia tenuicola",
    "78. Rhamnaceae",
    "Arbusto áfilo de 1,5-2 m de alto, con ramas y espinas delgadas y flexibles.",
    "Ramas espiniformes opuestas; hojas rudimentarias y efímeras; flores con receptáculo blanco; borde del disco enrollado hacia adentro.",
    "Vive en los talares del norte de la provincia de Buenos Aires."
  ),
  berberidaceae: family(
    "berberidaceae",
    "55. Berberidaceae",
    "Dicotiledóneas del Grupo C.",
    "Ovario unilocular y estambres 6."
  ),
  berberis_ruscifolia: species(
    "berberis_ruscifolia",
    "Berberis ruscifolia",
    "55. Berberidaceae",
    "Arbusto espinoso, glabro, de 1-1,5 m de alto.",
    "Hojas coriáceas, oblanceoladas, agudas, mucronadas, con un diente espinoso a cada lado, de 2-4 cm; nervaduras y margen muy marcados; espinas trífidas pardo claras, rectas o recurvadas, de 1-1,5 cm; flores amarillas en racimos axilares cortos; bayas de 5-6 mm, con estilo corto.",
    "Uruguay y nordeste de la Argentina. En barrancas de Zárate, Campana y San Isidro, y en la Isla Martín García."
  ),
  lauraceae: family(
    "lauraceae",
    "56. Lauraceae",
    "Dicotiledóneas del Grupo C.",
    "Flores con perigonio coralino, estambres 9 y anteras de dehiscencia valvar."
  ),
  ocotea_acutifolia: species(
    "ocotea_acutifolia",
    "Ocotea acutifolia",
    "56. Lauraceae",
    "Árbol de hasta 20 m de altura, con corteza gris-parda y grietas longitudinales.",
    "Hojas pecioladas, lanceoladas, acuminadas, enteras, coriáceas, verde claras, de 7-10 cm por 1,5-2,5 cm, con nervaduras reticuladas; flores pequeñas amarillentas en panojas de cimas; anteras con valvas en dos pares superpuestos; bayas ovoideas verdes de 2 cm.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de la Argentina, en bosques higrófilos. Común en bosques indígenas del Delta y de la ribera platense. Nombre vulgar: laurel."
  ),
  nectandra_falcifolia: species(
    "nectandra_falcifolia",
    "Nectandra falcifolia",
    "56. Lauraceae",
    "Árbol elevado, con ramas jóvenes redondeadas y glabras.",
    "Hojas pecioladas, estrechamente lanceoladas y algo falcadas, agudas, enteras, con nervaduras muy marcadas, de unos 12 cm por 0,8-1,2 cm; flores amarillentas en racimos de cimas; anteras con cuatro valvas al mismo nivel; bayas ovoideas de 2 cm.",
    "Paraguay, Uruguay y norte de la Argentina. Frecuente en las islas del Delta, frente a Ramallo, San Pedro y Baradero."
  ),
  anacardiaceae: family(
    "anacardiaceae",
    "75. Anacardiaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores con cáliz y corola, estambres 10 y anteras de dehiscencia longitudinal."
  ),
  schinus_longifolius: species(
    "schinus_longifolius",
    "Schinus longifolius",
    "75. Anacardiaceae",
    "Árbol de 2-5 m de alto, con ramas espinescentes.",
    "Hojas simples, oblanceolado-espatuladas, obtusas en el ápice, atenuadas y cortamente pecioladas en la base, enteras, glabras, de 2-5 cm; seudoracimos axilares densos y cortos; corola amarillenta; fruto drupáceo brillante.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina, hasta las barrancas del Paraná y bosques de talas del este bonaerense. Florece en primavera. Nombres vulgares: molle, incienso."
  ),
  amaranthaceae: family(
    "amaranthaceae",
    "45. Amaranthaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores pequeñas en inflorescencias densas, con tépalos escariosos o membranosos."
  ),
  amaranthus_hybridus_quitensis: species(
    "amaranthus_hybridus_quitensis",
    "Amaranthus hybridus var. quitensis",
    "45. Amaranthaceae",
    "Hierba anual, erecta, rojiza, de hasta 2 m de alto.",
    "Hojas ovadas; inflorescencias en espigas o panojas terminales; flores pentámeras, diclinas monoicas; ovario con 3 ramas estigmáticas; fruto casi globoso, levemente rugoso y dehiscente transversalmente. El manual cita también la var. pergaminensis, con brácteas más cortas que los tépalos.",
    "América cálida. Común en la región en suelos modificados. N. v.: yuyo colorado."
  ),
  amaranthus_albus: species(
    "amaranthus_albus",
    "Amaranthus albus",
    "45. Amaranthaceae",
    "Hierba anual, erecta, amarillenta, de unos 70 cm de alto.",
    "Hojas ovado-oblongas, obtusas y mucronadas en el ápice; flores trímeras, diclinas monoicas, en glomérulos axilares; estigma con 3 ramitas; frutos obovados, algo rugosos y dehiscentes transversalmente.",
    "América del Norte. Rara cerca de Buenos Aires."
  ),
  amaranthus_muricatus: species(
    "amaranthus_muricatus",
    "Amaranthus muricatus",
    "45. Amaranthaceae",
    "Hierba perenne, decumbente.",
    "Hojas lineal-lanceoladas, cortamente pecioladas; flores diclinas en glomérulos axilares y espigas terminales, con 4-5 tépalos lanceolados o espatulados; fruto semigloboso, rugoso e indehiscente.",
    "Argentina."
  ),
  amaranthus_crispus: species(
    "amaranthus_crispus",
    "Amaranthus crispus",
    "45. Amaranthaceae",
    "Hierba anual, tendida y velluda.",
    "Hojas cortamente pecioladas, ovadas o romboideas, con borde ondulado-crenado; flores en glomérulos axilares; tépalos ovado-lanceolados o espatulados; fruto globoso, rugoso e indehiscente.",
    "Especie de origen desconocido. Rara cerca de Buenos Aires."
  ),
  amaranthus_standleyanus: species(
    "amaranthus_standleyanus",
    "Amaranthus standleyanus",
    "45. Amaranthaceae",
    "Hierba anual, erecta o tendida, glabra.",
    "Hojas largamente pecioladas, ovadas o lanceoladas, de 4-8 cm por 1,5-2,5 cm, con borde plano y entero; flores en glomérulos axilares o en una espiga terminal corta; fruto casi globoso, rugoso e indehiscente.",
    "Centro y norte de la Argentina."
  ),
  amaranthus_deflexus: species(
    "amaranthus_deflexus",
    "Amaranthus deflexus",
    "45. Amaranthaceae",
    "Hierba anual, con tallos pilosos tendidos o ascendentes.",
    "Hojas largamente pecioladas, ovadas, velludas en la cara inferior, de 3,5-7 cm por 0,5-2,5 cm; inflorescencias en espigas terminales; flores con 2 tépalos lineal-lanceolados; fruto piriforme, liso, casi dos veces tan largo como el perigonio.",
    "América del Sur. Común cerca de Buenos Aires."
  ),
  amaranthus_gracilis: species(
    "amaranthus_gracilis",
    "Amaranthus gracilis",
    "45. Amaranthaceae",
    "Hierba anual, erecta y glabra.",
    "Hojas ovadas, con el ápice entero, de 5-11 cm por 2-4,5 cm; flores en panojas o espigas terminales y en glomérulos axilares; tépalos 3-4, lineal-espatulados; fruto casi globoso, muy rugoso.",
    "Maleza cosmopolita común en suelos modificados."
  ),
  amaranthus_lividus_ascendens: species(
    "amaranthus_lividus_ascendens",
    "Amaranthus lividus var. ascendens",
    "45. Amaranthaceae",
    "Hierba anual, tendida o ascendente.",
    "Hojas obovadas, atenuadas en la base, de 3,5-5 cm por 1-2 cm, con ápice bilobado; flores en espiga corta terminal y glomérulos axilares; tépalos 2-3, lanceolados o espatulados; fruto casi globoso, poco rugoso.",
    "Maleza originaria probablemente de América."
  ),
  pfaffia_stenophylla: species(
    "pfaffia_stenophylla",
    "Pfaffia stenophylla",
    "45. Amaranthaceae",
    "Hierba perenne, de hasta 2 m de alto, con tallos erectos o apoyantes.",
    "Hojas lanceoladas, pubescentes, de 5-15 cm por 1-2 cm; capítulos numerosos, en cimas dicotómicas, de menos de 8 mm de diámetro; flores de 2-3 mm.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Delta y ribera platense."
  ),
  pfaffia_lanata: species(
    "pfaffia_lanata",
    "Pfaffia lanata",
    "45. Amaranthaceae",
    "Hemicriptófita con raíz gruesa y tallos tomentosos ascendentes o erectos, de 20-30 cm de alto.",
    "Hojas ovadas, densamente albo-tomentosas, de 2-5 cm por 1,5-3 cm; capítulos solitarios de 10-15 mm de diámetro, sobre pedúnculos largos; flores de 4-6 mm.",
    "Centro y este de la Argentina; Uruguay. Estepa clímax."
  ),
  alternanthera_philoxeroides: species(
    "alternanthera_philoxeroides",
    "Alternanthera philoxeroides",
    "45. Amaranthaceae",
    "Hierba palustre perenne, decumbente o ascendente.",
    "Hojas glabras, oblanceoladas y enteras, de 2-8 cm por 1,5-2,5 cm; flores pentámeras en espigas capituliformes pedunculadas de 1 cm de diámetro o más; pedúnculos de 3-6 cm; seudoestaminodios alargados, iguales o mayores que los filamentos.",
    "América del Sur. Común en lagunas y pantanos. Nombre vulgar: lagunilla."
  ),
  alternanthera_paronychioides: species(
    "alternanthera_paronychioides",
    "Alternanthera paronychioides",
    "45. Amaranthaceae",
    "Hierba perenne, con tallos tendidos, radicantes y pubescentes en los nudos.",
    "Hojas espatuladas de 1-4 cm por 0,5-1 cm; flores pentámeras de 3,5-5 mm en espigas cortas axilares de 5-15 mm; brácteas obtusas, no aristadas. El manual cita la var. pilosa, de pubescencia más densa y hojas menores.",
    "América templado-cálida. Común en la región; la var. pilosa es muy común."
  ),
  alternanthera_pungens: species(
    "alternanthera_pungens",
    "Alternanthera pungens",
    "45. Amaranthaceae",
    "Hierba perenne, con tallos tendidos, radicantes y pubescentes.",
    "Hojas anchamente espatuladas u orbiculares, obtusas, de 2-5 cm por 2-3,5 cm; flores pentámeras de 6-7 mm en espigas axilares cortas; brácteas agudas, aristadas o subaristadas; seudoestaminodios denticulados.",
    "América del Sur. Común en suelos modificados. Medicinal. Nombre vulgar: yerba del pollo."
  ),
  alternanthera_repens: species(
    "alternanthera_repens",
    "Alternanthera repens",
    "45. Amaranthaceae",
    "Hierba perenne, con tallos tendidos, radicantes y pubescentes.",
    "Hojas espatuladas y obtusas, de 2-4 cm por 0,8-1,5 cm; flores pentámeras de 3-5 mm en espigas axilares cortas; brácteas agudas, aristadas o subaristadas; tépalos desiguales.",
    "Cosmopolita. Rara cerca de Buenos Aires. Nombre vulgar: yerba del pollo."
  ),
  alternanthera_reineckii: species(
    "alternanthera_reineckii",
    "Alternanthera reineckii",
    "45. Amaranthaceae",
    "Hierba perenne, con tallos rastreros radicantes y pubescentes.",
    "Hojas elípticas u obovadas, velludas, de 1-3 cm por 4-12 mm; flores tetrámeras en espigas capituliformes axilares de 7 mm; tépalos de 1,5 mm.",
    "Sur de Brasil y nordeste de la Argentina. Delta."
  ),
  gomphrena_pulchella: species(
    "gomphrena_pulchella",
    "Gomphrena pulchella",
    "45. Amaranthaceae",
    "Hierba perenne, ascendente o erecta.",
    "Hojas lanceoladas, cortamente pecioladas, enteras, de 3-6 cm por 1-2 cm; capítulos de 2-3 cm de diámetro; flores de 9-12 mm.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de la Argentina. Rara en la región."
  ),
  gomphrena_elegans: species(
    "gomphrena_elegans",
    "Gomphrena elegans",
    "45. Amaranthaceae",
    "Hierba perenne, velluda y apoyante.",
    "Hojas ovado-lanceoladas, agudas, de 2-7 cm, con pecíolo de 0,5-1 cm; capítulos de 1 cm de diámetro; flores de 5 mm; bracteolas sin crestas; espigas capituliformes largamente pedunculadas.",
    "Sur de Brasil hasta el norte de la Argentina. Delta y ribera del Plata."
  ),
  gomphrena_perennis: species(
    "gomphrena_perennis",
    "Gomphrena perennis",
    "45. Amaranthaceae",
    "Hierba perenne ascendente o erecta, pubescente.",
    "Hojas elíptico-lanceoladas, cortamente pecioladas, de 2,5-5 cm por 1-2 cm; capítulos de 1,5-2 cm de diámetro; flores de 6-7 mm; bracteolas con una cresta cerca del ápice.",
    "Sur de Brasil y nordeste de la Argentina. Suelos secos."
  ),
  iresine_celosia: species(
    "iresine_celosia",
    "Iresine celosia",
    "45. Amaranthaceae",
    "Hierba perenne, erecta y glabra.",
    "Hojas ovadas, opuestas, de 4-8 cm por 1-3 cm; flores dioicas, pentámeras, en amplias panojas; tépalos de 1 mm; estigma bífido o trífido.",
    "América cálida y templada. Común en la ribera platense."
  ),
  philoxerus_portulacoides_commersonii: species(
    "philoxerus_portulacoides_commersonii",
    "Philoxerus portulacoides var. commersonii",
    "45. Amaranthaceae",
    "Hierba perenne, glabra, con tallos rastreros radicantes.",
    "Hojas opuestas, sésiles, carnosas, obovado-espatuladas y enteras, de 2-3 cm por cerca de 1 cm; capítulos terminales; brácteas anchamente ovadas; tépalos de 4 mm.",
    "Dunas marítimas del sur de Brasil, Uruguay y este de Buenos Aires: San Clemente del Tuyú."
  ),
  malpighiaceae: family(
    "malpighiaceae",
    "71. Malpighiaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas volubles con hojas enteras opuestas."
  ),
  janusia_guaranitica: species(
    "janusia_guaranitica",
    "Janusia guaranitica",
    "71. Malpighiaceae",
    "Sufrútice voluble, ramoso y pubescente.",
    "Hojas pecioladas, ovadas, enteras, discolores, de 2-7 cm por 1-3 cm; umbelas 4-floras; pétalos amarillos; fruto formado por 3 sámaras con ala dorsal larga.",
    "América austral cálida, hasta el centro de la Argentina. Citada para el Delta."
  ),
  stigmatophyllum_littorale: species(
    "stigmatophyllum_littorale",
    "Stigmatophyllum littorale",
    "71. Malpighiaceae",
    "Sufrútice con tubérculos leñosos gruesos y tallos tendidos o volubles.",
    "Hojas pecioladas, ovadas u orbiculares, enteras o trilobadas, discolores y amarillento-sedosas en el envés; seudoumbelas 10-20-floras; pétalos amarillos, fimbriados, de 1 cm; estigmas dilatados y foliáceos.",
    "Sur de Brasil, Uruguay, Paraguay y nordeste de la Argentina. Común en el Delta y en la ribera del Plata; florece en verano."
  ),
  galphimia_brasiliensis: species(
    "galphimia_brasiliensis",
    "Galphimia brasiliensis",
    "71. Malpighiaceae",
    "Sufrútice de 20-80 cm de alto, glabro.",
    "Hojas cortamente pecioladas, lanceoladas, agudas, enteras y discolores; racimos laxos 10-25-floros; pétalos amarillos; ovario glabro; cápsulas tricocas con alas angostísimas.",
    "América austral templado-cálida. Citada para el Tigre y la ribera platense."
  ),
  heteropteris_angustifolia: species(
    "heteropteris_angustifolia",
    "Heteropteris angustifolia",
    "71. Malpighiaceae",
    "Arbusto apoyante de 1-3 m de alto, glabrescente.",
    "Hojas cortamente pecioladas, lanceoladas, enteras, de 3-12 cm por 4-10 mm; racimos terminales o axilares; flores amarillas; ovario con pubescencia rojiza; sámaras rojizas con una sola ala dorsal de 2-2,5 cm.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de la Argentina. Rara en la región platense: San Isidro."
  ),
  mascagnia_psilophylla: species(
    "mascagnia_psilophylla",
    "Mascagnia psilophylla",
    "71. Malpighiaceae",
    "Liana glabrescente.",
    "Hojas elípticas u ovadas, pecioladas, enteras y glabras, de 3-12 cm por 2-6 cm; estípulas triangulares; umbelas 4-floras agrupadas en corimbos; pétalos amarillos; sámaras con alas rojizas, dos laterales grandes y una dorsal menor.",
    "Sur de Brasil, Paraguay, Uruguay y norte de la Argentina. Hallada en la Isla Martín García."
  ),
  basellaceae: family(
    "basellaceae",
    "50. Basellaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas volubles con hojas enteras alternas."
  ),
  boussingaultia_gracilis_pseudobaselloides: species(
    "boussingaultia_gracilis_pseudobaselloides",
    "Boussingaultia gracilis f. pseudobaselloides",
    "50. Basellaceae",
    "Hierba perenne, voluble, glabra, con raíces tuberosas.",
    "Hojas carnosas, pecioladas, anchamente ovado-acorazonadas; flores en largos racimos; corola blanca de 5 mm de diámetro; estilo trífido, con estigmas capitados; utrículo globoso incluido en el perianto.",
    "América tropical. Cultivada y espontánea en cercos y alambrados. Nombre vulgar: brotal."
  ),
  passifloraceae: family(
    "passifloraceae",
    "89. Passifloraceae",
    "Dicotiledóneas del Grupo C.",
    "Flores grandes llamativas con corona de apéndices filamentosos; hojas palmatisectas o bilobadas."
  ),
  passiflora_caerulea: species(
    "passiflora_caerulea",
    "Passiflora caerulea",
    "89. Passifloraceae",
    "Sufrútice trepador, glabro, glauco, con zarcillos.",
    "Hojas palmadas, 5-lobadas, con lóbulos elíptico-lanceolados, enteros, obtusos y mucronados; pecíolo con 2-4 glándulas pediceladas; estípulas reniformes; flores solitarias, largamente pedunculadas, de 7-10 cm de diámetro; pétalos blancos; corona en 4 series, azul en el ápice, blanca en el centro y purpúrea en la base; frutos ovoideos anaranjados, con endocarpo rojo comestible.",
    "América subtropical. Común en los bosques del Delta, en los talares y en la ribera del Plata. A veces cultivada. Florece en primavera. Nombre vulgar: pasionaria, flor de pasión, mburucuyá."
  ),
  passiflora_misera: species(
    "passiflora_misera",
    "Passiflora misera",
    "89. Passifloraceae",
    "Enredadera perenne; tallos glabros o algo pubescentes, con zarcillos.",
    "Hojas bilobadas, con lóbulos muy divergentes, recordando la forma de una mariposa; nervadura central terminada en un mucroncito; estípulas lineales; flores solitarias, largamente pedunculadas, de 2,5-4 cm de diámetro; pétalos blancos; filamentos de la corona en dos series, purpúreos; frutos globosos, de 0,5-1,5 cm de diámetro.",
    "América tropical y subtropical, hasta los bosques del Delta del Paraná."
  ),
  vitaceae: family(
    "vitaceae",
    "79. Vitaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas volubles con estambres 4-5, gineceo bicarpelar y hojas palmaticompuestas."
  ),
  cissus_palmata: species(
    "cissus_palmata",
    "Cissus palmata",
    "79. Vitaceae",
    "Enredadera perenne, glabra, con zarcillos.",
    "Hojas alternas, palmaticompuestas, con 5 folíolos lanceolado-lineales, aserrados; cimas opuestas a las hojas; flores verdosas; bayas negras, ovoides, con 1-2 semillas.",
    "Sur de Brasil, Paraguay y nordeste de la Argentina, hasta los bosques del Delta y de la ribera platense. Florece en verano. Nombre vulgar: uva del diablo."
  ),
  cissus_striata_argentina: species(
    "cissus_striata_argentina",
    "Cissus striata var. argentina",
    "79. Vitaceae",
    "Enredadera con zarcillos.",
    "Hojas alternas, palmaticompuestas, con folíolos oblanceolado-espatulados, algo coriáceos; cimas opuestas a las hojas; flores verdosas; bayas negras.",
    "América austral. Común en los bosques del Delta y de la ribera del Plata."
  ),
  cruciferae: family(
    "cruciferae",
    "59. Cruciferae",
    "Dicotiledóneas del Grupo C.",
    "Estambres tetradínamos, pétalos 4 y fruto silicua o silícula."
  ),
  capsella_bursa_pastoris: species(
    "capsella_bursa_pastoris",
    "Capsella bursa-pastoris",
    "59. Cruciferae",
    "Hierba anual baja, glabra o con pelos estrellados ralos, con tallos erectos de 10-40 cm.",
    "Hojas radicales enteras o divididas; hojas caulinares generalmente sagitadas; flores pequeñas blancas; frutos triangulares fértiles, con bordes ligeramente convexos o rectos; pétalos al menos media vez más largos que los sépalos; silículas de 5-8 mm.",
    "Europa; adventicia en todo el globo. En suelos modificados. Nombre vulgar: zurrón de pastor."
  ),
  capsella_rubella: species(
    "capsella_rubella",
    "Capsella rubella",
    "59. Cruciferae",
    "Hierba anual baja, glabra o con pelos estrellados ralos.",
    "Flores rosadas; frutos triangulares fértiles, con bordes marcadamente cóncavos; pétalos apenas más largos que los sépalos.",
    "Europa; adventicia en la Argentina."
  ),
  capsella_gracilis: species(
    "capsella_gracilis",
    "Capsella gracilis",
    "59. Cruciferae",
    "Hierba anual baja, de origen híbrido entre Capsella bursa-pastoris y Capsella rubella.",
    "Frutos acorazonados, pequeños, estériles, de 2-3 mm.",
    "Europa; adventicia en la Argentina."
  ),
  rapistrum_rugosum: species(
    "rapistrum_rugosum",
    "Rapistrum rugosum",
    "59. Cruciferae",
    "Hierba bienal, erecta, ramosa, pubescente, de 0,5-1,5 m de alto.",
    "Hojas inferiores lirado-pinatífidas, las superiores lanceoladas y no sagitadas; flores amarillas en largos racimos; fruto indehiscente formado por dos artículos superpuestos, el superior globoso, rugoso, fértil y biseminado, y el inferior menor.",
    "Europa; adventicia en la Argentina. En terraplenes y suelos modificados."
  ),
  neslia_paniculata: species(
    "neslia_paniculata",
    "Neslia paniculata",
    "59. Cruciferae",
    "Hierba anual o bienal, erecta, ramosa, hirsuta, de 30-60 cm de alto.",
    "Tallos híspidos, con pelos bifurcados; hojas enteras, las caulinares sagitadas; flores pequeñas amarillas, racimosas; frutos globosos, indehiscentes, reticulados, de unos 2 mm, generalmente monospermos.",
    "Europa; adventicia en América. Rara en la región platense."
  ),
  camelina_sativa: species(
    "camelina_sativa",
    "Camelina sativa",
    "59. Cruciferae",
    "Hierba anual, erecta, glabra o con pelos en T, de 60-80 cm de alto.",
    "Hojas enteras, las inferiores oblanceoladas y las superiores lineales, algo auriculadas en la base; flores pequeñas amarillas; frutos obovoideos, polispermos y dehiscentes; semillas obovadas con cotiledones incumbentes; silículas de 11 mm.",
    "Europa; adventicia en América. En suelos modificados. Nombre vulgar: nabo francés."
  ),
  camelina_parodii: species(
    "camelina_parodii",
    "Camelina parodii",
    "59. Cruciferae",
    "Hierba anual, erecta, pubescente, de 60-80 cm de alto.",
    "Hojas inferiores lirado-lobadas, las superiores lanceoladas, dentadas y sagitadas en la base; frutos casi acorazonados, polispermos y dehiscentes; semillas achatadas, redondeadas, con cotiledones acumbentes.",
    "Hallada en cultivos de Buenos Aires y Santa Fe. Probablemente originaria de Europa."
  ),
  coronopus_didymus: species(
    "coronopus_didymus",
    "Coronopus didymus",
    "59. Cruciferae",
    "Hierba anual, rastrera.",
    "Hojas bipinatisectas; flores blancas en racimos cortos; fruto indehiscente que se separa en dos cocos monospermos, rugosos, de 1-1,5 mm por 2 mm.",
    "Europa; adventicia en América. Muy común en suelos modificados. Nombre vulgar: mastuerzo."
  ),
  coronopus_rhytidocarpus: species(
    "coronopus_rhytidocarpus",
    "Coronopus rhytidocarpus",
    "59. Cruciferae",
    "Hierba perenne, con raíz gruesa y profunda; tallos rastreros.",
    "Hojas lineales, enteras o pinatisectas; flores blancas con 2 estambres; frutos indehiscentes muy rugosos, de 3 mm por 4 mm, que se separan en dos cocos monospermos.",
    "América austral. Rara en la estepa climáxica."
  ),
  lobularia_maritima: species(
    "lobularia_maritima",
    "Lobularia maritima",
    "59. Cruciferae",
    "Hierba perenne, pubescente, glauca, con tallos ascendentes y ramosos de 10-30 cm.",
    "Hojas enteras, lineal-lanceoladas, de 2-5 cm; flores pequeñas, blancas, de 4 mm, en racimos terminales; plantas con pelos en T; silículas ovadas u orbiculares, de 2-3 mm, con una semilla por lóculo.",
    "Europa. Cultivada como ornamental y con frecuencia escapada sobre escombros, terraplenes, etc."
  ),
  lepidium_draba: species(
    "lepidium_draba",
    "Lepidium draba",
    "59. Cruciferae",
    "Hierba perenne, con raíces gemíferas y tallos erectos ceniciento-pubescentes de 25-50 cm.",
    "Hojas oblongas u oblongo-lanceoladas, anchas, obtusas; las inferiores pecioladas y las superiores sésiles, semiabrazadoras y auriculadas en la base, sinuado-dentadas; flores blancas; silículas obcordadas de 3 mm por 4 mm, con estilo persistente largo y delgado.",
    "Europa; adventicia en América. Maleza invasora de jardines."
  ),
  lepidium_spicatum: species(
    "lepidium_spicatum",
    "Lepidium spicatum",
    "59. Cruciferae",
    "Hierba anual, erecta, ramosa, puberulenta, de 5-25 cm de alto.",
    "Hojas basales laciniado-pinatífidas o enteras; hojas caulinares lineales, enteras; racimos plurifloros; pétalos blancos; estambres 2; silículas elípticas u ovadas, glabras, de 2,5-3 mm, con estilo nulo.",
    "América austral. Frecuente en la región."
  ),
  lepidium_parodii: species(
    "lepidium_parodii",
    "Lepidium parodii",
    "59. Cruciferae",
    "Hierba perenne, erecta, glabra o puberulenta, con tallos de 20-40 cm, apenas ramosos.",
    "Hojas inferiores por lo común pinatisectas; hojas superiores lineales, enteras, algo auriculadas en la base; racimos multifloros con pedicelos cortos; pétalos blancos; estambres 2; silículas anchamente elípticas, glabras o algo ciliadas, escotadas en el ápice, de 4-4,5 mm, con estilo nulo.",
    "América austral. Común en suelos bajos algo salados."
  ),
  lepidium_aletes: species(
    "lepidium_aletes",
    "Lepidium aletes",
    "59. Cruciferae",
    "Hierba anual, con tallos erectos o ascendentes de 10-40 cm y pubescencia retrorsa.",
    "Hojas basales bipinatisectas; hojas superiores dentadas o pinatisectas, algo dilatadas en la base y semi-auriculadas, con segmentos de 0,5 mm de ancho; racimos densifloros con pedicelos cortos; silículas anchamente elípticas, escotadas, de 2,5-3 mm, con estilo nulo.",
    "América austral. Común en campos húmedos."
  ),
  lepidium_bonariense: species(
    "lepidium_bonariense",
    "Lepidium bonariense",
    "59. Cruciferae",
    "Hierba anual o bienal, con tallos de 30-50 cm y pubescencia retrorsa.",
    "Hojas inferiores bipinatisectas; hojas superiores dentadas o pinatisectas, no dilatadas en la base, con segmentos de 1-2 mm; racimos densifloros con pedicelos cortos; estambres 2; silículas anchamente elípticas, de 3-3,5 mm, escotadas, con estilo nulo.",
    "América austral. Común en suelos modificados."
  ),
  draba_australis: species(
    "draba_australis",
    "Draba australis",
    "59. Cruciferae",
    "Hierba anual, pigmea, con pubescencia estrellada.",
    "Hojas enteras en roseta radical; pedúnculos paucifloros; flores blancas; silícuas cortas, gruesas, oblongo-lineales.",
    "Sur de Buenos Aires y Patagonia. Rara en las cercanías de la Capital Federal."
  ),
  malcomia_maritima: species(
    "malcomia_maritima",
    "Malcomia maritima",
    "59. Cruciferae",
    "Hierba anual con tallos ascendentes y pelos simples o estrellados.",
    "Hojas obovado-espatuladas, enteras o dentadas; flores laxamente racimosas, blancas o purpúreas; sépalos de 5-10 mm; pétalos rosados o purpúreos; silicuas muy largas, de dehiscencia tardía.",
    "Europa. Rara en la región: Ensenada."
  ),
  erysimum_repandum: species(
    "erysimum_repandum",
    "Erysimum repandum",
    "59. Cruciferae",
    "Hierba anual, laxamente pubescente, con pelos en T, de 20-30 cm de alto.",
    "Hojas lanceoladas, sinuado-dentadas; flores amarillas, grandes, cortamente pedunculadas; silicuas largas, tetragonales, rígidas, casi en ángulo recto con el eje de la inflorescencia, de 8-10 cm.",
    "Europa; adventicia en América. Rara en la región."
  ),
  descurainia_argentina: species(
    "descurainia_argentina",
    "Descurainia argentina",
    "59. Cruciferae",
    "Hierba anual, erecta, de alrededor de medio metro de alto, con pelos estrellados y glandulosos.",
    "Hojas bipinatisectas, con segmentos cortos, obovados y obtusos; flores pequeñas, amarillas, en racimos terminales; silicuas de 10-12 mm.",
    "Centro de la Argentina. Rara en la región, en suelos modificados."
  ),
  descurainia_appendiculata: species(
    "descurainia_appendiculata",
    "Descurainia appendiculata",
    "59. Cruciferae",
    "Hierba anual, erecta, de 40-80 cm de alto, con pelos estrellados y glandulosos.",
    "Hojas bi- o tripinatisectas, con segmentos alargados, lanceolados y agudos; flores pequeñas, amarillas, en racimos terminales; silicuas de 12-18 mm.",
    "Norte y centro de la Argentina. Bosques de talas."
  ),
  halimolobos_montanus: species(
    "halimolobos_montanus",
    "Halimolobos montanus",
    "59. Cruciferae",
    "Hierba perenne, erecta, de alrededor de medio metro de alto, con pelos bifurcados.",
    "Hojas oblanceoladas; las inferiores dentadas y atenuadas en la base, las superiores semiabrazadoras y enteras; flores blancas, pequeñas, en racimos; silicuas redondeadas de 10-12 mm, con valvas uninervadas.",
    "Centro de la Argentina. Hallada en la Isla Martín García."
  ),
  cakile_maritima: species(
    "cakile_maritima",
    "Cakile maritima",
    "59. Cruciferae",
    "Hierba anual carnosa, glabra y ascendente, de 40-50 cm de alto.",
    "Hojas pinatisectas con segmentos obtusos; flores blancas o rosadas; pétalos de 8-10 mm; silicuas de 1,5-2 cm, tetrágonas y formadas por dos artículos superpuestos.",
    "Europa; adventicia en América. Rara en Dock Sur y muy común en dunas próximas al mar del este de Buenos Aires."
  ),
  raphanus_sativus: species(
    "raphanus_sativus",
    "Raphanus sativus",
    "59. Cruciferae",
    "Hierba anual o bienal de alrededor de medio metro de altura, a veces con raíz suculenta.",
    "Flores blancas o rosadas; frutos gruesos, carnosos, apenas contraídos; raíces carnosas comestibles.",
    "Europa; cultivada y adventicia en América. Nombre vulgar: rábano, rabanito."
  ),
  raphanus_raphanistrum: species(
    "raphanus_raphanistrum",
    "Raphanus raphanistrum",
    "59. Cruciferae",
    "Hierba anual o bienal de 50-80 cm de alto.",
    "Flores amarillentas; frutos más delgados, con 6-10 semillas, contraídos entre las semillas; raíces alargadas.",
    "Europa; adventicia en América. Rara en la región: Campana y Otamendi."
  ),
  eruca_sativa: species(
    "eruca_sativa",
    "Eruca sativa",
    "59. Cruciferae",
    "Hierba anual, erecta y glabra, de 30-50 cm de alto.",
    "Hojas inferiores pinatisectas y superiores dentadas; sépalos de 10-12 mm; pétalos de 15-20 mm, amarillentos con nervaduras pardas; silicuas oblongas de 15-25 mm, con valvas aquilladas.",
    "Europa; adventicia en América. Rara en Dock Sur; más común en el este y sur de la provincia de Buenos Aires."
  ),
  diplotaxis_muralis: species(
    "diplotaxis_muralis",
    "Diplotaxis muralis",
    "59. Cruciferae",
    "Hierba anual con hojas arrosetadas y tallos ascendentes casi desnudos, de 20-50 cm de alto.",
    "Hojas oblanceoladas, sinuado-dentadas o lobadas; flores amarillas en racimo laxo; silicuas lineales de unos 3,5 cm, comprimidas, con valvas uninervadas.",
    "Europa; adventicia en América. Común en suelos calcáreos."
  ),
  roripa_pamparum: species(
    "roripa_pamparum",
    "Roripa pamparum",
    "59. Cruciferae",
    "Hierba perenne y glabra.",
    "Hojas radicales enteras, oblanceoladas y atenuadas en largo pecíolo; hojas medianas ovaladas con uno o dos lóbulos basales; hojas superiores enteras y lineales; flores blancas pequeñas; silicuas lineales.",
    "Argentina. En campos húmedos."
  ),
  roripa_bonariensis: species(
    "roripa_bonariensis",
    "Roripa bonariensis",
    "59. Cruciferae",
    "Hierba perenne, glabra y erecta, de 12-50 cm de alto.",
    "Todas las hojas pinatisectas, profundamente divididas, con lóbulos lineales o lanceolados en 4-6 pares; flores blancas pequeñas; silicuas de cerca de 1 cm.",
    "América austral. Común en campos húmedos. Nombre vulgar: mastuerzo de los sapos."
  ),
  roripa_nasturtium_aquaticum: species(
    "roripa_nasturtium_aquaticum",
    "Roripa nasturtium-aquaticum",
    "59. Cruciferae",
    "Hierba perenne rastrera o flotante, glabra, con tallos radicantes en los nudos.",
    "Hojas con lóbulo terminal circular y sinuado, y 1-3 pares de lóbulos laterales anchamente lanceolados u ovados; flores blancas en racimos cortos; silicuas de 10-15 mm.",
    "Europa; adventicia en América. Frecuente en zanjas y charcas. Nombre vulgar: berro."
  ),
  roripa_hilariana: species(
    "roripa_hilariana",
    "Roripa hilariana",
    "59. Cruciferae",
    "Hierba perenne, glabra, con raíces gemíferas y tallos ascendentes o erectos de 50-150 cm.",
    "Hojas con segmento terminal anchamente ovado, a veces acorazonado, y 1-2 pares de segmentos laterales ovados, crenados o aserrados; flores blancas pequeñas; silicuas arqueadas de 25-40 mm.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Común en matorrales y pajonales del Delta y de la ribera del Plata. Nombre vulgar: berro cimarrón."
  ),
  roripa_sinapis: species(
    "roripa_sinapis",
    "Roripa sinapis",
    "59. Cruciferae",
    "Hierba perenne, de 5-10 cm de alto.",
    "Flores apétalas; hojas ovadas u ovado-lanceoladas, en parte pinatífidas, con 1-3 pares de lóbulos laterales y un lóbulo terminal muy grande; racimos terminales y axilares, paucifloros; silicuas de 15-25 mm.",
    "Tropical, cosmopolita. Rara en el Delta."
  ),
  cardamine_chenopodiifolia: species(
    "cardamine_chenopodiifolia",
    "Cardamine chenopodiifolia",
    "59. Cruciferae",
    "Hierba perenne, glabra o algo pubescente, con tallos ascendentes de 15-50 cm de alto.",
    "Hojas simples; las radicales largamente pecioladas, espatuladas, enteras o sinuadas; hojas caulinares obovadas y dentadas; flores blancas pequeñas de dos tipos; silicuas erectas de 15-35 mm y otras cortas que se entierran espontáneamente.",
    "América austral. Se halla en campos y bosques ribereños. Comestible en ensalada."
  ),
  cardamine_hirsuta: species(
    "cardamine_hirsuta",
    "Cardamine hirsuta",
    "59. Cruciferae",
    "Hierba anual, erecta y laxamente pubescente, de 15-40 cm de alto.",
    "Hojas pinatisectas con segmentos ovados u orbiculares; hojas basales en roseta, con segmento terminal circular y sinuado, y 2-4 pares de segmentos laterales ovados; flores diminutas; silicuas lineales de 20-25 mm.",
    "Europa; adventicia en América. Común en jardines y suelos modificados."
  ),
  cardamine_bonariensis: species(
    "cardamine_bonariensis",
    "Cardamine bonariensis",
    "59. Cruciferae",
    "Hierba perenne rastrera, radicante en los nudos.",
    "Hojas pinatisectas, con segmento terminal circular acorazonado y 1-2 pares de segmentos laterales anchamente ovados y sinuados; flores blancas diminutas, axilares o en cortos racimos; silicuas lineales de 10-20 mm.",
    "América cálida; hidrófila. Común en zanjas y arroyos del Delta y de la ribera platense. Nombre vulgar: berro cimarrón."
  ),
  cardamine_flaccida: species(
    "cardamine_flaccida",
    "Cardamine flaccida",
    "59. Cruciferae",
    "Hierba perenne, ascendente en la base y luego erecta, rizomatosa, con tallos glabros de hasta 40 cm.",
    "Hojas pinatisectas, con segmento terminal circular o arriñonado y 1-3 pares de segmentos laterales ovados y peciolulados; flores blancas diminutas en racimos terminales bracteados; silicuas lineales, erectas, de 18-25 mm.",
    "América del Sur. En suelos arenosos y húmedos."
  ),
  hirschfeldia_incana: species(
    "hirschfeldia_incana",
    "Hirschfeldia incana",
    "59. Cruciferae",
    "Hierba anual o bienal, erecta y densamente pubescente, de 0,5-1 m de alto.",
    "Hojas superiores lineales y hojas inferiores lirado-pinatisectas; pétalos amarillos de 6-7 mm; silicuas pequeñas de 8-12 mm, terminadas en un rostro cónico con una o dos semillas; valvas trinervadas.",
    "Viejo Mundo; adventicia en la Argentina. En suelos modificados."
  ),
  brassica_campestris: species(
    "brassica_campestris",
    "Brassica campestris",
    "59. Cruciferae",
    "Hierba anual, glauca, glabra o casi glabra, de 30-120 cm de alto.",
    "Silicuas de 5-6 cm; hojas superiores oblongo-lanceoladas, agudas, auriculadas y semiabrazadoras; hojas inferiores lirado-pinatífidas, con lóbulo terminal muy grande; flores amarillas grandes, con flores abiertas superando a los pimpollos.",
    "Europa; adventicia en regiones templadas de todo el globo. Común en la región. Nombre vulgar: nabo, mostacilla."
  ),
  brassica_juncea: species(
    "brassica_juncea",
    "Brassica juncea",
    "59. Cruciferae",
    "Hierba anual, glabra o laxamente pubescente, de 50-150 cm de alto.",
    "Silicuas de 3-5 cm; hojas superiores no semiabrazadoras ni auriculadas, sésiles o pecioladas; hojas inferiores lirado-pinatífidas, con lóbulo terminal ovado, dentado y grande, y pocos lóbulos laterales pequeños.",
    "Asia; adventicia en América. Rara en la región."
  ),
  brassica_nigra: species(
    "brassica_nigra",
    "Brassica nigra",
    "59. Cruciferae",
    "Hierba anual, erecta y pubescente, de 50-150 cm de alto.",
    "Silicuas de 1-2 cm; hojas inferiores lirado-pinatisectas y superiores oblongo-lineales, cortamente pecioladas; racimo casi corimbiforme; pétalos amarillos de 7,5-9 mm.",
    "Europa; adventicia en América. En suelos modificados."
  ),
  sisymbrium_officinale: species(
    "sisymbrium_officinale",
    "Sisymbrium officinale",
    "59. Cruciferae",
    "Hierba anual, ramosa, glabra o pubescente, de hasta un metro de alto.",
    "Silicuas de 10-14 mm, apretadas contra el eje de la inflorescencia; ramas muy abiertas; hojas runcinado-pinatisectas con segmentos anchos y dentados; flores amarillas pequeñas.",
    "Europa; adventicia en América. Común en suelos modificados."
  ),
  sisymbrium_altissimum: species(
    "sisymbrium_altissimum",
    "Sisymbrium altissimum",
    "59. Cruciferae",
    "Hierba anual, glabra o casi glabra, de cerca de 1 m de alto.",
    "Silicuas lineales de 7-10 cm por 1 mm, divergentes del eje de la inflorescencia; pedicelos gruesos; hojas runcinado-pinatisectas con segmento terminal pequeño y segmentos laterales numerosos, lanceolado-lineales; flores amarillas.",
    "Europa; adventicia en América. Común en suelos modificados."
  ),
  sisymbrium_irio: species(
    "sisymbrium_irio",
    "Sisymbrium irio",
    "59. Cruciferae",
    "Hierba anual, casi glabra, de medio metro de alto.",
    "Silicuas estrechamente lineales de 2,5-4,5 cm, divergentes del eje; pedicelos delgados; hojas runcinado-pinatisectas con segmento terminal muy grande y 1-2 pares de segmentos lanceolados; flores amarillo pálido.",
    "Europa; adventicia en América. En suelos modificados."
  ),
  sinapis_arvensis_schkuhriana: species(
    "sinapis_arvensis_schkuhriana",
    "Sinapis arvensis var. schkuhriana",
    "59. Cruciferae",
    "Hierba anual, híspida o glabra, de 1-1,5 m de alto.",
    "Hojas inferiores lirado-pinatífidas y superiores ovado-lanceoladas, irregularmente dentadas; flores amarillas en racimos; silicuas de 3-4 cm, semitorulosas, con valvas de 3-5 nervaduras y rostro generalmente con una semilla en su base.",
    "Europa; adventicia en América. Rara en suelos modificados."
  ),
  elatinaceae: family(
    "elatinaceae",
    "84. Elatinaceae",
    "Dicotiledóneas del Grupo C.",
    "Plantas pigmeas sin látex o con hojas opuestas lineales en ramas de la clave."
  ),
  elatine_minima: species(
    "elatine_minima",
    "Elatine minima",
    "84. Elatinaceae",
    "Plantita pigmea, glabra, con tallos rastreros de 3-4 cm de largo.",
    "Hojas opuestas o verticiladas, ovadas, enteras y obtusas; flores axilares, solitarias, sésiles, trímeras, verdosas, de 1-1,5 mm de diámetro; cápsulas membranáceas.",
    "América. Según Spegazzini es frecuente en las charcas próximas a La Plata."
  ),
  portulacaceae: family(
    "portulacaceae",
    "49. Portulacaceae",
    "Dicotiledóneas del Grupo C.",
    "Fruto cápsula de dehiscencia transversal; plantas sin látex."
  ),
  portulaca_oleracea: species(
    "portulaca_oleracea",
    "Portulaca oleracea",
    "49. Portulacaceae",
    "Hierba anual, glabra, tendida o ascendente y carnosa.",
    "Hojas espatuladas y planas; flores amarillas; sépalos carenados o alados; pétalos 5, de 6-8 mm; estambres 7-12; cápsula de dehiscencia transversal; semillas con pequeños tubérculos.",
    "Cosmopolita. Comestible y adventicia en chacras, jardines, etc. Nombre vulgar: verdolaga."
  ),
  portulaca_papulosa: species(
    "portulaca_papulosa",
    "Portulaca papulosa",
    "49. Portulacaceae",
    "Hierba anual, largamente velluda.",
    "Hojas lineales, más o menos cilíndricas, subuladas, de 2-5 mm; flores amarillas con pétalos de 4 mm; estambres 5-7; semillas tuberculadas.",
    "Uruguay y este de la Argentina, en suelos secos. Rara en la región."
  ),
  portulaca_gilliesii: species(
    "portulaca_gilliesii",
    "Portulaca gilliesii",
    "49. Portulacaceae",
    "Hierba perenne, con tallos y hojas rojizos.",
    "Hojas lineales, más o menos cilíndricas, oblongo-lineales, de 5-8 mm, a veces hasta 15 mm, con pelos axilares rígidos; hojas involucrales más cortas que las tallinas; flores purpúreas con pétalos de 14-30 mm; estambres 60 o más; semillas tuberculadas.",
    "Centro de la Argentina. Cerca de Buenos Aires crece en suelos salados y florece en otoño. Nombre vulgar: fique, flor de seda."
  ),
  talinum_patens: species(
    "talinum_patens",
    "Talinum patens",
    "49. Portulacaceae",
    "Hierba perenne, glabra, erecta, carnosa, de 30-75 cm de alto.",
    "Hojas alternas, sin estípulas, amontonadas en la parte inferior de los tallos, oblanceoladas u obovadas, de 4-8 cm; flores en panojas de cimas; sépalos de 3-4 mm; pétalos purpúreos o amarillos; estambres numerosos; cápsulas globosas.",
    "América cálida. Raro cerca de Buenos Aires. Nombre vulgar: carne gorda."
  ),
  montia_fontana: species(
    "montia_fontana",
    "Montia fontana",
    "49. Portulacaceae",
    "Hierba anual diminuta, pigmea, de 2-15 cm de alto.",
    "Hojas carnosas, opuestas, espatuladas y obtusas, de 6-12 mm; flores diminutas, blancas, axilares, solitarias o racimosas; estambres 3, raramente 5; cápsula globosa de 2 mm; semillas 3.",
    "Cosmopolita. Se encuentra en la ribera platense."
  ),
  guttiferae: family(
    "guttiferae",
    "83. Guttiferae",
    "Dicotiledóneas del Grupo C.",
    "Hojas opuestas y estambres generalmente reunidos en tres o más manojos."
  ),
  hypericum_brasiliense: species(
    "hypericum_brasiliense",
    "Hypericum brasiliense",
    "83. Guttiferae",
    "Sufrútice glabro, erecto y ramoso, de 50-90 cm de alto.",
    "Hojas opuestas, sésiles, lanceolado-oblongas, agudas, enteras y glabras, de 2,5-4 cm; flores numerosas en cimas dicotómicas terminales; pétalos amarillos de 5-6 mm; ovario unilocular con 5 placentas parietales y 5 estilos; estambres en 5 manojos de 15-20; cápsulas 5-valvas, polispermas.",
    "Brasil, Paraguay, Uruguay y nordeste de la Argentina, hasta los bosques de la ribera platense."
  ),
  caryophyllaceae: family(
    "caryophyllaceae",
    "51. Caryophyllaceae",
    "Dicotiledóneas del Grupo C.",
    "Óvulos de placentación central o basilar; hojas opuestas e inflorescencias ramificadas dicotómicamente."
  ),
  silene_antirrhina: species(
    "silene_antirrhina",
    "Silene antirrhina",
    "51. Caryophyllaceae",
    "Hierba anual, puberulenta o glabra.",
    "Hojas lineal-lanceoladas; flores en cimas; cáliz inflado de unos 8 mm; pétalos rosados; estilos 3; cápsula dehiscente por dientes apicales.",
    "América del Norte. Común en suelos arenosos del centro de la Argentina."
  ),
  silene_gallica: species(
    "silene_gallica",
    "Silene gallica",
    "51. Caryophyllaceae",
    "Hierba anual, hirsuta.",
    "Hojas espatuladas; flores en espigas unilaterales definidas; cáliz hirsuto de 10 mm; pétalos rosados o blancos; estilos 3; cápsula dehiscente por dientes apicales.",
    "Europa. Adventicia en América. Ubicua."
  ),
  silene_inflata: species(
    "silene_inflata",
    "Silene inflata",
    "51. Caryophyllaceae",
    "Hierba perenne, glabra, glauca, de 10-60 cm de alto.",
    "Hojas lanceoladas, cilioladas en el margen; flores dioicas por aborto, en cimas dicotómicas; cáliz ovoideo, con 20 nervaduras; pétalos blancos o rosados.",
    "Viejo continente. Adventicia en América; citada para Pergamino."
  ),
  saponaria_officinalis: species(
    "saponaria_officinalis",
    "Saponaria officinalis",
    "51. Caryophyllaceae",
    "Hierba perenne, glabra, erecta, de 30-60 cm de alto.",
    "Hojas ovadas, agudas y enteras; flores en cimas terminales densas; cáliz tubuloso de 15-20 mm, sin costillas aladas; pétalos rosados, con una escamita en la base del limbo; estilos 2; cápsulas cilíndricas, más cortas que el cáliz.",
    "Europa; adventicia en América. Rara en la región: Tigre."
  ),
  vaccaria_segetalis: species(
    "vaccaria_segetalis",
    "Vaccaria segetalis",
    "51. Caryophyllaceae",
    "Hierba anual, glabra, glauca, ramificada dicotómicamente, de 30-90 cm de alto.",
    "Hojas lanceoladas, agudas, enteras, connatas en la base; flores rojo pálidas o blancas en cimas terminales; cáliz con 5 costillas aladas, de 10-15 mm; estilos 2; cápsula dehiscente por 4 dientes apicales.",
    "Europa; adventicia en América. Citada para Pergamino."
  ),
  agrostemma_githago: species(
    "agrostemma_githago",
    "Agrostemma githago",
    "51. Caryophyllaceae",
    "Hierba anual, pubescente, de 20-50 cm de alto.",
    "Hojas opuestas, sésiles, lineal-lanceoladas, de 7-12 cm; flores grandes, solitarias, en el extremo de largos pedúnculos axilares; cáliz con 5 segmentos foliáceos más largos que los pétalos; pétalos rojizos; estilos 5.",
    "Europa; adventicia en América. En suelos modificados. Nombre vulgar: yetón."
  ),
  melandryum_silvestre: species(
    "melandryum_silvestre",
    "Melandryum silvestre",
    "51. Caryophyllaceae",
    "Hierba bienal, glanduloso-pubescente, de 30-60 cm de alto.",
    "Hojas inferiores pecioladas, oblongas y obtusas; hojas superiores ovado-lanceoladas y agudas; flores numerosas en cimas dicotómicas; cáliz con dientes más cortos que los pétalos; pétalos rosados o rojos, bipartidos; estilos 3-5.",
    "Europa; adventicia en América. Rara en la región."
  ),
  arenaria_serpyllifolia: species(
    "arenaria_serpyllifolia",
    "Arenaria serpyllifolia",
    "51. Caryophyllaceae",
    "Hierba anual, ascendente o tendida, difusa y pubescente.",
    "Hojas opuestas, casi sésiles, ovadas, de 4-8 mm; flores pequeñas, blancas, en panojas definidas; cáliz de 2 mm; pétalos enteros, más cortos que los sépalos; estilos en número menor que los sépalos.",
    "Europa; adventicia en América. En suelos modificados."
  ),
  sagina_apetala: species(
    "sagina_apetala",
    "Sagina apetala",
    "51. Caryophyllaceae",
    "Hierba anual, pigmea, tendida y laxamente pubescente.",
    "Hojas estrechamente lineales; flores tetrámeras, numerosas, diminutas, en cimas laxas; sépalos ovados de 1,5-2 mm; pétalos nulos; estambres 4; cápsula 4-valva.",
    "Europa; adventicia en América. En suelos húmedos."
  ),
  sagina_chilensis: species(
    "sagina_chilensis",
    "Sagina chilensis",
    "51. Caryophyllaceae",
    "Hierba anual, pigmea, con tallos filiformes.",
    "Hojas estrechamente lineales; flores pentámeras, diminutas y pediceladas; ovario unilocular con tantos estilos como sépalos; cápsula dehiscente hasta su base.",
    "América austral. En suelos fértiles."
  ),
  stellaria_media: species(
    "stellaria_media",
    "Stellaria media",
    "51. Caryophyllaceae",
    "Hierba anual, glabra o laxamente pilosa, ascendente y difusa.",
    "Hojas opuestas, ovadas y pecioladas; flores pequeñas, blancas, largamente pedunculadas, en cimas terminales; pétalos bífidos; cápsula ovoide que se abre en valvas hasta su base.",
    "Europa; adventicia en América. Suelos modificados. Nombre vulgar: capiquí."
  ),
  cerastium_humifusum: species(
    "cerastium_humifusum",
    "Cerastium humifusum",
    "51. Caryophyllaceae",
    "Hierba anual, rastrera y glabra.",
    "Hojas oblongo-lanceoladas, agudas y enteras, de 1-3 cm por 0,3-0,9 cm; flores solitarias, largamente pedunculadas; corola blanca; cápsula cilíndrica dehiscente por dientes apicales.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina hasta Buenos Aires."
  ),
  cerastium_viscosum: species(
    "cerastium_viscosum",
    "Cerastium viscosum",
    "51. Caryophyllaceae",
    "Hierba anual, erecta, hirsuto-glandulosa.",
    "Hojas espatuladas y obtusas; flores en cimas muy densas; pétalos blancos, de la misma longitud que los sépalos o apenas más largos; cápsula cilíndrica dehiscente por dientes apicales.",
    "Europa; adventicia en América. Común en suelos modificados."
  ),
  cerastium_rivulare: species(
    "cerastium_rivulare",
    "Cerastium rivulare",
    "51. Caryophyllaceae",
    "Hierba anual, ascendente, híspido-glandulosa.",
    "Hojas obovado-espatuladas, cortamente acuminadas en el ápice; flores en cimas muy laxas; pétalos blancos, de doble longitud que los sépalos; cápsula cilíndrica dehiscente por dientes apicales.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de la Argentina hasta Buenos Aires: Delta y ribera platense."
  ),
  cardionema_ramosissimum: species(
    "cardionema_ramosissimum",
    "Cardionema ramosissimum",
    "51. Caryophyllaceae",
    "Hierba perenne, con tallos rastreros, difusos y pubescentes.",
    "Hojas opuestas, densas, subuladas, con estípulas escariosas y fascículos axilares, de 5-15 mm; flores en dicasios amontonados en glomérulos axilares; cáliz con 3 sépalos terminados en larga espina y 2 solo mucronados; pétalos muy cortos.",
    "América cálida. Rara en la Isla Maciel."
  ),
  paronychia_brasiliana: species(
    "paronychia_brasiliana",
    "Paronychia brasiliana",
    "51. Caryophyllaceae",
    "Hierba anual o perenne, difusa, con tallos rastreros, pubescentes o casi glabros, de 10-25 cm.",
    "Hojas opuestas, lanceoladas, mucronadas y pilosas, de 5-8 mm; estípulas lanceoladas, acuminadas; flores diminutas en glomérulos axilares, rodeadas por brácteas hialinas; sépalos largamente mucronados; estambres 5; estaminodios 5.",
    "América austral. Se halla en suelos arenosos y en la estepa clímax."
  ),
  spergularia_platensis: species(
    "spergularia_platensis",
    "Spergularia platensis",
    "51. Caryophyllaceae",
    "Hierba anual, erecta o ascendente, ramosa y glabra, de 5-40 cm de alto.",
    "Hojas lineales de 1-4 cm; cimas plurifloras; sépalos muy cortos, de 0,8-1,5 mm; semillas sin alas.",
    "Argentina; introducida en Chile y Estados Unidos. Común en suelos húmedos."
  ),
  spergularia_marina: species(
    "spergularia_marina",
    "Spergularia marina",
    "51. Caryophyllaceae",
    "Hierba anual, glabra o glanduloso-pubescente, tendida o ascendente.",
    "Hojas lineales de 0,5-4 cm; flores en cimas laxas; sépalos de más de 2,2 mm, glabros o glandulosos; pétalos blancos o rosados; estambres 2-5; semillas con alas o sin ellas.",
    "Suelos salinos de toda América."
  ),
  spergularia_levis: species(
    "spergularia_levis",
    "Spergularia levis",
    "51. Caryophyllaceae",
    "Hierba perenne, erecta y glabra, con tallos de 20-40 cm.",
    "Hojas lineales de 2-8 cm; cimas paucifloras; sépalos glabros de 3-7 mm; estambres 6-10; semillas con ala recortada.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Común en suelos húmedos y fértiles."
  ),
  spergularia_bocconi: species(
    "spergularia_bocconi",
    "Spergularia bocconi",
    "51. Caryophyllaceae",
    "Hierba anual, difusa, glabra o glanduloso-pubescente.",
    "Hojas lineales de 1-4,5 cm; cáliz glanduloso-pubescente de 2,5-5,5 mm; pétalos blancos o rosados; semillas pardo claro, esculpidas o rugosas, sin alas, de 0,4-0,6 mm.",
    "Originaria del Viejo Mundo y adventicia en América."
  ),
  spergularia_ramosa: species(
    "spergularia_ramosa",
    "Spergularia ramosa",
    "51. Caryophyllaceae",
    "Hierba perenne, ascendente o rastrera, glanduloso-pubescente o glabra.",
    "Hojas lineales de 1-4,5 mm; sépalos glanduloso-pubescentes de 6-10 mm; pétalos blancos, cortos; semillas pardo claro, lisas o papilosas, con ala escariosa casi entera de 0,3-0,7 mm.",
    "América austral. En campos húmedos algo salados."
  ),
  spergularia_villosa: species(
    "spergularia_villosa",
    "Spergularia villosa",
    "51. Caryophyllaceae",
    "Hierba perenne, con tallos difusos, tendidos o ascendentes, glanduloso-pubescentes.",
    "Hojas lineales de 1-4 cm; cimas laxas; sépalos glanduloso-pubescentes de 3-5 mm; pétalos blancos; semillas de 0,4-0,6 mm, casi negras, con alas o sin ellas.",
    "América del Sur; introducida en Estados Unidos. Frecuente en suelos húmedos y salinos. Primavera."
  ),
  spergularia_media: species(
    "spergularia_media",
    "Spergularia media",
    "51. Caryophyllaceae",
    "Hierba anual o perenne, con tallos tendidos o ascendentes, glabros o ligeramente pubescentes.",
    "Hojas lineales de 1-5 cm; cimas laxas; sépalos glanduloso-pubescentes de 3-6 mm; pétalos blancos; semillas pardo oscuro de 0,7-1,1 mm, con alas o sin ellas.",
    "Europa; adventicia en América. Común en campos algo salados."
  ),
  spergula_arvensis: species(
    "spergula_arvensis",
    "Spergula arvensis",
    "51. Caryophyllaceae",
    "Hierba anual, ramosa, con tallos glabros o laxamente pubescentes, de 15-50 cm de alto.",
    "Hojas subuladas, estrechamente lineales, fasciculadas, con estípulas membranosas; flores blancas en cimas terminales laxas; estilos 5; cápsulas ovoideas; semillas papilosas.",
    "Europa; adventicia en América."
  ),
  polycarpon_suffruticosum: species(
    "polycarpon_suffruticosum",
    "Polycarpon suffruticosum",
    "51. Caryophyllaceae",
    "Hierba perenne, difusa, de 20-30 cm de alto.",
    "Hojas lanceoladas, enteras, planas, en falsos verticilos de 4, de 6-20 mm; flores pequeñas en cimas terminales; cáliz de 2 mm; estambres 3; estilos soldados hasta cerca del ápice.",
    "Centro de la Argentina. Citada para Pergamino."
  ),
  polycarpon_tetraphyllum: species(
    "polycarpon_tetraphyllum",
    "Polycarpon tetraphyllum",
    "51. Caryophyllaceae",
    "Hierba anual, rastrera, glabra y ramosa.",
    "Hojas elípticas, planas, de unos 5 mm; cimas terminales densas; cáliz de 2 mm; pétalos pequeños, enteros o emarginados; cápsula trivalva.",
    "Europa; adventicia en América. Común en suelos modificados."
  ),
  frankeniaceae: family(
    "frankeniaceae",
    "85. Frankeniaceae",
    "Dicotiledóneas del Grupo C.",
    "Óvulos de placentación parietal y hojas opuestas."
  ),
  frankenia_pulverulenta: species(
    "frankenia_pulverulenta",
    "Frankenia pulverulenta",
    "85. Frankeniaceae",
    "Hierba anual, tendida.",
    "Hojas algo carnosas, obovadas, enteras, de 2,5-3,5 mm, glabras en el haz y algo pubescentes en el envés; flores solitarias, sésiles, axilares en las ramificaciones del tallo; cáliz de 3,5 mm; pétalos 5, blancos o rosados; estambres 5; cápsula de 2,5 mm con 3-12 semillas.",
    "Europa; adventicia en la provincia de Buenos Aires. Citada por Spegazzini para los alrededores de La Plata."
  ),
  cistaceae: family(
    "cistaceae",
    "86. Cistaceae",
    "Dicotiledóneas del Grupo C.",
    "Hierbas, sufrútices o arbustos, con estambres indefinidos, ovario unilocular y placentas parietales."
  ),
  halimium_brasiliense: species(
    "halimium_brasiliense",
    "Halimium brasiliense",
    "86. Cistaceae",
    "Sufrútice de 10-40 cm de alto, ascendente o erecto, velludo.",
    "Hojas sésiles, lanceolado-elípticas, agudas, enteras, de 1,5-3 cm; flores largamente pedunculadas, en cincinios muy laxos o subsolitarias; pétalos amarillos de 1-1,5 cm; flores cleistógamas precoces, casi sésiles en las axilas de las hojas inferiores; cápsulas ovoides, glabras.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina, hasta la provincia de Buenos Aires. Rara cerca de Buenos Aires; más común en el norte provincial y en sierras de Tandil y Ventana; florece en primavera."
  ),
  turneraceae: family(
    "turneraceae",
    "88. Turneraceae",
    "Dicotiledóneas del Grupo C.",
    "Óvulos de placentación parietal y hojas alternas."
  ),
  turnera_pinnatifida_angustiloba: species(
    "turnera_pinnatifida_angustiloba",
    "Turnera pinnatifida var. angustiloba",
    "88. Turneraceae",
    "Hierba perenne con raíces gemíferas profundas y tallos ascendentes, velludos, de unos 20 cm de alto.",
    "Hojas alternas, pinatisectas, con segmentos lineales; flores grandes en las axilas de las hojas superiores; cáliz velludo, con segmentos lanceolados; pétalos color minio, de 1-1,5 cm.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Se encuentra en la estepa clímax; florece en primavera."
  ),
  lythraceae: family(
    "lythraceae",
    "94. Lythraceae",
    "Dicotiledóneas del Grupo C.",
    "Receptáculo tubuloso, verde o coloreado, con pétalos insertos en su borde."
  ),
  lythrum_maritimum: species(
    "lythrum_maritimum",
    "Lythrum maritimum",
    "94. Lythraceae",
    "Planta perenne sufruticosa, de 0,5 m de alto.",
    "Pie del ovario rodeado por un anillo carnoso; estambres 6; hojas decusadas o alternas, oblongo-lanceoladas, obtusas en la base, de 7-33 mm; flores sésiles en las axilas de las hojas; tubo del receptáculo de 5-8 mm, semialado; pétalos 6, violáceos, de 5 mm.",
    "América cálida. Común en los bosques de la ribera del Plata. Florece en verano."
  ),
  lythrum_hyssopifolia: species(
    "lythrum_hyssopifolia",
    "Lythrum hyssopifolia",
    "94. Lythraceae",
    "Hierba anual, decumbente o ascendente, con tallos angostamente alados, glabros.",
    "Pie del ovario sin anillo carnoso; estambres generalmente 4; hojas densas, lineal-oblongas, de 7-30 mm; flores sésiles en las axilas de las hojas; tubo receptacular de 4-5 mm; pétalos 6, azules.",
    "Cosmopolita. Común en suelos húmedos."
  ),
  heimia_salicifolia: species(
    "heimia_salicifolia",
    "Heimia salicifolia",
    "94. Lythraceae",
    "Arbusto glabro de 50 cm de alto.",
    "Hojas opuestas, decusadas, lanceoladas, enteras, discolores, de 1,5-8 cm; flores solitarias, axilares; pétalos amarillos, de 10-18 mm; cápsulas tetraloculares, polispermas.",
    "América cálida. Se halla en la estepa clímax. Nombre vulgar: quiebra arado."
  ),
  cuphea_glutinosa: species(
    "cuphea_glutinosa",
    "Cuphea glutinosa",
    "94. Lythraceae",
    "Planta sufruticosa, densamente glanduloso-pubescente, de unos 40 cm de alto.",
    "Pedúnculos florales con dos bracteolas cerca del ápice; hojas opuestas, cortamente pecioladas, ovadas, de 4-20 mm; flores alternas; receptáculo de 6-9 mm; pétalos violáceos de unos 5 mm.",
    "América templado-cálida. Frecuente en la estepa clímax. Florece en verano. Se considera medicinal. Nombre vulgar: siete sangrías."
  ),
  cuphea_fruticosa: species(
    "cuphea_fruticosa",
    "Cuphea fruticosa",
    "94. Lythraceae",
    "Sufrútice de 50 cm de alto.",
    "Pedúnculos florales sin bracteolas; hojas lanceoladas, opuestas, cortísimamente pecioladas, glabras o casi glabras, de 2-7 cm; flores opuestas, pediceladas, formando seudorracimos terminales; receptáculo de 8-10 mm; pétalos liliáceos, de unos 5 mm.",
    "América austral subtropical. Muy común en el Delta y en la ribera platense. Nombre vulgar: siete sangrías."
  ),
  cuphea_origanifolia: species(
    "cuphea_origanifolia",
    "Cuphea origanifolia",
    "94. Lythraceae",
    "Hierba perenne, de 50 cm de alto.",
    "Pedúnculos florales sin bracteolas; hojas ovadas u ovado-oblongas, generalmente obtusas en la base, de 1,5-4 cm; flores opuestas, en racimos terminales; receptáculo de 6-9 mm; pétalos rosados o violáceos.",
    "Sur del Brasil, Uruguay, Paraguay y nordeste de la Argentina, hasta los bosques de la ribera del Plata."
  ),
  oxalidaceae: family(
    "oxalidaceae",
    "65. Oxalidaceae",
    "Dicotiledóneas del Grupo C.",
    "Hojas trifolioladas con folíolos acorazonados; estambres 10, ovario 5-locular y 5 estilos."
  ),
  oxalis_mallobolba: species(
    "oxalis_mallobolba",
    "Oxalis mallobolba",
    "65. Oxalidaceae",
    "Hierba acaule, bulbosa, con bulbo esférico recubierto de lana parda y rudimentos de brácteas.",
    "Flores solitarias amarillas, de 10-14 mm; raíz carnosa cónica; hojas trifolioladas con folíolos obcordados de hasta 5 mm; pedúnculos 1-4, más largos que las hojas.",
    "Sur de Brasil, Uruguay, centro de la Argentina y Chile. Común en la estepa clímax; otoña. Nombre vulgar: macachín."
  ),
  oxalis_martiana: species(
    "oxalis_martiana",
    "Oxalis martiana",
    "65. Oxalidaceae",
    "Hierba acaule, bulbosa, con bulbo central del tamaño de una avellana rodeado de numerosos bulbillos menores.",
    "Flores rosadas o liliáceas, 5-20 en cimas umbeliformes; hojas largamente pecioladas, trifolioladas, con folíolos obcordados de 25-35 mm.",
    "Regiones cálidas. Poco frecuente en la región."
  ),
  oxalis_macachin: species(
    "oxalis_macachin",
    "Oxalis macachin",
    "65. Oxalidaceae",
    "Hierba acaule, bulbosa, con bulbo simple, esférico, cubierto por brácteas no lanosas.",
    "Flores rosadas o liliáceas, 1-5 en cimas umbeliformes; raíz cónica, carnosa y blanca; hojas trifolioladas con folíolos obcordados de 8-15 mm; corola de 15 mm.",
    "Uruguay, Paraguay y nordeste de la Argentina. Se halla en la estepa clímax; florece en primavera. Nombre vulgar: macachín."
  ),
  oxalis_articulata: species(
    "oxalis_articulata",
    "Oxalis articulata",
    "65. Oxalidaceae",
    "Hierba acaule, sin bulbo, con gruesos tubérculos alargados o articulados.",
    "Flores rosadas, de unos 15 mm, 3-10 en cimas umbeliformes; hojas trifolioladas con folíolos obcordados de 12-20 mm, glabros o laxamente pilosos; incluye la var. sericea, de folíolos densamente seríceo-pubescentes.",
    "Río Grande do Sul, Paraguay, Uruguay y nordeste de la Argentina. Muy común en la región; la var. sericea se halla en la estepa clímax."
  ),
  oxalis_corniculata: species(
    "oxalis_corniculata",
    "Oxalis corniculata",
    "65. Oxalidaceae",
    "Hierba caulescente, débil y tendida.",
    "Flores amarillas, 2-5 en cimas; corola de 7-10 mm; hojas trifolioladas con folíolos obcordados de 10 mm; pedúnculos más largos que las hojas.",
    "Europa; adventicia en casi todo el mundo. Común en suelos modificados. Nombre vulgar: vinagrillo."
  ),
  oxalis_subcorymbosa: species(
    "oxalis_subcorymbosa",
    "Oxalis subcorymbosa",
    "65. Oxalidaceae",
    "Hierba caulescente, más robusta, ascendente, con rizomas delgados.",
    "Flores amarillas en cimas, con corola de 10-15 mm; hojas trifolioladas con folíolos obcordados, pubescentes, de cerca de 20 mm.",
    "Uruguay y Buenos Aires. Vive en los bosques de la ribera platense: San Isidro, Punta Lara, etc."
  ),
  oxalis_commersonii: species(
    "oxalis_commersonii",
    "Oxalis commersonii",
    "65. Oxalidaceae",
    "Hierba con tallos cortos, formando matitas, y rizomas delgados provistos de tubérculos semiesféricos.",
    "Flores amarillas solitarias, con corola de 15-18 mm; hojas semiarrosetadas, largamente pecioladas, trifolioladas, con folíolos obcordados profundamente incisos, hirsutos, de 5-10 mm.",
    "Sur de Brasil, Paraguay, Uruguay y norte de la Argentina. Rara en la región platense."
  ),
  oxalis_cordobensis: species(
    "oxalis_cordobensis",
    "Oxalis cordobensis",
    "65. Oxalidaceae",
    "Hierba tendida, con tallos rastreros radicantes y rizomas delgados.",
    "Flores amarillas solitarias, con corolas de 12-15 mm; hojas alternas, trifolioladas, con folíolos obcordados profundamente hendidos, laxamente pubescentes, de 4-8 mm.",
    "Paraguay, Uruguay y norte de la Argentina. Común en la estepa clímax; florece en primavera. Nombre vulgar: vinagrillo."
  ),
  linaceae: family(
    "linaceae",
    "68. Linaceae",
    "Dicotiledóneas del Grupo C.",
    "Hojas lineales enteras, alternas; plantas robustas."
  ),
  linum_usitatissimum: species(
    "linum_usitatissimum",
    "Linum usitatissimum",
    "68. Linaceae",
    "Planta anual, erecta, de 40-80 cm de alto, glabra.",
    "Hojas alternas, lineal-lanceoladas, trinervadas, de 2-4 cm por 2-6 mm; flores grandes, azules, en cimas corimbiformes terminales; cápsulas ovoideas.",
    "Viejo Mundo. Cultivada y con frecuencia subespontánea junto a vías férreas, rastrojos, etc. Nombre vulgar: lino."
  ),
  linum_selaginoides: species(
    "linum_selaginoides",
    "Linum selaginoides",
    "68. Linaceae",
    "Planta perenne, con raíz gruesa y tallos ascendentes o tendidos.",
    "Hojas densas, abiertas, estrechamente lineales, de 6-10 mm por 0,2-0,5 mm; flores solitarias en ramificaciones superiores y ápices de ramitas; pétalos blancos o rosados, más cortos que los sépalos; cápsulas globosas.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Muy rara cerca de Buenos Aires; más frecuente en el interior de la provincia."
  ),
  geraniaceae: family(
    "geraniaceae",
    "66. Geraniaceae",
    "Dicotiledóneas del Grupo C.",
    "Flores azules o violáceas, pétalos planos; plantas no fétidas."
  ),
  geranium_robertianum: species(
    "geranium_robertianum",
    "Geranium robertianum",
    "66. Geraniaceae",
    "Hierba anual, glanduloso-pubescente, erecta o ascendente.",
    "Hojas divididas hasta la base en 3-5 segmentos pinatilobados; pedúnculos bifloros; pétalos rosados; flores con 10 estambres.",
    "Europa; adventicia en América. Se halla en los bosques del Delta y de la ribera platense."
  ),
  geranium_dissectum: species(
    "geranium_dissectum",
    "Geranium dissectum",
    "66. Geraniaceae",
    "Hierba anual, híspida, con pelos dirigidos hacia abajo y tallos decumbentes o ascendentes.",
    "Hojas largamente pecioladas, de contorno reniforme, profundamente partidas en 5 segmentos palmatipartidos o palmatilobados; esquizocarpos lisos y peludos; pedúnculos bifloros; sépalos ovados de 6-8 mm; pétalos purpúreos.",
    "Europa; adventicia en América. Común en la región; florece en primavera."
  ),
  geranium_molle: species(
    "geranium_molle",
    "Geranium molle",
    "66. Geraniaceae",
    "Hierba anual, pubescente, decumbente o ascendente.",
    "Hojas muy largamente pecioladas, reniformes, partidas hasta su mitad en 7-9 lóbulos trilobados; esquizocarpos transversalmente rugosos y casi glabros; pedúnculos bifloros; pétalos purpúreos.",
    "Europa; adventicia en América. Común durante la primavera."
  ),
  geranium_albicans: species(
    "geranium_albicans",
    "Geranium albicans",
    "66. Geraniaceae",
    "Hierba perenne, con raíz napiforme y tallos de 15-20 cm de alto, laxamente sedosos.",
    "Hojas palmatisectas, con segmentos lobados; pedúnculos 1-2-floros; flores con 10 estambres; rostros de los carpelos glabros en la cara interior.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Se halla en la estepa clímax del norte de Buenos Aires: Pergamino."
  ),
  erodium_malacoides: species(
    "erodium_malacoides",
    "Erodium malacoides",
    "66. Geraniaceae",
    "Hierba anual o bienal, ascendente y pilosa.",
    "Hojas simples, opuestas, largamente pecioladas, ovadas, lobado-crenadas y acorazonadas en la base; flores liliáceas en umbelas definidas; sépalos de unos 5 mm; esquizocarpos hirsutos.",
    "Europa; adventicia en América. Muy común en suelos modificados a fines del invierno."
  ),
  erodium_cicutarium: species(
    "erodium_cicutarium",
    "Erodium cicutarium",
    "66. Geraniaceae",
    "Hierba anual o bienal, pubescente, con tallos tendidos o ascendentes; hojas radicales en roseta y caulinares escasas.",
    "Hojas bipinatisectas, con pinas ovadas y pínulas lanceoladas o lineales; estípulas agudas; flores en umbelas definidas largamente pedunculadas; sépalos de 6-7 mm; esquizocarpos seríceos.",
    "Europa; adventicia en América. Raro en campos fértiles. Nombre vulgar: alfilerillo."
  ),
  erodium_moschatum: species(
    "erodium_moschatum",
    "Erodium moschatum",
    "66. Geraniaceae",
    "Hierba anual o bienal, tendida o ascendente, con hojas inferiores arrosetadas.",
    "Hojas pinatisectas, con pinas ovadas, pecioladas y más o menos profundamente lobadas; estípulas obtusas; flores en umbelas definidas axilares largamente pedunculadas; cáliz de unos 8 mm; esquizocarpos seríceos.",
    "Europa; adventicia en América. Rara en la región. Nombre vulgar: alfilerillo."
  ),
  loasaceae: family(
    "loasaceae",
    "90. Loasaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas con pelos urticantes."
  ),
  blumenbachia_urens: species(
    "blumenbachia_urens",
    "Blumenbachia urens",
    "90. Loasaceae",
    "Hierba anual, decumbente, urticante.",
    "Hojas trifolioladas, con folíolos ovados más o menos profundamente lobados en el margen; flores cortamente pedunculadas, con pedúnculos de 3-15 mm y corola blanca; sépalos pinatipartidos; cápsulas globosas, de 2 cm de diámetro.",
    "América austral cálida. Vive en los bosques de talas y en las selvas de la ribera platense."
  ),
  blumenbachia_insignis: species(
    "blumenbachia_insignis",
    "Blumenbachia insignis",
    "90. Loasaceae",
    "Hierba perenne, rastrera o ascendente, urticante.",
    "Hojas palmatisectas, con 3-5 segmentos primarios, cada uno bipinatisecto, con segmentitos lanceolados; flores largamente pedunculadas, con pedúnculos de 30-120 mm y corola blanca; sépalos enteros; cápsulas globosas, de 1,5-2 cm de diámetro.",
    "Sur del Brasil, Uruguay y norte y centro de la Argentina. Cerca de la Capital Federal se encuentra en suelos sueltos, especialmente en bancos de conchilla paralelos al Río de la Plata."
  ),
  cactaceae: family(
    "cactaceae",
    "92. Cactaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas crasas, sin hojas, generalmente con espinas; flores espiraladas."
  ),
  opuntia_aurantiaca: species(
    "opuntia_aurantiaca",
    "Opuntia aurantiaca",
    "92. Cactaceae",
    "Planta ramosa, de 30-70 cm de alto, a veces rastrera.",
    "Artículos del tallo ligeramente aplastados, oblongos, de 5-15 cm de largo por 1,2-2 cm de ancho; areolas densas, con gloquidios y manojos de unas 5 espinas blanquecinas, dos de ellas de hasta 3,5 cm; flores anaranjadas, de 1,5-2 cm; frutos rojos, de 2,5 cm.",
    "Frecuente en las barrancas del Paraná: San Nicolás, San Pedro, Escobar, etc., y en la Isla Martín García. Existe también en Entre Ríos y Uruguay."
  ),
  opuntia_arechavaletai: species(
    "opuntia_arechavaletai",
    "Opuntia arechavaletai",
    "92. Cactaceae",
    "Planta erecta, de 1-2 m de alto.",
    "Artículos muy comprimidos, de 15-30 cm de largo por 8-12 cm de ancho; areolas con gloquidios y una o dos espinas blanquecinas de 3-7 cm; ovario turbinado, de 4-5 cm; perianto anaranjado, de 2,5-3,5 cm.",
    "Uruguay y región platense. Crece en las barrancas de San Isidro, junto a las vías férreas, etc."
  ),
  opuntia_vulgaris: species(
    "opuntia_vulgaris",
    "Opuntia vulgaris",
    "92. Cactaceae",
    "Planta ramosa, de 1-4 m de alto, con tronco principal cilíndrico.",
    "Artículos muy comprimidos, obovados, de 10-30 cm de largo; areolas con lana blanca, gloquidios y una o dos espinas cortas y gruesas, amarillentas o pardas, de 1-4 cm; perianto amarillo, de 3-4 cm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Adventicia en otras regiones del globo. Hallada en la Isla Martín García."
  ),
  rhipsalis_leucorhaphis: species(
    "rhipsalis_leucorhaphis",
    "Rhipsalis leucorhaphis",
    "92. Cactaceae",
    "Epífita con tallos verdes, cilíndricos, surcados, de más de 30 cm de largo por 4-5 mm de diámetro.",
    "Areolas con una bráctea papirácea triangular, muy conspicua en los tallos jóvenes, y espinitas caducas; flores blancas; ovario de unos 5 mm; perianto de 10 mm; frutos de color vinoso oscuro, casi globosos, de 6-10 mm de diámetro.",
    "Paraguay y nordeste de la Argentina. Hallada en los bosques de Campana."
  ),
  rhipsalis_lumbricoides: species(
    "rhipsalis_lumbricoides",
    "Rhipsalis lumbricoides",
    "92. Cactaceae",
    "Epífita con tallos cilíndricos, 8-costados, de unos 6 mm de diámetro.",
    "Areolas con brácteas muy reducidas y espinitas cortas, caducas o persistentes; flores blancas nacaradas; perianto de 10-12 mm; frutos pequeños, globosos.",
    "Sur del Brasil, Paraguay, Uruguay y norte de la Argentina. Muy común en los bosques del Delta y de la ribera del Plata, especialmente sobre seibos."
  ),
  cereus_peruvianus: species(
    "cereus_peruvianus",
    "Cereus peruvianus",
    "92. Cactaceae",
    "Planta arbórea, ramificada, de 3-15 m de alto.",
    "Ramas glaucas, de 9-20 cm de diámetro, con 6-9 costillas salientes; areolas con 5-10 espinas pardas de 1-3 cm; flores de unos 15 cm, con tépalos interiores blancos; estambres en dos series; frutos amarillos, ovoideos, de unos 6,5 cm; semillas negras.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Se encuentra en la Isla Martín García. Nombre vulgar: cardón."
  ),
  echinopsis_tubiflora: species(
    "echinopsis_tubiflora",
    "Echinopsis tubiflora",
    "92. Cactaceae",
    "Planta con tallos simples o agrupados en corto número, globosos y deprimidos en el centro, de unos 10-12 cm de diámetro.",
    "Costillas 10-14, prominentes, ligeramente onduladas; areolas con lana blanca y 9-10 espinas claras de unos 15 mm; flores laterales, blancas, de 15-20 cm; frutos de 4 cm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina, hasta las barrancas de Campana, al norte de Buenos Aires."
  ),
  begoniaceae: family(
    "begoniaceae",
    "91. Begoniaceae",
    "Dicotiledóneas del Grupo D.",
    "Hierbas con flores unisexuales diclinas."
  ),
  begonia_cucullata: species(
    "begonia_cucullata",
    "Begonia cucullata",
    "91. Begoniaceae",
    "Hierba perenne, estolonífera, glabra, de 10-50 cm de alto, tuberosa en la base.",
    "Hojas pecioladas, asimétricas, anchamente ovadas, obtusas, crenado-aserradas, palminervadas, de 7-8 cm de largo; estípulas oblongas; cimas axilares paucifloras; flores masculinas con 4 tépalos, exteriores rosados e interiores blancos; flores femeninas con 4-5 tépalos; fruto cápsula trilocular, con 3 alas desiguales.",
    "América tropical y subtropical. Común en lugares húmedos y sombríos de los bosques del Delta y de la ribera del Plata. También se cultiva como ornamental. Nombre vulgar: begonia."
  ),
  myrtaceae: family(
    "myrtaceae",
    "96. Myrtaceae",
    "Dicotiledóneas del Grupo D.",
    "Árboles con flores hermafroditas."
  ),
  blepharocalyx_tweediei: species(
    "blepharocalyx_tweediei",
    "Blepharocalyx tweediei",
    "96. Myrtaceae",
    "Árbol de 5-12 m de alto, con tronco de hasta 40 cm de diámetro.",
    "Hojas cortamente pecioladas, lanceoladas, glabras, enteras, de 4-8 cm; flores blancas, con pétalos y sépalos fimbriados en el margen; bayas globosas, rojas; semillas con cotiledones diminutos en el extremo de una radícula grande, más o menos enroscada.",
    "Sur del Brasil, Uruguay y norte de la Argentina. Muy común en los bosques del Delta y en las selvas marginales de la ribera platense. Florece a fines de primavera y fructifica en verano y otoño. Medicinal. Nombre vulgar: arrayán."
  ),
  myrceugenia_glaucescens: species(
    "myrceugenia_glaucescens",
    "Myrceugenia glaucescens",
    "96. Myrtaceae",
    "Arbolito o arbusto de 3-5 m de alto.",
    "Hojas opuestas, oblanceoladas, enteras, discolores, glabras, de 5-8 cm; flores blancas, fragantes, dispuestas de 2-3 en las axilas de las hojas; bayas elipsoideas, de unos 12 mm; cotiledones grandes, delgados y plegados.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Bastante frecuente en los matorrales del Delta y de la ribera del Plata. Medicinal. Nombre vulgar: murta."
  ),
  eugenia_opaca: species(
    "eugenia_opaca",
    "Eugenia opaca",
    "96. Myrtaceae",
    "Arbolito con ramitas pubescentes o casi glabras.",
    "Hojas ovado-oblongas, cortamente pecioladas, acuminadas y subobtusas en el ápice, de 7 cm; flores en pequeños racimitos o corimbos subumbeliformes, rara vez solitarias; pétalos fimbriados, blancos; bayas ovoides; semillas con cotiledones grandes, gruesos y carnosos.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina, hasta el Delta del Paraná. Nombre vulgar: guayabo blanco."
  ),
  loranthaceae: family(
    "loranthaceae",
    "41. Loranthaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas parásitas, con flores grandes y vivamente coloreadas."
  ),
  psittacanthus_cuneifolius: species(
    "psittacanthus_cuneifolius",
    "Psittacanthus cuneifolius",
    "41. Loranthaceae",
    "Arbusto hemiparásito, con tallos leñosos.",
    "Hojas alternas, crasas, lineal-espatuladas y enteras; flores grandes con perigonio rojo de unos 35-45 mm; bayas globosas u ovoideas.",
    "América del Sur; en los alrededores de Buenos Aires se halla en Campana y Otamendi, parásita sobre talas y chañares. N. v.: liga, liguilla."
  ),
  psittacanthus_cuneifolius_flava: species(
    "psittacanthus_cuneifolius_flava",
    "Psittacanthus cuneifolius var. flava",
    "41. Loranthaceae",
    "Variedad de Psittacanthus cuneifolius con flores amarillas.",
    "Arbusto hemiparásito; hojas crasas, lineal-espatuladas; flores de color amarillo intenso.",
    "NE de la Argentina y Uruguay; hallada en la Isla Martín García sobre Schinus y Acacia."
  ),
  combretaceae: family(
    "combretaceae",
    "95. Combretaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas no parásitas, con flores pequeñas verdosas."
  ),
  terminalia_australis: species(
    "terminalia_australis",
    "Terminalia australis",
    "95. Combretaceae",
    "Árbol de 4-10 m de alto.",
    "Hojas oblanceoladas, glabras, enteras, de 2-7 cm de largo; flores amarillentas, de 2-2,5 mm, en capítulos; frutos elípticos, con dos alas.",
    "Paraguay, Uruguay y nordeste de la Argentina, hasta el Delta y la ribera del Plata. Florece en primavera. Nombre vulgar: palo amarillo."
  ),
  umbelliferae: family(
    "umbelliferae",
    "100. Umbelliferae",
    "Dicotiledóneas del Grupo D.",
    "Flores pequeñas en umbelas o capítulos densos; fruto seco dividido en dos mericarpos."
  ),
  eryngium_coronatum: species(
    "eryngium_coronatum",
    "Eryngium coronatum",
    "100. Umbelliferae",
    "Hierba perenne, erecta, de 30-40 cm de alto, ramificada dicotómicamente.",
    "Planta de menos de 50 cm; capítulos ovoideos coronados por brácteas lineal-lanceoladas rígidas casi tan largas o más largas que el capítulo; hojas rígidas, las inferiores en roseta, oblanceoladas, dentadas, lobuladas o pinatisectas, con lóbulos espinescentes; frutos con escamas dorsales vesiculosas y laterales algo mayores.",
    "Paraguay, Uruguay y nordeste de la Argentina. Rara en campos húmedos."
  ),
  eryngium_kurtzii: species(
    "eryngium_kurtzii",
    "Eryngium kurtzii",
    "100. Umbelliferae",
    "Hierba perenne, rastrera, ramificada dicotómicamente.",
    "Planta de menos de 50 cm; capítulos sésiles en las bifurcaciones del tallo, ovoideo-cilíndricos; hojas tiernas, radicales y caulinares largamente pecioladas, trisectas, con segmentos lanceolados irregularmente aserrados, lobados o partidos; brácteas superiores subuladas formando un penacho apical.",
    "Centro de la Argentina. Rara en los alrededores de Buenos Aires: San Pedro."
  ),
  eryngium_divaricatum: species(
    "eryngium_divaricatum",
    "Eryngium divaricatum",
    "100. Umbelliferae",
    "Hierba perenne, glabra, rastrera, ramificada dicotómicamente.",
    "Capítulos ovoideos o esféricos, no coronados por brácteas largas; tallos tendidos o ascendentes; hojas radicales lineales, profundamente pinatisectas, con segmentos lanceolados; brácteas involucrales mucho más cortas que los capítulos; capítulos verdosos, cortamente pedunculados.",
    "Nordeste de la Argentina y Uruguay. En terrenos húmedos."
  ),
  eryngium_echinatum: species(
    "eryngium_echinatum",
    "Eryngium echinatum",
    "100. Umbelliferae",
    "Hierba perenne, con raíces carnosas y tallos tendidos, laxamente ramificados dicotómicamente.",
    "Capítulos ovoideos o esféricos, no coronados; brácteas involucrales iguales o más largas que los capítulos; hojas radicales oblanceolado-lineales, aserradas o lobadas, con dientes o segmentos espinosos; hojas caulinares opuestas en los puntos de ramificación.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en campos húmedos."
  ),
  eryngium_nudicaule: species(
    "eryngium_nudicaule",
    "Eryngium nudicaule",
    "100. Umbelliferae",
    "Hierba perenne, erecta, glabra, con raíces carnosas y tallos erectos, de 10-30 cm de alto.",
    "Planta de menos de 50 cm, con tallos erectos divididos en 3-5 ramas en la parte superior; hojas radicales oblanceolado-espatuladas, obtusas, crenadas; hojas superiores verticiladas; capítulos en cima corimbiforme compuesta, globosos u ovoideos.",
    "América austral. Se halla en la estepa clímax."
  ),
  eryngium_serra: species(
    "eryngium_serra",
    "Eryngium serra",
    "100. Umbelliferae",
    "Hierba perenne, rizomatosa, glabra, erecta, de 1-2 m de alto.",
    "Planta de más de 50 cm; hojas lanceoladas, con nervaduras divergentes y margen con dientes perpendiculares espinosos y cilias; brácteas florales enteras; hojas basales lineal-lanceoladas, envainadoras en la base; frutos con escamas laterales aliformes y dorsales vesiculosas.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en los pajonales del Delta y de la ribera. Florece en verano. Nombre vulgar: carda."
  ),
  eryngium_elegans: species(
    "eryngium_elegans",
    "Eryngium elegans",
    "100. Umbelliferae",
    "Hierba perenne, rizomatosa, erecta, de 0,5-1,5 m de alto.",
    "Planta de más de 50 cm; hojas lanceoladas, con nervaduras divergentes; brácteas florales tricuspidadas; hojas basales oblanceolado-lineales, aserradas, con dientes muy abiertos espinosos y cilias cortas; inflorescencia en panoja de cimas.",
    "América austral cálida. En campos húmedos de toda la provincia de Buenos Aires."
  ),
  eryngium_ebracteatum: species(
    "eryngium_ebracteatum",
    "Eryngium ebracteatum",
    "100. Umbelliferae",
    "Hierba perenne, erecta, de 1-2 m de alto, con rizomas cilíndricos y tallos delgados, glabros.",
    "Hojas lineales, con nervaduras paralelas y margen entero con espinas apenas divergentes o sin espinas; capítulos cilíndricos, vinosos, de 1-2 cm, con brácteas involucrales y florales muy cortas; frutos con escamas vesiculosas.",
    "América cálida. Común en pajonales, lagunas, etc."
  ),
  eryngium_eburneum: species(
    "eryngium_eburneum",
    "Eryngium eburneum",
    "100. Umbelliferae",
    "Hierba perenne, rizomatosa, glabra, de 2-2,5 m de alto.",
    "Hojas lineales con nervaduras paralelas; capítulos ovoideos de 15-20 mm, en panoja alargada de cimas; frutos con escamas marginales aliformes, sin escamas dorsales; hojas basales en roseta, lineales, envainadoras y canaliculadas, con fuertes espinas marginales.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Muy frecuente en pajonales y lugares inundables del Delta y de la ribera. Nombre vulgar: carda."
  ),
  eryngium_pandanifolium: species(
    "eryngium_pandanifolium",
    "Eryngium pandanifolium",
    "100. Umbelliferae",
    "Hierba perenne, rizomatosa, glabra, robusta, de 2-2,5 m de alto.",
    "Capítulos ovoideos, verdosos o algo violáceos, de 7-9 mm, en amplia panoja corimbiforme de cimas; brácteas involucrales cortas, anchamente lanceoladas; hojas inferiores en roseta, envainadoras, acanaladas en la base, lineales, con borde recto provisto de espinas apenas divergentes.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Muy frecuente en orillas de riachos del Delta y pajonales de la ribera platense. Florece en verano. Nombre vulgar: caraguatá."
  ),
  eryngium_horridum: species(
    "eryngium_horridum",
    "Eryngium horridum",
    "100. Umbelliferae",
    "Hierba perenne, rizomatosa, glabra, de 1,5-2 m de alto.",
    "Capítulos globosos, de 10-12 mm, verdosos, en densa panoja de cimas; brácteas involucrales ovadas, acuminado-espinosas, enteras; hojas basales en roseta, lineales, envainadoras, acanaladas en la base, agudísimas, con fuertes espinas en el margen.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Rara en la ribera platense."
  ),
  eryngium_chamissonis: species(
    "eryngium_chamissonis",
    "Eryngium chamissonis",
    "100. Umbelliferae",
    "Hierba perenne, rizomatosa, robusta.",
    "Capítulos ovoideo-globosos, de 15-17 mm, en cimas corimbiformes dicotómicas muy laxas; brácteas involucrales acuminadas; hojas inferiores arrosetadas, lineales, envainadoras, agudas, con espinas cortas en el margen; hojas caulinares lineal-lanceoladas, mucho menores.",
    "Sur del Brasil. El manual refiere con reservas un ejemplar de Punta Lara, en la ribera del Río de la Plata."
  ),
  torilis_nodosa: species(
    "torilis_nodosa",
    "Torilis nodosa",
    "100. Umbelliferae",
    "Hierba anual, decumbente, ramosa, con pelos tendidos y en el tallo retrorsos.",
    "Hojas bi- o tripinatisectas, con segmentos oblongo-lineales, agudos; umbelas sésiles, densas, opuestas a las hojas, con radios muy cortos; frutos ovoideos de unos 3 mm, con cerdas espiniformes sobre toda su superficie.",
    "Europa; adventicia en América. Común en la estepa clímax y en los talares. Florece en primavera."
  ),
  daucus_montevidensis: species(
    "daucus_montevidensis",
    "Daucus montevidensis",
    "100. Umbelliferae",
    "Hierba anual, pubescente, de altura muy variable, con tallos erectos.",
    "Hojas bipinatisectas; flores blancas, en umbelas compuestas; frutos con espinas únicamente sobre las costillas; umbelas grandes, compuestas, terminales.",
    "América austral; adventicia en Europa. Común en suelos arenosos."
  ),
  lilaeopsis_minor: species(
    "lilaeopsis_minor",
    "Lilaeopsis minor",
    "100. Umbelliferae",
    "Hierba perenne, acaule, con rizoma delgado.",
    "Umbelas 2-7-floras, solitarias en las axilas de las hojas, raramente de a dos; hojas lineales, obtusas, de 2-6,5 cm; frutos globosos, de 2 mm.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en lugares inundables, en el césped de la ribera, etc."
  ),
  lilaeopsis_caroliniensis: species(
    "lilaeopsis_caroliniensis",
    "Lilaeopsis caroliniensis",
    "100. Umbelliferae",
    "Hierba perenne, acaule, rizomatosa.",
    "Umbelas generalmente con más de 7 flores, agrupadas de a dos o tres en cada nudo; hojas espatuladas, septadas, de 6-20 cm por 0,5-1,2 cm; frutos transovados, de 2-3 mm.",
    "América templado-cálida. Común en las orillas de charcas y lagunas, a veces semisumergida."
  ),
  lilaeopsis_attenuata: species(
    "lilaeopsis_attenuata",
    "Lilaeopsis attenuata",
    "100. Umbelliferae",
    "Hierba perenne, acaule, rizomatosa.",
    "Umbelas 8-21-floras, en grupos de 2-4, raramente hasta 7, en las axilas de las hojas; hojas subuladas, atenuadas en la parte superior, de 6-27 cm por 0,2-0,5 cm; frutos globosos, de 1,5-2 mm.",
    "Centro y este de la Argentina. Común en la orilla inundable de arroyos y lagunas."
  ),
  centella_hirtella: species(
    "centella_hirtella",
    "Centella hirtella",
    "100. Umbelliferae",
    "Hierba perenne, rizomatosa, con tallos rastreros radicantes de los que nacen rosetitas de hojas y pedúnculos.",
    "Hojas largamente pecioladas, ovadas, obtusas, algo cordadas en la base, crenado-dentadas, hirsutas; pedúnculos cortos con umbelas paucifloras o flores solitarias; frutos de 2,5-3 mm; mericarpos con 7-9 costillas.",
    "América austral. Rara en campos húmedos."
  ),
  hydrocotyle_cryptocarpa: species(
    "hydrocotyle_cryptocarpa",
    "Hydrocotyle cryptocarpa",
    "100. Umbelliferae",
    "Hierba perenne, glabra, rastrera, radicante en los nudos.",
    "Flores solitarias sobre largos pedúnculos axilares, pequeñas; fruto elíptico, grande, de 6-7 mm por 4-5 mm, que se entierra espontáneamente a la madurez; hojas reniformes, generalmente flotantes, 5-7-palmatilobadas, de 7-15 mm de diámetro.",
    "Uruguay y este de la Argentina. Común en pantanos, charcas, etc. Florece en primavera."
  ),
  hydrocotyle_ranunculoides: species(
    "hydrocotyle_ranunculoides",
    "Hydrocotyle ranunculoides",
    "100. Umbelliferae",
    "Hierba perenne, glabra.",
    "Flores en umbelas; hojas no peltadas, reniformes o suborbiculares; frutos muy comprimidos lateralmente, reniformes; umbelas 4-12-floras; plantas flotantes o tendidas sobre el barro; hojas 5-7-palmatilobadas, con lóbulos crenados, de 0,5-6 cm.",
    "América cálida. Común en arroyos, lagunas, etc. Florece en primavera."
  ),
  hydrocotyle_leucocephala: species(
    "hydrocotyle_leucocephala",
    "Hydrocotyle leucocephala",
    "100. Umbelliferae",
    "Hierba perenne, humilde, de suelos húmedos, con rizoma horizontal delgado.",
    "Hojas no peltadas, circular-reniformes, profundamente hendidas a un lado, crenadas, finamente velludas, de 1-5 cm de diámetro; umbelas simples, contraídas, muy largamente pedunculadas, 20-30-floras; flores blancas diminutas; frutos más o menos globosos.",
    "Sudeste del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en las selvas ribereñas del Delta y de la ribera platense."
  ),
  hydrocotyle_pusilla: species(
    "hydrocotyle_pusilla",
    "Hydrocotyle pusilla",
    "100. Umbelliferae",
    "Hierba perenne, pigmea, glabra o casi glabra, con tallos rastreros y rizomas horizontales delgados.",
    "Hojas peltadas, cortamente pecioladas, con lámina orbicular, crenada, de 4-20 mm de diámetro; umbelas simples casi capituliformes, con 3-10 flores; pedicelos cortísimos; fruto reniforme, grueso.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Muy común en el césped de la ribera platense. Florece en primavera."
  ),
  hydrocotyle_modesta: species(
    "hydrocotyle_modesta",
    "Hydrocotyle modesta",
    "100. Umbelliferae",
    "Hierba perenne, pigmea, glabra, con rizomas horizontales o tallos rastreros.",
    "Hojas peltadas, orbiculares, crenadas, de 10-50 mm de diámetro; umbelas simples, con pedicelos de 2-4 mm y 20-40 flores; frutos gruesos, reniformes.",
    "Uruguay, Argentina y Chile. Muy común en la orilla de los arroyos y en el césped de la ribera. Florece en primavera."
  ),
  hydrocotyle_bonariensis: species(
    "hydrocotyle_bonariensis",
    "Hydrocotyle bonariensis",
    "100. Umbelliferae",
    "Hierba perenne, glabra, con rizomas horizontales blancos o tallos rastreros radicantes.",
    "Hojas peltadas, circulares, lobulado-crenadas, de 2-10 cm de diámetro; umbelas compuestas, plurifloras; pétalos amarillentos; frutos comprimidos lateralmente, orbiculares o reniformes, de 2-3 mm de ancho.",
    "América del Sur templado-cálida. Vegeta en suelos pantanosos o en dunas húmedas. Común en el Delta y en la ribera platense. Florece en verano. Nombre vulgar: redondita de agua."
  ),
  hydrocotyle_verticillata: species(
    "hydrocotyle_verticillata",
    "Hydrocotyle verticillata",
    "100. Umbelliferae",
    "Hierba perenne, glabra, rizomatosa.",
    "Hojas peltadas, circulares, crenadas, de 1,5-6 cm de diámetro; flores casi sentadas, dispuestas en 2-5 verticilos distantes a lo largo del eje de la inflorescencia, cada uno con 2-7 flores; frutos muy comprimidos, suborbiculares.",
    "América austral. Se halla en pajonales y suelos húmedos."
  ),
  bowlesia_tenera: species(
    "bowlesia_tenera",
    "Bowlesia tenera",
    "100. Umbelliferae",
    "Hierba anual, ramosa, tendida o ascendente, laxamente cubierta de pelos estrellados.",
    "Plantas con tallos aéreos ramificados y pelos estrellados; hojas largamente pecioladas, reniformes, profundamente palmatilobadas, con unos 7 lóbulos enteros o dentados; umbelas simples, paucifloras, cortamente pedunculadas; frutos con pelos estrellados.",
    "América del Sur. Común en lugares húmedos, especialmente en suelos modificados. Florece al comienzo de la primavera."
  ),
  foeniculum_vulgare: species(
    "foeniculum_vulgare",
    "Foeniculum vulgare",
    "100. Umbelliferae",
    "Hierba perenne, glabra, erecta, de 1-2 m de alto.",
    "Hojas envainadoras en la base, pecioladas, profundamente tripinatisectas, con muchos segmentos capilares; umbelas compuestas, sin involucros; corolas amarillas; frutos de unos 6 mm.",
    "Europa; adventicia en América. Común en suelos modificados, terraplenes del ferrocarril, etc. Nombre vulgar: hinojo."
  ),
  notiosciadium_pampicola: species(
    "notiosciadium_pampicola",
    "Notiosciadium pampicola",
    "100. Umbelliferae",
    "Hierba anual, glabra, tendida.",
    "Hojas bipinaticompuestas, dilatadas en la base del pecíolo, con segmentos diminutos lanceolados; umbelas sésiles, con 1-3 radios terminados en umbélulas de 1-3 flores; frutos oblongos de unos 4 mm, áspero-papilosos sobre las costillas.",
    "Provincia de Buenos Aires, en la estepa clímax. Florece en octubre y noviembre."
  ),
  conium_maculatum: species(
    "conium_maculatum",
    "Conium maculatum",
    "100. Umbelliferae",
    "Hierba anual o bienal, glabra, erecta, de cerca de 2 m de alto.",
    "Hojas pinaticompuestas, con folíolos pinatilobados y segmentos aserrados; umbelas compuestas, multirradiadas, con involucro e involucelos; flores blancas; frutos de unos 3 mm, con costillas muy rugosas.",
    "Europa; adventicia en América. Muy común en terraplenes del ferrocarril, orillas de caminos, rastrojos, etc. Planta fétida y venenosa. Florece en primavera. Nombre vulgar: cicuta."
  ),
  ammi_majus: species(
    "ammi_majus",
    "Ammi majus",
    "100. Umbelliferae",
    "Hierba anual, erecta, de 50 cm de alto.",
    "Hojas inferiores pinati- o bipinaticompuestas, con folíolos ovado-lanceolados, aserrados; hojas superiores con segmentos lineales; umbelas con involucro formado por brácteas pinatisectas e involucelos de brácteas lineales; flores diminutas, blancas; inflorescencia fructificada abierta.",
    "Europa; adventicia en América. Común en suelos modificados. Florece en verano."
  ),
  ammi_visnaga: species(
    "ammi_visnaga",
    "Ammi visnaga",
    "100. Umbelliferae",
    "Hierba anual, erecta, de cerca de 1 m de alto.",
    "Hojas inferiores y superiores tripinatisectas, con segmentos lineales muy angostos; umbelas densas, plurifloras; brácteas del involucro pinatisectas y las de los involucelos lineales; flores blancas, pequeñas; inflorescencias fructificadas con radios curvados hacia adentro.",
    "Europa; adventicia en América. Muy común en suelos modificados, rastrojos, etc. Florece en verano. Nombre vulgar: biznaga."
  ),
  apium_sellowianum: species(
    "apium_sellowianum",
    "Apium sellowianum",
    "100. Umbelliferae",
    "Hierba erecta, anual o bienal, de 1-1,5 m de alto.",
    "Hojas bipinaticompuestas, con 1-4 divisiones primarias divididas en folíolos lanceolados, enteros o lobados; umbelas compuestas, con involucro de 1-2 brácteas trífidas, sin involucelos; flores muy numerosas; frutos ovoideos, de 2,5 mm.",
    "Región platense. Muy común en pajonales del Delta y de la ribera. Florece a principios del verano. Nombre vulgar: apio cimarrón."
  ),
  apium_leptophyllum: species(
    "apium_leptophyllum",
    "Apium leptophyllum",
    "100. Umbelliferae",
    "Hierba anual, glabra, ascendente o erecta, de 10-80 cm de alto.",
    "Hojas bi- o tripinatisectas, con segmentos estrechamente lineales y pecíolo envainador; umbelas compuestas, por lo común sésiles, sin involucro ni involucelos; flores numerosas; frutos circulares, con costillas gruesas, de cerca de 2 mm. El manual cita además la forma filamentosum, con lacinias foliares filiformes.",
    "América cálida; adventicia en Europa y otras regiones del globo. Muy común en suelos húmedos. Florece en primavera."
  ),
  apium_prostratum: species(
    "apium_prostratum",
    "Apium prostratum",
    "100. Umbelliferae",
    "Hierba perenne, con raíz gruesa y tallos tendidos, ramosos, de 10-30 cm de largo.",
    "Hojas bi- o tripinatisectas, largamente pecioladas, con segmentos lineales; umbelas compuestas, sin involucro ni involucelos; frutos circulares, con costillas muy gruesas, de 2-2,4 mm.",
    "Australia, Tasmania y extremo sur de Patagonia. El manual indica que a esta especie podría referirse un pequeño Apium perenne de campos salobres de los alrededores de La Plata."
  ),
  oenanthe_globulosa: species(
    "oenanthe_globulosa",
    "Oenanthe globulosa",
    "100. Umbelliferae",
    "Hierba perenne, con raíces crasas fasciculadas y tallos de 20-50 cm de alto.",
    "Segmentos de las hojas oblongos; flores blancas o rosadas, en umbelas de 5-6 radios que llevan umbelillas globosas; frutos gruesos, globulosos, no comprimidos.",
    "Sur de Europa. Se halla a veces en suelos modificados."
  ),
  coriandrum_sativum: species(
    "coriandrum_sativum",
    "Coriandrum sativum",
    "100. Umbelliferae",
    "Hierba anual, glabra, de 30-40 cm de alto.",
    "Hojas inferiores pinatisectas, con segmentos ovados, dentados; hojas superiores tripinatisectas, con segmentos lineales; flores con pétalos exteriores más largos; fruto semigloboso u ovoideo.",
    "Europa; adventicia en todo el globo. Rara en la región: Isla Santiago. Nombre vulgar: coriandro."
  ),
  haloragaceae: family(
    "haloragaceae",
    "99. Haloragaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas acuáticas semisumergidas con hojas verticiladas, pinatisectas, de segmentos lineales."
  ),
  myriophyllum_brasiliense: species(
    "myriophyllum_brasiliense",
    "Myriophyllum brasiliense",
    "99. Haloragaceae",
    "Hierba perenne, ramosa, generalmente sumergida excepto en la parte superior, donde aparecen las flores; a veces vegeta emergida sobre barro húmedo.",
    "Todas las hojas profundamente pinatisectas, en verticilos de 4-6, de contorno elíptico, con raquis y segmentos lineal-filiformes; flores unisexuales, monoicas o semidioicas, diminutas, solitarias en las axilas de las hojas.",
    "América austral. Común en los arroyos del Delta y de la ribera platense. Nombre vulgar: helechito de agua."
  ),
  myriophyllum_elatinoides: species(
    "myriophyllum_elatinoides",
    "Myriophyllum elatinoides",
    "99. Haloragaceae",
    "Hierba sumergida, salvo el extremo superior de los tallos, muy ramosa.",
    "Hojas superiores florales obovadas u orbiculares, aserradas; las demás hojas sumergidas, profundamente pinatisectas, con raquis y segmentos lineal-filiformes, dispuestas en verticilos de 3-5; flores solitarias, hermafroditas o algunas unisexuales.",
    "Tasmania, Nueva Zelandia y América del Sur. Rara en la región; más frecuente en el interior de la provincia de Buenos Aires, en lagunas y tanques australianos. Nombre vulgar: gambarusa."
  ),
  saxifragaceae: family(
    "saxifragaceae",
    "62. Saxifragaceae",
    "Dicotiledóneas del Grupo D.",
    "Plantas terrestres con anteras de dehiscencia longitudinal y estambres 5."
  ),
  escallonia_megapotamica: species(
    "escallonia_megapotamica",
    "Escallonia megapotamica",
    "62. Saxifragaceae",
    "Arbusto glabro de cerca de 1,5 m de alto.",
    "Hojas alternas, sésiles, oblanceoladas, obtusas y apiculadas, atenuadas en la base, aserradas en la parte superior; flores en panojas densas; receptáculo turbinado; sépalos triangulares; pétalos blancos de 5-6 mm; cápsula de 4-5 mm con estilo persistente.",
    "Sur de Brasil, Uruguay y nordeste de la Argentina. Rara en las islas altas y arenosas del Delta."
  ),
  onagraceae: family(
    "onagraceae",
    "98. Onagraceae",
    "Dicotiledóneas del Grupo D.",
    "Estambres 4 y tubo del cáliz muy largo, frecuentemente prolongado en hipanto."
  ),
  jussiaea_uruguayensis: species(
    "jussiaea_uruguayensis",
    "Jussiaea uruguayensis",
    "98. Onagraceae",
    "Hierba perenne, rizomatosa, con tallos flotantes o tendidos, o bien ascendentes, generalmente pubescentes.",
    "Flores 5-meras; semillas uniseriadas en cada lóculo de la cápsula; hojas de los tallos florales lanceoladas; bracteolas lanceoladas; hojas lanceoladas u oblanceoladas, agudas u obtusas, de 1-6 cm; flores cortamente pedunculadas; pétalos amarillos de 1,5-2 cm.",
    "América cálida. Común en lagunas del Delta y de la ribera platense."
  ),
  jussiaea_repens_montevidensis: species(
    "jussiaea_repens_montevidensis",
    "Jussiaea repens var. montevidensis",
    "98. Onagraceae",
    "Planta perenne, con tallos tendidos o flotantes, radicantes en los nudos, pilosos.",
    "Flores 5-meras; semillas uniseriadas en cada lóculo de la cápsula; hojas de los tallos florales oblongas u obovadas; bracteolas deltoideas; hojas oblongas o espatuladas, obtusas, atenuadas en la base en largo pecíolo, glabras o pubescentes, de 1-6 cm; pétalos amarillos, de 0,8-1,5 cm.",
    "América austral. Común en charcas y suelos inundados. Florece en primavera."
  ),
  jussiaea_bonariensis: species(
    "jussiaea_bonariensis",
    "Jussiaea bonariensis",
    "98. Onagraceae",
    "Hierba perenne, rizomatosa, ramosa, de 1-1,5 m de alto.",
    "Flores generalmente 4-meras; semillas multiseriadas en cada lóculo; cápsulas cilíndricas; semillas con rafe muy grande, casi igual al cuerpo de la semilla; hojas lanceoladas, agudas, enteras, cubiertas de pelos tendidos laxos, de 5-15 cm; pétalos amarillos, de 2-3,5 cm.",
    "Sur del Brasil, Uruguay y norte de la Argentina; también existe en el sur de Estados Unidos y México. Muy común en terrenos inundables del Delta y de la ribera. Florece en verano."
  ),
  jussiaea_longifolia: species(
    "jussiaea_longifolia",
    "Jussiaea longifolia",
    "98. Onagraceae",
    "Hierba perenne, de 0,5-2 m de alto, con tallos notablemente costados, rojizos y glabros.",
    "Cápsulas obcónicas u obpiramidales; rafe mucho menor que el cuerpo de la semilla; estilo de 3-9 mm con estigma capitado grueso; hojas glabras o algo escabrosas en el margen, sésiles o casi, lanceoladas, semienteras, de 10-15 cm por 0,8-2 cm; flores solitarias en las axilas superiores; pétalos amarillo pálido de 15-25 mm; cápsulas alargadas, obpiramidales, con 4 costillas.",
    "América del Sur cálida, hasta el Río de la Plata. Común en los matorrales del Delta y de la ribera."
  ),
  jussiaea_peruviana: species(
    "jussiaea_peruviana",
    "Jussiaea peruviana",
    "98. Onagraceae",
    "Sufrútice de 0,5-3 m de alto.",
    "Estilo de 0,5-2 mm; tallos y envés de las hojas hirsuto-pubescentes; hojas anchamente lanceoladas o elípticas, con nervaduras muy marcadas y anastomosadas, de 5-15 cm por 1,5-5 cm; pecíolos de 3-10 mm; pétalos amarillos de 12-27 mm; cápsulas obcónicas, con 4 ángulos.",
    "América cálida. Muy frecuente en los matorrales del Delta y de la ribera platense."
  ),
  jussiaea_elegans_intermedia: species(
    "jussiaea_elegans_intermedia",
    "Jussiaea elegans var. intermedia",
    "98. Onagraceae",
    "Sufrútice de 1-2 m de alto, con tallos y hojas glabros, salvo órganos jóvenes algo pubescentes.",
    "Estilo de 0,5-2 mm; hojas elíptico-lanceoladas, agudas, de 7-15 cm por 1,5-3 cm; pétalos amarillos de 15-25 mm; cápsulas obpiramidales, con 4 ángulos.",
    "Sur del Brasil, Paraguay y nordeste de la Argentina. Muy común en lugares inundables del Delta y de la ribera del Plata. Florece en verano."
  ),
  epilobium_brasiliense: species(
    "epilobium_brasiliense",
    "Epilobium brasiliense",
    "98. Onagraceae",
    "Hierba perenne, estolonífera, erecta, de 15-80 cm de alto, pubescente en la parte superior.",
    "Receptáculo prolongado por encima del ovario en un corto hipanto; semillas coronadas por un mechón de pelos blancos; hojas oblongo-lanceoladas, agudamente aserradas, cortamente pubescentes, de 2,5-4 cm; flores axilares; pétalos rosados, pequeños; cápsulas lineales, de 5-6 cm, sobre pedicelos de 1-1,5 cm.",
    "Sur del Brasil, Uruguay y nordeste y centro de la Argentina. Común en el Delta y en la ribera platense. Florece en primavera."
  ),
  oenothera_rosea: species(
    "oenothera_rosea",
    "Oenothera rosea",
    "98. Onagraceae",
    "Hierba perenne, de 0,5-1 m de alto.",
    "Flores rosadas o blancas; pétalos rosados o violáceos, de 5-10 mm; hojas enteras o casi pinatífidas, elípticas, agudas, largamente atenuadas en la base en estrecho pecíolo, de 2-6 cm; flores pequeñas, con hipanto de 4-8 mm; cápsulas obovoideas, con 8 costillas, de 8-10 mm.",
    "América cálida. Cultivada como ornamental y adventicia en suelos modificados. Florece en verano."
  ),
  oenothera_centaurifolia: species(
    "oenothera_centaurifolia",
    "Oenothera centaurifolia",
    "98. Onagraceae",
    "Hierba perenne, erecta, de 10-50 cm de alto, finamente glanduloso-pubescente.",
    "Flores rosadas o blancas; pétalos blancos, de 40 mm; hojas runcinadas o lirado-pinatífidas; flores axilares, solitarias, con hipanto de 9-13 mm; cápsulas elipsoideas, aladas, de 15-20 mm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Rara en la región platense."
  ),
  oenothera_affinis: species(
    "oenothera_affinis",
    "Oenothera affinis",
    "98. Onagraceae",
    "Hierba bienal, erecta, blandamente pubescente, de cerca de 1 m de alto.",
    "Flores amarillas; pétalos de 20-40 mm; hipanto de 30-100 mm; hojas caulinares lanceoladas, dentadas, de 2-10 cm por 0,5-1,5 cm; flores grandes, con hipanto de 10 cm y pétalos de 25-35 mm; cápsulas cilíndricas.",
    "América austral. Común en el Delta, junto a las vías férreas, etc. Florece en primavera y verano. Nombre vulgar: flor de la oración."
  ),
  oenothera_longiflora: species(
    "oenothera_longiflora",
    "Oenothera longiflora",
    "98. Onagraceae",
    "Hierba bienal o perenne, con hojas basales en roseta y tallos ascendentes, hirsutos, de 30-60 cm de alto.",
    "Flores amarillas; hojas caulinares oblongo-ovadas, sésiles y ensanchadas en la base, denticuladas, de 2-5 cm por 0,7-1,6 cm; flores solitarias en las axilas superiores; hipanto de 3-8 cm; pétalos de 2-4 cm; cápsulas cilíndricas, de 2-3 cm.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste y centro de la Argentina. Rara en la región."
  ),
  oenothera_indecora: species(
    "oenothera_indecora",
    "Oenothera indecora",
    "98. Onagraceae",
    "Hierba anual, erecta, pubescente.",
    "Flores amarillas; pétalos de 3-8 mm; hipanto de 7-18 mm; hojas lanceoladas, dentadas, de 2-7 cm; cápsulas cilíndricas, de 10-27 mm.",
    "Sur del Brasil, Uruguay y norte y centro de la Argentina. Común en suelos arenosos, terraplenes, etc."
  ),
  oenothera_parodiana: species(
    "oenothera_parodiana",
    "Oenothera parodiana",
    "98. Onagraceae",
    "Hierba bienal, de 15-80 cm de alto, blandamente hirsuta.",
    "Flores amarillas; hojas florales ovadas, crespas, sésiles, cordiformes; hojas inferiores en roseta, oblanceoladas, sinuado-dentadas, de 5-15 cm; hojas caulinares sésiles, oblongo-lanceoladas, de 2-8 cm; hipanto de 15-35 mm; pétalos de 8-14 mm; cápsulas de 15-35 mm.",
    "Paraguay, Uruguay y nordeste y centro de la Argentina. Rara en el Delta y en la ribera del Plata."
  ),
  oenothera_mollissima: species(
    "oenothera_mollissima",
    "Oenothera mollissima",
    "98. Onagraceae",
    "Hierba bienal o perenne, de 30-100 cm de alto, blandamente pubescente.",
    "Flores amarillas; hojas florales lanceoladas, apenas crespas; hojas caulinares lanceoladas, blandamente pubescentes, remotamente dentadas, de 2-10 cm; hipanto de 2-5 cm; pétalos de 1-2 cm; cápsulas cilíndricas, de 2-3,5 cm.",
    "América austral. Frecuente en suelos arenosos de la ribera."
  ),
  melastomaceae: family(
    "melastomaceae",
    "97. Melastomaceae",
    "Dicotiledóneas del Grupo D.",
    "Anteras dehiscentes por poros apicales."
  ),
  tibouchina_nitida: species(
    "tibouchina_nitida",
    "Tibouchina nitida",
    "97. Melastomaceae",
    "Hierba perenne, estolonífera, con tallos erectos, tetrágonos.",
    "Hojas opuestas, cortamente pecioladas, lanceoladas, menudamente aserradas, hirsutas, con 5 nervaduras principales, de 4-6 cm; flores en cimas trifloras, tetrámeras; lóbulos del cáliz lanceolados, ciliados; corola rosada; anteras falcadas, dehiscentes por poros apicales.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Se halla en los matorrales del Delta y de la ribera platense. Florece en verano."
  ),
  lentibulariaceae: family(
    "lentibulariaceae",
    "120. Lentibulariaceae",
    "Dicotiledóneas del Grupo E.",
    "Plantas acuáticas con hojas sumergidas provistas de ascidias o trampas."
  ),
  utricularia_platensis: species(
    "utricularia_platensis",
    "Utricularia platensis",
    "120. Lentibulariaceae",
    "Hierba perenne acuática, parcialmente sumergida, con tallos horizontales verdes y muy delgados.",
    "Hojas dimorfas: las superiores verticiladas, con pecíolo y nervadura central hinchados, fusiformes y flotantes; hojas normales sumergidas, bipartidas casi desde la base, con ramificaciones dicotómicas y vesículas-trampa; escapos erectos de 10-20 cm con 1-3 flores amarillas.",
    "Especie endémica de la región platense, hallada en charcas cerca de Eva Perón."
  ),
  bignoniaceae: family(
    "bignoniaceae",
    "118. Bignoniaceae",
    "Dicotiledóneas del Grupo E.",
    "Lianas con hojas compuestas."
  ),
  clytostoma_callistegioides: species(
    "clytostoma_callistegioides",
    "Clytostoma callistegioides",
    "118. Bignoniaceae",
    "Liana robusta, de hojas persistentes, bifolioladas.",
    "Zarcillos simples; folíolos elípticos, enteros, acuminados en el ápice; flores en fascículos terminales 2-floros; corola lila claro, de 8 cm; cápsula elíptica, equinada, de 10 cm.",
    "América subtropical. Frecuente en el Delta y en bosques de la ribera platense, hasta Punta Lara. Nombre vulgar: dama del monte."
  ),
  bignonia_unguis_cati: species(
    "bignonia_unguis_cati",
    "Bignonia unguis-cati",
    "118. Bignoniaceae",
    "Liana leñosa, con hojas bifolioladas.",
    "Zarcillos 3-garfiados; folíolos ovado-lanceolados, acuminados, enteros o dentados; flores grandes, axilares, solitarias o en fascículos 2-3-floros, amarillas, de 8-10 cm; cápsula lisa de 35-40 cm.",
    "América cálida. Cultivada como ornamental y frecuente en selvas marginales del Delta y de la ribera del Plata. Nombre vulgar: uña de gato."
  ),
  borraginaceae: family(
    "borraginaceae",
    "113. Borraginaceae",
    "Dicotiledóneas del Grupo E.",
    "Hierbas o arbustos; aparece por fruto drupáceo o por inflorescencias escorpioides."
  ),
  cordia_bifurcata: species(
    "cordia_bifurcata",
    "Cordia bifurcata",
    "113. Boraginaceae",
    "Arbusto ramoso, de 1,5-2 m de alto, con ramitas y hojas áspero-pubescentes.",
    "Hojas cortamente pecioladas, lanceoladas u ovado-lanceoladas, aserradas, de 5-6 cm; flores amarillentas en cimas corimbiformes densas; cáliz cortamente dentado; corola acampanada de 5 mm; estilo terminal, bífido, con ramas bifurcadas.",
    "América del Sur cálida. Frecuente en los bosques marginales del Delta y ribera platense. Primavera."
  ),
  heliotropium_curassavicum_argentinum: species(
    "heliotropium_curassavicum_argentinum",
    "Heliotropium curassavicum var. argentinum",
    "113. Boraginaceae",
    "Hierba perenne, baja, glauca, glabra, con tallos ramosos desde la base y tendidos.",
    "Hojas carnosas, lineal-espatuladas, enteras, de 2-5 cm por 3-6 mm; flores pequeñas, blancas; corola de 3-5 mm; estilo terminal indiviso; frutos secos que se separan en nuececitas.",
    "Suelos salinos del sur del Brasil, Paraguay, Uruguay y norte y centro de la Argentina. Común en suelos salados de Buenos Aires. Nombre vulgar: heliotropo."
  ),
  heliotropium_amplexicaule: species(
    "heliotropium_amplexicaule",
    "Heliotropium amplexicaule",
    "113. Boraginaceae",
    "Hierba perenne, densamente velluda, con tallos tendidos o ascendentes, ramosos.",
    "Plantas hirsutas; hojas sésiles y algo abrazadoras en la base, lanceoladas u oblongas, agudas o semiobtusas, enteras u onduladas; flores violetas dispuestas en 2-4 cimas escorpioides terminales.",
    "América austral, hasta el norte y centro de la Argentina. Común en suelos sueltos, terraplenes y caminos. Nombre vulgar: borraja de campo."
  ),
  heliotropium_nicotianaefolium: species(
    "heliotropium_nicotianaefolium",
    "Heliotropium nicotianaefolium",
    "113. Boraginaceae",
    "Sufrútice o hierba perenne, densamente glanduloso-velludo, con tallos ascendentes o erectos.",
    "Plantas hirsutas o glanduloso-pubescentes; hojas pecioladas, con pecíolo de 1-4 cm, ovado-lanceoladas; flores violetas en cincinios; estilo terminal indiviso.",
    "América austral hasta el norte y centro de la Argentina. Frecuente en los bosques del Delta y ribera del Plata. Verano."
  ),
  echium_plantagineum: species(
    "echium_plantagineum",
    "Echium plantagineum",
    "113. Boraginaceae",
    "Hierba anual o bienal, híspida, con tallos ascendentes o erectos de 30-80 cm.",
    "Corola muy cigomorfa, oblicua, infundibuliforme; hojas radicales espatuladas y caulinares oblongas, enteras; flores violetas en grandes cincinios; corola de 2-3 cm; nuececitas de 2,5 mm.",
    "Europa; adventicia en Sud América. Muy común en suelos modificados. Primavera. Nombre vulgar: flor morada."
  ),
  amsinckia_hispida: species(
    "amsinckia_hispida",
    "Amsinckia hispida",
    "113. Boraginaceae",
    "Hierba anual, de 20-70 cm de alto, ramosa, densamente hirsuta.",
    "Flores amarillas o anaranjadas; hojas inferiores oblanceoladas, enteras, de 5-18 cm por 5-15 mm; hojas superiores lanceoladas; cincinios largos, sin brácteas o con alguna bráctea en la base; cáliz hirsuto; corola amarilla, tubulosa, de 8-9 mm; nuececillas tuberculadas.",
    "América austral. Rara en rastrojos sobre suelos arenosos en la región de Junín."
  ),
  borago_officinalis: species(
    "borago_officinalis",
    "Borago officinalis",
    "113. Boraginaceae",
    "Hierba anual, erecta, híspida, de 30-60 cm de alto.",
    "Corola rotácea o muy anchamente acampanada; estambres muy exertos; hojas hirsutas, las inferiores ovadas y contraídas en largo pecíolo alado, con lámina de 10-15 cm; hojas superiores más angostas, sésiles o cortamente pecioladas, auriculadas; flores azules en cimas corimbiformes; nuececitas de 5-6 mm.",
    "Europa; cultivada y subespontánea en América. Medicinal. Nombre vulgar: borraja."
  ),
  myosotis_laxa: species(
    "myosotis_laxa",
    "Myosotis laxa",
    "113. Boraginaceae",
    "Hierba anual o perenne, con soboles y tallos ascendentes o erectos, laxamente estrigosos.",
    "Nuececitas lisas; racimos sin brácteas; hojas esparcidas, estrigosas, las inferiores oblanceoladas o espatuladas de 3-6 cm y las superiores estrechamente lineales; cincinios geminados o solitarios; cáliz con lóbulos estrechamente ovados; corola azul claro con manchitas amarillas.",
    "Europa; adventicia en América del Sur. Rara cerca de Buenos Aires."
  ),
  anchusa_officinalis: species(
    "anchusa_officinalis",
    "Anchusa officinalis",
    "113. Boraginaceae",
    "Hierba bienal, erecta, híspida, de 30-60 cm de alto.",
    "Nuececitas rugosas; racimos con brácteas; plantas con pelos tiesos; garganta de la corola con escamitas; hojas inferiores lanceoladas, atenuadas en largo pecíolo alado, y superiores oblongas u oblongo-lanceoladas; cincinios solitarios o geminados, bracteados, densos; corola púrpura.",
    "Europa; adventicia en América. Rara en la región: Núñez."
  ),
  lithospermum_arvense: species(
    "lithospermum_arvense",
    "Lithospermum arvense",
    "113. Boraginaceae",
    "Hierba anual, erecta, de 20-70 cm de alto, velludo-estrigosa.",
    "Nuececitas rugosas; racimos con brácteas; plantas con pelos tendidos; garganta de la corola sin escamitas; hojas oblongo-lanceoladas, enteras, de 2-5 cm; flores diminutas, blancas, en cincinios muy cortos; corola de 5-7 mm; nuececillas de unos 3 mm, rugosas y tuberculadas.",
    "Europa; adventicia en América. Rara en suelos modificados."
  ),
  scrophulariaceae: family(
    "scrophulariaceae",
    "117. Scrophulariaceae",
    "Dicotiledóneas del Grupo E.",
    "Fruto cápsula multiseminada o lóculos con muchos óvulos."
  ),
  verbascum_virgatum: species(
    "verbascum_virgatum",
    "Verbascum virgatum",
    "117. Scrophulariaceae",
    "Hierba bienal de 0,5-1 m de alto.",
    "Corola casi actinomorfa, rotada; estambres 5 y hojas alternas; tallos, pedicelos y cáliz con pelos glandulosos simples; hojas casi glabras; cápsulas subglobosas; hojas inferiores pecioladas, dentadas o sinuado-pinatífidas, y superiores sésiles, cordado-amplexicaules.",
    "Europa. Adventicia en la región platense."
  ),
  verbascum_thapsus: species(
    "verbascum_thapsus",
    "Verbascum thapsus",
    "117. Scrophulariaceae",
    "Hierba bienal de 1-2 m de alto.",
    "Corola casi actinomorfa, rotada; estambres 5 y hojas alternas; tallos, pedicelos y cáliz muy pubescentes, con pelos estrellados y ramificados; hojas aterciopeladas; hojas radicales en roseta, elípticas, dentadas y grandes; flores amarillentas en espigas densas.",
    "Europa; adventicia y cultivada en América. Rara en la región: Tigre."
  ),
  linaria_texana: species(
    "linaria_texana",
    "Linaria texana",
    "117. Scrophulariaceae",
    "Hierba anual o bienal, erecta, glabra, de 20-50 cm de alto.",
    "Corola personada, con espolón en la base; flores en espigas terminales; hojas lineal-oblongas, pinatinervadas, lineales, enteras y sésiles; corola azul violácea de 10 mm, con espolón delgado de 5-9 mm; semillas tuberculadas.",
    "América. En la región platense se halla en cultivos y suelos arenosos."
  ),
  cymbalaria_muralis: species(
    "cymbalaria_muralis",
    "Cymbalaria muralis",
    "117. Scrophulariaceae",
    "Hierba perenne, glabra, decumbente, a menudo radicante en los nudos.",
    "Corola personada, con espolón corto; flores axilares solitarias; plantas tendidas; hojas largamente pecioladas, palmatinervadas, reniforme-orbiculares, 3-5-lobadas; flores azules; corola de 8 mm, con espolón de 2 mm.",
    "Europa; adventicia en América. Muy común sobre muros viejos."
  ),
  castilleja_communis: species(
    "castilleja_communis",
    "Castilleja communis",
    "117. Scrophulariaceae",
    "Hierba anual, densamente pubescente, con tallos erectos de alrededor de medio metro.",
    "Corola bilabiada sin espolón, con labio superior erguido y cóncavo; cáliz tubuloso, comprimido; brácteas florales rojas; planta parásita de raíces; hojas alternas, sésiles, lineal-lanceoladas, agudas y dentadas; flores en espigas densas; corola amarillento-rosada.",
    "América cálida. Se halla en pajonales de Eryngium, cuyas raíces parasita."
  ),
  bellardia_trixago: species(
    "bellardia_trixago",
    "Bellardia trixago",
    "117. Scrophulariaceae",
    "Hierba anual con tallos erectos de 15-60 cm, tetragonales e híspidos.",
    "Corola bilabiada sin espolón; cáliz inflado-campanulado; brácteas no coloreadas; hojas opuestas, sésiles, lineales, profundamente dentadas y semiamplexicaules; flores blanco-crema en espigas densas.",
    "Hemisferio oriental; adventicia en América del Sur. A veces en la estepa clímax."
  ),
  veronica_persica: species(
    "veronica_persica",
    "Veronica persica",
    "117. Scrophulariaceae",
    "Hierba anual con tallos ascendentes, delgados y pubescentes.",
    "Estambres 2; cáliz generalmente 4-secto y tubo de la corola muy corto; cápsula comprimida y reticulada, más ancha que larga, con lóbulos agudos divergentes; hojas pecioladas, anchamente ovadas, crenado-aserradas y pubescentes; flores axilares largamente pedunculadas; corola azul.",
    "Europa y Asia; adventicia en América. Muy común en jardines, parques, etc."
  ),
  veronica_didyma: species(
    "veronica_didyma",
    "Veronica didyma",
    "117. Scrophulariaceae",
    "Hierba anual, pubescente, de 5-15 cm de alto.",
    "Flores solitarias axilares; cápsula no reticulada, hinchada, con lóbulos redondeados no divergentes y pilosa; hojas cortamente pecioladas, ovoideo-circulares y crenadas; flores axilares largamente pedunculadas; corola celeste.",
    "Eurasia; adventicia en América. Frecuente en jardines y parques."
  ),
  veronica_anagallis_aquatica: species(
    "veronica_anagallis_aquatica",
    "Veronica anagallis-aquatica",
    "117. Scrophulariaceae",
    "Hierba semiacuática, erecta, glabra o casi glabra.",
    "Flores en racimos axilares; hojas sésiles, casi amplexicaules, lanceoladas u ovado-lanceoladas; corola celeste; cápsulas elípticas.",
    "Hemisferio Norte; adventicia en América del Sur. Rara en la región: San Isidro, en zanjas."
  ),
  veronica_serpyllifolia: species(
    "veronica_serpyllifolia",
    "Veronica serpyllifolia",
    "117. Scrophulariaceae",
    "Hierba perenne subglabra, con tallos ascendentes, radicantes, de unos 10 cm.",
    "Flores en racimos terminales; hojas opuestas, pecioladas o casi sésiles, ovado-elípticas, crenadas o enteras; corolas blanco-azuladas; cápsulas obcordadas, más anchas que largas, pubescentes.",
    "Eurasia; adventicia en América. Rara en la región."
  ),
  veronica_peregrina_xalapensis: species(
    "veronica_peregrina_xalapensis",
    "Veronica peregrina subsp. xalapensis",
    "117. Scrophulariaceae",
    "Hierba anual con tallos erectos, cubiertos de pelos glandulares, de 10-30 cm de alto.",
    "Flores en racimos terminales; hojas enteras o denticuladas, oblongas, atenuadas en la base; flores blancas pequeñas; cápsula orbicular, no emarginada.",
    "América. Muy común en la región."
  ),
  veronica_arvensis: species(
    "veronica_arvensis",
    "Veronica arvensis",
    "117. Scrophulariaceae",
    "Hierba anual, pubescente, de 5-25 cm de alto.",
    "Flores en racimos terminales; hojas crenado-dentadas, pubescentes, ovadas, hemicordadas en la base; flores casi sésiles, azules; cápsula emarginada y ciliada.",
    "Eurasia; adventicia en América. Muy común en suelos modificados."
  ),
  micranthemum_umbrosum: species(
    "micranthemum_umbrosum",
    "Micranthemum umbrosum",
    "117. Scrophulariaceae",
    "Hierba pigmea, repente y glabra, con tallos filiformes.",
    "Estambres 2; cáliz generalmente 4-partido y tubo corolino corto; cápsula globosa; labio superior de la corola menor que el inferior o nulo; hojas opuestas, sésiles, ovado-oblongas, obtusas y enteras; flores axilares, pequeñas, con corola blanca.",
    "América cálida. Muy frecuente en céspedes del Delta y de la ribera del Plata."
  ),
  gratiola_peruviana: species(
    "gratiola_peruviana",
    "Gratiola peruviana",
    "117. Scrophulariaceae",
    "Hierba perenne, rastrera o ascendente, de 5-25 cm de alto.",
    "Estambres 2; cáliz 5-secto y tubo de la corola alargado; flores casi sésiles, con pedicelos muy cortos y bibracteolados; hojas glabras o glanduloso-pubescentes, lanceoladas, aserradas y 3-5-nervadas; flores blancas axilares; corola con labio superior bífido.",
    "América cálida. Común en suelos pantanosos."
  ),
  lindernia_dubia: species(
    "lindernia_dubia",
    "Lindernia dubia",
    "117. Scrophulariaceae",
    "Hierba baja, decumbente o ascendente, de 5-25 cm de alto.",
    "Estambres 2; cáliz 5-partido y tubo de la corola alargado; flores con pedúnculos no bracteolados, más largos que las hojas; hojas inferiores obovadas o elípticas y superiores menores, ovadas, abrazadoras en la base; corola liliácea; cápsula ovoidea.",
    "Norteamérica cálida. Accidental en la región platense: Puerto de la Capital Federal."
  ),
  limosella_lineata: species(
    "limosella_lineata",
    "Limosella lineata",
    "117. Scrophulariaceae",
    "Hierba anual, acaule, de 0,5-7 cm de alto.",
    "Estambres 4; plantas diminutas, acaules, con hojas radicales subuladas, arrosetadas; pedúnculos más cortos que las hojas; flores blancas o violáceas, pequeñas.",
    "Rara en céspedes inundables de la ribera."
  ),
  gerardia_communis: species(
    "gerardia_communis",
    "Gerardia communis",
    "117. Scrophulariaceae",
    "Hierba anual, erecta, ramosa y glabra, de 20-45 cm de alto.",
    "Estambres 4; cáliz 5-dentado o 5-lobado y corola infundibuliforme; hojas sésiles, lineal-lanceoladas y crenuladas; flores solitarias en axilas de las hojas superiores, casi sésiles; corola liliácea de 12-14 mm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Muy común en campos fértiles y húmedos."
  ),
  gerardia_genistifolia: species(
    "gerardia_genistifolia",
    "Gerardia genistifolia",
    "117. Scrophulariaceae",
    "Hierba perenne, erecta, ramosa y glabra, de cerca de 1 m de alto.",
    "Estambres 4; cáliz 5-dentado o 5-lobado; hojas lanceoladas; flores axilares en la parte superior del tallo; corola rosado-liliácea, pubescente, de 3-4 cm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Hallada en el Delta."
  ),
  scoparia_aemilii: species(
    "scoparia_aemilii",
    "Scoparia aemilii",
    "117. Scrophulariaceae",
    "Hierba anual, rastrera.",
    "Estambres 4; cáliz profundamente 5-partido y corola rotada; hojas algo carnosas, espatuladas y obtusas; flores axilares; segmentos del cáliz obtusos; corola blanca.",
    "Paraguay y nordeste de la Argentina. Hallada en el puerto de Buenos Aires y en Palermo."
  ),
  scoparia_montevidensis: species(
    "scoparia_montevidensis",
    "Scoparia montevidensis",
    "117. Scrophulariaceae",
    "Hierba perenne, erecta o ascendente, ramosa, glabra o glanduloso-pubescente, de 20-40 cm de alto.",
    "Estambres 4; cáliz profundamente 5-partido y corola rotada; hojas lineal-lanceoladas, enteras, dentadas o pinatisectas; flores amarillas, largamente pedunculadas; segmentos del cáliz ovado-lanceolados.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. En suelos pantanosos y campos húmedos."
  ),
  bacopa_monnieri: species(
    "bacopa_monnieri",
    "Bacopa monnieri",
    "117. Scrophulariaceae",
    "Hierba pigmea, perenne y glabra, con tallos rastreros radicantes.",
    "Estambres 4; cáliz con segmentos muy desiguales; plantas glabras; hojas espatuladas, sésiles, enteras o subdenticuladas; pedúnculos axilares bibracteolados en el ápice; flores blancas o azuladas; corola apenas bilabiada.",
    "Cosmopolita. Frecuente en lugares muy húmedos: bañados, praderas ribereñas, etc."
  ),
  bacopa_tweedii: species(
    "bacopa_tweedii",
    "Bacopa tweedii",
    "117. Scrophulariaceae",
    "Hierba acuática anual, rastrera o semiflotante, con tallo pubescente.",
    "Estambres 4; cáliz con segmentos muy desiguales; hojas obovado-orbiculares y enteras; flores solitarias, blancas; corola acampanada, apenas bilabiada.",
    "Acuática, común en el centro y norte de la Argentina. Rara en la región: Pergamino."
  ),
  mecardonia_montevidensis: species(
    "mecardonia_montevidensis",
    "Mecardonia montevidensis",
    "117. Scrophulariaceae",
    "Hierba rastrera, con tallos flexuosos.",
    "Estambres 4; cáliz con segmentos casi iguales; plantas decumbentes con flores amarillas largamente pecioladas y pecíolo con bractéolas en su base; hojas cortamente pecioladas, ovado-lanceoladas, casi enteras; segmentos del cáliz lanceolados, acuminados.",
    "Región platense: común en prados húmedos y campos bajos."
  ),
  stemodia_humilis: species(
    "stemodia_humilis",
    "Stemodia humilis",
    "117. Scrophulariaceae",
    "Hierba pequeña, decumbente, con tallos ramosos y pubescentes.",
    "Estambres 4; cáliz con segmentos casi iguales; hojas casi glabras, ovado-lanceoladas, atenuadas en pecíolo y dentadas; flores solitarias axilares; pedúnculo de 2 mm; corola blanca de 4-5 mm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Citada para Isla Martín García."
  ),
  stemodia_tetragona: species(
    "stemodia_tetragona",
    "Stemodia tetragona",
    "117. Scrophulariaceae",
    "Hierba glabra, perenne, de 20-100 cm de alto, con tallo cuadrangular.",
    "Planta robusta y erecta; hojas sésiles, lanceoladas, agudas, profundamente aserradas, auriculadas en la base; flores en espigas; cáliz con una bráctea subulada a cada lado; corola azul-violácea.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Frecuente en el Delta y en la ribera del Plata."
  ),
  stemodia_hyptioides: species(
    "stemodia_hyptioides",
    "Stemodia hyptioides",
    "117. Scrophulariaceae",
    "Hierba pubescente, robusta y erecta.",
    "Hojas basales opuestas y superiores a veces verticiladas, ovado-oblongas u ovado-lanceoladas, agudas, atenuadas en la base y luego ensanchadas, dentadas; flores en espigas; cáliz 5-partido con segmentos pubescentes; corola azul pálido.",
    "Sur del Brasil, Uruguay y norte de la Argentina, hasta el Río de la Plata."
  ),
  martyniaceae: family(
    "martyniaceae",
    "119. Martyniaceae",
    "Dicotiledóneas del Grupo E.",
    "Ovario unilocular, fruto cápsula drupácea y placentación parietal."
  ),
  ibicella_lutea: species(
    "ibicella_lutea",
    "Ibicella lutea",
    "119. Martyniaceae",
    "Hierba glanduloso-pubescente, de tallos ascendentes, muy glandulosos, de 30-40 cm de alto.",
    "Hojas opuestas, largamente pecioladas, orbiculares o acorazonadas y dentadas; flores amarillas en racimos erectos, con corola de 3-3,5 cm, glanduloso-pubescente; cápsulas grandes con endocarpo provisto de dos largos cuernos curvos.",
    "Sur del Brasil, Paraguay, Uruguay y norte y centro de la Argentina. Común en campos secos; florece en verano. Nombre vulgar: cuerno del diablo."
  ),
  acanthaceae: family(
    "acanthaceae",
    "121. Acanthaceae",
    "Dicotiledóneas del Grupo E.",
    "Ovario bilocular con placentación axilar; lóculos con dos óvulos, raramente más."
  ),
  stenandrium_breviflorum: species(
    "stenandrium_breviflorum",
    "Stenandrium breviflorum",
    "121. Acanthaceae",
    "Hierba perenne pigmea, acaule, con hojas en roseta.",
    "Tubo de la corola de unos 5 mm; hojas pecioladas, ovadas o elípticas, obtusas, con seis pares de nervaduras secundarias, laxamente velludas en el haz y densamente en el envés; espiga con hasta 40 flores rosadas; cápsula ovoidea con cuatro semillas.",
    "Centro de la Argentina. Rara cerca de Buenos Aires."
  ),
  stenandrium_parodii: species(
    "stenandrium_parodii",
    "Stenandrium parodii",
    "121. Acanthaceae",
    "Hierba perenne pigmea, acaule, con raíces engrosadas y carnosas.",
    "Hojas en roseta, ovadas, obtusas, pubescentes, de unos 2 cm; flores pocas en espigas cortas casi sésiles; brácteas lanceoladas, trinervadas; corola rosada; cápsula ovoidea; polen espinuloso.",
    "Uruguay y provincia de Buenos Aires; en campos secos próximos a Eva Perón. Florece en verano."
  ),
  stenandrium_trinerve: species(
    "stenandrium_trinerve",
    "Stenandrium trinerve",
    "121. Acanthaceae",
    "Hierba perenne, acaule y pigmea, con raíces no engrosadas.",
    "Hojas en roseta, pecioladas, ovadas, enteras, obtusas, glabrescentes en el haz y algo velludas en el envés, de 2-3 cm; espigas pedunculadas, paucifloras, con brácteas lanceoladas y ciliadas; corola violácea; cápsula ovoidea.",
    "Sur del Brasil, Uruguay y centro de la Argentina. Común en la estepa clímax; florece en verano."
  ),
  hygrophila_pubescens: species(
    "hygrophila_pubescens",
    "Hygrophila pubescens",
    "121. Acanthaceae",
    "Hierba perenne, estolonífera, erecta o apoyante y pubescente.",
    "Hojas opuestas, sésiles o cortamente pecioladas, oblongo-lanceoladas, enteras, de 6-15 cm; flores axilares azules o blancas; corola de 10-12 mm; cápsulas fusiformes de 10-15 mm; semillas 16-20, cubiertas de pelos glutinosos.",
    "Nordeste de la Argentina. Común en los bosques del Delta y de la ribera platense; florece al finalizar el verano."
  ),
  hygrophila_atricheta: species(
    "hygrophila_atricheta",
    "Hygrophila atricheta",
    "121. Acanthaceae",
    "Hierba perenne semejante a Hygrophila pubescens.",
    "Hojas opuestas, enteras; flores axilares azules o blancas; cápsulas fusiformes; se distingue de H. pubescens por las semillas glabras.",
    "Endémica del Delta del Paraná."
  ),
  dicliptera_lutea: species(
    "dicliptera_lutea",
    "Dicliptera lutea",
    "121. Acanthaceae",
    "Hierba perenne, erecta, glabra, de un metro o más de alto.",
    "Flores amarillas; hojas pecioladas, elíptico-oblongas, ligeramente pubescentes en el margen y la nervadura, de unos 7 x 2 cm; glomérulos axilares paucifloros; corola de 2 cm; cápsulas con cuatro semillas.",
    "Endémica del Delta del Paraná."
  ),
  dicliptera_deltica: species(
    "dicliptera_deltica",
    "Dicliptera deltica",
    "121. Acanthaceae",
    "Hierba perenne, erecta o apoyante, glabra, de cerca de 1 m de alto.",
    "Flores rojas; corola de 30-35 mm; nervadura central del labio inferior con 7-8 nervaduras secundarias; hojas ovado-lanceoladas, pecioladas, glabras, de hasta 12 x 3 cm; glomérulos sésiles o cortamente pedunculados; cápsulas ovoideas.",
    "Endémica de la región: Delta y ribera platense."
  ),
  dicliptera_tweediana: species(
    "dicliptera_tweediana",
    "Dicliptera tweediana",
    "121. Acanthaceae",
    "Hierba perenne, glabra, de 30-60 cm de alto.",
    "Flores rojas; corola de 20-25 mm; nervadura central del labio inferior con 10-11 nervaduras secundarias; hojas pecioladas, ovadas u oblongas, semiobtusas; flores en cimas capituliformes pedunculadas, axilares y terminales; cápsulas obovoideas.",
    "Norte y centro de la Argentina y Uruguay. Se halla a veces a lo largo de vías férreas y en bosques de la ribera."
  ),
  poikilacanthus_tweedianus: species(
    "poikilacanthus_tweedianus",
    "Poikilacanthus tweedianus",
    "121. Acanthaceae",
    "Hierba o sufrútice de altura variable, con tallos apoyantes algo pubescentes.",
    "Hojas ovado-lanceoladas, pecioladas, agudas, enteras, laxamente pubescentes, de 4-10 x 2-4 cm; espigas axilares paucifloras; brácteas espatuladas y ciliadas; corola blanca de 25 mm.",
    "Norte y centro de la Argentina, hasta el Delta y la ribera del Plata. Florece en verano."
  ),
  justicia_campestris: species(
    "justicia_campestris",
    "Justicia campestris",
    "121. Acanthaceae",
    "Arbusto glabro, de 1-2 m de alto.",
    "Hojas lanceoladas, cortamente pecioladas, enteras, de 2-5 cm, con abundantes cistolitos; flores axilares, solitarias, subsésiles; brácteas lanceoladas; cáliz de 7 mm; corola azul bilabiada, de 2 cm; cápsulas estipitadas de 14-16 mm.",
    "Centro de la Argentina. Cerca de Buenos Aires se halla en barrancas del Paraná; florece en primavera."
  ),
  justicia_obtusifolia: species(
    "justicia_obtusifolia",
    "Justicia obtusifolia",
    "121. Acanthaceae",
    "Hierba perenne con tallos erectos o ascendentes, de 30-40 cm de alto.",
    "Tallos y hojas sin cistolitos; hojas lanceoladas o elípticas, obtusas, sésiles, enteras, glabras, de hasta 10 cm; flores en cimas espiciformes paucifloras; cáliz casi tan largo como la corola, de 8 mm; corola violácea de 9 mm.",
    "Uruguay y nordeste de la Argentina. Frecuente en el Delta."
  ),
  justicia_laevilinguis: species(
    "justicia_laevilinguis",
    "Justicia laevilinguis",
    "121. Acanthaceae",
    "Hierba rizomatosa, erecta, glabra, de cerca de 1 m de alto.",
    "Tallos y hojas con cistolitos; hojas lanceoladas, obtusas, sésiles, enteras, de hasta 9 cm; flores en cimas espiciformes; cáliz de 8-9 mm; corola violácea de unos 15 mm; tecas de las anteras ligeramente divergentes.",
    "Uruguay y nordeste de la Argentina. Hallada en la ribera del Plata, como Punta Lara y Palo Blanco."
  ),
  justicia_ascendens: species(
    "justicia_ascendens",
    "Justicia ascendens",
    "121. Acanthaceae",
    "Hierba perenne, glabra, con tallos ascendentes de 30-40 cm de alto.",
    "Tallos y hojas con cistolitos; hojas lanceoladas, sésiles o casi, agudas, enteras, de hasta 8 cm; flores en cimas espiciformes; cáliz de 9-10 mm; corola violácea de unos 25 mm; tecas de las anteras en ángulo recto.",
    "Endémica de la región platense. Común en el Delta y en la ribera del Plata."
  ),
  labiatae: family(
    "labiatae",
    "115. Labiatae",
    "Dicotiledóneas del Grupo E.",
    "Ovario 4-lobulado y estilo ginobásico; corola notablemente bilabiada."
  ),
  salvia_procurrens: species(
    "salvia_procurrens",
    "Salvia procurrens",
    "115. Labiatae",
    "Hierba perenne con tallos rastreros y radicantes, glabros o glanduloso-velludos.",
    "Estambres fértiles 2; corola notablemente bilabiada, con labio superior en forma de capuchón; anteras con una sola teca fértil; hojas largamente pecioladas, ovado-circulares, cordadas y crenadas; verticilastros distantes en seudo-espigas muy laxas; cáliz glanduloso y corolas azules de unos 12 mm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en bosques del Delta y de la ribera del Plata."
  ),
  salvia_verbenaca: species(
    "salvia_verbenaca",
    "Salvia verbenaca",
    "115. Labiatae",
    "Hierba perenne, erecta, pubescente, de 30-60 cm de alto.",
    "Estambres fértiles 2; tallos erectos; hojas superiores sésiles, anchamente ovadas y crenado-lobuladas; hojas inferiores pecioladas, ovadas y lobuladas; verticilastros en espiga laxa; cáliz velludo y corola azul de unos 8 mm.",
    "Europa. Cultivada y con frecuencia subespontánea."
  ),
  salvia_uliginosa: species(
    "salvia_uliginosa",
    "Salvia uliginosa",
    "115. Labiatae",
    "Hierba perenne de cerca de 2 m de alto, con rizoma horizontal y tallos ramosos tenuemente pubescentes.",
    "Hojas superiores pecioladas; hojas lanceoladas, agudas, atenuadas y cortamente pecioladas en la base, aserradas, glabras o algo pubescentes; flores azules en espigas densas de verticilastros; corola azul de 10 mm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en pajonales del Delta y de la ribera del Plata."
  ),
  salvia_pallida: species(
    "salvia_pallida",
    "Salvia pallida",
    "115. Labiatae",
    "Hierba perenne de cerca de 1 m de alto, con tallos puberulentos.",
    "Hojas superiores pecioladas; hojas deltoideo-ovadas, cortamente pecioladas, redondeadas en la base, profundamente aserradas, glabras o pubérulas; flores azuladas en una espiga densa de verticilastros; corola de 10-12 mm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Rara en la región: Delta y Punta Lara."
  ),
  hedeoma_medium: species(
    "hedeoma_medium",
    "Hedeoma medium",
    "115. Labiatae",
    "Sufrútice con tallos ascendentes, numerosos y pubescentes, de 10-15 cm de alto.",
    "Estambres fértiles 2; corola poco bilabiada, con labio superior casi plano; anteras con dos tecas fértiles; hojas elípticas, enteras e hispídulas; flores pequeñas pediceladas en las axilas de las hojas superiores; cáliz giboso, bilabiado, de 3 mm; corola liliácea.",
    "Uruguay y provincia de Buenos Aires. En la estepa clímax. Nombres vulgares: menta del campo, tomillo."
  ),
  teucrium_cubense_laevigatum: species(
    "teucrium_cubense_laevigatum",
    "Teucrium cubense subsp. laevigatum",
    "115. Labiatae",
    "Hierba perenne con tallos ascendentes, glabros, de 30-50 cm de alto.",
    "Ovario apenas hendido, con estilo imperfectamente ginobásico; corola casi unilabiada; hojas inferiores bipinatisectas con lacinias obtusas y hojas superiores divididas en tres lacinias lineales; flores solitarias axilares; cáliz pentasecto y corola blanca.",
    "Sur del Brasil, Uruguay y norte de la Argentina. En la estepa clímax y en praderas del Delta y de la ribera del Plata."
  ),
  teucrium_vesicarium: species(
    "teucrium_vesicarium",
    "Teucrium vesicarium",
    "115. Labiatae",
    "Hierba erecta, rizomatosa, de alrededor de 1 m de alto, blandamente pubescente.",
    "Ovario apenas hendido, con estilo imperfectamente ginobásico; hojas pecioladas, ovadas, aserradas, de 4-12 cm; flores en largas espigas cilíndricas; corola rosada y cáliz globoso, acrescente.",
    "América cálida. Común en pajonales y praderas del Delta y de la ribera del Plata."
  ),
  mentha_pulegium: species(
    "mentha_pulegium",
    "Mentha pulegium",
    "115. Labiatae",
    "Hierba perenne con tallos ascendentes, pubescentes, de 20-30 cm de alto.",
    "Corola 4-lobada, casi actinomorfa; flores en verticilastros globosos en las axilas de las hojas superiores, formando falsa espiga muy laxa; corola rosada de 4 mm; estambres exertos; hojas ovadas, aserradas, pequeñas.",
    "Europa; adventicia en América. Común en campos húmedos."
  ),
  mentha_rotundifolia: species(
    "mentha_rotundifolia",
    "Mentha rotundifolia",
    "115. Labiatae",
    "Hierba perenne, estolonífera, canescente-tomentosa, con tallos ascendentes o erectos.",
    "Corola casi actinomorfa; flores en verticilastros agrupados en espigas densas; hojas sésiles, ovado-elípticas, obtusas, algo acorazonadas en la base, crenado-aserradas y canescente-tomentosas; corolas pequeñas, rosadas o blancas.",
    "Europa; adventicia en América. En suelos modificados húmedos. Nombre vulgar: menta."
  ),
  mentha_aquatica: species(
    "mentha_aquatica",
    "Mentha aquatica",
    "115. Labiatae",
    "Hierba perenne, pubescente o casi glabra, con tallos erectos de 40-70 cm.",
    "Hojas pecioladas, glabras o casi glabras, ovadas, agudas u obtusas, redondeadas en la base y aserradas; verticilastros en espigas cilíndricas densas y cortas; cáliz hirsuto y corola pubescente.",
    "Europa; adventicia en América. En lugares muy húmedos."
  ),
  mentha_piperita: species(
    "mentha_piperita",
    "Mentha piperita",
    "115. Labiatae",
    "Hierba perenne, glabra, con tallos erectos de 30-90 cm de alto.",
    "Hojas pecioladas, glabras o casi glabras, elípticas, agudas, redondeadas o atenuadas en la base y agudamente aserradas; verticilastros en espigas atenuadas en la parte superior; cáliz glabro y corola rosada, glabra.",
    "Europa; adventicia en América. Común en suelos muy húmedos y zanjas. Nombre vulgar: menta."
  ),
  scutellaria_racemosa: species(
    "scutellaria_racemosa",
    "Scutellaria racemosa",
    "115. Labiatae",
    "Hierba perenne, glabra y ramosa, de 15-30 cm de alto.",
    "Cáliz bilabiado con labios enteros; hojas hastadas, con un lóbulo a cada lado en la base; flores solitarias en las axilas de las hojas superiores; corola rosada de 6-8 mm.",
    "América del Sur cálida y templada. Común en campos fértiles."
  ),
  scutellaria_platensis: species(
    "scutellaria_platensis",
    "Scutellaria platensis",
    "115. Labiatae",
    "Hierba perenne, glabérrima, de 15-30 cm de alto.",
    "Cáliz bilabiado con labios enteros; hojas ovado-deltoideas, pecioladas, semicordadas en la base y dentado-crenadas; flores rosadas solitarias en las axilas de las hojas.",
    "Endémica de la región platense: Delta, Punta Lara, Isla Santiago, etc."
  ),
  prunella_vulgaris: species(
    "prunella_vulgaris",
    "Prunella vulgaris",
    "115. Labiatae",
    "Hierba perenne, ascendente, de 15-30 cm de alto.",
    "Cáliz bilabiado con labio superior 3-dentado e inferior bífido; corola con labio superior en forma de capuchón; hojas elíptico-lanceoladas, glabras o ligeramente híspidas; flores liliáceas en espigas cilíndricas gruesas; corola de 9-15 mm.",
    "Europa; adventicia en América. Común en el Delta y en la ribera platense, también en jardines y suelos modificados."
  ),
  melissa_officinalis: species(
    "melissa_officinalis",
    "Melissa officinalis",
    "115. Labiatae",
    "Hierba perenne, pubescente, con tallos erectos o ascendentes de 30-70 cm de alto.",
    "Cáliz bilabiado con labio superior 3-dentado e inferior bífido; corola con labio superior casi plano; hojas pecioladas, ovadas, obtusas, redondeadas o acorazonadas en la base, crenado-dentadas; flores en verticilastros axilares; corola blanca de 10-15 mm.",
    "Europa; adventicia en América. Cultivada como planta medicinal. Nombre vulgar: toronjil."
  ),
  marrubium_vulgare: species(
    "marrubium_vulgare",
    "Marrubium vulgare",
    "115. Labiatae",
    "Hierba perenne ramosa, albo-tomentosa, de 60-90 cm de alto.",
    "Cáliz tubuloso con 10 dientes iguales, subulados; flores blancas; hojas pecioladas, ovado-circulares, obtusas y crenadas; corolas blancas de 7-9 mm.",
    "Europa; adventicia en casi todo el globo. Medicinal y común en rastrojos y suelos modificados. Nombre vulgar: malvarrubia."
  ),
  leonotis_nepetaefolia: species(
    "leonotis_nepetaefolia",
    "Leonotis nepetaefolia",
    "115. Labiatae",
    "Hierba anual, erecta, de 1-2 m de alto, levemente pubescente.",
    "Cáliz tubuloso con dientes desiguales; flores sésiles, anaranjadas, en grandes seudoverticilos globosos; hojas pecioladas, ovadas u ovado-redondeadas, obtusas, inciso-crenadas, tenuemente tomentulosas o casi glabras; cáliz pubescente de 12 mm y corola de 20-25 mm.",
    "Asia y África tropicales; adventicia en América. En suelos modificados."
  ),
  hyptis_floribunda: species(
    "hyptis_floribunda",
    "Hyptis floribunda",
    "115. Labiatae",
    "Arbusto de 1-2 m de alto, cortamente pubescente.",
    "Cáliz con 5 dientes triangulares y anchos; corola con labio superior casi plano y labio inferior con segmento medio en forma de saco; flores largamente pediceladas en amplias panojas difusas; hojas estrechamente ovadas, redondeadas en la base y aserradas; corola liliácea.",
    "Paraguay, Uruguay y nordeste de la Argentina. En bosques del Delta y de la ribera platense."
  ),
  hyptis_fasciculata_fastigiata: species(
    "hyptis_fasciculata_fastigiata",
    "Hyptis fasciculata var. fastigiata",
    "115. Labiatae",
    "Sufrútice de 1-2 m de alto, con tallos ásperos.",
    "Cáliz con 5 dientes triangulares y anchos; flores cortamente pediceladas en verticilastros dispuestos en espigas densas reunidas en panojas; hojas ovado-lanceoladas, agudas, redondeadas en la base y aserradas; corola liliácea.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en matorrales del Delta y de la ribera."
  ),
  hyptis_lappacea: species(
    "hyptis_lappacea",
    "Hyptis lappacea",
    "115. Labiatae",
    "Hierba perenne de 1 m de alto, con tallos pubescentes o glabrescentes.",
    "Cáliz con dientes subulados; flores en capítulos globosos, pedunculados, axilares, de 14-16 mm de diámetro; hojas ovado-lanceoladas, agudas, cuneiformes en la base, aserradas y algo pubescentes; corolas de 5-6 mm.",
    "Selvas del sur del Brasil, Paraguay, Uruguay y norte de la Argentina. Frecuente en bosques del Delta y de la ribera."
  ),
  hyptis_mutabilis: species(
    "hyptis_mutabilis",
    "Hyptis mutabilis",
    "115. Labiatae",
    "Hierba perenne, erecta, de 1,5 m de alto, con tallos ásperos.",
    "Cáliz con dientes subulados; flores en verticilastros agrupados en espigas interrumpidas; hojas anchamente ovadas, redondeadas en la base, crenado-aserradas, ásperas en el haz y densamente pubescentes en el envés; corola liliácea de 3-4 mm.",
    "América cálida. Frecuente en bosques y matorrales del Delta y de la ribera platense."
  ),
  leonurus_cardiaca: species(
    "leonurus_cardiaca",
    "Leonurus cardiaca",
    "115. Labiatae",
    "Hierba perenne, pubescente y ramosa, de unos 50 cm de alto.",
    "Cáliz con 5 dientes; corola con labio superior en forma de capuchón; hojas pinatisectas, 3-5-palmatilobadas, con segmentos agudos y dentados; flores rosadas; dientes del cáliz subulados, abiertos.",
    "Asia; adventicia en Europa y América. Rara en la región: San Nicolás."
  ),
  leonurus_sibiricus: species(
    "leonurus_sibiricus",
    "Leonurus sibiricus",
    "115. Labiatae",
    "Hierba bienal, puberulenta o glabra, con tallos ramosos de alrededor de 1 m.",
    "Cáliz con 5 dientes; corola con labio superior en forma de capuchón; hojas 3-5-palmatisectas, con segmentos divididos irregularmente; flores rosadas.",
    "Asia; adventicia en América. Rara en la región y común en el norte de la Argentina."
  ),
  stachys_micheliana: species(
    "stachys_micheliana",
    "Stachys micheliana",
    "115. Labiatae",
    "Hierba anual, erecta o ascendente, híspida, de 30-60 cm de alto.",
    "Cáliz con 5 dientes mucronados; nuececitas redondeadas en el ápice; dientes del cáliz maduro de 1,5 mm; corola rosada con tubo de 2,5-3 mm; hojas cortamente pecioladas, ovadas, obtusas, acorazonadas en la base, aserradas e híspidas.",
    "Paraguay, Uruguay y norte de la Argentina. Común en bosques de la ribera y en talares."
  ),
  stachys_arvensis: species(
    "stachys_arvensis",
    "Stachys arvensis",
    "115. Labiatae",
    "Hierba anual, híspida, con tallos ascendentes de 15-30 cm de alto.",
    "Cáliz con 5 dientes mucronados; nuececitas redondeadas en el ápice; dientes del cáliz maduro de 2-3 mm; corola rosada con tubo de 3,5-5 mm; hojas ovadas, redondeadas en el ápice y acorazonadas en la base, aserradas y cortamente pecioladas.",
    "Europa; adventicia en América. Común en suelos húmedos."
  ),
  lamium_amplexicaule: species(
    "lamium_amplexicaule",
    "Lamium amplexicaule",
    "115. Labiatae",
    "Hierba anual, con tallos ascendentes, glabros, de 10-30 cm de alto.",
    "Cáliz con dientes agudos, no mucronados; nuececitas truncadas en el ápice; hojas inferiores largamente pecioladas, ovado-circulares y lobuladas; hojas superiores sésiles, lobuladas o partidas; cáliz híspido de 5-6 mm y corolas purpúreas de 15 mm.",
    "Europa; adventicia en América. Común en suelos modificados, especialmente jardines y parques."
  ),
  verbenaceae: family(
    "verbenaceae",
    "114. Verbenaceae",
    "Dicotiledóneas del Grupo E.",
    "Ovario no 4-lobulado, estilo terminal y flores apenas bilabiadas."
  ),
  citharexylum_montevidense: species(
    "citharexylum_montevidense",
    "Citharexylum montevidense",
    "114. Verbenaceae",
    "Árbol de 12-15 m de alto, con corteza gris blanquecina agrietada longitudinalmente.",
    "Fruto drupáceo con dos pirenas biloculares; flores casi actinomorfas, amarillentas, en racimos terminales; ramas jóvenes glabras, verde claras, apenas cuadrangulares; hojas oblanceoladas u obovadas, enteras o aserradas en la parte superior, con braquiblastos espiniformes axilares.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina hasta el Río de la Plata. Cultivado como ornamental y común en selvas marginales del Delta y de la ribera platense. Nombre vulgar: espina de bañado, turumá."
  ),
  lantana_glutinosa: species(
    "lantana_glutinosa",
    "Lantana glutinosa",
    "114. Verbenaceae",
    "Arbusto elevado de 2-3 m de alto, con ramas cuadrangulares, pubescentes y con aguijones.",
    "Fruto drupáceo con una sola pirena; hojas pecioladas, ovadas, redondeadas o acorazonadas en la base, aserradas y blandamente pubescentes; flores en capítulos axilares largamente pedunculados, con corola amarilla, anaranjada o roja.",
    "América cálida. Común en bosques de talas, en el Delta y en la ribera platense. Nombre vulgar: camará."
  ),
  lantana_balansae: species(
    "lantana_balansae",
    "Lantana balansae",
    "114. Verbenaceae",
    "Arbustito achaparrado, de alrededor de medio metro de altura.",
    "Fruto drupáceo con una sola pirena; hojas ovadas, pequeñas, crenado-aserradas; flores rosadas o violáceas en capítulos axilares; frutos oscuros.",
    "América del Sur cálida. Cerca de Buenos Aires se halla en las barrancas del Paraná y en la Isla Martín García."
  ),
  aloysia_lycioides: species(
    "aloysia_lycioides",
    "Aloysia lycioides",
    "114. Verbenaceae",
    "Arbusto aromático de 1-3 m de alto.",
    "Fruto seco formado por 2 nuececitas; flores en largas espigas axilares muy flojas; hojas oblanceolado-espatuladas, obtusas, enteras, casi glabras en el haz e incano-pubescentes en el envés; corolas blancas, de cerca de 5 mm.",
    "Sur de los Estados Unidos y México, Bolivia, Paraguay y norte y centro de la Argentina. En barrancas del Paraná: San Nicolás, San Pedro, Campana, etc. Nombres vulgares: cedrón del monte, azahar del campo."
  ),
  lippia_alba: species(
    "lippia_alba",
    "Lippia alba",
    "114. Verbenaceae",
    "Arbusto aromático de 1-1,5 m de alto, pubescente.",
    "Fruto seco formado por 2 nuececitas; flores en inflorescencias capituliformes; hojas opuestas, ovadas, cortamente pecioladas y aserradas; capítulos axilares pedunculados; corola blanca o liliácea, de 7-8 mm.",
    "América cálida. Frecuente en los bosques del Delta."
  ),
  phyla_nodiflora_canescens: species(
    "phyla_nodiflora_canescens",
    "Phyla nodiflora var. canescens",
    "114. Verbenaceae",
    "Hierba perenne rastrera, con tallos radicantes, laxamente seríceo-pubescentes.",
    "Fruto seco formado por 2 nuececillas; hierba rastrera con flores en capítulos axilares largamente pedunculados; hojas oblanceoladas u obovadas, obtusas, atenuadas en corto pecíolo, aserradas en la parte superior y laxamente seríceas; corola blanca, de 2,5-3,5 mm.",
    "América del Sur cálida. Común en campos bajos, jardines, etc."
  ),
  verbena_gracilescens: species(
    "verbena_gracilescens",
    "Verbena gracilescens",
    "114. Verbenaceae",
    "Hemicriptófita de 40-80 cm de alto, con tallos ascendentes o erectos, tetrágonos.",
    "Fruto seco formado por 4 nuececillas; inflorescencia en panoja de numerosas espigas; hojas inferiores profundamente partidas o lobadas, de contorno obovado, agudas y atenuadas en corto pecíolo; espigas filiformes muy largas; cáliz de 1,5 mm y corola azulada de 2-2,5 mm.",
    "América del Sur. Común en campos bajos y húmedos."
  ),
  verbena_intermedia: species(
    "verbena_intermedia",
    "Verbena intermedia",
    "114. Verbenaceae",
    "Hierba perenne, erecta, de 60-120 cm de alto, con tallos glabros o casi glabros y poco ramificados.",
    "Flores de más de 6 mm, con cáliz glanduloso; brácteas florales de la misma longitud o apenas más largas que el cáliz; hojas oblanceoladas, agudas, atenuadas en la base y aserradas en la mitad superior; espigas alargadas; corola violácea de unos 7 mm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Vive en la estepa clímax. Nombre vulgar: verbena."
  ),
  verbena_rigida: species(
    "verbena_rigida",
    "Verbena rigida",
    "114. Verbenaceae",
    "Hierba perenne de 20-60 cm de alto.",
    "Flores de más de 6 mm, con cáliz glanduloso; bráctea floral mucho más larga que el cáliz; tallos cuadrangulares, escabroso-pubescentes; hojas oblongo-lanceoladas, sésiles y semiamplexicaules, agudamente aserradas, escabrosas o híspidas; corolas purpúreas o violáceas.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Rara en el norte de la provincia de Buenos Aires: Pergamino."
  ),
  verbena_bonariensis: species(
    "verbena_bonariensis",
    "Verbena bonariensis",
    "114. Verbenaceae",
    "Hemicriptófita de un metro o más de alto, con tallos cuadrangulares muy híspidos.",
    "Flores de menos de 6 mm, con limbo corolino poco desarrollado y cáliz sin pelos glandulares; hojas sésiles y semiabrazadoras, oblanceoladas, agudas, aserradas en todo el margen y estrigoso-pubescentes; espigas cortas y gruesas, muy amontonadas; corola violácea.",
    "Sur del Brasil, Paraguay y nordeste de la Argentina, hasta Río Negro. Muy común en lugares húmedos, terraplenes y baldíos. Nombre vulgar: verbena."
  ),
  verbena_brasiliensis: species(
    "verbena_brasiliensis",
    "Verbena brasiliensis",
    "114. Verbenaceae",
    "Hierba perenne de hasta 1,5 m de alto.",
    "Flores de unos 4,5 mm; tallos erectos, cuadrangulares y glabros; hojas lanceoladas, agudas, profundamente aserradas y laxamente pubescentes; espigas densas; cáliz pubescente de unos 3,5 mm; corola violácea con limbo reducido.",
    "América cálida. Común en lugares húmedos, especialmente en el Delta y en la ribera platense."
  ),
  verbena_montevidensis: species(
    "verbena_montevidensis",
    "Verbena montevidensis",
    "114. Verbenaceae",
    "Hemicriptófita muy ramosa, de 40-80 cm de alto.",
    "Flores de 3-3,5 mm; bráctea floral bastante más corta que el cáliz; cáliz apenas estrigoso, de 2-2,2 mm; corola liliácea con limbo muy reducido; tallos glabros; hojas oblanceoladas u obovadas, aserradas, de 1-3 cm; espigas cortas.",
    "Región platense, en campos bajos."
  ),
  verbena_litoralis: species(
    "verbena_litoralis",
    "Verbena litoralis",
    "114. Verbenaceae",
    "Hemicriptófita de 60-90 cm de alto, con tallos erectos, delgados y cuadrangulares.",
    "Flores de 3-3,5 mm; bráctea floral tan larga como el cáliz; cáliz estrigoso, de 2-2,5 mm; corola liliácea con limbo reducido; tallos glabros y ásperos en los ángulos; hojas lanceoladas, agudas y aserradas; espigas largas, laxas.",
    "América. Común en suelos húmedos y orillas de arroyos."
  ),
  glandularia_peruviana: species(
    "glandularia_peruviana",
    "Glandularia peruviana",
    "114. Verbenaceae",
    "Hemicriptófita rastrera, radicante y pubescente.",
    "Fruto seco formado por 4 nuececillas; inflorescencia con 1-3 espigas y corola hipocraterimorfa; hojas aserrado-crenadas o lobadas; flores rojas en espiga terminal solitaria y corta; hojas ovadas o lanceoladas, cortamente pecioladas; cáliz pubescente de 8-10 mm; corola de 12-16 mm.",
    "América cálida. Cultivada como ornamental y frecuente en la estepa clímax. Nombre vulgar: margarita punzó."
  ),
  glandularia_platensis: species(
    "glandularia_platensis",
    "Glandularia platensis",
    "114. Verbenaceae",
    "Hemicriptófita con tallos rastreros o ascendentes, pubescentes.",
    "Hojas aserrado-crenadas o lobadas; plantas rastreras con flores blancas; hojas oblanceoladas, profundamente crenadas o lobadas, áspero-pubescentes; flores en espigas terminales largas; cáliz cilíndrico, hirsuto; corola de 25-30 mm.",
    "Paraguay, Uruguay y norte y centro de la Argentina. Común en las sierras de Buenos Aires; rara cerca de Buenos Aires: San Isidro. Nombre vulgar: margarita blanca."
  ),
  glandularia_megapotamica: species(
    "glandularia_megapotamica",
    "Glandularia megapotamica",
    "114. Verbenaceae",
    "Hierba perenne, erecta, áspero-pubescente, de hasta 1 m de alto.",
    "Hojas aserrado-crenadas o lobadas; plantas erectas con flores azules o violáceas; hojas pecioladas, ovado-lanceoladas, agudas, atenuadas en la base y profundamente aserrado-crenadas; flores en 1-3 espigas capituliformes; cáliz de 10 mm; corolas de 15 mm.",
    "Sur del Brasil, Uruguay, Paraguay y nordeste de la Argentina. Frecuente en matorrales del Delta y de la ribera."
  ),
  glandularia_dissecta: species(
    "glandularia_dissecta",
    "Glandularia dissecta",
    "114. Verbenaceae",
    "Hemicriptófita con tallos rastreros, radicantes e hirsutos, que emiten vástagos erguidos de 15-30 cm.",
    "Hojas profundamente pinatisectas; espigas densas, capituliformes, no alargadas a la madurez y agrupadas en cimas terminales; cáliz hirsuto de 7-8 mm; corola violácea con tubo de 10-11 mm; segmentos foliares de 1-3 mm, lobados o partidos e hirsutos.",
    "América austral. Rara en la región: Campana, San Fernando y Los Talas. Nombre vulgar: margarita morada."
  ),
  glandularia_tenuisecta: species(
    "glandularia_tenuisecta",
    "Glandularia tenuisecta",
    "114. Verbenaceae",
    "Hierba perenne pubescente, con tallos rastreros y ramosos.",
    "Hojas profundamente pinatisectas, de 1-3 cm, de contorno ovado; segmentos bifurcados, estrechamente lineales, de 0,5-1 mm; flores en espigas terminales solitarias; cáliz pubescente de 5-6 mm; corolas azules o violáceas con tubo de unos 10 mm.",
    "América austral. Cultivada como ornamental y escasa en la estepa clímax. Nombre vulgar: margarita morada."
  ),
  glandularia_tenera: species(
    "glandularia_tenera",
    "Glandularia tenera",
    "114. Verbenaceae",
    "Hierba perenne pubescente, con tallos ramosos y rastreros.",
    "Hojas profundamente pinatisectas, de 0,5-1 cm, de contorno ovado, con segmentos lineales, agudos y bifurcados; espigas terminales solitarias, contraídas durante la floración y luego alargadas; cáliz pubescente de 5-6 mm; corolas azules o violáceas de 8-10 mm.",
    "Uruguay y norte y centro de la Argentina. Nombre vulgar: margarita morada."
  ),
  asclepiadaceae: family(
    "asclepiadaceae",
    "110. Asclepiadaceae",
    "Dicotiledóneas del Grupo E.",
    "Plantas con látex abundante; androceo y gineceo unidos en ginostemio; polen en polinias."
  ),
  oxypetalum_solanoides: species(
    "oxypetalum_solanoides",
    "Oxypetalum solanoides",
    "110. Asclepiadaceae",
    "Hierba perenne con tallos erectos, densamente pubescentes, de 30-50 cm de alto.",
    "Flores en seudocorimbos terminales y axilares; cáliz con lóbulos lineal-lanceolados, pubescentes; corola rosada fuerte, pubescente exteriormente, de unos 10 mm; corona con lóbulos rojizos; estigma largamente bífido; folículos pubescentes de 10-15 cm; hojas ovadas, acorazonadas, enteras, amarillento-tomentosas, de 3-7 cm.",
    "Sur del Brasil, Uruguay y norte y centro de la Argentina. Común en la estepa pampeana climáxica. Primavera."
  ),
  oxypetalum_pratense: species(
    "oxypetalum_pratense",
    "Oxypetalum pratense",
    "110. Asclepiadaceae",
    "Hierba perenne, erecta, de 30-50 cm de alto, con tallos y hojas pubescentes.",
    "Flores en umbelas terminales; cáliz con segmentos lineales; corola rosada, con tubo de 2 mm y lóbulos lanceolados de 5-7 mm; apéndice estigmático bidentado; hojas pecioladas, oblongo-ovadas, acorazonadas, enteras, de 3-5 cm.",
    "Norte y centro de la Argentina, Paraguay y Uruguay. Común en las sierras de Buenos Aires, pero muy rara cerca de la Capital Federal."
  ),
  oxypetalum_atropurpureum: species(
    "oxypetalum_atropurpureum",
    "Oxypetalum atropurpureum",
    "110. Asclepiadaceae",
    "Hierba perenne, erecta, pubescente, de unos 25 cm de alto.",
    "Caudículas sin diente; hojas ovado-acorazonadas, cortamente pecioladas, de 2,5 cm; flores en umbelas terminales; segmentos del cáliz lanceolados; corola con tubo acampanado corto y lóbulos anchamente lanceolados de 3 mm; apéndice estigmático corto.",
    "Sur del Brasil y provincia de Buenos Aires: Chacabuco."
  ),
  oxypetalum_balansae: species(
    "oxypetalum_balansae",
    "Oxypetalum balansae",
    "110. Asclepiadaceae",
    "Planta voluble, con hojas largamente pecioladas, ovado-acorazonadas, agudas, laxamente pubescentes, de 6 cm.",
    "Flores en corimbos axilares paucifloros; cáliz con segmentos lineales de 4 mm; corola con tubo acampanado corto y lóbulos reflejos, lanceolados, de 8-10 mm; apéndice estigmático bífido; caudículas con diente grande.",
    "Bolivia, Paraguay y norte de la Argentina. Muy rara en la región estudiada: San Martín."
  ),
  amblyopetalum_coccineum: species(
    "amblyopetalum_coccineum",
    "Amblyopetalum coccineum",
    "110. Asclepiadaceae",
    "Hierba perenne, erecta, pubescente, de 30-60 cm de alto.",
    "Hojas ovado-acorazonadas de 3-7 cm; flores rojas en cimas corimbiformes terminales; corona inserta en la base del ginostegio, con lóbulos cuadrangulares; caudículas descendentes, cortas, sin diente; folículos de 9-10 cm.",
    "Norte y centro de la Argentina. Citada para campos altos de San Fernando, San Isidro, etc."
  ),
  asclepias_mellodora: species(
    "asclepias_mellodora",
    "Asclepias mellodora",
    "110. Asclepiadaceae",
    "Hierba perenne, laxamente pubescente, de 30-50 cm de alto, con raíces leñosas gruesas y tallos ascendentes o erguidos.",
    "Corona doble; hojas lanceoladas, casi glabras, enteras, de 5-9 cm; flores amarillentas; cáliz de 3 mm; corola con segmentos reflejos de unos 6 mm; folículos de 9-12 cm.",
    "Sur del Brasil, Uruguay y norte de la Argentina. Muy común en la estepa climax. Verano. Nombre vulgar: yerba de la víbora."
  ),
  cynanchum_bonariense: species(
    "cynanchum_bonariense",
    "Cynanchum bonariense",
    "110. Asclepiadaceae",
    "Enredadera con ramas delgadas, pubescentes.",
    "Flores diminutas amarillentas en umbelas paucifloras; corola glabra, con tubo corto y lóbulos lanceolados de unos 3 mm; hojas pequeñas, ovado-lanceoladas, cortamente pecioladas, de 2 cm; folículos lineales de 3-4 cm.",
    "Norte y centro de la Argentina. Citada para Buenos Aires por Decaisne y Hicken."
  ),
  araujia_hortorum: species(
    "araujia_hortorum",
    "Araujia hortorum",
    "110. Asclepiadaceae",
    "Sufrútice voluble, con tallos enroscantes albo-pubescentes.",
    "Segmentos del cáliz no reflejos; corola blanca o rosada, de unos 15 mm, con lóbulos abiertos; hojas ovado-triangulares, obtusas y truncadas en la base, discolores, glabras en el haz y densamente albo-pubescentes en el envés, de 5-10 cm; folículos ovoideos, lisos y glabros, de 14 cm por 5 cm.",
    "América del Sur cálida. Común en bosques del Delta y ribera del Plata, también en alambrados y cercos. Medicinal: galactógena. Nombre vulgar: tasi."
  ),
  araujia_angustifolia: species(
    "araujia_angustifolia",
    "Araujia angustifolia",
    "110. Asclepiadaceae",
    "Sufrútice voluble.",
    "Segmentos del cáliz reflejos, lanceolados, de unos 12 mm; corola con tubo acampanado y lóbulos reflejos, de 22-24 mm en total; hojas hastado-sagitadas, cortamente pecioladas, glabras, de 4-10 cm; flores pocas o solitarias; folículos ovoides, acuminados, lisos, de 8-9 cm por 2,5 cm.",
    "Nordeste de la Argentina, hasta Campana y Vicente López."
  ),
  morrenia_brachystephana: species(
    "morrenia_brachystephana",
    "Morrenia brachystephana",
    "110. Asclepiadaceae",
    "Sufrútice voluble, con pubescencia blanca laxa.",
    "Flores pequeñas; corola casi rotácea, con tubo corto y lóbulos de 6-7 mm; corona tubuloso-acampanada, de 2-3 mm; ginostegio subsésil; hojas ovado-hastadas o lanceolado-hastadas, de 3-5 cm; umbelas paucifloras; folículos rugosos de 6-7 cm.",
    "Norte y centro de la Argentina. Se halla en cercos, bosques, etc."
  ),
  morrenia_odorata: species(
    "morrenia_odorata",
    "Morrenia odorata",
    "110. Asclepiadaceae",
    "Sufrútice voluble, laxamente albo-piloso.",
    "Flores mayores; corola rotácea, con lóbulos de 10-12 mm; corona tubulosa de cerca de 8 mm; ginostegio estipitado; hojas ovado-hastadas de 3-6 cm; umbelas paucifloras; folículos lisos de 8-14 cm.",
    "Paraguay, sur del Brasil y norte y centro de la Argentina. Común en bosques secos, cercos y alambrados. Nombre vulgar: tasi."
  ),
  schistogyne_sylvestris: species(
    "schistogyne_sylvestris",
    "Schistogyne sylvestris",
    "110. Asclepiadaceae",
    "Sufrútice voluble, glabro o laxamente pubescente.",
    "Hojas ovado-lanceoladas, acuminadas, acorazonadas en la base, enteras, de 3-8 cm; flores pequeñas en corimbos, con lóbulos de la corola de 4-6 mm, reflejos y retorcidos; estigma terminado en 7 filamentos largos y retorcidos; folículos de 5-6 cm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en bosques primitivos del Delta y ribera platense. Verano."
  ),
  philibertia_gilliesii_gracilis: species(
    "philibertia_gilliesii_gracilis",
    "Philibertia gilliesii var. gracilis",
    "110. Asclepiadaceae",
    "Sufrútice voluble.",
    "Hojas acorazonadas, glabras o algo pubescentes, de unos 7 cm por 4-5 cm; cimas extraaxilares paucifloras; corola de unos 15 mm de diámetro, blanco-verdosa por fuera y con manchas vinosas por dentro; corona con lóbulos vesiculosos; apéndice estigmático algo partido en el ápice.",
    "Bolivia y norte y centro de la Argentina. Se halla en bosques xerófilos: Isla Martín García, General Lavalle, etc."
  ),
  funastrum_flavum: species(
    "funastrum_flavum",
    "Funastrum flavum",
    "110. Asclepiadaceae",
    "Sufrútice voluble con hojas opuestas, pecioladas.",
    "Corona doble, blanca, con segmentos cuculados; hojas ovado-lanceoladas, agudas y acorazonadas en la base, enteras, laxamente pubescentes, de 8-13 cm por 2,5-3,5 cm; cimas umbeliformes multifloras; corola rotácea, con lóbulos ovado-lanceolados de unos 5 mm; folículos fusiformes de 8 cm.",
    "Uruguay y nordeste de la Argentina, hasta el Delta y la ribera platense."
  ),
  roulinia_montevidensis: species(
    "roulinia_montevidensis",
    "Roulinia montevidensis",
    "110. Asclepiadaceae",
    "Sufrútice voluble, con hojas pecioladas, opuestas.",
    "Hojas ovadas, agudas y acorazonadas en la base, enteras, glabras, de 5-9 cm por 3-7 cm; cimas paucifloras; lóbulos de la corola de 4-7 mm; corona simple, con lóbulos anchos insertos en el tubo de la corola; folículos de 7-10 cm.",
    "Bosques húmedos del sur del Brasil, Paraguay, Uruguay y norte y centro de la Argentina. Común en el Delta y ribera platense."
  ),
  metastelma_virgatum: species(
    "metastelma_virgatum",
    "Metastelma virgatum",
    "110. Asclepiadaceae",
    "Sufrútice voluble con hojas pequeñas y flores amarillentas o verdosas en cimas extraaxilares.",
    "Hojas diminutas, cortamente pecioladas, ovado-lanceoladas, enteras, fácilmente caducas, de 1-3 cm por 0,5-1 cm; flores muy pequeñas; corona simple con lóbulos lineales insertos en la base del ginostegio; folículos de unos 3 cm.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en el Delta y bosques de la ribera platense. Invierno."
  ),
  nyctaginaceae: family(
    "nyctaginaceae",
    "46. Nyctaginaceae",
    "Dicotiledóneas del Grupo E.",
    "Hojas opuestas simples; estambres 1-5."
  ),
  boerhavia_paniculata_leiocarpa: species(
    "boerhavia_paniculata_leiocarpa",
    "Boerhavia paniculata var. leiocarpa",
    "46. Nyctaginaceae",
    "Hierba perenne con tallos rastreros, glanduloso-pubescentes.",
    "Hojas opuestas, pecioladas, ovadas, obtusas, onduladas en el borde y discolores, de 15-20 mm por 12-15 mm; flores diminutas sin involucro calicoide, en cimas laxas y difusas; perigonio purpúreo de 2 mm.",
    "América cálida. Hallada en Pergamino y en Eva Perón."
  ),
  mirabilis_jalapa: species(
    "mirabilis_jalapa",
    "Mirabilis jalapa",
    "46. Nyctaginaceae",
    "Hierba perenne con raíz napiforme carnosa y tallos erectos de 1-1,5 m de alto, glabros o tenuemente pubescentes.",
    "Hojas opuestas, pecioladas, ovadas, agudas y enteras; flores grandes con involucro caliciforme; perigonio purpúreo, amarillo o blanco, de 4 cm.",
    "América tropical. Cultivada como ornamental y frecuente en suelos modificados. Nombre vulgar: Don Diego de noche."
  ),
  symplocaceae: family(
    "symplocaceae",
    "105. Symplocaceae",
    "Dicotiledóneas del Grupo E.",
    "Estambres muy numerosos; también aparece con ovario ínfero y estambres más de 10."
  ),
  symplocos_uniflora: species(
    "symplocos_uniflora",
    "Symplocos uniflora",
    "105. Symplocaceae",
    "Arbolito con ramitas pubescentes.",
    "Hojas subcoriáceas, cortamente pecioladas, elípticas, casi obtusas, cortamente aserradas en el margen, glabras o casi glabras, de 6-8 cm por 2-3,5 cm; flores en racimos axilares cortos o solitarias; cáliz de 2 mm; corola blanca, glabra, de 8 mm; estambres numerosos en 3 series, soldados por los filamentos; fruto ovoideo, glabro, de 10-12 mm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Frecuente en los bosques indígenas del Delta. Primavera."
  ),
  thymelaeaceae: family(
    "thymelaeaceae",
    "93. Thymelaeaceae",
    "Dicotiledóneas del Grupo E.",
    "Estambres en número doble a las divisiones del perigonio."
  ),
  daphnopsis_racemosa: species(
    "daphnopsis_racemosa",
    "Daphnopsis racemosa",
    "93. Thymelaeaceae",
    "Arbusto glabro, de cerca de 2 m de alto.",
    "Hojas coriáceas, alternas, cortamente pecioladas, oblanceolado-espatuladas, obtusas, enteras, de 5-7 cm de largo; flores blancas en racimos axilares, las masculinas infundibuliformes y las femeninas acampanadas, de unos 4 mm; frutos ovoides, de 4 mm.",
    "Vive en los bosques ribereños del río Uruguay, hasta el Delta y la Isla Martín García; prefiere suelos arenosos."
  ),
  myrsinaceae: family(
    "myrsinaceae",
    "101. Myrsinaceae",
    "Dicotiledóneas del Grupo E.",
    "Árboles con ovario unilocular y estambres opuestos a los pétalos."
  ),
  rapanea_laetevirens: species(
    "rapanea_laetevirens",
    "Rapanea laetevirens",
    "101. Myrsinaceae",
    "Árbol de 6-10 m de alto, con ramitas glabras.",
    "Flores en racimos cortos, con eje conspicuo; hojas verdes al secarse, cortamente pecioladas, oblanceoladas, obtusas, enteras, glabras, de unos 8 cm; corolas de sólo 2,5 mm.",
    "Norte de la Argentina y Uruguay. Frecuente en el Delta y en los bosques de la ribera del Plata. Nombre vulgar: canelón."
  ),
  rapanea_lorentziana: species(
    "rapanea_lorentziana",
    "Rapanea lorentziana",
    "101. Myrsinaceae",
    "Árbol con hojas enteras y flores pequeñas en umbelas densas.",
    "Flores en umbelas densas; hojas castañas al secarse; demás caracteres semejantes a Rapanea laetevirens.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina, hasta el Delta y la ribera platense. Nombre vulgar: canelón."
  ),
  sapotaceae: family(
    "sapotaceae",
    "104. Sapotaceae",
    "Dicotiledóneas del Grupo E.",
    "Árboles con ovario 4-locular y estambres opuestos a los pétalos."
  ),
  pouteria_salicifolia: species(
    "pouteria_salicifolia",
    "Pouteria salicifolia",
    "104. Sapotaceae",
    "Árbol de 8-15 m de alto, con corteza parda agrietada longitudinalmente.",
    "Hojas alternas, coriáceas, oblanceoladas, enteras, glabras, de color verde aceitunado, de 9-15 cm; flores pequeñas, amarillentas, fasciculadas; cáliz sedoso, de 5 mm; corola de 10 mm; frutos carnosos, ovoideos, con una larga punta curva, de unos 4 cm.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Frecuente en las selvas marginales del Delta y de la ribera del Plata. Nombre vulgar: mata-ojo."
  ),
  primulaceae: family(
    "primulaceae",
    "102. Primulaceae",
    "Dicotiledóneas del Grupo E.",
    "Hierbas con óvulos numerosos."
  ),
  samolus_valerandi: species(
    "samolus_valerandi",
    "Samolus valerandi",
    "102. Primulaceae",
    "Hierba anual, glabra, erecta, de 10-40 cm de alto.",
    "Hojas alternas, obovado-espatuladas, enteras; flores en racimos terminales; brácteas insertas en el pedicelo; cáliz de unos 2 mm; corola blanca; ovario semi-ínfero.",
    "Cosmopolita. Frecuente en suelos húmedos. Verano."
  ),
  anagallis_arvensis: species(
    "anagallis_arvensis",
    "Anagallis arvensis",
    "102. Primulaceae",
    "Hierba anual, glabra, con tallos ascendentes o tendidos.",
    "Hojas opuestas o ternadas, sésiles, ovadas, enteras; flores axilares, pedunculadas; corola de color minio; cápsula de dehiscencia transversal.",
    "Europa; adventicia en regiones templadas. Común en suelos modificados."
  ),
  anagallis_arvensis_coerulea: species(
    "anagallis_arvensis_coerulea",
    "Anagallis arvensis var. coerulea",
    "102. Primulaceae",
    "Variedad de Anagallis arvensis con flores de color azul oscuro.",
    "Hábito semejante a Anagallis arvensis; se distingue por la corola azul oscuro.",
    "Europa; adventicia en las regiones templadas."
  ),
  centunculus_minimus: species(
    "centunculus_minimus",
    "Centunculus minimus",
    "102. Primulaceae",
    "Hierba anual, pigmea, glabra, de 3-7 cm de alto.",
    "Hojas alternas, obovadas o elípticas, sésiles o contraídas en la base en corto pecíolo; flores axilares, sésiles o muy cortamente pedunculadas; cáliz más largo que la corola; corola de 1 mm; cápsula dehiscente transversalmente.",
    "Europa; adventicia en todo el globo. Rara en la región."
  ),
  pelletiera_verna: species(
    "pelletiera_verna",
    "Pelletiera verna",
    "102. Primulaceae",
    "Hierba pigmea, glabra, de 2-10 cm de alto, con tallos ascendentes, angulosos.",
    "Hojas opuestas, sésiles, lanceoladas; flores solitarias en las axilas de las hojas, cortamente pedunculadas, blancas; cápsula globosa, dehiscente por 3 valvas.",
    "América austral. Rara en suelos húmedos de la ribera platense."
  ),
  plumbaginaceae: family(
    "plumbaginaceae",
    "103. Plumbaginaceae",
    "Dicotiledóneas del Grupo E.",
    "Hierbas con óvulo solitario."
  ),
  limonium_brasiliense: species(
    "limonium_brasiliense",
    "Limonium brasiliense",
    "103. Plumbaginaceae",
    "Hemicriptófita de 25-40 cm de alto, con raíces gruesas rojizas.",
    "Hojas en roseta, obovadas, obtusas, atenuadas en pecíolo en la base, enteras u onduladas en el margen, glabras, de 6-15 cm por 2-4 cm; tallos escapiformes, ramosos; flores muy numerosas en panojas de espigas unilaterales; cáliz de 4 mm con 5 nervios rojizos; corola blanco-azulada; cápsulas de 2 mm.",
    "Suelos salados de la América austral. Común en campos bajos y salobres: Río Luján, Avellaneda, Ensenada, etc. Usada en medicina popular. Nombre vulgar: gaycurú."
  ),
  oleaceae: family(
    "oleaceae",
    "106. Oleaceae",
    "Dicotiledóneas del Grupo E.",
    "Estambres 2."
  ),
  ligustrum_lucidum: species(
    "ligustrum_lucidum",
    "Ligustrum lucidum",
    "106. Oleaceae",
    "Árbol glabro, de 6-10 m de alto.",
    "Hojas semicoriáceas, pecioladas, ovadas, enteras, verde oscuras, de 7-15 cm por 3,5-5,5 cm; panojas terminales anchas, multifloras; flores blancas, pequeñas; corola de 4 mm; fruto baya negro-azulada, subglobosa, de 8 mm de diámetro.",
    "Asia. Cultivado en todo el mundo como árbol de sombra, para cercos, etc. Espontáneo en el Delta del Paraná y en la ribera del Plata, asociado con árboles indígenas. Nombre vulgar: ligustro."
  ),
  apocynaceae: family(
    "apocynaceae",
    "109. Apocynaceae",
    "Dicotiledóneas del Grupo E.",
    "Gineceo formado por dos ovarios separados unidos por el estilo."
  ),
  vinca_major: species(
    "vinca_major",
    "Vinca major",
    "109. Apocynaceae",
    "Hierba perenne, rizomatosa, glabra, con tallos ascendentes de 20-50 cm de alto.",
    "Hojas algo carnosas, cortamente pecioladas, ovadas, enteras, de 2,5-6 cm; flores axilares solitarias, grandes, pedunculadas, azules, de 18-30 mm de diámetro; corola hipocraterimorfa; folículos pauciseminados.",
    "Europa. Cultivada como ornamental y subespontánea en lugares sombreados."
  ),
  gentianaceae: family(
    "gentianaceae",
    "108. Gentianaceae",
    "Dicotiledóneas del Grupo E.",
    "Hojas opuestas y ovario unilocular."
  ),
  blackstonia_perfoliata: species(
    "blackstonia_perfoliata",
    "Blackstonia perfoliata",
    "108. Gentianaceae",
    "Hierba anual, glabra, de 20-50 cm de alto.",
    "Plantas terrestres; cáliz con 6-8 sépalos; lóbulos de la corola y estambres generalmente 8; hojas opuestas, ovado-triangulares, connatas por su base; flores amarillas en cimas laxas; cáliz de 16 mm; corola del largo del cáliz.",
    "Europa; adventicia en la Argentina y Uruguay. No hallada cerca de Capital Federal, pero presente en campos arenosos de San Clemente del Tuyú y La Margarita."
  ),
  centaurium_pulchellum: species(
    "centaurium_pulchellum",
    "Centaurium pulchellum",
    "108. Gentianaceae",
    "Hierba anual, erecta, ramosa, de 10-50 cm de alto.",
    "Plantas terrestres; cáliz con 4-5 segmentos; anteras espiraladas; flores generalmente numerosas en cimas dicotómicas laxas; hojas ovadas u oblongas, subobtusas; corola rosada, de 10-12 mm.",
    "Europa; adventicia en América. Frecuente en suelos húmedos. Verano."
  ),
  zygostigma_australe: species(
    "zygostigma_australe",
    "Zygostigma australe",
    "108. Gentianaceae",
    "Hierba perenne, erecta, poco ramosa, de 20-50 cm de alto.",
    "Plantas terrestres; cáliz con 4-5 segmentos; anteras rectas; flores 1-3, largamente pedunculadas; hojas opuestas, sésiles, lineales, agudas; cáliz de unos 12 mm; corola de 20-25 mm, con segmentos agudos.",
    "América austral. Rara en la estepa clímax. Primavera."
  ),
  limnanthemum_humboldtianum: species(
    "limnanthemum_humboldtianum",
    "Limnanthemum humboldtianum",
    "108. Gentianaceae",
    "Hierba acuática, con rizoma corto y raíces fasciculadas.",
    "Plantas acuáticas, con hojas flotantes largamente pecioladas; lámina orbicular, acorazonada, palmatinervada; flores en fascículos umbeliformes axilares, aparentemente sobre el pecíolo foliar; corola blanca, con lóbulos fimbriados y pelos glandulares largos en la cara superior; cápsulas globosas indehiscentes.",
    "América cálida. Hallada en la Isla Martín García y en el arroyo del Pescado, entre Eva Perón y Magdalena."
  ),
  loganiaceae: family(
    "loganiaceae",
    "107. Loganiaceae",
    "Dicotiledóneas del Grupo E.",
    "Hojas opuestas y ovario 2-4-locular."
  ),
  buddleja_grandiflora: species(
    "buddleja_grandiflora",
    "Buddleja grandiflora",
    "107. Loganiaceae",
    "Sufrútice densamente ferrugíneo-tomentoso, de 1-2 m de alto, con tallos cuadrangulares.",
    "Tubo de la corola tres veces más largo que el cáliz; cáliz de 6-7 mm; corola de unos 20 mm, con tubo cilíndrico; hojas ovado-lanceoladas, agudas en el ápice y atenuadas en la base, de 10-18 cm por 3-5 cm; flores en una densa espiga de glomérulos.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina, hasta la Isla Martín García."
  ),
  buddleja_stachyoides: species(
    "buddleja_stachyoides",
    "Buddleja stachyoides",
    "107. Loganiaceae",
    "Arbusto de 1,5 m de alto, con ramas cuadrangulares estrechamente aladas.",
    "Tubo de la corola a lo más de dos veces la longitud del cáliz; hojas rómbico-ovadas, agudas en el ápice y cuneiformes abajo, connatas en la base por dos pequeñas aurículas, crenado-dentadas y laxamente tomentosas; flores en espiga interrumpida de glomérulos; corola amarilla, tubulosa.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina, hasta el Delta, las barrancas del Paraná y la Isla Martín García."
  ),
  buddleja_thyrsoides: species(
    "buddleja_thyrsoides",
    "Buddleja thyrsoides",
    "107. Loganiaceae",
    "Arbusto de 1,5-2 m de alto, con ramitas nuevas tomentosas y semicuadrangulares.",
    "Hojas lineal-lanceoladas, largamente atenuadas en el ápice y en la base, sésiles, uniformemente aserradas, glabras en el haz y albo-tomentosas en el envés; pedicelos más largos que el cáliz; corola blanca, acampanada, de 6-7 mm; inflorescencia en tirso de cimas.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Se halla en los pajonales del Delta y de la ribera platense."
  ),
  buddleja_elegans: species(
    "buddleja_elegans",
    "Buddleja elegans",
    "107. Loganiaceae",
    "Sufrútice de 1,5-2 m de alto, con ramas nuevas tomentulosas.",
    "Hojas oblongo-lanceoladas, agudas en el ápice y atenuadas en la base, crenadas en la parte superior o enteras, glabras en el haz y tomentosas en el envés; flores blancas; cáliz tomentoso de 3 mm; corola acampanada de 5-6 mm.",
    "Sur del Brasil. Hallada en los pajonales del Delta."
  ),
  spigelia_humboldtiana: species(
    "spigelia_humboldtiana",
    "Spigelia humboldtiana",
    "107. Loganiaceae",
    "Hierba perenne, rizomatosa, glabra o apenas pubescente, con tallos cuadrangulares de 30-50 cm de alto.",
    "Hojas opuestas o verticiladas, sésiles, lanceoladas u ovado-lanceoladas, enteras, de 3-6 cm por 1-1,5 cm; flores blancas en espigas unilaterales curvas; corola de 8-10 mm; cápsulas bilobadas de 4 mm.",
    "América cálida. Común en los bosques del Delta y de la ribera del Plata."
  ),
  plantaginaceae: family(
    "plantaginaceae",
    "122. Plantaginaceae",
    "Dicotiledóneas del Grupo E.",
    "Flores tetrámeras, corola membranosa poco llamativa, hojas en roseta y flores en espigas."
  ),
  plantago_major: species(
    "plantago_major",
    "Plantago major",
    "122. Plantaginaceae",
    "Hierba perenne, cortamente rizomatosa, glabra o laxamente pubescente.",
    "Hojas arrosetadas, largamente pecioladas, con lámina ovada, sinuada o dentada, de 6-15 x 4-12 cm; escapos de 15-40 cm; flores en espigas densas; semillas 6-30.",
    "Europa, adventicia en América. Frecuente en suelos modificados."
  ),
  plantago_heterophylla: species(
    "plantago_heterophylla",
    "Plantago heterophylla",
    "122. Plantaginaceae",
    "Hierba pigmea anual, con raíces tenues.",
    "Hojas arrosetadas, glabras, lineales, enteras o con algún diente, de 3-10 cm x 1-2,5 mm; escapos decumbentes o ascendentes, de 5-10 cm; espigas laxas; semillas alrededor de 25.",
    "Estados Unidos. Hallada en campos húmedos próximos a Eva Perón."
  ),
  plantago_lanceolata: species(
    "plantago_lanceolata",
    "Plantago lanceolata",
    "122. Plantaginaceae",
    "Hierba perenne, cortamente rizomatosa, glabra o apenas pubescente.",
    "Hojas en roseta, lanceoladas, generalmente con cinco nervaduras principales, enteras, de 15-30 x 1-2,5 cm; escapos de 30-60 cm, terminados en espigas cortas y densas; semillas 2.",
    "Europa, adventicia en América. Común en suelos modificados. Nombre vulgar: llantén."
  ),
  plantago_patagonica: species(
    "plantago_patagonica",
    "Plantago patagonica",
    "122. Plantaginaceae",
    "Hierba anual, densamente seríceo-pubescente, con raíz delgada.",
    "Hojas arrosetadas, lineales; flores en espigas densas; semillas 2.",
    "Centro y sur de la Argentina, en suelos arenosos. Rara en la región, pero frecuente en las dunas de Junín y Monte Veloz."
  ),
  plantago_macrostachys: species(
    "plantago_macrostachys",
    "Plantago macrostachys",
    "122. Plantaginaceae",
    "Hierba perenne, cortamente rizomatosa, glabra.",
    "Hojas glabras o a lo más ciliadas, arrosetadas, largamente pecioladas, elíptico-lanceoladas, 5-nervadas, sinuado-dentadas, con lámina de 12-20 x 3-6 cm; escapos más largos que las hojas, terminados en espigas largas y densas; semillas 3.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en suelos húmedos."
  ),
  plantago_macrostachys_var_platensis: species(
    "plantago_macrostachys_var_platensis",
    "Plantago macrostachys var. platensis",
    "122. Plantaginaceae",
    "Variedad de Plantago macrostachys de tamaño más reducido.",
    "Mantiene los rasgos principales de la especie: hojas arrosetadas, elíptico-lanceoladas, glabras o ciliadas, y espigas densas sobre escapos más largos que las hojas.",
    "Endémica de la región. Común en el césped de la ribera platense."
  ),
  plantago_taraxacoides: species(
    "plantago_taraxacoides",
    "Plantago taraxacoides",
    "122. Plantaginaceae",
    "Hierba perenne baja.",
    "Hojas glabras o a lo más ciliadas, arrosetadas, lineal-lanceoladas, dentadas o lobuladas, ciliadas en el margen, de 4-10 cm; espigas apenas superando a las hojas; escapo pubescente; semillas 3.",
    "Centro y sur de la Argentina. Se halla en campos bajos y salobres, como Bavio, Tolosa y Ensenada."
  ),
  plantago_myosurus: species(
    "plantago_myosurus",
    "Plantago myosurus",
    "122. Plantaginaceae",
    "Hierba anual pequeña, con hojas densamente pubescentes.",
    "Hojas arrosetadas, lanceoladas, atenuadas en corto pecíolo, sinuado-dentadas, de 4-11 x 0,5-2 cm; escapos de doble longitud que las hojas, velludos, con espigas largas y densas; semillas 3, punteadas.",
    "América austral. Muy frecuente en la estepa clímax; florece en primavera."
  ),
  plantago_paralias: species(
    "plantago_paralias",
    "Plantago paralias",
    "122. Plantaginaceae",
    "Hierba perenne robusta, con hojas densamente pubescentes.",
    "Raíz fusiforme, poco engrosada; hojas elíptico-lanceoladas o elípticas, velludas, enteras o denticuladas, de 8-20 x 2-6 cm; espigas largas, densas o laxas, sobresaliendo mucho de las hojas; semillas rugosas.",
    "América austral. Común en campos fértiles; florece en primavera."
  ),
  plantago_berroi: species(
    "plantago_berroi",
    "Plantago berroi",
    "122. Plantaginaceae",
    "Hemicriptófita perenne robusta, con hojas densamente pubescentes.",
    "Raíz napiforme, muy engrosada; hojas arrosetadas, elípticas o elíptico-ovadas, estrechadas en la base en corto pecíolo, enteras o con dientes obtusos, hirsuto-velludas; flores en espigas densas y gruesas de 7-14 cm; semillas punteadas.",
    "Uruguay y provincia de Buenos Aires. No parece hallarse en las inmediaciones de la Capital Federal, pero sí en campos con estepa clímax de Pergamino y Azul."
  ),
  hydrophyllaceae: family(
    "hydrophyllaceae",
    "112. Hydrophyllaceae",
    "Dicotiledóneas del Grupo E.",
    "Inflorescencias escorpioides y estilo profundamente bífido."
  ),
  phacelia_artemisioides: species(
    "phacelia_artemisioides",
    "Phacelia artemisioides",
    "112. Hydrophyllaceae",
    "Hierba anual, hirsuta, ramosa desde la base, con tallos tendidos o ascendentes de 10-30 cm.",
    "Hojas alternas, bipinatisectas, con segmentos obovados, obtusos e hirsutos; flores muy numerosas en cincinios terminales dísticos, sésiles o casi sésiles, apretadas; cáliz de 2-3 mm; corola blanca o azulada de 3-4 mm, con lóbulos anchos; cápsula globosa de unos 3 mm; semillas tuberculadas.",
    "Suelos secos o arenosos del sur del Brasil, Uruguay y norte y centro de la Argentina. Rara en la región, más frecuente en el oeste y sur de Buenos Aires."
  ),
  convolvulaceae: family(
    "convolvulaceae",
    "111. Convolvulaceae",
    "Dicotiledóneas del Grupo E.",
    "Óvulos generalmente 2 por carpelo, erectos desde la base del lóculo."
  ),
  cuscuta_cristata: species(
    "cuscuta_cristata",
    "Cuscuta cristata",
    "111. Convolvulaceae",
    "Planta parásita con tallos amarillos, a menudo con estrías rojizas.",
    "Fruto indehiscente; lóbulos del cáliz con crestas dorsales; flores blancas de 3-3,5 mm; cáliz igual o más corto que el tubo corolino; lóbulos corolinos obtusos y reflejos; filamentos muy anchos; estilos comprimidos, 2-3 veces más cortos que el ovario; fruto globoso-deprimido.",
    "Argentina y Uruguay. Común en el Delta y en la ribera paranense y platense, sobre diversas dicotiledóneas."
  ),
  cuscuta_obtusiflora: species(
    "cuscuta_obtusiflora",
    "Cuscuta obtusiflora",
    "111. Convolvulaceae",
    "Planta parásita con tallos amarillos y glomérulos 2-4-floros.",
    "Fruto indehiscente; lóbulos del cáliz sin crestas, obtusos y algo superpuestos antes de la fecundación; corola sin papilas; estilos cilíndricos antes de la fecundación, luego engrosados en la mitad inferior; flores de 2-3 mm; fruto globoso.",
    "América del Sur. Frecuente sobre dicotiledóneas hidrófilas."
  ),
  cuscuta_platyloba: species(
    "cuscuta_platyloba",
    "Cuscuta platyloba",
    "111. Convolvulaceae",
    "Planta parásita con tallos amarillos y glomérulos 3-5-floros.",
    "Fruto indehiscente; estilos siempre cilíndricos; flores fructificadas de 3-4,5 mm y flores jóvenes de 2,5-3,5 mm; cáliz tan largo como el tubo corolino; lóbulos corolinos triangular-aovados; escamas algo más largas que el tubo; estilos por lo común más largos que el ovario.",
    "Sur del Brasil y Bolivia, Uruguay y este de la Argentina. Frecuente en el Delta y ribera del Plata, sobre dicotiledóneas herbáceas."
  ),
  cuscuta_pentagona_calycina: species(
    "cuscuta_pentagona_calycina",
    "Cuscuta pentagona var. calycina",
    "111. Convolvulaceae",
    "Planta parásita con tallos anaranjados y glomérulos compactos multifloros.",
    "Fruto indehiscente; estilos siempre cilíndricos; flores fructificadas de 2-2,8 mm y flores jóvenes de 2-2,5 mm con papilas muy pequeñas; cáliz más corto o igual al tubo corolino; lóbulos corolinos iguales o más cortos que el tubo; escamas largamente fimbriadas.",
    "Estados Unidos; distribuida por todo el mundo como parásito de la alfalfa y otras plantas cultivadas. También frecuente sobre especies silvestres."
  ),
  cuscuta_indecora: species(
    "cuscuta_indecora",
    "Cuscuta indecora",
    "111. Convolvulaceae",
    "Planta parásita con tallos amarillo-anaranjados e inflorescencias laxas paucifloras.",
    "Fruto indehiscente; lóbulos del cáliz agudos, sin bordes superpuestos; corola con papilas globosas e irregulares; flores de 3-3,7 mm; cáliz blanco-verdoso que alcanza hasta la mitad o menos del tubo corolino; lóbulos corolinos triangulares, agudos e inflexos; fruto esférico.",
    "América. Parásita de la alfalfa. Rara en la región."
  ),
  cuscuta_indecora_longisepala: species(
    "cuscuta_indecora_longisepala",
    "Cuscuta indecora var. longisepala",
    "111. Convolvulaceae",
    "Variedad de Cuscuta indecora.",
    "Se diferencia de la variedad indecora por el cáliz tan largo como el tubo corolino y los segmentos de la corola de igual longitud o mayores que el tubo.",
    "América. Frecuente sobre alfalfa y ligustro; también sobre Ambrosia tenuifolia."
  ),
  cuscuta_xanthochortos_lanceolata: species(
    "cuscuta_xanthochortos_lanceolata",
    "Cuscuta xanthochortos var. lanceolata",
    "111. Convolvulaceae",
    "Planta parásita con glomérulos multifloros densos.",
    "Fruto dehiscente por circuncisión transversal; flores de 3,5-5 mm; cáliz de 2-2,5 mm, tan largo como el tubo corolino o mayor; lóbulos calicinos alargados y revolutos en el ápice; lóbulos corolinos angostos y largos, 1,5-2 veces mayores que el tubo, reflejos; estilos cilíndricos, mucho más largos que el ovario.",
    "Paraguay y Misiones en la Argentina. Accidental en la ribera platense: Quilmes."
  ),
  dichondra_repens: species(
    "dichondra_repens",
    "Dichondra repens",
    "111. Convolvulaceae",
    "Hierba débil, tendida, con hojas acorazonadas o reniformes y flores pequeñas, axilares, solitarias.",
    "Plantas verdes, laxamente pubescentes, perennes, pigmeas, con tallos rastreros radicantes; hojas largamente pecioladas, cordado-orbiculares o reniformes, enteras, de 8-25 mm de largo y ancho; flores axilares, largamente pedunculadas; cáliz de 2 mm; corola amarillenta de la misma longitud que el cáliz; ovario velludo.",
    "América cálida; adventicia en casi todo el globo. Común en campos húmedos y jardines. Primavera. Nombre vulgar: oreja de ratón."
  ),
  dichondra_sericea: species(
    "dichondra_sericea",
    "Dichondra sericea",
    "111. Convolvulaceae",
    "Hierba tendida, plateada, densamente seríceo-pubescente.",
    "Cáliz de 3 mm; los demás caracteres son semejantes a Dichondra repens: hojas acorazonadas o reniformes, flores pequeñas axilares y fruto formado por dos capsulitas.",
    "América cálida. Rara en la estepa climax; más común en las sierras de la provincia de Buenos Aires."
  ),
  cressa_truxillensis: species(
    "cressa_truxillensis",
    "Cressa truxillensis",
    "111. Convolvulaceae",
    "Sufrútice enano, con ramas ascendentes, densamente hojosas, seríceo-pubescentes.",
    "Hojas lanceoladas, de 8-10 mm; flores cortamente pedunculadas, solitarias en las axilas de las hojas superiores; cáliz de 4 mm; corola amarillenta, algo más larga; ovario bilocular con dos estilos separados desde la base y estigmas globosos.",
    "América austral. Rara en campos bajos y salobres: Tolosa. Primavera."
  ),
  evolvulus_sericeus: species(
    "evolvulus_sericeus",
    "Evolvulus sericeus",
    "111. Convolvulaceae",
    "Hierba perenne, densamente seríceo-pubescente, con tallos tendidos o ascendentes.",
    "Hojas lanceoladas, cortamente pecioladas, de 6-25 mm; flores sésiles o cortamente pedunculadas en las axilas superiores; sépalos de 3-5 mm, acuminados; corola blanca o azulada, con limbo rotáceo de 7-12 mm de diámetro; estilos dos, libres o apenas unidos en la base, profundamente bífidos.",
    "América cálida. Se halla en la estepa climax. Verano."
  ),
  aniseia_argentina: species(
    "aniseia_argentina",
    "Aniseia argentina",
    "111. Convolvulaceae",
    "Enredadera casi glabra.",
    "Sépalos exteriores mucho mayores que los internos; hojas cortamente pecioladas, oblongo-lanceoladas, obtusas y mucronadas, de 6-7 cm por 1-1,5 cm; flores 1-3, axilares, largamente pedunculadas; corola rosado-violácea o blanca, de unos 3,5 cm.",
    "Paraguay y nordeste de la Argentina. Rara en el Delta y ribera del Plata."
  ),
  ipomoea_fimbriosepala: species(
    "ipomoea_fimbriosepala",
    "Ipomoea fimbriosepala",
    "111. Convolvulaceae",
    "Enredadera anual, glabra o hirsuto-pilosa.",
    "Estambres y estilo cortos, no sobresalientes; sépalos con costillas longitudinales aladas y generalmente dentadas; hojas ovadas o lanceoladas, cordadas o sagitadas en la base; flores solitarias o en cimas corimbiformes; corola rosada de 2-4,5 cm; cápsula bilocular con 4 semillas tomentosas.",
    "África y América tropicales. Accidental en el puerto de Buenos Aires."
  ),
  ipomoea_grandifolia: species(
    "ipomoea_grandifolia",
    "Ipomoea grandifolia",
    "111. Convolvulaceae",
    "Enredadera anual, con ramas angulosas laxamente hirsutas.",
    "Ovario bicarpelar, hirsuto-velludo; estigma bilobado; cápsula bilocular, hirsuta, con 4 semillas glabras; hojas ovadas, enteras, algo sinuosas, con un lóbulo a cada lado de la base acorazonada; cimas 3-10-floras, rara vez flores solitarias; sépalos lanceolados, largamente atenuados; corola rosada de 13-25 mm.",
    "Sur del Brasil, Paraguay, Uruguay y Argentina, hasta el Delta del Paraná."
  ),
  ipomoea_purpurea: species(
    "ipomoea_purpurea",
    "Ipomoea purpurea",
    "111. Convolvulaceae",
    "Enredadera anual, pubescente.",
    "Ovario tricarpelar, glabro; estigma trilobado; sépalos lanceolados, agudos, híspidos en la base; corola infundibuliforme, violácea, rosada o blanca, de 5-8 cm; hojas enteras, raramente trilobadas, acorazonadas y acuminadas, pubescentes en ambas caras.",
    "América tropical. Cultivada como ornamental y subespontánea en cercos y escombros. Nombre vulgar: campanilla, suspiros."
  ),
  ipomoea_congesta: species(
    "ipomoea_congesta",
    "Ipomoea congesta",
    "111. Convolvulaceae",
    "Enredadera perenne, con tallos pubescentes.",
    "Ovario tricarpelar, glabro; sépalos lanceolados, largamente atenuado-caudados, seríceo-pubescentes en la base; corola lilácea de 6-8 cm; hojas orbicular-ovadas, onduladas o trilobadas, pubescentes en el haz y plateado-canescentes en el envés; cimas generalmente trifloras.",
    "América cálida. Cultivada como enredadera ornamental y con frecuencia subespontánea. Otoño. Nombre vulgar: campanilla, suspiros."
  ),
  ipomoea_bonariensis: species(
    "ipomoea_bonariensis",
    "Ipomoea bonariensis",
    "111. Convolvulaceae",
    "Enredadera perenne, con tallos pubescentes.",
    "Sépalos membranáceos o coriáceos, obtusos; semillas con largos pelos seríceos en los bordes; hojas acorazonadas, enteras u obtusamente 3-5-lobuladas, seríceo-pubescentes, especialmente en el envés; flores en cimas plurifloras largamente pedunculadas; corola rosada de 4-7 cm; cápsulas esféricas.",
    "Endémica de la región platense. Común durante el verano en los bosques de la ribera y del Delta."
  ),
  ipomoea_platensis: species(
    "ipomoea_platensis",
    "Ipomoea platensis",
    "111. Convolvulaceae",
    "Hierba perenne, voluble, glabra.",
    "Hojas profundamente palmatisectas, con 5-9 segmentos estrechamente lanceolados, enteros, de 7-10 cm; cimas axilares paucifloras, largamente pedunculadas; sépalos coriáceos, obtusos; corola acampanado-infundibuliforme, rosada o lilácea, de 5-7 cm; cápsulas esféricas.",
    "Regiones cálidas de América, hasta el Río de la Plata. Común en los bosques del Delta y de la ribera. Verano."
  ),
  ipomoea_cairica: species(
    "ipomoea_cairica",
    "Ipomoea cairica",
    "111. Convolvulaceae",
    "Hierba perenne, voluble, glabra.",
    "Hojas profundamente palmatisectas, con 5 segmentos anchamente lanceolados, mucronados en el ápice, de 4-6 cm; cimas paucifloras, con frecuencia unifloras; sépalos obtusos, mucronulados; corola violácea o lilácea, de 4-6 cm; cápsulas esféricas.",
    "Regiones cálidas del globo. Muy común en cercos y bosques. Otoño."
  ),
  ipomoea_alba: species(
    "ipomoea_alba",
    "Ipomoea alba",
    "111. Convolvulaceae",
    "Hierba perenne, glabra o algo pubescente, con tallos rastreros y volubles.",
    "Estambres y estilo largos, sobresalientes; flores blancas; sépalos largamente atenuado-caudados; corola hipocraterimorfa de 10-15 cm, con tubo estrecho y limbo muy abierto; cápsula ovado-cónica; hojas inferiores acorazonadas y profundamente trilobadas, las superiores acorazonadas y enteras.",
    "Regiones cálidas del globo. Común en los bosques del Delta y de la ribera. Frecuentemente cultivada. Nombre vulgar: dama de noche."
  ),
  ipomoea_indivisa: species(
    "ipomoea_indivisa",
    "Ipomoea indivisa",
    "111. Convolvulaceae",
    "Enredadera con flores rojas de 1,5-3 cm y semillas tomentosas.",
    "Hojas deltoideo-acorazonadas, acuminadas, con algún diente cerca de la base, de 4-6 cm; cimas 2-3-floras, largamente pedunculadas; sépalos obtusos, largamente mucronados.",
    "América cálida. Frecuente en el Delta y ribera del Plata. Verano."
  ),
  ipomoea_quamoclit: species(
    "ipomoea_quamoclit",
    "Ipomoea quamoclit",
    "111. Convolvulaceae",
    "Enredadera anual, glabra.",
    "Flores rojas, raramente blancas, de 1,5-3 cm; hojas profundamente pinatisectas, con segmentos lineales; sépalos elípticos, obtusos, mucronados; semillas tomentosas.",
    "India. Cultivada como planta ornamental y a veces escapada de los cultivos."
  ),
  convolvulus_laciniatus: species(
    "convolvulus_laciniatus",
    "Convolvulus laciniatus",
    "111. Convolvulaceae",
    "Hierba perenne, con tallos rastreros glabros o casi glabros.",
    "Hojas de contorno ovado, profundamente bipinatisectas, con raquis y segmentos lineales; flores axilares, solitarias, largamente pedunculadas; sépalos cortamente acuminados; corola blanca, de 10-15 mm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Frecuente en la estepa climax. Primavera."
  ),
  convolvulus_laciniatus_hirsutus: species(
    "convolvulus_laciniatus_hirsutus",
    "Convolvulus laciniatus var. hirsutus",
    "111. Convolvulaceae",
    "Variedad densamente tomentosa de Convolvulus laciniatus.",
    "Mantiene las hojas profundamente bipinatisectas de la especie, con raquis y segmentos lineales, flores axilares solitarias y corola blanca de 10-15 mm.",
    "Uruguay, Chile y nordeste de la Argentina. Rara en la estepa climax."
  ),
  convolvulus_hermanniae: species(
    "convolvulus_hermanniae",
    "Convolvulus hermanniae",
    "111. Convolvulaceae",
    "Hierba perenne, rastrera, densamente cubierta de vello aterciopelado amarillento o plateado.",
    "Hojas ovado-oblongas, obtusas, acorazonadas en la base, crenado-dentadas, densamente aterciopelado-velludas, de 15-35 mm; flores axilares solitarias o geminadas, largamente pedunculadas; sépalos acuminados, densamente velludos; corola blanca de unos 12 mm.",
    "América cálida. Muy común en la estepa climax. Primavera."
  ),
  convolvulus_arvensis: species(
    "convolvulus_arvensis",
    "Convolvulus arvensis",
    "111. Convolvulaceae",
    "Hierba perenne, rizomatosa, voluble o rastrera, glabra o muy laxamente pubescente.",
    "Hojas ovado-hastadas, obtusas, generalmente enteras, de 2-6 cm; flores solitarias o geminadas; sépalos obtusos de 3,5-4,5 mm; corola blanca de 20-35 mm.",
    "Europa; adventicia en América. Planta invasora de suelos modificados. Nombre vulgar: corregüela."
  ),
  convolvulus_bonariensis: species(
    "convolvulus_bonariensis",
    "Convolvulus bonariensis",
    "111. Convolvulaceae",
    "Hierba perenne, tendida o voluble.",
    "Hojas ovado-lanceoladas o lanceoladas, obtusas, hastado-sagitadas en la base, con aurículas divergentes, enteras o crenadas, de 3-11 cm; pubescencia muy fina y adpresa; flores en cimas 2-6-floras o solitarias; sépalos obtusos, mucronados, de 6-8 mm; corola blanco-rosada de 10-16 mm.",
    "Argentina, Chile y Uruguay. Rara en la región platense: Martínez, Núñez, etc."
  ),
  convolvulus_crenatifolius: species(
    "convolvulus_crenatifolius",
    "Convolvulus crenatifolius",
    "111. Convolvulaceae",
    "Hierba perenne, voluble o decumbente.",
    "Hojas elípticas u ovadas, enteras o crenadas, cordado-sagitadas en la base, con aurículas paralelas o convergentes, de 3-10 cm; pubescencia no adpresa; flores en cimas 2-6-floras o solitarias; sépalos elípticos, obtusos, de 7-10 mm; corola blanca de 14-25 mm.",
    "América austral. Escasa en la región."
  ),
  calystegia_sepium_americana: species(
    "calystegia_sepium_americana",
    "Calystegia sepium var. americana",
    "111. Convolvulaceae",
    "Hierba perenne, voluble, glabra.",
    "Hojas ovadas o triangulares, acuminadas en el ápice y hastadas en la base, enteras, de hasta 10 cm por 6 cm; flores axilares, solitarias, largamente pedunculadas; brácteas foliáceas de 15-20 mm; corola blanca o rosada, amplia, de unos 5 cm.",
    "Regiones cálidas de todo el globo. Frecuente en los pajonales del Delta y ribera del Plata. Primavera."
  ),
  calystegia_soldanella: species(
    "calystegia_soldanella",
    "Calystegia soldanella",
    "111. Convolvulaceae",
    "Hierba perenne, rizomatosa, glabra.",
    "Hojas orbicular-reniformes, algo carnosas, enteras, de 1-2 cm de diámetro; brácteas ovales u oval-orbiculares, de 8 mm; corola purpúrea o rosada, de 2,5-4 cm; flores axilares solitarias.",
    "Europa. Adventicia en regiones litorales de casi todo el mundo. Accidental en la región, frecuente en las dunas del este de Buenos Aires."
  ),
  solanaceae: family(
    "solanaceae",
    "116. Solanaceae",
    "Dicotiledóneas del Grupo E.",
    "Óvulos generalmente más de dos por carpelo sobre placentas axilares."
  ),
  physalis_viscosa: species(
    "physalis_viscosa",
    "Physalis viscosa",
    "116. Solanaceae",
    "Hierba perenne, rizomatosa, de 20-50 cm de alto, con tallos ramosos y cortamente pubescentes.",
    "Fruto baya envuelto por un cáliz muy acrescente en forma de vejiga membranosa; hojas ovadas, sinuadas y pecioladas; flores amarillas; bayas anaranjadas, globosas, encerradas por el cáliz de 25-35 mm.",
    "América cálida. Común en suelos modificados. Nombre vulgar: camambú."
  ),
  jaborosa_integrifolia: species(
    "jaborosa_integrifolia",
    "Jaborosa integrifolia",
    "116. Solanaceae",
    "Hierba perenne, acaule y glabra, con rizomas horizontales de los cuales nacen directamente hojas y flores.",
    "Planta acaule con flores nacidas de una roseta de hojas; hojas pecioladas, elípticas, enteras o dentadas; flores solitarias largamente pedunculadas; corola blanca hipocraterimorfa, con tubo de 4-6 cm y limbo pentalobado.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Muy frecuente en suelos húmedos. Nombre vulgar: flor de sapo."
  ),
  jaborosa_runcinata: species(
    "jaborosa_runcinata",
    "Jaborosa runcinata",
    "116. Solanaceae",
    "Hierba perenne, rizomatosa, con hojas en roseta basal, glabras y pecioladas.",
    "Planta acaule; hojas obovadas, sinuado-runcinadas; flores solitarias, largamente pedunculadas, naciendo del centro de la roseta; corola blanca acampanada, con tubo de 1 cm y limbo abierto de 3 cm de diámetro.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en suelos húmedos. Nombre vulgar: flor de sapo."
  ),
  salpichroa_origanifolia: species(
    "salpichroa_origanifolia",
    "Salpichroa origanifolia",
    "116. Solanaceae",
    "Hierba perenne, rizomatosa, laxamente pubescente, de 30-50 cm de alto, con tallos ascendentes.",
    "Fruto baya; corola urceolada; hojas inferiores opuestas y superiores alternas, pecioladas, ovado-redondeadas, enteras o sinuadas; flores axilares, solitarias y pedunculadas; corola blanca de 7-8 mm; bayas blancas, dulces, de 15-20 mm.",
    "Sur del Brasil, Uruguay y norte y centro de la Argentina. Adventicia en Europa. Nombre vulgar: huevito de gallo."
  ),
  lycium_cestroides: species(
    "lycium_cestroides",
    "Lycium cestroides",
    "116. Solanaceae",
    "Arbusto de 1-3 m de alto, ramoso, espinoso y cortamente pubescente.",
    "Arbusto espinoso con fruto baya; corola tubulosa, violácea, con lóbulos muy cortos; hojas alternas o fasciculadas, ovado-lanceoladas, atenuadas en corto pecíolo; flores solitarias o en fascículos de 2-6; bayas globosas u ovoideas.",
    "Sur de Bolivia, Uruguay y norte y centro de la Argentina. En bosques xerófilos."
  ),
  lycium_chilense: species(
    "lycium_chilense",
    "Lycium chilense",
    "116. Solanaceae",
    "Arbusto bajo, densamente ramoso, con ramas espiniformes.",
    "Arbusto espinoso con fruto baya; corola infundibuliforme, blanco-verdosa, con tubo de 3-5 mm y lóbulos abiertos; hojas oblanceoladas u obovadas, cortamente pubescentes; flores generalmente solitarias; frutos rojos, ovoideos.",
    "Chile y Argentina. Hallado en las barrancas del Paraná: Campana, San Nicolás, etc."
  ),
  grabowskia_duplicata: species(
    "grabowskia_duplicata",
    "Grabowskia duplicata",
    "116. Solanaceae",
    "Arbustito achaparrado, con ramas redondeadas y espinas rectas cortas.",
    "Fruto drupáceo con dos carozos biloculares; hojas anchamente ovadas o redondeadas, glaucas, atenuadas en corto pecíolo y onduladas en el margen; flores en fascículos axilares; cáliz corto pentadentado; corola blanca con tubo de 6-7 mm.",
    "Sur del Brasil y nordeste de la Argentina, hasta las barrancas del Paraná: San Nicolás, San Pedro, etc."
  ),
  cestrum_parqui: species(
    "cestrum_parqui",
    "Cestrum parqui",
    "116. Solanaceae",
    "Arbusto de 1-3 m de alto, ramoso, glabro y fétido.",
    "Arbusto sin espinas; cáliz tubuloso, atenuado en la base, 5-dentado, de 5-6 mm; hojas cortamente pecioladas, lanceoladas y agudas; flores en racimos; corola amarilla de unos 2 cm; bayas casi negras de 4-5 mm.",
    "América cálida. Frecuente en bosques de la ribera y suelos modificados. Tóxica para el ganado. Nombre vulgar: duraznillo negro."
  ),
  cestrum_sellowianum: species(
    "cestrum_sellowianum",
    "Cestrum sellowianum",
    "116. Solanaceae",
    "Arbusto de 1-2 m de alto, ramoso, glabro y fétido.",
    "Arbusto sin espinas; cáliz acampanado, contraído en la base, 5-dentado, de 3-4 mm; hojas lanceoladas; corola amarilla de 16-20 mm.",
    "Región platense. Común en bosques del Delta y de la ribera platense."
  ),
  sclerophylax_spinescens: species(
    "sclerophylax_spinescens",
    "Sclerophylax spinescens",
    "116. Solanaceae",
    "Hierba perenne difusa, con tallos rastreros o ascendentes.",
    "Fruto cápsula con 1-2 semillas; cáliz con segmentos acrescentes frecuentemente espinosos; hojas alternas, espatuladas y carnosas; flores axilares; cáliz acrescente con 2-3 lóbulos transformados en espinas después de la antesis.",
    "Suelos salobres del centro de la Argentina. Rara en la región, más común en Pergamino."
  ),
  datura_ferox: species(
    "datura_ferox",
    "Datura ferox",
    "116. Solanaceae",
    "Hierba anual, glabra, de unos 50 cm de alto.",
    "Fruto cápsula espinosa, 4-valva; flores blancas solitarias; hojas alternas, pecioladas, anchamente ovado-elípticas y groseramente dentadas; cáliz tubuloso, anguloso; corola blanca infundibuliforme de 5-6 cm; cápsulas ovoideas cubiertas de largas espinas.",
    "Asia; adventicia en América. Semillas venenosas. Nombre vulgar: chamico."
  ),
  petunia_axillaris: species(
    "petunia_axillaris",
    "Petunia axillaris",
    "116. Solanaceae",
    "Hierba perenne de alrededor de 0,5 m de alto, glanduloso-pubescente.",
    "Cápsula sin espinas; estambres fértiles 5; flores solitarias o en cimas paucifloras; corola con tubo cilíndrico ensanchado gradualmente hacia el limbo; flores blancas con corola de 5-7 cm; hojas alternas, sésiles, oblanceolado-espatuladas, enteras y viscoso-pubescentes.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en barrancas del Paraná, terraplenes ferroviarios y suelos calcáreos."
  ),
  petunia_parviflora: species(
    "petunia_parviflora",
    "Petunia parviflora",
    "116. Solanaceae",
    "Hierba anual o perenne, con tallos rastreros, glanduloso-pubescentes.",
    "Flores violáceas; hojas lineal-espatuladas, carnosas, pequeñas; flores solitarias; cáliz 5-secto; corola de 6-9 mm.",
    "América templado-cálida. Muy frecuente en suelos bajos y arcillosos."
  ),
  petunia_violacea: species(
    "petunia_violacea",
    "Petunia violacea",
    "116. Solanaceae",
    "Hierba perenne, anual en cultivo, de unos 60 cm de alto, glanduloso-pubescente.",
    "Flores violáceas; hojas opuestas, ovado-romboideas, agudas, atenuadas en corto pecíolo y glabriúsculas; flores axilares, pedunculadas; cáliz glanduloso-hirsuto; corola hirsuta de 2,5-4 cm; cápsulas ovoideas.",
    "Brasil, Uruguay y nordeste de la Argentina. Cultivada como ornamental y rara en rastrojos, baldíos, etc."
  ),
  nierembergia_repens: species(
    "nierembergia_repens",
    "Nierembergia repens",
    "116. Solanaceae",
    "Hierba perenne, rastrera, radicante, glabra o pubescente.",
    "Cápsula sin espinas; corola con tubo largo y muy estrecho, dilatado bruscamente en limbo campanado o cupuliforme; hojas ovadas o espatuladas, enteras, atenuadas en largo pecíolo; flores solitarias; corola blanca con tubo de 3-6 cm.",
    "Oeste y sur de la América austral. Frecuente en céspedes del Delta y de la ribera platense."
  ),
  nierembergia_hippomanica: species(
    "nierembergia_hippomanica",
    "Nierembergia hippomanica",
    "116. Solanaceae",
    "Hierba perenne multicaule, con numerosos tallos que forman matas hemisféricas.",
    "Hojas lanceoladas o lineales y estigma semilunar; hojas densas, espatulado-lineales, pubescentes, de 4-8 mm; flores en cimas terminales; cáliz de 7-8 mm; corola blanca o rosada.",
    "Argentina central. Rara en la región. Tóxica para el ganado. Nombre vulgar: chuscho."
  ),
  nierembergia_aristata: species(
    "nierembergia_aristata",
    "Nierembergia aristata",
    "116. Solanaceae",
    "Hierba perenne con rizomas delgados.",
    "Hojas lanceoladas o lineales y estigma capitado; tallos erectos, ondulados, glabros o apenas pubescentes; hojas estrechamente lineales; flores solitarias o en cimas paucifloras; cáliz cilíndrico con lóbulos lineales largos; corola blanca.",
    "Centro de la Argentina. Rara en la región, más frecuente en el oeste de la provincia de Buenos Aires."
  ),
  nierembergia_stricta: species(
    "nierembergia_stricta",
    "Nierembergia stricta",
    "116. Solanaceae",
    "Hierba perenne, rizomatosa, de 10-40 cm de alto, con tallos erectos, sencillos y laxamente hojosos.",
    "Hojas lanceoladas o lineales y estigma capitado; tallos rectos; tubo corolino de unos 25 mm y limbo de unos 20 mm; hojas lanceoladas; flores azuladas, solitarias o laxamente cimosas.",
    "Norte y centro de la Argentina. Frecuente en la región platense: Delta, San Pedro, Magdalena, etc."
  ),
  nierembergia_prostrata: species(
    "nierembergia_prostrata",
    "Nierembergia prostrata",
    "116. Solanaceae",
    "Hierba con tallos rastreros delgados, glabros.",
    "Hojas lanceoladas o lineales y estigma capitado; tallos rectos; tubo corolino de 8-12 mm y limbo de 10 mm; hojas algo carnosas, lanceolado-lineales; flores solitarias; cáliz de 18 mm; corola violácea.",
    "Endémica de la región platense: Ramos Mejía."
  ),
  nicotiana_glauca: species(
    "nicotiana_glauca",
    "Nicotiana glauca",
    "116. Solanaceae",
    "Arbusto de 3-4 m de alto, glauco y glabro.",
    "Cápsula sin espinas; flores en racimos o panojas definidas; hojas pecioladas, ovadas, enteras o sinuadas, grandes; flores numerosas en racimos definidos; cáliz acampanado, 5-dentado; corola tubulosa, amarilla, de 3-4 cm.",
    "Sur de Bolivia y norte de la Argentina. Adventicia y cultivada en muchas regiones cálidas del globo. Nombre vulgar: palán-palán."
  ),
  nicotiana_longiflora: species(
    "nicotiana_longiflora",
    "Nicotiana longiflora",
    "116. Solanaceae",
    "Hierba perenne de alrededor de medio metro de alto, escabrosa.",
    "Hierba de flores blancas; corola de 6-13 cm, con tubo angosto y limbo abierto; hojas radicales ovado-lanceoladas, onduladas y atenuadas en corto pecíolo; hojas caulinares escasas, lanceoladas y abrazadoras; flores en racimos definidos laxos.",
    "América cálida. Frecuente en suelos húmedos. Nombre vulgar: flor de sapo."
  ),
  nicotiana_bonariensis: species(
    "nicotiana_bonariensis",
    "Nicotiana bonariensis",
    "116. Solanaceae",
    "Hierba perenne con tallos erectos, ramosos y pubescentes, de 25-60 cm de alto.",
    "Hierba de flores blancas o violáceo-verdosas; corola de 2,5-3 cm; hojas basales en roseta, obovadas, obtusas, atenuadas en la base, irregularmente crenadas y pubescentes; hojas caulinares lineal-lanceoladas y abrazadoras; flores en racimos o panojas laxas.",
    "Uruguay y nordeste de la Argentina. Rara cerca de Buenos Aires: Dock Sur."
  ),
  bouchetia_anomala: species(
    "bouchetia_anomala",
    "Bouchetia anomala",
    "116. Solanaceae",
    "Hierba perenne, erecta, corta y densamente pubescente, de 20-50 cm de alto.",
    "Cápsula sin espinas; estambres fértiles 4; corola corta; hojas alternas, oblanceoladas y enteras; flores blancas, largamente pedunculadas, en racimo definido muy laxo; cáliz algo acrescente; corola de cerca de 10 mm.",
    "Norte y centro de la Argentina y Uruguay. Bastante escasa en la estepa clímax: Elizalde."
  ),
  solanum_chacoense: species(
    "solanum_chacoense",
    "Solanum chacoense",
    "116. Solanaceae",
    "Hierba con tubérculos, con tallos de 20-40 cm de alto.",
    "Plantas con tubérculos subterráneos; hojas de 10-20 cm, laxamente pilosas, imparipinaticompuestas, con 3-5 pares de segmentos ovados grandes alternando con segmentos diminutos; flores blancas o azuladas en cimas corimbiformes terminales; bayas de cerca de 1 cm.",
    "Paraguay, Uruguay y norte de la Argentina. Frecuente en suelos calcáreos y terraplenes ferroviarios."
  ),
  solanum_commersonii: species(
    "solanum_commersonii",
    "Solanum commersonii",
    "116. Solanaceae",
    "Hierba perenne con tubérculos, con tallos ascendentes de 10-20 cm de alto.",
    "Plantas con tubérculos subterráneos; hojas de 8-12 cm, profundamente imparipinatisectas, con lóbulo terminal muy grande y 2-3 pares de segmentos elípticos menores hacia la base; flores azules en cimas terminales.",
    "Uruguay y norte de la provincia de Buenos Aires, en suelos arenosos."
  ),
  solanum_bonariense: species(
    "solanum_bonariense",
    "Solanum bonariense",
    "116. Solanaceae",
    "Arbusto de alrededor de 1,5 m de alto, con pubescencia estrellada muy laxa.",
    "Planta sin tubérculos, con aguijones en ramas jóvenes o sin ellos; hojas pecioladas, anchamente elípticas, enteras, sinuadas o cortamente lobuladas; flores blancas en cimas corimbiformes terminales.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Muy frecuente en el Delta y en los bosques de la ribera del Plata."
  ),
  solanum_sisymbriifolium: species(
    "solanum_sisymbriifolium",
    "Solanum sisymbriifolium",
    "116. Solanaceae",
    "Sufrútice de 50-80 cm de alto, densamente glanduloso-pubescente, con largos aguijones amarillos.",
    "Planta sin tubérculos, con aguijones; hojas profundamente pinatisectas, con segmentos lobados y largos aguijones amarillos sobre las nervaduras; flores azules o blancas en cimas; bayas de 10-12 mm.",
    "América del Sur templado-cálida. Frecuente en ambientes antropógenos. Nombre vulgar: revienta-caballos."
  ),
  solanum_platense: species(
    "solanum_platense",
    "Solanum platense",
    "116. Solanaceae",
    "Sufrútice apoyante de cerca de 1 m de alto.",
    "Tallos cubiertos de aguijones rectos densos; hojas pecioladas, ovadas, redondeadas o acorazonadas en la base, sinuado-dentadas, con pelos estrellados ralos y aguijones cortos en ambas caras; flores extraaxilares, geminadas, con corola blanca o celeste; bayas semidehiscentes.",
    "Región del Plata. Rara en los bosques del Delta y de la ribera del Plata."
  ),
  solanum_eleagnifolium: species(
    "solanum_eleagnifolium",
    "Solanum eleagnifolium",
    "116. Solanaceae",
    "Sufrútice rizomatoso, erecto, de 30-50 cm de alto, cubierto de pelos estrellados.",
    "Planta con aguijones amarillos cortos en tallos y hojas; hojas oblongo-lanceoladas, sinuadas; flores azules, solitarias, axilares y terminales; bayas de 1 cm.",
    "América templado-cálida. Frecuente en suelos fértiles."
  ),
  solanum_meloncillo: species(
    "solanum_meloncillo",
    "Solanum meloncillo",
    "116. Solanaceae",
    "Hierba perenne con raíces gemíferas, de 15-25 cm de alto, cubierta de pelos estrellados.",
    "Planta con aguijones amarillos largos sobre tallos y hojas; hojas pecioladas, anchamente ovado-elípticas y lobadas; flores azuladas, solitarias o en cimas apicales paucifloras; bayas de 1,5-2 cm.",
    "Centro y este de la Argentina. Común en suelos removidos. Nombre vulgar: meloncillo de olor."
  ),
  solanum_pyrethrifolium: species(
    "solanum_pyrethrifolium",
    "Solanum pyrethrifolium",
    "116. Solanaceae",
    "Hierba anual, ramosa, con tallos tendidos cubiertos de pelos rígidos.",
    "Planta sin aguijones, de hojas profundamente partidas; flores en cimas laterales pedunculadas; hojas profundamente pinatisectas, con raquis lineal y 3-5 pares de segmentos lineales muy agudos; bayas de 10 mm.",
    "Norte y centro de la Argentina. Rara cerca de la Capital Federal, en vías férreas."
  ),
  solanum_radicans: species(
    "solanum_radicans",
    "Solanum radicans",
    "116. Solanaceae",
    "Hierba perenne, ramosa y laxamente pubescente, con tallos tendidos o ascendentes, angulosos y radicantes.",
    "Planta sin aguijones, con hojas profundamente partidas; hojas trisectas, con segmentos ovado-lanceolados y el central mayor; flores en racimos o corimbos opuestos a las hojas; bayas de 3-4 mm.",
    "Perú, Bolivia, norte de Chile y norte de la Argentina. Muy rara en la región: Capital Federal e Isla Martín García."
  ),
  solanum_angustifidum: species(
    "solanum_angustifidum",
    "Solanum angustifidum",
    "116. Solanaceae",
    "Arbusto de 1-2 m de alto, glabérrimo.",
    "Planta sin aguijones, erecta o enredadera, con flores en cimas corimbiformes terminales plurifloras; hojas profundamente pinatisectas con segmento terminal lineal-lanceolado y segmentos laterales angostos; flores azules o violáceas; bayas glabras.",
    "Norte y centro de la Argentina. Raro en la región: Rojas, San Pedro, etc., en cercos. Nombre vulgar: jazmín."
  ),
  solanum_jasminoides: species(
    "solanum_jasminoides",
    "Solanum jasminoides",
    "116. Solanaceae",
    "Sufrútice voluble, glabro, con tallos angulosos.",
    "Planta sin aguijones, con hojas profundamente partidas y polimorfas: algunas enteras, otras trífidas y otras pinatisectas; flores azul-violáceas; bayas globosas, negras.",
    "Brasil; cultivada como ornamental. Rara en la región: Delta y Cruz Colorada."
  ),
  solanum_pygmaeum: species(
    "solanum_pygmaeum",
    "Solanum pygmaeum",
    "116. Solanaceae",
    "Planta decumbente o ascendente, de 10-20 cm de alto.",
    "Planta sin aguijones; hojas enteras, dentadas o lobadas, cortamente pecioladas, ovadas, con 1-2 lóbulos cortos a cada lado en la parte inferior; flores blancas en cimas extraaxilares o terminales largamente pedunculadas; bayas negras de 5 mm.",
    "Endémica de la región, en campos de vegetación prístina."
  ),
  solanum_amygdalifolium: species(
    "solanum_amygdalifolium",
    "Solanum amygdalifolium",
    "116. Solanaceae",
    "Enredadera arbustiva, con tallos apoyantes muy angulosos y glabros.",
    "Planta voluble sin aguijones; hojas pecioladas, lanceoladas, agudas, enteras y glabras; flores azules en cimas corimbiformes laxas.",
    "Sur del Brasil, Uruguay y norte de la Argentina. Frecuente en cercos y pajonales. Nombre vulgar: jazmín de Córdoba."
  ),
  solanum_boerhaviaefolium: species(
    "solanum_boerhaviaefolium",
    "Solanum boerhaviaefolium",
    "116. Solanaceae",
    "Enredadera leñosa de varios metros de altura.",
    "Planta voluble sin aguijones; tallos cilíndricos, pubescentes o glabros; hojas largamente pecioladas, ovadas y enteras; flores azules en cimas laxas.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en bosques del Delta y de la ribera platense."
  ),
  solanum_basilobum: species(
    "solanum_basilobum",
    "Solanum basilobum",
    "116. Solanaceae",
    "Hierba perenne, erecta, de 1 m de alto.",
    "Planta sin aguijones; cimas corimbiformes 5-15-floras, largamente pedunculadas; hojas largamente pecioladas, ovadas, enteras o con 1-2 lóbulos basales; corola blanca con lóbulos lanceolados angostos; bayas de 4 mm.",
    "Nordeste de la Argentina. Frecuente en el Delta."
  ),
  solanum_pulchrilobum: species(
    "solanum_pulchrilobum",
    "Solanum pulchrilobum",
    "116. Solanaceae",
    "Hierba perenne de 60-80 cm de alto.",
    "Planta sin aguijones; cimas corimbiformes 5-15-floras, largamente pedunculadas; hojas pecioladas, ovadas, con 1-5 lóbulos a cada lado; corolas blanco-violáceas; bayas de 6-7 mm.",
    "Paraguay y nordeste de la Argentina, hasta el Delta y la ribera del Plata."
  ),
  solanum_adventitium: species(
    "solanum_adventitium",
    "Solanum adventitium",
    "116. Solanaceae",
    "Hierba anual de cerca de 1 m de alto.",
    "Planta sin aguijones; cimas generalmente umbeliformes, 2-5-floras; tallos glabros con dilataciones aliformes angostas; hojas ovado-triangulares con 2-3 lóbulos agudos a cada lado de la base; flores blancas; bayas con corpúsculos pétreos.",
    "Frecuente en el Delta y en la ribera: Campana, Delta, Los Talas, etc."
  ),
  solanum_sarachoides: species(
    "solanum_sarachoides",
    "Solanum sarachoides",
    "116. Solanaceae",
    "Hierba anual, divaricado-ramosa.",
    "Planta sin aguijones; tallos pubescentes y angulosos; tallos y hojas con pubescencia glandulosa; hojas ovadas, pecioladas e irregularmente dentadas; cimas 2-5-floras; cáliz acrescente; bayas con corpúsculos pétreos.",
    "Uruguay y nordeste de la Argentina. Hallada en el Delta y en Pergamino."
  ),
  solanum_gracile: species(
    "solanum_gracile",
    "Solanum gracile",
    "116. Solanaceae",
    "Sufrútice de algo más de 0,5 m de alto, densamente pubescente.",
    "Planta sin aguijones; tallos y hojas con pubescencia no glandulosa; cáliz no acrescente y bayas sin corpúsculos pétreos; hojas ovado-lanceoladas, enteras o apenas sinuadas; flores blancas en cimas 3-4-floras largamente pedunculadas; bayas oscuras.",
    "América templado-cálida. Frecuente en el Delta y en bosquecillos de la ribera."
  ),
  solanum_sublobatum: species(
    "solanum_sublobatum",
    "Solanum sublobatum",
    "116. Solanaceae",
    "Sufrútice de 0,5-1 m de alto, ramoso y laxamente pubescente.",
    "Planta sin aguijones; hojas ovadas, con 1-3 lóbulos obtusos a cada lado cerca de la base; cimas 2-5-floras, largamente pedunculadas; corolas blancas; bayas casi negras.",
    "Región platense, especialmente en suelos algo húmedos. Nombre vulgar: yerba mora."
  ),
  solanum_pseudocapsicum: species(
    "solanum_pseudocapsicum",
    "Solanum pseudocapsicum",
    "116. Solanaceae",
    "Sufrútice de cerca de 0,5 m de alto, glabérrimo.",
    "Planta sin aguijones; cimas sésiles o subsésiles o flores solitarias; hojas lanceoladas, enteras; flores blancas, solitarias o en cimas extraaxilares sésiles, paucifloras; bayas grandes, anaranjadas o rojas.",
    "Isla Madeira. Frecuente en América cálida; se halla en el Delta y en la ribera del Plata."
  ),
  solanum_diflorum: species(
    "solanum_diflorum",
    "Solanum diflorum",
    "116. Solanaceae",
    "Sufrútice de cerca de medio metro de alto, con pelos estrellados esparcidos.",
    "Planta sin aguijones; hojas ovado-lanceoladas, enteras; cimas 2-4-floras, sésiles; corolas blancas; bayas rojas.",
    "América cálida. Muy común en la región."
  ),
  solanum_glaucum: species(
    "solanum_glaucum",
    "Solanum glaucum",
    "116. Solanaceae",
    "Arbusto rizomatoso, glauco, de 1-1,5 m de alto.",
    "Planta sin aguijones; flores en cimas seudoterminales plurifloras; hojas lanceoladas, cortamente pecioladas, enteras, glaucas; flores azules; bayas negro-azuladas, grandes.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Muy frecuente en suelos bajos muy húmedos, formando duraznillales o varillales. Nombre vulgar: duraznillo blanco."
  ),
  solanum_verbascifolium: species(
    "solanum_verbascifolium",
    "Solanum verbascifolium",
    "116. Solanaceae",
    "Arbolito de 4-6 m de alto, con ramitas y hojas densamente tomentosas.",
    "Planta sin aguijones; hojas ovadas o elípticas, pecioladas, elíptico-lanceoladas, con pecíolo auriculado y lámina entera; cimas seudoterminales plurifloras; corolas azuladas.",
    "Regiones cálidas. Muy común en el norte de la Argentina; cerca de Buenos Aires crece espontáneamente en Palermo y en el Bosque de Eva Perón. Nombre vulgar: fumo bravo."
  ),
  aristolochiaceae: family(
    "aristolochiaceae",
    "42. Aristolochiaceae",
    "Dicotiledóneas del Grupo E.",
    "Ovario ínfero; perigonio corolino tubuloso cigomorfo; estambres y gineceo unidos."
  ),
  aristolochia_macroura: species(
    "aristolochia_macroura",
    "Aristolochia macroura",
    "42. Aristolochiaceae",
    "Planta voluble robusta.",
    "Hojas profundamente trilobadas, glabras en el haz y cortamente pubescentes en el envés; perigonio de 9-10 cm, con limbo ovado-acorazonado terminado en un larguísimo apéndice lineal.",
    "Sur del Brasil y NE de la Argentina, hasta el Delta del Paraná."
  ),
  aristolochia_fimbriata: species(
    "aristolochia_fimbriata",
    "Aristolochia fimbriata",
    "42. Aristolochiaceae",
    "Hemicriptófita con raíces muy gruesas y tallos ascendentes de 30-40 cm.",
    "Hojas reniformes y glabras; limbo del perigonio reniforme, fimbriado en el margen, con manchas purpúreas; cápsulas oblongas.",
    "Sur del Brasil, Paraguay, Uruguay y NE de la Argentina; cerca de Buenos Aires en bosques prístinos. N. v.: patito."
  ),
  aristolochia_stuckertii: species(
    "aristolochia_stuckertii",
    "Aristolochia stuckertii",
    "42. Aristolochiaceae",
    "Hierba pequeña, rizomatosa, con raíces napiformes y tallos rastreros.",
    "Hojas ovado-triangulares, cordadas y enteras; limbo del perigonio lanceolado; flores axilares solitarias, amarillentas, pubescentes, de 2 cm; cápsulas obovoideas.",
    "Centro de la Argentina; rara cerca de Buenos Aires, citada para Pergamino y Campana."
  ),
  aristolochia_triangularis: species(
    "aristolochia_triangularis",
    "Aristolochia triangularis",
    "42. Aristolochiaceae",
    "Planta voluble robusta.",
    "Hojas triangulares; limbo del perigonio redondeado, con manchas pardas; flores solitarias, axilares, rosadas, de unos 4 cm; cápsulas elipsoideas.",
    "Brasil meridional, Paraguay, Uruguay y NE de la Argentina, hasta la Isla Martín García."
  ),
  compositae: family(
    "compositae",
    "130. Compositae",
    "Dicotiledóneas del Grupo E.",
    "Flores en capítulos; ovario unilocular uniovulado; anteras unidas en tubo y estilo bífido."
  ),
  vernonia_rubricaulis_var_australis: species(
    "vernonia_rubricaulis_var_australis",
    "Vernonia rubricaulis var. australis",
    "130. Compositae - Vernonieae",
    "Sufrútice de 40-100 cm de alto, con grueso xilopodio y tallos rojizos ramosos.",
    "Capítulos en panojas de cincinios, con brácteas casi iguales a las hojas; hojas lineales, dentadas, casi glabras en el haz y densamente tomentosas en el envés; involucro hemisférico con brácteas lanceoladas tomentulosas.",
    "Especie ampliamente distribuida por América cálida; la variedad se halla en Uruguay y norte y centro de la Argentina. Poco frecuente en la estepa clímax. Nombre vulgar: quiebra-arado."
  ),
  vernonia_echioides: species(
    "vernonia_echioides",
    "Vernonia echioides",
    "130. Compositae - Vernonieae",
    "Hierba perenne, rizomatosa, con tallo erecto simple, de cerca de 1 m de alto.",
    "Tallo densamente hojoso inferiormente y casi desnudo hacia arriba; capítulos en panojas o umbelas de cincinios; brácteas involucrales obtusas, con margen membranoso coloreado; hojas lanceoladas o lineales, enteras o crenadas, estrigilloso-pubescentes, de 10-25 cm.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en bosques del Delta y de la ribera del Plata."
  ),
  vernonia_scorpioides_var_sororia: species(
    "vernonia_scorpioides_var_sororia",
    "Vernonia scorpioides var. sororia",
    "130. Compositae - Vernonieae",
    "Arbusto semitrepador de 2-3 m de alto.",
    "Hojas ovadas, acuminadas, aserradas, glabras en el haz y densamente pubescentes en el envés, de 6-9 cm; capítulos sésiles, en panojas de cincinios; involucro hemisférico de 5-6 mm, con brácteas agudas sin margen membranoso.",
    "América cálida. Común en selvas marginales del Delta y de la Isla Martín García."
  ),
  vernonia_flexuosa: species(
    "vernonia_flexuosa",
    "Vernonia flexuosa",
    "130. Compositae - Vernonieae",
    "Hemicriptófita con tubérculos o xilopodio leñosos y tallos erectos simples, laxamente pubescentes, de 40-80 cm.",
    "Hojas casi glabras, amontonadas en la parte inferior del tallo, enteras, de 5-14 cm; capítulos sésiles o casi, en cincinios apicales; involucro hemisférico de 10 mm.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Se halla en la estepa clímax. Nombre vulgar: quiebra-arados."
  ),
  vernonia_platensis: species(
    "vernonia_platensis",
    "Vernonia platensis",
    "130. Compositae - Vernonieae",
    "Hierba perenne, con tubérculos leñosos y tallos erectos simples, de 80-150 cm.",
    "Hojas densamente cubiertas de pubescencia gris, uniformemente distribuidas por todo el tallo, enteras o sinuadas, de 5-15 cm; capítulos en densas panojas de cincinios; involucro acampanado, seríceo-pubescente, de 6-7 mm.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en bosques del Delta y de la ribera platense."
  ),
  vernonia_nitidula: species(
    "vernonia_nitidula",
    "Vernonia nitidula",
    "130. Compositae - Vernonieae",
    "Arbusto glabro de 1-2 m de alto.",
    "Hojas glabras, obtusas, oblanceoladas, enteras o dentadas, de 1,5-4 cm; capítulos muy numerosos en amplias panojas de cimas corimbiformes; involucro turbinado de 5-6 mm, con brácteas pluriseriadas ovadas, obtusas y glabras.",
    "Suelos arenosos del sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Rara en el Delta y en Martín García. Nombre vulgar: chilca."
  ),
  vernonia_incana: species(
    "vernonia_incana",
    "Vernonia incana",
    "130. Compositae - Vernonieae",
    "Hemicriptófita con rizomas largos y tallos erectos simples, tomentulosos, de 30-60 cm.",
    "Hojas albo-tomentosas en la cara inferior, lanceoladas, enteras o aserradas, de 6-15 cm; capítulos en corimbos definidos de cimas, muy numerosos; involucro acampanado de 4-5 mm, más corto que las flores.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Crece en campos bajos y húmedos."
  ),
  vernonia_mollissima: species(
    "vernonia_mollissima",
    "Vernonia mollissima",
    "130. Compositae - Vernonieae",
    "Sufrútice de 40-60 cm de alto, con xilopodio fuerte y tallos erectos, ramosos, albo-tomentosos.",
    "Tallos hojosos hasta el ápice; hojas albo-tomentosas en la cara inferior, lanceoladas u oblongas, enteras, de 7-14 cm; capítulos pocos, largamente pedunculados, en corimbos definidos; involucro hemisférico de 8-10 mm, con brácteas lanceoladas tomentosas en el dorso.",
    "Sur del Brasil y norte de la Argentina hasta Córdoba y Buenos Aires. Rara en campos altos y secos."
  ),
  adenostemma_brasilianum: species(
    "adenostemma_brasilianum",
    "Adenostemma brasilianum",
    "130. Compositae - Eupatorieae",
    "Hierba anual erecta, de 50-80 cm de alto, con tallos sencillos y glabros.",
    "Hojas pecioladas, triangular-hastadas, dentadas, de 10-16 x 6-14 cm; capítulos apanojado-corimbosos; involucro hemisférico de 2-3 mm; flores blancas; papus formado por 3-5 pelos glandulosos cortos y rígidos.",
    "América tropical y subtropical. Común durante el otoño en bosques y pajonales del Delta y de la ribera platense."
  ),
  gymnocoronis_spilanthoides: species(
    "gymnocoronis_spilanthoides",
    "Gymnocoronis spilanthoides",
    "130. Compositae - Eupatorieae",
    "Hierba perenne, con tallos erectos glabros, de 1-1,5 m de alto.",
    "Hojas pecioladas, lanceoladas, aserradas, glabras, de 8-12 cm; capítulos corimbosos; involucro hemisférico de 4 mm; flores blancas; aquenios pentacostados, truncados en el ápice, sin papus.",
    "Sur del Brasil, Paraguay, Uruguay y norte de la Argentina. Común en la ribera platense; palustre. Nombre vulgar: jazmín del bañado."
  ),
  gymnocoronis_spilanthoides_var_subcordata: species(
    "gymnocoronis_spilanthoides_var_subcordata",
    "Gymnocoronis spilanthoides var. subcordata",
    "130. Compositae - Eupatorieae",
    "Variedad de Gymnocoronis spilanthoides con hojas mayores.",
    "Hojas mayores, ovadas y algo acorazonadas en la base; mantiene los capítulos corimbosos, flores blancas e involucro hemisférico del tipo.",
    "Vive junto con la variedad típica."
  ),
  stevia_multiaristata: species(
    "stevia_multiaristata",
    "Stevia multiaristata",
    "130. Compositae - Eupatorieae",
    "Sufrútice erecto de 40-60 cm de alto.",
    "Capítulos pocos, laxamente corimbosos, con pedicelos de 6-20 mm, más largos que el involucro; hojas densas, lineales o lineal-lanceoladas, ligeramente aserradas, pubescentes, de 3-5 cm x 2-6 mm; involucro de 8-9 mm; papus con 18-25 cerdas amarillentas.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Rara en campos secos."
  ),
  stevia_aristata: species(
    "stevia_aristata",
    "Stevia aristata",
    "130. Compositae - Eupatorieae",
    "Hierba perenne, brevemente pubescente, de 50-70 cm de alto.",
    "Capítulos numerosos, densamente corimbosos, con pedicelos de 0-4 mm; hojas ovado-rómbicas, aserradas, de 4-7 x 1,3-3 cm; involucro de 7-8 mm, con brácteas pubescentes; papus con 15-20 cerdas.",
    "Paraguay, Uruguay y nordeste de la Argentina. Se halla en los albardones del Delta."
  ),
  stevia_satureiaefolia: species(
    "stevia_satureiaefolia",
    "Stevia satureiaefolia",
    "130. Compositae - Eupatorieae",
    "Sufrútice erecto, ramoso en la base y densamente hojoso, de 20-50 cm de alto.",
    "Capítulos numerosos, densamente corimbosos, con pedicelos cortos; hojas lineales, enteras, obtusas, pubescentes, de 2-2,5 cm x 1-3 mm; involucro de 8 mm, con brácteas pubescentes; papus con 14-19 cerdas rojizas.",
    "Sur del Brasil, Uruguay y norte y centro de la Argentina. Común en barrancas del Paraná y terrenos calcáreos."
  ),
  eupatorium_hecatanthum: species(
    "eupatorium_hecatanthum",
    "Eupatorium hecatanthum",
    "130. Compositae - Eupatorieae",
    "Hierba anual erecta, de 60-90 cm de alto, con tallos pubescente-glandulosos.",
    "Receptáculo peludo, hemisférico; hojas opuestas, pecioladas, acorazonadas, aserradas, de 6-15 cm; capítulos en corimbos densos; involucro acampanado de 5-6 mm; flores 50-80, de color lila.",
    "Bolivia, sur del Brasil, Paraguay, Uruguay y norte de la Argentina. Común en suelos pantanosos del Delta y de la ribera platense; florece en otoño."
  ),
  eupatorium_laevigatum: species(
    "eupatorium_laevigatum",
    "Eupatorium laevigatum",
    "130. Compositae - Eupatorieae",
    "Arbusto glabérrimo, de 1-3 m de alto.",
    "Hojas lustrosas, opuestas, ovadas, cortamente pecioladas, aserradas, trinervadas, de 5-12 cm; capítulos corimbosos; involucro cilíndrico de 10 mm, 3-5 veces tan alto como grueso, con brácteas en 5-6 series; flores numerosas violetas.",
    "América cálida. Escaso en el Delta y en la ribera del Plata."
  ),
  eupatorium_hirsutum: species(
    "eupatorium_hirsutum",
    "Eupatorium hirsutum",
    "130. Compositae - Eupatorieae",
    "Sufrútice de 40-60 cm de alto, con tallos erectos densamente híspidos y hojosos hasta el ápice.",
    "Hojas generalmente alternas, casi sésiles, ovado-triangulares, truncadas en la base, crenadas, trinervadas, hirsutas; capítulos en corimbos densos; involucro cilíndrico de 5-6 mm con brácteas 4-seriadas; flores violáceas.",
    "Sur del Brasil, Paraguay, Uruguay y norte de la Argentina. Se halla en la estepa clímax."
  ),
  eupatorium_ivaefolium: species(
    "eupatorium_ivaefolium",
    "Eupatorium ivaefolium",
    "130. Compositae - Eupatorieae",
    "Sufrútice erecto, de 40-120 cm de alto, cubierto de pelos cortos y curvos densos.",
    "Hojas opuestas, pecioladas, lanceolado-lineales, atenuadas en la base, aserradas, trinervadas, de 3-7 cm; capítulos en corimbos amplios; involucro cilíndrico de 7-8 mm, con brácteas pluriseriadas semiglabras; flores purpúreas.",
    "América cálida. Rara en el Delta."
  ),
  eupatorium_buniifolium: species(
    "eupatorium_buniifolium",
    "Eupatorium buniifolium",
    "130. Compositae - Eupatorieae",
    "Arbusto densamente ramoso, de 1-2 m de alto.",
    "Hojas dimorfas, unas simples lineales y otras pinatisectas, con raquis y segmentos lineales; capítulos de 5-6 flores en panojas amplias cabizbajas; involucro cilíndrico de 6 mm, con brácteas morenas en 2-3 series; flores violáceas.",
    "Sur de Bolivia, Brasil, Paraguay, Uruguay y norte y centro de la Argentina. Gregario en campos altos y secos con vegetación prístina."
  ),
  eupatorium_tremulum: species(
    "eupatorium_tremulum",
    "Eupatorium tremulum",
    "130. Compositae - Eupatorieae",
    "Arbusto glabro, densamente ramoso, de 2-3 m de alto, con ramas jóvenes péndulas.",
    "Hojas pecioladas, opuestas, lineal-lanceoladas, uniformemente aserradas, trinervadas, de 6-14 cm; capítulos muy numerosos en panojas amplias péndulas; involucro cilíndrico de 5-6 mm; flores violáceas.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en márgenes de arroyos del Delta y de la ribera del Plata; florece en otoño. Fragante. Nombre vulgar: chilca."
  ),
  eupatorium_bupleurifolium: species(
    "eupatorium_bupleurifolium",
    "Eupatorium bupleurifolium",
    "130. Compositae - Eupatorieae",
    "Arbusto ramoso y pubescente, de 1-1,5 m de alto.",
    "Hojas sésiles, opuestas o alternas, oblongo-lanceoladas, enteras o subdentadas, puberulentas o glabras, glandulosas, de 5-12 cm; capítulos densamente corimbosos, con 5-6 flores; involucro cilíndrico de 7-8 mm; flores violáceas.",
    "Sur de Bolivia y Brasil, Paraguay, Uruguay y norte y centro de la Argentina. En pajonales del Delta; florece en primavera."
  ),
  eupatorium_commersonii: species(
    "eupatorium_commersonii",
    "Eupatorium commersonii",
    "130. Compositae - Eupatorieae",
    "Hemicriptófita con tallos erectos, sencillos o bifurcados, áspero-pubescentes, de 40-60 cm de alto.",
    "Tallos hojosos en la parte inferior y casi desnudos en la superior; hojas obovadas, lobuladas o pinatífidas, áspero-pubescentes en ambas caras; capítulos pocos, densamente corimbosos, con 15-25 flores; involucro acampanado de 5-6 mm.",
    "Uruguay y nordeste de la Argentina, hasta las sierras de Buenos Aires. Raro en campos secos."
  ),
  eupatorium_tanacetifolium: species(
    "eupatorium_tanacetifolium",
    "Eupatorium tanacetifolium",
    "130. Compositae - Eupatorieae",
    "Hemicriptófita con tallos erectos, sencillos o bifurcados, densamente pubescentes.",
    "Tallos densamente hojosos en la parte inferior y casi desnudos en la superior; hojas profundamente bipinatisectas, con segmentos lanceolados o lineales, densamente pubescentes; capítulos numerosos, densamente corimbosos, con 25-35 flores rosadas o violáceas.",
    "Sur del Brasil, Uruguay y nordeste y centro de la Argentina, hasta las sierras de Buenos Aires."
  ),
  eupatorium_tweedianum: species(
    "eupatorium_tweedianum",
    "Eupatorium tweedianum",
    "130. Compositae - Eupatorieae",
    "Sufrútice de 30-50 cm de alto, con tallos erectos poco ramificados, densa y cortamente pubescentes.",
    "Hojas lanceoladas o lineal-lanceoladas, opuestas, pecioladas, enteras o aserradas, densamente pubescentes, de 1,8-3,5 cm; capítulos numerosos corimbosos, con 18-24 flores violáceas o blancas; involucro acampanado de 4-5 mm.",
    "Sur del Brasil, Paraguay, Uruguay y norte de la Argentina. Rara en barrancas del Paraná; más común en las sierras de Tandil."
  ),
  eupatorium_inulaefolium_f_suaveolens: species(
    "eupatorium_inulaefolium_f_suaveolens",
    "Eupatorium inulaefolium f. suaveolens",
    "130. Compositae - Eupatorieae",
    "Arbusto rizomatoso, densa y cortamente pubescente, de 1-2 m de alto.",
    "Hojas opuestas, pecioladas, ovado-lanceoladas, aserradas, trinervadas, estrigilloso-pubescentes en el haz y lanuginosas en el envés, de 7-10 x 2-4 cm; capítulos numerosos en corimbos compuestos densos; involucro acampanado de 6 mm; flores blancas.",
    "América cálida. Muy común en lugares húmedos y sombreados; florece en otoño."
  ),
  eupatorium_lanigerum: species(
    "eupatorium_lanigerum",
    "Eupatorium lanigerum",
    "130. Compositae - Eupatorieae",
    "Hemicriptófita con tallos erectos o ascendentes, de 30-60 cm de alto, densamente pubérulos.",
    "Hojas alternas, raramente opuestas, lanceolado-rómbicas, cortamente pecioladas, aserradas, pubescentes en ambas caras, de 4-8 x 1,5-6 cm; capítulos numerosos en corimbos densos; involucro acampanado de 4-5 mm; flores blancas o rosadas.",
    "Sur de Bolivia y Brasil, Paraguay, Uruguay y norte de la Argentina. Rara cerca de Buenos Aires."
  ),
  eupatorium_betonicaeforme: species(
    "eupatorium_betonicaeforme",
    "Eupatorium betonicaeforme",
    "130. Compositae - Eupatorieae",
    "Hierba perenne de 60-90 cm de alto, con tallos erectos pubescentes.",
    "Receptáculo notablemente convexo; hojas ovadas u ovado-deltoideas, cordadas o hastadas en la base, crenadas, pubescentes, trinervadas, pecioladas, opuestas; capítulos en densos corimbos, con cerca de 35 flores purpúreas; involucro acampanado de 4-5 mm.",
    "Sur del Brasil, Uruguay y norte de la Argentina. Dudosa cerca de Buenos Aires."
  ),
  eupatorium_candolleanum: species(
    "eupatorium_candolleanum",
    "Eupatorium candolleanum",
    "130. Compositae - Eupatorieae",
    "Hierba perenne de 50-150 cm de alto, con tallos erectos corta y densamente pubescentes.",
    "Hojas ovado-lanceoladas o lanceoladas, aserradas, trinervadas, pubescentes, las inferiores opuestas y las superiores alternas; capítulos densamente corimbosos; corolas de 2,5 mm; aquenios de 1,3-1,5 mm; involucro de 3-3,5 mm.",
    "Sur del Brasil, Paraguay y nordeste de la Argentina. En pajonales del Delta."
  ),
  eupatorium_cabrerae: species(
    "eupatorium_cabrerae",
    "Eupatorium cabrerae",
    "130. Compositae - Eupatorieae",
    "Hierba perenne, con tallos erectos pubescentes.",
    "Hojas inferiores opuestas y superiores alternas, pecioladas, lanceoladas, aserradas, trinervadas, cortamente pubescentes o glabras; capítulos densamente corimbosos, con 50-60 flores purpúreas; corolas de 3,5 mm; aquenios de 3-3,5 mm.",
    "Delta y ribera del Plata. Florece en otoño."
  ),
  eupatorium_macrocephalum: species(
    "eupatorium_macrocephalum",
    "Eupatorium macrocephalum",
    "130. Compositae - Eupatorieae",
    "Hierba perenne, con tallos ascendentes o erectos, híspido-escabrosos, de 0,5-1 m de alto.",
    "Tallos densamente hojosos en la parte inferior y casi desnudos en la superior; hojas opuestas, subsésiles, ovadas o lanceoladas, agudas, crenado-aserradas, estrigiloso-pilosas; capítulos pocos en corimbos laxos, con 40-120 flores; involucro hemisférico de 10-13 mm.",
    "América cálida. Suelos húmedos del norte de Buenos Aires y del Delta."
  ),
  mikania_cordifolia: species(
    "mikania_cordifolia",
    "Mikania cordifolia",
    "130. Compositae - Eupatorieae",
    "Enredadera herbácea, con tallos hexagonales, tomentulosos y flexuosos.",
    "Involucro de 6-8 mm, con brácteas agudas y pubescentes; flores blancas; aquenios glabros; papus amarillento; hojas ovadas, acorazonadas, pubescentes, de 3-10 cm; capítulos corimbosos.",
    "América cálida. Frecuente en el Delta y en Martín García."
  ),
  mikania_parodii: species(
    "mikania_parodii",
    "Mikania parodii",
    "130. Compositae - Eupatorieae",
    "Enredadera herbácea, con tallos cilíndricos laxamente pubescentes.",
    "Involucro de 2-5 mm; brácteas involucrales largamente acuminadas, algo pubescentes, de 3-3,2 mm, con bráctea exterior algo más corta y ovada; hojas ovadas, sagitadas en la base, con pocos dientes, pubescentes, de 2-2,5 cm; capítulos en corimbos muy densos.",
    "Pajonales del este de la provincia de Buenos Aires."
  ),
  mikania_periplocifolia: species(
    "mikania_periplocifolia",
    "Mikania periplocifolia",
    "130. Compositae - Eupatorieae",
    "Enredadera herbácea, glabra o casi glabra, con tallos cilíndricos.",
    "Involucro de 2-2,5 mm; brácteas ovado-elípticas, agudas; bractéola tan larga como las brácteas o mayor; hojas ovado-acorazonadas u ovado-hastadas, enteras o algo dentadas, de 2-10 cm; capítulos densamente corimbosos.",
    "Sur del Brasil, Paraguay, Uruguay y norte y centro de la Argentina. Común en bosques del Delta y de la ribera platense; florece en otoño."
  ),
  mikania_micrantha: species(
    "mikania_micrantha",
    "Mikania micrantha",
    "130. Compositae - Eupatorieae",
    "Enredadera herbácea, glabra o casi glabra, con tallos cilíndricos.",
    "Involucro de 4,5 mm, con brácteas agudas y bractéola exterior corta; hojas ovadas, acorazonadas o sagitadas en la base, semienteras o dentadas, de 3-13 cm; capítulos en corimbos densos.",
    "América cálida. Frecuente en bosques del Delta y de la ribera; florece en otoño. Nombres vulgares: charrúa, bejuco."
  ),
  grindelia_discoidea: species(
    "grindelia_discoidea",
    "Grindelia discoidea",
    "130. Compositae - Astereae",
    "Sufrútice de unos 30 cm de alto, con tallos ascendentes, glabros, glutinosos y hojosos.",
    "Capítulos discoideos, con todas las flores tubulosas; hojas lanceoladas, aserradas, de 2-4,5 cm; capítulos solitarios; involucro de 7-8 mm por 8-12 mm, con brácteas lineales glabras; papus de 2-5 cerdas.",
    "Uruguay y centro de la Argentina. En campos gredosos."
  ),
  grindelia_tehuelches: species(
    "grindelia_tehuelches",
    "Grindelia tehuelches",
    "130. Compositae - Astereae",
    "Sufrútice de 25-40 cm de alto, con tallos ascendentes o erectos, densamente pubescentes.",
    "Capítulos radiados; brácteas involucrales lanceoladas, corta y densamente pubescentes; hojas lanceoladas u oblanceoladas, aserradas o pinatífidas, semiabrazadoras en la base, pubescentes, de 3-5 cm; involucro de 8-10 mm por 10-15 mm; papus de 6-10 aristas.",
    "Centro y sur de la Argentina. Rara en la región."
  ),
  grindelia_scorzonerifolia: species(
    "grindelia_scorzonerifolia",
    "Grindelia scorzonerifolia",
    "130. Compositae - Astereae",
    "Sufrútice con tallos ascendentes o erectos, glabros o ligeramente pubescentes.",
    "Capítulos radiados; brácteas involucrales glabras; hojas lineales, enteras o con algún diente, más o menos glabras, de 2-8 cm; involucro de 6-8 mm por 10-12 mm, con brácteas exteriores lineales e interiores oblongas; papus de 2-4 cerdas.",
    "Paraguay, sur del Brasil y nordeste de la Argentina. En terrenos arcillosos húmedos."
  ),
  grindelia_pulchella: species(
    "grindelia_pulchella",
    "Grindelia pulchella",
    "130. Compositae - Astereae",
    "Arbustito glabro, glutinoso y hojoso, de 25-70 cm de alto.",
    "Capítulos radiados; brácteas involucrales glabras; hojas lanceoladas u oblongas, glabras, de 1,5-5,5 cm; involucro hemisférico de 7 mm por 10-12 mm; papus de 3-6 cerdas.",
    "Norte y centro de la Argentina. Rara en la región."
  ),
  solidago_chilensis: species(
    "solidago_chilensis",
    "Solidago chilensis",
    "130. Compositae - Astereae",
    "Hierba perenne, rizomatosa y glabra, con tallos delgados, simples, de cerca de 1 m de alto.",
    "Hojas lineal-lanceoladas, enteras, trinervadas, glabras, con pelitos curvos en el margen, de 4-8 cm por 5-8 mm; capítulos radiados, numerosos, en panojas contraídas; involucro de 4-5 mm; flores amarillas; aquenios con 8-12 costillas y papus de numerosos pelos.",
    "América austral. Muy frecuente en lugares húmedos; florece en otoño. Nombre vulgar: romerillo dorado."
  ),
  aster_squamatus: species(
    "aster_squamatus",
    "Aster squamatus",
    "130. Compositae - Astereae",
    "Hierba perenne, erecta, glabra y ramosa, de 15-150 cm de alto.",
    "Hojas lanceolado-lineales, agudas, enteras, de 3-14 cm por 3-20 mm; capítulos numerosos, pedicelados, en panojas amplias; involucro de 5-9 mm; flores marginales blancas; aquenios lineal-lanceolados, cortamente pubescentes, con papus blanco-rosado.",
    "América del Sur. Especie ubicua."
  ),
  aster_squamatus_var_graminifolius: species(
    "aster_squamatus_var_graminifolius",
    "Aster squamatus var. graminifolius",
    "130. Compositae - Astereae",
    "Variedad robusta de Aster squamatus, de hojas más angostas y graminiformes.",
    "Capítulos mayores que en la forma típica, con involucro de 8-9 mm de alto.",
    "América austral. Vive en pajonales."
  ),
  aster_calendulaceus: species(
    "aster_calendulaceus",
    "Aster calendulaceus",
    "130. Compositae - Astereae",
    "Hierba perenne de tallos rastreros, densamente tomentosa.",
    "Capítulos solitarios; involucro hemisférico, de 12-18 mm por 18-25 mm, con brácteas lineales, lanosas en el dorso; flores marginales amarillas, con lígulas de 7-14 mm; hojas oblongo-lanceoladas, enteras, de 1,5-2,5 cm; aquenios lanceolados, seríceo-pubescentes, con papus leonado.",
    "Uruguay y nordeste de la Argentina. En arenales de la Isla Martín García."
  ),
  aster_decumbens: species(
    "aster_decumbens",
    "Aster decumbens",
    "130. Compositae - Astereae",
    "Hierba perenne con hojas basales arrosetadas y tallos decumbentes, laxamente híspidos.",
    "Capítulos solitarios y apicales; involucro hemisférico, de cerca de 1 cm por 1,5 cm, con brácteas lineal-oblongas, obtusas, ciliadas en el margen y glabras; flores marginales blancas o rosadas; hojas inferiores espatuladas, obtusas, enteras, con pelos largos esparcidos, de 3-4 cm; aquenios lanceolados y pubescentes; papus rojizo.",
    "Este de la provincia de Buenos Aires."
  ),
  aster_argentinensis: species(
    "aster_argentinensis",
    "Aster argentinensis",
    "130. Compositae - Astereae",
    "Hemicriptófita con hojas inferiores arrosetadas y tallos ascendentes o erectos, de 20-50 cm de alto, lanosos hacia el ápice y glabrescentes hacia la base.",
    "Capítulos solitarios; involucro campanulado, de 12 mm por 8 mm, con brácteas lineales, agudas, rojizas y lanuginosas; lígulas blancas, de 3-4 mm, apenas más largas que el involucro; hojas basales espatuladas, obtusas, enteras, cortamente híspidas, de 3-7 cm; hojas caulinares oblanceolado-espatuladas, agudas, de 1,5-2,5 cm; aquenios comprimidos, lanceolados, con pelos largos laxos y pelos glandulosos cortos; papus amarillento.",
    "Nordeste de la Argentina y Uruguay. En estepa clímax."
  ),
  aster_montevidensis: species(
    "aster_montevidensis",
    "Aster montevidensis",
    "130. Compositae - Astereae",
    "Hemicriptófita de tallos rastreros o rara vez ascendentes, laxamente vellosa, de tono verde-grisáceo.",
    "Capítulos solitarios en el extremo de las ramas; involucro campanulado, de 10 mm por 8 mm, con brácteas lineales, lanuginosas, en 3-4 series; hojas basales espatuladas y enteras; hojas caulinares lanceoladas, agudas, enteras, con margen crespo, de 2-4 cm; flores marginales blancas o violáceas; aquenios lanceolados, densamente pubescentes; papus purpúreo.",
    "Sur del Brasil, Uruguay y norte y centro de la Argentina. Común en campos fértiles."
  ),
  aster_haplopappus: species(
    "aster_haplopappus",
    "Aster haplopappus",
    "130. Compositae - Astereae",
    "Hierba perenne, densamente albo-lanosa, con tallos rastreros.",
    "Capítulos solitarios; involucro campanulado, de 12-15 mm por 8-14 mm, con brácteas lineales, lanosas, en 4-5 series; hojas inferiores oblanceolado-espatuladas, agudas, de 5-7 cm; hojas superiores lanceoladas, enteras, de 2-3 cm; flores marginales blancas o violáceas; aquenios comprimidos, laxamente vellosos; papus amarillento o rojizo.",
    "Uruguay, Argentina y Chile. En campos altos y secos."
  ),
  conyza_rivularis: species(
    "conyza_rivularis",
    "Conyza rivularis",
    "130. Compositae - Astereae",
    "Hierba perenne, glabra, de 20-50 cm de alto, con hojas en roseta y tallos paucifoliados.",
    "Hojas caulinares oblanceolado-oblongas, aserradas, dilatadas y semiabrazadoras en la base; hojas basales oblanceoladas u obovadas, largamente atenuadas en seudopecíolo, aserradas, de 4-12 cm por 1-3,5 cm; capítulos pocos, en corimbos paucicéfalos; involucro acampanado, de 6 mm, con brácteas agudas y glabras; flores blancas; aquenios velludos; papus blanco.",
    "Sudeste del Brasil, Uruguay y nordeste de la Argentina. En bosques del Delta y de la ribera platense."
  ),
  conyza_monorchis: species(
    "conyza_monorchis",
    "Conyza monorchis",
    "130. Compositae - Astereae",
    "Hierba perenne velluda, con raíz tuberiforme y tallo erecto, simple, de 20-50 cm de alto.",
    "Hojas inferiores obovadas u oblanceoladas, obtusas, atenuadas en la base, crenadas, de 3-5 cm; hojas superiores pocas, lineales y enteras; capítulos pocos, en corimbos laxos; involucro hemisférico, de 6-7 mm por 6-8 mm, con brácteas lineales, acuminadas e hirsutas; flores blancas o violáceas; aquenios pubescentes.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. En la estepa clímax."
  ),
  conyza_chilensis: species(
    "conyza_chilensis",
    "Conyza chilensis",
    "130. Compositae - Astereae",
    "Hierba perenne velluda, con raíz no engrosada y tallos erectos, sencillos, de 30-80 cm de alto.",
    "Hojas basales oblanceoladas, obtusas, atenuadas en la base, crenadas, de 5-13 cm; hojas superiores lineales, agudas y enteras; capítulos pocos, densamente corimbosos; involucro hemisférico, de 5-7 mm por 10-12 mm, con brácteas lineales, acuminadas e híspidas; flores blancas muy numerosas; aquenios casi glabros.",
    "América del Sur. En suelos fértiles."
  ),
  conyza_pampeana: species(
    "conyza_pampeana",
    "Conyza pampeana",
    "130. Compositae - Astereae",
    "Hierba anual completamente glabra, con tallos sencillos y hojosos, de 10-30 cm de alto.",
    "Hojas lineales, obtusas, semienvainadoras en la base, enteras, de 1,5-10 cm; capítulos laxamente corimbosos; involucro de 4 mm, con brácteas lineales y acuminadas; flores blancas, las marginales pluriseriadas, filiformes y semiliguladas en el ápice; aquenios pubescentes; papus blanco.",
    "Uruguay y nordeste de la Argentina. En campos húmedos."
  ),
  conyza_lorentzii: species(
    "conyza_lorentzii",
    "Conyza lorentzii",
    "130. Compositae - Astereae",
    "Hierba anual de 30-50 cm de alto, con tallos erectos, poco ramificados y laxamente pubescentes.",
    "Hojas lanceoladas, agudas, algo dilatadas en la base, enteras o dentadas, glabras salvo en bordes y nervadura, de 2,5-7 cm por 3-10 mm; capítulos pocos, solitarios en el ápice de las ramas o en corimbos muy laxos; involucro hemisférico, de 4 mm por 7 mm, con brácteas lineales e hirsutas; flores blancas; aquenios algo pilosos.",
    "Nordeste de la Argentina, hasta las barrancas del Paraná en San Pedro."
  ),
  conyza_bonariensis: species(
    "conyza_bonariensis",
    "Conyza bonariensis",
    "130. Compositae - Astereae",
    "Hierba anual verde-grisácea, de 40-100 cm de alto, con tallos de ramificación simpodial, densamente velludos.",
    "Hojas densamente pubescentes; las inferiores oblanceoladas, lobadas o enteras, y las superiores lineales, agudas y enteras, de 3-6 cm por 3-7 mm; capítulos en panojas o corimbos; involucro hemisférico, de 4 mm por 5-6 mm, con brácteas lineales densamente pubescentes; flores blancas; aquenios pubescentes; papus blanco o rosado.",
    "América; adventicia en Europa. En suelos fértiles. Nombre vulgar: rama negra."
  ),
  conyza_bonariensis_var_angustifolia: species(
    "conyza_bonariensis_var_angustifolia",
    "Conyza bonariensis var. angustifolia",
    "130. Compositae - Astereae",
    "Variedad de Conyza bonariensis con hojas estrechamente lineales.",
    "Hojas de sólo 1-2 mm de ancho.",
    "Rara en la región."
  ),
  conyza_bonariensis_var_microcephala: species(
    "conyza_bonariensis_var_microcephala",
    "Conyza bonariensis var. microcephala",
    "130. Compositae - Astereae",
    "Variedad de Conyza bonariensis caracterizada por capítulos pequeños.",
    "Capítulos con involucro de sólo 4-5 mm de diámetro.",
    "América austral. Ubicua."
  ),
  conyza_blakei: species(
    "conyza_blakei",
    "Conyza blakei",
    "130. Compositae - Astereae",
    "Hierba anual, con tallos sencillos, erectos, estriados, con pelos rígidos y tiesos esparcidos.",
    "Hojas estrechamente lineales, de 1-1,5 mm de ancho; las inferiores generalmente pinatisectas, glabras salvo en nervadura y bordes, donde llevan pelos rígidos; capítulos muy numerosos, en panojas densas, largas y angostas; involucro acampanado, de 3,5-4,5 mm, con brácteas lineales, semiobtusas y glabras; aquenios laxamente pubescentes; papus blanco o amarillento.",
    "América austral. Común en la estepa clímax."
  ),
  conyza_sordescens: species(
    "conyza_sordescens",
    "Conyza sordescens",
    "130. Compositae - Astereae",
    "Hierba anual erecta, con tallos híspidos, de 50-150 cm de alto.",
    "Hojas lanceoladas, de más de 2 mm de ancho, laxamente híspidas; las inferiores aserradas o lobuladas y las superiores enteras; capítulos pequeños, numerosísimos, en amplia panoja; involucro acampanado, de 3-4 mm, con pocas brácteas lineales, agudas, glabras o con pelos esparcidos; aquenios ligeramente velludos; papus blanco o amarillento.",
    "América austral. En suelos húmedos."
  ),
  vittadinia_trifurcata: species(
    "vittadinia_trifurcata",
    "Vittadinia trifurcata",
    "130. Compositae - Astereae",
    "Hierba perenne, ramosa y estrigiloso-pubescente, con tallos erectos, densamente hojosos hasta la mitad y casi desnudos arriba, de 10-20 cm de alto.",
    "Hojas lineales, trifurcadas, con raquis y lóbulos angostos, agudos y enteros; hojas superiores enteras y lineales; capítulos radiados, solitarios en el ápice del tallo; involucro acampanado, de 5-6,5 mm, con brácteas lineales, agudas y pubescentes en 2-3 series; flores marginales blancas, cortamente liguladas; aquenios seríceo-pubescentes; papus amarillento o rojizo.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en la estepa clímax."
  ),
  podocoma_hirsuta: species(
    "podocoma_hirsuta",
    "Podocoma hirsuta",
    "130. Compositae - Astereae",
    "Hierba perenne, erecta, densamente hirsuta, de 50-100 cm de alto, con tallos estriados, simples o poco ramificados.",
    "Hojas inferiores ovadas, agudas, atenuadas en seudopecíolo semiabrazador, con grandes dientes triangulares, de 10-18 cm por 4-7 cm; hojas superiores distantes, oblongo-lanceoladas, agudas, dilatadas y semiabrazadoras en la base, dentadas; capítulos pocos, laxamente corimbosos; involucro acampanado, de 7 mm, con brácteas lineales, agudas y pilosas; flores marginales blancas; aquenios lanceolados, pubescentes, largamente rostrados; papus blanco.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. En bosques del Delta y de la ribera del Plata."
  ),
  baccharidastrum_triplinervium: species(
    "baccharidastrum_triplinervium",
    "Baccharidastrum triplinervium",
    "130. Compositae - Astereae",
    "Sufrútice erecto, ramoso y glanduloso, de 1,5-2 m de alto.",
    "Hojas ovado-lanceoladas, acuminadas, atenuadas en la base, aserradas, de 5,5-11 cm por 1,3-4 cm, con pecíolo de 0,5-1,5 cm; capítulos pequeños, muy numerosos, en corimbos compuestos; involucro de 4 mm, con brácteas glabras; flores masculinas 2-6; aquenios cortamente pubérulos; papus blanco.",
    "Sur del Brasil, Uruguay, Paraguay y nordeste de la Argentina. Común en bosques del Delta y de la ribera del Plata."
  ),
  baccharidastrum_argutum: species(
    "baccharidastrum_argutum",
    "Baccharidastrum argutum",
    "130. Compositae - Astereae",
    "Sufrútice erecto, glabro y ramoso, de 1-1,5 m de alto.",
    "Hojas lineales o lineal-lanceoladas, aserradas, glabras, de 6-13 cm por 2-18 mm; capítulos pequeños, muy numerosos, en corimbos compuestos; involucro de 5 mm, con brácteas glabras; flores masculinas muy pocas; aquenios laxamente papilosos; papus blanco.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. En bosques del Delta y de la ribera platense."
  ),
  baccharis_phyteumoides: species(
    "baccharis_phyteumoides",
    "Baccharis phyteumoides",
    "130. Compositae - Astereae",
    "Sufrútice de 1-1,5 m de alto, con tallos erectos, glabros y trialados.",
    "Hojas grandes, alternas, oblanceoladas, enteras, glabras, de 5-7,5 cm; capítulos en espigas de glomérulos; involucro de 4-5 mm por 4 mm, con brácteas pajizas en 3 series; flores numerosas; aquenios glabros con 6-8 costillas; papus blanco.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. En pajonales del Delta y de la ribera platense."
  ),
  baccharis_articulata: species(
    "baccharis_articulata",
    "Baccharis articulata",
    "130. Compositae - Astereae",
    "Arbustito ramoso, glutinoso y glabro, de 30-100 cm de alto, con ramas bialadas y áfilas.",
    "Hojas reducidas a brácteas; tallos 2-alados; capítulos pequeños en espigas laxas; involucro acampanado, de 3-4 mm por 4 mm, con brácteas verdosas y obtusas; flores numerosas; aquenios glabros, 5-costados; papus blanco.",
    "Sur del Brasil, Paraguay, Uruguay y norte y centro de la Argentina. Común en la estepa clímax. Nombre vulgar: carquejilla."
  ),
  baccharis_microcephala: species(
    "baccharis_microcephala",
    "Baccharis microcephala",
    "130. Compositae - Astereae",
    "Sufrútice erecto y glabro, de 0,5-1,5 m de alto, con tallos trialados de alas planas de 1-3 mm.",
    "Hojas reducidas a brácteas; capítulos sésiles, en espigas laxas de glomérulos; involucro femenino de 3-3,5 mm de alto, con brácteas verdosas o pajizas en 3-4 series; flores numerosas; aquenios oblongos; papus blanco.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina, hasta la Capital Federal."
  ),
  baccharis_penningtonii: species(
    "baccharis_penningtonii",
    "Baccharis penningtonii",
    "130. Compositae - Astereae",
    "Arbusto ramoso y glabro, de cerca de 1,5 m de alto, con ramas trialadas y áfilas o con hojas reducidas.",
    "Capítulos sésiles o brevemente pedicelados, en espigas o racimos laxos; involucro femenino de 4-5 mm de alto, con brácteas pajizas en 3-4 series; flores numerosas; aquenios glabros, con 10 costillas prominentes; papus blanco.",
    "Delta del Paraná y riberas del Plata. Florece en primavera."
  ),
  baccharis_trimera: species(
    "baccharis_trimera",
    "Baccharis trimera",
    "130. Compositae - Astereae",
    "Sufrútice ramoso, glabro y glutinoso, de 40-50 cm de alto, con ramas trialadas y hojas reducidas.",
    "Capítulos en espigas de glomérulos; involucro femenino de 5-6 mm por 2-3 mm, con brácteas pajizas en 3-4 series; flores numerosas; aquenios costados y glabros; papus blanco.",
    "América austral. Frecuente en la estepa clímax. Nombre vulgar: carqueja."
  ),
  baccharis_ulicina: species(
    "baccharis_ulicina",
    "Baccharis ulicina",
    "130. Compositae - Astereae",
    "Sufrútice ramoso y glabro, de 40-80 cm de alto, con tallos lisos o estriados, sin alas.",
    "Hojas pinatisectas, con raquis y segmentos lineales, de 1,5-3,5 cm; capítulos numerosos, en panojas o corimbos terminales; involucro acampanado, de 3-4 mm, con brácteas lineales, agudas y glabras; flores cerca de 20; aquenios costados; papus rojizo.",
    "Sur de Bolivia y toda la Argentina hasta Patagonia. Rara en la región, en barrancas de San Nicolás y San Pedro. Nombre vulgar: yerba de la oveja."
  ),
  baccharis_genistifolia: species(
    "baccharis_genistifolia",
    "Baccharis genistifolia",
    "130. Compositae - Astereae",
    "Sufrútice con raíces gemíferas y tallos ascendentes, ramosos, glabros, de 30-50 cm de alto.",
    "Hojas lineales, agudas, enteras, de 1,5-3 cm; capítulos femeninos amontonados o espigados en el ápice de las ramitas, con involucro cilíndrico de 7-8 mm por 2,5 mm y brácteas pajizas, lineales, glabras; flores 15-20; aquenios costados y glabros; capítulos masculinos con involucro de 4-5 mm por 4 mm; papus blanco.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. En suelos arenosos."
  ),
  baccharis_rufescens: species(
    "baccharis_rufescens",
    "Baccharis rufescens",
    "130. Compositae - Astereae",
    "Arbusto bajo, ramoso, puberulento-glanduloso, de 20-50 cm de alto, con ramas ascendentes y angulosas.",
    "Hojas lineales u oblanceolado-lineales, agudas, atenuadas en la base, enteras o con 1-3 dientes por lado, de 12-25 mm por 1-4 mm; capítulos sésiles en las axilas de las hojas superiores, formando una espiga hojosa; involucro femenino cilíndrico de 6 mm por 2 mm, con brácteas castañas, lanceoladas y glabras en 3-5 series; flores 6-12; aquenios glabros, con 8-10 costillas; papus blanco.",
    "Sur del Brasil, Paraguay, Uruguay y norte y centro de la Argentina. Vive en lugares secos; hallada en la Isla Martín García."
  ),
  baccharis_sessiliflora_var_stuckertii: species(
    "baccharis_sessiliflora_var_stuckertii",
    "Baccharis sessiliflora var. stuckertii",
    "130. Compositae - Astereae",
    "Sufrútice ramoso, glabro y resinoso, de 40-60 cm de alto.",
    "Hojas elípticas u obovadas, cortamente pecioladas, obtusas o semiagudas, enteras o con 1-4 dientes por lado, glabras, trinervadas, de 12-30 mm por 6-12 mm; capítulos sésiles en las axilas de las hojas superiores, formando una espiga hojosa; involucro femenino cilíndrico de 9-10 mm por 3 mm, con brácteas lanceoladas y glabras; papus rosado.",
    "Variedad endémica del centro de la Argentina. Rara cerca de Buenos Aires."
  ),
  baccharis_phyteuma: species(
    "baccharis_phyteuma",
    "Baccharis phyteuma",
    "130. Compositae - Astereae",
    "Sufrútice ramoso y glabro, de 1-1,5 m de alto, con tallos cilíndricos notablemente costados.",
    "Hojas alternas, lanceoladas, cortamente aserradas o enteras, trinervadas, de 7-10 cm por 1,2-2 cm; capítulos aglomerados en espigas terminales casi desprovistas de hojas; involucro femenino de 4-5 mm por 4 mm, con brácteas lanceoladas y glabras; flores numerosas; aquenios costados y glabros; papus blanco.",
    "Endémico del Delta del Paraná."
  ),
  baccharis_spicata: species(
    "baccharis_spicata",
    "Baccharis spicata",
    "130. Compositae - Astereae",
    "Sufrútice ramoso, glabro o laxamente lanuginoso y glanduloso, de 1-1,5 m de alto.",
    "Hojas opuestas, lineal-lanceoladas, con algunos dientes distantes, de 4-8 cm por 2-7 mm; capítulos aglomerados en espigas terminales casi desprovistas de hojas; involucro femenino de 7 mm por 6 mm, y masculino de 5-6 mm por 5 mm, con brácteas oblongo-lineales y glabras; flores numerosas; aquenios 10-costados, glabros; papus blanco.",
    "Sur del Brasil, Paraguay, Uruguay y centro de la Argentina. En campos altos y secos y en pajonales del Delta."
  ),
  baccharis_recurvata: species(
    "baccharis_recurvata",
    "Baccharis recurvata",
    "130. Compositae - Astereae",
    "Arbusto ramoso y densamente hojoso, de 1,5-2 m de alto.",
    "Hojas alternas, sésiles, oblanceolado-oblongas, obtusas, aserradas superiormente, laxamente velludas, de 1,5-3 cm por 4-7 mm; capítulos sésiles, solitarios en las axilas de las hojas superiores, formando una falsa espiga; involucro de 5-7 mm por 4,5-5 mm, con brácteas obtusas y pubescentes; flores numerosas; aquenios con 10 costillas, glabros; papus rosado o blanco.",
    "Sur del Brasil, Paraguay y nordeste de la Argentina. En islas del Delta."
  ),
  baccharis_notosergila: species(
    "baccharis_notosergila",
    "Baccharis notosergila",
    "130. Compositae - Astereae",
    "Arbusto ramoso y glanduloso-resinoso, de 1-1,5 m de alto, con ramas costadas y áfilas.",
    "Plantas adultas áfilas o con alguna hoja reducida lineal; capítulos solitarios en el extremo de ramitas cortas, formando una seudopanoja muy amplia; involucro de 4-5 mm por 3,5-4 mm, con brácteas lineal-lanceoladas, agudas y glabras; flores numerosas; aquenios costados y glabros; papus blanco, muy acrescente.",
    "Uruguay y nordeste de la Argentina. En campos altos; gregaria."
  ),
  baccharis_juncea: species(
    "baccharis_juncea",
    "Baccharis juncea",
    "130. Compositae - Astereae",
    "Hierba perenne, rizomatosa y glauca, con tallos glabros de 1-1,5 m de alto.",
    "Hojas lineales, agudas, enteras o finamente aserradas, de 1,5-5 cm por 1-2 mm; capítulos solitarios o en corimbos paucicéfalos; involucro femenino hemisférico, de 7 mm por 10 mm, con brácteas lineal-lanceoladas, glabras y rojizas en 3-4 series; flores muy numerosas; aquenios glabros, rojizos, con costillas blancas; papus blanco, acrescente.",
    "América austral. En campos húmedos y salobres."
  ),
  baccharis_coridifolia: species(
    "baccharis_coridifolia",
    "Baccharis coridifolia",
    "130. Compositae - Astereae",
    "Sufrútice ramoso, glabro y densamente hojoso, de 50-80 cm de alto.",
    "Hojas lineales, enteras, de 15-25 mm por 1-2,5 mm; capítulos pequeños, muy numerosos, en racimos densos; involucro femenino de 4 mm por 3 mm, con brácteas ovadas, obtusas y glabras; flores 8-10; aquenios densamente pubescentes; papus blanco o rojizo, acrescente; capítulos masculinos con involucro de 2 mm por 3 mm y 12-15 flores.",
    "Sur del Brasil, Paraguay, Uruguay y norte y centro de la Argentina. Frecuente en relictos de estepa clímax; tóxica para el ganado. Nombres vulgares: mio-mio, romerillo."
  ),
  baccharis_artemisioides: species(
    "baccharis_artemisioides",
    "Baccharis artemisioides",
    "130. Compositae - Astereae",
    "Sufrútice ramoso, densamente hojoso y blanco-tomentoso, de 0,5-1 m de alto.",
    "Hojas lineales, enteras, de 8-25 mm por 0,5-1 mm; capítulos en amplia panoja; involucro femenino de 5 mm por 4 mm, con brácteas ovadas, obtusas y tomentosas; flores 10, exertas; aquenios lanuginosos; papus rojizo; involucro masculino de 3 mm por 4 mm, con papus crespo y blanco.",
    "Uruguay y Argentina. Rara en la región."
  ),
  baccharis_subopposita: species(
    "baccharis_subopposita",
    "Baccharis subopposita",
    "130. Compositae - Astereae",
    "Arbusto erecto, ramoso y glabro, de 0,5-1 m de alto.",
    "Hojas semiopuestas, coriáceas, obovadas, obtusas, sinuado-dentadas, trinervadas, glabras, cortamente pecioladas, de 2-5 cm por 0,8-3 cm; capítulos muy numerosos, apanojados; involucro femenino de 5 mm por 4 mm, con brácteas pajizas, lanceoladas, glabras y ciliadas en el margen; flores numerosas; aquenios pluricostados; papus blanco.",
    "Centro y sur del Brasil, Paraguay, Uruguay y norte de la Argentina. Rara en la región."
  ),
  baccharis_melastomaefolia: species(
    "baccharis_melastomaefolia",
    "Baccharis melastomaefolia",
    "130. Compositae - Astereae",
    "Arbusto ramoso y glabro, de 1,5-2 m de alto.",
    "Hojas alternas, herbáceas, ovado-lanceoladas o lanceoladas, acuminadas, aserradas, trinervadas, glabras, pálidas en el envés y con puntos glandulosos, de 4-9 cm por 0,5-2,5 cm; capítulos numerosos, en amplias panojas; involucro acampanado, de 4-5 mm, con brácteas lineal-oblongas y glabras; flores numerosas; papus blanco.",
    "Sur del Brasil, Paraguay, Uruguay y norte de la Argentina. Frecuente en el Delta y en la ribera del Plata."
  ),
  baccharis_salicifolia: species(
    "baccharis_salicifolia",
    "Baccharis salicifolia",
    "130. Compositae - Astereae",
    "Arbusto ramoso, glanduloso y densamente hojoso, de 1-2 m de alto.",
    "Hojas lanceoladas, cortamente pecioladas, aserradas en la mitad superior del margen, trinervadas, de 4-9 cm por 7-15 mm; capítulos corimbosos; involucro femenino de 3-4 mm de alto, acampanado, con brácteas pajizas, lanceoladas y glabras; flores numerosas; aquenios con 5 costillas; papus blanco.",
    "América del Sur. En barrancas del Paraná y suelos arenosos de la ribera del Plata."
  ),
  baccharis_medullosa: species(
    "baccharis_medullosa",
    "Baccharis medullosa",
    "130. Compositae - Astereae",
    "Hierba perenne y glabra, con raíces horizontales gemíferas y tallos erectos, estriados, de 50-100 cm de alto.",
    "Hojas ovado-lanceoladas, pecioladas, acuminadas, uniformemente aserradas, trinervadas, de 3-9 cm por 1-3 cm; capítulos corimbosos; involucro femenino de 3-4 mm de alto, con brácteas lineales y glabras; flores muy numerosas; aquenios con 5 costillas; papus blanco.",
    "América austral. Frecuente en el Delta y en suelos modificados."
  ),
  baccharis_pingraea: species(
    "baccharis_pingraea",
    "Baccharis pingraea",
    "130. Compositae - Astereae",
    "Hierba perenne con raíces horizontales gemíferas y tallos ascendentes o erectos, glabros, algo glandulosos, de 20-100 cm de alto.",
    "Hojas lineales o lineal-lanceoladas, aserradas, trinervadas, glabras, de 3,5-9 cm por 2-9 mm; capítulos corimbosos; involucro hemisférico, de 3-4 mm, con brácteas lineal-lanceoladas y glabras; flores muy numerosas; aquenios glabros; papus blanco.",
    "América austral. Ubicua."
  ),
  baccharis_pingraea_f_angustissima: species(
    "baccharis_pingraea_f_angustissima",
    "Baccharis pingraea f. angustissima",
    "130. Compositae - Astereae",
    "Forma de Baccharis pingraea con hojas lineal-filiformes.",
    "Hojas frecuentemente enteras, de 0,5-1,5 mm de ancho.",
    "América austral. En campos bajos y salinos."
  ),
  pluchea_sagittalis: species(
    "pluchea_sagittalis",
    "Pluchea sagittalis",
    "130. Compositae - Inuleae",
    "Hierba perenne de 0,5-2 m de alto, con tallos erectos, alados, glabros o algo pubescentes.",
    "Hojas alternas, anchamente lanceoladas, brevemente aserradas, glanduloso-pubescentes en ambas caras, de 8-14 cm por 2-4 cm; capítulos corimbosos; involucro hemisférico, de 5-6 mm por 10-12 mm, con brácteas ovadas, agudas y pubescentes.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Frecuente en suelos húmedos y pajonales. Medicinal y aromática. Nombres vulgares: lucera, yerba del lucero, quitoco."
  ),
  tessaria_integrifolia: species(
    "tessaria_integrifolia",
    "Tessaria integrifolia",
    "130. Compositae - Inuleae",
    "Árbol de 3-8 m de alto, con raíces gemíferas.",
    "Hojas lanceoladas, agudas, enteras o dentadas, densa y cortamente canescentes, de 6-8 cm; capítulos subsésiles en densos corimbos; involucro turbinado, de 5-6 mm, con brácteas interiores radiantes; flor masculina solitaria; papus blanco.",
    "América del Sur cálida, hasta el Delta del Paraná. Forma bosquecillos muy densos. Nombres vulgares: aliso, pájaro bobo."
  ),
  tessaria_absinthioides: species(
    "tessaria_absinthioides",
    "Tessaria absinthioides",
    "130. Compositae - Inuleae",
    "Sufrútice de 1-1,5 m de alto, densamente cano-tomentoso, con raíces gemíferas.",
    "Hojas oblanceoladas, agudas o semiobtusas, aserradas, de 5-8 cm; capítulos densamente corimbosos; involucro acampanado, de 7-8 mm de alto; flores masculinas 6-24; papus blanco.",
    "América austral, en suelos arenosos algo húmedos. Rara en la Isla Maciel y abundante en dunas del litoral atlántico. Nombres vulgares: brea, pájaro bobo, suncho negro."
  ),
  pterocaulon_interruptum: species(
    "pterocaulon_interruptum",
    "Pterocaulon interruptum",
    "130. Compositae - Inuleae",
    "Hierba perenne de 1-1,5 m de alto, con tallos erectos, sencillos, 5-alados y hojosos.",
    "Hojas obovado-lanceoladas o lanceoladas, dentadas, lanuginosas en el haz y densamente tomentosas en el envés, de 8-15 cm por 1,5-4 cm; capítulos muy numerosos, en amplia panoja de espigas; involucro de 5 mm, con brácteas exteriores lanosas; flores masculinas 3-5; aquenios pubescente-glandulosos.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. En bosques del Delta y de la ribera platense."
  ),
  pterocaulon_lorentzii: species(
    "pterocaulon_lorentzii",
    "Pterocaulon lorentzii",
    "130. Compositae - Inuleae",
    "Sufrútice de 40-80 cm de alto, con tallos ascendentes o erectos, simples, 5-alados, lanosos y laxamente hojosos.",
    "Espigas simples, muy compactas en la parte superior, de unos 10 cm; hojas superiores lineal-lanceoladas, agudas, dentadas, glabras en el haz y densamente albo-tomentosas en el envés, de 5-8 cm por 0,4-1 cm; involucro de 5-6 mm, con brácteas lanosas; flores hermafroditas 3; aquenios glanduloso-pubescentes; papus blanco.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina, hasta la Isla Martín García."
  ),
  pterocaulon_cordobense: species(
    "pterocaulon_cordobense",
    "Pterocaulon cordobense",
    "130. Compositae - Inuleae",
    "Sufrútice de 40-80 cm de alto, con tallos 5-alados, tomentosos y muy hojosos.",
    "Hojas oblanceoladas, aserradas, glabras en el haz y tomentosas en el envés, de 7-9 cm por 2-3 cm, las superiores lanceoladas; capítulos en espigas ramosas y laxas; involucro de 5 mm, con brácteas lanosas; flores hermafroditas 2-3; papus blanco.",
    "Uruguay y centro de la Argentina. En la estepa clímax."
  ),
  pterocaulon_subvirgatum: species(
    "pterocaulon_subvirgatum",
    "Pterocaulon subvirgatum",
    "130. Compositae - Inuleae",
    "Sufrútice de unos 50 cm de alto, con tallos erectos, poco ramosos, 5-alados y lanosos.",
    "Hojas lineal-lanceoladas, enteras, glabras en el haz y tomentosas en el envés, de 7-12 cm por 4-12 mm; capítulos en largas espigas laxas, ramificadas en la base; involucro de 6 mm, con brácteas lanosas; flores hermafroditas 2-3; papus blanco.",
    "Nordeste de la Argentina, hasta el norte de Buenos Aires, como Pergamino y San Nicolás."
  ),
  micropsis_ostenii: species(
    "micropsis_ostenii",
    "Micropsis ostenii",
    "130. Compositae - Inuleae",
    "Hierba anual pigmea, decumbente y argénteo-tomentosa, con tallos rastreros de 5-12 cm.",
    "Hojas densas, alternas, espatuladas, enteras, sésiles, de 8-12 mm; capítulos solitarios en las axilas de las hojas, formando una larga seudoespiga; involucro de 5-7 mm, con 5 brácteas ovado-lanceoladas; flores femeninas 2-4, sin papus; flores hermafroditas 2-6, con papus coroniforme cortísimo.",
    "Uruguay y nordeste de la Argentina. En suelos húmedos y algo salinos."
  ),
  micropsis_dasycarpa: species(
    "micropsis_dasycarpa",
    "Micropsis dasycarpa",
    "130. Compositae - Inuleae",
    "Hierba pigmea, decumbente y argénteo-tomentosa, con tallos rastreros de 5-8 cm.",
    "Hojas densas, alternas, espatuladas, enteras, sésiles, de unos 7 mm; capítulos sésiles en las axilas de las hojas superiores, formando una seudocabezuela; flores femeninas 15-30, con aquenios seríceo-pubescentes y sin papus; flores hermafroditas 4-5, con aquenios laxamente pubescentes y sin papus; involucro piriforme de 4-5 mm.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina, hasta el Delta del Paraná."
  ),
  micropsis_spathulata: species(
    "micropsis_spathulata",
    "Micropsis spathulata",
    "130. Compositae - Inuleae",
    "Hierba anual pigmea, decumbente y argénteo-tomentosa, con tallos rastreros de 5-8 cm.",
    "Hojas densas, alternas, espatuladas, enteras, sésiles, de 5-12 mm; capítulos sésiles en las axilas de las hojas superiores, formando una seudocabezuela; flores femeninas 6-8, sin papus; flores hermafroditas 4, con papus coroniforme cortísimo; involucro piriforme de 4-5 mm.",
    "Uruguay y nordeste de la Argentina. Muy común en la estepa clímax; florece en primavera."
  ),
  chevreulia_sarmentosa: species(
    "chevreulia_sarmentosa",
    "Chevreulia sarmentosa",
    "130. Compositae - Inuleae",
    "Hierba perenne pigmea y estolonífera.",
    "Hojas arrosetadas, espatuladas, enteras, obtusas y brevemente mucronadas, lanuginosas en el haz y densamente albo-tomentosas en el envés, de 1,5-2 cm; involucro de 1 cm; aquenios lineal-lanceolados, ásperos, largamente rostrados; papus blanco.",
    "América austral. Común en la estepa clímax; florece en primavera."
  ),
  chevreulia_acuminata: species(
    "chevreulia_acuminata",
    "Chevreulia acuminata",
    "130. Compositae - Inuleae",
    "Hierba perenne, con tallos filiformes, rastreros y laxamente lanuginosos.",
    "Hojas opuestas, distribuidas a lo largo del tallo, oblongo-lanceoladas, acuminadas, enteras, lanuginosas en el haz y densamente lanosas en el envés, de 0,8-1,2 cm; involucro de 0,8-1 cm; aquenios fusiformes, ásperos y largamente rostrados; papus blanco sucio.",
    "América del Sur cálida. Rara en la región, citada para Pergamino."
  ),
  facelis_retusa: species(
    "facelis_retusa",
    "Facelis retusa",
    "130. Compositae - Inuleae",
    "Hierba anual pequeña, de 5-30 cm de alto, con tallos erectos o ascendentes, lanosos y hojosos.",
    "Hojas alternas, enteras, espatuladas, truncadas y semimucronadas en el ápice, lanosas en el envés, de 1-2 cm; capítulos sésiles en las axilas de las hojas superiores; involucro piriforme de 1 cm; aquenios obovoideos, densamente pubescentes; papus de pelos plumosos unidos en la base.",
    "América austral. Común en suelos fértiles."
  ),
  achyrocline_satureioides: species(
    "achyrocline_satureioides",
    "Achyrocline satureioides",
    "130. Compositae - Inuleae",
    "Sufrútice ramosísimo y albo-tomentoso, de 30-50 cm de alto.",
    "Tallos sin alas; hojas lineal-lanceoladas, enteras, blanco-tomentosas, de 3-5 cm; involucro cilíndrico de 5 mm, con brácteas amarillentas o rojizas; flores femeninas 4-5 y hermafroditas 1-2; aquenios glabros; papus blanco.",
    "América austral oriental. En suelos secos o arenosos de la Isla Martín García y alrededores de Eva Perón. Medicinal. Nombre vulgar: marcela."
  ),
  achyrocline_alata_var_vauthieriana: species(
    "achyrocline_alata_var_vauthieriana",
    "Achyrocline alata var. vauthieriana",
    "130. Compositae - Inuleae",
    "Sufrútice erecto, de 50-80 cm de alto.",
    "Tallos alados y lanuginosos; hojas lineal-lanceoladas, enteras, lanuginosas y levemente glandulosas, de 5-8 cm; involucro cilíndrico de 5 mm, con brácteas pajizas; flores marginales 3-5 y centrales 1-3; aquenios glabros; papus blanco.",
    "América del Sur cálida. Rara en el Delta."
  ),
  lucilia_acutifolia: species(
    "lucilia_acutifolia",
    "Lucilia acutifolia",
    "130. Compositae - Inuleae",
    "Hierba perenne con tallos ascendentes de 20-40 cm de alto, densamente albo-tomentosos.",
    "Hojas densas, alternas, lanceoladas, enteras, tomentosas, recurvadas o apretadas contra el tallo, de 8-18 mm; capítulos sésiles; involucro piriforme, de 12-15 mm; flores centrales 4-5; aquenios obovoideos o turbinados, seríceo-velludos; papus de numerosos pelos simples.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en serranías bonaerenses; rara cerca de Buenos Aires, citada para San Fernando."
  ),
  berroa_gnaphalioides: species(
    "berroa_gnaphalioides",
    "Berroa gnaphalioides",
    "130. Compositae - Inuleae",
    "Hierba perenne rastrera, tomentosa o serícea.",
    "Hojas alternas, enteras, espatuladas, de 1,5-2 cm; capítulos sésiles; involucro ovoideo-cónico de 1,5 cm; aquenios obovoideos, densamente seríceos, con 8-12 pelos largos superiores cirrosos; papus de dos series de pelos plumosos soldados en la base.",
    "Sur del Brasil, Uruguay y centro y este de la Argentina. Común en la estepa clímax."
  ),
  stuckertiella_peregrina: species(
    "stuckertiella_peregrina",
    "Stuckertiella peregrina",
    "130. Compositae - Inuleae",
    "Hierba anual pigmea, decumbente, difusa y lanosa.",
    "Hojas alternas, enteras, oblanceolado-espatuladas, de 3-10 mm; capítulos pequeños, sésiles, amontonados en el extremo de las ramitas; involucro acampanado de 4 mm; flores centrales masculinas tetradentadas; aquenios papilosos; papus de pelos delgados unidos en la base.",
    "Suelos arenosos del centro de la Argentina. Rara cerca de Buenos Aires, en Isla Martín García y Facultad de Agronomía."
  ),
  gnaphalium_cheiranthifolium: species(
    "gnaphalium_cheiranthifolium",
    "Gnaphalium cheiranthifolium",
    "130. Compositae - Inuleae",
    "Hierba anual erecta, de 40-80 cm de alto, densamente blanco-tomentosa.",
    "Pelos del papus no soldados en la base; hojas densamente tomentosas en ambas caras, oblanceolado-lineales, agudas, decurrentes en la base, de 4-12 cm; capítulos subsésiles, aglomerados en el ápice de las ramas; involucro acampanado, de 5-6 mm, con brácteas escariosas amarillentas; aquenios glabros.",
    "América austral, en suelos arenosos. Rara cerca de Buenos Aires y muy frecuente en dunas atlánticas. Nombres vulgares: vira-vira, marcela."
  ),
  gnaphalium_gaudichaudianum: species(
    "gnaphalium_gaudichaudianum",
    "Gnaphalium gaudichaudianum",
    "130. Compositae - Inuleae",
    "Hierba anual erecta, de 40-60 cm de alto.",
    "Pelos del papus no soldados en la base; hojas lineales, agudas, cortamente decurrentes, glanduloso-pubescentes en el haz y densamente tomentosas en el envés, de 3,5-8 cm; capítulos numerosos, subsésiles, en corimbos de glomérulos; involucro acampanado, de 4-4,5 mm, con brácteas pajizas; aquenios glabros.",
    "América austral. En suelos húmedos y modificados."
  ),
  gnaphalium_platense: species(
    "gnaphalium_platense",
    "Gnaphalium platense",
    "130. Compositae - Inuleae",
    "Hierba perenne, con tallos ascendentes, glanduloso-pubescentes y lanosos, de 30-60 cm de alto.",
    "Pelos del papus soldados en la base; hojas con pubescencia glandulosa y lanosa mezcladas en el haz, lanosas en el envés, espatuladas, obtusas, brevemente decurrentes, de 4-12 cm; capítulos en espigas hojosas de glomérulos; involucro acampanado, de 4-4,5 mm, con brácteas escariosas, ovadas y acuminadas; aquenios ligeramente granulosos.",
    "Nordeste de la Argentina, en suelos húmedos y fértiles."
  ),
  gnaphalium_spicatum: species(
    "gnaphalium_spicatum",
    "Gnaphalium spicatum",
    "130. Compositae - Inuleae",
    "Hierba perenne, con hojas basales en roseta y tallos ascendentes o erectos, simples, tomentosos, de 10-50 cm de alto.",
    "Hojas discolores, glabras o casi glabras en el haz e incano-tomentosas en el envés, espatuladas, obtusas, enteras y algo crespas en el margen, de 3-12 cm; capítulos en densas espigas; involucro piriforme, de 3-4 mm, con brácteas interiores obtusas; aquenios granulosos.",
    "América del Sur. Común en suelos fértiles."
  ),
  gnaphalium_calviceps: species(
    "gnaphalium_calviceps",
    "Gnaphalium calviceps",
    "130. Compositae - Inuleae",
    "Hierba bienal o perenne, con tallos ascendentes, laxamente lanosos y hojosos, de 20-50 cm de alto.",
    "Hojas concolores, más o menos densamente lanosas en ambas caras, espatuladas, obtusas, de 2-8 cm; espigas laxas, interrumpidas, simples o compuestas; hojas de la inflorescencia de 4-6 mm de ancho; involucro de 3 mm, con brácteas interiores obtusas; aquenios cortamente granulosos.",
    "América. Común en suelos modificados."
  ),
  gnaphalium_subfalcatum: species(
    "gnaphalium_subfalcatum",
    "Gnaphalium subfalcatum",
    "130. Compositae - Inuleae",
    "Hierba perenne, con tallos ascendentes densamente hojosos, de 15-40 cm de alto.",
    "Hojas concolores, laxamente lanuginosas en ambas caras, anchamente espatuladas, obtusas, de 1,5-5 cm; hojas superiores oblanceoladas, más o menos falcadas, de 1-4 mm de ancho; espigas densas y continuas; involucro de 3-3,5 mm, con brácteas interiores obtusas; aquenios tenuemente granulosos.",
    "Argentina. Común en suelos secos y arenosos."
  ),
  gnaphalium_purpureum: species(
    "gnaphalium_purpureum",
    "Gnaphalium purpureum",
    "130. Compositae - Inuleae",
    "Hierba perenne, con tallos erectos o ascendentes, sencillos o ramosos, cano-tomentosos y hojosos, de 30-80 cm de alto.",
    "Brácteas interiores del involucro agudas o acuminadas; hojas discolores, glabras o casi glabras en el haz y densamente cano-tomentosas en el envés, espatuladas, obtusas o semiagudas, de 2,5-8 cm; capítulos en espigas hojosas interrumpidas; involucro de 4,5 mm; aquenios cortamente granulosos.",
    "América. Rara en el Delta y en Puerto Nuevo."
  ),
  gnaphalium_filagineum: species(
    "gnaphalium_filagineum",
    "Gnaphalium filagineum",
    "130. Compositae - Inuleae",
    "Hierba anual, con tallos erectos, simples o poco ramosos, lanosos y hojosos, de 10-20 cm de alto.",
    "Hojas concolores, espatuladas, obtusas, lanosas en ambas caras, de 1,5-2,5 cm; capítulos en glomérulos seudoinvolucrados y pedicelados; involucro de 3-3,5 mm; aquenios levemente granulosos.",
    "América austral. Frecuente en la estepa clímax."
  ),
  gnaphalium_falcatum: species(
    "gnaphalium_falcatum",
    "Gnaphalium falcatum",
    "130. Compositae - Inuleae",
    "Hierba anual, con tallos decumbentes o ascendentes, sencillos o ramosos en la base, densamente tomentosos, de 10-30 cm de alto.",
    "Hojas concolores, oblanceolado-lineales, falcadas, agudas, incano-tomentosas en ambas caras, de 1-3 cm; capítulos en espigas hojosas compactas; involucro de 4-4,5 mm, con brácteas rojizas; aquenios levemente granulosos.",
    "América austral, en dunas y suelos arenosos."
  ),
  polymnia_connata: species(
    "polymnia_connata",
    "Polymnia connata",
    "130. Compositae - Heliantheae",
    "Hierba de 1-3 m de alto, con tallos erectos, poco ramosos y pubescente-glandulosos.",
    "Hojas opuestas, ovado-triangulares, contraídas en largo pecíolo alado, auriculado y connato con el pecíolo opuesto, irregularmente dentadas, glanduloso-pubescentes, de 10-40 cm por 6-20 cm; capítulos pocos, cimosos; involucro de 8 mm por 12 mm; aquenios oscuros y glabros.",
    "Sur del Brasil, Paraguay, Uruguay y norte de la Argentina, hasta el Delta y la ribera del Plata."
  ),
  acanthospermum_australe: species(
    "acanthospermum_australe",
    "Acanthospermum australe",
    "130. Compositae - Heliantheae",
    "Hierba anual, decumbente y pubescente.",
    "Frutos fusiformes, gruesos, cubiertos de cerdas ganchudas rígidas, de 7-9 mm; hojas rómbico-ovadas, dentadas, laxamente pubescentes, de 1,3-4 cm; capítulos pedicelados, solitarios en las axilas; involucro de 4 mm; flores amarillentas, con 5-8 marginales y unas 12 del disco.",
    "América cálida y templada, adventicia en otros continentes. En suelos arenosos húmedos."
  ),
  acanthospermum_hispidum: species(
    "acanthospermum_hispidum",
    "Acanthospermum hispidum",
    "130. Compositae - Heliantheae",
    "Hierba anual, erecta, híspida, de 20-60 cm de alto, ramificada dicotómicamente.",
    "Frutos cuneiformes, comprimidos, de 4-5 mm, cubiertos de espinas ganchudas y con dos largas espinas divergentes superiores; hojas ovadas, aserradas, pubescentes, de 2-12 cm; capítulos axilares, cortamente pedunculados; involucro de 4-5 mm; flores amarillas.",
    "América cálida. Rara cerca de Buenos Aires."
  ),
  ambrosia_tenuifolia: species(
    "ambrosia_tenuifolia",
    "Ambrosia tenuifolia",
    "130. Compositae - Heliantheae",
    "Hierba perenne con raíces gemíferas y tallos erectos, hirsutos, de 20-100 cm de alto.",
    "Fruto con 4-5 puntas alrededor del rostro, de 3 mm; hojas bipinatisectas, de 2-8 cm, con segmentos lineales, agudos, pubescentes, de 0,5-2 mm de ancho; capítulos masculinos en racimos terminales largos; involucro masculino de 1,5 mm por 2,5 mm.",
    "América del Sur. Muy frecuente en suelos húmedos. Nombre vulgar: altamisa."
  ),
  ambrosia_elatior: species(
    "ambrosia_elatior",
    "Ambrosia elatior",
    "130. Compositae - Heliantheae",
    "Hierba anual, erecta, ramosa y pubescente, de 50-100 cm de alto.",
    "Fruto con 4-5 puntas alrededor del rostro, de 3 mm; hojas pinatisectas, de 2-8 cm, con segmentos lanceolados, paucilobados, pubescentes, de 2-5 mm de ancho; capítulos masculinos en racimos terminales cortos; involucro masculino de 2 mm por 3 mm.",
    "América cálida. Rara en el Delta y en la ribera."
  ),
  ambrosia_scabra: species(
    "ambrosia_scabra",
    "Ambrosia scabra",
    "130. Compositae - Heliantheae",
    "Hierba perenne, erecta y áspero-pubescente, de 50-150 cm de alto.",
    "Frutos rugosos, sin puntas, de 3 mm; hojas de 7-20 cm, de contorno ovado, pinatisectas, con segmentos de 5-18 mm de ancho, aserrados o lobados, áspero-tuberculosos en el haz e híspidos en el envés; capítulos masculinos en largos racimos; involucro de 3 mm por 4 mm.",
    "Uruguay y nordeste de la Argentina. En bosques del Delta y de la ribera."
  ),
  xanthium_cavanillesii: species(
    "xanthium_cavanillesii",
    "Xanthium cavanillesii",
    "130. Compositae - Heliantheae",
    "Hierba anual, erecta, ramosa y áspera, de 1-2 m de alto, sin espinas.",
    "Hojas ásperas en ambas caras, pecioladas, con lámina ovado-triangular, acorazonada en la base, crenada, de 10-14 cm; capítulos masculinos globosos, racimosos; involucro fructífero de 1,5-2,5 cm; rostros del fruto bastante más largos que los garfios.",
    "América del Sur. Invasora común en suelos modificados. Nombre vulgar: abrojo."
  ),
  xanthium_saccharatum: species(
    "xanthium_saccharatum",
    "Xanthium saccharatum",
    "130. Compositae - Heliantheae",
    "Hierba anual, erecta, ramosa y áspera, de 1-2 m de alto, sin espinas.",
    "Hojas ásperas en ambas caras, largamente pecioladas, con lámina ovada u ovado-triangular, dentada y no acorazonada; involucro fructífero de 1,5-2,5 cm; rostros del fruto de la misma longitud que las espinas.",
    "América del Norte. Muy rara en la región, citada para Dock Sur."
  ),
  xanthium_spinosum: species(
    "xanthium_spinosum",
    "Xanthium spinosum",
    "130. Compositae - Heliantheae",
    "Hierba anual, erecta, ramosa y lanuginosa, de 1 m de alto, con largas espinas trífidas amarillas, raramente sin espinas.",
    "Hojas lanceoladas, enteras o con un lóbulo agudo por lado, laxamente pubescentes en el haz e incano-tomentosas en el envés, de 3-4 cm; capítulos masculinos en espigas terminales laxas, globosos, de 4 mm; frutos oblongos, cubiertos de espinas ganchudas, de 8-10 mm.",
    "Cosmopolita. Frecuente en suelos modificados. Nombre vulgar: cepa-caballo."
  ),
  jaegeria_hirta: species(
    "jaegeria_hirta",
    "Jaegeria hirta",
    "130. Compositae - Heliantheae",
    "Hierba anual erecta, ramosa y laxamente híspida, de 30-100 cm de alto.",
    "Hojas opuestas, cortamente pecioladas, ovado-elípticas, enteras o subdentadas, trinervadas, levemente pilosas, de 3-10 cm; capítulos pequeños, cimosos, pedicelados; involucro de 2 mm, con brácteas uniseriadas, densamente hirto-glandulosas en el dorso; aquenios oscuros, glabros, sin papus.",
    "América cálida. En bosques del Delta y de la ribera del Plata; florece en otoño."
  ),
  enhydra_anagallis: species(
    "enhydra_anagallis",
    "Enhydra anagallis",
    "130. Compositae - Heliantheae",
    "Hierba perenne acuática o palustre, tendida, crasa, glabra o laxamente pubescente, de 30-100 cm de largo.",
    "Hojas opuestas, oblanceolado-espatuladas, sésiles, auriculadas en la base, aserrado-dentadas superiormente, glabras, de 4-6 cm; capítulos sésiles o subsésiles, solitarios en las axilas; involucro hemisférico de 10-13 mm; flores envueltas por sus páleas; aquenios lanceolado-fusiformes, glabros, sin papus.",
    "Centro y sur del Brasil, Paraguay y nordeste de la Argentina, hasta el Delta y la ribera platense."
  ),
  eclipta_alba: species(
    "eclipta_alba",
    "Eclipta alba",
    "130. Compositae - Heliantheae",
    "Hierba anual, ascendente o erecta, laxamente pubescente.",
    "Hojas opuestas, sésiles, lanceoladas, enteras o aserradas, de 2,5-10 cm; capítulos numerosos, cimosos, largamente pedunculados; involucro de 3 mm; páleas ciliadas; flores blancas; aquenios trígonos o tetrágonos, rugosos; papus formado por una coronita de cerdas cortas.",
    "Regiones cálidas. Común en suelos húmedos."
  ),
  eclipta_megapotamica: species(
    "eclipta_megapotamica",
    "Eclipta megapotamica",
    "130. Compositae - Heliantheae",
    "Hierba perenne erecta, con pelos tendidos esparcidos, de cerca de 50 cm de alto.",
    "Hojas opuestas, cortamente pecioladas, lanceoladas, enteras, trinervadas, de 5-10 cm; capítulos solitarios; involucro de 10 mm, con brácteas lanceoladas tan largas como las lígulas; flores amarillas, las marginales con lígula lineal; aquenios del disco muy comprimidos, estrechamente alados; papus formado por dos aristas cortas.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en bosques de la ribera y del Delta; florece en primavera."
  ),
  eclipta_bellidioides: species(
    "eclipta_bellidioides",
    "Eclipta bellidioides",
    "130. Compositae - Heliantheae",
    "Hierba perenne decumbente, laxamente pubescente, de 20-30 cm de largo.",
    "Hojas opuestas, lanceolado-elípticas, semiobtusas, enteras, de 1,5-5 cm; capítulos solitarios, largamente pedunculados; involucro de 5-6 mm, con brácteas ovadas; flores amarillentas, las marginales cortamente liguladas; aquenios del disco muy comprimidos, obovados y rugosos; papus con dos aristas cortas y una corona de cerditas.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en suelos húmedos."
  ),
  blainvillea_biaristata: species(
    "blainvillea_biaristata",
    "Blainvillea biaristata",
    "130. Compositae - Heliantheae",
    "Hierba anual, con tallos erectos, laxamente pilosos, de 40-80 cm de alto.",
    "Hojas opuestas, distantes, pecioladas, ovadas, aserradas, de 3-8 cm; capítulos cimosos, agrupados en corto número; involucro acampanado de 6 mm, con 4-5 brácteas foliáceas y pubescentes; flores amarillas; aquenios comprimidos, oblanceolados, glabros o cortamente pilosos, coronados por dos aristas gruesas y cortas.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en bosques del Delta y de la ribera platense; florece en otoño."
  ),
  wedelia_glauca: species(
    "wedelia_glauca",
    "Wedelia glauca",
    "130. Compositae - Heliantheae",
    "Hierba perenne, rizomatosa, con tallos erectos, pubescentes, de 50-100 cm de alto.",
    "Hojas opuestas, lanceoladas, enteras o con algún diente grueso, trinervadas, pubescentes, de 6-15 cm; capítulos largamente pedunculados, solitarios en el extremo de las ramas; involucro hemisférico, de 8 mm por 15 mm; flores amarillas; aquenios marginales triquetros y los del disco tetragonales, gruesos, glabros; papus con coronita de escamas cortas y dos aristas muy breves.",
    "América austral cálida. Muy frecuente en suelos modificados; invasora y tóxica. Nombre vulgar: sunchillo."
  ),
  aspilia_pascalioides: species(
    "aspilia_pascalioides",
    "Aspilia pascalioides",
    "130. Compositae - Heliantheae",
    "Hierba perenne, erecta, de 1-1,5 m de alto.",
    "Hojas opuestas, sésiles, lanceoladas, enteras o paucidentadas, estrigiloso-pubescentes, de 7-18 cm por 8-16 mm; capítulos solitarios, grandes, largamente pedunculados; involucro de 1-1,5 cm por 1,5-2 cm; flores doradas; aquenios algo pubescentes; papus con 2-4 aristas cortas y escamitas soldadas en copa.",
    "Hallada en Entre Ríos y Buenos Aires, en selvas marginales del Uruguay y del Plata."
  ),
  aspilia_silphioides: species(
    "aspilia_silphioides",
    "Aspilia silphioides",
    "130. Compositae - Heliantheae",
    "Sufrútice ramoso e híspido, de 1,5-2 m de alto.",
    "Hojas opuestas, pecioladas, ovadas, acuminadas y redondeadas en la base, aserradas, estrigoso-pubescentes, de 5-13 cm por 2-7 cm; capítulos 1-2 en el extremo de las ramas, largamente pedunculados; involucro hemisférico, de 8-10 mm por 12-20 mm; flores doradas, con lígulas de 15-20 mm; aquenios rugosos.",
    "Sur del Brasil, Paraguay, Uruguay y norte de la Argentina hasta el Río de la Plata. Frecuente en selvas marginales del Delta y de la ribera."
  ),
  viguiera_anchusaefolia: species(
    "viguiera_anchusaefolia",
    "Viguiera anchusaefolia",
    "130. Compositae - Heliantheae",
    "Sufrútice de cerca de 1 m de alto, estrigoso-pubescente.",
    "Hojas alternas, oblongas, agudas, cortamente pecioladas, enteras o semiaserradas, de 2,5-9 cm por 5-13 mm; capítulos solitarios, largamente pedunculados; involucro de 7-10 mm, con brácteas en 3-4 series; flores amarillas; aquenios densamente pubescentes; papus con dos aristas y escamitas cortas.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. En suelos secos; rara en San Isidro y Eva Perón."
  ),
  viguiera_anchusaefolia_var_immarginata: species(
    "viguiera_anchusaefolia_var_immarginata",
    "Viguiera anchusaefolia var. immarginata",
    "130. Compositae - Heliantheae",
    "Variedad de Viguiera anchusaefolia con hojas más angostas.",
    "Hojas lineal-oblongas, de 2,5-8 cm por 2-8 mm.",
    "Rara en San Nicolás, Olivos y Eva Perón."
  ),
  calyceraceae: family(
    "calyceraceae",
    "129. Calyceraceae",
    "Dicotiledóneas del Grupo E.",
    "Flores en capítulos; ovario unilocular y flores pentámeras actinomorfas."
  ),
  acicarpha_procumbens: species(
    "acicarpha_procumbens",
    "Acicarpha procumbens",
    "129. Calyceraceae",
    "Hierba perenne, glabra y decumbente.",
    "Hojas enteras, oblanceolado-espatuladas, obtusas, largamente atenuadas en seudopecíolo; cabezuelas globosas, largamente pedunculadas, terminales o seudolaterales, de 1 cm de diámetro; involucro de 5-6 brácteas; aquenios con cinco aristas o alas prolongadas en puntas agudas.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. En suelos salobres; florece en primavera."
  ),
  acicarpha_tribuloides: species(
    "acicarpha_tribuloides",
    "Acicarpha tribuloides",
    "129. Calyceraceae",
    "Hierba anual, erecta y glabra, de 20-50 cm de alto.",
    "Hojas basales arrosetadas, espatuladas y lobadas; hojas caulinares ensanchadas en la base, dentadas o lobadas; capítulos opuestos a las hojas, largamente pedunculados, de 1 cm de diámetro; brácteas involucrales cinco; aquenios fértiles coronados por largas espinas.",
    "Sur del Brasil, Uruguay, Paraguay y norte de la Argentina. Común en los prados del Delta y de la ribera del Plata."
  ),
  boopis_anthemoides: species(
    "boopis_anthemoides",
    "Boopis anthemoides",
    "129. Calyceraceae",
    "Sufrútice glabro de 20-50 cm de alto, con tallos ramosos.",
    "Hojas profundamente pinatisectas, con raquis y segmentos lineales, agudos; capítulos terminales pedunculados; flores isomorfas, normalmente fértiles, con tubo muy estrecho y limbo amplio, 5-lobado; cáliz no espinoso.",
    "Norte y centro de la Argentina. Rara cerca de Buenos Aires, en suelos secos y barrancas."
  ),
  dipsacaceae: family(
    "dipsacaceae",
    "126. Dipsacaceae",
    "Dicotiledóneas del Grupo E.",
    "Flores en capítulos; ovario unilocular y flores cigomorfas."
  ),
  dipsacus_fullonum: species(
    "dipsacus_fullonum",
    "Dipsacus fullonum",
    "126. Dipsacaceae",
    "Hierba bienal de 1-1,5 m de alto, con aguijones cortos.",
    "Hojas inferiores en roseta; hojas superiores opuestas y connatas en la base, oblongo-oblanceoladas, obtusas, enteras o crenadas, glabras; capítulos terminales hemisféricos de unos 3 cm de diámetro, con flores liliáceas; capítulo fructífero ovoideo, con páleas espiniformes ganchudas.",
    "Europa, adventicia en América. Rara en la región, junto a vías férreas. Sus capítulos fructificados se utilizan para cardar lana. Nombre vulgar: cardo de cardar."
  ),
  cucurbitaceae: family(
    "cucurbitaceae",
    "127. Cucurbitaceae",
    "Dicotiledóneas del Grupo E.",
    "Ovario ínfero; flores no en capítulos; plantas dioicas."
  ),
  wilbrandia_sagittifolia_var_villosa: species(
    "wilbrandia_sagittifolia_var_villosa",
    "Wilbrandia sagittifolia var. villosa",
    "127. Cucurbitaceae",
    "Hierba perenne monoica, con raíz gruesa y tallos rastreros o trepadores, hirsutos, de 4-5 m.",
    "Hojas pecioladas, trilobado-sagitadas, enteras o algo dentadas, escabroso-hirsutas; zarcillos simples; flores masculinas racimosas, con lacinias corolinas de 4-5 mm; fruto ovoide-oblongo, verde con estrías más claras.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Escasa en los alrededores de Buenos Aires."
  ),
  wilbrandia_sagittifolia_var_disecta: species(
    "wilbrandia_sagittifolia_var_disecta",
    "Wilbrandia sagittifolia var. disecta",
    "127. Cucurbitaceae",
    "Variedad de Wilbrandia sagittifolia con hojas profundamente divididas.",
    "Se diferencia de la var. villosa por las hojas profundamente divididas en segmentos angostos; mantiene el hábito perenne voluble y los zarcillos simples.",
    "Centro de la Argentina. Rara en la región, citada para Zelaya."
  ),
  cucurbitella_asperata: species(
    "cucurbitella_asperata",
    "Cucurbitella asperata",
    "127. Cucurbitaceae",
    "Hierba perenne dioica, con raíz gruesa y tallos rastreros glabros, de 2-3 m.",
    "Pecíolos híspidos; hojas suborbiculares, 5-palmado-partidas, con segmentos pinatífidos, escabrosos e híspidos en el envés; flores masculinas amarillas en racimos 3-5-floros; frutos subglobosos, verdosos, de 2,5 cm.",
    "Argentina central. Rara en la región, en la estepa clímax; florece en verano."
  ),
  citrullus_colocynthis: species(
    "citrullus_colocynthis",
    "Citrullus colocynthis",
    "127. Cucurbitaceae",
    "Planta monoica perenne, con raíz gruesa y tallos rastreros de 2-3 m, de ramas hirsutas.",
    "Hojas rígidas, profundamente palmadas, 3-5-lobadas, con lóbulos sinuado-pinatífidos, por lo general vellosas en la cara inferior; zarcillos bífidos; flores masculinas amarillas, solitarias; fruto del tamaño de una naranja, glabro, verdoso y muy amargo.",
    "Viejo Mundo. Rara en la región como planta adventicia."
  ),
  cucurbita_andreana: species(
    "cucurbita_andreana",
    "Cucurbita andreana",
    "127. Cucurbitaceae",
    "Planta anual, con tallos rastreros hirsutos.",
    "Hojas grandes, trilobadas, con gruesas nervaduras hirsutas; flores masculinas de 7-9 cm; fruto globoso u obovado, de 8-12 cm, verde con estrías claras y muy amargo.",
    "Uruguay y nordeste de la Argentina. Rara en suelos modificados. Nombre vulgar: zapallito amargo."
  ),
  cayaponia_podantha: species(
    "cayaponia_podantha",
    "Cayaponia podantha",
    "127. Cucurbitaceae",
    "Planta dioica perenne, con tallos trepadores pubescentes.",
    "Flor masculina con receptáculo atenuado en la base en forma de tubo; sépalos de 6-8 mm; anteras en cabezuela de 6-9 mm; fruto oblongo, rojizo, de 3-4 cm, con 6-12 semillas; hojas 3-5-lobadas, tomentosas en el envés; zarcillos simples.",
    "Norte de la Argentina. Se halla en los bosques de la ribera platense."
  ),
  cayaponia_ficifolia: species(
    "cayaponia_ficifolia",
    "Cayaponia ficifolia",
    "127. Cucurbitaceae",
    "Planta dioica perenne, ramosa, trepadora e hirsuta.",
    "Flor masculina con receptáculo redondeado o cortamente atenuado en la base; sépalos pequeños; anteras en cabezuela de 5-6 mm; fruto de unos 10 mm, 3-seminado; hojas variables, por lo común 5-lobadas o partidas; zarcillos 1-3-fidos.",
    "Sur del Brasil, Uruguay y nordeste de la Argentina. Común en bosques del Delta y de la ribera, también en cercos y alambrados. Nombre vulgar: tayuyá."
  ),
  cyclanthera_hystrix: species(
    "cyclanthera_hystrix",
    "Cyclanthera hystrix",
    "127. Cucurbitaceae",
    "Planta monoica trepadora, con tallos gráciles y glabros.",
    "Hojas polimorfas, más o menos profundamente 3-5-lobadas o subíntegras, truncadas o emarginadas en la base, crenado-dentadas; zarcillos simples o bífidos; flores masculinas en racimos paucifloros; fruto rostrado, cubierto de púas, de unos 2 cm, con dehiscencia elástica.",
    "Uruguay y norte de la Argentina. Muy común en los bosques del Delta y de la ribera platense."
  ),
  valerianaceae: family(
    "valerianaceae",
    "125. Valerianaceae",
    "Dicotiledóneas del Grupo E.",
    "Cáliz en forma de papus plumoso; estambres 3."
  ),
  valeriana_scandens: species(
    "valeriana_scandens",
    "Valeriana scandens",
    "125. Valerianaceae",
    "Hierba anual, voluble y glabra.",
    "Hojas pecioladas: las inferiores trifolioladas, con folíolos ovados y trinervados; las superiores enteras, acorazonadas, 5-7-nervadas y acuminadas; flores pequeñas, polígamo-dioicas, en cimas dicotómicas multifloras; corola blanca de unos 3 mm; frutos con vilano de 9-12 cerdas plumosas.",
    "América cálida. Frecuente en bosques del Delta y de las riberas del Paraná y del Plata; florece en primavera."
  ),
  valeriana_salicariaefolia: species(
    "valeriana_salicariaefolia",
    "Valeriana salicariaefolia",
    "125. Valerianaceae",
    "Hierba perenne, rizomatosa y glabra, con rizoma grueso y tallos de cerca de 1 m de alto.",
    "Hojas enteras, oblongo-lanceoladas, sésiles o cortísimamente pecioladas, agudas, ensanchadas y redondeadas en la base, enteras y revolutas, de 10-18 x 1-1,8 cm; flores verdosas unisexuadas de 2-2,5 mm en panojas terminales densas; frutos elípticos, glabros, sin vilano.",
    "Sur del Brasil, Uruguay y región platense. Común en bosques higrófilos."
  ),
  valeriana_polystachya: species(
    "valeriana_polystachya",
    "Valeriana polystachya",
    "125. Valerianaceae",
    "Hierba perenne, rizomatosa, glabra, de 1-1,5 m de alto.",
    "Hojas, al menos las superiores, profundamente pinatisectas, con 3-8 pares de segmentos lanceolados, enteros, muy inclinados hacia el ápice; flores amarillentas, polígamo-dioicas, de 2-3,5 mm, en densas panojas de espigas de glomérulos; frutos oblongos, triquetros, sin vilano.",
    "Uruguay y nordeste de la Argentina. Común en pajonales del Delta y de la ribera del Plata."
  ),
  campanulaceae: family(
    "campanulaceae",
    "128. Campanulaceae",
    "Dicotiledóneas del Grupo E.",
    "Anteras más o menos unidas formando un tubo."
  ),
  pratia_hederacea: species(
    "pratia_hederacea",
    "Pratia hederacea",
    "128. Campanulaceae",
    "Hierba pigmea, perenne y rastrera.",
    "Hojas alternas, ovado-elípticas, sinuado-dentadas, glabras, de 5-10 mm; flores largamente pedunculadas; corola blanca de unos 9 mm, cigomorfa, hendida en el dorso; fruto baya.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina. Común en el césped de la ribera platense."
  ),
  specularia_biflora: species(
    "specularia_biflora",
    "Specularia biflora",
    "128. Campanulaceae",
    "Hierba anual erecta.",
    "Hojas sésiles, ovadas, crenadas, laxamente pubescentes, de 1-2 cm; flores solitarias en las axilas, de unos 10 mm; las primeras generalmente cleistógamas y las tardías casmógamas; corola rotácea, azulado-violácea, de unos 4 mm; cápsulas cilíndricas de unos 8 mm.",
    "América. Frecuente en campos fértiles, jardines, etc."
  ),
  wahlenbergia_linarioides: species(
    "wahlenbergia_linarioides",
    "Wahlenbergia linarioides",
    "128. Campanulaceae",
    "Hierba perenne glabra, con tallos erectos, sencillos, de 30-50 cm de alto.",
    "Hojas alternas, lineales y enteras; flores blancas o azuladas, largamente pedunculadas, en amplia cima corimbiforme; corola acampanada o infundibuliforme; cápsulas cilíndricas.",
    "América austral. Común en la estepa clímax."
  ),
  caprifoliaceae: family(
    "caprifoliaceae",
    "124. Caprifoliaceae",
    "Dicotiledóneas del Grupo E.",
    "Corola cigomorfa grande o, con corola actinomorfa, hojas pinaticompuestas."
  ),
  sambucus_australis: species(
    "sambucus_australis",
    "Sambucus australis",
    "124. Caprifoliaceae",
    "Arbolito de 3-5 m de alto, con hojas opuestas imparipinadas.",
    "Hojas estipuladas, con 11-13 folíolos ovado-lanceolados, aserrados, glabros, de 3,5-6 cm; estípulas sésiles, redondeadas y dentadas; flores blancas muy numerosas en cimas terminales umbeliformes densas; fruto globoso negro.",
    "Sur del Brasil, Paraguay, Uruguay y norte de la Argentina. Común en bosques de talas y selvas marginales subclimácicas. Nombre vulgar: sauco."
  ),
  lonicera_japonica: species(
    "lonicera_japonica",
    "Lonicera japonica",
    "124. Caprifoliaceae",
    "Enredadera con hojas persistentes, ovadas, cortamente pecioladas y glabras.",
    "Hojas de 5-8 x 2-3,5 cm; brácteas ovadas; flores blancas o amarillentas, fragantes, geminadas en las axilas; tubo de la corola pubescente, de unos 2 cm, con limbo bilabiado; estambres exertos; ovario pubescente.",
    "China y Japón. Cultivada como ornamental y espontánea en el Delta y en la ribera platense. Nombre vulgar: madreselva."
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
      nextNodeId: "ceratophyllaceae_terminal",
    },
    opcionA_prima: {
      label: "No; terrestre o acuática, pero con hojas no divididas dicotómicamente",
      keyStep: "A'",
      nextNodeId: "dicot_group_a_2",
    },
  },
  ceratophyllaceae_terminal: {
    id: "ceratophyllaceae_terminal",
    milestone: "Ceratophyllaceae",
    manualPage: 211,
    descripcion: "Ceratophyllaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Ceratophyllum demersum var. oxyacanthum",
      keyStep: "1",
      especieId: "ceratophyllum_demersum_oxyacanthum",
    },
    opcionA_prima: {
      label: "Identificar como Ceratophyllum demersum var. oxyacanthum",
      keyStep: "1",
      especieId: "ceratophyllum_demersum_oxyacanthum",
    },
    especie: manualFamilyData.ceratophyllum_demersum_oxyacanthum,
  },
  dicot_group_a_2: {
    id: "dicot_group_a_2",
    descripcion: "Grupo A: ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario 3-carpelar, 3-locular; por lo común con látex",
      keyStep: "B",
      nextNodeId: "euphorbiaceae_a",
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
      nextNodeId: "callitrichaceae_a",
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
      nextNodeId: "rubiaceae_a",
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
      nextNodeId: "rosaceae_a",
    },
    opcionA_prima: {
      label: "Árboles; hojas sin estípulas",
      keyStep: "E'",
      nextNodeId: "santalaceae_a",
    },
  },
  rosaceae_a: {
    id: "rosaceae_a",
    milestone: "Rosaceae",
    manualPage: 237,
    descripcion: "Rosaceae - A: presencia de pétalos y posición del gineceo",
    opcionA: {
      label: "Flores desprovistas de pétalos; gineceo ínfero",
      keyStep: "A",
      nextNodeId: "rosaceae_b",
    },
    opcionA_prima: {
      label: "Flores con pétalos grandes; gineceo súpero",
      keyStep: "A'",
      nextNodeId: "rosaceae_c",
    },
  },
  rosaceae_b: {
    id: "rosaceae_b",
    milestone: "Rosaceae",
    manualPage: 237,
    descripcion: "Rosaceae - B: lóbulos del cáliz",
    opcionA: {
      label: "Cáliz con 8-10 lóbulos; hierbas pigmeas",
      keyStep: "B",
      especieId: "alchemilla_parodii",
    },
    opcionA_prima: {
      label: "Cáliz con 4-5 lóbulos; arbustos bajos",
      keyStep: "B'",
      especieId: "margyricarpus_pinnatus",
    },
  },
  rosaceae_c: {
    id: "rosaceae_c",
    milestone: "Rosaceae",
    manualPage: 237,
    descripcion: "Rosaceae - C: tipo de fruto",
    opcionA: {
      label: "Fruto formado por numerosas drupas jugosas semejantes a una mora; flores blancas o rosadas; enredaderas espinosas",
      keyStep: "C",
      nextNodeId: "rubus_a",
    },
    opcionA_prima: {
      label: "Fruto formado por numerosos aquenios sobre un receptáculo carnoso; flores amarillas; hierbas inermes, rastreras",
      keyStep: "C'",
      especieId: "duchesnea_indica",
    },
  },
  rubus_a: {
    id: "rubus_a",
    milestone: "Rubus",
    manualPage: 240,
    descripcion: "Rubus - A: número de folíolos y pubescencia",
    opcionA: {
      label: "Hojas 3-5-folioladas; folíolos ovados, acuminados, albo-tomentosos en la cara inferior; tallos redondeados con numerosos aguijones",
      keyStep: "A",
      especieId: "rubus_ulmifolius",
    },
    opcionA_prima: {
      label: "Hojas generalmente 3-folioladas; folíolos ovados u obovados, glabros en el haz y velludos en el envés; tallos angulosos, pubescentes, con aguijones curvos",
      keyStep: "A'",
      especieId: "rubus_caesius",
    },
  },
  leguminosae_a: {
    id: "leguminosae_a",
    milestone: "Leguminosae",
    manualPage: 241,
    descripcion: "Leguminosae - A: simetría floral y prefloración",
    opcionA: {
      label: "Flores actinomorfas, en espigas o capítulos densos; corola de prefloración valvar; hojas bipinadas o reducidas a filodios",
      keyStep: "A",
      nextNodeId: "mimosoideae_a",
    },
    opcionA_prima: {
      label: "Flores cigomorfas o irregulares; corola de prefloración imbricada",
      keyStep: "A'",
      nextNodeId: "leguminosae_b",
    },
  },
  leguminosae_b: {
    id: "leguminosae_b",
    milestone: "Leguminosae",
    manualPage: 241,
    descripcion: "Leguminosae - B: posición del estandarte",
    opcionA: {
      label: "Pétalo superior interno, cubierto en sus bordes por los otros pétalos; sépalos y pétalos libres; hojas pinadas o bipinadas",
      keyStep: "B",
      nextNodeId: "caesalpinioideae_a",
    },
    opcionA_prima: {
      label: "Pétalo superior externo, cubriendo con sus bordes a los otros pétalos; corola generalmente amariposada",
      keyStep: "B'",
      nextNodeId: "papilionoideae_a",
    },
  },
  mimosoideae_a: {
    id: "mimosoideae_a",
    milestone: "Mimosoideae",
    manualPage: 241,
    descripcion: "Mimosoideae - A: número de estambres",
    opcionA: {
      label: "Estambres 5-10",
      keyStep: "A",
      nextNodeId: "mimosoideae_b",
    },
    opcionA_prima: {
      label: "Estambres muy numerosos; arbustos o árboles",
      keyStep: "A'",
      nextNodeId: "mimosoideae_d",
    },
  },
  mimosoideae_b: {
    id: "mimosoideae_b",
    milestone: "Mimosoideae",
    manualPage: 241,
    descripcion: "Mimosoideae - B: porte y tipo de legumbre",
    opcionA: {
      label: "Hierbas perennes; legumbre normal",
      keyStep: "B",
      especieId: "desmanthus_virgatus",
    },
    opcionA_prima: {
      label: "Arbustos o árboles; legumbre lomentácea o indehiscente",
      keyStep: "B'",
      nextNodeId: "mimosoideae_c",
    },
  },
  mimosoideae_c: {
    id: "mimosoideae_c",
    milestone: "Mimosoideae",
    manualPage: 241,
    descripcion: "Mimosoideae - C: tipo de inflorescencia y glándula de anteras",
    opcionA: {
      label: "Flores en capítulos esféricos; anteras sin glándula",
      keyStep: "C",
      nextNodeId: "mimosa_a",
    },
    opcionA_prima: {
      label: "Flores en espigas alargadas; anteras con glándula apical",
      keyStep: "C'",
      especieId: "prosopis_alba",
    },
  },
  mimosa_a: {
    id: "mimosa_a",
    milestone: "Mimosa",
    manualPage: 243,
    descripcion: "Mimosa - A: presencia de aguijones y número de estambres",
    opcionA: {
      label: "Arbustos inermes; flores haplostémonas, con 4-5 estambres",
      keyStep: "A",
      nextNodeId: "mimosa_b",
    },
    opcionA_prima: {
      label: "Arbustos con aguijones; flores diplostémonas, con 8-10 estambres",
      keyStep: "A'",
      nextNodeId: "mimosa_c",
    },
  },
  mimosa_b: {
    id: "mimosa_b",
    milestone: "Mimosa",
    manualPage: 243,
    descripcion: "Mimosa - B: pares de divisiones primarias",
    opcionA: {
      label: "Hojas bipinadas, con 2-6 pares de divisiones primarias, cada una con 11-20 pares de foliólulos; flores amarillas; estambres unidos en la base",
      keyStep: "B",
      especieId: "mimosa_bonplandii",
    },
    opcionA_prima: {
      label: "Hojas bipinadas, con un solo par de divisiones primarias, cada una con 15-31 pares de foliólulos; flores amarillas; estambres libres hasta la base",
      keyStep: "B'",
      especieId: "mimosa_pilulifera",
    },
  },
  mimosa_c: {
    id: "mimosa_c",
    milestone: "Mimosa",
    manualPage: 245,
    descripcion: "Mimosa - C: hábito y pubescencia",
    opcionA: {
      label: "Arbustos hirsutos, con aguijones curvos y pelos tiesos bronceados; hojas grandes, sensitivas; lamentos con 7-21 artejos caducos",
      keyStep: "C",
      especieId: "mimosa_pigra",
    },
    opcionA_prima: {
      label: "Arbusto rastrero con aguijones y pelos tendidos cenicientos; hojas sensitivas; lamentos muy comprimidos con 3-15 artículos",
      keyStep: "C'",
      especieId: "mimosa_vellosiella",
    },
  },
  mimosoideae_d: {
    id: "mimosoideae_d",
    milestone: "Mimosoideae",
    manualPage: 241,
    descripcion: "Mimosoideae - D: filamentos de los estambres",
    opcionA: {
      label: "Filamentos de los estambres libres entre sí",
      keyStep: "D",
      nextNodeId: "acacia_a",
    },
    opcionA_prima: {
      label: "Filamentos de los estambres soldados en la parte inferior formando un tubo más o menos largo",
      keyStep: "D'",
      nextNodeId: "mimosoideae_e",
    },
  },
  acacia_a: {
    id: "acacia_a",
    milestone: "Acacia",
    manualPage: 246,
    descripcion: "Acacia - A: color e inflorescencia",
    opcionA: {
      label: "Flores anaranjadas, fragantes, dispuestas en cabezuelas; hojas bipinadas con foliólulos muy pequeños; legumbres gruesas, indehiscentes, negras",
      keyStep: "A",
      especieId: "acacia_caven",
    },
    opcionA_prima: {
      label: "Flores blancas, en espigas; hojas bipinadas, con aguijones sobre el raquis y 3-6 pares de ramificaciones primarias; legumbre dehiscente, oblonga, comprimida",
      keyStep: "A'",
      especieId: "acacia_bonariensis",
    },
  },
  mimosoideae_e: {
    id: "mimosoideae_e",
    milestone: "Mimosoideae",
    manualPage: 241,
    descripcion: "Mimosoideae - E: tipo de hoja y raquis",
    opcionA: {
      label: "Hojas paripinadas, con raquis alado",
      keyStep: "E",
      especieId: "inga_uruguensis",
    },
    opcionA_prima: {
      label: "Hojas bipinadas; raquis sin alas",
      keyStep: "E'",
      nextNodeId: "mimosoideae_f",
    },
  },
  mimosoideae_f: {
    id: "mimosoideae_f",
    milestone: "Mimosoideae",
    manualPage: 241,
    descripcion: "Mimosoideae - F: dehiscencia del fruto",
    opcionA: {
      label: "Fruto legumbre dehiscente",
      keyStep: "F",
      especieId: "calliandra_parvifolia",
    },
    opcionA_prima: {
      label: "Fruto indehiscente, en forma de oreja",
      keyStep: "F'",
      especieId: "enterolobium_contortisiliquum",
    },
  },
  caesalpinioideae_a: {
    id: "caesalpinioideae_a",
    milestone: "Caesalpinioideae",
    manualPage: 241,
    descripcion: "Caesalpinioideae - A: hojas simples o compuestas",
    opcionA: {
      label: "Hojas simples, bilobadas; árboles con flores blancas muy grandes",
      keyStep: "A",
      especieId: "bauhinia_candicans",
    },
    opcionA_prima: {
      label: "Hojas pinadas o bipinadas",
      keyStep: "A'",
      nextNodeId: "caesalpinioideae_b",
    },
  },
  caesalpinioideae_b: {
    id: "caesalpinioideae_b",
    milestone: "Caesalpinioideae",
    manualPage: 241,
    descripcion: "Caesalpinioideae - B: árboles espinosos o inermes",
    opcionA: {
      label: "Árboles espinosos",
      keyStep: "B",
      nextNodeId: "caesalpinioideae_c",
    },
    opcionA_prima: {
      label: "Árboles o arbustos inermes",
      keyStep: "B'",
      nextNodeId: "caesalpinioideae_d",
    },
  },
  caesalpinioideae_c: {
    id: "caesalpinioideae_c",
    milestone: "Caesalpinioideae",
    manualPage: 241,
    descripcion: "Caesalpinioideae - C: color de flores y espinas",
    opcionA: {
      label: "Flores amarillas; hojas bipinadas, con raquis primario corto prolongado en una espina y raquis secundarios planos verdes",
      keyStep: "C",
      especieId: "parkinsonia_aculeata",
    },
    opcionA_prima: {
      label: "Flores verdosas o blancas; hojas bipinadas, con raquis primario largo no espinoso; espinas del tallo ramificadas",
      keyStep: "C'",
      especieId: "gleditsia_triacanthos",
    },
  },
  caesalpinioideae_d: {
    id: "caesalpinioideae_d",
    milestone: "Caesalpinioideae",
    manualPage: 241,
    descripcion: "Caesalpinioideae - D: hojas pinadas o bipinadas",
    opcionA: {
      label: "Hojas pinadas",
      keyStep: "D",
      nextNodeId: "cassia_a",
    },
    opcionA_prima: {
      label: "Hojas bipinadas",
      keyStep: "D'",
      especieId: "caesalpinia_gilliesii",
    },
  },
  cassia_a: {
    id: "cassia_a",
    milestone: "Cassia",
    manualPage: 249,
    descripcion: "Cassia - A: porte y hojas",
    opcionA: {
      label: "Arbustos o arbolitos glabros; hojas pinadas con raquis de unos 4 cm y 3 pares de folíolos; legumbres cilíndricas de unos 10 cm",
      keyStep: "A",
      especieId: "cassia_corymbosa",
    },
    opcionA_prima: {
      label: "Hierba perenne, glabra; hojas paripinadas 4-6-yugas; legumbres comprimidas, largas y estrechas, con 20-40 semillas",
      keyStep: "A'",
      especieId: "cassia_occidentalis",
    },
  },
  papilionoideae_a: {
    id: "papilionoideae_a",
    milestone: "Papilionoideae",
    manualPage: 241,
    descripcion: "Papilionoideae - A: hojas reducidas o normales",
    opcionA: {
      label: "Hojas reducidas, espiniformes",
      keyStep: "A",
      especieId: "ulex_europaeus",
    },
    opcionA_prima: {
      label: "Hojas normales, no espiniformes",
      keyStep: "A'",
      nextNodeId: "papilionoideae_b",
    },
  },
  papilionoideae_b: {
    id: "papilionoideae_b",
    milestone: "Papilionoideae",
    manualPage: 241,
    descripcion: "Papilionoideae - B: número de folíolos",
    opcionA: {
      label: "Hojas formadas por un solo folíolo",
      keyStep: "B",
      especieId: "galactia_marginalis",
    },
    opcionA_prima: {
      label: "Hojas compuestas, con más de un folíolo",
      keyStep: "B'",
      nextNodeId: "papilionoideae_c",
    },
  },
  papilionoideae_c: {
    id: "papilionoideae_c",
    milestone: "Papilionoideae",
    manualPage: 241,
    descripcion: "Papilionoideae - C: hojas digitadas o pinadas",
    opcionA: {
      label: "Hojas digitadas, con 5-15 folíolos",
      keyStep: "C",
      nextNodeId: "lupinus_a",
    },
    opcionA_prima: {
      label: "Hojas pinadas",
      keyStep: "C'",
      nextNodeId: "papilionoideae_d",
    },
  },
  papilionoideae_d: {
    id: "papilionoideae_d",
    milestone: "Papilionoideae",
    manualPage: 241,
    descripcion: "Papilionoideae - D: hojas con zarcillos",
    opcionA: {
      label: "Hojas terminadas en zarcillos",
      keyStep: "D",
      nextNodeId: "papilionoideae_e",
    },
    opcionA_prima: {
      label: "Hojas sin zarcillos",
      keyStep: "D'",
      nextNodeId: "papilionoideae_f",
    },
  },
  papilionoideae_e: {
    id: "papilionoideae_e",
    milestone: "Papilionoideae",
    manualPage: 241,
    descripcion: "Papilionoideae - E: corte del tubo estaminal",
    opcionA: {
      label: "Tubo estaminal cortado en bisel en el ápice",
      keyStep: "E",
      nextNodeId: "vicia_a",
    },
    opcionA_prima: {
      label: "Tubo estaminal truncado transversalmente en el ápice",
      keyStep: "E'",
      nextNodeId: "lathyrus_a",
    },
  },
  lupinus_a: {
    id: "lupinus_a",
    milestone: "Lupinus",
    manualPage: 251,
    descripcion: "Lupinus - A: ciclo de vida, pubescencia y folíolos",
    opcionA: {
      label: "Hierba anual, cubierta de pelos leonados largos; hojas con 5 folíolos oblanceolados; estípulas grandes; flores azuladas",
      keyStep: "A",
      especieId: "lupinus_bracteolaris",
    },
    opcionA_prima: {
      label: "Hierba perenne, de 50 cm, densamente argénteo-serícea; hojas con 7-9 folíolos oblanceolados; flores azules",
      keyStep: "A'",
      especieId: "lupinus_multiflorus",
    },
  },
  vicia_a: {
    id: "vicia_a",
    milestone: "Vicia",
    manualPage: 251,
    descripcion: "Vicia - A: disposición de las flores",
    opcionA: {
      label: "Flores dispuestas en racimos",
      keyStep: "A",
      nextNodeId: "vicia_b",
    },
    opcionA_prima: {
      label: "Flores solitarias o en grupos de 2-3, y entonces sésiles en las axilas de las hojas",
      keyStep: "A'",
      nextNodeId: "vicia_e",
    },
  },
  vicia_b: {
    id: "vicia_b",
    milestone: "Vicia",
    manualPage: 251,
    descripcion: "Vicia - B: pubescencia y racimos",
    opcionA: {
      label: "Plantas pubescentes; hojas con 4-5 pares de folíolos; racimos multifloros, con más de 6 flores aproximadas y vueltas hacia el mismo lado",
      keyStep: "B",
      nextNodeId: "vicia_c",
    },
    opcionA_prima: {
      label: "Plantas glabras o casi glabras; hojas con 2-4 pares de folíolos; racimos paucifloros, con 2-4 flores ralas",
      keyStep: "B'",
      nextNodeId: "vicia_d",
    },
  },
  vicia_c: {
    id: "vicia_c",
    milestone: "Vicia",
    manualPage: 251,
    descripcion: "Vicia - C: largo de folíolos en plantas pubescentes",
    opcionA: {
      label: "Folíolos de menos de 1 cm; hierba anual tendida o voluble; flores pequeñas azules en racimos axilares de 6-12 flores",
      keyStep: "C",
      especieId: "vicia_nana",
    },
    opcionA_prima: {
      label: "Folíolos de 12-17 mm; anual con tallos volubles y pubescentes; flores azules en racimos axilares",
      keyStep: "C'",
      especieId: "vicia_montevidensis",
    },
  },
  vicia_d: {
    id: "vicia_d",
    milestone: "Vicia",
    manualPage: 251,
    descripcion: "Vicia - D: ancho de los folíolos en plantas glabras",
    opcionA: {
      label: "Folíolos lineal-filiformes, de menos de 0,5 mm de anchura; hojas 1-2-yugas; legumbres cortas y anchas",
      keyStep: "D",
      especieId: "vicia_selloi",
    },
    opcionA_prima: {
      label: "Folíolos lineal-oblongos, de 0,7-3 mm de anchura; hojas con 2-3 pares de folíolos; legumbres oblongas, comprimidas",
      keyStep: "D'",
      especieId: "vicia_graminea",
    },
  },
  vicia_e: {
    id: "vicia_e",
    milestone: "Vicia",
    manualPage: 251,
    descripcion: "Vicia - E: flores solitarias o axilares agrupadas",
    opcionA: {
      label: "Flores solitarias, largamente pedunculadas; anual rastrera, glabra o algo pubescente; hojas con 1-2 pares de folíolos",
      keyStep: "E",
      especieId: "vicia_magellanica",
    },
    opcionA_prima: {
      label: "Flores 1-3, sésiles o casi sésiles en las axilas de las hojas",
      keyStep: "E'",
      nextNodeId: "vicia_f",
    },
  },
  vicia_f: {
    id: "vicia_f",
    milestone: "Vicia",
    manualPage: 251,
    descripcion: "Vicia - F: ancho de folíolos en flores axilares",
    opcionA: {
      label: "Folíolos de 0,5-1 mm de anchura; anual débil, rastrera o voluble, laxamente pubescente; flores de 4-7 mm",
      keyStep: "F",
      especieId: "vicia_linearifolia",
    },
    opcionA_prima: {
      label: "Folíolos de 2-6 mm de anchura, a veces más; flores de más de 10 mm",
      keyStep: "F'",
      nextNodeId: "vicia_g",
    },
  },
  vicia_g: {
    id: "vicia_g",
    milestone: "Vicia",
    manualPage: 251,
    descripcion: "Vicia - G: forma de los folíolos y color del fruto",
    opcionA: {
      label: "Folíolos obovados u obovado-oblongos, anchos; flores generalmente 2-3 por axila, de 2-3 cm; legumbres castañas",
      keyStep: "G",
      especieId: "vicia_sativa",
    },
    opcionA_prima: {
      label: "Folíolos oblongo-elípticos u oblongo-lineales; flores solitarias de 1,5-1,8 cm; legumbres negras",
      keyStep: "G'",
      especieId: "vicia_angustifolia",
    },
  },
  lathyrus_a: {
    id: "lathyrus_a",
    milestone: "Lathyrus",
    manualPage: 252,
    descripcion: "Lathyrus - A: ciclo de vida",
    opcionA: {
      label: "Hierbas anuales, glabras o casi glabras",
      keyStep: "A",
      nextNodeId: "lathyrus_b",
    },
    opcionA_prima: {
      label: "Hierbas perennes",
      keyStep: "A'",
      nextNodeId: "lathyrus_d",
    },
  },
  lathyrus_b: {
    id: "lathyrus_b",
    milestone: "Lathyrus",
    manualPage: 252,
    descripcion: "Lathyrus - B: pubescencia de ovarios y legumbres",
    opcionA: {
      label: "Ovarios y legumbres glabérrimos",
      keyStep: "B",
      nextNodeId: "lathyrus_c",
    },
    opcionA_prima: {
      label: "Ovarios y legumbres hirsutos; anual, trepadora, casi glabra; tallos anchamente alados; pedúnculos con 2-3 flores nutantes",
      keyStep: "B'",
      especieId: "lathyrus_hirsutus",
    },
  },
  lathyrus_c: {
    id: "lathyrus_c",
    milestone: "Lathyrus",
    manualPage: 252,
    descripcion: "Lathyrus - C: cantidad de flores por racimo",
    opcionA: {
      label: "Flores generalmente 2 por racimo, raramente 1 o 3; tallos estrechamente alados; folíolos lineal-lanceolados de 25-50 mm",
      keyStep: "C",
      especieId: "lathyrus_crassipes",
    },
    opcionA_prima: {
      label: "Flores 3-9 por racimo; tallos bialados; folíolos lanceolados de 5-12 cm; corolas azules",
      keyStep: "C'",
      especieId: "lathyrus_paranensis",
    },
  },
  lathyrus_d: {
    id: "lathyrus_d",
    milestone: "Lathyrus",
    manualPage: 254,
    descripcion: "Lathyrus - D: pubescencia en plantas perennes",
    opcionA: {
      label: "Plantas seríceo-pubescentes o tomentosas",
      keyStep: "D",
      nextNodeId: "lathyrus_e",
    },
    opcionA_prima: {
      label: "Plantas glabras o casi glabras, perennes; tallos bialados; folíolos uniyugos, lineal-lanceolados, de 6-11 cm; racimos con 5-11 flores",
      keyStep: "D'",
      especieId: "lathyrus_parodii",
    },
  },
  lathyrus_e: {
    id: "lathyrus_e",
    milestone: "Lathyrus",
    manualPage: 254,
    descripcion: "Lathyrus - E: forma de folíolos",
    opcionA: {
      label: "Folíolos uniyugos, lanceolado-ovados, de 25-60 mm por 5-20 mm; hierba perenne, voluble, pubescente y glandulosa",
      keyStep: "E",
      especieId: "lathyrus_pubescens",
    },
    opcionA_prima: {
      label: "Folíolos lineales de 1-6 mm de anchura; flores 1-5 en cada racimo",
      keyStep: "E'",
      nextNodeId: "lathyrus_f",
    },
  },
  lathyrus_f: {
    id: "lathyrus_f",
    milestone: "Lathyrus",
    manualPage: 254,
    descripcion: "Lathyrus - F: largo del estilo",
    opcionA: {
      label: "Estilo de 7-10 mm; flores azules de 2-3 cm; hierba perenne velluda; zarcillos nulos o muy cortos; legumbres velludas",
      keyStep: "F",
      especieId: "lathyrus_tomentosus",
    },
    opcionA_prima: {
      label: "Estilo de 3-4 mm; flores azules o violáceas de 1,5-2 cm; hierba perenne seríceo-pubescente; frutos lineales de 4 cm",
      keyStep: "F'",
      especieId: "lathyrus_subulatus",
    },
  },
  papilionoideae_f: {
    id: "papilionoideae_f",
    milestone: "Papilionoideae",
    manualPage: 241,
    descripcion: "Papilionoideae - F: hojas trifolioladas o pinadas con más de 3 folíolos",
    opcionA: {
      label: "Hojas trifolioladas",
      keyStep: "F",
      nextNodeId: "papilionoideae_g",
    },
    opcionA_prima: {
      label: "Hojas pinadas, con más de 3 folíolos",
      keyStep: "F'",
      nextNodeId: "papilionoideae_s",
    },
  },
  papilionoideae_g: {
    id: "papilionoideae_g",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - G: porte y alas de la corola",
    opcionA: {
      label: "Árboles con aguijones en las ramas y en las hojas; alas de la corola diminutas",
      keyStep: "G",
      especieId: "erythrina_crista_galli",
    },
    opcionA_prima: {
      label: "Hierbas o lianas inermes; alas de la corola bien desarrolladas",
      keyStep: "G'",
      nextNodeId: "papilionoideae_h",
    },
  },
  papilionoideae_h: {
    id: "papilionoideae_h",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - H: tipo de fruto",
    opcionA: {
      label: "Fruto lamento, fragmentado a la madurez en varios trozos o artejos",
      keyStep: "H",
      nextNodeId: "papilionoideae_i",
    },
    opcionA_prima: {
      label: "Fruto de otro tipo, no lamento",
      keyStep: "H'",
      nextNodeId: "papilionoideae_j",
    },
  },
  papilionoideae_i: {
    id: "papilionoideae_i",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - I: estipelas y artejos",
    opcionA: {
      label: "Folíolos con estipelas lineales en la inserción del peciólulo; lamentos generalmente con más de dos artejos",
      keyStep: "I",
      nextNodeId: "desmodium_a",
    },
    opcionA_prima: {
      label: "Folíolos sin estipelas; lamentos con 2 artejos",
      keyStep: "I'",
      nextNodeId: "stylosanthes_a",
    },
  },
  desmodium_a: {
    id: "desmodium_a",
    milestone: "Desmodium",
    manualPage: 255,
    descripcion: "Desmodium - A: pelos ganchosos",
    opcionA: {
      label: "Plantas cubiertas por pelos ganchosos; perennes, con rizoma leñoso y tallos débiles, tendidos o apoyantes; fruto con 4-7 artejos peludos",
      keyStep: "A",
      especieId: "desmodium_uncinatum",
    },
    opcionA_prima: {
      label: "Plantas sin pelos ganchosos; perennes, rizomatosas, con tallos rastreros o ascendentes; fruto con 3-6 artejos pegajosos",
      keyStep: "A'",
      especieId: "desmodium_affine",
    },
  },
  stylosanthes_a: {
    id: "stylosanthes_a",
    milestone: "Stylosanthes",
    manualPage: 256,
    descripcion: "Stylosanthes - A: pubescencia del fruto",
    opcionA: {
      label: "Frutos hirsutos; hojas envainadoras con folíolos lineal-lanceolados; cabezuelas apicales",
      keyStep: "A",
      especieId: "stylosanthes_montevidensis",
    },
    opcionA_prima: {
      label: "Frutos glabros o casi; hojas envainadoras con folíolos lanceolados y nervaduras muy marcadas; cabezuelas cerdosas",
      keyStep: "A'",
      especieId: "stylosanthes_gracilis_subviscosa",
    },
  },
  papilionoideae_j: {
    id: "papilionoideae_j",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - J: forma y dehiscencia de los frutos",
    opcionA: {
      label: "Frutos cortos y anchos, generalmente indehiscentes; folíolos dentados",
      keyStep: "J",
      nextNodeId: "papilionoideae_k",
    },
    opcionA_prima: {
      label: "Frutos alargados, dehiscentes; folíolos enteros",
      keyStep: "J'",
      nextNodeId: "papilionoideae_m",
    },
  },
  papilionoideae_k: {
    id: "papilionoideae_k",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - K: curvatura del fruto",
    opcionA: {
      label: "Fruto curvado o enroscado, frecuentemente cubierto de garfios",
      keyStep: "K",
      nextNodeId: "medicago_a",
    },
    opcionA_prima: {
      label: "Fruto no curvado",
      keyStep: "K'",
      nextNodeId: "papilionoideae_l",
    },
  },
  medicago_a: {
    id: "medicago_a",
    milestone: "Medicago",
    manualPage: 256,
    descripcion: "Medicago - A: cantidad de semillas en el fruto",
    opcionA: {
      label: "Fruto uniseminado, reniforme, de 1,5-3 mm, inerme, espiralado sólo en la parte superior",
      keyStep: "A",
      especieId: "medicago_lupulina",
    },
    opcionA_prima: {
      label: "Fruto con varias semillas, arrollado en espiral",
      keyStep: "A'",
      nextNodeId: "medicago_b",
    },
  },
  medicago_b: {
    id: "medicago_b",
    milestone: "Medicago",
    manualPage: 256,
    descripcion: "Medicago - B: ciclo de vida y color de flores",
    opcionA: {
      label: "Hierba perenne; folíolos elípticos dentados en el ápice; flores azules o violáceas, a veces blancas; frutos sin gloquidios",
      keyStep: "B",
      especieId: "medicago_sativa",
    },
    opcionA_prima: {
      label: "Plantas anuales; flores amarillas",
      keyStep: "B'",
      nextNodeId: "medicago_c",
    },
  },
  medicago_c: {
    id: "medicago_c",
    milestone: "Medicago",
    manualPage: 257,
    descripcion: "Medicago - C: estípulas y pubescencia",
    opcionA: {
      label: "Estípulas enteras o casi enteras; plantas velludas; frutos con largos gloquidios ganchudos",
      keyStep: "C",
      especieId: "medicago_minima",
    },
    opcionA_prima: {
      label: "Estípulas profundamente dentadas o laciniadas; plantas casi glabras",
      keyStep: "C'",
      nextNodeId: "medicago_d",
    },
  },
  medicago_d: {
    id: "medicago_d",
    milestone: "Medicago",
    manualPage: 257,
    descripcion: "Medicago - D: espiras del fruto y mancha foliar",
    opcionA: {
      label: "Frutos globosos, con 4-5 espiras anchas y planas, con gloquidios entrecruzados no ganchudos; folíolos grandes con mancha oscura",
      keyStep: "D",
      especieId: "medicago_arabica",
    },
    opcionA_prima: {
      label: "Frutos espiralados, con 2-4 espiras de borde carenado, con gloquidios ganchudos o sin gloquidios; folíolos sin mancha",
      keyStep: "D'",
      especieId: "medicago_hispida",
    },
  },
  papilionoideae_l: {
    id: "papilionoideae_l",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - L: persistencia de la corola",
    opcionA: {
      label: "Corola persistente sobre el fruto; folíolos con peciólulos de igual longitud; flores en espigas cortas o capítulos; plantas rastreras",
      keyStep: "L",
      nextNodeId: "trifolium_a",
    },
    opcionA_prima: {
      label: "Corola caduca después de la floración; folíolo terminal con peciólulo más largo que los laterales; flores en racimos axilares; plantas erectas",
      keyStep: "L'",
      nextNodeId: "melilotus_a",
    },
  },
  trifolium_a: {
    id: "trifolium_a",
    milestone: "Trifolium",
    manualPage: 258,
    descripcion: "Trifolium - A: cáliz acrescente o no",
    opcionA: {
      label: "Cáliz glabro abajo y largamente pubescente arriba, plurinervado, acrescente, vesiculoso-inflado y reticulado a la madurez",
      keyStep: "A",
      especieId: "trifolium_fragiferum",
    },
    opcionA_prima: {
      label: "Cáliz uniformemente pubescente o glabro, con 5-10 nervaduras, no acrescente ni reticulado a la madurez",
      keyStep: "A'",
      nextNodeId: "trifolium_b",
    },
  },
  trifolium_b: {
    id: "trifolium_b",
    milestone: "Trifolium",
    manualPage: 258,
    descripcion: "Trifolium - B: porte y cabezuelas",
    opcionA: {
      label: "Plantas erectas, glabras, con cabezuelas terminales sésiles; estípulas anchas; flores violáceas; cáliz con 10 nervaduras",
      keyStep: "B",
      especieId: "trifolium_pratense",
    },
    opcionA_prima: {
      label: "Plantas rastreras, estoloníferas; cabezuelas axilares sobre largos pedúnculos",
      keyStep: "B'",
      nextNodeId: "trifolium_c",
    },
  },
  trifolium_c: {
    id: "trifolium_c",
    milestone: "Trifolium",
    manualPage: 258,
    descripcion: "Trifolium - C: nervaduras del cáliz y color de flores",
    opcionA: {
      label: "Cáliz con 10 nervaduras; flores rojas, blancas o amarillentas",
      keyStep: "C",
      nextNodeId: "trifolium_d",
    },
    opcionA_prima: {
      label: "Cáliz con 5 nervaduras; flores amarillas en capítulos 10-17-floros; hierba anual con tallos rastreros",
      keyStep: "C'",
      especieId: "trifolium_filiforme",
    },
  },
  trifolium_d: {
    id: "trifolium_d",
    milestone: "Trifolium",
    manualPage: 258,
    descripcion: "Trifolium - D: flores cleistógamas subterráneas",
    opcionA: {
      label: "Tallos rastreros, radicantes, sin flores cleistógamas subterráneas; folíolos con mancha blanca en V; flores blancas o ligeramente rosadas",
      keyStep: "D",
      especieId: "trifolium_repens",
    },
    opcionA_prima: {
      label: "Tallos con manojos de flores cleistógamas subterráneas en los nudos; folíolos sin mancha blanca",
      keyStep: "D'",
      nextNodeId: "trifolium_e",
    },
  },
  trifolium_e: {
    id: "trifolium_e",
    milestone: "Trifolium",
    manualPage: 259,
    descripcion: "Trifolium - E: color de flores chasmógamas",
    opcionA: {
      label: "Flores chasmógamas rojas o rosadas; plantas velludas; folíolos obcordados; frutos con 2-5 semillas",
      keyStep: "E",
      especieId: "trifolium_polymorphum",
    },
    opcionA_prima: {
      label: "Flores chasmógamas amarillentas, en cabezuelas esféricas; plantas glabras; frutos con 1-2 semillas",
      keyStep: "E'",
      especieId: "trifolium_argentinense",
    },
  },
  melilotus_a: {
    id: "melilotus_a",
    milestone: "Melilotus",
    manualPage: 259,
    descripcion: "Melilotus - A: color de flores",
    opcionA: {
      label: "Flores blancas; folíolos oblongo-elípticos; frutos de 3-3,5 mm, con 1-2 semillas",
      keyStep: "A",
      especieId: "melilotus_alba",
    },
    opcionA_prima: {
      label: "Flores amarillas",
      keyStep: "A'",
      nextNodeId: "melilotus_b",
    },
  },
  melilotus_b: {
    id: "melilotus_b",
    milestone: "Melilotus",
    manualPage: 259,
    descripcion: "Melilotus - B: porte y tamaño del fruto",
    opcionA: {
      label: "Plantas decumbentes; folíolos cuneiformes; racimos axilares cortos; frutos ovoideos de 7-8 mm, con 1-3 semillas",
      keyStep: "B",
      especieId: "melilotus_messanensis",
    },
    opcionA_prima: {
      label: "Plantas erectas; frutos de 2-3 mm",
      keyStep: "B'",
      nextNodeId: "melilotus_c",
    },
  },
  melilotus_c: {
    id: "melilotus_c",
    milestone: "Melilotus",
    manualPage: 259,
    descripcion: "Melilotus - C: forma de estípulas y largo de flores",
    opcionA: {
      label: "Estípulas triangulares, dentadas en la base; flores de 2-3 mm; folíolos oblanceolados, redondeados y denticulados arriba; frutos globosos de 2 mm",
      keyStep: "C",
      especieId: "melilotus_indica",
    },
    opcionA_prima: {
      label: "Estípulas lineales, subuladas, enteras; flores de 4-6 mm; folíolos elíptico-lanceolados, dentados; frutos de 3-4 mm",
      keyStep: "C'",
      especieId: "melilotus_officinalis",
    },
  },
  papilionoideae_m: {
    id: "papilionoideae_m",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - M: forma de la quilla",
    opcionA: {
      label: "Quilla de la corola enroscada o espiralada en el ápice",
      keyStep: "M",
      nextNodeId: "phaseolus_a",
    },
    opcionA_prima: {
      label: "Quilla recta o sólo arqueada",
      keyStep: "M'",
      nextNodeId: "papilionoideae_n",
    },
  },
  phaseolus_a: {
    id: "phaseolus_a",
    milestone: "Phaseolus",
    manualPage: 260,
    descripcion: "Phaseolus - A: largo de flores y hábito",
    opcionA: {
      label: "Flores de 2-2,5 cm; enredadera perenne; folíolos anchamente ovados, pubescentes; racimos axilares cortos; legumbres comprimidas, pubescentes",
      keyStep: "A",
      especieId: "phaseolus_adenanthus",
    },
    opcionA_prima: {
      label: "Flores de 1,5 cm; hierba perenne, rastrera; folíolos ovados o lanceolados, glabros o pubescentes; racimos largamente pedunculados; legumbres lineales, velludas",
      keyStep: "A'",
      especieId: "phaseolus_prostratus",
    },
  },
  papilionoideae_n: {
    id: "papilionoideae_n",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - N: número y disposición de folíolos",
    opcionA: {
      label: "Hojas con 5 folíolos, 3 terminales y 2 basales que semejan grandes estípulas; hierbas con flores amarillas",
      keyStep: "N",
      especieId: "lotus_corniculatus",
    },
    opcionA_prima: {
      label: "Hojas con 3 folíolos; estípulas pequeñas",
      keyStep: "N'",
      nextNodeId: "papilionoideae_o",
    },
  },
  papilionoideae_o: {
    id: "papilionoideae_o",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - O: color de las flores",
    opcionA: {
      label: "Flores rojas",
      keyStep: "O",
      nextNodeId: "papilionoideae_p",
    },
    opcionA_prima: {
      label: "Flores amarillas, violáceas o blancas",
      keyStep: "O'",
      nextNodeId: "papilionoideae_q",
    },
  },
  papilionoideae_p: {
    id: "papilionoideae_p",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - P: forma del cáliz",
    opcionA: {
      label: "Cáliz con los dos lóbulos superiores muy dilatados, soldados y obtusos, y los 3 inferiores muy pequeños y agudos",
      keyStep: "P",
      especieId: "canavalia_bonariensis",
    },
    opcionA_prima: {
      label: "Cáliz con 4 dientes triangulares agudos",
      keyStep: "P'",
      especieId: "camptosema_rubicundum",
    },
  },
  papilionoideae_q: {
    id: "papilionoideae_q",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - Q: pubescencia del estilo",
    opcionA: {
      label: "Estilo pubescente o barbudo a lo largo del borde ventral",
      keyStep: "Q",
      especieId: "vigna_luteola",
    },
    opcionA_prima: {
      label: "Estilo glabro",
      keyStep: "Q'",
      nextNodeId: "papilionoideae_r",
    },
  },
  papilionoideae_r: {
    id: "papilionoideae_r",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - R: color de las flores",
    opcionA: {
      label: "Flores blancas o violáceas",
      keyStep: "R",
      especieId: "galactia_marginalis",
    },
    opcionA_prima: {
      label: "Flores amarillas",
      keyStep: "R'",
      nextNodeId: "rhynchosia_a",
    },
  },
  rhynchosia_a: {
    id: "rhynchosia_a",
    milestone: "Rhynchosia",
    manualPage: 262,
    descripcion: "Rhynchosia - A: forma de folíolos y disposición de flores",
    opcionA: {
      label: "Folíolos ovados u orbiculares; flores en racimos axilares pequeños",
      keyStep: "A",
      especieId: "rhynchosia_senna",
    },
    opcionA_prima: {
      label: "Folíolos lanceolados o lineales; flores solitarias o en grupos de 2-3",
      keyStep: "A'",
      especieId: "rhynchosia_texana",
    },
  },
  papilionoideae_s: {
    id: "papilionoideae_s",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - S: tipo de fruto",
    opcionA: {
      label: "Fruto anormal, indehiscente, generalmente uniseminado",
      keyStep: "S",
      nextNodeId: "papilionoideae_t",
    },
    opcionA_prima: {
      label: "Fruto legumbre alargada o lomento",
      keyStep: "S'",
      nextNodeId: "papilionoideae_u",
    },
  },
  papilionoideae_t: {
    id: "papilionoideae_t",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - T: estambres y forma del fruto",
    opcionA: {
      label: "Estambres libres casi hasta su base; fruto globoso, drupiforme",
      keyStep: "T",
      especieId: "geoffroea_decorticans",
    },
    opcionA_prima: {
      label: "Estambres soldados formando un tubo; fruto chato, discoidal, con un reborde",
      keyStep: "T'",
      especieId: "poecilanthe_parviflora",
    },
  },
  papilionoideae_u: {
    id: "papilionoideae_u",
    milestone: "Papilionoideae",
    manualPage: 242,
    descripcion: "Papilionoideae - U: legumbre o lomento",
    opcionA: {
      label: "Fruto lomento: a la madurez se fragmenta en varios artejos",
      keyStep: "U",
      nextNodeId: "papilionoideae_v",
    },
    opcionA_prima: {
      label: "Fruto legumbre; rama pendiente desde Indigofera y géneros afines",
      keyStep: "U'",
      nextNodeId: "papilionoideae_x",
    },
  },
  papilionoideae_v: {
    id: "papilionoideae_v",
    milestone: "Papilionoideae",
    manualPage: 243,
    descripcion: "Papilionoideae - V: soldadura de estambres",
    opcionA: {
      label: "Estambres libres entre sí",
      keyStep: "V",
      nextNodeId: "adesmia_a",
    },
    opcionA_prima: {
      label: "Estambres más o menos soldados por los filamentos",
      keyStep: "V'",
      nextNodeId: "papilionoideae_w",
    },
  },
  adesmia_a: {
    id: "adesmia_a",
    milestone: "Adesmia",
    manualPage: 263,
    descripcion: "Adesmia - A: pubescencia de hojas",
    opcionA: {
      label: "Hojas glabras o laxamente pubescentes",
      keyStep: "A",
      nextNodeId: "adesmia_b",
    },
    opcionA_prima: {
      label: "Hojas densamente seríceo-incanas",
      keyStep: "A'",
      especieId: "adesmia_incana",
    },
  },
  adesmia_b: {
    id: "adesmia_b",
    milestone: "Adesmia",
    manualPage: 263,
    descripcion: "Adesmia - B: tamaño de folíolos",
    opcionA: {
      label: "Folíolos menores de 10 mm",
      keyStep: "B",
      especieId: "adesmia_bicolor",
    },
    opcionA_prima: {
      label: "Folíolos de 15-26 mm",
      keyStep: "B'",
      especieId: "adesmia_latifolia",
    },
  },
  papilionoideae_w: {
    id: "papilionoideae_w",
    milestone: "Papilionoideae",
    manualPage: 243,
    descripcion: "Papilionoideae - W: hojas imparipinadas o paripinadas",
    opcionA: {
      label: "Hojas imparipinadas, con numerosos folíolos",
      keyStep: "W",
      nextNodeId: "aeschynomene_a",
    },
    opcionA_prima: {
      label: "Hojas paripinadas, con 4 folíolos",
      keyStep: "W'",
      especieId: "poiretia_tetraphylla",
    },
  },
  aeschynomene_a: {
    id: "aeschynomene_a",
    milestone: "Aeschynomene",
    manualPage: 264,
    descripcion: "Aeschynomene - A: porte y cantidad de folíolos",
    opcionA: {
      label: "Arbustos con 15-27 pares de folíolos y flores anaranjadas",
      keyStep: "A",
      especieId: "aeschynomene_montevidensis",
    },
    opcionA_prima: {
      label: "Plantas herbáceas",
      keyStep: "A'",
      nextNodeId: "aeschynomene_b",
    },
  },
  aeschynomene_b: {
    id: "aeschynomene_b",
    milestone: "Aeschynomene",
    manualPage: 264,
    descripcion: "Aeschynomene - B: pubescencia y tipo de inflorescencia",
    opcionA: {
      label: "Plantas hirsutas; hojas con 7-22 pares de folíolos; racimos paucifloros",
      keyStep: "B",
      especieId: "aeschynomene_rudis",
    },
    opcionA_prima: {
      label: "Plantas glabras o casi; hojas con 8-21 pares de folíolos; flores en panojas",
      keyStep: "B'",
      especieId: "aeschynomene_sensitiva",
    },
  },
  papilionoideae_x: {
    id: "papilionoideae_x",
    milestone: "Papilionoideae",
    manualPage: 243,
    descripcion: "Papilionoideae - X: color de flores",
    opcionA: {
      label: "Flores amarillas, rojas o purpúreas",
      keyStep: "X",
      nextNodeId: "papilionoideae_y",
    },
    opcionA_prima: {
      label: "Flores blancas o azules",
      keyStep: "X'",
      nextNodeId: "papilionoideae_aa",
    },
  },
  papilionoideae_y: {
    id: "papilionoideae_y",
    milestone: "Papilionoideae",
    manualPage: 243,
    descripcion: "Papilionoideae - Y: forma de anteras",
    opcionA: {
      label: "Anteras apiculadas",
      keyStep: "Y",
      especieId: "indigofera_suffruticosa",
    },
    opcionA_prima: {
      label: "Anteras obtusas, no apiculadas",
      keyStep: "Y'",
      nextNodeId: "papilionoideae_z",
    },
  },
  papilionoideae_z: {
    id: "papilionoideae_z",
    milestone: "Papilionoideae",
    manualPage: 243,
    descripcion: "Papilionoideae - Z: hábito y cantidad de folíolos",
    opcionA: {
      label: "Hierbas; hojas con 5 folíolos, los dos inferiores basales y estipuliformes",
      keyStep: "Z",
      especieId: "lotus_corniculatus",
    },
    opcionA_prima: {
      label: "Arbustos o sufrútices; hojas con muchos folíolos",
      keyStep: "Z'",
      nextNodeId: "sesbania_a",
    },
  },
  sesbania_a: {
    id: "sesbania_a",
    milestone: "Sesbania",
    manualPage: 266,
    descripcion: "Sesbania - A: color de flores y tipo de legumbre",
    opcionA: {
      label: "Flores rojas; hojas con 7-14 pares de folíolos elípticos; racimos péndulos; legumbres tetrágonas con 4 alas longitudinales",
      keyStep: "A",
      especieId: "sesbania_punicea",
    },
    opcionA_prima: {
      label: "Flores amarillas; hojas con 12-20 pares de folíolos oblongos; racimos multifloros; legumbre sin alas",
      keyStep: "A'",
      especieId: "sesbania_virgata",
    },
  },
  papilionoideae_aa: {
    id: "papilionoideae_aa",
    milestone: "Papilionoideae",
    manualPage: 243,
    descripcion: "Papilionoideae - a: porte",
    opcionA: {
      label: "Árboles elevados",
      keyStep: "a",
      especieId: "lonchocarpus_nitidus",
    },
    opcionA_prima: {
      label: "Hierbas o sufrútices",
      keyStep: "a'",
      nextNodeId: "papilionoideae_ab",
    },
  },
  papilionoideae_ab: {
    id: "papilionoideae_ab",
    milestone: "Papilionoideae",
    manualPage: 243,
    descripcion: "Papilionoideae - b: posición de racimos",
    opcionA: {
      label: "Flores en racimos axilares",
      keyStep: "b",
      nextNodeId: "papilionoideae_ac",
    },
    opcionA_prima: {
      label: "Racimos opuestos a las hojas o terminales",
      keyStep: "b'",
      especieId: "tephrosia_cinerea",
    },
  },
  papilionoideae_ac: {
    id: "papilionoideae_ac",
    milestone: "Papilionoideae",
    manualPage: 243,
    descripcion: "Papilionoideae - c: soldadura de estambres",
    opcionA: {
      label: "Estambres monadelfos, con tubo cerrado",
      keyStep: "c",
      especieId: "galega_officinalis",
    },
    opcionA_prima: {
      label: "Estambre vexilar libre",
      keyStep: "c'",
      especieId: "astragalus_distinens",
    },
  },
  oxalidaceae_a: {
    id: "oxalidaceae_a",
    milestone: "Oxalidaceae",
    manualPage: 268,
    descripcion: "Oxalidaceae - A: presencia de bulbo",
    opcionA: {
      label: "Plantas acaules, provistas de bulbo",
      keyStep: "A",
      nextNodeId: "oxalidaceae_b",
    },
    opcionA_prima: {
      label: "Plantas acaules o caulescentes, sin bulbo, con rizomas o tubérculos, o anuales",
      keyStep: "A'",
      nextNodeId: "oxalidaceae_d",
    },
  },
  oxalidaceae_b: {
    id: "oxalidaceae_b",
    milestone: "Oxalidaceae",
    manualPage: 268,
    descripcion: "Oxalidaceae - B: flores solitarias o en cimas",
    opcionA: {
      label: "Flores solitarias, amarillas; corola de 10-14 mm; bulbo esférico recubierto de lana parda",
      keyStep: "B",
      especieId: "oxalis_mallobolba",
    },
    opcionA_prima: {
      label: "Flores 2 a muchas, rosadas o liliáceas",
      keyStep: "B'",
      nextNodeId: "oxalidaceae_c",
    },
  },
  oxalidaceae_c: {
    id: "oxalidaceae_c",
    milestone: "Oxalidaceae",
    manualPage: 268,
    descripcion: "Oxalidaceae - C: tipo de bulbo",
    opcionA: {
      label: "Bulbo central del tamaño de una avellana, rodeado de numerosos bulbillos menores; flores 5-20",
      keyStep: "C",
      especieId: "oxalis_martiana",
    },
    opcionA_prima: {
      label: "Bulbo simple, esférico, cubierto de brácteas no lanosas; flores 1-5",
      keyStep: "C'",
      especieId: "oxalis_macachin",
    },
  },
  oxalidaceae_d: {
    id: "oxalidaceae_d",
    milestone: "Oxalidaceae",
    manualPage: 268,
    descripcion: "Oxalidaceae - D: color de flores y porte",
    opcionA: {
      label: "Flores rosadas, de unos 15 mm; plantas acaules con gruesos tubérculos alargados o articulados",
      keyStep: "D",
      especieId: "oxalis_articulata",
    },
    opcionA_prima: {
      label: "Flores amarillas; plantas caulescentes",
      keyStep: "D'",
      nextNodeId: "oxalidaceae_e",
    },
  },
  oxalidaceae_e: {
    id: "oxalidaceae_e",
    milestone: "Oxalidaceae",
    manualPage: 268,
    descripcion: "Oxalidaceae - E: cantidad de flores por pedúnculo",
    opcionA: {
      label: "Pedúnculos con 2 o más flores",
      keyStep: "E",
      nextNodeId: "oxalidaceae_f",
    },
    opcionA_prima: {
      label: "Pedúnculos unifloros",
      keyStep: "E'",
      nextNodeId: "oxalidaceae_g",
    },
  },
  oxalidaceae_f: {
    id: "oxalidaceae_f",
    milestone: "Oxalidaceae",
    manualPage: 269,
    descripcion: "Oxalidaceae - F: porte y tamaño de corola",
    opcionA: {
      label: "Plantas débiles, tendidas; corola de 7-10 mm; pedúnculos más largos que las hojas; cimas 2-5-floras",
      keyStep: "F",
      especieId: "oxalis_corniculata",
    },
    opcionA_prima: {
      label: "Plantas más robustas, ascendentes, con rizomas delgados; corola de 10-15 mm; flores en cimas",
      keyStep: "F'",
      especieId: "oxalis_subcorymbosa",
    },
  },
  oxalidaceae_g: {
    id: "oxalidaceae_g",
    milestone: "Oxalidaceae",
    manualPage: 269,
    descripcion: "Oxalidaceae - G: tallos y rizomas",
    opcionA: {
      label: "Plantas con tallos cortos, formando matitas, y rizomas delgados con tubérculos semiesféricos",
      keyStep: "G",
      especieId: "oxalis_commersonii",
    },
    opcionA_prima: {
      label: "Plantas tendidas, con tallos rastreros radicantes y rizomas delgados",
      keyStep: "G'",
      especieId: "oxalis_cordobensis",
    },
  },
  geraniaceae_a: {
    id: "geraniaceae_a",
    milestone: "Geraniaceae",
    manualPage: 270,
    descripcion: "Geraniaceae - A: estambres y rostro de carpelos",
    opcionA: {
      label: "Flores con 10 estambres; rostros de los carpelos glabros en su cara interior",
      keyStep: "A",
      nextNodeId: "geranium_a",
    },
    opcionA_prima: {
      label: "Flores con 5 estambres y 5 estaminodios; rostros de los carpelos con largas cerdas",
      keyStep: "A'",
      nextNodeId: "erodium_a",
    },
  },
  geranium_a: {
    id: "geranium_a",
    milestone: "Geranium",
    manualPage: 271,
    descripcion: "Geranium - A: ciclo de vida",
    opcionA: {
      label: "Plantas anuales",
      keyStep: "A",
      nextNodeId: "geranium_b",
    },
    opcionA_prima: {
      label: "Hierbas perennes, con raíz napiforme; tallos de 15-20 cm; hojas palmatisectas; pedúnculos 1-2-floros",
      keyStep: "A'",
      especieId: "geranium_albicans",
    },
  },
  geranium_b: {
    id: "geranium_b",
    milestone: "Geranium",
    manualPage: 271,
    descripcion: "Geranium - B: división de hojas",
    opcionA: {
      label: "Hojas divididas hasta la base en 3-5 segmentos pinatilobados; pedúnculos bifloros; pétalos rosados",
      keyStep: "B",
      especieId: "geranium_robertianum",
    },
    opcionA_prima: {
      label: "Hojas palmatilobadas o palmatisectas, con segmentos palmatilobados",
      keyStep: "B'",
      nextNodeId: "geranium_c",
    },
  },
  geranium_c: {
    id: "geranium_c",
    milestone: "Geranium",
    manualPage: 271,
    descripcion: "Geranium - C: superficie de esquizocarpos",
    opcionA: {
      label: "Esquizocarpos lisos, peludos; hojas reniformes profundamente partidas en 5 segmentos; sépalos de 6-8 mm",
      keyStep: "C",
      especieId: "geranium_dissectum",
    },
    opcionA_prima: {
      label: "Esquizocarpos rugosos transversalmente, casi glabros; hojas reniformes partidas hasta su mitad en 7-9 lóbulos",
      keyStep: "C'",
      especieId: "geranium_molle",
    },
  },
  erodium_a: {
    id: "erodium_a",
    milestone: "Erodium",
    manualPage: 272,
    descripcion: "Erodium - A: tipo de hojas",
    opcionA: {
      label: "Hojas simples, opuestas, largamente pecioladas, ovadas, lobado-crenadas y acorazonadas en la base",
      keyStep: "A",
      especieId: "erodium_malacoides",
    },
    opcionA_prima: {
      label: "Hojas pinaticompuestas, con folíolos lobados o partidos",
      keyStep: "A'",
      nextNodeId: "erodium_b",
    },
  },
  erodium_b: {
    id: "erodium_b",
    milestone: "Erodium",
    manualPage: 272,
    descripcion: "Erodium - B: grado de división de hojas",
    opcionA: {
      label: "Hojas bipinatisectas; pinas ovadas; pínulas lanceoladas o lineales; estípulas agudas; sépalos de 6-7 mm",
      keyStep: "B",
      especieId: "erodium_cicutarium",
    },
    opcionA_prima: {
      label: "Hojas pinatisectas; pinas ovadas, pecioladas y lobadas; estípulas obtusas; cáliz de unos 8 mm",
      keyStep: "B'",
      especieId: "erodium_moschatum",
    },
  },
  linum_a: {
    id: "linum_a",
    milestone: "Linum",
    manualPage: 275,
    descripcion: "Linum - A: ciclo de vida y porte",
    opcionA: {
      label: "Plantas anuales, erectas, de 40-80 cm, glabras; hojas lineal-lanceoladas; flores azules en cimas corimbiformes terminales",
      keyStep: "A",
      especieId: "linum_usitatissimum",
    },
    opcionA_prima: {
      label: "Plantas perennes, con raíz gruesa y tallos ascendentes o tendidos; hojas estrechamente lineales; flores solitarias blancas o rosadas",
      keyStep: "A'",
      especieId: "linum_selaginoides",
    },
  },
  rutaceae_a: {
    id: "rutaceae_a",
    milestone: "Rutaceae",
    manualPage: 276,
    descripcion: "Rutaceae - A: porte y número de estambres",
    opcionA: {
      label: "Hierbas; estambres diplostémonos",
      keyStep: "A",
      especieId: "ruta_chalepensis",
    },
    opcionA_prima: {
      label: "Árboles; estambres isostémonos",
      keyStep: "A'",
      nextNodeId: "fagara_a",
    },
  },
  fagara_a: {
    id: "fagara_a",
    milestone: "Fagara",
    manualPage: 278,
    descripcion: "Fagara - A: raquis y folíolos",
    opcionA: {
      label: "Hojas imparipinadas, con raquis inerme y 6-8 pares de folíolos elíptico-lanceolados; flores masculinas con 4 estambres",
      keyStep: "A",
      especieId: "fagara_hiemalis",
    },
    opcionA_prima: {
      label: "Hojas imparipinadas, con raquis provisto de largos aguijones rectos y generalmente 4-5 pares de folíolos ovado-lanceolados; flores masculinas con 5 estambres",
      keyStep: "A'",
      especieId: "fagara_rhoifolia",
    },
  },
  malpighiaceae_a: {
    id: "malpighiaceae_a",
    milestone: "Malpighiaceae",
    manualPage: 278,
    descripcion: "Malpighiaceae - A: ciclos de estambres fértiles",
    opcionA: {
      label: "Un solo ciclo de estambres fértiles",
      keyStep: "A",
      especieId: "janusia_guaranitica",
    },
    opcionA_prima: {
      label: "Dos ciclos de estambres fértiles",
      keyStep: "A'",
      nextNodeId: "malpighiaceae_b",
    },
  },
  malpighiaceae_b: {
    id: "malpighiaceae_b",
    milestone: "Malpighiaceae",
    manualPage: 278,
    descripcion: "Malpighiaceae - B: cantidad de estambres fértiles y estigmas",
    opcionA: {
      label: "Estambres fértiles 6; estigmas ensanchados, petaloides",
      keyStep: "B",
      especieId: "stigmatophyllum_littorale",
    },
    opcionA_prima: {
      label: "Estambres fértiles 10; estigmas no petaloides",
      keyStep: "B'",
      nextNodeId: "malpighiaceae_c",
    },
  },
  malpighiaceae_c: {
    id: "malpighiaceae_c",
    milestone: "Malpighiaceae",
    manualPage: 278,
    descripcion: "Malpighiaceae - C: pubescencia del ovario y alas del fruto",
    opcionA: {
      label: "Ovario glabro; fruto con alas inconspicuas",
      keyStep: "C",
      especieId: "galphimia_brasiliensis",
    },
    opcionA_prima: {
      label: "Ovario pubescente; frutos con alas grandes",
      keyStep: "C'",
      nextNodeId: "malpighiaceae_d",
    },
  },
  malpighiaceae_d: {
    id: "malpighiaceae_d",
    milestone: "Malpighiaceae",
    manualPage: 278,
    descripcion: "Malpighiaceae - D: tipo de alas de las sámaras",
    opcionA: {
      label: "Sámaras con una sola ala dorsal",
      keyStep: "D",
      especieId: "heteropteris_angustifolia",
    },
    opcionA_prima: {
      label: "Sámaras con dos alas laterales grandes y un ala dorsal menor",
      keyStep: "D'",
      especieId: "mascagnia_psilophylla",
    },
  },
  polygalaceae_a: {
    id: "polygalaceae_a",
    milestone: "Polygalaceae",
    manualPage: 281,
    descripcion: "Polygalaceae - A: coronita de pelos en semillas",
    opcionA: {
      label: "Semillas terminadas en una coronita de pelos; plantas anuales o bienales, bajas; racimos compactos",
      keyStep: "A",
      especieId: "polygala_australis",
    },
    opcionA_prima: {
      label: "Semillas sin coronita de pelos",
      keyStep: "A'",
      nextNodeId: "polygalaceae_b",
    },
  },
  polygalaceae_b: {
    id: "polygalaceae_b",
    milestone: "Polygalaceae",
    manualPage: 281,
    descripcion: "Polygalaceae - B: bordes alados de la cápsula",
    opcionA: {
      label: "Cápsula sin bordes alados, orbicular-elíptica; tallos de 7-40 cm; hojas lineales",
      keyStep: "B",
      especieId: "polygala_linoides",
    },
    opcionA_prima: {
      label: "Cápsula con uno o dos bordes alados",
      keyStep: "B'",
      nextNodeId: "polygalaceae_c",
    },
  },
  polygalaceae_c: {
    id: "polygalaceae_c",
    milestone: "Polygalaceae",
    manualPage: 281,
    descripcion: "Polygalaceae - C: densidad y forma de hojas",
    opcionA: {
      label: "Hojas numerosas, densas, estrechamente lineales, de 6-15 mm; racimos laxos; flores de 3-4 mm",
      keyStep: "C",
      especieId: "polygala_bonariensis",
    },
    opcionA_prima: {
      label: "Hojas pocas, laxas, lineal-lanceoladas, de 10-40 mm; racimos laxos; flores de 2-3,2 mm",
      keyStep: "C'",
      especieId: "polygala_duarteana",
    },
  },
  euphorbiaceae_a: {
    id: "euphorbiaceae_a",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - A: flores en ciatios",
    opcionA: {
      label: "Flores desnudas, reunidas en ciatios",
      keyStep: "A",
      nextNodeId: "euphorbia_a",
    },
    opcionA_prima: {
      label: "Flores no en ciatios",
      keyStep: "A'",
      nextNodeId: "euphorbiaceae_b",
    },
  },
  euphorbiaceae_b: {
    id: "euphorbiaceae_b",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - B: forma de hojas",
    opcionA: {
      label: "Hojas palmatilobadas o palmatipartidas; flores grandes",
      keyStep: "B",
      nextNodeId: "euphorbiaceae_c",
    },
    opcionA_prima: {
      label: "Hojas enteras o aserradas, pinatinervadas",
      keyStep: "B'",
      nextNodeId: "euphorbiaceae_d",
    },
  },
  euphorbiaceae_c: {
    id: "euphorbiaceae_c",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - C: soldadura de estambres y hojas",
    opcionA: {
      label: "Estambres soldados en grupos, con filamentos que parecen ramificados; hojas palmatilobadas",
      keyStep: "C",
      especieId: "ricinus_communis",
    },
    opcionA_prima: {
      label: "Estambres libres entre sí; hojas palmatisectas",
      keyStep: "C'",
      especieId: "manihot_flabellifolia",
    },
  },
  euphorbiaceae_d: {
    id: "euphorbiaceae_d",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - D: cantidad de óvulos por lóculo",
    opcionA: {
      label: "Cada lóculo del ovario contiene 2 óvulos",
      keyStep: "D",
      nextNodeId: "phyllanthus_a",
    },
    opcionA_prima: {
      label: "Cada lóculo del ovario contiene un solo óvulo; rama pendiente desde Sebastiania",
      keyStep: "D'",
      nextNodeId: "euphorbiaceae_e",
    },
  },
  euphorbia_a: {
    id: "euphorbia_a",
    milestone: "Euphorbia",
    manualPage: 284,
    descripcion: "Euphorbia - A: glándulas de los ciatios",
    opcionA: {
      label: "Ciatios con glándulas involucrales semilunares terminadas en dos cuernitos",
      keyStep: "A",
      nextNodeId: "euphorbia_b",
    },
    opcionA_prima: {
      label: "Ciatios con glándulas semicirculares, no terminadas en cuernitos",
      keyStep: "A'",
      nextNodeId: "euphorbia_c",
    },
  },
  euphorbia_b: {
    id: "euphorbia_b",
    milestone: "Euphorbia",
    manualPage: 284,
    descripcion: "Euphorbia - B: disposición de hojas caulinares",
    opcionA: {
      label: "Hojas caulinares decusadas, subsésiles, lanceoladas; hojas superiores alternas o verticiladas; ciatios axilares",
      keyStep: "B",
      especieId: "euphorbia_lathyrus",
    },
    opcionA_prima: {
      label: "Hojas caulinares alternas, obovado-espatuladas; hojas superiores opuestas; ciatios en cimas dicotómicas",
      keyStep: "B'",
      especieId: "euphorbia_peplus",
    },
  },
  euphorbia_c: {
    id: "euphorbia_c",
    milestone: "Euphorbia",
    manualPage: 284,
    descripcion: "Euphorbia - C: hojas opuestas o alternas",
    opcionA: {
      label: "Todas las hojas opuestas, oblicuas en la base; raíces delgadas",
      keyStep: "C",
      nextNodeId: "euphorbia_d",
    },
    opcionA_prima: {
      label: "Hojas caulinares alternas; raíces muy gruesas",
      keyStep: "C'",
      nextNodeId: "euphorbia_f",
    },
  },
  euphorbia_d: {
    id: "euphorbia_d",
    milestone: "Euphorbia",
    manualPage: 284,
    descripcion: "Euphorbia - D: porte y pubescencia",
    opcionA: {
      label: "Plantas tendidas, glabras; hojas elípticas, obtusas y enteras; ciatios axilares solitarios; semillas lisas",
      keyStep: "D",
      especieId: "euphorbia_serpens_montevidensis",
    },
    opcionA_prima: {
      label: "Plantas ascendentes o erectas, pubescentes",
      keyStep: "D'",
      nextNodeId: "euphorbia_e",
    },
  },
  euphorbia_e: {
    id: "euphorbia_e",
    milestone: "Euphorbia",
    manualPage: 284,
    descripcion: "Euphorbia - E: pubescencia de cápsulas",
    opcionA: {
      label: "Cápsulas glabras; hierba anual laxamente hirsuta; hojas ovadas y finamente aserradas",
      keyStep: "E",
      especieId: "euphorbia_lorentzii",
    },
    opcionA_prima: {
      label: "Cápsulas pubescentes; hojas oblongo-ovadas, semicordadas y oblicuas en la base",
      keyStep: "E'",
      especieId: "euphorbia_maculata",
    },
  },
  euphorbia_f: {
    id: "euphorbia_f",
    milestone: "Euphorbia",
    manualPage: 284,
    descripcion: "Euphorbia - F: involucro y glándulas",
    opcionA: {
      label: "Involucro de 2 mm, con glándulas gruesas purpúreas y lóbulos espatulados pectinado-partidos",
      keyStep: "F",
      especieId: "euphorbia_caespitosa",
    },
    opcionA_prima: {
      label: "Involucro con 4 glándulas semidiscoideas verdes y lóbulos triangulares semienteros ciliados",
      keyStep: "F'",
      especieId: "euphorbia_pampeana",
    },
  },
  phyllanthus_a: {
    id: "phyllanthus_a",
    milestone: "Phyllanthus",
    manualPage: 286,
    descripcion: "Phyllanthus - A: porte",
    opcionA: {
      label: "Arbustos glabros de 2-3 m; hojas elíptico-lanceoladas; flores masculinas en fascículos cortos",
      keyStep: "A",
      especieId: "phyllanthus_sellowianus",
    },
    opcionA_prima: {
      label: "Hierbas anuales glabras de 30-60 cm; hojas elíptico-oblongas; flores solitarias axilares",
      keyStep: "A'",
      especieId: "phyllanthus_lathyroides",
    },
  },
  euphorbiaceae_e: {
    id: "euphorbiaceae_e",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - E: porte y sépalos masculinos",
    opcionA: {
      label: "Árboles; sépalos de las flores masculinas imbricados",
      keyStep: "E",
      nextNodeId: "euphorbiaceae_f",
    },
    opcionA_prima: {
      label: "Hierbas o arbustos bajos; sépalos de las flores masculinas valvados o apenas imbricados",
      keyStep: "E'",
      nextNodeId: "euphorbiaceae_g",
    },
  },
  euphorbiaceae_f: {
    id: "euphorbiaceae_f",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - F: cantidad de estambres",
    opcionA: {
      label: "Estambres 3",
      keyStep: "F",
      nextNodeId: "sebastiania_a",
    },
    opcionA_prima: {
      label: "Estambres 2",
      keyStep: "F'",
      especieId: "sapium_haematospermum",
    },
  },
  sebastiania_a: {
    id: "sebastiania_a",
    milestone: "Sebastiania",
    manualPage: 286,
    descripcion: "Sebastiania - A: glándulas de brácteas",
    opcionA: {
      label: "Brácteas de la inflorescencia con dos glándulas chatas y rugosas en su base; cápsulas de más de 1 cm",
      keyStep: "A",
      especieId: "sebastiania_brasiliensis",
    },
    opcionA_prima: {
      label: "Brácteas de la inflorescencia con dos glándulas pequeñas, lisas y pediceladas en su base; cápsulas de unos 8 mm",
      keyStep: "A'",
      especieId: "sebastiania_klotzschiana",
    },
  },
  euphorbiaceae_g: {
    id: "euphorbiaceae_g",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - G: disposición de lóculos de anteras",
    opcionA: {
      label: "Lóculos de las anteras divergentes, unidos al filamento únicamente por su ápice",
      keyStep: "G",
      nextNodeId: "euphorbiaceae_h",
    },
    opcionA_prima: {
      label: "Lóculos de las anteras paralelos y adnatos",
      keyStep: "G'",
      nextNodeId: "euphorbiaceae_i",
    },
  },
  euphorbiaceae_h: {
    id: "euphorbiaceae_h",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - H: disposición de hojas",
    opcionA: {
      label: "Hojas alternas",
      keyStep: "H",
      nextNodeId: "acalypha_a",
    },
    opcionA_prima: {
      label: "Hojas opuestas",
      keyStep: "H'",
      especieId: "mercurialis_annua",
    },
  },
  acalypha_a: {
    id: "acalypha_a",
    milestone: "Acalypha",
    manualPage: 288,
    descripcion: "Acalypha - A: porte y hojas",
    opcionA: {
      label: "Hierba hirsuta de 0,5 m; rizoma grueso; hojas elípticas, aserradas, trinervadas, de 2-7 cm",
      keyStep: "A",
      especieId: "acalypha_communis_guaranitica",
    },
    opcionA_prima: {
      label: "Sufrútice de 0,5-1 m; ramas cortamente pubescentes; hojas ovadas, acuminadas, glabras, trinervadas, de 10-15 cm",
      keyStep: "A'",
      especieId: "acalypha_gracilis",
    },
  },
  euphorbiaceae_i: {
    id: "euphorbiaceae_i",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - I: cantidad de estambres",
    opcionA: {
      label: "Estambres 3; estilos 3, enteros o fimbriados",
      keyStep: "I",
      nextNodeId: "tragia_a",
    },
    opcionA_prima: {
      label: "Estambres 5-20",
      keyStep: "I'",
      nextNodeId: "euphorbiaceae_j",
    },
  },
  tragia_a: {
    id: "tragia_a",
    milestone: "Tragia",
    manualPage: 288,
    descripcion: "Tragia - A: largo del pedúnculo femenino",
    opcionA: {
      label: "Flores femeninas con pedúnculos de 15-40 mm; hierba perenne voluble, cortamente pubescente",
      keyStep: "A",
      especieId: "tragia_volubilis",
    },
    opcionA_prima: {
      label: "Flores femeninas con pedúnculos de hasta 5 mm; hierba perenne ascendente, cubierta de pelos urticantes",
      keyStep: "A'",
      especieId: "tragia_geraniifolia",
    },
  },
  euphorbiaceae_j: {
    id: "euphorbiaceae_j",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - J: cantidad y disposición de estambres",
    opcionA: {
      label: "Estambres 5, en un solo verticilo",
      keyStep: "J",
      especieId: "chiropetalum_griseum",
    },
    opcionA_prima: {
      label: "Estambres 10-20",
      keyStep: "J'",
      nextNodeId: "euphorbiaceae_k",
    },
  },
  euphorbiaceae_k: {
    id: "euphorbiaceae_k",
    milestone: "Euphorbiaceae",
    manualPage: 283,
    descripcion: "Euphorbiaceae - K: largo y curvatura de filamentos",
    opcionA: {
      label: "Filamentos estaminales largos, curvados dentro del botón floral; en la región, especies arbustivas",
      keyStep: "K",
      especieId: "croton_parvifolius",
    },
    opcionA_prima: {
      label: "Filamentos estaminales cortísimos, no curvados; en la región, especies herbáceas",
      keyStep: "K'",
      especieId: "caperonia_cordata",
    },
  },
  callitrichaceae_a: {
    id: "callitrichaceae_a",
    milestone: "Callitrichaceae",
    manualPage: 291,
    descripcion: "Callitrichaceae - A: proporción del fruto y brácteas",
    opcionA: {
      label: "Fruto más ancho que alto; flores sin brácteas; plantas terrestres de suelos húmedos",
      keyStep: "A",
      nextNodeId: "callitrichaceae_b",
    },
    opcionA_prima: {
      label: "Fruto tan alto como ancho o algo más alto; flores con dos brácteas; plantas anfibias o sumergidas",
      keyStep: "A'",
      nextNodeId: "callitrichaceae_c",
    },
  },
  callitrichaceae_b: {
    id: "callitrichaceae_b",
    milestone: "Callitrichaceae",
    manualPage: 291,
    descripcion: "Callitrichaceae - B: cara de mericarpos",
    opcionA: {
      label: "Frutos de 0,7-0,9 mm por 0,6-0,8 mm; cara de los mericarpos convexa; ala muy estrecha",
      keyStep: "B",
      especieId: "callitriche_turfosa",
    },
    opcionA_prima: {
      label: "Frutos de 0,5-0,9 mm por 0,3-0,7 mm; cara de los mericarpos casi plana; ala muy angosta",
      keyStep: "B'",
      especieId: "callitriche_deflexa",
    },
  },
  callitrichaceae_c: {
    id: "callitrichaceae_c",
    milestone: "Callitrichaceae",
    manualPage: 291,
    descripcion: "Callitrichaceae - C: alas del fruto",
    opcionA: {
      label: "Frutos redondeados, circundados por alas estrechas; hojas obovadas o espatuladas",
      keyStep: "C",
      especieId: "callitriche_rimosa",
    },
    opcionA_prima: {
      label: "Frutos sin ala o con ala estrechísima que no rodea totalmente los mericarpos",
      keyStep: "C'",
      nextNodeId: "callitrichaceae_d",
    },
  },
  callitrichaceae_d: {
    id: "callitrichaceae_d",
    milestone: "Callitrichaceae",
    manualPage: 291,
    descripcion: "Callitrichaceae - D: presencia de alas",
    opcionA: {
      label: "Frutos sin alas, de 0,6-1,2 mm por otro tanto de alto; hojas lineales o espatuladas",
      keyStep: "D",
      especieId: "callitriche_heterophylla",
    },
    opcionA_prima: {
      label: "Frutos con alas estrechísimas que no llegan ni a la base ni al ápice; hojas espatuladas",
      keyStep: "D'",
      especieId: "callitriche_oblongicarpa",
    },
  },
  celastraceae_a: {
    id: "celastraceae_a",
    milestone: "Celastraceae",
    manualPage: 293,
    descripcion: "Celastraceae - A: tipo de fruto y mería floral",
    opcionA: {
      label: "Fruto drupáceo; flores tetrámeras",
      keyStep: "A",
      especieId: "schaefferia_uruguayensis",
    },
    opcionA_prima: {
      label: "Fruto cápsula; semillas con arilo; flores 5-meras",
      keyStep: "A'",
      especieId: "maytenus_vitis_idaea",
    },
  },
  sapindaceae_a: {
    id: "sapindaceae_a",
    milestone: "Sapindaceae",
    manualPage: 295,
    descripcion: "Sapindaceae - A: hojas simples o compuestas",
    opcionA: {
      label: "Hojas simples, enteras, lanceoladas; arbustos resinosos; fruto cápsula trialada",
      keyStep: "A",
      especieId: "dodonaea_viscosa",
    },
    opcionA_prima: {
      label: "Hojas compuestas, con folíolos generalmente aserrados",
      keyStep: "A'",
      nextNodeId: "sapindaceae_b",
    },
  },
  sapindaceae_b: {
    id: "sapindaceae_b",
    milestone: "Sapindaceae",
    manualPage: 295,
    descripcion: "Sapindaceae - B: porte y zarcillos",
    opcionA: {
      label: "Árboles desprovistos de zarcillos; frutos constituidos por 3 drupas",
      keyStep: "B",
      especieId: "allophylus_edulis",
    },
    opcionA_prima: {
      label: "Lianas con zarcillos; fruto cápsula o trisámara",
      keyStep: "B'",
      nextNodeId: "sapindaceae_c",
    },
  },
  sapindaceae_c: {
    id: "sapindaceae_c",
    milestone: "Sapindaceae",
    manualPage: 295,
    descripcion: "Sapindaceae - C: tipo de fruto en lianas",
    opcionA: {
      label: "Fruto cápsula membranosa, inflada, trilocular",
      keyStep: "C",
      nextNodeId: "cardiospermum_a",
    },
    opcionA_prima: {
      label: "Fruto trisámara",
      keyStep: "C'",
      nextNodeId: "sapindaceae_d",
    },
  },
  cardiospermum_a: {
    id: "cardiospermum_a",
    milestone: "Cardiospermum",
    manualPage: 297,
    descripcion: "Cardiospermum - A: ciclo de vida y pubescencia",
    opcionA: {
      label: "Enredadera anual, glabra salvo partes jóvenes lanuginosas; flores pequeñas blancas; cápsulas de 25 mm",
      keyStep: "A",
      especieId: "cardiospermum_halicacabum",
    },
    opcionA_prima: {
      label: "Enredadera perenne, leñosa en la base, corta y densamente pubescente; flores blancas de unos 10 mm; cápsulas de 25-30 mm",
      keyStep: "A'",
      especieId: "cardiospermum_grandiflorum",
    },
  },
  sapindaceae_d: {
    id: "sapindaceae_d",
    milestone: "Sapindaceae",
    manualPage: 295,
    descripcion: "Sapindaceae - D: posición de semillas y ala",
    opcionA: {
      label: "Semillas en el centro del fruto, llevando el ala a su alrededor",
      keyStep: "D",
      especieId: "urvillea_uniloba",
    },
    opcionA_prima: {
      label: "Semillas en el ápice del fruto, llevando el ala sólo en su parte inferior",
      keyStep: "D'",
      especieId: "serjania_meridionalis",
    },
  },
  rhamnaceae_a: {
    id: "rhamnaceae_a",
    milestone: "Rhamnaceae",
    manualPage: 299,
    descripcion: "Rhamnaceae - A: porte y hojas",
    opcionA: {
      label: "Árboles con hojas persistentes",
      keyStep: "A",
      nextNodeId: "rhamnaceae_b",
    },
    opcionA_prima: {
      label: "Arbustos espinosos, áfilos o con hojas reducidas",
      keyStep: "A'",
      nextNodeId: "rhamnaceae_c",
    },
  },
  rhamnaceae_b: {
    id: "rhamnaceae_b",
    milestone: "Rhamnaceae",
    manualPage: 299,
    descripcion: "Rhamnaceae - B: espinas y disco",
    opcionA: {
      label: "Espinas axilares, cortas; hojas apenas aserradas; disco grueso",
      keyStep: "B",
      especieId: "scutia_buxifolia",
    },
    opcionA_prima: {
      label: "Espinas formadas por las ramas hojosas; hojas aserradas; disco delgado",
      keyStep: "B'",
      especieId: "rhamnus_cathartica",
    },
  },
  rhamnaceae_c: {
    id: "rhamnaceae_c",
    milestone: "Rhamnaceae",
    manualPage: 299,
    descripcion: "Rhamnaceae - C: nudos y borde del disco",
    opcionA: {
      label: "Ramas con nudos marcados por una línea transversal; flores con el borde del disco no enrollado hacia adentro",
      keyStep: "C",
      especieId: "discaria_longispina",
    },
    opcionA_prima: {
      label: "Ramas sin nudos marcados; flores con el borde del disco enrollado hacia adentro",
      keyStep: "C'",
      nextNodeId: "colletia_a",
    },
  },
  colletia_a: {
    id: "colletia_a",
    milestone: "Colletia",
    manualPage: 300,
    descripcion: "Colletia - A: grosor de ramas y espinas",
    opcionA: {
      label: "Ramas y espinas gruesas, rígidas; arbusto de 1,5-4 m; flores aglomeradas en la base de las espinas",
      keyStep: "A",
      especieId: "colletia_spinosissima",
    },
    opcionA_prima: {
      label: "Ramas y espinas delgadas, flexibles; arbusto de 1,5-2 m",
      keyStep: "A'",
      especieId: "colletia_tenuicola",
    },
  },
  vitaceae_a: {
    id: "vitaceae_a",
    milestone: "Vitaceae",
    manualPage: 302,
    descripcion: "Vitaceae - Cissus A: forma de folíolos",
    opcionA: {
      label: "Folíolos lanceolado-lineales, aserrados; cimas opuestas a las hojas; bayas negras ovoides con 1-2 semillas",
      keyStep: "A",
      especieId: "cissus_palmata",
    },
    opcionA_prima: {
      label: "Folíolos oblanceolado-espatulados, algo coriáceos; el resto de los caracteres como en A",
      keyStep: "A'",
      especieId: "cissus_striata_argentina",
    },
  },
  malvaceae_a: {
    id: "malvaceae_a",
    milestone: "Malvaceae",
    manualPage: 304,
    descripcion: "Malvaceae - A: tipo de fruto y estilos",
    opcionA: {
      label: "Fruto cápsula loculicida; estilos soldados hasta cerca del ápice, donde los estigmas forman una cabezuela lobulada",
      keyStep: "A",
      especieId: "hibiscus_cisplatinus",
    },
    opcionA_prima: {
      label: "Fruto formado por carpelos indehiscentes o dehiscentes que se separan a la madurez; estilos libres desde su mitad o desde más abajo",
      keyStep: "A'",
      nextNodeId: "malvaceae_b",
    },
  },
  malvaceae_b: {
    id: "malvaceae_b",
    milestone: "Malvaceae",
    manualPage: 304,
    descripcion: "Malvaceae - B: número de estilos respecto de carpelos",
    opcionA: {
      label: "Estilos en número doble a los carpelos",
      keyStep: "B",
      nextNodeId: "pavonia_a",
    },
    opcionA_prima: {
      label: "Estilos en igual número que los carpelos",
      keyStep: "B'",
      nextNodeId: "malvaceae_c",
    },
  },
  pavonia_a: {
    id: "pavonia_a",
    milestone: "Pavonia",
    manualPage: 305,
    descripcion: "Pavonia - A: aristas de los carpelos",
    opcionA: {
      label: "Carpelos con 3 fuertes aristas cubiertas de pelos retrorsos",
      keyStep: "A",
      especieId: "pavonia_sepium",
    },
    opcionA_prima: {
      label: "Carpelos no aristados",
      keyStep: "A'",
      nextNodeId: "pavonia_b",
    },
  },
  pavonia_b: {
    id: "pavonia_b",
    milestone: "Pavonia",
    manualPage: 305,
    descripcion: "Pavonia - B: superficie de carpelos",
    opcionA: {
      label: "Carpelos tuberculado-rugosos en el dorso, suborbiculares, levemente pubescentes",
      keyStep: "B",
      especieId: "pavonia_xanthogloea",
    },
    opcionA_prima: {
      label: "Carpelos reticulados",
      keyStep: "B'",
      nextNodeId: "pavonia_c",
    },
  },
  pavonia_c: {
    id: "pavonia_c",
    milestone: "Pavonia",
    manualPage: 306,
    descripcion: "Pavonia - C: forma de bractéolas del calículo",
    opcionA: {
      label: "Bractéolas del calículo espatuladas",
      keyStep: "C",
      especieId: "pavonia_hastata",
    },
    opcionA_prima: {
      label: "Bractéolas del calículo lanceoladas",
      keyStep: "C'",
      nextNodeId: "pavonia_d",
    },
  },
  pavonia_d: {
    id: "pavonia_d",
    milestone: "Pavonia",
    manualPage: 306,
    descripcion: "Pavonia - D: forma de hojas y retículo del carpelo",
    opcionA: {
      label: "Hojas ovado-deltoideas, acorazonadas, crenado-aserradas; carpelos con retículo notable",
      keyStep: "D",
      especieId: "pavonia_pulchra",
    },
    opcionA_prima: {
      label: "Hojas lanceoladas, de base redondeada y borde crenado; carpelos apenas reticulados",
      keyStep: "D'",
      especieId: "pavonia_consobrina",
    },
  },
  malvaceae_c: {
    id: "malvaceae_c",
    milestone: "Malvaceae",
    manualPage: 304,
    descripcion: "Malvaceae - C: cantidad de óvulos por carpelo",
    opcionA: {
      label: "Carpelos con 2 a muchos óvulos",
      keyStep: "C",
      nextNodeId: "malvaceae_d",
    },
    opcionA_prima: {
      label: "Carpelos con un solo óvulo",
      keyStep: "C'",
      nextNodeId: "malvaceae_f",
    },
  },
  malvaceae_d: {
    id: "malvaceae_d",
    milestone: "Malvaceae",
    manualPage: 304,
    descripcion: "Malvaceae - D: cavidades de los carpelos",
    opcionA: {
      label: "Carpelos divididos en dos cavidades superpuestas",
      keyStep: "D",
      especieId: "modiola_caroliniana",
    },
    opcionA_prima: {
      label: "Carpelos uniloculares",
      keyStep: "D'",
      nextNodeId: "malvaceae_e",
    },
  },
  malvaceae_e: {
    id: "malvaceae_e",
    milestone: "Malvaceae",
    manualPage: 304,
    descripcion: "Malvaceae - E: presencia de calículo",
    opcionA: {
      label: "Cáliz con calículo; carpelos con 2-3 óvulos",
      keyStep: "E",
      especieId: "sphaeralcea_bonariensis",
    },
    opcionA_prima: {
      label: "Cáliz sin calículo; carpelos con 3-9 óvulos",
      keyStep: "E'",
      nextNodeId: "abutilon_a",
    },
  },
  abutilon_a: {
    id: "abutilon_a",
    milestone: "Abutilon",
    manualPage: 308,
    descripcion: "Abutilon - A: disposición de flores y color de pétalos",
    opcionA: {
      label: "Flores siempre solitarias, sobre pedúnculos largos y gruesos; pétalos anaranjado-rojizos; hojas discolores",
      keyStep: "A",
      especieId: "abutilon_pauciflorum",
    },
    opcionA_prima: {
      label: "Flores generalmente geminadas; pétalos amarillos; hojas concolores",
      keyStep: "A'",
      especieId: "abutilon_molle",
    },
  },
  malvaceae_f: {
    id: "malvaceae_f",
    milestone: "Malvaceae",
    manualPage: 304,
    descripcion: "Malvaceae - F: paredes laterales de carpelos maduros",
    opcionA: {
      label: "Paredes laterales de los carpelos maduros incompletas, dejando ver las semillas",
      keyStep: "F",
      especieId: "anoda_cristata",
    },
    opcionA_prima: {
      label: "Paredes laterales de los carpelos maduros completas, encerrando totalmente la semilla",
      keyStep: "F'",
      nextNodeId: "malvaceae_g",
    },
  },
  malvaceae_g: {
    id: "malvaceae_g",
    milestone: "Malvaceae",
    manualPage: 304,
    descripcion: "Malvaceae - G: cavidades de carpelos",
    opcionA: {
      label: "Carpelos divididos en dos cavidades superpuestas, la superior vacía y la inferior con un óvulo",
      keyStep: "G",
      nextNodeId: "modiolastrum_a",
    },
    opcionA_prima: {
      label: "Carpelos con una sola cavidad",
      keyStep: "G'",
      nextNodeId: "malvaceae_h",
    },
  },
  modiolastrum_a: {
    id: "modiolastrum_a",
    milestone: "Modiolastrum",
    manualPage: 309,
    descripcion: "Modiolastrum - A: dorso de mericarpos y raíces",
    opcionA: {
      label: "Mericarpos castaños, con una doble fila de prominencias notables en su dorso; raíces tuberosas",
      keyStep: "A",
      especieId: "modiolastrum_gilliesii",
    },
    opcionA_prima: {
      label: "Mericarpos con el dorso casi liso; raíces no tuberosas",
      keyStep: "A'",
      nextNodeId: "modiolastrum_b",
    },
  },
  modiolastrum_b: {
    id: "modiolastrum_b",
    milestone: "Modiolastrum",
    manualPage: 309,
    descripcion: "Modiolastrum - B: pubescencia y tamaño de cámara estéril",
    opcionA: {
      label: "Mericarpos ligeramente pubescentes en la parte superior, con la cámara vacía igual o más grande que la seminífera",
      keyStep: "B",
      especieId: "modiolastrum_malvifolium",
    },
    opcionA_prima: {
      label: "Mericarpos largamente hirsutos en la parte superior, con la cámara estéril mucho menor que la seminífera",
      keyStep: "B'",
      especieId: "modiolastrum_lateritium",
    },
  },
  malvaceae_h: {
    id: "malvaceae_h",
    milestone: "Malvaceae",
    manualPage: 304,
    descripcion: "Malvaceae - H: posición de óvulos",
    opcionA: {
      label: "Óvulos péndulos",
      keyStep: "H",
      nextNodeId: "sida_a",
    },
    opcionA_prima: {
      label: "Óvulos ascendentes",
      keyStep: "H'",
      nextNodeId: "malvaceae_j",
    },
  },
  sida_a: {
    id: "sida_a",
    milestone: "Sida",
    manualPage: 310,
    descripcion: "Sida - A: porte y aristas de carpelos",
    opcionA: {
      label: "Plantas decumbentes; carpelos múticos",
      keyStep: "A",
      nextNodeId: "sida_b",
    },
    opcionA_prima: {
      label: "Plantas erectas; carpelos con dos aristas apicales",
      keyStep: "A'",
      nextNodeId: "sida_c",
    },
  },
  sida_b: {
    id: "sida_b",
    milestone: "Sida",
    manualPage: 310,
    descripcion: "Sida - B: forma e indumento de hojas",
    opcionA: {
      label: "Hojas flabeladas o reniformes, crenadas, verdes y laxamente escamosas en el haz, plateadas en el envés",
      keyStep: "B",
      especieId: "sida_leprosa",
    },
    opcionA_prima: {
      label: "Hojas ovadas u orbiculares, dentadas, verdes en ambas caras, con pelos estrellados",
      keyStep: "B'",
      especieId: "sida_hastata",
    },
  },
  sida_c: {
    id: "sida_c",
    milestone: "Sida",
    manualPage: 310,
    descripcion: "Sida - C: cantidad de carpelos y espinita basal",
    opcionA: {
      label: "Ovario con 5 carpelos; hojas con una espinita en la base del pecíolo",
      keyStep: "C",
      especieId: "sida_spinosa_angustifolia",
    },
    opcionA_prima: {
      label: "Ovario con 10-14 carpelos; hojas sin espinita en su base",
      keyStep: "C'",
      especieId: "sida_rhombifolia",
    },
  },
  malvaceae_j: {
    id: "malvaceae_j",
    milestone: "Malvaceae",
    manualPage: 304,
    descripcion: "Malvaceae - J: tipo de estigmas",
    opcionA: {
      label: "Estigmas capitados",
      keyStep: "J",
      nextNodeId: "malvaceae_k",
    },
    opcionA_prima: {
      label: "Estigmas distribuidos a lo largo de las ramas subuladas del estilo",
      keyStep: "J'",
      nextNodeId: "malva_a",
    },
  },
  malvaceae_k: {
    id: "malvaceae_k",
    milestone: "Malvaceae",
    manualPage: 304,
    descripcion: "Malvaceae - K: dehiscencia de carpelos",
    opcionA: {
      label: "Carpelos dehiscentes ventral y apicalmente; inflorescencias cimosas",
      keyStep: "K",
      especieId: "monteiroa_glomerata",
    },
    opcionA_prima: {
      label: "Carpelos indehiscentes; flores no en cimas",
      keyStep: "K'",
      especieId: "malvastrum_coromandelianum",
    },
  },
  malva_a: {
    id: "malva_a",
    milestone: "Malva",
    manualPage: 311,
    descripcion: "Malva - A: forma de bractéolas",
    opcionA: {
      label: "Bractéolas del calículo lineales; pétalos violáceos, poco más largos que los sépalos; hierba anual rastrera",
      keyStep: "A",
      especieId: "malva_parviflora",
    },
    opcionA_prima: {
      label: "Bractéolas del calículo ovadas",
      keyStep: "A'",
      nextNodeId: "malva_b",
    },
  },
  malva_b: {
    id: "malva_b",
    milestone: "Malva",
    manualPage: 312,
    descripcion: "Malva - B: porte y color de pétalos",
    opcionA: {
      label: "Plantas erguidas, bienales; pétalos violáceos, 2-3 veces más largos que el cáliz",
      keyStep: "B",
      especieId: "malva_sylvestris",
    },
    opcionA_prima: {
      label: "Plantas decumbentes; pétalos blanquecinos, una o dos veces tan largos como el cáliz",
      keyStep: "B'",
      especieId: "malva_nicaensis",
    },
  },
  santalaceae_a: {
    id: "santalaceae_a",
    milestone: "Santalaceae",
    manualPage: 172,
    descripcion: "Santalaceae - A: porte y tipo de perianto",
    opcionA: {
      label: "Hierbas; perianto tubuloso",
      keyStep: "A",
      especieId: "arjona_tuberosa_tandilensis",
    },
    opcionA_prima: {
      label: "Árboles; perianto no tubuloso",
      keyStep: "A'",
      nextNodeId: "santalaceae_b",
    },
  },
  santalaceae_b: {
    id: "santalaceae_b",
    milestone: "Santalaceae",
    manualPage: 172,
    descripcion: "Santalaceae - B: hojas, flores y fruto",
    opcionA: {
      label: "Hojas oblanceoladas; flores en racimos paucifloros; fruto liso",
      keyStep: "B",
      especieId: "acanthosyris_spinescens",
    },
    opcionA_prima: {
      label: "Hojas rómbicas, espinosas; flores en glomérulos axilares; fruto rugoso",
      keyStep: "B'",
      especieId: "jodina_rhombifolia",
    },
  },
  dicot_group_b_f: {
    id: "dicot_group_b_f",
    descripcion: "Grupo B - F: con ovario súpero, ¿las hojas tienen ócrea?",
    opcionA: {
      label: "Sí; ócrea formada por estípulas intrapeciolares soldadas",
      keyStep: "F",
      nextNodeId: "polygonaceae_a",
    },
    opcionA_prima: {
      label: "No; hojas sin ócrea",
      keyStep: "F'",
      nextNodeId: "dicot_group_b_g",
    },
  },
  polygonaceae_a: {
    id: "polygonaceae_a",
    milestone: "Polygonaceae",
    manualPage: 177,
    descripcion: "Polygonaceae - A: frutos grandes espinosos o pequeños sin espinas",
    opcionA: {
      label: "Frutos grandes, con 3 espinas divergentes en el ápice; flores diclinas monoicas",
      keyStep: "A",
      especieId: "emex_spinosa",
    },
    opcionA_prima: {
      label: "Frutos pequeños, sin espinas",
      keyStep: "A'",
      nextNodeId: "polygonaceae_b",
    },
  },
  polygonaceae_b: {
    id: "polygonaceae_b",
    milestone: "Polygonaceae",
    manualPage: 177,
    descripcion: "Polygonaceae - B: piezas del perianto, estambres y estigmas",
    opcionA: {
      label: "Perianto formado por 6 piezas: tres cortas externas y tres más grandes internas, acrescentes y persistentes sobre el fruto; estambres 6; estigmas penicilados o fimbriados",
      keyStep: "B",
      nextNodeId: "rumex_a",
    },
    opcionA_prima: {
      label: "Perianto formado por 5 piezas iguales, o las tres exteriores algo mayores; estambres 8; estigmas generalmente capitados",
      keyStep: "B'",
      nextNodeId: "polygonaceae_c",
    },
  },
  polygonaceae_c: {
    id: "polygonaceae_c",
    milestone: "Polygonaceae",
    manualPage: 177,
    descripcion: "Polygonaceae - C: sexualidad de las flores y porte",
    opcionA: {
      label: "Flores hermafroditas; hierbas",
      keyStep: "C",
      nextNodeId: "polygonum_a",
    },
    opcionA_prima: {
      label: "Flores polígamas o dioicas; arbustos o lianas",
      keyStep: "C'",
      especieId: "muehlenbeckia_sagittifolia",
    },
  },
  rumex_a: {
    id: "rumex_a",
    milestone: "Rumex",
    manualPage: 178,
    descripcion: "Rumex - A: valvas aladas del perianto fructífero",
    opcionA: {
      label: "Segmentos interiores del perianto no transformados en valvas aladas; hojas pecioladas, hastadas, con dos lóbulos divergentes en la base",
      keyStep: "A",
      especieId: "rumex_acetosella",
    },
    opcionA_prima: {
      label: "Segmentos interiores del perianto transformados en valvas aladas; hojas no hastadas",
      keyStep: "A'",
      nextNodeId: "rumex_b",
    },
  },
  rumex_b: {
    id: "rumex_b",
    milestone: "Rumex",
    manualPage: 178,
    descripcion: "Rumex - B: margen de las valvas del fruto",
    opcionA: {
      label: "Valvas de los frutos enteras en el margen",
      keyStep: "B",
      nextNodeId: "rumex_c",
    },
    opcionA_prima: {
      label: "Valvas de los frutos dentadas o recortadas en el margen",
      keyStep: "B'",
      nextNodeId: "rumex_f",
    },
  },
  rumex_c: {
    id: "rumex_c",
    milestone: "Rumex",
    manualPage: 178,
    descripcion: "Rumex - C: disposición de los glomérulos",
    opcionA: {
      label: "Flores en glomérulos distantes entre sí, cada uno con una hoja en su base; raíces napiformes; hojas ovado-oblongas, crenuladas y algo crespas",
      keyStep: "C",
      especieId: "rumex_conglomeratus",
    },
    opcionA_prima: {
      label: "Flores en glomérulos aproximados, sin hojas, formando en conjunto una panoja densa",
      keyStep: "C'",
      nextNodeId: "rumex_d",
    },
  },
  rumex_d: {
    id: "rumex_d",
    milestone: "Rumex",
    manualPage: 178,
    descripcion: "Rumex - D: margen de las hojas y forma de valvas",
    opcionA: {
      label: "Hojas crespas en el margen; valvas del fruto anchamente membranosas; callo semigloboso",
      keyStep: "D",
      especieId: "rumex_crispus",
    },
    opcionA_prima: {
      label: "Hojas planas en el margen; valvas del fruto triangulares, no membranosas, con callo alargado",
      keyStep: "D'",
      nextNodeId: "rumex_e",
    },
  },
  rumex_e: {
    id: "rumex_e",
    milestone: "Rumex",
    manualPage: 178,
    descripcion: "Rumex - E: rizomas y altura de tallos",
    opcionA: {
      label: "Hierbas perennes, de 0,5-1 m de alto, sin rizomas; hojas ovadas u oblongas, agudas, ligeramente crenuladas",
      keyStep: "E",
      especieId: "rumex_argentinus",
    },
    opcionA_prima: {
      label: "Hierbas rizomatosas, con tallos aéreos de 10-20 cm; hojas coriáceas, espatuladas, obtusas, crenuladas",
      keyStep: "E'",
      especieId: "rumex_cuneifolius",
    },
  },
  rumex_f: {
    id: "rumex_f",
    milestone: "Rumex",
    manualPage: 178,
    descripcion: "Rumex - F: duración de la planta",
    opcionA: {
      label: "Plantas perennes",
      keyStep: "F",
      nextNodeId: "rumex_g",
    },
    opcionA_prima: {
      label: "Plantas anuales o bienales",
      keyStep: "F'",
      nextNodeId: "rumex_h",
    },
  },
  rumex_g: {
    id: "rumex_g",
    milestone: "Rumex",
    manualPage: 178,
    descripcion: "Rumex - G: glomérulos axilares o panoja densa",
    opcionA: {
      label: "Flores en glomérulos axilares; plantas divaricado-ramosas, de 30-50 cm; hojas inferiores oblongo-panduriformes",
      keyStep: "G",
      especieId: "rumex_pulcher",
    },
    opcionA_prima: {
      label: "Flores en glomérulos áfilos formando una panoja densa; tallos erectos de cerca de 1 m; hojas oblongas, agudas o semiobtusas",
      keyStep: "G'",
      especieId: "rumex_obtusifolius",
    },
  },
  rumex_h: {
    id: "rumex_h",
    milestone: "Rumex",
    manualPage: 178,
    descripcion: "Rumex - H: tamaño de valvas y tipo de callo",
    opcionA: {
      label: "Valvas grandes, de 4-5 mm por 3 mm, con callo rugoso; tallos erectos de 20-70 cm; hojas obovadas, obtusas",
      keyStep: "H",
      especieId: "rumex_obovatus",
    },
    opcionA_prima: {
      label: "Valvas menores, de unos 3 mm por 2 mm, con callo liso; tallos erectos de hasta 70 cm; hojas obovadas o panduriformes, algo crespas",
      keyStep: "H'",
      especieId: "rumex_paraguayensis",
    },
  },
  polygonum_a: {
    id: "polygonum_a",
    milestone: "Polygonum",
    manualPage: 180,
    descripcion: "Polygonum - A: hábito voluble",
    opcionA: {
      label: "Plantas volubles, con hojas acorazonadas glabras; flores pequeñas verdosas en fascículos axilares, las superiores formando un seudo-racimo laxo",
      keyStep: "A",
      especieId: "polygonum_convolvulus",
    },
    opcionA_prima: {
      label: "Plantas no volubles; hojas lanceoladas o hastadas",
      keyStep: "A'",
      nextNodeId: "polygonum_b",
    },
  },
  polygonum_b: {
    id: "polygonum_b",
    milestone: "Polygonum",
    manualPage: 180,
    descripcion: "Polygonum - B: posición de las flores",
    opcionA: {
      label: "Flores dispuestas en las axilas de las hojas",
      keyStep: "B",
      nextNodeId: "polygonum_c",
    },
    opcionA_prima: {
      label: "Flores dispuestas en espigas o en glomérulos terminales",
      keyStep: "B'",
      nextNodeId: "polygonum_d",
    },
  },
  polygonum_c: {
    id: "polygonum_c",
    milestone: "Polygonum",
    manualPage: 180,
    descripcion: "Polygonum - C: duración y porte",
    opcionA: {
      label: "Plantas anuales, glaucas, con tallos rastreros o ascendentes, glabros; hojas lanceoladas u ovado-lanceoladas de 1,5-4 cm; ocreas plateadas, rasgadas",
      keyStep: "C",
      especieId: "polygonum_aviculare",
    },
    opcionA_prima: {
      label: "Plantas perennes, sufruticosas, con raíz gruesa y profunda; tallos tendidos o ascendentes; hojas lineal-lanceoladas de 1-3 cm; ocreas cortas, laciniadas",
      keyStep: "C'",
      especieId: "polygonum_camporum_australe",
    },
  },
  polygonum_d: {
    id: "polygonum_d",
    milestone: "Polygonum",
    manualPage: 180,
    descripcion: "Polygonum - D: hojas hastadas o lanceoladas/ovadas",
    opcionA: {
      label: "Hojas hastadas; hierbas perennes palustres, de cerca de 1 m, cubiertas de aguijones retrorsos; flores en espigas cortas y densas",
      keyStep: "D",
      especieId: "polygonum_stelligerum",
    },
    opcionA_prima: {
      label: "Hojas lanceoladas u ovadas; plantas sin espinas; espigas alargadas",
      keyStep: "D'",
      nextNodeId: "polygonum_e",
    },
  },
  polygonum_e: {
    id: "polygonum_e",
    milestone: "Polygonum",
    manualPage: 180,
    descripcion: "Polygonum - E: forma de las hojas",
    opcionA: {
      label: "Hojas lanceoladas",
      keyStep: "E",
      nextNodeId: "polygonum_f",
    },
    opcionA_prima: {
      label: "Hojas anchamente ovadas; hierba anual erecta, híspida, de 0,5-1 m; flores en panojas de racimos espiciformes densos, péndulos; perianto rosa fuerte",
      keyStep: "E'",
      especieId: "polygonum_orientale",
    },
  },
  polygonum_f: {
    id: "polygonum_f",
    milestone: "Polygonum",
    manualPage: 180,
    descripcion: "Polygonum - F: pubescencia de las hojas",
    opcionA: {
      label: "Hojas cubiertas de pubescencia tendida más o menos densa; ocreas superiores largamente ciliadas; flores blancas en espigas terminales densas",
      keyStep: "F",
      especieId: "polygonum_acuminatum_microstemon",
    },
    opcionA_prima: {
      label: "Hojas glabras, o a lo más ciliadas en los bordes y en la nervadura central",
      keyStep: "F'",
      nextNodeId: "polygonum_g",
    },
  },
  polygonum_g: {
    id: "polygonum_g",
    milestone: "Polygonum",
    manualPage: 180,
    descripcion: "Polygonum - G: puntos glandulares en los sépalos",
    opcionA: {
      label: "Sépalos cubiertos de puntos glandulares negros o rojizos; hojas lanceoladas, acuminadas, de 5-15 cm; flores blanquecinas o rosadas en espigas laxas",
      keyStep: "G",
      especieId: "polygonum_punctatum",
    },
    opcionA_prima: {
      label: "Sépalos sin puntos glandulares negros",
      keyStep: "G'",
      nextNodeId: "polygonum_h",
    },
  },
  polygonum_h: {
    id: "polygonum_h",
    milestone: "Polygonum",
    manualPage: 180,
    descripcion: "Polygonum - H: robustez de la planta y tipo de tallos",
    opcionA: {
      label: "Plantas muy robustas, con tallos crasos, flotantes, tendidos o ascendentes, de medio metro o más; hojas lanceoladas de 12-30 cm; espigas ramificadas densas",
      keyStep: "H",
      especieId: "polygonum_spectabile",
    },
    opcionA_prima: {
      label: "Plantas gráciles, con tallos delgados, erectos",
      keyStep: "H'",
      nextNodeId: "polygonum_j",
    },
  },
  polygonum_j: {
    id: "polygonum_j",
    milestone: "Polygonum",
    manualPage: 180,
    descripcion: "Polygonum - J: densidad de espigas y cilias de las ocreas",
    opcionA: {
      label: "Espigas laxas; ocreas con cilias largas en el borde; hierbas perennes generalmente glabras, con tallos erectos o ascendentes de medio metro; flores blanquecinas",
      keyStep: "J",
      especieId: "polygonum_hydropiperoides",
    },
    opcionA_prima: {
      label: "Espigas densas; ocreas sin cilias; hierbas anuales de 30-90 cm; hojas lanceoladas ligeramente pubescentes; perianto rosado o blanco",
      keyStep: "J'",
      especieId: "polygonum_lapathifolium",
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
      nextNodeId: "euphorbiaceae_a",
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
      nextNodeId: "phytolaccaceae_a",
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
      nextNodeId: "aizoaceae_a",
    },
    opcionA_prima: {
      label: "Hojas no verticiladas",
      keyStep: "K'",
      nextNodeId: "euphorbiaceae_a",
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
      nextNodeId: "phytolaccaceae_a",
    },
    opcionA_prima: {
      label: "Fruto nuez indehiscente",
      keyStep: "Q'",
      nextNodeId: "chenopodiaceae_a",
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
      nextNodeId: "chenopodiaceae_a",
    },
  },
  chenopodiaceae_a: {
    id: "chenopodiaceae_a",
    milestone: "Chenopodiaceae",
    manualPage: 182,
    descripcion: "Chenopodiaceae - A: hojas reducidas y espigas con brácteas carnosas",
    opcionA: {
      label: "Plantas con hojas muy reducidas, aparentemente áfilas; flores en axilas de brácteas carnosas formando espigas",
      keyStep: "A",
      especieId: "salicornia_ambigua",
    },
    opcionA_prima: {
      label: "Plantas con hojas normales; flores solitarias o agrupadas, pero no en axilas de brácteas formando espigas",
      keyStep: "A'",
      nextNodeId: "chenopodiaceae_b",
    },
  },
  chenopodiaceae_b: {
    id: "chenopodiaceae_b",
    milestone: "Chenopodiaceae",
    manualPage: 182,
    descripcion: "Chenopodiaceae - B: sexualidad de las flores",
    opcionA: {
      label: "Flores hermafroditas o ginomonoicas",
      keyStep: "B",
      nextNodeId: "chenopodiaceae_c",
    },
    opcionA_prima: {
      label: "Flores diclinas o polígamas",
      keyStep: "B'",
      nextNodeId: "chenopodiaceae_f",
    },
  },
  chenopodiaceae_c: {
    id: "chenopodiaceae_c",
    milestone: "Chenopodiaceae",
    manualPage: 182,
    descripcion: "Chenopodiaceae - C: presencia de brácteas",
    opcionA: {
      label: "Flores con brácteas",
      keyStep: "C",
      nextNodeId: "chenopodiaceae_d",
    },
    opcionA_prima: {
      label: "Flores sin brácteas",
      keyStep: "C'",
      nextNodeId: "chenopodiaceae_e",
    },
  },
  chenopodiaceae_d: {
    id: "chenopodiaceae_d",
    milestone: "Chenopodiaceae",
    manualPage: 182,
    descripcion: "Chenopodiaceae - D: hojas y perigonio maduro",
    opcionA: {
      label: "Hojas anchas, pecioladas; perigonio lignificado a la madurez",
      keyStep: "D",
      especieId: "beta_vulgaris_perennis",
    },
    opcionA_prima: {
      label: "Hojas lineales, carnosas, sésiles; perigonio no lignificado",
      keyStep: "D'",
      especieId: "suaeda_patagonica_crassiuscula",
    },
  },
  chenopodiaceae_e: {
    id: "chenopodiaceae_e",
    milestone: "Chenopodiaceae",
    manualPage: 182,
    descripcion: "Chenopodiaceae - E: pelos y alas del perigonio",
    opcionA: {
      label: "Hojas velludas; perigonio maduro con un ala en el dorso de cada segmento",
      keyStep: "E",
      especieId: "kochia_scoparia",
    },
    opcionA_prima: {
      label: "Hojas con pelos glandulosos o vesiculosos; perigonio sin alas a la madurez",
      keyStep: "E'",
      nextNodeId: "chenopodium_a",
    },
  },
  chenopodiaceae_f: {
    id: "chenopodiaceae_f",
    milestone: "Chenopodiaceae",
    manualPage: 182,
    descripcion: "Chenopodiaceae - F: brácteas de flores femeninas y tipo de fruto",
    opcionA: {
      label: "Flores femeninas con dos brácteas; fruto utrículo",
      keyStep: "F",
      nextNodeId: "atriplex_a",
    },
    opcionA_prima: {
      label: "Flores sin brácteas; fruto baya roja",
      keyStep: "F'",
      especieId: "holmbergia_tweedii",
    },
  },
  atriplex_a: {
    id: "atriplex_a",
    milestone: "Atriplex",
    manualPage: 183,
    descripcion: "Atriplex - A: duración, hojas y brácteas del fruto",
    opcionA: {
      label: "Hierba perenne, con tallos rastreros y hojas lanceoladas, enteras, pruinosas, de 5-15 mm; flores en glomérulos axilares; brácteas del fruto pentalobadas",
      keyStep: "A",
      especieId: "atriplex_montevidensis",
    },
    opcionA_prima: {
      label: "Hierbas anuales, con hojas mayores; brácteas del fruto triangulares o rómbicas",
      keyStep: "A'",
      nextNodeId: "atriplex_b",
    },
  },
  atriplex_b: {
    id: "atriplex_b",
    milestone: "Atriplex",
    manualPage: 184,
    descripcion: "Atriplex - B: forma de hojas y brácteas del fruto",
    opcionA: {
      label: "Hojas triangulares; brácteas del fruto triangulares, lisas; tallos ascendentes; flores en glomérulos agrupados en espigas",
      keyStep: "B",
      especieId: "atriplex_hastata",
    },
    opcionA_prima: {
      label: "Hojas superiores lanceoladas, las inferiores ovadas; brácteas del fruto rómbicas, generalmente tuberculadas; espigas laxas",
      keyStep: "B'",
      especieId: "atriplex_patula",
    },
  },
  chenopodium_a: {
    id: "chenopodium_a",
    milestone: "Chenopodium",
    manualPage: 185,
    descripcion: "Chenopodium - A: pubescencia glandulosa y aroma",
    opcionA: {
      label: "Plantas glanduloso-pubescentes, aromáticas",
      keyStep: "A",
      nextNodeId: "chenopodium_b",
    },
    opcionA_prima: {
      label: "Plantas glabras o pruinosas, fétidas",
      keyStep: "A'",
      nextNodeId: "chenopodium_d",
    },
  },
  chenopodium_b: {
    id: "chenopodium_b",
    milestone: "Chenopodium",
    manualPage: 185,
    descripcion: "Chenopodium - B: orientación de semillas y hojas",
    opcionA: {
      label: "Semillas verticales; hierbas perennes con tallos rastreros; hojas pinatisectas, con segmentos lineales; flores en glomérulos axilares; perigonio gamotépalo",
      keyStep: "B",
      especieId: "chenopodium_multifidum",
    },
    opcionA_prima: {
      label: "Semillas generalmente horizontales; hojas dentadas; flores en panojas de espigas",
      keyStep: "B'",
      nextNodeId: "chenopodium_c",
    },
  },
  chenopodium_c: {
    id: "chenopodium_c",
    milestone: "Chenopodium",
    manualPage: 185,
    descripcion: "Chenopodium - C: forma de las hojas aromáticas",
    opcionA: {
      label: "Hojas ovado-lanceoladas; hierba anual o bienal con tallos erectos de 1-1,5 m; perigonio dividido casi hasta la base",
      keyStep: "C",
      especieId: "chenopodium_ambrosioides",
    },
    opcionA_prima: {
      label: "Hojas espatuladas, obtusas; hierba bienal con tallos tendidos o ascendentes; tépalos 5, obtusos",
      keyStep: "C'",
      especieId: "chenopodium_retusum",
    },
  },
  chenopodium_d: {
    id: "chenopodium_d",
    milestone: "Chenopodium",
    manualPage: 185,
    descripcion: "Chenopodium - D: número de piezas florales y semillas",
    opcionA: {
      label: "Flores 3-4-meras; hierba anual pruinosa de 30-50 cm; hojas triangulares, carnosas y dentadas; semillas verticales y horizontales en el mismo individuo",
      keyStep: "D",
      especieId: "chenopodium_macrospermum_halophilum",
    },
    opcionA_prima: {
      label: "Flores 5-meras; semillas todas horizontales",
      keyStep: "D'",
      nextNodeId: "chenopodium_e",
    },
  },
  chenopodium_e: {
    id: "chenopodium_e",
    milestone: "Chenopodium",
    manualPage: 185,
    descripcion: "Chenopodium - E: margen y color de hojas adultas",
    opcionA: {
      label: "Hojas uniformemente aserradas, ovadas, las adultas verdes, glabras o apenas pruinosas; anual de 20-50 cm; flores en panojas contraídas",
      keyStep: "E",
      especieId: "chenopodium_murale",
    },
    opcionA_prima: {
      label: "Hojas irregularmente recortadas o lobadas, o enteras; adultas glaucas o blanquecinas, farinoso-pruinosas al menos en la cara inferior",
      keyStep: "E'",
      nextNodeId: "chenopodium_f",
    },
  },
  chenopodium_f: {
    id: "chenopodium_f",
    milestone: "Chenopodium",
    manualPage: 185,
    descripcion: "Chenopodium - F: hojas lineales u ovado-rómbicas/hastadas",
    opcionA: {
      label: "Hojas lineal-lanceoladas, las superiores enteras y las inferiores a veces con un lóbulo a cada lado cerca de la base; anual erecta de 30-80 cm",
      keyStep: "F",
      especieId: "chenopodium_pratericola",
    },
    opcionA_prima: {
      label: "Hojas ovado-rómbicas, ovado-lanceoladas o hastadas, generalmente dentadas o lobadas",
      keyStep: "F'",
      nextNodeId: "chenopodium_g",
    },
  },
  chenopodium_g: {
    id: "chenopodium_g",
    milestone: "Chenopodium",
    manualPage: 185,
    descripcion: "Chenopodium - G: sépalos planos o carenados",
    opcionA: {
      label: "Sépalos planos; anual de 1 m, glauca, con hojas rómbico-elípticas irregularmente dentadas; flores en panojas de glomérulos",
      keyStep: "G",
      especieId: "chenopodium_zobelii",
    },
    opcionA_prima: {
      label: "Sépalos carenados",
      keyStep: "G'",
      nextNodeId: "chenopodium_h",
    },
  },
  chenopodium_h: {
    id: "chenopodium_h",
    milestone: "Chenopodium",
    manualPage: 186,
    descripcion: "Chenopodium - H: forma y pruina de las hojas",
    opcionA: {
      label: "Hojas ovado-lanceoladas u ovadas, agudas, irregularmente dentadas o enteras, laxamente pruinosas; anual erecta; flores en espigas de glomérulos",
      keyStep: "H",
      especieId: "chenopodium_album",
    },
    opcionA_prima: {
      label: "Hojas hastado-trilobadas, obtusas, densamente pruinosas; anual erecta de 1 m; flores en espigas de glomérulos",
      keyStep: "H'",
      especieId: "chenopodium_hircinum",
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
      nextNodeId: "rosaceae_a",
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
      nextNodeId: "ranunculaceae_a",
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
      nextNodeId: "rutaceae_a",
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
      nextNodeId: "nymphaeaceae_terminal",
    },
    opcionA_prima: {
      label: "Plantas pigmeas de suelos húmedos, con hojas lineales enteras",
      keyStep: "E'",
      nextNodeId: "crassula_a",
    },
  },
  nymphaeaceae_terminal: {
    id: "nymphaeaceae_terminal",
    milestone: "Nymphaeaceae",
    manualPage: 211,
    descripcion: "Nymphaeaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Cabomba australis",
      keyStep: "1",
      especieId: "cabomba_australis",
    },
    opcionA_prima: {
      label: "Identificar como Cabomba australis",
      keyStep: "1",
      especieId: "cabomba_australis",
    },
    especie: manualFamilyData.cabomba_australis,
  },
  crassula_a: {
    id: "crassula_a",
    milestone: "Crassulaceae",
    manualPage: 235,
    descripcion: "Crassula - A: pedúnculo floral y ápice de los carpelos",
    opcionA: {
      label: "Flores axilares, pedunculadas, con pedúnculos generalmente muy alargados a la fructificación; carpelos mucronados en el ápice",
      keyStep: "A",
      especieId: "crassula_bonariensis",
    },
    opcionA_prima: {
      label: "Flores axilares, sésiles o cortísimamente pedunculadas; carpelos aristados en el ápice",
      keyStep: "A'",
      especieId: "crassula_solieri",
    },
  },
  ranunculaceae_a: {
    id: "ranunculaceae_a",
    milestone: "Ranunculaceae",
    manualPage: 212,
    descripcion: "Ranunculaceae - A: hábito, hojas y sexualidad floral",
    opcionA: {
      label: "Arbustos volubles con hojas opuestas; flores unisexuales",
      keyStep: "A",
      nextNodeId: "clematis_a",
    },
    opcionA_prima: {
      label: "Hierbas con hojas radicales o alternas; flores hermafroditas",
      keyStep: "A'",
      nextNodeId: "ranunculaceae_b",
    },
  },
  clematis_a: {
    id: "clematis_a",
    milestone: "Clematis",
    manualPage: 212,
    descripcion: "Clematis - A: número de folíolos y textura",
    opcionA: {
      label: "Hojas 3-folioladas; folíolos rígidos, lustrosos, generalmente enteros, ovados, acuminados y semiacorazonados en la base, de 6-10 cm por 3-5 cm; flores dioicas en panojas",
      keyStep: "A",
      especieId: "clematis_bonariensis",
    },
    opcionA_prima: {
      label: "Hojas 3-5-folioladas; folíolos tiernos, opacos, ovados, agudos, frecuentemente con un gran lóbulo a cada lado, menores, de 1-3,5 cm de ancho; flores dioicas en panojas",
      keyStep: "A'",
      especieId: "clematis_hilarii",
    },
  },
  ranunculaceae_b: {
    id: "ranunculaceae_b",
    milestone: "Ranunculaceae",
    manualPage: 212,
    descripcion: "Ranunculaceae - B: pelos de los carpelos, óvulos e involucro",
    opcionA: {
      label: "Carpelos cubiertos de largos pelos lanosos; óvulos péndulos; flores con un involucro formado por tres hojas verticiladas",
      keyStep: "B",
      especieId: "anemone_triternata",
    },
    opcionA_prima: {
      label: "Carpelos lisos o erizados; óvulos ascendentes; flores sin involucro",
      keyStep: "B'",
      nextNodeId: "ranunculus_a",
    },
  },
  ranunculus_a: {
    id: "ranunculus_a",
    milestone: "Ranunculus",
    manualPage: 213,
    descripcion: "Ranunculus - A: forma de las hojas",
    opcionA: {
      label: "Hojas enteras; plantas diminutas con tallos tendidos en cuyos nudos nacen hojas y flores",
      keyStep: "A",
      nextNodeId: "ranunculus_b",
    },
    opcionA_prima: {
      label: "Hojas lobuladas o partidas",
      keyStep: "A'",
      nextNodeId: "ranunculus_c",
    },
  },
  ranunculus_b: {
    id: "ranunculus_b",
    milestone: "Ranunculus",
    manualPage: 213,
    descripcion: "Ranunculus - B: forma del receptáculo en hojas enteras",
    opcionA: {
      label: "Receptáculo pequeño, hemisférico; hojas largamente pecioladas, elípticas o circulares, obtusas, algo atenuadas en la base; flores amarillentas, diminutas, largamente pedunculadas; carpelos lisos",
      keyStep: "B",
      especieId: "ranunculus_flagelliformis",
    },
    opcionA_prima: {
      label: "Receptáculo cónico o cilíndrico; hojas largamente pecioladas, ovadas, algo acorazonadas en la base, sinuadas; flores diminutas",
      keyStep: "B'",
      especieId: "ranunculus_bonariensis",
    },
  },
  ranunculus_c: {
    id: "ranunculus_c",
    milestone: "Ranunculus",
    manualPage: 213,
    descripcion: "Ranunculus - C: pubescencia de las plantas",
    opcionA: {
      label: "Plantas velludas, anuales; tallos ascendentes o tendidos; hojas tripartidas, con segmentos profundamente lobados; flores diminutas, amarillas, solitarias, opuestas a las hojas; carpelos lisos",
      keyStep: "C",
      especieId: "ranunculus_platensis",
    },
    opcionA_prima: {
      label: "Plantas glabérrimas",
      keyStep: "C'",
      nextNodeId: "ranunculus_d",
    },
  },
  ranunculus_d: {
    id: "ranunculus_d",
    milestone: "Ranunculus",
    manualPage: 213,
    descripcion: "Ranunculus - D: superficie de los carpelos",
    opcionA: {
      label: "Carpelos erizados de púas rígidas; anual con tallos ascendentes de 30-40 cm; hojas pecioladas con lámina semicircular profundamente trilobada; flores amarillas medianas",
      keyStep: "D",
      especieId: "ranunculus_muricatus",
    },
    opcionA_prima: {
      label: "Carpelos lisos",
      keyStep: "D'",
      nextNodeId: "ranunculus_e",
    },
  },
  ranunculus_e: {
    id: "ranunculus_e",
    milestone: "Ranunculus",
    manualPage: 213,
    descripcion: "Ranunculus - E: tamaño y disposición de las flores",
    opcionA: {
      label: "Flores grandes, amarillas, solitarias o agrupadas en corto número; hierba perenne; tallos ascendentes de 20-40 cm; hojas pinaticompuestas con segmentos trilobados",
      keyStep: "E",
      especieId: "ranunculus_repens",
    },
    opcionA_prima: {
      label: "Flores pequeñas, blancas o verdosas, dispuestas en cimas terminales; anual, erecto, de 30-60 cm; hojas largamente pecioladas con lámina orbicular 3-5-partida",
      keyStep: "E'",
      especieId: "ranunculus_apiifolius",
    },
  },
  papaveraceae_a: {
    id: "papaveraceae_a",
    milestone: "Papaveraceae",
    manualPage: 218,
    descripcion: "Papaveraceae - A: simetría floral, espolón y estambres",
    opcionA: {
      label: "Flores actinomorfas, sin espolón; estambres numerosos",
      keyStep: "A",
      nextNodeId: "papaveraceae_b",
    },
    opcionA_prima: {
      label: "Flores cigomorfas, espolonadas; estambres 6",
      keyStep: "A'",
      nextNodeId: "fumaria_a",
    },
  },
  papaveraceae_b: {
    id: "papaveraceae_b",
    milestone: "Papaveraceae",
    manualPage: 218,
    descripcion: "Papaveraceae - B: hojas espinosas",
    opcionA: {
      label: "Hojas espinosas",
      keyStep: "B",
      especieId: "argemone_mexicana",
    },
    opcionA_prima: {
      label: "Hojas no espinosas",
      keyStep: "B'",
      especieId: "papaver_dubium",
    },
  },
  fumaria_a: {
    id: "fumaria_a",
    milestone: "Fumaria",
    manualPage: 219,
    descripcion: "Fumaria - A: forma de los segmentos foliares y tamaño de flores",
    opcionA: {
      label: "Segmentos de las hojas ovados, casi tan anchos como largos; flores grandes, de 7-15 mm",
      keyStep: "A",
      nextNodeId: "fumaria_b",
    },
    opcionA_prima: {
      label: "Segmentos de las hojas lineal-lanceolados; flores purpúreas de 4-6 mm; anual, glabra; tallos difusos, ascendentes; fruto deprimido-globoso de 2 mm",
      keyStep: "A'",
      especieId: "fumaria_officinalis",
    },
  },
  fumaria_b: {
    id: "fumaria_b",
    milestone: "Fumaria",
    manualPage: 219,
    descripcion: "Fumaria - B: posición de los pedicelos fructíferos",
    opcionA: {
      label: "Pedicelos fructíferos recurvados; aquenios globosos, lisos, con punta obtusa; anual, voluble, glabra; hojas con pecíolo enroscante; flores rosadas",
      keyStep: "B",
      especieId: "fumaria_capreolata",
    },
    opcionA_prima: {
      label: "Pedicelos fructíferos erectos; aquenios rugoso-papilosos; anual, voluble; flores rosadas",
      keyStep: "B'",
      especieId: "fumaria_agraria",
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
      nextNodeId: "papaveraceae_a",
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
      especieId: "reseda_luteola",
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
      nextNodeId: "leguminosae_a",
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
      nextNodeId: "violaceae_a",
    },
    opcionA_prima: {
      label: "Estambres 6; estípulas espiniformes",
      keyStep: "K'",
      nextNodeId: "capparidaceae_a",
    },
  },
  capparidaceae_a: {
    id: "capparidaceae_a",
    milestone: "Capparidaceae",
    manualPage: 221,
    descripcion: "Cleome - A: pubescencia de la cápsula y largo del carpóforo",
    opcionA: {
      label: "Cápsula lineal, de 6-7 cm, híspido-velluda; carpóforo de 4-6 cm; hierba perenne, erecta, híspido-glandulosa, con aguijones rectos; folíolos 5, ovado-lanceolados, enteros; pétalos rosados de 2-3 cm",
      keyStep: "A",
      especieId: "cleome_trachycarpa",
    },
    opcionA_prima: {
      label: "Cápsula lineal, glabra",
      keyStep: "A'",
      nextNodeId: "capparidaceae_b",
    },
  },
  capparidaceae_b: {
    id: "capparidaceae_b",
    milestone: "Cleome",
    manualPage: 221,
    descripcion: "Cleome - B: largo del carpóforo",
    opcionA: {
      label: "Carpóforo de 5-15 mm; hierba perenne, híspido-glandulosa, de 30-50 cm; tallos y pecíolos con aguijones; folíolos 3-5, ovados, sinuados; pétalos rosados de 1 cm; cápsulas de 3-4 cm",
      keyStep: "B",
      especieId: "cleome_titubans",
    },
    opcionA_prima: {
      label: "Carpóforo de 50-70 mm; hierba anual, erecta, de 40-100 cm, híspido-glandulosa; folíolos 5-7 oblanceolados; hojas superiores simples; flores purpúreas o blancas; cápsulas de 6-8 cm",
      keyStep: "B'",
      especieId: "cleome_spinosa",
    },
  },
  violaceae_a: {
    id: "violaceae_a",
    milestone: "Violaceae",
    manualPage: 317,
    descripcion: "Violaceae - A: semillas aladas",
    opcionA: {
      label: "Semillas aladas; plantas leñosas volubles; cápsulas grandes, membranosas",
      keyStep: "A",
      especieId: "anchietea_parvifolia",
    },
    opcionA_prima: {
      label: "Semillas no aladas; plantas herbáceas o sufrutescentes, rastreras o erguidas; cápsulas pequeñas",
      keyStep: "A'",
      nextNodeId: "violaceae_b",
    },
  },
  violaceae_b: {
    id: "violaceae_b",
    milestone: "Violaceae",
    manualPage: 317,
    descripcion: "Violaceae - B: apéndice basal de los sépalos",
    opcionA: {
      label: "Sépalos más o menos prolongados en su base en un apéndice herbáceo; flores solitarias sobre largos pedúnculos axilares",
      keyStep: "B",
      nextNodeId: "viola_a",
    },
    opcionA_prima: {
      label: "Sépalos no prolongados en su base; flores en las axilas de las hojas superiores, formando racimos hojosos",
      keyStep: "B'",
      especieId: "hybanthus_parviflorus",
    },
  },
  viola_a: {
    id: "viola_a",
    milestone: "Viola",
    manualPage: 317,
    descripcion: "Viola - A: forma de las estípulas",
    opcionA: {
      label: "Estípulas foliáceas, lirado-pinatífidas; hierba anual o bienal; corola blanca y amarilla",
      keyStep: "A",
      especieId: "viola_tricolor",
    },
    opcionA_prima: {
      label: "Estípulas lineal-lanceoladas, reducidas; plantas perennes, acaules o subacaules, a veces estoloníferas",
      keyStep: "A'",
      nextNodeId: "viola_b",
    },
  },
  viola_b: {
    id: "viola_b",
    milestone: "Viola",
    manualPage: 318,
    descripcion: "Viola - B: forma relativa de las hojas",
    opcionA: {
      label: "Hojas acorazonado-reniformes, más anchas que largas, menudamente crenadas; pétalos violáceos o blancos",
      keyStep: "B",
      especieId: "viola_odorata",
    },
    opcionA_prima: {
      label: "Hojas acorazonado-ovadas, más largas que anchas; sépalos lanceolados, agudos; pétalos violáceos",
      keyStep: "B'",
      especieId: "viola_japonica",
    },
  },
  dicot_group_c_l: {
    id: "dicot_group_c_l",
    milestone: "Grupo C",
    descripcion: "Grupo C - L: con estambres 8 sin estípulas, ¿estambres monadelfos o libres?",
    opcionA: {
      label: "Estambres monadelfos; fruto bilocular; cáliz no espolonado; hierbas",
      keyStep: "L",
      nextNodeId: "polygalaceae_a",
    },
    opcionA_prima: {
      label: "Estambres libres; fruto trilocular; cáliz espolonado; enredaderas",
      keyStep: "L'",
      especieId: "tropaeolum_pentaphyllum",
    },
  },
  dicot_group_c_m: {
    id: "dicot_group_c_m",
    milestone: "Grupo C",
    descripcion: "Grupo C - M: en flores actinomorfas, ¿los estambres son numerosos y monadelfos formando un tubo?",
    opcionA: {
      label: "Sí; tubo estaminal atravesado por el estilo",
      keyStep: "M",
      nextNodeId: "malvaceae_a",
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
      nextNodeId: "rutaceae_a",
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
      nextNodeId: "leguminosae_a",
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
      nextNodeId: "sapindaceae_a",
    },
    opcionA_prima: {
      label: "Folíolos pequeños, oblongos, enteros",
      keyStep: "R'",
      especieId: "porlieria_microphylla",
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
      especieId: "buettneria_urticifolia",
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
      nextNodeId: "euphorbiaceae_a",
    },
    opcionA_prima: {
      label: "Plantas dioicas; flores tetrámeras; ovario bilocular",
      keyStep: "V'",
      nextNodeId: "celastraceae_a",
    },
  },
  dicot_group_c_w: {
    id: "dicot_group_c_w",
    milestone: "Grupo C",
    descripcion: "Grupo C - W: con flores hermafroditas, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres muy numerosos",
      keyStep: "W",
      especieId: "luehea_divaricata",
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
      nextNodeId: "rhamnaceae_a",
    },
    opcionA_prima: {
      label: "Plantas no espinosas; receptáculo casi plano; frutos trialados",
      keyStep: "X'",
      nextNodeId: "sapindaceae_a",
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
      nextNodeId: "celastraceae_a",
    },
    opcionA_prima: {
      label: "Estambres 6",
      keyStep: "Y'",
      nextNodeId: "berberidaceae_terminal",
    },
  },
  berberidaceae_terminal: {
    id: "berberidaceae_terminal",
    milestone: "Berberidaceae",
    manualPage: 215,
    descripcion: "Berberidaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Berberis ruscifolia",
      keyStep: "1",
      especieId: "berberis_ruscifolia",
    },
    opcionA_prima: {
      label: "Identificar como Berberis ruscifolia",
      keyStep: "1",
      especieId: "berberis_ruscifolia",
    },
    especie: manualFamilyData.berberis_ruscifolia,
  },
  dicot_group_c_z: {
    id: "dicot_group_c_z",
    milestone: "Grupo C",
    descripcion: "Grupo C - Z: con estambres 9-10, ¿perigonio coralino o cáliz y corola?",
    opcionA: {
      label: "Flores con perigonio coralino; estambres 9; anteras de dehiscencia valvar",
      keyStep: "Z",
      nextNodeId: "lauraceae_a",
    },
    opcionA_prima: {
      label: "Flores con cáliz y corola; estambres 10; anteras de dehiscencia longitudinal",
      keyStep: "Z'",
      especieId: "schinus_longifolius",
    },
  },
  lauraceae_a: {
    id: "lauraceae_a",
    milestone: "Lauraceae",
    manualPage: 216,
    descripcion: "Lauraceae - A: disposición de las valvas de dehiscencia de las anteras",
    opcionA: {
      label: "Anteras con valvas de dehiscencia dispuestas en dos pares superpuestos",
      keyStep: "A",
      especieId: "ocotea_acutifolia",
    },
    opcionA_prima: {
      label: "Anteras con las 4 valvas al mismo nivel",
      keyStep: "A'",
      especieId: "nectandra_falcifolia",
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
      nextNodeId: "polygonaceae_a",
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
      nextNodeId: "phytolaccaceae_a",
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
      nextNodeId: "aizoaceae_a",
    },
    opcionA_prima: {
      label: "Flores pequeñas en inflorescencias densas; plantas no carnosas",
      keyStep: "d'",
      nextNodeId: "amaranthaceae_a",
    },
  },
  amaranthaceae_a: {
    id: "amaranthaceae_a",
    milestone: "Amaranthaceae",
    manualPage: 187,
    descripcion: "Amaranthaceae - A: tecas de las anteras y hojas",
    opcionA: {
      label: "Anteras con 2 tecas; hojas alternas",
      keyStep: "A",
      nextNodeId: "amaranthus_a",
    },
    opcionA_prima: {
      label: "Anteras con una teca; hojas opuestas",
      keyStep: "A'",
      nextNodeId: "amaranthaceae_b",
    },
  },
  amaranthaceae_b: {
    id: "amaranthaceae_b",
    milestone: "Amaranthaceae",
    manualPage: 190,
    descripcion: "Amaranthaceae - B: forma del estigma",
    opcionA: {
      label: "Estigma capitado o bilobado",
      keyStep: "B",
      nextNodeId: "amaranthaceae_c",
    },
    opcionA_prima: {
      label: "Estigma bífido",
      keyStep: "B'",
      nextNodeId: "amaranthaceae_d",
    },
  },
  amaranthaceae_c: {
    id: "amaranthaceae_c",
    milestone: "Amaranthaceae",
    manualPage: 190,
    descripcion: "Amaranthaceae - C: seudoestaminodios y filamentos",
    opcionA: {
      label: "Sin seudoestaminodios; filamentos dilatados y trilobados en el ápice; estigma capitado o semilobado",
      keyStep: "C",
      nextNodeId: "pfaffia_a",
    },
    opcionA_prima: {
      label: "Con seudoestaminodios entre los estambres",
      keyStep: "C'",
      nextNodeId: "alternanthera_a",
    },
  },
  pfaffia_a: {
    id: "pfaffia_a",
    milestone: "Pfaffia",
    manualPage: 190,
    descripcion: "Pfaffia - A: disposición y tamaño de los capítulos",
    opcionA: {
      label: "Capítulos numerosos, en cimas dicotómicas, de menos de 8 mm de diámetro; hierbas perennes con tallos erectos o apoyantes; hojas lanceoladas, pubescentes; flores de 2-3 mm",
      keyStep: "A",
      especieId: "pfaffia_stenophylla",
    },
    opcionA_prima: {
      label: "Capítulos solitarios de 10-15 mm de diámetro; hemicriptófita con raíz gruesa; tallos tomentosos ascendentes o erectos; hojas ovadas, densamente albo-tomentosas; flores de 4-6 mm",
      keyStep: "A'",
      especieId: "pfaffia_lanata",
    },
  },
  alternanthera_a: {
    id: "alternanthera_a",
    milestone: "Alternanthera",
    manualPage: 190,
    descripcion: "Alternanthera - A: posición de las inflorescencias",
    opcionA: {
      label: "Inflorescencias pedunculadas; seudoestaminodios alargados, iguales o mayores que los filamentos; hierba palustre, perenne, decumbente o ascendente; hojas glabras, oblanceoladas, enteras; flores pentámeras",
      keyStep: "A",
      especieId: "alternanthera_philoxeroides",
    },
    opcionA_prima: {
      label: "Inflorescencias sentadas; seudoestaminodios más cortos que los filamentos",
      keyStep: "A'",
      nextNodeId: "alternanthera_b",
    },
  },
  alternanthera_b: {
    id: "alternanthera_b",
    milestone: "Alternanthera",
    manualPage: 192,
    descripcion: "Alternanthera - B: número de tépalos",
    opcionA: {
      label: "Flores con 5 tépalos",
      keyStep: "B",
      nextNodeId: "alternanthera_c",
    },
    opcionA_prima: {
      label: "Flores con 4 tépalos; hierba perenne con tallos rastreros radicantes, pubescentes; hojas elípticas u obovadas, velludas; espigas capituliformes axilares de 7 mm",
      keyStep: "B'",
      especieId: "alternanthera_reineckii",
    },
  },
  alternanthera_c: {
    id: "alternanthera_c",
    milestone: "Alternanthera",
    manualPage: 192,
    descripcion: "Alternanthera - C: brácteas",
    opcionA: {
      label: "Brácteas obtusas, no aristadas; hierba perenne con tallos tendidos radicantes, pubescentes en los nudos; hojas espatuladas; espigas cortas axilares de 5-15 mm",
      keyStep: "C",
      especieId: "alternanthera_paronychioides",
    },
    opcionA_prima: {
      label: "Brácteas agudas, aristadas o subaristadas",
      keyStep: "C'",
      nextNodeId: "alternanthera_d",
    },
  },
  alternanthera_d: {
    id: "alternanthera_d",
    milestone: "Alternanthera",
    manualPage: 192,
    descripcion: "Alternanthera - D: largo de los tépalos",
    opcionA: {
      label: "Tépalos de 6-7 mm; hierba perenne con tallos tendidos radicantes, pubescentes; hojas anchamente espatuladas u orbiculares, obtusas; espigas axilares cortas",
      keyStep: "D",
      especieId: "alternanthera_pungens",
    },
    opcionA_prima: {
      label: "Tépalos de 3-5 mm; hierba perenne con tallos tendidos radicantes, pubescentes; hojas espatuladas, obtusas; espigas axilares cortas",
      keyStep: "D'",
      especieId: "alternanthera_repens",
    },
  },
  amaranthaceae_d: {
    id: "amaranthaceae_d",
    milestone: "Amaranthaceae",
    manualPage: 187,
    descripcion: "Amaranthaceae - D: forma de los filamentos",
    opcionA: {
      label: "Filamentos de los estambres dilatados, con el ápice trilobado",
      keyStep: "D",
      nextNodeId: "gomphrena_a",
    },
    opcionA_prima: {
      label: "Filamentos simples",
      keyStep: "D'",
      nextNodeId: "amaranthaceae_e",
    },
  },
  amaranthaceae_e: {
    id: "amaranthaceae_e",
    milestone: "Amaranthaceae",
    manualPage: 187,
    descripcion: "Amaranthaceae - E: tipo de inflorescencia",
    opcionA: {
      label: "Inflorescencia en panojas; flores dioicas",
      keyStep: "E",
      especieId: "iresine_celosia",
    },
    opcionA_prima: {
      label: "Inflorescencias en espigas capituliformes",
      keyStep: "E'",
      especieId: "philoxerus_portulacoides_commersonii",
    },
  },
  gomphrena_a: {
    id: "gomphrena_a",
    milestone: "Gomphrena",
    manualPage: 192,
    descripcion: "Gomphrena - A: forma de hojas y tamaño de capítulos",
    opcionA: {
      label: "Hojas lanceoladas; capítulos de 2-3 cm de diámetro; flores de 9-12 mm; hierba perenne, ascendente o erecta",
      keyStep: "A",
      especieId: "gomphrena_pulchella",
    },
    opcionA_prima: {
      label: "Hojas ovadas u ovado-lanceoladas; capítulos de 1-2 cm de diámetro; flores de 5-7 mm",
      keyStep: "A'",
      nextNodeId: "gomphrena_b",
    },
  },
  gomphrena_b: {
    id: "gomphrena_b",
    milestone: "Gomphrena",
    manualPage: 192,
    descripcion: "Gomphrena - B: tamaño de capítulos y crestas en bracteolas",
    opcionA: {
      label: "Capítulos de 1 cm de diámetro; flores de 5 mm; bracteolas sin crestas; hierba perenne, velluda, apoyante; hojas ovado-lanceoladas, agudas",
      keyStep: "B",
      especieId: "gomphrena_elegans",
    },
    opcionA_prima: {
      label: "Capítulos de 1,5-2 cm de diámetro; flores de 6-7 mm; bracteolas con una cresta cerca del ápice; hierba perenne ascendente o erecta, pubescente; hojas elíptico-lanceoladas",
      keyStep: "B'",
      especieId: "gomphrena_perennis",
    },
  },
  amaranthus_a: {
    id: "amaranthus_a",
    milestone: "Amaranthus",
    manualPage: 188,
    descripcion: "Amaranthus - A: dehiscencia del fruto",
    opcionA: {
      label: "Fruto dehiscente transversalmente",
      keyStep: "A",
      nextNodeId: "amaranthus_b",
    },
    opcionA_prima: {
      label: "Fruto indehiscente",
      keyStep: "A'",
      nextNodeId: "amaranthus_c",
    },
  },
  amaranthus_b: {
    id: "amaranthus_b",
    milestone: "Amaranthus",
    manualPage: 188,
    descripcion: "Amaranthus - B: número de piezas florales en frutos dehiscentes",
    opcionA: {
      label: "Flores pentámeras; plantas anuales, erectas, rojizas, con hojas ovadas; inflorescencia en espigas o panojas terminales",
      keyStep: "B",
      especieId: "amaranthus_hybridus_quitensis",
    },
    opcionA_prima: {
      label: "Flores trímeras; plantas anuales, erectas, amarillentas; hojas ovado-oblongas, obtusas y mucronadas; glomérulos axilares",
      keyStep: "B'",
      especieId: "amaranthus_albus",
    },
  },
  amaranthus_c: {
    id: "amaranthus_c",
    milestone: "Amaranthus",
    manualPage: 188,
    descripcion: "Amaranthus - C: número de piezas florales en frutos indehiscentes",
    opcionA: {
      label: "Flores pentámeras",
      keyStep: "C",
      nextNodeId: "amaranthus_d",
    },
    opcionA_prima: {
      label: "Flores dímeras o tetrámeras",
      keyStep: "C'",
      nextNodeId: "amaranthus_f",
    },
  },
  amaranthus_d: {
    id: "amaranthus_d",
    milestone: "Amaranthus",
    manualPage: 188,
    descripcion: "Amaranthus - D: forma de hojas en flores pentámeras",
    opcionA: {
      label: "Hojas lineal-lanceoladas; hierba perenne, decumbente; flores en glomérulos axilares y espigas terminales; fruto semigloboso, rugoso",
      keyStep: "D",
      especieId: "amaranthus_muricatus",
    },
    opcionA_prima: {
      label: "Hojas ovadas u ovado-lanceoladas",
      keyStep: "D'",
      nextNodeId: "amaranthus_e",
    },
  },
  amaranthus_e: {
    id: "amaranthus_e",
    milestone: "Amaranthus",
    manualPage: 188,
    descripcion: "Amaranthus - E: borde de las hojas",
    opcionA: {
      label: "Borde de las hojas ondulado-crenado; hierba anual, tendida, velluda; flores en glomérulos axilares",
      keyStep: "E",
      especieId: "amaranthus_crispus",
    },
    opcionA_prima: {
      label: "Borde de las hojas plano, entero; hierba anual, erecta o tendida, glabra; flores en glomérulos axilares o espiga terminal corta",
      keyStep: "E'",
      especieId: "amaranthus_standleyanus",
    },
  },
  amaranthus_f: {
    id: "amaranthus_f",
    milestone: "Amaranthus",
    manualPage: 188,
    descripcion: "Amaranthus - F: forma de hojas en flores dímeras o tetrámeras",
    opcionA: {
      label: "Hojas lineal-lanceoladas",
      keyStep: "F",
      especieId: "amaranthus_muricatus",
    },
    opcionA_prima: {
      label: "Hojas obovadas, ovadas u ovado-lanceoladas",
      keyStep: "F'",
      nextNodeId: "amaranthus_g",
    },
  },
  amaranthus_g: {
    id: "amaranthus_g",
    milestone: "Amaranthus",
    manualPage: 188,
    descripcion: "Amaranthus - G: forma y textura del fruto",
    opcionA: {
      label: "Fruto piriforme, liso, casi dos veces tan largo como el perigonio; tallos pilosos tendidos o ascendentes; hojas ovadas velludas en la cara inferior",
      keyStep: "G",
      especieId: "amaranthus_deflexus",
    },
    opcionA_prima: {
      label: "Fruto subgloboso, apenas mayor que el perigonio, rugoso",
      keyStep: "G'",
      nextNodeId: "amaranthus_h",
    },
  },
  amaranthus_h: {
    id: "amaranthus_h",
    milestone: "Amaranthus",
    manualPage: 188,
    descripcion: "Amaranthus - H: ápice de las hojas",
    opcionA: {
      label: "Hojas con el ápice entero; hierba anual, erecta, glabra; flores en panojas o espigas terminales y glomérulos axilares",
      keyStep: "H",
      especieId: "amaranthus_gracilis",
    },
    opcionA_prima: {
      label: "Hojas con el ápice bilobado; hierba anual, tendida o ascendente; flores en espiga corta terminal y glomérulos axilares",
      keyStep: "H'",
      especieId: "amaranthus_lividus_ascendens",
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
      nextNodeId: "malpighiaceae_a",
    },
    opcionA_prima: {
      label: "Hojas alternas",
      keyStep: "g'",
      nextNodeId: "basellaceae_terminal",
    },
  },
  basellaceae_terminal: {
    id: "basellaceae_terminal",
    milestone: "Basellaceae",
    manualPage: 201,
    descripcion: "Basellaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Boussingaultia gracilis f. pseudobaselloides",
      keyStep: "1",
      especieId: "boussingaultia_gracilis_pseudobaselloides",
    },
    opcionA_prima: {
      label: "Identificar como Boussingaultia gracilis f. pseudobaselloides",
      keyStep: "1",
      especieId: "boussingaultia_gracilis_pseudobaselloides",
    },
    especie: manualFamilyData.boussingaultia_gracilis_pseudobaselloides,
  },
  dicot_group_c_h_lower: {
    id: "dicot_group_c_h_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - h: con hojas partidas/compuestas, ¿flores grandes con corona filamentosa?",
    opcionA: {
      label: "Flores grandes, llamativas, con corona filamentosa",
      keyStep: "h",
      nextNodeId: "passifloraceae_a",
    },
    opcionA_prima: {
      label: "Flores pequeñas, sin apéndices filamentosos en la base de pétalos",
      keyStep: "h'",
      nextNodeId: "dicot_group_c_i_lower",
    },
  },
  passifloraceae_a: {
    id: "passifloraceae_a",
    milestone: "Passifloraceae",
    manualPage: 321,
    descripcion: "Passiflora - A: forma de las hojas",
    opcionA: {
      label: "Hojas palmadas, 5-lobadas, con lóbulos elíptico-lanceolados, enteros, obtusos, mucronados; pecíolo con 2-4 glándulas pediceladas; estípulas reniformes; flores de 7-10 cm de diámetro; frutos ovoideos anaranjados",
      keyStep: "A",
      especieId: "passiflora_caerulea",
    },
    opcionA_prima: {
      label: "Hojas bilobadas, con lóbulos muy divergentes, recordando una mariposa; nervadura central terminada en un mucroncito; estípulas lineales; flores de 2,5-4 cm de diámetro; frutos globosos",
      keyStep: "A'",
      especieId: "passiflora_misera",
    },
  },
  dicot_group_c_i_lower: {
    id: "dicot_group_c_i_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - i: en flores pequeñas, ¿estambres 8 o 4-5?",
    opcionA: {
      label: "Estambres 8; gineceo tricarpelar trilocular; hojas trifolioladas o bipinaticompuestas",
      keyStep: "i",
      nextNodeId: "sapindaceae_a",
    },
    opcionA_prima: {
      label: "Estambres 4-5; gineceo bicarpelar; hojas palmaticompuestas",
      keyStep: "i'",
      nextNodeId: "vitaceae_a",
    },
  },
  dicot_group_c_j_lower: {
    id: "dicot_group_c_j_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - j: en plantas no volubles, ¿estambres tetradínamos y fruto silicua/silícula?",
    opcionA: {
      label: "Sí; pétalos 4; fruto silicua o silícula",
      keyStep: "j",
      nextNodeId: "cruciferae_a",
    },
    opcionA_prima: {
      label: "No; estambres no tetradínamos y fruto no silicua",
      keyStep: "j'",
      nextNodeId: "dicot_group_c_k_lower",
    },
  },
  cruciferae_a: {
    id: "cruciferae_a",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - A: forma relativa del fruto",
    opcionA: {
      label: "Fruto orbicular, aovado, elíptico o triangular, tan largo como ancho o poco más largo que ancho (silícula)",
      keyStep: "A",
      nextNodeId: "cruciferae_b",
    },
    opcionA_prima: {
      label: "Fruto largamente elíptico o lineal, varias veces más largo que ancho (silicua)",
      keyStep: "A'",
      nextNodeId: "cruciferae_h",
    },
  },
  cruciferae_b: {
    id: "cruciferae_b",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - B: forma triangular del fruto",
    opcionA: {
      label: "Fruto más o menos triangular; flores blancas o rosadas",
      keyStep: "B",
      nextNodeId: "capsella_a",
    },
    opcionA_prima: {
      label: "Fruto globoso, lenticular u ovoideo",
      keyStep: "B'",
      nextNodeId: "cruciferae_c",
    },
  },
  capsella_a: {
    id: "capsella_a",
    milestone: "Capsella",
    manualPage: 223,
    descripcion: "Capsella - A: fertilidad y forma del fruto",
    opcionA: {
      label: "Frutos triangulares, fértiles",
      keyStep: "A",
      nextNodeId: "capsella_b",
    },
    opcionA_prima: {
      label: "Frutos acorazonados, pequeños, estériles",
      keyStep: "A'",
      especieId: "capsella_gracilis",
    },
  },
  capsella_b: {
    id: "capsella_b",
    milestone: "Capsella",
    manualPage: 223,
    descripcion: "Capsella - B: borde de la silícula y largo de pétalos",
    opcionA: {
      label: "Bordes de la silícula ligeramente convexos o rectos; pétalos al menos media vez más largos que los sépalos; hojas dentadas o lobadas; flores blancas",
      keyStep: "B",
      especieId: "capsella_bursa_pastoris",
    },
    opcionA_prima: {
      label: "Bordes de la silícula marcadamente cóncavos; pétalos apenas más largos que los sépalos; flores rosadas",
      keyStep: "B'",
      especieId: "capsella_rubella",
    },
  },
  cruciferae_c: {
    id: "cruciferae_c",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - C: color de las flores en silículas no triangulares",
    opcionA: {
      label: "Flores amarillas",
      keyStep: "C",
      nextNodeId: "cruciferae_d",
    },
    opcionA_prima: {
      label: "Flores blancas",
      keyStep: "C'",
      nextNodeId: "cruciferae_f",
    },
  },
  cruciferae_d: {
    id: "cruciferae_d",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - D: dehiscencia del fruto en flores amarillas",
    opcionA: {
      label: "Frutos indehiscentes, globosos, con 1-2 semillas",
      keyStep: "D",
      nextNodeId: "cruciferae_e",
    },
    opcionA_prima: {
      label: "Frutos obovoideos, polispermos, dehiscentes",
      keyStep: "D'",
      nextNodeId: "camelina_a",
    },
  },
  cruciferae_e: {
    id: "cruciferae_e",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - E: base de hojas caulinares y estructura del fruto",
    opcionA: {
      label: "Hojas no sagitadas en la base; frutos formados por dos artículos superpuestos, el superior mayor, globoso y fértil, el inferior menor y estéril",
      keyStep: "E",
      especieId: "rapistrum_rugosum",
    },
    opcionA_prima: {
      label: "Hojas caulinares sagitadas en la base; frutos globosos",
      keyStep: "E'",
      especieId: "neslia_paniculata",
    },
  },
  camelina_a: {
    id: "camelina_a",
    milestone: "Camelina",
    manualPage: 225,
    descripcion: "Camelina - A: forma de semillas y cotiledones",
    opcionA: {
      label: "Semillas obovadas con cotiledones incumbentes; frutos obovoideos",
      keyStep: "A",
      especieId: "camelina_sativa",
    },
    opcionA_prima: {
      label: "Semillas achatadas, redondeadas, con cotiledones acumbentes; frutos casi acorazonados",
      keyStep: "A'",
      especieId: "camelina_parodii",
    },
  },
  cruciferae_f: {
    id: "cruciferae_f",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - F: dehiscencia del fruto en flores blancas",
    opcionA: {
      label: "Fruto indehiscente, deshaciéndose en dos cocos monospermos",
      keyStep: "F",
      nextNodeId: "coronopus_a",
    },
    opcionA_prima: {
      label: "Fruto dehiscente",
      keyStep: "F'",
      nextNodeId: "cruciferae_g",
    },
  },
  coronopus_a: {
    id: "coronopus_a",
    milestone: "Coronopus",
    manualPage: 225,
    descripcion: "Coronopus - A: ciclo de vida, hojas y tamaño del fruto",
    opcionA: {
      label: "Hierba anual, rastrera; hojas bipinatisectas; frutos rugosos de 1-1,5 mm por 2 mm",
      keyStep: "A",
      especieId: "coronopus_didymus",
    },
    opcionA_prima: {
      label: "Hierba perenne, con raíz gruesa y profunda; tallos rastreros; hojas lineales, enteras o pinatisectas; flores con 2 estambres; frutos muy rugosos de 3 mm por 4 mm",
      keyStep: "A'",
      especieId: "coronopus_rhytidocarpus",
    },
  },
  cruciferae_g: {
    id: "cruciferae_g",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - G: tipo de pubescencia",
    opcionA: {
      label: "Plantas con pelos en T",
      keyStep: "G",
      especieId: "lobularia_maritima",
    },
    opcionA_prima: {
      label: "Plantas glabras o con pelos simples",
      keyStep: "G'",
      nextNodeId: "lepidium_a",
    },
  },
  lepidium_a: {
    id: "lepidium_a",
    milestone: "Lepidium",
    manualPage: 226,
    descripcion: "Lepidium - A: forma de hojas y estilo",
    opcionA: {
      label: "Hojas oblongas u oblongo-lanceoladas, anchas, obtusas; inferiores pecioladas, superiores sésiles, semiabrazadoras y auriculadas; hierba perenne con raíces gemíferas; silículas obcordadas; estilo persistente, largo y delgado",
      keyStep: "A",
      especieId: "lepidium_draba",
    },
    opcionA_prima: {
      label: "Hojas caulinares lineales o pinatisectas; estilo muy corto",
      keyStep: "A'",
      nextNodeId: "lepidium_b",
    },
  },
  lepidium_b: {
    id: "lepidium_b",
    milestone: "Lepidium",
    manualPage: 226,
    descripcion: "Lepidium - B: hojas superiores",
    opcionA: {
      label: "Hojas superiores enteras",
      keyStep: "B",
      nextNodeId: "lepidium_c",
    },
    opcionA_prima: {
      label: "Hojas superiores dentadas o pinatisectas",
      keyStep: "B'",
      nextNodeId: "lepidium_d",
    },
  },
  lepidium_c: {
    id: "lepidium_c",
    milestone: "Lepidium",
    manualPage: 226,
    descripcion: "Lepidium - C: tamaño y forma de las silículas con hojas superiores enteras",
    opcionA: {
      label: "Silículas de 2,5-3 mm, elípticas u ovadas, glabras; estilo nulo; hierba anual, erecta, ramosa, puberulenta; hojas basales laciniado-pinatífidas o enteras; pétalos blancos; estambres 2",
      keyStep: "C",
      especieId: "lepidium_spicatum",
    },
    opcionA_prima: {
      label: "Silículas de 4-4,5 mm, anchamente elípticas, glabras o algo ciliadas, escotadas; estilo nulo; hierba perenne, erecta, glabra o puberulenta; hojas inferiores por lo común pinatisectas; pétalos blancos; estambres 2",
      keyStep: "C'",
      especieId: "lepidium_parodii",
    },
  },
  lepidium_d: {
    id: "lepidium_d",
    milestone: "Lepidium",
    manualPage: 226,
    descripcion: "Lepidium - D: ancho de segmentos de hojas superiores",
    opcionA: {
      label: "Segmentos de las hojas superiores de 0,5 mm de ancho; hojas superiores algo dilatadas en la base y semi-auriculadas; hierba anual con pubescencia retrorsa; silículas de 2,5-3 mm, anchamente elípticas, escotadas",
      keyStep: "D",
      especieId: "lepidium_aletes",
    },
    opcionA_prima: {
      label: "Hojas superiores no dilatadas en la base, con segmentos de 1-2 mm; hierba anual o bienal con pubescencia retrorsa; estambres 2; silículas anchamente elípticas de 3-3,5 mm, escotadas",
      keyStep: "D'",
      especieId: "lepidium_bonariense",
    },
  },
  cruciferae_h: {
    id: "cruciferae_h",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - H: tipo de pubescencia en silicuas largas",
    opcionA: {
      label: "Plantas con pelos estrellados, ramificados o en T, a veces acompañados por pelos simples o glandulosos",
      keyStep: "H",
      nextNodeId: "cruciferae_i",
    },
    opcionA_prima: {
      label: "Plantas glabras o con pelos simples",
      keyStep: "H'",
      nextNodeId: "cruciferae_m",
    },
  },
  cruciferae_i: {
    id: "cruciferae_i",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - I: largo y grosor de la silicua",
    opcionA: {
      label: "Silicua corta y gruesa; plantas pigmeas",
      keyStep: "I",
      especieId: "draba_australis",
    },
    opcionA_prima: {
      label: "Silicuas muy largas; plantas robustas",
      keyStep: "I'",
      nextNodeId: "cruciferae_j",
    },
  },
  cruciferae_j: {
    id: "cruciferae_j",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - J: tipo de pelos en plantas robustas",
    opcionA: {
      label: "Pelos en T, raramente más divididos",
      keyStep: "J",
      nextNodeId: "cruciferae_k",
    },
    opcionA_prima: {
      label: "Pelos estrellados o ramificados; los tegumentos de la semilla se gelifican en agua caliente",
      keyStep: "J'",
      nextNodeId: "cruciferae_l",
    },
  },
  cruciferae_k: {
    id: "cruciferae_k",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - K: color de flores en plantas con pelos en T",
    opcionA: {
      label: "Flores blancas, rosadas o violáceas",
      keyStep: "K",
      especieId: "malcomia_maritima",
    },
    opcionA_prima: {
      label: "Flores amarillas",
      keyStep: "K'",
      especieId: "erysimum_repandum",
    },
  },
  cruciferae_l: {
    id: "cruciferae_l",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - L: pelos glandulosos y forma de hojas",
    opcionA: {
      label: "Pelos estrellados mezclados con pelos glandulosos; hojas bipinatisectas",
      keyStep: "L",
      nextNodeId: "descurainia_a",
    },
    opcionA_prima: {
      label: "Pelos ramificados únicamente; hojas dentadas o incisas",
      keyStep: "L'",
      especieId: "halimolobos_montanus",
    },
  },
  descurainia_a: {
    id: "descurainia_a",
    milestone: "Descurainia",
    manualPage: 228,
    descripcion: "Descurainia - A: forma de los segmentos foliares",
    opcionA: {
      label: "Segmentos de las hojas cortos, obovados, obtusos; hierba anual, erecta; silicuas de 10-12 mm",
      keyStep: "A",
      especieId: "descurainia_argentina",
    },
    opcionA_prima: {
      label: "Segmentos de las hojas alargados, lanceolados, agudos; hierba anual de 40-80 cm; silicuas de 12-18 mm",
      keyStep: "A'",
      especieId: "descurainia_appendiculata",
    },
  },
  cruciferae_m: {
    id: "cruciferae_m",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - M: fruto dividido transversalmente",
    opcionA: {
      label: "Fruto dividido transversalmente en dos porciones indehiscentes uniseminadas, la superior caduca y la inferior persistente",
      keyStep: "M",
      especieId: "cakile_maritima",
    },
    opcionA_prima: {
      label: "Fruto no dividido transversalmente en dos porciones",
      keyStep: "M'",
      nextNodeId: "cruciferae_n",
    },
  },
  cruciferae_n: {
    id: "cruciferae_n",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - N: dehiscencia del fruto",
    opcionA: {
      label: "Fruto carnoso, indehiscente",
      keyStep: "N",
      nextNodeId: "raphanus_a",
    },
    opcionA_prima: {
      label: "Fruto dehiscente",
      keyStep: "N'",
      nextNodeId: "cruciferae_o",
    },
  },
  raphanus_a: {
    id: "raphanus_a",
    milestone: "Raphanus",
    manualPage: 229,
    descripcion: "Raphanus - A: color de flores y forma del fruto",
    opcionA: {
      label: "Flores blancas o rosadas; frutos gruesos, carnosos, apenas contraídos; raíces carnosas",
      keyStep: "A",
      especieId: "raphanus_sativus",
    },
    opcionA_prima: {
      label: "Flores amarillentas; frutos más delgados, con 6-10 semillas, contraídos entre las semillas; raíces alargadas",
      keyStep: "A'",
      especieId: "raphanus_raphanistrum",
    },
  },
  cruciferae_o: {
    id: "cruciferae_o",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - O: disposición de las semillas",
    opcionA: {
      label: "Semillas dispuestas en dos hileras",
      keyStep: "O",
      nextNodeId: "cruciferae_p",
    },
    opcionA_prima: {
      label: "Semillas dispuestas en una sola hilera",
      keyStep: "O'",
      nextNodeId: "cruciferae_r",
    },
  },
  cruciferae_p: {
    id: "cruciferae_p",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - P: grosor y forma de la silicua",
    opcionA: {
      label: "Silicuas gruesas, oblongas o elipsoideas",
      keyStep: "P",
      especieId: "eruca_sativa",
    },
    opcionA_prima: {
      label: "Silicuas delgadas, lineales",
      keyStep: "P'",
      nextNodeId: "cruciferae_q",
    },
  },
  cruciferae_q: {
    id: "cruciferae_q",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - Q: disposición de hojas y color de flores",
    opcionA: {
      label: "Plantas con hojas arrosetadas y tallos desnudos en sus dos tercios superiores; flores amarillas",
      keyStep: "Q",
      especieId: "diplotaxis_muralis",
    },
    opcionA_prima: {
      label: "Plantas con hojas sobre todo el tallo; flores generalmente blancas",
      keyStep: "Q'",
      nextNodeId: "roripa_a",
    },
  },
  roripa_a: {
    id: "roripa_a",
    milestone: "Roripa",
    manualPage: 230,
    descripcion: "Roripa - A: presencia de pétalos",
    opcionA: {
      label: "Flores con pétalos",
      keyStep: "A",
      nextNodeId: "roripa_b",
    },
    opcionA_prima: {
      label: "Flores apétalas; hierba perenne de 5-10 cm; hojas ovadas u ovado-lanceoladas, en parte pinatífidas; silicuas de 15-25 mm",
      keyStep: "A'",
      especieId: "roripa_sinapis",
    },
  },
  roripa_b: {
    id: "roripa_b",
    milestone: "Roripa",
    manualPage: 230,
    descripcion: "Roripa - B: forma de las hojas",
    opcionA: {
      label: "Hojas radicales enteras, oblanceoladas, obtusas, atenuadas en largo pecíolo; hojas medianas ovaladas con uno o dos lóbulos basales; hojas superiores enteras y lineales",
      keyStep: "B",
      especieId: "roripa_pamparum",
    },
    opcionA_prima: {
      label: "Todas las hojas pinatisectas",
      keyStep: "B'",
      nextNodeId: "roripa_c",
    },
  },
  roripa_c: {
    id: "roripa_c",
    milestone: "Roripa",
    manualPage: 230,
    descripcion: "Roripa - C: forma de los lóbulos foliares",
    opcionA: {
      label: "Hojas profundamente pinatisectas, con lóbulos lineales o lanceolados, enteros o con algún diente, dispuestos en 4-6 pares",
      keyStep: "C",
      especieId: "roripa_bonariensis",
    },
    opcionA_prima: {
      label: "Hojas con lóbulos laterales lanceolados u ovalados y lóbulo terminal anchamente ovado o circular",
      keyStep: "C'",
      nextNodeId: "roripa_d",
    },
  },
  roripa_d: {
    id: "roripa_d",
    milestone: "Roripa",
    manualPage: 230,
    descripcion: "Roripa - D: porte y lóbulos de las hojas",
    opcionA: {
      label: "Hierba perenne, rastrera o flotante, glabra; hojas con lóbulo terminal circular, sinuado, y 1-3 pares de lóbulos laterales anchamente lanceolados u ovados",
      keyStep: "D",
      especieId: "roripa_nasturtium_aquaticum",
    },
    opcionA_prima: {
      label: "Hierba perenne, con raíces gemíferas y tallos ascendentes o erectos; segmento terminal anchamente ovado, a veces acorazonado, y 1-2 pares de segmentos laterales ovados",
      keyStep: "D'",
      especieId: "roripa_hilariana",
    },
  },
  cruciferae_r: {
    id: "cruciferae_r",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - R: color de flores y nervaduras de la silicua",
    opcionA: {
      label: "Flores blancas; valvas de la silicua sin nervaduras",
      keyStep: "R",
      nextNodeId: "cardamine_a",
    },
    opcionA_prima: {
      label: "Flores amarillas; valvas de la silicua con 1-3 nervaduras",
      keyStep: "R'",
      nextNodeId: "cruciferae_s",
    },
  },
  cardamine_a: {
    id: "cardamine_a",
    milestone: "Cardamine",
    manualPage: 232,
    descripcion: "Cardamine - A: hojas simples o pinatisectas",
    opcionA: {
      label: "Hojas simples; radicales largamente pecioladas, espatuladas, enteras o sinuadas; hojas caulinares obovadas y dentadas; flores de dos tipos",
      keyStep: "A",
      especieId: "cardamine_chenopodiifolia",
    },
    opcionA_prima: {
      label: "Hojas pinatisectas, con segmentos ovados u orbiculares; flores de un solo tipo, todas aéreas",
      keyStep: "A'",
      nextNodeId: "cardamine_b",
    },
  },
  cardamine_b: {
    id: "cardamine_b",
    milestone: "Cardamine",
    manualPage: 232,
    descripcion: "Cardamine - B: ciclo de vida y porte",
    opcionA: {
      label: "Hierbas anuales, erectas, ligeramente pubescentes; hojas basales en roseta; silicuas lineales de 20-25 mm",
      keyStep: "B",
      especieId: "cardamine_hirsuta",
    },
    opcionA_prima: {
      label: "Plantas perennes, erectas o tendidas",
      keyStep: "B'",
      nextNodeId: "cardamine_c",
    },
  },
  cardamine_c: {
    id: "cardamine_c",
    milestone: "Cardamine",
    manualPage: 232,
    descripcion: "Cardamine - C: plantas rastreras o ascendentes",
    opcionA: {
      label: "Plantas rastreras, radicantes en los nudos; hojas con segmento terminal circular acorazonado y 1-2 pares de segmentos laterales anchamente ovados",
      keyStep: "C",
      especieId: "cardamine_bonariensis",
    },
    opcionA_prima: {
      label: "Plantas ascendentes en la base y luego erectas, rizomatosas; hojas con segmento terminal circular o arriñonado y 1-3 pares de segmentos laterales ovados peciolulados",
      keyStep: "C'",
      especieId: "cardamine_flaccida",
    },
  },
  cruciferae_s: {
    id: "cruciferae_s",
    milestone: "Cruciferae",
    manualPage: 222,
    descripcion: "Cruciferae - S: presencia de rostro largo",
    opcionA: {
      label: "Silicuas terminadas en un largo rostro indehiscente; nervaduras laterales de las valvas onduladas",
      keyStep: "S",
      nextNodeId: "cruciferae_t",
    },
    opcionA_prima: {
      label: "Silicuas sin rostro largo, dehiscentes casi hasta el ápice; nervaduras laterales de las valvas rectas",
      keyStep: "S'",
      nextNodeId: "sisymbrium_a",
    },
  },
  cruciferae_t: {
    id: "cruciferae_t",
    milestone: "Cruciferae",
    manualPage: 223,
    descripcion: "Cruciferae - T: semillas en el rostro",
    opcionA: {
      label: "Rostro generalmente con 1-2 semillas en su interior; valvas de la silicua con 3-5 nervios gruesos",
      keyStep: "T",
      nextNodeId: "cruciferae_u",
    },
    opcionA_prima: {
      label: "Rostro sin semillas; nervaduras laterales de las valvas muy poco marcadas",
      keyStep: "T'",
      nextNodeId: "brassica_a",
    },
  },
  cruciferae_u: {
    id: "cruciferae_u",
    milestone: "Cruciferae",
    manualPage: 223,
    descripcion: "Cruciferae - U: pubescencia de las hojas",
    opcionA: {
      label: "Hojas glabras o con pelos laxos",
      keyStep: "U",
      especieId: "sinapis_arvensis_schkuhriana",
    },
    opcionA_prima: {
      label: "Hojas densamente pubescentes en ambas caras",
      keyStep: "U'",
      especieId: "hirschfeldia_incana",
    },
  },
  brassica_a: {
    id: "brassica_a",
    milestone: "Brassica",
    manualPage: 233,
    descripcion: "Brassica - A: largo de las silicuas",
    opcionA: {
      label: "Silicuas de más de 3 cm de largo",
      keyStep: "A",
      nextNodeId: "brassica_b",
    },
    opcionA_prima: {
      label: "Silicuas de 1-2 cm; hojas inferiores lirado-pinatisectas; superiores oblongo-lineales, cortamente pecioladas; racimo casi corimbiforme",
      keyStep: "A'",
      especieId: "brassica_nigra",
    },
  },
  brassica_b: {
    id: "brassica_b",
    milestone: "Brassica",
    manualPage: 233,
    descripcion: "Brassica - B: hojas superiores",
    opcionA: {
      label: "Hojas superiores oblongo-lanceoladas, agudas, auriculadas y semiabrazadoras; hojas inferiores con lóbulo terminal muy grande y obtuso",
      keyStep: "B",
      especieId: "brassica_campestris",
    },
    opcionA_prima: {
      label: "Hojas superiores no semiabrazadoras ni auriculadas, sésiles o pecioladas; hojas inferiores con lóbulo terminal ovado, dentado y grande",
      keyStep: "B'",
      especieId: "brassica_juncea",
    },
  },
  sisymbrium_a: {
    id: "sisymbrium_a",
    milestone: "Sisymbrium",
    manualPage: 233,
    descripcion: "Sisymbrium - A: posición de las silicuas",
    opcionA: {
      label: "Silicuas apretadas contra el eje de la inflorescencia, de 10-14 mm; hierba anual ramosa con ramas muy abiertas",
      keyStep: "A",
      especieId: "sisymbrium_officinale",
    },
    opcionA_prima: {
      label: "Silicuas abiertas, divergentes del eje de la inflorescencia",
      keyStep: "A'",
      nextNodeId: "sisymbrium_b",
    },
  },
  sisymbrium_b: {
    id: "sisymbrium_b",
    milestone: "Sisymbrium",
    manualPage: 233,
    descripcion: "Sisymbrium - B: grosor de pedicelos y hojas",
    opcionA: {
      label: "Pedicelos de las silicuas gruesos; hojas runcinado-pinatisectas con segmento terminal pequeño y segmentos laterales numerosos, lanceolado-lineales; silicuas de 7-10 cm",
      keyStep: "B",
      especieId: "sisymbrium_altissimum",
    },
    opcionA_prima: {
      label: "Pedicelos de las silicuas delgados; hojas runcinado-pinatisectas con segmento terminal muy grande y 1-2 pares de segmentos lanceolados; silicuas de 2,5-4,5 cm",
      keyStep: "B'",
      especieId: "sisymbrium_irio",
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
      nextNodeId: "portulacaceae_a",
    },
  },
  portulacaceae_a: {
    id: "portulacaceae_a",
    milestone: "Portulacaceae",
    manualPage: 199,
    descripcion: "Portulacaceae - A: unión del cáliz con el ovario y dehiscencia de la cápsula",
    opcionA: {
      label: "Cáliz parcialmente soldado con el ovario; cápsulas de dehiscencia transversal",
      keyStep: "A",
      nextNodeId: "portulaca_a",
    },
    opcionA_prima: {
      label: "Cáliz no soldado con el ovario; cápsula de dehiscencia longitudinal, trivalva",
      keyStep: "A'",
      nextNodeId: "portulacaceae_b",
    },
  },
  portulacaceae_b: {
    id: "portulacaceae_b",
    milestone: "Portulacaceae",
    manualPage: 199,
    descripcion: "Portulacaceae - B: semillas, estambres y hábito",
    opcionA: {
      label: "Semillas numerosas; estambres 5 a numerosos; hierbas carnosas, erectas",
      keyStep: "B",
      especieId: "talinum_patens",
    },
    opcionA_prima: {
      label: "Semillas 3; estambres 3 o 5; hierbas pigmeas, rastreras",
      keyStep: "B'",
      especieId: "montia_fontana",
    },
  },
  portulaca_a: {
    id: "portulaca_a",
    milestone: "Portulaca",
    manualPage: 200,
    descripcion: "Portulaca - A: forma de las hojas",
    opcionA: {
      label: "Hojas espatuladas, planas; hierba anual, glabra; flores amarillas; pétalos 5, de 6-8 mm; estambres 7-12",
      keyStep: "A",
      especieId: "portulaca_oleracea",
    },
    opcionA_prima: {
      label: "Hojas lineales, más o menos cilíndricas",
      keyStep: "A'",
      nextNodeId: "portulaca_b",
    },
  },
  portulaca_b: {
    id: "portulaca_b",
    milestone: "Portulaca",
    manualPage: 200,
    descripcion: "Portulaca - B: color de flores y tamaño de pétalos",
    opcionA: {
      label: "Flores amarillas, con pétalos de 4 mm; hierba anual, largamente velluda; hojas subuladas de 2-5 mm; estambres 5-7",
      keyStep: "B",
      especieId: "portulaca_papulosa",
    },
    opcionA_prima: {
      label: "Flores purpúreas, con pétalos de 14-30 mm; hierba perenne; hojas oblongo-lineales, cilíndricas, con pelos axilares rígidos; estambres 60 o más",
      keyStep: "B'",
      especieId: "portulaca_gilliesii",
    },
  },
  dicot_group_c_m_lower: {
    id: "dicot_group_c_m_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - m: con dehiscencia poricida/longitudinal, ¿plantas con látex robustas?",
    opcionA: {
      label: "Plantas con látex, robustas",
      keyStep: "m",
      nextNodeId: "papaveraceae_a",
    },
    opcionA_prima: {
      label: "Plantas sin látex, pigmeas",
      keyStep: "m'",
      especieId: "elatine_minima",
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
      especieId: "hypericum_brasiliense",
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
      nextNodeId: "caryophyllaceae_a",
    },
    opcionA_prima: {
      label: "Óvulos de placentación parietal",
      keyStep: "p'",
      nextNodeId: "dicot_group_c_q_lower",
    },
  },
  caryophyllaceae_a: {
    id: "caryophyllaceae_a",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - A: unión de los sépalos",
    opcionA: {
      label: "Cáliz con los sépalos soldados formando un tubo, por lo menos hasta su mitad",
      keyStep: "A",
      nextNodeId: "caryophyllaceae_b_tube",
    },
    opcionA_prima: {
      label: "Cáliz con los sépalos libres o apenas unidos en su base",
      keyStep: "A'",
      nextNodeId: "caryophyllaceae_f",
    },
  },
  caryophyllaceae_b_tube: {
    id: "caryophyllaceae_b_tube",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - B: número de estilos en cáliz tubular",
    opcionA: {
      label: "Estilos 2-3",
      keyStep: "B",
      nextNodeId: "caryophyllaceae_c",
    },
    opcionA_prima: {
      label: "Estilos 5",
      keyStep: "B'",
      nextNodeId: "caryophyllaceae_e",
    },
  },
  caryophyllaceae_c: {
    id: "caryophyllaceae_c",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - C: estilos 3 o 2",
    opcionA: {
      label: "Estilos 3",
      keyStep: "C",
      nextNodeId: "silene_a",
    },
    opcionA_prima: {
      label: "Estilos 2",
      keyStep: "C'",
      nextNodeId: "caryophyllaceae_d",
    },
  },
  caryophyllaceae_d: {
    id: "caryophyllaceae_d",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - D: costillas del cáliz en estilos 2",
    opcionA: {
      label: "Cáliz sin costillas aladas",
      keyStep: "D",
      especieId: "saponaria_officinalis",
    },
    opcionA_prima: {
      label: "Cáliz con 5 costillas aladas",
      keyStep: "D'",
      especieId: "vaccaria_segetalis",
    },
  },
  caryophyllaceae_e: {
    id: "caryophyllaceae_e",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - E: segmentos del cáliz en estilos 5",
    opcionA: {
      label: "Cáliz con 5 segmentos foliáceos más largos que los pétalos y alternando con los estilos",
      keyStep: "E",
      especieId: "agrostemma_githago",
    },
    opcionA_prima: {
      label: "Cáliz con 5 dientes más cortos que los pétalos",
      keyStep: "E'",
      especieId: "melandryum_silvestre",
    },
  },
  silene_a: {
    id: "silene_a",
    milestone: "Silene",
    manualPage: 203,
    descripcion: "Silene - A: ciclo de vida",
    opcionA: {
      label: "Plantas anuales",
      keyStep: "A",
      nextNodeId: "silene_b",
    },
    opcionA_prima: {
      label: "Plantas perennes, glabras, glaucas, de 10-60 cm; hojas lanceoladas cilioladas en el margen; flores dioicas por aborto, en cimas dicotómicas; cáliz ovoideo con 20 nervaduras; pétalos blancos o rosados",
      keyStep: "A'",
      especieId: "silene_inflata",
    },
  },
  silene_b: {
    id: "silene_b",
    milestone: "Silene",
    manualPage: 203,
    descripcion: "Silene - B: disposición de las flores en plantas anuales",
    opcionA: {
      label: "Flores en cimas; hierba puberulenta o glabra; hojas lineal-lanceoladas; cáliz inflado de unos 8 mm; pétalos rosados",
      keyStep: "B",
      especieId: "silene_antirrhina",
    },
    opcionA_prima: {
      label: "Flores en espigas unilaterales definidas; hierba hirsuta; hojas espatuladas; cáliz hirsuto de 10 mm; pétalos rosados o blancos",
      keyStep: "B'",
      especieId: "silene_gallica",
    },
  },
  caryophyllaceae_f: {
    id: "caryophyllaceae_f",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - F: presencia de estípulas",
    opcionA: {
      label: "Hojas sin estípulas",
      keyStep: "F",
      nextNodeId: "caryophyllaceae_g",
    },
    opcionA_prima: {
      label: "Hojas con estípulas membranosas",
      keyStep: "F'",
      nextNodeId: "caryophyllaceae_j",
    },
  },
  caryophyllaceae_g: {
    id: "caryophyllaceae_g",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - G: forma de los pétalos",
    opcionA: {
      label: "Pétalos enteros o casi enteros, a veces ausentes",
      keyStep: "G",
      nextNodeId: "caryophyllaceae_h",
    },
    opcionA_prima: {
      label: "Pétalos bilobados o bífidos",
      keyStep: "G'",
      nextNodeId: "caryophyllaceae_i",
    },
  },
  caryophyllaceae_h: {
    id: "caryophyllaceae_h",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - H: relación entre estilos y sépalos",
    opcionA: {
      label: "Estilos en número menor que los sépalos",
      keyStep: "H",
      especieId: "arenaria_serpyllifolia",
    },
    opcionA_prima: {
      label: "Estilos en número igual a los sépalos",
      keyStep: "H'",
      nextNodeId: "sagina_a",
    },
  },
  sagina_a: {
    id: "sagina_a",
    milestone: "Sagina",
    manualPage: 206,
    descripcion: "Sagina - A: número de piezas florales",
    opcionA: {
      label: "Flores tetrámeras; anual, pigmea, tendida, laxamente pubescente; hojas estrechamente lineales; flores numerosas en cimas laxas; pétalos nulos; estambres 4",
      keyStep: "A",
      especieId: "sagina_apetala",
    },
    opcionA_prima: {
      label: "Flores pentámeras; anual, pigmea, con tallos filiformes y hojas estrechamente lineales",
      keyStep: "A'",
      especieId: "sagina_chilensis",
    },
  },
  caryophyllaceae_i: {
    id: "caryophyllaceae_i",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - I: forma y dehiscencia de la cápsula",
    opcionA: {
      label: "Cápsula ovoide, abriéndose en valvas hasta su base",
      keyStep: "I",
      especieId: "stellaria_media",
    },
    opcionA_prima: {
      label: "Cápsula cilíndrica, dehiscente por dientes apicales",
      keyStep: "I'",
      nextNodeId: "cerastium_a",
    },
  },
  cerastium_a: {
    id: "cerastium_a",
    milestone: "Cerastium",
    manualPage: 206,
    descripcion: "Cerastium - A: disposición de las flores",
    opcionA: {
      label: "Flores solitarias; anual, rastrero, glabro; hojas oblongo-lanceoladas, agudas, enteras; flores largamente pedunculadas; corola blanca",
      keyStep: "A",
      especieId: "cerastium_humifusum",
    },
    opcionA_prima: {
      label: "Flores en cimas racemiformes o corimbiformes",
      keyStep: "A'",
      nextNodeId: "cerastium_b",
    },
  },
  cerastium_b: {
    id: "cerastium_b",
    milestone: "Cerastium",
    manualPage: 206,
    descripcion: "Cerastium - B: densidad de las cimas",
    opcionA: {
      label: "Cimas muy densas; pétalos de la misma longitud que los sépalos o apenas más largos; anual, erecto, hirsuto-glanduloso; hojas espatuladas, obtusas; corola blanca",
      keyStep: "B",
      especieId: "cerastium_viscosum",
    },
    opcionA_prima: {
      label: "Cimas muy laxas; pétalos de doble longitud que los sépalos; anual, ascendente, híspido-glanduloso; hojas obovado-espatuladas, cortamente acuminadas; corola blanca",
      keyStep: "B'",
      especieId: "cerastium_rivulare",
    },
  },
  caryophyllaceae_j: {
    id: "caryophyllaceae_j",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - J: ápice de los sépalos y tipo de fruto",
    opcionA: {
      label: "Sépalos mucronados o espinosos en el ápice; fruto utrículo uniseminado",
      keyStep: "J",
      nextNodeId: "caryophyllaceae_k",
    },
    opcionA_prima: {
      label: "Sépalos no espinosos en el ápice; fruto cápsula pluriseminada",
      keyStep: "J'",
      nextNodeId: "caryophyllaceae_l",
    },
  },
  caryophyllaceae_k: {
    id: "caryophyllaceae_k",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - K: espina de los sépalos y pétalos",
    opcionA: {
      label: "Sépalos terminados en larga espina; pétalos presentes, cortos",
      keyStep: "K",
      especieId: "cardionema_ramosissimum",
    },
    opcionA_prima: {
      label: "Sépalos mucronados; pétalos ausentes o setáceos",
      keyStep: "K'",
      especieId: "paronychia_brasiliana",
    },
  },
  caryophyllaceae_l: {
    id: "caryophyllaceae_l",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - L: unión de los estilos",
    opcionA: {
      label: "Estilos libres desde su base",
      keyStep: "L",
      nextNodeId: "caryophyllaceae_m",
    },
    opcionA_prima: {
      label: "Estilos soldados hasta cerca del ápice",
      keyStep: "L'",
      nextNodeId: "polycarpon_a",
    },
  },
  caryophyllaceae_m: {
    id: "caryophyllaceae_m",
    milestone: "Caryophyllaceae",
    manualPage: 203,
    descripcion: "Caryophyllaceae - M: número de estilos",
    opcionA: {
      label: "Estilos 3",
      keyStep: "M",
      nextNodeId: "spergularia_a",
    },
    opcionA_prima: {
      label: "Estilos 5",
      keyStep: "M'",
      especieId: "spergula_arvensis",
    },
  },
  spergularia_a: {
    id: "spergularia_a",
    milestone: "Spergularia",
    manualPage: 208,
    descripcion: "Spergularia - A: largo de sépalos y alas de semillas",
    opcionA: {
      label: "Sépalos muy cortos, de 0,8-1,5 mm; semillas sin alas; anual, erecta o ascendente, ramosa, glabra",
      keyStep: "A",
      especieId: "spergularia_platensis",
    },
    opcionA_prima: {
      label: "Sépalos de más de 2,2 mm de longitud",
      keyStep: "A'",
      nextNodeId: "spergularia_b",
    },
  },
  spergularia_b: {
    id: "spergularia_b",
    milestone: "Spergularia",
    manualPage: 208,
    descripcion: "Spergularia - B: número de estambres",
    opcionA: {
      label: "Estambres 2-5; anual, glabra o glanduloso-pubescente, tendida o ascendente; flores en cimas laxas; sépalos glabros o glandulosos; pétalos blancos o rosados; semillas con alas o sin ellas",
      keyStep: "B",
      especieId: "spergularia_marina",
    },
    opcionA_prima: {
      label: "Estambres 6-10",
      keyStep: "B'",
      nextNodeId: "spergularia_c",
    },
  },
  spergularia_c: {
    id: "spergularia_c",
    milestone: "Spergularia",
    manualPage: 208,
    descripcion: "Spergularia - C: pubescencia de los sépalos",
    opcionA: {
      label: "Sépalos glabros; hierba perenne, erecta, glabra; cimas paucifloras; sépalos de 3-7 mm; semillas con ala recortada",
      keyStep: "C",
      especieId: "spergularia_levis",
    },
    opcionA_prima: {
      label: "Sépalos glanduloso-pubescentes; plantas tendidas o ascendentes",
      keyStep: "C'",
      nextNodeId: "spergularia_d",
    },
  },
  spergularia_d: {
    id: "spergularia_d",
    milestone: "Spergularia",
    manualPage: 208,
    descripcion: "Spergularia - D: color de las semillas",
    opcionA: {
      label: "Semillas de color pardo claro",
      keyStep: "D",
      nextNodeId: "spergularia_e",
    },
    opcionA_prima: {
      label: "Semillas de color pardo oscuro",
      keyStep: "D'",
      nextNodeId: "spergularia_f",
    },
  },
  spergularia_e: {
    id: "spergularia_e",
    milestone: "Spergularia",
    manualPage: 208,
    descripcion: "Spergularia - E: escultura y ala de semillas pardas claras",
    opcionA: {
      label: "Semillas esculpidas o rugosas, sin alas, de 0,4-0,6 mm; hierba anual, difusa, glabra o glanduloso-pubescente; cáliz glanduloso-pubescente; pétalos blancos o rosados",
      keyStep: "E",
      especieId: "spergularia_bocconi",
    },
    opcionA_prima: {
      label: "Semillas no esculpidas, lisas o papilosas, con ala escariosa casi entera; hierba perenne, ascendente o rastrera, glanduloso-pubescente o glabra; pétalos blancos, cortos",
      keyStep: "E'",
      especieId: "spergularia_ramosa",
    },
  },
  spergularia_f: {
    id: "spergularia_f",
    milestone: "Spergularia",
    manualPage: 208,
    descripcion: "Spergularia - F: tamaño de semillas pardas oscuras",
    opcionA: {
      label: "Semillas de 0,4-0,6 mm, casi negras, con alas o sin ellas; hierba perenne con tallos difusos, tendidos o ascendentes, glanduloso-pubescentes; pétalos blancos",
      keyStep: "F",
      especieId: "spergularia_villosa",
    },
    opcionA_prima: {
      label: "Semillas de 0,7-1,1 mm, pardo oscuro, con alas o sin ellas; hierba anual o perenne, con tallos tendidos o ascendentes, glabros o ligeramente pubescentes; pétalos blancos",
      keyStep: "F'",
      especieId: "spergularia_media",
    },
  },
  polycarpon_a: {
    id: "polycarpon_a",
    milestone: "Polycarpon",
    manualPage: 209,
    descripcion: "Polycarpon - A: ciclo de vida y hojas",
    opcionA: {
      label: "Hierbas perennes; hojas lanceoladas, enteras; flores en cimas terminales; cáliz de 2 mm; estambres 3",
      keyStep: "A",
      especieId: "polycarpon_suffruticosum",
    },
    opcionA_prima: {
      label: "Hierbas anuales, rastreras, glabras; hojas elípticas; cimas terminales densas; cáliz de 2 mm",
      keyStep: "A'",
      especieId: "polycarpon_tetraphyllum",
    },
  },
  dicot_group_c_q_lower: {
    id: "dicot_group_c_q_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - q: con placentación parietal, ¿hojas 3-5-folioladas con estípulas espiniformes?",
    opcionA: {
      label: "Sí",
      keyStep: "q",
      nextNodeId: "capparidaceae_a",
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
      especieId: "frankenia_pulverulenta",
    },
    opcionA_prima: {
      label: "Hojas alternas",
      keyStep: "r'",
      especieId: "turnera_pinnatifida_angustiloba",
    },
  },
  dicot_group_c_s_lower: {
    id: "dicot_group_c_s_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - s: con ovario 2-∞-locular, ¿receptáculo tubuloso?",
    opcionA: {
      label: "Receptáculo tubuloso, verde o coloreado, con pétalos insertos en el borde",
      keyStep: "s",
      nextNodeId: "lythraceae_a",
    },
    opcionA_prima: {
      label: "Receptáculo a veces algo cóncavo, pero no tubuloso",
      keyStep: "s'",
      nextNodeId: "dicot_group_c_t_lower",
    },
  },
  lythraceae_a: {
    id: "lythraceae_a",
    milestone: "Lythraceae",
    manualPage: 330,
    descripcion: "Lythraceae - A: simetría de las flores",
    opcionA: {
      label: "Flores casi actinomorfas, subsésiles",
      keyStep: "A",
      nextNodeId: "lythraceae_b",
    },
    opcionA_prima: {
      label: "Flores cigomorfas, con la base del receptáculo espolonada o hinchada, cortamente pediceladas",
      keyStep: "A'",
      nextNodeId: "cuphea_a",
    },
  },
  lythraceae_b: {
    id: "lythraceae_b",
    milestone: "Lythraceae",
    manualPage: 330,
    descripcion: "Lythraceae - B: color floral y número de estambres",
    opcionA: {
      label: "Flores rosadas; estambres 4-6",
      keyStep: "B",
      nextNodeId: "lythrum_a",
    },
    opcionA_prima: {
      label: "Flores amarillas; estambres 12-18",
      keyStep: "B'",
      especieId: "heimia_salicifolia",
    },
  },
  lythrum_a: {
    id: "lythrum_a",
    milestone: "Lythrum",
    manualPage: 330,
    descripcion: "Lythrum - A: anillo carnoso en el pie del ovario",
    opcionA: {
      label: "Pie del ovario rodeado por un anillo carnoso; estambres 6; plantas perennes sufruticosas; pétalos violáceos",
      keyStep: "A",
      especieId: "lythrum_maritimum",
    },
    opcionA_prima: {
      label: "Pie del ovario sin anillo carnoso; estambres generalmente 4; hierba anual; pétalos azules",
      keyStep: "A'",
      especieId: "lythrum_hyssopifolia",
    },
  },
  cuphea_a: {
    id: "cuphea_a",
    milestone: "Cuphea",
    manualPage: 332,
    descripcion: "Cuphea - A: bracteolas en los pedúnculos florales",
    opcionA: {
      label: "Pedúnculos florales con dos bracteolas cerca del ápice; plantas densamente glanduloso-pubescentes; hojas ovadas; flores alternas",
      keyStep: "A",
      especieId: "cuphea_glutinosa",
    },
    opcionA_prima: {
      label: "Pedúnculos florales sin bracteolas; plantas pubescentes o casi glabras; hojas generalmente mayores",
      keyStep: "A'",
      nextNodeId: "cuphea_b",
    },
  },
  cuphea_b: {
    id: "cuphea_b",
    milestone: "Cuphea",
    manualPage: 332,
    descripcion: "Cuphea - B: forma de las hojas",
    opcionA: {
      label: "Hojas lanceoladas, opuestas, cortísimamente pecioladas, glabras o casi glabras; flores opuestas, formando seudorracimos terminales; pétalos liliáceos",
      keyStep: "B",
      especieId: "cuphea_fruticosa",
    },
    opcionA_prima: {
      label: "Hojas ovadas u ovado-oblongas, generalmente obtusas en la base; flores opuestas, en racimos terminales; pétalos rosados o violáceos",
      keyStep: "B'",
      especieId: "cuphea_origanifolia",
    },
  },
  dicot_group_c_t_lower: {
    id: "dicot_group_c_t_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - t: sin receptáculo tubuloso, ¿hojas trifolioladas con folíolos acorazonados?",
    opcionA: {
      label: "Sí; estambres 10, ovario 5-locular, 5 estilos",
      keyStep: "t",
      nextNodeId: "oxalidaceae_a",
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
      nextNodeId: "euphorbiaceae_a",
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
      nextNodeId: "linum_a",
    },
    opcionA_prima: {
      label: "Hojas opuestas; plantas pigmeas",
      keyStep: "w'",
      especieId: "elatine_minima",
    },
  },
  dicot_group_c_x_lower: {
    id: "dicot_group_c_x_lower",
    milestone: "Grupo C",
    descripcion: "Grupo C - x: con hojas no lineales, ¿flores amarillas y plantas fétidas?",
    opcionA: {
      label: "Flores amarillas; pétalos en forma de cuchara; plantas fétidas",
      keyStep: "x",
      nextNodeId: "rutaceae_a",
    },
    opcionA_prima: {
      label: "Flores azules o violáceas; pétalos planos; plantas no fétidas",
      keyStep: "x'",
      nextNodeId: "geraniaceae_a",
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
      nextNodeId: "loasaceae_a",
    },
    opcionA_prima: {
      label: "No",
      keyStep: "A'",
      nextNodeId: "dicot_group_d_b",
    },
  },
  loasaceae_a: {
    id: "loasaceae_a",
    milestone: "Loasaceae",
    manualPage: 323,
    descripcion: "Blumenbachia - A: forma de las hojas",
    opcionA: {
      label: "Hojas trifolioladas, con folíolos ovados, más o menos profundamente lobados en el margen; flores cortamente pedunculadas, con corola blanca; sépalos pinatipartidos; cápsulas globosas de 2 cm de diámetro",
      keyStep: "A",
      especieId: "blumenbachia_urens",
    },
    opcionA_prima: {
      label: "Hojas palmatisectas, con 3-5 segmentos primarios bipinatisectos; flores largamente pedunculadas, con corola blanca; sépalos enteros; cápsulas globosas de 1,5-2 cm de diámetro",
      keyStep: "A'",
      especieId: "blumenbachia_insignis",
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
      nextNodeId: "cactaceae_a",
    },
    opcionA_prima: {
      label: "No; plantas con hojas, sin espinas",
      keyStep: "C'",
      nextNodeId: "dicot_group_d_d",
    },
  },
  cactaceae_a: {
    id: "cactaceae_a",
    milestone: "Cactaceae",
    manualPage: 325,
    descripcion: "Cactaceae - A: presencia de gloquidios",
    opcionA: {
      label: "Plantas con gloquidios en las areolas; tallos aplanados, articulados",
      keyStep: "A",
      nextNodeId: "opuntia_a",
    },
    opcionA_prima: {
      label: "Plantas sin gloquidios en las areolas; tallos cilíndricos o globosos",
      keyStep: "A'",
      nextNodeId: "cactaceae_b",
    },
  },
  cactaceae_b: {
    id: "cactaceae_b",
    milestone: "Cactaceae",
    manualPage: 325,
    descripcion: "Cactaceae - B: forma floral y hábito",
    opcionA: {
      label: "Flores rotáceas o muy cortamente tubuladas; plantas epífitas",
      keyStep: "B",
      nextNodeId: "rhipsalis_a",
    },
    opcionA_prima: {
      label: "Flores con tubo desarrollado, hipocraterimorfas o infundibuliformes",
      keyStep: "B'",
      nextNodeId: "cactaceae_c",
    },
  },
  cactaceae_c: {
    id: "cactaceae_c",
    milestone: "Cactaceae",
    manualPage: 325,
    descripcion: "Cactaceae - C: tallos columnares o globosos",
    opcionA: {
      label: "Tallos columnares, ramosos",
      keyStep: "C",
      especieId: "cereus_peruvianus",
    },
    opcionA_prima: {
      label: "Tallos globosos",
      keyStep: "C'",
      especieId: "echinopsis_tubiflora",
    },
  },
  opuntia_a: {
    id: "opuntia_a",
    milestone: "Opuntia",
    manualPage: 326,
    descripcion: "Opuntia - A: forma de los artículos del tallo",
    opcionA: {
      label: "Artículos del tallo ligeramente aplastados, oblongos, de 5-15 cm por 1,2-2 cm; areolas densas, con gloquidios y manojos de unas 5 espinas blanquecinas; flores anaranjadas",
      keyStep: "A",
      especieId: "opuntia_aurantiaca",
    },
    opcionA_prima: {
      label: "Artículos del tallo muy comprimidos, obovados, unas dos veces tan largos como anchos",
      keyStep: "A'",
      nextNodeId: "opuntia_b",
    },
  },
  opuntia_b: {
    id: "opuntia_b",
    milestone: "Opuntia",
    manualPage: 327,
    descripcion: "Opuntia - B: espinas y color del perianto",
    opcionA: {
      label: "Areolas con gloquidios y una o dos espinas blanquecinas, de 3-7 cm; ovario turbinado; perianto anaranjado",
      keyStep: "B",
      especieId: "opuntia_arechavaletai",
    },
    opcionA_prima: {
      label: "Areolas con lana blanca, gloquidios y una o dos espinas cortas y gruesas, amarillentas o pardas; perianto amarillo",
      keyStep: "B'",
      especieId: "opuntia_vulgaris",
    },
  },
  rhipsalis_a: {
    id: "rhipsalis_a",
    milestone: "Rhipsalis",
    manualPage: 328,
    descripcion: "Rhipsalis - A: brácteas de las areolas",
    opcionA: {
      label: "Areolas con una bráctea papirácea triangular, muy conspicua en tallos jóvenes, con espinitas caducas; frutos vinosos oscuros",
      keyStep: "A",
      especieId: "rhipsalis_leucorhaphis",
    },
    opcionA_prima: {
      label: "Areolas con brácteas muy reducidas; espinitas cortas, caducas o persistentes; frutos pequeños, globosos",
      keyStep: "A'",
      especieId: "rhipsalis_lumbricoides",
    },
  },
  dicot_group_d_d: {
    id: "dicot_group_d_d",
    milestone: "Grupo D",
    descripcion: "Grupo D - D: con hojas y sin espinas, ¿hierbas o árboles?",
    opcionA: {
      label: "Hierbas; flores unisexuales diclinas",
      keyStep: "D",
      nextNodeId: "begoniaceae_terminal",
    },
    opcionA_prima: {
      label: "Árboles; flores hermafroditas",
      keyStep: "D'",
      nextNodeId: "myrtaceae_a",
    },
  },
  myrtaceae_a: {
    id: "myrtaceae_a",
    milestone: "Myrtaceae",
    manualPage: 335,
    descripcion: "Myrtaceae - A: estructura de semillas y tipo de inflorescencia",
    opcionA: {
      label: "Semillas con cotiledones diminutos en el extremo de una radícula muy grande, más o menos enroscada; flores en cimas dicotómicas",
      keyStep: "A",
      especieId: "blepharocalyx_tweediei",
    },
    opcionA_prima: {
      label: "Semillas con cotiledones grandes, más o menos de la misma longitud que la radícula o mucho mayores que ésta",
      keyStep: "A'",
      nextNodeId: "myrtaceae_b",
    },
  },
  myrtaceae_b: {
    id: "myrtaceae_b",
    milestone: "Myrtaceae",
    manualPage: 335,
    descripcion: "Myrtaceae - B: forma de cotiledones y disposición floral",
    opcionA: {
      label: "Cotiledones delgados, plegados, más o menos de la misma longitud que la radícula; flores 1-3 en las axilas de las hojas",
      keyStep: "B",
      especieId: "myrceugenia_glaucescens",
    },
    opcionA_prima: {
      label: "Cotiledones grandes, gruesos y carnosos; radícula diminuta, apenas conspicua; flores en pequeños racimos o corimbos",
      keyStep: "B'",
      especieId: "eugenia_opaca",
    },
  },
  begoniaceae_terminal: {
    id: "begoniaceae_terminal",
    milestone: "Begoniaceae",
    manualPage: 325,
    descripcion: "Begoniaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Begonia cucullata",
      keyStep: "1",
      especieId: "begonia_cucullata",
    },
    opcionA_prima: {
      label: "Identificar como Begonia cucullata",
      keyStep: "1",
      especieId: "begonia_cucullata",
    },
    especie: manualFamilyData.begonia_cucullata,
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
      nextNodeId: "loranthaceae_a",
    },
    opcionA_prima: {
      label: "No; flores pequeñas verdosas",
      keyStep: "F'",
      nextNodeId: "combretaceae_terminal",
    },
  },
  combretaceae_terminal: {
    id: "combretaceae_terminal",
    milestone: "Combretaceae",
    manualPage: 333,
    descripcion: "Combretaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Terminalia australis",
      keyStep: "1",
      especieId: "terminalia_australis",
    },
    opcionA_prima: {
      label: "Identificar como Terminalia australis",
      keyStep: "1",
      especieId: "terminalia_australis",
    },
    especie: manualFamilyData.terminalia_australis,
  },
  loranthaceae_a: {
    id: "loranthaceae_a",
    milestone: "Loranthaceae",
    manualPage: 174,
    descripcion: "Psittacanthus cuneifolius - A: color del perigonio",
    opcionA: {
      label: "Flores con perigonio rojo de unos 35-45 mm",
      keyStep: "1",
      especieId: "psittacanthus_cuneifolius",
    },
    opcionA_prima: {
      label: "Flores de color amarillo intenso",
      keyStep: "1a",
      especieId: "psittacanthus_cuneifolius_flava",
    },
  },
  dicot_group_d_g: {
    id: "dicot_group_d_g",
    milestone: "Grupo D",
    descripcion: "Grupo D - G: con ovario 2-∞-locular, ¿flores pequeñas en umbelas o capítulos densos?",
    opcionA: {
      label: "Sí; fruto seco dividido en dos mericarpos",
      keyStep: "G",
      nextNodeId: "umbelliferae_a",
    },
    opcionA_prima: {
      label: "No; flores pequeñas o grandes dispuestas en otra forma",
      keyStep: "G'",
      nextNodeId: "dicot_group_d_h",
    },
  },
  umbelliferae_a: {
    id: "umbelliferae_a",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - A: tipo de inflorescencia",
    opcionA: {
      label: "Flores en cabezuelas densas, esféricas u ovoideas",
      keyStep: "A",
      nextNodeId: "eryngium_a",
    },
    opcionA_prima: {
      label: "Flores en umbelas simples o compuestas",
      keyStep: "A'",
      nextNodeId: "umbelliferae_b",
    },
  },
  umbelliferae_b: {
    id: "umbelliferae_b",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - B: cerdas fuertes en los frutos",
    opcionA: {
      label: "Frutos cubiertos de cerdas fuertes",
      keyStep: "B",
      nextNodeId: "umbelliferae_c",
    },
    opcionA_prima: {
      label: "Frutos sin cerdas espiniformes",
      keyStep: "B'",
      nextNodeId: "umbelliferae_d",
    },
  },
  umbelliferae_c: {
    id: "umbelliferae_c",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - C: distribución de espinas en el fruto",
    opcionA: {
      label: "Fruto con cerdas espiniformes sobre toda su superficie; umbelas reducidas, opuestas a las hojas a lo largo del tallo",
      keyStep: "C",
      especieId: "torilis_nodosa",
    },
    opcionA_prima: {
      label: "Fruto con espinas únicamente sobre las costillas; umbelas grandes, compuestas, terminales",
      keyStep: "C'",
      especieId: "daucus_montevidensis",
    },
  },
  umbelliferae_d: {
    id: "umbelliferae_d",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - D: división de las hojas",
    opcionA: {
      label: "Hojas enteras, crenadas, dentadas o lobadas, no pinatisectas",
      keyStep: "D",
      nextNodeId: "umbelliferae_e",
    },
    opcionA_prima: {
      label: "Hojas profundamente pinatisectas o bipinatisectas",
      keyStep: "D'",
      nextNodeId: "umbelliferae_h",
    },
  },
  umbelliferae_h: {
    id: "umbelliferae_h",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - H: color de las flores",
    opcionA: {
      label: "Flores amarillas",
      keyStep: "H",
      especieId: "foeniculum_vulgare",
    },
    opcionA_prima: {
      label: "Flores blancas",
      keyStep: "H'",
      nextNodeId: "umbelliferae_i",
    },
  },
  umbelliferae_i: {
    id: "umbelliferae_i",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - I: forma y superficie de los frutos",
    opcionA: {
      label: "Frutos oblongos, de 4 mm, áspero-papilosos sobre las costillas",
      keyStep: "I",
      especieId: "notiosciadium_pampicola",
    },
    opcionA_prima: {
      label: "Frutos de contorno circular u ovoideo, lisos o rugosos, pero no áspero-papilosos, de menos de 3 mm",
      keyStep: "I'",
      nextNodeId: "umbelliferae_j",
    },
  },
  umbelliferae_j: {
    id: "umbelliferae_j",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - J: involucro de las umbelas",
    opcionA: {
      label: "Umbelas con un involucro de brácteas foliáceas",
      keyStep: "J",
      nextNodeId: "umbelliferae_k",
    },
    opcionA_prima: {
      label: "Umbelas sin involucro",
      keyStep: "J'",
      nextNodeId: "umbelliferae_m",
    },
  },
  umbelliferae_k: {
    id: "umbelliferae_k",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - K: rugosidad de las costillas del fruto",
    opcionA: {
      label: "Costillas del fruto muy rugosas",
      keyStep: "K",
      especieId: "conium_maculatum",
    },
    opcionA_prima: {
      label: "Costillas del fruto lisas",
      keyStep: "K'",
      nextNodeId: "umbelliferae_l",
    },
  },
  umbelliferae_l: {
    id: "umbelliferae_l",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - L: brácteas del involucro y forma de frutos",
    opcionA: {
      label: "Involucro formado por numerosas brácteas pinatisectas; frutos ovoideos, con costillas poco prominentes",
      keyStep: "L",
      nextNodeId: "ammi_a",
    },
    opcionA_prima: {
      label: "Involucro formado por sólo 1-4 brácteas; frutos redondeados o arriñonados, con surcos muy profundos",
      keyStep: "L'",
      nextNodeId: "apium_a",
    },
  },
  umbelliferae_m: {
    id: "umbelliferae_m",
    milestone: "Umbelliferae",
    manualPage: 344,
    descripcion: "Umbelliferae - M: simetría floral",
    opcionA: {
      label: "Flores actinomorfas, con todos los pétalos iguales",
      keyStep: "M",
      nextNodeId: "umbelliferae_n",
    },
    opcionA_prima: {
      label: "Flores cigomorfas, con 3 pétalos más largos que los otros dos",
      keyStep: "M'",
      especieId: "coriandrum_sativum",
    },
  },
  umbelliferae_n: {
    id: "umbelliferae_n",
    milestone: "Umbelliferae",
    manualPage: 344,
    descripcion: "Umbelliferae - N: compresión de los frutos",
    opcionA: {
      label: "Frutos algo comprimidos",
      keyStep: "N",
      nextNodeId: "apium_a",
    },
    opcionA_prima: {
      label: "Frutos no comprimidos",
      keyStep: "N'",
      especieId: "oenanthe_globulosa",
    },
  },
  ammi_a: {
    id: "ammi_a",
    milestone: "Ammi",
    manualPage: 353,
    descripcion: "Ammi - A: división de las hojas",
    opcionA: {
      label: "Hojas inferiores pinati- o bipinaticompuestas, con folíolos ovado-lanceolados, aserrados; hojas superiores con segmentos lineales; inflorescencia fructificada abierta",
      keyStep: "A",
      especieId: "ammi_majus",
    },
    opcionA_prima: {
      label: "Hojas inferiores y superiores tripinatisectas, con segmentos lineales muy angostos; inflorescencias fructificadas con radios curvados hacia adentro",
      keyStep: "A'",
      especieId: "ammi_visnaga",
    },
  },
  apium_a: {
    id: "apium_a",
    milestone: "Apium",
    manualPage: 353,
    descripcion: "Apium - A: división de las hojas",
    opcionA: {
      label: "Hojas bipinaticompuestas, con 1-4 divisiones primarias divididas en folíolos lanceolados; hierba erecta de 1-1,5 m; frutos ovoideos",
      keyStep: "A",
      especieId: "apium_sellowianum",
    },
    opcionA_prima: {
      label: "Hojas bi- o tripinatisectas, con segmentos estrechamente lineales; plantas más bajas, por lo común tendidas o ascendentes",
      keyStep: "A'",
      nextNodeId: "apium_b",
    },
  },
  apium_b: {
    id: "apium_b",
    milestone: "Apium",
    manualPage: 354,
    descripcion: "Apium - B: ciclo y porte",
    opcionA: {
      label: "Hierba anual, glabra, ascendente o erecta, de 10-80 cm; umbelas por lo común sésiles; frutos circulares de cerca de 2 mm",
      keyStep: "B",
      especieId: "apium_leptophyllum",
    },
    opcionA_prima: {
      label: "Hierba perenne, con raíz gruesa y tallos tendidos, ramosos, de 10-30 cm; frutos circulares de 2-2,4 mm",
      keyStep: "B'",
      especieId: "apium_prostratum",
    },
  },
  umbelliferae_e: {
    id: "umbelliferae_e",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - E: hojas lineales u ovadas",
    opcionA: {
      label: "Hojas lineales o lineal-lanceoladas, enteras",
      keyStep: "E",
      nextNodeId: "lilaeopsis_a",
    },
    opcionA_prima: {
      label: "Hojas ovadas, circulares o reniformes, crenadas o lobadas",
      keyStep: "E'",
      nextNodeId: "umbelliferae_f",
    },
  },
  umbelliferae_f: {
    id: "umbelliferae_f",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - F: origen de hojas y pedúnculos",
    opcionA: {
      label: "Hojas y pedúnculos naciendo directamente de un rizoma horizontal o de un tallo rastrero radicante; plantas glabras o con pelos simples",
      keyStep: "F",
      nextNodeId: "umbelliferae_g",
    },
    opcionA_prima: {
      label: "Plantas con tallos aéreos ramificados, con pelos estrellados",
      keyStep: "F'",
      especieId: "bowlesia_tenera",
    },
  },
  umbelliferae_g: {
    id: "umbelliferae_g",
    milestone: "Umbelliferae",
    manualPage: 343,
    descripcion: "Umbelliferae - G: número de costillas de los mericarpos",
    opcionA: {
      label: "Mericarpos con 7-9 costillas; hojas notablemente envainadoras",
      keyStep: "G",
      especieId: "centella_hirtella",
    },
    opcionA_prima: {
      label: "Mericarpos con 5 costillas; hojas no envainadoras",
      keyStep: "G'",
      nextNodeId: "hydrocotyle_a",
    },
  },
  hydrocotyle_a: {
    id: "hydrocotyle_a",
    milestone: "Hydrocotyle",
    manualPage: 350,
    descripcion: "Hydrocotyle - A: flores solitarias o en umbelas",
    opcionA: {
      label: "Flores solitarias sobre largos pedúnculos axilares; fruto elíptico, grande, que se entierra espontáneamente a su madurez",
      keyStep: "A",
      especieId: "hydrocotyle_cryptocarpa",
    },
    opcionA_prima: {
      label: "Flores en umbelas simples o compuestas",
      keyStep: "A'",
      nextNodeId: "hydrocotyle_b",
    },
  },
  hydrocotyle_b: {
    id: "hydrocotyle_b",
    milestone: "Hydrocotyle",
    manualPage: 350,
    descripcion: "Hydrocotyle - B: hojas peltadas o no peltadas",
    opcionA: {
      label: "Hojas no peltadas, reniformes o suborbiculares, crenadas o lobadas",
      keyStep: "B",
      nextNodeId: "hydrocotyle_c",
    },
    opcionA_prima: {
      label: "Hojas peltadas, orbiculares o algo reniformes, crenadas o lobadas",
      keyStep: "B'",
      nextNodeId: "hydrocotyle_d",
    },
  },
  hydrocotyle_c: {
    id: "hydrocotyle_c",
    milestone: "Hydrocotyle",
    manualPage: 350,
    descripcion: "Hydrocotyle - C: forma de frutos y número de flores",
    opcionA: {
      label: "Frutos muy comprimidos lateralmente, reniformes; umbelas 4-12-floras; plantas flotantes o tendidas sobre el barro",
      keyStep: "C",
      especieId: "hydrocotyle_ranunculoides",
    },
    opcionA_prima: {
      label: "Frutos más o menos globosos; umbelas 20-30-floras, simples, contraídas, muy largamente pedunculadas",
      keyStep: "C'",
      especieId: "hydrocotyle_leucocephala",
    },
  },
  hydrocotyle_d: {
    id: "hydrocotyle_d",
    milestone: "Hydrocotyle",
    manualPage: 351,
    descripcion: "Hydrocotyle - D: umbelas simples o compuestas",
    opcionA: {
      label: "Umbelas simples",
      keyStep: "D",
      nextNodeId: "hydrocotyle_e",
    },
    opcionA_prima: {
      label: "Umbelas compuestas o flores dispuestas en verticilos alrededor de un eje",
      keyStep: "D'",
      nextNodeId: "hydrocotyle_f",
    },
  },
  hydrocotyle_e: {
    id: "hydrocotyle_e",
    milestone: "Hydrocotyle",
    manualPage: 351,
    descripcion: "Hydrocotyle - E: pedicelos y número de flores",
    opcionA: {
      label: "Pedicelos de las flores cortísimos; umbela casi capituliforme, con 3-10 flores; hoja orbicular de 4-20 mm",
      keyStep: "E",
      especieId: "hydrocotyle_pusilla",
    },
    opcionA_prima: {
      label: "Pedicelos de 2-4 mm; flores 20-40; hojas peltadas, orbiculares, crenadas, de 10-50 mm",
      keyStep: "E'",
      especieId: "hydrocotyle_modesta",
    },
  },
  hydrocotyle_f: {
    id: "hydrocotyle_f",
    milestone: "Hydrocotyle",
    manualPage: 351,
    descripcion: "Hydrocotyle - F: umbelas compuestas o flores verticiladas",
    opcionA: {
      label: "Umbelas compuestas, plurifloras; pétalos amarillentos; frutos comprimidos lateralmente, orbiculares o reniformes",
      keyStep: "F",
      especieId: "hydrocotyle_bonariensis",
    },
    opcionA_prima: {
      label: "Flores casi sentadas, dispuestas en 2-5 verticilos distantes a lo largo del eje; frutos muy comprimidos, suborbiculares",
      keyStep: "F'",
      especieId: "hydrocotyle_verticillata",
    },
  },
  lilaeopsis_a: {
    id: "lilaeopsis_a",
    milestone: "Lilaeopsis",
    manualPage: 348,
    descripcion: "Lilaeopsis - A: cantidad y disposición de flores en las umbelas",
    opcionA: {
      label: "Umbelas 2-7-floras, solitarias en las axilas de las hojas; hojas lineales, obtusas, de 2-6,5 cm; frutos globosos de 2 mm",
      keyStep: "A",
      especieId: "lilaeopsis_minor",
    },
    opcionA_prima: {
      label: "Umbelas generalmente con más de 7 flores, en grupos de 2-4 en las axilas de las hojas; hojas de 6-30 cm",
      keyStep: "A'",
      nextNodeId: "lilaeopsis_b",
    },
  },
  lilaeopsis_b: {
    id: "lilaeopsis_b",
    milestone: "Lilaeopsis",
    manualPage: 348,
    descripcion: "Lilaeopsis - B: forma de las hojas",
    opcionA: {
      label: "Hojas espatuladas, septadas, de 6-20 cm por 0,5-1,2 cm; umbelas 7-15-floras, agrupadas de a dos o tres en cada nudo; frutos transovados",
      keyStep: "B",
      especieId: "lilaeopsis_caroliniensis",
    },
    opcionA_prima: {
      label: "Hojas subuladas, atenuadas en la parte superior, de 6-27 cm por 0,2-0,5 cm; umbelas 8-21-floras en grupos de 2-4; frutos globosos",
      keyStep: "B'",
      especieId: "lilaeopsis_attenuata",
    },
  },
  eryngium_a: {
    id: "eryngium_a",
    milestone: "Eryngium",
    manualPage: 344,
    descripcion: "Eryngium - A: altura y ramificación",
    opcionA: {
      label: "Plantas de menos de 50 cm de alto, tendidas o erectas, con tallos divididos dicotómicamente desde la base o desde poca altura",
      keyStep: "A",
      nextNodeId: "eryngium_b",
    },
    opcionA_prima: {
      label: "Plantas de más de 50 cm de alto, erectas, ramificadas solamente en la inflorescencia",
      keyStep: "A'",
      nextNodeId: "eryngium_f",
    },
  },
  eryngium_b: {
    id: "eryngium_b",
    milestone: "Eryngium",
    manualPage: 344,
    descripcion: "Eryngium - B: capítulos coronados por brácteas largas",
    opcionA: {
      label: "Capítulos ovoideos, llevando en su ápice algunas brácteas lineal-lanceoladas rígidas, casi tan largas o más largas que el capítulo",
      keyStep: "B",
      nextNodeId: "eryngium_c",
    },
    opcionA_prima: {
      label: "Capítulos ovoideos o esféricos, no coronados por brácteas largas",
      keyStep: "B'",
      nextNodeId: "eryngium_d",
    },
  },
  eryngium_c: {
    id: "eryngium_c",
    milestone: "Eryngium",
    manualPage: 344,
    descripcion: "Eryngium - C: consistencia y división de las hojas",
    opcionA: {
      label: "Hojas rígidas, las inferiores en roseta, oblanceoladas, dentadas, lobuladas o pinatisectas, con lóbulos espinescentes",
      keyStep: "C",
      especieId: "eryngium_coronatum",
    },
    opcionA_prima: {
      label: "Hojas tiernas, radicales y caulinares largamente pecioladas, trisectas, con segmentos lanceolados irregularmente aserrados, lobados o partidos",
      keyStep: "C'",
      especieId: "eryngium_kurtzii",
    },
  },
  eryngium_d: {
    id: "eryngium_d",
    milestone: "Eryngium",
    manualPage: 344,
    descripcion: "Eryngium - D: porte de los tallos",
    opcionA: {
      label: "Plantas con tallos tendidos o ascendentes; capítulos ovoideos o cilíndrico-ovoideos; hojas radicales lineales, aserradas o pinatisectas",
      keyStep: "D",
      nextNodeId: "eryngium_e",
    },
    opcionA_prima: {
      label: "Plantas con tallos erectos, de 10-30 cm de alto, divididos en 3-5 ramas en la parte superior",
      keyStep: "D'",
      especieId: "eryngium_nudicaule",
    },
  },
  eryngium_e: {
    id: "eryngium_e",
    milestone: "Eryngium",
    manualPage: 344,
    descripcion: "Eryngium - E: largo de brácteas involucrales",
    opcionA: {
      label: "Brácteas involucrales mucho más cortas que los capítulos; hojas profundamente pinatisectas; capítulos verdosos, cortamente pedunculados",
      keyStep: "E",
      especieId: "eryngium_divaricatum",
    },
    opcionA_prima: {
      label: "Brácteas involucrales iguales o más largas que los capítulos; brácteas florales más largas que las flores",
      keyStep: "E'",
      especieId: "eryngium_echinatum",
    },
  },
  eryngium_f: {
    id: "eryngium_f",
    milestone: "Eryngium",
    manualPage: 345,
    descripcion: "Eryngium - F: forma de hojas y nervaduras",
    opcionA: {
      label: "Hojas lanceoladas, con nervaduras divergentes y margen provisto de dientes perpendiculares espinosos y cilias",
      keyStep: "F",
      nextNodeId: "eryngium_g",
    },
    opcionA_prima: {
      label: "Hojas lineales, con nervaduras paralelas y margen entero, provisto de espinas apenas divergentes, o sin espinas",
      keyStep: "F'",
      nextNodeId: "eryngium_h",
    },
  },
  eryngium_g: {
    id: "eryngium_g",
    milestone: "Eryngium",
    manualPage: 345,
    descripcion: "Eryngium - G: brácteas florales",
    opcionA: {
      label: "Brácteas florales enteras; hojas basales lineal-lanceoladas, agudas, envainadoras en la base",
      keyStep: "G",
      especieId: "eryngium_serra",
    },
    opcionA_prima: {
      label: "Brácteas florales tricuspidadas; hojas basales oblanceolado-lineales, aserradas, con dientes muy abiertos espinosos",
      keyStep: "G'",
      especieId: "eryngium_elegans",
    },
  },
  eryngium_h: {
    id: "eryngium_h",
    milestone: "Eryngium",
    manualPage: 345,
    descripcion: "Eryngium - H: forma y color de los capítulos",
    opcionA: {
      label: "Capítulos cilíndricos, de color vinoso, de 1-2 cm, con brácteas involucrales y florales muy cortas",
      keyStep: "H",
      especieId: "eryngium_ebracteatum",
    },
    opcionA_prima: {
      label: "Capítulos esféricos u ovoideos",
      keyStep: "H'",
      nextNodeId: "eryngium_j",
    },
  },
  eryngium_j: {
    id: "eryngium_j",
    milestone: "Eryngium",
    manualPage: 345,
    descripcion: "Eryngium - J: escamas del fruto",
    opcionA: {
      label: "Frutos con escamas marginales aliformes, pero sin escamas dorsales; capítulos ovoideos de 15-20 mm en panoja alargada de cimas",
      keyStep: "J",
      especieId: "eryngium_eburneum",
    },
    opcionA_prima: {
      label: "Frutos con escamas dorsales vesiculosas o membranosas; capítulos dispuestos en cimas corimbiformes",
      keyStep: "J'",
      nextNodeId: "eryngium_k",
    },
  },
  eryngium_k: {
    id: "eryngium_k",
    milestone: "Eryngium",
    manualPage: 345,
    descripcion: "Eryngium - K: tamaño y disposición de capítulos",
    opcionA: {
      label: "Capítulos ovoideos, verdosos o algo violáceos, de 7-9 mm, en amplia panoja corimbiforme de cimas",
      keyStep: "K",
      especieId: "eryngium_pandanifolium",
    },
    opcionA_prima: {
      label: "Capítulos esféricos o subovoideos, de 10-18 mm",
      keyStep: "K'",
      nextNodeId: "eryngium_l",
    },
  },
  eryngium_l: {
    id: "eryngium_l",
    milestone: "Eryngium",
    manualPage: 345,
    descripcion: "Eryngium - L: capítulos globosos u ovoideo-globosos",
    opcionA: {
      label: "Capítulos globosos, de 10-12 mm, verdosos, dispuestos en densa panoja de cimas; brácteas involucrales ovadas, acuminado-espinosas, enteras",
      keyStep: "L",
      especieId: "eryngium_horridum",
    },
    opcionA_prima: {
      label: "Capítulos ovoideo-globosos, de 15-17 mm, en cimas corimbiformes dicotómicas muy laxas; brácteas involucrales acuminadas",
      keyStep: "L'",
      especieId: "eryngium_chamissonis",
    },
  },
  dicot_group_d_h: {
    id: "dicot_group_d_h",
    milestone: "Grupo D",
    descripcion: "Grupo D - H: ¿plantas acuáticas semisumergidas con hojas verticiladas pinatisectas?",
    opcionA: {
      label: "Sí; segmentos lineales",
      keyStep: "H",
      nextNodeId: "haloragaceae_a",
    },
    opcionA_prima: {
      label: "No; plantas terrestres, rara vez acuáticas con hojas enteras flotantes",
      keyStep: "H'",
      nextNodeId: "dicot_group_d_j",
    },
  },
  haloragaceae_a: {
    id: "haloragaceae_a",
    milestone: "Haloragaceae",
    manualPage: 342,
    descripcion: "Myriophyllum - A: hojas florales y hojas sumergidas",
    opcionA: {
      label: "Todas las hojas profundamente pinatisectas, en verticilos de 4-6, de contorno elíptico, con raquis y segmentos lineal-filiformes; flores unisexuales, monoicas o semidioicas",
      keyStep: "A",
      especieId: "myriophyllum_brasiliense",
    },
    opcionA_prima: {
      label: "Hojas superiores florales obovadas u orbiculares, aserradas; las demás sumergidas y profundamente pinatisectas, en verticilos de 3-5; flores solitarias, hermafroditas o algunas unisexuales",
      keyStep: "A'",
      especieId: "myriophyllum_elatinoides",
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
      nextNodeId: "melastomaceae_terminal",
    },
  },
  melastomaceae_terminal: {
    id: "melastomaceae_terminal",
    milestone: "Melastomaceae",
    manualPage: 336,
    descripcion: "Melastomaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Tibouchina nitida",
      keyStep: "1",
      especieId: "tibouchina_nitida",
    },
    opcionA_prima: {
      label: "Identificar como Tibouchina nitida",
      keyStep: "1",
      especieId: "tibouchina_nitida",
    },
    especie: manualFamilyData.tibouchina_nitida,
  },
  dicot_group_d_k: {
    id: "dicot_group_d_k",
    milestone: "Grupo D",
    descripcion: "Grupo D - K: con anteras de dehiscencia longitudinal, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres 5",
      keyStep: "K",
      especieId: "escallonia_megapotamica",
    },
    opcionA_prima: {
      label: "Estambres 4; tubo del cáliz muy largo, a veces prolongado en hipanto",
      keyStep: "K'",
      nextNodeId: "onagraceae_a",
    },
  },
  onagraceae_a: {
    id: "onagraceae_a",
    milestone: "Onagraceae",
    manualPage: 338,
    descripcion: "Onagraceae - A: persistencia del cáliz y prolongación del receptáculo",
    opcionA: {
      label: "Cáliz persistente; receptáculo no prolongado por encima del ovario",
      keyStep: "A",
      nextNodeId: "jussiaea_a",
    },
    opcionA_prima: {
      label: "Cáliz caduco; receptáculo prolongado por encima del ovario, formando un tubo o hipanto",
      keyStep: "A'",
      nextNodeId: "onagraceae_b",
    },
  },
  onagraceae_b: {
    id: "onagraceae_b",
    milestone: "Onagraceae",
    manualPage: 338,
    descripcion: "Onagraceae - B: pelos en las semillas",
    opcionA: {
      label: "Semillas con un mechón de pelos en uno de sus extremos",
      keyStep: "B",
      especieId: "epilobium_brasiliense",
    },
    opcionA_prima: {
      label: "Semillas sin mechón de pelos",
      keyStep: "B'",
      nextNodeId: "oenothera_a",
    },
  },
  oenothera_a: {
    id: "oenothera_a",
    milestone: "Oenothera",
    manualPage: 339,
    descripcion: "Oenothera - A: color de las flores",
    opcionA: {
      label: "Flores rosadas o blancas",
      keyStep: "A",
      nextNodeId: "oenothera_b",
    },
    opcionA_prima: {
      label: "Flores amarillas; hojas dentadas",
      keyStep: "A'",
      nextNodeId: "oenothera_c",
    },
  },
  oenothera_b: {
    id: "oenothera_b",
    milestone: "Oenothera",
    manualPage: 339,
    descripcion: "Oenothera - B: pétalos rosados o blancos",
    opcionA: {
      label: "Pétalos rosados o violáceos, de 5-10 mm; hojas enteras o casi pinatífidas; flores pequeñas, con hipanto de 4-8 mm; cápsulas obovoideas, con 8 costillas",
      keyStep: "B",
      especieId: "oenothera_rosea",
    },
    opcionA_prima: {
      label: "Pétalos blancos, de 40 mm; hojas runcinadas o lirado-pinatífidas; flores axilares, solitarias; cápsulas elipsoideas, aladas",
      keyStep: "B'",
      especieId: "oenothera_centaurifolia",
    },
  },
  oenothera_c: {
    id: "oenothera_c",
    milestone: "Oenothera",
    manualPage: 340,
    descripcion: "Oenothera - C: tamaño de pétalos e hipanto",
    opcionA: {
      label: "Pétalos de 20-40 mm; hipanto de 30-100 mm",
      keyStep: "C",
      nextNodeId: "oenothera_d",
    },
    opcionA_prima: {
      label: "Pétalos de 3-20 mm; hipanto de 10-50 mm",
      keyStep: "C'",
      nextNodeId: "oenothera_e",
    },
  },
  oenothera_d: {
    id: "oenothera_d",
    milestone: "Oenothera",
    manualPage: 340,
    descripcion: "Oenothera - D: hojas caulinares",
    opcionA: {
      label: "Hojas caulinares lanceoladas, dentadas; flores grandes, con hipanto de 10 cm y pétalos de 25-35 mm",
      keyStep: "D",
      especieId: "oenothera_affinis",
    },
    opcionA_prima: {
      label: "Hojas caulinares oblongo-ovadas, sésiles y ensanchadas en la base, denticuladas; hipanto de 3-8 cm; pétalos de 2-4 cm",
      keyStep: "D'",
      especieId: "oenothera_longiflora",
    },
  },
  oenothera_e: {
    id: "oenothera_e",
    milestone: "Oenothera",
    manualPage: 340,
    descripcion: "Oenothera - E: ciclo y porte",
    opcionA: {
      label: "Hierbas anuales, erectas, pubescentes; hojas lanceoladas, dentadas; flores pequeñas; pétalos de 3-8 mm",
      keyStep: "E",
      especieId: "oenothera_indecora",
    },
    opcionA_prima: {
      label: "Hierbas bienales o perennes; pétalos de 8-20 mm; hipanto de 15-50 mm",
      keyStep: "E'",
      nextNodeId: "oenothera_f",
    },
  },
  oenothera_f: {
    id: "oenothera_f",
    milestone: "Oenothera",
    manualPage: 340,
    descripcion: "Oenothera - F: hojas florales",
    opcionA: {
      label: "Hojas florales ovadas, crespas, sésiles, cordiformes; hojas inferiores en roseta; hipanto de 15-35 mm; pétalos de 8-14 mm",
      keyStep: "F",
      especieId: "oenothera_parodiana",
    },
    opcionA_prima: {
      label: "Hojas florales lanceoladas, apenas crespas; hojas caulinares lanceoladas, blandamente pubescentes; hipanto de 2-5 cm; pétalos de 1-2 cm",
      keyStep: "F'",
      especieId: "oenothera_mollissima",
    },
  },
  jussiaea_a: {
    id: "jussiaea_a",
    milestone: "Jussiaea",
    manualPage: 338,
    descripcion: "Jussiaea - A: mería floral y disposición de semillas",
    opcionA: {
      label: "Flores 5-meras; semillas uniseriadas en cada lóculo de la cápsula; plantas flotantes o tendidas sobre el barro",
      keyStep: "A",
      nextNodeId: "jussiaea_b",
    },
    opcionA_prima: {
      label: "Flores generalmente 4-meras; semillas multiseriadas en cada lóculo de la cápsula; plantas erectas, más o menos elevadas",
      keyStep: "A'",
      nextNodeId: "jussiaea_c",
    },
  },
  jussiaea_b: {
    id: "jussiaea_b",
    milestone: "Jussiaea",
    manualPage: 338,
    descripcion: "Jussiaea - B: hojas florales y bracteolas",
    opcionA: {
      label: "Hojas de los tallos florales lanceoladas; bracteolas lanceoladas; hojas lanceoladas u oblanceoladas",
      keyStep: "B",
      especieId: "jussiaea_uruguayensis",
    },
    opcionA_prima: {
      label: "Hojas de los tallos florales oblongas u obovadas; bracteolas deltoideas; tallos tendidos o flotantes, radicantes en los nudos",
      keyStep: "B'",
      especieId: "jussiaea_repens_montevidensis",
    },
  },
  jussiaea_c: {
    id: "jussiaea_c",
    milestone: "Jussiaea",
    manualPage: 338,
    descripcion: "Jussiaea - C: forma de la cápsula y tamaño del rafe",
    opcionA: {
      label: "Cápsulas cilíndricas; semillas con rafe muy grande, casi igual al cuerpo de la semilla",
      keyStep: "C",
      especieId: "jussiaea_bonariensis",
    },
    opcionA_prima: {
      label: "Cápsulas obcónicas u obpiramidales; rafe mucho menor que el cuerpo de la semilla",
      keyStep: "C'",
      nextNodeId: "jussiaea_d",
    },
  },
  jussiaea_d: {
    id: "jussiaea_d",
    milestone: "Jussiaea",
    manualPage: 338,
    descripcion: "Jussiaea - D: longitud del estilo",
    opcionA: {
      label: "Estilo de 3-9 mm de largo, con estigma capitado grueso",
      keyStep: "D",
      especieId: "jussiaea_longifolia",
    },
    opcionA_prima: {
      label: "Estilo de 0,5-2 mm de largo",
      keyStep: "D'",
      nextNodeId: "jussiaea_e",
    },
  },
  jussiaea_e: {
    id: "jussiaea_e",
    milestone: "Jussiaea",
    manualPage: 338,
    descripcion: "Jussiaea - E: pubescencia de tallos y hojas",
    opcionA: {
      label: "Tallos y envés de las hojas hirsuto-pubescentes; hojas anchamente lanceoladas o elípticas, con nervaduras muy marcadas",
      keyStep: "E",
      especieId: "jussiaea_peruviana",
    },
    opcionA_prima: {
      label: "Tallos y hojas glabros, sólo los órganos jóvenes algo pubescentes; hojas elíptico-lanceoladas, agudas",
      keyStep: "E'",
      especieId: "jussiaea_elegans_intermedia",
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
      nextNodeId: "lentibulariaceae_terminal",
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
      nextNodeId: "bignoniaceae_a",
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
      nextNodeId: "scrophulariaceae_a",
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
      nextNodeId: "martyniaceae_terminal",
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
      nextNodeId: "scrophulariaceae_a",
    },
    opcionA_prima: {
      label: "Lóculos del ovario con dos óvulos, raramente más",
      keyStep: "I'",
      nextNodeId: "acanthaceae_a",
    },
  },
  dicot_group_e_j: {
    id: "dicot_group_e_j",
    milestone: "Grupo E",
    descripcion: "Grupo E - J: con fruto drupáceo o en coquitos, ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario 4-lobulado; estilo naciendo entre los cuatro lóbulos; corola notablemente bilabiada",
      keyStep: "J",
      nextNodeId: "labiatae_a",
    },
    opcionA_prima: {
      label: "Ovario no 4-lobulado, con estilo terminal; flores apenas bilabiadas",
      keyStep: "J'",
      nextNodeId: "verbenaceae_a",
    },
  },
  dicot_group_e_k: {
    id: "dicot_group_e_k",
    milestone: "Grupo E",
    descripcion: "Grupo E - K: con flores actinomorfas y ovario súpero, ¿hay látex abundante y ginostemio?",
    opcionA: {
      label: "Plantas con látex abundante; androceo y gineceo unidos formando ginostemio; polen en polinias",
      keyStep: "K",
      nextNodeId: "asclepiadaceae_a",
    },
    opcionA_prima: {
      label: "Plantas sin látex o con látex inconspicuo; androceo y gineceo no unidos en ginostemio; polen no en polinias",
      keyStep: "K'",
      nextNodeId: "dicot_group_e_l",
    },
  },
  asclepiadaceae_a: {
    id: "asclepiadaceae_a",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - A: hábito de la planta",
    opcionA: {
      label: "Plantas erectas",
      keyStep: "A",
      nextNodeId: "asclepiadaceae_b",
    },
    opcionA_prima: {
      label: "Plantas volubles",
      keyStep: "A'",
      nextNodeId: "asclepiadaceae_d",
    },
  },
  asclepiadaceae_b: {
    id: "asclepiadaceae_b",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - B: tipo de corona en plantas erectas",
    opcionA: {
      label: "Corona simple",
      keyStep: "B",
      nextNodeId: "asclepiadaceae_c",
    },
    opcionA_prima: {
      label: "Corona doble; caudículas sin diente",
      keyStep: "B'",
      especieId: "asclepias_mellodora",
    },
  },
  asclepiadaceae_c: {
    id: "asclepiadaceae_c",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - C: presencia de diente en las caudículas",
    opcionA: {
      label: "Caudículas con un diente en su parte superior",
      keyStep: "C",
      nextNodeId: "oxypetalum_a",
    },
    opcionA_prima: {
      label: "Caudículas sin diente",
      keyStep: "C'",
      especieId: "amblyopetalum_coccineum",
    },
  },
  asclepiadaceae_d: {
    id: "asclepiadaceae_d",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - D: presencia de tubo en la corona",
    opcionA: {
      label: "Corona formando un tubo en su parte inferior",
      keyStep: "D",
      nextNodeId: "asclepiadaceae_e",
    },
    opcionA_prima: {
      label: "Corona sin tubo, con lóbulos libres o apenas soldados en la base",
      keyStep: "D'",
      nextNodeId: "asclepiadaceae_g",
    },
  },
  asclepiadaceae_e: {
    id: "asclepiadaceae_e",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - E: tamaño de las flores",
    opcionA: {
      label: "Flores diminutas, con corola no mayor de 5 mm de diámetro",
      keyStep: "E",
      especieId: "cynanchum_bonariense",
    },
    opcionA_prima: {
      label: "Flores medianas o grandes, con corola de más de 10 mm de diámetro",
      keyStep: "E'",
      nextNodeId: "asclepiadaceae_f",
    },
  },
  asclepiadaceae_f: {
    id: "asclepiadaceae_f",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - F: retináculo y unión del tubo de la corona",
    opcionA: {
      label: "Retináculo con apéndice membranáceo superior; tubo de la corona soldado a la corola",
      keyStep: "F",
      nextNodeId: "araujia_a",
    },
    opcionA_prima: {
      label: "Retináculo sin apéndice; tubo de la corona no soldado a la corola",
      keyStep: "F'",
      nextNodeId: "morrenia_a",
    },
  },
  asclepiadaceae_g: {
    id: "asclepiadaceae_g",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - G: apéndices estigmáticos del ginostegio",
    opcionA: {
      label: "Ginostegio terminado en uno o más apéndices estigmáticos",
      keyStep: "G",
      nextNodeId: "asclepiadaceae_h",
    },
    opcionA_prima: {
      label: "Ginostegio superiormente plano, sin apéndices estigmáticos",
      keyStep: "G'",
      nextNodeId: "asclepiadaceae_j",
    },
  },
  asclepiadaceae_h: {
    id: "asclepiadaceae_h",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - H: forma de las caudículas",
    opcionA: {
      label: "Caudículas dilatadas en forma de membrana transparente y con un diente superior",
      keyStep: "H",
      nextNodeId: "oxypetalum_a",
    },
    opcionA_prima: {
      label: "Caudículas no dilatadas, sin diente",
      keyStep: "H'",
      nextNodeId: "asclepiadaceae_i",
    },
  },
  asclepiadaceae_i: {
    id: "asclepiadaceae_i",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - I: forma del apéndice estigmático",
    opcionA: {
      label: "Apéndices estigmáticos largos, filiformes",
      keyStep: "I",
      especieId: "schistogyne_sylvestris",
    },
    opcionA_prima: {
      label: "Apéndice estigmático corto, grueso, entero o dividido",
      keyStep: "I'",
      especieId: "philibertia_gilliesii_gracilis",
    },
  },
  asclepiadaceae_j: {
    id: "asclepiadaceae_j",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - J: tipo de corona sin apéndices estigmáticos",
    opcionA: {
      label: "Corona doble, con segmentos cuculados",
      keyStep: "J",
      especieId: "funastrum_flavum",
    },
    opcionA_prima: {
      label: "Corona simple, con segmentos planos",
      keyStep: "J'",
      nextNodeId: "asclepiadaceae_k",
    },
  },
  asclepiadaceae_k: {
    id: "asclepiadaceae_k",
    milestone: "Asclepiadaceae",
    manualPage: 369,
    descripcion: "Asclepiadaceae - K: tamaño de hojas e inserción de la corona",
    opcionA: {
      label: "Hojas grandes; lóbulos de la corona anchos, insertos en el tubo de la corola",
      keyStep: "K",
      especieId: "roulinia_montevidensis",
    },
    opcionA_prima: {
      label: "Hojas pequeñas, caducas; corona de lóbulos lineales, inserta en la base del ginostegio",
      keyStep: "K'",
      especieId: "metastelma_virgatum",
    },
  },
  oxypetalum_a: {
    id: "oxypetalum_a",
    milestone: "Oxypetalum",
    manualPage: 369,
    descripcion: "Oxypetalum - A: hábito de la planta",
    opcionA: {
      label: "Plantas erectas",
      keyStep: "A",
      nextNodeId: "oxypetalum_b",
    },
    opcionA_prima: {
      label: "Planta voluble; hojas largamente pecioladas; flores en corimbos paucifloros axilares; caudículas con diente grande",
      keyStep: "A'",
      especieId: "oxypetalum_balansae",
    },
  },
  oxypetalum_b: {
    id: "oxypetalum_b",
    milestone: "Oxypetalum",
    manualPage: 369,
    descripcion: "Oxypetalum - B: diente de las caudículas",
    opcionA: {
      label: "Caudículas con diente grande, bien visible",
      keyStep: "B",
      nextNodeId: "oxypetalum_c",
    },
    opcionA_prima: {
      label: "Caudículas sin diente; hojas ovado-acorazonadas; flores en umbelas terminales",
      keyStep: "B'",
      especieId: "oxypetalum_atropurpureum",
    },
  },
  oxypetalum_c: {
    id: "oxypetalum_c",
    milestone: "Oxypetalum",
    manualPage: 369,
    descripcion: "Oxypetalum - C: disposición de las flores",
    opcionA: {
      label: "Flores en seudocorimbos terminales y axilares; corola rosado fuerte, de unos 10 mm",
      keyStep: "C",
      especieId: "oxypetalum_solanoides",
    },
    opcionA_prima: {
      label: "Flores en umbelas terminales; corola rosada, con tubo de 2 mm y lóbulos de 5-7 mm",
      keyStep: "C'",
      especieId: "oxypetalum_pratense",
    },
  },
  araujia_a: {
    id: "araujia_a",
    milestone: "Araujia",
    manualPage: 371,
    descripcion: "Araujia - A: posición de los segmentos del cáliz",
    opcionA: {
      label: "Segmentos del cáliz no reflejos; corola blanca o rosada, de unos 15 mm",
      keyStep: "A",
      especieId: "araujia_hortorum",
    },
    opcionA_prima: {
      label: "Segmentos del cáliz reflejos, lanceolados; corola de 22-24 mm en total",
      keyStep: "A'",
      especieId: "araujia_angustifolia",
    },
  },
  morrenia_a: {
    id: "morrenia_a",
    milestone: "Morrenia",
    manualPage: 372,
    descripcion: "Morrenia - A: tamaño de flores y folículos",
    opcionA: {
      label: "Flores pequeñas; corona de 2-3 mm; folículos rugosos de 6-7 cm",
      keyStep: "A",
      especieId: "morrenia_brachystephana",
    },
    opcionA_prima: {
      label: "Flores mayores; corona de cerca de 8 mm; folículos lisos de 8-14 cm",
      keyStep: "A'",
      especieId: "morrenia_odorata",
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
      nextNodeId: "nyctaginaceae_a",
    },
    opcionA_prima: {
      label: "Hojas alternas, compuestas; estambres 5 a numerosos",
      keyStep: "M'",
      nextNodeId: "leguminosae_a",
    },
  },
  nyctaginaceae_a: {
    id: "nyctaginaceae_a",
    milestone: "Nyctaginaceae",
    manualPage: 194,
    descripcion: "Nyctaginaceae - A: porte de la planta, tamaño de flores e involucro",
    opcionA: {
      label: "Plantas rastreras con flores diminutas; flores sin involucro calicoide",
      keyStep: "A",
      especieId: "boerhavia_paniculata_leiocarpa",
    },
    opcionA_prima: {
      label: "Plantas erectas, con flores grandes; existe un involucro caliciforme",
      keyStep: "A'",
      especieId: "mirabilis_jalapa",
    },
  },
  phytolaccaceae_a: {
    id: "phytolaccaceae_a",
    milestone: "Phytolaccaceae",
    manualPage: 195,
    descripcion: "Phytolaccaceae - A: tipo de ovario",
    opcionA: {
      label: "Ovario multicarpelar",
      keyStep: "A",
      nextNodeId: "phytolacca_a",
    },
    opcionA_prima: {
      label: "Ovario unicarpelar, uniovulado",
      keyStep: "A'",
      especieId: "rivina_humilis_glabra",
    },
  },
  phytolacca_a: {
    id: "phytolacca_a",
    milestone: "Phytolacca",
    manualPage: 195,
    descripcion: "Phytolacca - A: sexualidad de las flores y unión de los carpelos",
    opcionA: {
      label: "Flores hermafroditas; carpelos completamente soldados durante la floración; sufrútices de 1,5 m; racimos erectos; estambres 10; ovario 10-carpelar",
      keyStep: "A",
      especieId: "phytolacca_americana",
    },
    opcionA_prima: {
      label: "Flores dioicas; carpelos libres en la parte superior durante la floración",
      keyStep: "A'",
      nextNodeId: "phytolacca_b",
    },
  },
  phytolacca_b: {
    id: "phytolacca_b",
    milestone: "Phytolacca",
    manualPage: 195,
    descripcion: "Phytolacca - B: número de piezas del perigonio y hábito",
    opcionA: {
      label: "Perigonio pentámero; árboles; hojas pecioladas, anchamente elípticas y glabras; flores en racimos péndulos; estambres 20-30",
      keyStep: "B",
      especieId: "phytolacca_dioica",
    },
    opcionA_prima: {
      label: "Perigonio tetrámero; hierba perenne dioica; hojas crasas, glabras, oblanceoladas y obtusas; estambres 20",
      keyStep: "B'",
      especieId: "phytolacca_tetramera",
    },
  },
  aizoaceae_a: {
    id: "aizoaceae_a",
    milestone: "Aizoaceae",
    manualPage: 197,
    descripcion: "Aizoaceae - A: posición del ovario y estaminodios",
    opcionA: {
      label: "Ovario ínfero; estaminodios petaliformes numerosos y llamativos",
      keyStep: "A",
      especieId: "aptenia_cordifolia",
    },
    opcionA_prima: {
      label: "Ovario súpero; estaminodios petaliformes ausentes",
      keyStep: "A'",
      nextNodeId: "aizoaceae_b",
    },
  },
  aizoaceae_b: {
    id: "aizoaceae_b",
    milestone: "Aizoaceae",
    manualPage: 197,
    descripcion: "Aizoaceae - B: pubescencia de los sépalos",
    opcionA: {
      label: "Sépalos tomentosos",
      keyStep: "B",
      especieId: "glinus_radiatus",
    },
    opcionA_prima: {
      label: "Sépalos glabros",
      keyStep: "B'",
      nextNodeId: "aizoaceae_c",
    },
  },
  aizoaceae_c: {
    id: "aizoaceae_c",
    milestone: "Aizoaceae",
    manualPage: 197,
    descripcion: "Aizoaceae - C: disposición de las hojas",
    opcionA: {
      label: "Hojas verticiladas",
      keyStep: "C",
      especieId: "mollugo_verticillata",
    },
    opcionA_prima: {
      label: "Hojas opuestas",
      keyStep: "C'",
      especieId: "sesuvium_portulacastrum",
    },
  },
  dicot_group_e_n: {
    id: "dicot_group_e_n",
    milestone: "Grupo E",
    descripcion: "Grupo E - N: con filamentos unidos a la corola, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres muy numerosos",
      keyStep: "N",
      nextNodeId: "symplocaceae_terminal",
    },
    opcionA_prima: {
      label: "Estambres 2-12",
      keyStep: "N'",
      nextNodeId: "dicot_group_e_o",
    },
  },
  symplocaceae_terminal: {
    id: "symplocaceae_terminal",
    milestone: "Symplocaceae",
    manualPage: 362,
    descripcion: "Symplocaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Symplocos uniflora",
      keyStep: "1",
      especieId: "symplocos_uniflora",
    },
    opcionA_prima: {
      label: "Identificar como Symplocos uniflora",
      keyStep: "1",
      especieId: "symplocos_uniflora",
    },
    especie: manualFamilyData.symplocos_uniflora,
  },
  dicot_group_e_o: {
    id: "dicot_group_e_o",
    milestone: "Grupo E",
    descripcion: "Grupo E - O: ¿cómo se relaciona el número de estambres con las divisiones del perigonio o corola?",
    opcionA: {
      label: "Estambres en número doble a las divisiones del perigonio",
      keyStep: "O",
      nextNodeId: "thymelaeaceae_terminal",
    },
    opcionA_prima: {
      label: "Estambres en el mismo número que las divisiones de la corola",
      keyStep: "O'",
      nextNodeId: "dicot_group_e_p",
    },
  },
  thymelaeaceae_terminal: {
    id: "thymelaeaceae_terminal",
    milestone: "Thymelaeaceae",
    manualPage: 330,
    descripcion: "Thymelaeaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Daphnopsis racemosa",
      keyStep: "1",
      especieId: "daphnopsis_racemosa",
    },
    opcionA_prima: {
      label: "Identificar como Daphnopsis racemosa",
      keyStep: "1",
      especieId: "daphnopsis_racemosa",
    },
    especie: manualFamilyData.daphnopsis_racemosa,
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
      nextNodeId: "myrsinaceae_a",
    },
    opcionA_prima: {
      label: "Ovario 4-locular",
      keyStep: "R'",
      nextNodeId: "sapotaceae_terminal",
    },
  },
  sapotaceae_terminal: {
    id: "sapotaceae_terminal",
    milestone: "Sapotaceae",
    manualPage: 361,
    descripcion: "Sapotaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Pouteria salicifolia",
      keyStep: "1",
      especieId: "pouteria_salicifolia",
    },
    opcionA_prima: {
      label: "Identificar como Pouteria salicifolia",
      keyStep: "1",
      especieId: "pouteria_salicifolia",
    },
    especie: manualFamilyData.pouteria_salicifolia,
  },
  myrsinaceae_a: {
    id: "myrsinaceae_a",
    milestone: "Myrsinaceae",
    manualPage: 356,
    descripcion: "Rapanea - A: tipo de inflorescencia y color de hojas secas",
    opcionA: {
      label: "Flores en racimos cortos, con eje conspicuo; hojas verdes al secarse, cortamente pecioladas, oblanceoladas, obtusas, enteras y glabras; corolas de sólo 2,5 mm",
      keyStep: "A",
      especieId: "rapanea_laetevirens",
    },
    opcionA_prima: {
      label: "Flores en umbelas densas; hojas castañas al secarse",
      keyStep: "A'",
      especieId: "rapanea_lorentziana",
    },
  },
  dicot_group_e_s: {
    id: "dicot_group_e_s",
    milestone: "Grupo E",
    descripcion: "Grupo E - S: en hierbas, ¿cuántos óvulos hay?",
    opcionA: {
      label: "Óvulos numerosos",
      keyStep: "S",
      nextNodeId: "primulaceae_a",
    },
    opcionA_prima: {
      label: "Óvulo solitario",
      keyStep: "S'",
      nextNodeId: "plumbaginaceae_terminal",
    },
  },
  primulaceae_a: {
    id: "primulaceae_a",
    milestone: "Primulaceae",
    manualPage: 356,
    descripcion: "Primulaceae - A: posición de flores y ovario",
    opcionA: {
      label: "Flores en racimos o corimbos terminales; ovario semi-ínfero",
      keyStep: "A",
      especieId: "samolus_valerandi",
    },
    opcionA_prima: {
      label: "Flores solitarias en las axilas de las hojas; ovario súpero",
      keyStep: "A'",
      nextNodeId: "primulaceae_b",
    },
  },
  primulaceae_b: {
    id: "primulaceae_b",
    milestone: "Primulaceae",
    manualPage: 356,
    descripcion: "Primulaceae - B: dehiscencia de la cápsula",
    opcionA: {
      label: "Cápsula de dehiscencia transversal (pixidio)",
      keyStep: "B",
      nextNodeId: "primulaceae_c",
    },
    opcionA_prima: {
      label: "Cápsula de dehiscencia valvar",
      keyStep: "B'",
      especieId: "pelletiera_verna",
    },
  },
  primulaceae_c: {
    id: "primulaceae_c",
    milestone: "Primulaceae",
    manualPage: 356,
    descripcion: "Primulaceae - C: inserción de estambres y tamaño relativo de corola",
    opcionA: {
      label: "Estambres fijos en la base de la corola, que es mayor que el cáliz",
      keyStep: "C",
      nextNodeId: "anagallis_a",
    },
    opcionA_prima: {
      label: "Estambres fijos en la fauce de la corola, que es menor que el cáliz",
      keyStep: "C'",
      especieId: "centunculus_minimus",
    },
  },
  anagallis_a: {
    id: "anagallis_a",
    milestone: "Anagallis",
    manualPage: 358,
    descripcion: "Anagallis arvensis - color de la corola",
    opcionA: {
      label: "Corola de color minio",
      keyStep: "1",
      especieId: "anagallis_arvensis",
    },
    opcionA_prima: {
      label: "Flores de color azul oscuro",
      keyStep: "1a",
      especieId: "anagallis_arvensis_coerulea",
    },
  },
  plumbaginaceae_terminal: {
    id: "plumbaginaceae_terminal",
    milestone: "Plumbaginaceae",
    manualPage: 359,
    descripcion: "Plumbaginaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Limonium brasiliense",
      keyStep: "1",
      especieId: "limonium_brasiliense",
    },
    opcionA_prima: {
      label: "Identificar como Limonium brasiliense",
      keyStep: "1",
      especieId: "limonium_brasiliense",
    },
    especie: manualFamilyData.limonium_brasiliense,
  },
  dicot_group_e_t: {
    id: "dicot_group_e_t",
    milestone: "Grupo E",
    descripcion: "Grupo E - T: con estambres alternos con los pétalos, ¿cuántos estambres hay?",
    opcionA: {
      label: "Estambres 2",
      keyStep: "T",
      nextNodeId: "oleaceae_terminal",
    },
    opcionA_prima: {
      label: "Estambres 4-5",
      keyStep: "T'",
      nextNodeId: "dicot_group_e_u",
    },
  },
  oleaceae_terminal: {
    id: "oleaceae_terminal",
    milestone: "Oleaceae",
    manualPage: 362,
    descripcion: "Oleaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Ligustrum lucidum",
      keyStep: "1",
      especieId: "ligustrum_lucidum",
    },
    opcionA_prima: {
      label: "Identificar como Ligustrum lucidum",
      keyStep: "1",
      especieId: "ligustrum_lucidum",
    },
    especie: manualFamilyData.ligustrum_lucidum,
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
      nextNodeId: "apocynaceae_terminal",
    },
    opcionA_prima: {
      label: "Gineceo constituido por un solo ovario",
      keyStep: "V'",
      nextNodeId: "dicot_group_e_w",
    },
  },
  apocynaceae_terminal: {
    id: "apocynaceae_terminal",
    milestone: "Apocynaceae",
    manualPage: 368,
    descripcion: "Apocynaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Vinca major",
      keyStep: "1",
      especieId: "vinca_major",
    },
    opcionA_prima: {
      label: "Identificar como Vinca major",
      keyStep: "1",
      especieId: "vinca_major",
    },
    especie: manualFamilyData.vinca_major,
  },
  dicot_group_e_w: {
    id: "dicot_group_e_w",
    milestone: "Grupo E",
    descripcion: "Grupo E - W: con un solo ovario, ¿cómo es el ovario?",
    opcionA: {
      label: "Ovario unilocular",
      keyStep: "W",
      nextNodeId: "gentianaceae_a",
    },
    opcionA_prima: {
      label: "Ovario 2-4-locular",
      keyStep: "W'",
      nextNodeId: "loganiaceae_a",
    },
  },
  gentianaceae_a: {
    id: "gentianaceae_a",
    milestone: "Gentianaceae",
    manualPage: 365,
    descripcion: "Gentianaceae - A: plantas terrestres o acuáticas",
    opcionA: {
      label: "Plantas terrestres",
      keyStep: "A",
      nextNodeId: "gentianaceae_b",
    },
    opcionA_prima: {
      label: "Plantas acuáticas, con hojas flotantes",
      keyStep: "A'",
      especieId: "limnanthemum_humboldtianum",
    },
  },
  gentianaceae_b: {
    id: "gentianaceae_b",
    milestone: "Gentianaceae",
    manualPage: 365,
    descripcion: "Gentianaceae - B: número de piezas florales",
    opcionA: {
      label: "Cáliz con 6-8 sépalos; lóbulos de la corola y estambres generalmente 8; hojas ovadas, opuestas, unidas por su base",
      keyStep: "B",
      especieId: "blackstonia_perfoliata",
    },
    opcionA_prima: {
      label: "Cáliz con 4-5 segmentos; lóbulos de la corola y estambres 4-5; hojas lineal-lanceoladas u oblongas",
      keyStep: "B'",
      nextNodeId: "gentianaceae_c",
    },
  },
  gentianaceae_c: {
    id: "gentianaceae_c",
    milestone: "Gentianaceae",
    manualPage: 365,
    descripcion: "Gentianaceae - C: forma de las anteras y número de flores",
    opcionA: {
      label: "Anteras espiraladas; flores generalmente numerosas",
      keyStep: "C",
      especieId: "centaurium_pulchellum",
    },
    opcionA_prima: {
      label: "Anteras rectas; flores 1-3",
      keyStep: "C'",
      especieId: "zygostigma_australe",
    },
  },
  loganiaceae_a: {
    id: "loganiaceae_a",
    milestone: "Loganiaceae",
    manualPage: 363,
    descripcion: "Loganiaceae - A: hábito e inflorescencia",
    opcionA: {
      label: "Sufrútices o arbustos; flores en cimas densas agrupadas en espigas, panojas o tirsos; cápsulas ovoideas",
      keyStep: "A",
      nextNodeId: "buddleja_a",
    },
    opcionA_prima: {
      label: "Hierbas; flores en espigas unilaterales; cápsulas bilobas",
      keyStep: "A'",
      especieId: "spigelia_humboldtiana",
    },
  },
  buddleja_a: {
    id: "buddleja_a",
    milestone: "Buddleja",
    manualPage: 363,
    descripcion: "Buddleja - A: largo del tubo de la corola",
    opcionA: {
      label: "Tubo de la corola tres veces más largo que el cáliz; cáliz de 6-7 mm; corola de unos 20 mm; tallos cuadrangulares",
      keyStep: "A",
      especieId: "buddleja_grandiflora",
    },
    opcionA_prima: {
      label: "Tubo de la corola a lo más de dos veces la longitud del cáliz",
      keyStep: "A'",
      nextNodeId: "buddleja_b",
    },
  },
  buddleja_b: {
    id: "buddleja_b",
    milestone: "Buddleja",
    manualPage: 363,
    descripcion: "Buddleja - B: forma de hojas y base connata",
    opcionA: {
      label: "Hojas rómbico-ovadas, connatas en la base por dos pequeñas aurículas, crenado-dentadas; flores en espiga interrumpida de glomérulos; corola amarilla",
      keyStep: "B",
      especieId: "buddleja_stachyoides",
    },
    opcionA_prima: {
      label: "Hojas lanceoladas o lineal-lanceoladas, no connatas en la base; inflorescencia en tirso de cimas",
      keyStep: "B'",
      nextNodeId: "buddleja_c",
    },
  },
  buddleja_c: {
    id: "buddleja_c",
    milestone: "Buddleja",
    manualPage: 363,
    descripcion: "Buddleja - C: ancho y forma de hojas",
    opcionA: {
      label: "Hojas lineal-lanceoladas, largamente atenuadas en ápice y base, sésiles, uniformemente aserradas; corola blanca de 6-7 mm",
      keyStep: "C",
      especieId: "buddleja_thyrsoides",
    },
    opcionA_prima: {
      label: "Hojas oblongo-lanceoladas, agudas en el ápice y atenuadas en la base, crenadas en la parte superior o enteras; corola blanca de 5-6 mm",
      keyStep: "C'",
      especieId: "buddleja_elegans",
    },
  },
  dicot_group_e_x: {
    id: "dicot_group_e_x",
    milestone: "Grupo E",
    descripcion: "Grupo E - X: con hojas alternas o en roseta basal, ¿cómo son las flores?",
    opcionA: {
      label: "Flores tetrámeras; corola membranosa, poco llamativa; hojas en roseta; flores en espigas",
      keyStep: "X",
      nextNodeId: "plantago_a",
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
      nextNodeId: "hydrophyllaceae_terminal",
    },
    opcionA_prima: {
      label: "Estilo indiviso o cortamente bilobado",
      keyStep: "Z'",
      nextNodeId: "boraginaceae_a",
    },
  },
  hydrophyllaceae_terminal: {
    id: "hydrophyllaceae_terminal",
    milestone: "Hydrophyllaceae",
    manualPage: 385,
    descripcion: "Hydrophyllaceae: única especie citada por el manual para la región.",
    opcionA: {
      label: "Identificar como Phacelia artemisioides",
      keyStep: "1",
      especieId: "phacelia_artemisioides",
    },
    opcionA_prima: {
      label: "Identificar como Phacelia artemisioides",
      keyStep: "1",
      especieId: "phacelia_artemisioides",
    },
    especie: manualFamilyData.phacelia_artemisioides,
  },
  boraginaceae_a: {
    id: "boraginaceae_a",
    milestone: "Boraginaceae",
    manualPage: 385,
    descripcion: "Boraginaceae - A: posición del estilo y división del ovario",
    opcionA: {
      label: "Estilo terminal; ovario indiviso",
      keyStep: "A",
      nextNodeId: "boraginaceae_b",
    },
    opcionA_prima: {
      label: "Estilo ginobásico, inserto entre los cuatro lóbulos que forman el ovario",
      keyStep: "A'",
      nextNodeId: "boraginaceae_c",
    },
  },
  boraginaceae_b: {
    id: "boraginaceae_b",
    milestone: "Boraginaceae",
    manualPage: 385,
    descripcion: "Boraginaceae - B: hábito y división del estilo",
    opcionA: {
      label: "Arbustos; estilos divididos dos veces",
      keyStep: "B",
      especieId: "cordia_bifurcata",
    },
    opcionA_prima: {
      label: "Hierbas; estilo indiviso",
      keyStep: "B'",
      nextNodeId: "heliotropium_a",
    },
  },
  heliotropium_a: {
    id: "heliotropium_a",
    milestone: "Heliotropium",
    manualPage: 386,
    descripcion: "Heliotropium - A: pubescencia y porte",
    opcionA: {
      label: "Plantas glabras, con tallos ramosos desde la base, tendidos; hojas carnosas lineal-espatuladas",
      keyStep: "A",
      especieId: "heliotropium_curassavicum_argentinum",
    },
    opcionA_prima: {
      label: "Plantas hirsutas o glanduloso-pubescentes",
      keyStep: "A'",
      nextNodeId: "heliotropium_b",
    },
  },
  heliotropium_b: {
    id: "heliotropium_b",
    milestone: "Heliotropium",
    manualPage: 386,
    descripcion: "Heliotropium - B: hojas e inflorescencia",
    opcionA: {
      label: "Hojas sésiles y algo abrazadoras; flores violetas en 2-4 cimas escorpioides terminales",
      keyStep: "B",
      especieId: "heliotropium_amplexicaule",
    },
    opcionA_prima: {
      label: "Hojas pecioladas, ovado-lanceoladas; flores violetas en cincinios",
      keyStep: "B'",
      especieId: "heliotropium_nicotianaefolium",
    },
  },
  boraginaceae_c: {
    id: "boraginaceae_c",
    milestone: "Boraginaceae",
    manualPage: 385,
    descripcion: "Boraginaceae - C: simetría de la corola",
    opcionA: {
      label: "Corola muy cigomorfa, oblicua, más o menos infundibuliforme",
      keyStep: "C",
      especieId: "echium_plantagineum",
    },
    opcionA_prima: {
      label: "Corola actinomorfa",
      keyStep: "C'",
      nextNodeId: "boraginaceae_d",
    },
  },
  boraginaceae_d: {
    id: "boraginaceae_d",
    milestone: "Boraginaceae",
    manualPage: 385,
    descripcion: "Boraginaceae - D: color de las flores",
    opcionA: {
      label: "Flores amarillas o anaranjadas",
      keyStep: "D",
      especieId: "amsinckia_hispida",
    },
    opcionA_prima: {
      label: "Flores azules, purpúreas o blancas",
      keyStep: "D'",
      nextNodeId: "boraginaceae_e",
    },
  },
  boraginaceae_e: {
    id: "boraginaceae_e",
    milestone: "Boraginaceae",
    manualPage: 385,
    descripcion: "Boraginaceae - E: forma de la corola y exposición de estambres",
    opcionA: {
      label: "Corola rotácea; estambres muy exertos",
      keyStep: "E",
      especieId: "borago_officinalis",
    },
    opcionA_prima: {
      label: "Corola tubulosa o infundibuliforme",
      keyStep: "E'",
      nextNodeId: "boraginaceae_f",
    },
  },
  boraginaceae_f: {
    id: "boraginaceae_f",
    milestone: "Boraginaceae",
    manualPage: 386,
    descripcion: "Boraginaceae - F: superficie de las nuececitas y brácteas",
    opcionA: {
      label: "Nuececitas lisas; racimos sin brácteas; plantas con pelos blandos o glabras",
      keyStep: "F",
      especieId: "myosotis_laxa",
    },
    opcionA_prima: {
      label: "Nuececitas rugosas; racimos con brácteas",
      keyStep: "F'",
      nextNodeId: "boraginaceae_g",
    },
  },
  boraginaceae_g: {
    id: "boraginaceae_g",
    milestone: "Boraginaceae",
    manualPage: 386,
    descripcion: "Boraginaceae - G: tipo de pelos y escamas en la garganta de la corola",
    opcionA: {
      label: "Plantas con pelos tiesos; garganta de la corola con escamitas",
      keyStep: "G",
      especieId: "anchusa_officinalis",
    },
    opcionA_prima: {
      label: "Plantas con pelos tendidos; garganta de la corola sin escamitas",
      keyStep: "G'",
      especieId: "lithospermum_arvense",
    },
  },
  verbenaceae_a: {
    id: "verbenaceae_a",
    milestone: "Verbenaceae",
    manualPage: 389,
    descripcion: "Verbenaceae - A: tipo de fruto y hábito",
    opcionA: {
      label: "Fruto drupáceo; árboles o arbustos",
      keyStep: "A",
      nextNodeId: "verbenaceae_b",
    },
    opcionA_prima: {
      label: "Fruto seco, formado por 2-4 nuececillas monospermas; arbustos o hierbas",
      keyStep: "A'",
      nextNodeId: "verbenaceae_c",
    },
  },
  verbenaceae_b: {
    id: "verbenaceae_b",
    milestone: "Verbenaceae",
    manualPage: 391,
    descripcion: "Verbenaceae - B: pirenas de la drupa y simetría floral",
    opcionA: {
      label: "Drupas con dos pirenas, cada una con dos lóculos; flores casi actinomorfas, amarillentas o blancas; árboles elevados",
      keyStep: "B",
      especieId: "citharexylum_montevidense",
    },
    opcionA_prima: {
      label: "Drupas con una sola pirena bilocular, biseminada; flores cigomorfas, anaranjadas, rojas o violáceas; arbustos, a veces rastreros",
      keyStep: "B'",
      nextNodeId: "lantana_a",
    },
  },
  lantana_a: {
    id: "lantana_a",
    milestone: "Lantana",
    manualPage: 392,
    descripcion: "Lantana - A: porte, aguijones y color de flores",
    opcionA: {
      label: "Arbustos elevados de 2-3 m, con ramas cuadrangulares pubescentes y con aguijones; flores amarillas, anaranjadas o rojas",
      keyStep: "A",
      especieId: "lantana_glutinosa",
    },
    opcionA_prima: {
      label: "Arbustito achaparrado, de medio metro; hojas pequeñas crenado-aserradas; flores rosadas o violáceas",
      keyStep: "A'",
      especieId: "lantana_balansae",
    },
  },
  verbenaceae_c: {
    id: "verbenaceae_c",
    milestone: "Verbenaceae",
    manualPage: 391,
    descripcion: "Verbenaceae - C: número de nuececillas",
    opcionA: {
      label: "Frutos formados por 2 nuececillas",
      keyStep: "C",
      nextNodeId: "verbenaceae_d",
    },
    opcionA_prima: {
      label: "Frutos formados por 4 nuececillas; tallos cuadrangulares",
      keyStep: "C'",
      nextNodeId: "verbenaceae_f",
    },
  },
  verbenaceae_d: {
    id: "verbenaceae_d",
    milestone: "Verbenaceae",
    manualPage: 391,
    descripcion: "Verbenaceae - D: forma de la inflorescencia en frutos de 2 nuececillas",
    opcionA: {
      label: "Flores dispuestas en largas seudo-espigas; arbustos",
      keyStep: "D",
      especieId: "aloysia_lycioides",
    },
    opcionA_prima: {
      label: "Flores dispuestas en inflorescencias muy contraídas, capituliformes",
      keyStep: "D'",
      nextNodeId: "verbenaceae_e",
    },
  },
  verbenaceae_e: {
    id: "verbenaceae_e",
    milestone: "Verbenaceae",
    manualPage: 391,
    descripcion: "Verbenaceae - E: hábito en inflorescencias capituliformes",
    opcionA: {
      label: "Arbustos más o menos erectos",
      keyStep: "E",
      especieId: "lippia_alba",
    },
    opcionA_prima: {
      label: "Hierbas rastreras",
      keyStep: "E'",
      especieId: "phyla_nodiflora_canescens",
    },
  },
  verbenaceae_f: {
    id: "verbenaceae_f",
    milestone: "Verbenaceae",
    manualPage: 391,
    descripcion: "Verbenaceae - F: tipo de inflorescencia y forma de la corola",
    opcionA: {
      label: "Inflorescencia formada por una panoja de numerosas espigas; corola infundibuliforme; estilo hasta tres veces más largo que el ovario",
      keyStep: "F",
      nextNodeId: "verbena_a",
    },
    opcionA_prima: {
      label: "Inflorescencia formada por sólo 1-3 espigas; corola hipocraterimorfa; estilo varias veces más largo que el ovario",
      keyStep: "F'",
      nextNodeId: "glandularia_a",
    },
  },
  verbena_a: {
    id: "verbena_a",
    milestone: "Verbena",
    manualPage: 394,
    descripcion: "Verbena - A: división de hojas inferiores y grosor de espigas",
    opcionA: {
      label: "Hojas inferiores profundamente partidas o lobadas; espigas filiformes muy largas; cáliz de 1,5 mm; corola azulada de 2-2,5 mm",
      keyStep: "A",
      especieId: "verbena_gracilescens",
    },
    opcionA_prima: {
      label: "Hojas dentadas o aserradas; espigas más gruesas; flores de 3 mm o más",
      keyStep: "A'",
      nextNodeId: "verbena_b",
    },
  },
  verbena_b: {
    id: "verbena_b",
    milestone: "Verbena",
    manualPage: 394,
    descripcion: "Verbena - B: longitud de flores y pelos glandulares del cáliz",
    opcionA: {
      label: "Flores de más de 6 mm; corola con tubo bien desarrollado; cáliz con pelos glandulares",
      keyStep: "B",
      nextNodeId: "verbena_c",
    },
    opcionA_prima: {
      label: "Flores de menos de 6 mm, con limbo de la corola poco desarrollado; cáliz sin pelos glandulares",
      keyStep: "B'",
      nextNodeId: "verbena_d",
    },
  },
  verbena_c: {
    id: "verbena_c",
    milestone: "Verbena",
    manualPage: 394,
    descripcion: "Verbena - C: longitud de la bráctea floral",
    opcionA: {
      label: "Brácteas florales de la misma longitud o apenas más largas que el cáliz; tallos glabrescentes, poco ramificados",
      keyStep: "C",
      especieId: "verbena_intermedia",
    },
    opcionA_prima: {
      label: "Bráctea floral mucho más larga que el cáliz; tallos cuadrangulares, escabroso-pubescentes",
      keyStep: "C'",
      especieId: "verbena_rigida",
    },
  },
  verbena_d: {
    id: "verbena_d",
    milestone: "Verbena",
    manualPage: 395,
    descripcion: "Verbena - D: base foliar y hábito de las espigas",
    opcionA: {
      label: "Hojas sésiles y semiabrazadoras en la base, oblanceoladas, agudas, aserradas en todo el margen; espigas cortas y gruesas",
      keyStep: "D",
      especieId: "verbena_bonariensis",
    },
    opcionA_prima: {
      label: "Hojas atenuadas en la base en seudopecíolo; tallos glabros o casi glabros; espigas alargadas",
      keyStep: "D'",
      nextNodeId: "verbena_e",
    },
  },
  verbena_e: {
    id: "verbena_e",
    milestone: "Verbena",
    manualPage: 395,
    descripcion: "Verbena - E: longitud floral",
    opcionA: {
      label: "Flores de unos 4,5 mm; tallos erectos, cuadrangulares y glabros; hojas lanceoladas profundamente aserradas",
      keyStep: "E",
      especieId: "verbena_brasiliensis",
    },
    opcionA_prima: {
      label: "Flores de 3-3,5 mm",
      keyStep: "E'",
      nextNodeId: "verbena_f",
    },
  },
  verbena_f: {
    id: "verbena_f",
    milestone: "Verbena",
    manualPage: 395,
    descripcion: "Verbena - F: largo de bráctea floral y aspereza de tallos",
    opcionA: {
      label: "Bráctea floral bastante más corta que el cáliz; cáliz apenas estrigoso; tallos glabros; hojas oblanceoladas u obovadas; espigas cortas",
      keyStep: "F",
      especieId: "verbena_montevidensis",
    },
    opcionA_prima: {
      label: "Bráctea floral tan larga como el cáliz; cáliz estrigoso; tallos glabros, ásperos en los ángulos; hojas lanceoladas; espigas largas",
      keyStep: "F'",
      especieId: "verbena_litoralis",
    },
  },
  glandularia_a: {
    id: "glandularia_a",
    milestone: "Glandularia",
    manualPage: 397,
    descripcion: "Glandularia - A: forma de las hojas",
    opcionA: {
      label: "Hojas aserrado-crenadas o lobadas",
      keyStep: "A",
      nextNodeId: "glandularia_b",
    },
    opcionA_prima: {
      label: "Hojas profundamente pinatisectas o bipinatisectas; flores azules o violáceas",
      keyStep: "A'",
      nextNodeId: "glandularia_d",
    },
  },
  glandularia_b: {
    id: "glandularia_b",
    milestone: "Glandularia",
    manualPage: 397,
    descripcion: "Glandularia - B: porte y color de flores",
    opcionA: {
      label: "Plantas rastreras; flores rojas o blancas",
      keyStep: "B",
      nextNodeId: "glandularia_c",
    },
    opcionA_prima: {
      label: "Plantas erectas; flores azules o violáceas; hojas pecioladas, ovado-lanceoladas, profundamente aserrado-crenadas",
      keyStep: "B'",
      especieId: "glandularia_megapotamica",
    },
  },
  glandularia_c: {
    id: "glandularia_c",
    milestone: "Glandularia",
    manualPage: 397,
    descripcion: "Glandularia - C: color de flores en plantas rastreras",
    opcionA: {
      label: "Flores rojas; hojas ovadas o lanceoladas, cortamente pecioladas; espiga terminal solitaria y corta",
      keyStep: "C",
      especieId: "glandularia_peruviana",
    },
    opcionA_prima: {
      label: "Flores blancas; hojas oblanceoladas, profundamente crenadas o lobadas; espigas terminales largas",
      keyStep: "C'",
      especieId: "glandularia_platensis",
    },
  },
  glandularia_d: {
    id: "glandularia_d",
    milestone: "Glandularia",
    manualPage: 397,
    descripcion: "Glandularia - D: comportamiento de las espigas",
    opcionA: {
      label: "Espigas densas, capituliformes, no alargándose a la madurez, agrupadas en cimas terminales; segmentos foliares de 1-3 mm",
      keyStep: "D",
      especieId: "glandularia_dissecta",
    },
    opcionA_prima: {
      label: "Espigas alargadas, al menos a la madurez, generalmente solitarias en el extremo de las ramas; segmentos foliares de 0,5-1 mm",
      keyStep: "D'",
      nextNodeId: "glandularia_e",
    },
  },
  glandularia_e: {
    id: "glandularia_e",
    milestone: "Glandularia",
    manualPage: 397,
    descripcion: "Glandularia - E: tamaño y contorno de las hojas pinatisectas",
    opcionA: {
      label: "Hojas de 1-3 cm, de contorno ovado, profundamente pinatisectas; segmentos bifurcados, estrechamente lineales",
      keyStep: "E",
      especieId: "glandularia_tenuisecta",
    },
    opcionA_prima: {
      label: "Hojas de 0,5-1 cm, de contorno ovado, profundamente pinatisectas, con segmentos lineales, agudos y bifurcados",
      keyStep: "E'",
      especieId: "glandularia_tenera",
    },
  },
  labiatae_a: {
    id: "labiatae_a",
    milestone: "Labiatae",
    manualPage: 398,
    descripcion: "Labiatae - A: número de estambres fértiles",
    opcionA: {
      label: "Estambres fértiles 2",
      keyStep: "A",
      nextNodeId: "labiatae_b",
    },
    opcionA_prima: {
      label: "Estambres fértiles 4",
      keyStep: "A'",
      nextNodeId: "labiatae_c",
    },
  },
  labiatae_b: {
    id: "labiatae_b",
    milestone: "Labiatae",
    manualPage: 398,
    descripcion: "Labiatae - B: forma de la corola y tecas de las anteras",
    opcionA: {
      label: "Corola notablemente bilabiada, con labio superior en forma de capuchón; anteras con una sola teca fértil",
      keyStep: "B",
      nextNodeId: "salvia_a",
    },
    opcionA_prima: {
      label: "Corola poco bilabiada, con labio superior casi plano; anteras con dos tecas fértiles; flores muy pequeñas",
      keyStep: "B'",
      especieId: "hedeoma_medium",
    },
  },
  salvia_a: {
    id: "salvia_a",
    milestone: "Salvia",
    manualPage: 399,
    descripcion: "Salvia - A: hábito de los tallos y largo del pecíolo",
    opcionA: {
      label: "Tallos rastreros, radicantes; hojas largamente pecioladas, ovado-circulares y cordadas",
      keyStep: "A",
      especieId: "salvia_procurrens",
    },
    opcionA_prima: {
      label: "Tallos erectos; hojas sésiles o cortamente pecioladas, con pecíolo siempre más corto que la lámina",
      keyStep: "A'",
      nextNodeId: "salvia_b",
    },
  },
  salvia_b: {
    id: "salvia_b",
    milestone: "Salvia",
    manualPage: 399,
    descripcion: "Salvia - B: hojas superiores y densidad de seudo-espigas",
    opcionA: {
      label: "Hojas superiores sésiles, anchamente ovadas y crenado-lobuladas; verticilastros en espiga laxa",
      keyStep: "B",
      especieId: "salvia_verbenaca",
    },
    opcionA_prima: {
      label: "Hojas superiores pecioladas; seudo-espigas densas",
      keyStep: "B'",
      nextNodeId: "salvia_c",
    },
  },
  salvia_c: {
    id: "salvia_c",
    milestone: "Salvia",
    manualPage: 399,
    descripcion: "Salvia - C: forma de las hojas",
    opcionA: {
      label: "Hojas lanceoladas, agudas, atenuadas y cortamente pecioladas en la base",
      keyStep: "C",
      especieId: "salvia_uliginosa",
    },
    opcionA_prima: {
      label: "Hojas deltoideo-ovadas, cortamente pecioladas, redondeadas en la base y profundamente aserradas",
      keyStep: "C'",
      especieId: "salvia_pallida",
    },
  },
  labiatae_c: {
    id: "labiatae_c",
    milestone: "Labiatae",
    manualPage: 398,
    descripcion: "Labiatae - C: hendidura del ovario y cicatriz de las nuececitas",
    opcionA: {
      label: "Ovario apenas hendido, con estilo imperfectamente ginobásico; nuececitas con cicatriz lateral; corola casi unilabiada",
      keyStep: "C",
      nextNodeId: "teucrium_a",
    },
    opcionA_prima: {
      label: "Ovario profundamente hendido, con estilo ginobásico; nuececitas con cicatriz basal; corolas bilabiadas o casi actinomorfas",
      keyStep: "C'",
      nextNodeId: "labiatae_d",
    },
  },
  teucrium_a: {
    id: "teucrium_a",
    milestone: "Teucrium",
    manualPage: 402,
    descripcion: "Teucrium - A: división foliar e inflorescencia",
    opcionA: {
      label: "Hojas inferiores bipinatisectas y superiores divididas en 3 lacinias lineales; flores solitarias axilares; corola blanca",
      keyStep: "A",
      especieId: "teucrium_cubense_laevigatum",
    },
    opcionA_prima: {
      label: "Hojas pecioladas, ovadas y aserradas; flores en largas espigas cilíndricas; corola rosada; cáliz globoso acrescente",
      keyStep: "A'",
      especieId: "teucrium_vesicarium",
    },
  },
  labiatae_d: {
    id: "labiatae_d",
    milestone: "Labiatae",
    manualPage: 399,
    descripcion: "Labiatae - D: simetría de la corola",
    opcionA: {
      label: "Corola 4-lobada, casi actinomorfa",
      keyStep: "D",
      nextNodeId: "mentha_a",
    },
    opcionA_prima: {
      label: "Corola bilabiada",
      keyStep: "D'",
      nextNodeId: "labiatae_e",
    },
  },
  mentha_a: {
    id: "mentha_a",
    milestone: "Mentha",
    manualPage: 402,
    descripcion: "Mentha - A: disposición de los verticilastros",
    opcionA: {
      label: "Flores en verticilastros globosos axilares, formando falsa espiga muy laxa; hojas pequeñas",
      keyStep: "A",
      especieId: "mentha_pulegium",
    },
    opcionA_prima: {
      label: "Flores en verticilastros agrupados en espigas más densas; hojas de 2-5 cm",
      keyStep: "A'",
      nextNodeId: "mentha_b",
    },
  },
  mentha_b: {
    id: "mentha_b",
    milestone: "Mentha",
    manualPage: 402,
    descripcion: "Mentha - B: pecíolo y tomento foliar",
    opcionA: {
      label: "Hojas sésiles, ovado-elípticas, algo acorazonadas en la base y canescente-tomentosas",
      keyStep: "B",
      especieId: "mentha_rotundifolia",
    },
    opcionA_prima: {
      label: "Hojas pecioladas, glabras o casi glabras",
      keyStep: "B'",
      nextNodeId: "mentha_c",
    },
  },
  mentha_c: {
    id: "mentha_c",
    milestone: "Mentha",
    manualPage: 402,
    descripcion: "Mentha - C: forma foliar, cáliz y corola",
    opcionA: {
      label: "Hojas ovadas, redondeadas en la base; espigas cilíndricas densas y cortas; cáliz hirsuto; corola pubescente",
      keyStep: "C",
      especieId: "mentha_aquatica",
    },
    opcionA_prima: {
      label: "Hojas elípticas, redondeadas o atenuadas en la base; espigas atenuadas arriba; cáliz glabro; corola rosada glabra",
      keyStep: "C'",
      especieId: "mentha_piperita",
    },
  },
  labiatae_e: {
    id: "labiatae_e",
    milestone: "Labiatae",
    manualPage: 399,
    descripcion: "Labiatae - E: forma del cáliz",
    opcionA: {
      label: "Cáliz bilabiado",
      keyStep: "E",
      nextNodeId: "labiatae_f",
    },
    opcionA_prima: {
      label: "Cáliz tubuloso",
      keyStep: "E'",
      nextNodeId: "labiatae_h",
    },
  },
  labiatae_f: {
    id: "labiatae_f",
    milestone: "Labiatae",
    manualPage: 399,
    descripcion: "Labiatae - F: labios del cáliz",
    opcionA: {
      label: "Labios del cáliz enteros",
      keyStep: "F",
      nextNodeId: "scutellaria_a",
    },
    opcionA_prima: {
      label: "Labio superior del cáliz 3-dentado; labio inferior bífido",
      keyStep: "F'",
      nextNodeId: "labiatae_g",
    },
  },
  scutellaria_a: {
    id: "scutellaria_a",
    milestone: "Scutellaria",
    manualPage: 403,
    descripcion: "Scutellaria - A: forma de las hojas",
    opcionA: {
      label: "Hojas hastadas, con un lóbulo a cada lado en la base; flores solitarias axilares",
      keyStep: "A",
      especieId: "scutellaria_racemosa",
    },
    opcionA_prima: {
      label: "Hojas ovado-deltoideas, pecioladas, semicordadas en la base y dentado-crenadas",
      keyStep: "A'",
      especieId: "scutellaria_platensis",
    },
  },
  labiatae_g: {
    id: "labiatae_g",
    milestone: "Labiatae",
    manualPage: 399,
    descripcion: "Labiatae - G: labio superior de la corola e inflorescencia",
    opcionA: {
      label: "Corola con labio superior en forma de capuchón; flores en espigas terminales",
      keyStep: "G",
      especieId: "prunella_vulgaris",
    },
    opcionA_prima: {
      label: "Corola con labio superior casi plano; flores en verticilos axilares",
      keyStep: "G'",
      especieId: "melissa_officinalis",
    },
  },
  labiatae_h: {
    id: "labiatae_h",
    milestone: "Labiatae",
    manualPage: 399,
    descripcion: "Labiatae - H: número de dientes del cáliz",
    opcionA: {
      label: "Cáliz con 10 dientes",
      keyStep: "H",
      nextNodeId: "labiatae_i",
    },
    opcionA_prima: {
      label: "Cáliz con 5 dientes",
      keyStep: "H'",
      nextNodeId: "labiatae_j",
    },
  },
  labiatae_i: {
    id: "labiatae_i",
    milestone: "Labiatae",
    manualPage: 399,
    descripcion: "Labiatae - I: igualdad de dientes del cáliz y color floral",
    opcionA: {
      label: "Dientes del cáliz iguales, subulados; flores blancas",
      keyStep: "I",
      especieId: "marrubium_vulgare",
    },
    opcionA_prima: {
      label: "Dientes del cáliz desiguales; flores anaranjadas",
      keyStep: "I'",
      especieId: "leonotis_nepetaefolia",
    },
  },
  labiatae_j: {
    id: "labiatae_j",
    milestone: "Labiatae",
    manualPage: 399,
    descripcion: "Labiatae - J: forma de la corola y posición de estambres",
    opcionA: {
      label: "Corola con labio superior casi plano y labio inferior con segmento medio en forma de saco; estambres apoyados sobre el labio inferior",
      keyStep: "J",
      nextNodeId: "hyptis_a",
    },
    opcionA_prima: {
      label: "Corola con labio superior en forma de capuchón y labio inferior casi plano; estambres ascendentes hacia el labio superior",
      keyStep: "J'",
      nextNodeId: "labiatae_k",
    },
  },
  hyptis_a: {
    id: "hyptis_a",
    milestone: "Hyptis",
    manualPage: 405,
    descripcion: "Hyptis - A: forma de los dientes del cáliz",
    opcionA: {
      label: "Dientes del cáliz triangulares, anchos",
      keyStep: "A",
      nextNodeId: "hyptis_b",
    },
    opcionA_prima: {
      label: "Dientes del cáliz subulados",
      keyStep: "A'",
      nextNodeId: "hyptis_c",
    },
  },
  hyptis_b: {
    id: "hyptis_b",
    milestone: "Hyptis",
    manualPage: 405,
    descripcion: "Hyptis - B: pedicelo y disposición floral",
    opcionA: {
      label: "Flores largamente pediceladas, en amplias panojas difusas; hojas estrechamente ovadas",
      keyStep: "B",
      especieId: "hyptis_floribunda",
    },
    opcionA_prima: {
      label: "Flores cortamente pediceladas, en verticilastros dispuestos en espigas densas reunidas en panojas; hojas ovado-lanceoladas",
      keyStep: "B'",
      especieId: "hyptis_fasciculata_fastigiata",
    },
  },
  hyptis_c: {
    id: "hyptis_c",
    milestone: "Hyptis",
    manualPage: 405,
    descripcion: "Hyptis - C: capítulos o verticilastros",
    opcionA: {
      label: "Flores en capítulos globosos, pedunculados, axilares; hojas ovado-lanceoladas y algo pubescentes",
      keyStep: "C",
      especieId: "hyptis_lappacea",
    },
    opcionA_prima: {
      label: "Flores en verticilastros agrupados en espigas interrumpidas; hojas anchamente ovadas, ásperas en el haz y pubescentes en el envés",
      keyStep: "C'",
      especieId: "hyptis_mutabilis",
    },
  },
  labiatae_k: {
    id: "labiatae_k",
    milestone: "Labiatae",
    manualPage: 399,
    descripcion: "Labiatae - K: división de las hojas",
    opcionA: {
      label: "Hojas pinatisectas",
      keyStep: "K",
      nextNodeId: "leonurus_a",
    },
    opcionA_prima: {
      label: "Hojas crenadas, aserradas o a lo más lobadas",
      keyStep: "K'",
      nextNodeId: "labiatae_l",
    },
  },
  leonurus_a: {
    id: "leonurus_a",
    milestone: "Leonurus",
    manualPage: 405,
    descripcion: "Leonurus - A: división de las hojas",
    opcionA: {
      label: "Hojas 3-5-palmatilobadas, con segmentos agudos y dentados; dientes del cáliz subulados, abiertos",
      keyStep: "A",
      especieId: "leonurus_cardiaca",
    },
    opcionA_prima: {
      label: "Hojas 3-5-palmatisectas, con segmentos divididos irregularmente",
      keyStep: "A'",
      especieId: "leonurus_sibiricus",
    },
  },
  labiatae_l: {
    id: "labiatae_l",
    milestone: "Labiatae",
    manualPage: 399,
    descripcion: "Labiatae - L: dientes del cáliz y ápice de las nuececitas",
    opcionA: {
      label: "Dientes del cáliz mucronados en el ápice; nuececitas redondeadas en el ápice",
      keyStep: "L",
      nextNodeId: "stachys_a",
    },
    opcionA_prima: {
      label: "Dientes del cáliz agudos, pero no mucronados; nuececitas truncadas en el ápice",
      keyStep: "L'",
      especieId: "lamium_amplexicaule",
    },
  },
  stachys_a: {
    id: "stachys_a",
    milestone: "Stachys",
    manualPage: 406,
    descripcion: "Stachys - A: largo de dientes del cáliz maduro",
    opcionA: {
      label: "Dientes del cáliz maduro de 1,5 mm; hojas de 2-5 cm; corola rosada con tubo de 2,5-3 mm",
      keyStep: "A",
      especieId: "stachys_micheliana",
    },
    opcionA_prima: {
      label: "Dientes del cáliz maduro de 2-3 mm; hojas de 2-3 cm; corola rosada con tubo de 3,5-5 mm",
      keyStep: "A'",
      especieId: "stachys_arvensis",
    },
  },
  solanaceae_a: {
    id: "solanaceae_a",
    milestone: "Solanaceae",
    manualPage: 406,
    descripcion: "Solanaceae - A: tipo de fruto",
    opcionA: {
      label: "Fruto baya o drupa",
      keyStep: "A",
      nextNodeId: "solanaceae_b",
    },
    opcionA_prima: {
      label: "Fruto cápsula",
      keyStep: "A'",
      nextNodeId: "solanaceae_h",
    },
  },
  solanaceae_b: {
    id: "solanaceae_b",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - B: cáliz acrescente en frutos carnosos",
    opcionA: {
      label: "Cáliz muy acrescente, envolviendo el fruto maduro en una vejiga membranosa",
      keyStep: "B",
      especieId: "physalis_viscosa",
    },
    opcionA_prima: {
      label: "Cáliz no acrescente",
      keyStep: "B'",
      nextNodeId: "solanaceae_c",
    },
  },
  solanaceae_c: {
    id: "solanaceae_c",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - C: tipo de corola en cáliz no acrescente",
    opcionA: {
      label: "Corola rotácea; anteras conniventes, formando un tubo alrededor del estilo",
      keyStep: "C",
      nextNodeId: "solanum_a",
    },
    opcionA_prima: {
      label: "Corola acampanada, infundibuliforme o tubulosa",
      keyStep: "C'",
      nextNodeId: "solanaceae_d",
    },
  },
  solanum_a: {
    id: "solanum_a",
    milestone: "Solanum",
    manualPage: 408,
    descripcion: "Solanum - A: presencia de tubérculos subterráneos",
    opcionA: {
      label: "Plantas con tubérculos subterráneos; hojas pinaticompuestas",
      keyStep: "A",
      nextNodeId: "solanum_b",
    },
    opcionA_prima: {
      label: "Plantas sin tubérculos; hojas enteras, dentadas, lobadas o pinatisectas",
      keyStep: "A'",
      nextNodeId: "solanum_c",
    },
  },
  solanum_b: {
    id: "solanum_b",
    milestone: "Solanum",
    manualPage: 408,
    descripcion: "Solanum - B: hojas en plantas tuberosas",
    opcionA: {
      label: "Hojas laxamente pilosas, imparipinaticompuestas, con 3-5 pares de segmentos ovados grandes alternando con segmentos diminutos",
      keyStep: "B",
      especieId: "solanum_chacoense",
    },
    opcionA_prima: {
      label: "Hojas profundamente imparipinatisectas, con lóbulo terminal muy grande y 2-3 pares de segmentos elípticos menores",
      keyStep: "B'",
      especieId: "solanum_commersonii",
    },
  },
  solanum_c: {
    id: "solanum_c",
    milestone: "Solanum",
    manualPage: 408,
    descripcion: "Solanum - C: presencia de aguijones",
    opcionA: {
      label: "Plantas con aguijones en tallos y hojas",
      keyStep: "C",
      nextNodeId: "solanum_d",
    },
    opcionA_prima: {
      label: "Plantas sin aguijones",
      keyStep: "C'",
      nextNodeId: "solanum_h",
    },
  },
  solanum_d: {
    id: "solanum_d",
    milestone: "Solanum",
    manualPage: 408,
    descripcion: "Solanum - D: hábito en plantas con aguijones",
    opcionA: {
      label: "Arbustos de 1,5 m, con aguijones en ramas jóvenes o sin ellos; pubescencia estrellada muy laxa; flores blancas terminales",
      keyStep: "D",
      especieId: "solanum_bonariense",
    },
    opcionA_prima: {
      label: "Hierbas o sufrútices; hojas y tallos adultos con aguijones; flores azules o blancas",
      keyStep: "D'",
      nextNodeId: "solanum_e",
    },
  },
  solanum_e: {
    id: "solanum_e",
    milestone: "Solanum",
    manualPage: 408,
    descripcion: "Solanum - E: división de las hojas en plantas aculeadas",
    opcionA: {
      label: "Hojas profundamente pinatisectas, con segmentos lobados y largos aguijones amarillos sobre las nervaduras",
      keyStep: "E",
      especieId: "solanum_sisymbriifolium",
    },
    opcionA_prima: {
      label: "Hojas enteras, sinuadas o sublobadas; flores pocas",
      keyStep: "E'",
      nextNodeId: "solanum_f",
    },
  },
  solanum_f: {
    id: "solanum_f",
    milestone: "Solanum",
    manualPage: 408,
    descripcion: "Solanum - F: porte en plantas aculeadas de hojas no partidas",
    opcionA: {
      label: "Sufrútice apoyante, con tallos cubiertos de aguijones rectos densos",
      keyStep: "F",
      especieId: "solanum_platense",
    },
    opcionA_prima: {
      label: "Hierbas o sufrútices erectos, menores",
      keyStep: "F'",
      nextNodeId: "solanum_g",
    },
  },
  solanum_g: {
    id: "solanum_g",
    milestone: "Solanum",
    manualPage: 408,
    descripcion: "Solanum - G: rizoma y largo de aguijones",
    opcionA: {
      label: "Sufrútice rizomatoso, erecto, cubierto de pelos estrellados, con aguijones amarillos cortos",
      keyStep: "G",
      especieId: "solanum_eleagnifolium",
    },
    opcionA_prima: {
      label: "Hierba perenne con raíces gemíferas, pelos estrellados y aguijones amarillos largos",
      keyStep: "G'",
      especieId: "solanum_meloncillo",
    },
  },
  solanum_h: {
    id: "solanum_h",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - H: división de las hojas en plantas sin aguijones",
    opcionA: {
      label: "Hojas profundamente partidas",
      keyStep: "H",
      nextNodeId: "solanum_i",
    },
    opcionA_prima: {
      label: "Hojas enteras, dentadas o lobadas",
      keyStep: "H'",
      nextNodeId: "solanum_l",
    },
  },
  solanum_i: {
    id: "solanum_i",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - I: tipo de inflorescencia en hojas partidas",
    opcionA: {
      label: "Flores en cimas o racimos extraaxilares paucifloros; plantas decumbentes",
      keyStep: "I",
      nextNodeId: "solanum_j",
    },
    opcionA_prima: {
      label: "Flores en cimas corimbiformes terminales plurifloras; plantas erectas o enredaderas",
      keyStep: "I'",
      nextNodeId: "solanum_k",
    },
  },
  solanum_j: {
    id: "solanum_j",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - J: tipo de hojas partidas en plantas decumbentes",
    opcionA: {
      label: "Hojas profundamente pinatisectas, con raquis lineal y segmentos lineales dispuestos en ángulo recto",
      keyStep: "J",
      especieId: "solanum_pyrethrifolium",
    },
    opcionA_prima: {
      label: "Hojas trisectas, con segmentos ovado-lanceolados y el central mayor",
      keyStep: "J'",
      especieId: "solanum_radicans",
    },
  },
  solanum_k: {
    id: "solanum_k",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - K: hojas partidas en plantas erectas o enredaderas",
    opcionA: {
      label: "Hojas profundamente pinatisectas, con segmento terminal lineal-lanceolado y segmentos laterales angostos",
      keyStep: "K",
      especieId: "solanum_angustifidum",
    },
    opcionA_prima: {
      label: "Hojas polimorfas: enteras, trífidas o pinatisectas; flores azul-violáceas; bayas negras",
      keyStep: "K'",
      especieId: "solanum_jasminoides",
    },
  },
  solanum_l: {
    id: "solanum_l",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - L: porte y tamaño en hojas no profundamente partidas",
    opcionA: {
      label: "Plantas decumbentes o ascendentes, de 10-20 cm; hojas pequeñas, ovadas, con 1-2 lóbulos cortos basales",
      keyStep: "L",
      especieId: "solanum_pygmaeum",
    },
    opcionA_prima: {
      label: "Plantas generalmente erectas o volubles, con hojas normalmente mayores",
      keyStep: "L'",
      nextNodeId: "solanum_m",
    },
  },
  solanum_m: {
    id: "solanum_m",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - M: hábito voluble o erecto",
    opcionA: {
      label: "Plantas volubles",
      keyStep: "M",
      nextNodeId: "solanum_n",
    },
    opcionA_prima: {
      label: "Plantas ascendentes o erectas",
      keyStep: "M'",
      nextNodeId: "solanum_o",
    },
  },
  solanum_n: {
    id: "solanum_n",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - N: tallos y hojas en plantas volubles",
    opcionA: {
      label: "Tallos apoyantes, muy angulosos, glabros; hojas lanceoladas, agudas, enteras y glabras",
      keyStep: "N",
      especieId: "solanum_amygdalifolium",
    },
    opcionA_prima: {
      label: "Tallos cilíndricos, pubescentes o glabros; hojas largamente pecioladas, ovadas y enteras",
      keyStep: "N'",
      especieId: "solanum_boerhaviaefolium",
    },
  },
  solanum_o: {
    id: "solanum_o",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - O: tipo de cima floral",
    opcionA: {
      label: "Flores solitarias o en cimas extraaxilares umbeliformes o corimbiformes paucifloras",
      keyStep: "O",
      nextNodeId: "solanum_p",
    },
    opcionA_prima: {
      label: "Flores en cimas seudoterminales plurifloras",
      keyStep: "O'",
      nextNodeId: "solanum_w",
    },
  },
  solanum_p: {
    id: "solanum_p",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - P: pedúnculo de las cimas y forma foliar",
    opcionA: {
      label: "Cimas largamente pedunculadas; hojas ovadas",
      keyStep: "P",
      nextNodeId: "solanum_q",
    },
    opcionA_prima: {
      label: "Cimas sésiles o subsésiles o flores solitarias; hojas lanceoladas o elíptico-lanceoladas",
      keyStep: "P'",
      nextNodeId: "solanum_v",
    },
  },
  solanum_q: {
    id: "solanum_q",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - Q: número y forma de flores en cimas",
    opcionA: {
      label: "Cimas corimbiformes 5-15-floras",
      keyStep: "Q",
      nextNodeId: "solanum_r",
    },
    opcionA_prima: {
      label: "Cimas generalmente umbeliformes, 2-5-floras",
      keyStep: "Q'",
      nextNodeId: "solanum_s",
    },
  },
  solanum_r: {
    id: "solanum_r",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - R: pecíolo y lóbulos foliares en cimas corimbiformes",
    opcionA: {
      label: "Hojas largamente pecioladas, ovadas, enteras o con 1-2 lóbulos basales; corola blanca",
      keyStep: "R",
      especieId: "solanum_basilobum",
    },
    opcionA_prima: {
      label: "Hojas pecioladas, ovadas, con 1-5 lóbulos a cada lado; corolas blanco-violáceas",
      keyStep: "R'",
      especieId: "solanum_pulchrilobum",
    },
  },
  solanum_s: {
    id: "solanum_s",
    milestone: "Solanum",
    manualPage: 409,
    descripcion: "Solanum - S: tallos glabros o pubescentes",
    opcionA: {
      label: "Tallos glabros, con dilataciones aliformes angostas; flores blancas; bayas con corpúsculos pétreos",
      keyStep: "S",
      especieId: "solanum_adventitium",
    },
    opcionA_prima: {
      label: "Tallos pubescentes, angulosos",
      keyStep: "S'",
      nextNodeId: "solanum_t",
    },
  },
  solanum_t: {
    id: "solanum_t",
    milestone: "Solanum",
    manualPage: 410,
    descripcion: "Solanum - T: tipo de pubescencia",
    opcionA: {
      label: "Tallos y hojas con pubescencia glandulosa; cáliz acrescente; bayas con corpúsculos pétreos",
      keyStep: "T",
      especieId: "solanum_sarachoides",
    },
    opcionA_prima: {
      label: "Tallos y hojas con pubescencia no glandulosa; cáliz no acrescente; bayas sin corpúsculos pétreos",
      keyStep: "T'",
      nextNodeId: "solanum_u",
    },
  },
  solanum_u: {
    id: "solanum_u",
    milestone: "Solanum",
    manualPage: 410,
    descripcion: "Solanum - U: forma de hojas en pubescencia no glandulosa",
    opcionA: {
      label: "Hojas ovado-lanceoladas, enteras o apenas sinuadas, densamente pubescentes",
      keyStep: "U",
      especieId: "solanum_gracile",
    },
    opcionA_prima: {
      label: "Hojas ovadas, con 1-3 lóbulos obtusos a cada lado cerca de la base",
      keyStep: "U'",
      especieId: "solanum_sublobatum",
    },
  },
  solanum_v: {
    id: "solanum_v",
    milestone: "Solanum",
    manualPage: 410,
    descripcion: "Solanum - V: pubescencia en ramas con flores sésiles o solitarias",
    opcionA: {
      label: "Plantas glabras; hojas lanceoladas, enteras; bayas grandes anaranjadas o rojas",
      keyStep: "V",
      especieId: "solanum_pseudocapsicum",
    },
    opcionA_prima: {
      label: "Plantas con pelos estrellados esparcidos en tallos y nervaduras; hojas ovado-lanceoladas; bayas rojas",
      keyStep: "V'",
      especieId: "solanum_diflorum",
    },
  },
  solanum_w: {
    id: "solanum_w",
    milestone: "Solanum",
    manualPage: 410,
    descripcion: "Solanum - W: forma foliar en cimas seudoterminales",
    opcionA: {
      label: "Hojas lanceoladas, cortamente pecioladas, enteras, glaucas; flores azules; bayas negro-azuladas",
      keyStep: "W",
      especieId: "solanum_glaucum",
    },
    opcionA_prima: {
      label: "Hojas ovadas o elípticas",
      keyStep: "W'",
      nextNodeId: "solanum_x",
    },
  },
  solanum_x: {
    id: "solanum_x",
    milestone: "Solanum",
    manualPage: 410,
    descripcion: "Solanum - X: porte y tomento",
    opcionA: {
      label: "Arbolitos de 4-6 m; ramitas y hojas densamente tomentosas; hojas grandes con pecíolo auriculado",
      keyStep: "X",
      especieId: "solanum_verbascifolium",
    },
    opcionA_prima: {
      label: "Arbustos de 1 m, glabros o con pelos estrellados esparcidos",
      keyStep: "X'",
      especieId: "solanum_bonariense",
    },
  },
  scrophulariaceae_a: {
    id: "scrophulariaceae_a",
    milestone: "Scrophulariaceae",
    manualPage: 419,
    descripcion: "Scrophulariaceae - A: simetría de corola y número de estambres",
    opcionA: {
      label: "Corola casi actinomorfa, rotada; estambres 5; hojas alternas",
      keyStep: "A",
      nextNodeId: "verbascum_a",
    },
    opcionA_prima: {
      label: "Corola cigomorfa; estambres fértiles 2-4; hojas al menos inferiores opuestas",
      keyStep: "A'",
      nextNodeId: "scrophulariaceae_b",
    },
  },
  verbascum_a: {
    id: "verbascum_a",
    milestone: "Verbascum",
    manualPage: 421,
    descripcion: "Verbascum - A: tipo de pubescencia",
    opcionA: {
      label: "Tallos, pedicelos y cáliz con pelos glandulosos simples; hojas casi glabras; cápsulas subglobosas",
      keyStep: "A",
      especieId: "verbascum_virgatum",
    },
    opcionA_prima: {
      label: "Tallos, pedicelos y cáliz muy pubescentes, con pelos estrellados y ramificados; hojas aterciopeladas",
      keyStep: "A'",
      especieId: "verbascum_thapsus",
    },
  },
  scrophulariaceae_b: {
    id: "scrophulariaceae_b",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - B: presencia de espolón",
    opcionA: {
      label: "Corola personada, con un espolón en su base",
      keyStep: "B",
      nextNodeId: "scrophulariaceae_c",
    },
    opcionA_prima: {
      label: "Corola sin espolón",
      keyStep: "B'",
      nextNodeId: "scrophulariaceae_d",
    },
  },
  scrophulariaceae_c: {
    id: "scrophulariaceae_c",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - C: disposición floral en corolas con espolón",
    opcionA: {
      label: "Flores en espigas terminales; plantas erectas o ascendentes; hojas lineal-oblongas, pinatinervadas",
      keyStep: "C",
      especieId: "linaria_texana",
    },
    opcionA_prima: {
      label: "Flores axilares, solitarias; plantas tendidas; hojas pecioladas, palmatinervadas",
      keyStep: "C'",
      especieId: "cymbalaria_muralis",
    },
  },
  scrophulariaceae_d: {
    id: "scrophulariaceae_d",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - D: forma de la corola sin espolón",
    opcionA: {
      label: "Corola bilabiada, con el labio superior erguido y cóncavo",
      keyStep: "D",
      nextNodeId: "scrophulariaceae_e",
    },
    opcionA_prima: {
      label: "Corola subrotácea, con tubo muy corto, infundibuliforme, o apenas bilabiada, con labio superior nunca cóncavo",
      keyStep: "D'",
      nextNodeId: "scrophulariaceae_f",
    },
  },
  scrophulariaceae_e: {
    id: "scrophulariaceae_e",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - E: cáliz, brácteas y parasitismo",
    opcionA: {
      label: "Cáliz tubuloso, comprimido; brácteas coloreadas; plantas parásitas de raíces",
      keyStep: "E",
      especieId: "castilleja_communis",
    },
    opcionA_prima: {
      label: "Cáliz inflado-campanulado; brácteas no coloreadas; plantas no parásitas",
      keyStep: "E'",
      especieId: "bellardia_trixago",
    },
  },
  scrophulariaceae_f: {
    id: "scrophulariaceae_f",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - F: número de estambres",
    opcionA: {
      label: "Estambres 2",
      keyStep: "F",
      nextNodeId: "scrophulariaceae_g",
    },
    opcionA_prima: {
      label: "Flores con 4 estambres",
      keyStep: "F'",
      nextNodeId: "scrophulariaceae_j",
    },
  },
  scrophulariaceae_g: {
    id: "scrophulariaceae_g",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - G: cáliz y tubo de la corola",
    opcionA: {
      label: "Cáliz generalmente 4-secto; tubo de la corola muy corto",
      keyStep: "G",
      nextNodeId: "scrophulariaceae_h",
    },
    opcionA_prima: {
      label: "Cáliz 5-secto; tubo de la corola alargado",
      keyStep: "G'",
      nextNodeId: "scrophulariaceae_i",
    },
  },
  scrophulariaceae_h: {
    id: "scrophulariaceae_h",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - H: cápsula y labios de la corola",
    opcionA: {
      label: "Cápsula comprimida; labio superior de la corola mayor que el inferior",
      keyStep: "H",
      nextNodeId: "veronica_a",
    },
    opcionA_prima: {
      label: "Cápsula globosa; labio superior de la corola menor que el inferior",
      keyStep: "H'",
      especieId: "micranthemum_umbrosum",
    },
  },
  veronica_a: {
    id: "veronica_a",
    milestone: "Veronica",
    manualPage: 422,
    descripcion: "Veronica - A: disposición de las flores",
    opcionA: {
      label: "Flores solitarias, axilares",
      keyStep: "A",
      nextNodeId: "veronica_b",
    },
    opcionA_prima: {
      label: "Flores en racimos axilares o terminales",
      keyStep: "A'",
      nextNodeId: "veronica_c",
    },
  },
  veronica_b: {
    id: "veronica_b",
    milestone: "Veronica",
    manualPage: 422,
    descripcion: "Veronica - B: forma de la cápsula en flores axilares",
    opcionA: {
      label: "Cápsula reticulada, comprimida, más ancha que larga, con lóbulos agudos divergentes",
      keyStep: "B",
      especieId: "veronica_persica",
    },
    opcionA_prima: {
      label: "Cápsula no reticulada, hinchada, con lóbulos redondeados no divergentes, pilosa",
      keyStep: "B'",
      especieId: "veronica_didyma",
    },
  },
  veronica_c: {
    id: "veronica_c",
    milestone: "Veronica",
    manualPage: 422,
    descripcion: "Veronica - C: racimos axilares o terminales",
    opcionA: {
      label: "Flores en racimos axilares; hojas sésiles casi amplexicaules; cápsulas elípticas",
      keyStep: "C",
      especieId: "veronica_anagallis_aquatica",
    },
    opcionA_prima: {
      label: "Flores en racimos terminales",
      keyStep: "C'",
      nextNodeId: "veronica_d",
    },
  },
  veronica_d: {
    id: "veronica_d",
    milestone: "Veronica",
    manualPage: 422,
    descripcion: "Veronica - D: ciclo y tallos",
    opcionA: {
      label: "Perenne, subglabra; tallos ascendentes, radicantes; cápsulas obcordadas",
      keyStep: "D",
      especieId: "veronica_serpyllifolia",
    },
    opcionA_prima: {
      label: "Plantas anuales; tallos no radicantes",
      keyStep: "D'",
      nextNodeId: "veronica_e",
    },
  },
  veronica_e: {
    id: "veronica_e",
    milestone: "Veronica",
    manualPage: 422,
    descripcion: "Veronica - E: hoja y cápsula en plantas anuales",
    opcionA: {
      label: "Hojas enteras o denticuladas, oblongas, atenuadas en la base; flores blancas; cápsula orbicular, no emarginada",
      keyStep: "E",
      especieId: "veronica_peregrina_xalapensis",
    },
    opcionA_prima: {
      label: "Hojas crenado-dentadas, pubescentes, ovadas, hemicordadas; flores casi sésiles azules; cápsula emarginada",
      keyStep: "E'",
      especieId: "veronica_arvensis",
    },
  },
  scrophulariaceae_i: {
    id: "scrophulariaceae_i",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - I: bractéolas y pedicelos",
    opcionA: {
      label: "Flores casi sésiles, con pedicelos muy cortos, bibracteolados; hojas dentadas",
      keyStep: "I",
      especieId: "gratiola_peruviana",
    },
    opcionA_prima: {
      label: "Flores con pedicelos no bracteolados, más largos que las hojas; hojas casi enteras",
      keyStep: "I'",
      especieId: "lindernia_dubia",
    },
  },
  scrophulariaceae_j: {
    id: "scrophulariaceae_j",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - J: porte con cuatro estambres",
    opcionA: {
      label: "Plantas diminutas, acaules; hojas radicales, subuladas",
      keyStep: "J",
      especieId: "limosella_lineata",
    },
    opcionA_prima: {
      label: "Plantas con tallo aéreo; hojas caulinares con lámina",
      keyStep: "J'",
      nextNodeId: "scrophulariaceae_k",
    },
  },
  scrophulariaceae_k: {
    id: "scrophulariaceae_k",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - K: cáliz y corola",
    opcionA: {
      label: "Cáliz 5-dentado o 5-lobado; corola infundibuliforme",
      keyStep: "K",
      nextNodeId: "gerardia_a",
    },
    opcionA_prima: {
      label: "Cáliz profundamente 5-partido; corola rotada o tubular",
      keyStep: "K'",
      nextNodeId: "scrophulariaceae_l",
    },
  },
  gerardia_a: {
    id: "gerardia_a",
    milestone: "Gerardia",
    manualPage: 425,
    descripcion: "Gerardia - A: ciclo, porte y hojas",
    opcionA: {
      label: "Hierba anual, glabra, erecta, ramosa; hojas lineal-lanceoladas; corola liliácea de 12-14 mm",
      keyStep: "A",
      especieId: "gerardia_communis",
    },
    opcionA_prima: {
      label: "Hierba perenne, erecta, ramosa, glabra; hojas lanceoladas; corola rosado-liliácea de 3-4 cm",
      keyStep: "A'",
      especieId: "gerardia_genistifolia",
    },
  },
  scrophulariaceae_l: {
    id: "scrophulariaceae_l",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - L: forma de la corola",
    opcionA: {
      label: "Corola rotada",
      keyStep: "L",
      nextNodeId: "scoparia_a",
    },
    opcionA_prima: {
      label: "Corola tubulosa",
      keyStep: "L'",
      nextNodeId: "scrophulariaceae_m",
    },
  },
  scoparia_a: {
    id: "scoparia_a",
    milestone: "Scoparia",
    manualPage: 425,
    descripcion: "Scoparia - A: hábito y hojas",
    opcionA: {
      label: "Hierba anual, rastrera; hojas algo carnosas, espatuladas y obtusas; corola blanca",
      keyStep: "A",
      especieId: "scoparia_aemilii",
    },
    opcionA_prima: {
      label: "Hierba perenne, erecta o ascendente; hojas lineal-lanceoladas; flores amarillas largamente pedunculadas",
      keyStep: "A'",
      especieId: "scoparia_montevidensis",
    },
  },
  scrophulariaceae_m: {
    id: "scrophulariaceae_m",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - M: ancho relativo de segmentos del cáliz",
    opcionA: {
      label: "Cáliz con segmentos muy desiguales en anchura",
      keyStep: "M",
      nextNodeId: "bacopa_a",
    },
    opcionA_prima: {
      label: "Cáliz con segmentos casi iguales",
      keyStep: "M'",
      nextNodeId: "scrophulariaceae_n",
    },
  },
  bacopa_a: {
    id: "bacopa_a",
    milestone: "Bacopa",
    manualPage: 427,
    descripcion: "Bacopa - A: pubescencia y forma foliar",
    opcionA: {
      label: "Plantas glabras; hojas espatuladas, sésiles, enteras o subdenticuladas; flores blancas o azuladas",
      keyStep: "A",
      especieId: "bacopa_monnieri",
    },
    opcionA_prima: {
      label: "Planta con tallo pubescente, rastrera o semiflotante; hojas obovado-orbiculares; flores blancas",
      keyStep: "A'",
      especieId: "bacopa_tweedii",
    },
  },
  scrophulariaceae_n: {
    id: "scrophulariaceae_n",
    milestone: "Scrophulariaceae",
    manualPage: 420,
    descripcion: "Scrophulariaceae - N: hábito y color floral",
    opcionA: {
      label: "Plantas decumbentes; flores amarillas, largamente pecioladas; pecíolo con bractéolas en su base",
      keyStep: "N",
      especieId: "mecardonia_montevidensis",
    },
    opcionA_prima: {
      label: "Plantas erectas; flores violáceas o blancas, sésiles o apenas pediceladas, con bractéolas en la base del cáliz",
      keyStep: "N'",
      nextNodeId: "stemodia_a",
    },
  },
  stemodia_a: {
    id: "stemodia_a",
    milestone: "Stemodia",
    manualPage: 427,
    descripcion: "Stemodia - A: porte",
    opcionA: {
      label: "Hierba pequeña, decumbente; tallos ramosos, pubescentes; flores solitarias axilares",
      keyStep: "A",
      especieId: "stemodia_humilis",
    },
    opcionA_prima: {
      label: "Plantas más robustas, erectas; hojas sésiles; flores en espigas",
      keyStep: "A'",
      nextNodeId: "stemodia_b",
    },
  },
  stemodia_b: {
    id: "stemodia_b",
    milestone: "Stemodia",
    manualPage: 427,
    descripcion: "Stemodia - B: pubescencia y hojas",
    opcionA: {
      label: "Hierba glabra, perenne; tallo cuadrangular; hojas lanceoladas, profundamente aserradas, auriculadas",
      keyStep: "B",
      especieId: "stemodia_tetragona",
    },
    opcionA_prima: {
      label: "Hierba pubescente; hojas basales opuestas y superiores a veces verticiladas; corola azul pálido",
      keyStep: "B'",
      especieId: "stemodia_hyptioides",
    },
  },
  bignoniaceae_a: {
    id: "bignoniaceae_a",
    milestone: "Bignoniaceae",
    manualPage: 428,
    descripcion: "Bignoniaceae - A: tipo de zarcillos",
    opcionA: {
      label: "Zarcillos simples",
      keyStep: "A",
      especieId: "clytostoma_callistegioides",
    },
    opcionA_prima: {
      label: "Zarcillos 3-garfiados",
      keyStep: "A'",
      especieId: "bignonia_unguis_cati",
    },
  },
  martyniaceae_terminal: {
    id: "martyniaceae_terminal",
    milestone: "Martyniaceae",
    manualPage: 430,
    descripcion: "Martyniaceae: único género y especie citados para la zona",
    opcionA: {
      label: "Hierba glanduloso-pubescente; hojas opuestas, orbiculares o acorazonadas; flores amarillas",
      keyStep: "1",
      especieId: "ibicella_lutea",
    },
    opcionA_prima: {
      label: "Fruto grande con endocarpo leñoso y dos largos cuernos curvos",
      keyStep: "1",
      especieId: "ibicella_lutea",
    },
  },
  lentibulariaceae_terminal: {
    id: "lentibulariaceae_terminal",
    milestone: "Lentibulariaceae",
    manualPage: 431,
    descripcion: "Lentibulariaceae: único género y especie citados para la zona",
    opcionA: {
      label: "Hierba acuática parcialmente sumergida; hojas finamente divididas con vesículas-trampa",
      keyStep: "1",
      especieId: "utricularia_platensis",
    },
    opcionA_prima: {
      label: "Escapos erectos de 10-20 cm, con 1-3 flores amarillas",
      keyStep: "1",
      especieId: "utricularia_platensis",
    },
  },
  acanthaceae_a: {
    id: "acanthaceae_a",
    milestone: "Acanthaceae",
    manualPage: 432,
    descripcion: "Acanthaceae - A: cantidad de estambres",
    opcionA: {
      label: "Estambres 4",
      keyStep: "A",
      nextNodeId: "acanthaceae_b",
    },
    opcionA_prima: {
      label: "Estambres 2",
      keyStep: "A'",
      nextNodeId: "acanthaceae_c",
    },
  },
  acanthaceae_b: {
    id: "acanthaceae_b",
    milestone: "Acanthaceae",
    manualPage: 432,
    descripcion: "Acanthaceae - B: hábito en plantas con cuatro estambres",
    opcionA: {
      label: "Plantas pigmeas, acaules, con hojas en roseta",
      keyStep: "B",
      nextNodeId: "stenandrium_a",
    },
    opcionA_prima: {
      label: "Plantas caulescentes, con hojas opuestas",
      keyStep: "B'",
      nextNodeId: "hygrophila_a",
    },
  },
  acanthaceae_c: {
    id: "acanthaceae_c",
    milestone: "Acanthaceae",
    manualPage: 432,
    descripcion: "Acanthaceae - C: inserción de los estambres",
    opcionA: {
      label: "Estambres insertos en el tubo corolino",
      keyStep: "C",
      nextNodeId: "dicliptera_a",
    },
    opcionA_prima: {
      label: "Estambres insertos en la garganta de la corola",
      keyStep: "C'",
      nextNodeId: "acanthaceae_d",
    },
  },
  acanthaceae_d: {
    id: "acanthaceae_d",
    milestone: "Acanthaceae",
    manualPage: 432,
    descripcion: "Acanthaceae - D: forma del tubo corolino",
    opcionA: {
      label: "Tubo corolino estrangulado debajo de la garganta",
      keyStep: "D",
      especieId: "poikilacanthus_tweedianus",
    },
    opcionA_prima: {
      label: "Tubo corolino no estrangulado",
      keyStep: "D'",
      nextNodeId: "justicia_a",
    },
  },
  stenandrium_a: {
    id: "stenandrium_a",
    milestone: "Stenandrium",
    manualPage: 432,
    descripcion: "Stenandrium - A: longitud del tubo corolino y rasgos del polen",
    opcionA: {
      label: "Tubo de la corola de unos 5 mm; hojas con seis pares de nervaduras secundarias; polen marginado",
      keyStep: "A",
      especieId: "stenandrium_breviflorum",
    },
    opcionA_prima: {
      label: "Tubo de la corola de unos 9 mm; hojas con 3-4 pares de nervaduras secundarias; polen espinoso",
      keyStep: "A'",
      nextNodeId: "stenandrium_b",
    },
  },
  stenandrium_b: {
    id: "stenandrium_b",
    milestone: "Stenandrium",
    manualPage: 433,
    descripcion: "Stenandrium - B: raíces",
    opcionA: {
      label: "Raíces engrosadas, carnosas; hojas pubescentes; flores pocas en espigas cortas casi sésiles",
      keyStep: "B",
      especieId: "stenandrium_parodii",
    },
    opcionA_prima: {
      label: "Raíces no engrosadas; hojas glabrescentes en el haz y algo velludas en el envés; espigas pedunculadas",
      keyStep: "B'",
      especieId: "stenandrium_trinerve",
    },
  },
  hygrophila_a: {
    id: "hygrophila_a",
    milestone: "Hygrophila",
    manualPage: 433,
    descripcion: "Hygrophila - A: indumento de las semillas",
    opcionA: {
      label: "Semillas 16-20, cubiertas de pelos glutinosos",
      keyStep: "A",
      especieId: "hygrophila_pubescens",
    },
    opcionA_prima: {
      label: "Semillas glabras",
      keyStep: "A'",
      especieId: "hygrophila_atricheta",
    },
  },
  dicliptera_a: {
    id: "dicliptera_a",
    milestone: "Dicliptera",
    manualPage: 434,
    descripcion: "Dicliptera - A: color de las flores",
    opcionA: {
      label: "Flores amarillas",
      keyStep: "A",
      especieId: "dicliptera_lutea",
    },
    opcionA_prima: {
      label: "Flores rojas",
      keyStep: "A'",
      nextNodeId: "dicliptera_b",
    },
  },
  dicliptera_b: {
    id: "dicliptera_b",
    milestone: "Dicliptera",
    manualPage: 434,
    descripcion: "Dicliptera - B: corola y nervaduras del labio inferior",
    opcionA: {
      label: "Corola de 30-35 mm; nervadura central del labio inferior con 7-8 nervaduras secundarias",
      keyStep: "B",
      especieId: "dicliptera_deltica",
    },
    opcionA_prima: {
      label: "Corola de 20-25 mm; nervadura central del labio inferior con 10-11 nervaduras secundarias",
      keyStep: "B'",
      especieId: "dicliptera_tweediana",
    },
  },
  justicia_a: {
    id: "justicia_a",
    milestone: "Justicia",
    manualPage: 435,
    descripcion: "Justicia - A: hábito",
    opcionA: {
      label: "Arbusto glabro de 1-2 m; flores axilares solitarias",
      keyStep: "A",
      especieId: "justicia_campestris",
    },
    opcionA_prima: {
      label: "Hierbas; flores dispuestas en falsas espigas",
      keyStep: "A'",
      nextNodeId: "justicia_b",
    },
  },
  justicia_b: {
    id: "justicia_b",
    milestone: "Justicia",
    manualPage: 435,
    descripcion: "Justicia - B: presencia de cistolitos",
    opcionA: {
      label: "Tallos y hojas sin cistolitos; cáliz casi tan largo como la corola",
      keyStep: "B",
      especieId: "justicia_obtusifolia",
    },
    opcionA_prima: {
      label: "Tallos y hojas con cistolitos; cáliz mucho más corto que la corola",
      keyStep: "B'",
      nextNodeId: "justicia_c",
    },
  },
  justicia_c: {
    id: "justicia_c",
    milestone: "Justicia",
    manualPage: 435,
    descripcion: "Justicia - C: disposición de las tecas",
    opcionA: {
      label: "Tecas de las anteras ligeramente divergentes; corola de unos 15 mm",
      keyStep: "C",
      especieId: "justicia_laevilinguis",
    },
    opcionA_prima: {
      label: "Tecas de las anteras en ángulo recto; corola de unos 25 mm",
      keyStep: "C'",
      especieId: "justicia_ascendens",
    },
  },
  plantago_a: {
    id: "plantago_a",
    milestone: "Plantaginaceae",
    manualPage: 436,
    descripcion: "Plantago - A: cantidad de semillas",
    opcionA: {
      label: "Semillas 5 o más",
      keyStep: "A",
      nextNodeId: "plantago_b",
    },
    opcionA_prima: {
      label: "Semillas 2-3",
      keyStep: "A'",
      nextNodeId: "plantago_c",
    },
  },
  plantago_b: {
    id: "plantago_b",
    milestone: "Plantago",
    manualPage: 436,
    descripcion: "Plantago - B: forma de las hojas en especies con muchas semillas",
    opcionA: {
      label: "Hojas ovadas, sinuadas o dentadas, de 6-15 x 4-12 cm; escapos de 15-40 cm; semillas 6-30",
      keyStep: "B",
      especieId: "plantago_major",
    },
    opcionA_prima: {
      label: "Hojas lineales, glabras, de 3-10 cm por 1-2,5 mm; escapos de 5-10 cm; semillas alrededor de 25",
      keyStep: "B'",
      especieId: "plantago_heterophylla",
    },
  },
  plantago_c: {
    id: "plantago_c",
    milestone: "Plantago",
    manualPage: 436,
    descripcion: "Plantago - C: semillas 2 o 3",
    opcionA: {
      label: "Semillas 2",
      keyStep: "C",
      nextNodeId: "plantago_d",
    },
    opcionA_prima: {
      label: "Semillas 3",
      keyStep: "C'",
      nextNodeId: "plantago_e",
    },
  },
  plantago_d: {
    id: "plantago_d",
    milestone: "Plantago",
    manualPage: 436,
    descripcion: "Plantago - D: hábito e indumento en especies con dos semillas",
    opcionA: {
      label: "Hierba perenne, cortamente rizomatosa, glabra o apenas pubescente; hojas lanceoladas, 5-nervadas",
      keyStep: "D",
      especieId: "plantago_lanceolata",
    },
    opcionA_prima: {
      label: "Hierba anual, densamente seríceo-pubescente, con raíz delgada; hojas lineales",
      keyStep: "D'",
      especieId: "plantago_patagonica",
    },
  },
  plantago_e: {
    id: "plantago_e",
    milestone: "Plantago",
    manualPage: 437,
    descripcion: "Plantago - E: indumento de las hojas en especies con tres semillas",
    opcionA: {
      label: "Hojas glabras o a lo más ciliadas",
      keyStep: "E",
      nextNodeId: "plantago_f",
    },
    opcionA_prima: {
      label: "Hojas densamente pubescentes",
      keyStep: "E'",
      nextNodeId: "plantago_g",
    },
  },
  plantago_f: {
    id: "plantago_f",
    milestone: "Plantago",
    manualPage: 437,
    descripcion: "Plantago - F: forma foliar en especies glabras o ciliadas",
    opcionA: {
      label: "Hojas elíptico-lanceoladas, 5-nervadas, sinuado-dentadas; escapos más largos que las hojas",
      keyStep: "F",
      nextNodeId: "plantago_macrostachys_a",
    },
    opcionA_prima: {
      label: "Hojas lineal-lanceoladas, dentadas o lobuladas; espigas apenas superando a las hojas",
      keyStep: "F'",
      especieId: "plantago_taraxacoides",
    },
  },
  plantago_macrostachys_a: {
    id: "plantago_macrostachys_a",
    milestone: "Plantago macrostachys",
    manualPage: 437,
    descripcion: "Plantago macrostachys: especie típica y variedad citada",
    opcionA: {
      label: "Planta con los rasgos típicos de la especie",
      keyStep: "5",
      especieId: "plantago_macrostachys",
    },
    opcionA_prima: {
      label: "Variedad de tamaño más reducido, común en el césped de la ribera platense",
      keyStep: "5a",
      especieId: "plantago_macrostachys_var_platensis",
    },
  },
  plantago_g: {
    id: "plantago_g",
    milestone: "Plantago",
    manualPage: 437,
    descripcion: "Plantago - G: hábito en especies densamente pubescentes",
    opcionA: {
      label: "Hierba anual pequeña; hojas lanceoladas; escapos de doble longitud que las hojas; semillas punteadas",
      keyStep: "G",
      especieId: "plantago_myosurus",
    },
    opcionA_prima: {
      label: "Plantas perennes robustas; hojas elípticas o elíptico-lanceoladas",
      keyStep: "G'",
      nextNodeId: "plantago_h",
    },
  },
  plantago_h: {
    id: "plantago_h",
    milestone: "Plantago",
    manualPage: 437,
    descripcion: "Plantago - H: semillas y raíz en plantas perennes robustas",
    opcionA: {
      label: "Semillas rugosas; raíz fusiforme, poco engrosada; espigas largas, densas o laxas",
      keyStep: "H",
      especieId: "plantago_paralias",
    },
    opcionA_prima: {
      label: "Semillas punteadas; raíz napiforme muy engrosada; espigas densas y gruesas",
      keyStep: "H'",
      especieId: "plantago_berroi",
    },
  },
  rubiaceae_a: {
    id: "rubiaceae_a",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - A: hábito",
    opcionA: {
      label: "Árboles o arbustos de más de un metro de altura",
      keyStep: "A",
      nextNodeId: "rubiaceae_b",
    },
    opcionA_prima: {
      label: "Arbustos enanos o hierbas",
      keyStep: "A'",
      nextNodeId: "rubiaceae_c",
    },
  },
  rubiaceae_b: {
    id: "rubiaceae_b",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - B: disposición floral en árboles o arbustos altos",
    opcionA: {
      label: "Flores dispuestas en cabezuelas esféricas",
      keyStep: "B",
      especieId: "cephalanthus_glabratus",
    },
    opcionA_prima: {
      label: "Flores en cimas o panojas",
      keyStep: "B'",
      nextNodeId: "rubiaceae_b_c",
    },
  },
  rubiaceae_b_c: {
    id: "rubiaceae_b_c",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - C: posición de los óvulos en árboles o arbustos",
    opcionA: {
      label: "Óvulos péndulos",
      keyStep: "C",
      especieId: "guettarda_uruguensis",
    },
    opcionA_prima: {
      label: "Óvulos erectos o ascendentes",
      keyStep: "C'",
      especieId: "psychotria_carthaginensis",
    },
  },
  rubiaceae_c: {
    id: "rubiaceae_c",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - C: ovario y hábito en arbustos enanos o hierbas",
    opcionA: {
      label: "Ovario bilocular, con lóculos multiovulados; hierbas rastreras pigmeas con flores solitarias",
      keyStep: "C",
      especieId: "oldenlandia_thesiifolia",
    },
    opcionA_prima: {
      label: "Ovario 2-3-locular, con lóculos uniovulados; hierbas robustas, sufrútices o arbustitos bajos",
      keyStep: "C'",
      nextNodeId: "rubiaceae_d",
    },
  },
  rubiaceae_d: {
    id: "rubiaceae_d",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - D: tipo de estípulas",
    opcionA: {
      label: "Estípulas membranosas, más o menos pestañosas",
      keyStep: "D",
      nextNodeId: "rubiaceae_e",
    },
    opcionA_prima: {
      label: "Estípulas foliáceas, de modo que las hojas parecen verticiladas",
      keyStep: "D'",
      nextNodeId: "rubiaceae_j",
    },
  },
  rubiaceae_e: {
    id: "rubiaceae_e",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - E: número de lóculos del ovario",
    opcionA: {
      label: "Ovario trilocular",
      keyStep: "E",
      nextNodeId: "richardia_a",
    },
    opcionA_prima: {
      label: "Ovario bilocular",
      keyStep: "E'",
      nextNodeId: "rubiaceae_f",
    },
  },
  rubiaceae_f: {
    id: "rubiaceae_f",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - F: tipo de fruto en ovario bilocular",
    opcionA: {
      label: "El fruto se disgrega en dos cocos indehiscentes",
      keyStep: "F",
      nextNodeId: "diodia_a",
    },
    opcionA_prima: {
      label: "Fruto capsular",
      keyStep: "F'",
      nextNodeId: "rubiaceae_g",
    },
  },
  rubiaceae_g: {
    id: "rubiaceae_g",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - G: dehiscencia de la cápsula",
    opcionA: {
      label: "Cápsula de dehiscencia transversal",
      keyStep: "G",
      especieId: "mitracarpus_megapotamicus",
    },
    opcionA_prima: {
      label: "Cápsula de dehiscencia septicida",
      keyStep: "G'",
      nextNodeId: "rubiaceae_h",
    },
  },
  rubiaceae_h: {
    id: "rubiaceae_h",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - H: apertura de las valvas",
    opcionA: {
      label: "Una valva de la cápsula permanece cerrada",
      keyStep: "H",
      especieId: "spermacoce_glabra",
    },
    opcionA_prima: {
      label: "Las dos valvas de la cápsula se abren",
      keyStep: "H'",
      nextNodeId: "borreria_a",
    },
  },
  rubiaceae_j: {
    id: "rubiaceae_j",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - J: cáliz y disposición floral con estípulas foliáceas",
    opcionA: {
      label: "Flores sin cáliz, dispuestas en cimas o solitarias",
      keyStep: "J",
      nextNodeId: "rubiaceae_k",
    },
    opcionA_prima: {
      label: "Flores con cáliz, dispuestas en capítulos involucrados",
      keyStep: "J'",
      especieId: "sherardia_arvensis",
    },
  },
  rubiaceae_k: {
    id: "rubiaceae_k",
    milestone: "Rubiaceae",
    manualPage: 439,
    descripcion: "Rubiaceae - K: presencia de involucro",
    opcionA: {
      label: "Flores involucradas",
      keyStep: "K",
      nextNodeId: "relbunium_a",
    },
    opcionA_prima: {
      label: "Flores sin involucro",
      keyStep: "K'",
      nextNodeId: "galium_a",
    },
  },
  richardia_a: {
    id: "richardia_a",
    milestone: "Richardia",
    manualPage: 441,
    descripcion: "Richardia - A: forma de las hojas",
    opcionA: {
      label: "Hojas lanceoladas o lanceolado-lineales, rígidas, enteras y peludas",
      keyStep: "A",
      especieId: "richardia_stellaris",
    },
    opcionA_prima: {
      label: "Hojas anchamente ovado-elípticas, tiernas, pubescentes, de 3-5 x 1,5-2 cm",
      keyStep: "A'",
      especieId: "richardia_rosea",
    },
  },
  diodia_a: {
    id: "diodia_a",
    milestone: "Diodia",
    manualPage: 442,
    descripcion: "Diodia - A: hábito y disposición floral",
    opcionA: {
      label: "Sufrútice de 0,5-1 m; flores diminutas sésiles en axilas superiores, formando seudoverticilos",
      keyStep: "A",
      especieId: "diodia_brasiliensis",
    },
    opcionA_prima: {
      label: "Hierba perenne decumbente o ascendente; flores en cabezuelas terminales rodeadas por hojas",
      keyStep: "A'",
      especieId: "diodia_dasycephala",
    },
  },
  borreria_a: {
    id: "borreria_a",
    milestone: "Borreria",
    manualPage: 443,
    descripcion: "Borreria - A: disposición de las flores",
    opcionA: {
      label: "Flores en cimas laxas plurifloras, pequeñas",
      keyStep: "A",
      especieId: "borreria_laxa",
    },
    opcionA_prima: {
      label: "Flores en capítulos o verticilos densos",
      keyStep: "A'",
      nextNodeId: "borreria_b",
    },
  },
  borreria_b: {
    id: "borreria_b",
    milestone: "Borreria",
    manualPage: 444,
    descripcion: "Borreria - B: estambres",
    opcionA: {
      label: "Filamentos cortos y anteras inclusas en la corola",
      keyStep: "B",
      especieId: "borreria_eryngioides",
    },
    opcionA_prima: {
      label: "Filamentos largos y anteras largamente exertas",
      keyStep: "B'",
      especieId: "borreria_verticillata",
    },
  },
  relbunium_a: {
    id: "relbunium_a",
    milestone: "Relbunium",
    manualPage: 444,
    descripcion: "Relbunium - A: hábito y ancho de hojas",
    opcionA: {
      label: "Hierba perenne rastrera; hojas lineal-lanceoladas de 3-5 mm por 0,5-1 mm",
      keyStep: "A",
      especieId: "relbunium_chaetophorum",
    },
    opcionA_prima: {
      label: "Hierbas generalmente apoyantes, perennes; hojas oblongas o elípticas, de más de 2 mm de ancho",
      keyStep: "A'",
      nextNodeId: "relbunium_b",
    },
  },
  relbunium_b: {
    id: "relbunium_b",
    milestone: "Relbunium",
    manualPage: 444,
    descripcion: "Relbunium - B: indumento del fruto y tallo",
    opcionA: {
      label: "Frutos glabros; tallos retrorso-ásperos en los ángulos",
      keyStep: "B",
      especieId: "relbunium_vile",
    },
    opcionA_prima: {
      label: "Frutos generalmente pubescentes, rojos; tallos pubescentes",
      keyStep: "B'",
      especieId: "relbunium_hypocarpium_indecorum",
    },
  },
  galium_a: {
    id: "galium_a",
    milestone: "Galium",
    manualPage: 445,
    descripcion: "Galium - A: superficie de los frutos",
    opcionA: {
      label: "Frutos lisos; hierbas perennes apoyantes",
      keyStep: "A",
      nextNodeId: "galium_b",
    },
    opcionA_prima: {
      label: "Frutos cubiertos de cerdas ganchudas; hierba anual débil, apoyante",
      keyStep: "A'",
      especieId: "galium_aparine",
    },
  },
  galium_b: {
    id: "galium_b",
    milestone: "Galium",
    manualPage: 445,
    descripcion: "Galium - B: ángulos del tallo y flores",
    opcionA: {
      label: "Tallos con ángulos muy salientes, ásperos o lisos; flores amarillentas en cimas paucifloras",
      keyStep: "B",
      especieId: "galium_tetragonum",
    },
    opcionA_prima: {
      label: "Tallos con ángulos no salientes, flexuosos; flores blancas en cimas multifloras",
      keyStep: "B'",
      especieId: "galium_palustre",
    },
  },
  solanaceae_d: {
    id: "solanaceae_d",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - D: presencia de tallo aéreo",
    opcionA: {
      label: "Plantas acaules: las flores nacen directamente de una roseta de hojas o de un rizoma",
      keyStep: "D",
      nextNodeId: "jaborosa_a",
    },
    opcionA_prima: {
      label: "Plantas con tallo aéreo desarrollado",
      keyStep: "D'",
      nextNodeId: "solanaceae_e",
    },
  },
  jaborosa_a: {
    id: "jaborosa_a",
    milestone: "Jaborosa",
    manualPage: 414,
    descripcion: "Jaborosa - A: rizomas y forma foliar",
    opcionA: {
      label: "Hierba acaule, glabra, con rizomas horizontales; hojas elípticas, enteras o dentadas; corola hipocraterimorfa",
      keyStep: "A",
      especieId: "jaborosa_integrifolia",
    },
    opcionA_prima: {
      label: "Hierba rizomatosa con hojas en roseta basal, obovadas y sinuado-runcinadas; corola acampanada",
      keyStep: "A'",
      especieId: "jaborosa_runcinata",
    },
  },
  solanaceae_e: {
    id: "solanaceae_e",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - E: forma de la corola en plantas con tallo",
    opcionA: {
      label: "Corola urceolada; hierbas",
      keyStep: "E",
      especieId: "salpichroa_origanifolia",
    },
    opcionA_prima: {
      label: "Corola tubulosa o infundibuliforme; arbustos",
      keyStep: "E'",
      nextNodeId: "solanaceae_f",
    },
  },
  solanaceae_f: {
    id: "solanaceae_f",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - F: presencia de espinas",
    opcionA: {
      label: "Plantas espinosas",
      keyStep: "F",
      nextNodeId: "solanaceae_g",
    },
    opcionA_prima: {
      label: "Plantas sin espinas",
      keyStep: "F'",
      nextNodeId: "cestrum_a",
    },
  },
  solanaceae_g: {
    id: "solanaceae_g",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - G: baya o drupa en arbustos espinosos",
    opcionA: {
      label: "Fruto baya, por lo común con numerosas semillas",
      keyStep: "G",
      nextNodeId: "lycium_a",
    },
    opcionA_prima: {
      label: "Fruto drupa, con dos carozos biloculares y una o dos semillas en cada lóculo",
      keyStep: "G'",
      especieId: "grabowskia_duplicata",
    },
  },
  lycium_a: {
    id: "lycium_a",
    milestone: "Lycium",
    manualPage: 414,
    descripcion: "Lycium - A: forma y color de la corola",
    opcionA: {
      label: "Corola tubulosa, violácea, con lóbulos muy cortos; hojas ovado-lanceoladas",
      keyStep: "A",
      especieId: "lycium_cestroides",
    },
    opcionA_prima: {
      label: "Corola infundibuliforme, blanco-verdosa, con lóbulos abiertos casi tan largos como el tubo; hojas oblanceoladas u obovadas",
      keyStep: "A'",
      especieId: "lycium_chilense",
    },
  },
  cestrum_a: {
    id: "cestrum_a",
    milestone: "Cestrum",
    manualPage: 416,
    descripcion: "Cestrum - A: forma y tamaño del cáliz",
    opcionA: {
      label: "Cáliz tubuloso, atenuado en la base, de 5-6 mm; hojas lanceoladas de 5-13 cm; flores en racimos",
      keyStep: "A",
      especieId: "cestrum_parqui",
    },
    opcionA_prima: {
      label: "Cáliz acampanado, contraído en la base, de 3-4 mm; hojas lanceoladas de 2,5-6 cm",
      keyStep: "A'",
      especieId: "cestrum_sellowianum",
    },
  },
  solanaceae_h: {
    id: "solanaceae_h",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - H: número de semillas del fruto",
    opcionA: {
      label: "Fruto con 1-2 semillas; cáliz con segmentos acrescentes, frecuentemente espinosos",
      keyStep: "H",
      especieId: "sclerophylax_spinescens",
    },
    opcionA_prima: {
      label: "Frutos con numerosas semillas",
      keyStep: "H'",
      nextNodeId: "solanaceae_i",
    },
  },
  solanaceae_i: {
    id: "solanaceae_i",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - I: presencia de espinas en la cápsula",
    opcionA: {
      label: "Cápsula espinosa, 4-valva; flores blancas, solitarias",
      keyStep: "I",
      especieId: "datura_ferox",
    },
    opcionA_prima: {
      label: "Cápsulas sin espinas",
      keyStep: "I'",
      nextNodeId: "solanaceae_j",
    },
  },
  solanaceae_j: {
    id: "solanaceae_j",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - J: número de estambres fértiles",
    opcionA: {
      label: "Estambres fértiles 5",
      keyStep: "J",
      nextNodeId: "solanaceae_k",
    },
    opcionA_prima: {
      label: "Estambres fértiles 4; corola corta",
      keyStep: "J'",
      especieId: "bouchetia_anomala",
    },
  },
  solanaceae_k: {
    id: "solanaceae_k",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - K: disposición de las flores",
    opcionA: {
      label: "Flores solitarias o en cimas paucifloras hojosas",
      keyStep: "K",
      nextNodeId: "solanaceae_l",
    },
    opcionA_prima: {
      label: "Flores en racimos o corimbos definidos",
      keyStep: "K'",
      nextNodeId: "nicotiana_a",
    },
  },
  solanaceae_l: {
    id: "solanaceae_l",
    milestone: "Solanaceae",
    manualPage: 407,
    descripcion: "Solanaceae - L: forma del tubo de la corola",
    opcionA: {
      label: "Corola con tubo cilíndrico, ensanchado gradualmente hacia el limbo; estambres insertos en la parte inferior del tubo",
      keyStep: "L",
      nextNodeId: "petunia_a",
    },
    opcionA_prima: {
      label: "Corola con tubo largo y muy estrecho, dilatado bruscamente en un limbo en forma de campana o copa",
      keyStep: "L'",
      nextNodeId: "nierembergia_a",
    },
  },
  petunia_a: {
    id: "petunia_a",
    milestone: "Petunia",
    manualPage: 417,
    descripcion: "Petunia - A: color de flores",
    opcionA: {
      label: "Flores blancas, con corola de 5-7 cm; hojas alternas, sésiles, oblanceolado-espatuladas",
      keyStep: "A",
      especieId: "petunia_axillaris",
    },
    opcionA_prima: {
      label: "Flores violáceas",
      keyStep: "A'",
      nextNodeId: "petunia_b",
    },
  },
  petunia_b: {
    id: "petunia_b",
    milestone: "Petunia",
    manualPage: 417,
    descripcion: "Petunia - B: forma de hojas y tamaño de corola",
    opcionA: {
      label: "Hojas lineal-espatuladas, carnosas, muy pequeñas; corola de 6-9 mm",
      keyStep: "B",
      especieId: "petunia_parviflora",
    },
    opcionA_prima: {
      label: "Hojas opuestas, ovado-romboideas; corola hirsuta de 2,5-4 cm",
      keyStep: "B'",
      especieId: "petunia_violacea",
    },
  },
  nierembergia_a: {
    id: "nierembergia_a",
    milestone: "Nierembergia",
    manualPage: 418,
    descripcion: "Nierembergia - A: forma y ancho de las hojas",
    opcionA: {
      label: "Hojas ovadas o espatuladas, enteras, atenuadas en largo pecíolo",
      keyStep: "A",
      especieId: "nierembergia_repens",
    },
    opcionA_prima: {
      label: "Hojas lanceoladas o lineales, de 0,5-6 mm de ancho",
      keyStep: "A'",
      nextNodeId: "nierembergia_b",
    },
  },
  nierembergia_b: {
    id: "nierembergia_b",
    milestone: "Nierembergia",
    manualPage: 418,
    descripcion: "Nierembergia - B: forma del estigma",
    opcionA: {
      label: "Estigma semilunar; hierba perenne multicaule, formando matas hemisféricas",
      keyStep: "B",
      especieId: "nierembergia_hippomanica",
    },
    opcionA_prima: {
      label: "Estigma capitado",
      keyStep: "B'",
      nextNodeId: "nierembergia_c",
    },
  },
  nierembergia_c: {
    id: "nierembergia_c",
    milestone: "Nierembergia",
    manualPage: 418,
    descripcion: "Nierembergia - C: forma de los tallos",
    opcionA: {
      label: "Tallos erectos, ondulados, glabros o apenas pubescentes; hojas estrechamente lineales",
      keyStep: "C",
      especieId: "nierembergia_aristata",
    },
    opcionA_prima: {
      label: "Tallos rectos",
      keyStep: "C'",
      nextNodeId: "nierembergia_d",
    },
  },
  nierembergia_d: {
    id: "nierembergia_d",
    milestone: "Nierembergia",
    manualPage: 418,
    descripcion: "Nierembergia - D: longitud del tubo corolino",
    opcionA: {
      label: "Tubo corolino de unos 25 mm; limbo de unos 20 mm; flores azuladas",
      keyStep: "D",
      especieId: "nierembergia_stricta",
    },
    opcionA_prima: {
      label: "Tubo corolino de 8-12 mm; limbo de 10 mm; hojas algo carnosas; corola violácea",
      keyStep: "D'",
      especieId: "nierembergia_prostrata",
    },
  },
  nicotiana_a: {
    id: "nicotiana_a",
    milestone: "Nicotiana",
    manualPage: 419,
    descripcion: "Nicotiana - A: hábito y color de flores",
    opcionA: {
      label: "Arbusto de 3-4 m, glauco, glabro; flores amarillas en racimos definidos",
      keyStep: "A",
      especieId: "nicotiana_glauca",
    },
    opcionA_prima: {
      label: "Hierbas; flores blancas",
      keyStep: "A'",
      nextNodeId: "nicotiana_b",
    },
  },
  nicotiana_b: {
    id: "nicotiana_b",
    milestone: "Nicotiana",
    manualPage: 419,
    descripcion: "Nicotiana - B: longitud de la corola",
    opcionA: {
      label: "Corola de 6-13 cm, con tubo angosto y limbo abierto; hierba perenne de medio metro",
      keyStep: "B",
      especieId: "nicotiana_longiflora",
    },
    opcionA_prima: {
      label: "Corola de 2,5-3 cm, con limbo abierto; hojas basales en roseta; tallos erectos y ramosos",
      keyStep: "B'",
      especieId: "nicotiana_bonariensis",
    },
  },
  dicot_group_e_a_lowercase: {
    id: "dicot_group_e_a_lowercase",
    milestone: "Grupo E",
    descripcion: "Grupo E - a: con flores solitarias o en cimas, ¿cómo son los óvulos?",
    opcionA: {
      label: "Óvulos generalmente 2, a veces 1-3, en cada carpelo, erectos desde la base del lóculo",
      keyStep: "a",
      nextNodeId: "convolvulaceae_a",
    },
    opcionA_prima: {
      label: "Óvulos generalmente más de dos en cada carpelo, sobre placentas axilares",
      keyStep: "a'",
      nextNodeId: "solanaceae_a",
    },
  },
  convolvulaceae_a: {
    id: "convolvulaceae_a",
    milestone: "Convolvulaceae",
    manualPage: 375,
    descripcion: "Convolvulaceae - A: parasitismo y presencia de clorofila",
    opcionA: {
      label: "Plantas parásitas, sin clorofila, con tallos volubles desprovistos de hojas",
      keyStep: "A",
      nextNodeId: "cuscuta_a",
    },
    opcionA_prima: {
      label: "Plantas no parásitas, con clorofila; tallos volubles o rastreros, con hojas",
      keyStep: "A'",
      nextNodeId: "convolvulaceae_b",
    },
  },
  convolvulaceae_b: {
    id: "convolvulaceae_b",
    milestone: "Convolvulaceae",
    manualPage: 375,
    descripcion: "Convolvulaceae - B: división del ovario y tipo de fruto",
    opcionA: {
      label: "Ovario partido en dos, con dos estilos insertos entre las dos mitades; fruto formado por dos capsulitas monospermas; plantas rastreras con hojas reniformes",
      keyStep: "B",
      nextNodeId: "dichondra_a",
    },
    opcionA_prima: {
      label: "Ovario no partido en dos; fruto capsular dehiscente",
      keyStep: "B'",
      nextNodeId: "convolvulaceae_c",
    },
  },
  convolvulaceae_c: {
    id: "convolvulaceae_c",
    milestone: "Convolvulaceae",
    manualPage: 375,
    descripcion: "Convolvulaceae - C: estilos del gineceo",
    opcionA: {
      label: "Gineceo con dos estilos separados, o con un solo estilo partido casi hasta su base",
      keyStep: "C",
      nextNodeId: "convolvulaceae_d",
    },
    opcionA_prima: {
      label: "Gineceo con un solo estilo indiviso o sólo dividido en el ápice",
      keyStep: "C'",
      nextNodeId: "convolvulaceae_e",
    },
  },
  convolvulaceae_d: {
    id: "convolvulaceae_d",
    milestone: "Convolvulaceae",
    manualPage: 375,
    descripcion: "Convolvulaceae - D: división de los estilos",
    opcionA: {
      label: "Gineceo con dos estilos separados, indivisos, con estigmas capitados; hierbas bajas de flores pequeñas",
      keyStep: "D",
      especieId: "cressa_truxillensis",
    },
    opcionA_prima: {
      label: "Gineceo con dos estilos separados o unidos sólo en la base, cada uno profundamente bífido; hierbas tendidas, ascendentes o erectas",
      keyStep: "D'",
      especieId: "evolvulus_sericeus",
    },
  },
  convolvulaceae_e: {
    id: "convolvulaceae_e",
    milestone: "Convolvulaceae",
    manualPage: 375,
    descripcion: "Convolvulaceae - E: forma del estigma",
    opcionA: {
      label: "Estigma capitado o bilobado, con lóbulos globosos",
      keyStep: "E",
      nextNodeId: "convolvulaceae_f",
    },
    opcionA_prima: {
      label: "Estigma bifurcado, con lóbulos ovados o lineales",
      keyStep: "E'",
      nextNodeId: "convolvulaceae_g",
    },
  },
  convolvulaceae_f: {
    id: "convolvulaceae_f",
    milestone: "Convolvulaceae",
    manualPage: 376,
    descripcion: "Convolvulaceae - F: tamaño relativo de los sépalos",
    opcionA: {
      label: "Sépalos exteriores mucho mayores que los internos, herbáceos, generalmente acorazonados o decurrentes en la base",
      keyStep: "F",
      especieId: "aniseia_argentina",
    },
    opcionA_prima: {
      label: "Sépalos más o menos iguales entre sí",
      keyStep: "F'",
      nextNodeId: "ipomoea_a",
    },
  },
  ipomoea_a: {
    id: "ipomoea_a",
    milestone: "Ipomoea",
    manualPage: 379,
    descripcion: "Ipomoea - A: longitud de estambres y estilo respecto del tubo de la corola",
    opcionA: {
      label: "Estambres y estilo cortos, no sobresaliendo del tubo de la corola; flores violáceas, rosadas o liláceas, raramente blancas",
      keyStep: "A",
      nextNodeId: "ipomoea_b",
    },
    opcionA_prima: {
      label: "Estambres y estilo largos, sobresaliendo del tubo de la corola; flores blancas o rojas",
      keyStep: "A'",
      nextNodeId: "ipomoea_h",
    },
  },
  ipomoea_b: {
    id: "ipomoea_b",
    milestone: "Ipomoea",
    manualPage: 379,
    descripcion: "Ipomoea - B: costillas aladas en los sépalos",
    opcionA: {
      label: "Sépalos con costillas longitudinales aladas y generalmente dentadas",
      keyStep: "B",
      especieId: "ipomoea_fimbriosepala",
    },
    opcionA_prima: {
      label: "Sépalos sin costillas aladas",
      keyStep: "B'",
      nextNodeId: "ipomoea_c",
    },
  },
  ipomoea_c: {
    id: "ipomoea_c",
    milestone: "Ipomoea",
    manualPage: 379,
    descripcion: "Ipomoea - C: textura y forma de los sépalos",
    opcionA: {
      label: "Sépalos herbáceos, agudos o acuminados; semillas glabras o tomentosas",
      keyStep: "C",
      nextNodeId: "ipomoea_d",
    },
    opcionA_prima: {
      label: "Sépalos membranáceos o coriáceos, obtusos; semillas con largos pelos seríceos en los bordes",
      keyStep: "C'",
      nextNodeId: "ipomoea_f",
    },
  },
  ipomoea_d: {
    id: "ipomoea_d",
    milestone: "Ipomoea",
    manualPage: 379,
    descripcion: "Ipomoea - D: carpelos, pubescencia del ovario y estigma",
    opcionA: {
      label: "Ovario bicarpelar, hirsuto-velludo; estigma bilobado; cápsula bilocular con 4 semillas glabras",
      keyStep: "D",
      especieId: "ipomoea_grandifolia",
    },
    opcionA_prima: {
      label: "Ovario tricarpelar, glabro; estigma trilobado; cápsula trilocular con 6 semillas finamente tomentosas",
      keyStep: "D'",
      nextNodeId: "ipomoea_e",
    },
  },
  ipomoea_e: {
    id: "ipomoea_e",
    milestone: "Ipomoea",
    manualPage: 380,
    descripcion: "Ipomoea - E: forma de sépalos y hojas",
    opcionA: {
      label: "Sépalos lanceolados, agudos, híspidos en la base; corola violácea, rosada o blanca de 5-8 cm; hojas enteras, raramente trilobadas",
      keyStep: "E",
      especieId: "ipomoea_purpurea",
    },
    opcionA_prima: {
      label: "Sépalos lanceolados, largamente atenuado-caudados, seríceo-pubescentes en la base; corola lilácea de 6-8 cm; hojas onduladas o trilobadas",
      keyStep: "E'",
      especieId: "ipomoea_congesta",
    },
  },
  ipomoea_f: {
    id: "ipomoea_f",
    milestone: "Ipomoea",
    manualPage: 380,
    descripcion: "Ipomoea - F: forma de las hojas",
    opcionA: {
      label: "Hojas acorazonadas, enteras u obtusamente 3-5-lobuladas, seríceo-pubescentes",
      keyStep: "F",
      especieId: "ipomoea_bonariensis",
    },
    opcionA_prima: {
      label: "Hojas profundamente palmatisectas, glabras",
      keyStep: "F'",
      nextNodeId: "ipomoea_g",
    },
  },
  ipomoea_g: {
    id: "ipomoea_g",
    milestone: "Ipomoea",
    manualPage: 380,
    descripcion: "Ipomoea - G: número y forma de los segmentos foliares",
    opcionA: {
      label: "Hojas con 5-9 segmentos estrechamente lanceolados, enteros, de 7-10 cm",
      keyStep: "G",
      especieId: "ipomoea_platensis",
    },
    opcionA_prima: {
      label: "Hojas con 5 segmentos anchamente lanceolados, mucronados, de 4-6 cm",
      keyStep: "G'",
      especieId: "ipomoea_cairica",
    },
  },
  ipomoea_h: {
    id: "ipomoea_h",
    milestone: "Ipomoea",
    manualPage: 380,
    descripcion: "Ipomoea - H: color de las flores",
    opcionA: {
      label: "Flores blancas; sépalos largamente atenuado-caudados; corola hipocraterimorfa de 10-15 cm",
      keyStep: "H",
      especieId: "ipomoea_alba",
    },
    opcionA_prima: {
      label: "Flores rojas, de 1,5-3 cm; semillas tomentosas",
      keyStep: "H'",
      nextNodeId: "ipomoea_j",
    },
  },
  ipomoea_j: {
    id: "ipomoea_j",
    milestone: "Ipomoea",
    manualPage: 380,
    descripcion: "Ipomoea - J: forma de las hojas en flores rojas",
    opcionA: {
      label: "Hojas deltoideo-acorazonadas, acuminadas, con algún diente cerca de la base",
      keyStep: "J",
      especieId: "ipomoea_indivisa",
    },
    opcionA_prima: {
      label: "Hojas profundamente pinatisectas, con segmentos lineales",
      keyStep: "J'",
      especieId: "ipomoea_quamoclit",
    },
  },
  convolvulaceae_g: {
    id: "convolvulaceae_g",
    milestone: "Convolvulaceae",
    manualPage: 376,
    descripcion: "Convolvulaceae - G: tamaño de las brácteas florales y lóculos del ovario",
    opcionA: {
      label: "Brácteas florales pequeñas; ovario bilocular",
      keyStep: "G",
      nextNodeId: "convolvulus_a",
    },
    opcionA_prima: {
      label: "Brácteas florales foliáceas, muy grandes; ovario unilocular o casi bilocular",
      keyStep: "G'",
      nextNodeId: "calystegia_a",
    },
  },
  convolvulus_a: {
    id: "convolvulus_a",
    milestone: "Convolvulus",
    manualPage: 382,
    descripcion: "Convolvulus - A: división de las hojas",
    opcionA: {
      label: "Hojas de contorno ovado, profundamente bipinatisectas, con raquis y segmentos lineales",
      keyStep: "A",
      nextNodeId: "convolvulus_laciniatus_a",
    },
    opcionA_prima: {
      label: "Hojas enteras o dentadas",
      keyStep: "A'",
      nextNodeId: "convolvulus_b",
    },
  },
  convolvulus_laciniatus_a: {
    id: "convolvulus_laciniatus_a",
    milestone: "Convolvulus",
    manualPage: 382,
    descripcion: "Convolvulus laciniatus - variedad",
    opcionA: {
      label: "Tallos rastreros glabros o casi glabros",
      keyStep: "1",
      especieId: "convolvulus_laciniatus",
    },
    opcionA_prima: {
      label: "Variedad densamente tomentosa",
      keyStep: "1a",
      especieId: "convolvulus_laciniatus_hirsutus",
    },
  },
  convolvulus_b: {
    id: "convolvulus_b",
    milestone: "Convolvulus",
    manualPage: 382,
    descripcion: "Convolvulus - B: pubescencia de las hojas",
    opcionA: {
      label: "Hojas ovado-oblongas, obtusas, acorazonadas, crenado-dentadas y densamente aterciopelado-velludas",
      keyStep: "B",
      especieId: "convolvulus_hermanniae",
    },
    opcionA_prima: {
      label: "Hojas glabras o laxamente pubescentes, no densamente aterciopelado-velludas; sépalos obtusos",
      keyStep: "B'",
      nextNodeId: "convolvulus_c",
    },
  },
  convolvulus_c: {
    id: "convolvulus_c",
    milestone: "Convolvulus",
    manualPage: 382,
    descripcion: "Convolvulus - C: largo de los sépalos",
    opcionA: {
      label: "Sépalos de 3,5-4,5 mm; hojas ovado-hastadas, obtusas, generalmente enteras",
      keyStep: "C",
      especieId: "convolvulus_arvensis",
    },
    opcionA_prima: {
      label: "Sépalos de 6-10 mm",
      keyStep: "C'",
      nextNodeId: "convolvulus_d",
    },
  },
  convolvulus_d: {
    id: "convolvulus_d",
    milestone: "Convolvulus",
    manualPage: 382,
    descripcion: "Convolvulus - D: forma foliar, aurículas y pubescencia",
    opcionA: {
      label: "Hojas ovado-lanceoladas o lanceoladas, con aurículas divergentes; pubescencia muy fina y adpresa",
      keyStep: "D",
      especieId: "convolvulus_bonariensis",
    },
    opcionA_prima: {
      label: "Hojas elípticas u ovadas, con aurículas paralelas o convergentes; pubescencia no adpresa",
      keyStep: "D'",
      especieId: "convolvulus_crenatifolius",
    },
  },
  calystegia_a: {
    id: "calystegia_a",
    milestone: "Calystegia",
    manualPage: 383,
    descripcion: "Calystegia - A: forma de las hojas",
    opcionA: {
      label: "Hojas ovadas o triangulares, acuminadas y hastadas en la base, de hasta 10 cm por 6 cm",
      keyStep: "A",
      especieId: "calystegia_sepium_americana",
    },
    opcionA_prima: {
      label: "Hojas orbicular-reniformes, algo carnosas, de 1-2 cm de diámetro",
      keyStep: "A'",
      especieId: "calystegia_soldanella",
    },
  },
  dichondra_a: {
    id: "dichondra_a",
    milestone: "Dichondra",
    manualPage: 378,
    descripcion: "Dichondra - A: pubescencia y color de la planta",
    opcionA: {
      label: "Plantas verdes, laxamente pubescentes; cáliz de 2 mm; corola amarillenta de la misma longitud que el cáliz",
      keyStep: "A",
      especieId: "dichondra_repens",
    },
    opcionA_prima: {
      label: "Plantas plateadas, densamente seríceo-pubescentes; cáliz de 3 mm",
      keyStep: "A'",
      especieId: "dichondra_sericea",
    },
  },
  cuscuta_a: {
    id: "cuscuta_a",
    milestone: "Cuscuta",
    manualPage: 376,
    descripcion: "Cuscuta - A: dehiscencia del fruto",
    opcionA: {
      label: "Fruto indehiscente",
      keyStep: "A",
      nextNodeId: "cuscuta_b",
    },
    opcionA_prima: {
      label: "Fruto dehiscente por circuncisión transversal marcada en el ovario",
      keyStep: "A'",
      especieId: "cuscuta_xanthochortos_lanceolata",
    },
  },
  cuscuta_b: {
    id: "cuscuta_b",
    milestone: "Cuscuta",
    manualPage: 376,
    descripcion: "Cuscuta - B: crestas dorsales en los lóbulos del cáliz",
    opcionA: {
      label: "Lóbulos del cáliz con crestas dorsales, al menos dos de ellos; flores blancas de 3-3,5 mm",
      keyStep: "B",
      especieId: "cuscuta_cristata",
    },
    opcionA_prima: {
      label: "Lóbulos del cáliz sin crestas en el dorso",
      keyStep: "B'",
      nextNodeId: "cuscuta_c",
    },
  },
  cuscuta_c: {
    id: "cuscuta_c",
    milestone: "Cuscuta",
    manualPage: 376,
    descripcion: "Cuscuta - C: forma de los lóbulos del cáliz y papilas de la corola",
    opcionA: {
      label: "Lóbulos del cáliz obtusos y con bordes algo superpuestos antes de la fecundación; corola sin papilas",
      keyStep: "C",
      nextNodeId: "cuscuta_d",
    },
    opcionA_prima: {
      label: "Lóbulos del cáliz agudos, con bordes no superpuestos; corola con papilas globosas e irregulares",
      keyStep: "C'",
      nextNodeId: "cuscuta_indecora_a",
    },
  },
  cuscuta_d: {
    id: "cuscuta_d",
    milestone: "Cuscuta",
    manualPage: 376,
    descripcion: "Cuscuta - D: forma de los estilos",
    opcionA: {
      label: "Estilos cilíndricos antes de la fecundación, luego engrosados en la mitad inferior",
      keyStep: "D",
      especieId: "cuscuta_obtusiflora",
    },
    opcionA_prima: {
      label: "Estilos siempre cilíndricos, sólo por excepción algo engrosados en la base",
      keyStep: "D'",
      nextNodeId: "cuscuta_e",
    },
  },
  cuscuta_e: {
    id: "cuscuta_e",
    milestone: "Cuscuta",
    manualPage: 376,
    descripcion: "Cuscuta - E: tamaño de las flores fructificadas",
    opcionA: {
      label: "Flores fructificadas de 3-4,5 mm; estilos por lo común más largos que el ovario",
      keyStep: "E",
      especieId: "cuscuta_platyloba",
    },
    opcionA_prima: {
      label: "Flores fructificadas de 2-2,8 mm; estilos más cortos que el ovario",
      keyStep: "E'",
      especieId: "cuscuta_pentagona_calycina",
    },
  },
  cuscuta_indecora_a: {
    id: "cuscuta_indecora_a",
    milestone: "Cuscuta",
    manualPage: 377,
    descripcion: "Cuscuta indecora - variedad",
    opcionA: {
      label: "Cáliz más corto que el tubo corolino; segmentos de la corola más cortos que el tubo",
      keyStep: "5",
      especieId: "cuscuta_indecora",
    },
    opcionA_prima: {
      label: "Cáliz tan largo como el tubo corolino; segmentos de la corola de igual longitud o mayores que el tubo",
      keyStep: "5a",
      especieId: "cuscuta_indecora_longisepala",
    },
  },
  dicot_group_e_b_lower: {
    id: "dicot_group_e_b_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - b: con ovario ínfero, ¿cómo son las flores?",
    opcionA: {
      label: "Flores con perigonio corolino tubuloso cigomorfo; estambres y gineceo unidos formando un ginostemio",
      keyStep: "b",
      nextNodeId: "aristolochiaceae_a",
    },
    opcionA_prima: {
      label: "Flores con cáliz y corola o solo con corola; androceo y gineceo no unidos",
      keyStep: "b'",
      nextNodeId: "dicot_group_e_c_lower",
    },
  },
  aristolochiaceae_a: {
    id: "aristolochiaceae_a",
    milestone: "Aristolochiaceae",
    manualPage: 175,
    descripcion: "Aristolochia - A: hojas y apéndice del perigonio",
    opcionA: {
      label: "Hojas profundamente trilobadas, glabras en el haz y cortamente pubescentes en el envés; plantas volubles robustas; perigonio de 9-10 cm con larguísimo apéndice lineal",
      keyStep: "A",
      especieId: "aristolochia_macroura",
    },
    opcionA_prima: {
      label: "Hojas enteras; limbo del perigonio sin largo apéndice lineal",
      keyStep: "A'",
      nextNodeId: "aristolochiaceae_b",
    },
  },
  aristolochiaceae_b: {
    id: "aristolochiaceae_b",
    milestone: "Aristolochiaceae",
    manualPage: 175,
    descripcion: "Aristolochia - B: forma de hojas y limbo del perigonio",
    opcionA: {
      label: "Hojas reniformes, glabras; hemicriptófitas con raíces muy gruesas; tallos ascendentes de 30-40 cm; limbo del perigonio reniforme y fimbriado",
      keyStep: "B",
      especieId: "aristolochia_fimbriata",
    },
    opcionA_prima: {
      label: "Hojas ovado-triangulares; limbo del perigonio no fimbriado",
      keyStep: "B'",
      nextNodeId: "aristolochiaceae_c",
    },
  },
  aristolochiaceae_c: {
    id: "aristolochiaceae_c",
    milestone: "Aristolochiaceae",
    manualPage: 175,
    descripcion: "Aristolochia - C: forma del limbo del perigonio",
    opcionA: {
      label: "Limbo del perigonio lanceolado; hierba pequeña rizomatosa, con raíces napiformes; tallos rastreros; flores amarillentas de 2 cm",
      keyStep: "C",
      especieId: "aristolochia_stuckertii",
    },
    opcionA_prima: {
      label: "Limbo del perigonio redondeado, con manchas pardas; planta voluble robusta; flores axilares rosadas de unos 4 cm",
      keyStep: "C'",
      especieId: "aristolochia_triangularis",
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
      nextNodeId: "compositae_a",
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
      nextNodeId: "rubiaceae_a",
    },
  },
  dicot_group_e_f_lower: {
    id: "dicot_group_e_f_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - f: con ovario unilocular, ¿cómo son las flores?",
    opcionA: {
      label: "Flores actinomorfas",
      keyStep: "f",
      nextNodeId: "calyceraceae_a",
    },
    opcionA_prima: {
      label: "Flores cigomorfas",
      keyStep: "f'",
      nextNodeId: "dipsacaceae_terminal",
    },
  },
  dicot_group_e_g_lower: {
    id: "dicot_group_e_g_lower",
    milestone: "Grupo E",
    descripcion: "Grupo E - g: con flores no dispuestas en capítulos, ¿la planta es dioica o monoica?",
    opcionA: {
      label: "Plantas dioicas",
      keyStep: "g",
      nextNodeId: "cucurbitaceae_a",
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
      nextNodeId: "symplocaceae_terminal",
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
      nextNodeId: "valeriana_a",
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
      nextNodeId: "campanulaceae_a",
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
      nextNodeId: "caprifoliaceae_a",
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
      nextNodeId: "caprifoliaceae_a",
    },
    opcionA_prima: {
      label: "Hojas simples",
      keyStep: "l'",
      nextNodeId: "rubiaceae_a",
    },
  },
  caprifoliaceae_a: {
    id: "caprifoliaceae_a",
    milestone: "Caprifoliaceae",
    manualPage: 447,
    descripcion: "Caprifoliaceae - A: tipo de hojas y simetría floral",
    opcionA: {
      label: "Hojas compuestas; flores actinomorfas",
      keyStep: "A",
      especieId: "sambucus_australis",
    },
    opcionA_prima: {
      label: "Hojas simples; flores cigomorfas",
      keyStep: "A'",
      especieId: "lonicera_japonica",
    },
  },
  valeriana_a: {
    id: "valeriana_a",
    milestone: "Valerianaceae",
    manualPage: 448,
    descripcion: "Valeriana - A: hábito y tipo de hojas",
    opcionA: {
      label: "Hierba anual, voluble, glabra; hojas inferiores trifolioladas y superiores acorazonadas",
      keyStep: "A",
      especieId: "valeriana_scandens",
    },
    opcionA_prima: {
      label: "Hierbas perennes, erectas; hojas no acorazonadas ni trifolioladas; cáliz nulo o casi nulo",
      keyStep: "A'",
      nextNodeId: "valeriana_b",
    },
  },
  valeriana_b: {
    id: "valeriana_b",
    milestone: "Valeriana",
    manualPage: 450,
    descripcion: "Valeriana - B: división de las hojas",
    opcionA: {
      label: "Hojas enteras, oblongo-lanceoladas; flores verdosas en panojas terminales densas",
      keyStep: "B",
      especieId: "valeriana_salicariaefolia",
    },
    opcionA_prima: {
      label: "Hojas, al menos las superiores, profundamente pinatisectas; flores amarillentas en panojas densas",
      keyStep: "B'",
      especieId: "valeriana_polystachya",
    },
  },
  dipsacaceae_terminal: {
    id: "dipsacaceae_terminal",
    milestone: "Dipsacaceae",
    manualPage: 450,
    descripcion: "Dipsacaceae: único género y especie citados para la zona",
    opcionA: {
      label: "Hierba bienal con aguijones cortos; capítulos terminales hemisféricos",
      keyStep: "1",
      especieId: "dipsacus_fullonum",
    },
    opcionA_prima: {
      label: "Capítulo fructífero ovoideo con páleas espiniformes ganchudas",
      keyStep: "1",
      especieId: "dipsacus_fullonum",
    },
  },
  cucurbitaceae_a: {
    id: "cucurbitaceae_a",
    milestone: "Cucurbitaceae",
    manualPage: 451,
    descripcion: "Cucurbitaceae - A: disposición de las anteras",
    opcionA: {
      label: "Estambres con anteras verticales, longitudinalmente dehiscentes; fruto liso",
      keyStep: "A",
      nextNodeId: "cucurbitaceae_b",
    },
    opcionA_prima: {
      label: "Estambres formando una columna, con una sola antera horizontal; fruto cubierto de púas",
      keyStep: "A'",
      especieId: "cyclanthera_hystrix",
    },
  },
  cucurbitaceae_b: {
    id: "cucurbitaceae_b",
    milestone: "Cucurbitaceae",
    manualPage: 451,
    descripcion: "Cucurbitaceae - B: fijación y forma de las anteras",
    opcionA: {
      label: "Anteras dorsifijas, con lóculos rectos o ligeramente curvos",
      keyStep: "B",
      nextNodeId: "cucurbitaceae_c",
    },
    opcionA_prima: {
      label: "Anteras basifijas, con lóculos flexuosos, 2-3-plegados",
      keyStep: "B'",
      nextNodeId: "cucurbitaceae_d",
    },
  },
  cucurbitaceae_c: {
    id: "cucurbitaceae_c",
    milestone: "Cucurbitaceae",
    manualPage: 451,
    descripcion: "Cucurbitaceae - C: receptáculo masculino y estigmas",
    opcionA: {
      label: "Flor masculina con receptáculo de 3-4 mm; flor femenina con dos estigmas bífidos",
      keyStep: "C",
      nextNodeId: "wilbrandia_a",
    },
    opcionA_prima: {
      label: "Flor masculina con receptáculo de 6-7 mm; flor femenina con cinco estigmas bífidos",
      keyStep: "C'",
      especieId: "cucurbitella_asperata",
    },
  },
  cucurbitaceae_d: {
    id: "cucurbitaceae_d",
    milestone: "Cucurbitaceae",
    manualPage: 451,
    descripcion: "Cucurbitaceae - D: anteras libres o conniventes",
    opcionA: {
      label: "Anteras libres o algo coherentes",
      keyStep: "D",
      especieId: "citrullus_colocynthis",
    },
    opcionA_prima: {
      label: "Anteras conniventes, formando una cabezuela más o menos cilíndrica",
      keyStep: "D'",
      nextNodeId: "cucurbitaceae_e",
    },
  },
  cucurbitaceae_e: {
    id: "cucurbitaceae_e",
    milestone: "Cucurbitaceae",
    manualPage: 451,
    descripcion: "Cucurbitaceae - E: flor femenina y posición de semillas",
    opcionA: {
      label: "Flor femenina sin estaminodios; estigmas bifurcados; semillas horizontales; plantas anuales",
      keyStep: "E",
      especieId: "cucurbita_andreana",
    },
    opcionA_prima: {
      label: "Flor femenina con tres estaminodios; estigmas apenas bilobados; semillas verticales; plantas perennes",
      keyStep: "E'",
      nextNodeId: "cayaponia_a",
    },
  },
  wilbrandia_a: {
    id: "wilbrandia_a",
    milestone: "Wilbrandia",
    manualPage: 452,
    descripcion: "Wilbrandia sagittifolia: variedades citadas",
    opcionA: {
      label: "Hojas trilobado-sagitadas, enteras o algo dentadas, escabroso-hirsutas",
      keyStep: "1",
      especieId: "wilbrandia_sagittifolia_var_villosa",
    },
    opcionA_prima: {
      label: "Hojas profundamente divididas en segmentos angostos",
      keyStep: "1a",
      especieId: "wilbrandia_sagittifolia_var_disecta",
    },
  },
  cayaponia_a: {
    id: "cayaponia_a",
    milestone: "Cayaponia",
    manualPage: 454,
    descripcion: "Cayaponia - A: receptáculo, fruto y zarcillos",
    opcionA: {
      label: "Receptáculo masculino atenuado en tubo; fruto oblongo rojizo de 3-4 cm; zarcillos simples",
      keyStep: "A",
      especieId: "cayaponia_podantha",
    },
    opcionA_prima: {
      label: "Receptáculo masculino redondeado o cortamente atenuado; fruto de unos 10 mm; zarcillos 1-3-fidos",
      keyStep: "A'",
      especieId: "cayaponia_ficifolia",
    },
  },
  campanulaceae_a: {
    id: "campanulaceae_a",
    milestone: "Campanulaceae",
    manualPage: 455,
    descripcion: "Campanulaceae - A: simetría floral y anteras",
    opcionA: {
      label: "Flores cigomorfas; anteras soldadas formando un tubo alrededor del estilo",
      keyStep: "A",
      especieId: "pratia_hederacea",
    },
    opcionA_prima: {
      label: "Flores actinomorfas; anteras libres",
      keyStep: "A'",
      nextNodeId: "campanulaceae_b",
    },
  },
  campanulaceae_b: {
    id: "campanulaceae_b",
    milestone: "Campanulaceae",
    manualPage: 455,
    descripcion: "Campanulaceae - B: pedúnculo e inflorescencia",
    opcionA: {
      label: "Flores sésiles o muy cortamente pedunculadas en las axilas de las hojas; plantas anuales",
      keyStep: "B",
      especieId: "specularia_biflora",
    },
    opcionA_prima: {
      label: "Flores largamente pedunculadas, en cimas corimbiformes terminales; plantas perennes",
      keyStep: "B'",
      especieId: "wahlenbergia_linarioides",
    },
  },
  calyceraceae_a: {
    id: "calyceraceae_a",
    milestone: "Calyceraceae",
    manualPage: 457,
    descripcion: "Calyceraceae - A: dimorfismo floral en el capítulo",
    opcionA: {
      label: "Flores dimorfas: marginales fértiles y centrales estériles; cáliz espinoso en el fruto",
      keyStep: "A",
      nextNodeId: "acicarpha_a",
    },
    opcionA_prima: {
      label: "Flores isomorfas, normalmente todas fértiles; cáliz no espinoso",
      keyStep: "A'",
      especieId: "boopis_anthemoides",
    },
  },
  acicarpha_a: {
    id: "acicarpha_a",
    milestone: "Acicarpha",
    manualPage: 457,
    descripcion: "Acicarpha - A: hábito y hojas",
    opcionA: {
      label: "Hierba perenne, glabra, decumbente; hojas enteras oblanceolado-espatuladas",
      keyStep: "A",
      especieId: "acicarpha_procumbens",
    },
    opcionA_prima: {
      label: "Hierba anual, erecta, glabra; hojas basales arrosetadas y lobadas",
      keyStep: "A'",
      especieId: "acicarpha_tribuloides",
    },
  },
  compositae_a: {
    id: "compositae_a",
    milestone: "Compositae",
    manualPage: 460,
    descripcion: "Compositae: avance parcial por tribus",
    opcionA: {
      label: "Plantas sin látex; capítulos con flores isomorfas hermafroditas, nunca amarillas; estilo con ramas lineales pilosas desde más abajo de la bifurcación",
      keyStep: "Tribu 1",
      nextNodeId: "vernonia_a",
    },
    opcionA_prima: {
      label: "Otras tribus de Compositae",
      keyStep: "Tribus 2-13",
      nextNodeId: "compositae_b",
    },
  },
  compositae_b: {
    id: "compositae_b",
    milestone: "Compositae",
    manualPage: 462,
    descripcion: "Compositae: tribus restantes, avance parcial",
    opcionA: {
      label: "Eupatorieae: anteras obtusas en la base; estilo con ramas lineales largas o claviformes, densamente papilosas",
      keyStep: "Tribu 2",
      nextNodeId: "eupatorieae_a",
    },
    opcionA_prima: {
      label: "Otras tribus de Compositae",
      keyStep: "Tribus 3-13",
      nextNodeId: "compositae_c",
    },
  },
  compositae_c: {
    id: "compositae_c",
    milestone: "Compositae",
    manualPage: 462,
    descripcion: "Compositae: tribus desde Astereae, avance parcial",
    opcionA: {
      label: "Astereae: papus formado por pelos numerosos o pocas cerdas caducas; flores marginales generalmente blancas o amarillas",
      keyStep: "Tribu 3",
      nextNodeId: "astereae_a",
    },
    opcionA_prima: {
      label: "Otras tribus de Compositae",
      keyStep: "Tribus 4-13",
      nextNodeId: "compositae_d",
    },
  },
  compositae_d: {
    id: "compositae_d",
    milestone: "Compositae",
    manualPage: 462,
    descripcion: "Compositae: tribus desde Inuleae, avance parcial",
    opcionA: {
      label: "Inuleae: anteras sagitadas en la base; papus de pelos simples o plumosos; capítulos no unisexuales",
      keyStep: "Tribu 4",
      nextNodeId: "inuleae_a",
    },
    opcionA_prima: {
      label: "Otras tribus de Compositae",
      keyStep: "Tribus 5-13",
      nextNodeId: "heliantheae_a",
    },
  },
  astereae_a: {
    id: "astereae_a",
    milestone: "Astereae",
    manualPage: 462,
    descripcion: "Astereae - A: fertilidad de las flores hermafroditas",
    opcionA: {
      label: "Flores hermafroditas fértiles",
      keyStep: "A",
      nextNodeId: "astereae_b",
    },
    opcionA_prima: {
      label: "Flores hermafroditas con gineceo estéril, sin ovario",
      keyStep: "A'",
      nextNodeId: "astereae_g",
    },
  },
  astereae_g: {
    id: "astereae_g",
    milestone: "Astereae",
    manualPage: 462,
    descripcion: "Astereae - G: distribución de flores masculinas y femeninas",
    opcionA: {
      label: "Plantas monoicas; flores masculinas y femeninas en el mismo capítulo",
      keyStep: "G",
      nextNodeId: "baccharidastrum_a",
    },
    opcionA_prima: {
      label: "Plantas dioicas; flores masculinas y femeninas en plantas distintas",
      keyStep: "G'",
      nextNodeId: "baccharis_a",
    },
  },
  astereae_b: {
    id: "astereae_b",
    milestone: "Astereae",
    manualPage: 462,
    descripcion: "Astereae - B: tipo de papus",
    opcionA: {
      label: "Papus formado por pocas cerdas caducas",
      keyStep: "B",
      nextNodeId: "grindelia_a",
    },
    opcionA_prima: {
      label: "Papus formado por pelos numerosos",
      keyStep: "B'",
      nextNodeId: "astereae_c",
    },
  },
  astereae_c: {
    id: "astereae_c",
    milestone: "Astereae",
    manualPage: 462,
    descripcion: "Astereae - C: rostro del aquenio",
    opcionA: {
      label: "Aquenios con un largo pico en su ápice",
      keyStep: "C",
      especieId: "podocoma_hirsuta",
    },
    opcionA_prima: {
      label: "Aquenios sin pico",
      keyStep: "C'",
      nextNodeId: "astereae_d",
    },
  },
  astereae_d: {
    id: "astereae_d",
    milestone: "Astereae",
    manualPage: 462,
    descripcion: "Astereae - D: forma de los aquenios e inflorescencia",
    opcionA: {
      label: "Aquenios cilíndricos o angulosos, con 8-12 costillas; capítulos pequeños en amplias panojas",
      keyStep: "D",
      especieId: "solidago_chilensis",
    },
    opcionA_prima: {
      label: "Aquenios comprimidos, sin costillas",
      keyStep: "D'",
      nextNodeId: "astereae_e",
    },
  },
  astereae_e: {
    id: "astereae_e",
    milestone: "Astereae",
    manualPage: 477,
    descripcion: "Astereae - E: ramas del estilo y forma de las hojas",
    opcionA: {
      label: "Ramas del estilo lineales; hojas trifurcadas",
      keyStep: "E",
      especieId: "vittadinia_trifurcata",
    },
    opcionA_prima: {
      label: "Ramas del estilo lanceoladas o triangulares; hojas no trifurcadas",
      keyStep: "E'",
      nextNodeId: "astereae_f",
    },
  },
  astereae_f: {
    id: "astereae_f",
    milestone: "Astereae",
    manualPage: 477,
    descripcion: "Astereae - F: flores marginales e involucro",
    opcionA: {
      label: "Flores marginales en 1-2 series; involucro con 3 o más series de brácteas; ramas del estilo lanceoladas",
      keyStep: "F",
      nextNodeId: "aster_a",
    },
    opcionA_prima: {
      label: "Flores marginales en muchas series; involucro con 2 series de brácteas; ramas del estilo triangulares",
      keyStep: "F'",
      nextNodeId: "conyza_a",
    },
  },
  aster_a: {
    id: "aster_a",
    milestone: "Aster",
    manualPage: 478,
    descripcion: "Aster - A: porte, pubescencia y disposición de los capítulos",
    opcionA: {
      label: "Hierbas perennes erectas, ramosas, glabras y hojosas; capítulos numerosos en panojas amplias",
      keyStep: "A",
      nextNodeId: "aster_squamatus_a",
    },
    opcionA_prima: {
      label: "Plantas decumbentes, ascendentes o rara vez erectas, pilosas; capítulos grandes, solitarios o escasos",
      keyStep: "A'",
      nextNodeId: "aster_b",
    },
  },
  aster_squamatus_a: {
    id: "aster_squamatus_a",
    milestone: "Aster squamatus",
    manualPage: 478,
    descripcion: "Aster squamatus - variedad",
    opcionA: {
      label: "Hojas lanceolado-lineales; capítulos de tamaño típico",
      keyStep: "1",
      especieId: "aster_squamatus",
    },
    opcionA_prima: {
      label: "Planta robusta, con hojas graminiformes y capítulos mayores; involucro de 8-9 mm",
      keyStep: "1a",
      especieId: "aster_squamatus_var_graminifolius",
    },
  },
  aster_b: {
    id: "aster_b",
    milestone: "Aster",
    manualPage: 478,
    descripcion: "Aster - B: forma del involucro y largo de las lígulas",
    opcionA: {
      label: "Involucro hemisférico; lígulas de 7-14 mm, mucho más largas que el involucro",
      keyStep: "B",
      nextNodeId: "aster_c",
    },
    opcionA_prima: {
      label: "Involucro campanulado; lígulas de 3-4 mm, apenas más largas que el involucro",
      keyStep: "B'",
      nextNodeId: "aster_d",
    },
  },
  aster_c: {
    id: "aster_c",
    milestone: "Aster",
    manualPage: 478,
    descripcion: "Aster - C: color de las flores marginales e indumento",
    opcionA: {
      label: "Flores marginales amarillas; plantas albo-tomentosas; hojas oblongo-lanceoladas de 1,5-2,5 cm",
      keyStep: "C",
      especieId: "aster_calendulaceus",
    },
    opcionA_prima: {
      label: "Flores marginales blancas o rosadas; plantas laxamente híspidas; hojas inferiores espatuladas de 3-4 cm",
      keyStep: "C'",
      especieId: "aster_decumbens",
    },
  },
  aster_d: {
    id: "aster_d",
    milestone: "Aster",
    manualPage: 478,
    descripcion: "Aster - D: posición e indumento de los tallos",
    opcionA: {
      label: "Tallos erectos o ascendentes, lanosos en la parte superior y glabrescentes abajo",
      keyStep: "D",
      especieId: "aster_argentinensis",
    },
    opcionA_prima: {
      label: "Tallos decumbentes o rara vez ascendentes",
      keyStep: "D'",
      nextNodeId: "aster_e",
    },
  },
  aster_e: {
    id: "aster_e",
    milestone: "Aster",
    manualPage: 478,
    descripcion: "Aster - E: coloración e indumento general",
    opcionA: {
      label: "Plantas verde-grisáceas, laxamente vellosas; hojas caulinares lanceoladas con margen crespo",
      keyStep: "E",
      especieId: "aster_montevidensis",
    },
    opcionA_prima: {
      label: "Plantas albo-lanosas; hojas inferiores oblanceolado-espatuladas de 5-7 cm",
      keyStep: "E'",
      especieId: "aster_haplopappus",
    },
  },
  conyza_a: {
    id: "conyza_a",
    milestone: "Conyza",
    manualPage: 479,
    descripcion: "Conyza - A: duración y disposición de hojas/capítulos",
    opcionA: {
      label: "Hierbas perennes, con hojas en roseta y tallos paucifoliados; capítulos en corimbos paucicéfalos",
      keyStep: "A",
      nextNodeId: "conyza_b",
    },
    opcionA_prima: {
      label: "Hierbas anuales, con tallos densamente hojosos",
      keyStep: "A'",
      nextNodeId: "conyza_d",
    },
  },
  conyza_b: {
    id: "conyza_b",
    milestone: "Conyza",
    manualPage: 479,
    descripcion: "Conyza - B: indumento de plantas perennes",
    opcionA: {
      label: "Plantas glabras; hojas caulinares dilatadas y semiabrazadoras en la base",
      keyStep: "B",
      especieId: "conyza_rivularis",
    },
    opcionA_prima: {
      label: "Plantas velludas",
      keyStep: "B'",
      nextNodeId: "conyza_c",
    },
  },
  conyza_c: {
    id: "conyza_c",
    milestone: "Conyza",
    manualPage: 479,
    descripcion: "Conyza - C: raíz de plantas perennes velludas",
    opcionA: {
      label: "Raíz tuberiforme; tallo erecto simple de 20-50 cm",
      keyStep: "C",
      especieId: "conyza_monorchis",
    },
    opcionA_prima: {
      label: "Raíz no engrosada; tallos erectos sencillos de 30-80 cm",
      keyStep: "C'",
      especieId: "conyza_chilensis",
    },
  },
  conyza_d: {
    id: "conyza_d",
    milestone: "Conyza",
    manualPage: 480,
    descripcion: "Conyza - D: indumento de hierbas anuales",
    opcionA: {
      label: "Plantas completamente glabras; hojas lineales, obtusas y semienvainadoras",
      keyStep: "D",
      especieId: "conyza_pampeana",
    },
    opcionA_prima: {
      label: "Plantas más o menos velludas, por lo menos en bordes y nervaduras de las hojas",
      keyStep: "D'",
      nextNodeId: "conyza_e",
    },
  },
  conyza_e: {
    id: "conyza_e",
    milestone: "Conyza",
    manualPage: 480,
    descripcion: "Conyza - E: cantidad y disposición de capítulos",
    opcionA: {
      label: "Capítulos solitarios en el ápice de las ramas o formando un corimbo paucicéfalo muy laxo",
      keyStep: "E",
      nextNodeId: "conyza_f",
    },
    opcionA_prima: {
      label: "Capítulos muy numerosos, corimbosos o apanojados",
      keyStep: "E'",
      nextNodeId: "conyza_g",
    },
  },
  conyza_f: {
    id: "conyza_f",
    milestone: "Conyza",
    manualPage: 480,
    descripcion: "Conyza - F: pubescencia de las hojas",
    opcionA: {
      label: "Hojas glabras salvo en bordes y nervadura, lanceoladas, agudas, enteras o dentadas",
      keyStep: "F",
      especieId: "conyza_lorentzii",
    },
    opcionA_prima: {
      label: "Hojas densamente pubescentes; inferiores oblanceoladas, lobadas o enteras",
      keyStep: "F'",
      nextNodeId: "conyza_bonariensis_a",
    },
  },
  conyza_g: {
    id: "conyza_g",
    milestone: "Conyza",
    manualPage: 480,
    descripcion: "Conyza - G: indumento del involucro",
    opcionA: {
      label: "Involucro densamente velludo",
      keyStep: "G",
      nextNodeId: "conyza_bonariensis_a",
    },
    opcionA_prima: {
      label: "Involucro glabro o con algunos pelos dispersos",
      keyStep: "G'",
      nextNodeId: "conyza_h",
    },
  },
  conyza_h: {
    id: "conyza_h",
    milestone: "Conyza",
    manualPage: 480,
    descripcion: "Conyza - H: anchura y forma de las hojas",
    opcionA: {
      label: "Hojas estrechamente lineales, de 1-1,5 mm de ancho; inferiores generalmente pinatisectas",
      keyStep: "H",
      especieId: "conyza_blakei",
    },
    opcionA_prima: {
      label: "Hojas lanceoladas, de más de 2 mm de ancho; inferiores aserradas o lobuladas",
      keyStep: "H'",
      especieId: "conyza_sordescens",
    },
  },
  conyza_bonariensis_a: {
    id: "conyza_bonariensis_a",
    milestone: "Conyza bonariensis",
    manualPage: 481,
    descripcion: "Conyza bonariensis - variedades citadas",
    opcionA: {
      label: "Hojas no estrechamente lineales y capítulos sin reducción marcada del involucro",
      keyStep: "6",
      especieId: "conyza_bonariensis",
    },
    opcionA_prima: {
      label: "Variedades con hojas muy angostas o capítulos de involucro pequeño",
      keyStep: "6a-6b",
      nextNodeId: "conyza_bonariensis_b",
    },
  },
  conyza_bonariensis_b: {
    id: "conyza_bonariensis_b",
    milestone: "Conyza bonariensis",
    manualPage: 481,
    descripcion: "Conyza bonariensis - separación de variedades",
    opcionA: {
      label: "Hojas estrechamente lineales, de sólo 1-2 mm de ancho",
      keyStep: "6a",
      especieId: "conyza_bonariensis_var_angustifolia",
    },
    opcionA_prima: {
      label: "Capítulos con involucro de sólo 4-5 mm de diámetro",
      keyStep: "6b",
      especieId: "conyza_bonariensis_var_microcephala",
    },
  },
  baccharidastrum_a: {
    id: "baccharidastrum_a",
    milestone: "Baccharidastrum",
    manualPage: 482,
    descripcion: "Baccharidastrum - A: forma de las hojas",
    opcionA: {
      label: "Hojas ovado-lanceoladas, acuminadas, atenuadas en la base, de 5,5-11 cm por 1,3-4 cm",
      keyStep: "A",
      especieId: "baccharidastrum_triplinervium",
    },
    opcionA_prima: {
      label: "Hojas lineales o lineal-lanceoladas, glabras, de 6-13 cm por 2-18 mm",
      keyStep: "A'",
      especieId: "baccharidastrum_argutum",
    },
  },
  baccharis_a: {
    id: "baccharis_a",
    milestone: "Baccharis",
    manualPage: 483,
    descripcion: "Baccharis - A: tallos alados",
    opcionA: {
      label: "Tallos alados",
      keyStep: "A",
      nextNodeId: "baccharis_b",
    },
    opcionA_prima: {
      label: "Tallos lisos o estriados, sin alas",
      keyStep: "A'",
      nextNodeId: "baccharis_f",
    },
  },
  baccharis_b: {
    id: "baccharis_b",
    milestone: "Baccharis",
    manualPage: 483,
    descripcion: "Baccharis - B: hojas en tallos alados",
    opcionA: {
      label: "Hojas grandes, alternas, oblanceoladas, enteras, glabras, de 5-7,5 cm",
      keyStep: "B",
      especieId: "baccharis_phyteumoides",
    },
    opcionA_prima: {
      label: "Hojas reducidas a brácteas",
      keyStep: "B'",
      nextNodeId: "baccharis_c",
    },
  },
  baccharis_c: {
    id: "baccharis_c",
    milestone: "Baccharis",
    manualPage: 483,
    descripcion: "Baccharis - C: número de alas en tallos afilos",
    opcionA: {
      label: "Tallos 2-alados",
      keyStep: "C",
      especieId: "baccharis_articulata",
    },
    opcionA_prima: {
      label: "Tallos 3-alados",
      keyStep: "C'",
      nextNodeId: "baccharis_d",
    },
  },
  baccharis_d: {
    id: "baccharis_d",
    milestone: "Baccharis",
    manualPage: 483,
    descripcion: "Baccharis - D: porte en tallos 3-alados",
    opcionA: {
      label: "Arbustos de 0,60-2 m; involucro femenino de 3-5 mm de alto",
      keyStep: "D",
      nextNodeId: "baccharis_e",
    },
    opcionA_prima: {
      label: "Sufrútice de 30-50 cm; involucro femenino de 5-6 mm por 2-3 mm",
      keyStep: "D'",
      especieId: "baccharis_trimera",
    },
  },
  baccharis_e: {
    id: "baccharis_e",
    milestone: "Baccharis",
    manualPage: 483,
    descripcion: "Baccharis - E: tamaño del involucro femenino",
    opcionA: {
      label: "Involucro femenino de 3-3,5 mm; capítulos sésiles en espigas laxas de glomérulos",
      keyStep: "E",
      especieId: "baccharis_microcephala",
    },
    opcionA_prima: {
      label: "Involucro femenino de 4-5 mm; capítulos sésiles o brevemente pedicelados en espigas o racimos laxos",
      keyStep: "E'",
      especieId: "baccharis_penningtonii",
    },
  },
  baccharis_f: {
    id: "baccharis_f",
    milestone: "Baccharis",
    manualPage: 483,
    descripcion: "Baccharis - F: hojas pinatisectas o enteras/dentadas",
    opcionA: {
      label: "Hojas pinatisectas, con raquis y segmentos lineales de 1,5-3,5 cm",
      keyStep: "F",
      especieId: "baccharis_ulicina",
    },
    opcionA_prima: {
      label: "Hojas enteras o dentadas, a veces casi nulas",
      keyStep: "F'",
      nextNodeId: "baccharis_g",
    },
  },
  baccharis_g: {
    id: "baccharis_g",
    milestone: "Baccharis",
    manualPage: 483,
    descripcion: "Baccharis - G: capítulos sésiles o pedicelados",
    opcionA: {
      label: "Capítulos sésiles o brevísimamente pedicelados, aglomerados o espigados",
      keyStep: "G",
      nextNodeId: "baccharis_h",
    },
    opcionA_prima: {
      label: "Capítulos pedicelados, solitarios o dispuestos en corimbos o panojas",
      keyStep: "G'",
      nextNodeId: "baccharis_m",
    },
  },
  baccharis_h: {
    id: "baccharis_h",
    milestone: "Baccharis",
    manualPage: 483,
    descripcion: "Baccharis - H: forma del involucro femenino",
    opcionA: {
      label: "Capítulos femeninos con involucro cilíndrico de 6-10 mm de alto; flores 6-20",
      keyStep: "H",
      nextNodeId: "baccharis_i",
    },
    opcionA_prima: {
      label: "Capítulos femeninos con involucro acampanado, de 4-7 mm de alto; flores numerosas",
      keyStep: "H'",
      nextNodeId: "baccharis_k",
    },
  },
  baccharis_i: {
    id: "baccharis_i",
    milestone: "Baccharis",
    manualPage: 484,
    descripcion: "Baccharis - I: posición de capítulos con involucro cilíndrico",
    opcionA: {
      label: "Capítulos amontonados o espigados en el ápice de las ramitas; hojas lineales",
      keyStep: "I",
      especieId: "baccharis_genistifolia",
    },
    opcionA_prima: {
      label: "Capítulos sésiles en las axilas de las hojas superiores, formando una espiga hojosa",
      keyStep: "I'",
      nextNodeId: "baccharis_j",
    },
  },
  baccharis_j: {
    id: "baccharis_j",
    milestone: "Baccharis",
    manualPage: 484,
    descripcion: "Baccharis - J: forma de hojas en espiga hojosa",
    opcionA: {
      label: "Hojas lineales u oblanceolado-lineales, de 12-25 mm por 1-4 mm",
      keyStep: "J",
      especieId: "baccharis_rufescens",
    },
    opcionA_prima: {
      label: "Hojas elípticas u obovadas, de 12-30 mm por 6-12 mm",
      keyStep: "J'",
      especieId: "baccharis_sessiliflora_var_stuckertii",
    },
  },
  baccharis_k: {
    id: "baccharis_k",
    milestone: "Baccharis",
    manualPage: 484,
    descripcion: "Baccharis - K: capítulos aglomerados o solitarios axilares",
    opcionA: {
      label: "Capítulos aglomerados, formando espigas terminales casi desprovistas de hojas",
      keyStep: "K",
      nextNodeId: "baccharis_l",
    },
    opcionA_prima: {
      label: "Capítulos sésiles, solitarios en las axilas de las hojas superiores, formando una falsa espiga",
      keyStep: "K'",
      especieId: "baccharis_recurvata",
    },
  },
  baccharis_l: {
    id: "baccharis_l",
    milestone: "Baccharis",
    manualPage: 484,
    descripcion: "Baccharis - L: disposición y forma de hojas",
    opcionA: {
      label: "Hojas alternas, lanceoladas, trinervadas, de 7-10 cm por 1,2-2 cm",
      keyStep: "L",
      especieId: "baccharis_phyteuma",
    },
    opcionA_prima: {
      label: "Hojas opuestas, lineal-lanceoladas, con dientes distantes, de 4-8 cm por 2-7 mm",
      keyStep: "L'",
      especieId: "baccharis_spicata",
    },
  },
  baccharis_m: {
    id: "baccharis_m",
    milestone: "Baccharis",
    manualPage: 484,
    descripcion: "Baccharis - M: plantas áfilas o con hojas normales",
    opcionA: {
      label: "Plantas adultas áfilas o con alguna hojita reducida lineal; capítulos solitarios en seudopanoja amplia",
      keyStep: "M",
      especieId: "baccharis_notosergila",
    },
    opcionA_prima: {
      label: "Plantas adultas con hojas normales",
      keyStep: "M'",
      nextNodeId: "baccharis_n",
    },
  },
  baccharis_n: {
    id: "baccharis_n",
    milestone: "Baccharis",
    manualPage: 484,
    descripcion: "Baccharis - N: capítulos solitarios/paucicéfalos o pluricéfalos",
    opcionA: {
      label: "Capítulos solitarios o en corimbos paucicéfalos; hierba rizomatosa de 1-1,5 m",
      keyStep: "N",
      especieId: "baccharis_juncea",
    },
    opcionA_prima: {
      label: "Capítulos en corimbos o panojas pluricéfalas",
      keyStep: "N'",
      nextNodeId: "baccharis_o",
    },
  },
  baccharis_o: {
    id: "baccharis_o",
    milestone: "Baccharis",
    manualPage: 485,
    descripcion: "Baccharis - O: anchura y forma general de las hojas",
    opcionA: {
      label: "Hojas lineales, enteras, de 1-3 mm de ancho",
      keyStep: "O",
      nextNodeId: "baccharis_p",
    },
    opcionA_prima: {
      label: "Hojas lanceoladas, ovadas u obovadas, aserradas o dentadas, de 2-30 mm de ancho",
      keyStep: "O'",
      nextNodeId: "baccharis_r",
    },
  },
  baccharis_p: {
    id: "baccharis_p",
    milestone: "Baccharis",
    manualPage: 485,
    descripcion: "Baccharis - P: capítulos corimbosos o racimosos/apanojados",
    opcionA: {
      label: "Capítulos corimbosos",
      keyStep: "P",
      nextNodeId: "baccharis_pingraea_a",
    },
    opcionA_prima: {
      label: "Capítulos racimosos o apanojados",
      keyStep: "P'",
      nextNodeId: "baccharis_q",
    },
  },
  baccharis_q: {
    id: "baccharis_q",
    milestone: "Baccharis",
    manualPage: 485,
    descripcion: "Baccharis - Q: indumento en hojas lineales",
    opcionA: {
      label: "Plantas glabras; hojas lineales de 15-25 mm por 1-2,5 mm",
      keyStep: "Q",
      especieId: "baccharis_coridifolia",
    },
    opcionA_prima: {
      label: "Plantas blanco-tomentosas; hojas lineales de 8-25 mm por 0,5-1 mm",
      keyStep: "Q'",
      especieId: "baccharis_artemisioides",
    },
  },
  baccharis_r: {
    id: "baccharis_r",
    milestone: "Baccharis",
    manualPage: 485,
    descripcion: "Baccharis - R: disposición y textura de las hojas anchas",
    opcionA: {
      label: "Hojas semiopuestas, coriáceas, obovadas, obtusas, sinuado-dentadas",
      keyStep: "R",
      especieId: "baccharis_subopposita",
    },
    opcionA_prima: {
      label: "Hojas alternas, herbáceas, lanceoladas u ovado-lanceoladas, aserradas",
      keyStep: "R'",
      nextNodeId: "baccharis_s",
    },
  },
  baccharis_s: {
    id: "baccharis_s",
    milestone: "Baccharis",
    manualPage: 485,
    descripcion: "Baccharis - S: coloración y glándulas foliares",
    opcionA: {
      label: "Hojas glabras, pálidas en el envés, con puntos glandulosos",
      keyStep: "S",
      especieId: "baccharis_melastomaefolia",
    },
    opcionA_prima: {
      label: "Hojas concolores; capítulos corimbosos; involucro femenino de 3-4 mm de alto",
      keyStep: "S'",
      nextNodeId: "baccharis_t",
    },
  },
  baccharis_t: {
    id: "baccharis_t",
    milestone: "Baccharis",
    manualPage: 485,
    descripcion: "Baccharis - T: arbustos u hierbas gemíferas",
    opcionA: {
      label: "Arbustos glandulosos de 1-2 m; hojas aserradas en la mitad superior",
      keyStep: "T",
      especieId: "baccharis_salicifolia",
    },
    opcionA_prima: {
      label: "Hierbas con raíces gemíferas, de 0,5-1 m; hojas uniformemente aserradas desde cerca de la base",
      keyStep: "T'",
      nextNodeId: "baccharis_u",
    },
  },
  baccharis_u: {
    id: "baccharis_u",
    milestone: "Baccharis",
    manualPage: 485,
    descripcion: "Baccharis - U: forma de hojas en hierbas gemíferas",
    opcionA: {
      label: "Hojas ovado-lanceoladas, pecioladas, de 3-9 cm por 1-3 cm",
      keyStep: "U",
      especieId: "baccharis_medullosa",
    },
    opcionA_prima: {
      label: "Hojas lineal-lanceoladas, de 3,5-9 cm por 2-9 mm",
      keyStep: "U'",
      nextNodeId: "baccharis_pingraea_a",
    },
  },
  baccharis_pingraea_a: {
    id: "baccharis_pingraea_a",
    milestone: "Baccharis pingraea",
    manualPage: 488,
    descripcion: "Baccharis pingraea - forma",
    opcionA: {
      label: "Hojas lineales o lineal-lanceoladas, de 2-9 mm de ancho",
      keyStep: "21",
      especieId: "baccharis_pingraea",
    },
    opcionA_prima: {
      label: "Hojas lineal-filiformes, frecuentemente enteras, de 0,5-1,5 mm de ancho",
      keyStep: "21a",
      especieId: "baccharis_pingraea_f_angustissima",
    },
  },
  inuleae_a: {
    id: "inuleae_a",
    milestone: "Inuleae",
    manualPage: 462,
    descripcion: "Inuleae - A: páleas en el receptáculo",
    opcionA: {
      label: "Receptáculo provisto de páleas que envuelven más o menos a las flores",
      keyStep: "A",
      nextNodeId: "micropsis_a",
    },
    opcionA_prima: {
      label: "Receptáculo desprovisto de páleas",
      keyStep: "A'",
      nextNodeId: "inuleae_b",
    },
  },
  inuleae_b: {
    id: "inuleae_b",
    milestone: "Inuleae",
    manualPage: 462,
    descripcion: "Inuleae - B: pelos del papus",
    opcionA: {
      label: "Pelos del papus plumosos",
      keyStep: "B",
      nextNodeId: "inuleae_c",
    },
    opcionA_prima: {
      label: "Pelos del papus simples, no plumosos",
      keyStep: "B'",
      nextNodeId: "inuleae_d",
    },
  },
  inuleae_d: {
    id: "inuleae_d",
    milestone: "Inuleae",
    manualPage: 462,
    descripcion: "Inuleae - D: rostro de los aquenios",
    opcionA: {
      label: "Aquenios largamente rostrados",
      keyStep: "D",
      nextNodeId: "chevreulia_a",
    },
    opcionA_prima: {
      label: "Aquenios sin rostro",
      keyStep: "D'",
      nextNodeId: "inuleae_e",
    },
  },
  inuleae_e: {
    id: "inuleae_e",
    milestone: "Inuleae",
    manualPage: 462,
    descripcion: "Inuleae - E: división e indumento del estilo",
    opcionA: {
      label: "Estilo pubescente en la parte superior, apenas dividido en el ápice",
      keyStep: "E",
      nextNodeId: "inuleae_f",
    },
    opcionA_prima: {
      label: "Estilo profundamente dividido en la parte superior, con ramitas truncadas en el ápice",
      keyStep: "E'",
      nextNodeId: "inuleae_h",
    },
  },
  inuleae_c: {
    id: "inuleae_c",
    milestone: "Inuleae",
    manualPage: 462,
    descripcion: "Inuleae - C: pubescencia de aquenios y tipo de papus plumoso",
    opcionA: {
      label: "Aquenios densamente seríceo-pubescentes, con 8-12 pelos simples rizados en la punta",
      keyStep: "C",
      especieId: "berroa_gnaphalioides",
    },
    opcionA_prima: {
      label: "Aquenios con pubescencia corta únicamente",
      keyStep: "C'",
      especieId: "facelis_retusa",
    },
  },
  inuleae_f: {
    id: "inuleae_f",
    milestone: "Inuleae",
    manualPage: 462,
    descripcion: "Inuleae - F: disposición de los capítulos",
    opcionA: {
      label: "Capítulos sésiles, en glomérulos agrupados en espigas o panojas de espigas",
      keyStep: "F",
      nextNodeId: "pterocaulon_a",
    },
    opcionA_prima: {
      label: "Capítulos pedicelados, dispuestos en corimbos",
      keyStep: "F'",
      nextNodeId: "inuleae_g",
    },
  },
  inuleae_g: {
    id: "inuleae_g",
    milestone: "Inuleae",
    manualPage: 462,
    descripcion: "Inuleae - G: número de flores hermafroditas y hábito",
    opcionA: {
      label: "Flores hermafroditas numerosas; hierbas",
      keyStep: "G",
      especieId: "pluchea_sagittalis",
    },
    opcionA_prima: {
      label: "Flores hermafroditas 1-15; arbustos o árboles",
      keyStep: "G'",
      nextNodeId: "tessaria_a",
    },
  },
  tessaria_a: {
    id: "tessaria_a",
    milestone: "Tessaria",
    manualPage: 489,
    descripcion: "Tessaria - A: porte y forma del involucro",
    opcionA: {
      label: "Árbol de 3-8 m; hojas lanceoladas; involucro turbinado de 5-6 mm",
      keyStep: "A",
      especieId: "tessaria_integrifolia",
    },
    opcionA_prima: {
      label: "Sufrútice de 1-1,5 m, cano-tomentoso; hojas oblanceoladas; involucro acampanado de 7-8 mm",
      keyStep: "A'",
      especieId: "tessaria_absinthioides",
    },
  },
  pterocaulon_a: {
    id: "pterocaulon_a",
    milestone: "Pterocaulon",
    manualPage: 491,
    descripcion: "Pterocaulon - A: hierba alta o sufrútices bajos",
    opcionA: {
      label: "Hierba perenne de 1-1,5 m; tallos erectos, sencillos, 5-alados y hojosos",
      keyStep: "A",
      especieId: "pterocaulon_interruptum",
    },
    opcionA_prima: {
      label: "Sufrútices de 50-80 cm; capítulos en espigas simples o ramificadas en la base",
      keyStep: "A'",
      nextNodeId: "pterocaulon_b",
    },
  },
  pterocaulon_b: {
    id: "pterocaulon_b",
    milestone: "Pterocaulon",
    manualPage: 491,
    descripcion: "Pterocaulon - B: compacidad de las espigas",
    opcionA: {
      label: "Espigas simples, muy compactas en la parte superior, de unos 10 cm",
      keyStep: "B",
      especieId: "pterocaulon_lorentzii",
    },
    opcionA_prima: {
      label: "Espigas simples o ramificadas, laxas; tallos con muchas hojas",
      keyStep: "B'",
      nextNodeId: "pterocaulon_c",
    },
  },
  pterocaulon_c: {
    id: "pterocaulon_c",
    milestone: "Pterocaulon",
    manualPage: 491,
    descripcion: "Pterocaulon - C: forma de las hojas",
    opcionA: {
      label: "Hojas oblanceoladas, aserradas, de 7-9 cm por 2-3 cm",
      keyStep: "C",
      especieId: "pterocaulon_cordobense",
    },
    opcionA_prima: {
      label: "Hojas lineal-lanceoladas, enteras, de 7-12 cm por 4-12 mm",
      keyStep: "C'",
      especieId: "pterocaulon_subvirgatum",
    },
  },
  micropsis_a: {
    id: "micropsis_a",
    milestone: "Micropsis",
    manualPage: 492,
    descripcion: "Micropsis - A: disposición de capítulos",
    opcionA: {
      label: "Capítulos solitarios en las axilas de las hojas, formando una larga seudoespiga",
      keyStep: "A",
      especieId: "micropsis_ostenii",
    },
    opcionA_prima: {
      label: "Capítulos sésiles en las axilas de las hojas superiores, formando una seudocabezuela",
      keyStep: "A'",
      nextNodeId: "micropsis_b",
    },
  },
  micropsis_b: {
    id: "micropsis_b",
    milestone: "Micropsis",
    manualPage: 493,
    descripcion: "Micropsis - B: número de flores femeninas",
    opcionA: {
      label: "Flores femeninas 15-30; flores hermafroditas 4-5, sin papus",
      keyStep: "B",
      especieId: "micropsis_dasycarpa",
    },
    opcionA_prima: {
      label: "Flores femeninas 6-8; flores hermafroditas 4, con papus coroniforme cortísimo",
      keyStep: "B'",
      especieId: "micropsis_spathulata",
    },
  },
  chevreulia_a: {
    id: "chevreulia_a",
    milestone: "Chevreulia",
    manualPage: 493,
    descripcion: "Chevreulia - A: disposición de las hojas",
    opcionA: {
      label: "Hojas arrosetadas, espatuladas, enteras, obtusas y brevemente mucronadas",
      keyStep: "A",
      especieId: "chevreulia_sarmentosa",
    },
    opcionA_prima: {
      label: "Hojas opuestas, distribuidas a lo largo del tallo, oblongo-lanceoladas y acuminadas",
      keyStep: "A'",
      especieId: "chevreulia_acuminata",
    },
  },
  achyrocline_a: {
    id: "achyrocline_a",
    milestone: "Achyrocline",
    manualPage: 494,
    descripcion: "Achyrocline - A: tallos alados",
    opcionA: {
      label: "Tallos sin alas; hojas lineal-lanceoladas, blanco-tomentosas, de 3-5 cm",
      keyStep: "A",
      especieId: "achyrocline_satureioides",
    },
    opcionA_prima: {
      label: "Tallos alados, lanuginosos; hojas lineal-lanceoladas de 5-8 cm",
      keyStep: "A'",
      especieId: "achyrocline_alata_var_vauthieriana",
    },
  },
  inuleae_h: {
    id: "inuleae_h",
    milestone: "Inuleae",
    manualPage: 462,
    descripcion: "Inuleae - H: merosidad de las flores hermafroditas",
    opcionA: {
      label: "Flores hermafroditas 4-meras",
      keyStep: "H",
      especieId: "stuckertiella_peregrina",
    },
    opcionA_prima: {
      label: "Flores hermafroditas 5-meras",
      keyStep: "H'",
      nextNodeId: "inuleae_i",
    },
  },
  inuleae_i: {
    id: "inuleae_i",
    milestone: "Inuleae",
    manualPage: 463,
    descripcion: "Inuleae - I: capítulos paucifloros o plurifloros",
    opcionA: {
      label: "Capítulos paucifloros: flores marginales 3-6 y flores del disco 1-3",
      keyStep: "I",
      nextNodeId: "achyrocline_a",
    },
    opcionA_prima: {
      label: "Capítulos plurifloros",
      keyStep: "I'",
      nextNodeId: "inuleae_j",
    },
  },
  inuleae_j: {
    id: "inuleae_j",
    milestone: "Inuleae",
    manualPage: 463,
    descripcion: "Inuleae - J: forma de capítulos y aquenios",
    opcionA: {
      label: "Capítulos cilíndricos; aquenios pilosos",
      keyStep: "J",
      especieId: "lucilia_acutifolia",
    },
    opcionA_prima: {
      label: "Capítulos acampanados; aquenios glabros o granulosos",
      keyStep: "J'",
      nextNodeId: "gnaphalium_a",
    },
  },
  gnaphalium_a: {
    id: "gnaphalium_a",
    milestone: "Gnaphalium",
    manualPage: 496,
    descripcion: "Gnaphalium - A: pelos del papus soldados o libres",
    opcionA: {
      label: "Pelos del papus no soldados en la base, desprendidos independientemente",
      keyStep: "A",
      nextNodeId: "gnaphalium_b",
    },
    opcionA_prima: {
      label: "Pelos del papus soldados entre sí en la base, desprendidos en conjunto",
      keyStep: "A'",
      nextNodeId: "gnaphalium_c",
    },
  },
  gnaphalium_b: {
    id: "gnaphalium_b",
    milestone: "Gnaphalium",
    manualPage: 496,
    descripcion: "Gnaphalium - B: indumento foliar en subgénero Gnaphalium",
    opcionA: {
      label: "Hojas densamente tomentosas en ambas caras, oblanceolado-lineales, de 4-12 cm",
      keyStep: "B",
      especieId: "gnaphalium_cheiranthifolium",
    },
    opcionA_prima: {
      label: "Hojas glanduloso-pubescentes en el haz y densamente tomentosas en el envés, lineales, de 3,5-8 cm",
      keyStep: "B'",
      especieId: "gnaphalium_gaudichaudianum",
    },
  },
  gnaphalium_c: {
    id: "gnaphalium_c",
    milestone: "Gnaphalium",
    manualPage: 496,
    descripcion: "Gnaphalium - C: pubescencia glandulosa o lanosa",
    opcionA: {
      label: "Hojas con pubescencia glandulosa y lanosa mezcladas en el haz",
      keyStep: "C",
      especieId: "gnaphalium_platense",
    },
    opcionA_prima: {
      label: "Hojas con pubescencia lanosa únicamente",
      keyStep: "C'",
      nextNodeId: "gnaphalium_d",
    },
  },
  gnaphalium_d: {
    id: "gnaphalium_d",
    milestone: "Gnaphalium",
    manualPage: 496,
    descripcion: "Gnaphalium - D: ápice de las brácteas interiores",
    opcionA: {
      label: "Brácteas interiores del involucro obtusas",
      keyStep: "D",
      nextNodeId: "gnaphalium_e",
    },
    opcionA_prima: {
      label: "Brácteas interiores del involucro agudas o acuminadas",
      keyStep: "D'",
      nextNodeId: "gnaphalium_g",
    },
  },
  gnaphalium_e: {
    id: "gnaphalium_e",
    milestone: "Gnaphalium",
    manualPage: 496,
    descripcion: "Gnaphalium - E: hojas discolores o concolores",
    opcionA: {
      label: "Hojas discolores, glabras o casi glabras en el haz e incano-tomentosas en el envés",
      keyStep: "E",
      especieId: "gnaphalium_spicatum",
    },
    opcionA_prima: {
      label: "Hojas concolores, más o menos densamente lanosas en ambas caras",
      keyStep: "E'",
      nextNodeId: "gnaphalium_f",
    },
  },
  gnaphalium_f: {
    id: "gnaphalium_f",
    milestone: "Gnaphalium",
    manualPage: 496,
    descripcion: "Gnaphalium - F: compacidad de las espigas",
    opcionA: {
      label: "Espigas laxas, interrumpidas, simples o compuestas; hojas espatuladas de 2-8 cm",
      keyStep: "F",
      especieId: "gnaphalium_calviceps",
    },
    opcionA_prima: {
      label: "Espigas densas, continuas; hojas anchamente espatuladas de 1,5-5 cm",
      keyStep: "F'",
      especieId: "gnaphalium_subfalcatum",
    },
  },
  gnaphalium_g: {
    id: "gnaphalium_g",
    milestone: "Gnaphalium",
    manualPage: 496,
    descripcion: "Gnaphalium - G: hojas discolores o concolores",
    opcionA: {
      label: "Hojas discolores, glabras o casi glabras en el haz y densamente cano-tomentosas en el envés",
      keyStep: "G",
      especieId: "gnaphalium_purpureum",
    },
    opcionA_prima: {
      label: "Hojas concolores, tomentosas o lanosas en ambas caras",
      keyStep: "G'",
      nextNodeId: "gnaphalium_h",
    },
  },
  gnaphalium_h: {
    id: "gnaphalium_h",
    milestone: "Gnaphalium",
    manualPage: 496,
    descripcion: "Gnaphalium - H: disposición de los capítulos",
    opcionA: {
      label: "Capítulos en glomérulos seudoinvolucrados y pedicelados",
      keyStep: "H",
      especieId: "gnaphalium_filagineum",
    },
    opcionA_prima: {
      label: "Capítulos en espigas hojosas compactas",
      keyStep: "H'",
      especieId: "gnaphalium_falcatum",
    },
  },
  heliantheae_a: {
    id: "heliantheae_a",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - A: capítulos unisexuales o bisexuales",
    opcionA: {
      label: "Capítulos unisexuales; flores femeninas sin corola, encerradas en un involucro gamófilo persistente",
      keyStep: "A",
      nextNodeId: "heliantheae_b",
    },
    opcionA_prima: {
      label: "Capítulos bisexuales; flores femeninas con corola",
      keyStep: "A'",
      nextNodeId: "heliantheae_c",
    },
  },
  heliantheae_b: {
    id: "heliantheae_b",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - B: brácteas involucrales de capítulos masculinos",
    opcionA: {
      label: "Brácteas involucrales de los capítulos masculinos soldadas; involucros femeninos rugosos o tuberculosos",
      keyStep: "B",
      nextNodeId: "ambrosia_a",
    },
    opcionA_prima: {
      label: "Brácteas involucrales de los capítulos masculinos libres; involucros femeninos cubiertos de espinas ganchudas",
      keyStep: "B'",
      nextNodeId: "xanthium_a",
    },
  },
  heliantheae_c: {
    id: "heliantheae_c",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - C: fertilidad de las flores del disco",
    opcionA: {
      label: "Flores del disco masculinas por esterilidad del gineceo",
      keyStep: "C",
      nextNodeId: "heliantheae_d",
    },
    opcionA_prima: {
      label: "Flores del disco hermafroditas, fértiles",
      keyStep: "C'",
      nextNodeId: "heliantheae_e",
    },
  },
  heliantheae_d: {
    id: "heliantheae_d",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - D: seudofrutos espinosos o capítulos grandes",
    opcionA: {
      label: "Aquenios totalmente envueltos por brácteas persistentes, formando seudofrutos con espinas ganchudas",
      keyStep: "D",
      nextNodeId: "acanthospermum_a",
    },
    opcionA_prima: {
      label: "Aquenios no cubiertos por brácteas persistentes ni con cerdas ganchudas; capítulos grandes",
      keyStep: "D'",
      especieId: "polymnia_connata",
    },
  },
  acanthospermum_a: {
    id: "acanthospermum_a",
    milestone: "Acanthospermum",
    manualPage: 498,
    descripcion: "Acanthospermum - A: forma y armadura de los frutos",
    opcionA: {
      label: "Frutos fusiformes, gruesos, cubiertos de cerdas ganchudas rígidas, de 7-9 mm",
      keyStep: "A",
      especieId: "acanthospermum_australe",
    },
    opcionA_prima: {
      label: "Frutos cuneiformes, comprimidos, de 4-5 mm, con espinas ganchudas y dos espinas superiores divergentes",
      keyStep: "A'",
      especieId: "acanthospermum_hispidum",
    },
  },
  ambrosia_a: {
    id: "ambrosia_a",
    milestone: "Ambrosia",
    manualPage: 498,
    descripcion: "Ambrosia - A: fruto con puntas o rugoso",
    opcionA: {
      label: "Fruto con 4-5 puntas alrededor del rostro; hojas de 2-8 cm",
      keyStep: "A",
      nextNodeId: "ambrosia_b",
    },
    opcionA_prima: {
      label: "Frutos rugosos, sin puntas; hojas de 7-20 cm",
      keyStep: "A'",
      especieId: "ambrosia_scabra",
    },
  },
  ambrosia_b: {
    id: "ambrosia_b",
    milestone: "Ambrosia",
    manualPage: 498,
    descripcion: "Ambrosia - B: división de las hojas",
    opcionA: {
      label: "Hojas bipinatisectas, con segmentos lineales de 0,5-2 mm de ancho",
      keyStep: "B",
      especieId: "ambrosia_tenuifolia",
    },
    opcionA_prima: {
      label: "Hojas pinatisectas, con segmentos lanceolados de 2-5 mm de ancho",
      keyStep: "B'",
      especieId: "ambrosia_elatior",
    },
  },
  xanthium_a: {
    id: "xanthium_a",
    milestone: "Xanthium",
    manualPage: 499,
    descripcion: "Xanthium - A: presencia de espinas en la planta",
    opcionA: {
      label: "Plantas sin espinas; hojas ásperas en ambas caras; involucro fructífero de 1,5-2,5 cm",
      keyStep: "A",
      nextNodeId: "xanthium_b",
    },
    opcionA_prima: {
      label: "Plantas con largas espinas trífidas amarillas, raramente sin espinas",
      keyStep: "A'",
      especieId: "xanthium_spinosum",
    },
  },
  xanthium_b: {
    id: "xanthium_b",
    milestone: "Xanthium",
    manualPage: 499,
    descripcion: "Xanthium - B: longitud relativa de rostros y garfios del fruto",
    opcionA: {
      label: "Rostros del fruto bastante más largos que los garfios; hojas acorazonadas en la base",
      keyStep: "B",
      especieId: "xanthium_cavanillesii",
    },
    opcionA_prima: {
      label: "Rostros del fruto de la misma longitud que las espinas; hojas no acorazonadas",
      keyStep: "B'",
      especieId: "xanthium_saccharatum",
    },
  },
  heliantheae_e: {
    id: "heliantheae_e",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - E: desarrollo del papus en flores del disco",
    opcionA: {
      label: "Flores del disco con papus muy desarrollado, paleáceo, casi tan largo como la corola",
      keyStep: "E",
      especieId: "compositae",
    },
    opcionA_prima: {
      label: "Flores del disco con papus formado por aristas, escamas cortas o nulo",
      keyStep: "E'",
      nextNodeId: "heliantheae_f",
    },
  },
  heliantheae_f: {
    id: "heliantheae_f",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - F: compresión de aquenios y tipo de papus",
    opcionA: {
      label: "Aquenios comprimidos dorsalmente; papus de 2-4 aristas rígidas con pelos retrorsos",
      keyStep: "F",
      especieId: "compositae",
    },
    opcionA_prima: {
      label: "Aquenios apenas comprimidos o comprimidos lateralmente; papus de escamitas, aristas sin pelos retrorsos o ausente",
      keyStep: "F'",
      nextNodeId: "heliantheae_h",
    },
  },
  heliantheae_h: {
    id: "heliantheae_h",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - H: brácteas interiores del involucro",
    opcionA: {
      label: "Brácteas interiores envolviendo a las flores marginales",
      keyStep: "H",
      nextNodeId: "heliantheae_i",
    },
    opcionA_prima: {
      label: "Brácteas interiores planas, no envolviendo a las flores marginales",
      keyStep: "H'",
      nextNodeId: "heliantheae_j",
    },
  },
  heliantheae_i: {
    id: "heliantheae_i",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - I: capítulos pedicelados o sésiles",
    opcionA: {
      label: "Capítulos pedicelados; flores marginales uniseriadas; plantas terrestres",
      keyStep: "I",
      especieId: "jaegeria_hirta",
    },
    opcionA_prima: {
      label: "Capítulos sésiles; flores marginales pluriseriadas; plantas acuáticas",
      keyStep: "I'",
      especieId: "enhydra_anagallis",
    },
  },
  heliantheae_j: {
    id: "heliantheae_j",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - J: forma de las páleas del receptáculo",
    opcionA: {
      label: "Páleas del receptáculo lineales",
      keyStep: "J",
      nextNodeId: "eclipta_a",
    },
    opcionA_prima: {
      label: "Páleas del receptáculo lanceoladas, aquilladas",
      keyStep: "J'",
      nextNodeId: "heliantheae_k",
    },
  },
  eclipta_a: {
    id: "eclipta_a",
    milestone: "Eclipta",
    manualPage: 501,
    descripcion: "Eclipta - A: duración de la planta",
    opcionA: {
      label: "Hierbas anuales, ascendentes o erectas, laxamente pubescentes; involucro de 3 mm",
      keyStep: "A",
      especieId: "eclipta_alba",
    },
    opcionA_prima: {
      label: "Hierbas perennes; involucro de 5-10 mm; aquenios del disco muy comprimidos",
      keyStep: "A'",
      nextNodeId: "eclipta_b",
    },
  },
  eclipta_b: {
    id: "eclipta_b",
    milestone: "Eclipta",
    manualPage: 501,
    descripcion: "Eclipta - B: porte y capítulos",
    opcionA: {
      label: "Plantas erectas de 50 cm; capítulos solitarios; involucro de 10 mm; flores amarillas",
      keyStep: "B",
      especieId: "eclipta_megapotamica",
    },
    opcionA_prima: {
      label: "Plantas decumbentes de 20-30 cm; capítulos solitarios largamente pedunculados; involucro de 5-6 mm",
      keyStep: "B'",
      especieId: "eclipta_bellidioides",
    },
  },
  heliantheae_k: {
    id: "heliantheae_k",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - K: sexo de las flores marginales",
    opcionA: {
      label: "Flores marginales asexuadas",
      keyStep: "K",
      nextNodeId: "heliantheae_l",
    },
    opcionA_prima: {
      label: "Flores marginales femeninas, rara vez ausentes",
      keyStep: "K'",
      nextNodeId: "heliantheae_n",
    },
  },
  heliantheae_n: {
    id: "heliantheae_n",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - N: compresión de los aquenios de flores hermafroditas",
    opcionA: {
      label: "Aquenios de las flores hermafroditas gruesos o levemente comprimidos",
      keyStep: "N",
      nextNodeId: "heliantheae_o",
    },
    opcionA_prima: {
      label: "Aquenios de las flores hermafroditas muy comprimidos",
      keyStep: "N'",
      especieId: "compositae",
    },
  },
  heliantheae_o: {
    id: "heliantheae_o",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - O: tipo de papus y número de brácteas",
    opcionA: {
      label: "Papus formado por 2-5 aristas; brácteas involucrales muy pocas",
      keyStep: "O",
      especieId: "blainvillea_biaristata",
    },
    opcionA_prima: {
      label: "Papus formado por una coronita de escamas muy cortas, a veces con 1-2 aristas caducas; brácteas numerosas",
      keyStep: "O'",
      especieId: "wedelia_glauca",
    },
  },
  heliantheae_l: {
    id: "heliantheae_l",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - L: persistencia y tipo de papus en flores marginales asexuadas",
    opcionA: {
      label: "Papus formado por dos pajitas caducas",
      keyStep: "L",
      especieId: "compositae",
    },
    opcionA_prima: {
      label: "Papus formado por pajitas persistentes, a veces acompañado por dos aristas",
      keyStep: "L'",
      nextNodeId: "heliantheae_m",
    },
  },
  heliantheae_m: {
    id: "heliantheae_m",
    milestone: "Heliantheae",
    manualPage: 463,
    descripcion: "Heliantheae - M: escamitas del papus",
    opcionA: {
      label: "Escamitas del papus soldadas en la base y contraídas en forma de copa",
      keyStep: "M",
      nextNodeId: "aspilia_a",
    },
    opcionA_prima: {
      label: "Escamitas del papus generalmente libres y no contraídas en la base",
      keyStep: "M'",
      nextNodeId: "viguiera_a",
    },
  },
  aspilia_a: {
    id: "aspilia_a",
    milestone: "Aspilia",
    manualPage: 504,
    descripcion: "Aspilia - A: hojas sésiles o pecioladas",
    opcionA: {
      label: "Hojas sésiles, lanceoladas, enteras o paucidentadas, de 7-18 cm por 8-16 mm",
      keyStep: "A",
      especieId: "aspilia_pascalioides",
    },
    opcionA_prima: {
      label: "Hojas pecioladas, ovadas, acuminadas y redondeadas en la base, de 5-13 cm por 2-7 cm",
      keyStep: "A'",
      especieId: "aspilia_silphioides",
    },
  },
  viguiera_a: {
    id: "viguiera_a",
    milestone: "Viguiera",
    manualPage: 504,
    descripcion: "Viguiera anchusaefolia - variedad",
    opcionA: {
      label: "Hojas oblongas, de 2,5-9 cm por 5-13 mm",
      keyStep: "1",
      especieId: "viguiera_anchusaefolia",
    },
    opcionA_prima: {
      label: "Hojas lineal-oblongas, de 2,5-8 cm por 2-8 mm",
      keyStep: "1a",
      especieId: "viguiera_anchusaefolia_var_immarginata",
    },
  },
  grindelia_a: {
    id: "grindelia_a",
    milestone: "Grindelia",
    manualPage: 476,
    descripcion: "Grindelia - A: capítulos discoideos o radiados",
    opcionA: {
      label: "Capítulos discoideos: todas las flores tubulosas",
      keyStep: "A",
      especieId: "grindelia_discoidea",
    },
    opcionA_prima: {
      label: "Capítulos radiados: flores marginales liguladas",
      keyStep: "A'",
      nextNodeId: "grindelia_b",
    },
  },
  grindelia_b: {
    id: "grindelia_b",
    milestone: "Grindelia",
    manualPage: 476,
    descripcion: "Grindelia - B: indumento de las brácteas",
    opcionA: {
      label: "Brácteas involucrales corta y densamente pubescentes",
      keyStep: "B",
      especieId: "grindelia_tehuelches",
    },
    opcionA_prima: {
      label: "Brácteas involucrales glabras",
      keyStep: "B'",
      nextNodeId: "grindelia_c",
    },
  },
  grindelia_c: {
    id: "grindelia_c",
    milestone: "Grindelia",
    manualPage: 477,
    descripcion: "Grindelia - C: forma de las hojas",
    opcionA: {
      label: "Hojas lineales, enteras o con algún diente, de 2-8 cm",
      keyStep: "C",
      especieId: "grindelia_scorzonerifolia",
    },
    opcionA_prima: {
      label: "Hojas lanceoladas u oblongas, glabras, de 1,5-5,5 cm",
      keyStep: "C'",
      especieId: "grindelia_pulchella",
    },
  },
  eupatorieae_a: {
    id: "eupatorieae_a",
    milestone: "Eupatorieae",
    manualPage: 462,
    descripcion: "Eupatorieae - A: apéndice conectival de las anteras y desarrollo del papus",
    opcionA: {
      label: "Anteras con apéndice conectival nulo o casi nulo; papus ausente o muy corto",
      keyStep: "A",
      nextNodeId: "eupatorieae_b",
    },
    opcionA_prima: {
      label: "Anteras con apéndices conectivales largos; papus bien desarrollado",
      keyStep: "A'",
      nextNodeId: "eupatorieae_c",
    },
  },
  eupatorieae_b: {
    id: "eupatorieae_b",
    milestone: "Eupatorieae",
    manualPage: 462,
    descripcion: "Eupatorieae - B: papus ausente o con pelos glandulosos",
    opcionA: {
      label: "Papus formado por 3-5 pelitos glandulosos",
      keyStep: "B",
      especieId: "adenostemma_brasilianum",
    },
    opcionA_prima: {
      label: "Papus ausente",
      keyStep: "B'",
      nextNodeId: "gymnocoronis_a",
    },
  },
  eupatorieae_c: {
    id: "eupatorieae_c",
    milestone: "Eupatorieae",
    manualPage: 462,
    descripcion: "Eupatorieae - C: tipo de papus desarrollado",
    opcionA: {
      label: "Papus formado por pajitas cortas o por cerdas gruesas, membranosas en la base",
      keyStep: "C",
      nextNodeId: "stevia_a",
    },
    opcionA_prima: {
      label: "Papus formado por muchos pelos delgados",
      keyStep: "C'",
      nextNodeId: "eupatorieae_d",
    },
  },
  eupatorieae_d: {
    id: "eupatorieae_d",
    milestone: "Eupatorieae",
    manualPage: 462,
    descripcion: "Eupatorieae - D: cantidad de brácteas involucrales",
    opcionA: {
      label: "Brácteas involucrales más de 6",
      keyStep: "D",
      nextNodeId: "eupatorium_a",
    },
    opcionA_prima: {
      label: "Brácteas involucrales 4, con una bráctea exterior generalmente más corta",
      keyStep: "D'",
      nextNodeId: "mikania_a",
    },
  },
  gymnocoronis_a: {
    id: "gymnocoronis_a",
    milestone: "Gymnocoronis",
    manualPage: 468,
    descripcion: "Gymnocoronis spilanthoides: variedad típica y variedad citada",
    opcionA: {
      label: "Hojas lanceoladas, aserradas, glabras, de 8-12 cm",
      keyStep: "1",
      especieId: "gymnocoronis_spilanthoides",
    },
    opcionA_prima: {
      label: "Hojas mayores, ovadas, algo acorazonadas en la base",
      keyStep: "1a",
      especieId: "gymnocoronis_spilanthoides_var_subcordata",
    },
  },
  stevia_a: {
    id: "stevia_a",
    milestone: "Stevia",
    manualPage: 470,
    descripcion: "Stevia - A: cantidad de capítulos y longitud de pedicelos",
    opcionA: {
      label: "Capítulos pocos, laxamente corimbosos, con pedicelos más largos que el involucro",
      keyStep: "A",
      especieId: "stevia_multiaristata",
    },
    opcionA_prima: {
      label: "Capítulos numerosos, densamente corimbosos, con pedicelos más cortos que el involucro",
      keyStep: "A'",
      nextNodeId: "stevia_b",
    },
  },
  stevia_b: {
    id: "stevia_b",
    milestone: "Stevia",
    manualPage: 470,
    descripcion: "Stevia - B: forma de las hojas",
    opcionA: {
      label: "Hojas ovado-rómbicas, aserradas, de 4-7 x 1,3-3 cm",
      keyStep: "B",
      especieId: "stevia_aristata",
    },
    opcionA_prima: {
      label: "Hojas lineales, enteras, obtusas, de 2-2,5 cm x 1-3 mm",
      keyStep: "B'",
      especieId: "stevia_satureiaefolia",
    },
  },
  eupatorium_a: {
    id: "eupatorium_a",
    milestone: "Eupatorium",
    manualPage: 470,
    descripcion: "Eupatorium - A: receptáculo",
    opcionA: {
      label: "Receptáculo peludo, hemisférico; hojas acorazonadas; flores lila",
      keyStep: "A",
      especieId: "eupatorium_hecatanthum",
    },
    opcionA_prima: {
      label: "Receptáculo glabro",
      keyStep: "A'",
      nextNodeId: "eupatorium_b",
    },
  },
  eupatorium_b: {
    id: "eupatorium_b",
    milestone: "Eupatorium",
    manualPage: 471,
    descripcion: "Eupatorium - B: forma del receptáculo glabro",
    opcionA: {
      label: "Receptáculo plano o casi plano",
      keyStep: "B",
      nextNodeId: "eupatorium_c",
    },
    opcionA_prima: {
      label: "Receptáculo notablemente convexo",
      keyStep: "B'",
      nextNodeId: "eupatorium_n",
    },
  },
  eupatorium_c: {
    id: "eupatorium_c",
    milestone: "Eupatorium",
    manualPage: 471,
    descripcion: "Eupatorium - C: forma del involucro",
    opcionA: {
      label: "Involucro cilíndrico, 3 a 5 veces tan alto como grueso; brácteas muy imbricadas",
      keyStep: "C",
      nextNodeId: "eupatorium_d",
    },
    opcionA_prima: {
      label: "Involucro acampanado o turbinado, a lo más dos veces tan largo como grueso",
      keyStep: "C'",
      nextNodeId: "eupatorium_f",
    },
  },
  eupatorium_d: {
    id: "eupatorium_d",
    milestone: "Eupatorium",
    manualPage: 471,
    descripcion: "Eupatorium - D: indumento del arbusto",
    opcionA: {
      label: "Arbustos glabros de 1-3 m; hojas lustrosas, ovadas",
      keyStep: "D",
      especieId: "eupatorium_laevigatum",
    },
    opcionA_prima: {
      label: "Arbustos o sufrútices pubescentes",
      keyStep: "D'",
      nextNodeId: "eupatorium_e",
    },
  },
  eupatorium_e: {
    id: "eupatorium_e",
    milestone: "Eupatorium",
    manualPage: 471,
    descripcion: "Eupatorium - E: disposición y forma foliar",
    opcionA: {
      label: "Hojas generalmente alternas, ovado-triangulares, hirsutas",
      keyStep: "E",
      especieId: "eupatorium_hirsutum",
    },
    opcionA_prima: {
      label: "Hojas opuestas, pecioladas, lanceolado-lineales",
      keyStep: "E'",
      especieId: "eupatorium_ivaefolium",
    },
  },
  eupatorium_f: {
    id: "eupatorium_f",
    milestone: "Eupatorium",
    manualPage: 471,
    descripcion: "Eupatorium - F: cantidad de flores por capítulo",
    opcionA: {
      label: "Capítulos con 5-6 flores",
      keyStep: "F",
      nextNodeId: "eupatorium_g",
    },
    opcionA_prima: {
      label: "Capítulos con 8-40 flores",
      keyStep: "F'",
      nextNodeId: "eupatorium_j",
    },
  },
  eupatorium_g: {
    id: "eupatorium_g",
    milestone: "Eupatorium",
    manualPage: 471,
    descripcion: "Eupatorium - G: hojas dimorfas o simples",
    opcionA: {
      label: "Hojas dimorfas, simples lineales o pinatisectas",
      keyStep: "G",
      especieId: "eupatorium_buniifolium",
    },
    opcionA_prima: {
      label: "Hojas simples, enteras o aserradas, de más de 3 mm de ancho",
      keyStep: "G'",
      nextNodeId: "eupatorium_h",
    },
  },
  eupatorium_h: {
    id: "eupatorium_h",
    milestone: "Eupatorium",
    manualPage: 471,
    descripcion: "Eupatorium - H: pecíolo y margen foliar",
    opcionA: {
      label: "Hojas pecioladas, opuestas, lineal-lanceoladas, uniformemente aserradas",
      keyStep: "H",
      especieId: "eupatorium_tremulum",
    },
    opcionA_prima: {
      label: "Hojas sésiles, opuestas o alternas, oblongo-lanceoladas, enteras o subdentadas",
      keyStep: "H'",
      especieId: "eupatorium_bupleurifolium",
    },
  },
  eupatorium_j: {
    id: "eupatorium_j",
    milestone: "Eupatorium",
    manualPage: 471,
    descripcion: "Eupatorium - J: división de hojas y hojas superiores",
    opcionA: {
      label: "Hojas lobadas o pinatisectas; tallos casi desprovistos de hojas en la parte superior",
      keyStep: "J",
      nextNodeId: "eupatorium_k",
    },
    opcionA_prima: {
      label: "Hojas enteras o aserradas; tallos hojosos en la parte superior",
      keyStep: "J'",
      nextNodeId: "eupatorium_l",
    },
  },
  eupatorium_k: {
    id: "eupatorium_k",
    milestone: "Eupatorium",
    manualPage: 471,
    descripcion: "Eupatorium - K: tipo de división foliar",
    opcionA: {
      label: "Hojas obovadas, lobuladas o pinatífidas, áspero-pubescentes",
      keyStep: "K",
      especieId: "eupatorium_commersonii",
    },
    opcionA_prima: {
      label: "Hojas profundamente bipinatisectas, con segmentos lanceolados o lineales",
      keyStep: "K'",
      especieId: "eupatorium_tanacetifolium",
    },
  },
  eupatorium_l: {
    id: "eupatorium_l",
    milestone: "Eupatorium",
    manualPage: 472,
    descripcion: "Eupatorium - L: ancho de hojas",
    opcionA: {
      label: "Hojas lanceoladas o lineal-lanceoladas, de 2-5 mm de ancho",
      keyStep: "L",
      especieId: "eupatorium_tweedianum",
    },
    opcionA_prima: {
      label: "Hojas lanceoladas o rómbico-ovadas, de más de 1 cm de ancho",
      keyStep: "L'",
      nextNodeId: "eupatorium_m",
    },
  },
  eupatorium_m: {
    id: "eupatorium_m",
    milestone: "Eupatorium",
    manualPage: 472,
    descripcion: "Eupatorium - M: involucro y tipo de hoja",
    opcionA: {
      label: "Involucro de 6 mm; hojas opuestas ovado-lanceoladas; flores blancas",
      keyStep: "M",
      especieId: "eupatorium_inulaefolium_f_suaveolens",
    },
    opcionA_prima: {
      label: "Involucro de 4-5 mm; hojas alternas lanceolado-rómbicas; flores blancas o rosadas",
      keyStep: "M'",
      especieId: "eupatorium_lanigerum",
    },
  },
  eupatorium_n: {
    id: "eupatorium_n",
    milestone: "Eupatorium",
    manualPage: 472,
    descripcion: "Eupatorium - N: tamaño de los capítulos",
    opcionA: {
      label: "Capítulos pequeños, con 15-60 flores; involucro de 4-7 mm",
      keyStep: "N",
      nextNodeId: "eupatorium_o",
    },
    opcionA_prima: {
      label: "Capítulos grandes, con 40-120 flores; involucro hemisférico de 10-13 mm",
      keyStep: "N'",
      especieId: "eupatorium_macrocephalum",
    },
  },
  eupatorium_o: {
    id: "eupatorium_o",
    milestone: "Eupatorium",
    manualPage: 472,
    descripcion: "Eupatorium - O: base y forma foliar",
    opcionA: {
      label: "Hojas ovadas u ovado-deltoideas, cordadas o hastadas en la base",
      keyStep: "O",
      especieId: "eupatorium_betonicaeforme",
    },
    opcionA_prima: {
      label: "Hojas lanceoladas u ovado-lanceoladas, atenuadas en la base",
      keyStep: "O'",
      nextNodeId: "eupatorium_p",
    },
  },
  eupatorium_p: {
    id: "eupatorium_p",
    milestone: "Eupatorium",
    manualPage: 472,
    descripcion: "Eupatorium - P: corola y aquenios",
    opcionA: {
      label: "Corolas de 2,5 mm; aquenios de 1,3-1,5 mm",
      keyStep: "P",
      especieId: "eupatorium_candolleanum",
    },
    opcionA_prima: {
      label: "Corolas de 3,5 mm; aquenios de 3-3,5 mm",
      keyStep: "P'",
      especieId: "eupatorium_cabrerae",
    },
  },
  mikania_a: {
    id: "mikania_a",
    milestone: "Mikania",
    manualPage: 475,
    descripcion: "Mikania - A: altura del involucro",
    opcionA: {
      label: "Involucro de 6-8 mm; brácteas agudas, pubescentes; hojas ovadas acorazonadas",
      keyStep: "A",
      especieId: "mikania_cordifolia",
    },
    opcionA_prima: {
      label: "Involucro de 2-5 mm",
      keyStep: "A'",
      nextNodeId: "mikania_b",
    },
  },
  mikania_b: {
    id: "mikania_b",
    milestone: "Mikania",
    manualPage: 475,
    descripcion: "Mikania - B: forma de las brácteas y pubescencia",
    opcionA: {
      label: "Brácteas involucrales largamente acuminadas, algo pubescentes; hojas ovadas sagitadas",
      keyStep: "B",
      especieId: "mikania_parodii",
    },
    opcionA_prima: {
      label: "Brácteas involucrales agudas; hojas glabras o casi glabras",
      keyStep: "B'",
      nextNodeId: "mikania_c",
    },
  },
  mikania_c: {
    id: "mikania_c",
    milestone: "Mikania",
    manualPage: 475,
    descripcion: "Mikania - C: involucro y bractéola exterior",
    opcionA: {
      label: "Involucro de 2-2,5 mm; bractéola tan larga como las brácteas o mayor",
      keyStep: "C",
      especieId: "mikania_periplocifolia",
    },
    opcionA_prima: {
      label: "Involucro de 4,5 mm; bractéola exterior corta",
      keyStep: "C'",
      especieId: "mikania_micrantha",
    },
  },
  vernonia_a: {
    id: "vernonia_a",
    milestone: "Vernonieae",
    manualPage: 466,
    descripcion: "Vernonia - A: brácteas foliáceas en las panojas de cincinios",
    opcionA: {
      label: "Capítulos en panojas de cincinios, con brácteas casi iguales a las hojas; hojas lineales",
      keyStep: "A",
      especieId: "vernonia_rubricaulis_var_australis",
    },
    opcionA_prima: {
      label: "Capítulos en inflorescencias diversas, pero sin brácteas foliáceas",
      keyStep: "A'",
      nextNodeId: "vernonia_b",
    },
  },
  vernonia_b: {
    id: "vernonia_b",
    milestone: "Vernonia",
    manualPage: 466,
    descripcion: "Vernonia - B: tipo de inflorescencia",
    opcionA: {
      label: "Capítulos en panojas de cincinios",
      keyStep: "B",
      nextNodeId: "vernonia_c",
    },
    opcionA_prima: {
      label: "Capítulos en cimas paniciformes o corimbiformes, pero no en cincinios",
      keyStep: "B'",
      nextNodeId: "vernonia_f",
    },
  },
  vernonia_c: {
    id: "vernonia_c",
    milestone: "Vernonia",
    manualPage: 466,
    descripcion: "Vernonia - C: brácteas involucrales",
    opcionA: {
      label: "Brácteas involucrales obtusas, con margen membranoso coloreado",
      keyStep: "C",
      especieId: "vernonia_echioides",
    },
    opcionA_prima: {
      label: "Brácteas involucrales agudas, sin margen membranoso",
      keyStep: "C'",
      nextNodeId: "vernonia_d",
    },
  },
  vernonia_d: {
    id: "vernonia_d",
    milestone: "Vernonia",
    manualPage: 466,
    descripcion: "Vernonia - D: hábito",
    opcionA: {
      label: "Arbustos semitrepadores de 2-3 m; hojas ovadas, acuminadas, aserradas",
      keyStep: "D",
      especieId: "vernonia_scorpioides_var_sororia",
    },
    opcionA_prima: {
      label: "Sufrútices o hierbas con hojas lanceoladas",
      keyStep: "D'",
      nextNodeId: "vernonia_e",
    },
  },
  vernonia_e: {
    id: "vernonia_e",
    milestone: "Vernonia",
    manualPage: 466,
    descripcion: "Vernonia - E: distribución de hojas e indumento",
    opcionA: {
      label: "Hojas casi glabras, amontonadas en la parte inferior del tallo",
      keyStep: "E",
      especieId: "vernonia_flexuosa",
    },
    opcionA_prima: {
      label: "Hojas densamente cubiertas de pubescencia gris, distribuidas por todo el tallo",
      keyStep: "E'",
      especieId: "vernonia_platensis",
    },
  },
  vernonia_f: {
    id: "vernonia_f",
    milestone: "Vernonia",
    manualPage: 466,
    descripcion: "Vernonia - F: indumento de las hojas",
    opcionA: {
      label: "Hojas glabras, obtusas, oblanceoladas, enteras o dentadas",
      keyStep: "F",
      especieId: "vernonia_nitidula",
    },
    opcionA_prima: {
      label: "Hojas albo-tomentosas en la cara inferior",
      keyStep: "F'",
      nextNodeId: "vernonia_g",
    },
  },
  vernonia_g: {
    id: "vernonia_g",
    milestone: "Vernonia",
    manualPage: 466,
    descripcion: "Vernonia - G: involucro y cantidad de capítulos",
    opcionA: {
      label: "Involucro acampanado de 4-5 mm, más corto que las flores; capítulos muy numerosos",
      keyStep: "G",
      especieId: "vernonia_incana",
    },
    opcionA_prima: {
      label: "Involucro hemisférico de 8-10 mm; capítulos pocos, largamente pedunculados",
      keyStep: "G'",
      especieId: "vernonia_mollissima",
    },
  },
};
