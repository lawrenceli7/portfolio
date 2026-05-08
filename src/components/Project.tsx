import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";
import projectIcons from "../data/projectIcons";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface ProjectItemsProps {
  title: string;
  imgURL: string;
  stack: string[];
  link: string;
  production: string;
  description: string;
}

const ProjectItems: React.FC<ProjectItemsProps> = ({
  title,
  imgURL,
  stack,
  link,
  production,
  description,
}) => {
  const handleGitHubClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const projectRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(projectRef, { threshold: 0.1 });

  return (
    <motion.div
      ref={projectRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
    >
      <motion.div
        whileHover={{
          y: -8,
          boxShadow: "0px 24px 60px rgba(15, 23, 42, 0.14)",
        }}
        className="group h-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 shadow-2xl shadow-teal-900/5 backdrop-blur transition-transform duration-300 ease-in-out dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-teal-200"
      >
        <motion.div
          className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-white/5"
          whileHover={{ scale: 1.04 }}
        >
          <img
            src={imgURL}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-500/55 to-transparent opacity-0 transition group-hover:opacity-100" />
        </motion.div>
        <div className="flex min-h-72 w-full flex-col p-5">
          <div className="flex justify-between">
            <div>
              <span className="mb-2 inline-flex rounded-full border border-teal-200/70 px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-teal-500 dark:border-white/10 dark:text-teal-100">
                Case Study
              </span>
              <motion.h3
                className="mb-4 text-lg font-black text-gray-500 md:mb-3 md:text-xl dark:text-white"
                whileHover={{ x: 2 }}
              >
                {title}
              </motion.h3>
            </div>
            <div className="flex gap-3">
              <motion.button
                onClick={() =>
                  window.open(production, "_blank", "noopener,noreferrer")
                }
                className="rounded-full p-1 text-gray-300 transition hover:bg-teal-50 hover:text-teal-500 dark:text-white/70 dark:hover:bg-white/10"
                aria-label="Live Link"
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <VscLiveShare size={25} className="mb-4" />
              </motion.button>
              <motion.button
                onClick={handleGitHubClick}
                className="rounded-full p-1 text-gray-300 transition hover:bg-teal-50 hover:text-[#2dba4e] dark:text-white/70 dark:hover:bg-white/10"
                aria-label="GitHub Link"
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <FaGithub size={25} className="mb-4" />
              </motion.button>
            </div>
          </div>
          <motion.p
            className="mb-4 mt-2 flex-1 text-sm leading-7 text-gray-300 md:text-base dark:text-white/65"
            whileHover={{ x: 2 }}
          >
            {description}
          </motion.p>
          <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
            {stack.map((item, index) => {
              const IconComponent = projectIcons[item];
              return (
                <motion.span
                  key={index}
                  className="inline-flex items-center gap-1 rounded-full border border-gray-100 bg-white/70 px-2.5 py-1 font-bold text-gray-300 transition-all duration-300 ease-in-out hover:border-teal-200 hover:text-teal-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65 dark:hover:text-teal-100"
                  whileHover={{ scale: 1.1 }}
                >
                  <IconComponent size={16} />
                  {item}
                </motion.span>
              );
            })}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectItems;
