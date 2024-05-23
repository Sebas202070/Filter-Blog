import { useState } from "react";
import "./App.css";
import { ArticleList, ButtonList } from "./Components";
import data from "./Data/data";

function App() {
  const allCategories = ["All", ...new Set(data.map((c) => c.category))];
  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(data);

  const handleFilterCategory = (c) => {
    console.log(c);
    if (c === "All") {
      setArticles(data);
      return;
    }
    const filterCategories = data.filter((f) => f.category === c);
    setArticles(filterCategories);
  };
  return (
    <div className="title">
      <h1>
        Filter <span>Blog</span>
      </h1>

      <img
        className=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpc_lxCQfjBEwQnYB2HtL18kqjMsOdYIjEXQ&usqp=CAU"
        alt=""
      />
      <div>
        <span>Filtra por Categoria</span>
      </div>
      <ButtonList
        categories={categories}
        filterCategory={handleFilterCategory}
      />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
