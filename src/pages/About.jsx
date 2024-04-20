import { useState } from "react";

function About() {

  const [displayInfo, setDisplayInfo] = useState('');

  const showMeInfo = () => {
    const meInfo =
      <div className="dark:text-white">
        I am a junior at Boston University studying Computer Science.
        My main interests lie in the field of web development and software engineering,
        with a special focus on front-end development.
        <br /><br />
        I am currently looking for an internship for the summer of 2024.
        If you are interested in collaborating or have any projects you think
        would be a good fit, feel free to reach out to me!
      </div>;

    setDisplayInfo(meInfo);
  };

  const skillsInfo = () => {
    const meInfo =
      <div className="dark:text-white">
        In Development
      </div>;

    setDisplayInfo(meInfo);
  };

  const educationInfo = () => {
    const meInfo =
      <div className="dark:text-white">
        In Development
      </div>;

    setDisplayInfo(meInfo);
  };

  const experienceInfo = () => {
    const meInfo =
      <div className="dark:text-white">
        In Development
      </div>;

    setDisplayInfo(meInfo);
  };


  return (
    <div
      id="about"
      className="items-center h-screen flex flex-col justify-center mx-auto"
    >
      <h1 className="text-center mb-4 hover:underline hover:underline-offset-8 dark:hover:text-white">
        <span className="text-4xl font-bold bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 bg-clip-text text-transparent dark:text-white">
          About Me
        </span>
      </h1>
      <div className="flex flex-row gap-2 md:text-xl md:gap-8">
        <div>
          <button className="bg-white p-5 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl  hover:shadow-teal-100 border-gray-500 border-2 dark:border-white dark:hover:bg-slate-700 dark:bg-[#23272f] dark:text-white dark:hover:shadow-purple-100" onClick={showMeInfo}>Me</button>
        </div>
        <button className="bg-white p-5 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl  hover:shadow-teal-100 border-gray-500 border-2 dark:border-white dark:hover:bg-slate-700 dark:bg-[#23272f] dark:text-white dark:hover:shadow-purple-100" onClick={educationInfo}>Education</button>
        <button className="bg-white p-5 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl  hover:shadow-teal-100 border-gray-500 border-2 dark:border-white dark:hover:bg-slate-700 dark:bg-[#23272f] dark:text-white dark:hover:shadow-purple-100" onClick={skillsInfo}>Skills</button>
        <button className="bg-white p-5 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl  hover:shadow-teal-100 border-gray-500 border-2 dark:border-white dark:hover:bg-slate-700 dark:bg-[#23272f] dark:text-white dark:hover:shadow-purple-100" onClick={experienceInfo}>Experience</button>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xl text-gray-500 pt-6">{displayInfo}</div>
      </div>
    </div>
  );
}

export default About;
