import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-white text-stone-900 min-h-screen font-inter max-w-5xl w-11/12 mx-auto scroll-smooth">
      <Nav />
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
