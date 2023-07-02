import React from "react";

// icons
import { BsGithub } from "react-icons/bs";
import { AiFillGitlab } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://gitlab.com/panghuuuuu" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
      <a href="https://gitlab.com/panghuuuuu" rel="noreferrer" target="_blank">
        {" "}
        <AiFillGitlab />
      </a>
      <a
        href="mailto:ysabellapanghulan@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
        <HiMail />
      </a>
    </div>
  );
};

export default HeaderSocials;
