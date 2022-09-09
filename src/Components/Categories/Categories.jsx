import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SubCategories from "./SubCategories/SubCategories";
import { AllProductContext } from "../../Contexts/ProductContext";

import "./Categories.css";

export default function Categories() {
  const DataContext = useContext(AllProductContext);
  // console.log(DataContext.Data);
  let ShowSubCategory = (product) => {
    DataContext.setInfoCategories(product.Info);
    DataContext.setImageCategores(product.MainCategory.imgName);
    DataContext.setShowSubCategories(true);
  };
  return (
    <>
      {/**add className ShowCategories to showing Categories */}
      <div
        className={`Container-Categories  ${
          DataContext.showCategories ? "ShowCategories" : ""
        }`}
      >
        <div className="Wrapper-Categories ">
          {DataContext.products.map((data) =>
            data.map((product) => (
              <div
                className="Main-Category"
                onMouseOver={() => ShowSubCategory(product)}
                onMouseLeave={() => DataContext.setShowSubCategories(false)}
              >
                <span>
                  <Link to={`/product/category:${product.MainCategory.title}`}>
                    {product.MainCategory.title}{" "}
                  </Link>
                </span>
                <MdKeyboardArrowLeft
                  style={{ opacity: 0.5, fontSize: "1.2em" }}
                />{" "}
              </div>
            ))
          )}
        </div>

        <div
          className="ُSubCategories"
          onMouseEnter={() => DataContext.setShowSubCategories(true)}
          onMouseLeave={() => DataContext.setShowSubCategories(false)}
        >
          <SubCategories />
        </div>
      </div>
    </>
  );
}
