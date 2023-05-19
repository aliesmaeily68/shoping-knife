import React, { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { UsersContext } from "../../Contexts/UsersContext";
import { v4 as uuidv4 } from "uuid";
import "./RegisterForm.css";
import { AllProductContext } from "../../Contexts/ProductContext";
import { userDatas, loginDataset } from "../../utils";

export default function RegisterForm() {
  const DataUsersContext = useContext(UsersContext);
  const DataProductContext = useContext(AllProductContext);
  const NameRegisterFormRef = useRef();
  const EmailRegisterFormRef = useRef();
  const PasswordRegisterFormRef = useRef();

  const RegisterFormHandler = (event) => {
    event.preventDefault();
    const RegexEnglishData = /^[A-z0-9\-]+$/;
    const RegexEmail = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;
    const RegexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (RegexEnglishData.test(NameRegisterFormRef.current.value)) {
      DataUsersContext.setNameRegisterForm(true);
      DataUsersContext.setIsKeyDownNameRegisterForm(true);
    } else {
      DataUsersContext.setNameRegisterForm(false);
      DataUsersContext.setIsKeyDownNameRegisterForm(false);
    }

    if (RegexEmail.test(EmailRegisterFormRef.current.value)) {
      DataUsersContext.setEmailRegisterForm(true);
      DataUsersContext.setIsKeyDownEmailRegisterForm(true);
    } else {
      DataUsersContext.setEmailRegisterForm(false);
      DataUsersContext.setIsKeyDownEmailRegisterForm(false);
    }

    if (RegexPassword.test(PasswordRegisterFormRef.current.value)) {
      DataUsersContext.setPasswordRegisterForm(true);
      DataUsersContext.setIsKeyDownPasswordRegisterForm(true);
    } else {
      DataUsersContext.setPasswordRegisterForm(false);
      DataUsersContext.setIsKeyDownPasswordRegisterForm(false);
    }

    if (
      RegexEnglishData.test(NameRegisterFormRef.current.value) &&
      RegexEmail.test(EmailRegisterFormRef.current.value) &&
      RegexPassword.test(PasswordRegisterFormRef.current.value)
    ) {
      let NewUserRegisterObj = {
        token: uuidv4(),
        userName: DataUsersContext.nameRegisterFormValue,
        email: DataUsersContext.emailRegisterFormValue,
        password: DataUsersContext.passwordRegisterFormValue,
        post: "کاربر",
        firstName: "",
        lastName: "",
        companyName: "",
        countryName: "ایران",
        stateName: "زنجان",
        city: "",
        addressName: "",
        postalCode: "",
        tellNumber: "",
        moreInfo: "",
        userDatas: userDatas(DataProductContext),
      };
      DataUsersContext.setNameRegisterFormValue("");
      DataUsersContext.setEmailRegisterFormValue("");
      DataUsersContext.setPasswordRegisterFormValue("");
      fetch("https://aaaa-f46f5-default-rtdb.firebaseio.com//users.json", {
        method: "POST",
        body: JSON.stringify(NewUserRegisterObj),
      }).then((response) => {
        if (response == 200) {
          DataUsersContext.setIsUserInData(true);
          DataUsersContext.setEmailCheckout(
            DataUsersContext.emailRegisterFormValue
          );
          DataUsersContext.setPasswordCheckout(
            DataUsersContext.passwordRegisterFormValue
          );
          DataUsersContext.setUserNameCheckout(
            DataUsersContext.nameRegisterFormValue
          );
          DataUsersContext.setLoginFormUserNameOrEmailValue(
            DataUsersContext.nameRegisterFormValue
          );
          DataUsersContext.setLoginFormPasswordValue(
            DataUsersContext.passwordRegisterFormValue
          );
          DataUsersContext.setShowLoginSidebar(false);
          DataUsersContext.setShowAccountRoute(false);
        }
      });

      fetch("https://aaaa-f46f5-default-rtdb.firebaseio.com//users.json")
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            let Alluser = Object.entries(data).map((user, index) => {
              let newusers = { ...user[1], id: index + 1, userId: user[0] };
              return newusers;
            });
            const UserData = Alluser.find(
              (user) =>
                user.password == DataUsersContext.loginFormPasswordValue &&
                (user.userName ==
                  DataUsersContext.loginFormUserNameOrEmailValue ||
                  user.email == DataUsersContext.loginFormUserNameOrEmailValue)
            );
            DataUsersContext.setUserId(UserData.userId);
            sessionStorage.setItem("SessionToken", UserData.token);
            loginDataset(DataUsersContext, UserData);
            window.location.reload();
          }
        });
    }
  };
 
  return (
    <div>
      <div className="Container-RegisterForm">
        <div className="Wrapper-RegisterForm">
          <form action="#" onSubmit={(event) => RegisterFormHandler(event)}>
            <div className="Name-RegisterForm">
              <label htmlFor="#">
                <span>نام کاربری </span>
                <span className="Star-RegisterForm">*</span>
              </label>
              <input
                type="text"
                ref={NameRegisterFormRef}
                value={DataUsersContext.nameRegisterFormValue}
                onChange={(event) => {
                  DataUsersContext.setNameRegisterFormValue(event.target.value);
                  DataUsersContext.setLoginFormUserNameOrEmailValue(
                    event.target.value
                  );
                }}
                className={`${
                  DataUsersContext.nameRegisterForm ||
                  DataUsersContext.isKeyDownNameRegisterForm
                    ? ""
                    : "ValidMessage-Input-Name-RegisterForm"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setIsKeyDownNameRegisterForm(true)
                }
              />

              <span
                className={` ${
                  DataUsersContext.nameRegisterForm ||
                  DataUsersContext.isKeyDownNameRegisterForm
                    ? "ValidMessage-Name-RegisterForm"
                    : "NotValidMessage-Name-RegisterForm"
                }`}
              >
                از اعداد و حروف انگلیسی استفاده نمایید
              </span>
            </div>
            <div className="Email-RegisterForm">
              <label htmlFor="#">
                <span>آدرس ایمیل </span>
                <span className="Star-RegisterForm">*</span>
              </label>
              <input
                type="text"
                ref={EmailRegisterFormRef}
                value={DataUsersContext.emailRegisterFormValue}
                onChange={(event) =>
                  DataUsersContext.setEmailRegisterFormValue(event.target.value)
                }
                className={`${
                  DataUsersContext.emailRegisterForm ||
                  DataUsersContext.isKeyDownEmailRegisterForm
                    ? ""
                    : "ValidMessage-Input-Email-RegisterForm"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setIsKeyDownEmailRegisterForm(true)
                }
              />

              <span
                className={` ${
                  DataUsersContext.emailRegisterForm ||
                  DataUsersContext.isKeyDownEmailRegisterForm
                    ? "ValidMessage-Email-RegisterForm"
                    : "NotValidMessage-Email-RegisterForm"
                }`}
              >
                ایمیل وارد شده صحیح نمی باشد
              </span>
            </div>
            <div className="password-RegisterForm">
              <label htmlFor="#">
                <span>رمز ورود</span>
                <span className="Star-RegisterForm">*</span>
              </label>
              {DataUsersContext.showPasswordRegisterForm ? (
                <div className="Eye-Password-RegisterForm">
                  <div className="Eye-RegisterForm">
                    <AiOutlineEye
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordRegisterForm(false)
                      }
                    />
                  </div>
                  <input
                    type="text"
                    ref={PasswordRegisterFormRef}
                    value={DataUsersContext.passwordRegisterFormValue}
                    onChange={(event) => {
                      DataUsersContext.setPasswordRegisterFormValue(
                        event.target.value
                      );
                      DataUsersContext.setLoginFormPasswordValue(
                        event.target.value
                      );
                    }}
                    className={`${
                      DataUsersContext.passwordRegisterForm ||
                      DataUsersContext.isKeyDownPasswordRegisterForm
                        ? ""
                        : "ValidMessage-Input-Password-RegisterForm"
                    }`}
                    onKeyDown={() =>
                      DataUsersContext.setIsKeyDownPasswordRegisterForm(true)
                    }
                  />

                  <span
                    className={` ${
                      DataUsersContext.passwordRegisterForm ||
                      DataUsersContext.isKeyDownPasswordRegisterForm
                        ? "ValidMessage-Password-RegisterForm"
                        : "NotValidMessage-Password-RegisterForm"
                    }`}
                  >
                    گذرواژه باید حداقل 6 کاراکتر و شامل حروف بزرگ و کوچک انگلیسی
                    و عدد باشد
                  </span>
                </div>
              ) : (
                <div className="Eye-Password-RegisterForm">
                  <div className="Eye-RegisterForm">
                    <AiOutlineEyeInvisible
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordRegisterForm(true)
                      }
                    />
                  </div>
                  <input
                    type="password"
                    ref={PasswordRegisterFormRef}
                    value={DataUsersContext.passwordRegisterFormValue}
                    onChange={(event) => {
                      DataUsersContext.setPasswordRegisterFormValue(
                        event.target.value
                      );
                      DataUsersContext.setLoginFormPasswordValue(
                        event.target.value
                      );
                    }}
                    className={`${
                      DataUsersContext.passwordRegisterForm ||
                      DataUsersContext.isKeyDownPasswordRegisterForm
                        ? ""
                        : "ValidMessage-Input-Password-RegisterForm"
                    }`}
                    onKeyDown={() =>
                      DataUsersContext.setIsKeyDownPasswordRegisterForm(true)
                    }
                  />

                  <span
                    className={` ${
                      DataUsersContext.passwordRegisterForm ||
                      DataUsersContext.isKeyDownPasswordRegisterForm
                        ? "ValidMessage-Password-RegisterForm"
                        : "NotValidMessage-Password-RegisterForm"
                    }`}
                  >
                    گذرواژه باید حداقل 6 کاراکتر و شامل حروف بزرگ و کوچک انگلیسی
                    و عدد باشد
                  </span>
                </div>
              )}
            </div>
            <button className="Submit-RegisterForm">عضویت</button>
          </form>
        </div>
      </div>
    </div>
  );
}
