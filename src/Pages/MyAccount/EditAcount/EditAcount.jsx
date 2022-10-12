import React, { useContext, useRef, useEffect } from "react";
import { AllProductContext } from "../../../Contexts/ProductContext";
import { UsersContext } from "../../../Contexts/UsersContext";
import { userDatas } from "../../../utils";
import "./EditAcount.css";

export default function EditAcount() {
  const DataUsersContext = useContext(UsersContext);
  const DataProductContext = useContext(AllProductContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const NameEditAcountFormRef = useRef();
  const LastNameEditAcountFormRef = useRef();
  const UserNameOREmailEditAcountFormRef = useRef();
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

    if (RegexNotEmpty.test(UserNameOREmailEditAcountFormRef.current.value)) {
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

    if (
      DataUsersContext.repetPasswordEditAcountFormValue !=
      DataUsersContext.resetPasswordEditAcountFormValue
    ) {
      DataUsersContext.setShowErrorMessage(true);
      DataUsersContext.setTitleErrorMessage(" گذرواژه ها مطابقت ندارند");
      ResetPasswordEditAcountFormRef.current.focus();
      setTimeout(() => {
        DataUsersContext.setShowErrorMessage(false);
      }, 3000);
    }

    if (
      RegexNotEmpty.test(NameEditAcountFormRef.current.value) &&
      RegexNotEmpty.test(LastNameEditAcountFormRef.current.value) &&
      RegexNotEmpty.test(UserNameOREmailEditAcountFormRef.current.value) &&
      RegexEmail.test(EmailEditAcountFormRef.current.value) &&
      RegexPassword.test(PasswordEditAcountFormRef.current.value) &&
      RegexPassword.test(ResetPasswordEditAcountFormRef.current.value) &&
      RegexPassword.test(RepetPasswordEditAcountFormRef.current.value) &&
      DataUsersContext.repetPasswordEditAcountFormValue ==
        DataUsersContext.resetPasswordEditAcountFormValue
    ) {
      let NewUserCheckoutObj = {
        token: DataUsersContext.userToken,
        firstName: DataUsersContext.firstNameCheckout,
        lastName: DataUsersContext.lastNameCheckout,
        companyName: DataUsersContext.companyNameCheckout,
        countryName: DataUsersContext.countryNameCheckout,
        stateName: DataUsersContext.stateNameCheckout,
        city: DataUsersContext.cityNameCheckout,
        addressName: DataUsersContext.addressNameCheckout,
        postalCode: DataUsersContext.postalCodeCheckout,
        tellNumber: DataUsersContext.tellNumberCheckout,
        email: DataUsersContext.emailCheckout,
        password: DataUsersContext.repetPasswordEditAcountFormValue,
        moreInfo: DataUsersContext.moreInfoCheckout,
        userName: DataUsersContext.userNameCheckout,
        post: DataUsersContext.userpost,
        userDatas: userDatas(DataProductContext),
      };

      fetch(
        `https://shopingknife-default-rtdb.firebaseio.com/users/${DataUsersContext.userId}.json`,
        {
          method: "PUT",
          body: JSON.stringify(NewUserCheckoutObj),
        }
      ).then((response) => console.log(response));

      DataUsersContext.setResetPasswordEditAcountFormValue("");
      DataUsersContext.setRepetPasswordEditAcountFormValue("");
      DataUsersContext.setPasswordCheckout(
        DataUsersContext.repetPasswordEditAcountFormValue
      );
      DataUsersContext.setShowSuccessMessage(true);
      DataUsersContext.setTitleSuccessMessage("اطلاعات با موفقیت تغییر کرد");
      setTimeout(() => {
        DataUsersContext.setShowSuccessMessage(false);
      }, 4000);
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
                value={DataUsersContext.firstNameCheckout}
                onChange={(e) =>
                  DataUsersContext.setFirstNameCheckout(e.target.value)
                }
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
                value={DataUsersContext.lastNameCheckout}
                onChange={(e) =>
                  DataUsersContext.setLastNameCheckout(e.target.value)
                }
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
              value={DataUsersContext.loginFormUserNameOrEmailValue}
              onChange={(e) =>
                DataUsersContext.setLoginFormUserNameOrEmailValue(
                  e.target.value
                )
              }
              ref={UserNameOREmailEditAcountFormRef}
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
              value={DataUsersContext.emailCheckout}
              onChange={(e) =>
                DataUsersContext.setEmailCheckout(e.target.value)
              }
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
                <span>گذرواژه پیشین</span>
              </label>
              <input
                value={DataUsersContext.passwordCheckout}
                onChange={(e) =>
                  DataUsersContext.setPasswordCheckout(e.target.value)
                }
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
                <span>گذرواژه جدید</span>
              </label>
              <input
                type="text"
                value={DataUsersContext.resetPasswordEditAcountFormValue}
                onChange={(e) =>
                  DataUsersContext.setResetPasswordEditAcountFormValue(
                    e.target.value
                  )
                }
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
                type="text"
                value={DataUsersContext.repetPasswordEditAcountFormValue}
                onChange={(e) =>
                  DataUsersContext.setRepetPasswordEditAcountFormValue(
                    e.target.value
                  )
                }
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
