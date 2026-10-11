import Link from "next/link";
import { InquiryMap } from "@/components/inquiry/InquiryMap";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { honors, medicalManuscript, profile } from "@/data/portfolio";

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
          <div className="home-hero-actions"><a className="button button-primary" href="#inquiry-map">Explore the map <span aria-hidden="true">↓</span></a><a className="button button-outline" href="#cv">View résumé <span aria-hidden="true">↗</span></a></div>
          <p className="home-hero-location">{profile.location} <span aria-hidden="true">/</span> Biology · Computation · People</p>
        </div>
        <div className="home-portrait" role="img" aria-label="Placeholder for a future portrait of Nguyen Ngoc Thanh">
          {/* Replace this CSS placeholder with a real, permission-cleared portrait of Thanh. Do not use a stock or generated face. */}
          <span className="home-portrait-corner home-portrait-corner-tl" aria-hidden="true" /><span className="home-portrait-corner home-portrait-corner-br" aria-hidden="true" />
          <div className="home-portrait-label"><span>Portrait / to be added</span><strong>Nguyen Ngoc Thanh</strong><small>Student researcher · Ho Chi Minh City</small></div>
          <span className="home-portrait-index" aria-hidden="true">01 / 05</span>
        </div>
      </div></section>

      <InquiryMap />

      <section className="home-current" aria-labelledby="current-title"><div className="container home-current-grid">
        <div><p className="eyebrow">Current work / October 2026</p><h2 id="current-title">A question still in progress.</h2></div>
        <div className="home-current-detail"><p className="home-current-kicker">First-author manuscript</p><h3>{medicalManuscript.title}</h3><p className="home-current-status">{medicalManuscript.status}</p><Link href="/research/medical-ai">Read the research story <span aria-hidden="true">↗</span></Link></div>
        <nav className="home-browse" aria-label="Browse project areas"><div id="research"><h3>Research</h3><Link href="/research/medical-ai">Medical AI <span aria-hidden="true">↗</span></Link><Link href="/research/phytophthora">Phytophthora / durian <span aria-hidden="true">↗</span></Link></div><div id="leadership"><h3>Leadership</h3><Link href="/leadership/molebio">MoleBio <span aria-hidden="true">↗</span></Link><Link href="/leadership/hoa-yen">Hoa Yen Charity Fund <span aria-hidden="true">↗</span></Link><a href="#council">Family Representative Council <span aria-hidden="true">↗</span></a></div></nav>
      </div></section>

      <section className="home-about" id="about" aria-labelledby="about-title"><div className="container home-about-grid"><div><p className="eyebrow">About / Working method</p><h2 id="about-title">What happens when the evidence is incomplete?</h2></div><div className="home-about-copy"><p>I am interested in biological and biomedical questions that need both computational and experimental ways of thinking. An image can suggest a pattern; field and laboratory work can complicate it. I want to understand what the evidence supports, and where it stops.</p><p>When an experiment is inconclusive or a protocol needs revision, I try to treat that as information rather than a tidy ending. Outside research, theatre and community work keep me attentive to how ideas travel between people.</p><div className="home-about-links"><div id="creative"><span>Beyond research</span><Link href="/creative">Theatre & creative work ↗</Link></div><div id="cv"><span>Résumé</span><a href={resumeHref} download>Download current résumé {profile.resumePdf ? "(PDF)" : "(.docx)"} ↗</a>{!profile.resumePdf && <small>A PDF version will be added when available.</small>}</div></div></div></div></section>

      <section className="home-honors" id="honors" aria-labelledby="honors-title"><div className="container home-honors-grid"><div><p className="eyebrow">Selected honors</p><h2 id="honors-title">Markers along the way.</h2></div><ul>{honors.map((item) => <li key={item.award}><div><strong>{item.award}</strong>{item.detail && <span>{item.detail}</span>}</div><time>{item.year}</time></li>)}</ul></div></section>
    </main>

    <SiteFooter />
  </>;
}
