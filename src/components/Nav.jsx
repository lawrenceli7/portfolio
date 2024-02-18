import { useState } from "react";
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

  return (
    <>
      <div className="font-roboto">
        <div className="left-4 text-xl md:hidden pt-2 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text text-transparent">
          Lawrence Li
        </div>
        <VscMenu
          onClick={handleNav}
          className="absolute top-2 right-4 z-[99] md:hidden text-2xl hover:animate-pulse"
        />
        {nav ? (
          <div className="w-full h-screen bg-[#f8f8fa]/90 flex flex-col justify-center items-center z-20 fixed">
            <a
              href="#home"
              onClick={handleNav}
              className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-[#f9fafc] shadow-teal-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 underline underline-offset-8 hover:text-teal-200"
            >
              <VscHome size={25} />
              <span className="pl-4">Home</span>
            </a>
            <a
              href="#about"
              onClick={handleNav}
              className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-[#f9fafc] shadow-teal-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 underline underline-offset-8 hover:text-teal-200"
            >
              <VscAccount size={25} />
              <span className="pl-4">About</span>
            </a>
            <a
              href="#projects"
              onClick={handleNav}
              className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-[#f9fafc] shadow-teal-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 underline underline-offset-8 hover:text-teal-200"
            >
              <VscArchive size={25} />
              <span className="pl-4">Projects</span>
            </a>
            <a
              href="#contact"
              onClick={handleNav}
              className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-[#f9fafc] shadow-teal-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 underline underline-offset-8 hover:text-teal-200"
            >
              <VscMail size={25} />
              <span className="pl-4">Contact</span>
            </a>
          </div>
        ) : (
          ""
        )}
        <nav className="md:block hidden bg-gray-200 top-0 fixed w-full">
          <div className="flex justify-around items-center h-10">
            <div className="bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text text-transparent text-xl cursor-default">
              Lawrence Li
            </div>
            <div>
              <ul className="gap-4 flex text-xl">
                <li>
                  <a
                    className="hover:text-teal-200 text-white hover:underline hover:underline-offset-8 no-underline"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-teal-200 hover:underline hover:underline-offset-8 no-underline text-white "
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-teal-200 text-white hover:underline hover:underline-offset-8 no-underline"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-teal-200 text-white hover:underline hover:underline-offset-8 no-underline"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
