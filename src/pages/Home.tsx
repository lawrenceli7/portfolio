import React from "react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { TypeAnimation } from "react-type-animation";

const Home: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen pt-5 pb-6 text-center"
      id="home"
    >
      <h1 className="mb-1 text-4xl font-bold lg:text-7xl md:text-5xl md:mb-3 dark:text-white">
        Hi, I&apos;m{" "}
        <span className="text-transparent bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text dark:text-purple-300">
          Lawrence.
        </span>
      </h1>
      <span className="mb-3 text-base font-medium text-teal-200 dark:text-purple-200">
        <TypeAnimation
          sequence={[
            "I'm a Software Engineer",
            2000,
            "I'm also a Web Developer",
            2000,
          ]}
          wrapper="div"
          speed={5}
          className="inline-block text-2xl lg:text-4xl font-montserrat md:text-2xl"
          repeat={Infinity}
        />
      </span>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between pt-6 max-w-[200px] w-full">
          <a
            className="cursor-pointer hover:animate-pulse hover:text-blue dark:text-white dark:hover:text-blue"
            href="https://www.linkedin.com/in/lawrenceli7/"
          >
            <GrLinkedin size={30} />
          </a>
          <a
            className="cursor-pointer hover:animate-pulse hover:text-green dark:text-white dark:hover:text-green"
            href="https://www.github.com/lawrenceli7/"
          >
            <GrGithub size={30} />
          </a>
          <a
            className="cursor-pointer hover:animate-pulse hover:text-red dark:text-white dark:hover:text-red"
            href="mailto: lawrenceli3202@gmail.com"
          >
            <GrMail size={30} />
          </a>
        </div>
        <div className="flex flex-row justify-center gap-2">
          <SlLocationPin
            size={30}
            className="hover:text-darkred hover:animate-pulse dark:text-white dark:hover:text-darkred"
          />
          <span className="text-xl text-gray-500 hover:underline-offset-8 hover:underline dark:text-white font-montserrat">
            Boston, MA
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
