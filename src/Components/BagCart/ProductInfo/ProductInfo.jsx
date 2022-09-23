import React, { useEffect } from "react";
import { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { AllProductContext } from "../../../Contexts/ProductContext";

import "./ProductInfo.css";

export default function ProductInfo() {
  const DataContext = useContext(AllProductContext);

  const Plusconter = (product) => {
    product.conter++;
    const PlusconterData = DataContext.userCart.map((product) => product);
    DataContext.setUserCart(PlusconterData);
    DataContext.setTotal((prevTotal) => prevTotal + product.price);
    DataContext.setCartConter((prevCartConter) => prevCartConter + 1);
    DataContext.setUserCart(DataContext.userCart);
  };

  const Minusconter = (product) => {
    if (product.conter == 1) {
      DataContext.setTotal((prevTotal) => prevTotal + product.price);
      DataContext.setCartConter((prevCartConter) => prevCartConter + 1);
    }
    DataContext.setCartConter((prevCartConter) => prevCartConter - 1);
    product.conter > 1 && product.conter--;
    const MinusconterData = DataContext.userCart.map((product) => product);
    DataContext.setUserCart(MinusconterData);
    DataContext.setTotal((prevTotal) => prevTotal - product.price);
  };

  const DeleteProduct = (product) => {
    product.conter = 0;
    DataContext.setUserCart(DataContext.userCart);
    let total = 0;
    let CartConter = 0;
    DataContext.userCart.map((product) => {
      CartConter = CartConter + product.conter;
      total = total + product.price * product.conter;
    });

    DataContext.setTotal(total);
    DataContext.setCartConter(CartConter);
  };

  return (
    <>
      {DataContext.userCart &&
        DataContext.userCart.map((product) => (
          <div
            className={`Product-AllInfo-BagCart ${
              product.conter === 0 ? "Cart-n" : ""
            }`}
            key={product.id}
          >
            {/* <img
              src={`./Image/${product.imgName}`}
              alt="#"
              className="Img-Product-Info-BagCart"
            /> */}

            <img
              src={`../Image/${product.imgName}`}
              alt="product"
              className="Img-Product-Info-BagCart"
            />

            <div className="Product-Info-BagCart">
              <div className="Title-Product-Info-BagCart">
                <span>{product.title}</span>
              </div>

              <div className="Counter-Product-Info-BagCart">
                <button
                  className="Plus-Product-Info-BagCart"
                  onClick={() => Plusconter(product)}
                >
                  +
                </button>
                <span>{product.conter}</span>
                <button
                  className="Minus-Product-Info-BagCart"
                  onClick={() => Minusconter(product)}
                >
                  -
                </button>
              </div>

              <div className="Price-Product-Info-BagCart">
                <div>
                  <span>
                    {product.conter} <IoIosClose />
                  </span>
                </div>
                <div className="Price-Product-BagCart">
                  <span>{product.price} تومان</span>
                </div>
              </div>

              <div
                className="Close-Product-AllInfo-BagCart "
                onClick={() => DeleteProduct(product)}
              >
                <IoIosClose />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
