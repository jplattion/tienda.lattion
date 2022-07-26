import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import backgroundMain from "../assets/backgroundMain.svg";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";
const viewport = { height: document.documentElement.clientHeight };

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "games");
    const refDoc = doc(productCollection, productId);
    getDoc(refDoc)
      .then((result) => {
        const product = {
          id: doc.id,
          ...result.data(),
        };
        setProduct(product);
      })
      .catch((err) => console.log(err))
      .finally(() => setShow(false));
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
