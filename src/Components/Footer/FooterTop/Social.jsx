import React from "react";
import "./Social.css";
import { TbBrandTelegram } from "react-icons/tb";
import { RiWhatsappLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

export default function Social() {
  return (
    <div className="Social">
      <div className="Social-Icon">
        {" "}
        <TbBrandTelegram />
      </div>
      <div className="Social-Icon">
        {" "}
        <RiWhatsappLine />
      </div>
      <div className="Social-Icon">
        <RiInstagramLine />
      </div>
    </div>
  );
}
