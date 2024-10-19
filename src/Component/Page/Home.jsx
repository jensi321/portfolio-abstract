import React from 'react'
import About from '../Home/About'
import Banner from '../Home/Banner'
import Blog from '../Home/Blog'
import Contact from '../Home/Contact'
import PortFolio from '../Home/PortFolio'
import Services from '../Home/Services'
import TopUpButton from '../Home/TopUpButton'

const Home = () => {
  return (
    <>
        <Banner/>
        <About/>
        <PortFolio/>
        <Services/>
        <Blog/>
        <Contact/>
        <TopUpButton/>
    </>
  )
}

export default Home
