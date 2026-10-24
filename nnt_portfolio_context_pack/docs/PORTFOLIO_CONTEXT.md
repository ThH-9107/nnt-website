# Portfolio Context — Nguyen Ngoc Thanh

Last consolidated: **October 2026**

This document gives narrative context for the portfolio. It is intentionally broader than a 2-page résumé but narrower than Thanh's full private life history. It contains information useful for public academic/professional storytelling.

## 1. Core identity

Nguyen Ngoc Thanh is a high-school student at **Lawrence S. Ting School (Dinh Thien Ly Secondary and High School), Ho Chi Minh City**, Class of 2027.

The strongest unifying academic identity is:

> **A biology-focused student researcher who uses both computational and experimental methods to work with complex biological evidence.**

A recurring pattern across Thanh's strongest work is:
- asking a biological question,
- building a method to test it,
- encountering noisy / incomplete / inconvenient evidence,
- troubleshooting rather than forcing a clean conclusion,
- revising the method,
- and communicating the work to other people.

The portfolio should **not** pretend that all projects are the same field.

The connection between Medical AI and plant pathology is methodological:
- both involve biological systems,
- both require experimental discipline,
- both include uncertainty,
- both reward reproducibility,
- and both show Thanh learning not to overclaim.

Useful internal narrative:

> Biology is the subject; computation and experimentation are the tools; uncertainty and iteration are recurring parts of the research process.

Do not make this sound grandiose or philosophical for its own sake. The projects should prove it.

### October 15 editorial direction

Keep this as research context, rather than forcing every activity into science. Hoa Yen is community service and organization; MoleBio is science education; theatre is a creative interest in its own right. Use concrete personal contributions and distinct conclusions for each story. The homepage introduction remains conversational. The final résumé is the latest personal reference, with unresolved discrepancies tracked separately.

---

## 2. Medical AI / Computer Vision Research

### Role and duration

**Student Researcher / First Author**  
**Nov. 2023 — Present**

Research advisor:  
**Bach-Tung Pham, Ph.D.**  
Department of Computer Science and Information Engineering  
National Central University, Taiwan

The research journey is substantially longer than the current manuscript.

### 2023–2024: first computer-vision project

Thanh began with **FER-2013 facial emotion recognition**.

Known details:
- FER-2013 dataset
- 28,709 face images
- seven emotion classes
- tested pretrained convolutional models, including EfficientNet variants
- roughly ~70% accuracy in early work; old result files are not the portfolio's main evidence and should not be emphasized as a current benchmark
- built a webcam inference prototype that placed a face box and emotion label on live video
- early concept: adolescent emotion-management / classroom feedback application

This period matters mainly as the starting point of a longer research progression.

### 2024: controlled image-augmentation study

Thanh shifted from “can I make a model?” toward “how do I test a modeling choice?”

Research question: whether geometric or photometric image augmentation had a clearer effect on performance.

Approximate scale:
- ~3 models
- ~4 augmentation variants
- ~3 repeats
- roughly **36 controlled runs**

The result was **inconclusive / not sufficiently distinctive**.

Its significance is that it pushed Thanh toward:
- more careful controls,
- optimizer / learning-rate behavior,
- warmup,
- callbacks / early stopping,
- mixed precision,
- data pipelines,
- and better experimental methodology.

### Late 2024–2025: move into skin-lesion classification

Thanh became interested in ISIC skin-lesion datasets and melanoma classification.

Work included:
- ISIC data
- classification pipelines
- EfficientNet / ResNet experimentation
- patient-aware / controlled splitting work
- learning-rate schedules
- TFRecords
- mixed precision
- inference pipelines
- segmentation / attention ideas explored during earlier phases

The project progressively narrowed from broad CNN experimentation into self-supervised learning.

### 2025–2026: Barlow Twins and self-supervised learning

Thanh explored Barlow Twins for dermatology / skin-lesion representation learning.

Important attribution rule:
- Thanh **did not invent Barlow Twins**.
- Thanh **did not implement the core method entirely from scratch**.
- The Barlow Twins implementation began from the **official Keras example** and was substantially adapted into Thanh's research pipeline.

Thanh independently worked through:
- optimizer behavior,
- gradient accumulation,
- oversampling,
- memory limits,
- convergence issues,
- batch-size constraints,
- training / fine-tuning pipeline behavior,
- repeated debugging and reruns.

Two earlier teammates eventually stopped participating because of workload; the later work was driven primarily by Thanh under research supervision.

