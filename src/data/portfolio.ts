import { photos } from "./photography";

export type Project = { number: string; category: string; title: string; description: string; image: string; href: string };

export const profile = {
  name: "Nguyen Ngoc Thanh",
  school: "Lawrence S. Ting School",
  classYear: "Class of 2027",
  location: "Ho Chi Minh City, Vietnam",
  email: "ngocthanhn9107@gmail.com",
  // Add only verified account URLs when supplied.
  github: null as string | null,
  linkedin: null as string | null,
  // Final two-page résumé supplied October 15, 2026.
  resumePdf: "/resume-nguyen-ngoc-thanh.pdf" as string | null,
  resumeDocx: "/resume-nguyen-ngoc-thanh.docx",
};

export const medicalManuscript = {
  title: "Photometric Augmentation and Appearance Regularization for Self-Supervised Skin-Lesion Classification",
  status: "Submitted October 2026 to Computer Methods and Programs in Biomedicine",
  authorship: "First author: Nguyen Ngoc Thanh",
};

export const featured: Project[] = [
  { number: "01", category: "Computational research", title: "Medical AI Research", description: "From emotion recognition to self-supervised melanoma classification and model robustness.", image: photos.medicalExamples.src, href: "/research/medical-ai" },
  { number: "02", category: "Field & laboratory research", title: "Phytophthora / Bacillus Research", description: "Field sampling, careful isolation, and revised protocols for a durian pathogen study.", image: photos.phytophthoraSampling.src, href: "/research/phytophthora" },
  { number: "03", category: "Science education", title: "MoleBio", description: "A student club redesigned around practical molecular biology and access to the laboratory.", image: photos.molebioTeaching.src, href: "/leadership/molebio" },
  { number: "04", category: "Community leadership", title: "Hoa Yen Charity Fund", description: "A student-led effort supporting water safety, children, older residents, and rural communities.", image: photos.hoaYenWater.src, href: "/leadership/hoa-yen" },
];

export const journey = [
  { year: "2023", title: "A first model", text: "Started with emotion recognition and a webcam inference prototype." },
  { year: "2024", title: "Learning to test", text: "Controlled augmentation experiments led to sharper questions about methodology." },
  { year: "2025", title: "Into medical images", text: "Moved to ISIC data, melanoma classification, and reliable evaluation." },
  { year: "2026", title: "Self-supervised work", text: "Adapted Barlow Twins for a larger pipeline and began testing skin-tone-aware methods." },
];

export const medicalTimeline = [
  { period: "2023–2024", title: "Emotion recognition", text: "Worked with FER-2013’s 28,709 images and seven emotion classes, experimented with pretrained EfficientNet models, and built a real-time webcam inference prototype for an adolescent emotion-management app concept." },
  { period: "2024", title: "Experimental discipline", text: "Compared geometric and photometric augmentation in approximately 36 controlled runs across architectures and conditions. Inconclusive findings prompted a closer study of machine-learning methodology." },
  { period: "Late 2024–2025", title: "Medical imaging", text: "Moved to ISIC data and melanoma classification; studied learning-rate schedules, TFRecords, mixed precision, optimizers, cross-validation, inference, segmentation, and attention." },
  { period: "2025–2026", title: "Self-supervised learning", text: "Transitioned to Barlow Twins and independently debugged optimizer behavior, gradient accumulation, oversampling, convergence, and memory constraints in the training pipeline." },
  { period: "2026–Present", title: "Current study", text: "Testing Barlow Twins with Planckian Jitter and a skin-tone-aware auxiliary branch across six melanoma versus non-melanoma conditions." },
];

export type Honor = { id: string; award: string; detail: string; year: string; certificateId?: string; certificateNote?: string };

export const honors: Honor[] = [
  { id: "scholarship", award: "Lawrence S. Ting School Academic Scholarship", detail: "Four consecutive years", year: "2023–2026", certificateId: "lsts-academic-scholarship", certificateNote: "Shown here: the AY 2025–26 certificate. The recognition above covers four consecutive years." },
  { id: "pimso", award: "Gold Award · Philippine International Math and Science Olympics (PIMSO)", detail: "", year: "2025", certificateId: "pimso-science-gold" },
  { id: "imocsea-isocsea", award: "Gold Award · IMOCSEA–ISOCSEA National Round, Science (Grade 12)", detail: "", year: "2026" },
  { id: "house-fantasy", award: "Most Exemplary Student of House Fantasy", detail: "One of four school-wide recipients", year: "2025", certificateId: "house-fantasy-exemplary-student" },
  { id: "stemco-chemistry", award: "Gold · StemCo Summer Chemistry Competition, Grades 9–10", detail: "", year: "2025", certificateId: "stemco-chemistry-gold" },
  { id: "stemco-biology", award: "Silver · StemCo Summer Biology Competition, Grades 9–10", detail: "", year: "2025", certificateId: "stemco-biology-silver" },
  { id: "young-leader", award: "Exemplary Young Leader", detail: "School recognition", year: "2026" },
];

