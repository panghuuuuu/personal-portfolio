import React, { useState, useEffect } from "react";
import "../stylesheets/nav.css";
import Logo from "../assets/logo.png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <button onClick={scrollToTop}>
        <img src={Logo} alt="Logo" />
      </button>
      <div className="links">
        <a href="#experience">Experiences</a>
        <a href="#skills">Skills</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact Me</a>
      </div>
    </nav>
  );
};

export default Nav;
