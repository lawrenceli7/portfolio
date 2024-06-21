import React, { useRef } from "react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { TypeAnimation } from "react-type-animation";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "../styles/home.css";
import "../styles/icons.css";

const Home: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(homeRef, { threshold: 0.1 });

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen text-center ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      id="home"
      ref={homeRef}
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
          <ul className="flex justify-center w-full pt-5 list-none wrapper h-30 font-poppins">
            <a href="https://www.linkedin.com/in/lawrenceli7/">
              <li className="icon relative rounded-full m-2.5 w-12 h-12 text-lg flex justify-center items-center flex-col shadow-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue hover:text-white bg-white dark:text-black dark:hover:bg-blue dark:hover:text-white">
                <span className="absolute top-0 px-2 py-1 text-sm text-white transition-all duration-300 ease-in-out rounded shadow-lg opacity-0 pointer-events-none bg-blue tooltip-linkedin">
                  LinkedIn
                </span>
                <GrLinkedin size={20} className="hover:animate-pulse" />
              </li>
            </a>
            <a href="https://www.github.com/lawrenceli7/">
              <li className="icon relative rounded-full m-2.5 w-12 h-12 text-lg flex justify-center items-center flex-col shadow-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-green hover:text-white bg-white dark:text-black dark:hover:bg-green dark:hover:text-white">
                <span className="absolute top-0 px-2 py-1 text-sm text-white transition-all duration-300 ease-in-out rounded shadow-lg opacity-0 pointer-events-none bg-green tooltip-github">
                  Github
                </span>
                <GrGithub size={20} className="hover:animate-pulse" />
              </li>
            </a>
            <a href="mailto:lawrenceli3202@gmail.com">
              <li className="icon relative rounded-full m-2.5 w-12 h-12 text-lg flex justify-center items-center flex-col shadow-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-red hover:text-white bg-white dark:text-black dark:hover:bg-red dark:hover:text-white">
                <span className="absolute top-0 px-2 py-1 text-sm text-white transition-all duration-300 ease-in-out rounded shadow-lg opacity-0 pointer-events-none bg-red tooltip-mail">
                  Email
                </span>
                <GrMail size={20} className="hover:animate-pulse" />
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-row justify-center gap-2">
          <SlLocationPin
            size={30}
            className="hover:text-darkred hover:animate-pulse dark:text-white dark:hover:text-darkred"
          />
          <span className="text-xl text-gray-500 dark:text-white font-montserrat underline-hover">
            Boston, MA
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="mt-20 text-lg dark:text-white">Scroll</span>
        <MdOutlineKeyboardDoubleArrowDown
          size={30}
          className="mt-2 text-gray-500 animate-bounce dark:text-white"
        />
      </div>
    </div>
  );
};

export default Home;
