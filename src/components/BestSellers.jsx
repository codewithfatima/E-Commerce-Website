import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import './LatestCollectio.css'


const BestSellers = () => {

  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0, 5))
  })

  return (
    <>
      <div clasNmae='container'>
        <div>
          <div className="text">
            <h1>BEST SELLERS</h1>
          <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Fugiat nam error officiis eveniet id. Ea, repellendus doloremque
            qui inventore voluptate nostrum magni asperiores culpa possimus
            perspiciatis nobis mollitia dolores ipsum?
          </p>
          </div>
        </div>
      </div>

      <div className='gridContainer'>
        {Array.isArray(bestSeller) && bestSeller.length > 0 ? (
          bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image} 
              price={item.price}
            />
          ))
        ) : (
          <p>No best sellers available</p>
        )}
      </div>




    </>
  )

}


export default BestSellers;