import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

export default function CommentsProduct() {
  return (
    <div>
      <div className="CommentsProduct-Container">
        <div className="CommentsProduct-Wrapper">
          <div className="CommentsProducts">
            <h2>نقد و بررسی ها</h2>
            <span>هیچ دیدگاهی برای این محصول نوشته نشده است</span>
          </div>
          <div className="Insert-CommentsProduct">
            <h2>اولین کسی باشید که دیگاهی مینویسید"چاقوی جوجه زن"</h2>
            <span>
              نشانی ایمیل شما منتشر نخواهد شد .بخش های مورد نیاز علامت گذاری شده
              اند<span className="CommentsProduct-Star">*</span>
            </span>
            <div className="CommentsProduct-Viewpoint">
              <span>امتیاز شما :</span>
              <span className="CommentsProduct-Star">*</span>
              <div className="CommentsProduct-Stars">
                {" "}
                <div className="CommentsProduct-EmptyStar1">
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
                </div>
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
                <span>دیدگاه شما :</span>
                <span className="CommentsProduct-Star">*</span>
                <textarea
                  name="YourViewPoint"
                  id="YourViewPoint"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="CommentsProduct-Name-Email">
                <label htmlFor="name">
                  <span>نام</span>{" "}
                  <span className="CommentsProduct-Star">*</span>
                </label>
                <input type="text" className="CommentsProduct-Name"/>
                <label htmlFor="email">
                  <span>ایمیل</span>{" "}
                  <span className="CommentsProduct-Star">*</span>
                  <input type="text" className="CommentsProduct-Email"/>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
