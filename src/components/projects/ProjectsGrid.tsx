import { projectsData } from "@/data/projectsData";
import { ComponentProps } from "@/definitions/types";
import ProjectSingle from "./ProjectSingle";

const Projects: React.FC<ComponentProps> = ({ t }) => {
  return (
    <section className="mt-14 text-center">
      <h3 className="text-xl md:text-3xl">{t("projects.title")}</h3>
      <p className="mt-1">{t("projects.subtitle")}</p>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 mt-8">
        {projectsData.map((project) => (
          <ProjectSingle key={project.title} t={t} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
