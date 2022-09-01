import React, { useContext } from "react";
import "./IconHeader.css";
import { FaRegUser } from "react-icons/fa";
import { TbArrowsShuffle } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AllProductContext } from "../../Contexts/ProductContext";
import { UsersContext } from "../../Contexts/UsersContext";

export default function IconHeader(props) {
  const DataContext = useContext(AllProductContext);
  const DataUsersContext = useContext(UsersContext);

  return (
    <div className="Icons-Header">
      <div className="Icon-Header">
        <FaRegUser
          className="Main-Icon-Headar"
          onClick={() => {
            DataContext.setShowCartBag(false);
            DataUsersContext.setShowLoginSidebar(true);
          }}
        />
      </div>
      <div className="Icon-Header">
        <span>0</span>
        <Link to={"/shuffle"}>
          {" "}
          <TbArrowsShuffle className="Main-Icon-Headar" />
        </Link>
      </div>
      <div className="Icon-Header">
        <span>0</span>
        <Link to={"/favorites"}>
          <AiOutlineHeart className="Main-Icon-Headar" />
        </Link>
      </div>
      <div className="Icon-Header">
        <span>{DataContext.cartConter}</span>
        {props.IconName ? (
          <BsCart2
            className="Main-Icon-Headar"
            onClick={() => {
              DataUsersContext.setShowLoginSidebar(false);
              DataContext.setShowCartBag(true);
            }}
          />
        ) : (
          <BsBag
            className="Main-Icon-Headar"
            onClick={() => {
              DataUsersContext.setShowLoginSidebar(false);
              DataContext.setShowCartBag(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
