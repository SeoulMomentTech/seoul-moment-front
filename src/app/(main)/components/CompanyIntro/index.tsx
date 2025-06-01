"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { EffectFade, Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CompanyIntro() {
  const swiperRef = useRef<SwiperRef | null>(null);

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

  return (
    <Section className={cn("company-intro bg-black")}>
      <div
        className={cn("mx-auto max-w-[1200px] pt-[100px]", "max-xl:px-[20px]")}
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
          className="w-full"
          effect="fade"
          loop
          modules={[EffectFade, Autoplay]}
          ref={swiperRef}
          slidesPerView="auto"
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className="flex justify-end">
              <div className="flex min-h-[600px] w-[400px] flex-col justify-end text-white">
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[32px] font-bold">Title</h3>
                    <p className="text-[18px] text-gray-200">Subtitle</p>
                  </div>
                  <div className="min-h-[155px]">
                    <p className="text-[24px]">
                      “이렇게 브랜드를 하면서도 여전히 생존이고 언제든 문 닫을
                      수 있다고 생각해요. 그렇지만 주어진 상황이 이거라면, ”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-end">
              <div className="flex min-h-[600px] w-[400px] flex-col justify-end text-white">
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[32px] font-bold">Title2</h3>
                    <p className="text-[18px] text-gray-200">Subtitle</p>
                  </div>
                  <div className="min-h-[155px]">
                    <p className="text-[24px]">
                      “이렇게 브랜드를 하면서도 여전히 생존이고 언제든 문 닫을
                      수 있다고 생각해요. 그렇지만 주어진 상황이 이거라면,
                      끝장나게 한번 해보자고 생각하고 있어요.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-end">
              <div className="flex min-h-[600px] w-[400px] flex-col justify-end text-white">
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[32px] font-bold">Titleaa</h3>
                    <p className="text-[18px] text-gray-200">Subtitle</p>
                  </div>
                  <div className="min-h-[155px]">
                    <p className="text-[24px]">
                      “이렇게 브랜드를 하면서도 여전히 생존이고 언제든 문 닫을
                      수 있다고 생각해요. 그렇지만 주어진 상황이 이거라면,
                      끝장나게 한번 해보자고 생각하고 있어요.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
