import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllProductContext } from "../../../Contexts/ProductContext";
import "./TotalInfo.css";

export default function TotalInfo() {
  const DataContext = useContext(AllProductContext);
  return (
    <>
      {DataContext.total === 0 || (
        <div className="Total-Info-BagCart">
          <div className="Total-BagCart">
            <div className="Lable-Total-BagCart">
              <span>جمع کل سبد خرید :</span>
            </div>
            <div className="Price-Total-BagCart">
              <span>{DataContext.total} تومان</span>
            </div>
          </div>
          <Link to={"/cart"}>
            <button
              className="Btn-Cart-BagCart"
              onClick={() => DataContext.setShowCartBag(false)}
            >
              مشاهده سبد خرید
            </button>
          </Link>
          <Link to={"/checkout"}>
            {" "}
            <button
              className="Checkout-BagCart"
              onClick={() => DataContext.setShowCartBag(false)}
            >
              تسویه حساب
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
