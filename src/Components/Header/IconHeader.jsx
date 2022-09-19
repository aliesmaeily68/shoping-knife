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
import AccountDropDown from "../AccountDropDown/AccountDropDown";

export default function IconHeader(props) {
  const DataContext = useContext(AllProductContext);
  const DataUsersContext = useContext(UsersContext);

  return (
    <div className="Icons-Header">
      {DataUsersContext.isUserInData  ? (
        <div
          className="Icon-Header"
          onMouseOver={() => DataUsersContext.setShowAccountDropDown(true)}
          onMouseLeave={() => DataUsersContext.setShowAccountDropDown(false)}
        >
          <Link
            to={"/my-account"}
            onClick={() => DataUsersContext.setShowAccountRoute(false)}
          >
            <FaRegUser className="Main-Icon-Headar" />
          </Link>

          <div className="Tooltip-Icon-Header">حساب کاربری من</div>
          <div className="AccountName-Icon-Header">
            <p>سلام</p>
            <p>{DataUsersContext.loginFormUserNameOrEmailValue}</p>
            <p>به سایت ما خوش آمدید</p>
          </div>

          {DataUsersContext.showAccountDropDown && <AccountDropDown />}
        </div>
      ) : (
        <div className="Icon-Header">
          <FaRegUser
            className="Main-Icon-Headar"
            onClick={() => {
              DataContext.setShowCartBag(false);
              DataUsersContext.setShowLoginSidebar(true);
            }}
          />
          <div className="Tooltip-Icon-Header">ورود/ثبت نام</div>
        </div>
      )}

      <div
        className="Icon-Header"
        onClick={() => DataUsersContext.setShowAccountDropDown(false)}
      >
        <span>{DataContext.comparisonConter}</span>
        <Link to={"/comparison"}>
          {" "}
          <TbArrowsShuffle className="Main-Icon-Headar" />
        </Link>
        <div className="Tooltip-Icon-Header">مقایسه محصولات</div>
      </div>

      <div
        className="Icon-Header"
        onClick={() => DataUsersContext.setShowAccountDropDown(false)}
      >
        <span>{DataContext.favoritesConter}</span>
        <Link to={"/favorites"}>
          <AiOutlineHeart className="Main-Icon-Headar" />
        </Link>
        <div className="Tooltip-Icon-Header">علاقه مندی ها </div>
      </div>

      <div
        className="Icon-Header"
        onClick={() => DataUsersContext.setShowAccountDropDown(false)}
      >
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
        <div className="Tooltip-Icon-Header">سبد خرید </div>
      </div>
    </div>
  );
}
