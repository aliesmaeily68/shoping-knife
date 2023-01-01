import React, { useContext } from "react";
import DashboardEmptyRoutes from "../../../Components/DashboardAdmin/DashboardEmptyRoutes/DashboardEmptyRoutes";
import DataGridTabeleProposal from "../../../Components/DashboardAdmin/DataGridTabeleProposal/DataGridTabeleProposal";
import DataGridTabeleMainProposal from "../../../Components/DashboardAdmin/DataGridTabeleMainProposal/DataGridTabeleMainProposal";
import InsertNewMainProposalProductForm from "../../../Components/DashboardAdmin/InsertNewMainProposalProductForm/InsertNewMainProposalProductForm";
import InsertNewProposalProductForm from "../../../Components/DashboardAdmin/InsertNewProposalProductForm/InsertNewProposalProductForm";

import { AllProductContext } from "../../../Contexts/ProductContext";
import useFetch from "../../../hooks/useFetch";

import "./DashboardProposal.css";
export default function DashboardProposal() {
  const DataProductContext = useContext(AllProductContext);

  const { posts } = useFetch(
    "https://myknife-2e73f-default-rtdb.firebaseio.com/mainProposalProduct.json",
    DataProductContext.getData
  );

  return (
    <div>
      {posts.length ? (
        <>
          <div className="Insert-New-proposalProduct">
            <h2>
              اضافه کردن 4 محصول شگفت انگیز صفحه اصلی
              {!DataProductContext.showFormInsertMainProposalProduct && (
                <span
                  onClick={() =>
                    DataProductContext.setShowFormInsertMainProposalProduct(
                      true
                    )
                  }
                >
                  (برای افزودن کلیک کنید)
                </span>
              )}
            </h2>
            <InsertNewMainProposalProductForm />
          </div>
          <DataGridTabeleMainProposal />
          <div className="Insert-New-proposalProduct">
            <h2>
              اضافه کردن محصولات شگفت انگیز
              {!DataProductContext.showFormInsertProposalProduct && (
                <span
                  onClick={() =>
                    DataProductContext.setShowFormInsertProposalProduct(true)
                  }
                >
                  (برای افزودن کلیک کنید)
                </span>
              )}
            </h2>
            <InsertNewProposalProductForm />
          </div>
          <DataGridTabeleProposal />
        </>
      ) : (
        <>
          {" "}
          <DashboardEmptyRoutes title="لیست محصولات خالی می باشد 😔" />
          <div className="Insert-New-proposalProduct">
            <h2>
              اضافه کردن 4 محصول شگفت انگیز صفحه اصلی
              {!DataProductContext.showFormInsertMainProposalProduct && (
                <span
                  onClick={() =>
                    DataProductContext.setShowFormInsertMainProposalProduct(
                      true
                    )
                  }
                >
                  (برای افزودن کلیک کنید)
                </span>
              )}
            </h2>
            <InsertNewMainProposalProductForm />
          </div>
          <div className="Insert-New-proposalProduct">
            <h2>
              اضافه کردن محصولات شگفت انگیز
              {!DataProductContext.showFormInsertProposalProduct && (
                <span
                  onClick={() =>
                    DataProductContext.setShowFormInsertProposalProduct(true)
                  }
                >
                  (برای افزودن کلیک کنید)
                </span>
              )}
            </h2>
            <InsertNewProposalProductForm />
          </div>
        </>
      )}
    </div>
  );
}
