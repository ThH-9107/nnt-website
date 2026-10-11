import { ProjectOverlay } from "@/components/story/ProjectOverlay";
import { ProjectStoryContent } from "@/components/story/ProjectStoryContent";
import { medicalAi } from "@/data/project-pages";

export default function MedicalAiOverlay() { return <ProjectOverlay title={medicalAi.shortTitle} position="01 / 05 · IMAGE"><ProjectStoryContent project={medicalAi} /></ProjectOverlay>; }
