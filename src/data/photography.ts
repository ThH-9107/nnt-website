export type PortfolioImage = {
  src: string;
  fullSrc?: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  alt: string;
  kind?: "photo" | "figure";
  aspectRatio?: string;
  position?: string;
};

// Curated delivery assets. Original uploads remain in public/images.
export const photos = {
  "portrait": {
    "src": "/images/selected/thanh-lakeside-portrait.webp",
    "width": 1620,
    "height": 1080,
    "title": "Nguyen Ngoc Thanh",
    "caption": "A portrait beside the water in Ho Chi Minh City.",
    "alt": "Thanh wearing glasses and a navy shirt beside a pond, with the city skyline behind him.",
    "aspectRatio": "4 / 5",
    "position": "50% 50%"
  },
  "labPortrait": {
    "src": "/images/selected/thanh-at-the-lab-bench.webp",
    "width": 1276,
    "height": 956,
    "title": "At the laboratory bench",
    "caption": "Working with samples and tools at the laboratory bench.",
    "alt": "Thanh wearing gloves and working with samples at a laboratory bench."
  },
  "medicalExamples": {
    "src": "/images/selected/medical-ai-test-image-examples.webp",
    "width": 2856,
    "height": 1948,
    "title": "Skin-lesion image examples",
    "caption": "Selected independent-test images illustrating the melanoma and non-melanoma classification task.",
    "alt": "Six skin-lesion image examples arranged in non-melanoma and melanoma rows.",
    "kind": "figure"
  },
  "medicalComparison": {
    "src": "/images/selected/medical-ai-condition-comparison.webp",
    "width": 3633,
    "height": 1810,
    "title": "Compare both measures",
    "caption": "F1 and AUROC for the six current conditions on the independent ISIC 2019 test set, from the single-seed evaluation.",
    "alt": "Side-by-side charts comparing independent-test F1 and AUROC across six conditions.",
    "kind": "figure"
  },
  "medicalTradeoff": {
    "src": "/images/selected/medical-ai-f1-auroc-tradeoff.webp",
    "width": 2525,
    "height": 1812,
    "title": "An improvement with a trade-off",
    "caption": "Each point represents an experimental condition. The highest-F1 condition has lower AUROC than the baseline.",
    "alt": "Scatter plot showing that the conditions with higher F1 have lower AUROC than the baseline.",
    "kind": "figure"
  },
  "medicalPrototype": {
    "src": "/images/selected/medical-ai-early-webcam-prototype.webp",
    "width": 1600,
    "height": 1000,
    "title": "An early webcam prototype",
    "caption": "A record from the emotion-recognition stage of the research, before the move to medical imaging.",
    "alt": "A webcam frame of Thanh with a face-detection box, shown inside a development window."
  },
  "phytophthoraBench": {
    "src": "/images/selected/phytophthora-laboratory-bench.webp",
    "width": 1290,
    "height": 704,
    "title": "From field material to a lab workflow",
    "caption": "The laboratory setting for isolation attempts and protocol work.",
    "alt": "Laboratory bench with stacked culture plates, a notebook, and laboratory equipment."
  },
  "phytophthoraSampling": {
    "src": "/images/selected/phytophthora-durian-trunk-sampling.webp",
    "width": 1200,
    "height": 1600,
    "title": "Sampling in the field",
    "caption": "Durian trunk material collected for the field-to-laboratory study in Lam Ha.",
    "alt": "A sample bag held beside a sampled area on a durian trunk.",
    "aspectRatio": "3 / 4"
  },
  "phytophthoraFailed": {
    "src": "/images/selected/phytophthora-unsuccessful-isolation.webp",
    "width": 1200,
    "height": 1600,
    "title": "An attempt that needed revision",
    "caption": "A culture plate from an unsuccessful isolation attempt.",
    "alt": "A culture plate with several patches of mixed growth, held by hand.",
    "aspectRatio": "3 / 4"
  },
  "phytophthoraSoil": {
    "src": "/images/selected/phytophthora-soil-and-leaf-setup.webp",
    "width": 1200,
    "height": 1600,
    "title": "Preparing material for isolation",
    "caption": "A soil and leaf-material setup from the research record.",
    "alt": "A laboratory container holding soil and green leaf material.",
    "aspectRatio": "3 / 4"
  },
  "phytophthoraProcess": {
    "src": "/images/selected/phytophthora-isolation-workspace.webp",
    "width": 900,
    "height": 1600,
    "title": "The practical setup",
    "caption": "Sample handling and tools used during isolation work.",
    "alt": "Sample-handling tools and containers arranged on a laboratory bench.",
    "aspectRatio": "3 / 4"
  },
  "phytophthoraPlate": {
    "src": "/images/selected/phytophthora-culture-observation.webp",
    "width": 720,
    "height": 1280,
    "title": "Observing a culture plate",
    "caption": "A preliminary culture observation; organism identity remains unconfirmed.",
    "alt": "A Petri dish with several small growth areas and handwritten markings.",
    "aspectRatio": "3 / 4"
  },
  "molebioTeaching": {
    "src": "/images/selected/molebio-thanh-teaching.webp",
    "width": 1200,
    "height": 1600,
    "title": "Making a method visible",
    "caption": "Explaining microscopy to students in the laboratory.",
    "alt": "Thanh standing beside a display of microscope images and speaking to students at lab benches.",
    "aspectRatio": "4 / 5",
    "position": "50% 45%"
  },
  "molebioBench": {
    "src": "/images/selected/molebio-students-at-the-bench.webp",
    "width": 1290,
    "height": 1273,
    "title": "Learning together at the bench",
    "caption": "Students handle laboratory materials together during a practical session.",
    "alt": "Students in laboratory coats working together with tubes and tools at a bench.",
    "aspectRatio": "1 / 1"
  },
  "molebioFair": {
    "src": "/images/selected/molebio-terrarium-workshop.webp",
    "width": 1600,
    "height": 1200,
    "title": "Science that fits in your hands",
    "caption": "The terrarium workshop used reused plastic bottles and locally collected materials.",
    "alt": "Students gathered around a table assembling small bottle terrariums."
  },
  "molebioPCR": {
    "src": "/images/selected/molebio-pcr-practice.webp",
    "width": 1276,
    "height": 1278,
    "title": "PCR practice",
    "caption": "Handling tubes and laboratory equipment during a practical session.",
    "alt": "A gloved student handling a tube beside laboratory equipment.",
    "aspectRatio": "1 / 1"
  },
  "molebioWorkshop": {
    "src": "/images/selected/molebio-microscopy-workshop-group.webp",
    "width": 1600,
    "height": 1200,
    "title": "A shared laboratory",
    "caption": "A group photograph from the workshop record.",
    "alt": "Workshop participants and students gathered in a school laboratory.",
    "aspectRatio": "4 / 3"
  },
  "molebioModel": {
    "src": "/images/selected/molebio-student-model-project.webp",
    "width": 1200,
    "height": 1600,
    "title": "A student-led model project",
    "caption": "A record of the club's DNA-model work and its presentation.",
    "alt": "A laptop displaying molecular-model work and a project presentation.",
    "aspectRatio": "4 / 5"
  },
  "stemcellLearning": {
    "src": "/images/selected/stem-cell-summer-school-laboratory.webp",
    "width": 1600,
    "height": 1200,
    "title": "Stem Cell Summer School · 2024",
    "caption": "Selected participant at the Stem Cell Institute, University of Science, Vietnam National University Ho Chi Minh City.",
    "alt": "Students in laboratory coats working together around a bench during the summer school.",
    "aspectRatio": "4 / 3"
  },
  "binhphuLearning": {
    "src": "/images/selected/binh-phu-laboratory-experience.webp",
    "width": 900,
    "height": 1600,
    "title": "Binh Phu · September 2025",
    "caption": "Supervised exposure to pharmaceutical laboratory and quality-control work.",
    "alt": "Thanh working with a laboratory instrument during the Binh Phu experience.",
    "aspectRatio": "4 / 3",
    "position": "50% 42%"
  },
  "hoaYenWater": {
    "src": "/images/selected/hoa-yen-cai-rang-water-safety.webp",
    "width": 1200,
    "height": 1600,
    "title": "Water safety at Cai Rang",
    "caption": "A moment from the life-jacket campaign at Cai Rang Floating Market.",
    "alt": "A volunteer in a life jacket handing supplies to a person in a boat at Cai Rang.",
    "aspectRatio": "4 / 5",
    "position": "50% 40%"
  },
  "hoaYenMidAutumn2024": {
    "src": "/images/selected/hoa-yen-mid-autumn-2024.webp",
    "width": 1200,
    "height": 1600,
    "title": "Mid-Autumn · 2024",
    "caption": "The wider setting of a community program, with volunteers and participants gathered together.",
    "alt": "People gathered outdoors under trees and lanterns during an evening community event.",
    "aspectRatio": "3 / 4"
  },
  "hoaYenPreparation": {
    "src": "/images/selected/hoa-yen-volunteer-preparation.webp",
    "width": 1200,
    "height": 1600,
    "title": "The work before the visit",
    "caption": "Volunteers preparing supplies during a community-care program.",
    "alt": "A group of volunteers seated together and preparing supplies for a community-care activity.",
    "aspectRatio": "4 / 5"
  },
  "hoaYenLamDong": {
    "src": "/images/selected/hoa-yen-lam-dong-program.webp",
    "width": 1600,
    "height": 901,
    "title": "Lam Dong · 2025",
    "caption": "A photograph from the rural-support program. The documented program included lighting sets, installation, and gifts.",
    "alt": "Hoa Yen representatives beside stacked supplies at the Lam Dong program."
  },
  "hoaYenMidAutumn2026": {
    "src": "/images/selected/hoa-yen-mid-autumn-2026.webp",
    "width": 1600,
    "height": 900,
    "title": "Mid-Autumn · 2026",
    "caption": "A group photograph from the program record.",
    "alt": "Organizers and participants standing together on a community-event stage."
  },
  "creativeEnsemble": {
    "src": "/images/selected/hoa-chi-ensemble-on-stage.webp",
    "width": 1600,
    "height": 1063,
    "title": "Hoa Chi · 2025",
    "caption": "A scene from the ensemble performance.",
    "alt": "The Hoa Chi ensemble performing together on stage before an audience.",
    "aspectRatio": "3 / 2"
  },
  "creativeAudience": {
    "src": "/images/selected/hoa-chi-stage-and-audience.webp",
    "width": 1600,
    "height": 899,
    "title": "The room becomes part of the story",
    "caption": "The wider view of the Hoa Chi performance and its audience.",
    "alt": "A wide view of the Hoa Chi performance in a school gymnasium with rows of audience members."
  },
  "creativePoster": {
    "src": "/images/selected/cao-van-lau-production-poster.webp",
    "width": 1587,
    "height": 2245,
    "title": "The Cao Van Lau production",
    "caption": "The original poster credits Thanh as Cao Văn Lầu and XULONG, his team, for direction. November 15 is the performance date; January 2025 is the certificate date.",
    "alt": "The original poster for the Cao Van Lau production, showing the cast and title 1919 Xuyen Khong.",
    "kind": "figure"
  },
  "creativeFamilyScene": {
    "src": "/images/selected/school-family-performance-ensemble.webp",
    "width": 1600,
    "height": 900,
    "title": "Inside the ensemble",
    "caption": "A scene from the school family-performance archive.",
    "alt": "Costumed performers sharing a scene on stage in a school family production."
  },
  "creativeWide": {
    "src": "/images/selected/school-performance-full-stage.webp",
    "width": 1600,
    "height": 1067,
    "title": "The whole stage",
    "caption": "A wider view of the cast and performance space.",
    "alt": "A school-performance ensemble spanning a stage with the auditorium visible in front."
  },
  "frcMeeting": {
    "src": "/images/selected/family-representative-council-discussion.webp",
    "width": 1600,
    "height": 1066,
    "title": "Family Representative Council",
    "caption": "A council discussion in the school meeting space.",
    "alt": "Student representatives seated around tables during a Family Representative Council discussion."
  }
} satisfies Record<string, PortfolioImage>;
