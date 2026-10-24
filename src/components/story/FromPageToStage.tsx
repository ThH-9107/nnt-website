import type { PortfolioImage } from "@/data/photography";
import type { CreativeDocument } from "@/data/creative-productions";
import { pageToStage } from "@/data/page-to-stage";
import { BilingualScriptExcerpt } from "./BilingualScriptExcerpt";
import { StoryFigure } from "./StoryFigure";

function SynopsisText({ text }: { text: string }) {
  return <>{text.split(/(Dạ cổ hoài lang)/g).map((part, index) => index % 2 ? <em lang="vi" key={index}>{part}</em> : part)}</>;
}

export function FromPageToStage({ preparation, fullScript }: { preparation?: PortfolioImage; fullScript?: CreativeDocument }) {
  return <section className="page-to-stage" id="from-page-to-stage" aria-labelledby="page-to-stage-title">
    <header className="page-to-stage-heading"><p className="story-kicker">{pageToStage.label}</p><h4 id="page-to-stage-title">{pageToStage.title}</h4></header>
    {preparation && <StoryFigure image={preparation} className={`page-to-stage-preparation${preparation.height > preparation.width ? " page-to-stage-preparation-portrait" : ""}`} sizes={preparation.height > preparation.width ? "(max-width: 620px) 85vw, 350px" : "(max-width: 900px) 90vw, 50vw"} />}
    <div className="page-to-stage-grid">
      <section className="page-to-stage-synopsis" aria-labelledby="stage-synopsis-title"><p className="page-to-stage-index">The story</p><h5 id="stage-synopsis-title">{pageToStage.synopsis.title}</h5><p className="page-to-stage-context">{pageToStage.synopsis.context}</p>{pageToStage.synopsis.paragraphs.map(paragraph => <p key={paragraph}><SynopsisText text={paragraph} /></p>)}</section>
      <div className="page-to-stage-script"><BilingualScriptExcerpt />{fullScript && <div className="page-to-stage-document"><svg viewBox="0 0 20 24" fill="none" aria-hidden="true"><path d="M3 1.5h9l5 5v16H3zM12 1.5v5h5M6 12h8M6 16h8" /></svg><div><a href={fullScript.href} target="_blank" rel="noopener noreferrer">{fullScript.label} <span aria-hidden="true">↗</span></a><p>{fullScript.description ?? `1919 · ${fullScript.language ?? "Vietnamese"} · Public reading copy`}</p><small className="page-to-stage-document-note">{pageToStage.readingCopyNote}</small></div></div>}</div>
    </div>
  </section>;
}
