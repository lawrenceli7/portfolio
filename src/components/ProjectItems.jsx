import PropTypes from "prop-types";

function ProjectItems({ title, imgURL, stack, link }) {
  ProjectItems.propTypes = {
    title: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    stack: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-gray-400 rounded-2xl overflow-hidden shadow-lg shadow-teal-200 dark:border-white dark:shadow-purple-200"
    >
      <img
        src={imgURL}
        alt="Place Holder"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text lg md:text-xl mb-2 md:mb-3 font-semibold text-gray-500 dark:text-white">
          {title}
        </h3>
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
