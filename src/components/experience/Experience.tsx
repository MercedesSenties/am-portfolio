import Skills from "@/components/experience/SkillsGrid";
import { ComponentProps } from "@/definitions/types";

const Experience: React.FC<ComponentProps> = ({ t }) => {
  return (
    <section className="mt-14 text-center">
      <h3 className="text-xl md:text-3xl mb-8">{t("experience.title")}</h3>
      <Skills></Skills>
    </section>
  );
};

export default Experience;
