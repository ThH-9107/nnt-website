import { photos } from "./photography";

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
};

export const inquiryNodes: InquiryNodeData[] = [
  {
    id: "see",
    number: "01",
    action: "SEE",
    scale: "IMAGE",
    question: "How much can an image tell us — and when should we distrust what a model sees?",
    context: "Computer vision → melanoma classification",
    destination: "Medical AI research",
    href: "/research/medical-ai",
    legacyAnchor: "medical-ai",
  },
  {
    id: "test",
    number: "02",
    action: "TEST",
    scale: "ORGANISM",
    question: "What do you do when biology refuses to behave like the protocol says it should?",
    context: "Field sampling → protocol revision",
    destination: "Phytophthora / durian research",
    href: "/research/phytophthora",
    legacyAnchor: "plant-research",
  },
  {
    id: "share",
    number: "03",
    action: "SHARE",
    scale: "LEARNER",
    question: "How can scientific curiosity become something other students can touch and test for themselves?",
    context: "A lecture-heavy club → hands-on biology",
    destination: "MoleBio",
    href: "/leadership/molebio",
    legacyAnchor: "molebio",
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
  },
  {
    id: "express",
    number: "05",
    action: "EXPRESS",
    scale: "AUDIENCE",
    question: "What changes when understanding something is no longer enough — and you have to make someone else feel it?",
    context: "Writing · directing · performing",
    destination: "Theatre & creative work",
    href: "/creative",
    legacyAnchor: "theatre",
  },
];

export const selectedHighlights = [
  {
    number: "01 / Research",
    title: "Medical AI, from the image to the method",
    description: "A research path from emotion recognition to self-supervised skin-lesion classification, with careful attention to what an evaluation can and cannot show.",
    href: "/research/medical-ai",
    image: photos.medicalExamples.src,
    imageType: photos.medicalExamples.alt,
  },
  {
    number: "02 / Research",
    title: "When the field changes the protocol",
    description: "A durian pathogen study shaped by sampling, inconsistent isolation, and the need to redesign before drawing a conclusion.",
    href: "/research/phytophthora",
    image: photos.phytophthoraSampling.src,
    imageType: photos.phytophthoraSampling.alt,
  },
  {
    number: "03 / Community",
    title: "Building a program people can return to",
    description: "Hoa Yen grew from a water-safety campaign into recurring student-led community support.",
    href: "/leadership/hoa-yen",
    image: photos.hoaYenWater.src,
    imageType: photos.hoaYenWater.alt,
  },
];

