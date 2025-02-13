import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h3>About Restaurant</h3>
        <p>
          Welcome to our restaurant, where culinary traditions meet modern flavors. Our specialty lies in serving authentic biryani, meticulously prepared using the finest and freshest ingredients to ensure an unforgettable dining experience.
        </p>

      </div>

      <div className="footer-location">
        <h3>Location</h3>
        <p>Railway Gate, Ariyalur</p>
      </div>
      <div className="footer-links">
        <h3>Quick Explore</h3>
        <Link to="/Home">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/veg-items">Veg Items</Link>
        <Link to="/non-veg-items">Non-Veg Items</Link>
        <Link to="/side-dish">Side Dish</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/Checkout">Checkout</Link>
      </div>
      <div className="footer-socials">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link1">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link2">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/__muthukumar_mk" target="_blank" rel="noopener noreferrer" className="social-link3">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link4">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
