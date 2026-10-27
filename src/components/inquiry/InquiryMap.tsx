"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { inquiryNodes } from "@/data/inquiry";
import { photos } from "@/data/photography";
import { scaleImages } from "@/data/scale-images";
import { ScaleObservationImage } from "./ScaleObservationImage";
import { ProjectExternalLink } from "@/components/ProjectExternalLink";
import { projectLinks } from "@/data/project-links";

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
      // Pull back inside a steady frame; reach the uncropped view at AUDIENCE.
      const pullback = Math.min(1, progress / ((inquiryNodes.length - 1) / inquiryNodes.length));
      sectionRef.current.style.setProperty("--camera-scale", (1.4 - 0.4 * pullback).toFixed(4));
      sectionRef.current.style.setProperty("--grid-step", `${(72 - 44 * pullback).toFixed(2)}px`);
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
    <span id="research" className="scale-anchor" aria-hidden="true" /><span id="leadership" className="scale-anchor" aria-hidden="true" />
    <div className="scale-sticky"><div className="container scale-container">
      <header className="scale-heading">
        <div>
          <p className="eyebrow">Five scales of attention</p>
          <h2 id="scale-title">Change the <em>scale.</em></h2>
        </div>
        <p>Follow the question from images to organisms, learners, communities, and audiences.</p>
      </header>

      <div className="scale-world" data-active={activeNode.id}>
        <div className="scale-reading">
          <div>
            <span className="scale-reading-index">{activeNode.number} / 05 &nbsp; {activeNode.scale} <span>· {activeNode.action.toLowerCase()}</span></span>
            <blockquote>“{activeNode.question}”</blockquote>
          </div>
          <Link href={activeNode.href} scroll={false}>Explore {activeNode.destination} <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="scale-map-main">
          <nav className="scale-rail" aria-label="Explore the five project scales">
            <p className="scale-rail-intro">CLOSE OBSERVATION <span aria-hidden="true">↓</span> WIDER CONTEXT</p>
            <ol className="scale-stages">
              {inquiryNodes.map((node) => <li key={node.id} id={node.legacyAnchor} className="scale-stage" data-active={activeNode.id === node.id}>
                <Link className="scale-stage-link" href={node.href} scroll={false} aria-label={`${node.scale}: ${node.destination}. ${node.question} Open project story`}>
                  <span className="scale-stage-marker" aria-hidden="true" />
                  <span className="scale-stage-content">
                    <span className="scale-stage-number">{node.number} / 05</span>
                    <strong>{node.scale}</strong>
                    <span className="scale-stage-subtitle"><em>{node.action.toLowerCase()}</em> <span aria-hidden="true">·</span> {node.destination}</span>
                    <span className="scale-stage-question">“{node.question}”</span>
                  </span>
                  <span className="scale-stage-texture" data-scene={node.id} aria-hidden="true"><span className="scale-mobile-window"><ScaleObservationImage id={node.id} /></span><span className="scale-mobile-caption">{scaleImages[node.id].title}</span></span>
                  <span className="scale-stage-arrow" aria-hidden="true">↗</span>
                </Link>
                {node.id === "serve" && <details className="scale-secondary" id="council">
                  <summary>Family Representative Council</summary>
                  <p>F08 Representative · May 2024–Present. Elected annually as one of 32 representatives serving a high-school community of 1,000+ students.</p>
                  <p>On the Documentation Committee, I collect and summarize student feedback. I have proposed online feedback forms and contributed to well-being and onboarding work and the council’s vision and mission. Through discussions with the school, the council’s collective feedback helped prompt pool cleaning and shared-seating maintenance.</p>
                  <ProjectExternalLink link={projectLinks.frc} className="scale-secondary-note-link" />
                  <figure className="scale-secondary-photo"><Image src={photos.frcMeeting.src} alt={photos.frcMeeting.alt} width={photos.frcMeeting.width} height={photos.frcMeeting.height} sizes="(max-width: 900px) 80vw, 250px" /><figcaption>{photos.frcMeeting.caption}</figcaption></figure>
                </details>}
              </li>)}
            </ol>
          </nav>

          <div className="scale-scene-area">
            <div className="scale-scene-top"><span>OBSERVATION FIELD</span><span>{activeNode.number} / 05</span></div>
            <div className="scale-observation-field">
              <div className="scale-observation-grid" aria-hidden="true" />
              <span className="scale-field-axis scale-field-axis-x" aria-hidden="true" />
              <span className="scale-field-axis scale-field-axis-y" aria-hidden="true" />
              <div className="scale-observation-window">
                <span className="scale-window-corner scale-window-corner-tl" aria-hidden="true" /><span className="scale-window-corner scale-window-corner-br" aria-hidden="true" />
                <div className="scale-observation-plate">{inquiryNodes.map((node) => <figure className="scale-photograph" key={node.id} data-scene={node.id} data-active={activeNode.id === node.id} aria-hidden={activeNode.id !== node.id}>
                  <ScaleObservationImage id={node.id} />
                </figure>)}</div>
              </div>
              <span className="scale-field-note">{scaleImages[activeNode.id].fieldNote}</span>
            </div>
            <p className="scale-image-label">{scaleImages[activeNode.id].title}</p>
            <div className="scale-scene-caption"><span className="scale-scene-rule" />{activeNode.context}</div>
          </div>
        </div>

      </div>

      <p className="scale-orientation"><span>IMAGE</span><span className="scale-orientation-line" aria-hidden="true"><i style={{ width: `${(activeIndex + 1) * 20}%` }} /></span><span>AUDIENCE</span><span className="scale-orientation-instruction">Scroll to pull back · Select a name to open its story</span></p>
    </div></div>
  </section>;
}
