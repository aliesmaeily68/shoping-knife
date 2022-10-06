import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";

import { AllProductContext } from "../../Contexts/ProductContext";

import "./KnifesProduct.css";

export default function KnifesProduct() {
  const DataContext = useContext(AllProductContext);

  return (
    <>
      <div className="products-Container">
        <div className="products-wrapper">
          <div className="KnifesProduct-Category-Title-Br">
            {" "}
            <h1 className="KnifesProduct-Category-Title">
              {" "}
              نمونه های برتر چاقوی زنجان{" "}
            </h1>
            <div className="KnifesProduct-Category-Br"></div>
          </div>

          {DataContext.productsDataFlag && DataContext.products1[0][0].Info.map((data, index) => (
            <div className="products-Card" key={index}>
              {data.MainInfo.map((product) => (
                <ProductCard {...product} key={product.id} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
