import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { AllProductContext } from "../../Contexts/ProductContext";
import "./MainCategory.css";

export default function MainCategory() {
  const DataContext = useContext(AllProductContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let params = useParams();
  let MainCategoryFilter = [];
  let IsMainCategory = false;
  const Infocategory = [];
  if (DataContext.productsDataFlag) {
    MainCategoryFilter = DataContext.products1[0].filter(
      (product) =>
        product.MainCategory.title == params.categoriesTitle.split(":")[1]
    );
    IsMainCategory = DataContext.products1[0].some(
      (product) =>
        product.MainCategory.title == params.categoriesTitle.split(":")[1]
    );
    DataContext.products1[0].map((item) =>
      item.Info.map((product) => Infocategory.push(product))
    );
  }

  const InfoCategoryFilter = Infocategory.filter(
    (product) => product.CategoryTitle == params.categoriesTitle.split(":")[1]
  );
  const IsInfoCategory = Infocategory.some(
    (product) => product.CategoryTitle == params.categoriesTitle.split(":")[1]
  );
  const MainInfocategory = [];
  Infocategory.map((p) => p.MainInfo.map((A) => MainInfocategory.push(A)));

  const MainInfoCategoryFilter = MainInfocategory.filter(
    (product) => product.Category == params.categoriesTitle.split(":")[1]
  );
  const IsMainInfoCategory = MainInfocategory.some(
    (product) => product.Category == params.categoriesTitle.split(":")[1]
  );

  return (
    <div className="Container-MainCategory">
      <h1>{params.categoriesTitle.split(":")[1]}</h1>
      <div className="Wrapper-MainCategory">
        {IsMainCategory &&
          MainCategoryFilter.map((categoryProduct) =>
            categoryProduct.Info.map((infoProduct) =>
              infoProduct.MainInfo.map((mainInfoProduct) => (
                <ProductCard {...mainInfoProduct} key={mainInfoProduct.id} />
              ))
            )
          )}
        {IsInfoCategory &&
          InfoCategoryFilter.map((categoryProduct) =>
            categoryProduct.MainInfo.map((infoProduct) => (
              <ProductCard {...infoProduct} key={infoProduct.id} />
            ))
          )}
        {IsMainInfoCategory &&
          MainInfoCategoryFilter.map((categoryProduct) => (
            <ProductCard {...categoryProduct} key={categoryProduct.id} />
          ))}
      </div>
    </div>
  );
}
