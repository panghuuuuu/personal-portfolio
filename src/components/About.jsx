import React from "react";
import "../stylesheets/about.css";
import ME from "../assets/homepic.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { RiFoldersLine } from "react-icons/ri";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__cards">
          <article className="about__card">
            <FiAward className="about__icon" />
            <h5>Experience</h5>
            <small>3+years Working Experience</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>5+ Local</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
          <p class="about__bottom">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            volutpat lacus eu nisi fermentum sagittis. Vivamus vel bibendum
            urna. Ut maximus lorem sit amet justo consectetur, eu finibus nulla
            eleifend. Aliquam quis velit sed nisl ultricies rutrum eget id enim.
            Donec rhoncus elit quis nulla ultricies, vitae tincidunt lectus
            faucibus. Cras ornare quam quis consectetur ullamcorper. Nunc in
            nisi eget mi congue tincidunt. Sed et risus sit amet velit convallis
            fermentum.{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
