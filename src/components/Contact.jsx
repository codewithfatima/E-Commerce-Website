import React from 'react';
import ContactImg from '../assets/frontend_assets/contact_img.png';
import './contact.css';
import Title from './Title';

const Contact = () => {
  return (

  
    <div className="contact-container">
      <h2 className='title'> CONTACT US </h2>

      <div className="contact-content">
        <img className="contact-img" src={ContactImg} alt="About" />

        <div className="contact-info-section">
          <div>
            <p className="contact-info-title">Our Store</p>
            <p className="contact-info-text">
              453019 Wins Station <br /> Suite Washington, USA
            </p>
            <br />
          </div>
          <div>
            <p className="contact-info-text">
              Tel: +21 8526 8963 <br /> Email: contact@gmail.com
            </p>
          </div>
          <div>
            <p className="contact-info-title">Careers at Forever</p>
            <p className="contact-info-titles">
              Learn more about our teams and job openings
            </p>
            <button className="contact-button">Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
