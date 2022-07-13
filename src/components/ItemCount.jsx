import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [Count, setCount] = useState(initial);

  const addition = () => {
    Count < stock && setCount(Count + 1);
    Count >= stock && alert("Se llego al limite del stock.");
  };

  const substraction = () => {
    Count > 0 && setCount(Count - 1);
  };

  // const addToCart = () => {
  //   onAdd(count);
  // };

  return (
    <>
      <div className="d-flex gap-3 m-2 justify-content-center">
        <Button variant="primary" onClick={substraction}>
          -
        </Button>
        <p style={styles.count}>{Count}</p>
        <Button variant="primary" onClick={addition}>
          +
        </Button>
      </div>
      <Button style={styles.btnBuy} variant="success" onClick={onAdd}>
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;

const styles = {
  count: {
    fontSize: "1.2rem",
    margin: "auto",
  },

  btnBuy: {
    display: "block",
    textTransform: "uppercase",
    margin: "auto",
  },
};
