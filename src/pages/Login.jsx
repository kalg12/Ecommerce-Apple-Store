import React, {useRef} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import logo from '../assets/logos/logo_yard_sale.svg'
import '../styles/Global.css'
import '../styles/Login.css'


const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
}

    return (
    <>
        <Header />
        <div className="Login">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo" />
                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="email@example.cm" className="input input-email" />
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