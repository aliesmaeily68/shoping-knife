import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllArticleDataContext } from "../../Contexts/ArticleDataContext";
import "./Article.css";

export default function Article() {
  const DataArticleContext = useContext(AllArticleDataContext);
  return (
    <div>
      <div className="Articles-Container">
        <div className="Articles-Wrapper">
          <div className="Articles-Content">
            {DataArticleContext.articlesData.length &&
              DataArticleContext.articlesData.map((article) => (
                <div className="Article-Content" key={article.id}>
                  <div
                    className="Wrpper-Articles-Content"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" +
                        `./Image/${article.img}` +
                        ")",
                    }}
                  >
                    <h2>{article.title}</h2>
                    <p>{article.paragraphCard}</p>
                    <Link to={`/article/${article.id}-${article.title}`} onClick={()=> window.scrollTo(0, 0)} >
                      <button>ادامه مطلب ...</button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
