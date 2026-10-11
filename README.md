# Nguyen Ngoc Thanh — Academic Portfolio

A static, single-page academic portfolio built with Next.js App Router, TypeScript, and Tailwind CSS 4.

## Run locally

Install Node.js 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content

- `src/data/portfolio.ts` — profile, links, featured projects, homepage research timeline, and honors.
- `src/data/project-pages.ts` — story, metrics, timelines, image descriptions, status notes, and advisors for the four project pages.
- `src/app/page.tsx` — page copy and section layout.
- `src/app/globals.css` — visual design and responsive styles.
- `src/app/project-pages.css` — project-page visual design and responsive styles.
- `src/components/ProjectCard.tsx` — reusable featured-project card.
- `src/components/project/` — reusable project page, timeline, metric blocks, image gallery, and notes.
- `public/images/README.md` — exact real images to add in place of each SVG placeholder.

The homepage featured cards open `/research/medical-ai`, `/research/phytophthora`, `/leadership/molebio`, and `/leadership/hoa-yen`. Each project route has its own page metadata and shares the existing navigation style.

The current résumé is available as `public/resume-nguyen-ngoc-thanh.docx`. This public copy has its phone number removed; the original DOCX in the project root remains unchanged. When a reviewed PDF is ready, save it as `public/resume-nguyen-ngoc-thanh.pdf` and set `resumePdf` in `src/data/portfolio.ts` to `"/resume-nguyen-ngoc-thanh.pdf"`. Add verified GitHub and LinkedIn URLs to the same file when available.

## Commands

```bash
npm run build
npm run lint
npm run typecheck
```
