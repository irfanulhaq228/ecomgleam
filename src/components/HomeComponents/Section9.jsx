import React from "react";
import Marquee from "react-fast-marquee";

import img from "../../assets/imgs/our-client-updated.png";

const Section9 = () => {
  return (
    <div className="py-10 px-4 mt-[20px] flex flex-col">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--main-heading-color]">
        Our Clients
      </p>
      <div className="flex xl:hidden overflow-x-auto sm:pb-4 pt-3 sm:pt-8 gap-6 justify-start xl:justify-center items-center">
        <Marquee speed={150} className="flex-shrink-0 w-[1300px]">
          <img src={img} className="w-[500px] md:w-[600px] lg:w-[800px] xl:w-[900px]" alt="Amazon Logo" />
        </Marquee>
      </div>
      <div className="hidden xl:flex overflow-x-auto sm:pb-4 pt-3 sm:pt-8 gap-6 justify-start xl:justify-center items-center">
        <div className="flex-shrink-0 max-w-[1300px]">
          <img src={img} className="w-[500px] md:w-[600px] lg:w-[800px] xl:w-[900px]" alt="Amazon Logo" />
        </div>
      </div>
      <hr className="w-[90%] self-center mb-[20px] mt-[30px]" />
    </div>
  );
};

export default Section9;
