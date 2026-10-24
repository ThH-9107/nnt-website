import { molebioReflection } from "@/data/project-pages";
import { photos } from "@/data/photography";
import { StoryFigure } from "./StoryFigure";

export function MoleBioReflection() {
  return <section className="molebio-reflection" aria-labelledby="molebio-reflection-title">
    <header>
      <span className="story-kicker">{molebioReflection.label}</span>
      <h2 id="molebio-reflection-title">{molebioReflection.title}</h2>
      <StoryFigure image={photos.molebioTerrariumDetail} className="molebio-reflection-photo" sizes="260px" />
    </header>
    <div className="molebio-reflection-copy">
      {molebioReflection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  </section>;
}
