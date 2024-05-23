import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { VscAccount, VscArchive, VscHome, VscMail } from "react-icons/vsc";

function Nav() {
  function scrollTo(dest) {
    return () => {
      const element = document.getElementById(dest);
      element.scrollIntoView({ behavior: "smooth" });
    };
  }

  const [theme, setTheme] = useState(null);

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

  const dark = <IoMoonOutline />;

  return (
    <nav>
      <div className="text-xl md:hidden pt-2 pl-8 shadow-lg shadow-teal-100  dark:shadow-purple-100 pb-2 text-white bg-white top-0 w-full fixed z-1000 dark:bg-[#16181d]">
        <ul className="flex justify-center gap-2">
          <li>
            <button
              onClick={scrollTo("home")}
              className="font-thin hover:text-teal-200 text-gray-500 hover:bg-[#f1f1f1] hover:rounded-full p-2 dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700 dark:font-extralight"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={scrollTo("about")}
              className="font-thin hover:text-teal-200 text-gray-500 p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700 dark:font-extralight"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={scrollTo("projects")}
              className="font-thin hover:text-teal-200 text-gray-500 p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700 dark:font-extralight"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={scrollTo("contact")}
              className="font-thin hover:text-teal-200 text-gray-500 p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700 dark:font-extralight"
            >
              Contact
            </button>
          </li>
          <div className="flex items-center pr-8">
            <button
              type="button"
              onClick={handleThemeSwitch}
              className="hover:text-teal-200 text-gray-500 hover:underline hover:underline-offset-5 no-underline p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700"
            >
              {theme === "dark" ? light : dark}
            </button>
          </div>
        </ul>
      </div>
      <div className="md:block hidden bg-white top-0 w-full fixed z-1000 dark:bg-[#16181d]">
        <div className="flex items-center justify-between p-5 shadow-lg h-14 shadow-teal-100 dark:shadow-purple-100">
          <div className="flex items-center gap-4 lg:pl-12 md:pl-6">
            <div className="text-transparent cursor-default bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text lg:text-2xl md:text-lg font-roboto animate-text">
              Lawrence Li
            </div>
          </div>
          <div className="flex items-center gap-2 font-inter lg:pr-12 md:pr-6">
            <ul className="flex lg:gap-1 lg:text-2xl md:text-lg">
              <li>
                <button
                  onClick={scrollTo("home")}
                  className="hover:text-teal-200 text-gray-500 hover:bg-[#f1f1f1] hover:rounded-full p-2 dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700 dark:font-extralight"
                >
                  <div className="flex items-center gap-2">
                    <VscHome />
                    Home
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={scrollTo("about")}
                  className="hover:text-teal-200 text-gray-500 p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700 dark:font-extralight"
                >
                  <div className="flex items-center gap-2">
                    <VscAccount />
                    About
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={scrollTo("projects")}
                  className="hover:text-teal-200 text-gray-500 p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700 dark:font-extralight"
                >
                  <div className="flex items-center gap-2">
                    <VscArchive />
                    Projects
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={scrollTo("contact")}
                  className="hover:text-teal-200 text-gray-500 p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700 dark:font-extralight"
                >
                  <div className="flex items-center gap-2">
                    <VscMail />
                    Contact
                  </div>
                </button>
              </li>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="hover:text-teal-200 text-gray-500 p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700"
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
}

export default Nav;
