import React, { useContext, useState } from "react";
import DashboardEmptyRoutes from "../../../Components/DashboardAdmin/DashboardEmptyRoutes/DashboardEmptyRoutes";
import DataGridTabeleUsers from "../../../Components/DashboardAdmin/DataGridTabeleUsers/DataGridTabeleUsers";
import { UsersContext } from "../../../Contexts/UsersContext";
import useFetch from "../../../hooks/useFetch";

import "./DashboardUser.css";
export default function DashboardUser() {
  const DataUserContext = useContext(UsersContext);

  const { posts } = useFetch(
    "https://knifeshop-b9f2f-default-rtdb.firebaseio.com/users.json",
    DataUserContext.getuserData
  );

  return (
    <div>
      {posts.length ? (
        <>
          <div className="Users-Title">
            <h2>لیست کاربران</h2>
          </div>
          <DataGridTabeleUsers />
        </>
      ) : (
        <>
          <DashboardEmptyRoutes title="لیست کاربران خالی می باشد " />
        </>
      )}
    </div>
  );
}
