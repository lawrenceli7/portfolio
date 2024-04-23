import { Divider } from 'antd';
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import {
  VscAccount,
  VscArchive,
  VscHome,
  VscMail,
  VscMenu,
} from "react-icons/vsc";

function Nav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  function scrollTo(dest) {
    return () => {
      const element = document.getElementById(dest);
      element.scrollIntoView({ behavior: "smooth" });
      setNav(false);
    };
  }

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const light = (
    <IoSunnyOutline />
  );

  const dark = (
    <IoMoonOutline />
  );

  return (
    <>
      <div className=" bg-white dark:bg-[#16181d]">
        <div className="text-xl md:hidden pt-2 pl-8 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text text-transparent shadow-lg shadow-teal-100 font-roboto animate-text dark:shadow-purple-100">
          Lawrence Li
        </div>
        <VscMenu
          onClick={() => {
            handleNav();
          }}
          className="absolute top-2 right-8 md:hidden text-2xl hover:animate-pulse hover:text-teal-200 dark:text-[#ebecf0]"
        />
        {nav ? (
          <div className="fixed w-full h-screen bg-lightgray flex flex-col justify-center items-center z-20 md:hidden gap-8 dark:bg-[#23272f]">
            <a
              onClick={() => {
                handleNav();
                scrollTo("home")();
              }}
              className="w-[30%] flex justify-center items-center shadow-lg bg-white shadow-teal-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 underline underline-offset-4 hover:text-teal-100 rounded-3xl font-inter hover:bg-gray-500 hover:animate-pulse border-2 border-gray-500 dark:hover:text-purple-100 dark:border-white dark:bg-[#23272f] dark:text-white dark:hover:bg-slate-700 dark:hover:shadow-purple-100 dark:shadow-purple-100"
            >
              <VscHome size={25} />
              <span className="pl-4">Home</span>
            </a>
            <a
              onClick={() => {
                handleNav();
                scrollTo("about")();
              }}
              className="w-[30%] flex justify-center items-center shadow-lg bg-white shadow-teal-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 underline underline-offset-4 hover:text-teal-100 rounded-3xl font-inter hover:bg-gray-500 hover:animate-pulse border-2 border-gray-500 dark:hover:text-purple-100 dark:border-white dark:bg-[#23272f] dark:text-white dark:hover:bg-slate-700 dark:hover:shadow-purple-100 dark:shadow-purple-100"
            >
              <VscAccount size={25} />
              <span className="pl-4">About</span>
            </a>
            <a
              onClick={() => {
                handleNav();
                scrollTo("project")();
              }}
              className="w-[30%] flex justify-center items-center shadow-lg bg-white shadow-teal-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 underline underline-offset-4 hover:text-teal-100 rounded-3xl font-inter hover:bg-gray-500 hover:animate-pulse border-2 border-gray-500 dark:hover:text-purple-100 dark:border-white dark:bg-[#23272f] dark:text-white dark:hover:bg-slate-700 dark:hover:shadow-purple-100 dark:shadow-purple-100"
            >
              <VscArchive size={25} />
              <span className="pl-4 ">Projects</span>
            </a>
            <a
              onClick={() => {
                handleNav();
                scrollTo("contact")();
              }}
              className="w-[30%] flex justify-center items-center shadow-lg bg-white shadow-teal-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 underline underline-offset-4 hover:text-teal-100 rounded-3xl font-inter hover:bg-gray-500 hover:animate-pulse border-2 border-gray-500 dark:hover:text-purple-100 dark:border-white dark:bg-[#23272f] dark:text-white dark:hover:bg-slate-700 dark:hover:shadow-purple-100 dark:shadow-purple-100"
            >
              <VscMail size={25} />
              <span className="pl-4 ">Contact</span>
            </a>
            <a className="w-[30%] flex justify-center items-center shadow-lg bg-white shadow-teal-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 underline underline-offset-4 hover:text-teal-100 rounded-3xl font-inter hover:bg-gray-500 hover:animate-pulse border-2 border-gray-500 dark:hover:text-purple-100 dark:border-white dark:bg-[#23272f] dark:text-white dark:hover:bg-slate-700 dark:hover:shadow-purple-100 dark:shadow-purple-100" onClick={handleThemeSwitch}> {theme === 'dark' ? light : dark}
              <span className="pl-4 ">Theme</span>
            </a>
          </div>
        ) : (
          ""
        )}
        <nav className="md:block hidden bg-white top-0 w-full fixed dark:bg-[#16181d]">
          <div className="flex justify-between items-center h-14 p-5 shadow-lg shadow-teal-100 dark:shadow-purple-100">
            <div className="flex flex-row items-center gap-4 pl-12">
              <div className="bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text text-transparent lg:text-2xl md:text-lg cursor-default font-roboto animate-text">
                Lawrence Li
              </div>
              <Divider type="vertical" className='p-0 m-0 bg-black h-5 dark:bg-[#ebecf0]' />
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-6 h-6" viewBox="0 0 64 64">
                <linearGradient id="GYa6R1lEB6J1NHHboltRWa_69464_gr1" x1="31.5" x2="31.5" y1="7" y2="57" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#GYa6R1lEB6J1NHHboltRWa_69464_gr1)" d="M53,48h-3.5c2.91-3.88,4.5-8.6,4.5-13.5C54,22.09,43.91,12,31.5,12c-0.5,0-1,0.02-1.5,0.05V8 c0-0.55-0.45-1-1-1H16c-0.36,0-0.69,0.19-0.87,0.51c-0.18,0.31-0.17,0.7,0.01,1L18,13.28v3.23c-5.64,4.24-9,10.92-9,17.99 c0,6.9,3.2,13.44,8.61,17.69L15.2,55.4c-0.23,0.3-0.26,0.71-0.09,1.05C15.28,56.79,15.62,57,16,57h31c0.29,0,0.57-0.13,0.76-0.35 l6-7c0.25-0.3,0.31-0.71,0.15-1.07C53.75,48.23,53.39,48,53,48z M30,14.06c0.5-0.03,1-0.06,1.5-0.06C42.8,14,52,23.2,52,34.5 c0,4.99-1.81,9.76-5.09,13.5h-4.28C46.62,44.71,49,39.78,49,34.5C49,24.85,41.15,17,31.5,17c-0.5,0-1,0.03-1.5,0.07V14.06z M30,19.08c0.5-0.05,1-0.08,1.5-0.08C40.05,19,47,25.95,47,34.5c0,5.6-3.02,10.75-7.89,13.5H30V19.08z M11,34.5 c0-5.92,2.59-11.54,7-15.41v4.3c-2.57,3.13-4,7.04-4,11.11s1.43,7.98,4,11.11v4.31C13.59,46.04,11,40.42,11,34.5z M18,26.91v15.18 c-1.3-2.3-2-4.91-2-7.59S16.7,29.21,18,26.91z M46.54,55H18l1.8-2.4c0.13-0.17,0.2-0.38,0.2-0.6V13c0-0.18-0.05-0.36-0.14-0.51 L17.77,9H28v40c0,0.55,0.45,1,1,1h21.83L46.54,55z"></path><linearGradient id="GYa6R1lEB6J1NHHboltRWb_69464_gr2" x1="17" x2="17" y1="26.91" y2="42.09" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#GYa6R1lEB6J1NHHboltRWb_69464_gr2)" d="M18,26.91v15.18c-1.3-2.3-2-4.91-2-7.59S16.7,29.21,18,26.91z"></path><linearGradient id="GYa6R1lEB6J1NHHboltRWc_69464_gr3" x1="38.5" x2="38.5" y1="19" y2="48" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#GYa6R1lEB6J1NHHboltRWc_69464_gr3)" d="M47,34.5c0,5.6-3.02,10.75-7.89,13.5H30V19.08c0.5-0.05,1-0.08,1.5-0.08 C40.05,19,47,25.95,47,34.5z"></path>
              </svg>
            </div>
            <div className="font-inter pr-12 flex items-center gap-2">
              <ul className="gap-1 flex lg:text-2xl md:text-lg">
                <li>
                  <button
                    onClick={scrollTo("home")}
                    className="hover:text-teal-200 text-gray-500 hover:underline hover:underline-offset-5 no-underline hover:bg-[#f1f1f1] hover:rounded-full p-2 dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700"
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
                    className="hover:text-teal-200 hover:underline hover:underline-offset-5 no-underline text-gray-500 p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700"
                  >
                    <div className="flex items-center gap-2">
                      <VscAccount />
                      About
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollTo("project")}
                    className="hover:text-teal-200 text-gray-500 hover:underline hover:underline-offset-5 no-underline p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700"
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
                    className="hover:text-teal-200 text-gray-500 hover:underline hover:underline-offset-5 no-underline p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700"
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
                    className="hover:text-teal-200 text-gray-500 hover:underline hover:underline-offset-5 no-underline p-2 hover:bg-[#f1f1f1] hover:rounded-full dark:hover:text-purple-200 dark:text-[#ebecf0] dark:hover:bg-slate-700"
                  >
                    {theme === 'dark' ? light : dark}
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </nav >
      </div >
    </>
  );
}

export default Nav;
