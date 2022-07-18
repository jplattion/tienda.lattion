import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartContext } from "../context/CartContext";

const CartWidget = () => {
  const { quantity } = useContext(cartContext);

  return (
    <>
      <ShoppingCartIcon style={styles.shoppingCart} />
      {quantity === 0 ? <></> : <p>{quantity}</p>}
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
