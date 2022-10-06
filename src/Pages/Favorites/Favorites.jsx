import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { AllProductContext } from "../../Contexts/ProductContext";
import EmpetyFavorites from "./EmpetyFavorites/EmpetyFavorites";
import "./Favorites.css";

export default function Favorites() {
  const DataContext = useContext(AllProductContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ShowModalFavorit = (RemoveFavoritesId) => {
    DataContext.setShowModal(true);
    DataContext.setRemoveFavoritesId(RemoveFavoritesId);
    DataContext.setShowModalFavorites(true);
    DataContext.setTitleModal("آیا محصول مورد نظر از علاقه مندی ها حذف شود؟");
  };
  return (
    <>
      <div className="Container-Favorites">
        <div className="Wrapper-Favorites">
          {!DataContext.userFavorites.length ? (
            <EmpetyFavorites />
          ) : (
            <div className="Table-Favorites">
              <table>
                <thead>
                  <tr>
                    <th>حذف</th>
                    <th>تصویر</th>
                    <th>محصول</th>
                    <th>وضعیت انبار</th>
                    <th>قیمت </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {DataContext.userFavorites.map((product) => (
                    <tr className="Favorites-Item" key={product.id}>
                      <td class="Product-Remove-Favorites">
                        <AiOutlineClose
                          onClick={() => ShowModalFavorit(product.id)}
                        />
                      </td>

                      <td class="Product-Name-Thumbnail-Favorites">
                        <img src={`../Image/${product.productImgName}`} alt="" />
                        <div className="Title-Favorites">
                          <span>{product.title}</span>
                        </div>
                      </td>

                      <td class="Product-Stock-Favorites" data-title="تعداد">
                        {product.stock != 0 ? (
                          <span>موجود</span>
                        ) : (
                          <span>موجود نیست</span>
                        )}
                      </td>

                      <td class="Product-Price-Favorites" data-title="قیمت">
                        <span>{product.price} تومان</span>
                      </td>
                      <td class="Product-Btn-Favorites" data-title="قیمت">
                        <Link to={`/products/${product.id}-${product.title}`}>
                          <button>مشاهده بیشتر</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
