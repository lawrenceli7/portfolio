import { Image } from "antd";
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
          scale: 1.05,
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
        }}
        className="overflow-hidden transition-transform duration-300 ease-in-out transform border-2 border-gray-400 shadow-2xl rounded-2xl dark:border-white dark:hover:border-purple-100 hover:border-teal-200"
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <Image src={imgURL} alt="Project Image" />
        </motion.div>
        <div className="w-full p-4">
          <div className="flex justify-between">
            <motion.h3
              className="mb-4 text-lg font-semibold text-gray-500 md:text-xl md:mb-3 dark:text-white relative inline-block cursor-pointer after:absolute after:w-0 after:h-2 after:block after:bg-current after:transition-all after:left-0 after:-bottom-[5px] after:hover:w-full after:duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {title}
            </motion.h3>
            <div className="flex gap-3">
              <motion.button
                onClick={() =>
                  window.open(production, "_blank", "noopener,noreferrer")
                }
                className="rounded-lg"
                aria-label="Live Link"
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <VscLiveShare size={25} className="mb-4" />
              </motion.button>
              <motion.button
                onClick={handleGitHubClick}
                className="rounded-lg"
                aria-label="GitHub Link"
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <FaGithub size={25} className="mb-4" />
              </motion.button>
            </div>
          </div>
          <motion.p
            className="p-2 mt-2 mb-4 text-sm text-gray-400 border border-gray-500 rounded-md dark:border-white md:text-base dark:text-gray-100"
            whileHover={{ scale: 1.05 }}
          >
            {description}
          </motion.p>
          <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
            {stack.map((item, index) => {
              const IconComponent = projectIcons[item];
              return (
                <motion.span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 font-semibold transition-all duration-300 ease-in-out border-2 border-gray-100 rounded-xl dark:border-white hover:border-teal-100 dark:hover:border-purple-300 hover:bg-gray-400 dark:hover:bg-white dark:hover:text-gray-500 hover:text-white"
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
