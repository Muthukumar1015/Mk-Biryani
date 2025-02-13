import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContactUs.css"; 
import logo2 from "../assets/Logo2.jpg"; 
import mapImage from "../assets/MapImage.jpg"; 

const ContactUs = () => {
  const phone = "9095106520";
  const email = "mkhotel@gmail.com";
  const address = "Railway Gate, Ariyalur";
  const workingHours = "9:00 AM - 10:00 PM";
  const photoUrl = logo2;

  return (
    <div className="contact-us-container">
     
      <div className="contact-header">
        <img src={photoUrl} alt="Restaurant Logo" className="profile-photo" />
        <h2>MK BRIYANI</h2>
        <p className="contact-title">We're Here to Serve You!</p>
      </div>

    
      <div className="contact-details">
        <div className="contact-item">
          <label>Phone:</label>
          <a href={`tel:${phone}`} className="contact-link">
            {phone}
          </a>
        </div>
        <div className="contact-item">
          <label>Email:</label>
          <a href={`mailto:${email}`} className="contact-link">
            {email}
          </a>
        </div>
        <div className="contact-item">
          <label>Address:</label>
          <a
            href={`https://www.google.com/maps/search/?q=${encodeURIComponent(
              address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {address}
          </a>
        </div>
        <div className="contact-item">
          <label>Working Hours:</label>
          <p className="contact-info">{workingHours}</p>
        </div>
      </div>

     
      <div className="contact-map-image">
        <img
          src={mapImage} 
          alt="Restaurant Location"
          className="map-image"
        />
        <p className="map-description">
          Find us at Railway Gate, Ariyalur. Look for our sign on the left side of the road.
        </p>
      </div>

      
      <div className="contact-socials">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a
            href="https://facebook.com/Muthukumar"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/__muthukumar_mk"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/@Muthku59613679"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Twitter
          </a>
        </div>
      </div>

     
      <div className="back-link">
        <Link to="/Home" className="back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
