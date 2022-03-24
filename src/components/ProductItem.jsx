import React, {useContext} from 'react';
import '../styles/ProductItem.css';
import addToCartSVG from '../assets/icons/bt_add_to_cart.svg';
import {UserContext} from '../context/UserContext';

const ProductItem = (props) => {

	const { user, setUser } = useContext(UserContext);

	const agregar = () => {
    user.shopping.push(props);
    console.log(user.shopping);

    setUser({ ...user });
  };

	return (
		<div className="ProductItem">
			<img src={props.image} alt={props.name} />
			<div className="product-info">
				<div>
					<p>${props.price}</p>
					<p>{props.name}</p>
				</div>
				<figure onClick={agregar}>
					<img src={addToCartSVG} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;