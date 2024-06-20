import React from "react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { MdOutlineAttachEmail } from "react-icons/md";
import BackToTop from "../components/BackToTop";

const Footer: React.FC = () => {
  return (
    <div className="pt-8 text-center bg-white dark:bg-footer dark:text-white">
      <div className="animate-bounce">
        <BackToTop />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8">
          <MdOutlineAttachEmail />
          <p className="underline underline-offset-5">
            <a href="mailto:lawrenceli3202@gmail.com">
              lawrenceli3202@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <ul className="flex justify-center w-full pt-5 list-none wrapper h-30 font-poppins">
          <a href="https://www.linkedin.com/in/lawrenceli7/">
            <li className="icon relative dark:bg-white rounded-full m-2.5 w-12 h-12 text-lg flex justify-center items-center flex-col shadow-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue hover:text-white bg-[#eaeaea] dark:text-black dark:hover:bg-blue dark:hover:text-white">
              <span className="absolute top-0 px-2 py-1 text-sm text-white transition-all duration-300 ease-in-out rounded shadow-lg opacity-0 pointer-events-none bg-blue tooltip-linkedin">
                LinkedIn
              </span>
              <GrLinkedin size={20} className="hover:animate-pulse" />
            </li>
          </a>
          <a href="https://www.github.com/lawrenceli7/">
            <li className="icon relative dark:bg-white rounded-full m-2.5 w-12 h-12 text-lg flex justify-center items-center flex-col shadow-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-green hover:text-white bg-[#eaeaea] dark:text-black dark:hover:bg-green dark:hover:text-white">
              <span className="absolute top-0 px-2 py-1 text-sm text-white transition-all duration-300 ease-in-out rounded shadow-lg opacity-0 pointer-events-none bg-green tooltip-github">
                Github
              </span>
              <GrGithub size={20} className="hover:animate-pulse" />
            </li>
          </a>
          <a href="mailto:lawrenceli3202@gmail.com">
            <li className="icon relative dark:bg-white rounded-full m-2.5 w-12 h-12 text-lg flex justify-center items-center flex-col shadow-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-red hover:text-white bg-[#eaeaea] dark:text-black dark:hover:bg-red dark:hover:text-white">
              <span className="absolute top-0 px-2 py-1 text-sm text-white transition-all duration-300 ease-in-out rounded shadow-lg opacity-0 pointer-events-none bg-red tooltip-mail">
                Email
              </span>
              <GrMail size={20} className="hover:animate-pulse" />
            </li>
          </a>
        </ul>
      </div>
      <p className="text-m">
        &copy; {new Date().getFullYear()} Lawrence Li. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
