import React from "react";
import Data from "../datacollapse.json";
import Cardecollapse from "./Cardcollapse";

export const Collapse = () => {
  return (
    <div className="dropdown">
      {Data.map((datacard, id) => (
        <Cardecollapse key={id} datacard={datacard} />
      ))}
    </div>
  );
};
export default Collapse;
