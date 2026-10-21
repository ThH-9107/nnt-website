import Link from "next/link";
import { unfinishedResearch as proposal } from "@/data/unfinished-research";
import { ScientificText } from "./ScientificText";

export function UnfinishedResearchStory() {
  return <article className="story story-unseen" aria-labelledby="unseen-title">
    <header className="unseen-opening">
      <div className="unseen-opening-copy">
        <span className="story-kicker">{proposal.label}</span>
        <h1 id="unseen-title">The <em>Unseen.</em></h1>
        <p className="unseen-tagline">{proposal.tagline}</p>
        <p className="unseen-introduction">{proposal.introduction}</p>
      </div>
      <aside className="unseen-folio" aria-label="Proposal overview">
        <span className="unseen-folio-rule" aria-hidden="true" />
        <p className="unseen-folio-date">{proposal.period}</p>
        <p className="unseen-folio-type">{proposal.role}</p>
        <p className="unseen-folio-topic">Transient GFP expression in <em>Hygrophila polysperma</em></p>
        <p className="unseen-status">Experiment not conducted</p>
        <p className="unseen-folio-footnote">Literature review &amp; written proposal<br />No experimental results</p>
      </aside>
    </header>

    <div className="unseen-reading">
      <nav className="unseen-contents" aria-label="In this story">
        <span className="story-kicker">On these pages</span>
        <ol>{proposal.chapters.map((chapter, index) => <li key={chapter.id}><a href={`#unseen-${chapter.id}`}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{chapter.label}</a></li>)}</ol>
      </nav>
      <div className="unseen-chapters">
        {proposal.chapters.map((chapter, index) => <section className="unseen-chapter" id={`unseen-${chapter.id}`} key={chapter.id} aria-labelledby={`unseen-heading-${chapter.id}`}>
          <p className="unseen-chapter-label"><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{chapter.label}</p>
          <h2 id={`unseen-heading-${chapter.id}`}>{chapter.title}</h2>
          {chapter.paragraphs.map(paragraph => <p key={paragraph}><ScientificText text={paragraph} /></p>)}
          {chapter.id === "question" && <aside className="unseen-science-note">{proposal.fluorescenceNote}</aside>}
        </section>)}
      </div>
    </div>

    <footer className="unseen-closing">
      <div><span className="story-kicker">Proposal credit</span><p>{proposal.supervisor}<small>Scientific supervisor named in the written proposal</small></p></div>
      <Link href="/#the-unseen">← Return to the portfolio</Link>
    </footer>
  </article>;
}
