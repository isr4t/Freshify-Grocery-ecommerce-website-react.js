import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
      <Navbar />        {/* ✅ Top navigation */}
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
          {/* ✅ Footer at the bottom */}
    </div>
  );
};

export default Home;

