import React from "react";
import HorizontalScrollContainer from "./HorizontalScrollContainer";

const SuperDealProductsContainer = () => {
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
        <HorizontalScrollContainer />
      </section>
    </>
  );
};

export default SuperDealProductsContainer;
