import React from "react";

const SearchCategoryItem = ({ item }) => {
  return (
    <>
      <div
        className={`cursor-pointer rounded-lg w-44 h-44 text-white font-bold p-3 text-2xl relative overflow-hidden ${item.color} `}
      >
        <h1>{item.title}</h1>
        <img
          className="w-20 h-20 rotate-45 absolute -bottom-2 -right-3 "
          src={item.url}
          alt={item.title}
        />
      </div>
    </>
  );
};

export default SearchCategoryItem;
