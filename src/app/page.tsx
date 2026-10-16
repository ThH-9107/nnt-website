import Link from "next/link";
import Image from "next/image";
import { InquiryMap } from "@/components/inquiry/InquiryMap";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { medicalManuscript, profile } from "@/data/portfolio";
import { photos } from "@/data/photography";
import { CertificateShowcase } from "@/components/CertificateShowcase";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntroduction } from "@/components/home/HomeIntroduction";
import { ResumeLink } from "@/components/ResumeLink";

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />

    <main id="main">
      <HomeHero />
      <HomeIntroduction portrait={photos.aboutPortrait} />

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
          <div className="home-about-links"><div id="creative"><span>Beyond research</span><Link href="/creative" scroll={false}>Theatre & creative work ↗</Link></div><div id="cv"><span>Résumé</span><ResumeLink>View current résumé {profile.resumePdf ? "(PDF)" : "(.docx)"} ↗</ResumeLink></div></div>
        </div>
      </div></section>

      <CertificateShowcase />
    </main>

    <SiteFooter />
  </>;
}
