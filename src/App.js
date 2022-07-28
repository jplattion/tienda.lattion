import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./context/CartContext";
import EndBuy from "./components/EndBuy";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <NavBar storeName="Tienda Lattion" />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Tienda Lattion" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenidos a Tienda Lattion" />} />
          <Route path="/product/:productId" element={<ItemDetailContainer greeting="Detalle del producto" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buyform" element={<EndBuy />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}
export default App;
