import React, { useState } from "react";
import Modal from "./Modals";
import "../stylesheets/works.css";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { Projects } from "../constants/projects";

const Works = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProj, setSelectedProj] = useState("");
  const works = [];
  let mainTitle = "";
  let main = {};
  let mainTech = [];
  let mainGithub = "";
  let mainLiveSite = "";
  Object.entries(Projects).forEach(([key, value], i) => {
    let techContent = [];
    value.technologies.forEach((item, index) => {
      techContent.push(
        <span key={`${key}-${index}`} className="tech">
          {item}{" "}
        </span>
      );
    });

    if (i !== 0) {
      works.push(
        <div key={key} className="indiv__project">
          <img
            src={value.image}
            alt={key}
            onClick={() => {
              setSelectedProj(key);
              setIsOpen(true);
            }}
          />
          <h4> {key} </h4>
          <div className="tech_items">{techContent}</div>
          <div className="site_links">
            {value.github_link && (
              <a href={value.github_link} rel="noreferrer" target="_blank">
                <BsGithub />
              </a>
            )}{" "}
            {value.live_site && (
              <a href={value.live_site} rel="noreferrer" target="_blank">
                <HiOutlineExternalLink />
              </a>
            )}{" "}
          </div>
        </div>
      );
    } else {
      mainTitle = key;
      main = Projects[mainTitle];
      mainTech = techContent;
      mainGithub = value.github_link;
      mainLiveSite = value.live_site;
    }
  });
  return (
    <section id="works">
      <div className="container works__container">
        <div className="projects">
          <div className="main__proj">
            <img
              src={main.image}
              alt="main"
              onClick={() => {
                setSelectedProj(mainTitle);
                setIsOpen(true);
              }}
            />
            <h2>{mainTitle}</h2>
            <div className="tech_items">{mainTech}</div>
            <div className="site_links">
              {mainGithub && (
                <a href={mainGithub} rel="noreferrer" target="_blank">
                  <BsGithub />
                </a>
              )}{" "}
              {mainLiveSite && (
                <a href={mainLiveSite} rel="noreferrer" target="_blank">
                  <HiOutlineExternalLink />
                </a>
              )}{" "}
            </div>
          </div>
          <div className="sub__projects">{works}</div>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {selectedProj && (
            <>
              <div className="modal_img">
                <img src={Projects[selectedProj].image} alt={selectedProj} />
              </div>
              <h2>{selectedProj}</h2>
              <h5>{Projects[selectedProj].description}</h5>
              <div className="site_links">
                {Projects[selectedProj].github_link && (
                  <a
                    href={Projects[selectedProj].github_link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                )}{" "}
                {Projects[selectedProj].live_site && (
                  <a
                    href={Projects[selectedProj].live_site}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <HiOutlineExternalLink />
                  </a>
                )}{" "}
              </div>
            </>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Works;
