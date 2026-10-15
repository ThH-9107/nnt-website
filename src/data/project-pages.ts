import { photos, type PortfolioImage } from "./photography";
import { medicalManuscript } from "./portfolio";

export type Metric = { value: string; label: string; detail?: string };
export type TimelineItem = { period: string; title: string; text: string };
export type GalleryItem = PortfolioImage;
export type StoryChapter = { label: string; title: string; paragraphs: string[] };
export type ProjectStory = {
  kind: "medical-ai" | "phytophthora" | "molebio" | "hoa-yen";
  area: "Research" | "Leadership";
  areaHref: string;
  title: string;
  shortTitle: string;
  period: string;
  role: string;
  introduction: string;
  hero: GalleryItem;
  questionLabel: string;
  question: string;
  questionContext: string;
  metrics: Metric[];
  timelineIntro: string;
  timeline: TimelineItem[];
  chapters: StoryChapter[];
  gallery: GalleryItem[];
  record?: GalleryItem[];
  relatedImages?: GalleryItem[];
  timelineImage?: GalleryItem;
  note: { label: string; title: string; paragraphs: string[] };
  outlook?: { title: string; paragraphs: string[] };
  credits?: { label: string; name: string; detail: string }[];
  next: { label: string; href: string };
};

export const medicalAi: ProjectStory = {
  kind: "medical-ai",
  area: "Research",
  areaHref: "/#research",
  title: "Building and testing a medical-imaging pipeline",
  shortTitle: "Medical AI Research",
  period: "Nov. 2023–Present",
  role: "First Author & Student Researcher",
  introduction: "I began with a webcam emotion-recognition prototype. My current work adapts self-supervised learning for skin-lesion classification, from implementing the pipeline to designing comparisons and interpreting the results.",
  hero: photos.medicalExamples,
  timelineImage: photos.medicalPrototype,
  questionLabel: "Research aim",
  question: "Learning from skin images without labels.",
  questionContext: "Medical-image labels require specialist work. Self-supervised learning uses unlabeled images to learn visual features first, before training a classifier to distinguish melanoma from non-melanoma.",
  metrics: [
    { value: "401,059", label: "unlabeled ISIC 2024 images", detail: "self-supervised pretraining" },
    { value: "33,569", label: "labeled images", detail: "training, validation & test" },
    { value: "200+", label: "full training experiments", detail: "across the wider skin-cancer research" },
    { value: "~600", label: "GPU-hours", detail: "approximate research total" },
  ],
  timelineIntro: "Since 2023, the work has progressed through computer-vision prototypes, medical imaging, and a larger experimental pipeline.",
  timeline: [
    { period: "2023–2024", title: "Starting with a webcam", text: "I explored facial-emotion recognition with FER-2013: 28,709 images in seven emotion classes. Using pretrained EfficientNet models, I built a real-time webcam prototype for an adolescent emotion-management app concept." },
    { period: "2024", title: "Learning to design a comparison", text: "About 36 controlled runs compared geometric and photometric image augmentations. The comparison was inconclusive, so I looked more closely at experimental controls, training behavior, and evaluation." },
    { period: "Late 2024–2025", title: "Moving to medical images", text: "I began melanoma classification with ISIC data and studied the training and inference tools needed for a larger image pipeline." },
    { period: "2025–2026", title: "Working through implementation problems", text: "The move to Barlow Twins brought optimizer, memory, and convergence problems. I debugged the pipeline, including gradient accumulation and oversampling, to get the experiments running reliably." },
    { period: "2026–Present", title: "Testing image appearance", text: "The current study examines Planckian Jitter and appearance regularization. It has developed into a first-author manuscript, submitted in October 2026." },
  ],
  chapters: [
    { label: "01 / My contribution", title: "Adapting the method and running the study", paragraphs: [
      "I adapted Barlow Twins into an end-to-end pipeline for dermoscopic images: close-up images used to examine skin lesions. The core implementation began with the official Keras example; I modified it for pretraining, fine-tuning, and evaluation in this study.",
      "I designed the experimental comparisons and worked through training and memory constraints. Evaluating the runs also meant deciding which observations were reliable enough to interpret, including the trade-off between the two performance measures below.",
    ] },
    { label: "02 / Study design", title: "Six controlled conditions", paragraphs: [
      "Barlow Twins learns visual features from different views of unlabeled images. The current comparison tests a baseline, Planckian Jitter (an image-appearance augmentation), an appearance-regularization component, and combined variants across six conditions.",
      "The labeled data are split into 22,777 training images, 2,554 validation images, and 8,238 independent ISIC 2019 test images. Training, validation, and independent testing have separate roles in the pipeline.",
      "The experiment and compute totals above cover the wider skin-cancer research. The final six-condition comparison is reported here through its current single-seed evaluation.",
    ] },
  ],
  gallery: [photos.medicalComparison, photos.medicalTradeoff],
  note: { label: "Current status / First author", title: "Manuscript submitted October 2026", paragraphs: [
    `“${medicalManuscript.title}” was submitted to Computer Methods and Programs in Biomedicine on October 10, 2026.`,
  ] },
  outlook: { title: "Continuing validation", paragraphs: [
    "Further validation remains ongoing, including work to understand which experimental choices affect the F1–AUROC trade-off.",
  ] },
  credits: [{ label: "Research advisor", name: "Bach-Tung Pham, Ph.D.", detail: "Department of Computer Science and Information Engineering, National Central University, Taiwan" }],
  next: { label: "Phytophthora / Bacillus Research", href: "/research/phytophthora" },
};

