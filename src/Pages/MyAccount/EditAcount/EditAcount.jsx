import React, { useContext, useRef ,useEffect } from "react";
import { UsersContext } from "../../../Contexts/UsersContext";
import "./EditAcount.css";

export default function EditAcount() {
  const DataUsersContext = useContext(UsersContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const NameEditAcountFormRef = useRef();
  const LastNameEditAcountFormRef = useRef();
  const UserNameEditAcountFormRef = useRef();
  const EmailEditAcountFormRef = useRef();
  const PasswordEditAcountFormRef = useRef();
  const ResetPasswordEditAcountFormRef = useRef();
  const RepetPasswordEditAcountFormRef = useRef();

  const EditAcountFormHandler = (event) => {
    event.preventDefault();

    const RegexNotEmpty = /./;
    const RegexEmail = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;
    const RegexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (RegexNotEmpty.test(NameEditAcountFormRef.current.value)) {
      DataUsersContext.setNameEditAcountForm(true);
      DataUsersContext.setIsKeyDownNameEditAcountForm(true);
    } else {
      DataUsersContext.setNameEditAcountForm(false);
      DataUsersContext.setIsKeyDownNameEditAcountForm(false);
    }

    if (RegexNotEmpty.test(LastNameEditAcountFormRef.current.value)) {
      DataUsersContext.setLastNameEditAcountForm(true);
      DataUsersContext.setIsKeyDownLastNameEditAcountForm(true);
    } else {
      DataUsersContext.setLastNameEditAcountForm(false);
      DataUsersContext.setIsKeyDownLastNameEditAcountForm(false);
    }

    if (RegexNotEmpty.test(UserNameEditAcountFormRef.current.value)) {
      DataUsersContext.setUserNameEditAcountForm(true);
      DataUsersContext.setIsKeyDownUserNameEditAcountForm(true);
    } else {
      DataUsersContext.setUserNameEditAcountForm(false);
      DataUsersContext.setIsKeyDownUserNameEditAcountForm(false);
    }

    if (RegexEmail.test(EmailEditAcountFormRef.current.value)) {
      DataUsersContext.setEmailEditAcountForm(true);
      DataUsersContext.setIsKeyDownEmailEditAcountForm(true);
    } else {
      DataUsersContext.setEmailEditAcountForm(false);
      DataUsersContext.setIsKeyDownEmailEditAcountForm(false);
    }

    if (RegexPassword.test(PasswordEditAcountFormRef.current.value)) {
      DataUsersContext.setPasswordEditAcountForm(true);
      DataUsersContext.setIsKeyDownPasswordEditAcountForm(true);
    } else {
      DataUsersContext.setPasswordEditAcountForm(false);
      DataUsersContext.setIsKeyDownPasswordEditAcountForm(false);
    }

    if (RegexPassword.test(ResetPasswordEditAcountFormRef.current.value)) {
      DataUsersContext.setResetPasswordEditAcountForm(true);
      DataUsersContext.setIsKeyDownResetPasswordEditAcountForm(true);
    } else {
      DataUsersContext.setResetPasswordEditAcountForm(false);
      DataUsersContext.setIsKeyDownResetPasswordEditAcountForm(false);
    }

    if (RegexPassword.test(RepetPasswordEditAcountFormRef.current.value)) {
      DataUsersContext.setRepetPasswordEditAcountForm(true);
      DataUsersContext.setIsKeyDownRepetPasswordEditAcountForm(true);
    } else {
      DataUsersContext.setRepetPasswordEditAcountForm(false);
      DataUsersContext.setIsKeyDownRepetPasswordEditAcountForm(false);
    }
  };

  return (
    <div className="Container-EditAcount">
      <div className="Wrapper-EditAcount">
        <form action="#" onSubmit={(event) => EditAcountFormHandler(event)}>
          <div className="FirstName-LastName-Form-EditAcount">
            <div className="FirstName-Form-EditAcount">
              <label htmlFor="#">
                <span>نام</span>
                <span className="Star-EditAcount">*</span>
              </label>
              <input
                type="text"
                ref={NameEditAcountFormRef}
                className={`${
                  DataUsersContext.nameEditAcountForm ||
                  DataUsersContext.isKeyDownNameEditAcountForm
                    ? ""
                    : "ValidMessage-Input-Name-EditAcountForm"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setIsKeyDownNameEditAcountForm(true)
                }
              />
              <span
                className={` ${
                  DataUsersContext.nameEditAcountForm ||
                  DataUsersContext.isKeyDownNameEditAcountForm
                    ? "ValidMessage-Name-EditAcountForm"
                    : "NotValidMessage-Name-EditAcountForm"
                }`}
              >
                فیلد مورد نظر را پر نمایید
              </span>
            </div>

            <div className="LastName-Form-EditAcount">
              <label htmlFor="#">
                <span>نام خانوادگی</span>
                <span className="Star-EditAcount">*</span>
              </label>
              <input
                type="text"
                ref={LastNameEditAcountFormRef}
                className={`${
                  DataUsersContext.lastNameEditAcountForm ||
                  DataUsersContext.isKeyDownLastNameEditAcountForm
                    ? ""
                    : "ValidMessage-Input-LastName-EditAcountForm"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setIsKeyDownLastNameEditAcountForm(true)
                }
              />
              <span
                className={` ${
                  DataUsersContext.lastNameEditAcountForm ||
                  DataUsersContext.isKeyDownLastNameEditAcountForm
                    ? "ValidMessage-LastName-EditAcountForm"
                    : "NotValidMessage-LastName-EditAcountForm"
                }`}
              >
                فیلد مورد نظر را پر نمایید
              </span>
            </div>
          </div>

          <div className="UserName-Form-EditAcount">
            <label htmlFor="#">
              <span>نام نمایشی</span>
              <span className="Star-EditAcount">*</span>
            </label>
            <input
              type="text"
              ref={UserNameEditAcountFormRef}
              className={`${
                DataUsersContext.userNameEditAcountForm ||
                DataUsersContext.isKeyDownUserNameEditAcountForm
                  ? ""
                  : "ValidMessage-Input-UserName-EditAcountForm"
              }`}
              onKeyDown={() =>
                DataUsersContext.setIsKeyDownUserNameEditAcountForm(true)
              }
            />
            <span
              className={` ${
                DataUsersContext.userNameEditAcountForm ||
                DataUsersContext.isKeyDownUserNameEditAcountForm
                  ? "ValidMessage-UserName-EditAcountForm"
                  : "NotValidMessage-UserName-EditAcountForm"
              }`}
            >
              فیلد مورد نظر را پر نمایید
            </span>
            <span>
              اسم شما به این صورت در حساب کاربری و نظرات دیده خواهد شد.
            </span>
          </div>

          <div className="Email-Form-EditAcount">
            <label htmlFor="#">
              <span>آدرس ایمیل</span>
              <span className="Star-EditAcount">*</span>
            </label>
            <input
              type="text"
              ref={EmailEditAcountFormRef}
              className={`${
                DataUsersContext.emailEditAcountForm ||
                DataUsersContext.isKeyDownEmailEditAcountForm
                  ? ""
                  : "ValidMessage-Input-Email-EditAcountForm"
              }`}
              onKeyDown={() =>
                DataUsersContext.setIsKeyDownEmailEditAcountForm(true)
              }
            />
            <span
              className={` ${
                DataUsersContext.emailEditAcountForm ||
                DataUsersContext.isKeyDownEmailEditAcountForm
                  ? "ValidMessage-Email-EditAcountForm"
                  : "NotValidMessage-Email-EditAcountForm"
              }`}
            >
              ایمیل وارد شده صحیح نمی باشد
            </span>
          </div>

          <div className="Resets-password-EditAcount">
            <h2>تغییر گذرواژه</h2>
            <div className="Password-Form-EditAcount">
              <label htmlFor="#">
                <span>
                  گذرواژه پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)
                </span>
              </label>
              <input
                type="password"
                ref={PasswordEditAcountFormRef}
                className={`${
                  DataUsersContext.passwordEditAcountForm ||
                  DataUsersContext.isKeyDownPasswordEditAcountForm
                    ? ""
                    : "ValidMessage-Input-Password-EditAcountForm"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setIsKeyDownPasswordEditAcountForm(true)
                }
              />
              <span
                className={` ${
                  DataUsersContext.passwordEditAcountForm ||
                  DataUsersContext.isKeyDownPasswordEditAcountForm
                    ? "ValidMessage-Password-EditAcountForm"
                    : "NotValidMessage-Password-EditAcountForm"
                }`}
              >
                گذرواژه باید حداقل 6 کاراکتر و شامل حروف بزرگ و کوچک انگلیسی و
                عدد باشد
              </span>
            </div>
            <div className="Reset-Password-Form-EditAcount">
              <label htmlFor="#">
                <span>
                  گذرواژه جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)
                </span>
              </label>
              <input
                type="password"
                ref={ResetPasswordEditAcountFormRef}
                className={`${
                  DataUsersContext.resetPasswordEditAcountForm ||
                  DataUsersContext.isKeyDownResetPasswordEditAcountForm
                    ? ""
                    : "ValidMessage-Input-ResetPassword-EditAcountForm"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setIsKeyDownResetPasswordEditAcountForm(true)
                }
              />
              <span
                className={` ${
                  DataUsersContext.resetPasswordEditAcountForm ||
                  DataUsersContext.isKeyDownResetPasswordEditAcountForm
                    ? "ValidMessage-ResetPassword-EditAcountForm"
                    : "NotValidMessage-ResetPassword-EditAcountForm"
                }`}
              >
                گذرواژه باید حداقل 6 کاراکتر و شامل حروف بزرگ و کوچک انگلیسی و
                عدد باشد
              </span>
            </div>
            <div className="Reset-RepetPassword-Form-EditAcount">
              <label htmlFor="#">
                <span>تکرار گذرواژه جدید</span>
              </label>
              <input
                type="password"
                ref={RepetPasswordEditAcountFormRef}
                className={`${
                  DataUsersContext.repetPasswordEditAcountForm ||
                  DataUsersContext.isKeyDownRepetPasswordEditAcountForm
                    ? ""
                    : "ValidMessage-Input-RepetPassword-EditAcountForm"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setIsKeyDownRepetPasswordEditAcountForm(true)
                }
              />
              <span
                className={` ${
                  DataUsersContext.repetPasswordEditAcountForm ||
                  DataUsersContext.isKeyDownRepetPasswordEditAcountForm
                    ? "ValidMessage-RepetPassword-EditAcountForm"
                    : "NotValidMessage-RepetPassword-EditAcountForm"
                }`}
              >
                گذرواژه باید حداقل 6 کاراکتر و شامل حروف بزرگ و کوچک انگلیسی و
                عدد باشد
              </span>
            </div>
          </div>
          <button className="Btn-EditAcount">ذخیره تغییرات</button>
        </form>
      </div>
    </div>
  );
}
