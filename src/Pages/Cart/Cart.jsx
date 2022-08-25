import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import "./Cart.css";

export default function Cart() {
  return (
    <>
      <div className="Breadcrumb-Cart">
        <div className="Container-Breadcrumb-Cart">
          {" "}
          <span>سبد خرید</span>
          <span>
            <BsArrowLeft />
          </span>
          <span>تسویه حساب</span>
          <span>
            <BsArrowLeft />
          </span>
          <span>تکمیل خرید</span>
        </div>
      </div>
      <div className="Container-Cart">
        <div className="Wrapper-Cart">
          <div className="Total-Product-Cart">
            <div className="Table-Product-Cart">
              <table>
                <thead>
                  <tr>
                    <th class="Product-Remove-Cart-th">&nbsp;</th>
                    <th class="Product-Name-Thumbnail-Cart-th">محصول</th>
                    <th class="Product-Price-Cart-th">قیمت</th>
                    <th class="Product-Quantity-Cart-th">تعداد</th>
                    <th class="Product-Subtotal-Cart-th">جمع جزء</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="Cart-Item">
                    <td class="Product-Remove-Cart">
                      <AiOutlineClose />
                    </td>
                    <td class="Product-Name-Thumbnail-Cart">
                      <img src="./Image/0.jpeg" alt="" />
                      <div className="Title-Cart">
                        <span>چاقوی جوجه زن</span>
                      </div>
                    </td>
                    <td class="Product-Price-Cart" data-title="قیمت">
                      <span>15000 تومان</span>
                    </td>
                    <td class="Product-Quantity-Cart" data-title="تعداد">
                      {" "}
                      <div className="Cart-InsertToBagCart">
                        <div className="Cart-increasOrdecreas-Product">
                          <button
                            className="Cart-increas"
                            // onClick={IncreaseCounter}
                          >
                            +
                          </button>
                          <span>1</span>
                          <button
                            className="Cart-decreas"
                            // onClick={DecreasCounter}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </td>
                    <td class="Product-Subtotal-Cart" data-title="جمع جزء">
                      15000 تومان
                    </td>
                  </tr>

                  <tr className="Cart-Item">
                    <td class="Product-Remove-Cart">
                      <AiOutlineClose />
                    </td>
                    <td class="Product-Name-Thumbnail-Cart">
                      <img src="./Image/0.jpeg" alt="" />
                      <div className="Title-Cart">
                        <span>چاقوی جوجه زن</span>
                      </div>
                    </td>

                    <td class="Product-Price-Cart" data-title="قیمت">
                      <span>15000 تومان</span>
                    </td>
                    <td class="Product-Quantity-Cart" data-title="تعداد">
                      {" "}
                      <div className="Cart-InsertToBagCart">
                        <div className="Cart-increasOrdecreas-Product">
                          <button
                            className="Cart-increas"
                            // onClick={IncreaseCounter}
                          >
                            +
                          </button>
                          <span>1</span>
                          <button
                            className="Cart-decreas"
                            // onClick={DecreasCounter}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </td>
                    <td class="Product-Subtotal-Cart" data-title="جمع جزء">
                      15000 تومان
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Total-Cart"></div>
          </div>
        </div>
      </div>
    </>
  );
}
