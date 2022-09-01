import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchItem } from "../../../store/entities/items";
import searchStyles from "./searchItems.module.css";

function SearchItemsSection() {
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={searchStyles.searchContainer}>
      <div className={searchStyles.cartImg} onClick={() => dispatch(searchItem(searchVal))}>
        <img src={"search.png"} alt={"cart"} />
      </div>
      <input type="text" className={searchStyles.inputWrap} onChange={(e) => setSearchVal(e.target.value)} value={searchVal} placeholder="Search Products eg. black polo" />
    </div>
  );
}

export default SearchItemsSection;
