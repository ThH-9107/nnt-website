# Asset Manifest / Image Plan

Status: planning document. Real assets may not yet be present.

## October 22 content and privacy update

- Earlier MoleBio classroom: `/public/images/selected/molebio-early-classroom.webp`, 1440 × 1082, approximately 123 KB, from the user-supplied `mole2024.png`. The original remains unchanged and ignored by Git. It is used only for Listen / 2024–2025.
- The two existing Beyond learning photographs remain authentic, uncropped records of separate Stem Cell Summer School and Binh Phu experiences.
- Official AP and SAT score reports are private local sources. The markers use verified scores as text, with no report download or identifying fields.
- The complete GFP proposal, original source DOCX, and technical workflow image have been removed from the current public/Git tree and preserved in ignored local storage. The Unseen uses a high-level narrative and CSS paper-edge motifs only. No unpublished technical artifact is embedded or linked.

## October 20 hero selection

- Thanh explicitly selected `portrait/DMDT0895.JPG` as the main homepage portrait. The 6.3 MB source is preserved unchanged and ignored by Git.
- Cleaned upper-body master: `/public/images/selected/thanh-dmdt0895-hero.webp`, 1280 × 1600, approximately 159 KB.
- Desktop hero crop: `/public/images/selected/thanh-dmdt0895-desktop.webp`, 1000 × 1500, approximately 139 KB.
- Mobile hero crop: `/public/images/selected/thanh-dmdt0895-mobile.webp`, 880 × 1100, approximately 92 KB, served up to 900px viewport width.
- The final subject uses the original photographed face, hair, glasses, pose, hand, blazer, shirt, and tie. Built-in image editing cleaned the backdrop; original subject pixels were composited over it with a subtle exposure/warmth correction. No facial reconstruction or skin smoothing is used in the selected files.
- The restaurant portrait remains in About; the former lakeside asset is retained as an archive. `/preview/portrait` shows the selected hero and delivered crops.

## October 16 finishing update

- Personal About portrait: `/public/images/selected/thanh-restaurant-portrait.webp`, 920 × 1150, approximately 79 KB. Source: local `portrait/nnt_suit.png`, preserved unchanged. The delivered subject uses original pixels with masking, a table-free crop, uniform mild color correction, and an off-white background.
- The lakeside hero was retained pending approval at that stage; it was superseded by Thanh's explicit October 20 DMDT0895 selection above.
- ORGANISM uses a larger foliage crop and a complete-tree inset from `/public/images/selected/phytophthora-durian-tree.webp`. Both are display-only SVG viewports of the real source photograph.
- Résumé access now uses the user-supplied Google Drive viewer through the shared profile setting; the previously supplied local PDF remains archived.

## October 2026 GFP proposal update

- The original Vietnamese proposal and its embedded workflow were previously used as documentary sources. That presentation is superseded by the October 22 instruction above: no public proposal, workflow, protocols, plasmid designs, or unpublished details.
- Do not create a proposal cover or fictional experiment imagery.
- ORGANISM scale source photo: `/public/images/phytophthora/durian_tree.png`; delivery copy `/public/images/selected/phytophthora-durian-tree.webp`.

## October 15 editorial evidence update

- Final public résumé: `/public/resume-nguyen-ngoc-thanh.pdf`, unchanged from `docs/Resume Nguyễn Ngọc Thành.pdf`.
- Local Hoa Yen report for factual review: `docs/PHẦN 1 báo cáo kết quả 03 năm thực hiện Quỹ Thiện nguyện.docx`.
- Local Hoa Yen future plan: `docs/PHẦN 2 CHƯƠNG TRÌNH  02 năm thực hiện Quỹ Thiện nguyện TIẾP THEO.docx`. It describes proposed 2027–2028 work. Both original DOCX files are ignored by Git; no public delivery copy is included.
- The Cao Van Lau poster credits direction to XULONG, Thanh's team. November 15 is the performance date and January 2025 the certificate date, confirmed by Thanh. The poster stays in the Creative story with this context.
- The Top 5% certificate is explicitly captioned Grade 11, Semester 1, AY 2025–2026.

Goal: use real documentation to make the portfolio feel lived-in rather than template-like.

Do not use generic stock photos.
Do not use AI-generated imagery as fake evidence of real research / service / performance.

## Folder structure suggestion

```text
/public/images/
├── portrait/
├── medical-ai/
├── phytophthora/
├── molebio/
├── hoa-yen/
├── frc/
├── creative/
├── programs/
└── awards/
```

Use descriptive filenames.
Example: `phytophthora-field-sampling-lam-ha-01.jpg`

Avoid: `IMG_7482.jpg`

## 1. Hero / Portrait

Needed:
- 1 strong portrait
or
- 1 real lab / research portrait if it represents Thanh naturally

Preferred:
- clean background
- not over-formal
- enough negative space for crop
- no fake lab-coat staging

Potential ratios:
- portrait 4:5
- landscape 3:2 alternative

## 2. Medical AI — IMAGE

Priority visuals:
1. verified research pipeline / study diagram
2. dermoscopic example grid that is safe and properly sourced / anonymized
3. experiment comparison chart
4. research timeline figure
5. code / training screenshot only if it adds meaning
6. manuscript submission / paper-related visual only if public-safe

