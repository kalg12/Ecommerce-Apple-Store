import React, {useContext} from 'react'
import '../styles/Global.css'
import '../styles/Menu.css'
import { UserContext } from '../context/UserContext';

const Menu = () => {

	const { user, setUser } = useContext(UserContext);

	const logout = () => {
		sessionStorage.setItem('tokenUsuario', null)
		sessionStorage.setItem('cuentaUsuario', null)
		sessionStorage.setItem('nombreUsuario', null)
		sessionStorage.setItem('correoUsuario', null)
		sessionStorage.setItem('idUsuario', null)
		user.token = false
		setUser({ ...user })
	}

	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/" className="title">Mis órdenes</a>
				</li>
				<li>
					<a href="/">Mi cuenta</a>
				</li>
				<li onClick={logout}>
					<a href="/">Cerrar sesión</a>
				</li>
			</ul>
		</div>
	)
}

export default Menu