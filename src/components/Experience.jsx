import React, { useState, useEffect } from "react";
import "../stylesheets/experience.css";
import { Position } from "../constants/experience.js";
import { MdArrowOutward } from "react-icons/md";
const Experience = () => {
  const [showMore, setShowMore] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const maxCompaniesToShow = 3;

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
  const companies = Object.keys(Position);

  const slicedCompanies = companies.slice(
    0,
    showMore ? companies.length : maxCompaniesToShow
  );

  slicedCompanies.forEach((companyName, i) => {
    const companyData = Position[companyName];
    const company = companyData.company;
    const link = companyData.link;
    const positions = companyData.positions;

    content.push(
      <div key={companyName} className="experience">
        <div className="left_container">
          <p>
            {companyName.split("\n").map((line, i) => (
              <p key={i}>
                {line}
                {i !== companyName.split("\n").length - 1 && <br />}{" "}
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
              <div key={`${companyName}-${j}`} className="position">
                <h3 className="position_title">{pos.position}</h3>
                <ul>
                  {pos.description.map((desc, k) => (
                    <li
                      className="position_desc"
                      key={`${companyName}-${j}-${k}`}
                    >
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
      <div className="container experience__container">
        {content}
        {companies.length > maxCompaniesToShow && (
          <div className="show-more-btn" onClick={handleShowMore}>
            {showMore
              ? "Show Less"
              : `Show More (${companies.length - maxCompaniesToShow})`}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
