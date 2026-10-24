import { photos, type PortfolioImage } from "./photography";

export type CreativeDocument = {
  href: string;
  label: string;
  description?: string;
  language?: string;
};

type RecordingBase = {
  id: string;
  title: string;
  // Use an actual optimized remote file URL, never a large original in /public.
  src: `https://${string}`;
  caption: string;
  languageLabel: string;
  transcript?: CreativeDocument;
};

export type CreativeVideo = RecordingBase & {
  kind: "video";
  poster: string;
  width: number;
  height: number;
  tracks?: {
    src: string;
    srcLang: string;
    label: string;
    kind: "subtitles" | "captions";
    default?: boolean;
  }[];
};

export type CreativeAudio = RecordingBase & { kind: "audio" };
export type CreativeRecording = CreativeVideo | CreativeAudio;

export type CreativeProduction = {
  id: string;
  title: string;
  label: string;
  status: "performed" | "in-preparation";
  roles: string;
  paragraphs: string[];
  photographs?: { image: PortfolioImage; treatment: "preparation" | "poster" | "performance" }[];
  record?: string;
  evidence?: CreativeDocument[];
  script?: CreativeDocument;
  recordings?: CreativeRecording[];
};

// To add a production, append its verified story here. Optional photographs,
// script, and recordings render only when real assets are supplied. A video
// requires an optimized HTTPS URL, lightweight poster, and actual dimensions.
// Subtitle/caption tracks and transcripts must contain authentic, reviewed text.
// No rehearsal recordings, dragon audio, or original script are supplied yet.
export const creativeProductions: CreativeProduction[] = [
  {
    id: "cao-van-lau",
    title: "The Beauty of Vietnamese Culture",
    label: "Performed November 15 · Certificate January 2025",
    status: "performed",
    roles: "Team Lead · Writer · Director · Performer",
    paragraphs: [
      "It started on a Sunday afternoon, with a laptop open to Cao Văn Lầu’s Wikipedia page.",
      "Reading about the composer behind Dạ cổ hoài lang soon turned into working out how to tell his story on stage: which moments to include, how the scenes would unfold, and what each character would say. Every line of dialogue and every scene’s stage setup became part of the script.",
      "Our six-student team, XULONG, was making a fifteen-minute musical. Alongside writing and directing, I played Cao Văn Lầu himself. The performance brought together acting, traditional Vietnamese music, an excerpt from Dạ cổ hoài lang, and a cải lương duet.",
      "Imagining it all on a laptop was one kind of excitement. Rehearsing together gave those ideas voices, movement, and music. Our team spent a great deal of time bringing the script to life, and I loved being part of that process.",
      "Then came the performance. The scenes we had planned and rehearsed came together on stage, just as we had imagined them. There are few feelings quite like watching something you have written come alive in front of you.",
      "Our production received First Prize, but the award is not the part that stays with me most. Even now, remembering that performance gives me chills.",
    ],
    photographs: [
      { image: photos.creativePreparation, treatment: "preparation" },
      { image: photos.creativePoster, treatment: "poster" },
    ],
    record: "First Prize in a grade-wide project involving approximately 300 students.",
    evidence: [{ href: "/documents/certificates/vietnamese-culture-first-prize.pdf", label: "First Prize certificate" }],
  },
  {
    id: "hoa-chi",
    title: "Hỏa Chí",
    label: "November 2025 · Fantasy House",
    status: "performed",
    roles: "Main Antagonist · Audition-selected",
    paragraphs: [
      "More than a month of after-school rehearsals, a cast of around fifty to sixty people, and an unexpected discovery: apparently, I could sing.",
      "The vocal rehearsals became some of my favorite moments of Hỏa Chí. Between practicing songs and experimenting with my voice, there was also a dragon that needed a voiceover. Apparently, mine would do.",
      "Staying after school could be tiring, but it was very fun knowing that everyone was trying their best. The production was much bigger than any one role; dozens of us were working toward the same performance.",
      "We eventually performed before more than 1,000 students, teachers, and staff, and Fantasy House placed first among the four Houses. Looking back, though, it is those afternoons of singing, rehearsing, and figuring things out together that I remember most fondly.",
    ],
    photographs: [{ image: photos.creativeAudience, treatment: "performance" }],
  },
  {
    id: "khoi-sac-27",
    title: "Khởi Sắc 27",
    label: "September 2026–May 2027 · In preparation",
    status: "in-preparation",
    roles: "Main Antagonist (Cast)",
    paragraphs: [
      "Apparently, playing villains has become something of a tradition.",
      "After two rounds of auditions, I was selected to play the main antagonist in Khởi Sắc 27, our school’s annual Grade 12 performing-arts fundraiser.",
      "This story is still being written. For now, there is a character to understand, a performance to prepare for, and plenty to look forward to in May 2027.",
    ],
  },
];
