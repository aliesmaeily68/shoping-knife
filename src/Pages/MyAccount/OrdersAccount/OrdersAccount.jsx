import React from "react";
import EmptyOrdersAccount from "./EmptyOrdersAccount/EmptyOrdersAccount";
import "./OrdersAccount.css";

export default function OrdersAccount() {
  return (
    <div className="Container-OrdersAccount">
      <div className="Wrapper-OrdersAccount">
        <EmptyOrdersAccount />
      </div>
    </div>
  );
}
