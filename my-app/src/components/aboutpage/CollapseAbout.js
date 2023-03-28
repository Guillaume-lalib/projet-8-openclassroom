import React from "react";
import Data from "../../datacollapse.json";
import Cardecollapse from "./Cardcollapse";

export const Collapse = () => {
  return (
    <div className="dropdown">
      {Data.map(({ content, title }, id) => (
        <Cardecollapse key={id} title={title} content={content} />
      ))}
    </div>
  );
};
export default Collapse;
