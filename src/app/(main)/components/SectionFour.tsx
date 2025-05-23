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

const data = [1, 2, 3, 4, 5];

export default function SectionThree({ className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function getScrollAmount() {
    const width = ref.current?.scrollWidth ?? 0;
    return -(width - window.innerWidth);
  }

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".section-three",
      scroller: document.body,
      animation: gsap.to(".card-box", {
        x: getScrollAmount,
        duration: 5.5,
        ease: "none",
      }),
      scrub: 1,
      start: "top 8%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      markers: false,
      invalidateOnRefresh: true,
    });

    return () => {
      trigger.kill();
    };
  });

  return (
    <Section
      className={cn(
        "section-three relative flex items-center overflow-hidden pb-10",
        "max-md:pb-0",
        className,
      )}
    >
      <div className="relative flex h-[520px] w-full bg-[inherit]">
        <div className="absolute left-0 h-[50vh] w-full px-[40px]">
          <p
            className={cn(
              "relative mx-auto max-w-[1440px] text-[40px] font-bold",
              "max-md:text-[30px]",
            )}
          >
            SEOUL MOMENT에서
            <br />
            시작하는
            <br />
            브랜드 커머스
          </p>
        </div>
        <div
          className={cn(
            "card-box z-[1] ml-[calc(50vw)] flex flex-nowrap gap-12 bg-[inherit] pr-[100vw]",
            "max-md:ml-[32px] max-md:items-center max-md:bg-transparent",
          )}
          ref={ref}
        >
          {data.map((num) => (
            <div
              className={cn(
                "h-[50vh] w-[calc(50vw*0.42)] rounded-2xl bg-amber-500",
                "cursor-pointer transition-all duration-500",
                "hover:scale-105",
                "max-xl:aspect-square max-xl:h-[500px] max-xl:w-[50vw]",
                "max-md:h-[200px]",
              )}
              key={num}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
