import React from "react";

const NewArrivedProductsGallery = () => {
  return (
    <>
      <div className="bg-white mx-auto max-w-6xl py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-3 md:px-6">
          <h2 className="mb-8 mr-10 text-4xl font-bold leading-none md:text-5xl">
            New Arrived Shoes
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 xl:gap-4">
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-sm bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://img0.junaroad.com/uiproducts/20246913/zoom_0-1693241250.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Wines
              </h3>
            </a>
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-sm bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://t3.ftcdn.net/jpg/06/90/67/12/360_F_690671231_E2tI2LljUr3cDVfeQgK4mfiwDD2fVoXq.jpg"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Wines
              </h3>
            </a>
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-sm bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://davince.net/wp-content/uploads/2021/03/For-Blog-All-shot-2-edit-1.jpg"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Wines
              </h3>
            </a>
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-sm bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/r/l/v/-original-imaggcb4jh3mg49a.jpeg?q=90&crop=false"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Wines
              </h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivedProductsGallery;
