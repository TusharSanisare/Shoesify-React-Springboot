import React from "react";
import { Link } from "react-router-dom";

const ShoeCard = ({ productId, offer, image, name, rating, price }) => {
  // offer = 50;
  image =
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYscie_ywcbvGR3GBtZrPnu-aIintXPXBvsUtgnZOK9JSkg93x9eNRUBDUBnweq3_jbX6ddRQT4xuFIrThcZy5FJq3GDFExyZlbQrtVTNlTu_Dv4FM4LA8&usqp=CAE";
  // name = "Bold-Series B1 Sport shoe ";
  // rating = 4.5;
  // price = 4300;

  return (
    <>
      <div
        className={`${
          image ? "" : "animate-pulse bg-gray-200"
        }relative mb-9  w-full max-w-xs overflow-hidden rounded-sm shadow-md border border-gray-300 `}
      >
        <Link to={`product/${productId}`} className=" bg-gray-300 ">
          <img
            className="h-60 w-full rounded-t-sm object-cover border"
            src={image}
            alt={image}
          />
        </Link>
        {/* offers  */}
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
          {offer + "%"} OFF
        </span>
        {/* Heart / Save to favorites */}
        <span className="absolute top-0 right-0  m-1 border-5xl bg-white fles items-center justify-center rounded-3xl ">
          {<i className="ri-heart-line text-xl p-1 text-red-600"></i>}
          {/* {<i className="ri-heart-fill text-xl text-red-600"></i>} */}
        </span>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-slate-900">
              {name}
            </h5>
          </a>
          <div className="mt-2.5 mb-5 flex items-center">
            <span className="flex items-center justify-center mr-2 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
              <span className="text-sm text-white mx-1">{rating}</span>
              <i className="ri-star-fill text-sm text-white "></i>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p>
              <span className="text-2xl font-bold text-slate-900 mr-2">
                {"₹" + Math.floor((price / 100) * (100 - offer))}
              </span>
              <span className="text-md text-slate-900 line-through">
                {"₹" + price}
              </span>
            </p>
            <a
              href="#"
              className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <i className="ri-shopping-cart-2-line text-lg mr-1 text-white"></i>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
