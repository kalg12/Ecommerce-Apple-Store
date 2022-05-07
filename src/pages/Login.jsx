import React, {useRef} from 'react';
import logo from '../assets/logos/logo_yard_sale.svg'
import '../styles/Global.css'
import '../styles/Login.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        if(formData.get('email') === '' || formData.get('password') === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, llena todos los campos',
            })
        }else if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.get('email')))){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, ingresa un correo valido',
            })
        }else{
            try
            {
                fetch("https://apple-ecommerce-kevin.herokuapp.com/api/users/login", {
                    method: 'POST',
                    body: JSON.stringify({ email: formData.get('email'), password: formData.get('password') }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(res => res.json())
                .then(data => {
                    if(data.sucess) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Bienvenido',
                            text: 'Has iniciado sesión correctamente',
                        })
                        localStorage.setItem('token', data.token)
                        localStorage.setItem('user', data.user)
                        window.location.href = '/'
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Correo o contraseña incorrectos',
                        })
                    }
                })
            }
            catch(error)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un error, por favor intenta de nuevo',
                })
            }
        }
    }

    return (
    <>
        <div className="Login">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo" />
                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="email" name="email" placeholder="email@example.com" className="input input-email" />
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" />
                    <button
                        onClick={handleSubmit}
                        className="primary-button login-button">
                        Iniciar sesión
                    </button>
                    <Link to="/">Olvidé mi contraseña</Link>
                </form>
                <Link to="/create-account">
                <button
                    className="secondary-button signup-button"
                >
                    Crear una cuenta
                </button>
                </Link>
            </div>
        </div >
    </>
    )
}

export default Login