import React from "react";
import Cardecollapse from "../aboutpage/Cardcollapse";
import Source from "../../source.json";

const CollapseHouse = () => {
  const url = window.location.href;
  const id = url.slice(36);
  const [house] = Source.filter((Source) => Source.id === id);

  return (
    <div className="dropdownhouse">
      <Cardecollapse
        key={2}
        title={"Description"}
        content={house.description}
      />
      <Cardecollapse key={1} title={"Équipements"} content={house.equipments} />
    </div>
  );
};

export default CollapseHouse;
