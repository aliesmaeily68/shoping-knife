import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllProductContext } from "../../../Contexts/ProductContext";
import "./ProposalProductCategoryCard.css";

export default function ProposalProductCategoryCard() {
  const DataContext = useContext(AllProductContext);
  return (
    <>
      {DataContext.products.map((data) =>
        data.map((product, index) => (
          <Link to={`/product/category:${product.MainCategory.title}`} >
            <div className="Wrapper-Proposal-Product-Category" key={index}>
              <div className="Border-Proposal-Card"></div>
              <img
                src={`./Image/${product.MainCategory.imgName}`}
                alt="product"
                className="Proposal-Product-Category-img"
              />
              <div className="Container-Proposal-Product-Category">
                <div className="Proposal-Product-Category-Clip"></div>
                <div className="Proposal-Product-Category-Text-Btn">
                  <span className="Proposal-Product-Category-Text">
                    {product.MainCategory.title}
                  </span>

                  <button className="Proposal-Product-Category-Btn">
                    خرید کنید
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </>
  );
}
