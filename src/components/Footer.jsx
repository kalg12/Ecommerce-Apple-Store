import React from 'react'
import '../styles/Global.css'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className='copyright'>
                <p>Copyright © 2022 Apple Inc. Todos los derechos reservados.</p>
            </div>
            <div className='footer-links'>
                <ul>
                    <li>
                        <a href='./politica-privacidad'>Política de privacidad</a>
                    </li>
                    <li>
                        <a href='./ventas-rembolsos'>Ventas y rembolsos</a>
                    </li>
                    <li>
                        <a href='./aviso-legal'>Aviso legal</a>
                    </li>
                </ul>
            </div>
            <div className='footer-country'>
                <p>México</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer