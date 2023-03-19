import React, { useState } from "react";
import "../stylesheets/experiencetabs.css";
import { Position } from "../constants/experience.js";

const ExperienceTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  let labels = [];
  let content = [];
  Object.entries(Position).forEach(([key, value], i) => {
    labels.push(
      <button
        className={toggleState === i ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(i)}
      >
        {key}
      </button>
    );
    value.forEach((data) => {
      let position = data.position;
      let year = data.year;
      let desc = data.description;

      content.push(
        <div
          className={toggleState === i ? "content  active-content" : "content"}
        >
          <h2>{position}</h2>
          <h3>{year}</h3>
          <p>{desc}</p>
        </div>
      );
    });
  });

  return (
    <div className="container experiencetabs__container">
      <div className="bloc-tabs">{labels}</div>
      <div className="content-tabs">{content}</div>
    </div>
  );
};

export default ExperienceTabs;
