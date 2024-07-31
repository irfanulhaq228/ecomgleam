import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from "../../assets/imgs/Home-sec-5-img-1-updated.png";
import img2 from "../../assets/imgs/Home-sec-5-img-2-updated.png";
import img3 from "../../assets/imgs/Home-sec-5-img-3-updated.png";

import line1 from "../../assets/imgs/Home-sec-5-line-1.png";
import line2 from "../../assets/imgs/Home-sec-5-line-2.png";

const Section5 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[--main-color] pt-[40px] rounded-t-[30px] sm:rounded-t-[60px]">
      <p className="text-[25px] sm:text-[30px] md:text-[40px] font-[700] text-center uppercase text-white">
        Our Working process
      </p>
      <div className="mt-[30px] relative flex flex-col items-center gap-[60px] xl:gap-[30px] pb-[50px] xl:pb-[15px]">
        {/* div-1 */}
        <div data-aos="fade-up" data-aos-duration="1000" className="w-full max-w-[90%] lg:max-w-[950px] xl:max-w-[1100px] flex flex-col lg:flex-row items-center lg:items-start lg:gap-7">
          <img
            src={img1}
            className="w-[100%] max-w-[350px] lg:max-w-[400px] xl:max-w-[600px] object-contain"
          />
          <div className="lg:pt-[40px] xl:pt-[60px]">
            <p className="text-[20px] sm:text-[25px] md:text-[33px] font-[700] uppercase text-white text-center lg:text-start">
              Insightful Consultation
            </p>
            <p className="capitalize text-[16px] sm:text-[18px] md:text-[22px] mt-1 text-center lg:text-start text-gray-200">
              We delve into your business goals and challenges, conducting
              thorough analysis to uncover key insights.
            </p>
          </div>
        </div>
        {/* arrow */}
        <div className="hidden lg:block absolute top-[205px] xl:top-[250px]">
          <img src={line1} className="lg:w-[380px] xl:w-[550px]" />
        </div>
        {/* div-2 */}
        <div data-aos="fade-up" data-aos-duration="1000" className="w-full max-w-[90%] lg:max-w-[950px] xl:max-w-[1100px] flex flex-col lg:flex-row items-center lg:items-start lg:gap-7 lg:mt-[50px] xl:mt-[100px]">
          <div className="lg:pt-[30px] xl:pt-[60px]">
            <p className="text-[20px] sm:text-[25px] md:text-[33px] font-[700] uppercase text-white text-center lg:text-end">
              Strategic Customization and Execution
            </p>
            <p className="capitalize text-[16px] sm:text-[18px] md:text-[22px] mt-1 text-center lg:text-end text-gray-200">
              Crafting and implementing bespoke strategies aligned with your
              objectives, optimizing for efficiency and growth.
            </p>
          </div>
          <img
            src={img2}
            className="w-[100%] max-w-[350px] lg:max-w-[400px] xl:max-w-[580px]"
          />
        </div>
        {/* arrow */}
        <div className="hidden lg:block absolute top-[625px] xl:top-[850px]">
          <img src={line2} className="lg:w-[300px] xl:w-[480px]" />
        </div>
        {/* div-3 */}
        <div data-aos="fade-up" data-aos-duration="1000" className="w-full max-w-[90%] lg:max-w-[950px] xl:max-w-[1130px] flex flex-col lg:flex-row items-center lg:items-start lg:gap-7 lg:mt-[50px] xl:mt-[100px]">
          <img
            src={img3}
            className="w-[100%] max-w-[350px] lg:max-w-[400px] xl:max-w-[580px]"
          />
          <div className="xl:pt-[90px]">
            <p className="text-[20px] sm:text-[25px] md:text-[33px] font-[700] uppercase text-white text-center lg:text-start">
              Transparent Accountability
            </p>
            <p className="capitalize text-[16px] sm:text-[18px] md:text-[22px] mt-1 text-center lg:text-start text-gray-200">
              Vigilantly monitoring performance metrics, delivering clear,
              actionable insights to foster transparency and accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
