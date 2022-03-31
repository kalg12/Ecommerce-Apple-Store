import React, {useContext} from 'react'
import '../styles/ProductItem.css';
import { UserContext } from '../context/UserContext';

const Cart = () => {
    const { user } = useContext(UserContext);

    return (
      <div>
        <h3>Carrito</h3>
        <ul className="list-group">
          {user.shopping.map((x) => {
            return (
              <li
                key={x._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {x.nombre}
                <span className="badge bg-primary rounded-pill">1</span>
              </li>
            );
          })}
        </ul>
  
        <button type="button" className="btn btn-success" /* onClick={pagar} */>
          Proceder
        </button>
        <div className="cho-container"></div>
      </div>
    );
}

export default Cart