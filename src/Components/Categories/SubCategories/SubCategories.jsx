import React, { useContext } from "react";
import { AllProductContext } from "../../../Contexts/ProductContext";
import { Link } from "react-router-dom";
import "./SubCategories.css";

export default function SubCategories() {
  const DataContext = useContext(AllProductContext);

  return (
    <>
      {/**Showing SubCategories with add ClassName ShowSubCategories*/}
      <div
        className={`Container-SubCategories ${
          DataContext.showSubCategories ? "ShowSubCategories" : ""
        }`}
      >
        <div className="Img-SubCategories">
          <img src={`../Image/${DataContext.imageCategores}`} alt="محصول" />
        </div>
        <div className="wrapper-SubCategories">
          {DataContext.infoCategories.map((data) => (
            <div className="Main-SubCategories">
              <div className="Title-SubCategories">
                <h3>
                  <Link to={`/product/category:${data.CategoryTitle}`}>
                    {data.CategoryTitle}{" "}
                  </Link>
                </h3>
              </div>

              <ul className="List-Group-SubCategories">
                {[...new Set(data.MainInfo.map((p) => p.Category))].map(
                  (product) => (
                    <li className="List-SubCategories">
                      <Link to={`/product/category:${product}`}>{product}</Link>
                    </li>
                  )
                )}

              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