### 2026: current study

Current paper title:

> **Photometric Augmentation and Appearance Regularization for Self-Supervised Skin-Lesion Classification**

Current status:
- **first author**
- **formally submitted October 10, 2026**
- journal: **Computer Methods and Programs in Biomedicine**
- submission portal shows **Full Length Article**

Submission-portal author order supplied by Thanh:
1. Ngoc-Thanh Nguyen
2. Bach-Tung Pham — corresponding author
3. Huy-Hoang Vo
4. Jia-Ching Wang

Do not update the manuscript status beyond **submitted** unless Thanh provides a later portal status.

#### Current study framing

The current work combines:
- Barlow Twins self-supervised learning,
- **Planckian Jitter** as a photometric augmentation,
- an **appearance-regularization / skin-tone-aware auxiliary component**.

Use the paper's current framing (“appearance regularization”) unless a more specific fairness claim is explicitly supported by the final study.

#### Data scale

Self-supervised pretraining:
- **401,059 unlabeled ISIC 2024 images**

Downstream labeled images:
- **33,569 total**
- 22,777 train
- 2,554 validation
- 8,238 independent ISIC 2019 test images

Task:
- melanoma vs non-melanoma

#### Experimental design

Current controlled comparison includes six conditions based on:
- baseline Barlow Twins
- Planckian Jitter
- appearance / auxiliary regularization component
- combined variants with multiple alpha settings

Only show the exact condition table if it matches the current manuscript / verified experiment files.

#### Experiment scale

Use:
- **200+ full skin-cancer training experiments**
- approximately **600 GPU-hours**

A larger number of debugging / failed / partial runs existed, but do not inflate the formal experiment count without a reason.

#### Current result

Independent test set, current **single-seed** preliminary result:
- baseline F1: **0.5522**
- highest current F1: **0.5795**
- relative F1 increase: approximately **4.9%**

Important limitation:
- AUROC decreases / shows a trade-off
- result is not yet evidence of universal improvement
- multi-seed validation / further validation remains important

This limitation is a strength of the research story because Thanh recognized the trade-off rather than cherry-picking one metric.

#### Good research-story themes

Good:
- progression from prototype to methodology
- learning from inconclusive work
- scale of experimentation
- ownership of pipeline adaptation and debugging
- independent-test result
- trade-off
- first-author submitted manuscript
- uncertainty that remains

Avoid:
- “AI model became better in every way”
- “solved melanoma diagnosis”
- “invented a new self-supervised method”
- “published paper” unless status changes

---

## 3. Phytophthora / Durian Plant-Pathology Research

Working title used in recent materials:

> **Biological Control of Phytophthora palmivora in Durian Using Bacillus subtilis — Lam Ha, Lam Dong**

Earlier Vietnamese title:

> Khảo sát khả năng kháng nấm Phytophthora palmivora của Bacillus subtilis trên cây sầu riêng ở khu vực Lâm Hà, Lâm Đồng

Role:
- **Team Lead & Primary Researcher**
- **2-student team**
- **May 2024 — Present**

Faculty advisor:  
**Lê Phước Thạnh, Ph.D.**  
Department of Plant Protection, College of Agriculture, Can Tho University

Research mentor:  
**Trương Phúc Thịnh, B.Sc. in Plant Protection, Can Tho University**

### Core research question

Investigating whether **Bacillus subtilis** can inhibit **Phytophthora palmivora**, an important durian pathogen.

### Work completed / attempted

- field sampling in Lam Ha, Lam Dong
- collection of symptomatic durian plant material
- repeated pathogen-isolation attempts
- laboratory culturing / observation
- protocol revision after inconsistent isolation
- attention to seasonal field constraints
- preparation to repeat sampling / isolation before advancing to stronger claims

### Current scientific status

**There is no reliable validated inhibition result that should be presented as a scientific finding.**

The strongest honest story is:
- fieldwork,
- difficult isolation,
- inconsistent cultures,
- seasonal constraints,
- revising the workflow,
- prioritizing reproducibility before molecular identification / antagonism claims.

Older preliminary PCR / microscopy / culture work may exist in lab history, but Thanh intends to redo the experimental results. Do not present those older observations as validated final evidence unless Thanh explicitly reinstates them.

### International Science Exchange

Thanh was selected as approximately **1 of ~15 Lawrence S. Ting School students** for the **2025 International Science Exchange Program**.

