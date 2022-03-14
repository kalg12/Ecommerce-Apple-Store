import React, { useState, useEffect } from 'react';
import '../styles/Global.css';
import '../styles/ProductList.css';
import ProductItem from './ProductItem';

const ProductList = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		obtenerProductos();
	}, []);

	const obtenerProductos = () => {
		fetch('http://localhost:4000/api/products')
			.then((resp) => resp.json())
			.then((value) => {
				if (value.success) {
					setProducts(value.data);
					console.log(value);
				}
			});
	};

	return (
		<div>
			<div className="main-container">
				<div className="ProductList">
					{products.map((x) => {
						return <ProductItem key={x._id} {...x} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default ProductList