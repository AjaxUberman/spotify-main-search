import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCategoryItem from "./SearchCategoryItem";

const SearchCategory = ({ items }) => {
  let repeatedItems;

  if (items.length === 1) {
    repeatedItems = Array.from({ length: 6 }).map(
      (_, index) => items[index % items.length]
    );
  } else {
    repeatedItems = Array.from({ length: 24 }).map(
      (_, index) => items[index % items.length]
    );
  }

  return (
    <div className="grid grid-cols-5 pt-5 gap-6">
      {repeatedItems.map((item, index) => (
        <SearchCategoryItem key={index} item={item} />
      ))}
    </div>
  );
};

export default SearchCategory;
