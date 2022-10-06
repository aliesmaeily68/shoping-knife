import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UsersContext } from "../../Contexts/UsersContext";
import "./SuccessMessage.css";

export default function SuccessMessage() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <>
      {DataUsersContext.showSuccessMessage && (
        <div className="Container-SuccessMessage">
          <div className="Wrapper-SuccessMessage">
            <div className="Title-SuccessMessage">
              {DataUsersContext.titleSuccessMessage}
            </div>
            <AiOutlineClose
              className="Icon-SuccessMessage"
              onClick={() => DataUsersContext.setShowSuccessMessage(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
