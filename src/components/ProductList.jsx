import React from 'react';
import '../styles/Global.css';
import '../styles/ProductList.css';
import ProductItem from './ProductItem';
import useGetProducts from '../hooks/useGetProducts';

//API
const API = 'http://localhost:4000/api/products';

const ProductList = () => {
	const products = useGetProducts(API)
	return (
		<section className="main-container">
			<div className="ProductList">
					<ProductItem key={products.id} products={products} />
			</div>
		</section>
	);
}

export default ProductList

/* {products.map((products) => {
	return <ProductItem products={products} key={products.id} />;
})} */