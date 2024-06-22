import React, { useEffect, useRef, useState } from "react";
import {
  IoFolderOpen,
  IoHome,
  IoMailUnread,
  IoMoon,
  IoSunnyOutline,
  IoMan,
} from "react-icons/io5";
import { VscAccount, VscArchive, VscHome, VscMail } from "react-icons/vsc";
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
    <nav
      className={`fixed top-0 w-full z-1000 ${
        isVisible
          ? "opacity-1 transition-opacity duration-1000 ease-in"
          : "opacity-0 transition-opacity duration-1000 ease-out"
      }`}
      ref={navRef}
    >
      <div className="pt-2 pb-2 pl-8 text-xl text-white bg-white shadow-lg md:hidden shadow-teal-100 dark:shadow-purple-100 dark:bg-nav">
        <ul className="flex justify-center gap-2 p-0 m-0">
          <li>
            <button
              onClick={scrollTo("home")}
              className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={scrollTo("about")}
              className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={scrollTo("projects")}
              className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={scrollTo("contact")}
              className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
            >
              Contact
            </button>
          </li>
          <div className="flex items-center pr-8">
            <button
              type="button"
              onClick={handleThemeSwitch}
              className="p-2 text-gray-500 no-underline hover:text-teal-200 hover:underline hover:underline-offset-5 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
            >
              {theme === "dark" ? light : dark}
            </button>
          </div>
        </ul>
      </div>
      <div className="hidden bg-white md:block z-1000 dark:bg-nav">
        <div className="flex items-center justify-between shadow-lg h-nav shadow-teal-100 dark:shadow-purple-100">
          <div className="flex items-center gap-4 lg:pl-28 md:pl-16">
            <div className="text-transparent cursor-default bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text lg:text-2xl md:text-xl font-roboto animate-text">
              Lawrence Li
            </div>
          </div>
          <div className="flex items-center gap-2 font-inter lg:pr-28 md:pr-16">
            <ul className="flex lg:gap-1 lg:text-xl md:text-lg">
              <li>
                <button
                  onClick={scrollTo("home")}
                  className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700 dark:font-extralight"
                >
                  <div className="flex items-center gap-2">
                    <IoHome />
                    Home
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={scrollTo("about")}
                  className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700 dark:font-extralight"
                >
                  <div className="flex items-center gap-2">
                    <IoMan />
                    About
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={scrollTo("projects")}
                  className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700 dark:font-extralight"
                >
                  <div className="flex items-center gap-2">
                    <IoFolderOpen />
                    Projects
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={scrollTo("contact")}
                  className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700 dark:font-extralight"
                >
                  <div className="flex items-center gap-2">
                    <IoMailUnread />
                    Contact
                  </div>
                </button>
              </li>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="p-2 text-gray-500 hover:text-teal-200 hover:bg-navText hover:rounded-full dark:hover:text-purple-200 dark:text-white dark:hover:bg-slate-700"
                >
                  {theme === "dark" ? light : dark}
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
