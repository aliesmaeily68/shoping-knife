import React from "react";
import { TbArrowsShuffle } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import "./ProductIconCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AllProductContext } from "../../../Contexts/ProductContext";

export default function ProductIconCard(props) {
  const DataContext = useContext(AllProductContext);

  const AddToComparison = () => {
    if (DataContext.userComparison.length < 4) {
      DataContext.setToastTitle("محصول به مقایسه اضافه گردید .");
      DataContext.setShowToasts(true);
      setTimeout(() => {
        DataContext.setShowToasts(false);
      }, 3000);
      const productComparison = [...DataContext.userComparison];
      const IsProductInComparison = productComparison.some(
        (Item) => Item.title == props.title
      );
      if (!IsProductInComparison) {
        DataContext.setComparisonConter((p) => p + 1);
        const Newobject = {
          id: props.id,
          title: props.title,
          price: props.price - (props.price * props.discount) / 100,
          imgName: props.imgName,
          stock: props.stock,
          conter: props.conter,
          Weight: props.Weight,
          genus: props.genus,
          usage: props.usage,
          Producer: props.Producer,
        };
        DataContext.setUserComparison((p) => [...p, Newobject]);
      } else {
        DataContext.setToastTitle("این محصول قبلا به مقایسه اضافه شده است.");
        DataContext.setShowToasts(true);
        setTimeout(() => {
          DataContext.setShowToasts(false);
        }, 3000);
      }
    }else{
      DataContext.setToastTitle("حداکثر 4 محصول میتوان به مقایسه اضافه کرد.");
      DataContext.setShowToasts(true);
      setTimeout(() => {
        DataContext.setShowToasts(false);
      }, 3000);
    }
  };

  const AddToFavorites = () => {
    DataContext.setToastTitle("محصول به علاقه مندی ها اضافه گردید .");
    DataContext.setShowToasts(true);
    setTimeout(() => {
      DataContext.setShowToasts(false);
    }, 3000);
    const productFavorites = [...DataContext.userFavorites];
    const IsProductInFavorites = productFavorites.some(
      (Item) => Item.title == props.title
    );
    if (!IsProductInFavorites) {
      DataContext.setFavoritesConter((p) => p + 1);
      const Newobject = {
        id: props.id,
        title: props.title,
        price: props.price - (props.price * props.discount) / 100,
        imgName: props.imgName,
        stock: props.stock,
        conter: props.conter,
      };
      DataContext.setUserFavorites((p) => [...p, Newobject]);
    } else {
      DataContext.setToastTitle(
        "این محصول قبلا به علاقه مندی ها اضافه شده است."
      );
      DataContext.setShowToasts(true);
      setTimeout(() => {
        DataContext.setShowToasts(false);
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
          <Link to={`/product/${props.id}-${props.title}`}>
            <CgMoreO />
          </Link>
          <div className="Tooltip-CardIcon">مشاهده بیشتر </div>
        </div>
      </div>
    </>
  );
}
