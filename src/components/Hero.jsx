import React from 'react'
import HeroImg from '../assets/frontend_assets/hero_img.png'
import './Hero.css'
const Hero = () => {
    return (
        <>

            <div className='container'>
                <div className='content'>
                    <div className='text-section'>
                        <p className='text'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular ' style={{ fontWeight: 'bolder', fontSize: '3rem' }}>Latest Arrivals</h1>
                    <div className="flex">
                        <p>SHOP NOW</p>
                    </div>
                </div>

                {/* hero right */}

                <img src={HeroImg} alt="Hero Image" />
            </div>

        </>
    );
}

export default Hero;