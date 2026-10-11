export type Metric = { value: string; label: string; detail?: string };
export type TimelineItem = { period: string; title: string; text: string };
export type GalleryItem = { src: string; intendedImage: string; caption: string };
export type StoryChapter = { label: string; title: string; paragraphs: string[] };
export type ProjectStory = {
  area: "Research" | "Leadership";
  areaHref: string;
  title: string;
  shortTitle: string;
  period: string;
  role: string;
  introduction: string;
  heroImage: string;
  heroImageType: string;
  questionLabel: string;
  question: string;
  questionContext: string;
  metrics: Metric[];
  timelineIntro: string;
  timeline: TimelineItem[];
  chapters: StoryChapter[];
  gallery: GalleryItem[];
  note: { label: string; title: string; paragraphs: string[] };
  outlook: { title: string; paragraphs: string[] };
  credits?: { label: string; name: string; detail: string }[];
  next: { label: string; href: string };
};

export const medicalAi: ProjectStory = {
  area: "Research",
  areaHref: "/#research",
  title: "Learning to ask better questions of medical AI",
  shortTitle: "Medical AI Research",
  period: "Nov. 2023–Present",
  role: "Student Researcher",
  introduction: "A continuing research journey from emotion recognition to self-supervised melanoma classification. Each change in direction has made the experimental question more precise.",
  heroImage: "/images/medical-ai-placeholder.svg",
  heroImageType: "Medical-imaging research visual or anonymized model analysis",
  questionLabel: "The research question",
  question: "Can a model learn useful representations from unlabeled skin images, and how should we judge the resulting classifier?",
  questionContext: "The current study evaluates melanoma versus non-melanoma classification while testing whether Planckian Jitter and a skin-tone-aware auxiliary branch change performance. It uses six experimental conditions; conclusions still need further validation.",
  metrics: [
    { value: "401,059", label: "unlabeled ISIC 2024 images", detail: "self-supervised pretraining" },
    { value: "33,569", label: "labeled images", detail: "downstream evaluation" },
    { value: "200+", label: "full training experiments", detail: "skin-cancer research" },
    { value: "~600", label: "GPU-hours", detail: "approximate total" },
  ],
  timelineIntro: "This is a progression of questions and methods, not a sequence of finished products.",
  timeline: [
    { period: "2023–2024", title: "A first prototype", text: "I started with FER-2013: 28,709 face images in seven emotion classes. I tried pretrained EfficientNet models and built a real-time webcam inference prototype for an adolescent emotion-management app concept." },
    { period: "2024", title: "When a comparison did not settle the question", text: "Approximately 36 controlled runs compared geometric and photometric augmentation across multiple architectures and conditions. The findings were inconclusive, which pushed me to study machine-learning methodology more carefully." },
    { period: "Late 2024–2025", title: "Moving into medical imaging", text: "Using ISIC data for melanoma classification, I studied learning-rate schedules, TFRecords, mixed precision, optimizers, cross-validation, inference pipelines, segmentation, and attention." },
    { period: "2025–2026", title: "Understanding the training pipeline", text: "I moved to Barlow Twins self-supervised learning and independently debugged optimizer issues, gradient accumulation, oversampling, convergence, and memory constraints." },
    { period: "2026–Present", title: "Testing a more specific idea", text: "The current study combines Barlow Twins, Planckian Jitter, and a skin-tone-aware auxiliary branch in six experimental conditions." },
  ],
  chapters: [
    { label: "01 / Method", title: "Learning first, then classifying", paragraphs: [
      "Self-supervised pretraining uses 401,059 unlabeled ISIC 2024 images to learn image representations before downstream melanoma classification. The labeled set contains 33,569 images: 22,777 for training, 2,554 for validation, and 8,238 independent ISIC 2019 test images.",
      "The Barlow Twins implementation was adapted from the official Keras example and substantially modified for this research pipeline. My work has focused on making the training, fine-tuning, and evaluation stages behave reliably under real compute and memory constraints.",
    ] },
    { label: "02 / Experimental design", title: "A result needs a comparison", paragraphs: [
      "The current experiment compares six conditions for melanoma versus non-melanoma classification. It examines Planckian Jitter and a skin-tone-aware auxiliary branch against a baseline, with F1 and AUROC both important to interpretation.",
      "More than 200 full skin-cancer training experiments, totaling approximately 600 GPU-hours, reflect repeated attempts to understand the pipeline and its choices. Earlier inconclusive augmentation work is part of why I now treat design and evaluation as research questions in their own right.",
    ] },
    { label: "03 / Preliminary result", title: "An improvement with a trade-off", paragraphs: [
      "The baseline test F1 is 0.5522 and its AUROC is 0.8724. The highest observed F1 so far is 0.5795, approximately 4.9% higher relative to the baseline F1.",
      "That higher-F1 result is preliminary and comes from a single seed. AUROC shows a trade-off, so the result should not be read as an across-the-board improvement. Further validation is ongoing.",
    ] },
  ],
  gallery: [
    { src: "/images/medical-ai-dataset-placeholder.svg", intendedImage: "Anonymized dataset or preprocessing diagram", caption: "Show how unlabeled pretraining and the labeled train, validation, and independent test sets relate. No identifiable patient data." },
    { src: "/images/medical-ai-experiment-placeholder.svg", intendedImage: "Experiment comparison chart", caption: "A verified chart comparing the six conditions, including F1 and AUROC, can be placed here after further validation." },
  ],
  note: { label: "Research note", title: "What the inconclusive work taught me", paragraphs: [
    "The 2024 augmentation comparison did not yield a clear conclusion. It changed how I approach control conditions, evaluation, and debugging: a pipeline that runs is only the beginning of a trustworthy experiment.",
    "The current best F1 is a single-seed preliminary observation. The first-author manuscript “Photometric Augmentation and Appearance Regularization for Self-Supervised Skin-Lesion Classification” was submitted in October 2026 to Computer Methods and Programs in Biomedicine. Further validation continues.",
  ] },
  outlook: { title: "Where the work stands", paragraphs: [
    "The study remains in validation. I am working toward a clearer account of which choices affect performance and where the F1–AUROC trade-off comes from.",
  ] },
  credits: [{ label: "Research advisor", name: "Bach-Tung Pham", detail: "National Central University, Taiwan" }],
  next: { label: "Phytophthora / Bacillus Research", href: "/research/phytophthora" },
};

