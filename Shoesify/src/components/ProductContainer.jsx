import React, { useEffect, useState } from "react";
import ShoeCard from "./ShoeCard";
import { useParams } from "react-router-dom";

const ProductContainer = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/products/category?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
        if (productList) {
          setLoading(false); // Setting loading to false when data is fetched
        }
      })
      .catch((error) => {
        console.error("Error fetching category list : ", error);
      });
  }, []);

  return (
    <>
      <div className={`bg-white my-8 flex ${loading ? "animate-pulse" : ""}`}>
        <div className="w-1/4 h-screen bg-gray-100 sticky top-0 p-4">
          <h2 className="text-lg font-bold mb-4">Navigation</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                {id}
              </a>
            </li>
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
          {/* <ShoeCard /> */}
          {productList.length > 0 ? "" : "Loading..."}
          {productList.map((product) => (
            <ShoeCard
              key={product.productId}
              productId={product.productId}
              offer={product.offer}
              image={product.imageUrls[0]}
              name={product.name}
              rating={product.rating}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
