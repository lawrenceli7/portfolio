import { useEffect, useState } from "react";
import EducationItem from "../components/EducationItem";
import ExperienceItem from "../components/ExperienceItem";
import SkillsItem from "../components/SkillsItem";
import Education from "../data/Education";
import Experience from "../data/Experience";
import Skill from "../data/Skills";

function About() {
  const [displayInfo, setDisplayInfo] = useState("");

  useEffect(() => {
    showMeInfo();
  }, []);

  const showMeInfo = () => {
    const meInfo = (
      <div className="text-base text-gray-500 lg:text-xl md:text-lg dark:text-white">
        I am a junior at Boston University studying Computer Science. My main
        interests lie in the field of web development and software engineering,
        with a special focus on front-end development.
        <br />
        <br />I am currently looking for an internship for the summer of 2024.
        If you are interested in collaborating or have any projects you think
        would be a good fit, feel free to reach out to me!
      </div>
    );

    setDisplayInfo(meInfo);
  };

  const skillsInfo = () => {
    const meInfo = (
      <div className="dark:text-white">
        {Skill.map((item, index) => (
          <SkillsItem
            key={index}
            languages={item.languages}
            frameworks={item.frameworks}
            databases={item.databases}
            tools={item.tools}
          />
        ))}
      </div>
    );

    setDisplayInfo(meInfo);
  };

  const educationInfo = () => {
    const meInfo = (
      <div className="dark:text-white">
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
      </div>
    );

    setDisplayInfo(meInfo);
  };

  const experienceInfo = () => {
    const meInfo = (
      <div className="dark:text-white">
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
      </div>
    );

    setDisplayInfo(meInfo);
  };

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center h-screen mx-auto"
    >
      <h1 className="mb-4 text-center hover:underline hover:underline-offset-8 dark:hover:text-white">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">
          About
        </span>
      </h1>
      <div className="flex flex-row gap-2 p-1 text-base md:gap-8 lg:text-xl md:text-lg">
        <div>
          <button
            className="p-5 bg-white border-2 border-gray-500 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 hover:animate-pulse dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
            onClick={showMeInfo}
          >
            Me
          </button>
        </div>
        <button
          className="p-5 bg-white border-2 border-gray-500 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 hover:animate-pulse dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
          onClick={educationInfo}
        >
          Education
        </button>
        <button
          className="p-5 bg-white border-2 border-gray-500 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 hover:animate-pulse dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
          onClick={experienceInfo}
        >
          Experience
        </button>
        <button
          className="p-5 bg-white border-2 border-gray-500 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 hover:animate-pulse dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
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
}

export default About;
