import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, getCurrentPage, updateCurrentPage } from "../../../store/entities/items";
import cartStyles from "./cartItems.module.css";

function CartItems() {
  const cartItems = useSelector(getCartItems);
  const currentPage = useSelector(getCurrentPage);

  const dispatch = useDispatch();

  const cartItemCount = () => {
    let itemcount = 0;
    cartItems.map((element) => {
      itemcount = itemcount + element.itemCount;
    });
    return itemcount;
  };

  return (
    <div className={cartStyles.cartContainer}>
      <div onClick={() => dispatch(updateCurrentPage("home"))} className={currentPage==="home"?`${cartStyles.products} ${cartStyles.selectedSec}`:cartStyles.products} >
        products
      </div>
      <div onClick={() => dispatch(updateCurrentPage("cart"))} className={currentPage==="cart"?`${cartStyles.cartImg} ${cartStyles.selectedSec}`:cartStyles.cartImg}>
        <img src={"shopping-cart.png"} alt={"cart"} />
        <div className={cartStyles.itemCount}>{cartItemCount()}</div>
      </div>
    </div>
  );
}

export default CartItems;
