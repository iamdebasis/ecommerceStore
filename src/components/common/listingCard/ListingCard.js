import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, decreaseItemCount, getCartItems, increaseItemCount } from "../../../store/entities/items";
import cardStyles from "./ListingCard.module.css";

function ListingCard({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);

  const decreaseCount = (count) => {
    dispatch(decreaseItemCount(item));
  };
  const increaseCount = (count) => {
    if(count<item.quantity){
      dispatch(increaseItemCount(item));
    } else {
      window.alert("quantity exceeds")
    }
  };

  const addtoCartButton = () => {
    let itemIndexinCart = cartItems.findIndex((each) => each.id === item.id);
    if (itemIndexinCart === -1 || cartItems[itemIndexinCart].itemCount === 0) {
      return (
        <button className={cardStyles.addcartbtn} type="button" onClick={() => dispatch(addItemToCart(item))}>
          Add to cart
        </button>
      );
    } else {
      return (
        <div className={cardStyles.addcartbtn}>
          <div onClick={() => decreaseCount(cartItems[itemIndexinCart].itemCount)} className={cardStyles.parts}>
            -
          </div>
          <div className={cardStyles.parts}>{cartItems[itemIndexinCart].itemCount}</div>
          <div onClick={() => increaseCount(cartItems[itemIndexinCart].itemCount)} className={cardStyles.parts}>
            +
          </div>
        </div>
      );
    }
  };

  return (
    <div className={cardStyles.cardHolder}>
      <div> {item.name}</div>
      <div className={cardStyles.bannerImage}>
        <img src={item.imageURL} alt={"item"} />
      </div>
      <div className={cardStyles.cardbelowSec}>
        <div>Rs. {item.price}</div>
        {addtoCartButton()}
      </div>
    </div>
  );
}

export default ListingCard;
