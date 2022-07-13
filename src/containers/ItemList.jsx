import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div style={styles.listContainer}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
};
