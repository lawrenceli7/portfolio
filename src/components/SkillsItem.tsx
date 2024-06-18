import React from "react";

interface SkillsItemProps {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
}

const SkillsItem: React.FC<SkillsItemProps> = ({
  languages,
  frameworks,
  databases,
  tools,
}) => {
  return (
    <div>
      <h1 className="mb-1 text-2xl">Languages:</h1>
      <p className="flex flex-row flex-wrap items-center justify-start gap-2 mb-4 text-xs md:text-sm">
        {languages.map((item, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 font-semibold bg-white border-2 border-gray-100 shadow-md rounded-xl shadow-teal-200 dark:border-white dark:shadow-purple-100 dark:bg-slate-800"
          >
            {item}
          </span>
        ))}
      </p>
      <h1 className="mb-1 text-2xl">Frameworks:</h1>
      <p className="flex flex-row flex-wrap items-center justify-start gap-2 mb-4 text-xs md:text-sm">
        {frameworks.map((item, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 font-semibold bg-white border-2 border-gray-100 shadow-md rounded-xl shadow-teal-200 dark:border-white dark:shadow-purple-100 dark:bg-slate-800"
          >
            {item}
          </span>
        ))}
      </p>
      <h1 className="mb-1 text-2xl">Databases:</h1>
      <p className="flex flex-row flex-wrap items-center justify-start gap-2 mb-4 text-xs md:text-sm">
        {databases.map((item, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 font-semibold bg-white border-2 border-gray-100 shadow-md rounded-xl shadow-teal-200 dark:border-white dark:shadow-purple-100 dark:bg-slate-800"
          >
            {item}
          </span>
        ))}
      </p>
      <h1 className="mb-1 text-2xl">Tools:</h1>
      <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
        {tools.map((item, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 font-semibold bg-white border-2 border-gray-100 shadow-md rounded-xl shadow-teal-200 dark:border-white dark:shadow-purple-100 dark:bg-slate-800"
          >
            {item}
          </span>
        ))}
      </p>
    </div>
  );
};

export default SkillsItem;
