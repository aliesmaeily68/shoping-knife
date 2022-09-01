import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { UsersContext } from "../../../Contexts/UsersContext";

import "./LoginForm.css";

export default function LoginForm() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <>
      <div className="Container-LoginForm">
        <div className="Wrapper-LoginForm">
          <form action="#">
            <div className="NameOrEmail-LoginForm">
              <label htmlFor="#">
                <span>نام کاربری یا آدرس ایمیل </span>
                <span className="Star-LoginForm">*</span>
              </label>
              <input type="text" />
            </div>
            <div className="password-LoginForm">
              <label htmlFor="#">
                <span>رمز ورود</span>
                <span className="Star-LoginForm">*</span>
              </label>
              {DataUsersContext.showPasswordLoginForm ? (
                <div className="Eye-Password-LoginForm">
                  <div className="Eye-LoginForm">
                    <AiOutlineEyeInvisible
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordLoginForm(false)
                      }
                    />
                  </div>
                  <input type="password" />
                </div>
              ) : (
                <div className="Eye-Password-LoginForm">
                  <div className="Eye-LoginForm">
                    <AiOutlineEye
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordLoginForm(true)
                      }
                    />
                  </div>
                  <input type="text" />
                </div>
              )}
            </div>
            <button className="Submit-LoginForm">ورود</button>
            <div className="Forget-Remember-LoginForm">
              <div className="Remember-LoginForm">
                <input type="checkbox" />
                <label htmlFor="#">
                  <span>مرا به خاطر بسپار</span>
                </label>
              </div>
              <Link to={"/login-register/lost-account"}>
                {" "}
                <span className="Forget-LoginForm">
                  رمز عبور را فراموش کرده اید؟
                </span>{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
