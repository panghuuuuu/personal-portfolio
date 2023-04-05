import React, { useState } from "react";
import Modal from "./Modals";
import "../stylesheets/works.css";
import { Projects } from "../constants/projects";

const Works = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProj, setSelectedProj] = useState("");
  const works = [];
  let mainTitle = "";
  let main = {};
  let mainTech = [];
  Object.entries(Projects).forEach(([key, value], i) => {
    let techContent = [];
    value.technologies.forEach((item) => {
      techContent.push(<span>{item} </span>);
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
          <h2> {key} </h2>
          <div className="tech_items">{techContent}</div>
        </div>
      );
    } else {
      mainTitle = key;
      main = Projects[mainTitle];
      mainTech = techContent;
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
            <h1>{mainTitle}</h1>
            <div className="tech_items">{mainTech}</div>
          </div>
          <div className="sub__projects">{works}</div>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {selectedProj && (
            <>
              <h1>{selectedProj}</h1>
              <img src={Projects[selectedProj].image} alt={selectedProj} />
              <p>{Projects[selectedProj].description}</p>
            </>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Works;
