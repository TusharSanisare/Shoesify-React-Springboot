import React, { useEffect, useState } from "react";
import HorizontalScrollContainer from "./HorizontalScrollContainer";

const SuperDealProductsContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products/category?id=1")
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  // if (productList.length > 0) {
  //   console.log(productList);
  // }

  return (
    <>
      <section className="py-4 px-2 mx-auto max-w-6xl sm:py-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Super Hit Deals
          </h2>
          <a
            href="#"
            className="block pb-1 mt-2 text-base font-black text-blue-600 border-b border-transparent hover:text-blue-800"
          >
            View more <i className="ri-arrow-right-up-line"></i>
          </a>
        </div>
        <HorizontalScrollContainer productList={productList} />
      </section>
    </>
  );
};

export default SuperDealProductsContainer;
