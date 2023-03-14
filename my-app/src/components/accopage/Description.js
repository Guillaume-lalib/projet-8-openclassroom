import React from "react";
import Source from "../../source.json";
import Rating from "./Rating";
import Tag from "./Tag";

const Description = () => {
  const url = window.location.href;
  const id = url.slice(36);
  const [house] = Source.filter((Source) => Source.id === id);
  return (
    <div className="description">
      <div className="title">
        <h2>{house.title}</h2>
        <p>{house.location}</p>
        <Tag />
      </div>
      <div className="host-rating">
        <div className="host">
          <p>{house.host.name}</p>
          <img src={house.host.picture} alt="" />
        </div>
        <Rating rating={house.rating} />
      </div>
    </div>
  );
};

export default Description;
