import Skills from "@/components/skills/SkillsGrid";
import { intl } from "@/helper/intl";

function AboutMe() {
  return (
    <section id="skills" className="mt-10 sm:mt-20">
      <h2 className="text-center uppercase text-2xl sm:text-4xl mb-1">
        {intl("header.aboutMe")}
      </h2>
      <div className="mt-8 flex md:flex-row items-center content-center gap-12 flex-col">
        <p className="flex-1 text-justify text-lg md:text-2xl lg:text-xl w-full sm:w-2/4 md:w-full lg:w-2/4 font-general-light text-primary-dark dark:text-primary-light">
          {intl("about.description")}
        </p>
        <Skills></Skills>
      </div>
    </section>
  );
}

export default AboutMe;
