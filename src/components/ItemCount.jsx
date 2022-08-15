import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Add, Remove } from "@mui/icons-material";
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const addition = () => {
    count < stock && setCount(count + 1);
    count >= stock && Swal.fire("Se llego al límite del stock disponible.");
  };

  const substraction = () => {
    count > 0 && setCount(count - 1);
  };

  const addToCart = () => {
    onAdd(count);
  };

  return (
    <div style={styles.countContainer}>
      <div className="d-flex gap-3 m-2 justify-content-center">
        <Button variant="primary" onClick={substraction}>
          <Remove />
        </Button>
        <p style={styles.count}>{count}</p>
        <Button variant="primary" onClick={addition}>
          <Add />
        </Button>
      </div>
      <Button style={styles.btnBuy} variant="success" onClick={addToCart}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;

const styles = {
  countContainer: {
    margin: "auto",
    width: "fit-content",
  },

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
