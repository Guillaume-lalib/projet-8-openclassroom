import React from "react";
import Datacard from "../source.json";
import Card from "./Cardview";

export const Homecard = () => {
  return (
    <div className="AllCard">
      {Datacard.map((cards, id) => (
        <Card key={id} card={cards} />
      ))}
    </div>
  );
};

export default Homecard;
