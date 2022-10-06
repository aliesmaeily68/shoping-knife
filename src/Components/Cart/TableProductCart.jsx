import React from "react";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AllProductContext } from "../../Contexts/ProductContext";
import './TableProductCart.css'

export default function TableProductCart() {
  const DataContext = useContext(AllProductContext)

  const RemoveProduct = (product) => {
    DataContext.setCartConter((p) => p - product.conter);
    DataContext.setTotal((p) => p - product.price * product.conter);
    let FilterRemoveProduct = DataContext.userCart.filter(
      (data) => data.id !== product.id
    );
    DataContext.setUserCart(FilterRemoveProduct);
  };

  const IncreaseCounter = (product) => {
    DataContext.setCartConter((p) => p + 1);
    DataContext.setTotal((p) => p + product.price);
    product.conter++;
  };

  const DecreasCounter = (product) => {
    console.log(product.conter);
    if (product.conter > 0) {
      DataContext.setCartConter((p) => p - 1);
      DataContext.setTotal((p) => p - product.price);
      product.conter--;
    }
  };
  return (
    <>
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
            {DataContext.userCart &&
              DataContext.userCart.map((product) => (
                <tr className="Cart-Item" key={product.id}>
                  <td
                    class="Product-Remove-Cart"
                    onClick={() => RemoveProduct(product)}
                  >
                    <AiOutlineClose />
                  </td>
                  <td class="Product-Name-Thumbnail-Cart">
                    <img src={`./Image/${product.productImgName}`} alt="" />
                    <div className="Title-Cart">
                      <span>{product.title} </span>
                    </div>
                  </td>
                  <td class="Product-Price-Cart" data-title="قیمت">
                    <span>{product.price} تومان</span>
                  </td>
                  <td class="Product-Quantity-Cart" data-title="تعداد">
                    {" "}
                    <div className="Cart-InsertToBagCart">
                      <div className="Cart-increasOrdecreas-Product">
                        <button
                          className="Cart-increas"
                          onClick={() => IncreaseCounter(product)}
                        >
                          +
                        </button>
                        <span>{product.conter}</span>
                        <button
                          className="Cart-decreas"
                          onClick={() => DecreasCounter(product)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="Product-Subtotal-Cart" data-title="جمع جزء">
                    {product.conter * product.price} تومان
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="DisCountCode-Cart">
          <input
            type="text"
            placeholder="کد تخفیف"
            id="DisCountCode-Cart-Input"
          />
          <button id="DisCountCode-Cart-Btn">اعمال کد تخفیف</button>
        </div>
      </div>
    </>
  );
}


