import React from "react";
import top from "../assets/topb.svg";
import star from "../assets/star.svg";
import coin from "../assets/coin.svg";
import money from "../assets/money.svg";

function Mics() {
  return (
    <section className="py-32 w-full relative bg-[#0F3EDA]" id="mics">
      <img
        src={top}
        alt=""
        className="absolute -top-6 lg:-top-20 w-full pointer-events-none"
      />

      <div className="container flex flex-col justify-center items-center gap-10">
        <h1
          data-aos="fade-down"
          className="font-GulfsDisplay text-5xl lg:text-6xl text-center max-w-[700px]"
        >
          Our Tokenomics{" "}
        </h1>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-14 mt-10">
          <article
            data-aos="fade-right"
            data-aos-duration="700"
            className="h-[200px] rounded-2xl shadow border-4 p-4 flex items-start flex-col justify-between bg-[#10269D]"
          >
            <img src={star} alt="" />
            <div className="flex w-full justify-between items-center">
              <h1 className="text-center text-white text-5xl font-normal font-GulfsDisplay leading-10">
                2%
              </h1>
              <p className="text-center text-white text-2xl font-normal font-GulfsDisplay">
                BUY/SELL/TAX
              </p>
            </div>
          </article>
          <article
            data-aos="fade-left"
            data-aos-duration="700"
            className="h-[200px] rounded-2xl shadow border-4 p-4 flex items-start flex-col justify-between bg-[#10269D]"
          >
            <img src={coin} alt="" />
            <div className="flex w-full justify-between items-center">
              <h1 className="text-center text-white text-5xl font-normal font-GulfsDisplay leading-10">
                2%
              </h1>
              <p className="text-center text-white text-2xl font-normal font-GulfsDisplay">
                BUY/SELL/TAX
              </p>
            </div>
          </article>
          <article
            data-aos="fade-right"
            data-aos-duration="700"
            className="h-[200px] rounded-2xl shadow border-4 p-4 flex items-start flex-col justify-between bg-[#10269D]"
          >
            <img src={money} alt="" />
            <div className="flex w-full justify-between items-center">
              <h1 className="text-center text-white text-5xl font-normal font-GulfsDisplay leading-10">
                2%
              </h1>
              <p className="text-center text-white text-2xl font-normal font-GulfsDisplay">
                BUY/SELL/TAX
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Mics;
