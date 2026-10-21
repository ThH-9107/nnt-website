import Link from "next/link";
import { unfinishedResearch as proposal } from "@/data/unfinished-research";

export function UnseenChapter() {
  return <section className="home-unseen" id="the-unseen" aria-labelledby="home-unseen-title">
    <div className="container home-unseen-grid">
      <header><p className="eyebrow">{proposal.label}</p><h2 id="home-unseen-title">The <em>Unseen.</em></h2><p className="home-unseen-tagline">{proposal.tagline}</p></header>
      <div className="home-unseen-copy"><p className="home-unseen-period">{proposal.period} <span aria-hidden="true">/</span> Independent proposal</p><p>A question about green fluorescence in an aquatic plant became a written proposal. Materials, access, and a short summer kept the experiment from beginning.</p><p className="home-unseen-status">Research proposal · Experiment not conducted</p><Link href={proposal.href} scroll={false}>Read the unfinished story <span aria-hidden="true">↗</span></Link></div>
    </div>
  </section>;
}
