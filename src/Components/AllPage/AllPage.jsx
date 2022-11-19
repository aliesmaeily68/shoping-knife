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
    const userProductCart = JSON.parse(localStorage.getItem("userProductCart"));
    if (userProductCart) {
      DataContext.setUserCart(userProductCart);
    }
    const totalProductsCart = JSON.parse(
      localStorage.getItem("totalProductsCart")
    );
    if (totalProductsCart) {
      DataContext.setTotal(totalProductsCart);
    }
    const counterProductsCart = JSON.parse(
      localStorage.getItem("counterProductsCart")
    );
    if (counterProductsCart) {
      DataContext.setCartConter(counterProductsCart);
    }
    const userFavorites = JSON.parse(localStorage.getItem("userFavorites"));

    if (userFavorites) {
      DataContext.setUserFavorites(userFavorites);
    }
    const counterFavorites = JSON.parse(
      localStorage.getItem("counterFavorites")
    );
    if (counterFavorites) {
      DataContext.setFavoritesConter(counterFavorites);
    }
    const userComparison = JSON.parse(localStorage.getItem("userComparison"));

    if (userComparison) {
      DataContext.setUserComparison(userComparison);
    }
    const counterComparison = JSON.parse(
      localStorage.getItem("counterComparison")
    );
    if (counterComparison) {
      DataContext.setComparisonConter(counterComparison);
    }
  }, []);

  useEffect(() => {
    fetch("https://shopingknife-aef7c-default-rtdb.firebaseio.com/product.json")
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
