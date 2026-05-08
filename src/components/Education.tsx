import { motion } from "framer-motion";
import React, { useRef } from "react";
import { IoCalendarOutline, IoSchoolSharp } from "react-icons/io5";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface EducationItemProps {
  school: string;
  name: string;
  degree: string;
  duration: string;
  coursework: string;
}

const Education: React.FC<EducationItemProps> = ({
  school,
  name,
  degree,
  duration,
  coursework,
}) => {
  const educationRef = useRef<HTMLOListElement>(null);
  const isVisible = useIntersectionObserver(educationRef, { threshold: 0.1 });

  return (
    <motion.ol
      className="relative border-l border-teal-200/70 dark:border-white/10"
      ref={educationRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
    >
      <motion.li className={`mb-10 ml-6`}>
        <motion.div
          className="absolute mt-7 h-3 w-3 rounded-full border border-white bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.9)] -left-1.5 dark:border-gray-900"
          whileHover={{ scale: 1.2 }}
        ></motion.div>
        <motion.div
          className="flex flex-col gap-3 rounded-[1.5rem] border border-white/70 bg-white/85 p-5 shadow-xl shadow-teal-900/5 backdrop-blur md:flex-row md:items-center md:justify-between dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-teal-200"
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <span className="inline-block rounded-full bg-gray-500 px-3 py-1.5 mb-2 text-sm font-bold text-white shadow-md md:mb-0 dark:bg-white dark:text-gray-500">
              <div className="flex items-center gap-2">
                <IoSchoolSharp />
                {school}
              </div>
            </span>
            <h3 className="font-bold text-gray-500 lg:text-lg dark:text-white">
              {name}
            </h3>
            <div className="hidden text-lg md:block">|</div>
            <h3 className="font-semibold text-gray-300 lg:text-lg dark:text-white/70">
              {degree}
            </h3>
          </div>
          <div className="flex items-center gap-2 my-1 text-base font-semibold leading-none text-gray-300 dark:text-white/60 md:my-0">
            <IoCalendarOutline />
            {duration}
          </div>
        </motion.div>
        <motion.p
          className="my-3 pl-1 text-base font-normal leading-7 text-gray-300 dark:text-white/65"
          whileHover={{ scale: 1.02 }}
        >
          {coursework}
        </motion.p>
      </motion.li>
    </motion.ol>
  );
};

export default Education;
