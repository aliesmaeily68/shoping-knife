import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../Contexts/UsersContext";

export default function DashboardAdmin() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <div>
      DashboardAdmin
      <Link
        to="/"
        onClick={() => DataUsersContext.setShowDashboardAdmin(false)}
      >
        <button>بازگشت به خانه</button>
      </Link>
    </div>
  );
}
