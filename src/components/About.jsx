import React from "react";
import "../stylesheets/about.css";
import ME from "../assets/homepic.png";
import AboutTabs from "./AboutTabs";

const About = () => {
  return (
    <section id="about">
      <div className="about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div> */}
        <AboutTabs />
      </div>
    </section>
  );
};

export default About;
