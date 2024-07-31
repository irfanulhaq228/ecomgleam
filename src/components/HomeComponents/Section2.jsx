import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
// import img from "../../assets/imgs/home-sec-2-img.png";
import video from "../../assets/videos/home-page-service-video.mp4";

import svg1 from "../../assets/svgs/home-sec-2-svg-1.svg";
import svg2 from "../../assets/svgs/home-sec-2-svg-2.svg";
import svg3 from "../../assets/svgs/home-sec-2-svg-3.svg";
import svg4 from "../../assets/svgs/home-sec-2-svg-4.svg";

const Section2 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative bg-[var(--main-color)] flex flex-col items-center pt-[35px] rounded-[30px] sm:rounded-[60px] lg:max-h-[1400px] xl:max-h-[1100px] mt-[-12px]">
      <p className="uppercase flex flex-col items-center text-[25px] sm:text-[33px] lg:text-[37px] xl:text-[48px] font-[700] text-white px-3">
        <span className="hidden sm:block">Ecommerce Management</span>
        <span className="mt-[-8px] lg:mt-[-15px] hidden sm:block">
          Services
        </span>
        <span className="block sm:hidden text-center">
          Ecommerce Management Services
        </span>
      </p>
      <div className="mt-[30px] w-full flex flex-col sm:flex-row justify-center gap-[25px] flex-wrap px-3">
        <div className="flex flex-col sm:flex-row gap-[25px] justify-center items-center sm:items-start">
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white rounded-[12px] w-[95%] sm:w-[300px] flex flex-col items-center py-[25px] px-2 sm:px-[30px]">
            <img src={svg1} className="h-[130px]" />
            <p className="uppercase text-[20px] font-[800] text-center text-[#1E1E1E] mt-4 leading-[24px]">
              Amazon Full Account Management Services
            </p>
            <Link to={"/amazon-full-account-management-services"}>
              <button className="h-[40px] rounded-full px-[16px] text-white text-[14px] bg-[--main-color] mt-4">
                Explore Services
              </button>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white rounded-[12px] w-[95%] sm:w-[300px] flex flex-col items-center py-[25px] px-2 sm:px-[30px]">
            <img src={svg2} className="h-[130px]" />
            <p className="uppercase text-[20px] font-[800] text-center text-[#1E1E1E] mt-4 px-10 leading-[24px]">
              Online Arbitrage & Retail Services
            </p>
            <Link to={"/online-arbitrage-and-retail-services"}>
              <button className="h-[40px] rounded-full px-[16px] text-white text-[14px] bg-[--main-color] mt-4">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[25px] justify-center items-center sm:items-start">
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white rounded-[12px] w-[95%] sm:w-[300px] flex flex-col items-center py-[25px] px-[30px]">
            <img src={svg3} className="h-[130px]" />
            <p className="uppercase text-[20px] font-[900] text-center text-[#1E1E1E] mt-4 px-10 leading-[24px]">
              Amazon Wholesale FBA Services
            </p>
            <Link to={"/amazon-wholesale-fba-services"}>
              <button className="h-[40px] rounded-full px-[16px] text-white text-[14px] bg-[--main-color] mt-4 sm:mt-[40px]">
                Explore Services
              </button>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white rounded-[12px] w-[95%] sm:w-[300px] flex flex-col items-center py-[25px] px-[30px]">
            <img src={svg4} className="h-[130px]" />
            <p className="uppercase text-[20px] font-[900] text-center text-[#1E1E1E] mt-4 leading-[24px]">
              3PL and Warehousing Services
            </p>
            <Link to={"/3pl-and-warehousing-services"}>
              <button className="h-[40px] rounded-full px-[16px] text-white text-[14px] bg-[--main-color] mt-4 sm:mt-[40px]">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-[40px] sm:mt-[70px] max-h-[660px]">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="max-h-[660px] w-full object-cover xl:w-[1220px] 2xl:w-[1340px] rounded-[30px] sm:rounded-[40px]"
        />
        {/* <img src={img} className="max-h-[660px] w-full object-cover xl:w-[1340px] rounded-[40px]" /> */}
      </div>
    </div>
  );
};

export default Section2;
