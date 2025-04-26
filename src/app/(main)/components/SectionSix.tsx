"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

interface Props {
  className?: string;
}

export default function SectionFive({ className }: Props) {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".section-five",
      animation: gsap.to(".content-box", {
        css: {
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        },
        duration: 2,
        ease: "none",
      }),
      scrub: 1,
      start: "-50%",
      end: "-50%",
      markers: true,
      invalidateOnRefresh: true,
    });
  });

  return (
    <Section className={cn("section-five flex flex-col", className)}>
      <div
        className={cn(
          "content-box h-full w-full rounded-t-[100px] bg-white py-[100px]",
          "flex flex-col items-center justify-center font-bold",
        )}
      >
        <p className={cn("text-[10rem]", "max-xl:text-[5rem]")}>SEOUL MOMENT</p>
      </div>
    </Section>
  );
}
