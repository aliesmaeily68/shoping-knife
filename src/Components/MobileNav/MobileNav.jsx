import React, { useContext } from "react";
import { AllMobileNavContext } from "../../Contexts/MobailNavDataContext";
import Search from "../Header/Search";
import { AiOutlineClose } from "react-icons/ai";
import MobileNavCategory from "../MobileNavCategory/MobileNavCategory";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu";
import "./MobileNav.css";

export default function MobileNav() {
  const DataMobileNavContext = useContext(AllMobileNavContext);
  return (
    <div
      className={`Container-MobileNav ${
        DataMobileNavContext.showMobileNav ? "Show-MobileNav" : ""
      }`}
    >
      <div className="Wrapper-MobileNav">
        <div className="Search-MobileNav">
          <Search />
          <div
            className="closeIcon-MobileNav"
            onClick={() => DataMobileNavContext.setShowMobileNav(false)}
          >
            <AiOutlineClose />
          </div>
        </div>
        <MobileNavCategory />
        <MobileNavMenu />
      </div>
      <div
        className="Wrapper-MobileNav-Bg"
        onClick={() => DataMobileNavContext.setShowMobileNav(false)}
      ></div>
    </div>
  );
}
