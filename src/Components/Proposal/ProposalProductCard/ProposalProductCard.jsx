import React from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { AllProductContext } from "../../../Contexts/ProductContext";
import { AllProposalProductContext } from "../../../Contexts/ProposalProductContext";
import ProductIconCard from "../../AllProduct/ProductIconCard/ProductIconCard";
import {Link} from 'react-router-dom'
import "./ProposalProductCard.css";

export default function ProposalProductCard() {
  const DataContex = useContext(AllProductContext);
  const DataProposalContext = useContext(AllProposalProductContext);
  const AddtoCart = (product) => {
    DataContex.setToastTitle('محصول با موفقیت به سبد خرید اضافه گردید .')
    DataContex.setTotal(
      (prevTotal) =>
        prevTotal + product.price - (product.price * product.discount) / 100
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
        id: DataContex.userCart.length + 1,
        title: product.title,
        price: product.price - (product.price * product.discount) / 100,
        imgName: product.imgName,
        conter: 1,
      };
      DataContex.setUserCart((p) => [...p, Newobject]);
    } else {
      products.map((item) => {
        if (item.title == product.title) {
          item.conter = item.conter + 1;
          return true;
        }
      });
    }
  };
  return (
    <>
      <div className="Proposal-products-Card">
        {DataProposalContext.proposalProduct &&
          DataProposalContext.proposalProduct[0].map((data) =>
            data.MainProposalProduct.map((product) => (
              <div className="Proposal-Product-Card" key={product.id}>
                <div className="Proposal-Icon-Card-Product">
                  <ProductIconCard {...product}/>
                </div>
                <div className="Proposal-Product-Wrapper-Card">
                  <div className="Proposal-Product-Discount">
                    <span>{product.discount}%</span>
                  </div>

                  <Card.Img variant="top" src={`./Image/${product.imgName}`} />
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
                      <Link to={`/products/${product.id}-${product.title}`} >
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
            ))
          )}
      </div>
    </>
  );
}
