import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";
import { UsersContext } from "../../Contexts/UsersContext";

export default function (props) {
  const DataContext = useContext(AllProductContext);
  const DataUserContexte = useContext(UsersContext);
  const LogoHandler = () => {
    DataContext.setShowCartBag(false);
    DataUserContexte.setShowLoginSidebar(false);
  }
  return (
    <div className="Logo" onClick={()=>LogoHandler()}>
      <Link to={"/"}>
        <img src={`./Image/${props.logoName}.png `} alt="Logo" />
      </Link>
    </div>
  );
}
