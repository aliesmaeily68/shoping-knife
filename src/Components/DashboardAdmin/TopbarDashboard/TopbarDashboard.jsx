import React, { useContext } from "react";
import { UsersContext } from "../../../Contexts/UsersContext";

import "./TopbarDashboard.css";

export default function TopbarDashboard() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <div className="Container-TopbarDashboard">
      <div className="Wrapper-TopbarDashboard">
        <div className="User-Info-TopbarDashboard">
          <img src="../Image/ali.png" alt="user img" />
          <div>
            <h2>علی اسماعیلی</h2>
            <h2>مدیر سایت</h2>
          </div>
        </div>
        <h4>
          سلام <span>{DataUsersContext.loginFormUserNameOrEmailValue}</span>{" "}
          عزیز به پنل مدیریت خوش آمدی
        </h4>
      </div>
    </div>
  );
}
