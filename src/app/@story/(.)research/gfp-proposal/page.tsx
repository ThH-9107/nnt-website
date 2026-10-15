import { ProjectOverlay } from "@/components/story/ProjectOverlay";
import { UnfinishedResearchStory } from "@/components/story/UnfinishedResearchNote";
import { unfinishedResearch } from "@/data/unfinished-research";

export default function GfpProposalOverlay() {
  return <ProjectOverlay title={unfinishedResearch.title} position="02 / 05 · ORGANISM / Secondary story" backLabel="← Back to previous view"><UnfinishedResearchStory /></ProjectOverlay>;
}
