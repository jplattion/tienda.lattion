import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../components/ItemCount";

const ItemDetails = ({ product }) => {
  const onAdd = () => {
    alert(`Gracias por tu compra`);
  };
  return (
    <>
      <Card style={styles.card}>
        <Card.Title style={styles.cardTitle}> {product.title} </Card.Title>
        <div style={styles.row}>
          <Card.Img variant="top" src={product.image} style={styles.cardImage} />
          <Card.Body>
            <Card.Text style={styles.cardId}> ID: {product.id}</Card.Text>
            <Card.Text style={styles.cardDescription}> {product.description} </Card.Text>
            <Card.Text style={styles.cardPrice}> $ {product.price} </Card.Text>
            <div>
              <ItemCount stock={12} onAdd={onAdd} />
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default ItemDetails;

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
  },
  card: {
    width: "600px",
    backgroundColor: "#999999",
    margin: "auto",
    marginTop: "1rem",
  },
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
    height: "200px",
    width: "auto",
    maxWidth: "100%",
    margin: "1rem",
  },
  cardId: {
    margin: "auto",
    textAlign: "center",
  },
  cardDescription: {
    textAlign: "center",
  },
  cardPrice: {
    textAlign: "center",
  },
  btn: {
    display: "flex",
    margin: "auto",
  },
};
