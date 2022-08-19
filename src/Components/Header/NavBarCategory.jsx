import React, { useContext } from "react";
import "./NavBarCategory.css";
import { BsList } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Categories from "../Categories/Categories";
import { AllProductContext } from "../../Contexts/ProductContext";

export default function NavBarCategory() {
  const DataContext = useContext(AllProductContext);

  const ShowCategoryMenu = () => {
    DataContext.setShowCategories((prev) => !prev);
  };
  return (
    <div className="NavBar-Category" >
      <div className="Wrapper-NavbarCategory" onClick={ShowCategoryMenu}>
      <div className="NavBar-Category-right">
        <BsList className="Main-Icon-NavBar" />
        <span>دسته بندی محصولات</span>
      </div>
      <div className="NavBar-Category-left">
        {DataContext.showCategories ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowDown />
        )}
      </div>
    
    </div>
    <div className="Categories">
        <Categories />
      </div>
    </div>
  );
}
