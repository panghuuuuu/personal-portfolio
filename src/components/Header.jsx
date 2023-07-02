import React from "react";
import HeaderSocials from "./HeaderSocials";
import "../stylesheets/header.css";

const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__content">
          <div className="header__text">
            <h4 className="intro">Hello, I am</h4>
            <h1>
              Ysabella Panghulan<span>.</span>
            </h1>
            <h2>I am a Software Engineer.</h2>
          </div>
          <h4 className="header__bottom">
            {" "}
            I am a <span>Full-Stack Developer</span> with extensive experience
            in developing both <span>web and mobile applications</span>. I have
            expertise in a range of front-end and back-end technologies. My
            knowledge in <span>data science and articifial intelligence </span>
            allows me to integrate machine learning algorithms and analytics
            tools into my applications to provide valuable insights for users. I
            am passionate about building technologies that are beneficial to the
            community.{" "}
          </h4>
          <HeaderSocials />
          <div className="header__buttons">
            <a href="#experience" className="btn btn-primary">
              Experiences
            </a>
            <a href="#home" className="btn btn-secondary">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
