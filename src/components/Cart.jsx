import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import backgroundMain from "../assets/backgroundMain.svg";

const cart = () => {
  const { products, clearCart, removeItem, totalSum } = useContext(cartContext);

  return (
    <div style={styles.main}>
      <p style={styles.totalPrice}>Carrito de compras</p>
      {products.length === 0 ? (
        <h1 style={styles.h1}>
          No hay ningun juego en el carrito, agregalos <Link to="/">aca</Link>
        </h1>
      ) : (
        <div>
          <div style={styles.listContainer}>
            {products.map((product) => (
              <Card key={product.id} style={styles.card}>
                <h2 style={styles.cardTitle}>{product.title}</h2>
                <Card.Img variant="top" src={product.links.pictureUrl} style={styles.cardImage} />
                <span style={styles.cardText}>Precio Unitario: ${product.store.price}</span>
                <span style={styles.cardText}>Unidades agregadas: {product.qty}</span>
                <Button variant="secondary" onClick={() => removeItem(product.id)} style={styles.btn}>
                  Quitar juego del carrito
                </Button>
              </Card>
            ))}
          </div>
          <div>
            <p style={styles.totalPrice}>Precio Total del carrito: ${totalSum()}</p>
            <Button variant="secondary" onClick={clearCart} style={styles.btn}>
              Limpiar carrito de compras
            </Button>
          </div>
          <Link to="/buyform">
            <Button variant="primary" style={styles.btn}>
              Comprar
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default cart;

const styles = {
  main: {
    backgroundImage: `url(${backgroundMain})`,
    backgroundAttachment: "fixed",
    fontFamily: '"Fredoka", Arial, Helvetica, sans-serif',
    height: `100vh`,
  },
  h1: {
    margin: "auto",
    padding: "2rem 0 1rem 0",
    textTransform: "uppercase",
    textAlign: "center",
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#999999",
    width: "16rem",
    margin: "0 auto",
    marginTop: "1rem",
    borderRadius: "10px",
  },
  cardTitle: {
    marginTop: "0.5rem",
    margin: "auto",
    borderRadius: "10px",
    padding: "0.3rem",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "1rem",
  },
  cardImage: {
    paddingTop: "0.1rem",
    height: "100px",
    width: "100px",
    maxWidth: "100%",
    margin: "0.5rem auto",
  },
  cardText: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  totalPrice: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  btn: {
    textTransform: "uppercase",
    display: "flex",
    margin: "0.5rem auto",
  },
};
