import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { IoIosMail } from "react-icons/io";
import EducationItem from "../components/Education";
import ExperienceItem from "../components/Experience";
import SkillsItem from "../components/Skills";
import Education from "../data/education";
import Experience from "../data/experience";
import Skill from "../data/skills";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import scrollTo from "../utils/scrollTo";

const About: React.FC = () => {
  const [displayInfo, setDisplayInfo] = useState<JSX.Element | null>(null);
  const [activeButton, setActiveButton] = useState<string>("Me");

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
        whileHover={{ scale: 1.03 }}
        className="p-6 text-base text-gray-700 bg-white rounded-lg shadow-lg lg:text-lg md:text-md dark:text-white font-poppins dark:bg-gray-800"
      >
        <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Hello
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="#42ade2">
              <path d="M16.1 48.5c-.5-.1-.9-.2-1.4-.4c-.5-.2-.9-.3-1.3-.5c-.9-.4-1.7-.9-2.5-1.5C9.3 45 8 43.5 7 41.7C6 40 5.4 38 5.3 36.1c-.1-1 0-1.9.1-2.9c.1-.5.2-.9.3-1.4c.1-.5.3-.9.4-1.4l.1 1.4c0 .5.1.9.2 1.4c.1.9.3 1.8.5 2.6c.4 1.7 1 3.3 1.9 4.8c.9 1.5 1.9 2.9 3.2 4.2c.6.6 1.3 1.2 2 1.8c.3.3.7.6 1.1.9l1 1"></path>
              <path d="M15.8 52.1c-.3.2-.7.3-1.1.4c-.4.1-.7.2-1.1.2c-.7.1-1.5.2-2.3.1c-1.5-.1-3.1-.5-4.4-1.2c-1.4-.7-2.6-1.8-3.4-3.1c-.4-.6-.8-1.3-1.1-2c-.1-.3-.2-.7-.3-1.1c0-.3-.1-.6-.1-1c.3.3.5.6.7.8c.3.3.5.6.7.8c.5.5.9 1 1.4 1.4c1 .9 2 1.7 3.2 2.3c1.1.6 2.4 1.1 3.6 1.5c.6.2 1.3.3 2 .5c.3.1.7.1 1 .2c.5.1.8.1 1.2.2"></path>
              <path d="M38.4 3.5c.5.1.9.3 1.4.5c.5.2.9.4 1.3.6c.9.5 1.7 1 2.5 1.6c1.6 1.2 2.9 2.8 3.8 4.6c.9 1.8 1.4 3.8 1.4 5.7c0 1-.1 1.9-.3 2.9c-.1.5-.2.9-.4 1.4c-.2.5-.3.9-.5 1.3l-.1-1.4c0-.5 0-.9-.1-1.4l-.3-2.7c-.3-1.7-.9-3.4-1.7-5c-.8-1.6-1.8-3-3-4.3c-.6-.7-1.3-1.3-1.9-2c-.3-.3-.7-.6-1.1-.9l-1-.9"></path>
              <path d="M47.1 3.1c.4.1.7.2 1 .4c.3.1.7.3 1 .5c.6.4 1.2.8 1.8 1.3c1.1 1 2 2.2 2.5 3.6c.6 1.4.8 2.9.6 4.4c-.1.7-.3 1.4-.5 2.1c-.1.3-.3.7-.4 1c-.2.3-.3.6-.6.9v-2c0-.7-.1-1.3-.1-1.9c-.2-1.3-.4-2.5-.9-3.6c-.5-1.2-1.1-2.2-1.8-3.3c-.4-.5-.8-1.1-1.2-1.6c-.2-.3-.4-.5-.7-.8c-.2-.5-.5-.8-.7-1"></path>
            </g>
            <g fill="#ffdd67">
              <path d="M10 18c-2 .9-2.7 3.3-1.8 5.3l12.6 26.3l7-3.3l-12.6-26.4c-.9-2-3.2-2.9-5.2-1.9"></path>
              <path d="M43.1 38.9l7.4-3.5l-14.4-30c-1-2-3.4-2.9-5.5-1.9c-2 1-2.9 3.4-1.9 5.5l14.4 29.9"></path>
            </g>
            <path
              d="M30.7 3.4c-.2.1-.4.2-.6.4c1.9-.5 3.9.4 4.8 2.2l14.4 30l1.3-.6l-14.4-30c-1-2.1-3.4-3-5.5-2"
              fill="#eba352"
            ></path>
            <path
              d="M27.8 46.2l7.7-3.7l-14.7-30.6c-1-2.1-3.6-3.1-5.7-2.1s-3 3.6-2 5.7l14.7 30.7"
              fill="#ffdd67"
            ></path>
            <path
              d="M15.1 9.9c-.2.1-.4.2-.6.4c1.9-.5 4.1.4 5 2.3l9.1 19.1l2.2 1.3l-10-21c-1-2.2-3.5-3.1-5.7-2.1"
              fill="#eba352"
            ></path>
            <path
              d="M34.3 40.1l7.7-3.7L27.3 5.8c-1-2.1-3.6-3.1-5.7-2c-2.1 1-3 3.6-2 5.7l14.7 30.6"
              fill="#ffdd67"
            ></path>
            <g fill="#eba352">
              <path d="M21.6 3.7c-.2.1-.4.3-.6.4c1.9-.5 4.1.4 5 2.3L36.3 28l2.2 1.3L27.3 5.8c-1-2.2-3.6-3.1-5.7-2.1"></path>
              <path d="M10 18c-.2.1-.4.2-.6.4c1.8-.5 3.7.4 4.5 2.2l7.5 15.7l2.2 1.3L15.2 20c-.9-2.1-3.2-3-5.2-2"></path>
            </g>
            <path
              d="M60.8 15c-2.7-2.1-7.1.2-9.3 7.4c-1.5 5-1.7 6.5-4.9 8l-1.8-3.7S16.4 40.4 17.5 42.6c0 0 3.4 10.6 9.2 15.5c8.6 7.4 28.7-.5 29.6-19.6c.5-11.1 7.4-21.2 4.5-23.5"
              fill="#ffdd67"
            ></path>
            <g fill="#eba352">
              <path d="M60.8 15c-.5-.4-1.1-.6-1.7-.7c.1.1.3.1.4.2c3 2.3-.1 7.6-1.8 12.4c-1.4 3.8-2.6 7.7-2.4 11.5c.8 16.6-15.9 24.5-25.9 21.5c9.8 4.1 28-3.7 27.2-21c-.2-3.8.9-7.5 2.4-11.5c1.6-4.8 4.7-10.1 1.8-12.4"></path>
              <path d="M47.5 30c-6.2.7-15.3 9.6-8.9 19.3c-4.7-9.8 3-16.4 7.9-18.7c.5-.4 1-.6 1-.6"></path>
            </g>
          </svg>
          ,
        </h2>
        <p className="mb-4">
          I'm Lawrence, a senior at Boston University studying Computer Science.
          My main interests lie in the field of web development and software
          engineering, with a special focus on front-end development.
        </p>
        <p className="mb-4">
          If you are interested in collaborating or have any projects you think
          would be a good fit, feel free to reach out to me!
        </p>
        <div className="flex justify-center">
          <motion.button
            className="p-2 text-base font-semibold text-white transition-all duration-500 ease-in-out bg-gray-500 rounded-md shadow-xl dark:bg-white dark:text-gray-500 dark:hover:shadow-purple-100 hover:shadow-teal-100"
            onClick={scrollTo("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center">
              <h1>Get in Touch</h1>
              <IoIosMail className="ml-1 text-2xl" />
            </div>
          </motion.button>
        </div>
      </motion.section>
    );
    setDisplayInfo(meInfo);
    setActiveButton("Me");
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
    setActiveButton("Skills");
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
    setActiveButton("Education");
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
            company={item.company}
          />
        ))}
      </motion.section>
    );

    setDisplayInfo(meInfo);
    setActiveButton("Experience");
  };

  const aboutRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });

  const buttonBaseClasses =
    "p-5 transition-all duration-500 ease-in-out bg-white border-2 rounded-3xl hover:bg-gray-500 hover:text-white hover:shadow-2xl dark:hover:bg-slate-700 dark:bg-default dark:text-white dark:hover:shadow-purple-100";

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      ref={aboutRef}
      className="flex flex-col min-h-screen py-24 mx-auto"
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
          className={`${buttonBaseClasses} ${
            activeButton === "Me"
              ? "border-teal-200 dark:border-purple-100"
              : "border-gray-300"
          }`}
          onClick={showMeInfo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Me
        </motion.button>
        <motion.button
          className={`${buttonBaseClasses} ${
            activeButton === "Education"
              ? "border-teal-200 dark:border-purple-100"
              : "border-gray-300"
          }`}
          onClick={educationInfo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Education
        </motion.button>
        <motion.button
          className={`${buttonBaseClasses} ${
            activeButton === "Experience"
              ? "border-teal-200 dark:border-purple-100"
              : "border-gray-300"
          }`}
          onClick={experienceInfo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience
        </motion.button>
        <motion.button
          className={`${buttonBaseClasses} ${
            activeButton === "Skills"
              ? "border-teal-200 dark:border-purple-100"
              : "border-gray-300"
          }`}
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
