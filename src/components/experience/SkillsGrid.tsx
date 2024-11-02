import { skillsData } from "../../data/skillsData";

const SkillsGrid = () => {
  const skills = skillsData;

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-3">
      {skills.map((skill) => (
        <div
          className="p-5 bg-primary-5 rounded-lg shadow-lg relative"
          key={skill.id}
        >
          <skill.icon className="w-10 h-10 mx-auto" />
          <p className="leading-tight mt-2">{skill.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
