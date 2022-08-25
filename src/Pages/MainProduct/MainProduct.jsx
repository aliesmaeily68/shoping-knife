import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
import { NavLink, Outlet, useParams, Navigate, Link } from "react-router-dom";
import "./MainProduct.css";
import { useContext } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";
import { useState } from "react";

export default function MainProduct() {
  const [counterProduct, setCounterProduct] = useState(0);
  const DataContext = useContext(AllProductContext);

  let params = useParams();
  let MainProduct = DataContext.fullProducts.find(
    (product) => params.productTitle.split("-")[0] == product.id
  );

  let hasProduct = DataContext.fullProducts.some(
    (product) => params.productTitle.split("-")[0] == product.id
  );
  DataContext.setMainProduct(MainProduct)

  const IncreaseCounter = () => {
    setCounterProduct((p) => p + 1);
  };
  const DecreasCounter = () => {
    {
      counterProduct > 0 && setCounterProduct((p) => p - 1);
    }
  };
  const AddToCart = () => {
    {
      counterProduct > 0 && DataContext.setShowToasts(true);
    }

    setTimeout(() => {
      DataContext.setShowToasts(false);
    }, 3000);
    const products = [...DataContext.userCart];
    const IsProductInCart = products.some(
      (Item) => Item.title == MainProduct.title
    );
    if (!IsProductInCart) {
      const NewMainProductObj = {
        id: DataContext.userCart.length + 1,
        title: MainProduct.title,
        price:
          MainProduct.price - (MainProduct.price * MainProduct.discount) / 100,
        imgName: MainProduct.imgName,
        conter: counterProduct,
      };
      DataContext.setUserCart((p) => [...p, NewMainProductObj]);
    } else {
      products.map((item) => {
        if (item.title == MainProduct.title) {
          item.conter = item.conter + counterProduct;
          return true;
        }
      });
    }
    DataContext.setTotal(
      (p) =>
        p +
        counterProduct *
          (MainProduct.price - (MainProduct.price * MainProduct.discount) / 100)
    );
    DataContext.setCartConter((p) => p + counterProduct);
    setCounterProduct(0);
  };

  return (
    <>
      {hasProduct ? (
        <>
          <div className="MainProduct-Container">
            <div className="MainProduct-wrapper">
              <div className="MainProduct-img">
                <img src={`../Image/${MainProduct.imgName}`} alt="product" />
              </div>
              <div className="MainProduct-ProductInfo">
                <nav className="MainProduct-Breadcrumb">
                  {/**insert className opacity-low to increase opacity */}
                  <Link to={"/"}>
                    {" "}
                    <span className="MainProduct-Breadcrumb-Home opacity-low">
                      خانه
                    </span>
                  </Link>

                  <span>/</span>
                  <Link to={`/product/${MainProduct.Category}`}>
                    {" "}
                    <span className="MainProduct-Breadcrumb-Category opacity-low">
                      {MainProduct.Category}
                    </span>
                  </Link>

                  <span>/</span>
                  <span className="MainProduct-Breadcrumb-Title">
                    {MainProduct.title}
                  </span>
                </nav>
                <div className="MainProduct-Title">{MainProduct.title}</div>
                <div className="MainProduct-price">
                  <span className="MainProduct-MainPrice">
                    {MainProduct.price}
                  </span>
                  <div>
                    <span className="MainProduct-Price-WithDiscount">
                      {MainProduct.price -
                        (MainProduct.price * MainProduct.discount) / 100}{" "}
                      تومان
                    </span>
                  </div>
                </div>
                <ul className="MainProduct-ListGroup-ProductInfo">
                  <li className="MainProduct-list-ProductInfo">
                    <RiArrowLeftSLine />
                    <span>تولید کننده : صنایع چاقو سازی اکبر پلنگی </span>
                  </li>
                  <li className="MainProduct-list-ProductInfo">
                    <RiArrowLeftSLine />
                    <span>وزن : 125 گرم</span>
                  </li>
                  <li className="MainProduct-list-ProductInfo">
                    <RiArrowLeftSLine />
                    <span>جنس : آلمینیوم خالص </span>
                  </li>
                  <li className="MainProduct-list-ProductInfo">
                    <RiArrowLeftSLine />
                    <span>کاربردها : کشتن گاو </span>
                  </li>
                </ul>

                <div className="MainProduct-InsertToBagCart">
                  <div className="MainProduct-increasOrdecreas-Product">
                    <button
                      className="MainProduct-increas"
                      onClick={IncreaseCounter}
                    >
                      +
                    </button>
                    <span>{counterProduct}</span>
                    <button
                      className="MainProduct-decreas"
                      onClick={DecreasCounter}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className="MainProduct-btn-BagCart"
                    onClick={AddToCart}
                  >
                    افزودن به سبد خرید
                  </button>
                </div>
                <div className="MainProduct-Icons">
                  <div className="MainProduct-Icon-Comparison">
                    <TbArrowsShuffle className="MainProduct-MainIcon" />
                    <span>مقایسه</span>
                  </div>
                  <div className="MainProduct-Icon-Favorites">
                    <AiOutlineHeart className="MainProduct-MainIcon" />{" "}
                    <span>افزودن به علاقه مندی</span>
                  </div>
                </div>
                <hr />
                <div className="MainProduct-Category-Title">
                  دسته : <span>{MainProduct.Category} </span>
                </div>
                <div className="MainProduct-Stock">
                  {/**insert className to span Empty-Stock for EmptyStock */}
                  وضعیت : <span>موجود</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="MainProduct-Discription-Comments">
              <ul className="ListGroup-MainProduct-Discription-Comments">
                <NavLink
                  to={"descriptionproduct"}
                  className={(link) =>
                    link.isActive ? "MainProduct-Menu-Activ" : ""
                  }
                >
                  <li className="List-MainProduct-Discription">توضیحات</li>
                </NavLink>
                <NavLink
                  to={"commentsproduct"}
                  className={(link) =>
                    link.isActive ? "MainProduct-Menu-Activ" : ""
                  }
                >
                  <li className="List-MainProduct-Comments">نظرات</li>
                </NavLink>
              </ul>
            </div>
          </div>
          <Outlet />{" "}
        </>
      ) : (
        <Navigate to="/product" />
      )}
    </>
  );
}
