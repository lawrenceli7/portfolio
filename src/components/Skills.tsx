import { motion } from "framer-motion";
import React, { useRef } from "react";
import skillsIcons from "../data/skillsIcons";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

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
      <motion.div
        key={index}
        className="inline-flex flex-col items-center gap-1 px-2 py-1 text-base font-semibold transition-transform duration-300 ease-in-out transform hover:scale-110 dark:hover:text-purple-100 hover:text-teal-200"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {IconComponent && <IconComponent size={40} />}
        {item}
      </motion.div>
    );
  };

  const skillsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(skillsRef, { threshold: 0.1 });

  return (
    <motion.div
      className="gap-4 transition lg:flex lg:justify-center md:grid md:grid-cols-2 md:grid-rows-2 duration-400"
      ref={skillsRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5 }}
    >
      {[
        { title: "Languages", items: languages },
        { title: "Frameworks", items: frameworks },
        { title: "Databases", items: databases },
        { title: "Tools", items: tools },
      ].map((section, index) => (
        <motion.section
          key={index}
          className="w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ delay: index * 0.3 }}
        >
          <h1 className="mb-2 text-3xl text-center font-roboto">
            {section.title}
          </h1>
          <span className="flex flex-wrap items-center justify-center gap-2 p-2 mb-4 bg-white border-2 border-teal-200 rounded-lg dark:border-purple-100 dark:bg-gray-500 md:text-sm font-dosis">
            {section.items.map(renderSkillItem)}
          </span>
        </motion.section>
      ))}
    </motion.div>
  );
};

export default Skills;
