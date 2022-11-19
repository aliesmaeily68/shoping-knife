import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { AllProductContext } from "../../Contexts/ProductContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./SearchPage.css";

export default function SearchPage() {
  const DataProductContext = useContext(AllProductContext);
  const [searchsValue, setsearchsValue] = useState([]);

  const paramsvalue = useParams();
  useEffect(() => {
    let filterSerch = DataProductContext.fullProducts.filter((product) =>
      product.title.includes(paramsvalue.value)
    );
    setsearchsValue(filterSerch);
  },[searchsValue]);

  return (
    <>
      {!searchsValue.length ? (
        <>
          <div className="Search-Empty">نتیجه ای برای جستجوی شما یافت نشد</div>
        </>
      ) : (
        <>
          <div className="Search-Container">
            <div className="Search-Title">
              <h1>محصولات یافت شده</h1>
            </div>
            <div className="Search-Wrapper">
              {searchsValue.splice(0,8).map((product) => (
                <ProductCard {...product} key={product.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
