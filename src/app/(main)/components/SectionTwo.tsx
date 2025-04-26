"use client";

import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface Props {
  className?: string;
}

export default function Section2({ className }: Props) {
  return (
    <Section
      className={cn(
        "section-2 relative flex flex-col items-center justify-center gap-[52px] py-15",
        className,
      )}
    >
      <h2 className="text-[50px] font-bold">
        물음표를 넘어서면 브랜드가 시작되죠
      </h2>
      <Swiper
        centeredSlides
        className="w-full"
        coverflowEffect={{
          rotate: 0,
          depth: 150,
          stretch: -45,
          modifier: 1,
          slideShadows: false,
        }}
        effect="coverflow"
        loop
        modules={[EffectCoverflow]}
        slidesPerView="auto"
      >
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((i, el) => {
          return (
            <SwiperSlide
              className="relative min-h-[260px]! w-[30vw]! rounded-[12px] border-amber-200 bg-amber-400"
              key={`l-${el + 1}`}
            >
              Slide {el}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
}
