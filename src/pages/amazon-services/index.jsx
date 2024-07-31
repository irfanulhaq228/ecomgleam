import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";

import coverImg from "../../assets/imgs/amazon-cover-img.png"

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/AmazonServices/Section2";
import Section3 from "../../components/AmazonServices/Section3";
import Section4 from "../../components/AmazonServices/Section4";
import LeaveUsMessageSection from "../../components/ReuseableComponents/LeaveUsMessageSection";


const AmazonServices = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Ecomgleam - Amazon Full Account Management Services</title>
        <meta
          name="description"
          content="EcomGleam offers efficient ecommerce solutions to optimize performance and drive growth. Collaborate with us to leverage expert strategies and cutting-edge technology tailored for your online success."
        />
        <meta
          name="keywords"
          content="ecommerce, ecommerce solutions, online business, ecommerce management, EcomGleam"
        />
      </Helmet>
      <div>
        <PagesFirstSection
          subheading={"Amazon Private Label and Brand Management Services"}
          heading={"Maximize Your Impact in E-commerce sphere with"}
          content={
            "Maximize your Amazon business with our expert Private Label and Brand Management Services, ensuring standout performance and customer loyalty in a competitive market."
          }
          img={coverImg}
        />
        <div className="flex justify-center mb-[20px]">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center uppercase text-[--main-heading-color] mb-[15px] px-[15px] md:w-[600px] lg:w-[400px]">
            What Includes in Our Services
          </p>
        </div>
        <Section2 />
        <Section3 />
        <Section4 />
        <LeaveUsMessageSection />
      </div>
    </>
  );
};

export default AmazonServices;
