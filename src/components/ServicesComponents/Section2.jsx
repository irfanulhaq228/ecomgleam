import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col gap-[50px] items-center mb-[40px]">
      {/* first row */}
      <div className="flex flex-col gap-[25px] w-full xl:w-[max-content] xl:flex-row justify-center items-center">
        <div className="min-w-[95%] xl:min-w-[280px] min-h-[100px] xl:min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] flex justify-center items-center uppercase text-[25px] xl:text-[35px] p-[16px] leading-10 text-center font-[700] text-[--main-heading-color">
          What Includes in Our Services
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[600] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Inventory Management
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Inventory Management
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 service-card-content">
              Customized warehousing solutions aimed at improving inventory
              management, streamlining operations, and fostering business
              growth.
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[600] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Storage Solutions
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Storage Solutions
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 service-card-content">
              Secure and organized storage options tailored to your product
              requirements.
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[600] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Order Fulfilment
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Order Fulfilment
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 service-card-content">
              Efficient processing of orders, including picking, packing, and
              shipping, to ensure timely delivery to your customers.
            </p>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="w-[95%] xl:w-[1200px] border-4 border-[--main-color] relative flex justify-evenly xl:justify-center xl:gap-[250px] h-0">
        <div className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full border-4 border-[--main-color] bg-white mt-[-20px] xl:mt-[-25px]"></div>
        <div className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full border-4 border-[--main-color] bg-white mt-[-20px] xl:mt-[-25px]"></div>
        <div className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full border-4 border-[--main-color] bg-white mt-[-20px] xl:mt-[-25px]"></div>
        <div className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full border-4 border-[--main-color] bg-white mt-[-20px] xl:mt-[-25px]"></div>
      </div>
      {/* second row */}
      <div className="flex flex-col gap-[25px] w-full xl:w-[max-content] xl:flex-row justify-center items-center">
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[600] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Amazon FBA Prep Services
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Amazon FBA Prep Services
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 service-card-content">
              Preparation of products according to Amazon's requirements,
              including labelling, packaging, and shipment to Amazon fulfilment
              centres.
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[600] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Returns Management
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Returns Management
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 service-card-content">
              Preparation of products according to Amazon's requirements,
              including labelling, packaging, and shipment to Amazon fulfilment
              centres.
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[600] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Shipping Solutions
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Shipping Solutions
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 service-card-content">
              Cost-effective and reliable shipping options to meet your delivery
              needs.
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[600] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Custom Reporting
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Custom Reporting
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 service-card-content">
              Detailed insights into inventory levels, order statuses, and
              logistics performance to help you make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
