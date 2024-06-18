import React from "react";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-500 bg-lightgray dark:bg-default">
      <Nav />
      <div className="w-11/12 max-w-5xl mx-auto">
        <Home />
        <About />
        <Project />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
