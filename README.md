# Nguyen Ngoc Thanh — Academic Portfolio

A static academic portfolio built with Next.js App Router, TypeScript, and Tailwind CSS 4.

## Run locally

Install Node.js 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content

- `src/data/portfolio.ts` — profile, résumé links, manuscript update, earlier project data, and honors.
- `src/data/inquiry.ts` — the five Inquiry Map nodes and retained project preview data.
- `src/data/project-pages.ts` — story, metrics, timelines, image descriptions, status notes, and advisors for the four project pages.
- `src/app/page.tsx` — Phase 1 homepage structure and copy.
- `src/app/globals.css` — visual design and responsive styles.
- `src/app/home.css` — homepage hero, spatial Inquiry Map, Current Work, about, honors, and mobile styles.
- `src/app/project-pages.css` — project-page visual design and responsive styles.
- `src/components/ProjectCard.tsx` — reusable featured-project card.
- `src/components/inquiry/` — interactive, keyboard-accessible Inquiry Map and SVG scale textures.
- `src/components/SiteHeader.tsx` and `src/components/SiteFooter.tsx` — shared navigation and contact footer.
- `src/components/project/` — reusable project page, timeline, metric blocks, image gallery, and notes.
- `public/images/README.md` — exact real images to add in place of each SVG placeholder.

The homepage map and browse links open `/research/medical-ai`, `/research/phytophthora`, `/leadership/molebio`, and `/leadership/hoa-yen`. Each project route has its own page metadata and shares the existing navigation style.

The homepage presents all five branches in one Inquiry Map. On desktop, the map stays in view while scrolling shifts focus between scales; hover and keyboard focus preview a branch, and selecting it opens its project page directly. On smaller screens, every branch and question appears in a readable grid. The former theatre content lives at `/creative`; the four project routes remain in place. Motion uses SVG and CSS with a reduced-motion fallback. No animation or 3D dependency was added.

The current résumé is available as `public/resume-nguyen-ngoc-thanh.docx`. This public copy has its phone number removed; the original DOCX in the project root remains unchanged. When a reviewed PDF is ready, save it as `public/resume-nguyen-ngoc-thanh.pdf` and set `resumePdf` in `src/data/portfolio.ts` to `"/resume-nguyen-ngoc-thanh.pdf"`. Add verified GitHub and LinkedIn URLs to the same file when available.

## Commands

```bash
npm run build
npm run lint
npm run typecheck
```
