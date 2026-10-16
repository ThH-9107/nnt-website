import Image from "next/image";
import type { PortfolioImage } from "@/data/photography";

export function HomeIntroduction({ portrait }: { portrait?: PortfolioImage }) {
  return <section className="home-introduction" id="about" aria-labelledby="about-title"><div className="container home-introduction-grid">
    <header><p className="eyebrow">Hello, beyond the projects</p><h2 id="about-title">A little<br /><em>about me.</em></h2>{portrait && <figure className="home-introduction-portrait"><Image src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} quality={90} sizes="(max-width: 900px) 80vw, 350px" /></figure>}</header>
    <div className="home-introduction-copy">
      <p className="home-introduction-lead">Hi, I&apos;m Ngọc Thành, a high school student from Ho Chi Minh City with a curiosity for biology and a tendency to turn seemingly simple questions into rather complicated projects.</p>
      <p>I love experimenting, solving problems, and exploring ideas that I don&apos;t fully understand yet. Even when things don&apos;t go as planned (which happens quite often), there&apos;s something exciting about discovering what went wrong and trying again.</p>
      <p>But science isn&apos;t everything to me. I love theatre, music, and storytelling: writing, directing, and occasionally pretending to be someone completely different on stage. I also enjoy bringing people together, trying new things, and finding little ways to make a difference in the lives of those around me.</p>
    </div>
  </div></section>;
}
