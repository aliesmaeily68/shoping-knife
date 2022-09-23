import React, { useContext, useEffect } from "react";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import BreadcrumbCheckoutCart from "../../Components/BreadcrumbCheckoutCart/BreadcrumbCheckoutCart";
import TableProductCart from "../../Components/Cart/TableProductCart";

import { AllProductContext } from "../../Contexts/ProductContext";

import "./Cart.css";

export default function Cart() {
  const DataContext = useContext(AllProductContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BreadcrumbCheckoutCart />

      {!DataContext.userCart.length ? (
        <div className="NotProduct-Cart">
          <div className="Icon-NotProduct-Cart">
            <BsCartX />
          </div>
          <div className="Description-NotProduct-Cart">
            <span> سبد خرید شما در حال حاضر خالی است😔</span>
          </div>
          <Link to={"/product"}>
            {" "}
            <button className="Back-Product-Cart">بازگشت به فروشگاه</button>
          </Link>
        </div>
      ) : (
        <div className="Container-Cart">
          <div className="Wrapper-Cart">
            <div className="Total-Product-Cart">
              <TableProductCart />
              <div className="Container-Total-Cart">
                <div className="Wrapper-Total-Cart">
                  <div className="Total-Cart">
                    <span>جمع خرید</span>
                    <span>{DataContext.total} تومان</span>
                  </div>
                  <div className="Discount-Cart">
                    <span>جمع تخفیف</span>
                    <span>0 تومان</span>
                  </div>
                  <div className="PostPrice-Cart">
                    <span>هزینه ارسال </span>
                    <span>رایگان</span>
                  </div>
                  <div className="AmountPayable-Cart">
                    <span>مبلغ قابل پرداخت </span>
                    <span>{DataContext.total} تومان</span>
                  </div>
                  <Link to={"/checkout"}>
                    {" "}
                    <button id="Total-Cart-Btn">ادامه جهت تسویه حساب</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
