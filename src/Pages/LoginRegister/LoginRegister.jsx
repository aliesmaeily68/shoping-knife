import React, { useContext } from "react";
import LoginForm from "../../Components/LoginSidebar/LoginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import { UsersContext } from "../../Contexts/UsersContext";

import "./LoginRegister.css";

export default function LoginRegister() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <>
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
    </>
  );
}
