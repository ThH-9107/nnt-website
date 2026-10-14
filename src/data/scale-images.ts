import { photos, type PortfolioImage } from "./photography";
import type { InquiryNodeData } from "./inquiry";

export type ScaleImage = PortfolioImage & {
  // A display-only SVG viewport. The underlying photograph / figure stays intact.
  crop?: [number, number, number, number];
  fit?: "cover" | "contain";
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
    src: "/images/selected/phytophthora-durian-tree.webp",
    width: 1200,
    height: 1600,
    fit: "contain",
    title: "Durian tree / the living context",
    caption: "The supplied photograph of a durian tree and its surrounding growing environment.",
    alt: "A whole durian tree with its canopy and trunk visible among vegetation on a hillside under a cloudy sky.",
    fieldNote: "Image detail → a living organism",
  },
  share: { ...photos.molebioBench, fieldNote: "One method → shared practice" },
  serve: {
    ...photos.hoaYenMidAutumn2024,
    crop: [0, 400, 1200, 1000],
    title: "Mid-Autumn / a community gathering",
    alt: "A wide detail of volunteers and participants gathered outdoors beneath trees and lanterns at the 2024 Mid-Autumn program.",
    fieldNote: "Shared work → a community gathering",
  },
  express: { ...photos.creativeWide, fit: "contain", fieldNote: "The ensemble → the whole room" },
};
