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
      className="relative border-l border-teal-200 dark:border-purple-100"
      ref={educationRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
    >
      <motion.li className={`mb-10 ml-6`}>
        <motion.div
          className="absolute w-3 h-3 bg-teal-200 border border-white rounded-full mt-7 -left-1.5 dark:border-gray-900 dark:bg-purple-100"
          whileHover={{ scale: 1.2 }}
        ></motion.div>
        <motion.div
          className="flex flex-col gap-1 p-4 bg-white border rounded-lg shadow-md dark:bg-gray-800 md:flex-row md:justify-between md:items-center dark:border-white dark:hover:border-purple-100 hover:border-teal-200"
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <span className="inline-block px-2 py-1 mb-2 font-semibold text-white bg-gray-700 rounded-lg shadow-md dark:text-gray-500 dark:bg-white md:mb-0 dark:shadow-purple-100 shadow-teal-200">
              <div className="flex items-center gap-2">
                <IoSchoolSharp />
                {school}
              </div>
            </span>
            <h3 className="font-semibold text-gray-500 lg:text-lg dark:text-white">
              {name}
            </h3>
            <div className="hidden text-lg md:block">|</div>
            <h3 className="font-semibold text-gray-500 lg:text-lg dark:text-white">
              {degree}
            </h3>
          </div>
          <div className="flex items-center gap-2 my-1 text-lg italic font-normal leading-none text-gray-400 dark:text-gray-100 md:my-0">
            <IoCalendarOutline />
            {duration}
          </div>
        </motion.div>
        <motion.p
          className="my-2 text-base font-normal text-gray-700 dark:text-gray-100"
          whileHover={{ scale: 1.02 }}
        >
          {coursework}
        </motion.p>
      </motion.li>
    </motion.ol>
  );
};

export default Education;
