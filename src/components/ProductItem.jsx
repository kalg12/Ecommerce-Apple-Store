import React, { useContext } from 'react';
import '../styles/ProductItem.css';
import addToCartSVG from '../assets/icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = (props) => {
	const { addToCart } = useContext(AppContext);

	const handleAddToCart = item => {
		addToCart(item);
	};


	return (
		<div className="ProductItem">
			<img src={props.image} alt={props.name} />
			<div className="product-info">
				<div>
					<p>${props.price}</p>
					<p>{props.name}</p>
				</div>
				<figure onClick={() => handleAddToCart(props)}>
					<img src={addToCartSVG} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;