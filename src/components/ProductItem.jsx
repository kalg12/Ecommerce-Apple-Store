import React, { useContext } from 'react';
import '../styles/ProductItem.css';
import addToCart from '../assets/icons/bt_add_to_cart.svg';

const ProductItem = (props) => {

	return (
		<div className="ProductItem">
			<img src={props.image} alt={props.name} />
			<div className="product-info">
				<div>
					<p>${props.price}</p>
					<p>{props.name}</p>
				</div>
				<figure>
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;