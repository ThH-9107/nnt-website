"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import type { CertificateDocument } from "@/data/certificates";

export function CertificateArchive({ id, label, documents }: { id: string; label: string; documents: CertificateDocument[] }) {
  const shelfRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ first: 1, last: 1, atStart: true, atEnd: false });

  useEffect(() => {
    const shelf = shelfRef.current;
    if (!shelf) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!shelf.clientWidth) return;
      const bounds = shelf.getBoundingClientRect();
      const entries = Array.from(shelf.querySelectorAll<HTMLElement>(".archive-document"));
      const visible = entries.flatMap((entry, index) => {
        const rect = entry.getBoundingClientRect();
        return rect.right > bounds.left + 12 && rect.left < bounds.right - 12 ? [index + 1] : [];
      });
      setPosition({
        first: visible[0] ?? 1,
        last: visible.at(-1) ?? 1,
        atStart: shelf.scrollLeft <= 2,
        atEnd: shelf.scrollLeft >= shelf.scrollWidth - shelf.clientWidth - 2,
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(shelf);
    shelf.addEventListener("scroll", schedule, { passive: true });
    schedule();
    return () => {
      observer.disconnect();
      shelf.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scroll = (direction: -1 | 1 | "start" | "end") => {
    const shelf = shelfRef.current;
    if (!shelf) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    if (direction === "start" || direction === "end") {
      shelf.scrollTo({ left: direction === "start" ? 0 : shelf.scrollWidth, behavior });
      return;
    }
    const entries = Array.from(shelf.querySelectorAll<HTMLElement>(".archive-document"));
    const current = Math.max(0, position.first - 1);
    const target = entries[Math.min(entries.length - 1, Math.max(0, current + direction))];
    if (target) shelf.scrollTo({ left: target.offsetLeft - entries[0].offsetLeft, behavior });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    const directions: Record<string, -1 | 1 | "start" | "end"> = { ArrowLeft: -1, ArrowRight: 1, Home: "start", End: "end" };
    const direction = directions[event.key];
    if (direction !== undefined) { event.preventDefault(); scroll(direction); }
  };

  return <div className="certificate-archive">
    <div className="archive-toolbar">
      <p className="archive-series">{label} <span>{documents.length.toString().padStart(2, "0")} documents</span></p>
      <div className="archive-controls">
        <button type="button" onClick={() => scroll(-1)} disabled={position.atStart} aria-label={`Previous document in ${label}`} aria-controls={id}><span aria-hidden="true">←</span></button>
        <button type="button" onClick={() => scroll(1)} disabled={position.atEnd} aria-label={`Next document in ${label}`} aria-controls={id}><span aria-hidden="true">→</span></button>
      </div>
    </div>
    <div className="archive-scroll" id={id} ref={shelfRef} tabIndex={0} role="region" aria-label={label} aria-describedby={`${id}-help`} onKeyDown={onKeyDown}>
      <ol className="archive-shelf">
        {documents.map((document, index) => <li className="archive-document" key={document.id} style={{ "--document-width": `${Math.max(240, Math.round(232 * document.width / document.height))}px` } as CSSProperties}>
          <a href={document.pdf} target="_blank" rel="noopener noreferrer" aria-label={`${document.title}, ${document.period}. Open original certificate PDF in a new tab`}>
            <div className="archive-document-index"><span>Document {String(index + 1).padStart(2, "0")}</span><span>{document.period}</span></div>
            <div className="archive-paper"><Image src={document.thumbnail} alt={`Original ${document.title} certificate issued to Nguyen Ngoc Thanh`} width={document.width} height={document.height} quality={85} sizes="(max-width: 620px) 75vw, 350px" /></div>
            <div className="archive-caption"><h3>{document.title}</h3><p className="archive-issuer">{document.issuer}</p><p className="archive-detail">{document.detail}</p><span className="archive-open">Read original <span aria-hidden="true">↗</span></span></div>
          </a>
        </li>)}
      </ol>
    </div>
    <div className="archive-footnote"><p id={`${id}-help`}>Scroll or swipe to browse. Use ← / → when the archive is focused.</p><span>{String(position.first).padStart(2, "0")}–{String(position.last).padStart(2, "0")} <span className="archive-range-total">/ {String(documents.length).padStart(2, "0")}</span></span></div>
  </div>;
}
