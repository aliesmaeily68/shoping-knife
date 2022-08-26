import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

import './BreadcrumbCheckoutCart.css'

export default function BreadcrumbCheckoutCart() {
  return (
    
    <>
      <div className="Breadcrumb-Cart-Checkout">
        <div className="Container-Breadcrumb-Cart-Checkout">
          <NavLink to={"/cart"}>
            <span id="Container-Breadcrumb-Cart-Checkout">سبد خرید</span>
          </NavLink>

          <span>
            <BsArrowLeft />
          </span>
          <NavLink to={"/checkout"}>
            {" "}
            <span id="Container-Breadcrumb-Checkout">تسویه حساب</span>
          </NavLink>

          <span>
            <BsArrowLeft />
          </span>
          <span>تکمیل خرید</span>
        </div>
      </div>
    </>
  )
}