Avoid:
- random AI brain graphics
- generic neural-network art
- stock doctor / X-ray images unrelated to the study

Potential image slots:
- 1 hero visual
- 1 pipeline
- 1 result chart
- 1 research-path figure
- 1 optional manuscript/status visual

## 3. Phytophthora — ORGANISM

High priority:
- durian farm / field context
- symptomatic leaf / trunk
- field sampling
- sample handling
- Petri dishes
- microscopy
- lab setup

Narrative sequence:
FARM → SYMPTOM → SAMPLE → CULTURE → OBSERVE → REVISE

Preferred: 5–8 strong photos, not dozens.

Avoid displaying unverified old experimental result images as if they prove the current hypothesis.

Caption clearly when an image is:
- field context
- protocol step
- preliminary observation
- failed / contaminated isolation
- repeat attempt

## 4. MoleBio — LEARNER

High priority:
- students pipetting
- microscope work
- DNA extraction / PCR / gel activity
- workshop group
- terrarium Science Fair
- 3D DNA model
- group photo
- club website screenshot if useful

Preferred: 6–10 images.

Goal: show progression from individual practice to group learning.

Privacy: use images approved for school / public use. Avoid unnecessary identifiable close-ups if permission is unclear.

## 5. Hoa Yen — COMMUNITY

High priority:
- water-safety / life-jacket activity
- Mid-Autumn 2024
- elderly / community care
- Lam Dong rural lighting / gifts
- Mid-Autumn 2026
- volunteers / organizers
- wide event photography

Preferred: 8–12 strong images.

Privacy / dignity:
- avoid exploitative close-ups
- prefer respectful, contextual, organization-approved / publicly posted images
- be especially careful with children
- do not publish names / identifying details of beneficiaries unless explicitly approved

## 6. FRC

Optional:
- council meeting
- group photo
- workshop / leadership planning
- anonymized feedback-process visual

Do not make FRC visually compete with Hoa Yen on the homepage.

## 7. Creative — AUDIENCE

High priority:
- Cao Van Lau musical
- Hoa Chi
- Khoi Sac 27 rehearsal / approved production photos when available
- wide stage photo
- costume / rehearsal detail
- group / cast image

This section can support:
- larger photography
- darker tonal treatment
- varied crop ratios

Avoid generic theatre-stock imagery.

Selected October 24 delivery assets:
- `public/images/selected/hoa-chi-stage-preparation.webp` — 720 × 1280, about 89 KB; authentic Hỏa Chí stage-make-up preparation photograph. Thanh explicitly corrected the production attribution; it is not a Cao Văn Lầu image. The selected image retains the same photographed pixels under the corrected filename. Original `public/images/creative/preparation.jpg` remains unchanged and ignored by Git.
- `public/images/selected/molebio-bottle-terrarium.webp` — 720 × 768, about 35 KB; crop from `public/images/molebio/terrariums.jpg`, shown small beneath the final MoleBio reflection title.

- Hỏa Chí vocal-rehearsal video, supplied by Thanh: `https://res.cloudinary.com/m6yc0cyk/video/upload/c_limit,w_960/q_auto/f_auto/v1792830094/practice.mp4`.
- Exact user-supplied video caption: “Somewhere in these rehearsals, I discovered I could actually sing.”
- Verified delivery metadata: 540 × 960 (9:16 portrait), 116.367 seconds, H.264 video with an audio track. The optimized remote file is 19,169,532 bytes; no video was saved to the repository.
- Cloudinary's authentic two-second poster is `https://res.cloudinary.com/m6yc0cyk/video/upload/so_2,c_limit,w_960/q_auto/v1792830094/practice.jpg` — 540 × 960 JPEG, 28,378 bytes. It is delivered directly from Cloudinary.
- Cao Văn Lầu retains its original production poster and First Prize certificate. Its performance footage is lost; do not assign the Hỏa Chí preparation image or vocal-rehearsal video to it.

Dragon voiceover audio, subtitle/caption files, and the original play script remain unavailable. Do not generate substitutes. Keep large recording originals outside the deployment tree; use optimized remote delivery URLs and authentic poster/caption assets. Verify dimensions, duration, and other media metadata from the actual asset rather than inventing them. No browser playback result is established by this asset inventory.

## 8. Awards / Certificates

Use sparingly.

The website does not need a wall of certificate scans.

Prefer:
- small selected evidence links
- cropped certificate thumbnails only when useful
- résumé carries the full list

## 9. Drive workflow

Recommended:
- keep original archive in Google Drive
- select only public-safe assets
- download / optimize chosen images into `/public/images`
- keep filenames descriptive
- do not use Google Drive as the site's image CDN

For a modest portfolio, local optimized images are simplest.

## 10. Image optimization

When integrating:
- use Next.js `<Image>`
- define dimensions / aspect ratios
- avoid layout shift
- use `object-fit` intentionally
- use meaningful alt text
- do not distort
- generate WebP/AVIF through the framework where appropriate

Do not aggressively compress scientific figures until text becomes unreadable.
