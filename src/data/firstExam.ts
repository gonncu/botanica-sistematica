export type ExamTaxon = {
  id: string;
  name: string;
  group: string;
  image: string;
  imageAlt: string;
  diagnosticTraits: string[];
  lookFor: string;
  confusion: string;
  referenceGenera: string;
  quizTraits: [string, string, string, string];
};

export type KeyNode = {
  id: string;
  prompt: string;
  hint?: string;
  choices: Array<{
    label: string;
    next?: string;
    result?: string;
  }>;
};

export type KeyResult = {
  title: string;
  scientificName?: string;
  explanation: string;
};

export const examTaxa: ExamTaxon[] = [
  {
    id: "solanaceae",
    name: "Solanaceae",
    group: "Solanales",
    image: "/partial/solanaceae.jpg",
    imageAlt: "Flor de Solanum con anteras amarillas reunidas alrededor del estilo",
    diagnosticTraits: [
      "Flor generalmente actinomorfa, pentamera y gamopetala.",
      "Cinco estambres epipetalos, alternos con los lobulos de la corola.",
      "Ovario supero, usualmente bicarpelar y bilocular, con placentacion axilar.",
      "Hojas alternas; fruto baya o capsula.",
    ],
    lookFor: "Contar cinco piezas y buscar los cinco estambres insertos en la corola. En Solanum, las anteras suelen ser conniventes y de apertura poricida.",
    confusion: "No decidir solo por una corola tubular: confirmar simetria, numero de estambres y posicion de las hojas.",
    referenceGenera: "Solanum, Capsicum, Nicotiana, Datura y Cestrum.",
    quizTraits: [
      "Cinco estambres epipetalos alternos con la corola",
      "Ovario supero, por lo comun bilocular y con muchos ovulos",
      "Estilo ginobasico y fruto dividido en cuatro nueces",
      "Ovario infero y solo tres estambres",
    ],
  },
  {
    id: "bignoniaceae",
    name: "Bignoniaceae",
    group: "Lamiales",
    image: "/partial/bignoniaceae.jpg",
    imageAlt: "Flores tubulares y bilaterales de una bignoniacea",
    diagnosticTraits: [
      "Flor zigomorfa, gamopetala y frecuentemente vistosa.",
      "Cuatro estambres didinamos; a veces existe un estaminodio.",
      "Hojas opuestas, a menudo compuestas.",
      "Fruto capsula; semillas con frecuencia aladas.",
    ],
    lookFor: "Primero reconocer la corola bilateral; despues buscar cuatro estambres y hojas opuestas, muchas veces compuestas.",
    confusion: "Puede parecer Lamiaceae. La capsula con semillas aladas y la ausencia del gineceo profundamente tetralobado orientan a Bignoniaceae.",
    referenceGenera: "Jacaranda, Handroanthus, Bignonia y Pyrostegia.",
    quizTraits: [
      "Corola zigomorfa con cuatro estambres didinamos",
      "Hojas opuestas, a menudo compuestas, y capsula con semillas aladas",
      "Tallo cuadrangular y fruto en cuatro nueces",
      "Capitulo rodeado por un involucro de filarios",
    ],
  },
  {
    id: "lamiaceae",
    name: "Lamiaceae",
    group: "Lamiales",
    image: "/partial/lamiaceae.jpg",
    imageAlt: "Flores bilabiadas de una lamiacea",
    diagnosticTraits: [
      "Corola zigomorfa, tipicamente bilabiada.",
      "Dos o cuatro estambres, cuando son cuatro suelen ser didinamos.",
      "Ovario profundamente tetralobado con estilo ginobasico; fruto en cuatro nueces.",
      "Hojas opuestas y decusadas, plantas aromaticas y tallos frecuentemente cuadrangulares.",
    ],
    lookFor: "Observar la boca bilabiada y, si hay material vegetativo, frotar suavemente una hoja y revisar la seccion del tallo.",
    confusion: "Frente a Bignoniaceae, priorizar el estilo ginobasico, las cuatro nueces y el conjunto hoja aromatica-tallo cuadrangular.",
    referenceGenera: "Mentha, Lavandula, Origanum y Ocimum.",
    quizTraits: [
      "Estilo ginobasico y ovario profundamente dividido en cuatro lobulos",
      "Hojas opuestas decusadas y tallo frecuentemente cuadrangular",
      "Semillas aladas dentro de una capsula alargada",
      "Cinco estambres con anteras unidas formando un tubo",
    ],
  },
  {
    id: "asteraceae",
    name: "Asteraceae (Compuestas)",
    group: "Asterales",
    image: "/partial/asteraceae.jpg",
    imageAlt: "Capitulo de girasol formado por numerosas flores",
    diagnosticTraits: [
      "Inflorescencia en capitulo, rodeada por un involucro de filarios.",
      "Flores tubulosas, liguladas o filiformes dispuestas sobre un receptaculo comun.",
      "Cinco anteras singenesicas, unidas en un tubo alrededor del estilo.",
      "Ovario infero unilocular; fruto cipsela, frecuentemente con papus.",
    ],
    lookFor: "No tomar el capitulo como una sola flor: separar una flor periferica o central y buscar el ovario infero y el tubo de anteras.",
    confusion: "Una cabezuela compacta no alcanza. Debe existir un receptaculo comun con muchas flores y un involucro externo.",
    referenceGenera: "Helianthus, Cichorium, Lactuca, Cynara, Taraxacum y Conyza.",
    quizTraits: [
      "Muchas flores reunidas en un capitulo con involucro",
      "Anteras singenesicas y fruto cipsela, a menudo con papus",
      "Espiguillas protegidas por glumas, lemma y palea",
      "Un solo carpelo libre que origina una drupa",
    ],
  },
  {
    id: "poaceae",
    name: "Poaceae (Gramineae)",
    group: "Poales",
    image: "/partial/poaceae.jpg",
    imageAlt: "Detalle de una espiguilla de poacea",
    diagnosticTraits: [
      "Unidad de la inflorescencia: espiguilla con glumas basales.",
      "Cada antecio esta protegido por lemma y palea; el perianto se reduce a lodiculas.",
      "Generalmente tres estambres con anteras versatiles.",
      "Ovario supero, unilocular y uniovulado; estigmas plumosos; fruto cariopse.",
    ],
    lookFor: "Abrir una espiguilla y distinguir primero glumas; luego, en cada antecio, lemma y palea.",
    confusion: "Panoja o espiga describen la inflorescencia completa. La espiguilla es la unidad que confirma Poaceae.",
    referenceGenera: "Avena, Bromus, Triticum, Secale y Hordeum en la clave de cereales.",
    quizTraits: [
      "Flores reunidas en espiguillas con glumas basales",
      "Lemma, palea, lodiculas y estigmas plumosos",
      "Seis tepalos y gineceo con ovario infero trilocular",
      "Hipanto y numerosos estambres libres",
    ],
  },
  {
    id: "rosaceae",
    name: "Rosaceae",
    group: "Rosales",
    image: "/partial/rosaceae.jpg",
    imageAlt: "Flores de rosaceas mostrando numerosos estambres y distintos receptaculos",
    diagnosticTraits: [
      "Flor usualmente actinomorfa y pentamera.",
      "Estambres numerosos, generalmente libres.",
      "Presencia de hipanto; la posicion y forma del ovario varian entre grupos.",
      "Gineceo de uno a muchos carpelos, libres o soldados.",
    ],
    lookFor: "Reconocer el anillo de numerosos estambres y ubicar los carpelos respecto del hipanto: libres, soldados, en receptaculo concavo o convexo.",
    confusion: "No usar solo cinco petalos. El conjunto hipanto + numerosos estambres + arquitectura del gineceo es mucho mas informativo.",
    referenceGenera: "Prunus, Spiraea, Malus/Pyrus, Rosa y Fragaria/Rubus.",
    quizTraits: [
      "Numerosos estambres libres asociados a un hipanto",
      "Gineceo variable de uno a muchos carpelos",
      "Cuatro estambres didinamos y semillas aladas",
      "Tres estambres y ovario infero trilocular",
    ],
  },
  {
    id: "amaryllidoideae",
    name: "Amaryllidoideae",
    group: "Amaryllidaceae · Asparagales",
    image: "/partial/amaryllidoideae.jpg",
    imageAlt: "Flores de una amarilidoidea reunidas en umbela",
    diagnosticTraits: [
      "Seis tepalos y seis estambres.",
      "Ovario infero, tipicamente trilocular.",
      "Flores reunidas en umbela en el extremo de un escapo.",
      "Inflorescencia protegida inicialmente por una espata; bulbos tunicados.",
    ],
    lookFor: "Seguir el pedicelo hasta comprobar que el ovario queda por debajo de la insercion de los tepalos y reconocer la umbela escaposa.",
    confusion: "Dentro de Amaryllidaceae, el ovario infero la separa de Allioideae.",
    referenceGenera: "Amaryllis, Hippeastrum y Narcissus.",
    quizTraits: [
      "Umbela terminal protegida por una espata",
      "Seis estambres y ovario infero trilocular",
      "Olor aliaceo y ovario supero",
      "Un solo estambre fertil unido al estilo en un ginostemo",
    ],
  },
  {
    id: "allioideae",
    name: "Allioideae",
    group: "Amaryllidaceae · Asparagales",
    image: "/partial/allioideae.jpg",
    imageAlt: "Umbela de flores blancas de una allioidea",
    diagnosticTraits: [
      "Seis tepalos y seis estambres.",
      "Ovario supero, tipicamente trilocular.",
      "Umbela terminal sobre un escapo, protegida inicialmente por una espata.",
      "Compuestos azufrados y olor aliaceo; bulbos tunicados.",
    ],
    lookFor: "Confirmar umbela y ovario supero; el olor a ajo o cebolla es una ayuda vegetativa muy fuerte.",
    confusion: "El nombre correcto de la subfamilia vista en la clase es Allioideae, no Aroideae. Se separa de Amaryllidoideae por el ovario supero.",
    referenceGenera: "Allium.",
    quizTraits: [
      "Olor aliaceo por compuestos azufrados",
      "Umbela con espata y ovario supero",
      "Ovario infero y solo tres estambres",
      "Racimo con una bractea por flor y fruto baya",
    ],
  },
  {
    id: "iridaceae",
    name: "Iridaceae",
    group: "Asparagales",
    image: "/partial/iridaceae.jpg",
    imageAlt: "Flores anaranjadas de una iridacea",
    diagnosticTraits: [
      "Seis tepalos, con frecuencia vistosos.",
      "Solo tres estambres, opuestos a los tepalos externos.",
      "Ovario infero y trilocular.",
      "Fruto capsula; hojas frecuentemente equitantes.",
    ],
    lookFor: "Contar estambres: dentro de este conjunto de Asparagales, tres estambres es la entrada mas rapida.",
    confusion: "Amaryllidoideae tambien tiene ovario infero, pero conserva seis estambres y suele presentar umbela con espata.",
    referenceGenera: "Iris, Gladiolus, Crocus y Chasmanthe.",
    quizTraits: [
      "Tres estambres opuestos a los tepalos externos",
      "Ovario infero trilocular y fruto capsula",
      "Seis estambres y ovario supero con olor a ajo",
      "Anteras singenesicas alrededor del estilo",
    ],
  },
  {
    id: "asparagaceae",
    name: "Asparagaceae",
    group: "Asparagales",
    image: "/partial/asparagaceae.jpg",
    imageAlt: "Flores azules dispuestas en racimo de una asparagacea",
    diagnosticTraits: [
      "Seis tepalos y seis estambres.",
      "Ovario supero, usualmente trilocular.",
      "Inflorescencias racemosas, con una bractea por flor.",
      "Fruto generalmente baya.",
    ],
    lookFor: "Diferenciar el racimo, donde cada flor tiene su bractea, de la umbela con espata de Amaryllidaceae.",
    confusion: "El ovario supero tambien aparece en Allioideae; revisar tipo de inflorescencia, fruto y olor aliaceo.",
    referenceGenera: "Asparagus y varios generos ornamentales incluidos en la clase.",
    quizTraits: [
      "Inflorescencia racemosa con una bractea por flor",
      "Seis estambres, ovario supero y fruto generalmente baya",
      "Umbela escaposa protegida por espata y olor aliaceo",
      "Corola bilabiada y estilo ginobasico",
    ],
  },
  {
    id: "orchidaceae",
    name: "Orchidaceae",
    group: "Asparagales",
    image: "/partial/orchidaceae.jpg",
    imageAlt: "Flor bilateral de orquidea con labelo destacado",
    diagnosticTraits: [
      "Flor fuertemente zigomorfa con un tepalo modificado en labelo.",
      "Uno o dos estambres fertiles, raramente tres.",
      "Estambres, estilo y estigma fusionados en un ginostemo o columna.",
      "Ovario infero; polen frecuentemente reunido en polinios.",
    ],
    lookFor: "Identificar el labelo y la columna central. La flor puede estar resupinada, por lo que el labelo suele quedar orientado hacia abajo.",
    confusion: "La simetria bilateral por si sola no basta: labelo + ginostemo es la combinacion decisiva.",
    referenceGenera: "Vanilla y numerosos generos ornamentales.",
    quizTraits: [
      "Un tepalo diferenciado en labelo",
      "Ginostemo y ovario infero, con polen a menudo en polinios",
      "Tres estambres libres y hojas equitantes",
      "Cinco estambres epipetalos alternos con la corola",
    ],
  },
];

