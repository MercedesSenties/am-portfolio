import { TProject } from "@/definitions/types";
import { CardActions, Divider, List, ListItem, Slide } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { FiExternalLink, FiMinus, FiPlus } from "react-icons/fi";
import ImageSlider from "./ImageSlider";

export interface ProjectProps {
  t: (key: string) => string;
  project: TProject;
}
const ProjectSingle: React.FC<ProjectProps> = ({ t, project }) => {
  const [openMore, setOpenMore] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const containerRef = React.useRef(null);

  // Ensures that this component only renders fully after mounting on the client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !project) return null;

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <Card
        className={`h-full flex shadow-none flex-col bg-primary-5 rounded-lg text-primary transform transition-transform duration-300 ease-out`}
      >
        {openMore && (
          <div
            className="w-full h-full bg-black bg-opacity-50 absolute z-10 cursor-pointer"
            onClick={() => setOpenMore(false)}
          ></div>
        )}
        <ImageSlider images={project.images} />
        <CardContent
          className="gap-2 pb-0 flex flex-col justify-between flex-1 cursor-pointer"
          onClick={() => setOpenMore(!openMore)}
        >
          <div className="flex gap-2 items-center justify-center">
            <h3 className="text-xl">{project.title}</h3>
            {project.buttonSrc && (
              <a href={project.buttonSrc} target="__blank">
                <FiExternalLink className="text-lg hover:scale-125 transition-transform duration-500" />
              </a>
            )}
          </div>
          <div className="min-h-10 content-center">
            <div className="flex flex-wrap gap-1 justify-center">
              {project.tags.map((tag) => (
                <p key={tag} className="px-3 rounded-md text-xs bg-primary-15">
                  {t(tag)}
                </p>
              ))}
            </div>
          </div>
          <p className="flex-1 text-left">{t(project.description)}</p>
          <CardActions className="flex justify-end p-2">
            {openMore ? (
              <FiMinus className="h-8 w-8" />
            ) : (
              <FiPlus className="w-8 h-8 hover:scale-125 transition-transform duration-500" />
            )}
          </CardActions>
        </CardContent>
      </Card>
      <Slide in={openMore} direction="right" container={containerRef.current}>
        <div className="absolute max-w-[70%] bg-primary text-background top-0 left-0 h-full px-2 overflow-y-auto z-10 rounded-s-lg">
          <List>
            <ListItem>
              <ListItem component="div" disablePadding className="my-2">
                <h4 className="text-base">{t("projects.duration")}</h4>
                <p className="text-sm">{t(project.timeline)}</p>
              </ListItem>
              <Divider className="my-4 border-background" />
              {project.role && (
                <>
                  <ListItem component="div" disablePadding className="my-2">
                    <h4 className="text-base">{t("projects.role")}</h4>
                    <p className="text-sm">{t(project.role)}</p>
                  </ListItem>
                  <Divider className="my-4 border-background" />
                </>
              )}
              <ListItem component="div" disablePadding className="my-2">
                <h4 className="text-base">{t("projects.contributions")}</h4>
                <ul className="mt-1 font-raleway text-sm list-disc pl-4">
                  {project.contributions.map((item) => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
              </ListItem>
              {project.team && project.team.length > 0 && (
                <>
                  <Divider className="my-4 border-background" />
                  <ListItem component="div" disablePadding className="mt-2">
                    <h4 className="text-base">{t("projects.collaborators")}</h4>
                    <div className="space-y-2 mt-1">
                      {project.team.map((item) => (
                        <div
                          key={item.name}
                          className="shadow rounded-lg py-2 px-3 bg-white bg-opacity-20"
                        >
                          <div className="flex flex-row items-center place-content-between">
                            <p className="text-base font-medium">{item.name}</p>
                            {item.src && (
                              <a href={item.src} target="__blank">
                                <FiExternalLink className="text-lg hover:scale-125 transition-transform duration-500" />
                              </a>
                            )}
                          </div>
                          <p className="text-left text-xs">{t(item.role)}</p>
                        </div>
                      ))}
                    </div>
                  </ListItem>
                </>
              )}
            </ListItem>
          </List>
        </div>
      </Slide>
    </div>
  );
};

export default ProjectSingle;
