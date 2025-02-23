import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Services from "./pages/services";

import WholesaleService from "./pages/wholesale-services";
import AmazonServices from "./pages/amazon-services";
import RetailService from "./pages/retail-services";
import ContactUs from "./pages/contact-us";

import "animate.css/animate.min.css";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/amazon-full-account-management-services" element={<AmazonServices />} />
      <Route path="/online-arbitrage-and-retail-services" element={<WholesaleService />} />
      <Route path="/amazon-wholesale-fba-services" element={<RetailService />} />
      <Route path="/3pl-and-warehousing-services" element={<Services />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
