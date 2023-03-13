import React, { useState } from "react";
import Source from "../../source.json";
import Left from "../../image/left-arrow.png";
import Right from "../../image/right-arrow.png";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    setIndex(index + 1);
    if (index === house.pictures.length - 1) setIndex(0);
  };
  const previousSlide = () => {
    setIndex(index - 1);
    if (index === 0) setIndex(house.pictures.length - 1);
  };

  const url = window.location.href;
  const id = url.slice(36);
  const [house] = Source.filter((Source) => Source.id === id);

  return (
    <div className="bannerAcc">
      <div className="left-right">
        <img
          id="left"
          src={Left}
          alt="arrow left carrousel"
          onClick={previousSlide}
        />
        <img
          id="right"
          src={Right}
          alt="arrow right carrousel"
          onClick={nextSlide}
        />
      </div>
      <div className="bannerImg">
        <img src={house.pictures[index]} alt="appartement" />
      </div>
    </div>
  );
};

export default Banner;
