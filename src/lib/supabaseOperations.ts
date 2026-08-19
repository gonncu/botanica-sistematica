import { PhotoRecord, PlantFormData } from "@/types";
import { supabase } from "./supabase";

function sanitizeFileName(fileName: string) {
  return fileName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .toLowerCase();
}

async function getNextPlantNumber(userId: string) {
  const { data, error } = await supabase
    .from("photo_records")
    .select("plant_number")
    .eq("user_id", userId)
    .order("plant_number", { ascending: false })
    .limit(1);

  if (error) {
    throw new Error(`No se pudo calcular el número de planta: ${error.message}`);
  }

  return (data?.[0]?.plant_number || 0) + 1;
}

export async function savePhotoRecord(
  especieId: string,
  formData: PlantFormData,
  userId: string
): Promise<{ id: string; plantNumber: number }> {
  const plantNumber = await getNextPlantNumber(userId);
  let photoUrl: string | null = null;

  if (formData.foto) {
    const fileName = `${Date.now()}-${sanitizeFileName(formData.foto.name)}`;
    const photoPath = `${userId}/${fileName}`;
    const { error: uploadError } = await supabase.storage
      .from("plant-photos")
      .upload(photoPath, formData.foto, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw new Error(`Error subiendo foto: ${uploadError.message}`);
    }

    const { data } = supabase.storage
      .from("plant-photos")
      .getPublicUrl(photoPath);
    photoUrl = data.publicUrl;
  }

  let coordenadas = null;
  if (formData.coordenadas) {
    const [lat, lon] = formData.coordenadas.split(",").map((c) => c.trim());
    coordenadas = { latitude: parseFloat(lat), longitude: parseFloat(lon) };
  }

  const { data, error } = await supabase
    .from("photo_records")
    .insert([
      {
        user_id: userId,
        plant_number: plantNumber,
        especie_id: especieId,
        nombre_usuario: formData.nombreUsuario,
        fecha: formData.fecha,
        lugar: formData.lugar,
        coordenadas,
        observaciones: formData.observaciones || null,
        photo_url: photoUrl,
      },
    ])
    .select("id")
    .single();

  if (error) {
    throw new Error(`Error guardando en base de datos: ${error.message}`);
  }

  return { id: data.id, plantNumber };
}

export async function getPhotoRecords(): Promise<PhotoRecord[]> {
  const { data, error } = await supabase
    .from("photo_records")
    .select(
      "id,user_id,plant_number,especie_id,nombre_usuario,fecha,lugar,coordenadas,observaciones,photo_url,created_at"
    )
    .order("plant_number", { ascending: false });

  if (error) {
    throw new Error(`No se pudieron cargar los registros: ${error.message}`);
  }

  return data || [];
}

export async function saveQuizSession(
  especieId: string,
  answers: Record<string, string>,
  userId: string
): Promise<void> {
  const { error } = await supabase.from("quiz_sessions").insert([
    {
      user_id: userId,
      current_node_id: "completed",
      answers,
      final_especie_id: especieId,
      completed_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Error guardando sesión de quiz:", error);
  }
}
