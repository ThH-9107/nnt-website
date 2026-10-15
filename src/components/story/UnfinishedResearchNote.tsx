import Link from "next/link";
import { unfinishedResearch as proposal } from "@/data/unfinished-research";
import { StoryFigure } from "./StoryFigure";
import { ScientificText } from "./ScientificText";

export function UnfinishedResearchNote() {
  return <aside className="story-secondary-note" id="unfinished-research" aria-labelledby="unfinished-research-title"><div><span className="story-kicker">{proposal.label} · {proposal.period}</span><h2 id="unfinished-research-title">{proposal.title}</h2></div><div><p>{proposal.summary}</p><Link href={proposal.href} scroll={false}>Read the GFP proposal story <span aria-hidden="true">↗</span></Link></div></aside>;
}

export function UnfinishedResearchStory() {
  return <article className="story story-proposal"><section className="story-unfinished" aria-labelledby="proposal-title">
    <header><span className="story-kicker">{proposal.label}</span><h1 id="proposal-title">{proposal.title}</h1><p className="story-unfinished-subtitle">Transient GFP expression in <em>Hygrophila polysperma</em></p><p className="story-unfinished-period">{proposal.period} <span aria-hidden="true">/</span> {proposal.role}</p><p className="story-unfinished-status">Experiment not conducted</p></header>
    <div className="story-unfinished-content">
      <ol className="story-unfinished-path" aria-label="The proposal story">{proposal.chapters.map((chapter, index) => <li key={chapter.id} data-interrupted={chapter.id === "obstacle"}><span>{String(index + 1).padStart(2, "0")}</span>{chapter.label}</li>)}</ol>
      {proposal.chapters.map(chapter => <section className="story-unfinished-chapter" key={chapter.id}>
        <span className="story-kicker">{chapter.label}</span><h2>{chapter.title}</h2>{chapter.paragraphs.map(paragraph => <p key={paragraph}><ScientificText text={paragraph} /></p>)}
        {chapter.id === "question" && <aside className="story-unfinished-science-note">{proposal.fluorescenceNote}</aside>}
        {chapter.id === "proposal" && <div className="story-unfinished-artifact"><div className="story-unfinished-document"><span className="story-kicker">Original document / {proposal.document.language}</span><h3 lang="vi"><ScientificText text={proposal.document.title} /></h3><p><ScientificText text={proposal.document.englishTitle} /></p><dl><div><dt>Scientific supervisor named in the proposal</dt><dd>{proposal.document.supervisor}</dd></div></dl><a href={proposal.document.href} download>Read the original proposal (.docx) <span aria-hidden="true">↗</span></a></div><StoryFigure image={proposal.workflow} sizes="(max-width: 900px) 90vw, 55vw" /></div>}
      </section>)}
    </div>
  </section><div className="story-end"><span>Also under ORGANISM</span><Link href="/research/phytophthora" scroll={false}>The durian field and laboratory study ↗</Link></div></article>;
}
