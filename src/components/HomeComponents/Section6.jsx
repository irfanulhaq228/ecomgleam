import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

import img from "../../assets/imgs/Home-sec-6-img.png";
import img2 from "../../assets/imgs/home-sec-6-left-img.png";
import phoneIcon from "../../assets/svgs/Phone-call.svg";
import mailIcon from "../../assets/svgs/Mail.svg";

import line from "../../assets/imgs/Home-sec-6-line.png";

const Section6 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="bg-[--dark-color] py-[40px] flex flex-col items-center pt-[10px] xl:pt-[80px] px-[10px]">
      <div className="w-full flex flex-col xl:flex-row xl:max-w-[1300px] mt-[40px] xl:mt-0 items-center xl:items-end">
        <div className="flex-1 flex flex-col justify-center items-center xl:items-start gap-1 xl:gap-10 xl:pb-[120px]">
          <p className="uppercase w-full font-[700] sm:font-[900] text-[30px] sm:text-[40px] xl:text-[55px] text-white leading-[50px] md:leading-[80px] mb-[10px] text-center xl:text-start">
            Book a time with us or drop in for a coffee
          </p>
          <img src={img2} className="w-[350px] mb-[15px] max-h-[350px]" />
          <div className="flex flex-col sm:flex-row justify-center items-center xl:items-end gap-1 xl:gap-10">
            <div className="flex gap-2 text-white h-[43px] w-[250px] xl:w-auto">
              <img src={phoneIcon} className="w-[20px] h-[20px]" />
              <p>+1 (215) 305-8197</p>
            </div>
            <div className="flex gap-2 text-white h-[43px] w-[250px] xl:w-auto">
              <img src={mailIcon} className="w-[20px] h-[20px]" />
              <p className="flex flex-col leading-5">
                <span>info@ecomgleam.com</span>
                <span>career@ecomgleam.com</span>
              </p>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-up" 
          data-aos-duration="1000"
          src={img}
          className="max-w-[650px] w-[90%] md:w-auto"
          onClick={() => navigate("/contact-us")}
        />
      </div>
      <img src={line} className="hidden xl:block w-[450px] mt-[-70px]" />
    </div>
  );
};

export default Section6;
