import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderComponent from "../../common/header/headerComponent";
import HomeBody from "../homeBody/HomeBody";
import { getCurrentPage, loadItems } from "../../../store/entities/items";
import CartComponent from "../cartPage/cartComponent";

function HomeComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  }, []);
  const currentPage = useSelector(getCurrentPage);

  return (
    <div >
      <HeaderComponent />
      {currentPage === "home" ? <HomeBody /> : <CartComponent />}
    </div>
  );
}

export default HomeComponent;
