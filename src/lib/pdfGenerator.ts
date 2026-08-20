import jsPDF from "jspdf";
import { Especie, PhotoRecord, PlantFormData } from "@/types";

export interface LabelRecord {
  plantNumber: number;
  collector: string;
  family: string;
  scientificName: string;
  commonName: string;
  date: string;
  place: string;
  coordinates?: string;
  observation?: string | null;
}

function formatDateForLabel(date: string) {
  if (!date) return "";

  const [year, month, day] = date.split("-");
  if (!year || !month || !day) return date;

  return `${day}/${month}/${year}`;
}

function cleanFamilyName(familia: string) {
  return familia.replace(/^\d+\.\s*/, "");
}

function formatCoordinates(coordinates: PhotoRecord["coordenadas"]) {
  if (!coordinates) return "";

  return `${coordinates.latitude}, ${coordinates.longitude}`;
}

function drawLabel(
  doc: jsPDF,
  label: LabelRecord,
  x: number,
  y: number,
  width: number,
  height: number
) {
  const padding = 2;
  const contentX = x + padding;
  const maxLineWidth = width - padding * 2;
  const valueGap = 1.1;
  const lineHeight = 3.6;
  let yPosition = y + 6;

  const drawInlineField = (
    fieldLabel: string,
    value: string,
    options?: { italicValue?: boolean }
  ) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${fieldLabel}:`, contentX, yPosition);

    const fieldLabelWidth = doc.getTextWidth(`${fieldLabel}:`);
    const valueX = contentX + fieldLabelWidth + valueGap;
    const availableWidth = maxLineWidth - fieldLabelWidth - valueGap;
    doc.setFont("helvetica", options?.italicValue ? "italic" : "normal");

    const wrappedValue = doc.splitTextToSize(value || "-", availableWidth);
    const maxLines = Math.max(1, Math.floor((y + height - 2 - yPosition) / lineHeight));
    doc.text(wrappedValue.slice(0, maxLines), valueX, yPosition);
    yPosition += Math.max(1, Math.min(wrappedValue.length, maxLines)) * lineHeight;
  };

  doc.setDrawColor(20, 20, 20);
  doc.setLineWidth(0.2);
  doc.rect(x, y, width, height);

  doc.setFontSize(7.4);
  drawInlineField("Colector", label.collector);

  doc.setFont("helvetica", "bold");
  doc.text(`N°: ${label.plantNumber}`, x + width - padding, y + 6, {
    align: "right",
  });

  yPosition += 1.4;
  drawInlineField("Familia", cleanFamilyName(label.family));

  yPosition += 1.2;
  drawInlineField("Nombre Científico", label.scientificName, {
    italicValue: true,
  });

  yPosition += 1.2;
  drawInlineField("Nombre Vulgar", label.commonName);

  yPosition += 1.2;
  const place = label.coordinates
    ? `${label.place}; ${label.coordinates}`
    : label.place;
  drawInlineField(
    "Fecha y Lugar de Colección",
    `${formatDateForLabel(label.date)}, ${place}`
  );

  yPosition += 1.2;
  drawInlineField("Observación", label.observation || "-");
}

function createA4Document() {
  return new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });
}

function generateLabelsDocument(labels: LabelRecord[]) {
  const doc = createA4Document();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 8;
  const columnGap = 4;
  const rowGap = 3;
  const columns = 2;
  const rows = 6;
  const labelsPerPage = columns * rows;
  const labelWidth = (pageWidth - margin * 2 - columnGap) / columns;
  const labelHeight = (pageHeight - margin * 2 - rowGap * (rows - 1)) / rows;

  labels.forEach((label, index) => {
    if (index > 0 && index % labelsPerPage === 0) {
      doc.addPage();
    }

    const pageIndex = index % labelsPerPage;
    const column = pageIndex % columns;
    const row = Math.floor(pageIndex / columns);
    const x = margin + column * (labelWidth + columnGap);
    const y = margin + row * (labelHeight + rowGap);

    drawLabel(doc, label, x, y, labelWidth, labelHeight);
  });

  return doc;
}

export async function generatePDF(
  especie: Especie,
  formData: PlantFormData,
  numeroPlanta: number
) {
  const doc = generateLabelsDocument([
    {
      plantNumber: numeroPlanta,
      collector: formData.nombreUsuario,
      family: especie.familia,
      scientificName: especie.nombreCientifico,
      commonName: especie.nombreVulgar,
      date: formData.fecha,
      place: formData.lugar,
      coordinates: formData.coordenadas,
      observation: formData.observaciones,
    },
  ]);

  doc.save(`etiqueta-planta-${numeroPlanta}-${Date.now()}.pdf`);
}

export async function generateLabelsPDF(labels: LabelRecord[]) {
  if (labels.length === 0) return;

  const doc = generateLabelsDocument(labels);
  doc.save(`etiquetas-plantas-${Date.now()}.pdf`);
}

export function recordToLabel(record: PhotoRecord, especie?: Especie): LabelRecord {
  return {
    plantNumber: record.plant_number,
    collector: record.nombre_usuario,
    family: especie?.familia || record.especie_id,
    scientificName: especie?.nombreCientifico || record.especie_id,
    commonName: especie?.nombreVulgar || "-",
    date: record.fecha,
    place: record.lugar,
    coordinates: formatCoordinates(record.coordenadas),
    observation: record.observaciones,
  };
}
