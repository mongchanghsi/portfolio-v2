import { StaticImageData } from "next/image";
import ReactIcon from "@/assets/images/reactjs.gif";
import NextIcon from "@/assets/images/nextjs.png";
import HTMLIcon from "@/assets/images/html.png";
import CSSIcon from "@/assets/images/css.png";
import JavaIcon from "@/assets/images/java.png";
import JavascriptIcon from "@/assets/images/javascript.png";
import KotlinIcon from "@/assets/images/kotlin.png";
import PostgresIcon from "@/assets/images/postgres.png";
import GSAPIcon from "@/assets/images/gsap.png";
import SpringbootIcon from "@/assets/images/springboot.png";
import SassIcon from "@/assets/images/sass.png";
import ExpressIcon from "@/assets/images/express.png";
import NodeIcon from "@/assets/images/node.png";

type ITechnologyStack = {
  image: StaticImageData | string;
  label: string;
};

export const TechnologyStackData: ITechnologyStack[] = [
  {
    label: "ReactJS",
    image: ReactIcon,
  },
  {
    label: "NextJS",
    image: NextIcon,
  },
  {
    label: "Javascript",
    image: JavascriptIcon,
  },
  {
    label: "HTML",
    image: HTMLIcon,
  },
  {
    label: "CSS",
    image: CSSIcon,
  },
  {
    label: "SASS",
    image: SassIcon,
  },
  {
    label: "Java",
    image: JavaIcon,
  },
  {
    label: "Kotlin",
    image: KotlinIcon,
  },
  {
    label: "Springboot",
    image: SpringbootIcon,
  },
  {
    label: "PostgresSQL",
    image: PostgresIcon,
  },
  {
    label: "NodeJS",
    image: NodeIcon,
  },
  {
    label: "ExpressJS",
    image: ExpressIcon,
  },
  {
    label: "GSAP",
    image: GSAPIcon,
  },
];
