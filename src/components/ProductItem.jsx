import React, { useContext } from 'react';
import '../styles/ProductItem.css';
import addToCartSVG from '../assets/icons/bt_add_to_cart.svg';
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2';

const ProductItem = (props) => {

	const { user, setUser } = useContext(UserContext);

	const agregar = () => {
		user.shopping.push(props);
		console.log(user.shopping);
		setUser({ ...user });
		Swal.fire({
			icon: 'success',
			title: 'Se agregó al carrito',
			showConfirmButton: true,
			confirmButtonText: 'Ir al carrito',
			confirmButtonColor: '#00a8ff',
			showCancelButton: true,
			cancelButtonText: 'Seguir comprando',
			cancelButtonColor: '#ACD9B2',
			reverseButtons: true,
			allowEnterKey: false,
			allowOutsideClick: false,
			allowEscapeKey: false,
		}).then((result) => {
			if (result.value) {
				window.location.href = '/cart';
			}
		}
		);
	};

	const detalles = () => {
		Swal.fire({
			title: props.name,
			html: `
			<div class="modal-body">
				<div class="row">
					<div class="col-md-6">
						<img src="${props.image}" alt="${props.name}" class="img-fluid">
					</div>
					<div class="col-md-6">
						<h3>${props.name}</h3>
						<p>${props.description}</p>
						<p>Precio: ${props.price}</p>
					</div>
				</div>
			</div>
		`,
			showConfirmButton: false,
			showCancelButton: true,
			cancelButtonText: 'Cerrar',
			cancelButtonColor: '#ACD9B2'
		});
	};


	return (
		<div className="ProductItem">
			<img src={props.image} alt={props.name} onClick={detalles} />
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