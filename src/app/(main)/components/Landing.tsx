"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(titleRef.current, {
        color: "#ffffff",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 48%",
          end: "bottom 200%",
          scrub: true,
        },
      });

      gsap.to(titleRef.current, {
        display: "none",
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 40%",
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <Section className="relative h-auto min-h-screen transition-all will-change-[background-color]">
      <div
        className={cn(
          "fixed top-0 right-[50%] left-[50%] z-10",
          "flex h-full items-center justify-center",
        )}
        ref={titleRef}
      >
        <h3
          className={cn(
            "text-[150px] whitespace-pre",
            "max-xl:text-[100px] max-md:text-[80px] max-sm:text-[50px]",
          )}
        >
          <b>Seoul Moment</b>
        </h3>
      </div>
      <Section className="bg-white" />
      <Section className="bg-black" ref={sectionRef} />
    </Section>
  );
}
