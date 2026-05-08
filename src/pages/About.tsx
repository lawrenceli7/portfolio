import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FiCode, FiCpu, FiLayers, FiSend } from "react-icons/fi";
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
        whileHover={{ y: -4 }}
        className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 text-base leading-8 text-gray-300 shadow-2xl shadow-teal-900/5 backdrop-blur lg:text-lg md:text-md dark:border-white/10 dark:bg-white/[0.06] dark:text-white/75"
      >
        <div className="grid gap-8 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-8">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-teal-50/80 px-4 py-2 text-sm font-bold text-teal-500 dark:border-white/10 dark:bg-white/5 dark:text-teal-100">
              <FiCpu />
              Front-end focused, full-stack aware
            </span>
            <h2 className="mb-5 text-3xl font-black leading-tight text-gray-500 md:text-4xl dark:text-white">
              I turn software ideas into interfaces that feel fast, clear, and
              human.
            </h2>
            <p className="mb-4">
              I'm Lawrence, a Computer Science graduate from Boston University.
              My main interests sit at the intersection of web development,
              software engineering, and front-end systems.
            </p>
            <p className="mb-6">
              I like building products where the small details matter: loading
              states, layout rhythm, interaction feedback, and the invisible
              structure that keeps the experience reliable.
            </p>
            <motion.button
              className="inline-flex items-center gap-2 rounded-full bg-gray-500 px-5 py-3 text-base font-bold text-white shadow-xl shadow-gray-500/20 transition hover:bg-gray-400 dark:bg-white dark:text-gray-500"
              onClick={scrollTo("contact")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <IoIosMail className="text-2xl" />
            </motion.button>
          </div>
          <div className="grid gap-3">
            {[
              {
                icon: <FiCode />,
                title: "Interface craft",
                body: "React, TypeScript, Tailwind, animation, and responsive UI systems.",
              },
              {
                icon: <FiLayers />,
                title: "Product thinking",
                body: "Clear flows, useful hierarchy, and details that reduce user friction.",
              },
              {
                icon: <FiSend />,
                title: "Collaboration",
                body: "Comfortable moving from idea to implementation with a practical build mindset.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-gray-100 bg-white/75 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white dark:bg-white dark:text-gray-500">
                  {item.icon}
                </div>
                <h3 className="text-base font-black text-gray-500 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-300 dark:text-white/60">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
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
    "rounded-full border px-5 py-3 text-sm font-bold transition-all duration-300 bg-white/70 backdrop-blur hover:-translate-y-0.5 hover:border-teal-200 hover:text-teal-500 dark:bg-white/[0.06] dark:text-white dark:hover:border-teal-200";

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      ref={aboutRef}
      className="relative isolate mx-auto flex min-h-screen flex-col justify-center overflow-hidden py-24 p-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_18%,rgba(20,184,166,0.14),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(167,139,250,0.14),transparent_30%)]" />
      <div className="mb-8 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/70 px-4 py-2 text-sm font-bold text-teal-500 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-teal-100">
          Profile
        </span>
        <h1 className="text-4xl font-black tracking-tight text-gray-500 md:text-5xl dark:text-white">
          About Lawrence
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300 dark:text-white/60">
          A quick view of my background, skills, education, and experience.
        </p>
      </div>

      <div className="mx-auto flex flex-wrap justify-center gap-3 rounded-full border border-white/70 bg-white/55 p-2 text-base shadow-xl shadow-teal-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
        <motion.button
          className={`${buttonBaseClasses} ${
            activeButton === "Me"
              ? "border-teal-200 text-teal-500 shadow-lg shadow-teal-900/5 dark:border-teal-200"
              : "border-gray-200 text-gray-300 dark:border-white/10"
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
              ? "border-teal-200 text-teal-500 shadow-lg shadow-teal-900/5 dark:border-teal-200"
              : "border-gray-200 text-gray-300 dark:border-white/10"
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
              ? "border-teal-200 text-teal-500 shadow-lg shadow-teal-900/5 dark:border-teal-200"
              : "border-gray-200 text-gray-300 dark:border-white/10"
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
              ? "border-teal-200 text-teal-500 shadow-lg shadow-teal-900/5 dark:border-teal-200"
              : "border-gray-200 text-gray-300 dark:border-white/10"
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
              className="w-full pt-8 text-xl text-gray-500"
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
