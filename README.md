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

The hero provides direct research and leadership links, alongside the résumé download. The corner wordmark is NThanh. “A little about me” follows the name/portrait and preserves Thanh's conversational introduction; About navigation targets this section. The shorter Working Method section retains two scientific-training records. “Markers along the way” combines eight selected honors, including DONMUN, with matching certificate scans. Rows marked + open with native details/summary controls; Enter or Space works when the summary is focused. Five honors have scans. IMOCSEA–ISOCSEA Science Gold, Exemplary Young Leader, and DONMUN remain text-only until their certificates are supplied. Other creative, service, academic, and learning records are grouped within the same section. Captions distinguish each displayed document's period from broader résumé claims. Add a document to `src/data/certificates.ts` and assign its ID to the honor's `certificateId` in `src/data/portfolio.ts` to attach a future scan.

The May–July 2026 GFP fluorescence proposal appears as “A question I couldn’t test” at `/research/gfp-proposal`, with a matching intercepted overlay. It remains secondary under ORGANISM; the Phytophthora story retains a compact teaser at its old `#unfinished-research` anchor. The sequence remains question → proposal → seeking support → obstacle → moving on. The original Vietnamese DOCX and embedded workflow diagram document the proposal. Nguyễn Thị Thảo Sương is identified separately from implementation discussions with Dr. Trần Trọng Tuấn and Dr. Bùi Thế Vinh. The obstacle was obtaining the GFP plasmid within the summer window; the experiment was not conducted. The five-scale architecture remains unchanged.

The October 15 editorial pass consolidates repeated metrics and caveats, gives Medical AI a personal contribution section and one central results explanation, and emphasizes leadership decisions in MoleBio and Hoa Yen. Thanh supplied the MoleBio workshop-preparation and Hỏa Chí rehearsal memories. The Cao Văn Lầu poster's XULONG credit names his team; November 15 is the performance date and January 2025 the certificate date. Hoa Yen's 100-life-jacket campaign count is newly user-confirmed; public wording credits campaign participation. The three-year report and separate 2027–2028 plan informed the content; their raw DOCX files remain local and ignored by Git. Future work is labeled as planned. Unresolved household and financial-scope claims remain in the context pack. See `nnt_portfolio_context_pack/docs/EDITORIAL_REVIEW_2026-10.md` for the fact and wording audit.

The ORGANISM image comes from `public/images/phytophthora/durian_tree.png`. A WebP delivery copy preserves the whole tree in the shared observation frame. Body text and supporting labels are larger across the homepage, map, certificates, and project stories; reduced-motion behavior remains available.

The final two-page résumé supplied October 15, 2026 is available as `public/resume-nguyen-ngoc-thanh.pdf`, unchanged from `nnt_portfolio_context_pack/docs/Resume Nguyễn Ngọc Thành.pdf`. All résumé downloads use the shared `resumePdf` setting in `src/data/portfolio.ts`; the older Word document remains available as a fallback. To update the résumé later, replace the public PDF, or set `resumePdf` to a supplied public download URL. Add verified GitHub and LinkedIn URLs to the same file when available.

## Commands

```bash
npm run build
npm run lint
npm run typecheck
```
