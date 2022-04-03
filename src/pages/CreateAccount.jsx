import React, {useRef} from 'react'
import '../styles/CreateAccount.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
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
            fetch('http://localhost:4000/api/users', {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.get('name'),
                    lastname: formData.get('lastname'),
                    email: formData.get('email'),
                    password: formData.get('password'),
                    username: formData.get('email'),
                    phone: formData.get('phone'),
                    address: formData.get('address')
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if(data.user){
                    localStorage.setItem('token', data.token);
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
    <div className="CreateAccount">
        <div className="CreateAccount-container">
            <h1>Regístrate</h1>
            <form ref={form} onSubmit={handleSubmit} className="form">
                <input type="text" name="name" placeholder="Nombre" className="input" />
                <input type="text" name="lastname" placeholder="Apellido" className="input" />
                <input type="email" name="email" placeholder="Correo electrónico" className="input input-email"/>
                <input type="password" name="password" placeholder="*********" className="input input-password"/>
                <input type="text" name="phone" placeholder="Teléfono" className="input" />
                <input type="text" name="address" placeholder="Dirección" className="input" />
                <button type="submit" className="primary-button signup-button">Registrarse
                </button>
            </form>
            <div className='withAccount'>
                <Link to="/login">¿Ya tienes una cuenta?</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateAccount