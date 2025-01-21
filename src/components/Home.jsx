import React from 'react'
import Hero from './Hero';
import LatestCollection from './LatestCollection';
import BestSellers from './BestSellers';
import NewsLetter from './NewsLetter';

const Home = () => {
  return (
    <div>
    <Hero />
    <LatestCollection />
    <BestSellers />
    <NewsLetter />
    {/* <Product /> */}

    </div>
  )
}

export default Home