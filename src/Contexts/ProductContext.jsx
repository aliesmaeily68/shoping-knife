import { createContext } from "react";
import { useState } from "react";
import { AllProduct, FullProduct } from "./../Datas";

export const AllProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([AllProduct]);
  const [fullProducts, setFullProducts] = useState(FullProduct);
  const [mainProduct, setMainProduct] = useState([]);
  const [showModalComparison, setShowModalComparison] = useState(false);
  const [showModalFavorites, setShowModalFavorites] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [showCartBag, setShowCartBag] = useState(false);
  const [showToasts, setShowToasts] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [userCart, setUserCart] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);
  const [userComparison, setUserComparison] = useState([]);
  const [removeComparisonId, setRemoveComparisonId] = useState();
  const [removeFavoritesId, setRemoveFavoritesId] = useState();
  const [total, setTotal] = useState(0);
  const [cartConter, setCartConter] = useState(0);
  const [favoritesConter, setFavoritesConter] = useState(0);
  const [comparisonConter, setComparisonConter] = useState(0);
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
        showModalComparison,
        setShowModalComparison,
        showModalFavorites,
        setShowModalFavorites,
        showModal,
        setShowModal,
        titleModal,
        setTitleModal,
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
        userFavorites,
        setUserFavorites,
        userComparison,
        setUserComparison,
        removeComparisonId,
        setRemoveComparisonId,
        removeFavoritesId,
        setRemoveFavoritesId,
        toastTitle,
        setToastTitle,
        total,
        setTotal,
        cartConter,
        setCartConter,
        favoritesConter,
        setFavoritesConter,
        comparisonConter,
        setComparisonConter,
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
