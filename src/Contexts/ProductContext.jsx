import { createContext } from "react";
import { useState } from "react";
import { AllProduct,FullProduct } from "./../Datas";

export const AllProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([AllProduct]);
  const [fullProducts, setFullProducts] = useState(FullProduct);
  const [mainProduct, setMainProduct] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [showCartBag, setShowCartBag] = useState(false);
  const [showToasts, setShowToasts] = useState(false);
  const [userCart, setUserCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartConter, setCartConter] = useState(0);
  const [infoCategories, setInfoCategories] = useState([]);
  const [imageCategores, setImageCategores] = useState();

  return (
    <AllProductContext.Provider
      value={{
        products,
        setProducts,
        fullProducts,
        setFullProducts,
        mainProduct,
        setMainProduct,
        showCategories,
        setShowCategories,
        showSubCategories,
        setShowSubCategories,
        showCartBag,
        setShowCartBag,
        showToasts,
        setShowToasts,
        userCart,
        setUserCart,
        total,
        setTotal,
        cartConter,
        setCartConter,
        infoCategories,
        setInfoCategories,
        imageCategores,
        setImageCategores,
      }}
    >
      {children}
    </AllProductContext.Provider>
  );
};
