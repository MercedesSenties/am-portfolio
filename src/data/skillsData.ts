import { TSkill } from "@/definitions/types";
import {
  SiCsharp,
  SiGoogleanalytics,
  SiIonic,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiWordpress,
} from "react-icons/si";

export const skillsData: TSkill[] = [
  {
    id: "react",
    title: "React",
    icon: SiReact,
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: SiNextdotjs,
  },
  {
    id: "ionic",
    title: "Ionic",
    icon: SiIonic,
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: SiTypescript,
  },
  {
    id: "tailwind",
    title: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: SiJavascript,
  },
  {
    id: "c-sharp",
    title: "C#",
    icon: SiCsharp,
  },
  {
    id: "wordpress",
    title: "WordPress",
    icon: SiWordpress,
  },
  {
    id: "analytics",
    title: "Google Analytics",
    icon: SiGoogleanalytics,
  },
  {
    id: "unity",
    title: "Unity",
    icon: SiUnity,
  },
];
