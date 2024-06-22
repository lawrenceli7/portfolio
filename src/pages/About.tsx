import { AnimatePresence, motion } from "framer-motion";
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
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-base text-gray-500 lg:text-xl md:text-lg dark:text-white font-poppins"
      >
        I am a junior at Boston University studying Computer Science. My main
        interests lie in the field of web development and software engineering,
        with a special focus on front-end development.
        <br />
        <br />I am currently looking for an internship for the summer of 2024.
        If you are interested in collaborating or have any projects you think
        would be a good fit, feel free to reach out to me!
      </motion.section>
    );

    setDisplayInfo(meInfo);
  };

  const skillsInfo = () => {
    const meInfo = (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="dark:text-white"
      >
        {Skill.map((item, index) => (
          <SkillsItem
            key={index}
            languages={item.languages}
            frameworks={item.frameworks}
            databases={item.databases}
            tools={item.tools}
          />
        ))}
      </motion.section>
    );

    setDisplayInfo(meInfo);
  };

  const educationInfo = () => {
    const meInfo = (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="dark:text-white"
      >
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
      </motion.section>
    );

    setDisplayInfo(meInfo);
  };

  const experienceInfo = () => {
    const meInfo = (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="dark:text-white"
      >
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
      </motion.section>
    );

    setDisplayInfo(meInfo);
  };

  const aboutRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      ref={aboutRef}
      className="flex flex-col h-screen py-24 mx-auto"
    >
      <h1 className="flex items-center mb-4 text-center dark:hover:text-white">
        <span className="flex flex-grow border-t dark:border-white"></span>
        <span className="mx-2 text-4xl font-bold text-gray-900 dark:text-white relative inline-block cursor-pointer after:absolute after:w-0 after:h-2 after:block after:bg-current after:transition-all after:duration-300 after:left-0 after:-bottom-[5px] after:hover:w-full">
          About
        </span>
        <span className="flex flex-grow border-t dark:border-white"></span>
      </h1>

      <div className="flex justify-center gap-2 p-1 text-base md:gap-8 lg:text-xl md:text-lg">
        <motion.button
          className="p-5 transition-all duration-500 ease-in-out bg-white border-2 border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
          onClick={showMeInfo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Me
        </motion.button>
        <motion.button
          className="p-5 transition-all duration-500 ease-in-out bg-white border-2 border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
          onClick={educationInfo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Education
        </motion.button>
        <motion.button
          className="p-5 transition-all duration-500 ease-in-out bg-white border-2 border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
          onClick={experienceInfo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience
        </motion.button>
        <motion.button
          className="p-5 transition-all duration-500 ease-in-out bg-white border-2 border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white hover:shadow-2xl hover:shadow-teal-100 dark:border-white dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100"
          onClick={skillsInfo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skills
        </motion.button>
      </div>
      <div className="flex flex-col items-center">
        <AnimatePresence>
          {displayInfo && (
            <motion.div
              key="info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="pt-6 text-xl text-gray-500"
            >
              {displayInfo}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default About;
