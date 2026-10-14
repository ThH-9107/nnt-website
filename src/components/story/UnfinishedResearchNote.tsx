import { unfinishedResearch as proposal } from "@/data/unfinished-research";
import { StoryFigure } from "./StoryFigure";

export function UnfinishedResearchNote() {
  return <section className="story-unfinished" id="unfinished-research" aria-labelledby="unfinished-research-title">
    <header><span className="story-kicker">{proposal.label}</span><h2 id="unfinished-research-title">{proposal.title}</h2><p className="story-unfinished-subtitle">Transient GFP expression in <em>Hygrophila polysperma</em></p><p className="story-unfinished-period">{proposal.period} <span aria-hidden="true">/</span> {proposal.role}</p><p className="story-unfinished-status">{proposal.status}</p><p className="story-unfinished-question">{proposal.question}</p></header>
    <div className="story-unfinished-content">
      <ol className="story-unfinished-path" aria-label="The proposal story">{proposal.chapters.map((chapter, index) => <li key={chapter.id} data-interrupted={chapter.id === "obstacle"}><span>{String(index + 1).padStart(2, "0")}</span>{chapter.label}</li>)}</ol>
      {proposal.chapters.map(chapter => <section className="story-unfinished-chapter" key={chapter.id}>
        <span className="story-kicker">{chapter.label}</span><h3>{chapter.title}</h3>{chapter.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        {chapter.id === "question" && <aside className="story-unfinished-science-note">{proposal.fluorescenceNote}</aside>}
        {chapter.id === "proposal" && <div className="story-unfinished-artifact"><div className="story-unfinished-document"><span className="story-kicker">Original document / {proposal.document.language}</span><h4 lang="vi">{proposal.document.title}</h4><p>{proposal.document.englishTitle}</p><dl><div><dt>Scientific supervisor named in the proposal</dt><dd>{proposal.document.supervisor}</dd></div></dl><a href={proposal.document.href} download>Read the original proposal (.docx) <span aria-hidden="true">↗</span></a></div><StoryFigure image={proposal.workflow} sizes="(max-width: 900px) 90vw, 55vw" /></div>}
      </section>)}
      <p className="story-unfinished-endnote">No experiment was conducted. No transformed plant or experimental result was obtained.</p>
    </div>
  </section>;
}
