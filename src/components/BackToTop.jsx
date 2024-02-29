import { IoArrowUpCircleOutline } from "react-icons/io5";

function BackToTop() {
    function scrollTo(dest) {
        return () => {
          const element = document.getElementById(dest);
          element.scrollIntoView({ behavior: "smooth" });
        };
      }
    return (
        <button onClick={scrollTo("home")} className="hover:text-teal-100 fixed bottom-8 right-8" ><IoArrowUpCircleOutline size={40} className=""/></button>
    );
}

export default BackToTop;