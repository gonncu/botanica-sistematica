import jsPDF from "jspdf";
import { Especie, PlantFormData } from "@/types";

function formatDateForLabel(date: string) {
  if (!date) return "";

  const [year, month, day] = date.split("-");
  if (!year || !month || !day) return date;

  return `${day}/${month}/${year}`;
}

function cleanFamilyName(familia: string) {
  return familia.replace(/^\d+\.\s*/, "");
}

export async function generatePDF(
  especie: Especie,
  formData: PlantFormData,
  numeroPlanta: number
) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 12;
  const labelX = margin;
  const labelY = 18;
  const labelWidth = pageWidth - margin * 2;
  const labelHeight = 72;
  const contentX = labelX + 2;
  const valueGap = 1.5;
  const maxLineWidth = labelWidth - 4;
  const lineHeight = 6.2;
  let yPosition = labelY + 8;

  const drawInlineField = (
    label: string,
    value: string,
    options?: { italicValue?: boolean; maxWidth?: number }
  ) => {
    const fieldMaxWidth = options?.maxWidth ?? maxLineWidth;

    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, contentX, yPosition);

    const labelWidth = doc.getTextWidth(`${label}:`);
    doc.setFont("helvetica", options?.italicValue ? "italic" : "normal");

    const valueX = contentX + labelWidth + valueGap;
    const wrappedValue = doc.splitTextToSize(
      value || "-",
      fieldMaxWidth - labelWidth - valueGap
    );

    doc.text(wrappedValue, valueX, yPosition);
    yPosition += Math.max(1, wrappedValue.length) * lineHeight;
  };

  doc.setDrawColor(20, 20, 20);
  doc.setLineWidth(0.25);
  doc.rect(labelX, labelY, labelWidth, labelHeight);

  doc.setFontSize(10);
  drawInlineField("Colector", formData.nombreUsuario || "-");

  doc.setFont("helvetica", "bold");
  doc.text(`N°: ${numeroPlanta}`, labelX + labelWidth / 2 + 6, labelY + 8);

  yPosition += 4;
  drawInlineField("Familia", cleanFamilyName(especie.familia));

  yPosition += 3;
  drawInlineField("Nombre Científico", especie.nombreCientifico, {
    italicValue: true,
  });

  yPosition += 3;
  drawInlineField("Nombre Vulgar", especie.nombreVulgar || "-");

  yPosition += 3;
  const lugar = formData.coordenadas
    ? `${formData.lugar}; ${formData.coordenadas}`
    : formData.lugar;
  drawInlineField(
    "Fecha y Lugar de Colección",
    `${formatDateForLabel(formData.fecha)}, ${lugar}`
  );

  yPosition += 3;
  drawInlineField("Observación", formData.observaciones || "-");

  doc.save(`etiqueta-planta-${numeroPlanta}-${Date.now()}.pdf`);
}
