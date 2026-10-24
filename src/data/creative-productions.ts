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
  // One-based paragraph number; omitted recordings follow the production story.
  afterParagraph?: number;
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
// The Hỏa Chí rehearsal is hosted remotely; 1919 has a reviewed reading copy.
// Dragon audio and subtitle files have not been supplied.
export const creativeProductions: CreativeProduction[] = [
  {
    id: "cao-van-lau",
    title: "The Beauty of Vietnamese Culture — 1919",
    label: "Performed November 15 · Certificate January 2025",
    status: "performed",
    roles: "Team Lead · Writer · Director · Performer",
    paragraphs: [
      "It all started on a Sunday afternoon, with a laptop open to Cao Văn Lầu’s Wikipedia page.",
      "What began as a little research into the life of the composer behind Dạ cổ hoài lang soon turned into something much bigger. Hours went into reading about his life, figuring out how to tell his story, and eventually writing every line of dialogue and planning every scene of a fifteen-minute musical.",
      "There was something incredibly satisfying about imagining an entire performance from scratch. But getting those ideas off the screen and onto the stage was another challenge altogether. Rehearsal after rehearsal, our team worked to bring the script to life, weaving together acting, traditional music, and cải lương.",
      "And then came the actual performance.",
      "Somehow, the scenes I’d spent a Sunday afternoon imagining on my laptop played out exactly as we’d rehearsed them. There are few feelings quite like watching something you’ve written come alive in front of you.",
      "Our production received First Prize, but even now, it’s that feeling of seeing everything come together that gives me chills.",
    ],
    photographs: [
      { image: photos.creativePoster, treatment: "poster" },
    ],
    record: "A six-student production, with Thanh playing Cao Văn Lầu. First Prize in a grade-wide project involving approximately 300 students.",
    evidence: [{ href: "/documents/certificates/vietnamese-culture-first-prize.pdf", label: "First Prize certificate" }],
    script: {
      href: "/documents/creative/1919-vietnamese-script.pdf",
      label: "Read the original script",
      description: "1919 · Vietnamese · Public reading copy",
      language: "Vietnamese",
    },
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
    photographs: [
      { image: photos.hoaChiPreparation, treatment: "preparation" },
      { image: photos.creativeAudience, treatment: "performance" },
    ],
    recordings: [{
      kind: "video",
      id: "vocal-rehearsal",
      title: "Vocal rehearsal",
      src: "https://res.cloudinary.com/m6yc0cyk/video/upload/c_limit,w_960/q_auto/f_auto/v1792830094/practice.mp4",
      poster: "https://res.cloudinary.com/m6yc0cyk/video/upload/so_2,c_limit,w_960/q_auto/v1792830094/practice.jpg",
      width: 540,
      height: 960,
      caption: "Somewhere in these rehearsals, I discovered I could actually sing.",
      languageLabel: "Vietnamese",
      afterParagraph: 2,
    }],
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
