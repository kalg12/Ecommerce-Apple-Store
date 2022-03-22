import React, {useRef} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import logo from '../assets/logos/logo_yard_sale.svg'
import '../styles/Global.css'
import '../styles/Login.css'
import Swal from 'sweetalert2'


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
            //hacemos un fethc para ver si existe el email y su contraseña en http://localhost:4000/api/users validamos con el metodo post tipo json y mandamos los datos del formulario con el metodo post y si existe el usuario y la contraseña entonces redireccionamos a la pagina principal de la tienda
            fetch('http://localhost:4000/api/users', {
                method: 'POST',
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password')
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if(data.user){
                    //guardamos el token en el localStorage
                    localStorage.setItem('token', data.token);
                    //redireccionamos a la pagina principal de la tienda
                    window.location.href = '/';
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'El correo o la contraseña son incorrectos',
                    })
                }
            }
            )

        }
    }

    return (
    <>
        <Header />
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
                    <a href="/">Olvidé mi contraseña</a>
                </form>
                <button
                    className="secondary-button signup-button"
                >
                    Crear una cuenta
                </button>
            </div>
        </div >
        <Footer />
    </>
    )
}

export default Login