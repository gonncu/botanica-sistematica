// Tipos para el árbol de clados
export interface CladoOption {
  label: string;
  nextNodeId?: string; // ID del siguiente clado, si no es terminal
  especieId?: string; // ID de especie cuando la opción termina el quiz
  familia?: string;
}

export interface CladoNode {
  id: string; // "A", "A'", "B", "b'", etc.
  descripcion: string;
  opcionA: CladoOption;
  opcionA_prima: CladoOption;
  especie?: Especie; // Si es un nodo terminal
}

export interface Especie {
  id: string;
  nombreCientifico: string;
  nombreVulgar: string;
  familia: string;
  descripcion: string;
  caracteristicas: string;
  distribucion: string;
  imagen?: string;
}

export interface PhotoRecord {
  id: string;
  userId: string;
  photoUrl: string;
  especieId: string;
  nombreUsuario: string;
  fecha: string;
  lugar: string;
  coordenadas?: {
    lat: number;
    lng: number;
  };
  observaciones?: string;
  createdAt: string;
}

export interface QuizSession {
  id: string;
  userId: string;
  currentNodeId: string;
  answers: Array<{
    nodeId: string;
    selectedOption: "A" | "A_prima";
  }>;
  startedAt: string;
  completedAt?: string;
  finalEspecieId?: string;
}
