import React from "react";
import { Card } from "react-bootstrap";
import ProductIconCard from "../../AllProduct/ProductIconCard/ProductIconCard";
import "./ProposalProductCard.css";

export default function ProposalProductCard() {
  return (
    <>
      <div className="Proposal-products-Card">
        <div className="Proposal-Product-Card">
          <div className="Proposal-Icon-Card-Product">
            <ProductIconCard />
          </div>
          <div className="Proposal-Product-Wrapper-Card">
            <div className="Proposal-Product-Discount">
              <span>10%</span>
            </div>

            <Card.Img variant="top" src="./Image/5.jpeg" />
            <div className="Proposal-Card-Product-Body">
              <div className="Proposal-Card-Product-Title">
                <span> چاقو</span>
              </div>
              <div className="Proposal-Price-Product-Card">
                <span className="Proposal-Price-Discount-Card">15000</span>
                <div>
                  <span className="Proposal-Price-Card">12000 تومان</span>
                </div>
              </div>
              <div className="Proposal-Conter-Product-Card">
                <span> موجودی :</span>
                <span>10</span>
              </div>
              <div className="Proposal-Insert-Cart">
                <span>افزودن به سبد خرید</span>
              </div>
            </div>
          </div>
        </div>

        <div className="Proposal-Product-Card">
          <div className="Proposal-Icon-Card-Product">
            <ProductIconCard />
          </div>
          <div className="Proposal-Product-Wrapper-Card">
            <div className="Proposal-Product-Discount">
              <span>10%</span>
            </div>

            <Card.Img variant="top" src="./Image/5.jpeg" />
            <div className="Proposal-Card-Product-Body">
              <div className="Proposal-Card-Product-Title">
                <span> چاقو</span>
              </div>
              <div className="Proposal-Price-Product-Card">
                <span className="Proposal-Price-Discount-Card">15000</span>
                <div>
                  <span className="Proposal-Price-Card">12000 تومان</span>
                </div>
              </div>
              <div className="Proposal-Conter-Product-Card">
                <span> موجودی :</span>
                <span>10</span>
              </div>
              <div className="Proposal-Insert-Cart">
                <span>افزودن به سبد خرید</span>
              </div>
            </div>
          </div>
        </div>

        <div className="Proposal-Product-Card">
          <div className="Proposal-Icon-Card-Product">
            <ProductIconCard />
          </div>
          <div className="Proposal-Product-Wrapper-Card">
            <div className="Proposal-Product-Discount">
              <span>10%</span>
            </div>

            <Card.Img variant="top" src="./Image/5.jpeg" />
            <div className="Proposal-Card-Product-Body">
              <div className="Proposal-Card-Product-Title">
                <span> چاقو</span>
              </div>
              <div className="Proposal-Price-Product-Card">
                <span className="Proposal-Price-Discount-Card">15000</span>
                <div>
                  <span className="Proposal-Price-Card">12000 تومان</span>
                </div>
              </div>
              <div className="Proposal-Conter-Product-Card">
                <span> موجودی :</span>
                <span>10</span>
              </div>
              <div className="Proposal-Insert-Cart">
                <span>افزودن به سبد خرید</span>
              </div>
            </div>
          </div>
        </div>

        <div className="Proposal-Product-Card">
          <div className="Proposal-Icon-Card-Product">
            <ProductIconCard />
          </div>
          <div className="Proposal-Product-Wrapper-Card">
            <div className="Proposal-Product-Discount">
              <span>10%</span>
            </div>

            <Card.Img variant="top" src="./Image/5.jpeg" />
            <div className="Proposal-Card-Product-Body">
              <div className="Proposal-Card-Product-Title">
                <span> چاقو</span>
              </div>
              <div className="Proposal-Price-Product-Card">
                <span className="Proposal-Price-Discount-Card">15000</span>
                <div>
                  <span className="Proposal-Price-Card">12000 تومان</span>
                </div>
              </div>
              <div className="Proposal-Conter-Product-Card">
                <span> موجودی :</span>
                <span>10</span>
              </div>
              <div className="Proposal-Insert-Cart">
                <span>افزودن به سبد خرید</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
