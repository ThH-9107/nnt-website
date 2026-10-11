import Link from "next/link";
import type { ProjectStory } from "@/data/project-pages";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectStoryContent } from "@/components/story/ProjectStoryContent";

export function ProjectPage({ project }: { project: ProjectStory }) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main" className="story-page"><div className="story-page-top container"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href={project.areaHref}>{project.area}</Link><span aria-hidden="true">/</span><span aria-current="page">{project.shortTitle}</span></nav><Link href="/#inquiry-map">← Back to Inquiry Map</Link></div><ProjectStoryContent project={project} /></main>
    <SiteFooter />
  </>;
}
