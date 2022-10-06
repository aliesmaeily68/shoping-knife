import React, { useContext, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { AllMobileNavContext } from "../../Contexts/MobailNavDataContext";
import { AllProductContext } from "../../Contexts/ProductContext";
import "./MobileNavCategory.css";

export default function MobileNavCategory() {
  const DataProductContext = useContext(AllProductContext);
  const DataMobileNavContext = useContext(AllMobileNavContext);
  const [showCategory, setShowCategory] = useState(false);
  const [showSubCategory, setShowSubCategory] = useState();

  return (
    <>
      <div className="Category-MobileNav">
        <div
          className="Title-Category-MobileNav"
          onClick={() => setShowCategory((p) => !p)}
        >
          <h2>دسته بندی محصولات</h2>
          {showCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {/**insert className Show-Category to showing category */}
        <ul
          className={`ListGroup-Category-MobileNav ${
            showCategory ? "Show-Category" : ""
          }`}
        >
          {DataProductContext.productsDataFlag &&
            DataProductContext.products1[0].map((productCategory) => (
              <li className="List-Category-MobileNav" key={productCategory.id}>
                <div>
                  <Link
                    to={`/product/category:${productCategory.MainCategory.title}`}
                    onClick={() => DataMobileNavContext.setShowMobileNav(false)}
                  >
                    {productCategory.MainCategory.title}
                  </Link>

                  {showSubCategory === productCategory.MainCategory.id ? (
                    <IoIosArrowUp
                      onClick={() =>
                        setShowSubCategory(false)
                      }
                    />
                  ) : (
                    <IoIosArrowDown
                      onClick={() =>
                        setShowSubCategory(productCategory.MainCategory.id)
                      }
                    />
                  )}
                </div>

                {/**insert className Show-SubCategory to showing category */}

                <ul
                  className={`ListGroup-SubCategory-MobileNav ${
                    showSubCategory == productCategory.MainCategory.id
                      ? "Show-SubCategory"
                      : ""
                  }`}
                >
                  {productCategory.Info.length &&
                    productCategory.Info.map((productSubCategory) => (
                     
                      <li key={productSubCategory.id}>
                        <Link
                          onClick={() =>
                            DataMobileNavContext.setShowMobileNav(false)
                          }
                          to={`/product/category:${productSubCategory.CategoryTitle}`}
                        >
                          {productSubCategory.CategoryTitle}
                        </Link>
                      </li>
                    
                    ))}
                </ul>
                <hr />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