export const phytophthora: ProjectStory = {
  kind: "phytophthora",
  area: "Research",
  areaHref: "/#research",
  title: "Following a durian pathogen from field to lab",
  shortTitle: "Phytophthora / Bacillus Research",
  period: "May 2024–Present",
  role: "Team Lead & Primary Researcher · 2-student team",
  introduction: "A field and laboratory study in Lam Ha, Lam Dong, investigating whether Bacillus subtilis can inhibit Phytophthora palmivora, an important durian pathogen.",
  hero: photos.phytophthoraBench,
  questionLabel: "Research aim",
  question: "Testing a biological-control approach in durian.",
  questionContext: "The study investigates whether Bacillus subtilis can inhibit Phytophthora palmivora. To test that, we first need to isolate the pathogen from plant material and grow it consistently in the laboratory.",
  metrics: [
    { value: "2", label: "student researchers", detail: "team led by Thanh" },
    { value: "2024", label: "study began", detail: "field work in Lam Ha" },
    { value: "2025", label: "science exchange", detail: "research communication milestone" },
  ],
  timelineIntro: "I initiated the study and lead our two-student team. Our work connects field sampling in Lam Ha with culture work, experimental planning, and protocol revision.",
  timeline: [
    { period: "May 2024", title: "Starting in Lam Ha", text: "Our two-student team began investigating the durian pathogen through field sampling of symptomatic plant material in Lam Ha, Lam Dong." },
    { period: "2024–2025", title: "Bringing samples into culture", text: "We worked through sample handling, laboratory culturing, and repeated isolation attempts while developing the experimental workflow." },
    { period: "2025", title: "Sharing the preliminary work", text: "I presented the study during the International Science Exchange Program at school." },
    { period: "Present", title: "Revising the workflow", text: "The next round of work focuses on resampling and repeat isolation, ahead of planned identification and inhibition testing." },
  ],
  chapters: [
    { label: "01 / Context", title: "The problem begins in the orchard", paragraphs: [
      "Our samples came from symptomatic durian plant material in Lam Ha, Lam Dong. The fieldwork gave the study a concrete starting point: material from trees showing signs of disease, collected for further examination in the laboratory.",
    ] },
    { label: "02 / Process", title: "Isolation before interpretation", paragraphs: [
      "Repeated isolation attempts produced inconsistent results. Without a dependable culture, a later test of Bacillus subtilis would be difficult to interpret. We revised the workflow and prioritized repeatable isolation before advancing to that comparison.",
      "Seasonal field conditions also limit opportunities to collect fresh samples. Resampling therefore has to fit both the laboratory plan and the conditions in the orchard.",
    ] },
    { label: "03 / Research communication", title: "Presenting the study in English", paragraphs: [
      "I was selected as one of approximately 15 Lawrence S. Ting School students for the 2025 International Science Exchange Program. I presented the preliminary research in English to visiting partner schools from Taiwan, explaining the fieldwork, laboratory attempts, and planned next steps.",
    ] },
  ],
  gallery: [photos.phytophthoraSampling, photos.phytophthoraFailed],
  record: [photos.phytophthoraSoil, photos.phytophthoraProcess, photos.phytophthoraPlate],
  note: { label: "Current status", title: "Ongoing field and laboratory study", paragraphs: [
    "The study has no validated inhibition result. The current work is focused on the isolation protocol.",
  ] },
  outlook: { title: "Next in the workflow", paragraphs: [
    "The planned work is molecular identification followed by in-vitro antagonism testing, once the isolation workflow is reliable enough to support interpretation.",
  ] },
  credits: [
    { label: "Faculty advisor", name: "Lê Phước Thạnh, Ph.D.", detail: "Department of Plant Protection, College of Agriculture, Can Tho University" },
    { label: "Research mentor", name: "Trương Phúc Thịnh", detail: "B.Sc. in Plant Protection, Can Tho University" },
  ],
  next: { label: "MoleBio", href: "/leadership/molebio" },
};

