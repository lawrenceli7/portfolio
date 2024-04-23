import { IoIosArrowDropup } from "react-icons/io";

function BackToTop() {
  function scrollTo(dest) {
    return () => {
      const element = document.getElementById(dest);
      element.scrollIntoView({ behavior: "smooth" });
    };
  }
  return (
    <button onClick={scrollTo("home")} className="hover:text-teal-100 mb-8 dark:hover:text-purple-100 dark:text-white" ><IoIosArrowDropup size={40} className="" /></button>
  );
}

export default BackToTop;