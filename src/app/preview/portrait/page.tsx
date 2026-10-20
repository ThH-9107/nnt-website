import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntroduction } from "@/components/home/HomeIntroduction";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { photos } from "@/data/photography";

export const metadata: Metadata = {
  title: "Hero portrait crops | Nguyen Ngoc Thanh",
  description: "View the selected DMDT0895 hero portrait and its desktop and mobile crops.",
  robots: { index: false, follow: false },
};

export default function PortraitPreviewPage() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a><SiteHeader />
    <main id="main">
      <header className="portrait-preview-bar container"><p className="eyebrow">Selected homepage portrait · DMDT0895</p><h1>One portrait, two crops.</h1><p>The homepage now uses this portrait. The desktop and mobile versions preserve the hand-under-chin pose with different framing.</p><nav aria-label="View portrait placements"><a href="#current-portrait">Homepage hero ↓</a><a href="#portrait-crops">Desktop &amp; mobile crops ↓</a><a href="#about">About placement ↓</a><Link href="/">Back to homepage ↗</Link></nav></header>
      <HomeHero previewId="current-portrait" />
      <section id="portrait-crops" className="container" aria-labelledby="portrait-crops-title">
        <div className="portrait-preview-label"><h2 id="portrait-crops-title">The two delivered crops</h2><p>The same photographed expression, pose, and outfit in both versions.</p></div>
        <div className="portrait-preview-crops">
          <figure><Image src={photos.portrait.src} alt={photos.portrait.alt} width={photos.portrait.width} height={photos.portrait.height} quality={90} sizes="(max-width: 560px) 90vw, 450px" /><figcaption><strong>Desktop · 1000 × 1500</strong>A taller crop for the homepage’s portrait column.</figcaption></figure>
          <figure><Image src={photos.portrait.mobile.src} alt={photos.portrait.alt} width={photos.portrait.mobile.width} height={photos.portrait.mobile.height} quality={90} sizes="(max-width: 560px) 90vw, 450px" /><figcaption><strong>Mobile · 880 × 1100</strong>A wider upper-body crop for smaller screens.</figcaption></figure>
        </div>
      </section>
      <HomeIntroduction portrait={photos.aboutPortrait} />
    </main><SiteFooter />
  </>;
}
