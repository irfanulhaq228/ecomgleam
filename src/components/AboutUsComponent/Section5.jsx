import React from "react";

import img from "../../assets/imgs/About-section-5-main.png";

const Section5 = () => {
  return (
    <div className="mt-[80px] flex justify-center">
      <div className="max-w-[w-[1100px] w-[95%] xl:w-[1200px] flex flex-col items-center">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--new-heading-color] mb-[15px] px-[15px] md:w-[500px] lg:w-[650px]">
          pioneering e-commerce solutions
        </p>
        <div className="w-full flex flex-col lg:flex-row items-center mt-[30px]">
          <div className="sm:w-[70%] md:w-[55%] lg:w-[45%] lg:p-5">
            <img src={img} />
          </div>
          <div className="lg:w-[55%] flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[10px]">
              <p className="capitalize text-[28px] font-[700] text-[--new-heading-color] text-center lg:text-start">
                Crafted Strategies for Your Success
              </p>
              <p className="text-[17px] font-[500] text-[--heading-color] max-w-[550px] text-center lg:text-start">
                At Ecom Gleam, we recognize that no two businesses are alike. We
                pride ourselves on our ability to develop tailored strategies
                that align with the specific goals and needs of each client.
                Whether you're a seasoned seller or just starting out, our
                customized solutions ensure optimal results.
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="capitalize text-[28px] font-[700] text-[--new-heading-color] text-center lg:text-start">
                Fusing Innovation with Precision
              </p>
              <p className="text-[17px] font-[500] text-[--heading-color] max-w-[550px] text-center lg:text-start">
                In an industry that's constantly evolving, staying ahead of the
                curve is crucial. We integrate the latest technologies and tools
                into our services, providing you with innovative solutions that
                drive efficiency and growth. Our tech-savvy approach ensures
                you're always one step ahead of the competition.
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="capitalize text-[28px] font-[700] text-[--new-heading-color] text-center lg:text-start">
              Empowered by Insightful Analytics
              </p>
              <p className="text-[17px] font-[500] text-[--heading-color] max-w-[550px] text-center lg:text-start">
              We believe in the power of data. Our team leverages advanced analytics and insights to inform our strategies and decision-making processes. By understanding market trends and consumer behaviour, we help you make informed choices that enhance your business performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
