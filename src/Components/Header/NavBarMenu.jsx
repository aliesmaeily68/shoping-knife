import React from "react";
import "./NavBarMenu.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function NavBarMenu() {
  return (
    <div className="NavBar-Menu">
      <ul className="List-Grop-NavBar-Menu">
        <NavLink to={"/"} className={(link) => (link.isActive ? "active" : "")}>
          <li className="List-NavBar-Menu ">صفحه نخست</li>
        </NavLink>
        <NavLink to={"/product"}>
          {" "}
          <li className="List-NavBar-Menu">
            <span>فروشگاه</span>
            <MdOutlineKeyboardArrowDown />
          </li>
        </NavLink>

        <NavLink to={"/article"}>
          <li className="List-NavBar-Menu">مقالات  </li>
        </NavLink>
        <NavLink to={"/conditions"}>
          <li className="List-NavBar-Menu"> قوانین و مقررات </li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="List-NavBar-Menu">تماس با ما</li>
        </NavLink>
        <NavLink to={"/about"}>
          {" "}
          <li className="List-NavBar-Menu">درباره ما</li>
        </NavLink>
      </ul>
    </div>
  );
}
