import React from "react";

export const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((a) => (
        <div className="article-container" key={a.id}>
          <div className="img-container">
            <img src={a.image} alt="" />
          </div>
          <div className="article-body">
            <h2>{a.title}</h2>
            <p>{a.description}</p>
            <div className="article-footer">
              <span>{a.date}</span>
              <span>{a.ReadingTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
