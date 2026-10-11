"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { inquiryNodes } from "@/data/inquiry";
import { ScaleScenes } from "./ScaleScenes";
import { ScaleTexture } from "./ScaleTexture";

export function InquiryMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!sectionRef.current || window.matchMedia("(max-width: 900px)").matches) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight + 78);
      const progress = Math.min(0.999, Math.max(0, (78 - rect.top) / travel));
      setActiveIndex(Math.min(inquiryNodes.length - 1, Math.floor(progress * inquiryNodes.length)));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onScroll = () => { if (document.documentElement.style.overflow !== "hidden") schedule(); };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const activeNode = inquiryNodes[activeIndex];

  return <section className="scale-section" id="inquiry-map" ref={sectionRef} aria-labelledby="scale-title">
    <div className="scale-sticky"><div className="container scale-container">
      <header className="scale-heading">
        <div>
          <p className="eyebrow">Five scales of attention</p>
          <h2 id="scale-title">Change the <em>scale.</em></h2>
        </div>
        <p>Follow the question from images to organisms, learners, communities, and audiences.</p>
      </header>

      <div className="scale-world" data-active={activeNode.id}>
        <div className="scale-map-main">
          <nav className="scale-rail" aria-label="Explore the five project scales">
            <p className="scale-rail-intro">CLOSE OBSERVATION <span aria-hidden="true">↓</span> WIDER CONTEXT</p>
            <ol className="scale-stages">
              {inquiryNodes.map((node) => <li key={node.id} id={node.legacyAnchor} className="scale-stage" data-active={activeNode.id === node.id}>
                <Link className="scale-stage-link" href={node.href} scroll={false} aria-label={`${node.scale}: ${node.destination}. Open project story`}>
                  <span className="scale-stage-marker" aria-hidden="true" />
                  <span className="scale-stage-content">
                    <span className="scale-stage-number">{node.number} / 05</span>
                    <strong>{node.scale}</strong>
                    <span className="scale-stage-subtitle"><em>{node.action.toLowerCase()}</em> <span aria-hidden="true">·</span> {node.destination}</span>
                    <span className="scale-stage-question">“{node.question}”</span>
                  </span>
                  <span className="scale-stage-texture" aria-hidden="true"><ScaleTexture type={node.id} /></span>
                  <span className="scale-stage-arrow" aria-hidden="true">↗</span>
                </Link>
                {node.id === "test" && <details className="scale-secondary scale-secondary-unfinished">
                  <summary>A question I couldn&apos;t test</summary>
                  <p>A proposed bioluminescent plant experiment did not reach bench work because of practical access and regulatory constraints.</p>
                </details>}
                {node.id === "serve" && <details className="scale-secondary" id="council">
                  <summary>Family Representative Council</summary>
                  <p>As an elected F08 representative, I bring student feedback into council discussions about school life and shared spaces.</p>
                </details>}
              </li>)}
            </ol>
          </nav>

          <div className="scale-scene-area" aria-hidden="true">
            <div className="scale-scene-top"><span>OBSERVATION FIELD</span><span>{activeNode.number} / 05</span></div>
            <ScaleScenes />
            <div className="scale-scene-caption"><span className="scale-scene-rule" />{activeNode.context}</div>
          </div>
        </div>

        <div className="scale-reading">
          <div>
            <span className="scale-reading-index">{activeNode.number} / 05 &nbsp; {activeNode.scale} <span>· {activeNode.action.toLowerCase()}</span></span>
            <blockquote>“{activeNode.question}”</blockquote>
          </div>
          <Link href={activeNode.href} scroll={false}>Explore {activeNode.destination} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>

      <p className="scale-orientation"><span>IMAGE</span><span className="scale-orientation-line" aria-hidden="true"><i style={{ width: `${(activeIndex + 1) * 20}%` }} /></span><span>AUDIENCE</span><span className="scale-orientation-instruction">Scroll to change the scale · Select a name to open its story</span></p>
    </div></div>
  </section>;
}
