import { IoArrowUpCircleOutline } from "react-icons/io5";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Project from "./pages/Project";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#f8f8fa] text-stone-900 min-h-screen">
      <Nav />
      <div className="max-w-5xl w-11/12 mx-auto">
        <Home />
        <About />
        <Project />
        <Contact />
        <a href="#home" className="hover:text-teal-100" ><IoArrowUpCircleOutline size={40} className="ml-auto"/></a>
      </div>
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
