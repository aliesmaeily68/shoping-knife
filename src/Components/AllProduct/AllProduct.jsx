import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import ProductIconCard from "./ProductIconCard/ProductIconCard";
import { AllProductContext } from "../../Contexts/ProductContext";

import "./AllProduct.css";
import { Link } from "react-router-dom";

export default function AllProduct() {
  const DataContext = useContext(AllProductContext);

  const AddtoCart = (product) => {
    DataContext.setTotal(
      (prevTotal) =>
        prevTotal + product.price - (product.price * product.discount) / 100
    );
    DataContext.setCartConter((prevCartConter) => prevCartConter + 1);
    DataContext.setShowToasts(true);
    setTimeout(() => {
      DataContext.setShowToasts(false);
    }, 3000);
    const products = [...DataContext.userCart];
    const IsProductInCart = products.some(
      (Item) => Item.title == product.title && Item.id == product.id
    );
    if (!IsProductInCart) {
      const Newobject = {
        id: DataContext.userCart.length + 1,
        title: product.title,
        price: product.price - (product.price * product.discount) / 100,
        imgName: product.imgName,
        conter: 1,
      };
      DataContext.setUserCart((p) => [...p, Newobject]);
    } else {
      products.map((item) => {
        if (item.title == product.title) {
          item.conter = item.conter + 1;
          return true;
        }
      });
    }
  };
  return (
    <>
      <div className="All-Product">
        <div className="products-Container">
          {DataContext.products[0].map((product, index) => (
            <div className="products-wrapper" key={index}>
              <div className="Product-Category-Title">
                {" "}
                <h2>{product.MainCategory.title} </h2>
                <div className="Br-CategoryTitle"></div>
              </div>

              <div className="products-Card">
                {product.Info.map((data) =>
                  data.MainInfo.map((product) => (
                    <div className="Product-Card" key={product.id}>
                      <div className="Icon-Card-Product">
                        <ProductIconCard {...product} />
                      </div>
                      <div className="Product-Wrapper-Card">
                        <div className="Product-Discount">
                          <span>{product.discount}%</span>
                        </div>

                        <Card.Img
                          variant="top"
                          src={`./Image/${product.imgName}`}
                        />
                        <div className="Card-Product-Body">
                          <div className="Card-Product-Title">
                            <span> {product.title}</span>
                          </div>
                          <div className="Price-Product-Card">
                            <span className="Price-Discount-Card">
                              {product.price}
                            </span>
                            <div>
                              <span className="Price-Card">
                                {product.price -
                                  (product.price * product.discount) / 100}{" "}
                                تومان
                              </span>
                            </div>
                          </div>
                          <div className="Conter-Product-Card">
                            <Link
                              to={`/product/${product.id}-${product.title}`}
                            >
                              <span> مشاهده بیشتر</span>
                            </Link>
                          </div>
                          <div className="Insert-Cart">
                            <span onClick={() => AddtoCart(product)}>
                              افزودن به سبد خرید
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /**نمونه کارد */
}

{
  /* <div className="products-Card">
            
<div className="Product-Card">
  <div className="Icon-Card-Product">
    <ProductIconCard />
  </div>
  <div className="Product-Wrapper-Card">
    <div className="Product-Discount">
      <span>10%</span>
    </div>

    <Card.Img
      variant="top"
      src='./Image/5.jpeg'
    />
    <div className="Card-Product-Body">
      <div className="Card-Product-Title">
        <span> چاقو</span>
      </div>
      <div className="Price-Product-Card">
        <span className="Price-Discount-Card">
          15000
        </span>
        <div>
          <span className="Price-Card">
        12000
            تومان
          </span>
        </div>
      </div>
      <div className="Conter-Product-Card">
        <span> موجودی :</span>
        <span>10</span>
      </div>
      <div className="Insert-Cart">
        <span>افزودن به سبد خرید</span>
      </div>
    </div>
  </div>
</div>


</div> */
}
