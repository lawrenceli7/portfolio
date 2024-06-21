import React from "react";
import ProjectItems from "../components/Project";
import Projects from "../data/projects";

const Project: React.FC = () => {
  return (
    <div id="projects" className="py-24 mt-96">
      <h1 className="flex items-center mb-4 text-center dark:hover:text-white">
        <span className="flex flex-grow border-t dark:border-white"></span>
        <span className="mx-2 mb-2 text-4xl font-bold text-gray-900 underline-hover dark:text-white">
          Projects
        </span>
        <span className="flex flex-grow border-t dark:border-white"></span>
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 dark:text-white">
          {Projects.map((project, index) => (
            <ProjectItems
              key={index}
              imgURL={project.imgURL}
              title={project.title}
              stack={project.stack}
              link={project.link}
              production={project.production}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
