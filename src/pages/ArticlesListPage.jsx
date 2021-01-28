import React from "react";

import ArticleList from '../components/ArticleList';
import articleConent from "./article-content";

const ArticlesListPage = () => (
  <>
    <h1>Articles</h1>
    <ArticleList articles={articleConent}/>
  </>
);

export default ArticlesListPage;
