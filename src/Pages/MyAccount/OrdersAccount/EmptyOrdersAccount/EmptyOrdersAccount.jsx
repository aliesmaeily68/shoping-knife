import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineOrderedList } from "react-icons/ai";
import "./EmptyOrdersAccount.css";

export default function EmptyOrdersAccount() {
  return (
    <div className="EmptyOrdersAccount">
      <AiOutlineOrderedList className="EmptyOrdersAccount-Icon" />
      <p>لیست سفارش ها خالی می باشد</p>
      <button>
        <Link to={"/product"}>بازگشت به فروشگاه</Link>
      </button>
    </div>
  );
}
