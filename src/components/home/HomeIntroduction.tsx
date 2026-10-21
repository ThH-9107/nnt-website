import Image from "next/image";
import type { PortfolioImage } from "@/data/photography";

export function HomeIntroduction({ portrait }: { portrait?: PortfolioImage }) {
  return <section className="home-introduction" id="about" aria-labelledby="about-title"><div className="container home-introduction-grid">
    {portrait && <figure className="home-introduction-portrait"><Image src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} quality={90} sizes="(max-width: 620px) 75vw, 300px" /></figure>}
    <div className="home-introduction-copy">
      <header><p className="eyebrow">Beyond the projects</p><h2 id="about-title">A little <em>about me.</em></h2></header>
      <p className="home-introduction-lead">Biology keeps turning simple questions into complicated projects. As a high school student in Ho Chi Minh City, I enjoy following those questions into experiments, unexpected problems, and another attempt.</p>
      <p>Away from science, there&apos;s theatre, music, and storytelling: writing, directing, and occasionally becoming someone else on stage. Bringing people together is part of what makes all of it worth doing.</p>
    </div>
  </div></section>;
}
