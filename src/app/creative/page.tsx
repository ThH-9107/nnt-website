import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Theatre & Creative Work | Nguyen Ngoc Thanh",
  description: "Selected theatre, writing, directing, and performance work by Nguyen Ngoc Thanh.",
};

export default function CreativePage() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main">
      <div className="creative-page-intro"><div className="container"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span aria-current="page">Creative work</span></nav><p className="eyebrow">Theatre / Writing / Performance</p><h1>A different kind of collaboration.</h1><p>Theatre gives me another way to listen closely, solve problems with a team, and tell a story in public.</p></div></div>
      <section className="section creative-section" aria-labelledby="creative-work-title"><div className="container"><div className="section-heading"><p className="eyebrow">Selected experiences</p><h2 id="creative-work-title">On and behind the stage.</h2></div><div className="creative-layout"><div className="creative-art">{/* Replace with a licensed production photo from one of Thanh's performances. */}<Image src="/images/theatre-placeholder.svg" alt="" fill sizes="(max-width: 900px) 100vw, 42vw" /><span className="creative-page-image-label">Theatre production photo / placeholder</span></div><div className="performance-list"><article><span>2025 · First Prize</span><h3>“The Beauty of Vietnamese Culture”</h3><p>Led, wrote, directed, and performed a 15-minute Cao Van Lau musical with a six-student team in a grade-wide project involving approximately 300 students.</p></article><article><span>2025 · Fantasy House placed 1st of 4</span><h3>“Hoa Chi”</h3><p>Audition-selected Main Antagonist in a 50–60-person production performed before 1,000+ students and staff.</p></article><article><span>Scheduled for May 2027</span><h3>Khoi Sac 27</h3><p>Selected as Main Antagonist through two audition rounds; the performance is upcoming.</p></article></div></div></div></section>
    </main>
    <SiteFooter />
  </>;
}
