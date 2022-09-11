import React, { useContext } from "react";
import { AllArticleDataContext } from "../../Contexts/ArticleDataContext";
import { Link } from "react-router-dom";
import "./ArticlesCategory.css";

export default function ArticlesCategory() {
  const DataArticleContext = useContext(AllArticleDataContext);
  return (
    <div>
      <div className="Articles-Category-Container">
        <div className="Articles-Category-Title">
          <h2>مقالات</h2>
          <div className="Articles-Category-Title-Br"></div>
        </div>
        <div className="Articles-Category-Wrapper">
          <div className="Main-Article-Category">
            <div className="Main-Article-Category-Content-img">
              <div className="Main-Article-Category-Content">
                <h2>{DataArticleContext.mainArticleHomeData[0].title}</h2>
                <p>{DataArticleContext.mainArticleHomeData[0].paragraphCard}</p>
                <Link
                  to={`/article/${DataArticleContext.mainArticleHomeData[0].id}-${DataArticleContext.mainArticleHomeData[0].title}`}
                >
                  <button>ادامه مطلب...</button>
                </Link>
              </div>
              <div className="Main-Article-Category-img"></div>
            </div>
          </div>

          <div className="Articles-Category-Content">
            {DataArticleContext.articleHomeData.length && DataArticleContext.articleHomeData.map(
              (article) => (
                <div className="Article-Category-Content" key={article.id}>
                  <div className="Wrpper-Articles-Category-Content">
                    {" "}
                    <h2>{article.title}</h2>
                    <p>{article.paragraphCard}</p>
                    <Link to={`/article/${article.id}-${article.title}`}>
                      {" "}
                      <button>ادامه مطلب...</button>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
