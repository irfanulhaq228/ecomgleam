import React from "react";

import img1 from "../../assets/imgs/about-sec-4-img-1.png";
import img2 from "../../assets/imgs/about-sec-4-img-2.png";
import img3 from "../../assets/imgs/about-sec-4-img-3.png";

const Section4 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[80px]">
      <p className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center uppercase text-[--main-heading-color] mb-[15px] px-[15px] md:w-[600px] lg:w-[750px] xl:w-[1100px]">
        The Gleam Values
      </p>
      <div className="mt-[40px] flex-1 w-[95%] xl:w-[1200px] flex flex-col xl:flex-row items-center xl:items-start justify-center gap-[30px] xl:gap-[50px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] items-center rounded-[12px] border py-[30px] px-[15px] sm:px-[25px] xl:h-[435px]"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          <img src={img1} className="h-[170px]" />
          <p className="uppercase text-[--main-color] text-[30px] font-[700]">
            Innovate
          </p>
          <p className="text-[17px] text-[--heading-color] font-[500] leading-[20px] text-center">
            At Ecom Gleam, we thrive on innovation, crafting pioneering
            strategies that lead the way in e-commerce excellence. Discover new
            horizons with us and redefine your online success.
          </p>
        </div>
        <div
          data-aos="fade-up" 
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] items-center rounded-[12px] border py-[30px] px-[15px] sm:px-[25px] h-[435px]"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          <img src={img2} className="h-[170px]" />
          <p className="uppercase text-[--main-color] text-[30px] font-[700]">
            Illuminate
          </p>
          <p className="text-[17px] text-[--heading-color] font-[500] leading-[20px] text-center">
            We illuminate your path to prosperity, uncovering hidden
            opportunities that spark growth and elevate your business above the
            rest. Let us brighten your journey to success.
          </p>
        </div>
        <div
          data-aos="fade-up" 
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] items-center rounded-[12px] border py-[30px] px-[15px] sm:px-[25px] h-[435px]"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          <img src={img3} className="h-[170px]" />
          <p className="uppercase text-[--main-color] text-[30px] font-[700]">
            Integrate
          </p>
          <p className="text-[17px] text-[--heading-color] font-[500] leading-[20px] text-center">
            Seamlessly integrating solutions tailored to your needs, we unify
            every element of your e-commerce strategy with precision, ensuring a
            cohesive and impactful presence in the digital marketplace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
