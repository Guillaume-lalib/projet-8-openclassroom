import React, { useState } from "react";
import Arrow from "../image/small-arrow.png";

const Cardcollapse = (props) => {
  const [style, setStyle] = useState();
  const [rotateStyle, setStyleRotate] = useState();
  const [active, setActive] = useState(false);
  const [rotate, setRotate] = useState(false);
  const openCollapse = () => {
    if (!active && !rotate) {
      setStyle({ height: "130px", opacity: 1, padding: "25px 15px" });
      setActive(true);
      setStyleRotate({ transform: "rotate(0deg)" });
      setRotate(true);
    } else {
      setStyle();
      setActive(false);
      setStyleRotate();
      setRotate(false);
    }
  };

  return (
    <div className="collapse">
      <div className="cardTitle">
        <p>{props.datacard.title}</p>
        <img
          style={rotateStyle}
          src={Arrow}
          alt="arrow collapse"
          onClick={() => openCollapse()}
        />
      </div>
      <div style={style} className="cardText">
        {props.datacard.content}
      </div>
    </div>
  );
};

export default Cardcollapse;
