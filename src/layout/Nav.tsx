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
      className="fixed left-0 top-0 z-1000 w-full px-3 pt-3 md:px-6"
      ref={navRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="rounded-full border border-white/70 bg-white/80 px-3 py-2 text-sm shadow-xl shadow-teal-900/5 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[#151821]/80">
        <motion.ul
          className="flex items-center justify-center gap-1 p-0 m-0"
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.li key={index} custom={index} variants={itemVariants}>
              <motion.button
                onClick={scrollTo(item.scrollTo)}
                className="rounded-full px-3 py-2 font-semibold text-gray-300 transition hover:bg-teal-50 hover:text-teal-500 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
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
              className="rounded-full p-2 text-gray-300 transition hover:bg-teal-50 hover:text-teal-500 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? light : dark}
            </motion.button>
          </motion.li>
        </motion.ul>
      </div>
      <div className="hidden md:block z-1000">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-5 shadow-xl shadow-teal-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#151821]/80">
          <div className="flex items-center gap-4">
            <motion.div
              className="cursor-default bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-300 bg-clip-text text-xl font-black text-transparent lg:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Lawrence Li
            </motion.div>
          </div>
          <div className="flex items-center gap-2 font-inter">
            <motion.ul
              className="flex gap-1 text-sm lg:text-base"
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.li key={index} custom={index} variants={itemVariants}>
                  <motion.button
                    onClick={scrollTo(item.scrollTo)}
                    className="rounded-full px-4 py-2 font-semibold text-gray-300 transition hover:bg-teal-50 hover:text-teal-500 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
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
                  className="flex rounded-full p-2 text-gray-300 transition hover:bg-teal-50 hover:text-teal-500 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
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
