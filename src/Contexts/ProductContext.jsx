import { createContext } from "react";
import { useState } from "react";
// import { AllProduct } from "./../Datas";

export const AllProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products1, setProducts1] = useState();
  const [productsDataFlag, setProductsDataFlag] = useState(false);
  // const [products, setProducts] = useState([AllProduct]);
  const [fullProducts, setFullProducts] = useState();
  const [mainProduct, setMainProduct] = useState([]);

  const [getData, setGetData] = useState(false);

  const [showModalComparison, setShowModalComparison] = useState(false);
  const [showModalFavorites, setShowModalFavorites] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFormInsertProduct, setShowFormInsertProduct] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [showCartBag, setShowCartBag] = useState(false);
  const [showToasts, setShowToasts] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [userCart, setUserCart] = useState("");
  const [userFavorites, setUserFavorites] = useState("");
  const [userComparison, setUserComparison] = useState("");
  const [removeComparisonId, setRemoveComparisonId] = useState();
  const [removeFavoritesId, setRemoveFavoritesId] = useState();
  const [total, setTotal] = useState(0);
  const [cartConter, setCartConter] = useState(0);
  const [favoritesConter, setFavoritesConter] = useState(0);
  const [comparisonConter, setComparisonConter] = useState(0);
  const [infoCategories, setInfoCategories] = useState([]);
  const [imageCategores, setImageCategores] = useState();

  const [insertMainCategoryValue, setInsertMainCategoryValue] = useState();
  const [insertImg1MainCategoryValue, setInsertImg1MainCategoryValue] =
    useState();
  const [insertImg2MainCategoryValue, setInsertImg2MainCategoryValue] =
    useState();
  const [insertCategoryValue, setInsertCategoryValue] = useState();
  const [insertSubCategoryValue, setInsertSubCategoryValue] = useState();
  const [insertTitleValue, setInsertTitleValue] = useState();
  const [insertPriceValue, setInsertPriceValue] = useState();
  const [insertImgProductValue, setInsertImgProductValue] = useState();
  const [insertStockValue, setInsertStockValue] = useState();
  const [insertDiscountValue, setInsertDiscountValue] = useState();
  const [insertWeightValue, setInsertWeightValue] = useState();
  const [insertGenusValue, setInsertGenusValue] = useState();
  const [insertUsageValue, setInsertUsageValue] = useState();
  const [insertProducerValue, setInsertProducerValue] = useState();

  const [insertMainCategoryForm, setInsertMainCategoryForm] = useState(true);
  const [isKeyDownInsertMainCategoryForm, setIsKeyDownInsertMainCategoryForm] =
    useState(true);
  const [insertImg1MainCategoryForm, setInsertImg1MainCategoryForm] =
    useState(true);
  const [
    isKeyDownInsertImg1MainCategoryForm,
    setIsKeyDownInsertImg1MainCategoryForm,
  ] = useState(true);
  const [insertImg2MainCategoryForm, setInsertImg2MainCategoryForm] =
    useState(true);
  const [
    isKeyDownInsertImg2MainCategoryForm,
    setIsKeyDownInsertImg2MainCategoryForm,
  ] = useState(true);
  const [insertCategoryForm, setInsertCategoryForm] = useState(true);
  const [isKeyDownInsertCategoryForm, setIsKeyDownInsertCategoryForm] =
    useState(true);
  const [insertSubCategoryForm, setInsertSubCategoryForm] = useState(true);
  const [isKeyDownInsertSubCategoryForm, setIsKeyDownInsertSubCategoryForm] =
    useState(true);
  const [insertTitleForm, setInsertTitleForm] = useState(true);
  const [isKeyDownInsertTitleForm, setIsKeyDownInsertTitleForm] =
    useState(true);
  const [insertPriceForm, setInsertPriceForm] = useState(true);
  const [isKeyDownInsertPriceForm, setIsKeyDownInsertPriceForm] =
    useState(true);
  const [insertImgProductForm, setInsertImgProductForm] = useState(true);
  const [isKeyDownInsertImgProductForm, setIsKeyDownInsertImgProductForm] =
    useState(true);
  const [insertStockForm, setInsertStockForm] = useState(true);
  const [isKeyDownInsertStockForm, setIsKeyDownInsertStockForm] =
    useState(true);
  const [insertDiscountForm, setInsertDiscountForm] = useState(true);
  const [isKeyDownInsertDiscountForm, setIsKeyDownInsertDiscountForm] =
    useState(true);
  const [insertWeightForm, setInsertWeightForm] = useState(true);
  const [isKeyDownInsertWeightForm, setIsKeyDownInsertWeightForm] =
    useState(true);
  const [insertGenusForm, setInsertGenusForm] = useState(true);
  const [isKeyDownInsertGenusForm, setIsKeyDownInsertGenusForm] =
    useState(true);
  const [insertUsageForm, setInsertUsageForm] = useState(true);
  const [isKeyDownInsertUsageForm, setIsKeyDownInsertUsageForm] =
    useState(true);
  const [insertProducerForm, setInsertProducerForm] = useState(true);
  const [isKeyDownInsertProducerForm, setIsKeyDownInsertProducerForm] =
    useState(true);

  return (
    <AllProductContext.Provider
      value={{
        products1,
        setProducts1,
        productsDataFlag,
        setProductsDataFlag,
        // products,
        // setProducts,
        fullProducts,
        setFullProducts,
        mainProduct,
        setMainProduct,
        getData,
        setGetData,
        showModalComparison,
        setShowModalComparison,
        showModalFavorites,
        setShowModalFavorites,
        showModal,
        setShowModal,
        showFormInsertProduct,
        setShowFormInsertProduct,
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

        insertMainCategoryValue,
        setInsertMainCategoryValue,
        insertImg1MainCategoryValue,
        setInsertImg1MainCategoryValue,
        insertImg2MainCategoryValue,
        setInsertImg2MainCategoryValue,
        insertCategoryValue,
        setInsertCategoryValue,
        insertSubCategoryValue,
        setInsertSubCategoryValue,
        insertTitleValue,
        setInsertTitleValue,
        insertPriceValue,
        setInsertPriceValue,
        insertImgProductValue,
        setInsertImgProductValue,
        insertStockValue,
        setInsertStockValue,
        insertDiscountValue,
        setInsertDiscountValue,
        insertWeightValue,
        setInsertWeightValue,
        insertGenusValue,
        setInsertGenusValue,
        insertUsageValue,
        setInsertUsageValue,
        insertProducerValue,
        setInsertProducerValue,

        insertMainCategoryForm,
        setInsertMainCategoryForm,
        isKeyDownInsertMainCategoryForm,
        setIsKeyDownInsertMainCategoryForm,
        insertImg1MainCategoryForm,
        setInsertImg1MainCategoryForm,
        isKeyDownInsertImg1MainCategoryForm,
        setIsKeyDownInsertImg1MainCategoryForm,
        insertImg2MainCategoryForm,
        setInsertImg2MainCategoryForm,
        isKeyDownInsertImg2MainCategoryForm,
        setIsKeyDownInsertImg2MainCategoryForm,
        insertCategoryForm,
        setInsertCategoryForm,
        isKeyDownInsertCategoryForm,
        setIsKeyDownInsertCategoryForm,
        insertSubCategoryForm,
        setInsertSubCategoryForm,
        isKeyDownInsertSubCategoryForm,
        setIsKeyDownInsertSubCategoryForm,
        insertTitleForm,
        setInsertTitleForm,
        isKeyDownInsertTitleForm,
        setIsKeyDownInsertTitleForm,
        insertPriceForm,
        setInsertPriceForm,
        isKeyDownInsertPriceForm,
        setIsKeyDownInsertPriceForm,
        insertImgProductForm,
        setInsertImgProductForm,
        isKeyDownInsertImgProductForm,
        setIsKeyDownInsertImgProductForm,
        insertStockForm,
        setInsertStockForm,
        isKeyDownInsertStockForm,
        setIsKeyDownInsertStockForm,
        insertDiscountForm,
        setInsertDiscountForm,
        isKeyDownInsertDiscountForm,
        setIsKeyDownInsertDiscountForm,
        insertWeightForm,
        setInsertWeightForm,
        isKeyDownInsertWeightForm,
        setIsKeyDownInsertWeightForm,
        insertGenusForm,
        setInsertGenusForm,
        isKeyDownInsertGenusForm,
        setIsKeyDownInsertGenusForm,
        insertUsageForm,
        setInsertUsageForm,
        isKeyDownInsertUsageForm,
        setIsKeyDownInsertUsageForm,
        insertProducerForm,
        setInsertProducerForm,
        isKeyDownInsertProducerForm,
        setIsKeyDownInsertProducerForm,
      }}
    >
      {children}
    </AllProductContext.Provider>
  );
};
