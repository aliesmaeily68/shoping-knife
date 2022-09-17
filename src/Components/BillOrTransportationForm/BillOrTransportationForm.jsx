
import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { UsersContext } from "../../Contexts/UsersContext";
import "./BillOrTransportationForm.css";

export default function BillOrTransportationForm() {
  const DataUsersContext = useContext(UsersContext);

  const FirstNameBillOrTransportationRef = useRef();
  const LastNameBillOrTransportationRef = useRef();
  const CityNameBillOrTransportationRef = useRef();
  const AddressNameBillOrTransportationRef = useRef();
  const PostalCodeBillOrTransportationRef = useRef();
  const TellNumberBillOrTransportationRef = useRef();
  const EmailBillOrTransportationRef = useRef();

  const BillOrTransportationFormHandler=event=>{
    event.preventDefault()
    const RegexNameBillOrTransportation = /../;
    const RegexNotEmpty = /./;
    const RegexPostalCode = /^[0-9]{10}$/;
    const RegexTellNumber = /09(1[0-9]|3[1-9]|2[012]|9[012])([0-9]{7})/;
    const RegexEmail = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;

    if (RegexNameBillOrTransportation.test(DataUsersContext.firstNameBillOrTransportation)) {
      DataUsersContext.setValidFirstNameBillOrTransportation(true);
    } else {
      DataUsersContext.setValidFirstNameBillOrTransportation(false);
    }

    if (RegexNameBillOrTransportation.test(DataUsersContext.lastNameBillOrTransportation)) {
      DataUsersContext.setValidLastNameBillOrTransportation(true);
    } else {
      DataUsersContext.setValidLastNameBillOrTransportation(false);
    }

    if (RegexNotEmpty.test(DataUsersContext.cityNameBillOrTransportation)) {
      DataUsersContext.setValidCityNameBillOrTransportation(true);
    } else {
      DataUsersContext.setValidCityNameBillOrTransportation(false);
    }

    if (RegexNotEmpty.test(DataUsersContext.addressNameBillOrTransportation)) {
      DataUsersContext.setValidAddressNameBillOrTransportation(true);
    } else {
      DataUsersContext.setValidAddressNameBillOrTransportation(false);
    }

    if (RegexPostalCode.test(DataUsersContext.postalCodeBillOrTransportation)) {
      DataUsersContext.setValidPostalCodeBillOrTransportation(true);
    } else {
      DataUsersContext.setValidPostalCodeBillOrTransportation(false);
    }

    if (RegexTellNumber.test(DataUsersContext.tellNumberBillOrTransportation)) {
      DataUsersContext.setValidTellNumberBillOrTransportation(true);
    } else {
      DataUsersContext.setValidTellNumberBillOrTransportation(false);
    }

    if (RegexEmail.test(DataUsersContext.emailBillOrTransportation)) {
      DataUsersContext.setValidEmailBillOrTransportation(true);
    } else {
      DataUsersContext.setValidEmailBillOrTransportation(false);
    }
    if (
      DataUsersContext.validFirstNameBillOrTransportation &&
      DataUsersContext.validLastNameBillOrTransportation &&
      DataUsersContext.validCityNameBillOrTransportation &&
      DataUsersContext.validAddressNameBillOrTransportation &&
      DataUsersContext.validPostalCodeBillOrTransportation &&
      DataUsersContext.validTellNumberBillOrTransportation &&
      DataUsersContext.validEmailBillOrTransportation
    ) {
      DataUsersContext.setFirstNameBillOrTransportation("");
      DataUsersContext.setLastNameBillOrTransportation("");
      DataUsersContext.setCityNameBillOrTransportation("");
      DataUsersContext.setAddressNameBillOrTransportation("");
      DataUsersContext.setPostalCodeBillOrTransportation("");
      DataUsersContext.setTellNumberBillOrTransportation("");
      DataUsersContext.setEmailBillOrTransportation("");
    }
  }

  return (
    <>
      <div className="Container-BillOrTransportation">
        <form action="#" onSubmit={(event)=>BillOrTransportationFormHandler(event)}>
          <div className="FirstName-LastName-Form-BillOrTransportation">
            <div className="FirstName-Form-BillOrTransportation">
              <label htmlFor="">
                <span>نام</span>
                <span className="Star-BillOrTransportation">*</span>
              </label>
              <input
                value={DataUsersContext.firstNameBillOrTransportation}
                type="text"
                ref={FirstNameBillOrTransportationRef}
                onChange={(e) =>
                  DataUsersContext.setFirstNameBillOrTransportation(e.target.value)
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
                value={DataUsersContext.lastNameBillOrTransportation}
                type="text"
                ref={LastNameBillOrTransportationRef}
                onChange={(e) =>
                  DataUsersContext.setLastNameBillOrTransportation(e.target.value)
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
            <input type="text" />
          </div>

          <div className="CountryName-BillOrTransportation">
            <label htmlFor="">
              <span>کشور </span>
              <span className="Star-BillOrTransportation">*</span>
            </label>
            <select name="CountryName" id="Country-BillOrTransportation">
              <option value="Iran">ایران</option>
            </select>
          </div>

          <div className="StateName-BillOrTransportation">
            <label htmlFor="">
              <span>استان </span>
              <span className="Star-BillOrTransportation">*</span>
            </label>
            <select name="CountryName" id="State-BillOrTransportation">
              <option value="zanjan">زنجان</option>
              <option value="tehran">تهران</option>
              <option value="gazvin">قزوین</option>
            </select>
          </div>

          <div className="CityName-BillOrTransportation">
            <label htmlFor="">
              <span>شهر </span>
              <span className="Star-BillOrTransportation">*</span>
            </label>
            <input
              value={DataUsersContext.cityNameBillOrTransportation}
              type="text"
              ref={CityNameBillOrTransportationRef}
              onChange={(e) =>
                DataUsersContext.setCityNameBillOrTransportation(e.target.value)
              }
              className={`${
                DataUsersContext.validCityNameBillOrTransportation
                  ? ""
                  : "ValidMessage-Input-CityName-BillOrTransportation"
              }`}
              onKeyDown={() => DataUsersContext.setValidCityNameBillOrTransportation(true)}
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
              value={DataUsersContext.addressNameBillOrTransportation}
              type="text"
              ref={AddressNameBillOrTransportationRef}
              onChange={(e) =>
                DataUsersContext.setAddressNameBillOrTransportation(e.target.value)
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
              value={DataUsersContext.postalCodeBillOrTransportation}
              type="text"
              ref={PostalCodeBillOrTransportationRef}
              onChange={(e) =>
                DataUsersContext.setPostalCodeBillOrTransportation(e.target.value)
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
              value={DataUsersContext.tellNumberBillOrTransportation}
              type="text"
              ref={TellNumberBillOrTransportationRef}
              onChange={(e) =>
                DataUsersContext.setTellNumberBillOrTransportation(e.target.value)
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
              value={DataUsersContext.emailBillOrTransportation}
              type="text"
              ref={EmailBillOrTransportationRef}
              onChange={(e) =>
                DataUsersContext.setEmailBillOrTransportation(e.target.value)
              }
              className={`${
                DataUsersContext.validEmailBillOrTransportation
                  ? ""
                  : "ValidMessage-Input-Email-BillOrTransportation"
              }`}
              onKeyDown={() => DataUsersContext.setValidEmailBillOrTransportation(true)}
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
