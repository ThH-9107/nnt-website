import { ProjectOverlay } from "@/components/story/ProjectOverlay";
import { ProjectStoryContent } from "@/components/story/ProjectStoryContent";
import { molebio } from "@/data/project-pages";

export default function MoleBioOverlay() { return <ProjectOverlay title={molebio.shortTitle} position="03 / 05 · LEARNER"><ProjectStoryContent project={molebio} /></ProjectOverlay>; }
