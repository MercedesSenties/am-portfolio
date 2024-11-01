import { TProject } from "@/definitions/types";
import {
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemText,
  Slide,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
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
        onClick={openMore ? () => setOpenMore(false) : () => {}}
        className={`h-full flex shadow-none flex-col bg-white bg-opacity-10 rounded-lg text-[var(--primary-color)] transform transition-transform duration-300 ease-out ${openMore ? "brightness-50" : ""}`}
      >
        <ImageSlider images={project.images} />
        <CardContent className="gap-2 pb-0 flex flex-col justify-between flex-1">
          <div className="flex gap-2 items-center justify-center">
            <h4 className="text-lg">{project.title}</h4>
            {project.buttonSrc && (
              <a href={project.buttonSrc} target="__blank">
                <LuExternalLink className="text-right text-lg hover:scale-125" />
              </a>
            )}
          </div>
          <div className="min-h-10 content-center">
            <div className="flex flex-wrap gap-1 justify-center">
              {project.tags.map((tag) => (
                <p
                  key={tag}
                  className="px-3 rounded-md text-xs bg-white bg-opacity-10"
                >
                  {t(tag)}
                </p>
              ))}
            </div>
          </div>
          <p className="flex-1">{t(project.description)}</p>
          <CardActions className="flex justify-end p-2">
            <div
              onClick={() => setOpenMore(!openMore)}
              className="cursor-pointer"
            >
              {openMore ? (
                <FiMinus className="h-8 w-8" />
              ) : (
                <FiPlus className="w-8 h-8" />
              )}
            </div>
          </CardActions>
        </CardContent>
      </Card>
      <Slide in={openMore} direction="right" container={containerRef.current}>
        <div className="absolute max-w-80 md:max-w-72 top-0 left-0 h-full bg-white px-2 overflow-y-auto z-10 rounded-s-lg">
          <List>
            <ListItem>
              <ListItemText
                primary={t("projects.duration")}
                secondary={t(project.timeline)}
                classes={{
                  secondary:
                    "text-white-lilac-950 dark:text-white-lilac-50 text-sm font-raleway",
                }}
              />
              <Divider className="my-4" />
              {project.role && (
                <>
                  <ListItemText
                    primary={t("projects.role")}
                    secondary={t(project.role)}
                    classes={{
                      secondary:
                        "text-white-lilac-950 dark:text-white-lilac-50 text-sm font-raleway",
                    }}
                  />
                  <Divider className="border-white-lilac-950 dark:border-white-lilac-50 my-4" />
                </>
              )}
              <ListItem component="div" className="!p-0 my-2">
                <h4 className="text-base">{t("projects.contributions")}</h4>
                <ul className="mt-1 font-raleway text-sm list-disc pl-4 text-white-lilac-950 dark:text-white-lilac-50">
                  {project.contributions.map((item) => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
              </ListItem>
              {project.team && project.team.length > 0 && (
                <>
                  <Divider className="border-white-lilac-950 dark:border-white-lilac-50 my-4" />
                  <ListItem component="div" className="!p-0 mt-2">
                    <h4 className="text-base">{t("projects.collaborators")}</h4>
                    <div className="space-y-2 mt-1">
                      {project.team.map((item) => (
                        <div
                          key={item.name}
                          className="shadow rounded-lg py-2 px-3 bg-white-lilac-50 dark:bg-white-lilac-800"
                        >
                          <div className="flex flex-row items-center place-content-between">
                            <p className="text-base font-medium">{item.name}</p>
                            {item.src && (
                              <a href={item.src} target="__blank">
                                <LuExternalLink className="text-right text-lg hover:scale-125" />
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
