"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { inquiryNodes, type InquiryNodeData } from "@/data/inquiry";
import { ScaleTexture } from "./ScaleTexture";

type NodeId = InquiryNodeData["id"];

const branches: { id: NodeId; path: string; x: number; y: number }[] = [
  { id: "see", path: "M500 310 C427 301 388 192 258 151 C224 141 203 144 184 151", x: 184, y: 151 },
  { id: "test", path: "M500 310 C545 230 624 170 754 143 C791 135 817 137 834 139", x: 834, y: 139 },
  { id: "share", path: "M500 310 C604 282 670 335 778 319 C804 315 825 311 841 308", x: 841, y: 308 },
  { id: "serve", path: "M500 310 C580 348 584 459 697 506 C738 523 767 524 789 520", x: 789, y: 520 },
  { id: "express", path: "M500 310 C438 361 417 468 290 505 C253 516 223 516 201 509", x: 201, y: 509 },
];

export function InquiryMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [previewId, setPreviewId] = useState<NodeId | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!sectionRef.current || window.matchMedia("(max-width: 900px)").matches) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(0.999, Math.max(0, -rect.top / distance));
      setScrollIndex(Math.min(inquiryNodes.length - 1, Math.floor(progress * inquiryNodes.length)));
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activeNode = inquiryNodes.find((node) => node.id === previewId) ?? inquiryNodes[scrollIndex];

  return <section className="inquiry-section" id="inquiry-map" aria-labelledby="inquiry-title" ref={sectionRef}>
    <div className="inquiry-sticky"><div className="container inquiry-container">
      <div className="inquiry-heading">
        <div><p className="eyebrow">An inquiry map / five scales</p><h2 id="inquiry-title">Follow the question.<br /><em>Change the scale.</em></h2></div>
        <p>The subject changes. The habit stays: observe, test, share, serve, express. Choose a branch or follow the path as you scroll.</p>
      </div>

      <div className="inquiry-composition" data-active-node={activeNode.id}>
        <div className="inquiry-map-visual" role="group" aria-label="Five paths from a central question">
          <svg className="inquiry-branches" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
            <circle className="inquiry-orbit" cx="500" cy="310" r="99" />
            <circle className="inquiry-orbit inquiry-orbit-outer" cx="500" cy="310" r="143" />
            {branches.map((branch) => <g key={branch.id} className="inquiry-branch" data-branch={branch.id}>
              <path d={branch.path} /><circle cx={branch.x} cy={branch.y} r="4" />
            </g>)}
            <path className="inquiry-spur inquiry-spur-test" d="M834 139 C873 137 882 173 925 181" />
            <path className="inquiry-spur inquiry-spur-serve" d="M789 520 C836 518 839 556 885 563" />
            <circle className="inquiry-spur-end" cx="925" cy="181" r="2" />
            <circle className="inquiry-spur-end" cx="885" cy="563" r="2" />
          </svg>

          <div className="inquiry-lens" aria-hidden="true">
            {inquiryNodes.map((node) => <ScaleTexture key={node.id} type={node.id} />)}
          </div>
          <div className="inquiry-core"><span>START WITH A</span><strong>QUESTION</strong><i aria-hidden="true" /></div>

          <ol className="inquiry-node-list">{inquiryNodes.map((node) => <li className="inquiry-node" id={node.legacyAnchor} key={node.id} data-node={node.id}>
            <Link href={node.href} aria-label={`${node.action}: ${node.question} Explore ${node.destination}`} onMouseEnter={() => setPreviewId(node.id)} onMouseLeave={() => setPreviewId(null)} onFocus={() => setPreviewId(node.id)} onBlur={() => setPreviewId(null)}>
              <span className="inquiry-node-index">{node.number} / {node.scale}</span>
              <span className="inquiry-node-action">{node.action}<span aria-hidden="true">↗</span></span>
              <span className="inquiry-node-question">“{node.question}”</span>
              <span className="inquiry-node-destination">Explore {node.destination} ↗</span>
            </Link>
          </li>)}</ol>

          <details className="inquiry-sidepath inquiry-unfinished"><summary>A question I couldn’t test</summary><p>A proposed bioluminescent plant experiment could not proceed because of practical access and regulatory constraints. A short case study may be added later.</p></details>
          <details className="inquiry-sidepath inquiry-council" id="council"><summary>Family Representative Council</summary><p>As the annually elected F08 Representative, one of 32 representatives, and a member of the eight-person Content / Documentation Committee, Thanh brings student feedback on wellbeing, facilities, sustainability, and school life to discussions with school leadership. The council serves a high-school community of 1,000+ students and works on feedback systems and new-student onboarding.</p></details>
        </div>

        <aside className="inquiry-reading" aria-label="Selected question">
          <div className="inquiry-reading-top"><span>POINT OF VIEW</span><span>{activeNode.number} / 05</span></div>
          <div className="inquiry-reading-body" key={activeNode.id}>
            <p className="inquiry-reading-scale">{activeNode.scale}</p>
            <h3>{activeNode.action.toLowerCase()}<span className="inquiry-reading-period">.</span></h3>
            <blockquote>“{activeNode.question}”</blockquote>
            <p className="inquiry-reading-context">{activeNode.context}</p>
          </div>
          <Link className="inquiry-reading-link" href={activeNode.href}>Explore {activeNode.destination}<span aria-hidden="true">↗</span></Link>
          <div className="inquiry-progress" aria-hidden="true">{inquiryNodes.map((node) => <span key={node.id} data-active={activeNode.id === node.id} />)}</div>
        </aside>
      </div>
      <p className="inquiry-map-note">Five questions, five project stories. Select any branch to explore directly.</p>
    </div></div>
  </section>;
}
