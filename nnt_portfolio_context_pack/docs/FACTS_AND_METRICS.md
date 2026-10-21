# Facts and Metrics — Canonical Portfolio Reference

This is the primary numerical / status reference for the portfolio.

Tags:
- **[VERIFIED]** = supported by current documentation or explicit current evidence supplied by Thanh.
- **[USER-CONFIRMED]** = explicitly confirmed by Thanh but not necessarily present in the same formal document.
- **[ONGOING]** = accurate as a current status but subject to change.
- **[NEEDS-CONFIRMATION]** = conflicting or incomplete records; do not publish as settled fact.

---

# Education

**[VERIFIED / RECENT RESUME]**
- School: Lawrence S. Ting School (Dinh Thien Ly Secondary and High School)
- Location: Ho Chi Minh City, Vietnam
- Attendance: 2023–2027
- Grade 9 GPA: ~9.6/10
- Grade 10 GPA: ~9.5/10
- Grade 11 GPA: ~9.6/10
- Academic standing: Top 5% of grade for four consecutive years
- IELTS: 7.5
- AP Biology: 5
- AP Calculus BC: 5
- AP Statistics: 4
- AP exams self-studied; school does not offer AP courses
- Official AP report supplied October 2026 confirms Biology 5, Calculus BC 5, Statistics 4, all taken in 2026, and AP Scholar (2026). Calculus AB 5 is a subscore, not an additional AP exam.

**[VERIFIED — OFFICIAL SCORE REPORT SUPPLIED OCTOBER 2026]**
- SAT, September 12, 2026: **1480 / 1600**.
- Math: **800 / 800**; Reading and Writing: **680 / 800**.
- This resolves the previous 1480/1490 conflict in favor of 1480. The reports are private local sources; publish score text, not the original PDFs or personal identifiers.

---

# Medical AI

**[VERIFIED / USER-CONFIRMED]**
- Research start: Nov. 2023
- Current role: Student Researcher
- Current manuscript role: **First Author**
- Advisor: Bach-Tung Pham, Ph.D.
- Advisor affiliation: Department of Computer Science and Information Engineering, National Central University, Taiwan

## Manuscript

**[VERIFIED BY SUBMISSION-PORTAL SCREENSHOT PROVIDED OCT. 2026]**

Title:
**Photometric Augmentation and Appearance Regularization for Self-Supervised Skin-Lesion Classification**

Journal:
**Computer Methods and Programs in Biomedicine**

Submission date shown:
**October 10, 2026**

Article type shown:
**Full Length Article**

Author order shown:
1. Ngoc-Thanh Nguyen
2. Bach-Tung Pham — corresponding author
3. Huy-Hoang Vo
4. Jia-Ching Wang

Status wording allowed now:
**submitted**

Do not use:
- published
- accepted
- peer-reviewed
- under review

unless a later status is supplied.

## Early progression

**[USER-CONFIRMED]**
FER-2013:
- 28,709 images
- seven emotion classes
- early pretrained-CNN / EfficientNet work
- webcam inference prototype

2024 augmentation study:
- approximately 36 controlled runs

## Current study data

**[VERIFIED / USER-CONFIRMED]**
Self-supervised pretraining:
- **401,059 unlabeled ISIC 2024 images**

Labeled downstream total:
- **33,569**

Split:
- train: **22,777**
- validation: **2,554**
- independent ISIC 2019 test: **8,238**

Task:
- melanoma vs non-melanoma

Experimental conditions:
- **6** current controlled conditions

Experiment scale:
- **200+ full training experiments**
- approximately **600 GPU-hours**

Current independent-test single-seed F1:
- baseline: **0.5522**
- highest current: **0.5795**
- relative increase: approximately **4.9%**

Important:
- AUROC trade-off exists
- result is single-seed
- further / multi-seed validation remains important

Attribution:
- Barlow Twins implementation began from official Keras example and was adapted
- do not claim the core method was invented or wholly implemented from scratch
- Thanh adapted the end-to-end pipeline, designed the experimental comparisons, debugged training/memory/convergence issues, and evaluated the results under research supervision.
- The 200+ experiments and compute total span the broader skin-cancer work. Keep them distinct from the six final controlled conditions and current single-seed evaluation.

---

# Phytophthora / Durian Research

**[VERIFIED / USER-CONFIRMED]**
- Start: May 2024
- Status: ongoing
- Team: **2 students**
- Thanh role: Team Lead & Primary Researcher
- Location: Lam Ha, Lam Dong
- Pathogen: *Phytophthora palmivora*
- Candidate biocontrol organism: *Bacillus subtilis*

Advisor:
- Lê Phước Thạnh, Ph.D.
- Department of Plant Protection
- College of Agriculture
- Can Tho University

