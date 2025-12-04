import React from 'react'
import Hero from '../components/Hero'
import Products from './Products'
import ProductsSection from '../components/Productssection'


const Home = () => {
  return (
    <div>
        <Hero/>
       <Products/>
       <ProductsSection/>
    </div>
  )
}

export default Home