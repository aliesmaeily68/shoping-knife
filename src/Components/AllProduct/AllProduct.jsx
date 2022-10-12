import React, { useContext } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";
import ProductCard from "../ProductCard/ProductCard";

import "./AllProduct.css";

export default function AllProduct() {
  const DataProductsContext = useContext(AllProductContext);
  return (
    <>
      <div className="products-Container">
        {DataProductsContext.productsDataFlag &&
          DataProductsContext.products1[0].map((product) => (
            <div className="products-wrapper" key={product.MainCategory.id}>
              <div className="Product-Category-Title">
                <h2>{product.MainCategory.title} </h2>
                <div className="Br-CategoryTitle"></div>
              </div>
              <div className="Allproducts-Card">
                {product.Info.map((data) =>
                  data.MainInfo.map((product) => (
                    <ProductCard {...product} key={product.id} />
                  ))
                )}
              </div>
            </div>
          ))}
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
