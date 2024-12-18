import React, { useState, useEffect } from "react";
import "../stylesheets/experience.css";
import { Position } from "../constants/experience.js";
import { MdArrowOutward } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
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

  let content = [];
  const companies = Object.keys(Position);

  companies.forEach((companyName) => {
    const companyData = Position[companyName];
    const company = companyData.company;
    const link = companyData.link;
    const positions = companyData.positions;
    const techContent = companyData.technologies.map((item, index) => (
      <span key={`${companyName}-${index}`} className="tech">
        {item}
      </span>
    ));
    content.push(
      <VerticalTimelineElement
        key={companyName}
        className="vertical-timeline-element--work"
        contentStyle={{ background: "transparent", color: "transparent" }}
        contentArrowStyle={{ background: "transparent", color: "transparent" }}
        date={companyName}
        iconStyle={{
          background: "var(--color-primary-variant)",
          color: "#fff",
        }}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="vertical-timeline-element-title"
        >
          <h4 className="company_name">
            {company} <MdArrowOutward />
          </h4>
        </a>
        <div className="positions-list">
          {positions.map((pos, j) => (
            <div key={`${companyName}-${j}`} className="position">
              <h4 className="position_title">{pos.position}</h4>
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
        <div className="experience_tech">{techContent}</div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="experience">
      <div className="container experience__container">
        <VerticalTimeline>{content}</VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
