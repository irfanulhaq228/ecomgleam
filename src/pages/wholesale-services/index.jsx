import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import coverImg from "../../assets/imgs/online-arbitrage-img.png";

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/WholesaleServices/Section2";
import Section3 from "../../components/WholesaleServices/Section3";

import LeaveUsMessageSection from "../../components/ReuseableComponents/LeaveUsMessageSection";

const WholesaleService = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Ecomgleam - Online Arbitrage And Retail Services</title>
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
          subheading={"Online Arbitrage & Retail Services"}
          heading={"Empower Your eCommerce Growth with"}
          content={
            "Discover boundless opportunities with EcomGleam's Online Arbitrage Services! Whether you're a seasoned seller or new to ecommerce, our expert team simplifies and maximizes your profits in this profitable venture"
          }
          img={coverImg}
        />
        <Section2 />
        <Section3 />
        <LeaveUsMessageSection />
      </div>
    </>
  );
};

export default WholesaleService;
