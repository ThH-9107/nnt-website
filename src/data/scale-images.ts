import { photos, type PortfolioImage } from "./photography";
import type { InquiryNodeData } from "./inquiry";

export type ScaleImage = PortfolioImage & {
  // A display-only SVG viewport. The underlying photograph / figure stays intact.
  crop?: [number, number, number, number];
  fieldNote: string;
};

export const scaleImages: Record<InquiryNodeData["id"], ScaleImage> = {
  see: {
    ...photos.medicalExamples,
    crop: [2100, 465, 650, 600],
    title: "Skin image / close detail",
    alt: "A close detail of a dermoscopic skin-image example, with fine texture and hairs visible.",
    fieldNote: "Texture → pattern",
  },
  test: {
    src: "/images/selected/phytophthora-durian-bark.webp",
    width: 1200,
    height: 1600,
    crop: [110, 80, 480, 660],
    title: "Durian bark / field detail",
    caption: "A detail from the field-sampling record, not a confirmed pathogen identification.",
    alt: "A close view of the textured durian trunk from the field-sampling record.",
    fieldNote: "Surface → living material",
  },
  share: { ...photos.molebioBench, fieldNote: "One method → shared practice" },
  serve: {
    ...photos.hoaYenWater,
    crop: [0, 500, 1200, 1000],
    fieldNote: "An exchange → its wider setting",
  },
  express: { ...photos.creativeWide, fieldNote: "The ensemble → the whole room" },
};
