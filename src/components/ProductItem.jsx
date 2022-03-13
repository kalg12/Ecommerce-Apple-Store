import React, { useState } from 'react';
import '../styles/ProductItem.css';
import addToCart from '../assets/icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const [cart, setCart] = useState([]);

	cart.push(product); //remover

	const handleClick = () => {
		setCart([]);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick} >
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;