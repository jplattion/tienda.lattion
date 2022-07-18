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
      const productsCopy = [...products];
      const found = productsCopy.find((p) => p.id === product.id);
      found.qty += product.qty;
      setProducts(productsCopy);
    } else {
      setProducts([...products, product]);
    }
  };

  const removeItem = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  const clearCart = () => {
    setProducts([]);
    setQuantity(0);
  };

  const isInCart = (id) => {
    return products.some((product) => product.id === id);
  };

  const totalSum = () => {
    let total = 0;
    products.forEach((product) => {
      let price = product.qty * product.price;
      total = total + price;
    });
    return total;
  };

  return <Provider value={{ products, addItem, removeItem, clearCart, quantity, totalSum }}>{children}</Provider>;
};

export default ContextProvider;
