import React from 'react';
import './Footer.css';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* Left side: Logo and paragraph */}
        <div className="footer-left">
          <img src={assets.logo} alt="Company Logo" className="footer-logo" />
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem expedita laborum dicta neque quis officiis velit voluptatem laudantium nobis sapiente repellat consequuntur.
          </p>
        </div>

        {/* Right side: Two columns */}
        <div className="footer-right">
          <div className="footer-column">
            <p className="heading">COMPANY</p>
            <ul className="nav-links">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-column">
            <p className="heading">GET IN TOUCH</p>
            <ul className="contact-info">
              <li>+1-212-569-895</li>
              <li>contact@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <hr />
        <p className="copyright">
          © 2024 Fatima Naeem – All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
