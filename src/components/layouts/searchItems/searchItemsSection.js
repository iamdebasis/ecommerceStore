import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isMobileScreen } from "../../../helpers/helpers";
import { searchItem, setShowFilterSec } from "../../../store/entities/items";
import searchStyles from "./searchItems.module.css";

function SearchItemsSection() {
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();

  const isMobile = isMobileScreen();

  return (
    <div className={searchStyles.searchContainer}>
      <input type="text" className={searchStyles.inputWrap} onChange={(e) => setSearchVal(e.target.value)} value={searchVal} placeholder="Search Products eg. black polo" />

      <div className={searchStyles.cartImg} onClick={() => dispatch(searchItem(searchVal))}>
        <img src={"search.png"} alt={"cart"} />
      </div>
      {isMobile && (
        <div className={searchStyles.filterImg} onClick={() => dispatch(setShowFilterSec())}>
          <img src={"funnel.png"} alt={"cart"} />
        </div>
      )}
    </div>
  );
}

export default SearchItemsSection;
