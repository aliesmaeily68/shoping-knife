import React from "react";
import { useContext } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AllProductContext } from "../../../Contexts/ProductContext";
import "./CommentsProduct.css";

export default function CommentsProduct() {
  const DataContext = useContext(AllProductContext)
  console.log(DataContext.mainProduct);
  return (
    <div>
      <div className="CommentsProduct-Container">
        <div className="CommentsProduct-Wrapper">
          <div className="CommentsProducts">
            <h2>نقد و بررسی ها</h2>
            <span>هیچ دیدگاهی برای این محصول نوشته نشده است</span>
          </div>
          <div className="Insert-CommentsProduct">
            <h2>اولین کسی باشید که دیگاهی مینویسید"{DataContext.mainProduct && DataContext.mainProduct.title}  "</h2>
            <span>
              نشانی ایمیل شما منتشر نخواهد شد .بخش های مورد نیاز علامت گذاری شده
              اند<span className="CommentsProduct-Star">*</span>
            </span>
            <div className="CommentsProduct-Viewpoint">
              <div className="CommentsProduct-Stars">
                <span>امتیاز شما :</span>
                <span className="CommentsProduct-Star">*</span>{" "}
                {/* <div className="CommentsProduct-EmptyStar1">
                  <AiOutlineStar />
                </div>
                <div className="CommentsProduct-EmptyStar2">
                  <AiOutlineStar />
                </div>
                <div className="CommentsProduct-EmptyStar3">
                  <AiOutlineStar />
                </div>
                <div className="CommentsProduct-EmptyStar4">
                  <AiOutlineStar />
                </div>
                <div className="CommentsProduct-EmptyStar5">
                  <AiOutlineStar />
                </div> */}
                <div className="CommentsProduct-FullStar1">
                  <AiFillStar />
                </div>
                <div className="CommentsProduct-FullStar2">
                  <AiFillStar />
                </div>
                <div className="CommentsProduct-FullStar3">
                  <AiFillStar />
                </div>
                <div className="CommentsProduct-FullStar4">
                  <AiFillStar />
                </div>
                <div className="CommentsProduct-FullStar5">
                  <AiFillStar />
                </div>
              </div>
              <div className="CommentsProduct-YourViewPoint">
                <div className="CommentsProduct-YourViewPoint-Title">
                  {" "}
                  <span>دیدگاه شما :</span>
                  <span className="CommentsProduct-Star">*</span>
                </div>
                <div className="CommentsProduct-YourViewPoint-Textarea">
                  {" "}
                  <textarea
                    name="YourViewPoint"
                    id="YourViewPoint"
                    cols="70"
                    rows="7"
                  ></textarea>
                </div>
              </div>
              <div className="CommentsProduct-Name-Email">
                <div className="CommentsProduct-Name">
                  {" "}
                  <label htmlFor="name">
                    <span>نام</span>{" "}
                    <span className="CommentsProduct-Star">*</span>
                  </label>
                  <input type="text" className="CommentsProduct-Name-Input" />
                </div>
                <div className="CommentsProduct-Email">
                  {" "}
                  <label htmlFor="email">
                    <span>ایمیل</span>
                    <span className="CommentsProduct-Star">*</span>
                  </label>
                  <input type="text" className="CommentsProduct-Email-Input" />
                </div>
              </div>
              <div className="CommentsProduct-CheckBox">
                <input type="checkbox" />
                <span>
                  ذخیره نام ، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره
                  دیدگاهی می نویسم.
                </span>
              </div>
              <button className="CommentsProduct-Submit">ثبت</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
