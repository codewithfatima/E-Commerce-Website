import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import './newsletter.css'


const NewsLetter = () => {

  const onSubmitHandler = (event) =>{
    event.preventDefault();
  }
  return (
    <>
    <div>
          <h2 className='hea'> OUR POLICY</h2>
    <div className='contents'>
        <div className='policy-des'>
            <img src={assets.exchange_icon}  className='image' alt="" />
            <p className='headings'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer Hassle free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon}  className='image' alt="" />
            <p className='headings'>7 days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy </p>
        </div>
        <div>
            <img src={assets.support_img}  className='image' alt="" />
            <p className='headings'>Best Customer Support</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div>
        </div>

{/* Subscribe */}

       <div className="Subscribe">
        <h3>Subscribe now & get 20% off</h3>
        <div className="Suscribe_content">
         <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</p>
        </div>
        <form  onSubmit={onSubmitHandler} className="input">
        <input type="text" className="input_feild" placeholder='Enter your email' id="" />
        <button className='btn'>SUBSCRIBE</button>
        </form>
       </div>
</div>
 </>   
  )
}

export default NewsLetter