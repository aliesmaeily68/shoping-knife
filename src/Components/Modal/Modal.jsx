import React from "react";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AllProductContext } from "../../Contexts/ProductContext";
import "./Modal.css";

export default function Modals() {
  const DataContext = useContext(AllProductContext);
  const DeletProduct = () => {
    if (DataContext.showModalFavorites) {
      DataContext.setShowModal(false);
      const Favorites = [...DataContext.userFavorites];
      const NewFavorites = Favorites.filter(
        (Product) => Product.id !== DataContext.removeFavoritesId
      );
      DataContext.setUserFavorites(NewFavorites);
      DataContext.setFavoritesConter((p) => p - 1);
      DataContext.setShowModalFavorites(false);
    }

    if (DataContext.showModalComparison) {
      DataContext.setShowModal(false);
      const Comparison = [...DataContext.userComparison];
      const NewComparison = Comparison.filter(
        (Product) => Product.id !== DataContext.removeComparisonId
      );
      DataContext.setUserComparison(NewComparison);
      DataContext.setComparisonConter((p) => p - 1);
      DataContext.setShowModalComparison(false);
    }
  };
  return (
    <>
      {/**insert className ShowModal to Showing Modal */}
      <div
        className={`Container-Modal ${
          DataContext.showModal ? "ShowModal" : ""
        }`}
      >
        <div className="close-Modal">
          <AiOutlineClose onClick={() => DataContext.setShowModal(false)} />
        </div>
        <div className="paragraph-Modal">
          <p>{DataContext.titleModal}</p>
        </div>
        <div className="Btns-Modal">
          <button id="Accept-Modal" onClick={() => DeletProduct()}>
            بله
          </button>
          <button
            id="Reject-Modal"
            onClick={() => DataContext.setShowModal(false)}
          >
            خیر
          </button>
        </div>
      </div>
    </>
  );
}
