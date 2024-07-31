import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";

import img from "../../assets/imgs/about-us-main.png";

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/AboutUsComponent/Section2";
import Section3 from "../../components/AboutUsComponent/Section3";
import LeftRightCards from "../../components/ReuseableComponents/LeftRightCards";
import Section6 from "../../components/AboutUsComponent/Section6";
import TopBrandSection from "../../components/ReuseableComponents/TopBrandsSection";
import LeaveUsMessageSection from "../../components/ReuseableComponents/LeaveUsMessageSection";

import { AboutUsData2 } from "../../assets/data";
import Section4 from "../../components/AboutUsComponent/Section4";
import Section5 from "../../components/AboutUsComponent/Section5";

const AboutUs = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Ecomgleam - About Us</title>
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
          heading={"WE ARE"}
          content={
            "We are Ecom Gleam. Here, we will illuminate the path for your e-commerce successes on Amazon. We are committed to empowering Amazon sellers by providing them with customized solutions and unwavering assistance."
          }
          img={img}
        />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <LeftRightCards
          heading={"Client Education and Empowerment"}
          data={AboutUsData2}
        />
        <Section6 />
        <TopBrandSection />
        <LeaveUsMessageSection />
      </div>
    </>
  );
};

export default AboutUs;
