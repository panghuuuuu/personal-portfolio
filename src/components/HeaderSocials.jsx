import React from "react";

// icons
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillGitlab } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://gitlab.com" target="_blank">
        <AiFillGitlab />
      </a>
    </div>
  );
};

export default HeaderSocials;
