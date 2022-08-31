import React from "react";
import "./InfoContact.css";

export default function InfoContact() {
  return (
    <>
      <div className="Container-InfoContact">
        <div className="Wrapper-InfoContact">
          <span className='InfoContact'>اطلاعات درباره ما</span>
          <h1>برای سوالات خود با ما تماس بگیرید</h1>
          <form action="#">
            {" "}
            <div className="Name-Email-InfoContact">
              <div className="Name-InfoContact">
                <label htmlFor="">
                  <span>نام شما</span>
                </label>
                <input type="text" />
              </div>
              <div className="Email-InfoContact">
                <label htmlFor="">
                  <span>ایمیل شما</span>
                </label>
                <input type="text" />
              </div>
            </div>
            <div className="TellNumber-CompaniName-InfoContact">
              <div className="TellNumber-InfoContact">
                <label htmlFor="">
                  <span>شماره تماس </span>
                </label>
                <input type="text" />
              </div>
              <div className="CompaniName-InfoContact">
                <label htmlFor="">
                  <span>نام شرکت(اختیاری) </span>
                </label>
                <input type="text" />
              </div>
            </div>
            <div className="Message-InfoContact">
              <label htmlFor="">
                <span>پیام شما</span>
              </label>
              <textarea
                name="MessageInfoContact"
                id="MessageInfoContact"
                cols="10"
                rows="3"
              ></textarea>
            </div>
            <button className="Submit-InfoContact">ارسال</button>
          </form>
        </div>
      </div>
    </>
  );
}
