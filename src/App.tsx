import React from "react";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-lightgray text-gray-500 antialiased dark:bg-[#0f1117]">
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
