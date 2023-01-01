import React, { useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { AllProductContext } from "../../../Contexts/ProductContext";
import { AiOutlineClose } from "react-icons/ai";

import "./InsertNewMainProposalProductForm.css";

export default function InsertNewMainProposalProductForm() {
  const DataProductContext = useContext(AllProductContext);

  const InsertMainProposalTitleFormRef = useRef();
  const InsertMainProposalPriceFormRef = useRef();
  const InsertMainProposalImgProductFormRef = useRef();
  const InsertMainProposalStockFormRef = useRef();
  const InsertMainProposalDiscountFormRef = useRef();
  const InsertMainProposalWeightFormRef = useRef();
  const InsertMainProposalGenusFormRef = useRef();
  const InsertMainProposalUsageFormRef = useRef();
  const InsertMainProposalProducerFormRef = useRef();
  const InsertMainProposalNewProductHandler = async (event) => {
    event.preventDefault();

    const RegexNotEmpty = /./;

    if (RegexNotEmpty.test(InsertMainProposalTitleFormRef.current.value)) {
      DataProductContext.setInsertMainProposalTitleForm(true);
      DataProductContext.setIsKeyDownInsertMainProposalTitleForm(true);
    } else {
      DataProductContext.setInsertMainProposalTitleForm(false);
      DataProductContext.setIsKeyDownInsertMainProposalTitleForm(false);
    }

    if (RegexNotEmpty.test(InsertMainProposalPriceFormRef.current.value)) {
      DataProductContext.setInsertMainProposalPriceForm(true);
      DataProductContext.setIsKeyDownInsertMainProposalPriceForm(true);
    } else {
      DataProductContext.setInsertMainProposalPriceForm(false);
      DataProductContext.setIsKeyDownInsertMainProposalPriceForm(false);
    }

    if (RegexNotEmpty.test(InsertMainProposalImgProductFormRef.current.value)) {
      DataProductContext.setInsertMainProposalImgProductForm(true);
      DataProductContext.setIsKeyDownInsertMainProposalImgProductForm(true);
    } else {
      DataProductContext.setInsertMainProposalImgProductForm(false);
      DataProductContext.setIsKeyDownInsertMainProposalImgProductForm(false);
    }

    if (RegexNotEmpty.test(InsertMainProposalStockFormRef.current.value)) {
      DataProductContext.setInsertMainProposalStockForm(true);
      DataProductContext.setIsKeyDownInsertMainProposalStockForm(true);
    } else {
      DataProductContext.setInsertMainProposalStockForm(false);
      DataProductContext.setIsKeyDownInsertMainProposalStockForm(false);
    }

    if (RegexNotEmpty.test(InsertMainProposalDiscountFormRef.current.value)) {
      DataProductContext.setInsertMainProposalDiscountForm(true);
      DataProductContext.setIsKeyDownInsertMainProposalDiscountForm(true);
    } else {
      DataProductContext.setInsertMainProposalDiscountForm(false);
      DataProductContext.setIsKeyDownInsertMainProposalDiscountForm(false);
    }

    if (RegexNotEmpty.test(InsertMainProposalWeightFormRef.current.value)) {
      DataProductContext.setInsertMainProposalWeightForm(true);
      DataProductContext.setIsKeyDownInsertMainProposalWeightForm(true);
    } else {
      DataProductContext.setInsertMainProposalWeightForm(false);
      DataProductContext.setIsKeyDownInsertMainProposalWeightForm(false);
    }

    if (RegexNotEmpty.test(InsertMainProposalGenusFormRef.current.value)) {
      DataProductContext.setInsertMainProposalGenusForm(true);
      DataProductContext.setIsKeyDownInsertMainProposalGenusForm(true);
    } else {
      DataProductContext.setInsertMainProposalGenusForm(false);
      DataProductContext.setIsKeyDownInsertMainProposalGenusForm(false);
    }

    if (RegexNotEmpty.test(InsertMainProposalUsageFormRef.current.value)) {
      DataProductContext.setInsertMainProposalUsageForm(true);
      DataProductContext.setIsKeyDownInsertMainProposalUsageForm(true);
    } else {
      DataProductContext.setInsertMainProposalUsageForm(false);
      DataProductContext.setIsKeyDownInsertMainProposalUsageForm(false);
    }

    if (RegexNotEmpty.test(InsertMainProposalProducerFormRef.current.value)) {
      DataProductContext.setInsertMainProposalProducerForm(true);
      DataProductContext.setIsKeyDownInsertMainProposalProducerForm(true);
    } else {
      DataProductContext.setInsertMainProposalProducerForm(false);
      DataProductContext.setIsKeyDownInsertMainProposalProducerForm(false);
    }
    if (
      RegexNotEmpty.test(InsertMainProposalTitleFormRef.current.value) &&
      RegexNotEmpty.test(InsertMainProposalPriceFormRef.current.value) &&
      RegexNotEmpty.test(InsertMainProposalImgProductFormRef.current.value) &&
      RegexNotEmpty.test(InsertMainProposalStockFormRef.current.value) &&
      RegexNotEmpty.test(InsertMainProposalDiscountFormRef.current.value) &&
      RegexNotEmpty.test(InsertMainProposalWeightFormRef.current.value) &&
      RegexNotEmpty.test(InsertMainProposalGenusFormRef.current.value) &&
      RegexNotEmpty.test(InsertMainProposalUsageFormRef.current.value) &&
      RegexNotEmpty.test(InsertMainProposalProducerFormRef.current.value)
    ) {
      let NewMainProposalObj = {
        id: uuidv4(),
        title: DataProductContext.insertMainProposalTitleValue,
        price: DataProductContext.insertMainProposalPriceValue,
        productImgName: DataProductContext.insertMainProposalImgProductValue,
        stock: DataProductContext.insertMainProposalStockValue,
        conter: 0,
        discount: DataProductContext.insertMainProposalDiscountValue,
        Weight: DataProductContext.insertMainProposalWeightValue,
        genus: DataProductContext.insertMainProposalGenusValue,
        usage: DataProductContext.insertMainProposalUsageValue,
        Producer: DataProductContext.insertMainProposalProducerValue,
      };
      DataProductContext.setInsertMainProposalTitleValue("");
      DataProductContext.setInsertMainProposalPriceValue("");
      DataProductContext.setInsertMainProposalImgProductValue("");
      DataProductContext.setInsertMainProposalStockValue("");
      DataProductContext.setInsertMainProposalDiscountValue("");
      DataProductContext.setInsertMainProposalWeightValue("");
      DataProductContext.setInsertMainProposalGenusValue("");
      DataProductContext.setInsertMainProposalUsageValue("");
      DataProductContext.setInsertMainProposalProducerValue("");
      fetch(
        "https://myknife-2e73f-default-rtdb.firebaseio.com/mainProposalProduct.json",
        {
          method: "POST",
          body: JSON.stringify(NewMainProposalObj),
        }
      ).then((res) => console.log(res));
    }
  };

  return (
    <>
      {/** insertMainProposal className Show--New-Product-Form to showing Form*/}
      <form
        action="#"
        className={`InsertMainProposal-New-Product-Form ${
          DataProductContext.showFormInsertMainProposalProduct
            ? "Show-New-MainProposalProduct-Form"
            : ""
        }`}
        onSubmit={(event) => InsertMainProposalNewProductHandler(event)}
      >
        <AiOutlineClose
          className="Icon-Close-New-MainProposalProduct"
          onClick={() =>
            DataProductContext.setShowFormInsertMainProposalProduct(false)
          }
        />
        <div className="Title-New-Product">
          <label htmlFor="TitleNewProduct">عنوان محصول :</label>
          <input
            type="text"
            id="TitleNewProduct"
            value={DataProductContext.insertMainProposalTitleValue}
            ref={InsertMainProposalTitleFormRef}
            className={`${
              DataProductContext.insertMainProposalTitleForm ||
              DataProductContext.isKeyDownInsertMainProposalTitleForm
                ? ""
                : "ValidMessage-MainProposal-Input-TitleForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertMainProposalTitleForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertMainProposalTitleValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertMainProposalTitleForm ||
              DataProductContext.isKeyDownInsertMainProposalTitleForm
                ? "ValidMessage-MainProposal-TitleForm"
                : "NotValidMessage-MainProposal-TitleForm"
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
            value={DataProductContext.insertMainProposalPriceValue}
            ref={InsertMainProposalPriceFormRef}
            className={`${
              DataProductContext.insertMainProposalPriceForm ||
              DataProductContext.isKeyDownInsertMainProposalPriceForm
                ? ""
                : "ValidMessage-MainProposal-Input-PriceForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertMainProposalPriceForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertMainProposalPriceValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertMainProposalPriceForm ||
              DataProductContext.isKeyDownInsertMainProposalPriceForm
                ? "ValidMessage-MainProposal-PriceForm"
                : "NotValidMessage-MainProposal-PriceForm"
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
            value={DataProductContext.insertMainProposalImgProductValue}
            ref={InsertMainProposalImgProductFormRef}
            className={`${
              DataProductContext.insertMainProposalImgProductForm ||
              DataProductContext.isKeyDownInsertMainProposalImgProductForm
                ? ""
                : "ValidMessage-MainProposal-Input-ImgProductForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertMainProposalImgProductForm(
                true
              )
            }
            onChange={(event) =>
              DataProductContext.setInsertMainProposalImgProductValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertMainProposalImgProductForm ||
              DataProductContext.isKeyDownInsertMainProposalImgProductForm
                ? "ValidMessage-MainProposal-ImgProductForm"
                : "NotValidMessage-MainProposal-ImgProductForm"
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
            value={DataProductContext.insertMainProposalStockValue}
            ref={InsertMainProposalStockFormRef}
            className={`${
              DataProductContext.insertMainProposalStockForm ||
              DataProductContext.isKeyDownInsertMainProposalStockForm
                ? ""
                : "ValidMessage-MainProposal-Input-StockForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertMainProposalStockForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertMainProposalStockValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertMainProposalStockForm ||
              DataProductContext.isKeyDownInsertMainProposalStockForm
                ? "ValidMessage-MainProposal-StockForm"
                : "NotValidMessage-MainProposal-StockForm"
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
            value={DataProductContext.insertMainProposalDiscountValue}
            ref={InsertMainProposalDiscountFormRef}
            className={`${
              DataProductContext.insertMainProposalDiscountForm ||
              DataProductContext.isKeyDownInsertMainProposalDiscountForm
                ? ""
                : "ValidMessage-MainProposal-Input-DiscountForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertMainProposalDiscountForm(
                true
              )
            }
            onChange={(event) =>
              DataProductContext.setInsertMainProposalDiscountValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertMainProposalDiscountForm ||
              DataProductContext.isKeyDownInsertMainProposalDiscountForm
                ? "ValidMessage-MainProposal-DiscountForm"
                : "NotValidMessage-MainProposal-DiscountForm"
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
            value={DataProductContext.insertMainProposalWeightValue}
            ref={InsertMainProposalWeightFormRef}
            className={`${
              DataProductContext.insertMainProposalWeightForm ||
              DataProductContext.isKeyDownInsertMainProposalWeightForm
                ? ""
                : "ValidMessage-MainProposal-Input-WeightForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertMainProposalWeightForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertMainProposalWeightValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertMainProposalWeightForm ||
              DataProductContext.isKeyDownInsertMainProposalWeightForm
                ? "ValidMessage-MainProposal-WeightForm"
                : "NotValidMessage-MainProposal-WeightForm"
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
            value={DataProductContext.insertMainProposalGenusValue}
            ref={InsertMainProposalGenusFormRef}
            className={`${
              DataProductContext.insertMainProposalGenusForm ||
              DataProductContext.isKeyDownInsertMainProposalGenusForm
                ? ""
                : "ValidMessage-MainProposal-Input-GenusForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertMainProposalGenusForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertMainProposalGenusValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertMainProposalGenusForm ||
              DataProductContext.isKeyDownInsertMainProposalGenusForm
                ? "ValidMessage-MainProposal-GenusForm"
                : "NotValidMessage-MainProposal-GenusForm"
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
            value={DataProductContext.insertMainProposalUsageValue}
            ref={InsertMainProposalUsageFormRef}
            className={`${
              DataProductContext.insertMainProposalUsageForm ||
              DataProductContext.isKeyDownInsertMainProposalUsageForm
                ? ""
                : "ValidMessage-MainProposal-Input-UsageForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertMainProposalUsageForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertMainProposalUsageValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertMainProposalUsageForm ||
              DataProductContext.isKeyDownInsertMainProposalUsageForm
                ? "ValidMessage-MainProposal-UsageForm"
                : "NotValidMessage-MainProposal-UsageForm"
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
            value={DataProductContext.insertMainProposalProducerValue}
            ref={InsertMainProposalProducerFormRef}
            className={`${
              DataProductContext.insertMainProposalProducerForm ||
              DataProductContext.isKeyDownInsertMainProposalProducerForm
                ? ""
                : "ValidMessage-MainProposal-Input-ProducerForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertMainProposalProducerForm(
                true
              )
            }
            onChange={(event) =>
              DataProductContext.setInsertMainProposalProducerValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertMainProposalProducerForm ||
              DataProductContext.isKeyDownInsertMainProposalProducerForm
                ? "ValidMessage-MainProposal-ProducerForm"
                : "NotValidMessage-MainProposal-ProducerForm"
            }`}
          >
            فیلد مورد نظر را پر نمایید
          </span>
        </div>

        <button className="Btn-InsertMainProposal-Product">
          ایجاد محصول جدید
        </button>
      </form>
    </>
  );
}
