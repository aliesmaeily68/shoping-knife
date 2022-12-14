import React, { useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { AllProductContext } from "../../../Contexts/ProductContext";
import { AiOutlineClose } from "react-icons/ai";

import "./InsertNewProposalProductForm.css";

export default function InsertNewProposalProductForm() {
  const DataProductContext = useContext(AllProductContext);

  const InsertProposalTitleFormRef = useRef();
  const InsertProposalPriceFormRef = useRef();
  const InsertProposalImgProductFormRef = useRef();
  const InsertProposalStockFormRef = useRef();
  const InsertProposalDiscountFormRef = useRef();
  const InsertProposalWeightFormRef = useRef();
  const InsertProposalGenusFormRef = useRef();
  const InsertProposalUsageFormRef = useRef();
  const InsertProposalProducerFormRef = useRef();
  const InsertProposalNewProductHandler = async (event) => {
    event.preventDefault();

    const RegexNotEmpty = /./;

    if (RegexNotEmpty.test(InsertProposalTitleFormRef.current.value)) {
      DataProductContext.setInsertProposalTitleForm(true);
      DataProductContext.setIsKeyDownInsertProposalTitleForm(true);
    } else {
      DataProductContext.setInsertProposalTitleForm(false);
      DataProductContext.setIsKeyDownInsertProposalTitleForm(false);
    }

    if (RegexNotEmpty.test(InsertProposalPriceFormRef.current.value)) {
      DataProductContext.setInsertProposalPriceForm(true);
      DataProductContext.setIsKeyDownInsertProposalPriceForm(true);
    } else {
      DataProductContext.setInsertProposalPriceForm(false);
      DataProductContext.setIsKeyDownInsertProposalPriceForm(false);
    }

    if (RegexNotEmpty.test(InsertProposalImgProductFormRef.current.value)) {
      DataProductContext.setInsertProposalImgProductForm(true);
      DataProductContext.setIsKeyDownInsertProposalImgProductForm(true);
    } else {
      DataProductContext.setInsertProposalImgProductForm(false);
      DataProductContext.setIsKeyDownInsertProposalImgProductForm(false);
    }

    if (RegexNotEmpty.test(InsertProposalStockFormRef.current.value)) {
      DataProductContext.setInsertProposalStockForm(true);
      DataProductContext.setIsKeyDownInsertProposalStockForm(true);
    } else {
      DataProductContext.setInsertProposalStockForm(false);
      DataProductContext.setIsKeyDownInsertProposalStockForm(false);
    }

    if (RegexNotEmpty.test(InsertProposalDiscountFormRef.current.value)) {
      DataProductContext.setInsertProposalDiscountForm(true);
      DataProductContext.setIsKeyDownInsertProposalDiscountForm(true);
    } else {
      DataProductContext.setInsertProposalDiscountForm(false);
      DataProductContext.setIsKeyDownInsertProposalDiscountForm(false);
    }

    if (RegexNotEmpty.test(InsertProposalWeightFormRef.current.value)) {
      DataProductContext.setInsertProposalWeightForm(true);
      DataProductContext.setIsKeyDownInsertProposalWeightForm(true);
    } else {
      DataProductContext.setInsertProposalWeightForm(false);
      DataProductContext.setIsKeyDownInsertProposalWeightForm(false);
    }

    if (RegexNotEmpty.test(InsertProposalGenusFormRef.current.value)) {
      DataProductContext.setInsertProposalGenusForm(true);
      DataProductContext.setIsKeyDownInsertProposalGenusForm(true);
    } else {
      DataProductContext.setInsertProposalGenusForm(false);
      DataProductContext.setIsKeyDownInsertProposalGenusForm(false);
    }

    if (RegexNotEmpty.test(InsertProposalUsageFormRef.current.value)) {
      DataProductContext.setInsertProposalUsageForm(true);
      DataProductContext.setIsKeyDownInsertProposalUsageForm(true);
    } else {
      DataProductContext.setInsertProposalUsageForm(false);
      DataProductContext.setIsKeyDownInsertProposalUsageForm(false);
    }

    if (RegexNotEmpty.test(InsertProposalProducerFormRef.current.value)) {
      DataProductContext.setInsertProposalProducerForm(true);
      DataProductContext.setIsKeyDownInsertProposalProducerForm(true);
    } else {
      DataProductContext.setInsertProposalProducerForm(false);
      DataProductContext.setIsKeyDownInsertProposalProducerForm(false);
    }
    if (
      RegexNotEmpty.test(InsertProposalTitleFormRef.current.value) &&
      RegexNotEmpty.test(InsertProposalPriceFormRef.current.value) &&
      RegexNotEmpty.test(InsertProposalImgProductFormRef.current.value) &&
      RegexNotEmpty.test(InsertProposalStockFormRef.current.value) &&
      RegexNotEmpty.test(InsertProposalDiscountFormRef.current.value) &&
      RegexNotEmpty.test(InsertProposalWeightFormRef.current.value) &&
      RegexNotEmpty.test(InsertProposalGenusFormRef.current.value) &&
      RegexNotEmpty.test(InsertProposalUsageFormRef.current.value) &&
      RegexNotEmpty.test(InsertProposalProducerFormRef.current.value)
    ) {
      let NewProposalObj = {
        id: uuidv4(),
        title: DataProductContext.insertProposalTitleValue,
        price: DataProductContext.insertProposalPriceValue,
        productImgName: DataProductContext.insertProposalImgProductValue,
        stock: DataProductContext.insertProposalStockValue,
        conter: 0,
        discount: DataProductContext.insertProposalDiscountValue,
        Weight: DataProductContext.insertProposalWeightValue,
        genus: DataProductContext.insertProposalGenusValue,
        usage: DataProductContext.insertProposalUsageValue,
        Producer: DataProductContext.insertProposalProducerValue,
      };
      DataProductContext.setInsertProposalTitleValue("");
      DataProductContext.setInsertProposalPriceValue("");
      DataProductContext.setInsertProposalImgProductValue("");
      DataProductContext.setInsertProposalStockValue("");
      DataProductContext.setInsertProposalDiscountValue("");
      DataProductContext.setInsertProposalWeightValue("");
      DataProductContext.setInsertProposalGenusValue("");
      DataProductContext.setInsertProposalUsageValue("");
      DataProductContext.setInsertProposalProducerValue("");
      fetch(
        "https://myknife-2e73f-default-rtdb.firebaseio.com/allProposalProduct.json",
        {
          method: "POST",
          body: JSON.stringify(NewProposalObj),
        }
      ).then((res) => console.log(res));
    }
  };

  return (
    <>
      {/** insertProposal className Show--New-Product-Form to showing Form*/}
      <form
        action="#"
        className={`InsertProposal-New-Product-Form ${
          DataProductContext.showFormInsertProposalProduct
            ? "Show-New-ProposalProduct-Form"
            : ""
        }`}
        onSubmit={(event) => InsertProposalNewProductHandler(event)}
      >
        <AiOutlineClose
          className="Icon-Close-New-ProposalProduct"
          onClick={() =>
            DataProductContext.setShowFormInsertProposalProduct(false)
          }
        />
        <div className="Title-New-Product">
          <label htmlFor="TitleNewProduct">?????????? ?????????? :</label>
          <input
            type="text"
            id="TitleNewProduct"
            value={DataProductContext.insertProposalTitleValue}
            ref={InsertProposalTitleFormRef}
            className={`${
              DataProductContext.insertProposalTitleForm ||
              DataProductContext.isKeyDownInsertProposalTitleForm
                ? ""
                : "ValidMessage-Proposal-Input-TitleForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertProposalTitleForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertProposalTitleValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertProposalTitleForm ||
              DataProductContext.isKeyDownInsertProposalTitleForm
                ? "ValidMessage-Proposal-TitleForm"
                : "NotValidMessage-Proposal-TitleForm"
            }`}
          >
            ???????? ???????? ?????? ???? ???? ????????????
          </span>
        </div>

        <div className="Price-New-Product">
          <label htmlFor="PriceNewProduct">???????? ?????????? :</label>
          <input
            type="text"
            id="PriceNewProduct"
            value={DataProductContext.insertProposalPriceValue}
            ref={InsertProposalPriceFormRef}
            className={`${
              DataProductContext.insertProposalPriceForm ||
              DataProductContext.isKeyDownInsertProposalPriceForm
                ? ""
                : "ValidMessage-Proposal-Input-PriceForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertProposalPriceForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertProposalPriceValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertProposalPriceForm ||
              DataProductContext.isKeyDownInsertProposalPriceForm
                ? "ValidMessage-Proposal-PriceForm"
                : "NotValidMessage-Proposal-PriceForm"
            }`}
          >
            ???????? ???????? ?????? ???? ???? ????????????
          </span>
        </div>

        <div className="Img-New-Product">
          <label htmlFor="ImgNewProduct">?????????? ?????????? :</label>
          <input
            type="text"
            id="ImgNewProduct"
            value={DataProductContext.insertProposalImgProductValue}
            ref={InsertProposalImgProductFormRef}
            className={`${
              DataProductContext.insertProposalImgProductForm ||
              DataProductContext.isKeyDownInsertProposalImgProductForm
                ? ""
                : "ValidMessage-Proposal-Input-ImgProductForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertProposalImgProductForm(
                true
              )
            }
            onChange={(event) =>
              DataProductContext.setInsertProposalImgProductValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertProposalImgProductForm ||
              DataProductContext.isKeyDownInsertProposalImgProductForm
                ? "ValidMessage-Proposal-ImgProductForm"
                : "NotValidMessage-Proposal-ImgProductForm"
            }`}
          >
            ???????? ???????? ?????? ???? ???? ????????????
          </span>
        </div>

        <div className="Stock-New-Product">
          <label htmlFor="StockNewProduct">?????????? ???????????? ?????????? :</label>
          <input
            type="text"
            id="StockNewProduct"
            value={DataProductContext.insertProposalStockValue}
            ref={InsertProposalStockFormRef}
            className={`${
              DataProductContext.insertProposalStockForm ||
              DataProductContext.isKeyDownInsertProposalStockForm
                ? ""
                : "ValidMessage-Proposal-Input-StockForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertProposalStockForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertProposalStockValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertProposalStockForm ||
              DataProductContext.isKeyDownInsertProposalStockForm
                ? "ValidMessage-Proposal-StockForm"
                : "NotValidMessage-Proposal-StockForm"
            }`}
          >
            ???????? ???????? ?????? ???? ???? ????????????
          </span>
        </div>

        <div className="Discount-New-Product">
          <label htmlFor="DiscountNewProduct">
            ???????? ?????????? ?????????? :(?????? ?????? ???????? ??????)
          </label>
          <input
            type="text"
            id="DiscountNewProduct"
            value={DataProductContext.insertProposalDiscountValue}
            ref={InsertProposalDiscountFormRef}
            className={`${
              DataProductContext.insertProposalDiscountForm ||
              DataProductContext.isKeyDownInsertProposalDiscountForm
                ? ""
                : "ValidMessage-Proposal-Input-DiscountForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertProposalDiscountForm(
                true
              )
            }
            onChange={(event) =>
              DataProductContext.setInsertProposalDiscountValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertProposalDiscountForm ||
              DataProductContext.isKeyDownInsertProposalDiscountForm
                ? "ValidMessage-Proposal-DiscountForm"
                : "NotValidMessage-Proposal-DiscountForm"
            }`}
          >
            ???????? ???????? ?????? ???? ???? ????????????
          </span>
        </div>

        <div className="Weight-New-Product">
          <label htmlFor="WeightNewProduct">?????? ?????????? :(??????)</label>
          <input
            type="text"
            id="WeightNewProduct"
            value={DataProductContext.insertProposalWeightValue}
            ref={InsertProposalWeightFormRef}
            className={`${
              DataProductContext.insertProposalWeightForm ||
              DataProductContext.isKeyDownInsertProposalWeightForm
                ? ""
                : "ValidMessage-Proposal-Input-WeightForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertProposalWeightForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertProposalWeightValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertProposalWeightForm ||
              DataProductContext.isKeyDownInsertProposalWeightForm
                ? "ValidMessage-Proposal-WeightForm"
                : "NotValidMessage-Proposal-WeightForm"
            }`}
          >
            ???????? ???????? ?????? ???? ???? ????????????
          </span>
        </div>

        <div className="Genus-New-Product">
          <label htmlFor="GenusNewProduct">?????? ?????????? :</label>
          <input
            type="text"
            id="GenusNewProduct"
            value={DataProductContext.insertProposalGenusValue}
            ref={InsertProposalGenusFormRef}
            className={`${
              DataProductContext.insertProposalGenusForm ||
              DataProductContext.isKeyDownInsertProposalGenusForm
                ? ""
                : "ValidMessage-Proposal-Input-GenusForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertProposalGenusForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertProposalGenusValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertProposalGenusForm ||
              DataProductContext.isKeyDownInsertProposalGenusForm
                ? "ValidMessage-Proposal-GenusForm"
                : "NotValidMessage-Proposal-GenusForm"
            }`}
          >
            ???????? ???????? ?????? ???? ???? ????????????
          </span>
        </div>

        <div className="Usage-New-Product">
          <label htmlFor="UsageNewProduct">???????????? ?????????? :</label>
          <input
            type="text"
            id="UsageNewProduct"
            value={DataProductContext.insertProposalUsageValue}
            ref={InsertProposalUsageFormRef}
            className={`${
              DataProductContext.insertProposalUsageForm ||
              DataProductContext.isKeyDownInsertProposalUsageForm
                ? ""
                : "ValidMessage-Proposal-Input-UsageForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertProposalUsageForm(true)
            }
            onChange={(event) =>
              DataProductContext.setInsertProposalUsageValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertProposalUsageForm ||
              DataProductContext.isKeyDownInsertProposalUsageForm
                ? "ValidMessage-Proposal-UsageForm"
                : "NotValidMessage-Proposal-UsageForm"
            }`}
          >
            ???????? ???????? ?????? ???? ???? ????????????
          </span>
        </div>

        <div className="Producer-New-Product">
          <label htmlFor="ProducerNewProduct">?????????? ?????????? ?????????? :</label>
          <input
            type="text"
            id="ProducerNewProduct"
            value={DataProductContext.insertProposalProducerValue}
            ref={InsertProposalProducerFormRef}
            className={`${
              DataProductContext.insertProposalProducerForm ||
              DataProductContext.isKeyDownInsertProposalProducerForm
                ? ""
                : "ValidMessage-Proposal-Input-ProducerForm"
            }`}
            onKeyDown={() =>
              DataProductContext.setIsKeyDownInsertProposalProducerForm(
                true
              )
            }
            onChange={(event) =>
              DataProductContext.setInsertProposalProducerValue(
                event.target.value
              )
            }
          />
          <span
            className={` ${
              DataProductContext.insertProposalProducerForm ||
              DataProductContext.isKeyDownInsertProposalProducerForm
                ? "ValidMessage-Proposal-ProducerForm"
                : "NotValidMessage-Proposal-ProducerForm"
            }`}
          >
            ???????? ???????? ?????? ???? ???? ????????????
          </span>
        </div>

        <button className="Btn-InsertProposal-Product">
          ?????????? ?????????? ????????
        </button>
      </form>
    </>
  );
}
