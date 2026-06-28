import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CafeIntro from "./components/CafeIntro";
import Menu from "./components/Menu";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import GalleryPage from "./pages/GalleryPage";

function Home() {
  return (
    <>
      <Hero />
      <CafeIntro />
      <Menu />
      <WhyChoose />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;