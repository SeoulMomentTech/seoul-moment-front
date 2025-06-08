import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function ImageSlider() {
  return (
    <Swiper
      centeredSlides
      className="aspect-[1/1.15] w-full flex-1"
      initialSlide={0}
      loop
      modules={[Pagination]}
      pagination={true}
      slidesPerView="auto"
    >
      <SwiperSlide className="h-full bg-black text-white">Slide 1</SwiperSlide>
      <SwiperSlide className="h-full bg-black text-white">Slide 2</SwiperSlide>
      <SwiperSlide className="h-full bg-black text-white">Slide 3</SwiperSlide>
    </Swiper>
  );
}
