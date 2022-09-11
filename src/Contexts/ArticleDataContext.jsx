import { createContext } from "react";
import { useState } from "react";
import { MainArticleHomeData,ArticleHomeData,ArticlesData,AllArticle } from "../Datas"; 


export const AllArticleDataContext = createContext();

export const ArticleDataProvider = ({ children }) => {
  const [allArticle, setAllArticle] = useState(AllArticle);
  const [mainArticleHomeData, setMainArticleHomeData] = useState(MainArticleHomeData);
  const [articleHomeData, setArticleHomeData] = useState(ArticleHomeData);
  const [articlesData, setArticlesData] = useState(ArticlesData);


  return (
    <AllArticleDataContext.Provider
      value={{
        allArticle,
        setAllArticle,
        mainArticleHomeData,
        setMainArticleHomeData,
        articleHomeData,
        setArticleHomeData,
        articlesData,
        setArticlesData,
      }}
    >
      {children}
    </AllArticleDataContext.Provider>
  );
};
