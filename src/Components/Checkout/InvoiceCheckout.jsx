import React from "react";
import './InvoiceCheckout.css'

export default function InvoiceCheckout() {
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
              <input type="text" />
            </div>
            <div className="LastName-Form-Checkout">
              {" "}
              <label htmlFor="">
                <span>نام خانوادگی</span>
                <span className="Star-Checkout">*</span>
              </label>
              <input type="text" />
            </div>
          </div>

          <div className="CompanyName-Checkout">
            <label htmlFor="">
              <span>نام شرکت (اختیاری)</span>
            </label>
            <input type="text" />
          </div>
          <div className="CountryName-Checkout">
            <label htmlFor="">
              <span>کشور </span>
              <span className="Star-Checkout">*</span>
            </label>
            <select
              name="CountryName"
              id="Country-Checkout"
            >
              <option value="Iran">ایران</option>
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
            >
              <option value="zanjan">زنجان</option>
              <option value="tehran">تهران</option>
              <option value="gazvin">قزوین</option>
            </select>
          </div>
          <div className="CityName-Checkout">
            <label htmlFor="">
              <span>شهر </span>
              <span className="Star-Checkout">*</span>
            </label>
            <input type="text" />
          </div>
          <div className="AddressName-Checkout">
            <label htmlFor="">
              <span>آدرس </span>
              <span className="Star-Checkout">*</span>
            </label>
            <input type="text" />
          </div>
          <div className="PostalCode-Checkout">
            <label htmlFor="">
              <span>کد پستی(بدون فاصله و با اعداد انگلیسی) </span>
              <span className="Star-Checkout">*</span>
            </label>
            <input type="text" />
          </div>
          <div className="TellNumber-Checkout">
            <label htmlFor="">
              <span>تلفن </span>
              <span className="Star-Checkout">*</span>
            </label>
            <input type="text" />
          </div>
          <div className="Email-Checkout">
            <label htmlFor="">
              <span>آدرس ایمیل </span>
              <span className="Star-Checkout">*</span>
            </label>
            <input type="text" />
          </div>
          <div className="UserName-Password-Checkout">
            <div className="UserName-Checkout">
              <label htmlFor="">
                <span>نام کاربری </span>
                <span className="Star-Checkout">*</span>
              </label>
              <input type="text" />
            </div>{" "}
            <div className="Password-Checkout">
              <label htmlFor="">
                <span>ایجاد کلمه عبور حساب کاربری </span>
                <span className="Star-Checkout">*</span>
              </label>
              <input type="text" />
            </div>
          </div>
          <div className="MoreInfo-Checkout">
            <h2>اطلاعات بیشتر</h2>
            <div className="Main-MoreInfo-Checkout">
              <label htmlFor="">
                <span> توضیحات سفارش (اختیاری)</span>
              </label>
              <textarea
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
