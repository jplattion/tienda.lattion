import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <>
      <Card style={styles.card}>
        <Link to={`/product/${product.id}`} style={styles.cardTitle}>
          <Card.Title> {product.title} </Card.Title>
          <Card.Img variant="top" src={product.image} style={styles.cardImage} />
          <Card.Text style={styles.cardPrice}>${product.price}</Card.Text>
          <Card.Text style={styles.cardDescription}>Haz clic para ver el detalle.</Card.Text>
        </Link>
      </Card>
    </>
  );
};

export default Item;

const styles = {
  card: {
    width: "16rem",
    margin: "0 auto",
    marginTop: "1rem",
    borderRadius: "10px",
  },
  cardTitle: {
    color: "#000000",
    backgroundColor: "#999999",
    borderRadius: "10px",
    padding: "0.3rem 0 0.3rem 0",
    textTransform: "uppercase",
    textAlign: "center",
    textDecoration: "none",
  },
  cardImage: {
    paddingTop: "0.3rem",
    height: "200px",
    width: "auto",
    maxWidth: "100%",
    margin: "auto",
  },
  cardId: {
    margin: "auto",
    textAlign: "center",
  },
  cardDescription: {
    textAlign: "center",
    fontSize: "0.6rem",
  },
  cardPrice: {
    textAlign: "center",
  },
  container: {
    position: "absolute",
    bottom: "0",
    paddingBottom: "1rem",
  },
  btn: {
    display: "flex",
    margin: "auto",
  },
};
