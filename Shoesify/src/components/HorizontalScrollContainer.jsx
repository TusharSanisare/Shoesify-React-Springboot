import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ShoeCard from "./ShoeCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default function HorizontalScrollContainer() {
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
        <SwiperSlide>
          <ShoeCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoeCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoeCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoeCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoeCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoeCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoeCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoeCard />
        </SwiperSlide>
        <SwiperSlide>
          <ShoeCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
