import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

import img from "../../assets/imgs/amazon-wholesale-cover-img.png"

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/RetailServicesComponents/Section2";
import Section3 from "../../components/RetailServicesComponents/Section3";
import LeaveUsMessageSection from "../../components/ReuseableComponents/LeaveUsMessageSection";
import Section4 from "../../components/RetailServicesComponents/Section4";

const RetailService = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Ecomgleam - Amazon Wholesale Fba Services</title>
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
          subheading={"Wholesale Services"}
          heading={"Navigate Towards E-commerce Excellence with"}
          content={
            "Maximize Your  Wholesale Potential & Propel Your E-commerce Business with Expert wholesale Services from Ecom Gleam!"
          }
          img={img}
        />
        <Section2 />
        <Section3 />
        <Section4 />
        <LeaveUsMessageSection />
      </div>
    </>
  );
};

export default RetailService;
