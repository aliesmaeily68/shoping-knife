import React, { useContext } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { AllArticleDataContext } from "../../../Contexts/ArticleDataContext";
import { BsArrowLeft } from "react-icons/bs";
import "./MainArticle.css";

export default function MainArticle() {
  const DataArticleContext = useContext(AllArticleDataContext);

  let params = useParams();
  const Articles = [...DataArticleContext.allArticle];
  const MainArticle = Articles.find(
    (article) => article.title == params.articleTitle.split("-")[1]
  );
  const HasArticle = Articles.some(
    (article) => article.title == params.articleTitle.split("-")[1]
  );

  return (
    <div>
      <div className="Breadcrumb-MainArticle">
        <div className="Container-Breadcrumb-MainArticle">
          <NavLink to={"/"}>
            <span className="Breadcrumb-MainArticle">خانه</span>
          </NavLink>

          <span>
            <BsArrowLeft />
          </span>
          <NavLink to={"/article"}>
            {" "}
            <span id="Breadcrumb-MainArticle">مقالات</span>
          </NavLink>

          <span>
            <BsArrowLeft />
          </span>
          <span>{params.articleTitle.split("-")[1]}</span>
        </div>
      </div>
      <div className="Container-MainArticle">
        {HasArticle && (
          <div className="Wrapper-MainArticle">
            <h1 className="MainArticle-Title"> {MainArticle.title}</h1>
            <img
              src={`../Image/${MainArticle.img}`}
              alt="MainArticle"
              className="MainArticle-img"
            />
            <p>{MainArticle.paragraphMain}</p>
          </div>
        )}
        <div className="CommentsArticle-Container">
          <div className="CommentsArticle-Wrapper">
            <div className="Insert-CommentsArticle">
              <h2>دیدگاهتان را بنویسید</h2>
              <span>
                نشانی ایمیل شما منتشر نخواهد شد .بخش های مورد نیاز علامت گذاری
                شده اند<span className="CommentsArticle-Star">*</span>
              </span>
              <div className="CommentsArticle-Viewpoint">
                <div className="CommentsArticle-YourViewPoint">
                  <div className="CommentsArticle-YourViewPoint-Title">
                    <span>دیدگاه :</span>
                  </div>
                  <div className="CommentsArticle-YourViewPoint-Textarea">
                    <textarea
                      name="YourViewPoint"
                      id="YourViewPoint"
                      cols="10"
                      rows="1"
                    ></textarea>
                  </div>
                </div>
                <div className="CommentsArticle-Name-Email">
                  <div className="CommentsArticle-Name">
                    <label htmlFor="name">
                      <span>نام</span>
                      <span className="CommentsArticle-Star">*</span>
                    </label>
                    <input type="text" className="CommentsArticle-Name-Input" />
                  </div>
                  <div className="CommentsArticle-Email">
                    <label htmlFor="email">
                      <span>ایمیل</span>
                      <span className="CommentsArticle-Star">*</span>
                    </label>
                    <input
                      type="text"
                      className="CommentsArticle-Email-Input"
                    />
                  </div>
                </div>
                <div className="CommentsArticle-CheckBox">
                  <input type="checkbox" />
                  <span>
                    ذخیره نام ، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره
                    دیدگاهی می نویسم.
                  </span>
                </div>
                <button className="CommentsArticle-Submit">ارسال دیدگاه</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
