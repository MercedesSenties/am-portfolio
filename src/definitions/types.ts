import { IconType } from "react-icons";

export type TLang = "es" | "en" | "it";

export type TSkill = {
  id: string;
  title: string;
  icon: IconType;
};

export type TProject = {
  images: TImage[];
  title: string;
  tags: string[];
  description: string;
  timeline: string;
  role?: string;
  contributions: string[];
  team?: TTeamMember[];
  buttonSrc?: string;
};

type TTeamMember = {
  name: string;
  role: string;
  src?: string;
};

export type TImage = {
  src: string;
  type: string;
};

export type TThemeColor = {
  background: string;
  primary100: string;
  primary33: string;
  primary15: string;
  primary5: string;
};

export interface ComponentProps {
  t: (key: string) => string;
}
