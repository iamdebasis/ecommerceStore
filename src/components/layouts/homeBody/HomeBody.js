import React from "react";
import { useSelector } from "react-redux";
import { getFilteredItems, getListingItems } from "../../../store/entities/items";
import ListingCard from "../../common/listingCard/ListingCard";
import FilterSection from "../filterSection/filterSection";
import homeStyles from "./HomeBody.module.css";

function HomeBody() {
  const listingItems = useSelector(getListingItems);
  const filteredItems = useSelector(getFilteredItems);

  // console.log("filteredItems",filteredItems)

  const listings = () => {
    if (filteredItems.length === 0) {
      return listingItems;
    } else {
      return filteredItems;
    }
  };

  return (
    <div className={homeStyles.bodyContainer}>
      <FilterSection />
      <div className={homeStyles.caardsContainer}>
        {listings().map((item) => (
          <ListingCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default HomeBody;
