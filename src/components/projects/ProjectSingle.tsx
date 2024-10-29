import { TProject } from "@/definitions/types";
import { SwipeableDrawer } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export interface ComponentProps {
  project: TProject;
}
const ProjectSingle: React.FC<ComponentProps> = ({ project }) => {
  const [openMore, setOpenMore] = React.useState(false);
  const containerRef = React.useRef(null);

  return (
    <>
      <Card
        ref={containerRef}
        className="relative pb-3 px-1 bg-white dark:bg-white-lilac-900 rounded-lg shadow-lg text-white-lilac-950 dark:text-white-lilac-50"
      >
        <CardMedia component="img" height="194" alt="Paella dish" />
        <CardHeader
          action={
            <div onClick={() => setOpenMore(true)}>
              {openMore ? <FiMinus /> : <FiPlus />}
            </div>
          }
          title={project.title}
          subheader={project.timeline}
        />
        <CardContent>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.tags.map((tag) => (
              <h6
                key={tag}
                className="py-1 px-3 bg-white-lilac-50 rounded-lg shadow-lg text-sm dark:bg-white-lilac-800"
              >
                {tag}
              </h6>
            ))}
          </div>
          <p className="mt-5">{project.description}</p>
        </CardContent>
      </Card>
      <SwipeableDrawer
        open={openMore}
        onClose={() => setOpenMore(false)}
        onOpen={() => setOpenMore(true)}
        PaperProps={{ style: { position: "absolute" } }}
        slotProps={{ backdrop: { style: { position: "absolute" } } }}
        ModalProps={{
          container: containerRef.current,
          style: { position: "absolute" },
          keepMounted: true,
        }}
        variant="temporary"
      >
        <span>Some elements</span>
      </SwipeableDrawer>
    </>
  );
};

export default ProjectSingle;
