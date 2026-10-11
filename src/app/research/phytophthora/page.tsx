import type { Metadata } from "next";
import { ProjectPage } from "@/components/project/ProjectPage";
import { phytophthora } from "@/data/project-pages";

export const metadata: Metadata = {
  title: "Phytophthora / Bacillus Research | Nguyen Ngoc Thanh",
  description: "Field sampling, pathogen isolation, and protocol iteration in a durian biological control study in Lam Ha, Vietnam.",
};

export default function PhytophthoraPage() { return <ProjectPage project={phytophthora} />; }
