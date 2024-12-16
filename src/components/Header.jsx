import React from "react";
import HeaderSocials from "./HeaderSocials";
import "../stylesheets/header.css";
import Resume from "../assets/Panghulan-Resume.pdf";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  const handleResumeClick = () => {
    window.open(Resume, "_blank");
  };
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__content">
          <div className="header__text">
            <h1>Ysabella Panghulan</h1>
            <h2>Fullstack Developer</h2>
          </div>
          <h4 className="header__bottom">
            {" "}
            I love making web and mobile apps that make a difference. I'm
            passionate about using technology to empower communities and create
            positive change.{" "}
            <div className="resume-btn" onClick={handleResumeClick}>
              View Full Resume <MdArrowOutward />
            </div>
          </h4>
          <HeaderSocials />
        </div>
      </div>
    </section>
  );
};

export default Header;
