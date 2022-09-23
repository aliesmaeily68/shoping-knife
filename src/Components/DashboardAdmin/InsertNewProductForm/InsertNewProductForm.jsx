import React, { useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { AllProductContext } from "../../../Contexts/ProductContext";
import { AiOutlineClose } from "react-icons/ai";

import "./InsertNewProductForm.css";

export default function InsertNewProductForm() {
  const DataProductContext = useContext(AllProductContext);

  const InsertMainCategoryFormRef = useRef();
  const InsertImg1MainCategoryFormRef = useRef();
  const InsertImg2MainCategoryFormRef = useRef();
  const InsertCategoryFormRef = useRef();
  const InsertSubCategoryFormRef = useRef();
  const InsertTitleFormRef = useRef();
  const InsertPriceFormRef = useRef();
  const InsertImgProductFormRef = useRef();
  const InsertStockFormRef = useRef();
  const InsertDiscountFormRef = useRef();
  const InsertWeightFormRef = useRef();
  const InsertGenusFormRef = useRef();
  const InsertUsageFormRef = useRef();
  const InsertProducerFormRef = useRef();

  const InsertNewProductHandler = (event) => {
    event.preventDefault();

    const RegexNotEmpty = /./;
    // const RegexEmail = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;

    if (RegexNotEmpty.test(InsertMainCategoryFormRef.current.value)) {
      DataProductContext.setInsertMainCategoryForm(true);
      DataProductContext.setIsKeyDownInsertMainCategoryForm(true);
    } else {
      DataProductContext.setInsertMainCategoryForm(false);
      DataProductContext.setIsKeyDownInsertMainCategoryForm(false);
    }

    if (RegexNotEmpty.test(InsertImg1MainCategoryFormRef.current.value)) {
      DataProductContext.setInsertImg1MainCategoryForm(true);
      DataProductContext.setIsKeyDownInsertImg1MainCategoryForm(true);
    } else {
      DataProductContext.setInsertImg1MainCategoryForm(false);
      DataProductContext.setIsKeyDownInsertImg1MainCategoryForm(false);
    }

    if (RegexNotEmpty.test(InsertImg2MainCategoryFormRef.current.value)) {
      DataProductContext.setInsertImg2MainCategoryForm(true);
      DataProductContext.setIsKeyDownInsertImg2MainCategoryForm(true);
    } else {
      DataProductContext.setInsertImg2MainCategoryForm(false);
      DataProductContext.setIsKeyDownInsertImg2MainCategoryForm(false);
    }

    if (RegexNotEmpty.test(InsertCategoryFormRef.current.value)) {
      DataProductContext.setInsertCategoryForm(true);
      DataProductContext.setIsKeyDownInsertCategoryForm(true);
    } else {
      DataProductContext.setInsertCategoryForm(false);
      DataProductContext.setIsKeyDownInsertCategoryForm(false);
    }

    if (RegexNotEmpty.test(InsertSubCategoryFormRef.current.value)) {
      DataProductContext.setInsertSubCategoryForm(true);
      DataProductContext.setIsKeyDownInsertSubCategoryForm(true);
    } else {
      DataProductContext.setInsertSubCategoryForm(false);
      DataProductContext.setIsKeyDownInsertSubCategoryForm(false);
    }

    if (RegexNotEmpty.test(InsertTitleFormRef.current.value)) {
      DataProductContext.setInsertTitleForm(true);
      DataProductContext.setIsKeyDownInsertTitleForm(true);
    } else {
      DataProductContext.setInsertTitleForm(false);
      DataProductContext.setIsKeyDownInsertTitleForm(false);
    }

    if (RegexNotEmpty.test(InsertPriceFormRef.current.value)) {
      DataProductContext.setInsertPriceForm(true);
      DataProductContext.setIsKeyDownInsertPriceForm(true);
    } else {
      DataProductContext.setInsertPriceForm(false);
      DataProductContext.setIsKeyDownInsertPriceForm(false);
    }

    if (RegexNotEmpty.test(InsertImgProductFormRef.current.value)) {
      DataProductContext.setInsertImgProductForm(true);
      DataProductContext.setIsKeyDownInsertImgProductForm(true);
    } else {
      DataProductContext.setInsertImgProductForm(false);
      DataProductContext.setIsKeyDownInsertImgProductForm(false);
    }

    if (RegexNotEmpty.test(InsertStockFormRef.current.value)) {
      DataProductContext.setInsertStockForm(true);
      DataProductContext.setIsKeyDownInsertStockForm(true);
    } else {
      DataProductContext.setInsertStockForm(false);
      DataProductContext.setIsKeyDownInsertStockForm(false);
    }

    if (RegexNotEmpty.test(InsertDiscountFormRef.current.value)) {
      DataProductContext.setInsertDiscountForm(true);
      DataProductContext.setIsKeyDownInsertDiscountForm(true);
    } else {
      DataProductContext.setInsertDiscountForm(false);
      DataProductContext.setIsKeyDownInsertDiscountForm(false);
    }

    if (RegexNotEmpty.test(InsertWeightFormRef.current.value)) {
      DataProductContext.setInsertWeightForm(true);
      DataProductContext.setIsKeyDownInsertWeightForm(true);
    } else {
      DataProductContext.setInsertWeightForm(false);
      DataProductContext.setIsKeyDownInsertWeightForm(false);
    }

    if (RegexNotEmpty.test(InsertGenusFormRef.current.value)) {
      DataProductContext.setInsertGenusForm(true);
      DataProductContext.setIsKeyDownInsertGenusForm(true);
    } else {
      DataProductContext.setInsertGenusForm(false);
      DataProductContext.setIsKeyDownInsertGenusForm(false);
    }

    if (RegexNotEmpty.test(InsertUsageFormRef.current.value)) {
      DataProductContext.setInsertUsageForm(true);
      DataProductContext.setIsKeyDownInsertUsageForm(true);
    } else {
      DataProductContext.setInsertUsageForm(false);
      DataProductContext.setIsKeyDownInsertUsageForm(false);
    }

    if (RegexNotEmpty.test(InsertProducerFormRef.current.value)) {
      DataProductContext.setInsertProducerForm(true);
      DataProductContext.setIsKeyDownInsertProducerForm(true);
    } else {
      DataProductContext.setInsertProducerForm(false);
      DataProductContext.setIsKeyDownInsertProducerForm(false);
    }

    if (
      RegexNotEmpty.test(InsertMainCategoryFormRef.current.value) &&
      RegexNotEmpty.test(InsertImg1MainCategoryFormRef.current.value) &&
      RegexNotEmpty.test(InsertImg2MainCategoryFormRef.current.value) &&
      RegexNotEmpty.test(InsertCategoryFormRef.current.value)&&
      RegexNotEmpty.test(InsertSubCategoryFormRef.current.value) &&
      RegexNotEmpty.test(InsertTitleFormRef.current.value) &&
      RegexNotEmpty.test(InsertPriceFormRef.current.value) &&
      RegexNotEmpty.test(InsertImgProductFormRef.current.value) &&
      RegexNotEmpty.test(InsertStockFormRef.current.value) &&
      RegexNotEmpty.test(InsertDiscountFormRef.current.value) &&
      RegexNotEmpty.test(InsertWeightFormRef.current.value) &&
      RegexNotEmpty.test(InsertGenusFormRef.current.value) &&
      RegexNotEmpty.test(InsertUsageFormRef.current.value) &&
      RegexNotEmpty.test(InsertProducerFormRef.current.value)
       
    ) {
      let ProductInfo = {
        id: uuidv4(),
        mainCategoryTitle: DataProductContext.insertMainCategoryValue,
        mainCategoryImgName1: DataProductContext.insertImg1MainCategoryValue,
        mainCategoryImgName2: DataProductContext.insertImg2MainCategoryValue,
        CategoryTitle: DataProductContext.insertCategoryValue,
        Category: DataProductContext.insertSubCategoryValue,
        title: DataProductContext.insertTitleValue,
        price: DataProductContext.insertPriceValue,
        productImgName: DataProductContext.insertImgProductValue,
        stock: DataProductContext.insertStockValue,
        conter: 0,
        discount: DataProductContext.insertDiscountValue,
        Weight: DataProductContext.insertWeightValue,
        genus: DataProductContext.insertGenusValue,
        usage: DataProductContext.insertUsageValue,
        Producer: DataProductContext.insertProducerValue,
      };

      fetch("https://shopingknife-default-rtdb.firebaseio.com//product.json", {
        method: "POST",
        body: JSON.stringify(ProductInfo),
      }).then((response) => console.log(response));
      DataProductContext.setInsertMainCategoryValue("");
      DataProductContext.setInsertImg1MainCategoryValue("");
      DataProductContext.setInsertImg2MainCategoryValue("");
      DataProductContext.setInsertCategoryValue("");
      DataProductContext.setInsertSubCategoryValue("");
      DataProductContext.setInsertTitleValue("");
      DataProductContext.setInsertPriceValue("");
      DataProductContext.setInsertImgProductValue("");
      DataProductContext.setInsertStockValue("");
      DataProductContext.setInsertDiscountValue("");
      DataProductContext.setInsertWeightValue("");
      DataProductContext.setInsertGenusValue("");
      DataProductContext.setInsertUsageValue("");
      DataProductContext.setInsertProducerValue("");
      InsertMainCategoryFormRef.current.focus();
    }
  };

  return (
    <>
      {/** insert className Show--New-Product-Form to showing Form*/}
      <form
        action="#"
        className={`Insert-New-Product-Form ${
          DataProductContext.showFormInsertProduct
            ? "Show--New-Product-Form"
            : ""
        }`}
        onSubmit={(event) => InsertNewProductHandler(event)}
      >
        <AiOutlineClose
          className="Icon-Close-New-Product"
          onClick={() => DataProductContext.setShowFormInsertProduct(false)}
        />

        <div className="MainCategory-New-Product">
          <label htmlFor="MainCategoryNewProduct">
            نام دسته بندی اصلی محصول :
          </label>
          <input
            type="text"
            id="MainCategoryNewProduct"
            ref={InsertMainCategoryFormRef}
            value={DataProductContext.insertMainCategoryValue}
            className={`${
              DataProductContext.insertMainCategoryForm ||
              DataProductContext.isKeyDownInsertMainCategoryForm
                ? ""
                : "ValidMessage-Input-MainCategoryForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertMainCategoryForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertMainCategoryValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertMainCategoryForm ||
              DataProductContext.isKeyDownInsertMainCategoryForm
                ? "ValidMessage-MainCategoryForm"
                : "NotValidMessage-MainCategoryForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Img1-MainCategory-New-Product">
          <label htmlFor="Img1MainCategoryNewProduct">
            نام اولین تصویر دسته بندی اصلی محصول :
          </label>
          <input
            type="text"
            id="Img1MainCategoryNewProduct"
            value={DataProductContext.insertImg1MainCategoryValue}
            ref={InsertImg1MainCategoryFormRef}
            className={`${
              DataProductContext.insertImg1MainCategoryForm ||
              DataProductContext.isKeyDownInsertImg1MainCategoryForm
                ? ""
                : "ValidMessage-Input-Img1MainCategoryForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertImg1MainCategoryForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertImg1Img1MainCategoryValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertImg1MainCategoryForm ||
              DataProductContext.isKeyDownInsertImg1MainCategoryForm
                ? "ValidMessage-Img1MainCategoryForm"
                : "NotValidMessage-Img1MainCategoryForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Img2-MainCategory-New-Product">
          <label htmlFor="Img2MainCategoryNewProduct">
            نام دومین تصویر دسته بندی اصلی محصول :
          </label>
          <input
            type="text"
            id="Img2MainCategoryNewProduct"
            value={DataProductContext.insertImg2MainCategoryValue}
            ref={InsertImg2MainCategoryFormRef}
            className={`${
              DataProductContext.insertImg2MainCategoryForm ||
              DataProductContext.isKeyDownInsertImg2MainCategoryForm
                ? ""
                : "ValidMessage-Input-Img2MainCategoryForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertImg2MainCategoryForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertImg2MainCategoryValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertImg2MainCategoryForm ||
              DataProductContext.isKeyDownInsertImg2MainCategoryForm
                ? "ValidMessage-Img2MainCategoryForm"
                : "NotValidMessage-Img2MainCategoryForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Category-New-Product">
          <label htmlFor="CategoryNewProduct">نام دسته بندی محصول :</label>
          <input
            type="text"
            id="CategoryNewProduct"
            value={DataProductContext.insertCategoryValue}
            ref={InsertCategoryFormRef}
            className={`${
              DataProductContext.insertCategoryForm ||
              DataProductContext.isKeyDownInsertCategoryForm
                ? ""
                : "ValidMessage-Input-CategoryForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertCategoryForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertCategoryValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertCategoryForm ||
              DataProductContext.isKeyDownInsertCategoryForm
                ? "ValidMessage-CategoryForm"
                : "NotValidMessage-CategoryForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="SubCategory-New-Product">
          <label htmlFor="SubCategoryNewProduct">
            نام زیر دسته بندی محصول :
          </label>
          <input
            type="text"
            id="SubCategoryNewProduct"
            value={DataProductContext.insertSubCategoryValue}
            ref={InsertSubCategoryFormRef}
            className={`${
              DataProductContext.insertSubCategoryForm ||
              DataProductContext.isKeyDownInsertSubCategoryForm
                ? ""
                : "ValidMessage-Input-SubCategoryForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertSubCategoryForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertSubCategoryValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertSubCategoryForm ||
              DataProductContext.isKeyDownInsertSubCategoryForm
                ? "ValidMessage-SubCategoryForm"
                : "NotValidMessage-SubCategoryForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Title-New-Product">
          <label htmlFor="TitleNewProduct">عنوان محصول :</label>
          <input
            type="text"
            id="TitleNewProduct"
            value={DataProductContext.insertTitleValue}
            ref={InsertTitleFormRef}
            className={`${
              DataProductContext.insertTitleForm ||
              DataProductContext.isKeyDownInsertTitleForm
                ? ""
                : "ValidMessage-Input-TitleForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertTitleForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertTitleValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertTitleForm ||
              DataProductContext.isKeyDownInsertTitleForm
                ? "ValidMessage-TitleForm"
                : "NotValidMessage-TitleForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Price-New-Product">
          <label htmlFor="PriceNewProduct">مبلغ محصول :</label>
          <input
            type="text"
            id="PriceNewProduct"
            value={DataProductContext.insertPriceValue}
            ref={InsertPriceFormRef}
            className={`${
              DataProductContext.insertPriceForm ||
              DataProductContext.isKeyDownInsertPriceForm
                ? ""
                : "ValidMessage-Input-PriceForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertPriceForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertPriceValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertPriceForm ||
              DataProductContext.isKeyDownInsertPriceForm
                ? "ValidMessage-PriceForm"
                : "NotValidMessage-PriceForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Img-New-Product">
          <label htmlFor="ImgNewProduct">تصویر محصول :</label>
          <input
            type="text"
            id="ImgNewProduct"
            value={DataProductContext.insertImgProductValue}
            ref={InsertImgProductFormRef}
            className={`${
              DataProductContext.insertImgProductForm ||
              DataProductContext.isKeyDownInsertImgProductForm
                ? ""
                : "ValidMessage-Input-ImgProductForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertImgProductForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertImgProductValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertImgProductForm ||
              DataProductContext.isKeyDownInsertImgProductForm
                ? "ValidMessage-ImgProductForm"
                : "NotValidMessage-ImgProductForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Stock-New-Product">
          <label htmlFor="StockNewProduct">تعداد موجودی محصول :</label>
          <input
            type="text"
            id="StockNewProduct"
            value={DataProductContext.insertStockValue}
            ref={InsertStockFormRef}
            className={`${
              DataProductContext.insertStockForm ||
              DataProductContext.isKeyDownInsertStockForm
                ? ""
                : "ValidMessage-Input-StockForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertStockForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertStockValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertStockForm ||
              DataProductContext.isKeyDownInsertStockForm
                ? "ValidMessage-StockForm"
                : "NotValidMessage-StockForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Discount-New-Product">
          <label htmlFor="DiscountNewProduct">
            درصد تخفیف محصول :(فقط عدد وارد شود)
          </label>
          <input
            type="text"
            id="DiscountNewProduct"
            value={DataProductContext.insertDiscountValue}
            ref={InsertDiscountFormRef}
            className={`${
              DataProductContext.insertDiscountForm ||
              DataProductContext.isKeyDownInsertDiscountForm
                ? ""
                : "ValidMessage-Input-DiscountForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertDiscountForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertDiscountValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertDiscountForm ||
              DataProductContext.isKeyDownInsertDiscountForm
                ? "ValidMessage-DiscountForm"
                : "NotValidMessage-DiscountForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Weight-New-Product">
          <label htmlFor="WeightNewProduct">وزن محصول :(گرم)</label>
          <input
            type="text"
            id="WeightNewProduct"
            value={DataProductContext.insertWeightValue}
            ref={InsertWeightFormRef}
            className={`${
              DataProductContext.insertWeightForm ||
              DataProductContext.isKeyDownInsertWeightForm
                ? ""
                : "ValidMessage-Input-WeightForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertWeightForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertWeightValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertWeightForm ||
              DataProductContext.isKeyDownInsertWeightForm
                ? "ValidMessage-WeightForm"
                : "NotValidMessage-WeightForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Genus-New-Product">
          <label htmlFor="GenusNewProduct">جنس محصول :</label>
          <input
            type="text"
            id="GenusNewProduct"
            value={DataProductContext.insertGenusValue}
            ref={InsertGenusFormRef}
            className={`${
              DataProductContext.insertGenusForm ||
              DataProductContext.isKeyDownInsertGenusForm
                ? ""
                : "ValidMessage-Input-GenusForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertGenusForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertGenusValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertGenusForm ||
              DataProductContext.isKeyDownInsertGenusForm
                ? "ValidMessage-GenusForm"
                : "NotValidMessage-GenusForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Usage-New-Product">
          <label htmlFor="UsageNewProduct">کاربرد محصول :</label>
          <input
            type="text"
            id="UsageNewProduct"
            value={DataProductContext.insertUsageValue}
            ref={InsertUsageFormRef}
            className={`${
              DataProductContext.insertUsageForm ||
              DataProductContext.isKeyDownInsertUsageForm
                ? ""
                : "ValidMessage-Input-UsageForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertUsageForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertUsageValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertUsageForm ||
              DataProductContext.isKeyDownInsertUsageForm
                ? "ValidMessage-UsageForm"
                : "NotValidMessage-UsageForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <div className="Producer-New-Product">
          <label htmlFor="ProducerNewProduct">تولید کننده محصول :</label>
          <input
            type="text"
            id="ProducerNewProduct"
            value={DataProductContext.insertProducerValue}
            ref={InsertProducerFormRef}
            className={`${
              DataProductContext.insertProducerForm ||
              DataProductContext.isKeyDownInsertProducerForm
                ? ""
                : "ValidMessage-Input-ProducerForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertProducerForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertProducerValue(event.target.value)
            }
          />
          <span
            className={` ${
              DataProductContext.insertProducerForm ||
              DataProductContext.isKeyDownInsertProducerForm
                ? "ValidMessage-ProducerForm"
                : "NotValidMessage-ProducerForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <button className="Btn-Insert-Product">ایجاد محصول جدید</button>
      </form>
    </>
  );
}
