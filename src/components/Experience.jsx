import React from "react";
import "../stylesheets/experience.css";
import ExperienceTabs from "./ExperienceTabs";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience__container">
        <ExperienceTabs />
      </div>
      <a href="#skills">Scroll For More</a>
      <div className="scroll-downs">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
