import React from 'react'
import BannerIphoneSE from '../components/BannerIphoneSE'
import BannerIphonePro from '../components/BannerIphonePro'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Header />
    <BannerIphoneSE />
    <BannerIphonePro />
    <Footer />
    </>
  )
}

export default Home