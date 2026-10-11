import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CreativeStoryContent } from "@/components/story/CreativeStoryContent";

export const metadata: Metadata = {
  title: "Theatre & Creative Work | Nguyen Ngoc Thanh",
  description: "Selected theatre, writing, directing, and performance work by Nguyen Ngoc Thanh.",
};

export default function CreativePage() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a><SiteHeader />
    <main id="main" className="story-page"><div className="story-page-top container"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Creative work</span></nav><Link href="/#inquiry-map">← Back to Inquiry Map</Link></div><CreativeStoryContent /></main>
    <SiteFooter />
  </>;
}
