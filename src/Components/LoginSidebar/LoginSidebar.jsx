import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import LoginForm from "./LoginForm/LoginForm";
import CreateAccount from "./CreateAccount/CreateAccount";
import "./LoginSidebar.css";
import { useContext } from "react";
import { UsersContext } from "../../Contexts/UsersContext";

export default function LoginSidebar() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <>
      {/**insert className Show-LoginSidebar for Showing LoginSidebar*/}
      <div
        className={`Container-LoginSidebar ${
          DataUsersContext.showLoginSidebar ? "Show-LoginSidebar" : ""
        }`}
      >
        <div className="Wrapper-LoginSidebar">
          <div className="Title-Close-LoginSidebar">
            <h2 className="Title-LoginSidebar">ورود</h2>
            <AiOutlineClose
              className="Close-LoginSidebar"
              onClick={()=>DataUsersContext.setShowLoginSidebar(false)}
            />
          </div>
          <LoginForm />
          <div className="Br-LoginSidebar"></div>
          <CreateAccount />
          <div className="Br-LoginSidebar"></div>
        </div>
      </div>
    </>
  );
}
