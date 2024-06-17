import React, { useState, useEffect } from "react";
import "../stylesheets/nav.css";
import Logo from "../assets/logo.png";

const sectionNames = {
  "#header": "",
  "#experience": "Experience",
  "#skills": "Skills",
  "#works": "Works",
  "#contact": "Contact Me",
};

const Nav = () => {
  const [currentSection, setCurrentSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
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

    checkScreenSize(); // Check screen size on initial render
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveSection);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleActiveSection);
      document.removeEventListener("resize", checkScreenSize);
    };
  }, [currentSection]);

  return (
    <nav className={scrolled || currentSection !== "#header" ? "scrolled" : ""}>
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
        {isSmallScreen ? (
          <a href={currentSection}>{sectionNames[currentSection]}</a>
        ) : (
          <>
            <a
              href="#experience"
              className={currentSection === "#experience" ? "active-sec" : ""}
            >
              {sectionNames["#experience"]}
            </a>
            <a
              href="#skills"
              className={currentSection === "#skills" ? "active-sec" : ""}
            >
              {sectionNames["#skills"]}
            </a>
            <a
              href="#works"
              className={currentSection === "#works" ? "active-sec" : ""}
            >
              {sectionNames["#works"]}
            </a>
            <a
              href="#contact"
              className={currentSection === "#contact" ? "active-sec" : ""}
            >
              {sectionNames["#contact"]}
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
