import Project from "./Project";
import project from "./data/ProjectData.jsx";

function Portfolio() {
  return (
    <div className="min-h-screen" id="projects">
      <h1 className="text-center mb-4 hover:underline animate-text">
        <span className="text-4xl font-bold bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.map((project, index) => (
            <Project
              key={index}
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
