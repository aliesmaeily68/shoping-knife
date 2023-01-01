import React, { useContext, useState } from "react";
import DashboardEmptyRoutes from "../../../Components/DashboardAdmin/DashboardEmptyRoutes/DashboardEmptyRoutes";
import DataGridTabeleProducts from "../../../Components/DashboardAdmin/DataGridTabeleProducts/DataGridTabeleProducts";
import InsertNewProductForm from "../../../Components/DashboardAdmin/InsertNewProductForm/InsertNewProductForm";
import { AllProductContext } from "../../../Contexts/ProductContext";
import useFetch from "../../../hooks/useFetch";

import "./DashboardProduct.css";
export default function DashboardProduct() {
  const DataProductContext = useContext(AllProductContext);

  const { posts } = useFetch(
    "https://myknife-2e73f-default-rtdb.firebaseio.com/product.json",
    DataProductContext.getData
  );


  return (
    <div>
      {posts.length ? (
        <>
          <div className="Insert-New-Product">
            <h2>
              اضافه کردن محصول جدید
              {!DataProductContext.showFormInsertProduct && (
                <span
                  onClick={() =>
                    DataProductContext.setShowFormInsertProduct(true)
                  }
                >
                  (برای افزودن کلیک کنید)
                </span>
              )}
            </h2>
            <InsertNewProductForm />
          </div>
          {/* <div>موقتا محصولات نمایش داده نمی شود و در دست توسعه می باشد😌</div> */}
          <DataGridTabeleProducts />
        </>
      ) : (
        <>
          {" "}
          <DashboardEmptyRoutes title="لیست محصولات خالی می باشد 😔" />
          <div className="Insert-New-Product">
            <h2>
              اضافه کردن محصول جدید
              {!DataProductContext.showFormInsertProduct && (
                <span
                  onClick={() =>
                    DataProductContext.setShowFormInsertProduct(true)
                  }
                >
                  (برای افزودن کلیک کنید)
                </span>
              )}
            </h2>
            <InsertNewProductForm />
          </div>
        </>
      )}
    </div>
  );
}
