import PropTypes from "prop-types";

function ExperienceItem({ year, title, duration, location, details }) {
    ExperienceItem.propTypes = {
        year: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
    };
    return (
        <ol className="flex flex-col md:flex-row border-l border-gray-100 dark:border-gray-300">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-500 dark:bg-stone-700" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white dark:text-gray-500 bg-gray-500 shadow-md shadow-teal-100 border border-teal-200 rounded-lg dark:bg-white dark:shadow-purple-100 dark:border-purple-200">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-500 dark:text-white hover:underline hover:underline-offset-8">
                        {title}
                    </h3>
                    <div className="text-lg">|</div>
                    <h3 className="text-lg font-semibold text-gray-500 dark:text-white">{location}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-gray-400 italic dark:text-gray-100">
                        {duration}
                    </div>
                </p>
                <p className="my-2 text-base font-normal text-gray-300 dark:text-gray-100">
                    {details}
                </p>
            </li>
        </ol>
    )
}

export default ExperienceItem;