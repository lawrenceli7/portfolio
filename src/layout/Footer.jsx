import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import BackToTop from "../components/BackToTop";

function Footer() {
  return (
    <div className="text-center bg-white dark:bg-[#16181d] dark:text-white pt-8">
      <BackToTop />
      <p className="mb-8">lawrenceli3202@gmail.com</p>
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
          href="mailto: lawrenceli3202@gmail.com"
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
