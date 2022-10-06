import React from "react";
import { useContext } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";
import { Link } from "react-router-dom";
import "./TableComparison.css";

export default function TableComparison() {
  const DataContext = useContext(AllProductContext);

  const RemoveFromComparison = (ComparisonId) => {
    DataContext.setShowModal(true);
    DataContext.setRemoveComparisonId(ComparisonId);
    DataContext.setShowModalComparison(true);
    DataContext.setTitleModal("آیا محصول مورد نظر از لیست مقایسه حذف شود؟");
  };
  return (
    <div className="TableComparison">
      <table>
        <tbody>
          <tr>
            <th>
              <h1>جزئیات محصول</h1>{" "}
            </th>
            {DataContext.userComparison.map((product) => (
              <td key={product.id}>
                <img src={`./Image/${product.productImgName}`} alt="productImg" />
                <h2>{product.title}</h2>
              </td>
            ))}
          </tr>

          <tr>
            <th>
              <h2>قیمت</h2>
            </th>
            {DataContext.userComparison.map((product) => (
              <td>{product.price} تومان</td>
            ))}
          </tr>

          <tr>
            <th>
              <h2>موجودی</h2>
            </th>
            {DataContext.userComparison.map((product) => (
              <td  key={product.id}>
                {product.stock === 0 ? <span className="Empty-Stock-TableComparison">نا موجود</span> : <span className="Stock-TableComparison">موجود</span>}
              </td>
            ))}
          </tr>

          <tr>
            <th>
              <h2>وزن</h2>
            </th>
            {DataContext.userComparison.map((product) => (
              <td key={product.id}>{product.Weight} گرم</td>
            ))}
          </tr>

          <tr>
            <th>
              <h2>جنس</h2>
            </th>
            {DataContext.userComparison.map((product) => (
              <td key={product.id}>{product.genus}</td>
            ))}
          </tr>

          <tr>
            <th>
              <h2>تولیدکننده</h2>
            </th>
            {DataContext.userComparison.map((product) => (
              <td key={product.id}>{product.Producer}</td>
            ))}
          </tr>

          <tr>
            <th>
              <h2>کاربرد</h2>
            </th>
            {DataContext.userComparison.map((product) => (
              <td key={product.id}>{product.usage}</td>
            ))}
          </tr>

          <tr>
            <th></th>
            {DataContext.userComparison.map((product) => (
              <td key={product.id}>
                <button>
                  <Link to={`/products/${product.id}-${product.title}`}>
                    مشاهده محصول
                  </Link>
                </button>
              </td>
            ))}
          </tr>

          <tr>
            <th></th>
            {DataContext.userComparison.map((product) => (
              <td key={product.id}>
                {" "}
                <button
                  className="Delete-TableComparison"
                  onClick={() => RemoveFromComparison(product.id)}
                >
                  حذف از مقایسه
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
