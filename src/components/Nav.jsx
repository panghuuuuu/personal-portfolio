import React, { useState, useEffect } from "react";
import "../stylesheets/nav.css";
import Logo from "../assets/logo.png";

const Nav = () => {
  const [currentSection, setCurrentSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentSection("#home");
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = [
        "#header",
        "#experience",
        "#skills",
        "#works",
        "#contact",
      ];
      sections.forEach((sectionId) => {
        const sectionElement = document.querySelector(sectionId);
        const sectionBound = sectionElement.getBoundingClientRect();

        if (
          sectionBound.top <= 210 &&
          sectionBound.bottom >= 210 &&
          currentSection !== sectionId
        ) {
          setCurrentSection(sectionId);
        }
      });
    };

    handleActiveSection();
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("scroll", handleActiveSection);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleActiveSection);
    };
  }, [currentSection]);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="main_logo">
        <button onClick={scrollToTop}>
          <img
            src={Logo}
            alt="Logo"
            className={currentSection === "#header" ? "active-sec" : ""}
          />
        </button>
      </div>
      <div className="links">
        <a
          href="#experience"
          className={currentSection === "#experience" ? "active-sec" : ""}
        >
          Experiences
        </a>
        <a
          href="#skills"
          className={currentSection === "#skills" ? "active-sec" : ""}
        >
          Skills
        </a>
        <a
          href="#works"
          className={currentSection === "#works" ? "active-sec" : ""}
        >
          Works
        </a>
        <a
          href="#contact"
          className={currentSection === "#contact" ? "active-sec" : ""}
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Nav;
