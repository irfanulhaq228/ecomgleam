import React from "react";

import img1 from "../../assets/imgs/amazon-sec-3-img-1.png";
import img2 from "../../assets/imgs/amazon-sec-3-img-2.png";
import img3 from "../../assets/imgs/amazon-sec-3-img-3.png";

const Section3 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[80px]">
      <p className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center uppercase text-[--main-heading-color] mb-[15px] px-[15px] md:w-[600px] lg:w-[750px] xl:w-[300px]">
        Our Working Process
      </p>
      <div className="mt-[40px] flex-1 w-[95%] xl:w-[1200px] flex flex-col xl:flex-row items-center xl:items-start justify-center gap-[30px] xl:gap-[50px]">
        <div
          data-aos="fade-up" 
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] items-center rounded-[12px] border pt-[35px] px-[15px] sm:px-[40px] xl:h-[433px]"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          <img src={img1} className="h-[150px]" />
          <p className="uppercase text-[--new-heading-color] text-[30px] font-[700] text-center leading-[35px] h-[105px]">
            Consultation and Strategy Development
          </p>
          <p className="text-[19px] text-[--heading-color] font-[500] leading-[20px] text-center pb-[30px] xl:pb-0">
            Comprehensive analysis to tailor strategies to your brand's goals.
          </p>
        </div>
        <div
          data-aos="fade-up" 
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] items-center rounded-[12px] border pt-[35px] px-[15px] sm:px-[40px] xl:h-[433px]"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          <img src={img2} className="h-[150px]" />
          <p className="uppercase text-[--new-heading-color] text-[30px] font-[700] text-center leading-[35px] h-[105px]">
            Implementation and Execution
          </p>
          <p className="text-[17px] text-[--heading-color] font-[500] leading-[20px] text-center pb-[30px] xl:pb-0">
            Precise execution of strategies for seamless integration and
            efficiency.
          </p>
        </div>
        <div
          data-aos="fade-up" 
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] items-center rounded-[12px] border pt-[35px] px-[15px] sm:px-[40px] xl:h-[433px]"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          <img src={img3} className="h-[150px]" />
          <p className="uppercase text-[--new-heading-color] text-[30px] font-[700] text-center leading-[35px] h-[105px]">
            Continuous Optimization
          </p>
          <p className="text-[17px] text-[--heading-color] font-[500] leading-[20px] text-center pb-[30px] xl:pb-0">
            Real-time monitoring and adjustments based on market trends and data
            analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
