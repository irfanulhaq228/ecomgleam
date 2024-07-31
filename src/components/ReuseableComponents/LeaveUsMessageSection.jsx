import React from "react";
import SpeakToEcomGleam from "./SpeakToEcomGleam";

const LeaveUsMessageSection = () => {
  return (
    <div className="my-[50px] flex flex-col items-center">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--heading-color] mb-[15px] px-[15px] md:w-[500px] lg:w-[750px]">
        Leave a Message For Us
      </p>
      <p className="text-[15px] md:text-[20px] text-[--heading-color] lg:leading-7 text-center md:max-w-[600px] lg:max-w-[750px] mt-[5px] capitalize px-[10px]">
        Contact us today; our team is ready to support your goals, whether
        you’re seeking expert guidance, campaign management, or strategic
        consultation. 
      </p>
      <SpeakToEcomGleam />
    </div>
  );
};

export default LeaveUsMessageSection;