Research mentor:
- Trương Phúc Thịnh
- B.Sc. in Plant Protection
- Can Tho University

Current result status:
- **no reliable validated inhibition result should be claimed**
- repeated pathogen-isolation attempts
- inconsistent isolation results
- seasonal constraints
- workflow / protocol revision
- resampling / repeat isolation before stronger downstream claims

International Science Exchange:
- 2025
- approximately **1 of ~15** LSTS students selected
- current résumé says a short English presentation of the preliminary study was delivered to visiting partner schools from Taiwan

---

# GFP Fluorescence / Hygrophila polysperma Proposal

**[USER-CONFIRMED IN OCTOBER 2026; ORIGINAL DOCX PROVIDED]**
- May–July 2026 · Independent research proposal.
- Proposed transient GFP expression in Hygrophila polysperma through Agrobacterium-mediated gene transfer.
- Developed a literature review and substantial written research proposal, with objectives and a proposed experimental approach.
- The complete proposal and its technical artifacts remain private local sources; they are excluded from the website and current Git tree by Thanh's October 22 instruction.
- Scientific supervisor named in that proposal: Nguyễn Thị Thảo Sương.
- Subsequent implementation discussions: Dr. Trần Trọng Tuấn, Institute of Tropical Biology, Ho Chi Minh City, and Dr. Bùi Thế Vinh; both were willing to support implementation.
- These discussions were not completed laboratory collaboration or experimental supervision.
- Main obstacle: obtaining the GFP plasmid. Dr. Tuấn explained procurement and import arrangements could take several months.
- Summer timing and additional practical constraints associated with being under 18 made the plan infeasible within the available research window.
- Stopped by July 2026 without conducting the experiment. No experimental results obtained.
- GFP fluorescence requires excitation light. This was not bioluminescence or a proposal for independently light-producing plants.
- Do not infer a categorical legal prohibition on import from the procurement/timing obstacle.

Allowed public framing:
**“The Unseen.” — Not everything worth exploring can be seen yet.**

Standalone chapter after the Five Scales, using the existing `/research/gfp-proposal` URL. It is not a sixth scale and is no longer a Phytophthora side story.

Public status: **Research proposal — Experiment not conducted.**
No transformed plant, validated hypothesis, experimental result, or completed laboratory work may be claimed.

---

# MoleBio

**[VERIFIED / USER-CONFIRMED]**
Predecessor club:
- ~16 members
- 2024–2025
- lecture / self-study-heavy

MoleBio:
- Founder & President: 2025–2026
- ~20 members
- ~80% newly recruited
- 36 weekly sessions
- 80 min/session
- approximately 48 scheduled programming hours

**[USER-CONFIRMED OCTOBER 22, 2026]**
- The Listen → Practice → Beyond sequence connects the earlier club, its hands-on relaunch, and separate laboratory learning experiences. This is a conceptual sequence, not a claim that external training occurred after the presidency or was organized by MoleBio.
- Thanh initially pursued an iGEM direction, then discussed abandoning it with the core team after recognizing that many members wanted more practical, accessible learning.
- School rules prevented continuing as president in Grade 12. iGEM became a required focus the following year, and nearly all members from the team Thanh had led chose to leave.
- The approved reflection expresses pride in that year's shared environment and regret about its continuity. Do not claim permanent club collapse or portray iGEM or the school as villains.

Methods / skills taught or practiced:
- lab safety
- pipetting
- centrifugation
- DNA extraction
- purification
- PCR
- gel electrophoresis
- microscopy

Osmosis / microscopy workshop:
- 60+ registrations
- 25 lab spots

Science Fair:
- 7-member club team
- ~30 participants
- mini terrariums
- recycled plastic bottles / locally collected materials

Student-led side projects:
- website prototype
- physical / 3D DNA model

**[USER-CONFIRMED OCT. 15, 2026]**
Workshop preparation included compiling information into a document, making slides, contacting the teacher at MSC, visiting in person to check the facilities, and then teaching the students. The full name of MSC is not supplied; do not invent an expansion.

Do not claim fundraising revenue from the DNA model.

---

# Hoa Yen Charity Fund

**[VERIFIED / USER-CONFIRMED]**
Role:
- Founder & President
- Apr. 2024 — Present

Organization size:
- ~15 initial core members
- ~25 current core members
- ~20–25 volunteers may participate per event

## Official 3-year report totals

**[VERIFIED]**
- **6 documented major programs**
- **330+ documented beneficiary participations**
- approximately **VND 284,000,000 in documented total program expenditures / support**

Definition:
VND 284M is **not fundraising revenue**.

Rough direct-support subtotal from documented line items:
- approximately **VND 192M**
- use only with a clear definition if needed

## 2024 Mid-Autumn — An Binh

