import React, { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { UsersContext } from "../../Contexts/UsersContext";
import "./InvoiceCheckout.css";

export default function InvoiceCheckout() {
  const DataUsersContext = useContext(UsersContext);

  const FirstNameCheckoutRef = useRef();
  const LastNameCheckoutRef = useRef();
  const CityNameCheckoutRef = useRef();
  const AddressNameCheckoutRef = useRef();
  const PostalCodeCheckoutRef = useRef();
  const TellNumberCheckoutRef = useRef();
  const EmailCheckoutRef = useRef();
  const PasswordCheckoutRef = useRef();
  const UserNameCheckoutRef = useRef();

  return (
    <>
      <div className="Edit-Invoice-Checkout">
        <div className="Title-Edit-Invoice-Checkout">
          <h1>جزئیات صورتحساب</h1>
        </div>
        <form action="#">
          <div className="FirstName-LastName-Form-Checkout">
            <div className="FirstName-Form-Checkout">
              <label htmlFor="">
                <span>نام</span>
                <span className="Star-Checkout">*</span>
              </label>
              <input
                value={DataUsersContext.firstNameCheckout}
                type="text"
                ref={FirstNameCheckoutRef}
                onChange={(e) =>
                  DataUsersContext.setFirstNameCheckout(e.target.value)
                }
                className={`${
                  DataUsersContext.validFirstNameCheckout
                    ? ""
                    : "ValidMessage-Input-FirstName-Checkout"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setValidFirstNameCheckout(true)
                }
              />
              <span
                className={` ${
                  DataUsersContext.validFirstNameCheckout
                    ? "ValidMessage-FirstName-Checkout"
                    : "NotValidMessage-FirstName-Checkout"
                }`}
              >
                نام نمی تواند کمتر از دو حرف باشد
              </span>
            </div>

            <div className="LastName-Form-Checkout">
              {" "}
              <label htmlFor="">
                <span>نام خانوادگی</span>
                <span className="Star-Checkout">*</span>
              </label>
              <input
                value={DataUsersContext.lastNameCheckout}
                type="text"
                ref={LastNameCheckoutRef}
                onChange={(e) =>
                  DataUsersContext.setLastNameCheckout(e.target.value)
                }
                className={`${
                  DataUsersContext.validLastNameCheckout
                    ? ""
                    : "ValidMessage-Input-LastName-Checkout"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setValidLastNameCheckout(true)
                }
              />
              <span
                className={` ${
                  DataUsersContext.validLastNameCheckout
                    ? "ValidMessage-LastName-Checkout"
                    : "NotValidMessage-LastName-Checkout"
                }`}
              >
                نام خانوادگی نمی تواند کمتر از دو حرف باشد
              </span>
            </div>
          </div>

          <div className="CompanyName-Checkout">
            <label htmlFor="">
              <span>نام شرکت (اختیاری)</span>
            </label>
            <input
              type="text"
              value={DataUsersContext.companyNameCheckout}
              onChange={(e) =>
                DataUsersContext.setCompanyNameCheckout(e.target.value)
              }
            />
          </div>

          <div className="CountryName-Checkout">
            <label htmlFor="">
              <span>کشور </span>
              <span className="Star-Checkout">*</span>
            </label>
            <select
              name="CountryName"
              id="Country-Checkout"
              value={DataUsersContext.countryNameCheckout}
              onChange={(e) =>
                DataUsersContext.setCountryNameCheckout(e.target.value)
              }
            >
              <option value="ایران">ایران</option>
              <option value="ترکیه">ترکیه</option>
              <option value="کانادا">کانادا</option>
              <option value="ژاپن">ژاپن</option>
            </select>
          </div>

          <div className="StateName-Checkout">
            <label htmlFor="">
              <span>استان </span>
              <span className="Star-Checkout">*</span>
            </label>
            <select
              name="CountryName"
              id="State-Checkout"
              value={DataUsersContext.stateNameCheckout}
              onChange={(e) =>
                DataUsersContext.setStateNameCheckout(e.target.value)
              }
            >
              <option value="زنجان">زنجان</option>
              <option value="تهران">تهران</option>
              <option value="قزوین">قزوین</option>
            </select>
          </div>

          <div className="CityName-Checkout">
            <label htmlFor="">
              <span>شهر </span>
              <span className="Star-Checkout">*</span>
            </label>
            <input
              value={DataUsersContext.cityNameCheckout}
              type="text"
              ref={CityNameCheckoutRef}
              onChange={(e) =>
                DataUsersContext.setCityNameCheckout(e.target.value)
              }
              className={`${
                DataUsersContext.validCityNameCheckout
                  ? ""
                  : "ValidMessage-Input-CityName-Checkout"
              }`}
              onKeyDown={() => DataUsersContext.setValidCityNameCheckout(true)}
            />
            <span
              className={` ${
                DataUsersContext.validCityNameCheckout
                  ? "ValidMessage-CityName-Checkout"
                  : "NotValidMessage-CityName-Checkout"
              }`}
            >
              فیلد مورد نظر را پر نمایید
            </span>
          </div>

          <div className="AddressName-Checkout">
            <label htmlFor="">
              <span>آدرس </span>
              <span className="Star-Checkout">*</span>
            </label>
            <input
              value={DataUsersContext.addressNameCheckout}
              type="text"
              ref={AddressNameCheckoutRef}
              onChange={(e) =>
                DataUsersContext.setAddressNameCheckout(e.target.value)
              }
              className={`${
                DataUsersContext.validAddressNameCheckout
                  ? ""
                  : "ValidMessage-Input-AddressName-Checkout"
              }`}
              onKeyDown={() =>
                DataUsersContext.setValidAddressNameCheckout(true)
              }
            />
            <span
              className={` ${
                DataUsersContext.validAddressNameCheckout
                  ? "ValidMessage-AddressName-Checkout"
                  : "NotValidMessage-AddressName-Checkout"
              }`}
            >
              فیلد مورد نظر را پر نمایید
            </span>
          </div>

          <div className="PostalCode-Checkout">
            <label htmlFor="">
              <span>کد پستی(بدون فاصله و با اعداد انگلیسی) </span>
              <span className="Star-Checkout">*</span>
            </label>
            <input
              value={DataUsersContext.postalCodeCheckout}
              type="text"
              ref={PostalCodeCheckoutRef}
              onChange={(e) =>
                DataUsersContext.setPostalCodeCheckout(e.target.value)
              }
              className={`${
                DataUsersContext.validPostalCodeCheckout
                  ? ""
                  : "ValidMessage-Input-PostalCode-Checkout"
              }`}
              onKeyDown={() =>
                DataUsersContext.setValidPostalCodeCheckout(true)
              }
            />
            <span
              className={` ${
                DataUsersContext.validPostalCodeCheckout
                  ? "ValidMessage-PostalCode-Checkout"
                  : "NotValidMessage-PostalCode-Checkout"
              }`}
            >
              کدپستی وارد شده صحیح نمی باشد
            </span>
          </div>

          <div className="TellNumber-Checkout">
            <label htmlFor="">
              <span>تلفن </span>
              <span className="Star-Checkout">*</span>
            </label>
            <input
              value={DataUsersContext.tellNumberCheckout}
              type="text"
              ref={TellNumberCheckoutRef}
              onChange={(e) =>
                DataUsersContext.setTellNumberCheckout(e.target.value)
              }
              className={`${
                DataUsersContext.validTellNumberCheckout
                  ? ""
                  : "ValidMessage-Input-TellNumber-Checkout"
              }`}
              onKeyDown={() =>
                DataUsersContext.setValidTellNumberCheckout(true)
              }
            />
            <span
              className={` ${
                DataUsersContext.validTellNumberCheckout
                  ? "ValidMessage-TellNumber-Checkout"
                  : "NotValidMessage-TellNumber-Checkout"
              }`}
            >
              شماره وارد شده صحیح نمی باشد
            </span>
          </div>

          {!DataUsersContext.isUserInData && (
            <div className="Email-UserName-Password-Checkout">
              <div className="UserName-Checkout">
                <label htmlFor="">
                  <span>نام کاربری </span>
                  <span className="Star-Checkout">*</span>
                </label>
                <input
                  value={DataUsersContext.UserNameCheckout}
                  type="text"
                  ref={UserNameCheckoutRef}
                  onChange={(e) =>
                    DataUsersContext.setUserNameCheckout(e.target.value)
                  }
                  className={`${
                    DataUsersContext.validUserNameCheckout
                      ? ""
                      : "ValidMessage-Input-UserName-Checkout"
                  }`}
                  onKeyDown={() =>
                    DataUsersContext.setValidUserNameCheckout(true)
                  }
                />
                <span
                  className={` ${
                    DataUsersContext.validUserNameCheckout
                      ? "ValidMessage-UserName-Checkout"
                      : "NotValidMessage-UserName-Checkout"
                  }`}
                >
                  از اعداد و حروف انگلیسی استفاده نمایید
                </span>
              </div>

              <div className="Email-Checkout">
                <label htmlFor="">
                  <span>آدرس ایمیل </span>
                  <span className="Star-Checkout">*</span>
                </label>
                <input
                  value={DataUsersContext.emailCheckout}
                  type="text"
                  ref={EmailCheckoutRef}
                  onChange={(e) =>
                    DataUsersContext.setEmailCheckout(e.target.value)
                  }
                  className={`${
                    DataUsersContext.validEmailCheckout
                      ? ""
                      : "ValidMessage-Input-Email-Checkout"
                  }`}
                  onKeyDown={() => DataUsersContext.setValidEmailCheckout(true)}
                />
                <span
                  className={` ${
                    DataUsersContext.validEmailCheckout
                      ? "ValidMessage-Email-Checkout"
                      : "NotValidMessage-Email-Checkout"
                  }`}
                >
                  ایمیل وارد شده صحیح نمی باشد
                </span>
              </div>

              <div className="Password-Checkout">
                <label htmlFor="">
                  <span>ایجاد کلمه عبور حساب کاربری </span>
                  <span className="Star-Checkout">*</span>
                </label>
                <input
                  value={DataUsersContext.passwordCheckout}
                  type="text"
                  ref={PasswordCheckoutRef}
                  onChange={(e) =>
                    DataUsersContext.setPasswordCheckout(e.target.value)
                  }
                  className={`${
                    DataUsersContext.validPasswordCheckout
                      ? ""
                      : "ValidMessage-Input-Password-Checkout"
                  }`}
                  onKeyDown={() =>
                    DataUsersContext.setValidPasswordCheckout(true)
                  }
                />
                <span
                  className={` ${
                    DataUsersContext.validPasswordCheckout
                      ? "ValidMessage-Password-Checkout"
                      : "NotValidMessage-Password-Checkout"
                  }`}
                >
                  گذرواژه باید حداقل 6 کاراکتر و شامل حروف بزرگ و کوچک انگلیسی و
                  عدد باشد
                </span>
              </div>
            </div>
          )}

          <div className="MoreInfo-Checkout">
            <h2>اطلاعات بیشتر</h2>
            <div className="Main-MoreInfo-Checkout">
              <label htmlFor="">
                <span> توضیحات سفارش (اختیاری)</span>
              </label>
              <textarea
                value={DataUsersContext.moreInfoCheckout}
                onChange={(e) =>
                  DataUsersContext.setMoreInfoCheckout(e.target.value)
                }
                name="MoreInfo"
                id="MoreInfo"
                cols="30"
                rows="10"
                placeholder="یادداشت ها درباره سفارش شما ،برای مثال نکات مهم درباره نحوه تحویل سفارش"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
