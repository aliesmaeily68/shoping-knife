import React from "react";
import { useContext } from "react";

import { BiX } from "react-icons/bi";
import { AllProductContext } from "../../Contexts/ProductContext";

import "./YourOrderCheckout.css";

export default function YourOrderCheckout() {
  const DataContext = useContext(AllProductContext);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#efeded"
          fill-opacity="1"
          d="M0,224L20,197.3C40,171,80,117,120,128C160,139,200,213,240,213.3C280,213,320,139,360,128C400,117,440,171,480,165.3C520,160,560,96,600,85.3C640,75,680,117,720,165.3C760,213,800,267,840,256C880,245,920,171,960,122.7C1000,75,1040,53,1080,90.7C1120,128,1160,224,1200,240C1240,256,1280,192,1320,192C1360,192,1400,256,1420,288L1440,320L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
      <div className="YourOrder-Checkout">
        <h2 className="Title-YourOrder-Checkout">سفارشات شما</h2>
        <div className="Table-YourOrder-Checkout">
          <table>
            <thead>
              <tr>
                <th>محصول</th>
                <th>جمع جزء</th>
              </tr>
            </thead>
            <tbody>
              {DataContext.userCart &&
                DataContext.userCart.map((product, index) => (product.conter !=0 &&
                  <tr key={product.id}>
                    <td>
                      {" "}
                      <span>{product.title} </span>
                      <BiX />
                      <span>{product.conter}</span>
                    </td>
                    <td> {product.conter * product.price} تومان</td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td>جمع کل</td>
                <td id="Total-Table-YourOrder-Checkout">{DataContext.total} تومان</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <h3>پرداخت هنگام دریافت</h3>
        <div className="Total-FooterTitle-YourOrder-Checkout">
          <span>پرداخت نقدی پس از تحویل</span>
        </div>
        <div className="Hr-YourOrder-Checkout">
          <hr />
        </div>
        <button id="Btn-YourOrder-Checkout">ثبت سفارش</button>
      </div>
    </>
  );
}
