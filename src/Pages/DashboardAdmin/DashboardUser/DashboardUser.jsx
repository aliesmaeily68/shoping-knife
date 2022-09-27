import React from "react";
import DataGridTabeleUsers from "../../../Components/DashboardAdmin/DataGridTabeleUsers/DataGridTabeleUsers";
import DashboardEmptyRoutes from "../../../Components/DashboardAdmin/DashboardEmptyRoutes/DashboardEmptyRoutes";

export default function DashboardUser() {
  return (
    <>
      <div>
        <DashboardEmptyRoutes title="لیست کاربران خالی می باشد 😔" />
      </div>
      {/* <DataGridTabeleUsers /> */}
    </>
  );
}
