import React from "react";
import Source from "../../source.json";
import GreyStar from "../../image/greystar.png";
import OrangeStar from "../../image/orangestar.png";

const Rating = () => {
  const url = window.location.href;
  const id = url.slice(36);
  const [house] = Source.filter((Source) => Source.id === id);

  const value = house.rating;
  const rating = [];

  function valueRateOrange() {
    for (let i = 0; i < value; i++) {
      rating.push(<img key={`10 + ${i}`} src={OrangeStar} alt="star orange" />);
    }
    for (let i = 0; i < 5 - value; i++) {
      rating.push(<img key={`0 + ${i}`} src={GreyStar} alt="star grey" />);
    }
  }

  valueRateOrange();

  return <div className="rating">{rating}</div>;
};

export default Rating;
