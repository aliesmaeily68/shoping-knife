import React, { useEffect } from "react";
import "./LostAccount.css";

export default function LostAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="Container-LostAccount">
        <div className="Wrapper-LostAccount">
          <h1 className="Title-LostAccount">
            گذرواژه خود را فراموش کرده اید؟ نام کاربری یا ایمیل خود را وارد
            کنید. یک لینک برای ساختن گذرواژه جدید در ایمیل خود دریافت خواهید
            کرد.
          </h1>
          <hr className="hr-LostAccount" />
          <div className="NameOrEmail-LostAccount">
            <label htmlFor="#">
              <span>نام کاربری یا آدرس ایمیل </span>
            </label>
            <input type="text" />
          </div>
          <button className="Submit-LostAccount">بازگردانی گذرواژه</button>
        </div>
      </div>
    </>
  );
}
