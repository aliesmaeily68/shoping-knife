import React, { useContext } from "react";
import HeaderTop from "./HeaderTop";
import NavBar from "./NavBar";
import "./Header.css";
import { UsersContext } from "../../Contexts/UsersContext";

export default function Header() {
  const DataUserContexte = useContext(UsersContext);
  return (
    <>
      {!DataUserContexte.showDashboardAdmin && (
        <header className="header">
          <HeaderTop />
          <NavBar />
        </header>
      )}
    </>
  );
}
