import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/accopage/Banner";
import Description from "../components/accopage/Description";
import Infos from "../components/accopage/Infos";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import Source from "../source.json";

const Accommodation = () => {
  const url = window.location.href;
  const id = url.slice(36);
  const house = Source.filter((Source) => Source.id === id);

  if (house.length === 0) {
    return <Error />;
  } else {
    return (
      <div>
        <Navigation />
        <Banner />
        <Description />
        <Infos />
        <Footer />
      </div>
    );
  }
};

export default Accommodation;
