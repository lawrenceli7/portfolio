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
  // const [activeButton, setActiveButton] = useState(false);
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

  // const handleButtonClick = (button) => {
  //   setActiveButton(!activeButton);
  // };

  return (
    <>
      <div className=" bg-white">
        <div className="left-4 text-xl md:hidden pt-2 pl-2 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text text-transparent shadow-lg shadow-teal-100 font-inter">
          Lawrence Li
        </div>
        <VscMenu
          onClick={handleNav}
          className="absolute top-2 right-4 z-[99] md:hidden text-2xl hover:animate-pulse hover:text-teal-200"
        />
        {}
        <nav className="md:block hidden bg-white top-0 fixed w-full">
          <div className="flex justify-between items-center h-14 p-5 shadow-lg shadow-teal-100">
            <div className="bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text text-transparent text-2xl cursor-default font-roboto">
              Lawrence Li
            </div>
            <div className="font-inter">
              <ul className="gap-2 flex text-2xl">
                <li>
                  <button
                    onClick={scrollTo("home")}
                    className="hover:text-teal-200 text-gray-500 hover:underline hover:underline-offset-5 no-underline hover:bg-[#f1f1f1] hover:rounded-full p-2"
                  >
                    <div className="flex flex-row items-center gap-2">
                    <VscHome />
                    Home
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollTo("about")}
                    className="hover:text-teal-200 hover:underline hover:underline-offset-5 no-underline text-gray-500 p-2 hover:bg-[#f1f1f1] hover:rounded-full"
                  >
                    <div className="flex flex-row items-center gap-2">
                    <VscAccount />
                    About
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollTo("project")}
                    className="hover:text-teal-200 text-gray-500 hover:underline hover:underline-offset-5 no-underline p-2 hover:bg-[#f1f1f1] hover:rounded-full"
                  >
                    <div className="flex flex-row items-center gap-2">
                    <VscArchive />
                    Projects
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollTo("contact")}
                    className="hover:text-teal-200 text-gray-500 hover:underline hover:underline-offset-5 no-underline p-2 hover:bg-[#f1f1f1] hover:rounded-full"
                  >
                    <div className="flex flex-row items-center gap-2">
                    <VscMail />
                    Contact
                    </div>
                  </button>
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
