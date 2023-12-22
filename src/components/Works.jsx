import React, { useState } from "react";
import Modal from "./Modals";
import "../stylesheets/works.css";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { Projects } from "../constants/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Works = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProj, setSelectedProj] = useState("");
  const works = [];
  Object.entries(Projects).forEach(([key, value], i) => {
    let techContent = [];
    value.technologies.forEach((item, index) => {
      techContent.push(
        <span key={`${key}-${index}`} className="tech">
          {item}{" "}
        </span>
      );
    });

    works.push(
      <SwiperSlide key={key} className="indiv__project">
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
      </SwiperSlide>
    );
  });
  return (
    <section id="works">
      <div className="container works__container">
        <div className="projects">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView={2}
            centeredSlides
          >
            {works}
          </Swiper>
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
