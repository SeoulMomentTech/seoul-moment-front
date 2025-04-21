"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

interface Props {
  className?: string;
}

export default function SectionTwo({ className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function getScrollAmount() {
    const height = ref.current?.scrollHeight ?? 0; // scrollHeight를 사용하여 높이 계산
    return -(height - window.innerHeight) * 2.5; // end 지점을 늘리기 위해 곱하기 1.5
  }

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".section-two",
      scroller: document.body,
      scrub: 1,
      pin: true,
      markers: true,
      invalidateOnRefresh: true,
      end: () => `+=${getScrollAmount() * -1}`,
      animation: gsap.to(".image-box", {
        y: getScrollAmount,
        duration: 5.5,
        ease: "none",
      }),
    });
  });

  return (
    <Section className={cn("section-two relative", className)}>
      <div className="image-box absolute flex w-full flex-col" ref={ref}>
        <div className="relative left-[30vw] mt-[100px] ml-[40px] aspect-square w-[200px] rounded-[8px] bg-amber-100" />
        <div className="relative left-[50%] mt-[100px] mr-[40px] aspect-square w-[200px] rounded-[8px] bg-amber-300" />
        <div className="relative left-[30vw] mt-[50px] h-[200px] w-[320px] rounded-[8px] bg-amber-400" />
        <div className="relative left-[50%] mt-[100px] mr-[40px] aspect-square w-[200px] rounded-[8px] bg-amber-300" />
        <div className="relative left-[30vw] mt-[50px] h-[200px] w-[320px] rounded-[8px] bg-amber-400" />
      </div>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center">
        <p className="text-[35px] font-bold text-white">
          모든 시작에는 SEOUL MOMENT가 있습니다.
        </p>
      </div>
    </Section>
  );
}
