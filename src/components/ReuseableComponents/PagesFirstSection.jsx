import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css/animate.min.css";

const PagesFirstSection = ({ subheading, content, heading, video, img }) => {
  const navigate = useNavigate();
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === leftDivRef.current) {
            leftDivRef.current.classList.add(
              "animate__animated",
              "animate__fadeInLeft"
            );
            leftDivRef.current.classList.remove("opacity-0");
          }
          if (entry.target === rightDivRef.current) {
            rightDivRef.current.classList.add(
              "animate__animated",
              "animate__fadeInRight"
            );
            rightDivRef.current.classList.remove("opacity-0");
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (leftDivRef.current) observer.observe(leftDivRef.current);
    if (rightDivRef.current) observer.observe(rightDivRef.current);

    return () => {
      if (leftDivRef.current) observer.unobserve(leftDivRef.current);
      if (rightDivRef.current) observer.unobserve(rightDivRef.current);
    };
  }, []);

  return (
    <div className="py-[40px] lg:ps-[60px] xl:ps-[90px] lg:pe-[20px] xl:pe-[40px] flex flex-col lg:flex-row justify-center items-center gap-[20px] overflow-x-hidden">
      <div
        ref={leftDivRef}
        className="flex-1 lg:max-w-[400px] xl:max-w-[530px] mt-[20px] lg:mt-0 px-[15px] lg:px-0 opacity-0"
      >
        <p className="uppercase text-[16px] md:text-[20px] xl:text-[24px] font-[600] lg:font-[700] text-[--main-color] mb-[10px] text-center lg:text-start max-w-[350px] lg:max-w-[100%]">
          {subheading}
        </p>
        <p className="uppercase text-[--main-heading-color] text-[25px] md:text-[30px] xl:text-[36px] font-[700] leading-8 lg:leading-10 text-center lg:text-start max-w-[350px] lg:max-w-full">
          {heading} <span className="text-[--main-color]">Ecom Gleam</span>
        </p>
        <p className="text-[15px] md:text-[20px] text-[--heading-color] lg:leading-7 mt-[15px] text-center lg:text-start max-w-[350px] lg:max-w-full">
          {content}
        </p>
        <div className="mt-[15px] lg:mt-[30px] flex justify-center lg:justify-start gap-4 max-w-[600px]">
          <button className="h-[40px] px-[16px] bg-black rounded-full text-white text-[14px] font-[600]" onClick={() => navigate("/contact-us")}>
            Let's Chat
          </button>
          <button className="h-[40px] px-[16px] bg-[var(--main-color)] rounded-full text-white text-[14px] font-[600]" onClick={() => navigate("/about-us")}>
            Our Story
          </button>
        </div>
      </div>
      <div
        ref={rightDivRef}
        className="flex-1 h-[437px] w-[95%] lg:w-full max-w-[550px] lg:max-w-[700px] min-h-[300px] rounded-[36px] opacity-0 flex justify-center"
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover h-full w-full rounded-[36px]"
          />
        )}
        {img && (
          <img src={img} className="object-contain h-[100%]" />
        )}
      </div>
    </div>
  );
};

export default PagesFirstSection;
