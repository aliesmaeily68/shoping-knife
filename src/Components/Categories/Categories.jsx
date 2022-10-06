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
  const HiddenCategory = () => {
    DataContext.setShowCategories(false);
  };
  return (
    <>
      {/**add className ShowCategories to showing Categories */}
      <div
        className={`Container-Categories  ${
          DataContext.showCategories ? "ShowCategories" : ""
        }`}
        onClick={() => HiddenCategory()}
      >
        <div className="Wrapper-Categories ">
          {DataContext.productsDataFlag && DataContext.products1.map((data) =>
            data.map((product) => (
              <Link
                to={`/product/category:${product.MainCategory.title}`}
                key={product.MainCategory.id}
              >
                <div
                  className="Main-Category"
                  onMouseOver={() => ShowSubCategory(product)}
                  onMouseLeave={() => DataContext.setShowSubCategories(false)}
                >
                  <span>{product.MainCategory.title} </span>
                  <MdKeyboardArrowLeft
                    style={{ opacity: 0.5, fontSize: "1.2em" }}
                  />{" "}
                </div>
              </Link>
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
