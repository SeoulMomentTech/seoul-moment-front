"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

interface Props {
  className?: string;
}

const CONTENTS = {
  word1: "MAKE",
  word2: "YOUR",
  word3: "SEOUL",
  word4: "HERE",
};

const styleMap = {
  base: "relative h-[150px] rounded-lg opacity-100 transition-all duration-700 max-xl:h-[80px] max-md:h-[45px] max-md:hidden ",
  word: "inline-block max-md:text-[50px] max-sm:text-[40px]",
  // hover: "max-xl:hover:w-[160px] hover:w-[300px]",
};

export default function HeroSlogan({ className }: Props) {
  const [active, setActive] = useState<number | null>(null);

  useGSAP(() => {
    gsap.timeline().from(".section-one div", {
      duration: 1,
      opacity: 0,
      ease: "power4",
    });
    gsap.from("span", {
      duration: 1.5,
      yPercent: 100,
      opacity: 0,
      ease: "power4",
      stagger: 0.01,
    });
  });

  const handleMouseEnter = (idx: number) => () => {
    if (idx !== 0 && idx !== 3) return;

    setActive(idx);
  };

  return (
    <Section
      className={cn(
        "section-one flex flex-col items-center justify-center",
        "pb-[72px] max-md:pb-0",
        className,
      )}
    >
      <div
        className={cn(
          "contents text-[10rem] leading-none font-bold",
          "max-xl:text-[5rem]",
        )}
      >
        <div className="flex overflow-hidden text-center">
          {CONTENTS["word1"].split("").map((w, idx) => (
            <span className={styleMap.word} key={`word1-${w}-${idx + 1}`}>
              {w}
            </span>
          ))}
          <span className={cn("w-[42px]", "max-md:w-[20px]")} />
          {CONTENTS["word2"].split("").map((w, idx) => (
            <span className={styleMap.word} key={`word2-${w}-${idx + 1}`}>
              {w}
            </span>
          ))}
        </div>
        <div className="h-[12px]" />
        <div className="flex items-center overflow-hidden text-center">
          {CONTENTS["word3"].split("").map((w, idx) => (
            <div
              className={cn("flex items-center")}
              key={`word3-${w}-${idx + 1}`}
              onMouseEnter={handleMouseEnter(idx)}
            >
              <span className={styleMap.word}>{w}</span>
              {(idx === 0 || idx === 3) && (
                <div
                  className={cn(
                    "video-container",
                    styleMap.base,
                    (idx == 0 || idx === 3) && "w-0",
                    idx === active &&
                      "mx-1 w-[150px] scale-100 bg-amber-200 hover:opacity-100 max-xl:w-[80px] max-xl:hover:w-[160px] max-md:w-[45px]",
                  )}
                />
              )}
            </div>
          ))}
          <span className={cn("w-[42px]", "max-md:w-[20px]")} />
          {CONTENTS["word4"].split("").map((w, idx) => (
            <div
              className={cn("flex items-center")}
              key={`word3-${w}-${idx + 1}`}
              onMouseEnter={handleMouseEnter(idx)}
            >
              <span className={styleMap.word}>{w}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
