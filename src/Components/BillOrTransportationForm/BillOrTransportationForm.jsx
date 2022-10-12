import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";
import { UsersContext } from "../../Contexts/UsersContext";
import { userDatas } from "../../utils";
import "./BillOrTransportationForm.css";

export default function BillOrTransportationForm() {
  const DataUsersContext = useContext(UsersContext);
  const DataProductContext = useContext(AllProductContext);

  const FirstNameBillOrTransportationRef = useRef();
  const LastNameBillOrTransportationRef = useRef();
  const CityNameBillOrTransportationRef = useRef();
  const AddressNameBillOrTransportationRef = useRef();
  const PostalCodeBillOrTransportationRef = useRef();
  const TellNumberBillOrTransportationRef = useRef();
  const EmailBillOrTransportationRef = useRef();

  const BillOrTransportationFormHandler = (event) => {
    event.preventDefault();
    const RegexNameBillOrTransportation = /../;
    const RegexNotEmpty = /./;
    const RegexPostalCode = /^[0-9]{10}$/;
    const RegexTellNumber = /09(1[0-9]|3[1-9]|2[012]|9[012])([0-9]{7})/;
    const RegexEmail = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;

    if (
      RegexNameBillOrTransportation.test(DataUsersContext.firstNameCheckout)
    ) {
      DataUsersContext.setValidFirstNameCheckout(true);
    } else {
      DataUsersContext.setValidFirstNameCheckout(false);
    }

    if (RegexNameBillOrTransportation.test(DataUsersContext.lastNameCheckout)) {
      DataUsersContext.setValidLastNameCheckout(true);
    } else {
      DataUsersContext.setValidLastNameCheckout(false);
    }

    if (RegexNotEmpty.test(DataUsersContext.cityNameCheckout)) {
      DataUsersContext.setValidCityNameCheckout(true);
    } else {
      DataUsersContext.setValidCityNameCheckout(false);
    }

    if (RegexNotEmpty.test(DataUsersContext.addressNameCheckout)) {
      DataUsersContext.setValidAddressNameCheckout(true);
    } else {
      DataUsersContext.setValidAddressNameCheckout(false);
    }

    if (RegexPostalCode.test(DataUsersContext.postalCodeCheckout)) {
      DataUsersContext.setValidPostalCodeCheckout(true);
    } else {
      DataUsersContext.setValidPostalCodeCheckout(false);
    }

    if (RegexTellNumber.test(DataUsersContext.tellNumberCheckout)) {
      DataUsersContext.setValidTellNumberCheckout(true);
    } else {
      DataUsersContext.setValidTellNumberCheckout(false);
    }

    if (RegexEmail.test(DataUsersContext.emailCheckout)) {
      DataUsersContext.setValidEmailCheckout(true);
    } else {
      DataUsersContext.setValidEmailCheckout(false);
    }
    if (
      RegexNameBillOrTransportation.test(DataUsersContext.firstNameCheckout) &&
      RegexNameBillOrTransportation.test(DataUsersContext.lastNameCheckout) &&
      RegexNotEmpty.test(DataUsersContext.cityNameCheckout) &&
      RegexNotEmpty.test(DataUsersContext.addressNameCheckout) &&
      RegexPostalCode.test(DataUsersContext.postalCodeCheckout) &&
      RegexTellNumber.test(DataUsersContext.tellNumberCheckout) &&
      RegexEmail.test(DataUsersContext.emailCheckout)
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
        password: DataUsersContext.passwordCheckout,
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
    }
  };

  return (
    <>
      <div className="Container-BillOrTransportation">
        <form
          action="#"
          onSubmit={(event) => BillOrTransportationFormHandler(event)}
        >
          <div className="FirstName-LastName-Form-BillOrTransportation">
            <div className="FirstName-Form-BillOrTransportation">
              <label htmlFor="">
                <span>نام</span>
                <span className="Star-BillOrTransportation">*</span>
              </label>
              <input
                value={DataUsersContext.firstNameCheckout}
                type="text"
                ref={FirstNameBillOrTransportationRef}
                onChange={(e) =>
                  DataUsersContext.setFirstNameCheckout(e.target.value)
                }
                className={`${
                  DataUsersContext.validFirstNameBillOrTransportation
                    ? ""
                    : "ValidMessage-Input-FirstName-BillOrTransportation"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setValidFirstNameBillOrTransportation(true)
                }
              />
              <span
                className={` ${
                  DataUsersContext.validFirstNameBillOrTransportation
                    ? "ValidMessage-FirstName-BillOrTransportation"
                    : "NotValidMessage-FirstName-BillOrTransportation"
                }`}
              >
                نام نمی تواند کمتر از دو حرف باشد
              </span>
            </div>

            <div className="LastName-Form-BillOrTransportation">
              {" "}
              <label htmlFor="">
                <span>نام خانوادگی</span>
                <span className="Star-BillOrTransportation">*</span>
              </label>
              <input
                value={DataUsersContext.lastNameCheckout}
                type="text"
                ref={LastNameBillOrTransportationRef}
                onChange={(e) =>
                  DataUsersContext.setLastNameCheckout(e.target.value)
                }
                className={`${
                  DataUsersContext.validLastNameBillOrTransportation
                    ? ""
                    : "ValidMessage-Input-LastName-BillOrTransportation"
                }`}
                onKeyDown={() =>
                  DataUsersContext.setValidLastNameBillOrTransportation(true)
                }
              />
              <span
                className={` ${
                  DataUsersContext.validLastNameBillOrTransportation
                    ? "ValidMessage-LastName-BillOrTransportation"
                    : "NotValidMessage-LastName-BillOrTransportation"
                }`}
              >
                نام خانوادگی نمی تواند کمتر از دو حرف باشد
              </span>
            </div>
          </div>

          <div className="CompanyName-BillOrTransportation">
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

          <div className="CountryName-BillOrTransportation">
            <label htmlFor="">
              <span>کشور </span>
              <span className="Star-BillOrTransportation">*</span>
            </label>
            <select
              name="CountryName"
              id="Country-BillOrTransportation"
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

          <div className="StateName-BillOrTransportation">
            <label htmlFor="">
              <span>استان </span>
              <span className="Star-BillOrTransportation">*</span>
            </label>
            <select
              name="CountryName"
              id="State-BillOrTransportation"
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

          <div className="CityName-BillOrTransportation">
            <label htmlFor="">
              <span>شهر </span>
              <span className="Star-BillOrTransportation">*</span>
            </label>
            <input
              value={DataUsersContext.cityNameCheckout}
              type="text"
              ref={CityNameBillOrTransportationRef}
              onChange={(e) =>
                DataUsersContext.setCityNameCheckout(e.target.value)
              }
              className={`${
                DataUsersContext.validCityNameBillOrTransportation
                  ? ""
                  : "ValidMessage-Input-CityName-BillOrTransportation"
              }`}
              onKeyDown={() =>
                DataUsersContext.setValidCityNameBillOrTransportation(true)
              }
            />
            <span
              className={` ${
                DataUsersContext.validCityNameBillOrTransportation
                  ? "ValidMessage-CityName-BillOrTransportation"
                  : "NotValidMessage-CityName-BillOrTransportation"
              }`}
            >
              فیلد مورد نظر را پر نمایید
            </span>
          </div>

          <div className="AddressName-BillOrTransportation">
            <label htmlFor="">
              <span>آدرس </span>
              <span className="Star-BillOrTransportation">*</span>
            </label>
            <input
              value={DataUsersContext.addressNameCheckout}
              type="text"
              ref={AddressNameBillOrTransportationRef}
              onChange={(e) =>
                DataUsersContext.setAddressNameCheckout(e.target.value)
              }
              className={`${
                DataUsersContext.validAddressNameBillOrTransportation
                  ? ""
                  : "ValidMessage-Input-AddressName-BillOrTransportation"
              }`}
              onKeyDown={() =>
                DataUsersContext.setValidAddressNameBillOrTransportation(true)
              }
            />
            <span
              className={` ${
                DataUsersContext.validAddressNameBillOrTransportation
                  ? "ValidMessage-AddressName-BillOrTransportation"
                  : "NotValidMessage-AddressName-BillOrTransportation"
              }`}
            >
              فیلد مورد نظر را پر نمایید
            </span>
          </div>

          <div className="PostalCode-BillOrTransportation">
            <label htmlFor="">
              <span>کد پستی(بدون فاصله و با اعداد انگلیسی) </span>
              <span className="Star-BillOrTransportation">*</span>
            </label>
            <input
              value={DataUsersContext.postalCodeCheckout}
              type="text"
              ref={PostalCodeBillOrTransportationRef}
              onChange={(e) =>
                DataUsersContext.setPostalCodeCheckout(e.target.value)
              }
              className={`${
                DataUsersContext.validPostalCodeBillOrTransportation
                  ? ""
                  : "ValidMessage-Input-PostalCode-BillOrTransportation"
              }`}
              onKeyDown={() =>
                DataUsersContext.setValidPostalCodeBillOrTransportation(true)
              }
            />
            <span
              className={` ${
                DataUsersContext.validPostalCodeBillOrTransportation
                  ? "ValidMessage-PostalCode-BillOrTransportation"
                  : "NotValidMessage-PostalCode-BillOrTransportation"
              }`}
            >
              کدپستی وارد شده صحیح نمی باشد
            </span>
          </div>

          <div className="TellNumber-BillOrTransportation">
            <label htmlFor="">
              <span>تلفن </span>
              <span className="Star-BillOrTransportation">*</span>
            </label>
            <input
              value={DataUsersContext.tellNumberCheckout}
              type="text"
              ref={TellNumberBillOrTransportationRef}
              onChange={(e) =>
                DataUsersContext.setTellNumberCheckout(e.target.value)
              }
              className={`${
                DataUsersContext.validTellNumberBillOrTransportation
                  ? ""
                  : "ValidMessage-Input-TellNumber-BillOrTransportation"
              }`}
              onKeyDown={() =>
                DataUsersContext.setValidTellNumberBillOrTransportation(true)
              }
            />
            <span
              className={` ${
                DataUsersContext.validTellNumberBillOrTransportation
                  ? "ValidMessage-TellNumber-BillOrTransportation"
                  : "NotValidMessage-TellNumber-BillOrTransportation"
              }`}
            >
              شماره وارد شده صحیح نمی باشد
            </span>
          </div>

          <div className="Email-BillOrTransportation">
            <label htmlFor="">
              <span>آدرس ایمیل </span>
              <span className="Star-BillOrTransportation">*</span>
            </label>
            <input
              value={DataUsersContext.emailCheckout}
              type="text"
              ref={EmailBillOrTransportationRef}
              onChange={(e) =>
                DataUsersContext.setEmailCheckout(e.target.value)
              }
              className={`${
                DataUsersContext.validEmailBillOrTransportation
                  ? ""
                  : "ValidMessage-Input-Email-BillOrTransportation"
              }`}
              onKeyDown={() =>
                DataUsersContext.setValidEmailBillOrTransportation(true)
              }
            />
            <span
              className={` ${
                DataUsersContext.validEmailBillOrTransportation
                  ? "ValidMessage-Email-BillOrTransportation"
                  : "NotValidMessage-Email-BillOrTransportation"
              }`}
            >
              ایمیل وارد شده صحیح نمی باشد
            </span>
          </div>

          <button className="Btn-BillOrTransportationForm">ذخیره آدرس</button>
        </form>
      </div>
    </>
  );
}
