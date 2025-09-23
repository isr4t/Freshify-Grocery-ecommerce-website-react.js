import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgSeaFood from "../../assets/seafood-banner.jpg"; // ✅ Make sure this file exists

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="Meat & Seafood" bgImage={BgSeaFood} categories={['Meat & SeaFood','Meat']} />
    </div>
  );
};

export default SeaFood;