export const phytophthora: ProjectStory = {
  area: "Research",
  areaHref: "/#research",
  title: "Following a durian pathogen from field to lab",
  shortTitle: "Phytophthora / Bacillus Research",
  period: "May 2024–Present",
  role: "Team Lead & Primary Researcher · 2-student team",
  introduction: "A field and laboratory study in Lam Ha, Lam Dong, investigating whether Bacillus subtilis can inhibit Phytophthora palmivora, an important durian pathogen.",
  heroImage: "/images/durian-research-placeholder.svg",
  heroImageType: "Durian field sampling photograph from Lam Ha",
  questionLabel: "The research question",
  question: "Can a potential biological control approach be tested reliably against Phytophthora palmivora in durian?",
  questionContext: "Before an antagonism result is meaningful, the pathogen must be isolated and identified consistently. That first step has shaped the project more than any claim of success.",
  metrics: [
    { value: "2", label: "student researchers", detail: "team led by Thanh" },
    { value: "2024", label: "study began", detail: "field work in Lam Ha" },
    { value: "2025", label: "science exchange", detail: "research communication milestone" },
  ],
  timelineIntro: "Field conditions have guided the pace and redesign of the study.",
  timeline: [
    { period: "May 2024", title: "Starting in Lam Ha", text: "Our two-student team began investigating the durian pathogen through field sampling of symptomatic plant material in Lam Ha, Lam Dong." },
    { period: "2024–2025", title: "Attempting isolation", text: "We made repeated pathogen-isolation attempts and developed experimental protocols, but inconsistent results prevented a dependable claim." },
    { period: "2025", title: "Explaining the work in progress", text: "I was selected for the International Science Exchange Program and presented the preliminary study in English to visiting partner schools from Taiwan." },
    { period: "Present", title: "Redesign and resampling", text: "Seasonal field constraints and isolation difficulties have led us to revise the workflow and resample before planned molecular identification and in-vitro antagonism testing." },
  ],
  chapters: [
    { label: "01 / Context", title: "The problem begins in the orchard", paragraphs: [
      "Phytophthora palmivora is an important durian pathogen. Our question is whether Bacillus subtilis might inhibit it, but answering that question starts with field material that can be handled and studied reliably in the lab.",
      "The project is based in Lam Ha, Lam Dong. Field sampling of symptomatic durian plant material connects the biological question to the conditions in which growers encounter the disease.",
    ] },
    { label: "02 / Process", title: "Isolation before interpretation", paragraphs: [
      "Repeated isolation attempts have not yet produced sufficiently consistent material for a reliable biological control result. We have revised the protocol and returned to sampling rather than treating an uncertain observation as a positive finding.",
      "Seasonal field constraints affect when samples can be collected and how the work proceeds. Protocol development, planned molecular identification, and planned in-vitro antagonism tests are the next parts of a careful workflow.",
    ] },
    { label: "03 / Communication", title: "Presenting an unfinished study honestly", paragraphs: [
      "The 2025 International Science Exchange Program was a chance to explain a preliminary study to visiting partner schools from Taiwan. Communicating the research while the methods were still evolving made it necessary to distinguish the question, the work completed, and the results still needed.",
    ] },
  ],
  gallery: [
    { src: "/images/phytophthora-field-placeholder.svg", intendedImage: "Field sampling photograph", caption: "Photograph symptomatic durian material or the sampling setting in Lam Ha, with location and date checked before publication." },
    { src: "/images/phytophthora-lab-placeholder.svg", intendedImage: "Pathogen-isolation workflow diagram or lab photograph", caption: "Show the current isolation process and protocol iteration without presenting an unverified outcome." },
  ],
  note: { label: "Research note", title: "No reliable efficacy claim yet", paragraphs: [
    "The current study has not produced a sufficiently reliable result to say Bacillus subtilis inhibits Phytophthora palmivora in this setting. Isolation difficulties and seasonal constraints are reasons to redesign and resample before making that claim.",
  ] },
  outlook: { title: "Next in the workflow", paragraphs: [
    "The planned work is molecular identification followed by in-vitro antagonism testing, once the isolation workflow is reliable enough to support interpretation.",
  ] },
  credits: [
    { label: "Faculty advisor", name: "Le Phuoc Thanh, Ph.D.", detail: "Department of Plant Protection, College of Agriculture, Can Tho University" },
    { label: "Research mentor", name: "Truong Phuc Thinh", detail: "B.Sc. in Plant Protection, Can Tho University" },
  ],
  next: { label: "MoleBio", href: "/leadership/molebio" },
};

