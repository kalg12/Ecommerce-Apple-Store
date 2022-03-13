import React from 'react'
import '../styles/Global.css'
import '../styles/BannerIphonePro.css'
import coverImage from '../assets/products/cover-image-pro.png'

const BannerIphonePro = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-title_pro">
            <p>iPhone 13 Pro</p>
            <p>Ahora en verde alpino</p>
        </div>
        <div className='banner-image'>
          <img src={coverImage} alt='iphone' className='iphone-float'/>
        </div>
      </div>
    </section>
  )
}

export default BannerIphonePro