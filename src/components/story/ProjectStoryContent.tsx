import Image from "next/image";
import Link from "next/link";
import type { GalleryItem, ProjectStory, StoryChapter, TimelineItem } from "@/data/project-pages";

const scalePosition: Record<ProjectStory["kind"], string> = {
  "medical-ai": "01 / 05 · IMAGE",
  phytophthora: "02 / 05 · ORGANISM",
  molebio: "03 / 05 · LEARNER",
  "hoa-yen": "04 / 05 · COMMUNITY",
};

function Figure({ src, intendedImage, caption, className = "" }: GalleryItem & { className?: string }) {
  return <figure className={`story-figure ${className}`}><div className="story-figure-image"><Image src={src} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" /><span>Image placeholder</span></div><figcaption><strong>Intended image: {intendedImage}</strong>{caption && <small>{caption}</small>}</figcaption></figure>;
}

function Chapter({ chapter, className = "" }: { chapter: StoryChapter; className?: string }) {
  return <section className={`story-chapter ${className}`}><div><span className="story-kicker">{chapter.label}</span><h3>{chapter.title}</h3></div><div>{chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>;
}

function Timeline({ items, className = "" }: { items: TimelineItem[]; className?: string }) {
  return <ol className={`story-timeline ${className}`}>{items.map((item, index) => <li key={`${item.period}-${index}`}><span className="story-time">{item.period}</span><div><small>{String(index + 1).padStart(2, "0")}</small><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>;
}

function Metrics({ project }: { project: ProjectStory }) {
  return <div className="story-metrics" aria-label="Documented project figures">{project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.detail && <small>{metric.detail}</small>}</div>)}</div>;
}

function Status({ project }: { project: ProjectStory }) {
  return <section className="story-status"><div><span className="story-kicker">{project.note.label}</span><h2>{project.note.title}</h2></div><div>{project.note.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<h3>{project.outlook.title}</h3>{project.outlook.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>;
}

function Credits({ project }: { project: ProjectStory }) {
  if (!project.credits) return null;
  return <aside className="story-credits" aria-label="Advisors and mentors">{project.credits.map((credit) => <div key={credit.label}><span>{credit.label}</span><strong>{credit.name}</strong><small>{credit.detail}</small></div>)}</aside>;
}

function StoryEnd({ project }: { project: ProjectStory }) {
  return <div className="story-end"><span>Continue along the map</span><Link href={project.next.href} scroll={false}>{project.next.label} <span aria-hidden="true">↗</span></Link></div>;
}

function StoryOpening({ project }: { project: ProjectStory }) {
  return <header className="story-opening"><div className="story-opening-copy"><p className="story-kicker">{scalePosition[project.kind]} / {project.area}</p><h1>{project.title}</h1><p className="story-introduction">{project.introduction}</p><div className="story-meta"><span>{project.period}</span><span>{project.role}</span></div></div><Figure src={project.heroImage} intendedImage={project.heroImageType} caption="A verified project image can replace this labeled placeholder." className="story-opening-figure" /></header>;
}

function MedicalAIStory({ project }: { project: ProjectStory }) {
  return <article className="story story-medical"><StoryOpening project={project} />
    <section className="story-question story-medical-question"><span className="story-kicker">The question beneath the image</span><h2>{project.question}</h2><p>{project.questionContext}</p></section>
    <section className="story-medical-evolution"><div className="story-section-heading"><span className="story-kicker">Research path / 2023 → present</span><h2>The method changed as the question became clearer.</h2><p>{project.timelineIntro}</p></div><Timeline items={project.timeline} /></section>
    <section className="story-medical-study"><div className="story-section-heading"><span className="story-kicker">Current study / Design & evidence</span><h2>Learn a representation. Then test what it carries.</h2></div><Metrics project={project} /><div className="story-medical-chapters">{project.chapters.map((chapter) => <Chapter key={chapter.label} chapter={chapter} />)}</div></section>
    <section className="story-medical-result" aria-label="Preliminary result"><div><span className="story-kicker">Independent test / preliminary single seed</span><p>F1 <strong>0.5522 <span aria-hidden="true">→</span> 0.5795</strong></p></div><p>The higher F1 comes with an AUROC trade-off. Further validation is required before interpreting it as a general improvement.</p></section>
    <section className="story-visual-section"><div className="story-section-heading"><span className="story-kicker">Figures to document the work</span><h2>Make the evidence visible.</h2></div><div className="story-medical-gallery">{project.gallery.map((item) => <Figure key={item.src} {...item} />)}</div></section>
    <Status project={project} /><Credits project={project} /><StoryEnd project={project} />
  </article>;
}

function PhytophthoraStory({ project }: { project: ProjectStory }) {
  const process = ["Farm", "Symptom", "Sample", "Culture", "Observation", "Revise"];
  const photoRecord = ["Farm setting in Lam Ha", "Symptomatic durian tissue", "Field sampling", "Petri dish / isolation", "Microscopy", "Laboratory process"];
  return <article className="story story-field"><StoryOpening project={project} />
    <section className="story-question story-field-question"><span className="story-kicker">The research question</span><h2>{project.question}</h2><p>{project.questionContext}</p></section>
    <section className="story-field-process" aria-label="Field to laboratory process"><span className="story-kicker">A movement inward / then back to the field</span><ol>{process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol><p>Sample → isolate → inspect → inconsistent → revise ↺</p></section>
    <section className="story-field-diary"><div className="story-section-heading"><span className="story-kicker">Field notes / May 2024–present</span><h2>Conditions outside the lab shape the method inside it.</h2><p>{project.timelineIntro}</p></div><Timeline items={project.timeline} /></section>
    <section className="story-field-chapters">{project.chapters.map((chapter, index) => <div className="story-field-chapter" key={chapter.label}><Chapter chapter={chapter} />{index < project.gallery.length && <Figure {...project.gallery[index]} />}</div>)}</section>
    <section className="story-field-contact-sheet"><div className="story-section-heading"><span className="story-kicker">Future field & laboratory record</span><h2>What needs to be seen.</h2></div><div>{photoRecord.map((label, index) => <figure key={label} className={`story-field-photo story-field-photo-${index + 1}`}><div role="img" aria-label={`Placeholder for ${label} photograph`}><span>Photograph / to be added</span></div><figcaption>{label}</figcaption></figure>)}</div></section>
    <div className="story-field-metrics"><Metrics project={project} /></div><Status project={project} /><Credits project={project} /><StoryEnd project={project} />
  </article>;
}

function MoleBioStory({ project }: { project: ProjectStory }) {
  return <article className="story story-lab"><StoryOpening project={project} />
    <section className="story-lab-before-after"><div><span className="story-kicker">Before / 2024–25</span><strong>~16</strong><h2>A club centered on lectures and self-study.</h2></div><div><span className="story-kicker">After / 2025–26</span><strong>~20</strong><h2>MoleBio: a lab community built around practice.</h2><p>Approximately 80% newly recruited members.</p></div></section>
    <section className="story-question story-lab-question"><span className="story-kicker">The design question</span><h2>{project.question}</h2><p>{project.questionContext}</p></section>
    <section className="story-lab-program"><div className="story-section-heading"><span className="story-kicker">At the lab table</span><h2>Repeated practice made the difference.</h2></div><Metrics project={project} /><div className="story-lab-methods" aria-label="Techniques practiced"><span>Pipetting</span><span>Centrifugation</span><span>DNA extraction & purification</span><span>PCR</span><span>Gel electrophoresis</span><span>Microscopy</span></div></section>
    <section className="story-lab-record"><div><Timeline items={project.timeline} /></div><div className="story-lab-photos">{project.gallery.map((item) => <Figure key={item.src} {...item} />)}</div></section>
    <section className="story-lab-chapters">{project.chapters.map((chapter) => <Chapter key={chapter.label} chapter={chapter} />)}</section><Status project={project} /><StoryEnd project={project} />
  </article>;
}

function HoaYenStory({ project }: { project: ProjectStory }) {
  return <article className="story story-community"><StoryOpening project={project} />
    <section className="story-question story-community-question"><span className="story-kicker">From a specific need to a recurring network</span><h2>{project.question}</h2><p>{project.questionContext}</p></section>
    <section className="story-community-route"><div className="story-section-heading"><span className="story-kicker">Selected documented programs / 2024–2026</span><h2>Each return widened the work.</h2><p>{project.timelineIntro}</p></div><Timeline items={project.timeline} /></section>
    <section className="story-community-impact"><div><span className="story-kicker">Documented reach</span><h2>Counted carefully.</h2><p>Figures from the three-year report. Beneficiary participations are not unique people; program expenditures and support are not funds raised.</p></div><Metrics project={project} /></section>
    <section className="story-community-gallery">{project.gallery.map((item) => <Figure key={item.src} {...item} />)}</section>
    <section className="story-community-chapters">{project.chapters.map((chapter) => <Chapter key={chapter.label} chapter={chapter} />)}</section><Status project={project} /><StoryEnd project={project} />
  </article>;
}

export function ProjectStoryContent({ project }: { project: ProjectStory }) {
  if (project.kind === "medical-ai") return <MedicalAIStory project={project} />;
  if (project.kind === "phytophthora") return <PhytophthoraStory project={project} />;
  if (project.kind === "molebio") return <MoleBioStory project={project} />;
  return <HoaYenStory project={project} />;
}
