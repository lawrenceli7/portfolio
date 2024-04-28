import PropTypes from "prop-types";

function SkillsItem({ languages, frameworks, databases, tools }) {
    SkillsItem.propTypes = {
        languages: PropTypes.string.isRequired,
        frameworks: PropTypes.string.isRequired,
        databases: PropTypes.string.isRequired,
        tools: PropTypes.string.isRequired,
        coursework: PropTypes.string.isRequired,
    };
    return (
        <div className="">
            <h1 className="text-2xl mb-1">Languages:</h1>
            <p className="flex flex-wrap gap-2 flex-row items-center text-xs md:text-sm justify-start mb-4">
                {languages.map((item, index) => (
                    <span
                        key={index}
                        className="inline-block px-2 py-1 font-semibold border-2 border-gray-100 rounded-xl shadow-md shadow-teal-200 bg-white dark:border-white dark:shadow-purple-100 dark:bg-slate-800"
                    >
                        {item}
                    </span>
                ))}
            </p>
            <h1 className="text-2xl mb-1">Frameworks:</h1>
            <p className="flex flex-wrap gap-2 flex-row items-center text-xs md:text-sm justify-start mb-4">
                {frameworks.map((item, index) => (
                    <span
                        key={index}
                        className="inline-block px-2 py-1 font-semibold border-2 border-gray-100 rounded-xl shadow-md shadow-teal-200 bg-white dark:border-white dark:shadow-purple-100 dark:bg-slate-800"
                    >
                        {item}
                    </span>
                ))}
            </p>
            <h1 className="text-2xl mb-1">Databases:</h1>
            <p className="flex flex-wrap gap-2 flex-row items-center text-xs md:text-sm justify-start mb-4">
                {databases.map((item, index) => (
                    <span
                        key={index}
                        className="inline-block px-2 py-1 font-semibold border-2 border-gray-100 rounded-xl shadow-md shadow-teal-200 bg-white dark:border-white dark:shadow-purple-100 dark:bg-slate-800"
                    >
                        {item}
                    </span>
                ))}
            </p>
            <h1 className="text-2xl mb-1">Tools:</h1>
            <p className="flex flex-wrap gap-2 flex-row items-center text-xs md:text-sm justify-start">
                {tools.map((item, index) => (
                    <span
                        key={index}
                        className="inline-block px-2 py-1 font-semibold border-2 border-gray-100 rounded-xl shadow-md shadow-teal-200 bg-white dark:border-white dark:shadow-purple-100 dark:bg-slate-800"
                    >
                        {item}
                    </span>
                ))}
            </p>
        </div>
    )
}

export default SkillsItem;