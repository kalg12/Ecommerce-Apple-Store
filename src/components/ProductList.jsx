import React from 'react';
import '../styles/Global.css';
import '../styles/ProductList.css';
import ProductItem from './ProductItem';
import useGetProducts from '../hooks/useGetProducts';

//API
const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API)
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((product) => {
					return <ProductItem product={product} key={product.id} />;
				})}
			</div>
		</section>
	);
}

export default ProductList