import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './placeorder.css'
import CartTotal from './CartTotal';
import { assets } from '../assets/frontend_assets/assets';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const navigate = useNavigate(); // Use useNavigate

  return (
    <div className='prata-regular place-order-container'>
      {/* left side */}
      <div className="place_order left-side">
        <h2 className='prata-regular' > {'DELIVERY'} {'INFORMATION'}</h2>
        <div className="flex">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <div className='email_form'>
          <input style={{ width: '85%' }} type="email" placeholder='Email' />
          <input style={{ width: '85%' }} type="text" placeholder='Street' />
        </div>
        <div className='flex'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='flex'>
          <input type="text" placeholder='ZipCode' />
          <input type="text" placeholder='Country' />
        </div>
        <input style={{ width: '85%' }} type="number" placeholder='Phone' />
      </div>

      {/* right side */}
      <div className="right-side">
        <CartTotal />
        <h3 className='prata-regular' > {'PAYMENT'} {'METHOD'}</h3>
        <div className='payment-container'>
          <div
            onClick={() => setMethod('stripe')}
            className={`payment_types ${method === 'stripe' ? 'selected' : ''}`}
          >
            <p className={`circle ${method === 'stripe' ? 'filled' : ''}`}></p>
            <img src={assets.stripe_logo} alt="Stripe" />
          </div>
          <div
            onClick={() => setMethod('razorpay')}
            className={`payment_types ${method === 'razorpay' ? 'selected' : ''}`}
          >
            <p className={`circle ${method === 'razorpay' ? 'filled' : ''}`}></p>
            <img src={assets.razorpay_logo} alt="Razorpay" />
          </div>
          <div
            onClick={() => setMethod('cash')}
            className={`payment_types ${method === 'cash' ? 'selected' : ''}`}
          >
            <p className={`circle ${method === 'cash' ? 'filled' : ''}`}></p>
            <p className='cash'>CASH ON DELIVERY</p>
          </div>
        </div>
        <div>
          <button className="bte" onClick={() => navigate('/orders')}>PLACE ORDER</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
