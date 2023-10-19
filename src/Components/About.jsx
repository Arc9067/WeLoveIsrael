import React from "react";
import top from "../assets/top.svg";
import flagl from "../assets/flagleft.svg";
import flagr from "../assets/flagright.svg";

function About() {
  return (
    <section className="py-32 w-full relative" id="about">
      <img
        src={top}
        alt=""
        className="absolute -top-6 lg:-top-20 w-full pointer-events-none"
      />
      <img
        src={flagl}
        alt=""
        data-aos="fade-right"
        data-aos-duration="700"
        className="absolute pointer-events-none bottom-0 left-0 w-[15rem] lg:w-[30rem]"
      />
      <img
        src={flagr}
        alt=""
        data-aos="fade-left"
        data-aos-duration="700"
        className="absolute bottom-0 right-0 w-[10rem] lg:w-[20rem]"
      />
      <div className="container flex flex-col justify-center items-center gap-10">
        <h1
          className="font-GulfsDisplay text-4xl lg:text-5xl text-center max-w-[700px]"
          data-aos="fade-down"
        >
          Our Mission: Supporting Resilience and Relief
        </h1>
        <p
          data-aos="fade-left"
          className="max-w-[700px] text-center text-white text-base font-medium font-['Space Grotesk'] leading-loose tracking-tight"
        >
          Our mission is to empower and uplift the citizens of Israel by
          offering financial assistance and support when it's needed the most.
          We understand the unique challenges faced by the people of Israel
          during times of war, and we are committed to standing with them in
          solidarity.
        </p>
        <div className="justify-center items-start gap-4 flex flex-wrap">
          <div
            data-aos="fade-right"
            className="px-16 py-4 bg-white rounded-full justify-center items-center gap-2.5 flex"
          >
            <div className="text-blue-800 text-base font-normal font-GulfsDisplay leading-snug tracking-tight">
              Buy
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="px-16 py-4 bg-white rounded-full justify-center items-center gap-2.5 flex"
          >
            <div className="text-blue-800 text-base font-normal font-GulfsDisplay leading-snug tracking-tight">
              Chart
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
