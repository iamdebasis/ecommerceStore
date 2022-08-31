import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemCount, deleteCartItem, getCartItems, increaseItemCount } from "../../../store/entities/items";
import cartStyles from "./cartStyles.module.css";

function CartComponent() {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const increaseCount = (item, count) => {
    if (count < item.quantity) {
      dispatch(increaseItemCount(item));
    } else {
      window.alert("quantity exceeds");
    }
  };

  const itemCount = (item) => {
    let itemIndexinCart = cartItems.findIndex((each) => each.id === item.id);
    return (
      <div className={cartStyles.addcartbtn}>
        <div onClick={() => dispatch(decreaseItemCount(item))} className={cartStyles.parts}>
          -
        </div>
        <div className={cartStyles.parts}>{cartItems[itemIndexinCart].itemCount}</div>
        <div onClick={() => increaseCount(item, cartItems[itemIndexinCart].itemCount)} className={cartStyles.parts}>
          +
        </div>
      </div>
    );
  };

  return (
    <div className={cartStyles.cartContainer}>
      <div className={cartStyles.heading}>Shopping Cart</div>
      {cartItems.map((item) => (
        <div key={item.id} className={cartStyles.eachItem}>
          <div className={cartStyles.bannerImage}>
            <img src={item.imageURL} alt={"item"} />
          </div>
          <div className={cartStyles.desc}>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
          <div>{itemCount(item)}</div>
          <button onClick={() => dispatch(deleteCartItem(item))} className={cartStyles.delete}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartComponent;
