import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/accopage/Banner";
import Description from "../components/accopage/Description";
import Infos from "../components/accopage/Infos";

const Accommodation = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Description />
      <Infos />
      <Footer />
    </div>
  );
};

export default Accommodation;
