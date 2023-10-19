import React from "react";

function Header() {
  return (
    <header className="w-full right-0 absolute top-0 ">
      <div className="py-4 w-full container flex justify-center mx-auto items-center ">
        <nav className="w-full overflow-hidden  bg-[#fffffff0] py-3 lg:w-[700px] rounded-xl text-[#10269D] lg:px-20 flex justify-center items-center lg:justify-between">
          <h2 className="hidden lg:block capitalize" data-aos="fade-right">
            about
          </h2>
          <a
            href=""
            className="font-GulfsDisplay uppercase text-2xl md:text-2xl wow slideInLeft "
            data-aos="fade-up"
          >
            israel
          </a>
          <h2 className="hidden lg:block capitalize" data-aos="fade-left">
            tokenomics
          </h2>
        </nav>
      </div>
    </header>
  );
}

export default Header;
