import type { Metadata } from "next";
import { ProjectPage } from "@/components/project/ProjectPage";
import { molebio } from "@/data/project-pages";

export const metadata: Metadata = {
  title: "MoleBio | Nguyen Ngoc Thanh",
  description: "How MoleBio became a hands-on molecular biology club through weekly lab programming, outreach, and student-led projects.",
};

export default function MoleBioPage() { return <ProjectPage project={molebio} />; }
