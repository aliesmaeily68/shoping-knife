import React from "react";
import "./RegisterForm.css";

export default function RegisterForm() {
  return (
    <div>
      <div className="Container-RegisterForm">
        <div className="Wrapper-RegisterForm">
          <form action="#">
            <div className="Name-RegisterForm">
              <label htmlFor="#">
                <span>نام کاربری </span>
                <span className="Star-RegisterForm">*</span>
              </label>
              <input type="text" />
            </div>
            <div className="Email-RegisterForm">
              <label htmlFor="#">
                <span>آدرس ایمیل </span>
                <span className="Star-RegisterForm">*</span>
              </label>
              <input type="text" />
            </div>
            <div className="password-RegisterForm">
              <label htmlFor="#">
                <span>رمز ورود</span>
                <span className="Star-RegisterForm">*</span>
              </label>
              <input type="password" />
            </div>
            <button className="Submit-RegisterForm">عضویت</button>
          </form>
        </div>
      </div>
    </div>
  );
}
