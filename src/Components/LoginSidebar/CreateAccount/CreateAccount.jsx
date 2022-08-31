import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

import "./CreateAccount.css";

export default function CreateAccount() {
  return (
    <>
      <div className="Container-CreateAccount">
        <div className="WrapperCreateAccount">
          <FaRegUser className="IconUser-CreateAccount" />
          <div className="Title-CreateAccount">
            <h3>هنوز حساب کاربری ندارید؟</h3>
            <Link to={"/login-register"}>
              <h3 className="Link-CreateAccount">ایجاد حساب کاربری</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
