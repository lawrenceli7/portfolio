import { Divider } from "antd";
import React from "react";
import { FaSquareGithub } from "react-icons/fa6";

interface ProjectItemsProps {
  title: string;
  imgURL: string;
  stack: string[];
  link: string;
  production: string;
}

const ProjectItems: React.FC<ProjectItemsProps> = ({
  title,
  imgURL,
  stack,
  link,
  production,
}) => {
  const handleGitHubClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={production}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden transition-transform duration-300 ease-in-out transform border-2 border-gray-400 shadow-lg rounded-2xl shadow-teal-200 dark:border-white dark:shadow-purple-200 hover:scale-105 hover:shadow-xl dark:hover:shadow-purple-400 hover:shadow-teal-400"
    >
      <img
        src={imgURL}
        alt="Place Holder"
        className="object-cover w-full cursor-pointer h-36 md:h-48 hover:animate-pulse"
      />
      <div className="w-full p-4">
        <div className="flex justify-between">
          <h3 className="mb-2 text-lg font-semibold text-gray-500 md:text-xl md:mb-3 dark:text-white">
            {title}
          </h3>
          <button
            onClick={handleGitHubClick}
            className="rounded-lg hover:animate-bounce"
            aria-label="GitHub Link"
          >
            <FaSquareGithub size={25} />
          </button>
        </div>
        <Divider className="bg-gray-100 dark:bg-white" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-gray-100 rounded-xl dark:border-white"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default ProjectItems;
