import React, { useContext } from 'react'
import '../styles/Cart.css';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { user } = useContext(UserContext);

  const pagar = async () => {
    const data = { articulos: [] };
    user.shopping.forEach((p) => {
      const add = { nombre: p.nombre, precio: 2, cantidad: 1 };
      data.articulos.push(add);
    });

    fetch("https://apple-ecommerce-kevin.herokuapp.com/api/payments", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.success) {
          mostrarMP(response.data);
        }
      });
  };

  const mostrarMP = (token) => {
    // eslint-disable-next-line no-undef
    const mp = new MercadoPago("TEST-523672968255333-031915-51aeb178027239c8f460bb041856eaa9-130775631", {
      locale: "es-MX",
    });

    // Inicializa el checkout
    mp.checkout({
      preference: {
        id: token,
      },
      render: {
        container: ".cho-container", // Indica el nombre de la clase donde se mostrará el botón de pago
        label: "Pagar", // Cambia el texto del botón de pago (opcional)
      },
    });
  };


  return (
    <div className='Cart-container'>
      <h3>Carrito</h3>
      <div className='Cart-items'>
        {user.shopping.map((item, index) => (
          <div className='Cart-item' key={index}>
            <img src={item.image} alt={item.name} className='Cart-item-image' />
            <div className='Cart-item-details'>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Precio: {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-success" onClick={pagar}>
        Continuar al área de pago
      </button>
      <div className="cho-container"></div>
    </div>
  );
}

export default Cart