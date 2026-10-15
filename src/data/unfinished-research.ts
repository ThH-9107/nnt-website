// Updated by Thanh in October 2026: GFP fluorescence, not bioluminescence.
// Proposal only; no bench work, transformed plant, or experimental result.
export const unfinishedResearch = {
  href: "/research/gfp-proposal",
  title: "A question I couldn’t test",
  label: "Secondary research story / ORGANISM",
  subtitle: "Transient GFP expression in Hygrophila polysperma",
  period: "May–July 2026",
  role: "Independent research proposal",
  status: "Research proposal — Experiment not conducted",
  question: "Could I make an aquatic plant fluoresce green?",
  summary: "A proposal for transient GFP expression in an aquatic plant stopped before experimentation when obtaining the required material could not fit the summer research window.",
  chapters: [
    {
      id: "question",
      label: "The question",
      title: "A plant that lives in two environments.",
      paragraphs: [
        "It started with a fairly simple question: could I make an aquatic plant fluoresce green? I became interested in whether Hygrophila polysperma could temporarily produce green fluorescent protein (GFP), using a bacterium called Agrobacterium to introduce genetic material.",
        "The plant can grow underwater and above water, developing different leaf structures depending on its environment. I wanted to investigate whether those differences might influence transient GFP expression.",
      ],
    },
    {
      id: "proposal",
      label: "The proposal",
      title: "Turning curiosity into a plan.",
      paragraphs: [
        "I read existing research on plant transformation, GFP expression, and related aquatic species, then developed a proposal comparing submerged and emersed forms of H. polysperma — plants grown underwater and above water.",
        "The question became more complicated as I considered experimental controls, laboratory equipment, suitable genetic materials, and whether the work could realistically be carried out. The formal proposal brought together the scientific background, objectives, planned methods, and a possible longer-term tissue-culture pathway.",
      ],
    },
    {
      id: "support",
      label: "Seeking support",
      title: "Finding a route into the laboratory.",
      paragraphs: [
        "I contacted researchers to explore implementation. I met with Dr. Trần Trọng Tuấn from the Institute of Tropical Biology in Ho Chi Minh City and also consulted Dr. Bùi Thế Vinh. Both were willing to support the project.",
        "Those conversations concerned what it would take to start the project. Nguyễn Thị Thảo Sương is the scientific supervisor named in the written proposal; Dr. Tuấn and Dr. Vinh were consulted about practical implementation.",
      ],
    },
    {
      id: "obstacle",
      label: "The obstacle",
      title: "The material would arrive too late.",
      paragraphs: [
        "The main obstacle was obtaining the GFP plasmid, the genetic material needed for the proposed experiment. Dr. Tuấn explained that arranging procurement and import into Vietnam could take several months.",
        "With summer coming to an end, limited time remaining, and additional practical constraints associated with being under 18, the project no longer fit the available research window. By July 2026, I had to stop.",
      ],
    },
    {
      id: "moving-on",
      label: "Moving on",
      title: "Leaving the question open.",
      paragraphs: [
        "I never got to run the experiment, and I never found out whether my proposed approach would work. It was frustrating after weeks spent reading, developing the proposal, and trying to arrange laboratory support.",
        "Once I understood that obtaining the materials would take longer than the time I had, I accepted the constraint and returned to my other research. I still think the question is interesting, and perhaps I’ll have another opportunity to investigate it someday.",
      ],
    },
  ],
  fluorescenceNote: "GFP fluorescence requires suitable excitation light. The proposal was not for a plant that independently produces visible light.",
  document: {
    title: "Khảo sát khả năng biểu hiện tạm thời protein huỳnh quang GFP trên cây thủy sinh Hygrophila polysperma thông qua Agrobacterium tumefaciens.",
    englishTitle: "Investigation of Transient GFP Expression in the Aquatic Plant Hygrophila polysperma Using Agrobacterium tumefaciens.",
    href: "/documents/research/hygrophila-polysperma-gfp-proposal.docx",
    supervisor: "Nguyễn Thị Thảo Sương",
    language: "Vietnamese",
  },
  workflow: {
    src: "/images/research-proposal/hygrophila-proposed-workflow.png",
    width: 1920,
    height: 1080,
    title: "The proposed workflow",
    caption: "Original diagram from the Vietnamese proposal: planned steps and predicted expression, before experimentation.",
    alt: "Original Vietnamese proposal diagram connecting GFP plasmid preparation, Agrobacterium-mediated transfer, and proposed expression in Hygrophila polysperma. It depicts a plan, not experimental results.",
    kind: "figure" as const,
  },
};
