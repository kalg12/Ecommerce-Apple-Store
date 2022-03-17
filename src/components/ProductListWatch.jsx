/* eslint-disable array-callback-return */
import React, {useState, useEffect} from 'react';
import '../styles/Global.css';
import '../styles/ProductList.css';
import ProductItem from './ProductItem';

const ProductListWatch = (product) => {
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
				}
			});
	};

	const [category] = useState('Watch');

	return (
		<div>
			<div className="main-container">
				<div className="ProductList">
					{products.map((product) => {
						if (product.category === category) {
							return <ProductItem key={product._id} {...product} />
						}
					})
					}
				</div>
			</div>
		</div>
	);
}

export default ProductListWatch