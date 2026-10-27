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
- `src/app/page.tsx` — homepage hero, short introduction, map, The Unseen chapter, Working Method, and markers.
- `src/app/globals.css` — visual design and responsive styles.
- `src/app/home.css` — homepage hero, introduction, Working Method, honors, and mobile styles.
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
- `src/data/academic-records.ts` — verified AP/SAT text records; no public score reports.
- `src/data/unfinished-research.ts` — the high-level May–July 2026 proposal narrative and attribution for The Unseen.
- `src/components/story/UnfinishedResearchNote.tsx` — the sole story content for The Unseen, shared by direct route and overlay.
- `src/components/home/UnseenChapter.tsx` / `src/app/unseen.css` — standalone homepage chapter and contemplative story presentation.
- `src/components/story/MoleBioLearningSequence.tsx`, `MoleBioReflection.tsx`, and `src/app/molebio.css` — connected Listen/Practice/Beyond sequence and the supplied personal reflection.
- `src/data/creative-productions.ts` — verified production narratives, dates, photographs, evidence, and optional recordings/scripts.
- `src/components/story/CreativeStoryContent.tsx`, `CreativeRecording.tsx`, and `src/app/creative.css` — shared standalone/overlay creative archive and restrained, interaction-loaded media.
- `src/components/story/FromPageToStage.tsx`, `BilingualScriptExcerpt.tsx`, `src/data/page-to-stage.ts`, and `src/app/page-to-stage.css` — the 1919 synopsis, supplied bilingual excerpt, and reviewed original-script link.
- `src/app/fonts.ts` / `src/app/fonts/gelasio/` — self-hosted Vietnamese-complete, Georgia-compatible serif for the creative story only; body/caption fonts remain unchanged. See `nnt_portfolio_context_pack/docs/VIETNAMESE_FONT_AUDIT.md` for coverage and verification limits.
- `src/components/SiteHeader.tsx` and `src/components/SiteFooter.tsx` — shared navigation and contact footer.
- `src/components/story/` — reusable overlay shell and five distinct project story presentations.
- `src/app/@story/` — intercepted routes that keep the homepage mounted behind project stories.
- `public/images/README.md` — exact real images to add in place of each SVG placeholder.

The homepage map and browse links open `/research/medical-ai`, `/research/phytophthora`, `/leadership/molebio`, `/leadership/hoa-yen`, and `/creative` as large route-aware overlays. Direct visits to those URLs render the same content as standalone pages with a Back to Inquiry Map link.

The Inquiry Map moves from IMAGE through ORGANISM, LEARNER, COMMUNITY, and AUDIENCE. Desktop scrolling pulls image detail back inside a steady 3:2 frame; grid marks contract with the view. The complete Audience photograph fits inside the frame without cropping. The frame fits both the available width and height on shorter screens. Hover and focus are cosmetic; all project links remain available. Mobile uses five static landscape compositions along a vertical path, with the same progression from close detail to a wider setting. Reduced motion disables the pullback. No 3D or canvas dependency was added.

The header contains Contact, Portfolio, and CV. Portfolio currently jumps to the Five Scales; Contact targets the footer. The hero's repeated Research/Leadership rows are removed. On mobile, the name is followed immediately by the portrait, then the intro/actions. The corner wordmark is NThanh. “A little about me” uses two short paragraphs with one first-person “I,” with its portrait integrated beside the heading and prose. Working Method retains two scientific-training records. The repeated “A question still in progress” strip is removed.

“Markers along the way” begins with SAT 1480 (Math 800, Reading and Writing 680; September 2026) and AP Biology 5, Calculus BC 5, Statistics 4, plus AP Scholar (2026). Full score reports remain private. Eight selected honors, including DONMUN, retain native certificate dropdowns. Five honors have scans; IMOCSEA–ISOCSEA Science Gold, Exemplary Young Leader, and DONMUN remain text-only. Additional creative, service, academic, and learning documents are grouped below. Add a document to `src/data/certificates.ts` and assign its ID to an honor's `certificateId` in `src/data/portfolio.ts` to attach a future scan.

The May–July 2026 GFP proposal is now **The Unseen**, a separate chapter after the Five Scales, using the existing `/research/gfp-proposal` route and matching overlay. It follows question → proposal → guidance → constraints → unfinished experiment, with a prominent proposal-only / experiment-not-conducted status. Nguyễn Thị Thảo Sương's proposal credit is distinct from implementation discussions with Dr. Trần Trọng Tuấn and Dr. Bùi Thế Vinh. The ORGANISM branch and Phytophthora teaser are removed. The full proposal, technical workflow, and source DOCX are removed from the current public/Git tree and retained only in ignored local storage. Previous history/deployments are not purged by this change. No literal sixth scale or synthetic research imagery is added.

MoleBio opens its transformation with connected Listen → Practice → Beyond panels. The first two retain contrasting editorial treatments; Beyond includes two separate laboratory-learning experiences and explicitly avoids chronological claims. Authentic `mole2024.png` supplies the earlier classroom scene. The verified practical program, workshops, Science Fair, student projects, and preparation account remain. The story ends with Thanh's supplied “What I Couldn't Carry Forward” reflection about the iGEM decision and continuity after stepping down.

The reflection now includes a small bottle-terrarium photograph directly beneath its title. It is an optimized crop from `public/images/molebio/terrariums.jpg`, with no generated content or alteration of the reflection text.

