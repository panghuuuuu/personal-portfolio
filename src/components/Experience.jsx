import React from "react";
import "../stylesheets/experience.css";
import ExperienceTabs from "./ExperienceTabs";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <ExperienceTabs />
        <div className="scroll">
          <a href="#skills">Scroll For More</a>
        </div>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
