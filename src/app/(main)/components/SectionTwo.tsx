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

export default function SectionTwo({ className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function getScrollAmount() {
    const width = ref.current?.scrollWidth ?? 0;
    return -(width - window.innerWidth);
  }

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".section-two",
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
      markers: true,
      invalidateOnRefresh: true,
    });

    return () => {
      trigger.kill();
    };
  });

  return (
    <Section
      className={cn(
        "section-two relative flex items-center overflow-hidden pb-10",
        className,
      )}
    >
      <div
        className="card-box z-[1] ml-[calc(35vw)] flex flex-nowrap items-center gap-12 bg-[inherit] pr-[100vw]"
        ref={ref}
      >
        {data.map((num) => (
          <div
            className={cn(
              "h-[50vh] w-[40vw] rounded-2xl bg-amber-500",
              "cursor-pointer transition-all duration-300",
              "hover:scale-105",
            )}
            key={num}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="absolute left-0 h-[50vh] w-full px-30">
        <p className="relative text-[48px] font-bold">
          SEOUL MOMENT에서
          <br />
          시작하는
          <br />
          브랜드 커머스
        </p>
      </div>
    </Section>
  );
}
