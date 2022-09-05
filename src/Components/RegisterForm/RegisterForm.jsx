import React from "react";
import { useRef, useEffect } from "react";
import { useContext } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { UsersContext } from "../../Contexts/UsersContext";
import "./RegisterForm.css";

export default function RegisterForm() {
  const DataUsersContext = useContext(UsersContext);
  const NameRegisterFormRef = useRef();
  const EmailRegisterFormRef = useRef();
  const PasswordRegisterFormRef = useRef();

  const RegisterFormHandler = (event) => {
    event.preventDefault();
    const RegexNotEmpty = /./;
    const RegexEmail = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;
    const RegexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (RegexNotEmpty.test(NameRegisterFormRef.current.value)) {
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
      DataUsersContext.notCleanInputForFirstTimeRegisterForm &&
      DataUsersContext.nameRegisterForm &&
      DataUsersContext.emailRegisterForm &&
      DataUsersContext.passwordRegisterForm
    ) {
      NameRegisterFormRef.current.value = "";
      PasswordRegisterFormRef.current.value = "";
      EmailRegisterFormRef.current.value = "";
    }
    DataUsersContext.setNotCleanInputForFirstTimeRegisterForm(true);
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
                  DataUsersContext.nameRegisterForm
                    ? "ValidMessage-Name-RegisterForm"
                    : "NotValidMessage-Name-RegisterForm"
                }`}
              >
                فیلد مورد نظر را پر نمایید
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
                  DataUsersContext.emailRegisterForm
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
                    <AiOutlineEyeInvisible
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordRegisterForm(false)
                      }
                    />
                  </div>
                  <input
                    type="password"
                    ref={PasswordRegisterFormRef}
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
                      DataUsersContext.passwordRegisterForm
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
                    <AiOutlineEye
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordRegisterForm(true)
                      }
                    />
                  </div>
                  <input
                    type="text"
                    ref={PasswordRegisterFormRef}
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
                      DataUsersContext.passwordRegisterForm
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
