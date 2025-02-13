import React from "react";
import "../styles/AboutUs.css"; 

const AboutUs = () => {
  
  const reviews = [
    { name: "Sanjay", rating: 4, review: "Fantastic experience, highly recommend!" },
    { name: "LogeshWaren", rating: 5, review: "Great food and excellent service!" },
    { name: "Muthu Kumar", rating: 3, review: "Perfect place for a family gathering. Loved it!" },
  ];

  
  const starRating = 4.5; 
  const hotelDescription = "Our hotel in Tamil Nadu offers a combination of modern amenities, exceptional service, and a luxurious atmosphere, making it the perfect choice for both leisure and business travelers.";
  const specialFoodDescription = "We offer a wide variety of special dishes, including our famous Biryani, South Indian delicacies, and freshly prepared snacks to satisfy all tastes.";

  return (
    <div className="about-us">
      
      <section className="hotel-info">
        <h2>About Our Hotel</h2>
        <p>{hotelDescription}</p>

        <div className="hotel-rating">
          <h3>Star Rating:</h3>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < starRating ? "filled" : "empty"}>★</span>
            ))}
          </div>
          <p>Overall rating: {starRating} stars</p>
        </div>
      </section>

      
      <section className="special-food">
        <h3>Our Special Food</h3>
        <p>{specialFoodDescription}</p>
      </section>

      
      <section className="customer-reviews">
        <h3>Customer Reviews</h3>
        <div className="reviews">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <div className="review-header">
                <p><strong>{review.name}:</strong></p>
                <div className="review-stars">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className={starIndex < review.rating ? "filled" : "empty"}>★</span>
                  ))}
                </div>
              </div>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="location">
        <h3>Our Location</h3>
        <p>Located at Railway Gate, Ariyalur, Tamil Nadu. Explore the rich culture and scenic beauty of the region.</p>
        <a href="https://www.google.com/maps?q=Railway+Gate,+Ariyalur,+Tamil+Nadu" target="_blank" className="location-link">
          View on Map
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
