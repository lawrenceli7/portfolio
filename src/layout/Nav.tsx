import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { IoMdContact } from "react-icons/io";
import {
  IoFolderOpen,
  IoHome,
  IoMailUnread,
  IoMoon,
  IoSunnyOutline,
} from "react-icons/io5";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import scrollTo from "../utils/scrollTo";

const Nav: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const light = <IoSunnyOutline />;
  const dark = <IoMoon />;

  const navRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(navRef, {
    threshold: 0.1,
  });

  return (
    <motion.nav
      className={`fixed top-0 w-full z-1000 ${
        isVisible
          ? "opacity-1 transition-opacity duration-1000 ease-in"
          : "opacity-0 transition-opacity duration-1000 ease-out"
      }`}
      ref={navRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="pt-2 pb-2 pl-8 text-xl text-white bg-white shadow-lg md:hidden shadow-teal-100 dark:shadow-purple-100 dark:bg-nav">
        <motion.ul
          className="flex justify-center gap-2 p-0 m-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { label: "Home", scrollTo: "home" },
            { label: "About", scrollTo: "about" },
            { label: "Projects", scrollTo: "projects" },
            { label: "Contact", scrollTo: "contact" },
          ].map((item, index) => (
            <li key={index}>
              <motion.button
                onClick={scrollTo(item.scrollTo)}
                className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.label}
              </motion.button>
            </li>
          ))}
          <div className="flex items-center pr-8">
            <motion.button
              type="button"
              onClick={handleThemeSwitch}
              className="p-2 text-gray-500 no-underline hover:text-teal-200 hover:underline hover:underline-offset-5 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? light : dark}
            </motion.button>
          </div>
        </motion.ul>
      </div>
      <div className="hidden bg-white md:block z-1000 dark:bg-nav">
        <div className="flex items-center justify-between shadow-lg h-nav shadow-teal-100 dark:shadow-purple-100">
          <div className="flex items-center gap-4 lg:pl-28 md:pl-16">
            <motion.div
              className="text-transparent cursor-default bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text lg:text-2xl md:text-xl font-roboto animate-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Lawrence Li
            </motion.div>
          </div>
          <div className="flex items-center gap-2 font-inter lg:pr-28 md:pr-16">
            <motion.ul
              className="flex lg:gap-1 lg:text-xl md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[
                { label: "Home", icon: <IoHome />, scrollTo: "home" },
                {
                  label: "About",
                  icon: <IoMdContact size={24} />,
                  scrollTo: "about",
                },
                {
                  label: "Projects",
                  icon: <IoFolderOpen />,
                  scrollTo: "projects",
                },
                {
                  label: "Contact",
                  icon: <IoMailUnread />,
                  scrollTo: "contact",
                },
              ].map((item, index) => (
                <li key={index}>
                  <motion.button
                    onClick={scrollTo(item.scrollTo)}
                    className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700 dark:font-extralight"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </div>
                  </motion.button>
                </li>
              ))}
              <div className="flex items-center gap-2">
                <motion.button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {theme === "dark" ? light : dark}
                </motion.button>
              </div>
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
