import React from "react";
import CartItems from "../../layouts/cartItems/cartItems";
import headerStyles from "./headerStyles.module.css";

function HeaderComponent() {
  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.itmHolder}>
        <div className={headerStyles.eachSection}>TeeRex Store</div>
        <div className={headerStyles.eachSection}>
          <CartItems />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
