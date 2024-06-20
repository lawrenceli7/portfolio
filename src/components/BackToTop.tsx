import React from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

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
      <MdOutlineKeyboardDoubleArrowUp size={40} />
    </button>
  );
};

export default BackToTop;
