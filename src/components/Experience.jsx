import React from "react";
import "../stylesheets/experience.css";
import ExperienceTabs from "./ExperienceTabs";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <ExperienceTabs />
      </div>
    </section>
  );
};

export default Experience;
