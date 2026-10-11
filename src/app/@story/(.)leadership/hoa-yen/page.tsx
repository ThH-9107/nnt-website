import { ProjectOverlay } from "@/components/story/ProjectOverlay";
import { ProjectStoryContent } from "@/components/story/ProjectStoryContent";
import { hoaYen } from "@/data/project-pages";

export default function HoaYenOverlay() { return <ProjectOverlay title={hoaYen.shortTitle} position="04 / 05 · COMMUNITY"><ProjectStoryContent project={hoaYen} /></ProjectOverlay>; }
