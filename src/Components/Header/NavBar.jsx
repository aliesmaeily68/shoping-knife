import React from "react";
import "./NavBar.css";
import NavBarCategory from "./NavBarCategory";
import NavBarMenu from "./NavBarMenu";
// import { Container, Col, Row } from "react-bootstrap";

export default function NavBar() {
  return (
    <div className="Main-NavBar">
      <div className="Container-NavBar">
        <div className="Wrapper-NavBar">
          <div className="Category-NavBar">
            {" "}
            <NavBarCategory />
          </div>
          <div className="Menus-NavBar">
            <NavBarMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
