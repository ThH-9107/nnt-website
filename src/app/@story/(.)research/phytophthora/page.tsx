import { ProjectOverlay } from "@/components/story/ProjectOverlay";
import { ProjectStoryContent } from "@/components/story/ProjectStoryContent";
import { phytophthora } from "@/data/project-pages";

export default function PhytophthoraOverlay() { return <ProjectOverlay title={phytophthora.shortTitle} position="02 / 05 · ORGANISM"><ProjectStoryContent project={phytophthora} /></ProjectOverlay>; }
