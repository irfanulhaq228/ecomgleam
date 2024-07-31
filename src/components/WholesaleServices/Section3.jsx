import React from "react";

import img1 from "../../assets/imgs/About-section-4-img-1.png";
import img2 from "../../assets/imgs/About-section-4-img-2.png";
import img3 from "../../assets/imgs/About-data-2-img-2.png";
import img4 from "../../assets/imgs/amazon-sec-3-img-1.png";
import img5 from "../../assets/imgs/About-section-4-img-5.png";

const Section3 = () => {
  return (
    <div className="flex flex-col gap-[30px] xl:gap-[50px] items-center justify-center mt-[70px]">
      <div className="mt-[40px] flex-1 w-[95%] xl:w-[1200px] flex flex-col xl:flex-row items-center xl:items-start justify-center gap-[30px] xl:gap-[50px]">
        <div className="max-w-[366px] xl:min-w-[auto] xl:flex-1 flex flex-col gap-[20px] items-center rounded-[12px] pt-[35px] px-[15px] sm:px-[40px] xl:h-[433px] text-[30px] xl:text-[70px] font-[800] justify-center">
          <p className="mt-[-50px] xl:mt-[500px] uppercase text-center">What Makes Us Unique</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] rounded-[12px] px-[15px] xl:h-[433px]"
        >
          <img src={img1} className="h-[220px] object-contain w-[80%]" />
          <p className="capitalize text-[--new-heading-color] text-[30px] font-[700] leading-[35px]">
            Expertise and Experience
          </p>
          <p className="text-[18px] text-[--heading-color] font-[500] leading-[20px]">
            With over 5 years of experience our team brings a wealth of
            knowledge and expertise to your brand.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] rounded-[12px] px-[15px] xl:h-[433px]"
        >
          <img src={img2} className="h-[220px] object-contain w-[80%]" />
          <p className="capitalize text-[--new-heading-color] text-[30px] font-[700] leading-[35px]">
            Customized Solutions
          </p>
          <p className="text-[18px] text-[--heading-color] font-[500] leading-[20px]">
            We understand that every brand is unique. Our personalized approach
            ensures that our strategies are tailored to meet your specific needs
            and goals.
          </p>
        </div>
      </div>
      <div className="flex-1 w-[95%] xl:w-[1200px] flex flex-col xl:flex-row items-center xl:items-start justify-center gap-[30px] xl:gap-[50px]">
        <div
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] rounded-[12px] px-[15px] xl:h-[433px]"
        > 
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] rounded-[12px] px-[15px] xl:h-[433px]"
        >
          <img src={img4} className="h-[220px] object-contain w-[80%]" />
          <p className="capitalize text-[--new-heading-color] text-[30px] font-[700] leading-[35px]">
            End-to-End Service
          </p>
          <p className="text-[18px] text-[--heading-color] font-[500] leading-[20px]">
            From product selection to post-launch management, we offer a
            complete solution that covers every aspect of private label and
            brand management on Amazon.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] rounded-[12px] px-[15px] xl:h-[433px]"
        >
          <img src={img5} className="h-[220px] object-contain w-[80%]" />
          <p className="capitalize text-[--new-heading-color] text-[30px] font-[700] leading-[35px]">
            Proven Track Record
          </p>
          <p className="text-[18px] text-[--heading-color] font-[500] leading-[20px]">
            Our success stories speak for themselves. We have helped numerous
            brands achieve significant growth and establish a strong presence on
            Amazon.
          </p>
        </div>
      </div>
      <div className="flex-1 w-[95%] xl:w-[1200px] flex flex-col xl:flex-row items-center xl:items-start justify-center gap-[30px] xl:gap-[50px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] rounded-[12px] px-[15px] xl:h-[433px]"
        >
          <img src={img3} className="h-[220px] object-contain w-[80%]" />
          <p className="capitalize text-[--new-heading-color] text-[30px] font-[700] leading-[35px]">
            Proactive Support
          </p>
          <p className="text-[18px] text-[--heading-color] font-[500] leading-[20px]">
            Dedicated support team ready to assist you at every step, ensuring a
            smooth and hassle-free experience
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] rounded-[12px] px-[15px] xl:h-[433px]"
        >
          <img src={img4} className="h-[220px] object-contain w-[80%]" />
          <p className="capitalize text-[--new-heading-color] text-[30px] font-[700] leading-[35px]">
            Innovative Tools
          </p>
          <p className="text-[18px] text-[--heading-color] font-[500] leading-[20px]">
            Utilizing the latest tools and technology to streamline processes
            and gain a competitive edge
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[366px] xl:min-w-[auto] transition-all duration-300 hover:scale-[1.03] xl:flex-1 flex flex-col gap-[20px] rounded-[12px] px-[15px] xl:h-[433px]"
        >
          <img src={img5} className="h-[220px] object-contain w-[80%]" />
          <p className="capitalize text-[--new-heading-color] text-[30px] font-[700] leading-[35px]">
            Proven Track Record
          </p>
          <p className="text-[18px] text-[--heading-color] font-[500] leading-[20px]">
            A history of successful client engagements and tangible results that
            speak to our effectiveness and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
