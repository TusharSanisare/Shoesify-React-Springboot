import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";
import HomeLayout from "./layouts/HomeLayout";
import { HeroSection } from "./components/HeroSection";
import ProductCategoryGallery from "./components/ProductCategoryGallery";
import TopProducts from "./components/TopProducts";
import HorizontalCardContainer from "./components/HorizontalCardContainer";
import ProductContainer from "./components/ProductContainer";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";

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
            <TopProducts />
            <HorizontalCardContainer />
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
            <HorizontalCardContainer />
            {/* <ProductContainer /> */}
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
