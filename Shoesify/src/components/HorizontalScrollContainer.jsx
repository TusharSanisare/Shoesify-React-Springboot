import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ShoeCard from "./ShoeCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default function HorizontalScrollContainer({ productList }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-[50px]"
      >
        {productList.length > 0 ? "" : "Loading..."}
        {productList.map((product) => (
          <SwiperSlide key={product.productId}>
            <ShoeCard
              productId={product.productId}
              offer={product.offer}
              image={product.imageUrls[0]}
              name={product.name}
              rating={product.rating}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
