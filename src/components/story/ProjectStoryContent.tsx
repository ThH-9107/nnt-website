import Link from "next/link";
import type { GalleryItem, ProjectStory, StoryChapter, TimelineItem } from "@/data/project-pages";
import { StoryFigure } from "./StoryFigure";
import { hoaYenThankYouLetter } from "@/data/community-documents";
import { UnfinishedResearchNote } from "./UnfinishedResearchNote";
import { ScientificText } from "./ScientificText";

const scalePosition: Record<ProjectStory["kind"], string> = {
  "medical-ai": "01 / 05 · IMAGE",
  phytophthora: "02 / 05 · ORGANISM",
  molebio: "03 / 05 · LEARNER",
  "hoa-yen": "04 / 05 · COMMUNITY",
};

function Figure({ className = "", priority = false, ...image }: GalleryItem & { className?: string; priority?: boolean }) {
  return <StoryFigure image={image} className={className} priority={priority} />;
}

function Chapter({ chapter, className = "" }: { chapter: StoryChapter; className?: string }) {
  return <section className={`story-chapter ${className}`}><div><span className="story-kicker">{chapter.label}</span><h3>{chapter.title}</h3></div><div>{chapter.paragraphs.map((paragraph) => <p key={paragraph}><ScientificText text={paragraph} /></p>)}</div></section>;
}

function Timeline({ items, className = "" }: { items: TimelineItem[]; className?: string }) {
  return <ol className={`story-timeline ${className}`}>{items.map((item, index) => <li key={`${item.period}-${index}`}><span className="story-time">{item.period}</span><div><small>{String(index + 1).padStart(2, "0")}</small><h3>{item.title}</h3><p><ScientificText text={item.text} /></p></div></li>)}</ol>;
}

function Metrics({ project }: { project: ProjectStory }) {
  return <div className="story-metrics" aria-label="Documented project figures">{project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.detail && <small>{metric.detail}</small>}</div>)}</div>;
}

function Status({ project }: { project: ProjectStory }) {
  return <section className="story-status"><div><span className="story-kicker">{project.note.label}</span><h2>{project.note.title}</h2></div><div>{project.note.paragraphs.map((paragraph) => <p key={paragraph}><ScientificText text={paragraph} /></p>)}{project.outlook && <><h3>{project.outlook.title}</h3>{project.outlook.paragraphs.map((paragraph) => <p key={paragraph}><ScientificText text={paragraph} /></p>)}</>}</div></section>;
}

function Credits({ project }: { project: ProjectStory }) {
  if (!project.credits) return null;
  return <aside className="story-credits" aria-label="Advisors and mentors">{project.credits.map((credit) => <div key={credit.label}><span>{credit.label}</span><strong>{credit.name}</strong><small>{credit.detail}</small></div>)}</aside>;
}

function StoryEnd({ project }: { project: ProjectStory }) {
  return <div className="story-end"><span>Continue along the map</span><Link href={project.next.href} scroll={false}>{project.next.label} <span aria-hidden="true">↗</span></Link></div>;
}

function StoryOpening({ project }: { project: ProjectStory }) {
  return <header className="story-opening"><div className="story-opening-copy"><p className="story-kicker">{scalePosition[project.kind]} / {project.area}</p><h1>{project.title}</h1><p className="story-introduction"><ScientificText text={project.introduction} /></p><div className="story-meta"><span>{project.period}</span><span>{project.role}</span></div></div><Figure {...project.hero} priority className="story-opening-figure" /></header>;
}

