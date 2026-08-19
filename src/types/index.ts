// Tipos para el árbol de clados
export interface CladoOption {
  label: string;
  keyStep?: string; // Letra de la clave del manual: A, A', B, B', etc.
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

export interface PlantFormData {
  nombreUsuario: string;
  fecha: string;
  lugar: string;
  coordenadas?: string;
  observaciones?: string;
  foto?: File | null;
}

export interface PhotoRecord {
  id: string;
  user_id: string;
  plant_number: number;
  photo_url: string | null;
  especie_id: string;
  nombre_usuario: string;
  fecha: string;
  lugar: string;
  coordenadas?: {
    latitude: number;
    longitude: number;
  } | null;
  observaciones?: string | null;
  created_at: string;
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
