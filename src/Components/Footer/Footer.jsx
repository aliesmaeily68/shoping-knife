import React from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterBody from "./FooterBody/FooterBody";
import FooterBottom from "./FooterBottom/FooterBottom";
import { useContext } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";
import { UsersContext } from "../../Contexts/UsersContext";
import "./Footer.css";

export default function Footer() {
  const DataContext = useContext(AllProductContext);
  const DataUserContexte = useContext(UsersContext);
  const MainFooterHandler = () => {
    DataContext.setShowCartBag(false);
    DataUserContexte.setShowLoginSidebar(false);
    DataContext.setShowCategories(false);
  };
  return (
    <>
      {!DataUserContexte.showDashboardAdmin && (
        <div className="Main-Footer" onClick={MainFooterHandler}>
          <FooterTop />
          <FooterBody />
          <FooterBottom />
        </div>
      )}
    </>
  );
}
