import React from "react";
import top from "../assets/top.svg";

function Help() {
  return (
    <section className="py-32 w-full relative" id="help">
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
          How We Help
        </h1>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-14 mt-10">
          <article
            data-aos="fade-right"
            data-aos-duration="700"
            className="bg-white h-[400px] rounded-xl p-5"
          >
            <h1 className=" text-blue-900 text-3xl font-bold font-['Space Grotesk'] ">
              Humanitarian Aid:{" "}
            </h1>
            <p className="mt-5 text-blue-900 text-base font-normal font-['Space Grotesk'] leading-loose">
              $WLI raises funds through crypto donations together with the taxes
              and distributes them to reputable humanitarian organizations and
              initiatives operating within Israel. This includes providing
              essential supplies, medical assistance, and aid to those in need
            </p>
          </article>
          <article
            data-aos="fade-left"
            data-aos-duration="700"
            className="bg-white h-[400px] rounded-xl p-5"
          >
            <h1 className=" text-blue-900 text-3xl font-bold font-['Space Grotesk'] ">
              Emergency Assistance:{" "}
            </h1>
            <p className="mt-5 text-blue-900 text-base font-normal font-['Space Grotesk'] leading-loose">
              We offer immediate financial aid to individuals and families
              affected by conflict, helping them rebuild their lives and
              overcome the challenges brought about by war.
            </p>
          </article>
          <article
            data-aos="fade-right"
            data-aos-duration="700"
            className="bg-white h-[400px] rounded-xl p-5"
          >
            <h1 className=" text-blue-900 text-3xl font-bold font-['Space Grotesk'] ">
              Long-term Resilience{" "}
            </h1>
            <p className="mt-5 text-blue-900 text-base font-normal font-['Space Grotesk'] leading-loose">
              Beyond immediate relief, our project is committed to supporting
              long-term resilience in Israel. We invest in initiatives that
              promote education, healthcare, and economic development, fostering
              a stronger, more resilient society.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Help;
