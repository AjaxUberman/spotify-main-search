import React, { useState } from "react";
import SearchCategory from "./Search/SearchCategory";
import SearchFooter from "./Search/SearchFooter";
import { useDispatch, useSelector } from "react-redux";

const Ara = () => {
  const { items } = useSelector((state) => state.search);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const searchItem = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <input
        placeholder="Ne Çalmak İstiyorsun?"
        className="rounded-full bg-active text-graytext py-2 px-5 pr-12  md:top-5 top-14 z-10 translate-x-20 "
        onChange={searchItem}
      />
      <div className="py-3 px-2">
        <h1 className="text-2xl font-bold  tracking-tight	">Hepsine göz at </h1>
        <SearchCategory
          items={filteredItems.length === 0 ? items : filteredItems}
        />
        <SearchFooter />
      </div>
    </>
  );
};

export default Ara;
