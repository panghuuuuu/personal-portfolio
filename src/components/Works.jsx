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
    value.technologies.forEach((item) => {
      techContent.push(<span className="tech">{item} </span>);
    });

    if (i !== 0) {
      works.push(
        <div className="indiv__project">
          <img
            src={value.image}
            alt={key}
            onClick={() => {
              setSelectedProj(key);
              setIsOpen(true);
            }}
          />
          <h3> {key} </h3>
          <div className="tech_items">{techContent}</div>
          <div className="site_links">
            <a href={value.github_link}>
              <BsGithub />
            </a>
            <a href={value.live_site}>
              <HiOutlineExternalLink />
            </a>
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
              <a href={mainGithub}>
                <BsGithub />
              </a>
              <a href={mainLiveSite}>
                <HiOutlineExternalLink />
              </a>
            </div>
          </div>
          <div className="sub__projects">{works}</div>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {selectedProj && (
            <>
              <img src={Projects[selectedProj].image} alt={selectedProj} />
              <h2>{selectedProj}</h2>
              <h5>{Projects[selectedProj].description}</h5>
              <div className="site_links">
                <a href={Projects[selectedProj].github_link}>
                  <BsGithub />
                </a>
                <a href={Projects[selectedProj].live_site}>
                  <HiOutlineExternalLink />
                </a>
              </div>
            </>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Works;
