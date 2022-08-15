import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import backgroundMain from "../assets/backgroundMain.svg";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const q = categoryId ? query(collection(db, "games"), where("category", "==", categoryId)) : collection(db, "games");

    getDocs(q)
      .then((result) => {
        const list = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(list);
      })
      .catch((err) => console.log(err))
      .finally(() => setShow(false));
  }, [categoryId]);

  return (
    <div style={styles.main}>
      <h1 className="d-flex" style={styles.h1}>
        {greeting}
      </h1>
      <h3 className="d-flex" style={styles.h3}>
        Haz clic en el juego para ver los detalles
      </h3>
      {show ? <Spinner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;

const styles = {
  main: {
    backgroundImage: `url(${backgroundMain})`,
    backgroundAttachment: "fixed",
    fontFamily: '"Fredoka", Arial, Helvetica, sans-serif',
    height: `max-content`,
  },
  h1: {
    padding: "2rem 0 1rem 0",
    textTransform: "uppercase",
    justifyContent: "center",
    backgroundColor: "rgba(220, 220, 220, 0.6)",
  },
  h3: {
    padding: "0 0 2rem 0",
    textTransform: "uppercase",
    justifyContent: "center",
  },
};
