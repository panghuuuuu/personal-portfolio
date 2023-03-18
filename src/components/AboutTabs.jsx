import React, { useState } from "react";
import "../stylesheets/abouttabs.css";
import { Position } from "../constants/about.js";

const AboutTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  let labels = [];
  let content = [];
  let companies = [];
  Position.forEach((data) => {
    companies.push(data.company);
  });
  let hello = new Set(companies);

  console.log(hello);

  Position.forEach((data) => {
    let index = data.index;
    let title = data.company;
    let position = data.title;
    let desc = data.description;
    labels.push(
      <button
        className={toggleState === index ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(index)}
      >
        {title}
      </button>
    );
    content.push(
      <div
        className={
          toggleState === index ? "content  active-content" : "content"
        }
      >
        <h2>{position}</h2>
        <p>{desc}</p>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="bloc-tabs">{labels}</div>

      <div className="content-tabs">{content}</div>
    </div>
  );
};

export default AboutTabs;
