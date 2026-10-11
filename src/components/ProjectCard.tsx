import Image from "next/image";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return <a className="project-card" href={project.href} aria-label={`Explore ${project.title}`}>
    <div className="project-image">
      {/* Replace with a real image of this specific project. See public/images/README.md. */}
      <Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
    </div>
    <div className="project-card-body"><div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div><h3>{project.title}</h3><p>{project.description}</p><span className="text-link" aria-hidden="true">Explore project ↗</span></div>
  </a>;
}
