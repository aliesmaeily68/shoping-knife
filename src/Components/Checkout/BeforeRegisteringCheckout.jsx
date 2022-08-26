import React, { useState } from "react";

import './BeforeRegisteringCheckout.css'

export default function BeforeRegisteringCheckout() {
  const [showBeforeRegistering, setShowBeforeRegistering] = useState(false);
  return (
    <>
      {" "}
      <div className="Before-Registering">
        <span>قبلا ثبت نام کرده اید؟</span>
        <span
          className="Click-Before-Registering"
          onClick={() => setShowBeforeRegistering((p) => !p)}
        >
          برای ورود اینجا کلیک کنید
        </span>
        {/**insert className Container-Form-Before-Registering-Active  to showing form */}
        <div
          className={`Container-Form-Before-Registering ${
            showBeforeRegistering
              ? "Container-Form-Before-Registering-Active"
              : ""
          } `}
        >
          <form action="#">
            <p className="Paragraph-Form-Before-Registering">
              اگر قبلا از ما خرید کرده اید، لطفا جزییات را در کادرهای پایین وارد
              نمائید. اگر یک مشتری جدید هستید، لطفا بخش صورت حساب را ادامه دهید.
            </p>
            <div className="UserNameOrEmail-Before-Registering">
              <label htmlFor="">
                <span>نام کاربری یا آدرس ایمیل </span>
                <span className="Star-Before-Registering">*</span>
              </label>
              <input type="text" />
            </div>
            <div className="Password-Before-Registering">
              <label htmlFor="">
                <span>رمز ورود</span>
                <span className="Star-Before-Registering">*</span>
              </label>
              <input type="text" />
            </div>
            <button className="Btn-Before-Registering">ورود</button>
            <div className="Forget-RemembearMy-Before-Registering">
              <div className="RemembearMy-Before-Registering">
                <input
                  type="checkbox"
                  className="Checkbox-RemembearMy-Before-Registering"
                />
                <span>مرا به خاطر بسپار</span>
              </div>
              <span className="Forget-Before-Registering">
                رمز عبور را فراموش کرده اید؟
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
