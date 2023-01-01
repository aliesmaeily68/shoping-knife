import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { AllProductContext } from "../../../Contexts/ProductContext";
import ProductIconCard from "../../AllProduct/ProductIconCard/ProductIconCard";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./ProposalProductCard.css";

export default function ProposalProductCard() {
  const DataContex = useContext(AllProductContext);
  let ProposalData = [];
  const [mainProposalData, setMainProposalData] = useState([]);
  const [mainProposalDataFlag, setMainProposalDataFlag] = useState(false);

  useEffect(() => {
    fetch(
      "https://myknife-2e73f-default-rtdb.firebaseio.com/mainProposalProduct.json"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMainProposalDataFlag(true);
          Object.entries(data).map((product) => ProposalData.push(product[1]));
          {
            DataContex.fullProducts &&
              DataContex.setFullProducts((prev) => [...prev, ...ProposalData]);
          }
          setMainProposalData(ProposalData);
        }
      });
  });
  const AddtoCart = (product) => {
    DataContex.setToastTitle("محصول با موفقیت به سبد خرید اضافه گردید .");
    DataContex.setTotal(
      (prevTotal) =>
        prevTotal + (product.price - (product.price * product.discount) / 100)
    );
    DataContex.setCartConter((prevCartConter) => prevCartConter + 1);
    DataContex.setShowToasts(true);
    setTimeout(() => {
      DataContex.setShowToasts(false);
    }, 3000);
    const products = [...DataContex.userCart];
    const IsProductInCart = products.some(
      (Item) => Item.title == product.title
    );
    if (!IsProductInCart) {
      const Newobject = {
        id: uuidv4(),
        title: product.title,
        price: product.price - (product.price * product.discount) / 100,
        productImgName: product.productImgName,
        conter: 1,
      };
      products.push(Newobject);
      DataContex.setUserCart(products);
    } else {
      products.map((item) => {
        if (item.title == product.title) {
          item.conter = item.conter + 1;
          return true;
        }
      });
    }

    let total = 0;
    let counters = 0;
    products.map((product) => {
      counters += product.conter;
      total += product.price * product.conter;
    });
    localStorage.setItem("counterProductsCart", JSON.stringify(counters));
    localStorage.setItem("totalProductsCart", JSON.stringify(total));
    localStorage.setItem("userProductCart", JSON.stringify(products));
  };
  return (
    <>
      <div className="Proposal-products-Card">
        {mainProposalDataFlag &&
          mainProposalData &&
          mainProposalData.map((product) => (
            <div className="Proposal-Product-Card" key={product.id}>
              <div className="Proposal-Icon-Card-Product">
                <ProductIconCard {...product} />
              </div>
              <div className="Proposal-Product-Wrapper-Card">
                <div className="Proposal-Product-Discount">
                  <span>{product.discount}%</span>
                </div>

                <Card.Img
                  variant="top"
                  src={`./Image/${product.productImgName}`}
                />
                <div className="Proposal-Card-Product-Body">
                  <div className="Proposal-Card-Product-Title">
                    <span> {product.title}</span>
                  </div>
                  <div className="Proposal-Price-Product-Card">
                    <span className="Proposal-Price-Discount-Card">
                      {product.price}
                    </span>
                    <div>
                      <span className="Proposal-Price-Card">
                        {product.price -
                          (product.price * product.discount) / 100}{" "}
                        تومان
                      </span>
                    </div>
                  </div>
                  <div className="Proposal-MoreInfo-Product-Card">
                    <Link to={`/products/${product.id}&&${product.title}`}>
                      <span> مشاهده بیشتر</span>
                    </Link>
                  </div>
                  <div
                    className="Proposal-Insert-Cart"
                    onClick={() => AddtoCart(product)}
                  >
                    <span>افزودن به سبد خرید</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
