import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";
import { TbBrandTelegram } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Social() {
  return (
    <div className="Social">
      <Link to="/@Ali68Zanjan" >
        {" "}
        <div className="Social-Icon">
          {" "}
          <TbBrandTelegram />
        </div>
      </Link>

      <a href="https://github.com/aliesmaeily68" target="_blank">
        {" "}
        <div className="Social-Icon">
          {" "}
          <AiFillGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/ali-esmaily-4691a3246/"
        target="_blank"
      >
        {" "}
        <div className="Social-Icon">
          <AiFillLinkedin />
        </div>
      </a>
    </div>
  );
}
