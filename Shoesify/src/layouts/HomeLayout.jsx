import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const HomeLayout = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
