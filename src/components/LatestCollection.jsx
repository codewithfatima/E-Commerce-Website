import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';
import { ShopContext } from '../Context/ShopContext'
import './LatestCollectio.css';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);


  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [])



  return (
    <div className='containerr'>
      <div className='texts'>
        <h1>Latest Collection</h1>
        <p className='description'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nam error officiis eveniet id. Ea, repellendus doloremque qui inventore voluptate nostrum magni asperiores culpa possimus perspiciatis nobis mollitia dolores ipsum?
        </p>
      </div>

      <div
        className='gridContainer'>
        {latestProducts.length > 0 ? (
          latestProducts.map((item) => (
            <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default LatestCollection;

