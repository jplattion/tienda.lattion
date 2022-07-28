import React, { useContext, useState } from "react";
import { db } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp, Timestamp } from "firebase/firestore";
import { cartContext } from "../context/CartContext";
import { Button, Form } from "react-bootstrap";

const EndBuy = () => {
  const [orderId, setOrderId] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const { products, totalSum } = useContext(cartContext);

  const createOrder = () => {
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, {
      userData,
      items: products,
      total: totalSum(),
      date: serverTimestamp(),
    })
      .then((result) => {
        setOrderId(result.id);
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [field]: value,
    });
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control onChange={handleOnChange} type="text" placeholder="Ingrese su nombre" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control onChange={handleOnChange} type="text" placeholder="Ingrese su apellido" name="lastName" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control onChange={handleOnChange} type="number" placeholder="Ingrese su teléfono" name="phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleOnChange} type="email" placeholder="Ingrese su email" name="email" />
        </Form.Group>
        <Button variant="primary" onClick={createOrder}>
          Comprar
        </Button>
      </Form>
      <h2>Id de la Compra {orderId}</h2>
    </>
  );
};

export default EndBuy;
