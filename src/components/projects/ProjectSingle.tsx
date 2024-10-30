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

export interface ComponentProps {
  t: (key: string) => string;
  project: TProject;
}
const ProjectSingle: React.FC<ComponentProps> = ({ t, project }) => {
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
        className={`shadow-none bg-white dark:bg-white-lilac-900 rounded-lg text-white-lilac-950 dark:text-white-lilac-50 transform transition-transform duration-300 ease-out ${openMore ? "brightness-50" : ""}`}
      >
        <span onClick={openMore ? () => setOpenMore(false) : () => {}}>
          <ImageSlider images={project.images} />
          <CardContent className="space-y-2 pb-0">
            <div className="flex gap-2 items-center justify-center">
              <h4 className="text-lg">{project.title}</h4>
              {project.buttonSrc && (
                <a href={project.buttonSrc} target="__blank">
                  <LuExternalLink className="text-right text-lg hover:scale-125" />
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-1 justify-center">
              {project.tags.map((tag) => (
                <p
                  key={tag}
                  className="px-3 bg-white-lilac-50 border border-white-lilac-900 dark:border-white-lilac-50 rounded-md text-xs dark:bg-white-lilac-800"
                >
                  {tag}
                </p>
              ))}
            </div>
            <p>{project.description}</p>
          </CardContent>
          <CardActions className="justify-end">
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
        </span>
      </Card>
      <Slide in={openMore} direction="right" container={containerRef.current}>
        <div className="absolute max-w-72 top-0 left-0 h-full bg-white dark:bg-white-lilac-900 px-2 overflow-y-auto z-10 rounded-s-lg">
          <List>
            <ListItem>
              <ListItemText
                primary={t("projects.duration")}
                secondary={project.timeline}
                classes={{
                  secondary:
                    "text-white-lilac-950 dark:text-white-lilac-50 text-sm font-raleway",
                }}
              />
              <Divider className="border-white-lilac-950 dark:border-white-lilac-50 my-4" />
              {project.role && (
                <>
                  <ListItemText
                    primary={t("projects.role")}
                    secondary={project.role}
                    classes={{
                      secondary:
                        "text-white-lilac-950 dark:text-white-lilac-50 text-sm font-raleway",
                    }}
                  />
                  <Divider className="border-white-lilac-950 dark:border-white-lilac-50 my-4" />
                </>
              )}
              <ListItem component="div" className="p-0">
                <h4 className="text-base">{t("projects.contributions")}</h4>
                <ul className="mt-1 font-raleway text-sm list-disc pl-4 text-white-lilac-950 dark:text-white-lilac-50">
                  {project.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </ListItem>
              {project.team && project.team.length > 0 && (
                <>
                  <Divider className="border-white-lilac-950 dark:border-white-lilac-50 my-4" />
                  <ListItem component="div" className="p-0">
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
                          <p className="text-left text-xs">{item.role}</p>
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
