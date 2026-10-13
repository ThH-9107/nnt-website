import Link from "next/link";
import { photos, type PortfolioImage } from "@/data/photography";
import { StoryFigure } from "./StoryFigure";

const productions: { label: string; title: string; role: string; description: string; image?: PortfolioImage }[] = [
  { label: "2025 · First Prize", title: "The Beauty of Vietnamese Culture", role: "Writer · Director · Performer", description: "Led, wrote, directed, and performed a 15-minute Cao Van Lau musical with a six-student team in a grade-wide project involving approximately 300 students.", image: photos.creativePoster },
  { label: "2025 · Fantasy House placed 1st of 4", title: "Hoa Chi", role: "Main Antagonist", description: "Audition-selected Main Antagonist in a 50–60-person production performed before 1,000+ students and staff.", image: photos.creativeAudience },
  { label: "Scheduled for May 2027", title: "Khoi Sac 27", role: "Main Antagonist · Upcoming", description: "Selected as Main Antagonist through two audition rounds; the performance is upcoming." },
];

export function CreativeStoryContent({ inOverlay = false }: { inOverlay?: boolean }) {
  return <article className="story story-creative">
    <header className="story-creative-opening"><div><p className="story-kicker">05 / 05 · AUDIENCE</p><h1>A different kind of collaboration.</h1><p>Theatre gives me another way to listen closely, solve problems with a team, and tell a story in public.</p></div><StoryFigure image={photos.creativeEnsemble} className="story-creative-hero" priority sizes="(max-width: 900px) 100vw, 60vw" /></header>
    <section className="story-creative-question"><span className="story-kicker">The widest scale of attention</span><h2>What changes when understanding something is no longer enough — and you have to make someone else feel it?</h2><p>Writing, directing, and performing move an idea from one person&apos;s understanding into a shared experience with collaborators and an audience.</p></section>
    <section className="story-creative-archive"><div className="story-section-heading"><span className="story-kicker">Selected performance archive</span><h2>On and behind the stage.</h2></div><div>{productions.map((production, index) => <article key={production.title}><span className="story-creative-number">{String(index + 1).padStart(2, "0")}</span><div><p className="story-kicker">{production.label}</p><h3>{production.title}</h3><strong>{production.role}</strong><p>{production.description}</p>{production.image && <StoryFigure image={production.image} className="story-production-image" />}</div></article>)}</div></section>
    <section className="story-creative-photo-essay"><div className="story-section-heading"><span className="story-kicker">Additional performance record</span><h2>The ensemble, and the room.</h2></div><div><StoryFigure image={photos.creativeFamilyScene} /><StoryFigure image={photos.creativeWide} /></div></section>
    <div className="story-creative-end"><span>From close observation to shared experience.</span>{!inOverlay && <Link href="/#inquiry-map">Return to the Inquiry Map ↗</Link>}</div>
  </article>;
}
