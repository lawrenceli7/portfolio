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
      className="relative border-l border-teal-200/70 md:flex-row dark:border-white/10"
    >
      <motion.li className="mb-8 ml-5 rounded-[1.35rem] border border-white/70 bg-white/85 p-4 shadow-xl shadow-teal-900/5 backdrop-blur hover:border-teal-200 sm:mb-10 sm:ml-6 sm:rounded-[1.5rem] sm:p-5 dark:border-white/10 dark:bg-white/[0.06]">
        <motion.div
          className="absolute z-10 mt-7 h-3 w-3 rounded-full border border-white bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.9)] -left-1.5 dark:border-gray-900"
          whileHover={{ scale: 1.2 }}
        ></motion.div>
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-gray-500 px-3 py-1.5 text-sm font-bold text-white shadow-md dark:bg-white dark:text-gray-500">
          <MdWork />
          {title}
        </span>
        <h3 className="text-base font-black leading-tight text-gray-500 lg:text-lg dark:text-white">
          {company}
        </h3>
        <div className="mb-2 mt-3 flex items-start gap-2 text-sm font-semibold leading-tight text-gray-300 dark:text-white/60">
          <IoCalendarOutline className="text-lg" />
          {duration}
        </div>
        <div className="flex items-start gap-2 text-sm font-semibold leading-tight text-gray-300 dark:text-white/60">
          <IoLocationOutline className="text-lg" />
          {location}
        </div>
      </motion.li>
    </motion.ol>
  );
};

export default Experience;
