import React from "react";
import { Link } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { PiTiktokLogoThin } from "react-icons/pi";

import Ecomgleam from "../../assets/svgs/footer-logo.svg";
import PhoneCall from "../../assets/svgs/Phone-call.svg";
import mail from "../../assets/svgs/Mail.svg";
import locationIcon from "../../assets/svgs/location-icon.svg";

const Footer = () => {
  const handleWhatsAppClick = (phoneNumber) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = (email) => {
    const emailUrl = `mailto:${email}`;
    window.location.href = emailUrl;
  };
  return (
    <div className="bg-[--main-color] px-[15px] md:px-[40px] lg:px-[50px] xl:px-[60px] gap-[30px] sm:gap-[50px] lg:gap-[20px] xl:gap-[30px] pt-[40px] sm:pt-[60px] pb-[40px] flex xl:justify-center flex-wrap text-white rounded-t-[30px] sm:rounded-t-[60px]">
      <div className="min-w-full lg:min-w-[450px] xl:min-w-[200px]">
        <img src={Ecomgleam} />
        <div className="mt-[25px] flex items-center gap-3">
          <FaXTwitter className="text-[25px] cursor-pointer" />
          <FaInstagram className="text-[25px] cursor-pointer" />
          <SiYoutube className="text-[25px] cursor-pointer ms-[4px]" />
          <IoLogoLinkedin className="text-[25px] cursor-pointer ms-[3px]" />
          <PiTiktokLogoThin className="text-[25px] cursor-pointer" />
        </div>
      </div>
      <div className="min-w-full lg:min-w-[450px] xl:min-w-[200px] lg:mb-[50px] xl:mb-0 xl:ps-[25px]">
        <p className="uppercase mb-[10px] sm:mb-[15px] font-[500] text-[14px] sm:text-[16px]">
          QUICK LINKS
        </p>
        <Link to={"/"}>
          <p className="text-[12px] sm:text-[16px] mb-[10px]">Home</p>
        </Link>
        <Link to={"/about-us"}>
          <p className="text-[12px] sm:text-[16px] mb-[10px]">About Us</p>
        </Link>
        <Link to={"/contact-us"}>
          <p className="text-[12px] sm:text-[16px]">Contact Us</p>
        </Link>
      </div>
      <div className="min-w-full lg:min-w-[450px] xl:min-w-[400px]">
        <p className="uppercase mb-[10px] sm:mb-[15px] font-[500]">
          Our Services
        </p>
        <Link to={"/amazon-full-account-management-services"}>
          <p className="text-[12px] sm:text-[16px] mb-[10px]">
            Amazon Full Account Management Service
          </p>
        </Link>
        <Link to={"/online-arbitrage-and-retail-services"}>
          <p className="text-[12px] sm:text-[16px] mb-[10px]">
            Online Arbitrage And Retail Services
          </p>
        </Link>
        <Link to={"/amazon-wholesale-fba-services"}>
          <p className="text-[12px] sm:text-[16px] mb-[10px]">
            Amazon Wholesale FBA Services
          </p>
        </Link>
        <Link to={"/3pl-and-warehousing-services"}>
          <p className="text-[12px] sm:text-[16px] mb-[10px]">
            3PL and Warehouse Services
          </p>
        </Link>
      </div>
      <div className="min-w-full lg:min-w-[450px] xl:min-w-[200px]">
        <p
          className="flex items-center gap-2 text-[12px] sm:text-[16px] cursor-pointer"
          onClick={() => handleWhatsAppClick("+12153058197")}
        >
          <img
            src={PhoneCall}
            className="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px]"
          />
          <span>+1 (215) 305-8197</span>
        </p>
        <p className="flex gap-2 mt-[10px] text-[12px] sm:text-[16px]">
          <img
            src={mail}
            className="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] mt-[3px]"
          />
          <p className="flex flex-col">
            <span
              className="hover:underline cursor-pointer"
              onClick={() => handleEmailClick("info@ecomgleam.com")}
            >
              info@ecomgleam.com
            </span>
            <span
              className="mt-[-5px] hover:underline cursor-pointer"
              onClick={() => handleEmailClick("career@ecomgleam.com")}
            >
              career@ecomgleam.com
            </span>
          </p>
        </p>
        <p className="flex gap-1 mt-[7px] sm:mt-[10px] text-[12px] sm:text-[16px]">
          <img
            src={locationIcon}
            className="w-[19px] h-[19px] sm:w-[22px] sm:h-[22px]"
          />
          <p className="flex flex-col w-[260px] text-[15px]">
            <span>USA Office</span>
            <span>
              5900 BALCONES DR STE 14447 AUSTIN, TX 78731, United States
            </span>
          </p>
        </p>
        <p className="flex gap-1 mt-[7px] sm:mt-[10px] text-[12px] sm:text-[16px]">
          <img
            src={locationIcon}
            className="w-[19px] h-[19px] sm:w-[22px] sm:h-[22px]"
          />
          <p className="flex flex-col w-[260px] text-[15px]">
            <span>UAE Office</span>
            <span>
              Business Centre,Sharjah Publishing City Free Zone, Sharjah, United
              Arab Emirates
            </span>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
