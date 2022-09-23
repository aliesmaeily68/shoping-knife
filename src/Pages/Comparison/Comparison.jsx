import React from "react";
import TableComparison from "../../Components/TableComparison/TableComparison";
import EmptyComparison from "./EmptyComparison/EmptyComparison";
import "./Comparison.css";
import { useContext , useEffect } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";

export default function Comparison() {
  const DataContext = useContext(AllProductContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Container-Comparison">
      <div className="Wrapper-Comparison">
        {!DataContext.userComparison.length ? (
          <EmptyComparison />
        ) : (
          <TableComparison />
        )}
      </div>
    </div>
  );
}
