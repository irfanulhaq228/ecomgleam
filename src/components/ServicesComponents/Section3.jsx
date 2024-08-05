import React from "react";
import { Carousel } from "antd";

import "antd/dist/antd";

import { ServiceSliderData } from "../../assets/data";

import img from "../../assets/imgs/3PL-slider-1.png";

const responsiveSettings = [
  {
    breakpoint: 1200, // xl
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 992, // lg
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 768, // md
    settings: {
      slidesToShow: 1,
    },
  },
  {
    breakpoint: 576, // sm
    settings: {
      slidesToShow: 1,
    },
  },
];

const Section3 = () => {
  return (
    <div className="flex flex-col items-center mt-[60px]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--main-heading-color] mb-[15px] px-[15px] md:w-[500px] lg:w-[650px]">
        Experience the Perks of Our Warehousing Solutions
      </p>
      <p className="text-[15px] md:text-[20px] text-[--heading-color] lg:leading-7 text-center md:max-w-[600px] lg:max-w-[750px] mt-[5px]">
        Customized warehousing solutions aimed at improving inventory
        management, streamlining operations, and fostering business growth.
      </p>
      <div className="w-[95%] xl:w-[1150px] mt-[20px] xl:mt-0 xl:mb-[-100px] z-[999] bg-white shadow-xl py-[20px]">
        <Carousel
          infinite={true}
          autoplay
          autoplaySpeed={3000}
          slidesToShow={3}
          responsive={responsiveSettings}
          style={{ fontFamily: "inter", padding: "0 20px" }}
          className="custom-carousel"
        >
          {ServiceSliderData?.map((item, index) => (
            <div key={index}>
              <p className="capitalize text-[20px] sm:text-[23px] font-[700] h-[270px] text-[--main-color] text-center flex flex-col gap-1 justify-center items-center sm:w-[250px]">
                <img src={img} className="w-[150px]" />
                {item?.text}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Section3;
