import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
import { BiExit } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./MobileNavMenu.css";
import { AllMobileNavContext } from "../../Contexts/MobailNavDataContext";
import { UsersContext } from "../../Contexts/UsersContext";
import { exitAccount } from "../../utils";
import { AllProductContext } from "../../Contexts/ProductContext";

export default function MobileNavMenu() {
  const DataUserContext = useContext(UsersContext);
  const DataMobileNavContext = useContext(AllMobileNavContext);
  const DataProductContext = useContext(AllProductContext);
  const CloseMobileNav = () => {
    DataMobileNavContext.setShowMobileNav(false);
  };
  return (
    <>
      {" "}
      <ul className="ListGroup-MobileNav">
        <li>
          <NavLink to={"/"} onClick={() => CloseMobileNav()}>
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink to={"/product"} onClick={() => CloseMobileNav()}>
            فروشگاه
          </NavLink>
        </li>
        <li>
          <NavLink to={"/article"} onClick={() => CloseMobileNav()}>
            مقالات
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} onClick={() => CloseMobileNav()}>
            درباره ما
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} onClick={() => CloseMobileNav()}>
            تماس باما
          </NavLink>
        </li>
        <li>
          <NavLink to={"/favorites"} onClick={() => CloseMobileNav()}>
            <AiOutlineHeart />
            علاقه مندی{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/comparison"} onClick={() => CloseMobileNav()}>
            <TbArrowsShuffle />
            مقایسه
          </NavLink>
        </li>
        {!DataUserContext.isUserInData ? (
          <li>
            <NavLink to={"/my-account"} onClick={() => CloseMobileNav()}>
              <FaRegUser />
              ورود/ثبت نام
            </NavLink>
          </li>
        ) : (
          <NavLink
            to={"/"}
            onClick={() => {
              exitAccount(DataUserContext, DataProductContext);
            }}
          >
            <BiExit />
            خروج
          </NavLink>
        )}
      </ul>
    </>
  );
}
