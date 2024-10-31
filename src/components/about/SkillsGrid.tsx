import { Tooltip } from "@mui/material";
import { useState } from "react";
import { skillsData } from "../../data/skillsData";

function SkillsGrid() {
  const [skills] = useState(skillsData);
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {skills.map((skill) => (
        <Tooltip
          key={skill.id}
          title={skill.title}
          followCursor
          placement="bottom"
          className="p-5 bg-white dark:bg-white-lilac-900 rounded-lg shadow-lg"
        >
          <a>
            <skill.icon className="w-10 h-10 text-white-lilac-950 dark:text-white-lilac-50" />
          </a>
        </Tooltip>
      ))}
    </div>
  );
}

export default SkillsGrid;
