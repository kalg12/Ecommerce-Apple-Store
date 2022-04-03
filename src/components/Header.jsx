import React, { useState, useContext } from 'react'
import '../styles/Header.css'
import '../styles/Global.css'
import menu from '../assets/icons/icon_menu.svg'
import logo from '../assets/logos/logo_yard_sale.svg'
import shoppingCart from '../assets/icons/icon_shopping_cart.svg'
import Menu from '../components/Menu'
import MenuMovil from '../components/MenuMovil'
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom'

const Header = () => {
	// eslint-disable-next-line no-unused-vars
	const { user, setUser } = useContext(UserContext);
	var usuario = sessionStorage.getItem('cuentaUsuario')

	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" onClick={handleToggleMenu} />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<Link to="/">Inicio</Link>
					</li>
					<li>
						<Link to="/mac">Mac</Link>
					</li>
					<li>
						<Link to="/ipad">iPad</Link>
					</li>
					<li>
						<Link to="/iphone">iPhone</Link>
					</li>
					<li>
						<Link to="/watch">Watch</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					{user.token ? (
						<>
							<Link to="#" className="dropdown">
								Usuario: {usuario}
							</Link>
							<li className="navbar-email" onClick={handleToggle}>
								luciano19940@hotmail.com
							</li>
						</>
					) : (
						<>
							<li>
								<Link to="/login">Iniciar sesion</Link>
							</li>
						</>
					)}
					<Link to="/cart">
						<li className="navbar-shopping-cart">
							<img src={shoppingCart} alt="shopping cart" />
							<div>{user.shopping.length}</div>
						</li>
					</Link>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleMenu && <MenuMovil />}
		</nav>
	)
}

export default Header