Current résumé wording says he delivered a short English presentation of the preliminary study to visiting partner schools from Taiwan.

---

## 4. GFP Fluorescence / Hygrophila polysperma Proposal

This is a **May–July 2026 independent research proposal that did not reach experimentation**, clarified by Thanh in October 2026.

It should be treated as an optional case study, not equivalent to an executed research project.

The question was whether an aquatic plant, Hygrophila polysperma, could transiently express GFP through Agrobacterium-mediated gene transfer. This was GFP fluorescence under suitable excitation light, not bioluminescence. Unpublished experimental-design details are omitted from this public context.

He developed a literature review and substantial formal proposal with objectives and a proposed experimental approach. The original document names Nguyễn Thị Thảo Sương as scientific supervisor. The complete proposal and technical artifacts are private local sources, excluded from the current public/Git tree.

To investigate feasibility, Thanh met with Dr. Trần Trọng Tuấn from the Institute of Tropical Biology in Ho Chi Minh City and consulted Dr. Bùi Thế Vinh. Both were willing to support the project. These conversations were implementation discussions, not completed laboratory collaboration or experimental supervision.

Obtaining the GFP plasmid was the main obstacle. Dr. Tuấn explained that procurement and import arrangements could take several months. The available summer window and practical constraints associated with being under 18 made the project infeasible within that timeline. By July 2026, Thanh stopped and returned to other research.

Potential portfolio framing:

> **The Unseen. — Not everything worth exploring can be seen yet.**

The public story is a personal account of developing a question, seeking implementation guidance, encountering the procurement/timing obstacle, and stopping before experimentation. It does not publish or link the full proposal, technical workflow, protocols, plasmid designs, or unpublished design details. No fictional cover, fluorescent-plant photograph, or laboratory result should be generated.

The story has one canonical route and matching overlay at `/research/gfp-proposal`, reached from a separate homepage chapter after the Five Scales. It is not a sixth scale. The former ORGANISM branch and Phytophthora teaser are removed to keep the stories distinct.

Do not claim any experimental result.
Do not claim a genetically modified or GFP-expressing plant was produced. Do not describe the plasmid as categorically illegal to import.

---

## 5. MoleBio — Molecular Biology Club

School: Lawrence S. Ting School

Timeline:
- **2024–2025:** member of predecessor Molecular Biology Club
- **2025–2026:** Founder & President of relaunched **MoleBio**

### Before the relaunch

The predecessor club had approximately:
- **16 members**
- lecture / self-study-heavy format
- limited hands-on laboratory activity

Thanh participated as a regular member and identified the lack of practical work as a weakness.

### Relaunch

Thanh redesigned / relaunched the club as **MoleBio**.

Approximate new membership:
- **20 members**
- roughly **80% newly recruited**

Programming:
- **36 weekly sessions**
- **80 minutes each**
- approximately **48 hours** of scheduled programming

Hands-on content included:
- laboratory safety
- pipetting
- centrifugation
- DNA extraction
- DNA purification
- PCR
- gel electrophoresis
- microscopy

### Workshops / outreach

Osmosis / microscopy workshop:
- **60+ registrations**
- **25 laboratory spots**
- hypertonic / hypotonic cell environments
- hands-on microscopy / experiment component

Science Fair:
- **7-member MoleBio team**
- approximately **30 participants**
- mini terrariums
- reused plastic bottles
- locally collected / school-garden materials

Student-led side projects:
- club website prototype
- physical / 3D DNA model

Important leadership framing:
Thanh did not only “run sessions.” He redesigned the club around practical work and delegated projects around members' strengths.

In October 2026, Thanh described preparing workshop content in a document, making slides, contacting the teacher at MSC, visiting to check the facilities, and then teaching the students. This is a documented personal example of the work behind the sessions. MSC's full name has not been supplied.

The October 22 refinement presents **Listen → Practice → Beyond** as a conceptual sequence. Beyond includes the 2024 Stem Cell Summer School and September 2025 Binh Phu experience as separate learning environments, not MoleBio programs or a chronological phase after the presidency. The genuine `mole2024.png` classroom image documents the earlier club period.

Thanh's approved ending, **What I Couldn't Carry Forward**, describes initially pursuing iGEM, then discussing abandoning that direction when it did not fit members' interest in practical exploration. School rules prevented continuing as president in Grade 12; iGEM became a required direction the following year, and nearly all former team members chose to leave. Preserve the pride and regret without inventing a resolution, blaming the school, attacking iGEM, or claiming permanent club collapse.

