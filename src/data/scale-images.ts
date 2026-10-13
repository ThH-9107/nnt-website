import { photos, type PortfolioImage } from "./photography";
import type { InquiryNodeData } from "./inquiry";

export const scaleImages: Record<InquiryNodeData["id"], PortfolioImage> = {
  see: photos.medicalExamples,
  test: photos.phytophthoraSampling,
  share: photos.molebioWorkshop,
  serve: photos.hoaYenMidAutumn2026,
  express: photos.creativeAudience,
};
