import React from 'react'
import Hero from '../components/Hero'
import Products from './Products'
import ProductsSection from '../components/Productssection'
import InfiniteScroll from '../components/InfiniteScroll'


const Home = () => {
  return (
    <div>
        <Hero/>
        <InfiniteScroll/>
       <Products/>
       <ProductsSection/>
    </div>
  )
}

export default Home