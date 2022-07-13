import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import backgroundMain from "../assets/backgroundMain.svg";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([]);
	const [show, setShow] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		const URL = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : `https://fakestoreapi.com/products`;
		fetch(URL)
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((err) => console.log(err))
			.finally(() =>
				setTimeout(() => {
					setShow(false);
				}, 2000)
			);
	}, [categoryId]);

	return (
		<>
			<div style={styles.main}>
				<h1 className="d-flex" style={styles.h1}>
					{greeting}
				</h1>
				{show ? <Spinner /> : <ItemList products={products} />}
			</div>
		</>
	);
};

export default ItemListContainer;

const styles = {
	main: {
		backgroundImage: `url(${backgroundMain})`,
		backgroundAttachment: "fixed",
		fontFamily: '"Fredoka", Arial, Helvetica, sans-serif',
		height: `100%`,
	},

	h1: {
		padding: "2rem 0 2rem 0",
		textTransform: "uppercase",
		justifyContent: "center",
	},
};
