import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import ProductIconCard from "../AllProduct/ProductIconCard/ProductIconCard";
import { AllProductContext } from "../../Contexts/ProductContext";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./ProductCard.css";

export default function ProductCard(props) {
  const DataProductsContext = useContext(AllProductContext);

  const AddtoCart = (props) => {
    DataProductsContext.setTotal(
      (prevTotal) =>
        prevTotal + (props.price - (props.price * props.discount) / 100)
    );
    DataProductsContext.setCartConter((prevCartConter) => prevCartConter + 1);
    DataProductsContext.setToastTitle(
      "محصول با موفقیت به سبد خرید اضافه گردید ."
    );
    DataProductsContext.setShowToasts(true);
    setTimeout(() => {
      DataProductsContext.setShowToasts(false);
    }, 3000);
    const products = [...DataProductsContext.userCart];
    const IsProductInCart = products.some((Item) => Item.title == props.title);
    if (!IsProductInCart) {
      const Newobject = {
        id: uuidv4(),
        title: props.title,
        price: props.price - (props.price * props.discount) / 100,
        productImgName: props.productImgName,
        conter: 1,
      };
      products.push(Newobject);
      DataProductsContext.setUserCart(products);
    } else {
      products.map((item) => {
        if (item.title == props.title) {
          item.conter = item.conter + 1;
          return true;
        }
      });
    }
    let total = 0;
    let counters = 0;
    products.map((product) => {
      counters += product.conter;
      total += product.price * product.conter;
    });

    localStorage.setItem("counterProductsCart", JSON.stringify(counters));
    localStorage.setItem("totalProductsCart", JSON.stringify(total));
    localStorage.setItem("userProductCart", JSON.stringify(products));
  };

  return (
    <>
      <div className="Product-Card" key={props.id}>
        <div className="Icon-Card-Product">
          <ProductIconCard {...props} />
        </div>
        <div className="Product-Wrapper-Card">
          <div className="Product-Discount">
            <span>{props.discount}%</span>
          </div>
          <Card.Img variant="top" src={`../Image/${props.productImgName}`} />
          <div className="Card-Product-Body">
            <div className="Card-Product-Title">
              <span> {props.title}</span>
            </div>
            <div className="Price-Product-Card">
              <span className="Price-Discount-Card">{props.price}</span>
              <div>
                <span className="Price-Card">
                  {props.price - (props.price * props.discount) / 100} تومان
                </span>
              </div>
            </div>
            <div className="MoreInfo-Product-Card">
              <Link to={`/products/${props.id}&&${props.title}`}>
                <span> مشاهده بیشتر</span>
              </Link>
            </div>
            <div className="Insert-Cart" onClick={() => AddtoCart(props)}>
              <span>افزودن به سبد خرید</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
