import React from "react";
import skillsIcons from "../data/skillsIcons";

interface SkillsItemProps {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
}

const Skills: React.FC<SkillsItemProps> = ({
  languages,
  frameworks,
  databases,
  tools,
}) => {
  const renderSkillItem = (item: string, index: number) => {
    const IconComponent = skillsIcons[item];
    return (
      <span
        key={index}
        className="inline-flex flex-col items-center gap-1 px-2 py-1 text-base font-semibold transition-transform duration-300 ease-in-out transform hover:scale-110 dark:hover:text-purple-100 hover:text-teal-200"
      >
        {IconComponent && <IconComponent size={40} />}
        {item}
      </span>
    );
  };

  return (
    <div className="gap-4 lg:flex lg:justify-center md:grid md:grid-cols-2 md:grid-rows-2">
      <section className="w-full">
        <h1 className="mb-2 text-3xl text-center font-shoulders">Languages</h1>
        <p className="flex flex-wrap items-center justify-center gap-2 p-2 mb-4 bg-white border-2 border-teal-200 rounded-lg dark:border-purple-100 dark:bg-black md:text-sm font-dosis">
          {languages.map(renderSkillItem)}
        </p>
      </section>
      <section className="w-full">
        <h1 className="mb-2 text-3xl text-center font-shoulders">Frameworks</h1>
        <p className="flex flex-wrap items-center justify-center gap-2 p-2 mb-4 bg-white border-2 border-teal-200 rounded-lg dark:bg-black md:text-sm dark:border-purple-100 font-dosis">
          {frameworks.map(renderSkillItem)}
        </p>
      </section>
      <section className="w-full">
        <h1 className="mb-2 text-3xl text-center font-shoulders">Databases</h1>
        <p className="flex flex-wrap items-center justify-center gap-2 p-2 mb-4 bg-white border-2 border-teal-200 rounded-lg dark:bg-black md:text-sm dark:border-purple-100 font-dosis">
          {databases.map(renderSkillItem)}
        </p>
      </section>
      <section className="w-full">
        <h1 className="mb-2 text-3xl text-center font-shoulders">Tools</h1>
        <p className="flex flex-wrap items-center justify-center gap-2 p-2 bg-white border-2 border-teal-200 rounded-lg dark:bg-black md:text-sm dark:border-purple-100 font-dosis">
          {tools.map(renderSkillItem)}
        </p>
      </section>
    </div>
  );
};

export default Skills;