export const molebio: ProjectStory = {
  kind: "molebio",
  area: "Leadership",
  areaHref: "/#leadership",
  title: "Making molecular biology something students can do",
  shortTitle: "MoleBio",
  period: "2025–2026",
  role: "Founder & President",
  introduction: "As a member of the predecessor biology club, I wanted more opportunities to work at the bench. I redesigned and relaunched it as MoleBio, building a program around practical sessions, workshops, and projects led by members.",
  hero: photos.molebioTeaching,
  questionLabel: "The redesign",
  question: "Putting laboratory practice at the center.",
  questionContext: "The earlier club depended heavily on lectures and self-study. I planned the relaunch around students handling tools, running activities, and developing their own science-related work.",
  metrics: [
    { value: "~16 → ~20", label: "members", detail: "predecessor to MoleBio" },
    { value: "~80%", label: "newly recruited", detail: "in the relaunched club" },
    { value: "36", label: "weekly sessions", detail: "80 minutes each" },
    { value: "~48h", label: "scheduled programming", detail: "during 2025–2026" },
  ],
  timelineIntro: "The change was a redesign of how students spent their time together.",
  timeline: [
    { period: "2024–2025", title: "Seeing the gap as a member", text: "I identified the limited opportunities for practical work and drafted a redesign incorporating laboratory activities, outreach, and student-led projects." },
    { period: "2025–2026", title: "Recruiting and relaunching", text: "As Founder and President, I recruited members and designed the weekly program around hands-on molecular biology." },
    { period: "During the year", title: "Organizing outreach", text: "An osmosis and microscopy workshop brought practical science to students beyond the regular club sessions." },
    { period: "Science Fair", title: "Leading the terrarium activity", text: "I led a seven-member club team in a terrarium-building activity for approximately 30 participants, using recycled plastic bottles and locally collected materials." },
  ],
  chapters: [
    { label: "01 / Weekly practice", title: "Working with the tools", paragraphs: [
      "I designed sessions around laboratory safety and methods that members could practice: measuring small volumes with pipettes, separating samples by centrifugation, and extracting and purifying DNA. Students also practiced PCR, which copies DNA, and gel electrophoresis, which separates DNA fragments.",
    ] },
    { label: "02 / Outreach", title: "More interest than laboratory places", paragraphs: [
      "The osmosis and microscopy workshop received 60+ registrations for 25 laboratory spots. Participants examined how cells respond to different surrounding solutions through microscopy and practical activities.",
    ] },
    { label: "03 / Student ownership", title: "Making room for members’ ideas", paragraphs: [
      "I delegated projects around members’ strengths. Alongside the scheduled activities, students developed a club website prototype and a physical 3D DNA model, giving them a role in deciding what the club could make and share.",
    ] },
  ],
  gallery: [photos.molebioBench, photos.molebioFair],
  record: [photos.molebioPCR, photos.molebioWorkshop, photos.molebioModel],
  relatedImages: [photos.stemcellLearning, photos.binhphuLearning],
  note: { label: "Behind the sessions", title: "The preparation before teaching", paragraphs: [
    "I remember compiling the material into a document and making presentation slides, contacting the teacher, and finding time to visit in person to check the facilities. Teaching the students came after all that preparation.",
  ] },
  next: { label: "Hoa Yen Charity Fund", href: "/leadership/hoa-yen" },
};

