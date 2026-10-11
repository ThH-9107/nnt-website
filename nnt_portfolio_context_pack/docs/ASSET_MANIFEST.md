# Asset Manifest / Image Plan

Status: planning document. Real assets may not yet be present.

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