export const familyKeyStart = "habit";

export const familyKeyNodes: Record<string, KeyNode> = {
  habit: {
    id: "habit",
    prompt: "¿Las flores estan organizadas en espiguillas con glumas?",
    hint: "Busque la unidad basica, no solo si la inflorescencia parece una espiga.",
    choices: [
      { label: "Si, hay espiguillas con glumas", result: "poaceae" },
      { label: "No", next: "capitulum" },
    ],
  },
  capitulum: {
    id: "capitulum",
    prompt: "¿Muchas flores pequeñas forman un capitulo con involucro?",
    choices: [
      { label: "Si, es un capitulo", result: "asteraceae" },
      { label: "No", next: "trimerous" },
    ],
  },
  trimerous: {
    id: "trimerous",
    prompt: "¿La flor es trimera, tipicamente con seis tepalos?",
    choices: [
      { label: "Si", next: "asparagales-symmetry" },
      { label: "No, predomina el plan pentamero", next: "rosaceae" },
    ],
  },
  "asparagales-symmetry": {
    id: "asparagales-symmetry",
    prompt: "¿Es bilateral y presenta labelo y una columna central?",
    choices: [
      { label: "Si: labelo y ginostemo", result: "orchidaceae" },
      { label: "No", next: "stamens" },
    ],
  },
  stamens: {
    id: "stamens",
    prompt: "¿Tiene solamente tres estambres y ovario infero?",
    choices: [
      { label: "Si", result: "iridaceae" },
      { label: "No, tiene seis estambres", next: "asparagales-inflorescence" },
    ],
  },
  "asparagales-inflorescence": {
    id: "asparagales-inflorescence",
    prompt: "¿Las flores forman una umbela sobre un escapo, inicialmente protegida por una espata?",
    choices: [
      { label: "Si", next: "amaryllis-ovary" },
      { label: "No: racimo con una bractea por flor y fruto baya", result: "asparagaceae" },
    ],
  },
  "amaryllis-ovary": {
    id: "amaryllis-ovary",
    prompt: "¿El ovario es infero o supero?",
    choices: [
      { label: "Infero", result: "amaryllidoideae" },
      { label: "Supero, generalmente con olor aliaceo", result: "allioideae" },
    ],
  },
  rosaceae: {
    id: "rosaceae",
    prompt: "¿Presenta numerosos estambres libres asociados a un hipanto?",
    choices: [
      { label: "Si", result: "rosaceae" },
      { label: "No", next: "eudicot-symmetry" },
    ],
  },
  "eudicot-symmetry": {
    id: "eudicot-symmetry",
    prompt: "¿La corola es predominantemente actinomorfa, con cinco estambres?",
    choices: [
      { label: "Si", result: "solanaceae" },
      { label: "No, es marcadamente zigomorfa", next: "lamiales" },
    ],
  },
  lamiales: {
    id: "lamiales",
    prompt: "¿Hay estilo ginobasico, ovario tetralobado y caracteres aromaticos?",
    choices: [
      { label: "Si; hojas decusadas y tallo a menudo cuadrangular", result: "lamiaceae" },
      { label: "No; hojas a menudo compuestas y capsula con semillas aladas", result: "bignoniaceae" },
    ],
  },
};