The creative archive keeps its dark AUDIENCE treatment. Cao Văn Lầu follows Thanh's Sunday research, script writing, rehearsals, and performance memory, supported by its original poster and First Prize certificate. Its performance footage is lost, and no preparation photograph is attributed to that production. Thanh clarified that `preparation.jpg` belongs to Hỏa Chí; its selected delivery is `public/images/selected/hoa-chi-stage-preparation.webp`. Hỏa Chí includes that genuine preparation image, a supplied vocal-rehearsal video, and the singing and dragon voiceover memories. Khởi Sắc 27 remains in preparation for May 2027; secondary ensemble photographs remain available. November 15's performance year is still unconfirmed.

### Add a performance or recording

Append a verified `CreativeProduction` to `creativeProductions` in `src/data/creative-productions.ts`. Supply its title, label, status, roles, and story paragraphs. Add real photographs through `src/data/photography.ts`. Optional `evidence` and `script` fields accept actual document links. A recording's optional `afterParagraph` is a one-based paragraph number for placing it beside the relevant passage; omitted values keep media after the story. The upcoming footer follows each production's status automatically.

Thanh supplied the Hỏa Chí vocal-rehearsal recording through [Cloudinary](https://res.cloudinary.com/m6yc0cyk/video/upload/c_limit,w_960/q_auto/f_auto/v1792830094/practice.mp4). Its anecdotal caption was removed at Thanh's request on October 24, 2026; keep the recording and original Vietnamese audio without restoring that caption. Dragon voiceover audio and subtitle/caption files remain unavailable; do not display empty players or fabricate these assets. Keep large recording originals outside the public/Git tree and use optimized remote delivery URLs in `recordings`. A video also needs a genuine poster and verified dimensions; do not infer duration or other metadata from its filename. Media loads only after interaction, uses native controls, and never autoplays. Add caption tracks or transcript links only when accurate text exists; cross-origin caption hosting must permit CORS. No hosting SDK or credentials are required by the page. Media availability alone does not establish successful browser playback. The separately supplied 1919 script is described below.

The October 15 editorial pass consolidates repeated metrics and caveats, gives Medical AI a personal contribution section and one central results explanation, and emphasizes leadership decisions in MoleBio and Hoa Yen. Thanh supplied the MoleBio workshop-preparation and Hỏa Chí rehearsal memories. The Cao Văn Lầu poster's XULONG credit names his team; November 15 is the performance date and January 2025 the certificate date. Hoa Yen's 100-life-jacket campaign count is newly user-confirmed; public wording credits campaign participation. The three-year report and separate 2027–2028 plan informed the content; their raw DOCX files remain local and ignored by Git. Future work is labeled as planned. Unresolved household and financial-scope claims remain in the context pack. See `nnt_portfolio_context_pack/docs/EDITORIAL_REVIEW_2026-10.md` for the fact and wording audit.

The ORGANISM image comes from `public/images/phytophthora/durian_tree.png`. Its shared observation frame shows a large foliage crop with the complete tree in a contextual inset. The active desktop question now sits above the observation images; mobile questions precede their image too. The personal introduction and Working Method retain readable, locally scoped type sizes and reduced-motion behavior.

The résumé link now opens Thanh's supplied Google Drive PDF viewer in a new tab. All four placements use `ResumeLink` and the shared `resumePdf` setting in `src/data/portfolio.ts`; external viewer links omit the download attribute. The previously supplied PDF remains at `public/resume-nguyen-ngoc-thanh.pdf` as a local archival copy. Add verified GitHub and LinkedIn URLs to the profile when available.

The homepage hero now uses Thanh's explicitly selected `DMDT0895.JPG`. Optimized delivery files are `thanh-dmdt0895-hero.webp` (1280 × 1600), `thanh-dmdt0895-desktop.webp` (1000 × 1500), and `thanh-dmdt0895-mobile.webp` (880 × 1100), all in `public/images/selected`. Background clutter was removed while retaining the room's soft shelving. The final subject comes from the original photograph, with only subtle exposure and warmth adjustments. No facial reconstruction, skin smoothing, reshaping, or outfit changes were used in the final composite. The original upload remains unchanged and ignored by Git.

`HomeHero` uses Next's `getImageProps` inside a responsive `picture`, serving the mobile crop at widths up to 900px. The mobile frame has a 4:5 aspect ratio to preserve the face and thoughtful hand pose. About retains `thanh-restaurant-portrait.webp`. `/preview/portrait` shows the active hero, both delivered crops, and the About placement, with noindex/nofollow metadata. No new website dependency was added; temporary tools, masks, and processing notes remain in the ignored `local-source-documents/portrait-tools` directory.

### From Page to Stage

The Cao Văn Lầu production is titled **The Beauty of Vietnamese Culture — 1919**. Its supplied Sunday-to-stage narrative leads into a compact archival feature: the theatrical synopsis beside the separation-scene excerpt. English defaults to the supplied adaptation; Tiếng Việt shows the original supplied text. Native buttons update local state without navigation, and both versions share a grid area to reserve the taller text height. The feature stacks on phones and retains the original production poster. Thanh confirmed using the script and poster without a separate preparation photo; the existing make-up photograph stays in Hỏa Chí.

Edit the synopsis and excerpt in `src/data/page-to-stage.ts`. The optional full-script URL is the Cao production's `script` field in `src/data/creative-productions.ts`. Publish only a reviewed reading copy; preserve the unreviewed upload in ignored local storage. The public link is explicitly labeled as a reading copy with personal credits and external reference links omitted. The original script identifies its group as Xuyên không; the retained poster's XULONG credit remains separately attributed. No historical explanation for that difference is invented.

## Commands

```bash
npm run build
npm run lint
npm run typecheck
```
