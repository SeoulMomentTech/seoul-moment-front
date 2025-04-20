"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

interface Props {
  className?: string;
}

export default function SectionFour({ className }: Props) {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".section-four",
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
    <Section className={cn("section-four flex flex-col", className)}>
      <div className="content-box flex h-full w-full flex-col rounded-t-[100px] bg-white py-[100px]" />
    </Section>
  );
}
