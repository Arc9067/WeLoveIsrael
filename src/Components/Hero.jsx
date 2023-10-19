import React from "react";
import logo from "../assets/logo.svg";

function Hero() {
  return (
    <section className="h-screen w-full py-24" id="hero">
      <div className="container flex justify-center">
        <img
          src={logo}
          alt=""
          className="w-[15rem] lg:w-max"
          data-aos="fade-up"
          data-aos0-duration="1500"
        />
      </div>
    </section>
  );
}

export default Hero;
