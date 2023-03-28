import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Collapse from "../components/aboutpage/CollapseAbout";
import Imagehome from "../components/Imagehome";

const About = () => {
  return (
    <div>
      <Navigation />
      <Imagehome />
      <Collapse />
      <Footer />
    </div>
  );
};

export default About;