export const rosaceaeKeyStart = "rosaceae-carpels";

export const rosaceaeKeyNodes: Record<string, KeyNode> = {
  "rosaceae-carpels": {
    id: "rosaceae-carpels",
    prompt: "¿El gineceo tiene un solo carpelo o varios?",
    hint: "Observe el centro de la flor y no confunda cada carpelo libre con una flor distinta.",
    choices: [
      { label: "Un solo carpelo libre", result: "prunus" },
      { label: "Varios carpelos", next: "rosaceae-carpel-union" },
    ],
  },
  "rosaceae-carpel-union": {
    id: "rosaceae-carpel-union",
    prompt: "¿Los carpelos estan soldados y completamente envueltos por el hipanto?",
    choices: [
      { label: "Si; el ovario es infero", result: "maleae" },
      { label: "No, los carpelos permanecen libres", next: "rosaceae-carpel-count" },
    ],
  },
  "rosaceae-carpel-count": {
    id: "rosaceae-carpel-count",
    prompt: "¿Hay cinco carpelos libres o son numerosos?",
    choices: [
      { label: "Cinco carpelos libres", result: "spiraea" },
      { label: "Numerosos carpelos libres", next: "rosaceae-receptacle" },
    ],
  },
  "rosaceae-receptacle": {
    id: "rosaceae-receptacle",
    prompt: "¿Los carpelos quedan dentro de un hipanto concavo o sobre un receptaculo convexo?",
    choices: [
      { label: "Dentro de un hipanto concavo", result: "rosa" },
      { label: "Sobre un receptaculo convexo o globoso", result: "fragaria-rubus" },
    ],
  },
};

