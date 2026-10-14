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
          <p className="home-identity">Student researcher working across computation, experimental biology, and community science.</p>
          <p className="home-hero-detail">I follow biological and biomedical questions from images to experiments, and from the lab to the people around it.</p>
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

      <InquiryMap />

      <section className="home-current" aria-labelledby="current-title"><div className="container home-current-grid">
        <div><p className="eyebrow">Current work / October 2026</p><h2 id="current-title">A question still in progress.</h2></div>
        <div className="home-current-detail"><p className="home-current-kicker">First-author manuscript</p><h3>{medicalManuscript.title}</h3><p className="home-current-status">{medicalManuscript.status}</p><Link href="/research/medical-ai" scroll={false}>Read the research story <span aria-hidden="true">↗</span></Link></div>
      </div></section>

      <section className="home-about" id="about" aria-labelledby="about-title"><div className="container home-about-grid">
        <div><p className="eyebrow">About / Working method</p><h2 id="about-title">I learn by making,<br />then revising.</h2><figure className="home-about-photo"><Image src={photos.labPortrait.src} alt={photos.labPortrait.alt} width={photos.labPortrait.width} height={photos.labPortrait.height} sizes="(max-width: 900px) 100vw, 40vw" /><figcaption>{photos.labPortrait.title}</figcaption></figure></div>
        <div className="home-about-copy">
          <p>My research moves between training models and handling biological samples. In Medical AI, inconclusive augmentation experiments led me to study the method more carefully. In the durian study, inconsistent isolation attempts have meant revising the workflow before I can test the biocontrol question.</p>
          <p>MoleBio brings that learning to a shared bench: pipettes, DNA extraction, microscopy, and students trying a method for themselves. Theatre and community work give me other ways to work with people and communicate what I care about.</p>
          <section className="home-training" aria-labelledby="training-title"><h3 id="training-title">Scientific training & experience</h3>
            <article><time>2024</time><div><h4>Stem Cell Summer School</h4><p>Selected among 47 participants from nearly 200 applicants at the Stem Cell Institute, VNU-HCM University of Science. Seminars, laboratory experimentation, and data analysis.</p></div></article>
            <article><time>Sep. 2025</time><div><h4>Binh Phu pharmaceutical laboratory</h4><p>Supervised experience in formulation and quality control, including tests for tablet crumbling (friability), hardness, and moisture content.</p></div></article>
          </section>
          <div className="home-about-links"><div id="creative"><span>Beyond research</span><Link href="/creative" scroll={false}>Theatre & creative work ↗</Link></div><div id="cv"><span>Résumé</span><a href={resumeHref} download>Download current résumé {profile.resumePdf ? "(PDF)" : "(.docx)"} ↗</a></div></div>
        </div>
      </div></section>

      <CertificateShowcase />
    </main>

    <SiteFooter />
  </>;
}
