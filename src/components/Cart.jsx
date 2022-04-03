import React, { useContext } from 'react'
import '../styles/Cart.css';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { user } = useContext(UserContext);
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
    </div>
  );
}

export default Cart