import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Help from "./Components/Help";
import Mics from "./Components/Mics";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  return (
    <div className="min-h-screen w-full  relative bg-general text-white font-spaceGrotesk">
      <Header />
      <Hero />
      <About />
      <Help />
      <Mics />
      <Footer />
    </div>
  );
}

export default App;
