import React from "react";
import {Link} from 'react-router-dom'
import { TbArrowsShuffle } from "react-icons/tb";

import "./EmptyComparison.css";

export default function EmptyComparison() {
  return (
    <div className="EmptyComparison">
      <TbArrowsShuffle className="EmptyComparison-Icon" />
      <p>لیست مقایسه خالی است . </p>
      <button>
        <Link to={"/product"}>بازگشت به فروشگاه</Link>
      </button>
    </div>
  );
}
