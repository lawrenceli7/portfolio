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
      className={`flex flex-col border-l border-teal-200 md:flex-row dark:border-purple-100`}
    >
      <motion.li
        className="p-2 mb-10 ml-4 rounded-lg"
        whileHover={{
          scale: 1.01,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <span className="flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm">
          <div className="flex gap-4">
            <span className="flex items-center gap-2 px-2 py-1 font-semibold text-white bg-gray-500 border border-teal-200 rounded-lg shadow-md dark:text-gray-500 shadow-teal-100 dark:bg-white dark:shadow-purple-100 dark:border-purple-200">
              <MdWork />
              {year}
            </span>
            <h3 className="text-lg font-semibold text-gray-500 dark:text-white hover:underline hover:underline-offset-8">
              {title}
            </h3>
            <div className="text-lg">|</div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-500 dark:text-white">
              <IoLocationOutline />
              {location}
            </h3>
          </div>
          <div className="flex items-center gap-2 my-1 text-sm italic font-normal leading-none text-gray-400 dark:text-white">
            <IoCalendarOutline />
            {duration}
          </div>
        </span>
        <p className="my-2 text-base font-normal text-gray-300 dark:text-gray-100">
          {details}
        </p>
      </motion.li>
    </motion.ol>
  );
};

export default Experience;
