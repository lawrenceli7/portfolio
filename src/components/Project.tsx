import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import projectIcons from "../data/projectIcons";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "../styles/project.css";

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
    <div
      ref={projectRef}
      className={`${isVisible ? "project-fade-in" : "project-fade-out"}`}
    >
      <div className="overflow-hidden transition-transform duration-300 ease-in-out transform border-2 border-gray-400 shadow-lg  rounded-2xl shadow-teal-200 dark:border-white dark:shadow-purple-200 hover:scale-105 hover:shadow-xl dark:hover:shadow-purple-400 hover:shadow-teal-400">
        <img
          src={imgURL}
          alt="Place Holder"
          className="object-cover w-full cursor-pointer h-36 md:h-48 hover:animate-pulse"
        />
        <div className="w-full p-4">
          <div className="flex justify-between">
            <h3 className="mb-4 text-lg font-semibold text-gray-500 md:text-xl md:mb-3 dark:text-white underline-hover">
              {title}
            </h3>
            <button
              onClick={handleGitHubClick}
              className="rounded-lg hover:animate-bounce"
              aria-label="GitHub Link"
            >
              <FaGithub size={25} className="mb-4" />
            </button>
          </div>
          <p className="p-2 mb-4 text-sm text-gray-400 border border-gray-500 rounded-md dark:border-white md:text-base dark:text-gray-100">
            {description}
          </p>
          <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
            {stack.map((item, index) => {
              const IconComponent = projectIcons[item];
              return (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 font-semibold transition-all duration-300 ease-in-out border-2 border-gray-100 rounded-xl dark:border-white hover:border-teal-100 dark:hover:border-purple-300 hover:bg-gray-400 dark:hover:bg-white dark:hover:text-gray-500 hover:text-white"
                >
                  <IconComponent size={16} />
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
