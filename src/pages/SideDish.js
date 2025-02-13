import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SideDish.css";


import paneerTikkaImage from '../assets/Sidedish1.jpg'; 
import AlooTikkiImage from '../assets/Sidedish2.jpg';
import SamosaImage from '../assets/Sidedish3.jpg';
import ChanaChaatImage from '../assets/Sidedish4.jpg';
import PavBhajiImage from '../assets/Sidedish5.jpg';
import HaraBharaKebabImage from '../assets/Sidedish6.jpg';
import DhoklaImage from '../assets/Sidedish7.jpg';
import OnionBhajiImage from '../assets/Sidedish8.jpg';
import PakoraImage from '../assets/Sidedish9.jpg';
import GobiManchurianImage from '../assets/Sidedish10.jpg';
import BhelPuriImage from '../assets/Sidedish11.jpg';
import PapadImage from '../assets/Sidedish12.jpg';


const SideDish = () => {
  const [order, setOrder] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);

  
  const sideDishes = [
    {
      id: 1,
      name: "Paneer Tikka",
      description: "A popular Indian appetizer made with paneer cubes.",
      price: 150,
      image: require("../assets/Sidedish1.jpg"), 
    },
    {
      id: 2,
      name: "Aloo Tikki",
      description: "Crispy potato patties stuffed with spiced potatoes.",
      price: 100,
      image: require( "../assets/Sidedish2.jpg"),
    },
    {
      id: 3,
      name: "Samosa",
      description: "Deep-fried pastry filled with spicy potato and peas.",
      price: 50,
      image: require("../assets/Sidedish3.jpg"),
    },
    {
      id: 4,
      name: "Chana Chaat",
      description: "A tangy chickpea salad with spices and chutneys.",
      price: 80,
      image: require("../assets/Sidedish4.jpg"),
    },
    {
      id: 5,
      name: "Pav Bhaji",
      description: "A spicy vegetable mash served with buttered bread rolls.",
      price: 120,
      image: require("../assets/Sidedish5.jpg"),
    },
    {
      id: 6,
      name: "Hara Bhara Kebab",
      description: "A healthy kebab made with spinach, peas, and spices.",
      price: 140,
      image: require("../assets/Sidedish6.jpg"),
    },
    {
      id: 7,
      name: "Dhokla",
      description: "A steamed snack made from rice and chickpea flour.",
      price: 60,
      image: require("../assets/Sidedish7.jpg"),
    },
    {
      id: 8,
      name: "Onion Bhaji",
      description: "Crispy fried onions in a spiced chickpea batter.",
      price: 70,
      image: require("../assets/Sidedish8.jpg"),
    },
    {
      id: 9,
      name: "Pakora",
      description: "Fried fritters made with vegetables and gram flour.",
      price: 90,
      image: require("../assets/Sidedish9.jpg"),
    },
    {
      id: 10,
      name: "Gobi Manchurian",
      description: "Cauliflower florets in a tangy Chinese-style sauce.",
      price: 160,
      image: require("../assets/Sidedish10.jpg"),
    },
    {
      id: 11,
      name: "Bhel Puri",
      description: "A tangy and spicy mix of puffed rice, sev, and chutneys.",
      price: 70,
      image: require("../assets/Sidedish11.jpg"), 
    },
    {
      id: 12,
      name: "Papad",
      description: "Crispy thin wafers served with chutneys or pickles.",
      price: 50,
      image: require("../assets/Sidedish12.jpg"), 
    }
    
  ];

  const addToOrder = (dish) => {
    setOrder((prevOrder) => [...prevOrder, dish]);
    setTotalOrder((prevTotal) => prevTotal + dish.price);
  };

  return (
    <div className="side-dish">
      <h2>Side Dishes</h2>
      <div className="side-dish-items">
        {sideDishes.map((dish) => (
          <div className="side-dish-item" key={dish.id}>
            <img src={dish.image} alt={dish.name} className="side-dish-img" />
            <div className="side-dish-info">
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p className="price">₹{dish.price}</p>
              <button onClick={() => addToOrder(dish)} className="order-button">
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <p>Total Order: ₹{totalOrder}</p>
        <Link to="/Checkout" state={{ order, totalOrder }} className="checkout-button">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default SideDish;
