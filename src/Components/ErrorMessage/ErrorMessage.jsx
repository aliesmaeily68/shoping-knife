import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UsersContext } from "../../Contexts/UsersContext";
import "./ErrorMessage.css";

export default function ErrorMessage() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <>
      {DataUsersContext.showErrorMessage && (
        <div className="Container-ErrorMessage">
          <div className="Wrapper-ErrorMessage">
            <div className="Title-ErrorMessage">
              {DataUsersContext.titleErrorMessage}
            </div>
            <AiOutlineClose
              className="Icon-ErrorMessage"
              onClick={() => DataUsersContext.setShowErrorMessage(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