**[VERIFIED]**
- 20 Hoa Yen organizers
- 7 volunteers
- 50 children
- VND 43M total program cost

## Children's Day 2024 — Ninh Kieu / Cai Rang

**[VERIFIED]**
- 10 organizers
- 3 volunteers
- report lists 30 children
- report also notes scholarships / gifts to 3 students
- VND 32M total program cost

## Elderly / community care 2024

**[VERIFIED]**
- 15 organizers
- 3 volunteers
- 70 beneficiary participations
- 50 people in elderly-center care activity
- 20 difficult workers / night sanitation workers visited
- VND 54M total program cost

## Lam Dong 2025

**[VERIFIED]**
- 20 organizers
- 10 local volunteers
- report lists 30 beneficiaries
- **5 lighting sets + installation**
- gifts to 20 residents
- VND 50M total program cost

Do not convert this into “50+ households” unless separate verified evidence is supplied.

## Mid-Autumn 2026 — Cai Rang Floating Market

**[VERIFIED]**
- 20 organizers
- 10 volunteers
- **150 children**
- 150 gifts
- 10 scholarship / gift packages
- VND 100M total program cost

### Additional 2026 Mid-Autumn acknowledgment

**[VERIFIED BY USER-SUPPLIED PHOTOGRAPH, OCTOBER 2026]**
- Source: `public/images/hoa-yen/thucamta.jpg`.
- Issuer: Cai Rang Ward Youth Union.
- Letter date: September 18, 2026.
- Addressed to Nguyen Ngoc Thanh and the Hoa Yen Charity Fund.
- Acknowledges 100 Mid-Autumn gift packages and 10 scholarships for children in difficult circumstances in Cai Rang Ward.
- The report separately records 150 children and 150 gifts. The scope of the letter's 100 gift packages has not been reconciled with that report; keep these source-specific counts separate and do not add them together.
- Life-jacket documentation remains a separate record.

## Dong Nai 2026

**[VERIFIED]**
- Hoa Yen participation
- VND 5M contribution/support
- beneficiary count not specified in the report

## Water-safety / life-jacket activity

**[USER-CONFIRMED OCT. 15, 2026; CONTEMPORARY COVERAGE SUPPLIED]**
- **100 life jackets**, replacing the older 50+ lower bound.
- Cai Rang Floating Market
- Hoa Yen participated in the local water-safety campaign.
- Thanh's supplied article: https://giaoducthoidai.vn/can-tho-tuyen-truyen-an-toan-giao-thong-tang-qua-thuong-ho-cho-noi-cai-rang-post681418.html
- Giáo dục & Thời đại, April 30, 2024, describes nearly 100 life jackets distributed at the joint local activity. It does not name Hoa Yen. The exact 100 and Hoa Yen's involvement are user-confirmed; credit the outcome to the campaign rather than implying exclusive delivery by Hoa Yen.
- The separate ward letter's gift-package count does not document life jackets.

Allowed to use:
“Hoa Yen took part in a local water-safety campaign at Cai Rang Floating Market. The campaign distributed 100 life jackets...”

Do not substitute a different total unless direct Hoa Yen evidence supports it.

## Older unreconciled financial claims

**[DO NOT USE AS PRIMARY TOTALS WITHOUT RECONCILIATION]**
- “$2,500+ contributions/support”
- “$1,200 elderly care fund”

These overlap awkwardly with the VND 284M documented program-expenditure figure and should not appear beside it without clear accounting definitions.

October 15, 2026: Thanh says the $1,200 is **likely included** in the VND 284M. This is not a confirmed accounting reconciliation; do not add it as a separate total.

## Program report and future plan supplied October 2026

- `docs/PHẦN 1 báo cáo kết quả 03 năm thực hiện Quỹ Thiện nguyện.docx` is the six-program report supporting the existing figures above. Its expenditure/support line items sum to VND 284M. It documents five lighting sets and installation, not 50+ households.
- `docs/PHẦN 2 CHƯƠNG TRÌNH  02 năm thực hiện Quỹ Thiện nguyện TIẾP THEO.docx` is a **2027–2028 future plan**. Proposed activities include academic support for students in remote areas, recurring holiday programs, practical support for Cai Rang traders, and other civic/environmental initiatives. Do not present the plan as completed impact.
- The original DOCX reports remain local and ignored by Git. Use their supported facts and clearly labeled future plans; public distribution of the raw files has not been authorized.

---

# Family Representative Council

**[VERIFIED / USER-CONFIRMED]**
- F08 Representative
- May 2024 — Present
- 32 representatives total
- 4 Houses × 8 Families
- high-school community: 1,000+ students
- 8-person Content / Documentation Committee
- elected annually

