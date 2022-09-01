import React, { useState } from "react";
import LoginForm from "../LoginSidebar/LoginForm/LoginForm";

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
            <p className="Paragraph-Form-Before-Registering">
              اگر قبلا از ما خرید کرده اید، لطفا جزییات را در کادرهای پایین وارد
              نمائید. اگر یک مشتری جدید هستید، لطفا بخش صورت حساب را ادامه دهید.
            </p>
            <LoginForm />
        </div>
      </div>
    </>
  );
}
