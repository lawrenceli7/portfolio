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
  company: string;
}

const Experience: React.FC<ExperienceItemProps> = ({
  year,
  title,
  duration,
  location,
  company,
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
        <span className="flex items-center gap-2 px-2 py-1 font-semibold text-white bg-gray-500 border border-teal-200 rounded-lg shadow-md dark:text-gray-500 shadow-teal-100 dark:bg-white dark:shadow-purple-100 dark:border-purple-200 mb-2">
          <MdWork />
          {title}
        </span>
        <h3 className="text-sm font-semibold text-gray-500 lg:text-lg dark:text-white hover:underline hover:underline-offset-4 md:text-base">
          {company}
        </h3>
        <div className="flex items-center gap-2 my-1 text-sm italic font-normal leading-none text-gray-400 dark:text-gray-100 mb-2">
          <IoCalendarOutline className="text-lg" />
          {duration}
        </div>
        <div className="flex items-center gap-2 my-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-100">
          <IoLocationOutline className="text-lg" />
          {location}
        </div>
      </motion.li>
    </motion.ol>
  );
};

export default Experience;
