import React from "react";

const Category = ({ categorys , filterItem}) => {
  console.log("Category : ", categorys);
  return (
    <div className="btn-container">
      {categorys.map((catgry) => {
        return (
          <button type="button" className="btn" key = {catgry} onClick={() => filterItem(catgry)}>
            {catgry}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
