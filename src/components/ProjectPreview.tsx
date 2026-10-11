import Image from "next/image";
import Link from "next/link";
import type { selectedHighlights } from "@/data/inquiry";

type Preview = (typeof selectedHighlights)[number];

export function ProjectPreview({ project, featured = false }: { project: Preview; featured?: boolean }) {
  return <article className={`home-preview${featured ? " home-preview-featured" : ""}`}>
    <div className="home-preview-copy"><p className="eyebrow">{project.number}</p><h3>{project.title}</h3><p>{project.description}</p><Link href={project.href}>Read the project story <span aria-hidden="true">↗</span></Link></div>
    <figure className="home-preview-figure"><div className="home-preview-image">{/* Replace this SVG with the specific real image type named in the caption. */}<Image src={project.image} alt="" fill sizes={featured ? "(max-width: 800px) 100vw, 45vw" : "(max-width: 800px) 100vw, 30vw"} /><span>Image placeholder</span></div><figcaption>Intended image: {project.imageType}</figcaption></figure>
  </article>;
}
