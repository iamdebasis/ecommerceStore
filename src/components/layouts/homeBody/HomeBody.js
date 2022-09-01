import React from "react";
import { useSelector } from "react-redux";
import { isMobileScreen } from "../../../helpers/helpers";
import { getCurrentPage, getFilteredItems, getListingItems, getShowFilterSecMobile } from "../../../store/entities/items";
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
  const isMobile = isMobileScreen();
  const currentPage = useSelector(getCurrentPage);
  const showFilterSec = useSelector(getShowFilterSecMobile);

  const showBodyContent = () => {
    if (isMobile) {
      return (
        <>
          {currentPage === "home" &&
            (showFilterSec ? (
              <FilterSection />
            ) : (
              <div className={homeStyles.caardsContainer}>
                {listings().map((item) => (
                  <ListingCard key={item.id} item={item} />
                ))}
              </div>
            ))}
        </>
      );
    } else
      return (
        <>
          <FilterSection />
          <div className={homeStyles.caardsContainer}>
            {listings().map((item) => (
              <ListingCard key={item.id} item={item} />
            ))}
          </div>
        </>
      );
  };

  return <div className={homeStyles.bodyContainer}>{showBodyContent()}</div>;
}

export default HomeBody;
