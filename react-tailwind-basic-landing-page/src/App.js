import "./App.css";

// Components
import Navbar from "./components/Navbar";
import About from "./components/About";
import Apply from "./components/Apply";
import Faq from "./components/Faq";
import Testimoni from "./components/Testimoni";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Apply />
      <Faq />
      <Testimoni />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
