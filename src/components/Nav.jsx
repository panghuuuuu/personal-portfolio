import React, { useState, useEffect } from "react";
import "../stylesheets/nav.css";
import Logo from "../assets/logo.png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled((prevScroll) => !prevScroll);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const isAtAboutSection =
        window.scrollY >= aboutSection.offsetTop &&
        window.scrollY < aboutSection.offsetTop + aboutSection.offsetHeight;
      setShowNav(!isAtAboutSection);
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showNav && (
        <nav className={scrolled ? "scrolled" : ""}>
          <img src={Logo} alt="Logo" />
          <div className="links">
            <a href="#">Home</a>
            <a href="#about">About Me</a>
            <a href="#experience">Experiences</a>
            <a href="#contact">Contact Me </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