export const molebio: ProjectStory = {
  area: "Leadership",
  areaHref: "/#leadership",
  title: "Making molecular biology something students can do",
  shortTitle: "MoleBio",
  period: "2025–26",
  role: "Founder & President",
  introduction: "MoleBio grew from a lecture and self-study based predecessor club into a smaller laboratory community built around practice, access, and student initiative.",
  heroImage: "/images/molebio-placeholder.svg",
  heroImageType: "MoleBio students working at a lab bench",
  questionLabel: "The design question",
  question: "What would a biology club look like if students could practice the methods they were learning about?",
  questionContext: "The predecessor club had approximately 16 members. In 2025–26, I redesigned and relaunched it as a 20-member club, with approximately 80% newly recruited members and a more hands-on program.",
  metrics: [
    { value: "16 → 20", label: "members", detail: "predecessor to MoleBio" },
    { value: "36", label: "weekly sessions", detail: "80 minutes each" },
    { value: "~48h", label: "scheduled programming", detail: "during 2025–26" },
    { value: "4", label: "workshops", detail: "3 internal, 1 outreach" },
  ],
  timelineIntro: "The change was a redesign of how students spent their time together.",
  timeline: [
    { period: "2024–25", title: "Seeing the gap", text: "As a member of the approximately 16-person predecessor club, I saw that its lecture and self-study format offered limited hands-on learning." },
    { period: "2025–26", title: "Relaunching as MoleBio", text: "I built a 20-member club, approximately 80% newly recruited, with 36 weekly 80-minute sessions and about 48 hours of scheduled programming." },
    { period: "During 2025–26", title: "Opening the lab", text: "Three internal workshops and one outreach workshop added practical experience. The osmosis and microscopy outreach session received 60+ registrations for 25 laboratory spots." },
    { period: "Science Fair", title: "Taking science outside the bench", text: "Approximately 30 participants built mini terrariums using reused plastic bottles and locally collected materials." },
  ],
  chapters: [
    { label: "01 / Transformation", title: "From listening to doing", paragraphs: [
      "The predecessor club mainly centered on lectures and self-study. MoleBio kept the curiosity but changed the routine: sessions were designed so members could handle tools, see biological processes, and learn through careful practice.",
      "Twenty members joined the relaunched club. Approximately 80% were newly recruited, which made orientation, laboratory safety, and a welcoming learning environment part of the design problem.",
    ] },
    { label: "02 / Weekly practice", title: "A program built around methods", paragraphs: [
      "Across 36 weekly 80-minute sessions, students worked through laboratory safety, pipetting, centrifugation, DNA extraction and purification, PCR, gel electrophoresis, and microscopy. The schedule amounted to approximately 48 hours of programming.",
      "Three internal workshops supported the club's own learning. An outreach workshop focused on osmosis and microscopy drew more than 60 registrations for 25 lab spots, showing both interest and the practical limit of available space.",
    ] },
    { label: "03 / Beyond scheduled sessions", title: "Letting students make something", paragraphs: [
      "At Science Fair, approximately 30 participants made mini terrariums from reused plastic bottles and locally collected materials. The activity offered a tangible way into biological systems without specialized equipment.",
      "Members also started a website prototype and a physical 3D DNA model. These projects gave students room to explain biology in their own formats.",
    ] },
  ],
  gallery: [
    { src: "/images/molebio-lab-placeholder.svg", intendedImage: "MoleBio laboratory session photograph", caption: "A real image of pipetting, microscopy, DNA extraction, PCR, or gel electrophoresis during a club session." },
    { src: "/images/molebio-fair-placeholder.svg", intendedImage: "Science Fair or outreach photograph", caption: "Show the terrarium activity or the osmosis and microscopy outreach workshop, with participant permission." },
  ],
  note: { label: "Program note", title: "Access has practical limits", paragraphs: [
    "The outreach workshop received 60+ registrations, but laboratory capacity allowed 25 spots. That gap is part of the story of building hands-on science opportunities in a school setting.",
  ] },
  outlook: { title: "What MoleBio became", paragraphs: [
    "The 2025–26 redesign made hands-on techniques, workshops, and student-led projects central to the club. Its value lies in the time students spent learning methods together, not only in the number of sessions held.",
  ] },
  next: { label: "Hoa Yen Charity Fund", href: "/leadership/hoa-yen" },
};

