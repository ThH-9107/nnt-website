import Link from "next/link";
import { Fragment } from "react";
import { photos } from "@/data/photography";
import { creativeProductions, type CreativeProduction } from "@/data/creative-productions";
import { StoryFigure } from "./StoryFigure";
import { CreativeRecording } from "./CreativeRecording";
import { FromPageToStage } from "./FromPageToStage";
import { creativeSerif } from "@/app/fonts";

function ProductionText({ text }: { text: string }) {
  return <>{text.split(/(Dạ cổ hoài lang)/g).map((part, index) => index % 2 ? <em key={index} lang="vi">{part}</em> : part)}</>;
}

function Production({ production, index }: { production: CreativeProduction; index: number }) {
  const hasPhotographs = Boolean(production.photographs?.length);
  const inlineRecordings = production.recordings?.filter(({ afterParagraph }) => afterParagraph !== undefined && Number.isInteger(afterParagraph) && afterParagraph > 0 && afterParagraph <= production.paragraphs.length) ?? [];
  const trailingRecordings = production.recordings?.filter(recording => !inlineRecordings.includes(recording)) ?? [];
  const photoSizes = production.id === "hoa-chi" ? "(max-width: 900px) 90vw, 40vw" : "(max-width: 900px) 90vw, 35vw";

  return <section className="creative-production" id={production.id} data-status={production.status} data-featured={index === 0} aria-labelledby={`${production.id}-title`}>
    <header className="creative-production-heading"><span className="creative-production-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><p className="story-kicker">{production.label}</p><h3 id={`${production.id}-title`}>{production.title}</h3><p className="creative-production-roles">{production.roles}</p></div></header>
    <div className="creative-production-body" data-with-images={hasPhotographs}>
      <div className="creative-production-copy">{production.paragraphs.map((paragraph, paragraphIndex) => <Fragment key={paragraph}><p className={paragraphIndex === 0 ? "creative-production-lead" : undefined}><ProductionText text={paragraph} /></p>{inlineRecordings.filter(recording => recording.afterParagraph === paragraphIndex + 1).map(recording => <CreativeRecording key={recording.id} recording={recording} productionId={production.id} />)}</Fragment>)}</div>
      {hasPhotographs && <div className="creative-production-photographs" data-count={production.photographs?.length}>{production.photographs?.map(({ image, treatment }) => <StoryFigure image={image} key={image.src} className={`creative-production-photo creative-production-photo-${treatment}`} sizes={photoSizes} />)}</div>}
    </div>
    {production.id === "cao-van-lau" && <FromPageToStage fullScript={production.script} />}
    {trailingRecordings.length ? <div className="creative-production-recordings">{trailingRecordings.map(recording => <CreativeRecording key={recording.id} recording={recording} productionId={production.id} />)}</div> : null}
    {production.script && production.id !== "cao-van-lau" && <aside className="creative-script-record"><span className="story-kicker">From the archive</span><a href={production.script.href} target="_blank" rel="noopener noreferrer">{production.script.label} <span aria-hidden="true">↗</span></a>{production.script.description && <p>{production.script.description}</p>}{production.script.language && <small>{production.script.language}</small>}</aside>}
    {(production.record || production.evidence?.length) && <aside className="creative-production-record" aria-label={`${production.title}: production record`}>{production.record && <p>{production.record}</p>}{production.evidence?.map(evidence => <a href={evidence.href} key={evidence.href} target="_blank" rel="noopener noreferrer">{evidence.label} <span aria-hidden="true">↗</span></a>)}</aside>}
  </section>;
}

export function CreativeStoryContent({ inOverlay = false }: { inOverlay?: boolean }) {
  const upcoming = creativeProductions.filter(production => production.status === "in-preparation");

  return <article className={`story story-creative ${creativeSerif.variable}`}>
    <header className="story-creative-opening"><div><p className="story-kicker">05 / 05 · AUDIENCE <span aria-hidden="true">/</span> express</p><h1>Writing, directing,<br />and being someone else.</h1><p>There&apos;s something wonderful about bringing a story to life. Sometimes that means writing a script, directing a group of performers, or stepping into the spotlight as someone entirely different. Sometimes, it simply means laughing through rehearsals with friends.</p></div><StoryFigure image={photos.creativeEnsemble} className="story-creative-hero" priority sizes="(max-width: 900px) 100vw, 60vw" /></header>
    <section className="creative-production-archive" aria-labelledby="creative-archive-title"><div className="story-section-heading"><span className="story-kicker">A personal performance archive</span><h2 id="creative-archive-title">On and behind the stage.</h2></div>{creativeProductions.map((production, index) => <Production key={production.id} production={production} index={index} />)}</section>
    <section className="story-creative-photo-essay"><div className="story-section-heading"><span className="story-kicker">Additional performance record</span><h2>The ensemble, and the room.</h2></div><div><StoryFigure image={photos.creativeFamilyScene} /><StoryFigure image={photos.creativeWide} /></div></section>
    <div className="story-creative-end">{upcoming.length > 0 && <span>In preparation: {upcoming.map(production => production.title).join(" · ")}.</span>}{!inOverlay && <Link href="/#inquiry-map">Return to the Inquiry Map ↗</Link>}</div>
  </article>;
}
