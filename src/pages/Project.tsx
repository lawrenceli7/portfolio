import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectItems from "../components/Project";
import Projects from "../data/projects";

const Project: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative isolate min-h-screen overflow-hidden py-24 p-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_12%,rgba(20,184,166,0.14),transparent_27%),radial-gradient(circle_at_10%_75%,rgba(56,189,248,0.12),transparent_30%)]" />
      <div className="mb-10 grid items-end gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/70 px-4 py-2 text-sm font-bold text-teal-500 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-teal-100">
            Selected work
          </span>
          <h1 className="text-4xl font-black tracking-tight text-gray-500 md:text-5xl dark:text-white">
            Projects that pair engineering with usable product detail.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 dark:text-white/60">
            A mix of full-stack applications, collaboration projects, systems
            work, and interface-heavy builds.
          </p>
        </div>
        <a
          href="https://github.com/lawrenceli7/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-5 py-3 text-sm font-bold text-gray-500 shadow-sm backdrop-blur transition hover:border-teal-200 hover:text-teal-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:hover:border-teal-200"
        >
          GitHub
          <FiArrowUpRight />
        </a>
      </div>
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
    </section>
  );
};

export default Project;
