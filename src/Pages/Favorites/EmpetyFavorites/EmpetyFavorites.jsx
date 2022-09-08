import React from "react";
import {Link} from 'react-router-dom'
import { AiOutlineHeart } from "react-icons/ai";

import "./EmpetyFavorites.css";

export default function EmpetyFavorites() {
  return (
    <div className="EmpetyFavorites">
      <AiOutlineHeart className="EmpetyFavorites-Icon" />
      <p>علاقه مندی خالی است💘</p>
      <button>
        <Link to={"/product"}>بازگشت به فروشگاه</Link>
      </button>
    </div>
  );
}
