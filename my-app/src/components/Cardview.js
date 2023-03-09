import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  console.log(props.card);
  const idlink = props.card.id;
  return (
    <NavLink className="card" to={`/accommodation/${idlink}`}>
      <div
        className="imagecard"
        style={{
          backgroundImage: `url(${props.card.cover})`,
          background:
            "linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)",
        }}
      >
        <p>{props.card.title}</p>
      </div>
    </NavLink>
  );
};

export default Card;
