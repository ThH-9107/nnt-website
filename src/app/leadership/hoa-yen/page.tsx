import type { Metadata } from "next";
import { ProjectPage } from "@/components/project/ProjectPage";
import { hoaYen } from "@/data/project-pages";

export const metadata: Metadata = {
  title: "Hoa Yen Charity Fund | Nguyen Ngoc Thanh",
  description: "The growth of Hoa Yen Charity Fund, its documented programs, volunteer network, and community impact.",
};

export default function HoaYenPage() { return <ProjectPage project={hoaYen} />; }
