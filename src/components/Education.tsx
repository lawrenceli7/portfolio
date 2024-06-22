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
  const educationRef = useRef<HTMLLIElement>(null);
  const isVisible = useIntersectionObserver(educationRef, { threshold: 0.1 });

  return (
    <ol className="relative border-l border-teal-200 dark:border-purple-100">
      <li
        className={`mb-10 ml-6 ${
          isVisible
            ? "opacity-100 transition-opacity duration-[1300ms] ease-in"
            : "opacity-0 transition-opacity duration-[1300ms] ease-out"
        }`}
        ref={educationRef}
      >
        <div className="absolute w-3 h-3 bg-teal-200 border border-white rounded-full mt-7 -left-1.5 dark:border-gray-900 dark:bg-purple-100"></div>
        <div className="flex flex-col gap-1 p-4 bg-white border rounded-lg shadow-md dark:bg-gray-800 md:flex-row md:justify-between md:items-center dark:border-white">
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
        </div>
        <p className="my-2 text-base font-normal text-gray-700 dark:text-gray-100">
          {coursework}
        </p>
      </li>
    </ol>
  );
};

export default Education;
