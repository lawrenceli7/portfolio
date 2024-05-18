import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {

  return (
    <div className="bg-lightgray text-gray-500 min-h-screen dark:bg-[#23272f]">
      <Nav />
      <div className="max-w-5xl w-11/12 mx-auto">
        <Home />
        <About />
        <Project />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
