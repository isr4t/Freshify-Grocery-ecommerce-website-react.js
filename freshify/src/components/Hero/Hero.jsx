import React from "react";
import Grocery from '../../assets/grocery.png'
import Button from "../Button/Button";

const Hero = () => {
  return (
 <section className="min-h-screen max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-8 pt-25">
  {/* Hero content */}
  <div className="w-full md:w-7/12 text-center md:text-left">
    <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full inline-block">
      Export Best Quality...
    </span>
    <h1 className="text-4xl md:text-6xl lg:text-7xl/18 font-bold leading-tight mt-4">
      Testy Organic <br/><span className="text-orange-500">Fruits</span> &{" "}
      <span className="text-orange-500">Veggies</span> <br/>In Your City
    </h1>
    <p className="text-zinc-600 text-base md:text-lg mt-4">
      Bred for a high content of beneficial substances. Our products are all
      fresh and healthy.
    </p>
    <div className="mt-6">
      <Button content="Shop now" />
    </div>
  </div>

  {/* Hero image */}
  <div className="w-full md:w-5/12">
    <img
      src={Grocery}
      alt="hero image"
      className="w-full h-auto object-contain"
    />
  </div>
</section>


  );
};

export default Hero;
