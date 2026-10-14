"use client";

import { useEffect, useRef, type KeyboardEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";

export function ProjectOverlay({ title, position, children }: { title: string; position: string; children: ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.documentElement.style.overflow;
    const siteContent = document.getElementById("site-content");
    const wasInert = siteContent?.inert ?? false;
    document.documentElement.style.overflow = "hidden";
    if (siteContent) siteContent.inert = true;
    closeRef.current?.focus({ preventScroll: true });
    const frame = requestAnimationFrame(() => {
      if (window.location.hash !== "#unfinished-research") return;
      const target = dialogRef.current?.querySelector<HTMLElement>("#unfinished-research");
      const scroll = scrollRef.current;
      if (target && scroll) scroll.scrollTop += target.getBoundingClientRect().top - scroll.getBoundingClientRect().top - 24;
    });
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.style.overflow = previousOverflow;
      if (siteContent) siteContent.inert = wasInert;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  const handleKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") { event.preventDefault(); router.back(); return; }
    if (event.key !== "Tab" || !dialogRef.current) return;
    const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter((element) => element.getClientRects().length > 0);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  return <div className="story-overlay-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) router.back(); }}>
    <div className="story-overlay" role="dialog" aria-modal="true" aria-label={title} ref={dialogRef} onKeyDown={handleKeys}>
      <div className="story-overlay-bar"><button ref={closeRef} type="button" onClick={() => router.back()}>← Back to Inquiry Map</button><span>{position}</span></div>
      <div className="story-overlay-scroll" ref={scrollRef}>{children}</div>
    </div>
  </div>;
}
