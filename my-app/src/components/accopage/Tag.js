import React from "react";
import Source from "../../source.json";

const Tag = () => {
  const url = window.location.href;
  const id = url.slice(36);
  const [house] = Source.filter((Source) => Source.id === id);

  return (
    <div className="tag">
      {house.tags.map((tag, id) => {
        return (
          <span className="tagname" key={id}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tag;
