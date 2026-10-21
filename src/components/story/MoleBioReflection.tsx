import { molebioReflection } from "@/data/project-pages";

export function MoleBioReflection() {
  return <section className="molebio-reflection" aria-labelledby="molebio-reflection-title">
    <header>
      <span className="story-kicker">{molebioReflection.label}</span>
      <h2 id="molebio-reflection-title">{molebioReflection.title}</h2>
    </header>
    <div className="molebio-reflection-copy">
      {molebioReflection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  </section>;
}
