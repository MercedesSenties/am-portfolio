import Skills from "@/components/about/SkillsGrid";
import { ComponentProps } from "@/definitions/types";

const AboutMe: React.FC<ComponentProps> = ({ t }) => {
  return (
    <section id="skills" className="mt-10 sm:mt-20">
      <h2 className="text-center uppercase mb-1">{t("header.aboutMe")}</h2>
      <div className="mt-8 flex md:flex-row items-center content-center gap-12 flex-col">
        <p className="flex-1 text-justify">{t("about.description")}</p>
        <Skills></Skills>
      </div>
    </section>
  );
};

export default AboutMe;
