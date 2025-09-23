import React from "react";
import Banner from "../Banner/Banner";
import products from "../ProductList/ProductList"; // products array
import Cards from "../Cards/Cards";

const CategoryPage = ({ title, bgImage, categories = [] }) => {
  // Filter products based on categories
  const filteredItems =
    categories.includes("All")
      ? products
      : products.filter((item) => categories.includes(item.category));

      const renderProduct =filteredItems.map(product=>{
        return(
          <Cards image={product.image} name={product.name} price={product.price}/>        )
      })

  return (
    <div className="bg-gray-50 min-h-screen">
      <Banner title={title} bgImage={bgImage} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredItems.map((product) => (
            <Cards
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;



