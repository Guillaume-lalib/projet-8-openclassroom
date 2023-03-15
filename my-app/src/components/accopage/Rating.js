import React from "react";
import Source from "../../source.json";
import GreyStar from "../../image/greystar.png";
import OrangeStar from "../../image/orangestar.png";

const Rating = () => {
  const url = window.location.href;
  const id = url.slice(36);
  const [house] = Source.filter((Source) => Source.id === id);

  const value = house.rating;
  const ratingOrange = [];
  const rating = [];

  function valueRateOrange() {
    for (let i = 0; i < value; i++) {
      ratingOrange.push(OrangeStar);
    }
    for (let i = 0; i < 5 - value; i++) {
      rating.push(GreyStar);
    }
  }

  valueRateOrange();

  return (
    <div className="rating">
      {ratingOrange.map((id) => (
        <img key={id} src={ratingOrange[0]} alt="stars" />
      ))}
      {rating.map((id) => (
        <img key={id} src={rating[0]} alt="stars" />
      ))}
    </div>
  );
};

export default Rating;
