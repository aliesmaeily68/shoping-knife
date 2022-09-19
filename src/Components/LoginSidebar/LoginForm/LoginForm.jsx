import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { UsersContext } from "../../../Contexts/UsersContext";
import { IsUser } from "../../../utils";

import "./LoginForm.css";

export default function LoginForm() {
  const DataUsersContext = useContext(UsersContext);
  const IsUserInData = IsUser(
    DataUsersContext.loginFormUserNameOrEmailValue,
    DataUsersContext.loginFormUserNameOrEmailValue,
    DataUsersContext.loginFormPasswordValue
  );

  const SubmitLoginForm = (e) => {
    e.preventDefault();
    DataUsersContext.setIsUserInData(IsUserInData);
    if (IsUserInData) {
      DataUsersContext.setShowLoginSidebar(false);
      DataUsersContext.setShowAccountRoute(false);
    } else {
      DataUsersContext.setTitleErrorMessage(
        "لطفا نام کاربری و رمز عبور معتبر وارد نمایید."
      );
      DataUsersContext.setShowErrorMessage(true);
      DataUsersContext.setLoginFormUserNameOrEmailValue("");
      DataUsersContext.setLoginFormPasswordValue("");
      setTimeout(() => {
        DataUsersContext.setShowErrorMessage(false);
      }, 4000);
    }
  };
  return (
    <>
      <div className="Container-LoginForm">
        <div className="Wrapper-LoginForm">
          <form action="#" onSubmit={(e) => SubmitLoginForm(e)}>
            <div className="NameOrEmail-LoginForm">
              <label htmlFor="#">
                <span>نام کاربری یا آدرس ایمیل </span>
                <span className="Star-LoginForm">*</span>
              </label>
              <input
                value={DataUsersContext.loginFormUserNameOrEmailValue}
                type="text"
                onChange={(e) =>
                  DataUsersContext.setLoginFormUserNameOrEmailValue(
                    e.target.value
                  )
                }
              />
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
                  <input
                    value={DataUsersContext.loginFormPasswordValue}
                    type="password"
                    onChange={(e) =>
                      DataUsersContext.setLoginFormPasswordValue(e.target.value)
                    }
                  />
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
                  <input
                    value={DataUsersContext.loginFormPasswordValue}
                    type="text"
                    onChange={(e) =>
                      DataUsersContext.setLoginFormPasswordValue(e.target.value)
                    }
                  />
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
              <Link to={"/my-account/lost-account"}>
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
