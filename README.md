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
- `src/components/inquiry/` — scroll-controlled Inquiry Map and reusable SVG photographic viewports.
- `src/data/scale-images.ts` — selected scale photographs, display-only crop coordinates, and field labels.
- `src/app/scale-photography.css` — shared landscape observation frame, pullback, and mobile compositions.
- `src/components/CertificateArchive.tsx` — manually browsable document shelf with arrows, keyboard navigation, touch scrolling, and reduced motion.
- `src/data/certificates.ts` — original document links, preview scans, issuing organizations, and dates.
- `src/app/certificates.css` — document-archive typography and paper presentation.
- `src/components/SiteHeader.tsx` and `src/components/SiteFooter.tsx` — shared navigation and contact footer.
- `src/components/story/` — reusable overlay shell and five distinct project story presentations.
- `src/app/@story/` — intercepted routes that keep the homepage mounted behind project stories.
- `public/images/README.md` — exact real images to add in place of each SVG placeholder.

The homepage map and browse links open `/research/medical-ai`, `/research/phytophthora`, `/leadership/molebio`, `/leadership/hoa-yen`, and `/creative` as large route-aware overlays. Direct visits to those URLs render the same content as standalone pages with a Back to Inquiry Map link.

The Inquiry Map moves from IMAGE through ORGANISM, LEARNER, COMMUNITY, and AUDIENCE. Desktop scrolling pulls image detail back inside a steady 3:2 frame; grid marks contract with the view. The complete Audience photograph fits inside the frame without cropping. The frame fits both the available width and height on shorter screens. Hover and focus are cosmetic; all project links remain available. Mobile uses five static landscape compositions along a vertical path, with the same progression from close detail to a wider setting. Reduced motion disables the pullback. No 3D or canvas dependency was added.

The hero provides direct research and leadership links, alongside the résumé download. About includes two compact scientific-training records. Selected honors remain concise; original certificates are browsed horizontally near the bottom, with additional learning records inside a disclosure. The archive has no autoplay. Focus the shelf and use Left/Right, Home/End, the arrow buttons, or native touch/trackpad scrolling.

The current résumé is available as `public/resume-nguyen-ngoc-thanh.docx`. This public copy has its phone number removed; the original DOCX in the project root remains unchanged. When a reviewed PDF is ready, save it as `public/resume-nguyen-ngoc-thanh.pdf` and set `resumePdf` in `src/data/portfolio.ts` to `"/resume-nguyen-ngoc-thanh.pdf"`. Add verified GitHub and LinkedIn URLs to the same file when available.

## Commands

```bash
npm run build
npm run lint
npm run typecheck
```
