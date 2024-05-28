import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { MdOutlineAttachEmail } from "react-icons/md";
import BackToTop from "../components/BackToTop";

function Footer() {
  return (
    <div className="pt-8 text-center bg-white dark:bg-footer dark:text-white">
      <BackToTop />
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
        <a
          className="cursor-pointer hover:animate-pulse hover:text-blue dark:text-white dark:hover:text-blue"
          href="https://www.linkedin.com/in/lawrenceli7/"
        >
          <GrLinkedin size={30} />
        </a>
        <a
          className="cursor-pointer hover:animate-pulse hover:text-green dark:text-white dark:hover:text-green"
          href="https://www.github.com/lawrenceli7/"
        >
          <GrGithub size={30} />
        </a>
        <a
          className="cursor-pointer hover:animate-pulse hover:text-red dark:text-white dark:hover:text-red"
          href="mailto:lawrenceli3202@gmail.com"
        >
          <GrMail size={30} />
        </a>
      </div>
      <p className="text-m">
        &copy; {new Date().getFullYear()} Lawrence Li. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