Contributions:
- collect / synthesize student feedback
- proposed online feedback forms
- well-being / onboarding framework
- Council feedback contributed to pool cleaning and shared-seating maintenance
- helped draft FRC vision / mission framework during leadership training

Avoid claiming Thanh alone caused facility changes.

---

# Stem Cell Summer School 2024

**[VERIFIED / USER-CONFIRMED]**
- Jul. 8 — Aug. 12, 2024
- Stem Cell Institute, University of Science, Vietnam National University Ho Chi Minh City
- **47 selected from nearly 200 applicants**
- interview process
- seminars
- study planning
- lab experimentation
- data analysis

Preferred public title:
**Selected Participant**
unless stronger official wording is supplied.

---

# Molecular Biology Course 2025

**[USER-CONFIRMED]**
- Jun. 16–20, 2025
- ~25–30 students
- interview-selected
- DNA extraction
- PCR
- gel electrophoresis
- microscopy
- phylogenetic analysis

Preferred public title:
**Selected Participant**
unless stronger official wording is supplied.

---

# Binh Phu Internship

**[RECENT RESUME / USER-CONFIRMED]**
- Sep. 2025
- pharmaceutical formulation exposure
- tablet friability
- hardness
- moisture content
- manufacturing / quality-control exposure

---

# Performing Arts

## Cao Van Lau / Beauty of Vietnamese Culture

**[VERIFIED / USER-CONFIRMED]**
- Performance: November 15 (year not explicitly reconfirmed); First Prize certificate: January 2025.
- XULONG is the team's name, not a separate director's name; clarified by Thanh October 15, 2026.
- 6-student team
- Team Lead, Writer, Director & Performer
- 15-minute musical
- grade-wide project ~300 students
- First Prize

## Hoa Chi

**[USER-CONFIRMED]**
- Nov. 2025
- Main Antagonist
- audition-selected
- 50–60-person production
- 1+ month rehearsal
- audience 1,000+
- Fantasy House placed 1st of 4 Houses
- User-confirmed memory, October 15, 2026: staying after school to rehearse was tiring but very fun because everyone was trying their best.

## Khoi Sac 27

**[ONGOING / USER-CONFIRMED]**
- Sep. 2026 — May 2027
- Main Antagonist (Cast)
- selected through 2 audition rounds
- current résumé says rehearsing as of Oct. 2026

Do not claim final performance outcome yet.

## Tao Quan

**[USER-CONFIRMED]**
- Co-writer & Performer
- audience ~280
- placed 3rd of 8 Families

## ChemMyth

**[USER-CONFIRMED]**
- Invited Guest / Main Performer
- ~60 attendees
- ~2 weeks preparation

---

# DONMUN

**[USER-CONFIRMED / RECENT RESUME]**
- 2026
- SPECPOL
- Delegate of India
- ~15 delegates
- Honorable Mention
- current résumé says primary sponsor of committee's only passed draft resolution

---

# Awards / Honors

**[RECENT RESUME / USER-CONFIRMED]**
- LSTS Academic Scholarship — four consecutive years, 2023–2026
- PIMSO Science Gold — 2025
- IMOCSEA–ISOCSEA National Round Science Gold (Grade 12) — 2026
- Most Exemplary Student of House Fantasy — 1 of 4 school-wide recipients, 2025
- StemCo Chemistry Gold — 2025
- StemCo Biology Silver — 2025
- Exemplary Young Leader — 2026
- First Prize — Beauty of Vietnamese Culture
- DONMUN Honorable Mention — 2026
- Active Participation in Community Service — 2025

**[NEEDS-CONFIRMATION]**
- Third Prize — Mathematics, 30/4 Olympic Competition: exact year
- Student with Excellent Demonstration of Six Core Values: year conflict across drafts

## Scope of displayed academic records

- The displayed Top 5% certificate covers **Grade 11, Semester 1, AY 2025–2026**, issued January 14, 2026. It is one record within the broader four-year standing reported in the résumé.
- The displayed scholarship certificate covers AY 2025–2026; the four-year scholarship claim is a broader user-confirmed record.
- DONMUN 2026 Honorable Mention may be listed as text; no corresponding certificate is currently supplied for display.

## Final résumé and editorial audit

The final two-page PDF supplied October 15, 2026 is `docs/Resume Nguyễn Ngọc Thành.pdf`. On October 16, Thanh requested that résumé links open the Google Drive PDF viewer at `https://drive.google.com/file/d/1HIv2TwP5ZoX6nKdGstQ1LXpXr6HPol9g/view?usp=sharing`; the local PDF remains an archive. This is the latest personal reference; conflicts with primary evidence remain subject to the constraints above and `OPEN_QUESTIONS.md`. See `EDITORIAL_REVIEW_2026-10.md` for the decisions made in that revision.