Do not claim fundraising revenue from the DNA model project; that plan was not implemented.

---

## 6. Hoa Yen Charity Fund

Role: **Founder & President**  
Timeline: **Apr. 2024 — Present**

Organization:
- began around ~15 core members
- grew to approximately **25 core members**
- around **20–25 volunteers may participate per event**
- volunteer network has included youth volunteers, university students, community partners, and local businesses

Thanh's role includes:
- overall strategy
- program planning
- action plans
- partner coordination
- volunteer coordination
- resource allocation
- on-site execution

### Officially documented lower-bound impact

The 3-year report documents at least:
- **6 major programs**
- **330+ beneficiary participations**
- approximately **VND 284 million in documented total program expenditures / support**

Important:
**VND 284M is NOT the same thing as money raised.**

It includes program expenditures/support, including gifts, scholarships, care activities, lighting, and organization/logistics.

A rough subtotal of direct-support categories in the documented breakdown is approximately **VND 192M**, but do not use this unless the site specifically needs a direct-support subtotal and the accounting definition is explained.

### Official report programs

#### 2024 Mid-Autumn — An Binh
- 20 Hoa Yen organizers, led by Thanh
- 7 volunteers
- 50 children
- VND 43M total program cost

#### Children's Day 2024 — Ninh Kieu / Cai Rang
- 10 Hoa Yen organizers
- 3 volunteers
- report lists 30 children; also notes scholarship support to 3 students
- VND 32M total program cost

#### Elderly / community care 2024 — Binh Thuy / Ninh Kieu
- 15 Hoa Yen organizers
- 3 volunteers
- 70 beneficiary participations
- 50 people at elderly-care activity
- 20 difficult workers / night sanitation workers visited
- VND 54M total program cost

#### Lam Dong rural support 2025
- 20 organizers
- 10 local volunteers
- report lists 30 local beneficiaries
- **5 lighting sets + installation**
- gifts to 20 residents
- VND 50M total program cost

#### Mid-Autumn 2026 — Cai Rang Floating Market
- 20 organizers
- 10 volunteers
- **150 children**
- 150 gifts
- 10 scholarship / gift packages
- VND 100M total program cost

A separate Cai Rang Ward Youth Union thank-you letter, dated September 18, 2026, is photographed in `public/images/hoa-yen/thucamta.jpg`. It is addressed to Thanh and Hoa Yen and acknowledges 100 Mid-Autumn gift packages and 10 scholarships. Present this as the support recognized in that letter. Its scope has not yet been reconciled with the report's 150 gifts; do not add these counts or silently replace the report figures.

#### “Dem Trang Yeu Thuong” / Dong Nai 2026
- Hoa Yen participation
- beneficiary count not specified in the report
- VND 5M contribution/support

### Water-safety campaign / life jackets

On October 15, 2026, Thanh explicitly confirmed **100 life jackets**, superseding the earlier 50+ figure, and supplied contemporary Giáo dục & Thời đại coverage from April 30, 2024. The article describes nearly 100 distributed during the joint local campaign, without naming Hoa Yen. Public copy credits Hoa Yen's participation and the campaign outcome; it does not imply exclusive delivery by Hoa Yen.

The two supplied Hoa Yen DOCX files distinguish past work from a 2027–2028 plan. The report supports the existing expenditure/support total and five lighting installations. The plan proposes future educational, community, and civic work. Thanh says the $1,200 elderly-care figure is likely included in the overall total; do not add it separately or treat that tentative overlap as settled.

### Other user-confirmed / historical activities

Older résumé drafts also mention:
- waste-for-gifts initiative
- support for “Cham den uoc mo”
- Mai Tam Shelter / children living with HIV
- rural rice support
- elderly support

These may be real but do not all appear cleanly in the 3-year report used for the official totals.

Treat them as secondary narrative material and verify exact scope / metrics before attaching numbers.

### Best narrative

Hoa Yen's story is not “Thanh did many charity events.”

The stronger story:
- an early community / water-safety initiative
- grew into a recurring student-led organization
- recurring work across children, older residents, and rural communities
- increasing organizational scale
- responsibility for planning, coordination, partnerships, and execution

---

## 7. Family Representative Council (FRC)

School: Lawrence S. Ting School

Role:
- **F08 Representative**
- member of **8-person Content / Documentation Committee**
- **May 2024 — Present**

