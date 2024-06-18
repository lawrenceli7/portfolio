import React from "react";
import { IoIosArrowDropup } from "react-icons/io";

const BackToTop: React.FC = () => {
  const scrollTo = (dest: string) => {
    return () => {
      const element = document.getElementById(dest);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  };

  return (
    <button
      onClick={scrollTo("home")}
      className="mb-8 hover:text-teal-100 dark:hover:text-purple-100 dark:text-white"
    >
      <IoIosArrowDropup size={40} />
    </button>
  );
};

export default BackToTop;
