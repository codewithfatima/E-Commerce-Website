import React ,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import './carttotal.css'

const CartTotal = () => {
    const { currency,getCartAmount,delivery_fee} = useContext(ShopContext);

    return (
        <div className='w-full'>
        <div className='text-2xl'>
            <h3 className='text-2xl'> CART TOTAL'S </h3>
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className='flex justify-between'>
                <h4>Subtotal</h4>
                <h4>{currency} {getCartAmount()}.00</h4>
            </div>
            <div className='flex justify-between'>
                <h4>Shipping Fee</h4>
                <h4>{currency}{delivery_fee}</h4>
            </div>
            <hr />
            <div className='flex justify-between'>
                <h4>Total</h4>
                <h6>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee} </h6>
            </div>
              <button className='bte ml-18'> Place Order </button>
        </div>
    </div>
    
    )
}

export default CartTotal