type IExperience = {
  company: string;
  role: string;
  duration: string;
  description: string[];
};

export const ExperienceData: IExperience[] = [
  {
    company: "DBS Bank",
    role: "Software Engineer",
    duration: "JUL 2021 - PRESENT",
    description: [
      "Developed reusable UI components and widgets as a npm package, used by various teams",
      "Developed and maintained multiple loan platforms which enhances SME experiences in various countries which processes hundreds of applications daily",
    ],
  },
  {
    company: "Affinidi",
    role: "Developer Relations Intern",
    duration: "MAR 2021 - MAY 2021",
    description: [
      "Developed open-source use-cases of Verifiable Credentials using Affinidi's API/SDK",
      "Developed internal issuance and public verification portal of Verifiable Credential Participation Certificate and Awards for Affinidi’s PoCathon 2021 participants",
      "Actively engaging the community as Technical Support for Affinidi's API/SK",
    ],
  },
  {
    company: "GovTech",
    role: "Software Engineer Intern",
    duration: "AUG 2020 - DEC 2020",
    description: [
      "Developed reusable frontend components for a government agency portal",
      "Developed role-based access control POC on both frontend and backend",
    ],
  },
];
