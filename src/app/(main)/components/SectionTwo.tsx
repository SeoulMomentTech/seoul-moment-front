"use client";

import { useRef } from "react";
import { EffectCoverflow } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface Props {
  className?: string;
}

export default function Section2({ className }: Props) {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleClick = (index: number) => {
    if (!swiperRef.current) return;

    const { swiper } = swiperRef.current;
    swiper.slideToLoop(index, 750);
  };

  return (
    <Section
      className={cn(
        "section-2 relative mx-auto flex max-w-[2200px] flex-col items-center justify-center gap-[52px] py-15",
        "max-lg:py-0",
        className,
      )}
    >
      <div className="px-[8px]">
        <h2
          className={cn(
            "text-[50px] font-bold",
            "max-xl:text-[40px] max-lg:text-center max-md:break-keep max-sm:text-[28px]",
          )}
        >
          물음표를 넘어서면 브랜드가 시작되죠
        </h2>
      </div>
      <Swiper
        centeredSlides
        className="w-full"
        coverflowEffect={{
          rotate: 0,
          depth: 200,
          stretch: -45,
          modifier: 1,
          slideShadows: false,
        }}
        effect="coverflow"
        loop
        loopAdditionalSlides={1}
        modules={[EffectCoverflow]}
        ref={swiperRef}
        slidesPerView="auto"
      >
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((i, index) => {
          return (
            <SwiperSlide
              className={cn(
                "mx-[10px] min-h-[400px]! w-[30vw]! rounded-[12px]",
                "max-md:min-h-[200px]! max-md:w-[40vw]!",
              )}
              key={`card-${index + 1}`}
              onClick={() => handleClick(index)}
            >
              <div
                className={cn(
                  "relative min-h-[260px]! w-[30vw]! cursor-pointer rounded-[12px] border-amber-200 bg-amber-400",
                  "max-md:min-h-[200px]! max-md:w-[40vw]!",
                )}
              >
                Slide {index}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
}
