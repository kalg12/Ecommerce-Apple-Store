import React from 'react'
import '../styles/Global.css'
import '../styles/BannerIphoneSE.css'
import coverImage from '../assets/products/cover-image.png'

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-title">
            <p>Nuevo</p>
            <p>iPhone SE</p>
            <p>Enamora por su poder. Consquista por su precio.</p>
        </div>
        <div className='banner-image'>
          <img src={coverImage} alt='iphone' className='iphone-float'/>
        </div>
      </div>
    </section>
  )
}

export default Banner