Structure:
- high-school community: 1,000+ students
- four Houses
- each House has eight Families
- 32 elected Family Representatives total
- Thanh represents Family F08
- elected annually

Work:
- collect and synthesize peer feedback
- facilities
- student well-being
- sustainability
- school life
- discussions with school leadership

Initiatives / contributions:
- proposed moving beyond representative-only reporting toward online feedback forms
- contributed to student well-being / onboarding thinking for the House–Family system
- Council feedback contributed to practical facility changes, including pool cleaning and shared-seating maintenance
- helped draft a **vision / mission framework for the FRC** during school leadership training

Preferred portfolio treatment:
do not keep Leadership Camp as a separate major story. Absorb the meaningful output into the FRC story.

---

## 8. Stem Cell Summer School 2024

Institution: **Stem Cell Institute, University of Science, Vietnam National University Ho Chi Minh City**

Dates: **Jul. 8 — Aug. 12, 2024**

Selection:
- **47 selected from nearly 200 applicants**
- interview process

Activities:
- research-group seminars
- scientific discussions
- study planning
- laboratory experimentation
- data analysis
- researcher mentorship

Public-title caution:
The safest role label is **Selected Participant** unless the official program / certificate explicitly supports a stronger title.

Do not casually call Thanh a “Lab Assistant” in this program.

---

## 9. Molecular Biology Course 2025

School: Lawrence S. Ting School  
Dates: **Jun. 16 — Jun. 20, 2025**

Approximate cohort:
- 25–30 students
- interview-selected

Topics / methods:
- molecular biology
- gene technology
- DNA extraction
- PCR
- gel electrophoresis
- microscopy
- molecular data interpretation
- phylogenetic analysis

No need to imply a major capstone research project.

Preferred title: **Selected Participant** unless an official source supports another role.

---

## 10. Binh Phu Pharmaceutical Internship

Organization: **Binh Phu Pharmaceutical Trading & Services Co., Ltd.**  
Timing: **Sep. 2025**

Role used in recent résumé: Laboratory Assistant Intern

Experience:
- exposure to pharmaceutical formulation
- tablet friability testing
- hardness testing
- moisture-content testing
- manufacturing process
- drug identification / quality control exposure

Keep claims modest and supervised.

---

## 11. Performing Arts / Creative Work

Creative work is useful because it shows:
- writing,
- directing,
- performance,
- public communication,
- collaboration,
- comfort inhabiting roles very different from research.

### “The Beauty of Vietnamese Culture” — Cao Van Lau Musical

Performance date: **November 15** (year not explicitly reconfirmed). First Prize certificate: **January 2025**. Thanh clarified that **XULONG is the team's name**, used in the poster's directing credit.

Role:
- Team Lead
- Writer
- Director
- Performer

Team:
- **6 students**

Outcome:
- **First Prize**
- grade-wide project involving roughly **300 students**

Work:
- wrote and directed ~15-minute musical dramatizing Cao Van Lau's life
- performed excerpt from *Da co hoai lang*
- included cai luong performance / duet

Thanh's October 24, 2026 recollection: a Sunday afternoon reading Cao Văn Lầu's Wikipedia page developed into choosing life moments for the musical, writing every dialogue line, and planning each scene's stage setup. Thanh played Cao Văn Lầu. Rehearsing with the team and seeing the planned scenes come alive on stage remain the emotional center of the story, more than the First Prize itself.

The original performance recording was lost after the classmate's Drive folder was deleted. The newly supplied photograph shows stage make-up during preparation; it must not be described as the Sunday research session. The original production poster remains available. The play script has not been supplied to the repository.

### Hoa Chi — Fantasy House Performing Arts

Date: **Nov. 2025**  
Role: **Main Antagonist**

- audition-selected
- approximately **50–60-person** production
- more than one month of rehearsal
- audience: **1,000+ students / teachers / staff**
- Fantasy House placed **1st of 4 Houses**

Thanh's October 2026 recollection: staying after school to rehearse was tiring but very fun because everyone was trying their best. Use this authentic memory without inventing details about specific scenes or the character's psychology.

In the October 24 brief, Thanh added that vocal rehearsals were especially memorable: they brought the unexpected discovery that he could sing, and he recorded the voiceover for a dragon character. These memories should feel playful and personal without implying professional singing credentials. No rehearsal video, dragon audio, or accurate subtitles were present in the repository at this update; render only real configured media.

### Khoi Sac 27

