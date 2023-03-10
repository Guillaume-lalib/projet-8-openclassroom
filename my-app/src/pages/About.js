import React from "react";
import Navigation from "../components/Navigation";
import Imageabout from "../components/aboutpage/Imageabout";
import Footer from "../components/Footer";
import Collapse from "../components/aboutpage/Collapse";

const About = () => {
  return (
    <div>
      <Navigation />
      <Imageabout />
      <Collapse />
      <Footer />
    </div>
  );
};

export default About;
