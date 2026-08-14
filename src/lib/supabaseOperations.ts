import { supabase } from "./supabase";

interface FormData {
  nombreUsuario: string;
  fecha: string;
  lugar: string;
  coordenadas?: string;
  observaciones?: string;
  foto?: File | null;
}

export async function savePhotoRecord(
  especieId: string,
  formData: FormData
): Promise<string> {
  try {
    let photoUrl = null;

    // Subir foto si existe
    if (formData.foto) {
      const fileName = `${Date.now()}-${formData.foto.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("plant-photos")
        .upload(`photos/${fileName}`, formData.foto);

      if (uploadError) {
        console.error("Error subiendo foto:", uploadError);
        // Continuar sin foto si falla
      } else {
        // Obtener URL pública de la foto
        const { data } = supabase.storage
          .from("plant-photos")
          .getPublicUrl(`photos/${fileName}`);
        photoUrl = data.publicUrl;
      }
    }

    // Parsear coordenadas si existen
    let coordenadas = null;
    if (formData.coordenadas) {
      const [lat, lon] = formData.coordenadas.split(",").map((c) => c.trim());
      coordenadas = { latitude: parseFloat(lat), longitude: parseFloat(lon) };
    }

    // Guardar registro en photo_records
    const { data, error } = await supabase
      .from("photo_records")
      .insert([
        {
          especie_id: especieId,
          nombre_usuario: formData.nombreUsuario,
          fecha: formData.fecha,
          lugar: formData.lugar,
          coordenadas: coordenadas,
          observaciones: formData.observaciones || null,
          photo_url: photoUrl,
        },
      ])
      .select();

    if (error) {
      console.error("Error guardando registro:", error);
      throw new Error(`Error guardando en base de datos: ${error.message}`);
    }

    const recordId = data[0].id;
    return recordId;
  } catch (error) {
    console.error("Error en savePhotoRecord:", error);
    throw error;
  }
}

export async function saveQuizSession(
  especieId: string,
  answers: Record<string, string>
): Promise<void> {
  try {
    const { error } = await supabase.from("quiz_sessions").insert([
      {
        current_node_id: "completed",
        answers: answers,
        final_especie_id: especieId,
        completed_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Error guardando sesión de quiz:", error);
    }
  } catch (error) {
    console.error("Error en saveQuizSession:", error);
  }
}
