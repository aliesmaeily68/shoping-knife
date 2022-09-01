import React from "react";
import { useContext } from "react";
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { UsersContext } from "../../Contexts/UsersContext";
import "./RegisterForm.css";

export default function RegisterForm() {
  const DataUsersContext =useContext(UsersContext)
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
              {DataUsersContext.showPasswordRegisterForm ? (
                <div className="Eye-Password-RegisterForm">
                  <div className="Eye-RegisterForm">
                    <AiOutlineEyeInvisible
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordRegisterForm(false)
                      }
                    />
                  </div>
                  <input type="password" />
                </div>
              ) : (
                <div className="Eye-Password-RegisterForm">
                  <div className="Eye-RegisterForm">
                    <AiOutlineEye
                      size={20}
                      onClick={() =>
                        DataUsersContext.setShowPasswordRegisterForm(true)
                      }
                    />
                  </div>
                  <input type="text" />
                </div>
              )}
            </div>
            <button className="Submit-RegisterForm">عضویت</button>
          </form>
        </div>
      </div>
    </div>
  );
}
