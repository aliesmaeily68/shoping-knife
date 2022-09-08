import React from "react";
import "./NavBar.css";
import NavBarCategory from "./NavBarCategory";
import NavBarMenu from "./NavBarMenu";
// import { Container, Col, Row } from "react-bootstrap";
import { useContext } from 'react'
import { AllProductContext } from '../../Contexts/ProductContext'
import { UsersContext } from '../../Contexts/UsersContext'

export default function NavBar() {
  const DataContext =useContext(AllProductContext)
  const DataUserContexte =useContext(UsersContext)

  const MainNavBarHandler =()=>{
    DataContext.setShowCartBag(false);
    DataUserContexte.setShowLoginSidebar(false);
  }
  return (
    <div className="Main-NavBar" onClick={()=>MainNavBarHandler()}>
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
