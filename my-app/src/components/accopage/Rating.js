import React from "react";
import Source from "../../source.json";
import GreyStar from "../../image/greystar.png";
import OrangeStar from "../../image/orangestar.png";

const Rating = () => {
  const url = window.location.href;
  const id = url.slice(36);
  const [house] = Source.filter((Source) => Source.id === id);
  console.log(house.rating);

  return <div className="rating"></div>;
};

export default Rating;
