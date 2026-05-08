import React from "react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { MdOutlineAttachEmail } from "react-icons/md";
import BackToTop from "../components/BackToTop";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white/80 pt-8 text-center backdrop-blur dark:border-white/10 dark:bg-[#0f1117] dark:text-white">
      <div className="animate-bounce">
        <BackToTop />
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-gray-300 dark:text-white/65">
          <MdOutlineAttachEmail className="text-teal-400" />
          <p>
            <a className="transition hover:text-teal-400" href="mailto:lawrenceli3202@gmail.com">
              lawrenceli3202@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <ul className="flex justify-center w-full pt-5 list-none wrapper h-30 font-poppins">
          <a href="https://www.linkedin.com/in/lawrenceli7/">
            <li className="icon relative m-2.5 flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-300 shadow-sm transition-all duration-200 ease-in-out hover:border-blue hover:bg-blue hover:text-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70 dark:hover:bg-blue dark:hover:text-white">
              <span className="absolute top-0 px-2 py-1 text-sm text-white transition-all duration-300 ease-in-out rounded shadow-lg opacity-0 pointer-events-none bg-blue tooltip-linkedin">
                LinkedIn
              </span>
              <GrLinkedin size={20} className="hover:animate-pulse" />
            </li>
          </a>
          <a href="https://www.github.com/lawrenceli7/">
            <li className="icon relative m-2.5 flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-300 shadow-sm transition-all duration-200 ease-in-out hover:border-green hover:bg-green hover:text-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70 dark:hover:bg-green dark:hover:text-white">
              <span className="absolute top-0 px-2 py-1 text-sm text-white transition-all duration-300 ease-in-out rounded shadow-lg opacity-0 pointer-events-none bg-green tooltip-github">
                Github
              </span>
              <GrGithub size={20} className="hover:animate-pulse" />
            </li>
          </a>
          <a href="mailto:lawrenceli3202@gmail.com">
            <li className="icon relative m-2.5 flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-300 shadow-sm transition-all duration-200 ease-in-out hover:border-red hover:bg-red hover:text-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70 dark:hover:bg-red dark:hover:text-white">
              <span className="absolute top-0 px-2 py-1 text-sm text-white transition-all duration-300 ease-in-out rounded shadow-lg opacity-0 pointer-events-none bg-red tooltip-email">
                Email
              </span>
              <GrMail size={20} className="hover:animate-pulse" />
            </li>
          </a>
        </ul>
      </div>
      <p className="pb-3 text-sm font-semibold text-gray-300 dark:text-white/45">
        &copy; {new Date().getFullYear()} Lawrence Li. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
