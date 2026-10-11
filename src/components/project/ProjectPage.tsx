import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/portfolio";
import type { ProjectStory } from "@/data/project-pages";
import { ImageGallery, MetricBlocks, ProjectNote, ProjectTimeline } from "./ProjectSections";

export function ProjectPage({ project }: { project: ProjectStory }) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container header-inner">
      <Link className="wordmark" href="/" aria-label="Nguyen Ngoc Thanh, home">N<span>.</span>NT</Link>
      <nav className="site-nav" aria-label="Main navigation"><Link href="/#research">Research</Link><Link href="/#leadership">Leadership</Link><Link href="/#creative">Creative</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav>
      <a className="header-contact" href={`mailto:${profile.email}`}>Get in touch ↗</a>
    </div></header>

    <main id="main" className="detail-page">
      <div className="container detail-topbar"><nav aria-label="Breadcrumb" className="detail-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href={project.areaHref}>{project.area}</Link><span aria-hidden="true">/</span><span aria-current="page">{project.shortTitle}</span></nav><Link className="detail-back" href={project.areaHref}>← Back to {project.area.toLowerCase()}</Link></div>

      <article>
        <header className="detail-hero"><div className="container detail-hero-grid"><div className="detail-hero-copy"><p className="eyebrow">{project.area} / Project story</p><h1>{project.title}</h1><p className="detail-hero-lead">{project.introduction}</p><div className="detail-hero-meta"><div><span>Period</span><strong>{project.period}</strong></div><div><span>Role</span><strong>{project.role}</strong></div></div></div><figure className="detail-hero-figure"><div className="detail-hero-image">{/* Replace this SVG with the exact image type identified in the caption. */}<Image src={project.heroImage} alt="" fill priority sizes="(max-width: 800px) 100vw, 45vw" /><span className="detail-image-tag">Image placeholder</span></div><figcaption>Intended image: {project.heroImageType}</figcaption></figure></div></header>

        <section className="detail-overview" aria-labelledby="detail-question"><div className="container"><MetricBlocks metrics={project.metrics} /><div className="detail-question"><p className="detail-kicker">{project.questionLabel}</p><h2 id="detail-question">{project.question}</h2><p>{project.questionContext}</p></div></div></section>

        <section className="detail-section detail-journey" aria-labelledby="detail-journey-title"><div className="container detail-section-grid"><div className="detail-section-intro"><span className="detail-kicker">01 / The journey</span><h2 id="detail-journey-title">How the work developed.</h2><p>{project.timelineIntro}</p></div><ProjectTimeline items={project.timeline} /></div></section>

        <section className="detail-section detail-chapters" aria-labelledby="detail-method-title"><div className="container"><div className="detail-section-intro detail-wide-heading"><span className="detail-kicker">02 / Inside the work</span><h2 id="detail-method-title">The decisions behind the work.</h2></div><div className="detail-chapter-list">{project.chapters.map((chapter) => <section className="detail-chapter" key={chapter.label}><div><span className="detail-kicker">{chapter.label}</span><h3>{chapter.title}</h3></div><div>{chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div></div></section>

        <section className="detail-section detail-visuals" aria-labelledby="detail-visuals-title"><div className="container"><div className="detail-section-intro detail-wide-heading"><span className="detail-kicker">03 / Visual record</span><h2 id="detail-visuals-title">A place for the evidence and people.</h2><p>These labeled placeholders show which photographs or diagrams should accompany the story when the materials are ready.</p></div><ImageGallery images={project.gallery} /></div></section>

        <section className="detail-section detail-conclusion" aria-label="Project status and next steps"><div className="container"><ProjectNote {...project.note} /><div className="detail-outlook"><div><span className="detail-kicker">04 / Current position</span><h2>{project.outlook.title}</h2></div><div>{project.outlook.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{project.credits && <div className="detail-credits">{project.credits.map((credit) => <div key={credit.label}><span>{credit.label}</span><strong>{credit.name}</strong><p>{credit.detail}</p></div>)}</div>}</div></div></div></section>
      </article>

      <div className="detail-next"><div className="container"><span className="detail-kicker">Continue exploring</span><Link href={project.next.href}>{project.next.label} <span aria-hidden="true">↗</span></Link></div></div>
    </main>

    <footer className="site-footer detail-footer"><div className="container"><div className="footer-main"><div><p className="eyebrow">Contact</p><h2>Let’s exchange ideas.</h2><p>Research questions, collaborations, or a conversation about science education are welcome.</p></div><a className="footer-email" href={`mailto:${profile.email}`}>{profile.email} ↗</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Nguyen Ngoc Thanh</span><span>{profile.location}</span><div><Link href="/">Home</Link><Link href={project.areaHref}>Back to {project.area.toLowerCase()}</Link></div></div></div></footer>
  </>;
}
