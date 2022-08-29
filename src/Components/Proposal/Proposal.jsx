import React from "react";
import ProposalProductCard from "./ProposalProductCard/ProposalProductCard";
import ProposalProductCategoryCard from './ProposalProductCategoryCard/ProposalProductCategory'
import "./Proposal.css";


export default function Proposal() {
  return (
    <>
      <div className="Container-Proposal-Category">
        <div className="Proposal-Category">
          <div className="Proposal">
            <div className="Proposal-Wrapper">
              {" "}
              <div className="Proposal-text-btn">
                <span className="Proposal-text">پیشنهاد ویژه شگفت انگیز</span>
                <button className="Proposal-btn">مشاهده همه</button>
              </div>
              <div className="Proposal-Products">
                <ProposalProductCard />
              </div>
            </div>
          </div>
          
          <div style={{ height: "100px", overflow: "hidden" }}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: "100%", width: "100%" }}
            >
              <path
                d="M0.00,49.99 C206.77,94.24 247.40,94.24 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
                style={{ stroke: "none", fill: "var(--Dark-Color)" }}
              ></path>
            </svg>
          </div>
          <div className="Proposal-Product-Category-Title">
            <h2>دسته بندی محصولات</h2>
            <div className="Br-Proposal-Product-Category-Title"></div>
          </div>
          <div className="Proposal-Product-Category">
            <ProposalProductCategoryCard />
          </div>
        </div>

        <div style={{ height: "100px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: " 100%" }}
          >
            <path
              d="M0.00,49.99 C195.48,12.32 251.92,9.38 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "var(--Primary-Color)" }}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
