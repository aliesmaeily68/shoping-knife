import React from "react";
import "./NavBarMenu.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";

export default function NavBarMenu() {
  const DataContext = useContext(AllProductContext);

  const NavBarMenuHandler = () => {
    DataContext.setShowCategories(false);
  };
  return (
    <div className="NavBar-Menu" onClick={() => NavBarMenuHandler()}>
      <ul className="List-Grop-NavBar-Menu">
        <NavLink to={"/"} className={(link) => (link.isActive ? "active" : "")}>
          <li className="List-NavBar-Menu ">صفحه نخست</li>
        </NavLink>
        <NavLink to={"/product"}>
          {" "}
          <li className="List-NavBar-Menu">
            <span>فروشگاه</span>
          </li>
        </NavLink>

        <NavLink to={"/article"}>
          <li className="List-NavBar-Menu">مقالات </li>
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
