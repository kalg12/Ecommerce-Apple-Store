import React, {useRef} from 'react'
import '../styles/CreateAccount.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        if(formData.get('nombre') === '' || formData.get('email') === '' || formData.get('username') === '' || formData.get('password') === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, llena todos los campos',
            })
        }
        else if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.get('email')))){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, ingresa un correo valido',
            })
        }
        else{
            fetch('https://apple-ecommerce-kevin.herokuapp.com/api/users', {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.get('name'),
                    lastname: formData.get('lastname'),
                    email: formData.get('email'),
                    username: formData.get('email'),
                    password: formData.get('password'),
                    phone: formData.get('phone'),
                    address: formData.get('address')
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            /* Swal.fire({
                icon: 'success',
                title: 'Cuenta creada correctamente',
                text: 'Se ha creado su cuenta correctamente',
            })
            .then(() => {
                console.log('Se ha creado la cuenta correctamente')
            }) */
            //si el usuario se crea correctamente
            .then(res => res.json())
            .then(data => {
                if(data.message === 'Creado exitosamente'){
                    console.log('Se ha creado la cuenta correctamente')
                }
            })
        }
    }

  return (
    <>
    <div className="CreateAccount">
        <div className="CreateAccount-container">
            <h1>Reg??strate</h1>
            <form ref={form} onSubmit={handleSubmit} className="form">
                <input type="text" name="name" placeholder="Nombre" className="input" />
                <input type="text" name="lastname" placeholder="Apellido" className="input" />
                <input type="email" name="email" placeholder="Correo electr??nico" className="input input-email"/>
                <input type="password" name="password" placeholder="*********" className="input input-password"/>
                <input type="text" name="phone" placeholder="Tel??fono" className="input" />
                <input type="text" name="address" placeholder="Direcci??n" className="input" />
                <button type="submit" className="primary-button signup-button">Registrarse
                </button>
            </form>
            <div className='withAccount'>
                <Link to="/login">??Ya tienes una cuenta?</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateAccount