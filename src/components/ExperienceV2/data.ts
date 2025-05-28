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
      "Developed One Risk Workbench, a unifi ed platform for Credit, Market, Operational Risks and Model Analytics — streamlining workfl ows across domains via a personalized, role-based dashboards",
      "Created and managed One Design System, a UI components library which is consumed by 10+ projects across the Risk teams, reducing UI development time by 50% and standardizing UX across teams",
      "Developed and optimized straight-through processing (STP) workfl ows across multiple systems, enhancing credit processing effi ciency and reducing manual interventions by 60%",
      "Collaborated with PMs, designers, and engineers to ship cross-functional features in agile 2-week sprints",
    ],
  },
  {
    company: "GEN3 Studios",
    role: "Freelance Engineer",
    duration: "Oct 2021 - Nov 2024",
    description: [
      "Built and shipped decentralized applications (dApps) for multiple clients, focused on scalability, design systems, and user experience",
      "Developed features such as ERC20/ERC721/ERC1155 Minting, Marketplace, NFT Gallery, Staking and others, deployed on Ethereum, Polygon, Cronos, Base, Taiko and Aptos network",
    ],
  },
  {
    company: "Affinidi",
    role: "Developer Relations Intern",
    duration: "Mar 2021 - May 2021",
    description: [
      "Developed open-source use-cases of Verifi able Credentials using Affinidi’s API/SDK",
      "Developed issuance and public verifi cation portal of Verifi able Credential Participation Certifi cate and Awards for Affi nidi’s PoCathon 2021 participants",
    ],
  },
  {
    company: "GovTech",
    role: "Software Engineer Intern",
    duration: "Aug 2020 - Dec 2020",
    description: [
      "Implemented UI component library and Role-Based Access Control (RBAC) system for CORENET X platform",
    ],
  },
];
