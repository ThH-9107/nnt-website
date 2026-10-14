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
- `src/app/readability.css` — larger reading text, navigation, captions, and responsive type adjustments.
- `src/app/scale-map.css` — the expanding scale pathway and mobile path.
- `src/app/story.css` — project story, overlay, and responsive presentation.
- `src/components/ProjectCard.tsx` — reusable featured-project card.
- `src/components/inquiry/` — scroll-controlled Inquiry Map and reusable SVG photographic viewports.
- `src/data/scale-images.ts` — selected scale photographs, display-only crop coordinates, and field labels.
- `src/app/scale-photography.css` — shared landscape observation frame, pullback, and mobile compositions.
- `src/components/CertificateShowcase.tsx` — combined honors list and native certificate disclosures.
- `src/components/CertificateScan.tsx` — reusable, uncropped certificate preview with issuer, date, and original-PDF link.
- `src/data/certificates.ts` — original document links, preview scans, issuing organizations, and dates.
- `src/app/certificates.css` — expandable honor rows and paper presentation.
- `src/data/unfinished-research.ts` — the May–July 2026 GFP fluorescence proposal story, researcher attribution, original document, and authentic diagram.
- `src/components/story/UnfinishedResearchNote.tsx` — secondary proposal section within the Organism story.
- `src/components/SiteHeader.tsx` and `src/components/SiteFooter.tsx` — shared navigation and contact footer.
- `src/components/story/` — reusable overlay shell and five distinct project story presentations.
- `src/app/@story/` — intercepted routes that keep the homepage mounted behind project stories.
- `public/images/README.md` — exact real images to add in place of each SVG placeholder.

The homepage map and browse links open `/research/medical-ai`, `/research/phytophthora`, `/leadership/molebio`, `/leadership/hoa-yen`, and `/creative` as large route-aware overlays. Direct visits to those URLs render the same content as standalone pages with a Back to Inquiry Map link.

The Inquiry Map moves from IMAGE through ORGANISM, LEARNER, COMMUNITY, and AUDIENCE. Desktop scrolling pulls image detail back inside a steady 3:2 frame; grid marks contract with the view. The complete Audience photograph fits inside the frame without cropping. The frame fits both the available width and height on shorter screens. Hover and focus are cosmetic; all project links remain available. Mobile uses five static landscape compositions along a vertical path, with the same progression from close detail to a wider setting. Reduced motion disables the pullback. No 3D or canvas dependency was added.

The hero provides direct research and leadership links, alongside the résumé download. The corner wordmark is NThanh. “A little about me” follows the name/portrait and uses Thanh's own supplied introduction; About navigation targets this section. The later Working Method section retains the two scientific-training records. “Markers along the way” combines the existing seven honors with their matching certificate scans. Rows marked + open with native details/summary controls; Enter or Space works when the summary is focused. Five honors have scans. IMOCSEA–ISOCSEA Science Gold and Exemplary Young Leader remain text-only until their certificates are supplied. Other creative, service, academic, and learning records are grouped within the same section. Add a document to `src/data/certificates.ts` and assign its ID to the honor's `certificateId` in `src/data/portfolio.ts` to attach a future scan.

The May–July 2026 GFP fluorescence proposal appears as “A question I couldn’t test” at `/research/phytophthora#unfinished-research`. It is a secondary editorial story, after the Phytophthora study's credits: question → proposal → seeking support → obstacle → moving on. The original Vietnamese DOCX is downloadable and its embedded workflow diagram is shown as a plan, not an experimental result. Nguyễn Thị Thảo Sương is identified separately from the implementation discussions with Dr. Trần Trọng Tuấn and Dr. Bùi Thế Vinh. The obstacle was obtaining the GFP plasmid within the available summer window; no categorical import prohibition is claimed. GFP fluorescence is distinguished from bioluminescence. The map's secondary branch opens that story inside the existing overlay; only the overlay scrolls, preserving the homepage position. The five-scale architecture remains unchanged.

The ORGANISM image comes from `public/images/phytophthora/durian_tree.png`. A WebP delivery copy preserves the whole tree in the shared observation frame. Body text and supporting labels are larger across the homepage, map, certificates, and project stories; reduced-motion behavior remains available.

The current résumé is available as `public/resume-nguyen-ngoc-thanh.docx`. This public copy has its phone number removed; the original DOCX in the project root remains unchanged. When a reviewed PDF is ready, save it as `public/resume-nguyen-ngoc-thanh.pdf` and set `resumePdf` in `src/data/portfolio.ts` to `"/resume-nguyen-ngoc-thanh.pdf"`. Add verified GitHub and LinkedIn URLs to the same file when available.

## Commands

```bash
npm run build
npm run lint
npm run typecheck
```
