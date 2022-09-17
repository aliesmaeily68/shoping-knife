import React, { useContext } from "react";
import LoginForm from "../../Components/LoginSidebar/LoginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import { UsersContext } from "../../Contexts/UsersContext";
import AccountSideBar from "../../Components/AccountSideBar/AccountSideBar";
import MyAccountContent from "../../Components/MyAccountContent/MyAccountContent";

import "./MyAccount.css";
import { Outlet } from "react-router";

export default function MyAccount() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <>
      {!DataUsersContext.isUserInData && (
        <div
          className="Container-LoginRegister"
          onClick={() => DataUsersContext.setShowLoginSidebar(false)}
        >
          <div className="Wrapper-LoginRegister">
            <div className="Container-LoginRegister-LoginForm">
              <div className="Wrapper-LoginRegister-LoginForm">
                <h2>ورود</h2>
                <LoginForm />
              </div>
            </div>
            <div className="Container-LoginRegister-RegisterForm">
              <div className="Wrapper-LoginRegister-RegisterForm">
                <h2>عضویت</h2>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      )}
      {DataUsersContext.isUserInData && (
        <>
          <div
            className="Container-MyAccount"
            onClick={() => DataUsersContext.setShowAccountDropDown(false)}
          >
            <div className="AccountSideBar">
              <AccountSideBar />
            </div>

            <div className="subRoute-MyAccount">
              {DataUsersContext.showAccountRoute ? (
                <Outlet />
              ) : (
                <MyAccountContent />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
