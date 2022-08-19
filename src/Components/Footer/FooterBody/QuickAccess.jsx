import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { Link } from "react-router-dom";
import "./QuickAccess.css";

export default function QuickAccess() {
  return (
    <div className="QuickAccess-Footer">
      <h3>دسترسی سریع</h3>
      <ul className="QuickAccess-List-Group">
        <li className="QuickAccess-List">
          <Link to={"/product"}>
            {" "}
            <IoIosArrowDropleft className="Icon-QuickAccess" />
            <span>فروشگاه</span>
          </Link>
        </li>
        <li className="QuickAccess-List">
          <Link to={"/article"}>
            {" "}
            <IoIosArrowDropleft className="Icon-QuickAccess" />
            <span>مقالات</span>
          </Link>
        </li>
        <li className="QuickAccess-List">
          {" "}
          <Link to={"/conditions"}>
            {" "}
            <IoIosArrowDropleft className="Icon-QuickAccess" />
            <span>قوانین و مقررات</span>
          </Link>
        </li>
        <li className="QuickAccess-List">
          <Link to={"/about"}>
            {" "}
            <IoIosArrowDropleft className="Icon-QuickAccess" />
            <span>درباره ما</span>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
