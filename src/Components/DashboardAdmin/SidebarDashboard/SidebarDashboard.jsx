import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";
import { BiExit, BiCommentDetail } from "react-icons/bi";
import { TiArrowBackOutline } from "react-icons/ti";
import { exitAccount } from "../../../utils";

import "./SidebarDashboard.css";
import { UsersContext } from "../../../Contexts/UsersContext";
import { AllProductContext } from "../../../Contexts/ProductContext";

export default function SidebarDashboard() {
  const DataUsersContext = useContext(UsersContext);
  const DataProductContext = useContext(AllProductContext);
  return (
    <div className="Container-SidebarDashboard">
      <div className="Wrapper-SidebarDashboard">
        <h1>پنل مدیریت</h1>
        <div className="Hr-SidebarDashboard"></div>
        <ul className="ListGroup-SidebarDashboard">
          <NavLink to={"dashboard-home"}>
            <li>
              <AiOutlineHome size={20} /> خانه
            </li>
          </NavLink>
          <NavLink to={"dashboard-product"}>
            <li>
              <HiOutlineShoppingCart size={20} /> محصولات
            </li>
          </NavLink>
          <NavLink to={"dashboard-proposal"}>
            <li>
              <BsEmojiHeartEyes size={20} /> محصولات شگفت انگیز
            </li>
          </NavLink>
          <NavLink to={"dashboard-user"}>
            <li>
              <AiOutlineUser size={20} /> کاربران
            </li>
          </NavLink>
          <NavLink to={"dashboard-comment"}>
            <li>
              <BiCommentDetail size={20} /> کامنت ها
            </li>
          </NavLink>
          <NavLink to={"dashboard-article"}>
            <li>
              <MdOutlineArticle size={20} /> مقالات
            </li>
          </NavLink>
          <NavLink to={"dashboard-order"}>
            <li>
              <AiOutlineUnorderedList size={20} /> سفارشات
            </li>
          </NavLink>
          <NavLink
            to={"/"}
            onClick={() => DataUsersContext.setShowDashboardAdmin(false)}
          >
            <li className="Back-Close-SidebarDashboard">
              <TiArrowBackOutline size={20} /> بازگشت به صفحه اصلی سایت
            </li>
          </NavLink>
          <NavLink
            to={"/my-account"}
            onClick={() => {
              DataUsersContext.setShowDashboardAdmin(false);
              exitAccount(DataUsersContext, DataProductContext);
            }}
          >
            <li className="Back-Close-SidebarDashboard">
              <BiExit size={20} /> خروج
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
