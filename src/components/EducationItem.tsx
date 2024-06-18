import React from "react";

interface EducationItemProps {
  school: string;
  name: string;
  degree: string;
  duration: string;
  coursework: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  school,
  name,
  degree,
  duration,
  coursework,
}) => {
  return (
    <ol className="flex flex-col border-l border-teal-200 md:flex-row dark:border-purple-100">
      <li className="mb-10 ml-4">
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-gray-500 border border-teal-200 rounded-lg shadow-md dark:text-gray-500 shadow-teal-100 dark:bg-white dark:shadow-purple-100 dark:border-purple-200">
            {school}
          </span>
          <h3 className="text-lg font-semibold text-gray-500 dark:text-white hover:underline hover:underline-offset-8">
            {name}
          </h3>
          <div className="text-lg">|</div>
          <h3 className="text-lg font-semibold text-gray-500 dark:text-white">
            {degree}
          </h3>
          <div className="my-1 text-sm italic font-normal leading-none text-gray-400 dark:text-gray-100">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-gray-300 dark:text-gray-100">
          {coursework}
        </p>
      </li>
    </ol>
  );
};

export default EducationItem;
