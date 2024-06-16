import React, { useState, useEffect } from "react";
import "../stylesheets/experience.css";
import { Position } from "../constants/experience.js";
import { MdArrowOutward } from "react-icons/md";

const Experience = () => {
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

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  let content = [];
  Object.entries(Position).forEach(([key, value], i) => {
    const company = value.company;
    const link = value.link;
    const positions = value.positions;

    content.push(
      <div key={`${key}-${i}`} className="experience">
        <div className="left_container">
          <p>
            {key.split("\n").map((line, i) => (
              <p key={i}>
                {line}
                {i !== key.split("\n").length - 1 && <br />}{" "}
              </p>
            ))}
          </p>
        </div>
        <div className="right_container">
          <a href={link} target="blank">
            <h3 className="company_name">
              {company} {""}
              <MdArrowOutward />
            </h3>
          </a>
          <div className="positions-list">
            {positions.map((pos, j) => (
              <div key={`${key}-${i}-${j}`} className="position">
                <h3 className="position_title">{pos.position}</h3>
                <ul>
                  {pos.description.map((desc, k) => (
                    <li className="position_desc" key={`${key}-${i}-${j}-${k}`}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id="experience">
      <div className="container experience__container">{content}</div>
    </section>
  );
};

export default Experience;
