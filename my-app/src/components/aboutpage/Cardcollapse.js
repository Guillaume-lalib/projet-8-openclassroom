import React, { useState } from "react";
import Arrow from "../../image/small-arrow.png";

const Cardcollapse = ({ title, content }, contentarray) => {
  const [style, setStyle] = useState();
  const [rotateStyle, setStyleRotate] = useState();
  const [active, setActive] = useState(false);
  const [rotate, setRotate] = useState(false);
  const openCollapse = () => {
    if (!active && !rotate) {
      setStyle({ height: "auto", opacity: 1, padding: "25px 15px" });
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
        <p>{title}</p>
        <img
          style={rotateStyle}
          src={Arrow}
          alt="arrow collapse"
          onClick={() => openCollapse()}
        />
      </div>
      <div style={style} className="cardText">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Cardcollapse;
