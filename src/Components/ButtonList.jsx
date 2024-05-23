import React from "react";

export const ButtonList = ({ categories, filterCategory }) => {
  return (
    <div className="categories">
      {categories.map((c) => (
        <button
          key={c.id}
          className="btn-category"
          type="button"
          onClick={() => filterCategory(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
};
