export type IExperience = {
  company: string;
  role: string;
  duration: string;
  description: string[];
};

export const ExperienceData: IExperience[] = [
  {
    company: "DBS Bank",
    role: "Software Engineer",
    duration: "Jul 2021 - Present",
    description: [
      "Developed One Risk Workbench, a unified platform for Credit, Market, Operational Risks and Model Analytics, centralizing workflows, dashboards to streamline processes and enhance productivity with personalized, role-based workbenches",
      "Created and managed One Design System, a UI library which is consumed by over 10 projects across the Risk teams",
      "Developed and optimized straight-through processing (STP) workflows across multiple systems, enhancing credit processing efficiency and reducing manual interventions",
      "Collaborated cross-functionally with product managers, designers, and engineers to deliver innovative digital experiences in agile (2-week) sprints",
    ],
  },
  {
    company: "GEN3 Studios",
    role: "Freelance Engineer",
    duration: "Jul 2021 - Present",
    description: [
      "Built, styled, and shipped over 10 high-quality decentralized applications for a diverse array of clients",
      "Developed features such as ERC20/ERC721/ERC1155 Minting, Marketplace, NFT Gallery, Staking and others, deployed on Ethereum, Polygon, Cronos, Base, Taiko and Aptos network",
    ],
  },
  {
    company: "Affinidi",
    role: "Developer Relations Intern",
    duration: "Mar 2021 - May 2021",
    description: [
      "Developed open-source use-cases of Verifiable Credentials using Affinidi's API/SDK",
      "Developed internal issuance and public verification portal of Verifiable Credential Participation Certificate and Awards for Affinidi’s PoCathon 2021 participants",
      "Actively engaging the community as Technical Support for Affinidi's API/SK",
    ],
  },
  {
    company: "GovTech",
    role: "Software Engineer Intern",
    duration: "Aug 2020 - Dec 2020",
    description: [
      "Created and managed UI library and Role-based Access Control system for CORENET X",
    ],
  },
];
