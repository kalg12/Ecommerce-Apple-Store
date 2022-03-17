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
                  <a href="/mac">Mac</a>
              </li>
              <li>
                  <a href="/ipad">iPad</a>
              </li>
              <li>
                  <a href="/iphone">iPhone</a>
              </li>
              <li>
                  <a href="/watch">Watch</a>
              </li>
              <li>
                  <a href="/">Contacto</a>
              </li>
          </ul>
      </div>
  )
}

export default MenuMovil