export type InquiryNodeData = {
  id: "see" | "test" | "share" | "serve" | "express";
  number: string;
  action: string;
  scale: string;
  question: string;
  context: string;
  destination: string;
  href: string;
  legacyAnchor: string;
  side: "left" | "right";
};

export const inquiryNodes: InquiryNodeData[] = [
  {
    id: "see",
    number: "01",
    action: "SEE",
    scale: "SIGNAL / IMAGE",
    question: "How much can an image tell us — and when should we distrust what a model sees?",
    context: "Computer vision → melanoma classification",
    destination: "Medical AI research",
    href: "/research/medical-ai",
    legacyAnchor: "medical-ai",
    side: "left",
  },
  {
    id: "test",
    number: "02",
    action: "TEST",
    scale: "ORGANISM / EXPERIMENT",
    question: "What do you do when biology refuses to behave like the protocol says it should?",
    context: "Field sampling → protocol revision",
    destination: "Phytophthora / durian research",
    href: "/research/phytophthora",
    legacyAnchor: "plant-research",
    side: "right",
  },
  {
    id: "share",
    number: "03",
    action: "SHARE",
    scale: "LEARNER / LAB",
    question: "How can scientific curiosity become something other students can touch and test for themselves?",
    context: "A lecture-heavy club → hands-on biology",
    destination: "MoleBio",
    href: "/leadership/molebio",
    legacyAnchor: "molebio",
    side: "left",
  },
  {
    id: "serve",
    number: "04",
    action: "SERVE",
    scale: "COMMUNITY",
    question: "How does one act of service become something a community can return to again and again?",
    context: "Water safety → recurring community programs",
    destination: "Hoa Yen Charity Fund",
    href: "/leadership/hoa-yen",
    legacyAnchor: "hoa-yen",
    side: "right",
  },
  {
    id: "express",
    number: "05",
    action: "EXPRESS",
    scale: "STORY",
    question: "What changes when understanding something is no longer enough — and you have to make someone else feel it?",
    context: "Writing · directing · performing",
    destination: "Theatre & creative work",
    href: "/creative",
    legacyAnchor: "theatre",
    side: "left",
  },
];

export const selectedHighlights = [
  {
    number: "01 / Research",
    title: "Medical AI, from the image to the method",
    description: "A research path from emotion recognition to self-supervised skin-lesion classification, with careful attention to what an evaluation can and cannot show.",
    href: "/research/medical-ai",
    image: "/images/medical-ai-placeholder.svg",
    imageType: "Verified model-analysis figure or anonymized dermoscopic research image",
  },
  {
    number: "02 / Research",
    title: "When the field changes the protocol",
    description: "A durian pathogen study shaped by sampling, inconsistent isolation, and the need to redesign before drawing a conclusion.",
    href: "/research/phytophthora",
    image: "/images/durian-research-placeholder.svg",
    imageType: "Field sampling or laboratory isolation photograph from Lam Ha",
  },
  {
    number: "03 / Community",
    title: "Building a program people can return to",
    description: "Hoa Yen grew from a water-safety campaign into recurring student-led community support.",
    href: "/leadership/hoa-yen",
    image: "/images/hoa-yen-placeholder.svg",
    imageType: "Documented Hoa Yen community event photograph, used with permission",
  },
];
