"use client";
import React from "react";

const SearchBar = () => {
  const handlesearch = () => {};
  return (
    <div>
      <form className="searchbar" onSubmit={handlesearch}>
        <div className="serachbar__item">
          <SearchManufacturer />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
