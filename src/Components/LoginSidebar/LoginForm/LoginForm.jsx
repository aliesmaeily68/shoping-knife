import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { UsersContext } from "../../../Contexts/UsersContext";
import useFetch from "../../../hooks/useFetch";
import { setCookie, getCookie, loginDataset } from "../../../utils";

import "./LoginForm.css";

export default function LoginForm() {
  const DataUsersContext = useContext(UsersContext);

  const [isChecked, setIschecked] = useState();

  const { posts } = useFetch(
    "https://shopingknife-default-rtdb.firebaseio.com/users.json",
    DataUsersContext.getuserData
  );

  useEffect(() => {
    if (getCookie("setUserNameOrEmailValue") && getCookie("setPasswordValue")) {
      let Alluser = posts.map((user, index) => {
        let newusers = { ...user[1], id: index + 1, userId: user[0] };
        return newusers;
      });
      const IsUserInData = Alluser.some(
        (user) =>
          user.password == getCookie("setPasswordValue") &&
          (user.userName == getCookie("setUserNameOrEmailValue") ||
            user.email == getCookie("setUserNameOrEmailValue"))
      );
      const UserData = Alluser.find(
        (user) =>
          user.password == getCookie("setPasswordValue") &&
          (user.userName == getCookie("setUserNameOrEmailValue") ||
            user.email == getCookie("setUserNameOrEmailValue"))
      );
      DataUsersContext.setLoginFormUserNameOrEmailValue(
        getCookie("setUserNameOrEmailValue")
      );

      DataUsersContext.setIsUserInData(IsUserInData);
      if (IsUserInData) {
        if (UserData.post == "کاربر") {
          DataUsersContext.setUserType("user");
        } else if (UserData.post == "مدیر") {
          DataUsersContext.setUserType("admin");
        }
        loginDataset(DataUsersContext, UserData);
      }
    }
  });
  const SubmitLoginForm = (e) => {
    e.preventDefault();

    let Alluser = posts.map((user, index) => {
      let newusers = { ...user[1], id: index + 1, userId: user[0] };
      return newusers;
    });
    const IsUserInData = Alluser.some(
      (user) =>
        user.password == DataUsersContext.loginFormPasswordValue &&
        (user.userName == DataUsersContext.loginFormUserNameOrEmailValue ||
          user.email == DataUsersContext.loginFormUserNameOrEmailValue)
    );
    const UserData = Alluser.find(
      (user) =>
        user.password == DataUsersContext.loginFormPasswordValue &&
        (user.userName == DataUsersContext.loginFormUserNameOrEmailValue ||
          user.email == DataUsersContext.loginFormUserNameOrEmailValue)
    );
    if (isChecked && IsUserInData) {
      setCookie(
        "login-setUserNameOrEmailValue",
        DataUsersContext.loginFormUserNameOrEmailValue,
        6
      );
      setCookie(
        "login-setPasswordValue",
        DataUsersContext.loginFormPasswordValue,
        6
      );
    }

    DataUsersContext.setIsUserInData(IsUserInData);
    if (IsUserInData) {
      if (UserData.post == "کاربر") {
        DataUsersContext.setUserType("user");
      } else if (UserData.post == "مدیر") {
        DataUsersContext.setUserType("admin");
      }
      loginDataset(DataUsersContext, UserData);
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
                    <AiOutlineEye
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordLoginForm(false)
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
              ) : (
                <div className="Eye-Password-LoginForm">
                  <div className="Eye-LoginForm">
                    <AiOutlineEyeInvisible
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordLoginForm(true)
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
              )}
            </div>
            <button className="Submit-LoginForm">ورود</button>
            <div className="Forget-Remember-LoginForm">
              <div className="Remember-LoginForm">
                <input
                  type="checkbox"
                  onChange={(event) => setIschecked(event.target.checked)}
                />
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
