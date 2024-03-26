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
              <option>all categories</option>
              <option>all categories</option>
              <option>all categories</option>
              <option>all categories</option>
              <option>all categories</option>
              <option>all categories</option>
              <option>all categories</option>
            </select>
            <input
              className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
              type="text"
              placeholder="I'm searching for ..."
            />
            <i className="ml-auto px-4 text-gray-500 text-2xl ri-search-line"></i>
          </div>

          {/* SignUp Login Buttons */}
          {/* <div className="ml-auto md:w-48 hidden sm:flex flex-row gap-2 place-items-end">
            <button class="bg-transparent text-gray-800 hover:text-black font-semibold py-2 px-4 border hover:border-black border-gray-800 rounded">
              SignUp
            </button>
            <button class="bg-transparent text-gray-800 hover:text-black font-semibold py-2 px-4 border hover:border-black border-gray-800 rounded">
              Login
            </button>
          </div> */}
          {/* for logged in user */}
          <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
            <span className="font-semibold text-sm text-gray-400">User</span>
            <span className="font-bold md:text-xl">Rohan paul</span>
          </div>
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
