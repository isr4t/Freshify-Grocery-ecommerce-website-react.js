import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts"; // ✅ Fixed import name

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, // ✅ Cleaner than repeating path:'/'
          element: <Home />,
        },
        {
          path: "fruits",
          element: <Fruits />,
        },
        {
          path: "dairy",
          element: <Dairy />,
        },
        {
          path: "seafood",
          element: <SeaFood />,
        },
        {
          path: "allproducts",
          element: <AllProducts />, // ✅ Fixed component name
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
