import React from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import ProductCategoryGallery from "./components/ProductCategoryGallery";
import ProductContainer from "./components/ProductContainer";
import Cart from "./components/Cart";
import TopProducts from "./components/TopProducts";
import HorizontalCardContainer from "./components/HorizontalCardContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductCategoryGallery />
      <TopProducts />
      {/* <ProductDetail /> */}
      <HorizontalCardContainer />
      {/* <Cart /> */}

      {/* ----------------- */}
      {/* <ProductContainer /> */}
      <Footer />
    </div>
  );
};

export default App;
