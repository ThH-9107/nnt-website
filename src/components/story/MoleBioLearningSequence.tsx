import Image from "next/image";
import { molebioLearningSequence } from "@/data/project-pages";
import { StoryFigure } from "./StoryFigure";

export function MoleBioLearningSequence() {
  const { listen, practice, beyond } = molebioLearningSequence;

  return <section className="molebio-learning" aria-label="Listen, Practice, Beyond: connected experiences in learning biology">
    <div className="molebio-learning-pair">
      {[listen, practice].map((panel) => <section className={`molebio-learning-panel molebio-learning-${panel.number}`} key={panel.number} aria-labelledby={`molebio-learning-${panel.number}`}>
        <div className="molebio-learning-label"><span aria-hidden="true">{panel.number}</span><span className="story-kicker">{panel.label}</span></div>
        <h2 id={`molebio-learning-${panel.number}`}>{panel.title}</h2>
        <h3>{panel.subtitle}</h3>
        <p>{panel.description}</p>
        <StoryFigure image={panel.image} className="molebio-learning-photo" sizes="(max-width: 760px) 100vw, 50vw" />
      </section>)}
    </div>

    <section className="molebio-learning-beyond" aria-labelledby="molebio-learning-03">
      <div className="molebio-learning-label"><span aria-hidden="true">{beyond.number}</span><span className="story-kicker">{beyond.label}</span></div>
      <div className="molebio-beyond-introduction">
        <div><h2 id="molebio-learning-03">{beyond.title}</h2><h3>{beyond.subtitle}</h3></div>
        <div><p>{beyond.description}</p><p className="molebio-beyond-context">{beyond.context}</p></div>
      </div>
      <div className="molebio-beyond-experiences">
        {beyond.experiences.map((experience) => <figure className="molebio-experience" data-orientation={experience.image.width > experience.image.height ? "landscape" : "portrait"} key={experience.title}>
          <a className="molebio-experience-image" href={experience.image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${experience.title}`}>
            <Image src={experience.image.src} width={experience.image.width} height={experience.image.height} alt={experience.image.alt} sizes={experience.image.width > experience.image.height ? "(max-width: 760px) 100vw, 70vw" : "(max-width: 420px) 100vw, (max-width: 760px) 360px, 30vw"} />
            <span className="molebio-image-open" aria-hidden="true">↗</span>
          </a>
          <figcaption>
            <span className="molebio-experience-date">{experience.date}</span>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </figcaption>
        </figure>)}
      </div>
    </section>
  </section>;
}
