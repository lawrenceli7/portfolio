import { motion } from "framer-motion";
import React, { useRef } from "react";
import { IoMdContact } from "react-icons/io";
import {
  IoFolderOpen,
  IoHome,
  IoMailUnread,
  IoMoon,
  IoSunnyOutline,
} from "react-icons/io5";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useTheme } from "../hooks/useTheme";
import scrollTo from "../utils/scrollTo";

const Nav: React.FC = () => {
  const { theme, handleThemeSwitch } = useTheme();

  const light = <IoSunnyOutline />;
  const dark = <IoMoon />;

  const navRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(navRef, {
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  const navItems = [
    { label: "Home", icon: <IoHome />, scrollTo: "home" },
    { label: "About", icon: <IoMdContact size={24} />, scrollTo: "about" },
    { label: "Projects", icon: <IoFolderOpen />, scrollTo: "projects" },
    { label: "Contact", icon: <IoMailUnread />, scrollTo: "contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full z-1000"
      ref={navRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="pt-2 pb-2 pl-8 pr-8 text-xl text-white bg-white shadow-lg md:hidden shadow-teal-100 dark:shadow-purple-100 dark:bg-nav">
        <motion.ul
          className="flex justify-center gap-2 p-0 m-0"
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.li key={index} custom={index} variants={itemVariants}>
              <motion.button
                onClick={scrollTo(item.scrollTo)}
                className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.label}
              </motion.button>
            </motion.li>
          ))}
          <motion.li
            key={navItems.length}
            custom={navItems.length}
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            <motion.button
              type="button"
              onClick={handleThemeSwitch}
              className="p-2 text-gray-500 no-underline hover:text-teal-200 hover:underline hover:underline-offset-5 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? light : dark}
            </motion.button>
          </motion.li>
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
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.li key={index} custom={index} variants={itemVariants}>
                  <motion.button
                    onClick={scrollTo(item.scrollTo)}
                    className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </div>
                  </motion.button>
                </motion.li>
              ))}
              <motion.li
                key={navItems.length}
                custom={navItems.length}
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                <motion.button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="flex p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {theme === "dark" ? light : dark}
                </motion.button>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