export const rosaceaeResults: Record<string, KeyResult> = {
  prunus: {
    title: "Grupo Prunus",
    scientificName: "Prunus spp.",
    explanation: "Un carpelo libre, ovario medio, placentacion marginal y normalmente dos ovulos. El fruto es una drupa, como en duraznero, ciruelo, damasco, almendro y cerezo.",
  },
  spiraea: {
    title: "Grupo Spiraea",
    scientificName: "Spiraea spp.",
    explanation: "Cinco carpelos libres e independientes, con ovarios medios y placentacion marginal. Ejemplo de la clase: corona de novia.",
  },
  maleae: {
    title: "Tribu Maleae",
    scientificName: "Malus, Pyrus y Cydonia",
    explanation: "Carpelos soldados y completamente envueltos por el hipanto, que determina un ovario infero con placentacion axilar. Producen pomos o frutos de pepita.",
  },
  rosa: {
    title: "Grupo Rosa",
    scientificName: "Rosa spp.",
    explanation: "Numerosos carpelos libres, rodeados y encerrados por un hipanto concavo. Cada carpelo origina un aquenio.",
  },
  "fragaria-rubus": {
    title: "Grupo Fragaria / Rubus",
    scientificName: "Fragaria spp. y Rubus spp.",
    explanation: "Numerosos carpelos libres dispuestos sobre un receptaculo convexo o globoso. En Fragaria el receptaculo se vuelve carnoso y porta los aquenios; Rubus forma un agregado de pequeñas drupas.",
  },
};

