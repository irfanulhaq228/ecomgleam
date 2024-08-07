import React from "react";
import Marquee from "react-fast-marquee";

import Ali from "../../assets/imgs/ALI-RAZA.png"
import Basit from "../../assets/imgs/Basit.png"

const Section8 = () => {
  return (
    <div className="pt-3 mt-[15px] flex flex-col">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--main-heading-color]">
        Meet the team
      </p>
      <div className="flex overflow-x-auto gap-6 justify-start xl:justify-center items-center mt-[20px]">
        <div className="max-w-[1300px] hidden xl:flex">
          <div>
            <img src={Ali} className="max-h-[400px]" />
          </div>
          <div>
            <img src={Basit} className="max-h-[400px]" />
          </div>
        </div>
        <div className="flex xl:hidden">
        <Marquee speed={100} className="max-w-[1300px]">
          <div>
            <img src={Ali} className="max-h-[400px]" />
          </div>
          <div>
            <img src={Basit} className="max-h-[400px]" />
          </div>
        </Marquee>
        </div>
      </div>
      <hr className="mt-10 w-[90%] self-center" />
    </div>
  );
};

export default Section8;
