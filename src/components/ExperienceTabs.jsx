import React, { useState, useEffect } from "react";
import "../stylesheets/experiencetabs.css";
import { Position } from "../constants/experience.js";

const ExperienceTabs = () => {
  const [toggleState, setToggleState] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  let labels = [];
  let content = [];
  Object.entries(Position).forEach(([key, value], i) => {
    const isActive = toggleState === i;
    const isHidden = isSmallScreen && !showMore && !isActive;
    const isHiddenClass = isHidden ? "hidetab" : "";

    labels.push(
      <button
        key={key}
        className={`tabs ${isActive ? "active-tabs" : ""} ${isHiddenClass}`}
        onClick={() => toggleTab(i)}
      >
        {key}
      </button>
    );

    if (isActive || (isSmallScreen && showMore)) {
      value.forEach((data) => {
        let position = data.position;
        let year = data.year;
        let arrDesc = data.description;
        content.push(
          <div
            key={`${key}-${position}`}
            className={isActive ? "content active-content" : "content"}
          >
            <h2>{position}</h2>
            <h4>{year}</h4>
            <div className="desc-list">
              <ul>
                {arrDesc.map((desc, i) => (
                  <li key={i}>
                    <h4>{desc}</h4>
                  </li>
                ))}
              </ul>
            </div>
            <br />
          </div>
        );
      });
    }
  });

  return (
    <div className="container experiencetabs__container">
      <div className="bloc-tabs">
        {isSmallScreen && !showMore ? null : labels}
      </div>
      <div className="showmore">
        <h2 className="showmore-heading" onClick={handleShowMore}>
          {showMore ? "Hide" : "Show More"}
        </h2>
      </div>
      <div className="content-tabs">{content}</div>
    </div>
  );
};

export default ExperienceTabs;
