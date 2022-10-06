import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

import "./CreateAccount.css";
import { UsersContext } from "../../../Contexts/UsersContext";

export default function CreateAccount() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <>
      <div className="Container-CreateAccount">
        <div className="WrapperCreateAccount">
          <FaRegUser className="IconUser-CreateAccount" />
          <div className="Title-CreateAccount">
            <h3>هنوز حساب کاربری ندارید؟</h3>
            <Link to={"/my-account"}>
              <h3
                className="Link-CreateAccount"
                onClick={() => DataUsersContext.setShowLoginSidebar(false)}
              >
                ایجاد حساب کاربری
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
