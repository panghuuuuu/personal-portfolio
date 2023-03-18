import React from "react";
import HeaderSocials from "./HeaderSocials";
import "../stylesheets/header.css";

const Header = () => {
  return (
    <div className="container header__container">
      <div className="header__text">
        <h5>Hello I'm</h5>
        <h1>Ysabella Panghulan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
      </div>
      <h4 className="header__bottom">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
        lacus eu nisi fermentum sagittis. Vivamus vel bibendum urna. Ut maximus
        lorem sit amet justo consectetur, eu finibus nulla eleifend. Aliquam
        quis velit sed nisl ultricies rutrum eget id enim. Donec rhoncus elit
        quis nulla ultricies, vitae tincidunt lectus faucibus. Cras ornare quam
        quis consectetur ullamcorper. Nunc in nisi eget mi congue tincidunt. Sed
        et risus sit amet velit convallis fermentum.{" "}
      </h4>
      <HeaderSocials />
      <div className="header__buttons">
        <a href="#about" className="btn btn-primary">
          About Me
        </a>
        <a href="" className="btn btn-secondary">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
