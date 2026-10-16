import { scaleImages } from "@/data/scale-images";
import type { InquiryNodeData } from "@/data/inquiry";

export function ScaleObservationImage({ id }: { id: InquiryNodeData["id"] }) {
  const image = scaleImages[id];
  const viewport = image.crop ?? [0, 0, image.width, image.height];

  if (image.contextInset) return <svg className="scale-observation-image scale-organism-composition" data-fit="composition" viewBox="0 0 1200 800" role="img" aria-label={image.alt}>
    <svg width="1200" height="800" viewBox={viewport.join(" ")} preserveAspectRatio="xMidYMid slice"><image href={image.src} width={image.width} height={image.height} /></svg>
    <rect className="scale-organism-inset-paper" x="826" y="316" width="328" height="454" />
    <svg x="840" y="330" width="300" height="400" viewBox={`0 0 ${image.width} ${image.height}`} preserveAspectRatio="xMidYMid meet"><image href={image.src} width={image.width} height={image.height} /></svg>
    <text className="scale-organism-inset-label" x="840" y="755">{image.contextInset.label}</text>
  </svg>;

  return <svg className="scale-observation-image" data-fit={image.fit ?? "cover"} viewBox={viewport.join(" ")} preserveAspectRatio={image.fit === "contain" ? "xMidYMid meet" : "xMidYMid slice"} role="img" aria-label={image.alt}>
    <image href={image.src} width={image.width} height={image.height} />
  </svg>;
}
