import type { Metadata } from "next";
import { ProjectPage } from "@/components/project/ProjectPage";
import { medicalAi } from "@/data/project-pages";

export const metadata: Metadata = {
  title: "Medical AI Research | Nguyen Ngoc Thanh",
  description: "A research journey from emotion recognition to self-supervised melanoma classification, with methods, preliminary results, and limitations.",
};

export default function MedicalAiPage() { return <ProjectPage project={medicalAi} />; }
