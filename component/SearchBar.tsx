"use client";
import React from "react";
import { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
  const [manufacturer, setmanufacturer] = useState("");
  const handlesearch = () => {};
  return (
    <div>
      <form className="searchbar" onSubmit={handlesearch}>
        <div className="serachbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            setmanufacturer={setmanufacturer}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
