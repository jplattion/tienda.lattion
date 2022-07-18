import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const getQuantity = () => {
    let qty = 0;
    products.forEach((product) => {
      qty += product.qty;
    });
    setQuantity(qty);
  };

  useEffect(() => {
    getQuantity();
  }, [products]);

  const addItem = (product) => {
    if (isInCart(product.id)) {
      const found = products.find((p) => p.id === product.id);
      const index = products.indexOf(found);
      const productsCopy = [...products];
      productsCopy[index].qty += product.qty;
      setProducts(productsCopy);
      console.log("if suma");
    } else {
      setProducts([...products, product]);
      console.log("else nuevo");
    }
  };

  const removeItem = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const clearCart = () => {
    setProducts([]);
    setQuantity(0);
  };

  const isInCart = (id) => {
    products.some((product) => product.id === id);
  };

  const totalSum = () => {};

  return <Provider value={{ products, addItem, removeItem, clearCart, quantity }}>{children}</Provider>;
};

export default ContextProvider;
