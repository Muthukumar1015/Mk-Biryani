import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const { order, totalOrder } = location.state || {}; 

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);  
  const [orderPlaced, setOrderPlaced] = useState(false);  

  const handleSendOtp = () => {
    if (phone.length === 10) {
      alert(`OTP sent to ${phone}`);
      setOtpSent(true);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp) {
      setLoading(true);  
      setTimeout(() => {
        setLoading(false);  
        setOrderPlaced(true);  
      }, 1000); 
    } else {
      alert("Please enter the OTP to confirm your order.");
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="order-summary">
        <h3>Your Order:</h3>
        {order && order.length > 0 ? (
          <ul>
            {order.map((item, index) => (
              <li key={index} className="order-item">
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in the order.</p>
        )}
        <p className="total">Total: ₹{totalOrder}</p>
      </div>

      
      {loading && (
        <div className="loading-overlay">
          <div className="boxes-container">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      )}

      
      {orderPlaced && !loading && (
        <div className="order-success">
          <div className="biryani">
            🍚🍗
          </div>
          <h3>Order Placed Successfully!</h3>
        </div>
      )}

      
      {!orderPlaced && (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="form-input"
              rows="4"
              placeholder="Enter your address"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength="10"
              required
              className="form-input"
              placeholder="Enter your phone number"
            />
            <button
              type="button"
              onClick={handleSendOtp}
              className="send-otp-button"
            >
              Send OTP
            </button>
          </div>

          {otpSent && (
            <div className="form-group">
              <label htmlFor="otp" className="form-label">Enter OTP:</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="form-input"
                placeholder="Enter OTP"
              />
            </div>
          )}

          <button type="submit" className="submit-button">
            Confirm Order
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
