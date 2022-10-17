import { createContext } from "react";
import { useState } from "react";

export const AllProposalProductContext = createContext();

export const ProposalProductsProvider = ({ children }) => {
  const [allProposalData, setAllProposalData] = useState();

  return (
    <AllProposalProductContext.Provider
      value={{
        allProposalData,
        setAllProposalData,
      }}
    >
      {children}
    </AllProposalProductContext.Provider>
  );
};
