import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";

import { AllProductContext } from "../../Contexts/ProductContext";

import "./KnifesProduct.css";

export default function KnifesProduct() {
  const DataContext = useContext(AllProductContext);

  return (
    <>
      <div className="All-Product">
        <div className="products-Container">
          <div className="products-wrapper">
            <div className="KnifesProduct-Category-Title-Br">
              {" "}
              <h2 className="KnifesProduct-Category-Title">
                {" "}
                نمونه های برتر چاقوی زنجان{" "}
              </h2>
              <div className="KnifesProduct-Category-Br"></div>
            </div>

            <div className="products-Card">
              {DataContext.products[0][0].Info.map((data) =>
                data.MainInfo.map((product) => <ProductCard {...product} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
