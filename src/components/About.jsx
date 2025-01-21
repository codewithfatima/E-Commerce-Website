import React from 'react';
import AboutImg from '../assets/frontend_assets/about_img.png';
import './about.css';

const About = () => {
  return (
    <div>
      <section className="image-content-section">
        <div className="image-container">
          <img src={AboutImg} alt="About" style={{width:'60%',marginLeft:'15%' , marginTop:'3rem'}} />
        </div>
        <div className="content-container">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Integer euismod arcu a velit tristique, ac dapibus mauris posuere. Sed sit amet elit vitae orci auctor ultrices.
          <br /> Curabitur lacinia erat ut nisi scelerisque, sit amet dictum ipsum tincidunt. Mauris ultricies malesuada risus, at tempor ligula facilisis at. Proin ac purus sit amet lacus tincidunt pellentesque. <br />
          Curabitur lacinia erat ut nisi scelerisque, sit amet dictum ipsum tincidunt. Mauris ultricies malesuada risus, at tempor ligula facilisis at. Proin ac purus sit amet lacus tincidunt pellentesque. <br />
          Curabitur lacinia erat ut nisi scelerisque, sit amet dictum ipsum tincidunt. Mauris ultricies malesuada risus, at tempor ligula facilisis at. Proin ac purus sit amet lacus tincidunt pellentesque.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About