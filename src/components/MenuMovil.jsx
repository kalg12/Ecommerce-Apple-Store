import React from 'react'
import '../styles/Global.css'
import '../styles/MenuMovil.css'

const MenuMovil = () => {
  return (
      <div className="MenuMovil shadow-drop-2-center">
          <ul>
              <li>
                  <a href="/">Inicio</a>
              </li>
              <li>
                  <a href="/">Clothes</a>
              </li>
              <li>
                  <a href="/">Electronics</a>
              </li>
              <li>
                  <a href="/">Furnitures</a>
              </li>
              <li>
                  <a href="/">Toys</a>
              </li>
              <li>
                  <a href="/">Contacto</a>
              </li>
          </ul>
      </div>
  )
}

export default MenuMovil