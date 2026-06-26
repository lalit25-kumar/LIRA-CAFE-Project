import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CafeIntro from "./components/CafeIntro";
import Menu from "./components/Menu";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,      // Animation duration
      once: false,         // Scroll karke har baar animation chalegi
      offset: 120,         // Section thoda pehle animate hoga
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <CafeIntro />
      <Menu />
      <WhyChoose />
      <Contact />
    </>
  );
}

export default App;