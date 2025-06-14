"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";
import { EffectFade, Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "@/components/ui/section";
import { cn } from "@/utils/style";
import Card from "./Card";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226610/samples/look-up.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226609/samples/balloons.jpg",
  "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226602/samples/landscapes/girl-urban-view.jpg",
];

function CompanyIntro() {
  const id = useId();
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    if (!swiperRef.current) return;

    const { swiper } = swiperRef.current;
    swiper.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;

    const { swiper } = swiperRef.current;

    swiper.slidePrev();
  };

  const handleSlideChange = useCallback((swiper: SwiperRef["swiper"]) => {
    setActiveIdx(swiper.realIndex);
  }, []);

  return (
    <Section className={cn("company-intro relative bg-black", "h-auto")}>
      {images.map((img, idx) => (
        <Image
          alt=""
          className={cn(
            "scale-90 opacity-0 transition-all duration-500",
            idx === activeIdx && "scale-100 opacity-45",
          )}
          fill
          key={`${id}-${img}-company-intro`}
          objectFit="cover"
          src={img}
        />
      ))}

      <div
        className={cn(
          "relative",
          "mx-auto max-w-[1200px] py-[100px]",
          "max-xl:px-[20px] max-sm:py-[50px]",
        )}
      >
        <div>
          <h2
            className={cn(
              "text-[36px] font-bold text-white",
              "max-md:text-[24px]",
            )}
          >
            Peel the brand
          </h2>
          <p className={cn("text-[18px] text-gray-200", "max-md:text-[16px]")}>
            시작과 성장을 함께하고 있는 브랜드들의 여정을 만나보세요
          </p>
        </div>
        <Swiper
          autoplay={{
            delay: 5000,
          }}
          className="w-full"
          effect="fade"
          loop
          modules={[EffectFade, Autoplay]}
          onSlideChange={handleSlideChange}
          ref={swiperRef}
          slidesPerView="auto"
          spaceBetween={30}
        >
          <SwiperSlide>
            <Card
              description={`“이렇게 브랜드를 하면서도 여전히 생존이고 언제든 문 닫을수 있다고 생각해요. 그렇지만 주어진 상황이 이거라면, ”`}
              subTitle="Subtitle"
              title="Title1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              description={`“이렇게 브랜드를 하면서도 여전히 생존이고 언제든 문 닫을수 있다고 생각해요. 그렇지만 주어진 상황이 이거라면, ”`}
              subTitle="Subtitle"
              title="Title2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              description={`“이렇게 브랜드를 하면서도 여전히 생존이고 언제든 문 닫을수 있다고 생각해요. 그렇지만 주어진 상황이 이거라면, ”`}
              subTitle="Subtitle"
              title="Title3"
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-end">
          <div className="flex w-[400px] gap-[10px] pt-[32px]">
            <button
              className={cn(
                "h-[44px] w-[44px] rounded-[12px] border border-white text-white",
                "flex cursor-pointer items-center justify-center",
              )}
              onClick={handlePrev}
              type="button"
            >
              <ArrowLeft />
            </button>
            <button
              className={cn(
                "h-[44px] w-[44px] rounded-[12px] border border-white text-white",
                "flex cursor-pointer items-center justify-center",
              )}
              onClick={handleNext}
              type="button"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CompanyIntro;