export const cerealKeyStart = "cereal-inflorescence";

export const cerealKeyNodes: Record<string, KeyNode> = {
  "cereal-inflorescence": {
    id: "cereal-inflorescence",
    prompt: "¿La inflorescencia es una panoja laxa o una espiga?",
    choices: [
      { label: "Panoja laxa", next: "panicle-glumes" },
      { label: "Espiga", next: "spikelets-per-node" },
    ],
  },
  "panicle-glumes": {
    id: "panicle-glumes",
    prompt: "¿Las glumas son grandes y envuelven toda la espiguilla?",
    choices: [
      { label: "Si", result: "oat" },
      { label: "No, son chicas y no envuelven toda la espiguilla", result: "bromus" },
    ],
  },
  "spikelets-per-node": {
    id: "spikelets-per-node",
    prompt: "¿Hay una espiguilla pluriflora o tres espiguillas unifloras en cada nudo?",
    choices: [
      { label: "Una espiguilla pluriflora", next: "spike-glumes" },
      { label: "Tres espiguillas unifloras", next: "barley-fertility" },
    ],
  },
  "spike-glumes": {
    id: "spike-glumes",
    prompt: "¿Las glumas son anchas y naviculares o angostas y lineares?",
    choices: [
      { label: "Anchas y naviculares", result: "wheat" },
      { label: "Angostas y lineares", result: "rye" },
    ],
  },
  "barley-fertility": {
    id: "barley-fertility",
    prompt: "¿Las tres espiguillas de cada nudo son fertiles?",
    choices: [
      { label: "Si, las tres son fertiles", result: "six-row-barley" },
      { label: "No; la central es fertil y las laterales esteriles y menores", result: "two-row-barley" },
    ],
  },
};

