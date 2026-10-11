import Image from "next/image";
import type { GalleryItem, Metric, TimelineItem } from "@/data/project-pages";

export function MetricBlocks({ metrics }: { metrics: Metric[] }) {
  return <div className="detail-metrics" aria-label="Project at a glance">
    {metrics.map((metric) => <div className="detail-metric" key={metric.label}>
      <strong>{metric.value}</strong><span>{metric.label}</span>{metric.detail && <small>{metric.detail}</small>}
    </div>)}
  </div>;
}

export function ProjectTimeline({ items }: { items: TimelineItem[] }) {
  return <ol className="detail-timeline">
    {items.map((item, index) => <li key={`${item.period}-${index}`}>
      <span className="detail-timeline-period">{item.period}</span>
      <div><span className="detail-timeline-index">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></div>
    </li>)}
  </ol>;
}

export function ImageGallery({ images }: { images: GalleryItem[] }) {
  return <div className="detail-gallery">
    {images.map((image) => <figure className="detail-gallery-item" key={image.src}>
      <div className="detail-gallery-image">
        {/* Replace the SVG path in src/data/project-pages.ts with the exact real image type named below. */}
        <Image src={image.src} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
        <span className="detail-image-tag">Image placeholder</span>
      </div>
      <figcaption><strong>Intended image: {image.intendedImage}</strong><span>{image.caption}</span></figcaption>
    </figure>)}
  </div>;
}

export function ProjectNote({ label, title, paragraphs }: { label: string; title: string; paragraphs: string[] }) {
  return <aside className="detail-note"><div><span className="detail-kicker">{label}</span><h2>{title}</h2></div><div>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></aside>;
}
