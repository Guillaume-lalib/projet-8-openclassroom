import React from "react";
import Arrow from "../image/small-arrow.png";

const Cardcollapse = (props) => {
  return (
    <div className="collapse">
      <div className="cardTitle">
        <p>{props.datacard.title}</p>
        <img src={Arrow} alt="arrow collapse" />
      </div>
      <div className="cardText">{props.datacard.content}</div>
    </div>
  );
};

export default Cardcollapse;
