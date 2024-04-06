import React, { useEffect, useState } from "react";
import LoadingState from "./LoadingState";

const ProductCategoryGallery = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true); // Adding loading state initialy its true means data is loading , if its false means data loaded

  useEffect(() => {
    fetch("http://localhost:8080/categorys")
      .then((response) => response.json())
      .then((data) => {
        setCategoryList(data);
        console.log(categoryList.length);
        if (categoryList) {
          setLoading(false); // Setting loading to false when data is fetched
        }
      })
      .catch((error) => {
        console.error("Error fetching category list:", error);
      });
  }, []);

  return (
    <>
      <section className={`bg-white my-8 ${loading ? "animate-pulse" : ""}`}>
        <div className="py-4 px-2 mx-auto max-w-6xl sm:py-4 lg:px-6">
          <h2 className="mb-8 mr-10 text-4xl font-bold leading-none md:text-5xl">
            Top Selling Categorie's
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={loading ? "" : categoryList[0].category_image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {loading ? "Loading..." : categoryList[0].category_name}
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src={loading ? "" : categoryList[1].category_image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {loading ? "Loading..." : categoryList[1].category_name}
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40"
                >
                  <img
                    src={loading ? "" : categoryList[2].category_image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    {loading ? "Loading..." : categoryList[2].category_name}
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40"
                >
                  <img
                    src={loading ? "" : categoryList[3].category_image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    {loading ? "Loading..." : categoryList[3].category_name}
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={loading ? "" : categoryList[4].category_image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {loading ? "Loading..." : categoryList[4].category_name}
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // Working UI with dummy data
  // return (
  //   <>
  //     <section className="bg-white my-8">
  //       <div className="py-4 px-2 mx-auto max-w-6xl sm:py-4 lg:px-6">
  //         <h2 className="mb-8 mr-10 text-4xl font-bold leading-none md:text-5xl">
  //           Top Selling Categorie's
  //         </h2>
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
  //           <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
  //             <a
  //               href=""
  //               className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40 flex-grow"
  //             >
  //               <img
  //                 src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg"
  //                 alt=""
  //                 className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
  //               />
  //               <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
  //               <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
  //                 Sneaker's
  //               </h3>
  //             </a>
  //           </div>
  //           <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
  //             <a
  //               href=""
  //               className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40 mb-4"
  //             >
  //               <img
  //                 src="https://i.pinimg.com/originals/29/74/f9/2974f98a92a72b9afffa4e1275beef96.jpg"
  //                 alt=""
  //                 className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
  //               />
  //               <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
  //               <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
  //                 Sport's
  //               </h3>
  //             </a>
  //             <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
  //               <a
  //                 href=""
  //                 className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40"
  //               >
  //                 <img
  //                   src="https://www.hypephotography.co.uk/img-get2/I00008MdPoVtQ45A/fit=1000x750/Nike-Red.jpg"
  //                   alt=""
  //                   className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
  //                 />
  //                 <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
  //                 <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
  //                   Gym
  //                 </h3>
  //               </a>
  //               <a
  //                 href=""
  //                 className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40"
  //               >
  //                 <img
  //                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUxA-EA3NO1K_ttTbT8DU42GLHeOz8TxzfgCUjk9VIUSu_5jm_aPMl-ThU9OE-CUWoHo&usqp=CAU"
  //                   alt=""
  //                   className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
  //                 />
  //                 <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
  //                 <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
  //                   Boot's
  //                 </h3>
  //               </a>
  //             </div>
  //           </div>
  //           <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
  //             <a
  //               href=""
  //               className="group relative flex flex-col overflow-hidden rounded-sm px-4 pb-4 pt-40 flex-grow"
  //             >
  //               <img
  //                 src="https://cdn.staticans.com/live/image/catalog/brandstore/ruosh/CatBanner/FormalCat.jpg"
  //                 alt=""
  //                 className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
  //               />
  //               <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
  //               <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
  //                 Men's Formal
  //               </h3>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
};

export default ProductCategoryGallery;
