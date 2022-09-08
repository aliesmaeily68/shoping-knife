import React, { useContext, useState } from "react";
import "./HeaderTop.css";
import Logo from "./Logo";
import Search from "./Search";
import FixeHeader from "./FixeHeader";
import IconHeader from "./IconHeader";
import { BsCart2 } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { AllProductContext } from "../../Contexts/ProductContext";

export default function HeaderTop() {
  const [logoName, SetLogoName] = useState("LOGO");
  const [iconName1, SetIconName1] = useState(true);
  const DataContext =useContext(AllProductContext)

  return (
    <div className="Header-Top">
      {/* /////For media Max-Width>1024///// */}
      <div className="Container-HeaderTop">
        <div className="Wrapper-HeaderTop">
          <div className="Logo-HeaderTop">
            <Logo logoName={logoName} />
          </div>
          <div className="Search-HeaderTop">
            <Search />
          </div>
          <div className="Icons-HeaderTop">
            <IconHeader IconName={iconName1} />
          </div>
        </div>
      </div>

      {/* /////for media Max-Width<1024///// */}
      <div className="Container-HeaderTop-M1024">
        <div className="Wrapper-HeaderTop-M1024">
          <div className="BsList-HeaderTop-M1024">
            <BsList />
          </div>
          <div className="Logo-HeaderTop-M1024" >
            <Logo logoName={logoName} />
          </div>
          <div className="ShopingBag-HeaderTop-M1024">
            <BsCart2  onClick={()=>DataContext.setShowCartBag(true)}/>
            <span>{DataContext.cartConter}</span>
            <div className="Tooltip-ShopingBag-HeaderTop-M1024">سبد خرید</div>
          </div>
        </div>
        <FixeHeader />
      </div>
    </div>
  );
}
