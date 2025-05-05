import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import cartIcon from '../assets/frontend_assets/cart_icon.png';
import profileIcon from '../assets/frontend_assets/profile_icon.png';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useContext(ShopContext);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" />
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {[
          { path: '/', label: 'Home' },
          { path: '/about', label: 'About' },
          { path: '/collection', label: 'Collection' },
          { path: '/contact', label: 'Contact' },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'navbar-links active-link' : 'navbar-links'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="navbar-icons">
        {/* Dark Mode Toggle */}
        <button className="bte" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
          {isDarkMode ? (
            <i className="fas fa-sun" style={{ color: 'yellow', fontSize: '24px' }}></i>
          ) : (
            <i className="fas fa-moon" style={{ color: 'white', fontSize: '24px' }}></i>
          )}
        </button>

        {/* Profile */}
        <div className="profile-menu-container">
          <Link to="/login">
            <img src={profileIcon} alt="Profile" className="profile-icon" />
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <p className="dropdown-item">Profile</p>
              <p className="dropdown-item">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/card" className="cart">
          <img src={cartIcon} alt="Cart" />
          <p className="count">{getCartCount()}</p>
        </Link>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle Navigation">
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
