import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NonVegItems.css";


import chickenBiryaniImg from "../assets/non-veg-biryani1.jpg";
import muttonKormaImg from "../assets/non-veg-biryani2.jpg";
import butterChickenImg from "../assets/non-veg-biryani3.jpg";
import chickenTikkaImg from "../assets/non-veg-biryani4.jpg";
import tandooriChickenImg from "../assets/non-veg-biryani5.jpg";
import fishCurryImg from "../assets/non-veg-biryani6.jpg";
import chickenShawarmaImg from "../assets/non-veg-biryani7.jpg";
import lambRoganJoshImg from "../assets/non-veg-biryani8.jpg";
import prawnMasalaImg from "../assets/non-veg-biryani9.jpg";
import muttonSeekhKebabImg from "../assets/non-veg-biryani10.jpg";
import ChickenmalaitikkaImg from "../assets/non-veg-biryani11.jpg";
import MuttonshankcurryImg from "../assets/non-veg-biryani12.jpg";


const NonVegItems = () => {
  const [order, setOrder] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);

 
  const nonVegItems = [
    {
      id: 1,
      name: "Chicken Biryani",
      description: "A flavorful biryani made with tender chicken pieces and aromatic spices.",
      price: 250,
      image: chickenBiryaniImg,
    },
    {
      id: 2,
      name: "Mutton Korma",
      description: "Succulent mutton cooked in a rich and creamy gravy.",
      price: 350,
      image: muttonKormaImg,
    },
    {
      id: 3,
      name: "Butter Chicken",
      description: "A creamy chicken curry made with a blend of spices and butter.",
      price: 280,
      image: butterChickenImg,
    },
    {
      id: 4,
      name: "Chicken Tikka",
      description: "Marinated chicken pieces grilled to perfection with aromatic spices.",
      price: 200,
      image: chickenTikkaImg,
    },
    {
      id: 5,
      name: "Tandoori Chicken",
      description: "Chicken marinated in yogurt and spices, then cooked in a traditional tandoor.",
      price: 220,
      image: tandooriChickenImg,
    },
    {
      id: 6,
      name: "Fish Curry",
      description: "A flavorful fish curry made with fresh fish and a mix of spices.",
      price: 240,
      image: fishCurryImg,
    },
    {
      id: 7,
      name: "Chicken Shawarma",
      description: "Shawarma with tender chicken, seasoned with Mediterranean spices.",
      price: 180,
      image: chickenShawarmaImg,
    },
    {
      id: 8,
      name: "Lamb Rogan Josh",
      description: "Tender lamb cooked in a rich, spicy gravy.",
      price: 320,
      image: lambRoganJoshImg,
    },
    {
      id: 9,
      name: "Prawn Masala",
      description: "Prawns cooked in a spicy, tangy tomato-based gravy.",
      price: 280,
      image: prawnMasalaImg,
    },
    {
      id: 10,
      name: "Mutton Seekh Kebab",
      description: "Grilled minced mutton kebabs made with spices.",
      price: 240,
      image: muttonSeekhKebabImg,
    },
    {
      id: 11,
      name: "Chicken Malai Tikka",
      description: "Tender chicken pieces marinated in a creamy yogurt sauce, grilled to perfection.",
      price: 270,
      image: ChickenmalaitikkaImg, 
    },
    {
      id: 12,
      name: "Mutton Shank Curry",
      description: "A rich, slow-cooked curry made with tender mutton shanks, simmered in aromatic spices and herbs.",
      price: 350,
      image: MuttonshankcurryImg, 
    },
  ];

  const addToOrder = (item) => {
    setOrder((prevOrder) => [...prevOrder, item]);
    setTotalOrder((prevTotal) => prevTotal + item.price);
  };

  return (
    <div className="non-veg-items">
      <h2>Non-Veg Items</h2>
      <div className="non-veg-items-list">
        {nonVegItems.map((item) => (
          <div className="non-veg-item" key={item.id}>
            <img src={item.image} alt={item.name} className="non-veg-img" />
            <div className="non-veg-info">
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

export default NonVegItems;
