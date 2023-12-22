import React from "react";
import HeaderSocials from "./HeaderSocials";
import "../stylesheets/header.css";
import Picture from "../assets/skills.png";

const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__content">
          <div className="header__text">
            <h4 className="intro">Hello, I am</h4>
            <img src={Picture} alt="Ysabella Panghulan"></img>
            <h1>
              Ysabella Panghulan<span>.</span>
            </h1>
            <h2>I am a Software Engineer.</h2>
          </div>
          <h4 className="header__bottom">
            {" "}
            I am a <span>Full-Stack Developer</span>, developing both{" "}
            <span>web and mobile applications</span>. I am also interested in
            <span>data science and articifial intelligence </span>I am
            passionate about building technologies that are beneficial to the
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
