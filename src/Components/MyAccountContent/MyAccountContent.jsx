import React, { useContext } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiOutlineOrderedList } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { RiFileUserLine } from "react-icons/ri";

import { Link } from "react-router-dom";

import "./MyAccountContent.css";
import { UsersContext } from "../../Contexts/UsersContext";

export default function MyAccountContent() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <div className="Container-MyAccountContent">
      <div className="Wrapper-MyAccountContent">
        <h2>
          سلام <span>{DataUsersContext.loginFormUserNameOrEmailValue}</span> (
          <span>{DataUsersContext.loginFormUserNameOrEmailValue}</span> نیستید؟{" "}
          <Link
            to={"/my-account"}
            onClick={() => DataUsersContext.setIsUserInData(false)}
          >
            <span>خارج شوید</span>
          </Link>
          )
        </h2>
        <p>
          از طریق پیشخوان حساب کاربری تان ، می توانید سفارش های اخیرتان را
          مشاهده ، آدرس های حمل ونقل و صورت حساب تان را مدیریت و جزئیات حساب
          کاربری و کلمه عبور خود را ویرایش کنید .
        </p>
        <ul className="ListGroup-MyAccountContent">
          {DataUsersContext.userType == "admin" && (
            <Link
              to={"/dashboard-admin/dashboard-home"}
              onClick={() => DataUsersContext.setShowDashboardAdmin(true)}
            >
              <li>
                <div className="Icon-MyAccountContent">
                  <MdOutlineAdminPanelSettings />
                </div>

                <h3>پنل مدیریت</h3>
              </li>
            </Link>
          )}

          <Link
            to={"orders"}
            onClick={() => DataUsersContext.setShowAccountRoute(true)}
          >
            <li>
              <div className="Icon-MyAccountContent">
                <AiOutlineOrderedList />
              </div>

              <h3>سفارش ها</h3>
            </li>
          </Link>

          <Link
            to={"edit-address"}
            onClick={() => {
              DataUsersContext.setShowBillOrTransportationAddressRoute(false);
              DataUsersContext.setShowAccountRoute(true);
            }}
          >
            <li>
              <div className="Icon-MyAccountContent">
                <GoLocation />
              </div>

              <h3>آدرس ها</h3>
            </li>
          </Link>

          <Link
            to={"edit-account"}
            onClick={() => DataUsersContext.setShowAccountRoute(true)}
          >
            <li>
              <div className="Icon-MyAccountContent">
                <RiFileUserLine />
              </div>

              <h3>جزئیات حساب </h3>
            </li>
          </Link>

          <Link
            to={"favorites"}
            onClick={() => DataUsersContext.setShowAccountRoute(true)}
          >
            <li>
              <div className="Icon-MyAccountContent">
                <BsHeart />
              </div>

              <h3>علاقه مندی ها</h3>
            </li>
          </Link>

          <Link
            to={"/my-account"}
            onClick={() => DataUsersContext.setIsUserInData(false)}
          >
            <li>
              <div className="Icon-MyAccountContent">
                <ImExit />
              </div>

              <h3>خروج</h3>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
