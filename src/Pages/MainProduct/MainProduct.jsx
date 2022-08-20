import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
import { NavLink,Outlet } from "react-router-dom";
import "./MainProduct.css";

export default function MainProduct() {
  return (
    <>
      <div className="MainProduct-Container">
        <div className="MainProduct-wrapper">
          <div className="MainProduct-img">
            <img src="../Image/5.jpeg" alt="product" />
          </div>
          <div className="MainProduct-ProductInfo">
            <nav className="MainProduct-Breadcrumb">
              {/**insert className opacity-low to increase opacity */}
              <span className="MainProduct-Breadcrumb-Home opacity-low">
                خانه
              </span>
              <span>/</span>
              <span className="MainProduct-Breadcrumb-Category opacity-low">
                چاقوی آشپزخانه
              </span>
              <span>/</span>
              <span className="MainProduct-Breadcrumb-Title">
                چاقوی جوجه زن
              </span>
            </nav>
            <div className="MainProduct-Title">چاقوی جوجه زن</div>
            <div className="MainProduct-price">
              <span className="MainProduct-MainPrice">15000</span>
              <div>
                <span className="MainProduct-Price-WithDiscount">
                  12000 تومان
                </span>
              </div>
            </div>
            <ul className="MainProduct-ListGroup-ProductInfo">
              <li className="MainProduct-list-ProductInfo">
                <RiArrowLeftSLine />
                <span>طول کل : 125 سانتیمتر </span>
              </li>
              <li className="MainProduct-list-ProductInfo">
                <RiArrowLeftSLine />
                <span>وزن : 125 گرم</span>
              </li>
              <li className="MainProduct-list-ProductInfo">
                <RiArrowLeftSLine />
                <span>جنس تیغه : آلمینیوم خالص </span>
              </li>
              <li className="MainProduct-list-ProductInfo">
                <RiArrowLeftSLine />
                <span>جنس دسته : چوب روسی </span>
              </li>
              <li className="MainProduct-list-ProductInfo">
                <RiArrowLeftSLine />
                <span>کاربردها : کشتن گاو </span>
              </li>
            </ul>

            <div className="MainProduct-InsertToBagCart">
              <div className="MainProduct-increasOrdecreas-Product">
                <button className="MainProduct-increas">+</button>
                <span>1</span>
                <button className="MainProduct-decreas">-</button>
              </div>
              <button className="MainProduct-btn-BagCart">
                افزودن به سبد خرید
              </button>
            </div>
            <div className="MainProduct-Icons">
              <div className="MainProduct-Icon-Comparison">
                <TbArrowsShuffle className="MainProduct-MainIcon" />
                <span>مقایسه</span>
              </div>
              <div className="MainProduct-Icon-Favorites">
                <AiOutlineHeart className="MainProduct-MainIcon" />{" "}
                <span>افزودن به علاقه مندی</span>
              </div>
            </div>
            <hr />
            <div className="MainProduct-Category-Title">
              دسته : <span>چاقوی آشپزخانه</span>
            </div>
            <div className="MainProduct-Stock">
              {/**insert className to span Empty-Stock for EmptyStock */}
              وضعیت : <span>موجود</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="MainProduct-Discription-Comments">
          <ul className="ListGroup-MainProduct-Discription-Comments">
            <NavLink to={"descriptionproduct"} className={(link) => (link.isActive ? "MainProduct-Menu-Activ" : "")}>
              <li className="List-MainProduct-Discription">توضیحات</li>
            </NavLink>
            <NavLink to={"commentsproduct"} className={(link) => (link.isActive ? "MainProduct-Menu-Activ" : "")}>
              <li className="List-MainProduct-Comments" >نظرات</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <Outlet/>
    </>
  );
}
