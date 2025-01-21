import React from 'react';
import './Footer.css'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div>
        <img src={assets.logo} alt="" />
        <p className='footer_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem expedita laborum dicta neque quis officiis velit voluptatem laudantium nobis sapiente repellat consequuntur, qui fugiat autem iusto! Possimus reiciendis hic fuga cumque.</p>
      </div>
     
     <div>
      <p className='heading'>COMPANY</p>
      <ul className='nav-links'>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
      </ul>
     </div>

      <div className=' footer-content'>
        <p className='heading'>GET IN TOUCH</p>
        <ul>
          <li>+1-212-569-895</li>
          <li>contact@gmail.com</li>
        </ul>
      </div>
    </div>
    
    <div className='footer_content'>
    <hr />
    <p className='copyright'>
      Copyright 2024@ fatimaNaeem - All Right Reserved.
    </p>
  </div>
  </>
  )
}

export default Footer