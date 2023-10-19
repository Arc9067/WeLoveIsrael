import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Help from "./Components/Help";
import Mics from "./Components/Mics";
import Footer from "./Components/footer";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  return (
    <div className="min-h-screen w-full relative bg-general text-white font-spaceGrotesk">
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
