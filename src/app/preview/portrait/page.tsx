import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntroduction } from "@/components/home/HomeIntroduction";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { photos } from "@/data/photography";

export const metadata: Metadata = {
  title: "Portrait comparison | Nguyen Ngoc Thanh",
  description: "Review the current hero and restaurant portrait in the existing homepage layout.",
  robots: { index: false, follow: false },
};

export default function PortraitPreviewPage() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a><SiteHeader />
    <main id="main">
      <header className="portrait-preview-bar container"><p className="eyebrow">Portrait review · Hero selection pending</p><h1>Two portraits, the same homepage.</h1><p>The homepage keeps the lakeside hero. The restaurant portrait is now in About; the hero version below is a preview.</p><nav aria-label="Compare portrait placements"><a href="#current-portrait">Current hero ↓</a><a href="#restaurant-portrait">Restaurant hero preview ↓</a><a href="#about">About placement ↓</a><Link href="/">Back to homepage ↗</Link></nav></header>
      <div className="portrait-preview-label container"><h2>01 / Current lakeside hero</h2><p>A more casual photograph with an outdoor setting.</p></div>
      <HomeHero previewId="current-portrait" />
      <div className="portrait-preview-label container"><h2>02 / Restaurant portrait candidate</h2><p>A more formal portrait on the site’s warm paper tone. The subject comes from the original photograph.</p></div>
      <HomeHero portrait={photos.aboutPortrait} previewId="restaurant-portrait" />
      <HomeIntroduction portrait={photos.aboutPortrait} />
    </main><SiteFooter />
  </>;
}
