import React from "react";
import Project from "./Project";
import project from "./data/project";

function Portfolio() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-left mb-4 text-stone-900 text-decoration-line: underline">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.map((project) => (
            <Project
              imgURL={project.imgURL}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
