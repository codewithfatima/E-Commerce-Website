import React, { useState , useContext } from 'react';
import cartIcon from '../assets/frontend_assets/cart_icon.png';
import profileIcon from '../assets/frontend_assets/profile_icon.png';
import { Link , NavLink } from 'react-router-dom';
import {ShopContext} from '../Context/ShopContext';
// import { IoIosSearch } from "react-icons/io";
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isOpen , setIsOpen ] = useState(false);
    const { getCartCount } = useContext(ShopContext);


    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    }

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }

    const closeMenu=()=>{
        setIsOpen(false);
    }

    return (

        <>
        <div className='navbar border-b bg-slate-50'>
            <div className="navbar-brand">
                <img src={logo} />
            </div>
        
       
            <ul className={`nav-links ${isOpen ? 'active' : ''} `}>
                <NavLink className={({ isActive }) => isActive ? 'navbar-links active-link' : 'navbar-links'} onClick={closeMenu} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'navbar-links active-link' : 'navbar-links'} onClick={closeMenu} to='/about'>About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'navbar-links active-link' : 'navbar-links'} onClick={closeMenu} to='/collection'>Collection</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'navbar-links active-link' : 'navbar-links'} onClick={closeMenu} to='/contact'>Contact</NavLink>
            </ul>
      
            <div className='search-icon'>
 
                {/* <IoIosSearch /> */}
                <div class="profile-menu-container"> 
                    <Link to='/login'> <img src={profileIcon} alt="profileIcon" class="profile-icon" /> </Link >
                    <div class="dropdown-menu">
                        <div class="dropdown-content">
                            <p class="dropdown-item">Profile</p>
                            <p class="dropdown-item">Orders</p>
                            <p class="dropdown-item">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/card' className='cart'>
                    <img src={cartIcon} alt="cartIcon" />
                    <p className= 'count'>{getCartCount()}</p>
               </Link>
               </div>   
                
            <div>    
                {/* <DarkToggle /> */}
                <button
                    className='bte'
                    onClick={toggleDarkMode}
                    style={{
                        width:'100%',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        padding: '5px',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    {isDarkMode ? (
                        <i className="fas fa-sun" style={{ color: 'yellow', fontSize: '24px' }}></i> // Sun icon for light mode
                    ) : (
                        <i className="fas fa-moon" style={{ color: 'gray', fontSize: '24px' }}></i> // Moon icon for dark mode
                    )}
                </button>
               
                </div>
                    <div className="hamburger" onClick={toggleMenu}>
                      
                      <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
            </div>

            </>
    );
};

export default Navbar;
