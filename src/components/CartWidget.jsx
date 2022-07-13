import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <>
      <ShoppingCartIcon style={styles.shoppingCart} />
    </>
  );
};

export default CartWidget;

const styles = {
  shoppingCart: {
    fontSize: "32px",
    margin: "0 20px 0 20px",
  },
};
