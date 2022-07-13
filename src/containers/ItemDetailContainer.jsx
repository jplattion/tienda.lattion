import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import backgroundMain from "../assets/backgroundMain.svg";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
const viewport = { height: document.documentElement.clientHeight };

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err))
      .finally(() =>
        setTimeout(() => {
          setShow(false);
        }, 2000)
      );
  }, [productId]);

  return (
    <>
      <div style={styles.main}>
        <h1 className="d-flex" style={styles.h1}>
          {greeting}
        </h1>
        {show ? <Spinner /> : <ItemDetail product={product} />}
      </div>
    </>
  );
};

export default ItemDetailContainer;

const styles = {
  main: {
    backgroundImage: `url(${backgroundMain})`,
    backgroundAttachment: "fixed",
    fontFamily: '"Fredoka", Arial, Helvetica, sans-serif',
    height: `${viewport.height}px`,
  },

  h1: {
    padding: "2rem 0 2rem 0",
    textTransform: "uppercase",
    justifyContent: "center",
  },
};
