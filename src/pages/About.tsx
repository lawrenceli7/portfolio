import React, { useEffect, useRef, useState } from "react";
import EducationItem from "../components/Education";
import ExperienceItem from "../components/Experience";
import SkillsItem from "../components/Skills";
import Education from "../data/education";
import Experience from "../data/experience";
import Skill from "../data/skills";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const About: React.FC = () => {
  const [displayInfo, setDisplayInfo] = useState<JSX.Element | null>(null);

  useEffect(() => {
    showMeInfo();
  }, []);

  const showMeInfo = () => {
    const meInfo = (
      <section className="text-base text-gray-500 lg:text-xl md:text-lg dark:text-white">
        I am a junior at Boston University studying Computer Science. My main
        interests lie in the field of web development and software engineering,
        with a special focus on front-end development.
        <br />
        <br />I am currently looking for an internship for the summer of 2024.
        If you are interested in collaborating or have any projects you think
        would be a good fit, feel free to reach out to me!
      </section>
    );

    setDisplayInfo(meInfo);
  };

  const skillsInfo = () => {
    const meInfo = (
      <section className="dark:text-white">
        {Skill.map((item, index) => (
          <SkillsItem
            key={index}
            languages={item.languages}
            frameworks={item.frameworks}
            databases={item.databases}
            tools={item.tools}
          />
        ))}
      </section>
    );

    setDisplayInfo(meInfo);
  };

  const educationInfo = () => {
    const meInfo = (
      <section className="dark:text-white">
        {Education.map((item, index) => (
          <EducationItem
            key={index}
            school={item.school}
            name={item.name}
            degree={item.degree}
            duration={item.duration}
            coursework={item.coursework}
          />
        ))}
      </section>
    );

    setDisplayInfo(meInfo);
  };

  const experienceInfo = () => {
    const meInfo = (
      <section className="dark:text-white">
        {Experience.map((item, index) => (
          <ExperienceItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            location={item.location}
            details={item.details}
          />
        ))}
      </section>
    );

    setDisplayInfo(meInfo);
  };

  const aboutRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });

  return (
    <div
      id="about"
      className={`flex flex-col h-screen py-24 mx-auto ${
        isVisible
          ? "opacity-1 transition-opacity duration-[2000ms] ease-in"
          : "opacity-0 transition-opacity duration-[2000ms] ease-out"
      }`}
      ref={aboutRef}
    >
      <h1 className="flex items-center mb-4 text-center dark:hover:text-white">
        <span className="flex flex-grow border-t dark:border-white"></span>
        <span className="mx-2 text-4xl font-bold text-gray-900 dark:text-white relative inline-block cursor-pointer after:absolute after:w-0 after:h-2 after:block after:bg-current after:transition-all after:duration-300 after:left-0 after:-bottom-[5px] after:hover:w-full">
          About
        </span>
        <span className="flex flex-grow border-t dark:border-white"></span>
      </h1>

      <div className="flex justify-center gap-2 p-1 text-base md:gap-8 lg:text-xl md:text-lg">
        <div>
          <button
            className="p-5 transition-all duration-500 ease-in-out bg-white border-2 border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 hover:animate-pulse dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
            onClick={showMeInfo}
          >
            Me
          </button>
        </div>
        <button
          className="p-5 transition-all duration-500 ease-in-out bg-white border-2 border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 hover:animate-pulse dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
          onClick={educationInfo}
        >
          Education
        </button>
        <button
          className="p-5 transition-all duration-500 ease-in-out bg-white border-2 border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 hover:animate-pulse dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
          onClick={experienceInfo}
        >
          Experience
        </button>
        <button
          className="p-5 transition-all duration-500 ease-in-out bg-white border-2 border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 hover:animate-pulse dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
          onClick={skillsInfo}
        >
          Skills
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="pt-6 text-xl text-gray-500">{displayInfo}</div>
      </div>
    </div>
  );
};

export default About;
