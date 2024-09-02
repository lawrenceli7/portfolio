import { motion } from "framer-motion";
import React, { useRef } from "react";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface ExperienceItemProps {
  year: string;
  title: string;
  duration: string;
  location: string;
  details: string;
}

const Experience: React.FC<ExperienceItemProps> = ({
  year,
  title,
  duration,
  location,
  details,
}) => {
  const experienceRef = useRef<HTMLOListElement>(null);
  const isVisible = useIntersectionObserver(experienceRef, { threshold: 0.1 });

  return (
    <motion.ol
      ref={experienceRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
      className={`border-l border-teal-200 md:flex-row dark:border-purple-100 relative`}
    >
      <motion.li className="p-3 mb-10 ml-4 border border-gray-800 rounded-lg hover:border-teal-200 dark:border-white dark:hover:border-purple-100">
        <motion.div
          className="absolute w-3 h-3 bg-teal-200 border border-white rounded-full mt-7 -left-1.5 dark:border-gray-900 dark:bg-purple-100"
          whileHover={{ scale: 1.2 }}
        ></motion.div>
        <span className="flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 px-2 py-1 font-semibold text-white bg-gray-500 border border-teal-200 rounded-lg shadow-md dark:text-gray-500 shadow-teal-100 dark:bg-white dark:shadow-purple-100 dark:border-purple-200">
              <MdWork />
              {year}
            </span>
            <h3 className="text-sm font-semibold text-gray-500 lg:text-lg dark:text-white hover:underline hover:underline-offset-8 md:text-base">
              {title}
            </h3>
            <div className="lg:text-lg md:text-base">|</div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-500 lg:text-lg dark:text-white md:text-base">
              <IoLocationOutline />
              {location}
            </h3>
          </div>
          <div className="flex items-center gap-2 my-1 text-sm italic font-normal leading-none text-gray-400 dark:text-white">
            <IoCalendarOutline />
            {duration}
          </div>
        </span>
        <p className="my-2 text-sm font-normal text-gray-300 dark:text-gray-100">
          {details}
        </p>
      </motion.li>
    </motion.ol>
  );
};

export default Experience;
