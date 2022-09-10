import React, { useContext } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { AllProposalProductContext } from "../../Contexts/ProposalProductContext";

import "./ProposalProducts.css";

export default function ProposalProducts() {
  const DataproposalContext = useContext(AllProposalProductContext);
  console.log(DataproposalContext.proposalProduct[0][0].AllProposalProduct);
  return (
    <div className="Container-ProposalProducts">
      <div className="Wrapper-ProposalProducts">
        {DataproposalContext.proposalProduct[0][0].AllProposalProduct.length &&
          DataproposalContext.proposalProduct[0][0].AllProposalProduct.map(
            (product) => <ProductCard {...product} key={product.id} />
          )}
      </div>
    </div>
  );
}
