import { createContext } from "react";
import { useState } from "react";
import { ProposalProducts } from "../Datas"; 

export const AllProposalProductContext = createContext();

export const ProposalProductsProvider = ({ children }) => {
  const [proposalProduct, setProposalProduct] = useState(ProposalProducts);


  return (
    <AllProposalProductContext.Provider
      value={{
        proposalProduct,
        setProposalProduct,
      }}
    >
      {children}
    </AllProposalProductContext.Provider>
  );
};
