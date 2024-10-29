import { IconType } from "react-icons";

export type TLang = "es" | "en" | "it";

export type TTheme = "dark" | "light";

export type TSkill = {
  id: string;
  title: string;
  icon: IconType;
};

export type TProject = {
  title: string;
  description: string;
  tags: string[];
  role: string;
  timeline: string;
  images: TImage[];
  team?: TTeamMember[];
};

type TTeamMember = {
  name: string;
  role: string;
  src: string;
};

type TImage = {
  src: string;
  type: string;
};

export interface ComponentProps {
  t: (key: string) => string;
}
