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
      "Spearheaded development of One Risk Workbench, a unified risk platform for Credit, Market, and Operational Risks, enabling scalable, multi-domain workflows and role-based dashboards used by 500+ internal users and growing",
      "Created and maintained One Design System, a reusable UI component library adopted by 10+ teams, reducing UI dev time by 50% and enforcing consistent UX standards across Risk domains",
      "Designed and implemented straight-through processing (STP) workflows that cut manual intervention by 60%, ensuring reliability through unit and integration tests and observability with custom metrics",
      "Collaborated in Agile sprints with PMs, designers, and engineers to deliver full-stack features; translated business requirements into scalable, testable code using Web Components and SpringBoot",
      "Proposed and implemented technical debt reduction initiatives that improved CI/CD effi ciency and deployment stability",
    ],
  },
  {
    company: "GEN3 Studios",
    role: "Freelance Engineer",
    duration: "Oct 2021 - Nov 2024",
    description: [
      "Built and deployed multi-chain dApps (Ethereum, Polygon, Cronos, Base, Taiko, Aptos) with scalable architecture and reusable design systems",
      "Delivered end-to-end features such as ERC20/721/1155 Minting, Marketplaces, NFT Staking, Gallery Dashboards and others with strong UX, API and Smart Contract integration",
      "Optimized Web3 data fetching with React Query, GraphQL, and TypeScript, ensuring resilient and performant UI rendering",
    ],
  },
  {
    company: "Affinidi",
    role: "Developer Relations Intern",
    duration: "Mar 2021 - May 2021",
    description: [
      "Built open-source Verifi able Credential solutions using Affi nidi’s API/SDK (3 public GitHub projects)",
      "Delivered web portals for issuance and public verifi cation of digital credentials, adopted for PoCathon 2021, showcasing scalable and privacy-preserving design",
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
