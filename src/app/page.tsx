import Link from "next/link";
import Image from "next/image";
import { InquiryMap } from "@/components/inquiry/InquiryMap";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { medicalManuscript, profile } from "@/data/portfolio";
import { photos } from "@/data/photography";
import { CertificateShowcase } from "@/components/CertificateShowcase";

export default function Home() {
  const resumeHref = profile.resumePdf ?? profile.resumeDocx;

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />

    <main id="main">
      <section className="home-hero" id="top" aria-labelledby="home-title"><div className="container home-hero-grid">
        <div className="home-hero-copy">
          <p className="eyebrow">{profile.school} / {profile.classYear}</p>
          <h1 id="home-title">Nguyen Ngoc<br /><em>Thanh.</em></h1>
          <p className="home-identity">High school student researcher exploring biology through computation and experimentation.</p>
          <p className="home-hero-detail">I also enjoy teaching, organizing community programs, and making theatre.</p>
          <div className="home-hero-actions"><a className="button button-primary" href="#inquiry-map">Explore the scales <span aria-hidden="true">↓</span></a><a className="button button-outline" href={resumeHref} download>Résumé {profile.resumePdf ? "(PDF)" : "(.docx)"} <span aria-hidden="true">↗</span></a></div>
          <nav className="home-quick-links" aria-label="Go directly to a project"><div id="research"><span>Research</span><Link href="/research/medical-ai" scroll={false}>Medical AI ↗</Link><Link href="/research/phytophthora" scroll={false}>Phytophthora ↗</Link></div><div id="leadership"><span>Leadership</span><Link href="/leadership/molebio" scroll={false}>MoleBio ↗</Link><Link href="/leadership/hoa-yen" scroll={false}>Hoa Yen ↗</Link></div></nav>
          <p className="home-hero-location">{profile.location} <span aria-hidden="true">/</span> Biology · Computation · People</p>
        </div>
        <figure className="home-portrait">
          <Image src={photos.portrait.src} alt={photos.portrait.alt} fill priority sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover", objectPosition: photos.portrait.position }} />
          <span className="home-portrait-corner home-portrait-corner-tl" aria-hidden="true" /><span className="home-portrait-corner home-portrait-corner-br" aria-hidden="true" />
          <figcaption className="home-portrait-label"><span>Nguyen Ngoc Thanh</span><strong>Student researcher</strong><small>LSTS · Class of 2027</small></figcaption>
          <span className="home-portrait-index" aria-hidden="true">PORTRAIT / 01</span>
        </figure>
      </div></section>

      <section className="home-introduction" id="about" aria-labelledby="about-title"><div className="container home-introduction-grid">
        <header><p className="eyebrow">Hello, beyond the projects</p><h2 id="about-title">A little<br /><em>about me.</em></h2></header>
        <div className="home-introduction-copy">
          <p className="home-introduction-lead">Hi, I&apos;m Ngọc Thành, a high school student from Ho Chi Minh City with a curiosity for biology and a tendency to turn seemingly simple questions into rather complicated projects.</p>
          <p>I love experimenting, solving problems, and exploring ideas that I don&apos;t fully understand yet. Even when things don&apos;t go as planned (which happens quite often), there&apos;s something exciting about discovering what went wrong and trying again.</p>
          <p>But science isn&apos;t everything to me. I love theatre, music, and storytelling: writing, directing, and occasionally pretending to be someone completely different on stage. I also enjoy bringing people together, trying new things, and finding little ways to make a difference in the lives of those around me.</p>
        </div>
      </div></section>

      <InquiryMap />

      <section className="home-current" aria-labelledby="current-title"><div className="container home-current-grid">
        <div><p className="eyebrow">Current work / October 2026</p><h2 id="current-title">A question still in progress.</h2></div>
        <div className="home-current-detail"><p className="home-current-kicker">First-author manuscript · Submitted October 2026</p><h3>{medicalManuscript.title}</h3><p className="home-current-status">{medicalManuscript.status}</p><Link href="/research/medical-ai" scroll={false}>Read the research story <span aria-hidden="true">↗</span></Link></div>
      </div></section>

      <section className="home-about" id="working-method" aria-labelledby="working-method-title"><div className="container home-about-grid">
        <div><p className="eyebrow">Working method / In practice</p><h2 id="working-method-title">I learn by making,<br />then revising.</h2><figure className="home-about-photo"><Image src={photos.labPortrait.src} alt={photos.labPortrait.alt} width={photos.labPortrait.width} height={photos.labPortrait.height} sizes="(max-width: 900px) 100vw, 40vw" /><figcaption>{photos.labPortrait.title}</figcaption></figure></div>
        <div className="home-about-copy">
          <p>I enjoy building things, testing whether they work, and figuring out what to change when they don&apos;t. That has taken me from computer models to laboratory experiments, and from learning techniques myself to sharing them with others.</p>
          <section className="home-training" aria-labelledby="training-title"><h3 id="training-title">Scientific training & experience</h3>
            <article><time>Jul.–Aug.<br />2024</time><div><h4>Stem Cell Summer School</h4><p>Selected participant · July 8–August 12, 2024. Stem Cell Institute, University of Science, VNU-HCM. One of 47 selected from nearly 200 applicants, taking part in research seminars, laboratory experimentation, research planning, and data analysis under researcher mentorship.</p></div></article>
            <article><time>Sep. 2025</time><div><h4>Binh Phu Pharmaceutical Trading & Services Co., Ltd.</h4><p>Laboratory Assistant Intern. Assisted with supervised pharmaceutical formulation and quality-control work, including tablet friability, hardness, and moisture-content testing.</p></div></article>
          </section>
          <div className="home-about-links"><div id="creative"><span>Beyond research</span><Link href="/creative" scroll={false}>Theatre & creative work ↗</Link></div><div id="cv"><span>Résumé</span><a href={resumeHref} download>Download current résumé {profile.resumePdf ? "(PDF)" : "(.docx)"} ↗</a></div></div>
        </div>
      </div></section>

      <CertificateShowcase />
    </main>

    <SiteFooter />
  </>;
}
