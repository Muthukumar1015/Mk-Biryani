import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/VegItems.css";
import vegBiryaniImg from "../assets/veg-biryani1.jpg";
import paneerTikkaImg from "../assets/veg-biryani2.jpg";
import alooGobiImg from "../assets/veg-biryani3.jpg";
import bainganBhartaImg from "../assets/veg-biryani4.jpg";
import chanaMasalaImg from "../assets/veg-biryani5.jpg";
import dalTadkaImg from "../assets/veg-biryani6.jpg";
import masoorDalImg from "../assets/veg-biryani7.jpg";
import vegetableKormaImg from "../assets/veg-biryani8.jpg";
import malaiKoftaImg from "../assets/veg-biryani9.jpg";
import vegPulaoImg from "../assets/veg-biryani10.jpg";
import gobiManchurianImg  from "../assets/veg-biryani11.jpg";
import stuffedParathaImg from "../assets/veg-biryani12.jpg";


const VegItems = () => {
  const [order, setOrder] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);

 
  const vegItems = [
    {
      id: 1,
      name: "Veg Biryani",
      description: "A delicious blend of basmati rice, vegetables, and aromatic spices.",
      price: 150,
      image: vegBiryaniImg,
    },
    {
      id: 2,
      name: "Paneer Tikka",
      description: "Grilled paneer cubes marinated in yogurt and spices.",
      price: 180,
      image: paneerTikkaImg,
    },
    {
      id: 3,
      name: "Aloo Gobi",
      description: "A dry curry made with potatoes and cauliflower, cooked in Indian spices.",
      price: 120,
      image: alooGobiImg,
    },
    {
      id: 4,
      name: "Baingan Bharta",
      description: "Roasted eggplant mash cooked with tomatoes and spices.",
      price: 140,
      image: bainganBhartaImg,
    },
    {
      id: 5,
      name: "Chana Masala",
      description: "Chickpeas cooked in a spicy and tangy tomato gravy.",
      price: 130,
      image: chanaMasalaImg,
    },
    {
      id: 6,
      name: "Dal Tadka",
      description: "Yellow lentils cooked with spices and topped with a tempering of ghee and cumin.",
      price: 100,
      image: dalTadkaImg,
    },
    {
      id: 7,
      name: "Masoor Dal",
      description: "Red lentils cooked with spices and seasoned with cilantro.",
      price: 110,
      image: masoorDalImg,
    },
    {
      id: 8,
      name: "Vegetable Korma",
      description: "A mix of vegetables cooked in a rich and creamy gravy.",
      price: 160,
      image: vegetableKormaImg,
    },
    {
      id: 9,
      name: "Malai Kofta",
      description: "Soft, deep-fried balls made from paneer and vegetables served in a rich gravy.",
      price: 200,
      image: malaiKoftaImg,
    },
    {
      id: 10,
      name: "Veg Pulao",
      description: "A fragrant rice dish made with a variety of vegetables and mild spices.",
      price: 140,
      image: vegPulaoImg,
    },
    {
      id: 11,
      name: "Gobi Manchurian",
      description: "Golden-fried cauliflower in a tangy, spicy sauce.",
      price: 180,
      image: gobiManchurianImg,  
    },
    {
      id: 12,
      name: "Stuffed Paratha",
      description: "Stuffed flatbread with spiced fillings like paneer or potato.",
      price: 120,
      image: stuffedParathaImg,  
    },
  ];

  const addToOrder = (item) => {
    setOrder((prevOrder) => [...prevOrder, item]);
    setTotalOrder((prevTotal) => prevTotal + item.price);
  };

  return (
    <div className="veg-items">
      <h2>Veg Items</h2>
      <div className="veg-items-list">
        {vegItems.map((item) => (
          <div className="veg-item" key={item.id}>
            <img src={item.image} alt={item.name} className="veg-img" />
            <div className="veg-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">₹{item.price}</p>
              <button onClick={() => addToOrder(item)} className="order-button">
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

export default VegItems;
