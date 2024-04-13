import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true); // Adding loading state initialy its true means data is loading , if its false means data loaded

  useEffect(() => {
    fetch("http://localhost:8080/categorys")
      .then((response) => response.json())
      .then((data) => {
        setCategoryList(data);
        if (categoryList) {
          setLoading(false); // Setting loading to false when data is fetched
        }
      })
      .catch((error) => {
        console.error("Error fetching category list:", error);
      });
  }, []);

  function showDropdown() {
    const drop = document.getElementById("drop");
    const dropIcon = document.getElementById("dropIcon");

    if (drop.classList.contains("hidden")) {
      drop.classList.remove("hidden");
      dropIcon.classList.add("rotate-180");
    } else {
      drop.classList.add("hidden");
      dropIcon.classList.remove("rotate-180");
    }
  }

  return (
    <>
      <header className="bg-gray-100 mb-2 sticky top-0 z-50">
        <div className="container mx-auto p-4 flex items-center">
          {/* logo */}
          <div className="mr-auto md:w-48 flex-shrink-0">
            <Link to={"/"}>
              <h1 className="text-3xl font-bold">Shoesify</h1>
            </Link>
          </div>
          {/* search */}
          <div className="w-full border border-gray-300 max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-white rounded-md hidden xl:flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="bg-transparent font-bold text-sm p-3 mr-4 inline-flex w-full justify-center gap-x-1.5 text-gray-900 "
                  onClick={() => {
                    showDropdown();
                  }}
                >
                  ALL CATEGORIES
                  <i id="dropIcon" className="ri-arrow-down-s-line"></i>
                </button>
              </div>
              <div
                id="drop"
                className="hidden absolute p-5 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="py-1" role="none">
                  {categoryList.map((category) => (
                    <Link
                      key={category.category_id}
                      className="text-gray-700 block px-4 py-2 text-md border-b border-gray-150 hover:bg-gray-100 "
                      to={"view-products/category/" + category.category_id}
                      onClick={() => {
                        showDropdown();
                      }}
                    >
                      {category.category_name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <input
              className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
              type="text"
              placeholder="I'm searching for ..."
            />
            <i className="ml-auto px-4 text-gray-500 text-2xl ri-search-line"></i>
          </div>

          {/* SignUp Login Buttons */}
          {/* <div className="ml-auto md:w-48 hidden sm:flex flex-row gap-2 place-items-end">
            <button className="bg-transparent text-gray-800 hover:text-black font-semibold py-2 px-4 border hover:border-black border-gray-800 rounded">
              SignUp
            </button>
            <button className="bg-transparent text-gray-800 hover:text-black font-semibold py-2 px-4 border hover:border-black border-gray-800 rounded">
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
