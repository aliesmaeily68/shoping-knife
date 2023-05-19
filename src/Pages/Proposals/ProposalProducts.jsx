import React, { useContext, useState ,useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { AllProductContext } from "../../Contexts/ProductContext";
import { AllProposalProductContext } from "../../Contexts/ProposalProductContext";

import "./ProposalProducts.css";

export default function ProposalProducts() {
  const DataproposalContext = useContext(AllProposalProductContext);
  const DataContex = useContext(AllProductContext);
  const [allProposalDataFlag, setAllProposalDataFlag] = useState();
  let AllProposalData = [];
  useEffect(() => {
    fetch(
      "https://aaaa-f46f5-default-rtdb.firebaseio.com//allProposalProduct.json"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAllProposalDataFlag(true);
          Object.entries(data).map((product) =>
            AllProposalData.push(product[1])
          );
          DataContex.setFullProducts((p) => [...p, ...AllProposalData]);
          DataproposalContext.setAllProposalData(AllProposalData);
        }
      });
  });
  return (
    <div className="Container-ProposalProducts">
      <div className="Wrapper-ProposalProducts">
        {allProposalDataFlag &&
          DataproposalContext.allProposalData &&
          DataproposalContext.allProposalData.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
      </div>
    </div>
  );
}