export const cerealResults: Record<string, KeyResult> = {
  oat: {
    title: "Avena",
    scientificName: "Avena sativa",
    explanation: "Panoja laxa y glumas grandes que envuelven toda la espiguilla.",
  },
  bromus: {
    title: "Cebadilla",
    scientificName: "Bromus catharticus",
    explanation: "Panoja laxa y glumas chicas que no envuelven toda la espiguilla.",
  },
  wheat: {
    title: "Trigo pan / trigo fideo",
    scientificName: "Triticum aestivum / Triticum durum",
    explanation: "Espiga con una espiguilla pluriflora por nudo y glumas anchas, naviculares. La clave provista agrupa ambos trigos y no agrega un paso para separarlos. El resumen describe a T. durum con espiga compacta, glumas robustas y aristas largas y rectas.",
  },
  rye: {
    title: "Centeno",
    scientificName: "Secale cereale",
    explanation: "Espiga con una espiguilla pluriflora por nudo y glumas angostas, lineares. Suele verse delgada, flexible y con aristas largas y finas.",
  },
  "six-row-barley": {
    title: "Cebada forrajera",
    scientificName: "Hordeum vulgare convar. vulgare",
    explanation: "Tres espiguillas unifloras por nudo; las tres son fertiles y originan seis hileras de granos. La espiga suele verse densa, con aristas muy largas.",
  },
  "two-row-barley": {
    title: "Cebada cervecera",
    scientificName: "Hordeum vulgare convar. distichon",
    explanation: "Tres espiguillas unifloras por nudo; solo la central es fertil y las laterales son esteriles y mucho menores. Por eso se observan dos hileras de granos y una espiga mas chata y simetrica.",
  },
};
