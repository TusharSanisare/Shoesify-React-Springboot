import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full py-10 flex items-center justify-center bg-gray-200">
        <div className="md:w-2/3 w-full px-4  flex flex-col">
          <div className="w-full text-5xl font-bold">
            <h1 className="w-full md:w-2/3 text-gray-700">
              How can we help you. get in touch
            </h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between">
            <p className="w-full md:w-2/3 text-gray-600">
              To ensure that all Wikipedia content is verifiable, anyone may
              question an uncited claim. If your work has been tagged
            </p>
            <div className="w-44 pt-6 md:pt-0">
              <a className="bg-black justify-center text-white text-center rounded-lg shadow px-10 py-3 flex items-center">
                Contact US
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-20 mb-5 flex-row justify-between">
              <div className="">
                <h1 className="text-3xl">Shoesify</h1>
              </div>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase">
                About
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase">
                Services
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase">
                Why us
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase">
                Contact
              </a>
              <div className="flex flex-row space-x-8 items-center justify-between">
                <a className="text-2xl">
                  <i className="ri-facebook-box-fill"></i>
                </a>
                <a className="text-2xl">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a className="text-2xl">
                  <i className="ri-twitter-fill"></i>
                </a>
                <a className="text-2xl">
                  <i className="ri-discord-fill"></i>
                </a>
              </div>
            </div>
            <hr className="border-gray-600" />
            <p className="w-full text-center my-5 text-black">
              Copyright © 2020 Besnik Creative
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
