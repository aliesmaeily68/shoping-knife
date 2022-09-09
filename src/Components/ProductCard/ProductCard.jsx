import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import ProductIconCard from "../AllProduct/ProductIconCard/ProductIconCard";
import { AllProductContext } from "../../Contexts/ProductContext";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard(props) {
  const DataContext = useContext(AllProductContext);
  const AddtoCart = (props) => {
    DataContext.setTotal(
      (prevTotal) =>
        prevTotal + props.price - (props.price * props.discount) / 100
    );
    DataContext.setCartConter((prevCartConter) => prevCartConter + 1);
    DataContext.setToastTitle("محصول با موفقیت به سبد خرید اضافه گردید .");
    DataContext.setShowToasts(true);
    setTimeout(() => {
      DataContext.setShowToasts(false);
    }, 3000);
    const products = [...DataContext.userCart];
    const IsProductInCart = products.some((Item) => Item.title == props.title);
    if (!IsProductInCart) {
      const Newobject = {
        id: DataContext.userCart.length + 1,
        title: props.title,
        price: props.price - (props.price * props.discount) / 100,
        imgName: props.imgName,
        conter: 1,
      };
      DataContext.setUserCart((p) => [...p, Newobject]);
    } else {
      products.map((item) => {
        if (item.title == props.title) {
          item.conter = item.conter + 1;
          return true;
        }
      });
    }
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
          <Card.Img variant="top" src={`../Image/${props.imgName}`} />
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
              <Link to={`/products/${props.id}-${props.title}`}>
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
