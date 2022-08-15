import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../components/ItemCount";
import { cartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ product }) => {
  const [buyCompleted, setBuyCompleted] = useState(false);
  const { addItem } = useContext(cartContext);

  const onAdd = (count) => {
    setBuyCompleted(true);
    addItem({ ...product, qty: count });
  };

  const handleClick = (value) => {
    if (value !== "") {
      Swal.fire({
        title: "Video Explicativo",
        html: `
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="${product.links.videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope" allowfullscreen></iframe>
        </div>`,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Cerrar',
      });
    } else {
      Swal.fire("Error", "No hay video para este juego.", "error");
    }
  };

  return (
    <Card style={styles.card} key={product.id}>
      <Card.Title style={styles.cardTitle}> {product.title} </Card.Title>

      <div style={styles.row}>
        <Card.Img variant="top" src={product.links.pictureUrl} style={styles.cardImage} />
        <Card.Body>
          <Card.Text style={styles.cardDescription}> {product.description} </Card.Text>
          <div style={styles.gameInfo}>
            <div>
              Cantidad de jugadores: {product.details.playersMin} / {product.details.playersMax}
            </div>
            <div>
              Tiempo de Juego: {product.details.timeMin} / {product.details.timeMax} minutos
            </div>
            <div>Edad minima recomendada: {product.details.playersAge} años</div>
            <div>Dificultad del juego: {product.details.gameDificulty} / 5</div>
            <div>
              <a href={product.links.bggUrl} target="_blank" className="text-center btn btn-primary mb-2">
                Link a la BGG
              </a>
              <button id={product.id} value={product.links.videoUrl} onClick={handleClick} className="text-center btn btn-info mb-2">
                Video explicativo
              </button>
            </div>
          </div>
          <Card.Text style={styles.cardPrice}> Precio: $ {product.store.price} </Card.Text>
          <div>
            {buyCompleted ? (
              <Link to="/cart">
                <Button variant="primary" style={styles.btn}>
                  Ver Carrito
                </Button>
              </Link>
            ) : (
              <ItemCount stock={product.store.stock} onAdd={onAdd} />
            )}
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ItemDetail;

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
  },
  card: {
    width: "80%",
    backgroundColor: "#999999",
    margin: "auto",
    marginTop: "1rem",
  },
  cardTitle: {
    marginTop: "0.5rem",
    borderRadius: "10px",
    padding: "0.3rem 0 0.3rem 0",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "2rem",
  },
  cardImage: {
    paddingTop: "0.3rem",
    height: "300px",
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
  gameInfo: {
    margin: "auto",
    textAlign: "center",
  },
  cardPrice: {
    fontSize: "2rem",
    textAlign: "center",
  },
  btn: {
    display: "flex",
    margin: "auto",
  },
};
