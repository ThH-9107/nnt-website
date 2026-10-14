import { scaleImages } from "@/data/scale-images";
import type { InquiryNodeData } from "@/data/inquiry";

export function ScaleObservationImage({ id }: { id: InquiryNodeData["id"] }) {
  const image = scaleImages[id];
  const viewport = image.crop ?? [0, 0, image.width, image.height];

  return <svg className="scale-observation-image" viewBox={viewport.join(" ")} preserveAspectRatio={image.fit === "contain" ? "xMidYMid meet" : "xMidYMid slice"} role="img" aria-label={image.alt}>
    <image href={image.src} width={image.width} height={image.height} />
  </svg>;
}
