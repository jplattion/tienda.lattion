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
        <NavBar storeName="Dados y Meeples" />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Nuestra Juegoteca" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Te ayudamos a elegir tu próximo juego de mesa" />} />
          <Route path="/product/:productId" element={<ItemDetailContainer greeting="Detalles del Juego" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buyform" element={<EndBuy />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}
export default App;
