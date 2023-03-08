import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollButton from "./components/helper/ScrollButton";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToShowFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShowFrom) {
      !isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="scroll-smooth dark:bg-dark">
      {/* Components */}
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

      {/* Helper */}
      {!isVisible ? null : <ScrollButton />}
    </div>
  );
};

export default App;
