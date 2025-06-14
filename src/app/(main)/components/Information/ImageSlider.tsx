import Image from "next/image";
import { useId } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const id = useId();

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
      {images.map((img) => (
        <SwiperSlide className="h-full text-white" key={`${id}-${img}`}>
          <Image alt="" fill src={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
