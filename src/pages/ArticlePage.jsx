import React from "react";

import ArticleList from "../components/ArticleList";
import articleContent from "./article-content";
import NotPageFound from "./NotPageFound";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  if (!article) return <NotPageFound />;

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Aricles</h3>
      <ArticleList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
