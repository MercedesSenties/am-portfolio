import { projectsData } from "@/data/projectsData";
import { ComponentProps } from "@/definitions/types";
import ProjectSingle from "./ProjectSingle";

const Projects: React.FC<ComponentProps> = ({ t }) => {
  return (
    <section id="projects" className="mt-10 sm:mt-20 text-center">
      <h2 className=" uppercase mb-1">{t("header.projects")}</h2>
      <p>{t("projects.intro")}</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 grid-cols-1 mt-5">
        {projectsData.map((project) => (
          <ProjectSingle key={project.title} t={t} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
