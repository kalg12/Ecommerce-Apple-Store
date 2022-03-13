import React, { useState } from 'react';
import '../styles/ProductItem.css';
import addToCart from '../assets/icons/bt_add_to_cart.svg';

const ProductItem = ({products}) => {
	const [cart, setCart] = useState([]);

	cart.push(products); //remover

	const handleClick = () => {
		setCart([]);
	}

	return (
		<div className="ProductItem">
			<img src={products.image} alt={products.name} />
			<div className="product-info">
				<div>
					<p>${products.price}</p>
					<p>{products.description}</p>
				</div>
				<figure onClick={handleClick} >
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;