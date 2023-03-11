import React from "react";
import "../stylesheets/experience.css";
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

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <DiHtml5 className="experience__details-icon" /> HTML
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <DiCss3 className="experience__details-icon" /> CSS
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <DiJavascript className="experience__details-icon" />{" "}
                  JavaScript
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <SiBootstrap className="experience__details-icon" />
                  Bootstrap
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <SiTypescript className="experience__details-icon" />
                  Typescript
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <DiReact className="experience__details-icon" />
                  React
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <RiVuejsLine className="experience__details-icon" /> Vue
                </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <DiNodejsSmall className="experience__details-icon" /> Node JS
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <DiMongodb className="experience__details-icon" /> Mongo DB
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <DiPhp className="experience__details-icon" /> PHP
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <DiMysql className="experience__details-icon" /> MySQL
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <SiPostgresql className="experience__details-icon" /> Postgres
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <DiPython className="experience__details-icon" /> Python
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <SiDjango className="experience__details-icon" /> Django
                </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__mobile">
          <h3>Mobile Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <SiFlutter className="experience__details-icon" /> Flutter
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <DiSwift className="experience__details-icon" /> Swiftic
                </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__web3">
          <h3>Web3 Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <TbCurrencySolana className="experience__details-icon" />{" "}
                  Solana
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <SiSolidity className="experience__details-icon" /> Solidity
                </h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
