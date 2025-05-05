import React, { useContext, useState, useEffect } from 'react'; 
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';
import './card.css';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from './CartTotal';

const Card = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]); 

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

 
  

  
  return (
    <div className="cart-container">
      <h1 className="cart-title">
        <span>YOUR</span> CART
      </h1>

      <div>
        {cartData.length > 0 ? (
          cartData.map((itemData, index) => {
            const productData = products.find(product => product._id === itemData._id);
            return (
              <div key={index} className="product-item">
                <div className="product-details">
                  <img className="product-image" src={productData.image[0]} alt="" />
                  <div>
                    <p className="product-name">{productData.name}</p>
                    <div className="product-info">
                      <p>{currency}{productData.price}</p>
                      <p className="size-tag">{itemData.size}</p>
                    </div>
                  </div>
                </div>
                <input 
                  className="quantity-input"
                  type="number" 
                  min={1} 
                  value={itemData.quantity}
                  onChange={(e) => updateQuantity(itemData._id, itemData.size, parseInt(e.target.value))}
                />
                <img
                  className="remove-icon"
                  src={assets.bin_icon} 
                  alt="Remove item"
                  // onClick={() => updateQuantity(item._id, item.size, 0)}
                  onClick={() => updateQuantity(itemData._id, itemData.size, 0)}

                />
              </div>
            );
          })
        ) : (
          <p className="no-products">
            No Products added to cart...
          </p>
        )}
      </div>
       <div className= 'content flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
           </div>
        </div>
    </div>
  );
};

export default Card;
