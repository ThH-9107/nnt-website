import { unfinishedResearch as proposal } from "@/data/unfinished-research";

export function UnfinishedResearchNote() {
  return <section className="story-unfinished" id="unfinished-research" aria-labelledby="unfinished-research-title">
    <header><span className="story-kicker">{proposal.label}</span><h2 id="unfinished-research-title">{proposal.title}</h2><p className="story-unfinished-status">{proposal.status}</p><p className="story-unfinished-question">{proposal.question}</p></header>
    <div className="story-unfinished-content">
      <ol className="story-unfinished-path" aria-label="Proposal progress"><li><span>01</span>Literature & proposal</li><li><span>02</span>Methodology & predictions</li><li className="story-unfinished-stop"><span>03 / Not started</span>Bench experimentation</li></ol>
      <div className="story-unfinished-notes"><div><h3>The plan</h3><p>{proposal.plan}</p></div><div><h3>Where it stopped</h3><p>{proposal.barrier}</p></div></div>
      <p className="story-unfinished-reflection">{proposal.reflection}</p>
    </div>
  </section>;
}
