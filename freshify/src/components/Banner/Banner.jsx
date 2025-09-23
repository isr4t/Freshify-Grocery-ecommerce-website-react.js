import React from "react";

const Banner = ({ title, bgImage }) => {
  return (
    <div
      className="w-full h-[60vh] flex justify-center items-center relative bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Title above overlay */}
      <h2 className="text-5xl text-white font-bold  z-10 bg-black/30 p-5 rounded-xl">
        {title}
      </h2>
    </div>
  );
};

export default Banner;

