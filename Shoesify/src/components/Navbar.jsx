import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-gray-100 mb-2">
        <div className="container mx-auto px-4 py-5 flex items-center">
          {/* logo */}
          <div className="mr-auto md:w-48 flex-shrink-0">
            <h1 className="text-3xl font-bold">Shoesify</h1>
          </div>
          {/* search */}
          <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-white rounded-md hidden xl:flex items-center">
            <select
              className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
              name=""
              id=""
            >
              <option>all categories</option>
            </select>
            <input
              className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
              type="text"
              placeholder="I'm searching for ..."
            />
            <svg
              className="ml-auto h-5 px-4 text-gray-500"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              />
            </svg>
          </div>
          {/* phone number */}
          <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
            <span className="font-semibold text-sm text-gray-400">User</span>
            <span className="font-bold md:text-xl">Rohan paul</span>
          </div>
          {/* buttons */}
          <nav className="contents">
            <ul className="ml-4 xl:w-48 flex items-center justify-end">
              <li className="ml-2 lg:ml-4 relative inline-block">
                <a className="" href="">
                  <i className="ri-user-3-line text-3xl text-gray-600"></i>
                </a>
              </li>
              <li className="ml-2 lg:ml-6 relative inline-block">
                <a className="" href="">
                  <div className="absolute -top-1 -right-3 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-3xl">
                    0
                  </div>
                  <i className="ri-heart-line text-3xl text-gray-600"></i>
                </a>
              </li>
              <li className="ml-4 lg:ml-6 relative inline-block">
                <a className="" href="">
                  <div className="absolute -top-1 -right-3 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-3xl">
                    0
                  </div>
                  <i className="ri-shopping-cart-line text-3xl text-gray-600"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
      </header>
    </>
  );
};

export default Navbar;
