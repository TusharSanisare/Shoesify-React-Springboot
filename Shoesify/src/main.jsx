import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./App.jsx";

import HomeLayout from "./layouts/HomeLayout";
import HeroSection from "./components/HeroSection";
import ProductCategoryGallery from "./components/ProductCategoryGallery";
import NewArrivedProductsGallery from "./components/NewArrivedProductsGallery";
import ProductContainer from "./components/ProductContainer";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import SuperDealProductsContainer from "./components/SuperDealProductsContainer";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <ProductCategoryGallery />
            <NewArrivedProductsGallery />
            <SuperDealProductsContainer />
          </>
        ),
      },
      {
        path: "cart",
        element: (
          <>
            <Cart />
          </>
        ),
      },
      {
        path: "product/:productId",
        element: (
          <>
            <ProductDetail />
            <SuperDealProductsContainer />
          </>
        ),
      },
      {
        path: "products",
        element: (
          <>
            <ProductContainer />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
