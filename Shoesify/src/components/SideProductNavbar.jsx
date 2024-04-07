import React from "react";
import ShoeCard from "./ShoeCard";

const SideProductNavbar = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 h-screen bg-gray-100 sticky top-0 p-4">
          <h2 className="text-lg font-bold mb-4">Navigation</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-3/4 bg-white p-4 flex flex-wrap justify-evenly">
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
        </div>
      </div>
    </>
  );
};

export default SideProductNavbar;
