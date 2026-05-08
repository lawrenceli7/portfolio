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
        className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white/70 px-3 py-2 text-xs font-bold text-gray-300 shadow-sm transition hover:border-teal-200 hover:text-teal-500 lg:flex-col lg:text-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70 dark:hover:text-teal-100"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {IconComponent && <IconComponent className="h-7 w-7 md:h-9 md:w-9" />}
        {item}
      </motion.div>
    );
  };

  const skillsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(skillsRef, { threshold: 0.1 });

  return (
    <motion.div
      className="grid w-full gap-5 transition duration-400 md:grid-cols-2 lg:grid-cols-4"
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
          <h1 className="mb-3 text-center text-base font-black tracking-tight text-gray-500 md:text-xl dark:text-white">
            {section.title}
          </h1>
          <span className="flex flex-wrap items-center justify-center gap-2 rounded-[1.35rem] border border-white/70 bg-white/80 p-3 shadow-xl shadow-teal-900/5 backdrop-blur sm:min-h-40 sm:rounded-[1.5rem] dark:border-white/10 dark:bg-white/[0.06]">
            {section.items.map(renderSkillItem)}
          </span>
        </motion.section>
      ))}
    </motion.div>
  );
};

export default Skills;
