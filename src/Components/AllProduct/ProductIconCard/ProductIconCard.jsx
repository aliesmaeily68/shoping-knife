import React, { useEffect } from "react";
import { TbArrowsShuffle } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import "./ProductIconCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AllProductContext } from "../../../Contexts/ProductContext";

export default function ProductIconCard(props) {
  const DataProductsContext = useContext(AllProductContext);


  const AddToComparison = () => {
    if (DataProductsContext.userComparison.length < 4) {
      DataProductsContext.setToastTitle("محصول به مقایسه اضافه گردید .");
      DataProductsContext.setShowToasts(true);
      setTimeout(() => {
        DataProductsContext.setShowToasts(false);
      }, 3000);
      const productComparison = [...DataProductsContext.userComparison];
      const IsProductInComparison = productComparison.some(
        (Item) => Item.title == props.title
      );
      if (!IsProductInComparison) {
        DataProductsContext.setComparisonConter((p) => p + 1);

        const Newobject = {
          id: props.id,
          title: props.title,
          price: props.price - (props.price * props.discount) / 100,
          productImgName: props.productImgName,
          stock: props.stock,
          conter: props.conter,
          Weight: props.Weight,
          genus: props.genus,
          usage: props.usage,
          Producer: props.Producer,
        };
        productComparison.push(Newobject);
        DataProductsContext.setUserComparison(productComparison);
        localStorage.setItem(
          "counterComparison",
          JSON.stringify(DataProductsContext.comparisonConter + 1)
        );
        localStorage.setItem(
          "userComparison",
          JSON.stringify(productComparison)
        );
      } else {
        DataProductsContext.setToastTitle(
          "این محصول قبلا به مقایسه اضافه شده است."
        );
        DataProductsContext.setShowToasts(true);
        setTimeout(() => {
          DataProductsContext.setShowToasts(false);
        }, 3000);
      }
    } else {
      DataProductsContext.setToastTitle(
        "حداکثر 4 محصول میتوان به مقایسه اضافه کرد."
      );
      DataProductsContext.setShowToasts(true);
      setTimeout(() => {
        DataProductsContext.setShowToasts(false);
      }, 3000);
    }
  };

  const AddToFavorites = () => {
    DataProductsContext.setToastTitle("محصول به علاقه مندی ها اضافه گردید .");
    DataProductsContext.setShowToasts(true);
    setTimeout(() => {
      DataProductsContext.setShowToasts(false);
    }, 3000);
    const productFavorites = [...DataProductsContext.userFavorites];
    const IsProductInFavorites = productFavorites.some(
      (Item) => Item.title == props.title
    );
    if (!IsProductInFavorites) {
      DataProductsContext.setFavoritesConter((p) => p + 1);
      const Newobject = {
        id: props.id,
        title: props.title,
        price: props.price - (props.price * props.discount) / 100,
        productImgName: props.productImgName,
        stock: props.stock,
        conter: props.conter,
      };
      productFavorites.push(Newobject);
      DataProductsContext.setUserFavorites(productFavorites);
      localStorage.setItem(
        "counterFavorites",
        JSON.stringify(DataProductsContext.favoritesConter + 1)
      );
      localStorage.setItem("userFavorites", JSON.stringify(productFavorites));
    } else {
      DataProductsContext.setToastTitle(
        "این محصول قبلا به علاقه مندی ها اضافه شده است."
      );
      DataProductsContext.setShowToasts(true);
      setTimeout(() => {
        DataProductsContext.setShowToasts(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="Card-Icons">
        <div className="card-Icon">
          <TbArrowsShuffle onClick={() => AddToComparison()} />
          <div className="Tooltip-CardIcon">مقایسه </div>
        </div>
        <div className="card-Icon">
          <AiOutlineHeart onClick={() => AddToFavorites()} />
          <div className="Tooltip-CardIcon">افزودن به علاقه مندی </div>
        </div>
        <div className="card-Icon">
          <Link to={`/products/${props.id}&&${props.title}`}>
            <CgMoreO />
          </Link>
          <div className="Tooltip-CardIcon">مشاهده بیشتر </div>
        </div>
      </div>
    </>
  );
}
