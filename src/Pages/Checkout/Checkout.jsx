import React from "react";
import InvoiceCheckout from "../../Components/Checkout/InvoiceCheckout";
import BeforeRegisteringCheckout from "../../Components/Checkout/BeforeRegisteringCheckout";
import YourOrderCheckout from "../../Components/Checkout/YourOrderCheckout";
import BreadcrumbCheckoutCart from "../../Components/BreadcrumbCheckoutCart/BreadcrumbCheckoutCart";
import "./Checkout.css";

export default function Checkout() {
  return (
    <>
    <BreadcrumbCheckoutCart />
      <div className="Container-Checkout">
        <div className="Wrapper-Checkout">
          <div className="BeforeRegisteringCheckout">
            {" "}
            <BeforeRegisteringCheckout />
          </div>
          <div className="Invoice-Checkout">
            <InvoiceCheckout />
          </div>{" "}
          <div className="Container-YourOrder-Checkout">
            <YourOrderCheckout />
          </div>
        </div>
      </div>
    </>
  );
}