export const hoaYen: ProjectStory = {
  kind: "hoa-yen",
  area: "Leadership",
  areaHref: "/#leadership",
  title: "Building a student-led network of practical care",
  shortTitle: "Hoa Yen Charity Fund",
  period: "Apr. 2024–Present",
  role: "Founder & President",
  introduction: "Hoa Yen began with a water-safety campaign and grew into recurring programs for children, older residents, and rural communities in and beyond Can Tho.",
  hero: photos.hoaYenWater,
  questionLabel: "Origin / April 2024",
  question: "Starting at Cai Rang Floating Market.",
  questionContext: "I founded Hoa Yen around a water-safety campaign. As the organization grew, its work expanded to recurring programs with volunteers, university students, community partners, and local businesses.",
  metrics: [
    { value: "6", label: "major programs", detail: "documented in the three-year report" },
    { value: "330+", label: "beneficiary participations", detail: "documented in the three-year report" },
    { value: "~VND 284M", label: "program expenditures / support", detail: "documented in the three-year report" },
    { value: "~15 → ~25", label: "core members", detail: "growth since founding" },
  ],
  timelineIntro: "The water-safety campaign was followed by children’s programs, community-care visits, and rural support. These selected programs trace that expansion.",
  timeline: [
    { period: "Apr. 2024", title: "Starting with water safety", text: "Hoa Yen took part in a local water-safety campaign at Cai Rang Floating Market. The campaign distributed 100 life jackets and promoted safety in the river community." },
    { period: "2024", title: "Supporting children and older residents", text: "A Mid-Autumn program in An Binh reached 50 children. A separate elderly and community-care program recorded 70 beneficiary participations." },
    { period: "2025", title: "Extending rural support", text: "In Lam Dong, a documented program provided five lighting sets and installation, with 30 listed beneficiaries and gifts for 20 residents." },
    { period: "2026", title: "Returning to recurring work", text: "A Mid-Autumn program at Cai Rang Floating Market reached 150 children, with gifts and scholarship or gift packages documented in the program report." },
  ],
  chapters: [
    { label: "01 / My role", title: "Organizing the work behind each visit", paragraphs: [
      "As Founder and President, I lead fundraising, program planning, partnerships, and resource allocation, alongside volunteer coordination and on-site execution. As the calendar grew, these responsibilities extended across recurring activities in different places.",
    ] },
    { label: "02 / Volunteer network", title: "Coordinating people and partners", paragraphs: [
      "An event can involve around 20–25 volunteers. Youth volunteers, university students, and community partners carry out the programs together; the documented outcomes belong to that shared effort.",
    ] },
  ],
  gallery: [photos.hoaYenMidAutumn2024, photos.hoaYenLamDong, photos.hoaYenPreparation, photos.hoaYenMidAutumn2026],
  note: { label: "Current direction / 2027–2028 plan", title: "Planning the next two years", paragraphs: [
    "The next two-year program plan proposes academic support for students in remote areas, recurring holiday activities, and practical support for traders at Cai Rang Floating Market. These are planned activities; my continuing role is coordinating the people, partners, and resources needed to carry them forward.",
  ] },
  next: { label: "Medical AI Research", href: "/research/medical-ai" },
};
