import React from "react";

const LeftRightCards = ({ data, heading, coloredHeading }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-[80px]">
      <p className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center uppercase text-[--new-heading-color] mb-[15px] px-[15px] md:w-[600px] lg:w-[750px] xl:w-[1100px]">
        {heading} <span className="text-[--main-color]">{coloredHeading}</span>
      </p>
      <div className="w-[95%] xl:w-[1200px] flex flex-col gap-[60px] mt-[40px]">
        {data?.map((item, index) =>
          !item?.rightImage ? (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-[25px] lg:gap-[30px]"
            >
              <div className="h-[230px] min-h-[230px] w-full lg:w-[500px] lg:min-w-[500px] xl:h-[280px] xl:min-h-[280px] xl:w-[550px] xl:min-w-[550px] rounded-[36px] flex items-center justify-center">
                {item?.img && (
                  <img
                    src={item?.img}
                    className="object-contain h-full w-full"
                  />
                )}
              </div>
              <div className="flex flex-col gap-[15px] lg:gap-[30px]">
                <p className="text-[22px] sm:text-[24px] font-[700] text-[--new-heading-color]">
                  {item?.heading}
                </p>
                <p className="text-[17px] sm:text-[20px] font-[500] leading-6 sm:leading-7 capitalize text-[--heading-color]">
                  {item?.desc}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-[25px] lg:gap-[30px]"
            >
              <div className="flex flex-col gap-[15px] lg:gap-[30px]">
                <p className="text-[22px] sm:text-[24px] font-[700] text-[--new-heading-color] lg:text-start">
                  {item?.heading}
                </p>
                <p className="text-[17px] sm:text-[20px] font-[500] leading-6 sm:leading-7 capitalize lg:text-start text-[--heading-color]">
                  {item?.desc}
                </p>
              </div>
              <div className="h-[230px] min-h-[230px] w-full lg:w-[500px] lg:min-w-[500px] xl:h-[280px] xl:min-h-[280px] xl:w-[550px] xl:min-w-[550px] rounded-[36px] flex items-center justify-center">
                {item?.img && (
                  <img
                    src={item?.img}
                    className="object-contain h-full w-full"
                  />
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LeftRightCards;
