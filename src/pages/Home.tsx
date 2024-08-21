import { motion } from "framer-motion";
import React, { useRef } from "react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { IoHandLeftOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { TypeAnimation } from "react-type-animation";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "../styles/icons.css";

const Home: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(homeRef, { threshold: 0.1 });

  return (
    <motion.div
      className={`flex flex-col items-center justify-center h-screen text-center`}
      id="home"
      ref={homeRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 2.2, ease: "easeInOut" }}
    >
      <motion.h1
        className="flex gap-2 mb-1 text-4xl font-bold lg:text-7xl md:text-5xl md:mb-3 dark:text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Hi
        <motion.div whileHover={{ scale: 1.1, rotate: 35 }}>
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            className="w-10 h-10 lg:w-16 lg:h-16 md:w-12 md:h-12"
          >
            <g fill="#42ade2">
              <path d="M16.1 48.5c-.5-.1-.9-.2-1.4-.4c-.5-.2-.9-.3-1.3-.5c-.9-.4-1.7-.9-2.5-1.5C9.3 45 8 43.5 7 41.7C6 40 5.4 38 5.3 36.1c-.1-1 0-1.9.1-2.9c.1-.5.2-.9.3-1.4c.1-.5.3-.9.4-1.4l.1 1.4c0 .5.1.9.2 1.4c.1.9.3 1.8.5 2.6c.4 1.7 1 3.3 1.9 4.8c.9 1.5 1.9 2.9 3.2 4.2c.6.6 1.3 1.2 2 1.8c.3.3.7.6 1.1.9l1 1"></path>
              <path d="M15.8 52.1c-.3.2-.7.3-1.1.4c-.4.1-.7.2-1.1.2c-.7.1-1.5.2-2.3.1c-1.5-.1-3.1-.5-4.4-1.2c-1.4-.7-2.6-1.8-3.4-3.1c-.4-.6-.8-1.3-1.1-2c-.1-.3-.2-.7-.3-1.1c0-.3-.1-.6-.1-1c.3.3.5.6.7.8c.3.3.5.6.7.8c.5.5.9 1 1.4 1.4c1 .9 2 1.7 3.2 2.3c1.1.6 2.4 1.1 3.6 1.5c.6.2 1.3.3 2 .5c.3.1.7.1 1 .2c.5.1.8.1 1.2.2"></path>
              <path d="M38.4 3.5c.5.1.9.3 1.4.5c.5.2.9.4 1.3.6c.9.5 1.7 1 2.5 1.6c1.6 1.2 2.9 2.8 3.8 4.6c.9 1.8 1.4 3.8 1.4 5.7c0 1-.1 1.9-.3 2.9c-.1.5-.2.9-.4 1.4c-.2.5-.3.9-.5 1.3l-.1-1.4c0-.5 0-.9-.1-1.4l-.3-2.7c-.3-1.7-.9-3.4-1.7-5c-.8-1.6-1.8-3-3-4.3c-.6-.7-1.3-1.3-1.9-2c-.3-.3-.7-.6-1.1-.9l-1-.9"></path>
              <path d="M47.1 3.1c.4.1.7.2 1 .4c.3.1.7.3 1 .5c.6.4 1.2.8 1.8 1.3c1.1 1 2 2.2 2.5 3.6c.6 1.4.8 2.9.6 4.4c-.1.7-.3 1.4-.5 2.1c-.1.3-.3.7-.4 1c-.2.3-.3.6-.6.9v-2c0-.7-.1-1.3-.1-1.9c-.2-1.3-.4-2.5-.9-3.6c-.5-1.2-1.1-2.2-1.8-3.3c-.4-.5-.8-1.1-1.2-1.6c-.2-.3-.4-.5-.7-.8c-.2-.5-.5-.8-.7-1"></path>
            </g>
            <g fill="#ffdd67">
              <path d="M10 18c-2 .9-2.7 3.3-1.8 5.3l12.6 26.3l7-3.3l-12.6-26.4c-.9-2-3.2-2.9-5.2-1.9"></path>
              <path d="M43.1 38.9l7.4-3.5l-14.4-30c-1-2-3.4-2.9-5.5-1.9c-2 1-2.9 3.4-1.9 5.5l14.4 29.9"></path>
            </g>
            <path
              d="M30.7 3.4c-.2.1-.4.2-.6.4c1.9-.5 3.9.4 4.8 2.2l14.4 30l1.3-.6l-14.4-30c-1-2.1-3.4-3-5.5-2"
              fill="#eba352"
            ></path>
            <path
              d="M27.8 46.2l7.7-3.7l-14.7-30.6c-1-2.1-3.6-3.1-5.7-2.1s-3 3.6-2 5.7l14.7 30.7"
              fill="#ffdd67"
            ></path>
            <path
              d="M15.1 9.9c-.2.1-.4.2-.6.4c1.9-.5 4.1.4 5 2.3l9.1 19.1l2.2 1.3l-10-21c-1-2.2-3.5-3.1-5.7-2.1"
              fill="#eba352"
            ></path>
            <path
              d="M34.3 40.1l7.7-3.7L27.3 5.8c-1-2.1-3.6-3.1-5.7-2c-2.1 1-3 3.6-2 5.7l14.7 30.6"
              fill="#ffdd67"
            ></path>
            <g fill="#eba352">
              <path d="M21.6 3.7c-.2.1-.4.3-.6.4c1.9-.5 4.1.4 5 2.3L36.3 28l2.2 1.3L27.3 5.8c-1-2.2-3.6-3.1-5.7-2.1"></path>
              <path d="M10 18c-.2.1-.4.2-.6.4c1.8-.5 3.7.4 4.5 2.2l7.5 15.7l2.2 1.3L15.2 20c-.9-2.1-3.2-3-5.2-2"></path>
            </g>
            <path
              d="M60.8 15c-2.7-2.1-7.1.2-9.3 7.4c-1.5 5-1.7 6.5-4.9 8l-1.8-3.7S16.4 40.4 17.5 42.6c0 0 3.4 10.6 9.2 15.5c8.6 7.4 28.7-.5 29.6-19.6c.5-11.1 7.4-21.2 4.5-23.5"
              fill="#ffdd67"
            ></path>
            <g fill="#eba352">
              <path d="M60.8 15c-.5-.4-1.1-.6-1.7-.7c.1.1.3.1.4.2c3 2.3-.1 7.6-1.8 12.4c-1.4 3.8-2.6 7.7-2.4 11.5c.8 16.6-15.9 24.5-25.9 21.5c9.8 4.1 28-3.7 27.2-21c-.2-3.8.9-7.5 2.4-11.5c1.6-4.8 4.7-10.1 1.8-12.4"></path>
              <path d="M47.5 30c-6.2.7-15.3 9.6-8.9 19.3c-4.7-9.8 3-16.4 7.9-18.7c.5-.4 1-.6 1-.6"></path>
            </g>
          </svg>
        </motion.div>
        , I&apos;m
        <span className="text-transparent bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text dark:text-purple-300">
          Lawrence.
        </span>
      </motion.h1>
      <motion.span
        className="mb-3 text-base font-medium text-teal-200 dark:text-purple-200"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <TypeAnimation
          sequence={[
            "I'm a Software Engineer",
            2000,
            "I'm also a Web Developer",
            2000,
          ]}
          wrapper="span"
          speed={5}
          className="inline-block text-2xl lg:text-4xl font-montserrat md:text-2xl"
          repeat={Infinity}
        />
      </motion.span>
      <motion.div
        className="flex flex-col gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <div className="flex justify-between pt-6 max-w-[200px] w-full">
          <ul className="flex justify-center w-full pt-5 list-none wrapper h-30 font-poppins">
            {[
              {
                href: "https://www.linkedin.com/in/lawrenceli7/",
                bgColor: "bg-blue",
                icon: <GrLinkedin size={20} className="hover:animate-pulse" />,
                tooltip: "LinkedIn",
              },
              {
                href: "https://www.github.com/lawrenceli7/",
                bgColor: "bg-green",
                icon: <GrGithub size={20} className="hover:animate-pulse" />,
                tooltip: "Github",
              },
              {
                href: "mailto:lawrenceli3202@gmail.com",
                bgColor: "bg-red",
                icon: <GrMail size={20} className="hover:animate-pulse" />,
                tooltip: "Email",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <li
                  className={`icon relative rounded-full m-2.5 w-12 h-12 text-lg flex justify-center items-center flex-col shadow-lg cursor-pointer transition-all duration-200 ease-in-out hover:${item.bgColor} hover:text-white bg-white dark:text-black dark:hover:${item.bgColor} dark:hover:text-white`}
                >
                  <span
                    className={`absolute top-0 px-2 py-1 text-sm text-white transition-all duration-300 ease-in-out rounded shadow-lg opacity-0 pointer-events-none ${
                      item.bgColor
                    } tooltip-${item.tooltip.toLowerCase()}`}
                  >
                    {item.tooltip}
                  </span>
                  {item.icon}
                </li>
              </motion.a>
            ))}
          </ul>
        </div>
        <motion.div
          className="flex flex-row justify-center gap-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <SlLocationPin
            size={30}
            className="hover:text-darkred hover:animate-pulse dark:text-white dark:hover:text-darkred"
          />
          <span className="relative inline-block text-xl text-gray-500 cursor-pointer dark:text-white font-montserrat after:absolute after:w-0 after:h-2 after:block after:bg-current after:transition-all after:duration-300 after:left-0 after:-bottom-[5px] after:hover:w-full">
            Boston, MA
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
      >
        <span className="mt-20 text-lg dark:text-white font-montserrat">
          Scroll
        </span>
        <MdOutlineKeyboardDoubleArrowDown
          size={30}
          className="mt-2 text-gray-500 animate-bounce dark:text-white"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
