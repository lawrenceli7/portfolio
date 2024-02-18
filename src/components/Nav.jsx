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
        <VscMenu
          onClick={handleNav}
          className="absolute top-4 left-4 z-[99] md:hidden text-2xl hover:animate-bounce"
        />
        {nav ? (
          <div className="fixed w-full h-screen bg-[#f8f8fa]/90 flex flex-col justify-center items-center z-20">
            <a
              href="#main"
              className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-[#f9fafc] shadow-teal-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <VscHome size={25} />
              <span className="pl-4 hover:text-teal-400">Home</span>
            </a>
            <a
              href="#about"
              className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-[#f9fafc] shadow-teal-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <VscAccount size={25} />
              <span className="pl-4 hover:text-teal-400">About</span>
            </a>
            <a
              href="#projects"
              className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-[#f9fafc] shadow-teal-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <VscArchive size={25} />
              <span className="pl-4 hover:text-teal-400">Projects</span>
            </a>
            <a
              href="#contact"
              className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-[#f9fafc] shadow-teal-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <VscMail size={25} />
              <span className="pl-4 hover:text-teal-400">Contact</span>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="md:block hidden fixed"></div>
      </div>
    </>
  );
}

export default Nav;
