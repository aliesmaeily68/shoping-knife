import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../Contexts/UsersContext";
import "./AccountDropDown.css";

export default function AccountDropDown() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <div className="Container-AccountDropDown">
      <div className="Wrapper-AccountDropDown">
        <ul className="ListGroup-AccountDropDown">
          <Link
            to={"/my-account"}
            onClick={() => DataUsersContext.setShowAccountRoute(false)}
          >
            <li>پیشخوان</li>
          </Link>
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
            onClick={() => DataUsersContext.setIsUserInData(false)}
          >
            <li className="Close-AccountDropDown">خروج</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