function MedicalAIStory({ project }: { project: ProjectStory }) {
  return <article className="story story-medical"><StoryOpening project={project} />
    <section className="story-question story-medical-question"><span className="story-kicker">{project.questionLabel}</span><h2>{project.question}</h2><p>{project.questionContext}</p></section>
    <section className="story-medical-evolution"><div className="story-section-heading"><span className="story-kicker">Research path / 2023–Present</span><h2>From a webcam prototype to medical imaging.</h2><p>{project.timelineIntro}</p>{project.timelineImage && <Figure {...project.timelineImage} className="story-medical-prototype" />}</div><Timeline items={project.timeline} /></section>
    <section className="story-medical-study"><div className="story-section-heading"><span className="story-kicker">Current study / Contribution & design</span><h2>The pipeline and the comparisons.</h2></div><Metrics project={project} /><div className="story-medical-chapters">{project.chapters.map((chapter) => <Chapter key={chapter.label} chapter={chapter} />)}</div></section>
    <section className="story-medical-result" aria-label="Preliminary independent-test result"><div><span className="story-kicker">Independent test / Preliminary single-seed result</span><p>F1 <strong>0.5522 <span aria-hidden="true">→</span> 0.5795</strong></p></div><div><p>The highest-F1 condition improved independent-test F1 by approximately 4.9% relative to the baseline. The gain came with an AUROC trade-off; further validation is needed before drawing broader conclusions.</p><p>F1 balances precision and recall at a selected decision threshold. AUROC measures how well predictions rank cases across thresholds. An increase in one can occur alongside a decrease in the other.</p></div></section>
    <section className="story-visual-section"><div className="story-section-heading"><span className="story-kicker">Experimental figures</span><h2>F1 and AUROC across the six conditions.</h2><p>Open either figure to inspect the full comparison.</p></div><div className="story-medical-gallery">{project.gallery.map((item) => <Figure key={item.src} {...item} />)}</div></section>
    <Status project={project} /><Credits project={project} /><StoryEnd project={project} />
  </article>;
}

