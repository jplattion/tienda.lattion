import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const cart = () => {
  const { products, clearCart, removeItem, totalSum } = useContext(cartContext);

  return (
    <>
      {products.length === 0 ? (
        <h1>
          No hay productos en el carrito, agregalos <Link to="/">aca</Link>
        </h1>
      ) : (
        <>
          {products.map((product) => (
            <Card key={product.id}>
              <h2 style={styles.cardTitle}>{product.title}</h2>
              <Card.Img variant="top" src={product.links.pictureUrl} style={styles.cardImage} />
              <span>Precio Unitario ${product.store.price}</span>
              <span>{product.qty} Unidades</span>
              <Button variant="secondary" onClick={() => removeItem(product.id)}>
                Eliminar del Carrito
              </Button>
            </Card>
          ))}
          <div>
            <span>Precio Total ${totalSum()}</span>
            <Button variant="secondary" onClick={clearCart}>
              Limpiar carrito
            </Button>
          </div>
          <Link to="/buyform">
            <Button variant="primary">Comprar</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default cart;

const styles = {
  cardTitle: {
    marginTop: "0.5rem",
    backgroundColor: "#aba3f4",
    borderRadius: "10px",
    padding: "0.3rem 0 0.3rem 0",
    textTransform: "uppercase",
    textAlign: "center",
  },
  cardImage: {
    paddingTop: "0.3rem",
    height: "100px",
    width: "100px",
    maxWidth: "100%",
    margin: "1rem",
  },
};
