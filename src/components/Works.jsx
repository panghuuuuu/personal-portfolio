import React, { useState, useEffect } from "react";
import "../stylesheets/works.css";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { Projects } from "../constants/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, EffectCoverflow]);

const Works = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = Object.entries(Projects);
  const numberOfSlides = projects.length;

  const handleSlideChange = () => {
    if (swiper) {
      setActiveSlide(swiper.realIndex);
    }
  };

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", handleSlideChange);
    }
  }, [swiper]);

  const handlePaginationClick = (index) => {
    console.log("Index click:", index);
    if (swiper) {
      setActiveSlide(index);
    }
  };

  return (
    <section id="works">
      <style>
        {`
        .swiper-slide {
          height: 80vh;
        }
        .swiper-slide-active {
          width: 980px !important;
        }
        .swiper-slide-prev, .swiper-slide-next {
          width: 500px !important;
        }
        `}
      </style>
      <div className="projects">
        <Swiper
          navigation
          loop={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          slidesPerView={2}
          centeredSlides
          onTransitionEnd={handleSlideChange}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {Object.entries(Projects).map(([key, value], index) => {
            const techContent = value.technologies.map((item, index) => (
              <span key={`${key}-${index}`} className="tech">
                {item}{" "}
              </span>
            ));

            const isCurrentSlide = index === activeSlide;
            console.log("Index:", index);
            console.log("isCurrentSlide:", isCurrentSlide);

            return (
              <SwiperSlide key={key} className="indiv__project">
                <div
                  className="swiper-slide"
                  style={{
                    backgroundImage: `url(${value.image})`,
                  }}
                >
                  {isCurrentSlide && (
                    <div className="project-details">
                      <h4> {key} </h4>
                      <p>{value.description}</p>
                      <div className="tech_items">{techContent}</div>
                      <div className="site_links">
                        {value.github_link && (
                          <a
                            href={value.github_link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <BsGithub />
                          </a>
                        )}
                        {value.live_site && (
                          <a
                            href={value.live_site}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <HiOutlineExternalLink />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="pagination-container">
          {Array.from({ length: numberOfSlides }).map((_, index) => (
            <div
              key={index}
              className={`pagination-bullet ${
                index === activeSlide ? "active" : ""
              }`}
              onClick={() => handlePaginationClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
