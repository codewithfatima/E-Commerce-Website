import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './Order.css'; 

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="orders-container">
      <div className="heading">
        <h1>My Orders</h1>
      </div>
      <div className="orders-list">
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className="order-item">
            <div className="order-image">
              <img src={item.image[0]} alt={item.name} />
            </div>
            <div className="order-details">
              <p className="order-name">{item.name}</p>
              <div className="item-price">
                <p>{currency}{item.price}</p>
                <p>Quantity: </p>
                <p>Size: M</p>
              </div>
              <p>Date: <span>25, Jul, 2024</span></p>
            </div>
            <div className="order-status">
              <div className="status-indicator">
                <p className="indicator-circle"></p>
                <p>Ready to Ship</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