Annual Lawrence S. Ting School Grade-12 performing-arts fundraiser

Role: **Main Antagonist (Cast)**

Selection:
- passed **two audition rounds**

Timeline in current résumé:
- Sep. 2026 — May 2027

As of October 2026, current résumé says rehearsals are ongoing for the May 2027 production.

Do not claim a final performance outcome before it happens.

### Tao Quan

Role: Co-writer & Performer

- performed before ~280 students / teachers
- placed **3rd of 8 Families**

Lower priority than the three major creative items above.

### ChemMyth

Invited Guest / Main Performer, Science Fair live chemistry show

Known:
- ~60 attendees
- ~2 weeks of preparation
- narrative-driven live chemistry demonstrations

Useful but lower priority for a concise portfolio.

---

## 12. DONMUN

Year: 2026  
Committee: SPECPOL  
Delegation: India

Known:
- ~15 delegates
- first MUN
- Honorable Mention
- current résumé says Thanh served as primary sponsor of the committee's only passed draft resolution

Useful as supporting communication / policy activity, not a central portfolio axis.

---

## 13. 2025 Leadership Program in the United States

Dates: **Jul. 6 — Jul. 25, 2025**

Organizations named in certificate / materials:
- The Academy at Harvard Square
- Harvard Student Agencies

Safe wording:
- three-week experiential program
- academic visits to Harvard University and MIT
- business project
- cultural / educational travel

Do not phrase the program as though Harvard University or MIT themselves necessarily operated the entire program unless the source explicitly says so.

---

## 14. Education / Academic Profile

School: **Lawrence S. Ting School (Dinh Thien Ly Secondary and High School)**  
Ho Chi Minh City  
**2023–2027**

GPA in recent résumé:
- Grade 9: ~9.6/10
- Grade 10: ~9.5/10
- Grade 11: ~9.6/10

Academic standing:
- Top 5% of grade for four consecutive years

AP exams:
- AP Biology: 5
- AP Calculus BC: 5
- AP Statistics: 4

School does not offer AP courses; these were self-studied.

IELTS:
- 7.5

SAT:
- official September 12, 2026 report confirms **1480**, Math **800**, Reading and Writing **680**
- the prior 1490 résumé draft is superseded
- 2026 AP report confirms Biology 5, Calculus BC 5, Statistics 4, plus AP Scholar; the Calculus AB 5 is a subscore, not another exam
- full score reports stay private; the homepage presents text scores only

---

## 15. Honors / Awards

Strongest / likely portfolio-worthy items:
- Lawrence S. Ting School Academic Scholarship — four consecutive years, 2023–2026
- Gold Award — Philippine International Math and Science Olympics (PIMSO), Science, 2025
- Gold Award — IMOCSEA–ISOCSEA National Round, Science (Grade 12), 2026
- Most Exemplary Student of House Fantasy — 1 of 4 school-wide recipients across ~1,000+ students, 2025
- Gold — StemCo Summer Chemistry Competition, 2025
- Silver — StemCo Summer Biology Competition, 2025
- Exemplary Young Leader — 2026
- First Prize — “The Beauty of Vietnamese Culture”
- Honorable Mention — DONMUN 2026
- Third Prize — Mathematics, 30/4 Olympic Competition — verify year before publishing
- Community service recognition — 2025

Lower-priority / needs reconciliation:
- “Student with Excellent Demonstration of Six Core Values” — year records conflict in old drafts; verify before publication.

---

## 16. Skills / Interests

Programming / AI:
- Python
- TensorFlow / Keras
- computer vision
- CNNs
- self-supervised learning
- model training / evaluation

Lab / molecular biology:
- DNA extraction / purification
- PCR
- gel electrophoresis
- microscopy
- pipetting
- centrifugation
- laboratory safety

Research:
- literature review
- experimental design
- data analysis
- scientific presentation
- field sampling
- troubleshooting
- reproducibility-focused research

Interests:
- biomedical AI
- molecular biology
- biochemistry
- biotechnology
- theatre
- science communication

---

## 17. What the portfolio should communicate emotionally

Not:
“Look how many things I did.”

Prefer:
“I keep changing the scale of attention, but I keep returning to careful evidence, iteration, and people.”

The portfolio should leave a visitor with:
- scientific curiosity,
- intellectual honesty,
- persistence,
- interdisciplinary range,
- evidence of ownership,
- evidence of real community involvement,
- a human creative side.

Research should remain the intellectual anchor.