function PhytophthoraStory({ project }: { project: ProjectStory }) {
  const process = ["Farm", "Symptom", "Sample", "Culture", "Observation", "Revise"];
  return <article className="story story-field"><StoryOpening project={project} />
    <section className="story-question story-field-question"><span className="story-kicker">{project.questionLabel}</span><h2>{project.question}</h2><p><ScientificText text={project.questionContext} /></p></section>
    <section className="story-field-process" aria-label="Field to laboratory process"><span className="story-kicker">Field-to-laboratory workflow</span><ol>{process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol></section>
    <section className="story-field-diary"><div className="story-section-heading"><span className="story-kicker">Field notes / May 2024–Present</span><h2>Leading the study from orchard to bench.</h2><p>{project.timelineIntro}</p></div><Timeline items={project.timeline} /></section>
    <section className="story-field-chapters">{project.chapters.map((chapter, index) => <div className="story-field-chapter" key={chapter.label}><Chapter chapter={chapter} />{index < project.gallery.length && <Figure {...project.gallery[index]} />}</div>)}</section>
    <section className="story-field-contact-sheet"><div className="story-section-heading"><span className="story-kicker">Field & laboratory record</span><h2>Samples, tools, and culture work.</h2><p>Photographs from the sampling and isolation workflow.</p></div><div>{project.record?.map((item) => <Figure key={item.src} {...item} />)}</div></section>
    <Status project={project} /><Credits project={project} /><UnfinishedResearchNote /><StoryEnd project={project} />
  </article>;
}

function MoleBioStory({ project }: { project: ProjectStory }) {
  return <article className="story story-lab"><StoryOpening project={project} />
    <section className="story-lab-before-after"><div><span className="story-kicker">Before / 2024–2025</span><strong>Listen.</strong><h2>Lectures and self-study.</h2><p>Limited opportunities to handle laboratory tools.</p></div><div><span className="story-kicker">After / 2025–2026</span><strong>Practice.</strong><h2>Laboratory sessions and student-led projects.</h2><p>A redesigned program with workshops and outreach.</p></div></section>
    <section className="story-lab-program"><div className="story-section-heading"><span className="story-kicker">The relaunched program</span><h2>{project.question}</h2><p>{project.questionContext}</p></div><Metrics project={project} /></section>
    <section className="story-lab-record"><div><Timeline items={project.timeline} /></div><div className="story-lab-photos">{project.gallery.map((item) => <Figure key={item.src} {...item} />)}</div></section>
    <section className="story-lab-chapters">{project.chapters.map((chapter) => <Chapter key={chapter.label} chapter={chapter} />)}</section>
    <section className="story-lab-documentation"><div className="story-section-heading"><span className="story-kicker">Sessions, workshops & student projects</span><h2>A laboratory shared by learners.</h2></div><div className="story-photo-grid">{project.record?.map((item) => <Figure key={item.src} {...item} />)}</div></section>
    <section className="story-related-learning"><div className="story-section-heading"><span className="story-kicker">Related laboratory experience / Beyond MoleBio</span><h2>Continuing to learn.</h2><p>Separate from the club: selected learning experiences in research and pharmaceutical laboratories.</p></div><div className="story-related-grid">{project.relatedImages?.map((item) => <Figure key={item.src} {...item} />)}</div></section>
    <Status project={project} /><StoryEnd project={project} />
  </article>;
}

function HoaYenStory({ project }: { project: ProjectStory }) {
  return <article className="story story-community"><StoryOpening project={project} />
    <section className="story-question story-community-question"><span className="story-kicker">{project.questionLabel}</span><h2>{project.question}</h2><p>{project.questionContext}</p></section>
    <section className="story-community-route"><div className="story-section-heading"><span className="story-kicker">Selected documented programs / 2024–2026</span><h2>From water safety to recurring programs.</h2><p>{project.timelineIntro}</p></div><Timeline items={project.timeline} /></section>
    <section className="story-community-impact"><div><span className="story-kicker">Documented reach</span><h2>The program record.</h2><p>Program totals come from the three-year report. Beneficiary participations may include repeat participants; expenditures/support covers documented program costs and support, not fundraising revenue. Core membership describes the organization’s growth.</p></div><Metrics project={project} /></section>
    <section className="story-community-gallery">{project.gallery.map((item) => <Figure key={item.src} {...item} />)}</section>
    <section className="story-community-evidence" aria-labelledby="hoa-yen-letter-title"><div><span className="story-kicker">Acknowledgment from a community partner</span><h2 id="hoa-yen-letter-title">A letter from Cai Rang.</h2><p>The Cai Rang Ward Youth Union thanked Thanh and Hoa Yen for supporting its 2026 Mid-Autumn activities.</p><p>The letter acknowledges 100 gift packages and 10 scholarships. These figures describe the support recognized in this document and are not added to the program totals above.</p><a href={hoaYenThankYouLetter.fullSrc} target="_blank" rel="noopener noreferrer">Read the original letter <span aria-hidden="true">↗</span></a></div><StoryFigure image={hoaYenThankYouLetter} sizes="(max-width: 900px) 90vw, 40vw" /></section>
    <section className="story-community-chapters">{project.chapters.map((chapter) => <Chapter key={chapter.label} chapter={chapter} />)}<aside className="story-program-sources" aria-label="Further program records"><p><a href="https://giaoducthoidai.vn/can-tho-tuyen-truyen-an-toan-giao-thong-tang-qua-thuong-ho-cho-noi-cai-rang-post681418.html" target="_blank" rel="noopener noreferrer">Local coverage of the water-safety campaign ↗</a><span>Giáo dục & Thời đại · April 30, 2024 · Reports on the joint local activity.</span></p></aside></section><Status project={project} /><StoryEnd project={project} />
  </article>;
}

export function ProjectStoryContent({ project }: { project: ProjectStory }) {
  if (project.kind === "medical-ai") return <MedicalAIStory project={project} />;
  if (project.kind === "phytophthora") return <PhytophthoraStory project={project} />;
  if (project.kind === "molebio") return <MoleBioStory project={project} />;
  return <HoaYenStory project={project} />;
}
