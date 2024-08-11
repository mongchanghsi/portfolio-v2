import { StaticImageData } from "next/image";
import GithubIcon from "@/assets/images/github.png";
import LinkedInIcon from "@/assets/images/linkedin.png";
import CVIcon from "@/assets/images/cv.png";

export enum SocialEnum {
  GITHUB = "GITHUB",
  CV = "CV",
  PORTFOLIO = "PORTFOLIO",
  LINKEDIN = "LINKEDIN",
}

export type ISocial = {
  id: string;
  image: StaticImageData | string;
  label: string;
  url: string;
};

export const SocialData: { [key: string]: ISocial } = {
  [SocialEnum.GITHUB]: {
    id: "github",
    image: GithubIcon,
    label: "Github",
    url: "https://github.com/mongchanghsi",
  },
  [SocialEnum.LINKEDIN]: {
    id: "linkedin",
    image: LinkedInIcon,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ericmongchanghsi/",
  },
  [SocialEnum.CV]: {
    id: "cv",
    image: CVIcon,
    label: "Curriculum Vitae",
    url: "https://docs.google.com/document/d/1MkuUysCMzyu29fFmYEqqzyrmsi0ib2pV/edit?usp=sharing&ouid=118077442025033639167&rtpof=true&sd=true",
  },
};
