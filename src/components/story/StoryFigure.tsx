import Image from "next/image";
import type { PortfolioImage } from "@/data/photography";

export function StoryFigure({ image, className = "", priority = false, sizes = "(max-width: 900px) 100vw, 50vw" }: {
  image: PortfolioImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const isFigure = image.kind === "figure";
  return <figure className={`story-figure ${className}`} data-kind={isFigure ? "figure" : "photo"}>
    <a className="story-figure-image" href={image.fullSrc ?? image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${image.title}`} style={{ aspectRatio: image.aspectRatio ?? `${image.width} / ${image.height}` }}>
      <Image src={image.src} alt={image.alt} fill priority={priority} quality={isFigure ? 90 : 75} sizes={sizes} style={{ objectFit: isFigure ? "contain" : "cover", objectPosition: image.position ?? "50% 50%" }} />
      <span className="story-image-open" aria-hidden="true">↗</span>
    </a>
    <figcaption><strong>{image.title}</strong><small>{image.caption}</small></figcaption>
  </figure>;
}
