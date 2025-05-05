import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import './LatestCollectio.css';

const BestSellers = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    // Only runs when `products` changes (e.g., on first load or after updates)
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);  // Adding products as a dependency to re-run when it changes

  return (
    <>
      <div className="containerr">
        <div>
        <div className='texts'>
        <h1>Best Collection</h1>
        <p className='description'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nam error officiis eveniet id. Ea, repellendus doloremque qui inventore voluptate nostrum magni asperiores culpa possimus perspiciatis nobis mollitia dolores ipsum?
        </p>
      </div>
        </div>
      </div>

      <div className="gridContainer">
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
  );
};

export default BestSellers;
