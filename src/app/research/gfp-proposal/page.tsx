import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { UnfinishedResearchStory } from "@/components/story/UnfinishedResearchNote";
import { unfinishedResearch } from "@/data/unfinished-research";

export const metadata: Metadata = {
  title: "A Question I Couldn’t Test | Nguyen Ngoc Thanh",
  description: unfinishedResearch.summary,
};

export default function GfpProposalPage() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a><SiteHeader />
    <main id="main" className="story-page"><div className="story-page-top container"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#research">Research</Link><span aria-hidden="true">/</span><span aria-current="page">GFP proposal</span></nav><Link href="/#inquiry-map">← Back to Inquiry Map</Link></div><UnfinishedResearchStory /></main>
    <SiteFooter />
  </>;
}
