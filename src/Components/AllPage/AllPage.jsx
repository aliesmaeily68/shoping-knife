import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "../../routes";
import { useContext, useEffect } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";
import { UsersContext } from "../../Contexts/UsersContext";

export default function AllPage() {
  let route = useRoutes(routes);
  const DataContext = useContext(AllProductContext);
  const DataUserContext = useContext(UsersContext);
  useEffect(() => {
    fetch("https://shopingknife-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const FullProduct = [];
          Object.entries(data)[0][1].map((data) =>
            data.Info.map((productInfo) =>
              productInfo.MainInfo.map((product) => {
                FullProduct.push(product);
              })
            )
          );
          DataContext.setFullProducts(FullProduct);
          DataContext.setProducts1([Object.entries(data)[0][1]]);
          DataContext.setProductsDataFlag(true);
        } else {
          console.log("داده نرسید");
        }
      });

    window.scrollTo(0, 0);
  }, []);

  const AllPageHandler = () => {
    DataContext.setShowCartBag(false);
    DataUserContext.setShowLoginSidebar(false);
    DataContext.setShowCategories(false);
  };
  return <div onClick={AllPageHandler}>{route}</div>;
}
