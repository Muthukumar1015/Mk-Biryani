import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Home.css"
import biryaniImage1 from "../assets/biryani4.jpg";
import biryaniImage2 from "../assets/biryani6.jpg";
import biryaniImage3 from "../assets/biryani7.jpg";

const Home = () => {
  return (
    <div className="home">
      
      <div className="hero-carousel">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={2000} 
          transitionTime={600} 
          emulateTouch 
          showArrows={false} 
          showIndicators={true} 
        >
          <div>
            <img src={biryaniImage1} alt="Authentic Chicken Biryani" />
          </div>
          <div>
            <img src={biryaniImage2} alt="Delicious Mutton Biryani" />
          </div>
          <div>
            <img src={biryaniImage3} alt="Vegetarian Biryani Delight" />
          </div>
        </Carousel>
      </div>

      
      <section className="about-section">
        <h1>Welcome to Biryani Bliss</h1>
        <p>
          Indulge in our expertly crafted biryani, prepared with fragrant basmati
          rice, flavorful spices, and a dash of love. Experience a culinary
          journey through the finest biryani recipes, served fresh and
          delicious.
        </p>
        <p>
          Whether you prefer the classic chicken biryani, the royal mutton biryani,
          or a zesty vegetarian option, we have something for every palate.
        </p>
      </section>
    </div>
  );
};

export default Home;
