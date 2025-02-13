import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo1.jpg"; 
import { FaHome, FaInfoCircle, FaCarrot, FaDrumstickBite, FaHamburger, FaPhone, FaShoppingCart } from "react-icons/fa"; 
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  
  const handleLinkClick = (link) => {
    setIsLoading(true); 
    setTimeout(() => {
      setIsLoading(false); 
      navigate(link); 
    }, 1000); 
  };

  return (
    <header className="header">
      <nav className="navbar">
       
        <div className="navbar-left">
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <div className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
            <Link to="#" onClick={() => handleLinkClick("/Home")} className="nav-item">
              <FaHome className="nav-icon" />
              <span className="nav-text">Home</span>
            </Link>
            <Link to="#" onClick={() => handleLinkClick("/aboutus")} className="nav-item">
              <FaInfoCircle className="nav-icon" />
              <span className="nav-text">About Us</span>
            </Link>
            <Link to="#" onClick={() => handleLinkClick("/veg-items")} className="nav-item">
              <FaCarrot className="nav-icon" />
              <span className="nav-text">Veg Items</span>
            </Link>
            <Link to="#" onClick={() => handleLinkClick("/non-veg-items")} className="nav-item">
              <FaDrumstickBite className="nav-icon" />
              <span className="nav-text">Non-Veg Items</span>
            </Link>
            <Link to="#" onClick={() => handleLinkClick("/side-dish")} className="nav-item">
              <FaHamburger className="nav-icon" />
              <span className="nav-text">Side Dish</span>
            </Link>
            <Link to="#" onClick={() => handleLinkClick("/contactus")} className="nav-item">
              <FaPhone className="nav-icon" />
              <span className="nav-text">Contact Us</span>
            </Link>
            <Link to="#" onClick={() => handleLinkClick("/Checkout")} className="nav-item">
              <FaShoppingCart className="nav-icon" />
              <span className="nav-text">Checkout</span>
            </Link>
          </div>
        </div>

       
        <div className="navbar-right">
  <a href="/Home.js">
    <img src={logo} alt="Restaurant Logo" className="logo" />
  </a>
</div>

      </nav>

      {isLoading && (
  <div class="loading-overlay">
  <div class="boxes-container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
   
  </div>
 
</div>


)}

    </header>
  );
};

export default Header;
