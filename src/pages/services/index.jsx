import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import video from "../../assets/videos/3PL-main.mp4";

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/ServicesComponents/Section2";
import Section3 from "../../components/ServicesComponents/Section3";
import Section4 from "../../components/ServicesComponents/Section4";
import Section5 from "../../components/ServicesComponents/Section5";
import Section6 from "../../components/ServicesComponents/Section6";
import LeaveUsMessageSection from "../../components/ReuseableComponents/LeaveUsMessageSection";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Ecomgleam - 3pl And Warehousing Services</title>
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
          subheading={"3PL & Warehousing Services"}
          heading={"Rectify Your Supply Chain Efficiency with"}
          content={
            "Customized warehousing solutions aimed at improving inventory management, streamlining operations, and fostering business growth."
          }
          video={video}
        />
        <Section2 />
        <Section3 />
        <Section4 />
        <LeaveUsMessageSection />
      </div>
    </>
  );
};

export default Services;
