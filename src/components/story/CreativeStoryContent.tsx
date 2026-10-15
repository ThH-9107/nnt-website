import Link from "next/link";
import { photos, type PortfolioImage } from "@/data/photography";
import { StoryFigure } from "./StoryFigure";

const productions: { label: string; title: string; role: string; paragraphs: string[]; image?: PortfolioImage; evidence?: { href: string; label: string } }[] = [
  { label: "Performed Nov. 15 · Certificate Jan. 2025", title: "The Beauty of Vietnamese Culture", role: "Team Lead · Writer · Director · Performer", paragraphs: [
    "With a six-student team, I wrote, directed, and performed in a 15-minute musical dramatizing Cao Văn Lầu’s life. The production brought together a script, Vietnamese music, and performance, including an excerpt from Dạ cổ hoài lang and a cải lương duet.",
    "Our team, XULONG, received First Prize in the grade-wide project, which involved approximately 300 students. We performed on November 15; January 2025 is the date of the certificate. The poster’s directing credit uses our team name.",
  ], image: photos.creativePoster, evidence: { href: "/documents/certificates/vietnamese-culture-first-prize.pdf", label: "First Prize certificate" } },
  { label: "Nov. 2025 · Fantasy House production", title: "Hỏa Chí", role: "Main Antagonist", paragraphs: [
    "I joined the cast through an audition and rehearsed for more than a month as the main antagonist. The production involved around 50–60 people, with performers working together across the larger House cast.",
    "I remember staying after school to rehearse. It was tiring, but very fun: everyone was trying their best.",
    "We performed before more than 1,000 students, teachers, and staff. Fantasy House placed first among the four Houses.",
  ], image: photos.creativeAudience },
  { label: "Sep. 2026–May 2027 · Upcoming", title: "Khởi Sắc 27", role: "Main Antagonist (Cast)", paragraphs: [
    "After two audition rounds, I was cast as the main antagonist in the school’s annual Grade 12 performing-arts fundraiser. I am currently rehearsing for the May 2027 production.",
  ] },
];

export function CreativeStoryContent({ inOverlay = false }: { inOverlay?: boolean }) {
  return <article className="story story-creative">
    <header className="story-creative-opening"><div><p className="story-kicker">05 / 05 · AUDIENCE</p><h1>Writing, directing,<br />and being someone else.</h1><p>I love theatre, music, and storytelling. I enjoy writing and directing, and occasionally getting to be someone completely different on stage.</p></div><StoryFigure image={photos.creativeEnsemble} className="story-creative-hero" priority sizes="(max-width: 900px) 100vw, 60vw" /></header>
    <section className="story-creative-archive"><div className="story-section-heading"><span className="story-kicker">Selected performance archive</span><h2>On and behind the stage.</h2><p>These productions have given me different roles in the work: shaping a script, directing a small team, and joining a larger cast as an actor.</p></div><div>{productions.map((production, index) => <article key={production.title}><span className="story-creative-number">{String(index + 1).padStart(2, "0")}</span><div><p className="story-kicker">{production.label}</p><h3>{production.title}</h3><strong>{production.role}</strong>{production.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{production.evidence && <a className="story-production-evidence" href={production.evidence.href} target="_blank" rel="noopener noreferrer">{production.evidence.label} ↗</a>}{production.image && <StoryFigure image={production.image} className="story-production-image" />}</div></article>)}</div></section>
    <section className="story-creative-photo-essay"><div className="story-section-heading"><span className="story-kicker">Additional performance record</span><h2>The ensemble, and the room.</h2></div><div><StoryFigure image={photos.creativeFamilyScene} /><StoryFigure image={photos.creativeWide} /></div></section>
    <div className="story-creative-end"><span>Currently rehearsing for Khởi Sắc 27 · May 2027.</span>{!inOverlay && <Link href="/#inquiry-map">Return to the Inquiry Map ↗</Link>}</div>
  </article>;
}
