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
        Hi{" "}
        <motion.div whileHover={{ scale: 1.1, rotate: 15 }}>
          <IoHandLeftOutline />
        </motion.div>
        , I&apos;m{" "}
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
        <span className="mt-20 text-lg dark:text-white">Scroll</span>
        <MdOutlineKeyboardDoubleArrowDown
          size={30}
          className="mt-2 text-gray-500 animate-bounce dark:text-white"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
