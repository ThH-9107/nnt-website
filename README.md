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
- `src/data/inquiry.ts` — the five scales, questions, and project destinations.
- `src/data/project-pages.ts` — story, metrics, timelines, image descriptions, status notes, and advisors for the four project pages.
- `src/app/page.tsx` — homepage hero, map, Current Work, About, and honors.
- `src/app/globals.css` — visual design and responsive styles.
- `src/app/home.css` — homepage hero, Current Work, About, honors, and mobile styles.
- `src/app/scale-map.css` — the expanding scale pathway and mobile path.
- `src/app/story.css` — project story, overlay, and responsive presentation.
- `src/components/ProjectCard.tsx` — reusable featured-project card.
- `src/components/inquiry/` — interactive, keyboard-accessible Inquiry Map and SVG scale textures.
- `src/components/SiteHeader.tsx` and `src/components/SiteFooter.tsx` — shared navigation and contact footer.
- `src/components/story/` — reusable overlay shell and five distinct project story presentations.
- `src/app/@story/` — intercepted routes that keep the homepage mounted behind project stories.
- `public/images/README.md` — exact real images to add in place of each SVG placeholder.

The homepage map and browse links open `/research/medical-ai`, `/research/phytophthora`, `/leadership/molebio`, `/leadership/hoa-yen`, and `/creative` as large route-aware overlays. Direct visits to those URLs render the same content as standalone pages with a Back to Inquiry Map link.

The Inquiry Map is one outward path from QUESTION through SEE, TEST, SHARE, SERVE, and EXPRESS. Desktop scrolling moves through an overview and five focus states; hover and keyboard focus preview any scale. Mobile uses a vertical path with expandable questions and direct project links. Motion uses SVG and CSS with a reduced-motion fallback. No 3D or canvas dependency was added.

The current résumé is available as `public/resume-nguyen-ngoc-thanh.docx`. This public copy has its phone number removed; the original DOCX in the project root remains unchanged. When a reviewed PDF is ready, save it as `public/resume-nguyen-ngoc-thanh.pdf` and set `resumePdf` in `src/data/portfolio.ts` to `"/resume-nguyen-ngoc-thanh.pdf"`. Add verified GitHub and LinkedIn URLs to the same file when available.

## Commands

```bash
npm run build
npm run lint
npm run typecheck
```