export const hoaYen: ProjectStory = {
  area: "Leadership",
  areaHref: "/#leadership",
  title: "Building a student-led network of practical care",
  shortTitle: "Hoa Yen Charity Fund",
  period: "Apr. 2024–Present",
  role: "Founder & President",
  introduction: "Hoa Yen began with a water-safety campaign and grew into recurring programs for children, older residents, and rural communities in and beyond Can Tho.",
  heroImage: "/images/hoa-yen-placeholder.svg",
  heroImageType: "Hoa Yen volunteers working at a community program",
  questionLabel: "The organizing question",
  question: "How can a student group turn an immediate local need into steady, well-coordinated community support?",
  questionContext: "I began Hoa Yen in April 2024 with approximately 15 core members. The team has grown to approximately 25, while 20–25 volunteers can participate in a given event.",
  metrics: [
    { value: "6+", label: "major programs", detail: "documented" },
    { value: "330+", label: "beneficiary participations", detail: "documented lower bound" },
    { value: "~VND 284m", label: "expenditures and support", detail: "documented lower bound" },
    { value: "~15 → ~25", label: "core members", detail: "growth since founding" },
  ],
  timelineIntro: "Selected documented programs show how Hoa Yen's focus widened over time.",
  timeline: [
    { period: "Apr. 2024", title: "Starting with water safety", text: "Hoa Yen began as a student-led effort around water safety. At Cai Rang Floating Market, volunteers distributed more than 50 life jackets and promoted awareness in a river-dependent community." },
    { period: "2024", title: "Supporting children and older residents", text: "Programs included a waste-for-gifts activity, a Mid-Autumn program serving 100+ children, and a care fund of about $1,200 for older people living alone in Can Tho." },
    { period: "2025", title: "Extending rural support", text: "The team coordinated rice distribution, rural-lighting support for 50+ households, and gifts for older residents as activities expanded beyond Can Tho to Lam Ha, Lam Dong." },
    { period: "2026", title: "Returning to recurring work", text: "A Mid-Autumn program served approximately 150 children. Hoa Yen's documented work also includes support for children and youth through other community partners." },
  ],
  chapters: [
    { label: "01 / Origin", title: "A specific need became a group", paragraphs: [
      "The first campaign focused on water safety in a river-dependent community. Distributing more than 50 life jackets at Cai Rang Floating Market turned a broad concern into an activity the team could plan, fund, and deliver.",
      "From that starting point, Hoa Yen developed into a recurring student-led initiative across water safety, children and youth, elderly care, rural development, and community support.",
    ] },
    { label: "02 / Organization", title: "Growing the people behind each program", paragraphs: [
      "The core team grew from approximately 15 to 25 members. A typical event can involve 20–25 volunteers drawn from youth volunteers, university students, community partners, and local businesses.",
      "My role as Founder and President includes fundraising, program planning, partnerships, resource allocation, and on-site coordination. The network matters because each program depends on people who can carry out the practical work together.",
    ] },
    { label: "03 / Initiatives", title: "Support that responds to different places", paragraphs: [
      "Hoa Yen's documented programs include water-safety awareness and life jackets, children's activities and Mid-Autumn events, an elderly care fund and visits, rice distribution, rural lighting, and gifts for older residents.",
      "The initiatives vary, but the pattern is consistent: identify a local need, work with volunteers and partners, and account for what was actually delivered.",
    ] },
  ],
  gallery: [
    { src: "/images/hoa-yen-water-placeholder.svg", intendedImage: "Water-safety program photograph", caption: "A real photograph of the Cai Rang life-jacket distribution or water-safety activity, with participant permission." },
    { src: "/images/hoa-yen-community-placeholder.svg", intendedImage: "Children, elderly-care, or rural program photograph", caption: "A real image from a documented Hoa Yen program, accompanied by its date and location." },
  ],
  note: { label: "Impact note", title: "Documented minimums, not lifetime totals", paragraphs: [
    "The current records support at least six major programs, more than 330 beneficiary participations, and approximately VND 284 million in program expenditures and support. These are documented lower-bound figures, not precise lifetime totals or unique-person counts.",
  ] },
  outlook: { title: "Current direction", paragraphs: [
    "Hoa Yen continues to coordinate recurring work in water safety, children and youth, elderly care, rural development, and community support. The team remains centered on volunteers, partners, and documented delivery.",
  ] },
  next: { label: "Medical AI Research", href: "/research/medical-ai" },
};
