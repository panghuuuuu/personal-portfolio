import React from "react";
import "../stylesheets/works.css";
import { MdArrowOutward } from "react-icons/md";
import { Projects } from "../constants/projects";
import "react-horizontal-scrolling-menu/dist/styles.css";
const Works = () => {
  const projects = Object.entries(Projects);

  return (
    <section id="works">
      <div className="section_header">
        <div class="section_tag">
          <span>Web Development</span>
        </div>
        <div className="section_description">
          <h2>Innovative Web App Solutions</h2>
          <p>
            I love creating innovative web applications that bring your ideas to
            life with seamless, interactive experiences.
          </p>
        </div>
      </div>
      <div className="projects">
        {projects.map(([key, value], index) => {
          const techContent = value.technologies.map((item, index) => (
            <span key={`${key}-${index}`} className="tech">
              {item}
            </span>
          ));

          return (
            <div key={index} className="project_details">
              <img src={value.image} className="project_img" alt={key} />
              <h3 className="project_title">
                {value.github_link && (
                  <a href={value.github_link} rel="noreferrer" target="_blank">
                    {key} <MdArrowOutward />
                  </a>
                )}
                {!value.github_link && value.live_site && (
                  <a href={value.live_site} rel="noreferrer" target="_blank">
                    {key} <MdArrowOutward />
                  </a>
                )}
                {value.github_link && value.live_site && (
                  <a href={value.github_link} rel="noreferrer" target="_blank">
                    {key} <MdArrowOutward />
                  </a>
                )}
              </h3>
              <p className="project_desc">{value.description}</p>
              <div className="tech_items">{techContent}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
