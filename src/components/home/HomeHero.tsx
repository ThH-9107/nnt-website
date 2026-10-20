import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { profile } from "@/data/portfolio";
import { photos, type PortfolioImage } from "@/data/photography";
import { ResumeLink } from "@/components/ResumeLink";

export function HomeHero({ portrait = photos.portrait, previewId }: { portrait?: PortfolioImage; previewId?: string }) {
  const titleId = previewId ? `${previewId}-title` : "home-title";
  const Heading = previewId ? "h2" : "h1";
  const imageProps = {
    alt: portrait.alt,
    fill: true,
    quality: 90,
    sizes: "(max-width: 900px) min(540px, calc(100vw - 40px)), (min-width: 1424px) 532px, 40vw",
    style: { objectFit: "cover" as const, objectPosition: portrait.position },
  };
  const { props: desktop } = getImageProps({ ...imageProps, src: portrait.src });
  const mobile = portrait.mobile ? getImageProps({ ...imageProps, src: portrait.mobile.src }).props : null;
  return <section className="home-hero" id={previewId ?? "top"} aria-labelledby={titleId}><div className="container home-hero-grid">
    <div className="home-hero-copy">
      <p className="eyebrow">{profile.school} / {profile.classYear}</p>
      <Heading className="home-hero-title" id={titleId}>Nguyen Ngoc<br /><em>Thanh.</em></Heading>
      <p className="home-identity">High school student researcher exploring biology through computation and experimentation.</p>
      <p className="home-hero-detail">I also enjoy teaching, organizing community programs, and making theatre.</p>
      <div className="home-hero-actions"><a className="button button-primary" href={previewId ? "/#inquiry-map" : "#inquiry-map"}>Explore the scales <span aria-hidden="true">↓</span></a><ResumeLink className="button button-outline">Résumé {profile.resumePdf ? "(PDF)" : "(.docx)"} <span aria-hidden="true">↗</span></ResumeLink></div>
      <nav className="home-quick-links" aria-label="Go directly to a project"><div id={previewId ? undefined : "research"}><span><strong>Research</strong></span><Link href="/research/medical-ai" scroll={false}>Medical AI ↗</Link><Link href="/research/phytophthora" scroll={false}>Phytophthora ↗</Link></div><div id={previewId ? undefined : "leadership"}><span><strong>Leadership</strong></span><Link href="/leadership/molebio" scroll={false}>MoleBio ↗</Link><Link href="/leadership/hoa-yen" scroll={false}>Hoa Yen ↗</Link></div></nav>
      <p className="home-hero-location">{profile.location} <span aria-hidden="true">/</span> Biology · Computation · People</p>
    </div>
    <figure className={`home-portrait${mobile ? " home-portrait-responsive" : ""}`}>
      {mobile ? <picture>
        <source media="(max-width: 900px)" srcSet={mobile.srcSet} sizes={mobile.sizes} />
        {/* Both crops use Next's image optimizer; picture selects one source per viewport. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img {...desktop} loading={previewId ? "lazy" : "eager"} fetchPriority={previewId ? "auto" : "high"} />
      </picture> : <Image src={portrait.src} alt={portrait.alt} fill preload={!previewId} quality={90} sizes={imageProps.sizes} style={imageProps.style} />}
      <span className="home-portrait-corner home-portrait-corner-tl" aria-hidden="true" /><span className="home-portrait-corner home-portrait-corner-br" aria-hidden="true" />
      <figcaption className="home-portrait-label"><span>Nguyen Ngoc Thanh</span><strong>Student researcher</strong><small>LSTS · Class of 2027</small></figcaption>
      <span className="home-portrait-index" aria-hidden="true">PORTRAIT / 01</span>
    </figure>
  </div></section>;
}
