import React, { useContext } from "react";
import NotProduct from "./NotProduct/NotProduct";
import ProductInfo from "./ProductInfo/ProductInfo";
import TotalInfo from "./TotalInfo/TotalInfo";
import { IoIosClose } from "react-icons/io";
import "./BagCart.css";
import { AllProductContext } from "../../Contexts/ProductContext";

export default function BagCart() {
  const DataContext=useContext(AllProductContext)
  return (
    <>
    {/**insert className Show-BagCart to showing the BagCart */}
      <div className={`Container-BagCart ${DataContext.showCartBag ?'Show-BagCart' : ''}`}> 
        <div className="Wrapper-BagCart">
          <div className="Title-Close-BagCart">
            <div className="Title-BagCart">سبد خرید</div>
            <div className="Close-BagCart" onClick={()=>DataContext.setShowCartBag(false)}>
              <IoIosClose />
            </div>
          </div>
          <NotProduct />
          <div className="Product-BagCart">
            <ProductInfo />
            <TotalInfo />
          </div>
        </div>
      </div>
    </>
  );
}
