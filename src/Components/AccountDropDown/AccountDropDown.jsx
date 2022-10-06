import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../Contexts/UsersContext";
import { deleteCooKie, clearAllInputData } from "../../utils";
import "./AccountDropDown.css";

export default function AccountDropDown() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <div
      className="Container-AccountDropDown"
      onClick={() => DataUsersContext.setShowAccountDropDown(false)}
    >
      <div className="Wrapper-AccountDropDown">
        <ul className="ListGroup-AccountDropDown">
          <Link
            to={"/my-account"}
            onClick={() => DataUsersContext.setShowAccountRoute(false)}
          >
            <li>پیشخوان</li>
          </Link>
          {DataUsersContext.userType == "admin" && (
            <Link
              to={"/dashboard-admin/dashboard-home"}
              onClick={() => DataUsersContext.setShowDashboardAdmin(true)}
            >
              <li>پنل مدیریت</li>
            </Link>
          )}

          <Link
            to={"/my-account/orders"}
            onClick={() => DataUsersContext.setShowAccountRoute(true)}
          >
            <li>سفارش ها</li>
          </Link>

          <Link
            to={"/my-account/edit-address"}
            onClick={() => {
              DataUsersContext.setShowBillOrTransportationAddressRoute(false);
              DataUsersContext.setShowAccountRoute(true);
            }}
          >
            <li>آدرس ها</li>
          </Link>

          <Link
            to={"/my-account/edit-account"}
            onClick={() => DataUsersContext.setShowAccountRoute(true)}
          >
            <li>جزئیات حساب</li>
          </Link>
          <Link
            to={"/my-account/favorites"}
            onClick={() => DataUsersContext.setShowAccountRoute(true)}
          >
            <li>علاقه مندی ها</li>
          </Link>

          <Link
            to={"/my-account"}
            onClick={() => {
              DataUsersContext.setIsUserInData(false);
              deleteCooKie("login-setPasswordValue", 50);
              deleteCooKie("login-setUserNameOrEmailValue", 50);
              clearAllInputData(DataUsersContext);
            }}
          >
            <li className="Close-AccountDropDown">خروج</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
