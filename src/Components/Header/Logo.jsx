import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

export default function (props) {
  return (
    <div className="Logo">
      <Link to={"/"}>
        <img src={`./Image/${props.logoName}.png `} alt="Logo" />
      </Link>
    </div>
  );
}
