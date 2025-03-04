import React from "react";
import "../stylesheets/skills.css";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";
import { SiTableau } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container skills__container">
        <div className="hero-container">
          <div className="section_header">
            <div class="section_tag">
              <span>Tools and Skills</span>
            </div>
            <div className="section_description">
              <h2>Full Stack Development Expertise</h2>
              <p>
                I possess a wide range of knowledge on various tech stacks and
                programming languages, particularly in{" "}
                <span>full stack development</span> for both web and mobile
                platforms.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="skills-content">
          <h4>
            <DiHtml5 className="skills__details-icon" />
            <br></br> HTML
          </h4>
          <h4>
            <DiCss3 className="skills__details-icon" />
            <br></br> CSS
          </h4>
          <h4>
            <DiJavascript className="skills__details-icon" />
            <br></br> JavaScript
          </h4>
          <h4>
            <SiTailwindcss className="skills__details-icon" />
            <br></br> Tailwind
          </h4>
          <h4>
            <SiTypescript className="skills__details-icon" />
            <br></br> Typescript
          </h4>
          <h4>
            <DiReact className="skills__details-icon" />
            <br></br> React
          </h4>
          <h4>
            <TbBrandNextjs className="skills__details-icon" />
            <br></br> Next.js
          </h4>
          <h4>
            <DiNodejsSmall className="skills__details-icon" />
            <br></br> Node JS
          </h4>
          <h4>
            <DiPhp className="skills__details-icon" />
            <br></br> PHP
          </h4>
          <h4>
            <FaLaravel className="skills__details-icon" />
            <br></br> Laravel
          </h4>
          <h4>
            <SiMysql className="skills__details-icon" />
            <br></br> MySQL
          </h4>
          <h4>
            <DiPostgresql className="skills__details-icon" />
            <br></br> PostgreSQL
          </h4>
          <h4>
            <DiMongodb className="skills__details-icon" />
            <br></br> Mongo DB
          </h4>
          <h4>
            <DiPython className="skills__details-icon" />
            <br></br> Python
          </h4>
          <h4>
            <SiDjango className="skills__details-icon" />
            <br></br> Django
          </h4>
          <h4>
            <SiFlutter className="skills__details-icon" />
            <br></br> Flutter
          </h4>
          {/* <h4>
            <TbCurrencySolana className="skills__details-icon" />
            <br></br> Solana
          </h4> */}
          <h4>
            <SiTableau className="skills__details-icon" />
            <br></br> Tableau
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;
