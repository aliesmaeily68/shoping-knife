import React from "react";

import "./LoginForm.css";

export default function LoginForm() {
  return (
    <>
      <div className="Container-LoginForm">
        <div className="Wrapper-LoginForm">
          <form action="#">
            <div className="NameOrEmail-LoginForm">
              <label htmlFor="#">
                <span>نام کاربری یا آدرس ایمیل </span>
                <span className="Star-LoginForm">*</span>
              </label>
              <input type="text" />
            </div>
            <div className="password-LoginForm">
              <label htmlFor="#">
                <span>رمز ورود</span>
                <span className="Star-LoginForm">*</span>
              </label>
              <input type="password" />
            </div>
            <button className="Submit-LoginForm">ورود</button>
            <div className="Forget-Remember-LoginForm">
              <div className="Remember-LoginForm">
                <input type="checkbox" />
                <label htmlFor="#">
                  <span>مرا به خاطر بسپار</span>
                </label>
              </div>
              <span className="Forget-LoginForm">
                رمز عبور را فراموش کرده اید؟
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
