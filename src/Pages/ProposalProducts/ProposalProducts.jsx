// import React, { useContext,useEffect } from "react";
// import ProductCard from "../../Components/ProductCard/ProductCard";
// import { AllProposalProductContext } from "../../Contexts/ProposalProductContext";

// import "./ProposalProducts.css";

// export default function ProposalProducts() {
//   const DataProposalProduct = useContext(AllProposalProductContext);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="Container-ProposalProducts">
//       <h1>پیشنهادات ویژه و شگفت انگیز</h1>
//       <div className="Wrapper-ProposalProducts">
//         {DataProposalProduct.proposalProduct[0].AllProposalProduct.length &&
//           DataProposalProduct.proposalProduct[0].AllProposalProduct.map(
//             (product) => <ProductCard {...product} />
//           )}
//       </div>
//     </div>
//   );
// }
