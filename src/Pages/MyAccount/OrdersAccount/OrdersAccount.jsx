import React ,{useEffect}from "react";
import EmptyOrdersAccount from "./EmptyOrdersAccount/EmptyOrdersAccount";
import "./OrdersAccount.css";

export default function OrdersAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Container-OrdersAccount">
      <div className="Wrapper-OrdersAccount">
        <EmptyOrdersAccount />
      </div>
    </div>
  );
}
