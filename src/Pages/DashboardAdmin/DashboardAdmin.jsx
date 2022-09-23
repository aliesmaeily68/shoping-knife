import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UsersContext } from "../../Contexts/UsersContext";
import TopbarDashboard from "../../Components/DashboardAdmin/TopbarDashboard/TopbarDashboard";
import SidebarDashboard from "../../Components/DashboardAdmin/SidebarDashboard/SidebarDashboard";

import "./DashboardAdmin.css";
export default function DashboardAdmin() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <div>
      <div className="Container-DashboardAdmin">
        <div className="Wrapper-DashboardAdmin">
          <div className="Sidebar-DashboardAdmin">
            {" "}
            <SidebarDashboard />
          </div>

          <div className="Topbar-Routes-DashboardAdmin">
            <TopbarDashboard />
            <div className="Container-Routes-Dashboard">
                <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
