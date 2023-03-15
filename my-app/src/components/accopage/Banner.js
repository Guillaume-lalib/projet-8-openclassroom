import React, { useState } from "react";
import Source from "../../source.json";
import Left from "../../image/left-arrow.png";
import Right from "../../image/right-arrow.png";

const Banner = () => {
  const url = window.location.href;
  const id = url.slice(36);
  const [house] = Source.filter((Source) => Source.id === id);

  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    setIndex(index + 1);
    if (index === house.pictures.length - 1) setIndex(0);
  };
  const previousSlide = () => {
    setIndex(index - 1);
    if (index === 0) setIndex(house.pictures.length - 1);
  };
  const style = () => {
    if (house.pictures.length === 1) {
      const arrowL = document.getElementById("left");
      const arrowR = document.getElementById("right");
      const count = document.getElementById("count");
      arrowL.classList.add("delete");
      arrowR.classList.add("delete");
      count.classList.add("delete");
    }
  };
  return (
    <div className="bannerAcc">
      <div className="left-right">
        <img
          id="left"
          src={Left}
          alt="arrow left carrousel"
          onClick={previousSlide}
          onLoad={style}
        />
        <img
          id="right"
          src={Right}
          alt="arrow right carrousel"
          onClick={nextSlide}
          onLoad={style}
        />
      </div>
      <div className="bannerImg">
        <img src={house.pictures[index]} alt="appartement" />
      </div>
      <div id="count" className="numbers" onLoad={style}>
        <p>
          {index + 1}/{house.pictures.length}
        </p>
      </div>
    </div>
  );
};

export default Banner;
