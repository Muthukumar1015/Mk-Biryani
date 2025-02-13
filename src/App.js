import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import VegItems from "./pages/VegItems";
import NonVegItems from "./pages/NonVegItems";
import SideDish from "./pages/SideDish";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";


const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};

const App = () => {
  const [order, setOrder] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);

  const addToOrder = (item) => {
    setOrder((prevOrder) => [...prevOrder, item]);
    setTotalOrder((prevTotal) => prevTotal + item.price);
  };

  return (
    <OrderContext.Provider value={{ order, addToOrder, totalOrder }}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/veg-items" element={<VegItems />} />
            <Route path="/non-veg-items" element={<NonVegItems />} />
            <Route path="/side-dish" element={<SideDish />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/checkout" element={<Checkout />} />
 

          </Routes>
        </main>
        <Footer />
      </Router>
    </OrderContext.Provider>
  );
};

export default App;
