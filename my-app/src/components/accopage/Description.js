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
        {/* <Tag /> */}
        <div className="tag">
          <span className="tagname">{house.tags[0]}</span>
          <span className="tagname">{house.tags[1]}</span>
          <span className="tagname">{house.tags[2]}</span>
          <span className="tagname">{house.tags[3]}</span>
        </div>
      </div>
      <div className="host-rating">
        <div className="host">
          <p>{house.host.name}</p>
          <img src={house.host.picture} alt="" />
        </div>
        <Rating />
      </div>
    </div>
  );
};

export default Description;
