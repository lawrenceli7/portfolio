import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="bg-[#f8f8fa] text-stone-900 min-h-screen">
      <div className="max-w-5xl w-11/12 mx-auto">
        <Nav />
        <Intro />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
