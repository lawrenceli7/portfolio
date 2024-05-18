import { Divider } from "antd";
import PropTypes from "prop-types";
import { FaSquareGithub } from "react-icons/fa6";

function ProjectItems({ title, imgURL, stack, link, production }) {
  ProjectItems.propTypes = {
    title: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    stack: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
    production: PropTypes.string.isRequired,
  };

  return (
    <a
      href={production}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-gray-400 rounded-2xl overflow-hidden shadow-lg shadow-teal-200 dark:border-white dark:shadow-purple-200 "
    >
      <img
        src={imgURL}
        alt="Place Holder"
        className="w-full h-36 md:h-48 object-cover cursor-pointer hover:animate-pulse"
      />
      <div className="w-full p-4">
        <div className="flex justify-between">
          <h3 className="text lg md:text-xl mb-2 md:mb-3 font-semibold text-gray-500 dark:text-white">
            {title}
          </h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          ><FaSquareGithub size={25} className="rounded-lg hover:animate-bounce" />
          </a>
        </div>
        <Divider className="bg-gray-100 dark:bg-white" />
        <p className="flex flex-wrap gap-2 flex-row items-center text-xs md:text-sm justify-start">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-gray-100 rounded-xl dark:border-white"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default ProjectItems;
