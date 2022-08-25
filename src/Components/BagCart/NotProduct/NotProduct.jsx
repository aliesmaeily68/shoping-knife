import React, { useContext } from "react";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AllProductContext } from "../../../Contexts/ProductContext";
import "./NotProduct.css";

export default function NotProduct() {
  const DataContext = useContext(AllProductContext);
  return (
    <>
   
      {(DataContext.userCart.length === 0 || DataContext.total == 0 )&& (
          <div className="NotProduct-BagCart">
            <div className="Icon-NotProduct-BagCart">
              <BsCartX />
            </div>
            <div className="Description-NotProduct-BagCart">
              <span>هیچ محصولی در سبد خرید نیست.</span>
            </div>
            <Link to={"/product"}>
              {" "}
              <button
                className="Back-Product"
                onClick={() => DataContext.setShowCartBag(false)}
              >
                بازگشت به فروشگاه
              </button>
            </Link>
          </div>
        )}
    </>
  );
}
