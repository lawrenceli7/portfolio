import React from "react";
import ProjectItems from "../components/Project";
import Projects from "../data/projects";

const Project: React.FC = () => {
  return (
    <div id="projects">
      <h1 className="mb-4 text-center hover:underline hover:underline-offset-8 dark:hover:text-white">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">
          Projects
        </span>
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 dark:text-white">
          {Projects.map((project, index) => (
            <ProjectItems
              key={index}
              imgURL={project.imgURL}
              title={project.title}
              stack={project.stack}
              link={project.link}
              production={project.production}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
