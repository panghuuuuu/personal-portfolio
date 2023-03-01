import React from "react";
import "../stylesheets/experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
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
                  <BsPatchCheckFill className="experience__details-icon" /> HTML
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" /> CSS
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  JavaScript
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  Bootstrap
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  Typescript
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  React
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" /> Vue
                </h4>
                <small className="text-light">Experienced</small>
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
                  <BsPatchCheckFill className="experience__details-icon" /> Node
                  JS
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  Mongo DB
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" /> PHP
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  MySQL
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  Python
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  Django
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  Laravel
                </h4>
                <small className="text-light">Experienced</small>
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
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  Flutter
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  Swiftic
                </h4>
                <small className="text-light">Experienced</small>
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
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  Solana
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__text">
                <h4>
                  <BsPatchCheckFill className="experience__details-icon" />{" "}
                  Solidity
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
