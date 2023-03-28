import React from "react";
import Navigation from "../components/Navigation";
import Imagehome from "../components/Imagehome";
import Homecard from "../components/homepage/Homecard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Imagehome />
      <Homecard />
      <Footer />
    </div>
  );
};

export default Home;
