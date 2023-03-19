import React from "react";
import "../stylesheets/skills.css";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { SiBootstrap } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { RiVuejsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { DiSwift } from "react-icons/di";
import { TbCurrencySolana } from "react-icons/tb";
import { SiSolidity } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <DiHtml5 className="skills__details-icon" /> HTML
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <DiCss3 className="skills__details-icon" /> CSS
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <DiJavascript className="skills__details-icon" /> JavaScript
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <SiBootstrap className="skills__details-icon" />
                  Bootstrap
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <SiTypescript className="skills__details-icon" />
                  Typescript
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <DiReact className="skills__details-icon" />
                  React
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <RiVuejsLine className="skills__details-icon" /> Vue
                </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <DiNodejsSmall className="skills__details-icon" /> Node JS
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <DiMongodb className="skills__details-icon" /> Mongo DB
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <DiPhp className="skills__details-icon" /> PHP
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <DiMysql className="skills__details-icon" /> MySQL
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <SiPostgresql className="skills__details-icon" /> Postgres
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <DiPython className="skills__details-icon" /> Python
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <SiDjango className="skills__details-icon" /> Django
                </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__mobile">
          <h3>Mobile Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <SiFlutter className="skills__details-icon" /> Flutter
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <DiSwift className="skills__details-icon" /> Swiftic
                </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__web3">
          <h3>Web3 Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <TbCurrencySolana className="skills__details-icon" /> Solana
                </h4>
              </div>
            </article>
            <article className="skills__details">
              <div className="skills__text">
                <h4>
                  <SiSolidity className="skills__details-icon" /> Solidity
                </h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
