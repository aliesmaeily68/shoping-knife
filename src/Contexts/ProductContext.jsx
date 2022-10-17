import { createContext } from "react";
import { useState } from "react";
// import { AllProduct } from "./../Datas";

export const AllProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products1, setProducts1] = useState();
  const [productsDataFlag, setProductsDataFlag] = useState(false);
  // const [products, setProducts] = useState([AllProduct]);
  const [fullProducts, setFullProducts] = useState([]);
  const [mainProduct, setMainProduct] = useState([]);

  const [getData, setGetData] = useState(false);

  const [showModalComparison, setShowModalComparison] = useState(false);
  const [showModalFavorites, setShowModalFavorites] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFormInsertProduct, setShowFormInsertProduct] = useState(false);
  const [
    showFormInsertMainProposalProduct,
    setShowFormInsertMainProposalProduct,
  ] = useState(false);
  const [
    showFormInsertProposalProduct,
    setShowFormInsertProposalProduct,
  ] = useState(false);
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

  const [insertMainProposalTitleForm, setInsertMainProposalTitleForm] =
    useState(true);
  const [
    isKeyDownInsertMainProposalTitleForm,
    setIsKeyDownInsertMainProposalTitleForm,
  ] = useState(true);
  const [insertMainProposalPriceForm, setInsertMainProposalPriceForm] =
    useState(true);
  const [
    isKeyDownInsertMainProposalPriceForm,
    setIsKeyDownInsertMainProposalPriceForm,
  ] = useState(true);
  const [
    insertMainProposalImgProductForm,
    setInsertMainProposalImgProductForm,
  ] = useState(true);
  const [
    isKeyDownInsertMainProposalImgProductForm,
    setIsKeyDownInsertMainProposalImgProductForm,
  ] = useState(true);
  const [insertMainProposalStockForm, setInsertMainProposalStockForm] =
    useState(true);
  const [
    isKeyDownInsertMainProposalStockForm,
    setIsKeyDownInsertMainProposalStockForm,
  ] = useState(true);
  const [insertMainProposalDiscountForm, setInsertMainProposalDiscountForm] =
    useState(true);
  const [
    isKeyDownInsertMainProposalDiscountForm,
    setIsKeyDownInsertMainProposalDiscountForm,
  ] = useState(true);
  const [insertMainProposalWeightForm, setInsertMainProposalWeightForm] =
    useState(true);
  const [
    isKeyDownInsertMainProposalWeightForm,
    setIsKeyDownInsertMainProposalWeightForm,
  ] = useState(true);
  const [insertMainProposalGenusForm, setInsertMainProposalGenusForm] =
    useState(true);
  const [
    isKeyDownInsertMainProposalGenusForm,
    setIsKeyDownInsertMainProposalGenusForm,
  ] = useState(true);
  const [insertMainProposalUsageForm, setInsertMainProposalUsageForm] =
    useState(true);
  const [
    isKeyDownInsertMainProposalUsageForm,
    setIsKeyDownInsertMainProposalUsageForm,
  ] = useState(true);
  const [insertMainProposalProducerForm, setInsertMainProposalProducerForm] =
    useState(true);
  const [
    isKeyDownInsertMainProposalProducerForm,
    setIsKeyDownInsertMainProposalProducerForm,
  ] = useState(true);

  const [insertMainProposalTitleValue, setInsertMainProposalTitleValue] =
    useState();
  const [insertMainProposalPriceValue, setInsertMainProposalPriceValue] =
    useState();
  const [
    insertMainProposalImgProductValue,
    setInsertMainProposalImgProductValue,
  ] = useState();
  const [insertMainProposalStockValue, setInsertMainProposalStockValue] =
    useState();
  const [insertMainProposalDiscountValue, setInsertMainProposalDiscountValue] =
    useState();
  const [insertMainProposalWeightValue, setInsertMainProposalWeightValue] =
    useState();
  const [insertMainProposalGenusValue, setInsertMainProposalGenusValue] =
    useState();
  const [insertMainProposalUsageValue, setInsertMainProposalUsageValue] =
    useState();
  const [insertMainProposalProducerValue, setInsertMainProposalProducerValue] =
    useState();
  const [insertProposalTitleForm, setInsertProposalTitleForm] = useState(true);
  const [
    isKeyDownInsertProposalTitleForm,
    setIsKeyDownInsertProposalTitleForm,
  ] = useState(true);
  const [insertProposalPriceForm, setInsertProposalPriceForm] = useState(true);
  const [
    isKeyDownInsertProposalPriceForm,
    setIsKeyDownInsertProposalPriceForm,
  ] = useState(true);
  const [insertProposalImgProductForm, setInsertProposalImgProductForm] =
    useState(true);
  const [
    isKeyDownInsertProposalImgProductForm,
    setIsKeyDownInsertProposalImgProductForm,
  ] = useState(true);
  const [insertProposalStockForm, setInsertProposalStockForm] = useState(true);
  const [
    isKeyDownInsertProposalStockForm,
    setIsKeyDownInsertProposalStockForm,
  ] = useState(true);
  const [insertProposalDiscountForm, setInsertProposalDiscountForm] =
    useState(true);
  const [
    isKeyDownInsertProposalDiscountForm,
    setIsKeyDownInsertProposalDiscountForm,
  ] = useState(true);
  const [insertProposalWeightForm, setInsertProposalWeightForm] =
    useState(true);
  const [
    isKeyDownInsertProposalWeightForm,
    setIsKeyDownInsertProposalWeightForm,
  ] = useState(true);
  const [insertProposalGenusForm, setInsertProposalGenusForm] = useState(true);
  const [
    isKeyDownInsertProposalGenusForm,
    setIsKeyDownInsertProposalGenusForm,
  ] = useState(true);
  const [insertProposalUsageForm, setInsertProposalUsageForm] = useState(true);
  const [
    isKeyDownInsertProposalUsageForm,
    setIsKeyDownInsertProposalUsageForm,
  ] = useState(true);
  const [insertProposalProducerForm, setInsertProposalProducerForm] =
    useState(true);
  const [
    isKeyDownInsertProposalProducerForm,
    setIsKeyDownInsertProposalProducerForm,
  ] = useState(true);

  const [insertProposalTitleValue, setInsertProposalTitleValue] = useState();
  const [insertProposalPriceValue, setInsertProposalPriceValue] = useState();
  const [insertProposalImgProductValue, setInsertProposalImgProductValue] =
    useState();
  const [insertProposalStockValue, setInsertProposalStockValue] = useState();
  const [insertProposalDiscountValue, setInsertProposalDiscountValue] =
    useState();
  const [insertProposalWeightValue, setInsertProposalWeightValue] = useState();
  const [insertProposalGenusValue, setInsertProposalGenusValue] = useState();
  const [insertProposalUsageValue, setInsertProposalUsageValue] = useState();
  const [insertProposalProducerValue, setInsertProposalProducerValue] =
    useState();

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
        showFormInsertMainProposalProduct,
        setShowFormInsertMainProposalProduct,
        showFormInsertProposalProduct,
        setShowFormInsertProposalProduct,
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

        insertMainProposalTitleForm,
        setInsertMainProposalTitleForm,
        isKeyDownInsertMainProposalTitleForm,
        setIsKeyDownInsertMainProposalTitleForm,
        insertMainProposalPriceForm,
        setInsertMainProposalPriceForm,
        isKeyDownInsertMainProposalPriceForm,
        setIsKeyDownInsertMainProposalPriceForm,
        insertMainProposalImgProductForm,
        setInsertMainProposalImgProductForm,
        isKeyDownInsertMainProposalImgProductForm,
        setIsKeyDownInsertMainProposalImgProductForm,
        insertMainProposalStockForm,
        setInsertMainProposalStockForm,
        isKeyDownInsertMainProposalStockForm,
        setIsKeyDownInsertMainProposalStockForm,
        insertMainProposalDiscountForm,
        setInsertMainProposalDiscountForm,
        isKeyDownInsertMainProposalDiscountForm,
        setIsKeyDownInsertMainProposalDiscountForm,
        insertMainProposalWeightForm,
        setInsertMainProposalWeightForm,
        isKeyDownInsertMainProposalWeightForm,
        setIsKeyDownInsertMainProposalWeightForm,
        insertMainProposalGenusForm,
        setInsertMainProposalGenusForm,
        isKeyDownInsertMainProposalGenusForm,
        setIsKeyDownInsertMainProposalGenusForm,
        insertMainProposalUsageForm,
        setInsertMainProposalUsageForm,
        isKeyDownInsertMainProposalUsageForm,
        setIsKeyDownInsertMainProposalUsageForm,
        insertMainProposalProducerForm,
        setInsertMainProposalProducerForm,
        isKeyDownInsertMainProposalProducerForm,
        setIsKeyDownInsertMainProposalProducerForm,

        insertMainProposalTitleValue,
        setInsertMainProposalTitleValue,
        insertMainProposalPriceValue,
        setInsertMainProposalPriceValue,
        insertMainProposalImgProductValue,
        setInsertMainProposalImgProductValue,
        insertMainProposalStockValue,
        setInsertMainProposalStockValue,
        insertMainProposalDiscountValue,
        setInsertMainProposalDiscountValue,
        insertMainProposalWeightValue,
        setInsertMainProposalWeightValue,
        insertMainProposalGenusValue,
        setInsertMainProposalGenusValue,
        insertMainProposalUsageValue,
        setInsertMainProposalUsageValue,
        insertMainProposalProducerValue,
        setInsertMainProposalProducerValue,

        insertProposalTitleForm,
        setInsertProposalTitleForm,
        isKeyDownInsertProposalTitleForm,
        setIsKeyDownInsertProposalTitleForm,
        insertProposalPriceForm,
        setInsertProposalPriceForm,
        isKeyDownInsertProposalPriceForm,
        setIsKeyDownInsertProposalPriceForm,
        insertProposalImgProductForm,
        setInsertProposalImgProductForm,
        isKeyDownInsertProposalImgProductForm,
        setIsKeyDownInsertProposalImgProductForm,
        insertProposalStockForm,
        setInsertProposalStockForm,
        isKeyDownInsertProposalStockForm,
        setIsKeyDownInsertProposalStockForm,
        insertProposalDiscountForm,
        setInsertProposalDiscountForm,
        isKeyDownInsertProposalDiscountForm,
        setIsKeyDownInsertProposalDiscountForm,
        insertProposalWeightForm,
        setInsertProposalWeightForm,
        isKeyDownInsertProposalWeightForm,
        setIsKeyDownInsertProposalWeightForm,
        insertProposalGenusForm,
        setInsertProposalGenusForm,
        isKeyDownInsertProposalGenusForm,
        setIsKeyDownInsertProposalGenusForm,
        insertProposalUsageForm,
        setInsertProposalUsageForm,
        isKeyDownInsertProposalUsageForm,
        setIsKeyDownInsertProposalUsageForm,
        insertProposalProducerForm,
        setInsertProposalProducerForm,
        isKeyDownInsertProposalProducerForm,
        setIsKeyDownInsertProposalProducerForm,

        insertProposalTitleValue,
        setInsertProposalTitleValue,
        insertProposalPriceValue,
        setInsertProposalPriceValue,
        insertProposalImgProductValue,
        setInsertProposalImgProductValue,
        insertProposalStockValue,
        setInsertProposalStockValue,
        insertProposalDiscountValue,
        setInsertProposalDiscountValue,
        insertProposalWeightValue,
        setInsertProposalWeightValue,
        insertProposalGenusValue,
        setInsertProposalGenusValue,
        insertProposalUsageValue,
        setInsertProposalUsageValue,
        insertProposalProducerValue,
        setInsertProposalProducerValue,
      }}
    >
      {children}
    </AllProductContext.Provider>
  );
};
