import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {

  return (
    <div className="bg-lightgray text-stone-900 min-h-screen">
      <Nav />
      <div className="max-w-5xl w-11/12 mx-auto">
        <Home />
        <About />
        <Project />
        <Contact />
        <BackToTop />
      </div>
      <Footer />
    </div>
  );
}

export default App;
