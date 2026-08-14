import jsPDF from "jspdf";
import { Especie } from "@/types";

interface FormData {
  nombreUsuario: string;
  fecha: string;
  lugar: string;
  coordenadas?: string;
  observaciones?: string;
  foto?: File | null;
}

export async function generatePDF(
  especie: Especie,
  formData: FormData,
  numeroPlanta: number
) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 10;

  let yPosition = margin;

  // Encabezado
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("FICHA DE PLANTA IDENTIFICADA", margin, yPosition);
  yPosition += 10;

  // Número de planta
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`N° de Planta: ${numeroPlanta}`, margin, yPosition);
  yPosition += 8;

  // Nombre científico
  doc.setFont("helvetica", "bold");
  doc.text("Nombre Científico:", margin, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text(especie.nombreCientifico, margin + 50, yPosition);
  yPosition += 8;

  // Nombre vulgar
  doc.setFont("helvetica", "bold");
  doc.text("Nombre Vulgar:", margin, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text(especie.nombreVulgar, margin + 50, yPosition);
  yPosition += 8;

  // Familia
  doc.setFont("helvetica", "bold");
  doc.text("Familia:", margin, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text(especie.familia, margin + 50, yPosition);
  yPosition += 10;

  // Información del usuario
  doc.setFont("helvetica", "bold");
  doc.text("INFORMACIÓN DEL REGISTRO", margin, yPosition);
  yPosition += 8;

  doc.setFont("helvetica", "bold");
  doc.text("Nombre y Apellido:", margin, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text(formData.nombreUsuario, margin + 50, yPosition);
  yPosition += 8;

  doc.setFont("helvetica", "bold");
  doc.text("Fecha:", margin, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text(formData.fecha, margin + 50, yPosition);
  yPosition += 8;

  doc.setFont("helvetica", "bold");
  doc.text("Lugar:", margin, yPosition);
  doc.setFont("helvetica", "normal");
  const lugarText = doc.splitTextToSize(formData.lugar, pageWidth - 2 * margin - 40);
  doc.text(lugarText, margin + 50, yPosition);
  yPosition += lugarText.length * 5 + 2;

  if (formData.coordenadas) {
    doc.setFont("helvetica", "bold");
    doc.text("Coordenadas:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(formData.coordenadas, margin + 50, yPosition);
    yPosition += 8;
  }

  // Observaciones
  if (formData.observaciones) {
    yPosition += 5;
    doc.setFont("helvetica", "bold");
    doc.text("Observaciones:", margin, yPosition);
    yPosition += 6;
    doc.setFont("helvetica", "normal");
    const obsText = doc.splitTextToSize(
      formData.observaciones,
      pageWidth - 2 * margin
    );
    doc.text(obsText, margin, yPosition);
  }

  // Descripción de la especie
  yPosition = pageHeight - 40;
  doc.setFont("helvetica", "bold");
  doc.text("DESCRIPCIÓN DE LA ESPECIE", margin, yPosition);
  yPosition += 6;

  doc.setFont("helvetica", "normal");
  const descText = doc.splitTextToSize(
    especie.descripcion,
    pageWidth - 2 * margin
  );
  doc.text(descText, margin, yPosition);

  // Descargar
  doc.save(`planta-${numeroPlanta}-${Date.now()}.pdf`);
}
